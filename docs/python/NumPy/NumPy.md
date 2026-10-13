# NumPy: funcionamiento básico

<img class="library-logo library-logo--page" src="../assets/img/NumPy-logo.webp" alt="Logo de NumPy" width="120">

NumPy es la biblioteca fundamental de Python para cálculo numérico con arreglos multidimensionales. Su estructura principal, `ndarray`, almacena datos de forma compacta y permite operar sobre muchos elementos sin escribir bucles Python explícitos.

## Flujo habitual

1. Crea un arreglo desde listas o funciones como `zeros`, `ones` o `arange`.
2. Consulta su forma, tipo y dimensiones.
3. Selecciona partes con índices o máscaras.
4. Aplica operaciones vectorizadas y funciones matemáticas.
5. Ajusta la forma o combina arreglos cuando sea necesario.

```python
import numpy as np

temperaturas = np.array([18.0, 20.5, 22.0, 19.5])
media = np.mean(temperaturas)
centradas = temperaturas - media
print(centradas)
```

## Conceptos importantes

- **Dimensiones (`ndim`):** número de ejes del arreglo.
- **Forma (`shape`):** tamaño de cada eje; una matriz con 10 filas y 3 columnas tiene forma `(10, 3)`.
- **Tipo (`dtype`):** tipo común de los elementos, como `int64` o `float64`.
- **Vectorización:** operaciones como `a + b` actúan elemento a elemento y suelen ser más claras y rápidas que bucles Python.
- **Indexación:** permite acceder por posición, cortes, máscaras booleanas o índices enteros.
- **Aleatoriedad:** usa `np.random.default_rng(semilla)` para obtener resultados reproducibles.

Instalación: `pip install numpy`. Pandas, Matplotlib y Scikit-learn aceptan arreglos NumPy en muchas operaciones.
