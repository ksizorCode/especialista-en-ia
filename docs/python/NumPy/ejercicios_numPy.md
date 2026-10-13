# 📘 50 ejemplos y ejercicios de NumPy

<img class="library-logo library-logo--page" src="../assets/img/NumPy-logo.webp" alt="Logo de NumPy" width="120">

Una práctica guiada para aprender NumPy paso a paso. Empezaremos con arrays pequeños y terminaremos resolviendo problemas con matrices y datos simulados.

## 🧭 Cómo usar este documento

1. Ejecuta una vez la celda de preparación.
2. Lee la explicación de cada ejemplo antes de ejecutar el código.
3. Cambia los datos y predice el resultado antes de mirar la salida.
4. En los ejercicios, intenta resolver el reto antes de consultar la solución.

Los ejemplos usan `np` como alias de NumPy. El generador `rng` produce resultados aleatorios reproducibles: la misma semilla permite repetir una simulación.

```python
import numpy as np

# Generador aleatorio reproducible para los ejemplos que lo necesiten.
rng = np.random.default_rng(seed=42)
```

**Salida:** esta celda no imprime nada; importa NumPy y prepara el generador aleatorio.

> 💡 **Idea clave:** un `ndarray` es una colección de valores del mismo tipo, organizada en una o más dimensiones. NumPy permite operar sobre todos esos valores de una vez.

## 🟢 Nivel 1 · Fundamentos

### 1. Crear un arreglo desde una lista

`np.array()` convierte una lista de Python en un arreglo de NumPy. Los índices empiezan en cero.

```python
numeros = np.array([10, 20, 30, 40])

print(numeros)
print(type(numeros))
```

**Resultado:**

```text
[10 20 30 40]
<class 'numpy.ndarray'>
```

### 2. Comprobar el tipo de los elementos

`dtype` indica el tipo que NumPy utiliza para guardar los valores. En un arreglo numérico, todos los elementos comparten un tipo compatible.

```python
precios = np.array([2.50, 4.25, 3.00])

print(precios.dtype)
```

**Resultado:**

```text
float64
```

### 3. Elegir un tipo de dato

Puedes indicar el tipo al crear el arreglo. `float` permite guardar decimales; `int` guarda enteros.

```python
edades = np.array([18, 25, 32], dtype=np.int64)
medidas = np.array([1, 1.5, 2], dtype=float)

print(edades.dtype, medidas.dtype)
```

**Resultado:**

```text
int64 float64
```

### 4. Consultar el número de dimensiones

`ndim` cuenta los ejes. Una lista de valores forma un arreglo unidimensional.

```python
temperaturas = np.array([18.5, 20.0, 22.3])

print("Dimensiones:", temperaturas.ndim)
```

**Resultado:**

```text
Dimensiones: 1
```

### 5. Consultar la forma y el tamaño

`shape` describe cuántos elementos hay en cada eje. `size` cuenta todos los elementos.

```python
notas = np.array([[7, 8, 9], [6, 10, 8]])

print("Forma:", notas.shape)  # 2 filas y 3 columnas
print("Elementos:", notas.size)  # 6 notas en total
```

**Resultado:**

```text
Forma: (2, 3)
Elementos: 6
```

### 6. Crear un arreglo de ceros

`np.zeros()` resulta útil para preparar una estructura que rellenarás más adelante. La forma se escribe como una tupla.

```python
marcador = np.zeros(5, dtype=int)

print(marcador)
```

**Resultado:**

```text
[0 0 0 0 0]
```

### 7. Crear un arreglo de unos

`np.ones()` crea un arreglo en el que todos los elementos comienzan con valor uno.

```python
pesos = np.ones(4)

print(pesos)
```

**Resultado:**

```text
[1. 1. 1. 1.]
```

### 8. Rellenar con un valor concreto

Con `np.full()` eliges tanto la forma como el valor inicial.

```python
asientos_libres = np.full(6, fill_value=True)

print(asientos_libres)
```

**Resultado:**

```text
[ True  True  True  True  True  True]
```

