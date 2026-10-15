# 🚀 Ejercicios Frikys con Numpy

## ▶️ Bloque 1: El Sombrero Seleccionador y Creación de Arrays Básicos


### 📦 Reto 001: Los puntos de las Casas de Hogwarts

Estás en la Gran Sala y el profesor Dumbledore necesita registrar los puntos actuales de las cuatro casas (Gryffindor, Slytherin, Ravenclaw y Hufflepuff). Crea un array de NumPy con los siguientes puntos iniciales: [450, 420, 430, 410]. Muestra el array por pantalla y comprueba su tipo de datos (dtype).

- en Enero se otrogan 5 puntos a Gryffindor, 17 a Slytherin, 23 a Ravenclaw y 32 a Hufflepuff
- en Febrero : 34 Gryffindor, 21 a Slytherin, 32 a Ravenclaw y 17 a Hufflepuff
- al final del curso por faltas de asistencia y mal comportamiento de los alumnos se restan: -134 Gryffindor, -121 a Slytherin, -132 a Ravenclaw y -117 a Hufflepuff

Muestra la evolución de las puntuaciones por meses y el resultado final

Señala automáticamente cual es la casa ganadora de la compa de la casa.

<details>
<summary>Ejercicio Resuelto</summary>

```python
# DATOS
casas = np.array(['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'])

iniciales = np.array([450,420, 430, 410])   #puntos iniciales

ene = np.array([5, 17, 23, 32])             #puntos de Enero
feb = np.array([34, 21, 32, 17])            #puntos de Febrero
mal = np.array([-134,-121,-132,-117])       #mal comportamiento


# OPCION 1. MOSTRAR DATOS Versión con variables intermedias
print(f"Casas: {casas}")
print(f"Puntos  previos: {iniciales}")
totalEnero = iniciales + ene
print(f"Puntos en Enero: {totalEnero}")
totalFebrero = totalEnero + feb
print(f"Puntos  Febrero: {totalFebrero}")
puntosFinales = totalFebrero + mal
print(f"Puntos  Finales: {puntosFinales}")
print("----")

# OPCION 2. MOSTRAR DATOS Versión con suma directa
print(f"Puntos  previos: {iniciales}")
print(f"Puntos en Enero: {iniciales+ene}")
print(f"Puntos  Febrero: {iniciales+ene+feb}")
print(f"Puntos  Finales: {iniciales+ene+feb+mal}")
print("----")

# OPCION 3. MOSTRAR DATOS Versión con bucle

listas = [iniciales, ene, feb, mal]   # las listas con las que vamos a trabajar
puntos = np.empty(len(casas))         # array vacio con 4 espacios: [ , , , ]
mensajes=["Puntos  previos", "Puntos en Enero", "Puntos  Febrero", "Puntos  Finales"]

for i in range(len(listas)):
    puntos += listas[i]
    print(f"{mensajes[i]}: {puntos}")


# Quine ha ganado?
# al final de la temporada Griffindor es el ganador con 355:  [355 337 353 342]
ganador = np.argmax(puntos)  #almacenamos la posición del array donde se encuentra el valor máximo [0]

print(f"🏆La casa que ha ganado es: {casas[ganador]}") # muestra el valor del array casas en la posición 0, que es Griffindor
```

</details>



---

### 📦 Reto 002: El inventario de varitas en Ollivanders

Mr. Ollivander quiere organizar su stock de varitas mágicas hechas con diferentes núcleos (Pluma de Fénix, Pelo de Unicornio, Nervio de Dragón). Crea un array unidimensional usando np.array() con el número de varitas de cada tipo: [12, 25, 8, 30]. Multiplica todo el inventario por 2 debido a un cargamento imprevisto que acaba de llegar de Diagon Alley.

- Cuantas varitas de cada tipo tenía inicialmente?
- Cuantas varitas de cada tipo tiene tras el cargamento imprevisto?
- Cuantas varitas tiene en total?



### 📦 Reto 003: Creando el mapa de El Señor de los Anillos (Ceros y Unos)

Para planificar el avance de la Comunidad del Anillo, necesitas una cuadrícula base de terreno inexplorado de tamaño 3x4 llena de ceros (representando terreno llano), y otra matriz idéntica de tamaño 2x3 llena de unos (representando murallas de Mordor). Utiliza las funciones np.zeros() y np.ones().

Luego genera otra versión del mapa aleatorio (ceros y unos) donde imaginaremos que los 0 es tierra y los 1 son barreras naturales


