# Instalar Tensorfow por terminal:

Como instalar Tenworflow a través del terminal debes de tener instalada la versión de Python 3.12. Luego veremos como generar un enviroment en el que se ejecuten diferentes versiones de Python en un mismo ordenar.

Vamos a comprovar qué versión de Python tenemos instalda
```python
py -0p
```

Esto nos devolverá las versiones de Python que están isntaldas en nuestro ordenador. Tambiién podemos comprobar específicamente si existe la 3.12:

```python
py -3.12 --version
```

Si la versión 3.12 no esta instalada, la instalamos:
``
py install 3.12
```

Instalamos Tensorflow:
```python
py -3.12 -m pip install tensorflow
```
Comprobamos la versión instalada (es una manera de verificar que se ha instalado correctamente:
```python
py -3.12 -c "import tensorflow as tf; print(tf.__version__)"
```


Si usamos Notebook instalamos también el kernel:
```python
py -3.12 -m pip install ipykernel
```





# Enviroments en Python ID

Para que Tensorflow Funcione tenemos que ejecutar la verión de Python 3.12

## Como podemos saber qué versión de Python tenemos
- Abre Terminal VSCode: Ctrl+Shift+P
- Escribe py -0p

## Crear enviroments:
necesitamos ecosistemas o enviroments para trabanar con varias versiones de python o sus librerías:

1. Abre carpeta del proyecto
2. Pulsa Ctrl+Shift+P busca Python_Create Enviroment
3. Venv
4. Seleciona Python 3.12 com interpete (si no aparece vuelve a instalarlo)
5. Cuando termine abre el notebooky selecciona el kernel de ese entonro desde el selector kernel arriba a la derecha
6. Instala TensorFlow;

```
 %pip install tensorflow
```


Si phonton 3.12 no aparece, puedes comprobar si está isntalado desde la termina de VSCode con py -0p

- control + J
- py - 0p


## Instalar versión de python por terminal;
```
py install 3.12
```

## Como saber la versión de python que estoy usando:

```
import sys
print(sys.version)
```

## Como cambiar de Enviromento o Desactivarlo:
Cntrl + Shift + P
deactivate


## Lista instalaciones en Python
py list

# Saber que versión está ejecutando el notebook actul:
Notebook: Select Notebook Kernel
Python: Select Interpeter
