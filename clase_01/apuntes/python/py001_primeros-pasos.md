# 🐍 Primeros pasos en programación en Python


1. Variables y Tipos de Datos
Una variable es simplemente un cofre con una etiqueta pegada. Dentro guardas un dato.

```python
# Variables: El inventario de Harry
nombre_mago = "Harry Potter"      # Texto (String)
edad = 11                        # Número entero (Integer)
altura_metros = 1.45             # Número decimal (Float)
tiene_cicatriz = True            # Booleano (True/False)

# Imprimimos la ficha del alumno
print(f"{nombre_mago} tiene {edad} años y su cicatriz es real: {tiene_cicatriz}.")
```

2. Condicionales (if / else)
Concepto: Tomar decisiones basadas en reglas. Es el equivalente exacto a la lógica del Sombrero Seleccionador.

```python
# Algoritmo de asignación de casa en Hogwarts
valentia = 9
sabiduria = 4

if valentia > 8:
    casa = "Gryffindor"
elif sabiduria > 8:
    casa = "Ravenclaw"
else:
    casa = "Hufflepuff"

print(f"¡El Sombrero Seleccionador declara que perteneces a {casa}!")
```


