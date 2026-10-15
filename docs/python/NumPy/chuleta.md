# NumPy: chuleta

<img class="library-logo library-logo--page" src="../assets/img/NumPy-logo.webp" alt="Logo de NumPy" width="120">

| Uso | Función / atributo | Ejemplo corto | Tip |
|---|---|---|---|
| Crear arreglo | `array` | `a = np.array([1, 2, 3])` | NumPy asigna un tipo común a los elementos. |
| Arreglo de ceros | `zeros` | `z = np.zeros((2, 3))` | La forma se indica como una tupla. |
| Secuencia espaciada | `arange` | `x = np.arange(0, 10, 2)` | El límite final no se incluye. |
| Valores equidistantes | `linspace` | `x = np.linspace(0, 1, 5)` | Útil cuando quieres un número concreto de puntos. |
| Aleatorios | `default_rng` | `rng = np.random.default_rng(42); x = rng.random(3)` | Fija una semilla para reproducir resultados. |
| Forma | `shape` | `filas, cols = a.shape` | Atributo, sin paréntesis. |
| Cambiar forma | `reshape` | `b = a.reshape(2, 3)` | El número total de elementos debe coincidir. |
| Selección | Indexación | `a[0]`, `a[1:4]` | Los cortes no incluyen el extremo final. |
| Filtrar | Máscara booleana | `positivos = a[a > 0]` | La máscara debe ser compatible con la forma. |
| Suma / media | `sum`, `mean` | `np.mean(a)` | Usa `axis=0` o `axis=1` para operar por eje. |
| Mínimo / máximo | `min`, `max` | `np.max(a)` | `argmax` devuelve la posición del máximo. |
| Combinar | `concatenate` | `np.concatenate([a, b])` | El resto de las dimensiones debe coincidir. |
| Transponer | `T` | `matriz.T` | Intercambia ejes en una matriz 2D. |
| Álgebra lineal | `linalg` | `np.linalg.solve(A, b)` | Resuelve `A x = b`; requiere dimensiones compatibles. |
| Producto matricial | `@` | `resultado = A @ B` | Distingue el producto matricial de `A * B`, elemento a elemento. |

## Tips rápidos

- Evita mezclar arreglos de formas incompatibles; comprueba `shape` antes de operar.
- NumPy puede aplicar *broadcasting* cuando las dimensiones son compatibles; verifica que sea la operación que pretendes.
- Usa operaciones vectorizadas y `axis` antes de escribir bucles.
- Los cortes básicos pueden ser vistas del arreglo original; usa `.copy()` si necesitas una copia independiente.



---


