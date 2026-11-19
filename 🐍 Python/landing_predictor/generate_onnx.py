"""Train a signed arrival-delay model and export it for JavaScript/ONNX Runtime."""

from __future__ import annotations

import argparse
import json
import math
from datetime import datetime
from pathlib import Path
from typing import Any

import numpy as np
import onnx
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import accuracy_score, mean_absolute_error
from sklearn.model_selection import train_test_split
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType


TARGET = "min_retraso"
INPUT_FIELDS = (
    "aerolinea",
    "origen",
    "fecha_vuelo",
    "hora_salida_programada",
    "hora_llegada_programada",
    "duracion_vuelo",
    "temperatura_origen",
    "temperatura_destino",
    "lluvia_origen",
    "lluvia_destino",
    "viento_destino",
    "festivo",
)
CATEGORICAL_FIELDS = ("aerolinea", "origen", "dia_semana")
NUMERIC_FEATURES = (
    "hora_salida_programada_min",
    "hora_llegada_programada_min",
    "duracion_vuelo",
    "temperatura_origen",
    "temperatura_destino",
    "lluvia_origen",
    "lluvia_destino",
    "viento_destino",
    "festivo",
)


def _as_records(data: pd.DataFrame | list[dict[str, Any]]) -> list[dict[str, Any]]:
    if isinstance(data, pd.DataFrame):
        return data.to_dict(orient="records")
    return data


def _parse_time(value: Any, field: str) -> int:
    try:
        parsed = datetime.strptime(str(value).strip(), "%H:%M")
    except ValueError as exc:
        raise ValueError(f"{field} debe tener formato HH:MM; recibido {value!r}") from exc
    return parsed.hour * 60 + parsed.minute


def _finite_number(record: dict[str, Any], field: str) -> float:
    try:
        value = float(record[field])
    except (KeyError, TypeError, ValueError) as exc:
        raise ValueError(f"{field} debe ser un número válido") from exc
    if not math.isfinite(value):
        raise ValueError(f"{field} debe ser un número finito")
    return value


def _normalise_record(record: dict[str, Any]) -> dict[str, Any]:
    missing = [field for field in INPUT_FIELDS if field not in record or pd.isna(record[field])]
    if missing:
        raise ValueError(f"Faltan datos de entrada: {', '.join(missing)}")

    airline = str(record["aerolinea"]).strip()
    origin = str(record["origen"]).strip()
    if not airline or not origin:
        raise ValueError("aerolinea y origen no pueden estar vacíos")
    try:
        flight_date = datetime.strptime(str(record["fecha_vuelo"]).strip(), "%Y-%m-%d")
    except ValueError as exc:
        raise ValueError("fecha_vuelo debe tener formato AAAA-MM-DD") from exc

    numeric = {
        "hora_salida_programada_min": float(
            _parse_time(record["hora_salida_programada"], "hora_salida_programada")
        ),
        "hora_llegada_programada_min": float(
            _parse_time(record["hora_llegada_programada"], "hora_llegada_programada")
        ),
    }
    for field in NUMERIC_FEATURES[2:]:
        numeric[field] = _finite_number(record, field)
    for field in ("lluvia_origen", "lluvia_destino", "festivo"):
        if numeric[field] not in (0.0, 1.0):
            raise ValueError(f"{field} debe ser 0 o 1")

    return {
        "aerolinea": airline,
        "origen": origin,
        "dia_semana": flight_date.strftime("%A"),
        "numeric": numeric,
    }


def load_data(data_path: str | Path) -> pd.DataFrame:
    """Load the source CSV and validate the columns required for training."""
    data = pd.read_csv(data_path)
    required = {*INPUT_FIELDS, TARGET}
    missing = sorted(required.difference(data.columns))
    if missing:
        raise ValueError(f"Faltan columnas necesarias en el CSV: {', '.join(missing)}")
    if data.empty:
        raise ValueError("El CSV no contiene vuelos")
    return data


def build_metadata(data: pd.DataFrame | list[dict[str, Any]]) -> dict[str, Any]:
    """Build the category map and input feature order shared with JavaScript."""
    records = [_normalise_record(record) for record in _as_records(data)]
    categories = {
        field: sorted({record[field] for record in records})
        for field in CATEGORICAL_FIELDS
    }
    feature_order = [
        f"{field}={value}"
        for field in CATEGORICAL_FIELDS
        for value in categories[field]
    ] + list(NUMERIC_FEATURES)
    return {
        "target": TARGET,
        "delay_threshold_minutes": 0,
        "input_fields": list(INPUT_FIELDS),
        "categorical_features": categories,
        "numeric_features": list(NUMERIC_FEATURES),
        "feature_order": feature_order,
    }


def encode_records(
    records: pd.DataFrame | list[dict[str, Any]], metadata: dict[str, Any]
) -> np.ndarray:
    """Encode raw flight dictionaries into the numeric tensor consumed by ONNX."""
    normalised = [_normalise_record(record) for record in _as_records(records)]
    encoded: list[list[float]] = []
    for record in normalised:
        row: dict[str, float] = {}
        for field in CATEGORICAL_FIELDS:
            category = record[field]
            known_categories = metadata["categorical_features"][field]
            if category not in known_categories:
                raise ValueError(
                    f"Categoría desconocida para {field}: {category!r}. "
                    f"Valores admitidos: {', '.join(known_categories)}"
                )
            row[f"{field}={category}"] = 1.0
        row.update(record["numeric"])
        encoded.append([row.get(feature, 0.0) for feature in metadata["feature_order"]])
    return np.asarray(encoded, dtype=np.float32)


