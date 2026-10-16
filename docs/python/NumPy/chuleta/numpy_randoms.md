# Aleatorios con Numpy


https://colab.research.google.com/drive/13Rd7JYytUtr-wG6xA4VkmpEIal3VHwaS?usp=sharing


## zeros y ones
Crea matrices llenas de ceros y unos

```python
import numpy as np

# Pasamos las dimensiones como una tupla (5, 8)

print(np.zeros([6, 5]))

print(np.ones([6,5]))

```

## Matrices que convertimos en mapas de juegos
```python
import numpy as np

# 1. Generar el array de 10x10 con enteros aleatorios del 1 al 5
array_enteros = np.random.randint(1, 21, size=(20, 20))

# 2. Definir el diccionario de mapeo medieval
mapeo_medieval = {
    1: "  ", # Suelo
    2: "🌲", # Muro
    3: "  ", # Tesoro
    4: "🌳", # Enemigo
    5: "  ",  # Poción
    6: "  ",  # Poción
    7: "🚶‍♂️",  # Poción
    8: "  ",  # Poción
    9: "  ",  # Poción
    10: "  ",  # Poción
    11: "  ",  # Poción
    12: "  ",  # Poción
    13: "  ",  # Poción
    14: "  ",  # Poción
    15: "  ",  # Poción
    16: "  ",  # Poción
    17: "  ",  # Poción
    18: "  ",  # Poción
    19: "  ",  # Poción
    20: "  "  # Poción

}




# 3. Reemplazar los números por los emojis usando np.vectorize
vector_emojis = np.vectorize(mapeo_medieval.get)
array_emojis = vector_emojis(array_enteros)

# 4. Mostrar el mapa resultante fila por fila
for fila in array_emojis:
    print(" ".join(fila))
```

>> Ejemplo:

```dash
            🌳                         🚶‍♂️                  
🌲                🌲                                       
               🌲       🚶‍♂️                🚶‍♂️    🌲       🚶‍♂️
            🌲                         🌲                  
                              🚶‍♂️                           
                                 🚶‍♂️                        
      🌲                         🌲          🌳 🚶‍♂️         
         🚶‍♂️          🌲                            🌲      
      🌳       🌳       🌳 🌲             🌲             🌲
🌳             🌳          🌲    🌳             🌳         
🚶‍♂️                                                         
                        🌳                                 
🌲       🌳    🚶‍♂️                      🌲                🚶‍♂️
            🚶‍♂️    🌳                🌲 🌳    🚶‍♂️       🚶‍♂️   
🌲                                     🌲    🚶‍♂️            
                     🌲                                    
                        🌳 🌲                         🌳   
                  🌲    🚶‍♂️                                 
   🚶‍♂️                                  🚶‍♂️                🚶‍♂️
            🌲    🚶‍♂️                      🚶‍♂️ 🚶‍♂️          🚶‍♂️
```


## Aleatorio con Frutas

```python
frutas = ["🍎", "🍌", "🍇", "🍊", "🍓", "🍉", "🍍", "🥝"]

print(frutas);      # muestra el array completo
print(frutas[2])    # muestra el puesto 2
print(frutas[-2])   # muestra el puesto 2 empezando por atrás 
print(frutas[:2])   # muestra todos hasta el puesto 2
print(frutas[2:4])  # muestra los elementos entre el puesto 2 y 4
print(frutas[::2])  # muestra cada 2 elementos
print(frutas[::-1]) # muestra cada 1 elemento empezando por atrás
print(frutas[::-2]) # muestra cada 2 elementos empezando por atrás
print(frutas[::1])  # muestra cada 1 elementos

np.random.shuffle(frutas) # Desordena los elementos del array
print(frutas)
```

**Resulstado:**

```dash
['🍎', '🍌', '🍇', '🍊', '🍓', '🍉', '🍍', '🥝']
🍇
🍍
['🍎', '🍌']
['🍇', '🍊']
['🍎', '🍇', '🍓', '🍍']
['🥝', '🍍', '🍉', '🍓', '🍊', '🍇', '🍌', '🍎']
['🥝', '🍉', '🍊', '🍌']
['🍎', '🍌', '🍇', '🍊', '🍓', '🍉', '🍍', '🥝']
['🍊', '🍍', '🍉', '🍌', '🍎', '🍇', '🥝', '🍓']
```

## Matriz aleatoria con frutas
```python

# 1. Definir la lista de frutas en emojis
frutas = ["🍎", "🍌", "🍇", "🍊", "🍓", "🍉", "🍍", "🥝"]

# 2. Generar un array de 5x5 con índices aleatorios entre 0 y el tamaño de la lista de frutas - 1
indices_aleatorios = np.random.randint(0, len(frutas), size=(5, 5))

# 3. Mapear los índices a los emojis correspondientes
matriz_frutas = np.array(frutas)[indices_aleatorios]

# 4. Mostrar el resultado fila por fila
for fila in matriz_frutas:
    print(" ".join(fila))
```
