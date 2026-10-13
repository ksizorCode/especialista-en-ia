# Introducción a la programación de *Machine Learning* con Python

El *Machine Learning* (aprendizaje automático) es una rama de la inteligencia artificial en la que los programas aprenden patrones a partir de datos para realizar predicciones o tomar decisiones. Python es popular en este campo por su sintaxis clara y por la variedad de bibliotecas disponibles.

## Bibliotecas principales

### Scikit-learn

<img class="library-logo library-logo--section" src="assets/img/Scikit_learn-logo.webp" alt="Logo de Scikit-learn" width="140">

- **¿Para qué sirve?** Para preparar datos y crear, entrenar y evaluar modelos clásicos de aprendizaje automático: clasificación, regresión, agrupamiento y reducción de dimensionalidad. Incluye herramientas para dividir conjuntos de datos, validar modelos y construir *pipelines*.
- **Ventajas:** API coherente y relativamente sencilla; muchos algoritmos y herramientas de evaluación; se integra bien con NumPy y Pandas.
- **Desventajas:** No está pensada para redes neuronales profundas ni para entrenar modelos sobre GPU de forma general. Para datos muy grandes, el uso de memoria puede ser un límite.
- **Web:** [scikit-learn.org](https://scikit-learn.org/)

### Pandas

<img class="library-logo library-logo--section" src="assets/img/Pandas-logo.webp" alt="Logo de Pandas" width="150">

- **¿Para qué sirve?** Para cargar, limpiar, transformar y explorar datos tabulares, por ejemplo archivos CSV, hojas de cálculo y tablas de bases de datos. Su estructura principal es el `DataFrame`.
- **Ventajas:** Operaciones cómodas para filtrar, agrupar, combinar y resumir datos; admite etiquetas para filas y columnas; facilita la exploración antes del entrenamiento.
- **Desventajas:** Puede consumir mucha memoria con tablas grandes; algunas operaciones son menos eficientes que las de NumPy o herramientas distribuidas.
- **Web:** [pandas.pydata.org](https://pandas.pydata.org/)

### NumPy

<img class="library-logo library-logo--section" src="assets/img/NumPy-logo.webp" alt="Logo de NumPy" width="120">

- **¿Para qué sirve?** Para trabajar con arreglos y matrices multidimensionales y realizar cálculos numéricos. Es una base importante para muchas bibliotecas científicas de Python.
- **Ventajas:** Operaciones vectorizadas rápidas; herramientas matemáticas y de álgebra lineal; interoperabilidad con bibliotecas como Pandas, Matplotlib y Scikit-learn.
- **Desventajas:** Los arreglos suelen contener elementos de un mismo tipo; no ofrece por sí solo las estructuras etiquetadas y cómodas para tablas que proporciona Pandas.
- **Web:** [numpy.org](https://numpy.org/)

### Matplotlib

<img class="library-logo library-logo--section" src="assets/img/matplotblib-logo.webp" alt="Logo de Matplotlib" width="150">

- **¿Para qué sirve?** Para crear gráficos y visualizar datos, como líneas, barras, histogramas y diagramas de dispersión. Ayuda a detectar tendencias, distribuciones y posibles errores en los datos.
- **Ventajas:** Gran variedad de gráficos y opciones de personalización; funciona bien con NumPy y Pandas; permite guardar las figuras en distintos formatos.
- **Desventajas:** La personalización detallada puede requerir bastante código; para gráficos estadísticos rápidos o interactivos quizá resulte menos cómoda que otras alternativas.
- **Web:** [matplotlib.org](https://matplotlib.org/)

### OpenCV

<img class="library-logo library-logo--section" src="assets/img/OpenCV-logo.png" alt="Logo de OpenCV" width="58">

- **¿Para qué sirve?** OpenCV (*Open Source Computer Vision Library*) se utiliza en visión artificial: leer y transformar imágenes y vídeos, detectar características y objetos, y procesar imágenes. Es útil en proyectos como análisis de vídeo, robótica y reconocimiento visual.
- **Ventajas:** Amplio conjunto de algoritmos; buen rendimiento; admite imágenes y vídeo y tiene interfaces para varios lenguajes.
- **Desventajas:** Algunas tareas avanzadas requieren conocimientos de procesamiento de imágenes; la instalación y el uso de ciertos módulos pueden variar según el sistema y el paquete instalado. OpenCV no sustituye por sí sola a una biblioteca de entrenamiento de redes neuronales.
- **Web:** [opencv.org](https://opencv.org/) · [Documentación](https://docs.opencv.org/)

### TensorFlow

<img class="library-logo library-logo--section" src="assets/img/TensorFlow-logo.png" alt="Logo de TensorFlow" width="150">

- **¿Para qué sirve?** Para construir, entrenar y ejecutar modelos de aprendizaje automático, especialmente redes neuronales y *deep learning*. Se usa en tareas como clasificación de imágenes, procesamiento del lenguaje y predicción.
- **Ventajas:** Ecosistema amplio; admite aceleración por hardware en configuraciones compatibles; ofrece herramientas para entrenar y desplegar modelos en distintos entornos. Keras proporciona una interfaz de alto nivel para definir modelos.
- **Desventajas:** Puede ser más complejo y pesado que Scikit-learn para comenzar; entrenar modelos grandes puede requerir recursos considerables y configurar correctamente el hardware.
- **Web:** [tensorflow.org](https://www.tensorflow.org/) · [Documentación](https://www.tensorflow.org/learn)

## Cómo se suelen combinar

Un flujo de trabajo habitual es cargar los datos con Pandas, limpiarlos y prepararlos, usar NumPy para operaciones numéricas cuando haga falta, explorar los datos con Matplotlib, entrenar un modelo con Scikit-learn o TensorFlow y evaluar sus resultados. Para proyectos de imágenes, OpenCV puede encargarse de leer y preparar las imágenes antes de pasarlas al modelo.

No es necesario usar todas las bibliotecas en cada proyecto: la elección depende del tipo de datos y del problema. Para empezar con datos tabulares y modelos clásicos, Pandas y Scikit-learn suelen ser suficientes; para redes neuronales, se puede explorar TensorFlow; y para imágenes y vídeo, OpenCV puede complementar cualquiera de ellos.

## Material de estudio

Cada carpeta incluye una introducción y una chuleta de referencia:

- [Scikit-learn](./Scikit-learn/Scikit-learn.md) · [Chuleta](./Scikit-learn/chuleta.md)
- [Pandas](./Pandas/Pandas.md) · [Chuleta](./Pandas/chuleta.md)
- [NumPy](./NumPy/NumPy.md) · [Chuleta](./NumPy/chuleta.md)
- [Matplotlib](./Matplotlib/Matplotlib.md) · [Chuleta](./Matplotlib/chuleta.md)
- [OpenCV](./OpenCV/OpenCV.md) · [Chuleta](./OpenCV/chuleta.md)
- [TensorFlow](./TensorFlow/TensorFlow.md) · [Chuleta](./TensorFlow/chuleta.md)

Material común: [ejemplos de uso](./ejemplos-de-uso.md) y [ejercicios](./ejercicios.md).
