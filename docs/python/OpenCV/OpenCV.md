# OpenCV: funcionamiento básico

<img class="library-logo library-logo--page" src="../assets/img/OpenCV-logo.png" alt="Logo de OpenCV" width="58">

OpenCV es una biblioteca de visión artificial. En Python se importa habitualmente como `cv2`. Permite cargar y guardar imágenes, cambiar su tamaño o color, aplicar filtros y procesar fotogramas de vídeo.

## Flujo habitual con imágenes

1. Carga una imagen con `cv2.imread`.
2. Comprueba que la carga tuvo éxito (`imread` devuelve `None` si no puede leer el archivo).
3. Aplica transformaciones, filtros o detecciones.
4. Visualiza el resultado con una herramienta apropiada.
5. Guarda la salida con `cv2.imwrite`.

```python
import cv2

imagen = cv2.imread("foto.jpg")
if imagen is None:
    raise FileNotFoundError("No se pudo abrir foto.jpg")

gris = cv2.cvtColor(imagen, cv2.COLOR_BGR2GRAY)
pequena = cv2.resize(gris, (320, 240))
cv2.imwrite("foto_gris.png", pequena)
```

## Conceptos importantes

- **Canales:** OpenCV carga normalmente imágenes en orden BGR, no RGB. Convierte a RGB si las muestras con herramientas que esperan RGB.
- **Forma:** una imagen en color suele tener forma `(alto, ancho, canales)`; una imagen en escala de grises tiene dos dimensiones.
- **Vídeo:** `cv2.VideoCapture` lee fotogramas uno por uno; libera el recurso con `release()`.
- **Preprocesamiento:** tamaño, color, desenfoque y umbralización dependen del algoritmo posterior.
- **Modelo:** OpenCV procesa imágenes y ofrece algunos métodos de visión, pero modelos de aprendizaje profundo también pueden entrenarse con TensorFlow u otras bibliotecas.

Instalación habitual: `pip install opencv-python`. En entornos sin interfaz gráfica puede convenir `opencv-python-headless`.
