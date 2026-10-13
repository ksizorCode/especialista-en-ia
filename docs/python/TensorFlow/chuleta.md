# TensorFlow: chuleta

<img class="library-logo library-logo--page" src="../assets/img/TensorFlow-logo.png" alt="Logo de TensorFlow" width="150">

| Uso | Función / clase | Ejemplo corto | Tip |
|---|---|---|---|
| Importar | `tensorflow` | `import tensorflow as tf` | Keras se usa como `tf.keras`. |
| Modelo secuencial | `Sequential` | `m = tf.keras.Sequential([...])` | Adecuado cuando las capas se conectan en una secuencia lineal. |
| Capa densa | `Dense` | `tf.keras.layers.Dense(32, activation="relu")` | Define el número de unidades y la activación. |
| Compilar | `compile` | `m.compile(optimizer="adam", loss="mse")` | La pérdida depende del objetivo y del formato de salida. |
| Entrenar | `fit` | `hist = m.fit(X, y, epochs=10, validation_split=0.2)` | Supervisa validación para detectar sobreajuste. |
| Evaluar | `evaluate` | `m.evaluate(X_test, y_test)` | Evalúa con datos no usados para ajustar pesos. |
| Predecir | `predict` | `y_pred = m.predict(X_new)` | Asegura que las entradas tienen la misma forma y transformación. |
| Guardar | `save` | `m.save("modelo.keras")` | El formato `.keras` conserva el modelo para volver a cargarlo. |
| Cargar | `load_model` | `m = tf.keras.models.load_model("modelo.keras")` | Usa archivos de modelos confiables. |
| Parada temprana | `EarlyStopping` | `cb = tf.keras.callbacks.EarlyStopping(patience=3, restore_best_weights=True)` | Pásalo en `fit(..., callbacks=[cb])`. |
| Datos por lotes | `Dataset.from_tensor_slices` | `ds = tf.data.Dataset.from_tensor_slices((X, y)).batch(32)` | Útil para canalizaciones de datos. |
| Fijar semilla | `set_random_seed` | `tf.keras.utils.set_random_seed(42)` | Ayuda a reproducibilidad, aunque no garantiza determinismo en todo hardware. |

## Tips rápidos

- Empieza con un modelo pequeño y una métrica de validación antes de aumentar la complejidad.
- Normaliza las entradas cuando la escala de las características lo requiera y aplica la misma transformación en inferencia.
- Asegúrate de que la salida, las etiquetas y la función de pérdida sean compatibles.
- No evalúes repetidamente en el conjunto de prueba durante el ajuste; úsalo para la evaluación final.
