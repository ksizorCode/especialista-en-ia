# Especialista en Inteligencia Artificial

# Módulo 1 — Fundamentos de Inteligencia Artificial

Apuntes para el alumno · Duración: 42 horas

Objetivo del módulo: adquirir los conceptos básicos, herramientas y lenguajes relacionados con la Inteligencia Artificial y sus diferentes modalidades, sentando las bases matemáticas, estadísticas y de programación (Python) necesarias para el resto del curso.

## Índice de contenidos

1. Introducción a la Inteligencia Artificial
2. Panorama de los principales algoritmos de IA
3. Tipos de aprendizaje automático
4. Fundamentos matemáticos para IA
5. Fundamentos estadísticos para IA
6. Puesta en marcha del entorno de trabajo
7. Inmersión en el lenguaje Python
8. Estrategias de aprendizaje autónomo y cierre del módulo

## 1. Introducción a la Inteligencia Artificial

### 1.1 ¿Qué es la Inteligencia Artificial?
La Inteligencia Artificial (IA) es la disciplina de la informática que estudia el diseño de sistemas capaces de realizar tareas que, si las hiciera una persona, requerirían inteligencia: percibir, razonar, aprender, planificar o comunicarse.

No existe una única definición aceptada de forma universal, pero conviene distinguir cuatro enfoques clásicos:

| Enfoque | Descripción | Ejemplo |
| --- | --- | --- |
| Actuar como un humano | Sistemas que superan el Test de Turing | Chatbots conversacionales |
| Pensar como un humano | Modelar los procesos cognitivos humanos | Modelos de razonamiento cognitivo |
| Pensar racionalmente | Sistemas basados en lógica formal | Motores de inferencia lógica |
| Actuar racionalmente | Agentes que eligen la mejor acción posible según su entorno | Vehículos autónomos, agentes de recomendación |
Hoy en día, la mayoría de sistemas de IA aplicados se enmarcan en el enfoque de agente racional: un programa que percibe su entorno (datos de entrada) y actúa sobre él (predicción, decisión, generación de contenido) buscando maximizar un objetivo.

### 1.2 Breve contexto histórico

| Periodo | Hito principal |
| --- | --- |
| 1950 | Alan Turing plantea el "Test de Turing" |
| 1956 | Conferencia de Dartmouth: nace el término "Inteligencia Artificial" |
| 1960-70 | IA simbólica: sistemas basados en reglas y lógica |
| 1980-90 | Sistemas expertos; primer "invierno de la IA" por falta de resultados prácticos |
| 1990-2010 | Auge del Machine Learning estadístico (SVM, árboles, ensambles) |
| 2012 en adelante | Revolución del Deep Learning gracias a GPUs y grandes volúmenes de datos |
| 2020 en adelante | IA generativa: grandes modelos de lenguaje (LLMs), generación de imagen, audio y vídeo |
Entender esta evolución ayuda a comprender por qué hoy conviven distintas "familias" de técnicas: no todas las tareas requieren redes neuronales profundas, y muchas veces un modelo estadístico sencillo resuelve el problema de forma más eficiente y explicable.

### 1.3 Principales modalidades de la IA

- **Machine Learning (ML):** algoritmos que aprenden patrones a partir de datos sin ser programados explícitamente para cada regla.
- **Deep Learning (DL):** subcampo del ML basado en redes neuronales con múltiples capas, especialmente potente con grandes volúmenes de datos no estructurados (imágenes, texto, audio).
- **Procesamiento del Lenguaje Natural (NLP):** técnicas para que las máquinas comprendan, interpreten y generen lenguaje humano (traducción automática, análisis de sentimiento, chatbots).
- **Visión por Computador:** interpretación de imágenes y vídeo (detección de objetos, reconocimiento facial, diagnóstico por imagen).
- **Sistemas basados en conocimiento / IA simbólica:** representación explícita del conocimiento mediante reglas lógicas (sistemas expertos).
- **Aprendizaje por refuerzo:** un agente aprende a base de prueba y error, recibiendo recompensas o penalizaciones (robótica, videojuegos, optimización de procesos).
- **IA generativa:** modelos capaces de crear contenido nuevo (texto, imagen, audio, código) a partir de lo aprendido durante su entrenamiento.
Idea clave: la IA no es una única tecnología, sino un paraguas de disciplinas. El Machine Learning es el subconjunto más utilizado en la práctica profesional, y el Deep Learning es, a su vez, un subconjunto del ML.