### 9. Generar una secuencia con `arange`

`np.arange(inicio, fin, paso)` genera valores espaciados regularmente. El límite final no se incluye.

```python
pares = np.arange(2, 12, 2)

print(pares)  # 2, 4, 6, 8, 10
```

**Resultado:**

```text
[ 2  4  6  8 10]
```

### 10. Crear una cantidad exacta de puntos

`np.linspace()` es útil cuando necesitas un número concreto de valores entre dos extremos. En este caso incluye ambos extremos.

```python
marcas = np.linspace(0, 1, num=5)

print(marcas)
```

**Resultado:**

```text
[0.   0.25 0.5  0.75 1.  ]
```

### 11. Sumar los elementos

`np.sum()` acumula los valores de un arreglo.

```python
gastos = np.array([12, 8, 15, 5])

print("Gasto total:", np.sum(gastos), "€")
```

**Resultado:**

```text
Gasto total: 40 €
```

### 12. Calcular la media, el mínimo y el máximo

Estas funciones resumen rápidamente una colección de datos.

```python
alturas = np.array([160, 172, 168, 181, 175])

print("Media:", np.mean(alturas))
print("Más baja:", np.min(alturas))
print("Más alta:", np.max(alturas))
```

**Resultado:**

```text
Media: 171.2
Más baja: 160
Más alta: 181
```

## 🟡 Nivel 2 · Seleccionar y organizar datos

### 13. Obtener un elemento por su posición

El primer elemento está en la posición `0`; `-1` señala el último.

```python
dias = np.array(["lun", "mar", "mié", "jue", "vie"])

print("Primer día:", dias[0])
print("Último día:", dias[-1])
```

**Resultado:**

```text
Primer día: lun
Último día: vie
```

### 14. Seleccionar un tramo con un corte

En `datos[inicio:fin]`, el inicio se incluye y el final se excluye.

```python
distancias = np.array([2, 4, 6, 8, 10, 12])

print(distancias[1:4])  # posiciones 1, 2 y 3
```

**Resultado:**

```text
[4 6 8]
```

### 15. Seleccionar cada segundo elemento

El tercer valor de un corte es el paso. `::2` significa “desde el principio, de dos en dos”.

```python
lecturas = np.array([10, 11, 12, 13, 14, 15])

print(lecturas[::2])
```

**Resultado:**

```text
[10 12 14]
```

### 16. Seleccionar filas y columnas de una matriz

En una matriz, primero indicas la fila y después la columna: `matriz[fila, columna]`.

```python
tabla = np.array([[4, 7, 2], [9, 1, 5]])

print("Fila 0:", tabla[0])
print("Fila 1, columna 2:", tabla[1, 2])
```

**Resultado:**

```text
Fila 0: [4 7 2]
Fila 1, columna 2: 5
```

### 17. Seleccionar una columna completa

El símbolo `:` representa todas las posiciones de ese eje.

```python
ventas = np.array([[12, 15, 10], [9, 14, 11], [13, 8, 16]])

print("Ventas del segundo día:", ventas[:, 1])
```

**Resultado:**

```text
Ventas del segundo día: [15 14  8]
```

### 18. Crear una máscara booleana

Una comparación elemento a elemento produce `True` o `False` para cada valor.

```python
temperaturas = np.array([17, 22, 19, 25, 21])
mascara_calor = temperaturas >= 22

print(mascara_calor)
```

**Resultado:**

```text
[False  True False  True False]
```

### 19. Filtrar valores con una condición

Usa la máscara dentro de los corchetes para conservar solo los valores que la cumplen.

```python
temperaturas = np.array([17, 22, 19, 25, 21])
dias_calidos = temperaturas[temperaturas >= 22]

print(dias_calidos)
```

**Resultado:**

```text
[22 25]
```

### 20. Combinar condiciones

Usa `&` para “y” y `|` para “o”. Cada condición debe ir entre paréntesis.

```python
edades = np.array([12, 17, 22, 35, 68])
adultos_jovenes = edades[(edades >= 18) & (edades < 40)]

print(adultos_jovenes)
```

