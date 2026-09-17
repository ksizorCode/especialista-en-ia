# 🧙‍♂️ Introducción a Python para IA: Guía de Inicio Desde Cero
para la casa de Slytherings 🐍

¡Bienvenido al curso de Inteligencia Artificial! En esta guía aprenderás los fundamentos básicos de la programación utilizando **Python**, el lenguaje de referencia en el mundo de la IA y la Ciencia de Datos.

Para hacer el aprendizaje más ameno, utilizaremos ejemplos inspirados en universos de fantasía como *Harry Potter* y *El Señor de los Anillos*.

---

## 📌 Índice de Contenidos

1. [¿Qué es Google Colab y cómo ejecutar tu código?](#1-qué-es-google-colab-y-cómo-ejecutar-tu-código)
2. [Los Comentarios en Python: Tu libreta de notas](#2-los-comentarios-en-python-tu-libreta-de-notas)
3. [La función `print()` y cómo mostrar datos](#3-la-función-print-y-cómo-mostrar-datos)
4. [Variables y Constantes](#4-variables-y-constantes)
5. [Tipos de Datos Básicos](#5-tipos-de-datos-básicos)
6. [Operadores y Operaciones Matemáticas](#6-operadores-y-operaciones-matemáticas)
7. [Concatenación e Interpolación de Cadenas (`print(f...)`)](#7-concatenación-e-interpolación-de-cadenas-printf)
8. [Funciones Útiles Integradas (`len()`, `str()`, etc.)](#8-funciones-útiles-integradas-len-str-etc)
9. [¿Qué es una Función y cómo crear la tuya?](#9-qué-es-una-función-y-cómo-crear-la-tuya)
10. [Ejemplo Integrado: Tu primer "Algoritmo de IA" en Python](#10-ejemplo-integrado-tu-primer-algoritmo-de-ia-en-python)

---

## 1. ¿Qué es Google Colab y cómo ejecutar tu código?

[Google Colaboratory](https://colab.research.google.com/) (o **Google Colab**) es una herramienta gratuita que te permite escribir y ejecutar código Python directamente desde tu navegador web, sin necesidad de instalar nada en tu ordenador. Es el estándar utilizado por investigadores de IA en todo el mundo.

* 🔗 **Enlace principal:** [Crear un cuaderno en Google Colab](https://colab.research.google.com/)
* 💡 **¿Cómo funciona?** El código se escribe en celdas. Para ejecutar una celda, simplemente haz clic en el botón de reproducción ▶️ o presiona `Shift + Enter`.

---

## 2. Los Comentarios en Python: Tu libreta de notas

Los **comentarios** son notas escritas en el código que el ordenador ignora por completo. Sirven para explicar qué hace el programa a otras personas o a ti mismo en el futuro.

En Python se utiliza el símbolo de almohadilla `#` para escribir comentarios de una sola línea:

```python
# Este es un comentario: El ordenador no ejecutará esta línea.
# Sirve únicamente para dar instrucciones o explicaciones.

print("¡Hola, Mago de la IA!") # También puedes ponerlo al final de una línea de código
```

---

## 3. La función `print()` y cómo mostrar datos

La función `print()` es la herramienta primaria para comunicarte con la pantalla. Le dice a Python: *"Muestra este texto o valor en la consola"*.

```python
# Imprimir un texto directo (entre comillas)
print("¡Bienvenido a Hogwarts!")

# Imprimir un número
print(2026)
```

---

## 4. Variables y Constantes

### 🔹 Variables
Una **variable** es como una caja etiquetada donde guardas una información que puede cambiar a lo largo del tiempo.

```python
# Creamos la caja "vida_personaje" y guardamos el valor 100
vida_personaje = 100
print(vida_personaje)

# El personaje recibe daño, el valor cambia
vida_personaje = 75
print(vida_personaje)
```

### 🔹 Constantes
Una **constante** es un valor que **no debería cambiar** durante la ejecución del programa (por ejemplo, el número Pi o la velocidad de la luz). En Python no existe una sintaxis especial para "bloquear" una constante, por lo que por convención entre programadores se escriben en **MAYÚSCULAS** para indicar que no deben modificarse.

```python
# Convención de constantes en Mayúsculas
VELOCIDAD_LUZ = 299792458
CASA_HOGWARTS_DEFECTO = "Gryffindor"
```

---

## 5. Tipos de Datos Básicos

Python detecta automáticamente qué tipo de dato estás guardando en una variable:

```python
# 1. Texto / Cadena (String - str): Siempre van entre comillas
nombre_mago = "Harry Potter"

# 2. Número Entero (Integer - int): Números sin decimales
edad_mago = 11

# 3. Número Decimal (Float - float): Se usa el punto (.) para los decimales
altura_metros = 1.45

# 4. Booleano (Boolean - bool): Representa Verdad o Falsedad (True o False)
tiene_cicatriz = True
es_villano = False
```

---

## 6. Operadores y Operaciones Matemáticas

Python te permite hacer operaciones matemáticas básicas y avanzadas con operadores muy intuitivos:

| Operador | Operación | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| `+` | Suma | `10 + 5` | `15` |
| `-` | Resta | `10 - 5` | `5` |
| `*` | Multiplicación | `4 * 3` | `12` |
| `/` | División (devuelve decimal) | `10 / 2` | `5.0` |
| `//` | División Entera (sin decimales) | `10 // 3` | `3` |
| `%` | Módulo (Resto de la división) | `10 % 3` | `1` |
| `**` | Potencia | `2 ** 3` | `8` |

```python
# Ejemplo: Calculando el poder total de combate
fuerza_base = 50
bono_varita = 15
pocion_multiplicadora = 2

poder_total = (fuerza_base + bono_varita) * pocion_multiplicadora
print("Poder total de combate:", poder_total)
```

---

## 7. Concatenación e Interpolación de Cadenas (`print(f...)`)

**Concatenar** significa unirse o "pegar" textos.

### Forma 1: Concatenación clásica con `+`
Para unir textos con el operador `+`, **todos los elementos deben ser texto (`str`)**.

```python
saludo = "¡Hola " + "Frodo" + "!"
print(saludo)
```

### Forma 2: Cadenas formateadas o f-strings (`print(f...)`) ⭐ *Recomendado*
Es la forma más moderna, clara y fácil de mezclar texto y variables en Python. Solo debes poner una `f` antes de las comillas y escribir las variables dentro de llaves `{}`.

```python
nombre = "Legolas"
flechas = 45
raza = "Elfo"

# f-string: Limpio y muy fácil de leer
print(f"{nombre} es un {raza} y le quedan {flechas} flechas en su carcaj.")
```

---

## 8. Funciones Útiles Integradas (`len()`, `str()`, etc.)

Python incluye herramientas preparadas para usar de inmediato:

### 🔹 `len()`
Devuelve la **longitud** (número de caracteres de un texto o elementos de una lista).

```python
hechizo = "Expelliarmus"
longitud = len(hechizo)
print(f"El hechizo {hechizo} tiene {longitud} letras.")
```

### 🔹 `str()`
Convierte cualquier tipo de dato (número, booleano, etc.) en un **texto (String)**. Es útil cuando necesitas concatenar con `+`.

```python
nivel = 99
# Convertimos el número 99 al texto "99"
mensaje = "Nivel alcanzado: " + str(nivel)
print(mensaje)
```

### 🔹 Otras funciones muy útiles:
* `int()`: Convierte un texto o decimal a número entero (ej. `int("10")` ➡️ `10`).
* `float()`: Convierte a número decimal (ej. `float("3.14")` ➡️ `3.14`).
* `type()`: Te dice qué tipo de dato tiene una variable.
* `abs()`: Devuelve el valor absoluto de un número.

```python
# Averiguar el tipo de dato
print(type("Gandalf"))  # Muestra <class 'str'>
print(type(100))        # Muestra <class 'int'>
```

---

## 9. ¿Qué es una Función y cómo crear la tuya?

**Concepto:** Una función es como un **hechizo** o una **receta**. Es un bloque de código reutilizable al que le das un nombre. Puede recibir ingredientes (*parámetros*) y devolver un resultado (*retorno*).

```python
# 1. DEFINICIÓN de la función (creamos el hechizo)
def lanzar_hechizo(nombre_hechizo, objetivo):
    potencia = len(nombre_hechizo) * 10
    mensaje = f"✨ ¡{nombre_hechizo.upper()}! impacta a {objetivo} con {potencia} puntos de daño."
    return mensaje

# 2. INVOCACIÓN de la función (usamos el hechizo)
resultado1 = lanzar_hechizo("Lumos", "la oscuridad")
resultado2 = lanzar_hechizo("Avada Kedavra", "el Maniquí de entrenamiento")

print(resultado1)
print(resultado2)
```

---

## 10. Ejemplo Integrado: Tu primer "Algoritmo de IA" en Python

Combinando todo lo aprendido, aquí tienes un **Clasificador Inteligente de Personajes** (un sistema experto que evalúa patrones y toma decisiones):

```python
# Definición del algoritmo de clasificación por reglas
def clasificar_bando_personaje(nombre, magia_oscura, defiende_amigos, busca_destruccion):
    # Inicializamos el score
    score_heroe = 0
    
    # Evaluación de atributos
    if defiende_amigos == True:
        score_heroe += 50
    if magia_oscura == True:
        score_heroe -= 40
    if busca_destruccion == True:
        score_heroe -= 50
        
    # Límite de decisión (Decision Boundary)
    if score_heroe > 0:
        bando = "Héroe 🛡️"
    else:
        bando = "Villano 🗡️"
        
    return f"El personaje {nombre} ha sido clasificado como: {bando} (Puntuación: {score_heroe})"

# Pruebas con personajes
print(clasificar_bando_personaje("Harry Potter", magia_oscura=False, defiende_amigos=True, busca_destruccion=False))
print(clasificar_bando_personaje("Lord Voldemort", magia_oscura=True, defiende_amigos=False, busca_destruccion=True))