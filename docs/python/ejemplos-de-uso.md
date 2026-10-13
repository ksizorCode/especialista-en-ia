# Ejemplos de uso de las bibliotecas

Los siguientes ejemplos ilustran tareas pequeñas y separadas. Instala la biblioteca correspondiente antes de ejecutar cada fragmento. Para Scikit-learn se usa el conjunto de datos de ejemplo Iris; el ejemplo de TensorFlow presupone que `X_train`, `y_train`, `X_test` e `y_test` ya están preparados.

## Pandas: leer, filtrar y resumir un CSV

<img class="library-logo library-logo--section" src="assets/img/Pandas-logo.webp" alt="Logo de Pandas" width="150">

```python
import pandas as pd

df = pd.read_csv("ventas.csv")
df["fecha"] = pd.to_datetime(df["fecha"])
resumen = df.groupby("producto")["importe"].sum().sort_values(ascending=False)
print(resumen.head())
```

## NumPy: normalizar valores

<img class="library-logo library-logo--section" src="assets/img/NumPy-logo.webp" alt="Logo de NumPy" width="120">

```python
import numpy as np

x = np.array([10.0, 12.0, 14.0])
x_normalizado = (x - x.mean()) / x.std()
print(x_normalizado)
```

## Matplotlib: visualizar una serie

<img class="library-logo library-logo--section" src="assets/img/matplotblib-logo.webp" alt="Logo de Matplotlib" width="150">

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [4, 6, 5], marker="o")
ax.set(xlabel="Día", ylabel="Medición", title="Mediciones")
fig.tight_layout()
plt.show()
```

## Scikit-learn: clasificar datos de ejemplo

<img class="library-logo library-logo--section" src="assets/img/Scikit_learn-logo.webp" alt="Logo de Scikit-learn" width="140">

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
modelo = LogisticRegression(max_iter=200)
modelo.fit(X_train, y_train)
print(accuracy_score(y_test, modelo.predict(X_test)))
```

## OpenCV: convertir una imagen a escala de grises

<img class="library-logo library-logo--section" src="assets/img/OpenCV-logo.png" alt="Logo de OpenCV" width="58">

```python
import cv2

imagen = cv2.imread("foto.jpg")
if imagen is None:
    raise FileNotFoundError("No se pudo abrir foto.jpg")
gris = cv2.cvtColor(imagen, cv2.COLOR_BGR2GRAY)
cv2.imwrite("foto_gris.png", gris)
```

## TensorFlow: entrenar una red neuronal pequeña

<img class="library-logo library-logo--section" src="assets/img/TensorFlow-logo.png" alt="Logo de TensorFlow" width="150">

```python
import tensorflow as tf

modelo = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(4,)),
    tf.keras.layers.Dense(8, activation="relu"),
    tf.keras.layers.Dense(1)
])
modelo.compile(optimizer="adam", loss="mse")
modelo.fit(X_train, y_train, epochs=10, validation_split=0.2)
```

## Flujo combinado: preparar, entrenar y visualizar

```python
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

df = pd.read_csv("casas.csv")
X = df[["superficie", "habitaciones"]]
y = df["precio"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
modelo = RandomForestRegressor(random_state=42)
modelo.fit(X_train, y_train)
predicciones = modelo.predict(X_test)
print("MAE:", mean_absolute_error(y_test, predicciones))

fig, ax = plt.subplots()
ax.scatter(y_test, predicciones)
ax.set(xlabel="Precio real", ylabel="Precio predicho")
plt.show()
```

En un proyecto real hay que revisar nulos, tipos, datos categóricos y posibles fugas de información antes de entrenar.