**Resultado:**

```text
[22 35]
```

### 21. Elegir valores con `where`

`np.where(condición, valor_si_verdadero, valor_si_falso)` construye un arreglo según una condición.

```python
notas = np.array([4, 7, 5, 9])
resultado = np.where(notas >= 5, "aprobado", "pendiente")

print(resultado)
```

**Resultado:**

```text
['pendiente' 'aprobado' 'aprobado' 'aprobado']
```

### 22. Encontrar la posición del mínimo y del máximo

`argmin()` y `argmax()` devuelven posiciones, no los valores. Después puedes usar esa posición para recuperar el dato.

```python
tiempos = np.array([32.5, 29.8, 31.2, 28.9])
posicion_mejor = np.argmin(tiempos)

print("Posición:", posicion_mejor)
print("Mejor tiempo:", tiempos[posicion_mejor])
```

**Resultado:**

```text
Posición: 3
Mejor tiempo: 28.9
```

### 23. Cambiar la forma sin cambiar los datos

`reshape()` reorganiza los valores. El nuevo número de filas por columnas debe coincidir con el tamaño original.

```python
valores = np.arange(1, 13)
matriz = valores.reshape(3, 4)

print(matriz)
```

**Resultado:**

```text
[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
```

### 24. Aplanar una matriz

`flatten()` crea una copia unidimensional. `ravel()` suele devolver una vista cuando puede; aquí usamos `flatten()` para mostrar la idea con claridad.

```python
matriz = np.array([[1, 2], [3, 4]])
fila = matriz.flatten()

print(fila)
```

**Resultado:**

```text
[1 2 3 4]
```

### 25. Transponer filas y columnas

`.T` intercambia los ejes de una matriz bidimensional.

```python
mediciones = np.array([[1, 2, 3], [10, 20, 30]])

print("Original:", mediciones.shape)
print("Transpuesta:\n", mediciones.T)
```

**Resultado:**

```text
Original: (2, 3)
Transpuesta:
 [[ 1 10]
 [ 2 20]
 [ 3 30]]
```

### 26. Unir arreglos en una secuencia

`np.concatenate()` pega arreglos a lo largo de un eje existente.

```python
lunes = np.array([4, 5, 6])
martes = np.array([7, 8])
semana = np.concatenate((lunes, martes))

print(semana)
```

**Resultado:**

```text
[4 5 6 7 8]
```

### 27. Apilar arreglos como filas

`np.vstack()` coloca arreglos uno debajo de otro. Deben tener el mismo número de columnas.

```python
grupo_a = np.array([5, 6, 7])
grupo_b = np.array([8, 9, 10])
grupos = np.vstack((grupo_a, grupo_b))

print(grupos)
```

**Resultado:**

```text
[[ 5  6  7]
 [ 8  9 10]]
```

## 🟠 Nivel 3 · Operaciones y análisis

### 28. Sumar una cantidad a todos los elementos

NumPy aplica la operación elemento a elemento sin que tengas que escribir un bucle.

```python
precios = np.array([10.0, 20.0, 30.0])
precios_con_iva = precios * 1.21

print(precios_con_iva)
```

**Resultado:**

```text
[12.1 24.2 36.3]
```

### 29. Operar con dos arreglos

Si dos arreglos tienen la misma forma, las operaciones básicas se hacen posición a posición.

```python
unidades = np.array([2, 3, 1])
precio_unitario = np.array([4.0, 2.5, 10.0])
importe = unidades * precio_unitario

print(importe)
```

**Resultado:**

```text
[ 8.   7.5 10. ]
```

### 30. Aplicar una función matemática

Las funciones universales, como `np.sqrt()`, trabajan sobre cada elemento del arreglo.

```python
areas = np.array([4, 9, 16, 25])
longitudes = np.sqrt(areas)

print(longitudes)
```

**Resultado:**

```text
[2. 3. 4. 5.]
```

### 31. Redondear resultados

`np.round()` redondea los valores; el segundo argumento indica cuántas cifras decimales conservar.

