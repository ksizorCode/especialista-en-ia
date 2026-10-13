# Curso ML con Python

Sitio estático para leer los apuntes Markdown del curso. La portada está en `index.html` y funciona en GitHub Pages sin proceso de compilación ni dependencias externas en tiempo de ejecución.

## Editar el índice

Abre [`assets/app.js`](assets/app.js) y modifica el array `paginas`. Cada entrada tiene dos valores: `["Texto del enlace", "ruta/al/archivo.md"]`. El orden del array determina el orden de lectura y los botones «Anterior» y «Siguiente». Los tres primeros enlaces aparecen en «Empieza aquí», los seis siguientes en «Bibliotecas» y los demás en «Práctica y consulta».

Las rutas son relativas a `index.html`. Los enlaces entre Markdown se abren en el visor; los enlaces a notebooks `.ipynb` se descargan para abrirlos en Jupyter o VS Code.

Después de editar un Markdown o el array `paginas`, ejecuta `python3 build_content.py` para actualizar la copia que utiliza el navegador al abrir `index.html` como archivo. En GitHub Pages, el visor lee directamente los archivos `.md`.

## Preferencias de lectura

El menú **Apariencia** de la barra superior permite cambiar entre tema claro y oscuro, ajustar el tamaño del texto y elegir los estilos Ágil, Literatura o Programación. Las preferencias se conservan en el almacenamiento local del navegador.

## Opciones de lectura

El menú **Apariencia** permite elegir tema claro u oscuro, aumentar o reducir el tamaño del texto y seleccionar uno de los estilos visuales (Ágil, Literatura o Programación). Las preferencias se guardan en el almacenamiento local del navegador.

## Probar en local

Puedes abrir `index.html` directamente. El contenido se lee de `assets/content.js` y las imágenes se cargan desde `assets/img/`.

También puedes iniciar un servidor HTTP desde la raíz del proyecto:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000/`. En este modo, el visor lee los `.md` originales y muestra cualquier cambio tras recargar la página.

## Publicar en GitHub Pages

Sube los archivos a un repositorio de GitHub. En **Settings → Pages**, elige **Deploy from a branch**, selecciona la rama que contiene `index.html` y la carpeta **/(root)**. El archivo `.nojekyll` evita que GitHub Pages transforme los `.md` a HTML; el visor los necesita en su formato original. GitHub Pages publicará la portada y los Markdown con las mismas rutas relativas. El sitio también funciona en una URL de proyecto como `https://usuario.github.io/repositorio/`.

El renderizador Markdown incluido es [Showdown 2.1.0](https://github.com/showdownjs/showdown), con licencia MIT en [`assets/vendor/SHOWDOWN-LICENSE.txt`](assets/vendor/SHOWDOWN-LICENSE.txt).
