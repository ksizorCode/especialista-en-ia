# TensorFlow: funcionamiento básico

<img class="library-logo library-logo--page" src="../assets/img/TensorFlow-logo.png" alt="Logo de TensorFlow" width="150">

TensorFlow es una plataforma de aprendizaje automático, muy utilizada para redes neuronales y aprendizaje profundo. En Python se suele definir el modelo con Keras, la API de alto nivel incluida en TensorFlow.

## Flujo habitual con Keras

<img class="library-logo library-logo--section" src="../assets/img/keras-logo.png" alt="Logo de Keras" width="130">

1. Prepara entradas numéricas `X` y respuestas `y`; normaliza o transforma los datos cuando sea necesario.
2. Define las capas del modelo.
3. Configura el entrenamiento con `compile`: optimizador, función de pérdida y métricas.
4. Entrena con `fit`, reservando datos para validación.
5. Evalúa con `evaluate`, predice con `predict` y guarda con `save`.

```python
import tensorflow as tf

modelo = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(4,)),
    tf.keras.layers.Dense(16, activation="relu"),
    tf.keras.layers.Dense(1)
])
modelo.compile(optimizer="adam", loss="mse", metrics=["mae"])
historial = modelo.fit(X_train, y_train, epochs=20, validation_split=0.2)
resultado = modelo.evaluate(X_test, y_test)
```

Este ejemplo muestra la estructura de una regresión sencilla; la forma de salida, la pérdida y las métricas deben adaptarse al problema.

## Conceptos importantes

- **Tensor:** arreglo multidimensional usado como dato de entrada, salida o estado interno.
- **Capa:** transformación que convierte tensores; las capas `Dense` conectan cada entrada con cada unidad de salida.
- **Función de activación:** introduce no linealidad, por ejemplo `relu` en capas intermedias.
- **Pérdida:** cuantifica el error que el entrenamiento intenta reducir. Debe ser compatible con el objetivo y formato de etiquetas.
- **Época y lote:** una época recorre los datos de entrenamiento; el tamaño del lote define cuántos ejemplos se procesan antes de actualizar pesos.
- **Validación:** permite observar si el modelo generaliza y detectar sobreajuste.
- **Aceleración:** GPU u otros aceleradores pueden mejorar el rendimiento, pero dependen del hardware, instalación y operación.

Instalación: `pip install tensorflow`. La compatibilidad con aceleradores varía según la plataforma y versión; consulta la guía oficial de instalación.
