# 🤖 Guía práctica de algoritmos de Inteligencia Artificial en Python

**Curso:** Especialización en Inteligencia Artificial  
**Plataforma de trabajo:** Google Colab  
**Profesor:** Tu asistente de IA

## Índice

1. Introducción
2. Visualización y entorno
3. Regresión lineal
4. Árboles de decisión
5. K-Means
6. K-Nearest Neighbors (KNN)
7. Red neuronal simple: perceptrón

## Algoritmos básicos de IA

- Regresión lineal y regresión logística
- K-Nearest Neighbors (KNN), K-Means y K-Medoids
- Árboles de decisión, Random Forest, Naive Bayes y SVM
- Gradient Boosting, AdaBoost y XGBoost
- Redes neuronales artificiales: perceptrón, backpropagation, CNN, RNN, LSTM y Transformers
- Algoritmos genéticos, PCA, Apriori y DBSCAN
- Aprendizaje por refuerzo: Q-Learning y SARSA
- Búsqueda y planificación: Minimax, A*, BFS y DFS

---

## Introducción

¡Bienvenidos, futuros especialistas en IA! 👋

En estos apuntes estudiaremos algoritmos fundamentales de Inteligencia Artificial y *Machine Learning*, viendo tanto su teoría como código ejecutable y gráficos visuales.

### Cómo usar este cuaderno en Google Colab

1. Entra en Google Colab.
2. Crea un **Nuevo cuaderno**.
3. Copia cada bloque de código en una celda diferente.
4. Ejecútalo con el botón **Play** ▶️ o con Shift + Enter.

## Visualización y entorno

Antes de empezar, cargamos NumPy para operaciones numéricas, Matplotlib para gráficos y Pandas para el manejo de datos.

~~~python
# Celda 1: Importación de herramientas principales
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

print("✅ Entorno preparado con éxito.")
~~~

## Regresión lineal

**Tipo:** Aprendizaje supervisado.

> 💡 La regresión lineal busca encontrar la recta que mejor se ajusta a un conjunto de puntos.

**Ejemplo:** predecir los puntos de experiencia (XP) que gana un héroe según sus horas de entrenamiento.

~~~python
# Celda 2: Regresión lineal visual
from sklearn.linear_model import LinearRegression

# Datos de entrenamiento: horas vs. puntos de experiencia (XP)
horas_entrenamiento = np.array([[1], [2], [4], [6], [7], [9], [10]])
xp_ganada = np.array([150, 280, 500, 780, 910, 1150, 1300])

# Crear y entrenar el modelo
modelo_regresion = LinearRegression()
modelo_regresion.fit(horas_entrenamiento, xp_ganada)

# Predicción para un estudiante que entrena 5.5 horas
horas_nuevas = np.array([[5.5]])
xp_predicha = modelo_regresion.predict(horas_nuevas)

# Visualización gráfica
plt.figure(figsize=(8, 5))
plt.scatter(horas_entrenamiento, xp_ganada, color='purple', label='Datos reales de entrenamiento', s=100)
plt.plot(horas_entrenamiento, modelo_regresion.predict(horas_entrenamiento), color='orange', linewidth=2, label='Línea de predicción de IA')
plt.scatter(horas_nuevas, xp_predicha, color='red', marker='*', s=250, label=f'Predicción para 5.5h ({xp_predicha[0]:.0f} XP)')

plt.title("🏰 Regresión lineal: predicción de experiencia (XP)")
plt.xlabel("Horas de entrenamiento")
plt.ylabel("Puntos de experiencia (XP)")
plt.legend()
plt.grid(True)
plt.show()
~~~

## Árboles de decisión

**Tipo:** Aprendizaje supervisado — clasificación.

> 💡 Un árbol de decisión divide un problema complejo en preguntas consecutivas del tipo «¿sí o no?».

**Ejemplo:** decidir la casa de Hogwarts —Gryffindor o Slytherin— según la valentía y la ambición de un estudiante.

~~~python
# Celda 3: Árbol de decisión gráfico
from sklearn.tree import DecisionTreeClassifier, plot_tree

# Datos: [Valentía (1-10), Ambición (1-10)]
X_alumnos = np.array([
    [9, 2], [8, 3], [10, 1], [9, 4],  # Gryffindor (clase 0)
    [2, 9], [3, 8], [1, 10], [4, 9]   # Slytherin (clase 1)
])
y_casas = np.array([0, 0, 0, 0, 1, 1, 1, 1])

arbol_hogwarts = DecisionTreeClassifier(max_depth=3)
arbol_hogwarts.fit(X_alumnos, y_casas)

plt.figure(figsize=(10, 6))
plot_tree(
    arbol_hogwarts,
    feature_names=["Valentía", "Ambición"],
    class_names=["Gryffindor 🦁", "Slytherin 🐍"],
    filled=True,
    rounded=True,
)
plt.title("🧙‍♂️ Sombrero seleccionador: árbol de decisión")
plt.show()
~~~

