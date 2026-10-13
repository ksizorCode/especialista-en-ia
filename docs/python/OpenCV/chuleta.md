# OpenCV: chuleta

<img class="library-logo library-logo--page" src="../assets/img/OpenCV-logo.png" alt="Logo de OpenCV" width="58">

| Uso | Función / constante | Ejemplo corto | Tip |
|---|---|---|---|
| Leer imagen | `imread` | `img = cv2.imread("foto.jpg")` | Comprueba `img is not None` antes de procesarla. |
| Guardar imagen | `imwrite` | `cv2.imwrite("salida.png", img)` | Comprueba el valor devuelto si necesitas detectar fallos de escritura. |
| Cambiar color | `cvtColor` | `gris = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)` | Las imágenes leídas suelen estar en BGR. |
| BGR a RGB | `cvtColor` | `rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)` | Necesario para muchas herramientas de visualización. |
| Cambiar tamaño | `resize` | `img2 = cv2.resize(img, (320, 240))` | El tamaño se da como `(ancho, alto)`. |
| Desenfoque | `GaussianBlur` | `suave = cv2.GaussianBlur(img, (5, 5), 0)` | El tamaño del kernel suele ser impar. |
| Umbral | `threshold` | `_, binaria = cv2.threshold(gris, 127, 255, cv2.THRESH_BINARY)` | Normalmente se aplica sobre una imagen de un canal. |
| Bordes | `Canny` | `bordes = cv2.Canny(gris, 100, 200)` | Ajusta umbrales según la imagen. |
| Dibujar rectángulo | `rectangle` | `cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)` | Coordenadas y color BGR; modifica la imagen de entrada. |
| Capturar vídeo | `VideoCapture` | `cap = cv2.VideoCapture(0)` | Comprueba `cap.isOpened()` y libera con `cap.release()`. |
| Leer fotograma | `read` | `ok, frame = cap.read()` | `ok` indica si se obtuvo un fotograma. |
| Dimensiones | `shape` | `alto, ancho = img.shape[:2]` | No confundas alto/ancho con el orden de `resize`. |

## Tips rápidos

- Copia la imagen antes de dibujar o modificarla si necesitas conservar el original: `copia = img.copy()`.
- Evita mezclar coordenadas `(x, y)` con índices de array `[fila, columna]`: la fila corresponde a `y`.
- `imshow` y `waitKey` dependen de una interfaz gráfica; para notebooks suele ser más cómodo convertir a RGB y mostrar con Matplotlib.
