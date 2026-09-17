# 🤖 Algoritmos básicos de Inteligencia Artificial
Regresión lineal
Regresión logística
K-Nearest Neighbors (KNN)
K-Means
Árboles de decisión
Random Forest
Naive Bayes
Support Vector Machine (SVM)
Gradient Boosting
AdaBoost
XGBoost
Redes neuronales artificiales
Perceptrón
Backpropagation
Redes neuronales convolucionales (CNN)
Redes neuronales recurrentes (RNN)
LSTM
Transformers
Algoritmos genéticos
K-Medoids
PCA (Análisis de Componentes Principales)
Apriori
DBSCAN
Q-Learning
SARSA
Minimax
A*
BFS (Búsqueda en anchura)
DFS (Búsqueda en profundidad)




🤖 Guía Práctica de Algoritmos de Inteligencia Artificial en PythonAsignatura: Especialización en Inteligencia ArtificialPlataforma de trabajo: Google Colab   Profesor: Tu Asistente de IA   📌 Índice de ContenidosIntroducción: ¿Cómo usar este cuaderno en Google Colab?   Visualización y Entorno (Importar Librerías Básicas)   Algoritmo 1: Regresión Lineal (Aprendizaje Supervisado)   Algoritmo 2: Árboles de Decisión (Aprendizaje Supervisado - Clasificación)   Algoritmo 3: K-Means (Aprendizaje No Supervisado - Agrupamiento)   Algoritmo 4: K-Nearest Neighbors / KNN (Clasificación por Proximidad)   Algoritmo 5: Una Red Neuronal Simple (Perceptrón)   1. Introducción: ¿Cómo usar este cuaderno en Google Colab?¡Bienvenidos, futuros especialistas en IA! 👋   En estos apuntes no solo vamos a estudiar la teoría de los algoritmos más fundamentales de la Inteligencia Artificial y el Machine Learning, sino que vamos a ver cómo cobran vida con código ejecutable y gráficos visuales.   Para ejecutar este código en Google Colab:   Entra en Google Colab.   Crea un Nuevo cuaderno (Nuevo cuaderno).   Copia y pega cada bloque de código en una celda diferente.   Presiona el botón de Play ▶️ o la combinación Shift + Enter para ejecutar.   2. Visualización y Entorno (Importar Librerías Básicas)Antes de empezar, cargamos nuestras herramientas principales. Usaremos numpy para operaciones numéricas, matplotlib para gráficos y scikit-learn (sklearn), la librería estándar de Machine Learning en Python.   Python# Celda 1: Instalación/Importación de herramientas principales
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

print("✅ Entorno preparado con éxito.")
3. Algoritmo 1: Regresión Lineal (Aprendizaje Supervisado)💡 Explicación del ProfesorLa Regresión Lineal es uno de los algoritmos predictivos más simples y potentes. Busca encontrar la línea recta que mejor se ajusta a un conjunto de puntos.   Ejemplo Práctico: Queremos predecir cuántos puntos de experiencia (XP) gana un héroe según las horas que pasa entrenando contra monstruos.   Python# Celda 2: Regresión Lineal Visual
from sklearn.linear_model import LinearRegression

# Datos de entrenamiento: Horas de entrenamiento vs Puntos de Experiencia (XP)
horas_entrenamiento = np.array([[1], [2], [4], [6], [7], [9], [10]])
xp_ganada = np.array([150, 280, 500, 780, 910, 1150, 1300])

# Creamos y entrenamos el modelo
modelo_regresion = LinearRegression()
modelo_regresion.fit(horas_entrenamiento, xp_ganada)

# Predicción para un estudiante que entrena 5.5 horas
horas_nuevas = np.array([[5.5]])
xp_predicha = modelo_regresion.predict(horas_nuevas)