```text
Inteligencia Artificial
 └── Machine Learning
     └── Deep Learning
         └── Modelos generativos (LLMs, difusión, etc.)
```
2. Panorama de los principales algoritmos de IA
En esta primera aproximación no se busca dominar cada algoritmo en profundidad (se desarrollará en módulos posteriores), sino tener una noción general de qué familias existen y para qué se usa cada una.

Familia	Algoritmos representativos	Tipo de problema que resuelve
Modelos lineales	Regresión lineal, regresión logística	Predicción de valores numéricos o clasificación simple
Basados en distancia	K-Nearest Neighbors (KNN)	Clasificación/regresión por similitud
Árboles y ensambles	Árboles de decisión, Random Forest, Gradient Boosting (XGBoost)	Clasificación y regresión con alta precisión
Máquinas de vector soporte	SVM	Clasificación con márgenes óptimos
Redes neuronales	Perceptrón, MLP, CNN, RNN, Transformers	Problemas complejos con datos no estructurados
Clustering	K-Means, DBSCAN, jerárquico	Agrupación de datos sin etiquetar
Reducción de dimensionalidad	PCA, t-SNE	Simplificar datos con muchas variables
Aprendizaje por refuerzo	Q-Learning, Deep Q-Networks	Toma de decisiones secuenciales
Criterio de selección de algoritmo: en la práctica, la elección depende de factores como el tipo de dato disponible, la cantidad de datos, la necesidad de interpretabilidad del modelo, el tiempo de cómputo disponible y el objetivo del negocio. No existe un algoritmo "mejor" de forma absoluta (principio conocido como No Free Lunch Theorem).

3. Tipos de aprendizaje automático
3.1 Aprendizaje supervisado
El modelo aprende a partir de datos etiquetados, es decir, ejemplos donde ya se conoce la respuesta correcta.

Clasificación: la salida es una categoría (ej. "spam" / "no spam").
Regresión: la salida es un valor numérico continuo (ej. precio de una vivienda).
Flujo típico: datos de entrada (X) → modelo → predicción (ŷ) comparada contra el valor real y para ajustar el modelo.

3.2 Aprendizaje no supervisado
El modelo trabaja con datos sin etiquetar, buscando estructuras o patrones ocultos.

Clustering: agrupar observaciones similares (segmentación de clientes).
Reducción de dimensionalidad: simplificar variables manteniendo la información relevante.
Detección de anomalías: identificar observaciones atípicas (fraude, fallos en sensores).
3.3 Aprendizaje semi-supervisado
Combina una pequeña cantidad de datos etiquetados con una gran cantidad de datos sin etiquetar, útil cuando etiquetar es costoso (ej. diagnóstico médico con pocas muestras confirmadas).

3.4 Aprendizaje por refuerzo
Un agente interactúa con un entorno, ejecuta acciones y recibe recompensas o penalizaciones. El objetivo es aprender una política que maximice la recompensa acumulada a largo plazo.

Elemento	Descripción
Agente	Quien toma las decisiones
Entorno	Contexto donde el agente actúa
Estado	Situación actual del entorno
Acción	Decisión que toma el agente
Recompensa	Señal de retroalimentación
Política	Estrategia que sigue el agente
3.5 Tabla comparativa
Tipo	¿Requiere etiquetas?	Ejemplo de uso
Supervisado	Sí	Predicción de abandono de clientes
No supervisado	No	Segmentación de mercado
Semi-supervisado	Parcialmente	Clasificación de documentos legales
Por refuerzo	No (usa recompensas)	Robots, videojuegos, logística
4. Fundamentos matemáticos para IA
La mayoría de algoritmos de IA se apoyan en álgebra lineal (para representar y transformar datos) y cálculo diferencial (para optimizar modelos).

