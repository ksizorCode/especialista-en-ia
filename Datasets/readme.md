# Listado de Datasets

Existen sites de los que podemos extraer datasets descargandonos el material en diferentes formatos, y otros incluso, como kaggle con los que podemos hacer una llamada via biblioteca de python al dataset

Ejemplo:

https://www.kaggle.com/datasets/camnugent/california-housing-prices

Desde aquí (bajo registro previo) podemos descarganos el archivo con el dataset, o podemos utilizar la siguiente línea de código.


```python

# Install dependencies as needed:
# pip install kagglehub[pandas-datasets]
import kagglehub
from kagglehub import KaggleDatasetAdapter

# Set the path to the file you'd like to load
file_path = ""

# Load the latest version
df = kagglehub.load_dataset(
  KaggleDatasetAdapter.PANDAS,
  "camnugent/california-housing-prices",
  file_path,
  # Provide any additional arguments like 
  # sql_query or pandas_kwargs. See the 
  # documenation for more information:
  # https://github.com/Kaggle/kagglehub/blob/main/README.md#kaggledatasetadapterpandas
)

print("First 5 records:", df.head())

```


# Webs con datasets para practicar Machine Learning

Lista de plataformas útiles para encontrar datasets y practicar clasificación, regresión, NLP, visión por computador, series temporales y proyectos de datos reales.

> Consejo: antes de usar un dataset en un proyecto público, revisa siempre su licencia, la procedencia de los datos, la documentación y posibles restricciones de privacidad.

## Plataformas recomendadas

| Web | Enlace | Ideal para |
|---|---|---|
| **Kaggle Datasets** | [kaggle.com/datasets](https://www.kaggle.com/datasets) | Practicar con datasets variados, notebooks, competiciones y ejemplos de la comunidad. |
| **UCI Machine Learning Repository** | [archive.ics.uci.edu/datasets](https://archive.ics.uci.edu/datasets) | Datasets clásicos y bien conocidos para clasificación, regresión y análisis exploratorio. |
| **OpenML** | [openml.org/search?type=data](https://www.openml.org/search?type=data) | Benchmarks reproducibles, metadatos uniformes y experimentos comparables. |
| **Hugging Face Datasets** | [huggingface.co/datasets](https://huggingface.co/datasets) | NLP, modelos de lenguaje, audio, visión por computador y datasets listos para cargar con Python. |
| **TensorFlow Datasets** | [tensorflow.org/datasets](https://www.tensorflow.org/datasets) | Datasets preparados para deep learning y fáciles de cargar con `tensorflow_datasets`. |
| **Google Dataset Search** | [datasetsearch.research.google.com](https://datasetsearch.research.google.com/) | Buscar datasets publicados en universidades, organismos públicos y repositorios especializados. |
| **Data.gov** | [catalog.data.gov](https://catalog.data.gov/) | Datos públicos de Estados Unidos: economía, salud, transporte, clima y administración. |
| **datos.gob.es** | [datos.gob.es](https://datos.gob.es/) | Datos abiertos de España y catálogos de administraciones y organismos públicos. |
| **AWS Registry of Open Data** | [registry.opendata.aws](https://registry.opendata.aws/) | Datasets grandes alojados en AWS, útiles para cloud, geoespacial, clima y ciencia. |
| **DrivenData** | [drivendata.org/competitors](https://www.drivendata.org/competitors/) | Competición práctica con problemas reales de impacto social y datasets asociados. |
| **Papers with Code – Datasets** | [paperswithcode.com/datasets](https://paperswithcode.com/datasets) | Encontrar datasets vinculados a papers, tareas de investigación y resultados de referencia. |
| **scikit-learn Datasets** | [scikit-learn.org/stable/datasets](https://scikit-learn.org/stable/datasets.html) | Empezar rápido con datasets pequeños para clasificación, regresión, clustering y reducción dimensional. |

## Qué elegir según tu objetivo

- **Primeros proyectos:** scikit-learn, UCI y Kaggle.
- **Comparar algoritmos:** OpenML y UCI.
- **NLP o LLMs:** Hugging Face Datasets y Papers with Code.
- **Visión por computador:** TensorFlow Datasets, Hugging Face y Kaggle.
- **Datos públicos y casos reales:** datos.gob.es, Data.gov y AWS Registry of Open Data.
- **Aprender mediante retos:** Kaggle y DrivenData.

## Ideas de proyectos para practicar

1. Predecir una variable numérica con regresión lineal, Random Forest y XGBoost.
2. Comparar varios clasificadores usando validación cruzada y una matriz de confusión.
3. Crear un modelo de análisis de sentimiento con un dataset de texto.
4. Entrenar un clasificador de imágenes y analizar sus errores.
5. Construir un modelo de predicción temporal evitando fugas de información (*data leakage*).
6. Documentar la licencia, los sesgos y la calidad del dataset antes de entrenar el modelo.

## Referencias directas

- [Kaggle: búsqueda de datasets](https://www.kaggle.com/data)
- [UCI Machine Learning Repository](https://archive.ics.uci.edu/)
- [Documentación de OpenML](https://docs.openml.org/data/)
- [Documentación de Hugging Face Datasets](https://huggingface.co/docs/datasets)
- [Catálogo de TensorFlow Datasets](https://www.tensorflow.org/datasets/catalog/overview)
- [API y catálogo de datos.gob.es](https://datos.gob.es/es/apidata)