```python
# ARRAY DE CEROS - - - -  - - -
# array unidimensional con 5 ceros
ceros= np.zeros(5)
print(ceros)
# [0,0,0,0,0]

# matriz 2x3 de ceros (especificando tipo etnero)
matriz_ceros=np.zeros((2,3),dtype=int)
print(matriz_ceros)
# [0,0]
# [0,0]
# [0,0]


# ARRAY DE UNOS - - - - - - - - - - -
# array unidimensila con 4 unos
unos = np.ones(4)
print(unos)
# [1,1,1,1]

# matriz 3x2 de unos (tipo entero)
matriz_unos = np.ones((3,2),dtype=int)
print(matriz_unos)
# [0,0,0]
# [0,0,0]


# ARRAY CON ALEATORIOS - - - - - - - - - - - 
#array de 10 elementos con valores de 0 (inclusive) y 2 (excluido): de 0 y 1
binarios_aleatoros=np.random.radiant(0,2, size=10)
pront(binarios_aleatorios)
# [0 1 0 0 0 0 1 1 1 1]
```


```dash
# Resultado
💧 🔥 ⛰️ 🔥 🔥 🌲 ⛰️ ⛰️ ⛰️ 🔥 💧 ⛰️ 🏰 🔥 🌲 💧 🏰 🏰 🌲 💧
🔥 🟩 💧 🌲 🏰 🔥 💧 🟩 🟩 ⛰️ ⛰️ 🌲 💧 💧 🏰 🏰 🏰 ⛰️ 💧 💧
🟩 ⛰️ 🔥 ⛰️ 🔥 🟩 🌲 💧 🟩 💧 🏰 🌲 🌲 🟩 🌲 🔥 🌲 💧 💧 💧
💧 🔥 ⛰️ 🏰 🟩 💧 🌲 💧 🌲 🏰 🏰 🏰 🌲 💧 🏰 🔥 🌲 🌲 💧 🌲
🌲 🏰 💧 🏰 🏰 💧 🟩 🏰 🔥 🔥 🌲 🔥 🌲 🟩 💧 💧 💧 🔥 🟩 🔥
🔥 🟩 🟩 🟩 🟩 💧 ⛰️ ⛰️ 🟩 ⛰️ ⛰️ 🟩 ⛰️ 🔥 🌲 🌲 🟩 💧 🟩 💧
🌲 🟩 🏰 🔥 ⛰️ 💧 🏰 ⛰️ ⛰️ 🟩 ⛰️ 🔥 🏰 ⛰️ 🟩 🔥 🌲 🏰 ⛰️ 🟩
🌲 🌲 💧 🔥 ⛰️ 🟩 💧 🔥 💧 🏰 🔥 🔥 ⛰️ 🔥 💧 🔥 ⛰️ ⛰️ 🏰 💧
🌲 🌲 🔥 🏰 🟩 🔥 🏰 💧 💧 💧 💧 💧 🏰 🏰 ⛰️ 🌲 💧 🟩 🏰 🟩
🟩 🟩 ⛰️ 🏰 🟩 💧 🔥 🟩 ⛰️ 🏰 ⛰️ 🟩 🏰 🔥 🟩 ⛰️ 🌲 💧 ⛰️ 🏰
```


### 📦 Reto 004: Crea un mapa aleatorio
Crea un mapa aleatorio de por ejemplo 20x20 donde utilices un array multidimensional con los que representarás los elementos del mapa a partir de referencias numéricas del 0 al 5. Luego reempleza cada coordenada numérica por un emoticono.

```python
import numpy as np

# 1. Crear el array aleatorio de 0 a 5 de tamaño 20x20
# np.random.randint(low, high, size) genera enteros desde low hasta high-1
matriz_numerica = np.random.randint(0, 6, size=(20, 20))

print("Primeras filas de la matriz numérica (0-5):")
print(matriz_numerica[:5, :5])

# 2. Definir el diccionario de reemplazo (emoticonos)
emojis_dict = {
    0: '🟩',  # Zonas transitables (camino/pradera)
    1: '🌲',  # Bosque
    2: '⛰️',  # Montaña
    3: '💧',  # Agua / Río
    4: '🔥',  # Zonas de fuego / Peligro
    5: '🏰'   # Fortaleza de Mordor
}

# 3. Reemplazar los números por emoticonos usando la matriz numérica
matriz_emojis = np.empty((20, 20), dtype=object)
for num, emoji in emojis_dict.items():
    matriz_emojis[matriz_numerica == num] = emoji

# 4. Mostrar el mapa resultante
print("\n--- MAPA DE LA TIERRA MEDIA (20x20) ---")
for fila in matriz_emojis:
    print(" ".join(fila))

```

---

### 📦 RETO 004: La secuencia numérica del Doctor Who
El TARDIS del Doctor Who viaja a través del tiempo mediante secuencias exactas. Utiliza np.arange() para generar un array con los números del 1 al 20 (incluyendo el 20) de 2 en 2, representando los saltos temporales del Doctor.

---