```python
medias = np.array([6.6666, 7.125, 8.999])

print(np.round(medias, 2))
```

**Resultado:**

```text
[6.67 7.12 9.  ]
```

### 32. Calcular totales por fila o columna

En una matriz, `axis=0` reduce las filas y deja un resultado por columna. `axis=1` reduce las columnas y deja un resultado por fila.

```python
# Filas: alumnado. Columnas: tres pruebas.
notas = np.array([[6, 8, 7], [9, 7, 10], [5, 6, 8]])

print("Total por alumno:", np.sum(notas, axis=1))
print("Total por prueba:", np.sum(notas, axis=0))
```

**Resultado:**

```text
Total por alumno: [21 26 19]
Total por prueba: [20 21 25]
```

### 33. Calcular la media por alumno

Con `axis=1`, cada fila se resume por separado. Es una forma directa de obtener la media de cada alumno.

```python
notas = np.array([[6, 8, 7], [9, 7, 10], [5, 6, 8]])
medias = np.mean(notas, axis=1)

print(np.round(medias, 2))
```

**Resultado:**

```text
[6.67 8.67 6.33]
```

### 34. Contar cuántos valores cumplen una condición

En NumPy, `True` equivale a `1` y `False` a `0` en una suma. Así se puede contar una máscara.

```python
notas = np.array([4, 5, 8, 3, 10, 6])
aprobados = np.sum(notas >= 5)

print("Aprobados:", aprobados)
```

**Resultado:**

```text
Aprobados: 4
```

### 35. Ordenar y obtener valores únicos

`np.sort()` devuelve los valores ordenados. `np.unique()` elimina repeticiones y los devuelve ordenados.

```python
respuestas = np.array([3, 1, 3, 2, 1, 4])

print("Ordenadas:", np.sort(respuestas))
print("Sin repetir:", np.unique(respuestas))
```

**Resultado:**

```text
Ordenadas: [1 1 2 3 3 4]
Sin repetir: [1 2 3 4]
```

### 36. Contar las apariciones de cada valor

`np.bincount()` cuenta cuántas veces aparece cada entero no negativo. La posición del resultado representa el valor contado.

```python
tiradas = np.array([1, 2, 2, 3, 3, 3, 6])
frecuencias = np.bincount(tiradas, minlength=7)

print("Frecuencias para 0–6:", frecuencias)
```

**Resultado:**

```text
Frecuencias para 0–6: [0 1 2 3 0 0 1]
```

### 37. Calcular mediana y desviación típica

La media puede verse afectada por valores extremos. La mediana representa el valor central y la desviación típica resume cuánto se dispersan los datos alrededor de la media.

```python
salarios = np.array([1200, 1250, 1300, 1280, 6000])

print("Media:", np.mean(salarios))
print("Mediana:", np.median(salarios))
print("Desviación típica:", np.round(np.std(salarios), 2))
```

**Resultado:**

```text
Media: 2206.0
Mediana: 1280.0
Desviación típica: 1897.3
```

### 38. Calcular percentiles

Un percentil indica el valor por debajo del cual queda un porcentaje de las observaciones. El percentil 50 coincide con la mediana.

```python
tiempos = np.array([12, 15, 18, 20, 22, 25, 30, 35])

print("Mediana:", np.percentile(tiempos, 50))
print("Percentil 75:", np.percentile(tiempos, 75))
```

**Resultado:**

```text
Mediana: 21.0
Percentil 75: 26.25
```

### 39. Tratar datos ausentes (`NaN`)

`NaN` significa “no es un número” y suele representar un dato ausente. Las funciones `nanmean` y `nansum` ignoran esos valores.

```python
lecturas = np.array([18.0, np.nan, 20.0, 22.0])

print("Media ignorando ausentes:", np.nanmean(lecturas))
print("Total ignorando ausentes:", np.nansum(lecturas))
```

**Resultado:**

```text
Media ignorando ausentes: 20.0
Total ignorando ausentes: 60.0
```

### 40. Normalizar valores entre 0 y 1