4.1 Álgebra lineal aplicada
Escalar: un único número (ej. 5).
Vector: una lista ordenada de números, representa una observación o un conjunto de características.
Matriz: una tabla de números (filas = observaciones, columnas = variables).
Operaciones clave: suma, producto escalar, producto matricial, transposición, norma de un vector (su "longitud").
El producto punto entre dos vectores es la base del funcionamiento de una neurona artificial: cada entrada se multiplica por un peso y se suman los resultados.

import numpy as np

# Vector de características (ej. horas de estudio, horas de sueño)
x = np.array([4, 7])

# Vector de pesos del modelo
w = np.array([0.6, 0.3])

# Producto punto: base del cálculo en una neurona
salida = np.dot(x, w)
print(salida)  # 2.4 + 2.1 = 4.5

# Operaciones básicas con matrices
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

print(A + B)          # Suma de matrices
print(A @ B)          # Producto matricial
print(A.T)            # Transposición
print(np.linalg.norm(x))  # Norma del vector
4.2 Cálculo diferencial y optimización
Derivada: mide cómo cambia una función al variar ligeramente su entrada. Es la base para saber "en qué dirección" ajustar un modelo.
Gradiente: generalización de la derivada a funciones con varias variables (vector de derivadas parciales).
Descenso de gradiente: algoritmo de optimización que ajusta los parámetros de un modelo moviéndose en la dirección opuesta al gradiente, para minimizar el error.
# Ejemplo simplificado de descenso de gradiente
# Minimizar f(w) = (w - 3)^2

def f(w):
    return (w - 3) ** 2

def derivada(w):
    return 2 * (w - 3)

w = 0.0            # valor inicial
tasa_aprendizaje = 0.1

for iteracion in range(20):
    w = w - tasa_aprendizaje * derivada(w)

print(f"Valor óptimo aproximado de w: {w:.4f}")
Este mismo principio —ajustar parámetros minimizando una función de error— es el corazón del entrenamiento de redes neuronales, regresiones y la mayoría de modelos de ML.

4.3 Funciones de activación (introducción)
Para introducir no linealidad en los modelos (especialmente redes neuronales) se usan funciones matemáticas como:

Sigmoide: convierte cualquier valor en un rango entre 0 y 1 (útil para probabilidades).
ReLU: devuelve 0 si el valor es negativo, y el propio valor si es positivo (muy usada por su eficiencia computacional).
def sigmoide(x):
    return 1 / (1 + np.exp(-x))

def relu(x):
    return np.maximum(0, x)
5. Fundamentos estadísticos para IA
5.1 Estadística descriptiva
Medida	Qué representa	Función en Python (pandas/numpy)
Media	Valor promedio	np.mean()
Mediana	Valor central	np.median()
Moda	Valor más frecuente	scipy.stats.mode()
Varianza	Dispersión de los datos respecto a la media	np.var()
Desviación estándar	Raíz cuadrada de la varianza	np.std()
import numpy as np

datos = [23, 45, 12, 67, 34, 89, 23, 45]

print("Media:", np.mean(datos))
print("Mediana:", np.median(datos))
print("Desviación estándar:", np.std(datos))
5.2 Nociones básicas de probabilidad
Probabilidad: medida (entre 0 y 1) de la posibilidad de que ocurra un evento.
Probabilidad condicional: probabilidad de que ocurra un evento A, sabiendo que ya ocurrió otro evento B → P(A|B).
Teorema de Bayes: permite actualizar la probabilidad de un evento a partir de nueva evidencia; es la base de algoritmos como el Clasificador Naive Bayes.
5.3 Distribuciones comunes
Distribución normal (gaussiana): forma de campana, muchos fenómenos naturales y errores de medición se aproximan a ella.
Distribución binomial: modela experimentos con dos resultados posibles repetidos varias veces.
Distribución uniforme: todos los valores de un rango tienen la misma probabilidad.
5.4 Preprocesamiento de datos
Antes de entrenar cualquier modelo, los datos deben prepararse:

Tratamiento de valores faltantes: eliminarlos o imputarlos (media, mediana, valor más frecuente).
Escalado/normalización: llevar las variables a rangos comparables (importante para algoritmos basados en distancia o gradiente).
Codificación de variables categóricas: convertir texto en números (One-Hot Encoding, Label Encoding).
Detección de outliers: identificar valores atípicos que puedan distorsionar el modelo.
import pandas as pd
from sklearn.preprocessing import StandardScaler

df = pd.DataFrame({
    "edad": [25, 32, None, 45, 29],
    "ciudad": ["Madrid", "Vigo", "Madrid", "Ourense", "Vigo"]
})

# 1. Imputar valores faltantes con la media
df["edad"] = df["edad"].fillna(df["edad"].mean())

# 2. Codificar variable categórica
df_codificado = pd.get_dummies(df, columns=["ciudad"])

# 3. Escalar variable numérica
escalador = StandardScaler()
df_codificado["edad_escalada"] = escalador.fit_transform(df_codificado[["edad"]])

print(df_codificado)
5.5 Análisis de resultados: métricas básicas
Métrica	Uso	Fórmula/idea
Accuracy (exactitud)	Clasificación	% de aciertos totales
Precisión	Clasificación	De lo predicho como positivo, cuánto era correcto
Recall (sensibilidad)	Clasificación	De lo realmente positivo, cuánto se detectó
F1-score	Clasificación	Media armónica entre precisión y recall
MSE / RMSE	Regresión	Error cuadrático medio entre valor real y predicho
6. Puesta en marcha del entorno de trabajo
6.1 Instalación del entorno Python
Anaconda / Miniconda: distribución de Python que incluye gestor de paquetes (conda) y las librerías científicas más habituales preinstaladas.
Entornos virtuales: permiten aislar las dependencias de cada proyecto (conda create -n nombre_entorno python=3.11 o python -m venv nombre_entorno).
# Crear y activar un entorno virtual con conda
conda create -n curso_ia python=3.11
conda activate curso_ia

# Instalar librerías básicas
pip install numpy pandas matplotlib scikit-learn jupyter
6.2 Herramientas de desarrollo
Herramienta	Uso principal
Jupyter Notebook / JupyterLab	Entorno interactivo ideal para experimentación y análisis de datos
Google Colab	Jupyter en la nube, con acceso gratuito a GPU
Visual Studio Code	Editor de código versátil, con extensiones para Python e IA
Git / GitHub	Control de versiones y colaboración en proyectos
6.3 Principales librerías de Python para IA
Librería	Función
NumPy	Cálculo numérico y álgebra lineal
Pandas	Manipulación y análisis de datos tabulares
Matplotlib / Seaborn	Visualización de datos
Scikit-learn	Algoritmos clásicos de Machine Learning
TensorFlow / Keras	Construcción de redes neuronales y Deep Learning
PyTorch	Alternativa a TensorFlow, muy usada en investigación
6.4 Buenas prácticas
Documentar las dependencias del proyecto en un archivo requirements.txt.
Utilizar control de versiones desde el inicio del proyecto.
Trabajar siempre dentro de un entorno virtual para evitar conflictos entre proyectos.
Guardar los notebooks con nombres descriptivos y comentar el código.
7. Inmersión en el lenguaje Python
7.1 Sintaxis básica y tipos de datos
# Tipos de datos básicos
entero = 10
decimal = 3.14
texto = "Inteligencia Artificial"
booleano = True

# Estructuras de datos
lista = [1, 2, 3, 4]          # Ordenada y modificable
tupla = (1, 2, 3)             # Ordenada e inmutable
diccionario = {"nombre": "IA", "horas": 42}  # Pares clave-valor
conjunto = {1, 2, 3}          # Elementos únicos, sin orden
7.2 Estructuras de control
nota = 7

if nota >= 9:
    print("Sobresaliente")
elif nota >= 5:
    print("Aprobado")
else:
    print("Suspenso")

# Bucle for
for i in range(5):
    print(f"Iteración {i}")