def prepare_training_data(
    data: pd.DataFrame, metadata: dict[str, Any]
) -> tuple[np.ndarray, np.ndarray]:
    """Return encoded features and the signed delay target."""
    X = encode_records(data, metadata)
    try:
        y = pd.to_numeric(data[TARGET], errors="raise").to_numpy(dtype=np.float32)
    except (TypeError, ValueError) as exc:
        raise ValueError(f"La columna {TARGET} debe contener minutos numéricos") from exc
    if not np.isfinite(y).all():
        raise ValueError(f"La columna {TARGET} contiene valores vacíos o no finitos")
    return X, y


def create_model() -> RandomForestRegressor:
    return RandomForestRegressor(
        n_estimators=300,
        min_samples_leaf=3,
        max_features=0.8,
        random_state=42,
        n_jobs=1,
    )


def predict_minutes(
    model: RandomForestRegressor,
    metadata: dict[str, Any],
    flight: dict[str, Any],
) -> float:
    """Predict signed arrival minutes: negative early, zero on time, positive late."""
    features = encode_records([flight], metadata)
    return float(model.predict(features)[0])


def predict_flight(
    model: RandomForestRegressor,
    metadata: dict[str, Any],
    flight: dict[str, Any],
) -> dict[str, Any]:
    minutes = predict_minutes(model, metadata, flight)
    status = "con retraso" if minutes > 0 else "adelantado" if minutes < 0 else "puntual"
    return {"minutos_estimados": minutes, "estado": status}


def export_onnx(
    model: RandomForestRegressor,
    metadata: dict[str, Any],
    output_path: str | Path,
) -> tuple[Path, Path]:
    """Export the model and its feature mapping for use without Python."""
    output = Path(output_path).resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    initial_types = [("features", FloatTensorType([None, len(metadata["feature_order"])]))]
    model_onnx = convert_sklearn(model, initial_types=initial_types, target_opset=17)
    onnx.checker.check_model(model_onnx)
    output.write_bytes(model_onnx.SerializeToString())

    metadata_path = output.with_name(f"{output.stem}_metadata.json")
    metadata_path.write_text(
        json.dumps(metadata, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    return output, metadata_path


def evaluate_holdout(data: pd.DataFrame) -> dict[str, float]:
    """Evaluate on a held-out split, then the caller can fit the final model."""
    metadata = build_metadata(data)
    X, y = prepare_training_data(data, metadata)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.25, random_state=42
    )
    model = create_model().fit(X_train, y_train)
    predictions = model.predict(X_test)
    actual_delays = y_test > 0
    predicted_delays = predictions > 0
    return {
        "mae_minutes": float(mean_absolute_error(y_test, predictions)),
        "delay_accuracy": float(accuracy_score(actual_delays, predicted_delays)),
    }


def prompt_for_flight() -> dict[str, Any]:
    """Read the fields needed for one prediction from an interactive terminal."""
    flight: dict[str, Any] = {}
    prompts = (
        ("aerolinea", "Aerolínea (p. ej. IBERIA)"),
        ("origen", "Código IATA de origen (p. ej. MAD)"),
        ("fecha_vuelo", "Fecha (AAAA-MM-DD)"),
        ("hora_salida_programada", "Salida programada (HH:MM)"),
        ("hora_llegada_programada", "Llegada programada (HH:MM)"),
        ("duracion_vuelo", "Duración prevista en minutos"),
        ("temperatura_origen", "Temperatura en origen"),
        ("temperatura_destino", "Temperatura en destino"),
        ("lluvia_origen", "Lluvia en origen (0 o 1)"),
        ("lluvia_destino", "Lluvia en destino (0 o 1)"),
        ("viento_destino", "Viento en destino"),
        ("festivo", "¿Es festivo? (0 o 1)"),
    )
    for field, prompt in prompts:
        flight[field] = input(f"{prompt}: ").strip()
    return flight


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    default_data = Path(__file__).resolve().with_name(
        "vuelos_asturias - vuelos_asturias.csv"
    )
    default_model = Path(__file__).resolve().with_name("retraso_vuelos.onnx")
    parser.add_argument("--data", type=Path, default=default_data, help="Ruta al CSV")
    parser.add_argument(
        "--output", type=Path, default=default_model, help="Ruta del archivo ONNX"
    )
    args = parser.parse_args()

    data = load_data(args.data)
    metrics = evaluate_holdout(data)
    print(f"Vuelos usados: {len(data)}")
    print(f"MAE en minutos (validación): {metrics['mae_minutes']:.2f}")
    print(f"Exactitud retraso/no retraso: {metrics['delay_accuracy']:.1%}")

    metadata = build_metadata(data)
    X, y = prepare_training_data(data, metadata)
    model = create_model().fit(X, y)
    model_path, metadata_path = export_onnx(model, metadata, args.output)
    print(f"Modelo ONNX: {model_path}")
    print(f"Metadatos para JavaScript: {metadata_path}")


if __name__ == "__main__":
    main()