La normalización min-max cambia la escala sin alterar el orden de los valores. Si todos los valores son iguales, el denominador sería cero; por eso conviene revisar ese caso en datos reales.

```python
precios = np.array([100.0, 200.0, 300.0, 400.0])
minimo = np.min(precios)
maximo = np.max(precios)
normalizados = (precios - minimo) / (maximo - minimo)

print(normalizados)
```

**Resultado:**

```text
[0.         0.33333333 0.66666667 1.        ]
```

### 41. Usar `keepdims` para conservar los ejes

`keepdims=True` mantiene las dimensiones reducidas con tamaño uno. Esto ayuda a combinar el resultado con el arreglo original.

```python
datos = np.array([[10, 20, 30], [2, 4, 6]])
medias_por_fila = np.mean(datos, axis=1, keepdims=True)
centrados = datos - medias_por_fila

print("Medias:\n", medias_por_fila)
print("Centrados:\n", centrados)
```

**Resultado:**

```text
Medias:
 [[20.]
 [ 4.]]
Centrados:
 [[-10.   0.  10.]
 [ -2.   0.   2.]]
```

### 42. Entender el broadcasting

El *broadcasting* permite combinar formas compatibles. Aquí, un vector con una media por columna se resta a cada fila de la matriz.

```python
mediciones = np.array([[10, 100], [20, 200], [30, 300]])
media_por_columna = np.mean(mediciones, axis=0)
desviaciones = mediciones - media_por_columna

print("Media por columna:", media_por_columna)
print("Desviaciones:\n", desviaciones)
```

**Resultado:**

```text
Media por columna: [ 20. 200.]
Desviaciones:
 [[ -10. -100.]
 [   0.    0.]
 [  10.  100.]]
```

### 43. Crear números aleatorios reproducibles

Usa `default_rng()` en lugar de las funciones aleatorias antiguas. La semilla hace que otra ejecución del mismo código genere la misma secuencia.

```python
rng_local = np.random.default_rng(seed=7)
temperaturas = rng_local.integers(15, 31, size=7)

print(temperaturas)
```

**Resultado:**

```text
[30 25 25 29 24 27 28]
```

### 44. Simular mediciones decimales

`rng.normal()` genera valores alrededor de una media (`loc`) con una desviación típica indicada por `scale`.

```python
rng_local = np.random.default_rng(seed=10)
mediciones = rng_local.normal(loc=100, scale=5, size=5)

print(np.round(mediciones, 1))
```

**Resultado:**

```text
[ 94.5  96.4  96.1 101.3  98.8]
```

### 45. Elegir elementos aleatorios

`rng.choice()` selecciona elementos de una colección. Con `replace=False`, un elemento no se repite en la misma selección.

```python
rng_local = np.random.default_rng(seed=21)
alumnos = np.array(["Ana", "Luis", "Noa", "Hugo", "Eva"])
seleccion = rng_local.choice(alumnos, size=3, replace=False)

print(seleccion)
```

**Resultado:**

```text
['Luis' 'Ana' 'Hugo']
```

## 🔴 Nivel 4 · Aplicaciones y álgebra lineal

### 46. Simular ventas semanales

Este ejemplo reúne creación aleatoria, operaciones vectorizadas, filtros y agregaciones.

```python
rng_local = np.random.default_rng(seed=42)
ventas = rng_local.integers(50, 201, size=7)  # euros por día
dias = np.array(["lun", "mar", "mié", "jue", "vie", "sáb", "dom"])

print("Ventas:", ventas)
print("Total semanal:", np.sum(ventas), "€")
print("Media diaria:", round(np.mean(ventas), 2), "€")
print("Días por encima de 150 €:", dias[ventas > 150])
```

**Resultado:**

```text
Ventas: [ 63 166 148 116 115 179  62]
Total semanal: 849 €
Media diaria: 121.29 €
Días por encima de 150 €: ['mar' 'sáb']
```

### 47. Calcular el producto escalar

El producto escalar multiplica los elementos correspondientes y suma esos productos. Puede representar, por ejemplo, el coste total de una cesta.

