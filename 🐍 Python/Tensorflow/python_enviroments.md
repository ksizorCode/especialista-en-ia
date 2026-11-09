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