## K-Means

**Tipo:** Aprendizaje no supervisado — agrupamiento.

> 💡 K-Means no recibe etiquetas ni respuestas correctas: explora los datos y encuentra grupos (*clusters*) de elementos similares.

**Ejemplo:** detectar tres clanes de criaturas mágicas según fuerza y velocidad, sin conocer su especie previamente.

~~~python
# Celda 4: Agrupamiento con K-Means
from sklearn.cluster import KMeans

# Datos simulados de tres especies: trolls, elfos y goblins
np.random.seed(42)
fuerza = np.concatenate([
    np.random.normal(90, 5, 20),
    np.random.normal(30, 5, 20),
    np.random.normal(50, 5, 20),
])
velocidad = np.concatenate([
    np.random.normal(20, 5, 20),
    np.random.normal(90, 5, 20),
    np.random.normal(60, 5, 20),
])
X_criaturas = np.column_stack((fuerza, velocidad))

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
etiquetas = kmeans.fit_predict(X_criaturas)
centroides = kmeans.cluster_centers_

plt.figure(figsize=(8, 6))
plt.scatter(X_criaturas[:, 0], X_criaturas[:, 1], c=etiquetas, cmap='viridis', s=70, alpha=0.8)
plt.scatter(centroides[:, 0], centroides[:, 1], c='red', marker='X', s=200, label='Centroides de grupo')
plt.title("🧌 K-Means: descubrimiento de clanes mágicos")
plt.xlabel("Fuerza")
plt.ylabel("Velocidad")
plt.legend()
plt.grid(True)
plt.show()
~~~

## K-Nearest Neighbors (KNN)

**Tipo:** Clasificación por proximidad.

> 💡 Para clasificar un elemento nuevo, KNN busca los $K$ puntos más cercanos y vota por la clase mayoritaria.

**Ejemplo:** identificar si un elixir es una poción curativa o un veneno según su brillo y densidad.

~~~python
# Celda 5: Clasificación con KNN
from sklearn.neighbors import KNeighborsClassifier

# Datos: [Brillo (1-100), Densidad (1-100)]
# Poción curativa (0), veneno (1)
X_pociones = np.array([
    [80, 20], [90, 15], [85, 30],
    [10, 90], [20, 85], [15, 95]
])
y_tipo = np.array([0, 0, 0, 1, 1, 1])

knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_pociones, y_tipo)

pocion_misteriosa = np.array([[75, 25]])
resultado = knn.predict(pocion_misteriosa)
nombre_resultado = "Poción curativa 🧪" if resultado[0] == 0 else "Veneno ☠️"

plt.figure(figsize=(8, 5))
plt.scatter(X_pociones[:3, 0], X_pociones[:3, 1], color='green', label='Poción curativa', s=100)
plt.scatter(X_pociones[3:, 0], X_pociones[3:, 1], color='black', label='Veneno', s=100)
plt.scatter(pocion_misteriosa[0, 0], pocion_misteriosa[0, 1], color='red', marker='*', s=300, label=f'Muestra nueva: {nombre_resultado}')
plt.title("🧪 KNN: clasificador de elixires y pociones")
plt.xlabel("Brillo")
plt.ylabel("Densidad")
plt.legend()
plt.grid(True)
plt.show()
~~~

## Red neuronal simple: perceptrón

> 💡 Las redes neuronales artificiales se inspiran en las neuronas biológicas. El perceptrón recibe entradas, les aplica pesos, las suma y pasa el resultado por una función de activación.

~~~python
# Celda 6: Perceptrón desde cero en Python puro
import numpy as np

# Función sigmoide: convierte cualquier valor en un rango de 0 a 1
def sigmoide(x):
    return 1 / (1 + np.exp(-x))


class NeuronaSimple:
    def __init__(self):
        # Pesos iniciales y sesgo (bias)
        self.pesos = np.array([0.5, 0.5])
        self.sesgo = -0.7

    def predecir(self, entradas):
        # Suma ponderada: (entrada1 * peso1) + (entrada2 * peso2) + sesgo
        suma_ponderada = np.dot(entradas, self.pesos) + self.sesgo
        return sigmoide(suma_ponderada)


neurona = NeuronaSimple()

# Evaluamos decisiones: [¿Tiene escudo?, ¿Tiene magia?]
test_1 = np.array([1, 1])
test_2 = np.array([0, 0])

prob_supervivencia_1 = neurona.predecir(test_1)
prob_supervivencia_2 = neurona.predecir(test_2)

print(f"🛡️ Probabilidad de sobrevivir en combate (Escudo + Magia): {prob_supervivencia_1 * 100:.2f}%")
print(f"💀 Probabilidad de sobrevivir en combate (Sin defensas): {prob_supervivencia_2 * 100:.2f}%")
~~~