```python
cantidades = np.array([2, 1, 3])
precios = np.array([4.50, 12.0, 2.0])
total = np.dot(cantidades, precios)

print("Total de la cesta:", total, "€")
```

**Resultado:**

```text
Total de la cesta: 27.0 €
```

### 48. Multiplicar matrices

`@` realiza el producto matricial. `*` multiplica los valores posición a posición; son operaciones distintas.

```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[10, 0], [0, 10]])

print("Producto matricial:\n", A @ B)
print("Producto elemento a elemento:\n", A * B)
```

**Resultado:**

```text
Producto matricial:
 [[10 20]
 [30 40]]
Producto elemento a elemento:
 [[10  0]
 [ 0 40]]
```

### 49. Resolver un sistema de ecuaciones

`np.linalg.solve(A, b)` encuentra los valores de `x` que cumplen `A @ x = b`. La matriz debe tener dimensiones compatibles y un sistema con solución única.

```python
# Sistema: 2x + y = 8; x + 3y = 9
A = np.array([[2, 1], [1, 3]], dtype=float)
b = np.array([8, 9], dtype=float)
solucion = np.linalg.solve(A, b)

print("x, y:", solucion)
print("Comprobación:", A @ solucion)
```

**Resultado:**

```text
x, y: [3. 2.]
Comprobación: [8. 9.]
```

### 50. Ajustar una recta con mínimos cuadrados

`np.linalg.lstsq()` estima una recta `y = m·x + b` que se aproxima a los datos. Es una introducción numérica al ajuste lineal.

```python
x = np.array([0, 1, 2, 3, 4], dtype=float)
y = np.array([1.1, 2.9, 5.2, 6.8, 9.1])

# Cada fila representa: pendiente * x + intercepto.
X = np.column_stack((x, np.ones_like(x)))
pendiente, intercepto = np.linalg.lstsq(X, y, rcond=None)[0]
predicciones = pendiente * x + intercepto

print("Pendiente:", round(pendiente, 2))
print("Intercepto:", round(intercepto, 2))
print("Predicciones:", np.round(predicciones, 2))
```

**Resultado:**

```text
Pendiente: 1.99
Intercepto: 1.04
Predicciones: [1.04 3.03 5.02 7.01 9.  ]
```

## 🧠 Resumen de conceptos

| Concepto | Uso sencillo | Ejemplo |
|---|---|---|
| Crear arreglos | Convertir listas en datos NumPy | `np.array([1, 2, 3])` |
| Forma | Ver filas y columnas | `datos.shape` |
| Selección | Elegir elementos o tramos | `datos[1:4]` |
| Máscara | Filtrar por condición | `datos[datos > 5]` |
| Ejes | Resumir filas o columnas | `np.mean(matriz, axis=0)` |
| Broadcasting | Operar con formas compatibles | `matriz - medias` |
| Estadística | Resumir una colección | `np.median(datos)` |
| Aleatoriedad | Simular datos reproducibles | `np.random.default_rng(42)` |
| Álgebra lineal | Resolver operaciones con matrices | `np.linalg.solve(A, b)` |

## 🎯 Ejercicios y retos para practicar

Resuélvelos en orden: los primeros practican operaciones sencillas y los últimos combinan varios conceptos. Usa la celda de preparación del principio para importar NumPy. Cada pista está plegada; ábrela solo si te hace falta.

### 🟢 Nivel 1 · Primeros pasos

#### 1. Crear un arreglo de edades

Crea un arreglo con las edades `12, 18, 25, 31` y muestra su tipo de dato.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Usa <code>np.array([...])</code> y consulta el atributo <code>dtype</code>.</p></details>

#### 2. Calcular el coste de una compra

Guarda los precios `2.50, 1.20, 3.30` en un arreglo y calcula el total.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>La función <code>np.sum()</code> suma los elementos.</p></details>

#### 3. Crear una secuencia de pares