# Visualización Gráfica
plt.figure(figsize=(8, 5))
plt.scatter(horas_entrenamiento, xp_ganada, color='purple', label='Datos reales de entrenamiento', s=100)
plt.plot(horas_entrenamiento, modelo_regresion.predict(horas_entrenamiento), color='orange', linewidth=2, label='Línea de Predicción de IA')
plt.scatter(horas_nuevas, xp_predicha, color='red', marker='*', s=250, label=f'Predicción para 5.5h ({xp_predicha[0]:.0f} XP)')

plt.title("🏰 Regresión Lineal: Predicción de Experiencia (XP)")
plt.xlabel("Horas de Entrenamiento")
plt.ylabel("Puntos de Experiencia (XP)")
plt.legend()
plt.grid(True)
plt.show()
4. Algoritmo 2: Árboles de Decisión (Aprendizaje Supervisado - Clasificación)💡 Explicación del ProfesorUn Árbol de Decisión imita la forma en que los humanos tomamos decisiones dividiendo un problema complejo en una serie de preguntas consecutivas del tipo "¿Sí o No?".   Ejemplo Práctico: Un sistema inteligente que decide la casa de Hogwarts (Gryffindor vs Slytherin) según la Valentía y la Ambición del estudiante.   Python# Celda 3: Árbol de Decisión Gráfico
from sklearn.tree import DecisionTreeClassifier, plot_tree

# Datos: [Valentía (1-10), Ambición (1-10)]
X_alumnos = np.array([
    [9, 2], [8, 3], [10, 1], [9, 4],  # Gryffindor (Clase 0)
    [2, 9], [3, 8], [1, 10], [4, 9]   # Slytherin  (Clase 1)
])
y_casas = np.array([0, 0, 0, 0, 1, 1, 1, 1])

# Entrenar el Árbol
arbol_hogwarts = DecisionTreeClassifier(max_depth=3)
arbol_hogwarts.fit(X_alumnos, y_casas)

# Visualizar la estructura del árbol
plt.figure(figsize=(10, 6))
plot_tree(arbol_hogwarts, 
          feature_names=["Valentía", "Ambición"], 
          class_names=["Gryffindor 🦁", "Slytherin 🐍"], 
          filled=True, 
          rounded=True)
plt.title("🧙‍♂️ Sombrero Seleccionador: Árbol de Decisión")
plt.show()
5. Algoritmo 3: K-Means (Aprendizaje No Supervisado - Agrupamiento)💡 Explicación del ProfesorA diferencia de los algoritmos anteriores, K-Means es de Aprendizaje No Supervisado: no le damos etiquetas ni respuestas correctas. El algoritmo explora los datos por sí solo y encuentra grupos (clusters) de elementos que se parecen entre sí.   Ejemplo Práctico: Detectar 3 clanes diferentes de criaturas mágicas según su Fuerza y Velocidad sin conocer de antemano a qué especie pertenecen.   Python# Celda 4: Agrupamiento con K-Means
from sklearn.cluster import KMeans

# Generar datos simulados de 3 especies distintas (ej. Trolls, Elfos, Goblins)
np.random.seed(42)
fuerza = np.concatenate([np.random.normal(90, 5, 20), np.random.normal(30, 5, 20), np.random.normal(50, 5, 20)])
velocidad = np.concatenate([np.random.normal(20, 5, 20), np.random.normal(90, 5, 20), np.random.normal(60, 5, 20)])

X_criaturas = np.column_stack((fuerza, velocidad))

# Entrenar K-Means con k=3 grupos
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
etiquetas = kmeans.fit_predict(X_criaturas)
centroides = kmeans.cluster_centers_

# Visualización del agrupamiento
plt.figure(figsize=(8, 6))
plt.scatter(X_criaturas[:, 0], X_criaturas[:, 1], c=etiquetas, cmap='viridis', s=70, alpha=0.8)
plt.scatter(centroides[:, 0], centroides[:, 1], c='red', marker='X', s=200, label='Centroides de Grupo (Clanes)')