# Bucle while
contador = 0
while contador < 3:
    contador += 1
7.3 Funciones
def calcular_media(lista_numeros):
    return sum(lista_numeros) / len(lista_numeros)

resultado = calcular_media([4, 8, 15, 16, 23, 42])
print(resultado)

# Función lambda (función anónima de una sola línea)
cuadrado = lambda x: x ** 2
print(cuadrado(5))
7.4 Introducción a la programación orientada a objetos
class ModeloIA:
    def __init__(self, nombre, precision):
        self.nombre = nombre
        self.precision = precision

    def resumen(self):
        return f"Modelo {self.nombre} con precisión {self.precision}%"

modelo = ModeloIA("Clasificador de spam", 95.4)
print(modelo.resumen())
7.5 Procesamiento léxico, sintáctico y semántico
Cuando ejecutamos código Python (o cuando un sistema de NLP procesa una frase), ocurren tres fases análogas:

Fase	En un intérprete de Python	En Procesamiento del Lenguaje Natural
Léxica	Divide el código en unidades mínimas ("tokens": palabras clave, operadores, nombres)	Divide el texto en palabras o tokens (tokenización)
Sintáctica	Comprueba que los tokens siguen la gramática del lenguaje (ej. estructura de un if)	Analiza la estructura gramatical de la frase (sujeto, verbo, predicado)
Semántica	Da significado a las instrucciones válidas (qué hace realmente el código)	Interpreta el significado real de la frase, incluyendo el contexto
Entender este paralelismo ayuda a comprender, más adelante, por qué las técnicas de NLP comparten conceptos con el diseño de lenguajes de programación: en ambos casos se necesita convertir una secuencia de símbolos en una estructura con significado.

7.6 Manejo de errores
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Error: no se puede dividir entre cero")
finally:
    print("Proceso finalizado")
7.7 Módulos y librerías
import numpy as np          # alias habitual para numpy
from pandas import DataFrame  # importar un elemento concreto
8. Estrategias de aprendizaje autónomo y cierre del módulo
8.1 Cómo aprovechar este módulo
Practica en Python cada concepto matemático o estadístico en cuanto se explique: la teoría se fija mucho mejor si se implementa de inmediato.
No memorices fórmulas sin comprender su propósito: pregúntate siempre "¿para qué se usa esto en un algoritmo de IA?".
Documenta tus propios apuntes de código en un repositorio personal (Git) desde el primer día.
Ante un error o duda, busca primero entender el mensaje de error antes de buscar la solución: es la habilidad más valiosa para trabajar en entornos nuevos.
8.2 Resumen del módulo
En este módulo hemos:

Definido qué es la IA y sus principales modalidades (ML, DL, NLP, visión, sistemas expertos, aprendizaje por refuerzo, IA generativa).
Obtenido una visión general de las familias de algoritmos más utilizadas.
Diferenciado los tipos de aprendizaje: supervisado, no supervisado, semi-supervisado y por refuerzo.
Repasado los fundamentos matemáticos (álgebra lineal y cálculo) necesarios para entender el funcionamiento interno de los modelos.
Repasado los fundamentos estadísticos (descriptiva, probabilidad, preprocesamiento y métricas) necesarios para preparar datos y evaluar resultados.
Configurado un entorno de trabajo profesional en Python.
Realizado una primera inmersión en la sintaxis y estructuras del lenguaje Python.
8.3 Autoevaluación sugerida
¿Qué diferencia hay entre Inteligencia Artificial, Machine Learning y Deep Learning?
Explica con tus palabras la diferencia entre aprendizaje supervisado y no supervisado, con un ejemplo propio.
¿Para qué se utiliza el descenso de gradiente?
¿Por qué es necesario escalar los datos antes de entrenar ciertos algoritmos?
Escribe en Python una función que calcule la media y la desviación estándar de una lista de números sin usar NumPy.
8.4 Próximos pasos
Este módulo sienta las bases teóricas y prácticas sobre las que se construirán los siguientes módulos del curso, donde se profundizará en algoritmos concretos de Machine Learning, Deep Learning y sus aplicaciones prácticas.