Genera los números pares del 2 al 20, ambos incluidos, sin escribirlos uno por uno.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Con <code>np.arange()</code>, el límite final no se incluye. Piensa qué límite debes pasar para que aparezca el 20.</p></details>

#### 4. Repartir marcas en una escala

Crea 6 marcas equidistantes entre 0 y 100, incluyendo los extremos.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Usa <code>np.linspace(0, 100, num=6)</code>.</p></details>

#### 5. Preparar un marcador

Crea un arreglo de 5 ceros enteros para registrar los puntos de cinco equipos.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Indica el número de elementos y el tipo con <code>np.zeros(5, dtype=int)</code>.</p></details>

#### 6. Consultar estadísticas de alturas

Con las alturas `160, 172, 168, 181, 175`, calcula la media, la mínima y la máxima.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Combina <code>np.mean()</code>, <code>np.min()</code> y <code>np.max()</code>.</p></details>

#### 7. Elegir el primer y último elemento

Guarda los días `lun, mar, mié, jue, vie` y muestra el primero y el último.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Los índices son <code>0</code> para el primero y <code>-1</code> para el último.</p></details>

#### 8. Seleccionar días laborables

De un arreglo con los siete días de la semana, selecciona de lunes a viernes usando un corte.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Recuerda que el índice final del corte no se incluye.</p></details>

#### 9. Aplicar un descuento

Aplica un descuento del 10 % a los precios `10, 25, 40` sin usar un bucle.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Multiplica el arreglo por <code>0.9</code>; NumPy aplica la operación a cada precio.</p></details>

#### 10. Cambiar la forma de los datos

Crea los números del 1 al 12 y ordénalos en una matriz de 3 filas y 4 columnas.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Genera 12 valores y aplica <code>reshape(3, 4)</code>.</p></details>

### 🟡 Nivel 2 · Selección y filtros

#### 11. Encontrar temperaturas altas

Con las temperaturas `17, 22, 19, 25, 21`, crea un arreglo solo con las que sean mayores o iguales a 22.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Filtra con una máscara: <code>temperaturas[temperaturas &gt;= 22]</code>.</p></details>

#### 12. Seleccionar edades en un intervalo

De las edades `12, 18, 25, 15, 30, 42`, selecciona las que estén entre 18 y 30, incluidos ambos extremos.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Combina las comparaciones con <code>&amp;</code> y pon cada comparación entre paréntesis.</p></details>

#### 13. Clasificar notas

Convierte las notas `4, 7, 5, 9` en las etiquetas «suspenso» si son menores que 5 y «aprobado» si son 5 o más.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p><code>np.where(condición, valor_si_se_cumple, valor_si_no)</code> elige una etiqueta para cada nota.</p></details>

#### 14. Contar aprobados

Con las notas `4, 5, 8, 3, 10, 6`, cuenta cuántas son aprobadas (5 o más).

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Suma la máscara booleana <code>notas &gt;= 5</code>; cada <code>True</code> cuenta como uno.</p></details>

#### 15. Encontrar el día de menor venta

Las ventas fueron `120, 95, 140, 80, 110`. Encuentra la posición del día con menos ventas y el valor vendido.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Usa <code>np.argmin()</code> para obtener la posición y luego indexa el arreglo con ella.</p></details>

#### 16. Ordenar resultados de una carrera

Ordena los tiempos `32.5, 29.8, 31.2, 28.9` del más rápido al más lento.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Como un tiempo menor significa más rapidez, orden ascendente sirve aquí: <code>np.sort(tiempos)</code>.</p></details>

#### 17. Obtener categorías sin repetir

Una encuesta devuelve las respuestas `3, 1, 3, 2, 1, 4`. Muestra las categorías distintas.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Prueba <code>np.unique()</code>.</p></details>

#### 18. Resumir una tabla de notas

Crea una matriz con estas notas: Ana `6, 8, 7`; Luis `9, 7, 10`; Noa `5, 6, 8`. Calcula la media de cada alumno.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Coloca un alumno por fila y calcula la media con <code>axis=1</code>.</p></details>

#### 19. Comparar pruebas

