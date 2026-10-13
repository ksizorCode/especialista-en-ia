# Ejercicios prácticos

Trabaja con los ejercicios por biblioteca y luego completa el ejercicio integrador. Antes de entrenar modelos, separa los datos de prueba y no los uses para ajustar parámetros. Las soluciones pueden variar; justifica las decisiones de limpieza, visualización y métricas.

## Pandas

<img class="library-logo library-logo--section" src="assets/img/Pandas-logo.webp" alt="Logo de Pandas" width="150">

1. Crea `ventas.csv` con las columnas `fecha`, `producto`, `unidades` y `precio_unitario`, y cárgalo en un `DataFrame`.
2. Convierte `fecha` a fecha, añade una columna `importe` y calcula las ventas totales por producto.
3. Introduce un valor ausente en `unidades`; detecta los nulos y decide cómo tratarlos. Explica por qué.

## NumPy

<img class="library-logo library-logo--section" src="assets/img/NumPy-logo.webp" alt="Logo de NumPy" width="120">

1. Crea un arreglo con 20 números y muestra su media, desviación estándar, mínimo y máximo.
2. Convierte el arreglo en una matriz de 4 por 5 y calcula la media por fila y por columna.
3. Usa una máscara booleana para seleccionar valores mayores que la media.

## Matplotlib

<img class="library-logo library-logo--section" src="assets/img/matplotblib-logo.webp" alt="Logo de Matplotlib" width="150">

1. Representa las ventas mensuales de tres productos con un gráfico de líneas y una leyenda.
2. Crea un histograma de una lista de mediciones y describe la forma de su distribución.
3. Guarda una figura en PNG y añade título, etiquetas y unidades.

## Scikit-learn

<img class="library-logo library-logo--section" src="assets/img/Scikit_learn-logo.webp" alt="Logo de Scikit-learn" width="140">

1. Carga Iris con `load_iris`, separa entrenamiento y prueba, y entrena un clasificador.
2. Compara exactitud y `classification_report`. ¿Qué información adicional aporta el informe?
3. Construye un `Pipeline` con `StandardScaler` y regresión logística; evalúalo con validación cruzada.

## OpenCV

<img class="library-logo library-logo--section" src="assets/img/OpenCV-logo.png" alt="Logo de OpenCV" width="58">

1. Lee una imagen, valida que se haya cargado y muestra sus dimensiones y número de canales.
2. Guárdala en escala de grises y redimensiona una copia a 320 × 240 píxeles.
3. Detecta bordes con `Canny`; compara resultados cambiando los umbrales.

## TensorFlow

<img class="library-logo library-logo--section" src="assets/img/TensorFlow-logo.png" alt="Logo de TensorFlow" width="150">

1. Crea un modelo Keras pequeño para regresión con entradas de dos características.
2. Entrénalo con datos sintéticos generados con NumPy y reserva una parte para validación.
3. Evalúa el modelo en datos separados y compara las predicciones con los valores reales. Prueba `EarlyStopping`.

## Ejercicio integrador

Usa un CSV con datos tabulares que tenga una columna objetivo numérica. Con Pandas, inspecciona y limpia los datos; con NumPy, verifica formas y valores; con Matplotlib, grafica la distribución del objetivo; con Scikit-learn, divide los datos, entrena un modelo de regresión y evalúa el error absoluto medio. Documenta qué decisiones tomaste y qué limitaciones tiene el resultado.

### Criterios de autoevaluación

- ¿Comprobaste tipos, dimensiones y valores ausentes?
- ¿Separaste correctamente entrenamiento y prueba?
- ¿Elegiste una métrica adecuada al problema?
- ¿Etiquetaste los gráficos y comprobaste que las predicciones tienen sentido?
- ¿Puedes explicar qué cambiarías con más datos o un problema real?