### 📦 RETO 005: Los niveles de poder de los Pokémon Legendarios
 Genera un array utilizando np.linspace() que contenga exactamente 5 valores repartidos de forma equitativa en el rango de poder del 100 al 500 para evaluar las estadísticas base de un Pokémon legendario.


---
### 📦 RETO 006: El Sombrero Seleccionador y la asignación de casa aleatoria
Estás programando la ceremonia de bienvenida de Hogwarts en Python.
Tienes un array con los nombres de las cuatro casas: `casas = np.array(['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'])`. Imagina que entran 15 nuevos alumnos de primer año. Utiliza `np.random.choice()` para simular que el Sombrero Seleccionador elige de forma completamente aleatoria (con repetición) una casa para cada uno de los 15 alumnos. Muestra el resultado de la asignación.


<!--
import numpy as np

casas = np.array(['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'])
# Seleccionamos 5 casas al azar para los nuevos alumnos
alumnos_asignados = np.random.choice(casas, size=5)
print("Asignación del Sombrero Seleccionador:", alumnos_asignados)
-->

### 📦 RETO 007: Operación de espionaje y códigos de acceso aleatorios
James Bond estás ayudando a Q a descifrar los códigos de seguridad de una base enemiga de SPECTRE. El sistema genera 5 códigos de acceso aleatorios de 4 dígitos cada uno (números enteros entre el 0 y el 9).

Utiliza np.random.randint() para generar una matriz bidimensional de tamaño (5, 4) que represente estos 5 códigos de espionaje.

Utiliza funciones de NumPy (np.min(), np.max() o análisis por filas/columnas) para encontrar cuál es el dígito más alto y cuál es el más bajo introducido en el conjunto total de códigos descifrados.

<!-- 
import numpy as np

# Generar 5 códigos de 4 dígitos cada uno (valores aleatorios del 0 al 9)
codigos_spectre = np.random.randint(0, 10, size=(5, 4))
print("Códigos de acceso interceptados:\n", codigos_spectre)

# Encontrar el dígito máximo y mínimo en toda la operación
digito_maximo = np.max(codigos_spectre)
digito_minimo = np.min(codigos_spectre)

print(f"\n[Q-Branch Report] Dígito más alto detectado: {digito_maximo}")
print(f"[Q-Branch Report] Dígito más bajo detectado: {digito_minimo}")
-->


### 📦 RETO 008: ¡Rayo al Delorean! Viaje temporal estocástico

 Un rayo impacta de lleno en el condensador de fluzo del DeLorean. El sistema de navegación temporal falla y selecciona al azar un año del siglo XXI entre el 1800 y el 2015, y un mes aleatorio entre el 1 y el 12 y un día aleatorio entre 1 y 30. Utiliza np.random.randint() para generar un array que contenga 3 destinos temporales aleatorios (combinando años y meses y día al azar).

 <!--
 import numpy as np

# Generar 3 años aleatorios entre 2000 y 2099 (inclusive)
anios = np.random.randint(2000, 2100, size=3)
# Generar 3 meses aleatorios entre 1 y 12 (inclusive)
meses = np.random.randint(1, 13, size=3)

print("Años de destino:", anios)
print("Meses de destino:", meses)
-->
---

### 📦 RETO 009: La lotería de los magos (Sorteo de Euromillones / Primitiva)
Quieres probar suerte en la Lotería Mágica. Un boleto clásico requiere seleccionar 5 números aleatorios únicos en el rango del 1 al 50 (sin que se repitan). Utiliza la función np.random.choice() con el parámetro replace=False para generar la combinación ganadora de tu boleto y ordénala de menor a mayor con np.sort().

<!--
import numpy as np

# Seleccionar 5 números únicos del 1 al 50
numeros_loteria = np.random.choice(np.arange(1, 51), size=5, replace=False)
numeros_ordenados = np.sort(numeros_loteria)

print("Tus números de la suerte para la Lotería Mágica:", numeros_ordenados)
-->

---
### 📦 RETO 010: Echando la Quiniela Galáctica (1X2)
 Vas a rellenar una quiniela de 14 partidos para la liga intergaláctica de Quidditch/Fútbol. Los resultados posibles para cada partido son 1 (gana local), X (empate) o 2 (gana visitante). Crea un array de NumPy que contenga las opciones ['1', 'X', '2'] y utiliza np.random.choice() para generar automáticamente los resultados aleatorios de los 14 partidos de la jornada.

 <!--
 import numpy as np

opciones = np.array(['1', 'X', '2'])
# Simulamos los 14 partidos de la quiniela eligiendo aleatoriamente entre 1, X y 2
quiniela = np.random.choice(opciones, size=14)

print("Resultados de la Quiniela Galáctica:")
for i, resultado in enumerate(quiniela, start=1):
    print(f"Partido {i}: {resultado}")
    -->

    ---
