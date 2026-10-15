# Ejercicios Frikys de Numpy

## Reto 001: Los puntos de las Casas de Hogwarts

Estás en la Gran Sala y el profesor Dumbledore necesita registrar los puntos actuales de las cuatro casas (Gryffindor, Slytherin, Ravenclaw y Hufflepuff). Crea un array de NumPy con los siguientes puntos iniciales: [450, 420, 430, 410]. Muestra el array por pantalla y comprueba su tipo de datos (dtype).

- en Enero se otrogan 5 puntos a Gryffindor, 17 a Slytherin, 23 a Ravenclaw y 32 a Hufflepuff
- en Febrero : 34 Gryffindor, 21 a Slytherin, 32 a Ravenclaw y 17 a Hufflepuff
- al final del curso por faltas de asistencia y mal comportamiento de los alumnos se restan: -134 Gryffindor, -121 a Slytherin, -132 a Ravenclaw y -117 a Hufflepuff

Muestra la evolución de las puntuaciones por meses y el resultado final

Señala automáticamente cual es la casa ganadora de la compa de la casa.

---

## Reto 002: El inventario de varitas en Ollivanders

Mr. Ollivander quiere organizar su stock de varitas mágicas hechas con diferentes núcleos (Pluma de Fénix, Pelo de Unicornio, Nervio de Dragón). Crea un array unidimensional usando np.array() con el número de varitas de cada tipo: [12, 25, 8, 30]. Multiplica todo el inventario por 2 debido a un cargamento imprevisto que acaba de llegar de Diagon Alley.

- Cuantas varitas de cada tipo tenía inicialmente?
- Cuantas varitas de cada tipo tiene tras el cargamento imprevisto?
- Cuantas varitas tiene en total?



## Reto 003: Creando el mapa de El Señor de los Anillos (Ceros y Unos)

Para planificar el avance de la Comunidad del Anillo, necesitas una cuadrícula base de terreno inexplorado de tamaño 3x4 llena de ceros (representando terreno llano), y otra matriz idéntica de tamaño 2x3 llena de unos (representando murallas de Mordor). Utiliza las funciones np.zeros() y np.ones().


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
´´´