Usa la matriz del ejercicio anterior para calcular la media de cada prueba.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Las pruebas están en columnas; calcula la media con <code>axis=0</code>.</p></details>

#### 20. Contar respuestas de una encuesta

Simula 100 respuestas enteras entre 1 y 5. Calcula cuántas veces aparece cada respuesta.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Usa <code>rng.integers(1, 6, size=100)</code> y <code>np.bincount(respuestas, minlength=6)</code>. Ignora la posición cero del conteo.</p></details>

### 🟠 Nivel 3 · Estadística y transformación

#### 21. Normalizar precios

Transforma los precios `100, 200, 300, 400` a una escala de 0 a 1 usando normalización min-max.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Resta el mínimo y divide entre la diferencia entre el máximo y el mínimo.</p></details>

#### 22. Evitar la división por cero

Adapta la normalización anterior para una lista en la que todos los valores sean `50`. Evita que el cálculo divida entre cero.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Comprueba si el máximo y el mínimo son iguales antes de dividir. En ese caso, puedes devolver ceros.</p></details>

#### 23. Calcular mediana frente a media

Con los salarios `1200, 1250, 1300, 1280, 6000`, calcula media y mediana. Explica cuál representa mejor a la mayoría en este ejemplo.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Calcula <code>np.mean()</code> y <code>np.median()</code>. El salario extremo influye mucho en la media.</p></details>

#### 24. Calcular un percentil

Con los tiempos `12, 15, 18, 20, 22, 25, 30, 35`, calcula el percentil 75.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Usa <code>np.percentile(tiempos, 75)</code>.</p></details>

#### 25. Tratar medidas ausentes

Calcula la media de `18, NaN, 20, 22` ignorando el dato ausente.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Representa el dato como <code>np.nan</code> y calcula la media con <code>np.nanmean()</code>.</p></details>

#### 26. Centrar cada fila

Con la matriz `[[10, 20, 30], [2, 4, 6]]`, resta a cada fila su propia media. El resultado debe tener media cero en cada fila.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Calcula la media con <code>axis=1</code> y <code>keepdims=True</code> para que tenga forma compatible con la matriz.</p></details>

#### 27. Calcular cambios entre días

Las ventas diarias fueron `100, 120, 90, 135`. Calcula cuánto cambiaron de un día al siguiente.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p><code>np.diff(ventas)</code> resta cada valor del siguiente.</p></details>

#### 28. Combinar mediciones por columnas

Une las mediciones de temperatura `[18, 20, 21]` y humedad `[60, 55, 58]` en una matriz con una columna para cada variable.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Convierte cada vector en una columna con <code>reshape(-1, 1)</code> y únelos con <code>np.hstack()</code>.</p></details>

#### 29. Simular temperaturas reproducibles

Genera 7 temperaturas enteras entre 15 y 30 usando una semilla fija. Ejecuta dos veces el código y comprueba que obtienes la misma semana.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Crea un generador con <code>np.random.default_rng(seed=42)</code> y usa <code>integers(15, 31, size=7)</code>.</p></details>

#### 30. Crear coordenadas con broadcasting

Crea los valores `x = [-1, 0, 1]` e `y = [-2, 0, 2]`. Calcula una matriz con `z = x² + y²` para todas las combinaciones.

<details class="exercise-hint"><summary>💡 Mostrar pista</summary><p>Da forma de columna a `x` con <code>x[:, None]</code> y de fila a `y` con <code>y[None, :]</code>. Al sumarlos, NumPy combina ambas formas.</p></details>

## ✅ Qué conviene recordar

- NumPy suele aplicar operaciones a todos los elementos sin bucles explícitos.
- Los cortes incluyen el inicio y excluyen el final.
- `shape`, `ndim`, `size` y `dtype` describen la estructura del arreglo.
- Comprueba qué significa cada eje antes de usar `axis=0` o `axis=1`.
- Usa `default_rng(seed)` para que una simulación se pueda repetir.
- Para arrays, `A @ B` es producto matricial y `A * B` es multiplicación elemento a elemento.