plt.title("🧌 K-Means: Descubrimiento de Clanes Mágicos")
plt.xlabel("Fuerza")
plt.ylabel("Velocidad")
plt.legend()
plt.grid(True)
plt.show()
6. Algoritmo 4: K-Nearest Neighbors / KNN (Clasificación por Proximidad)💡 Explicación del ProfesorEl algoritmo K-Vecinos Más Cercanos (KNN) sigue la regla popular de "Dime con quién andas y te diré quién eres". Para clasificar un elemento nuevo, busca los $K$ puntos más cercanos en el mapa y vota por la mayoría.   Ejemplo Práctico: Identificar si un nuevo elixir desconocido es una Poción Curativa o un Veneno según su brillo y densidad.   Python# Celda 5: Clasificación con KNN
from sklearn.neighbors import KNeighborsClassifier

# Datos: [Brillo (1-100), Densidad (1-100)]
# Poción Curativa (0), Veneno (1)
X_pociones = np.array([
    [80, 20], [90, 15], [85, 30],  # Curativas
    [10, 90], [20, 85], [15, 95]   # Venenos
])
y_tipo = np.array([0, 0, 0, 1, 1, 1])

# Entrenar modelo KNN con K=3 vecinos
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_pociones, y_tipo)

# Nueva poción encontrada en el laboratorio
pocion_misteriosa = np.array([[75, 25]])
resultado = knn.predict(pocion_misteriosa)
nombre_resultado = "Poción Curativa 🧪" if resultado[0] == 0 else "Veneno ☠️"

# Gráfico visual
plt.figure(figsize=(8, 5))
plt.scatter(X_pociones[:3, 0], X_pociones[:3, 1], color='green', label='Poción Curativa', s=100)
plt.scatter(X_pociones[3:, 0], X_pociones[3:, 1], color='black', label='Veneno', s=100)
plt.scatter(pocion_misteriosa[0, 0], pocion_misteriosa[0, 1], color='red', marker='*', s=300, label=f'Muestra Nueva: {nombre_resultado}')

plt.title("🧪 KNN: Clasificador de Elixires y Pociones")
plt.xlabel("Brillo")
plt.ylabel("Densidad")
plt.legend()
plt.grid(True)
plt.show()
7. Algoritmo 5: Una Red Neuronal Simple (Perceptrón)💡 Explicación del ProfesorLas Redes Neuronales Artificiales están inspiradas en las neuronas biológicas del cerebro humano. El Perceptrón es el bloque de construcción fundamental de la IA moderna (Deep Learning). Recibe entradas, les aplica pesos numéricos, los suma y pasa el resultado por una función de activación.   Python# Celda 6: Perceptrón desde cero en Python puro
import numpy as np

# Función de activación Sigmoide (convierte cualquier valor en un rango de 0 a 1)
def sigmoide(x):
    return 1 / (1 + np.exp(-x))

class NeuronaSimple:
    def __init__(self):
        # Pesos iniciales aleatorios y sesgo (bias)
        self.pesos = np.array([0.5, 0.5])
        self.sesgo = -0.7

    def predecir(self, entradas):
        # Suma ponderada: (entrada1 * peso1) + (entrada2 * peso2) + sesgo
        suma_ponderada = np.dot(entradas, self.pesos) + self.sesgo
        return sigmoide(suma_ponderada)

# Instanciamos la neurona
neurona = NeuronaSimple()

# Evaluamos decisiones: [¿Tiene Escudo?, ¿Tiene Magia?]
test_1 = np.array([1, 1]) # Sí tiene escudo, Sí tiene magia
test_2 = np.array([0, 0]) # No tiene nada

prob_supervivencia_1 = neurona.predecir(test_1)
prob_supervivencia_2 = neurona.predecir(test_2)

print(f"🛡️ Probabilidad de sobrevivir en combate (Escudo + Magia): {prob_supervivencia_1 * 100:.2f}%")
print(f"💀 Probabilidad de sobrevivir en combate (Sin defensas): {prob_supervivencia_2 * 100:.2f}%")