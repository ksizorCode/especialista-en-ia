# Markdown (`.md`)

## Qué es Markdown

Markdown es un lenguaje de marcado ligero para dar formato a texto plano usando caracteres sencillos. Los archivos Markdown suelen utilizar la extensión `.md` (o `.markdown`) y pueden abrirse y editarse con cualquier editor de texto, sin necesidad de programas especiales.

Markdown no es un lenguaje de programación: no ejecuta lógica ni instrucciones. Se utiliza para **estructurar y presentar contenido**, y ese contenido normalmente se convierte a HTML, PDF u otro formato visual mediante un conversor (por ejemplo, Pandoc) o directamente en la plataforma donde se escribe (GitHub, Notion, etc.).

## Para qué se utiliza

- Documentación de proyectos y archivos `README.md`.
- Apuntes de clase y notas personales.
- Wikis, blogs y páginas web estáticas (Jekyll, Hugo, MkDocs...).
- Documentación de APIs y guías de instalación.
- Issues, pull requests y comentarios en GitHub/GitLab.
- Mensajes en apps como Slack o Discord.
- Prompts, instrucciones y archivos de configuración para herramientas de IA.

Sus ventajas principales son la legibilidad en texto plano (se entiende incluso sin renderizar), la facilidad para versionarlo con Git —al ser texto plano, los cambios se pueden comparar línea a línea— y la posibilidad de convertirlo a HTML, PDF o DOCX.

## Cómo funciona

Markdown utiliza una sintaxis basada en símbolos que un motor de renderizado interpreta y convierte en formato visual. Por ejemplo, una almohadilla (`#`) crea un título, los asteriscos (`**`) crean énfasis y los guiones (`-`) crean listas.

```markdown
# Título

Este texto está en **negrita** y este otro en *cursiva*.
```

El resultado será un título y un párrafo con palabras destacadas. La cantidad de `#` indica el nivel del encabezado: desde `#` (título principal) hasta `######` (nivel seis). Es importante dejar siempre un espacio entre las almohadillas y el texto (`# Título`, no `#Título`), ya que sin ese espacio muchos motores no lo interpretan como encabezado.

## Sintaxis básica

### Encabezados

```markdown
# Título 1
## Título 2
### Título 3
```

### Énfasis y texto

```markdown
**Negrita**
*Cursiva*
***Negrita y cursiva***
~~Texto tachado~~
`Código en línea`
```

### Listas

```markdown
- Elemento sin ordenar
- Otro elemento
  - Sublista (indentada con 2 espacios)

1. Primer paso
2. Segundo paso
   1. Sub-paso opcional
```

### Enlaces e imágenes

```markdown
[Visitar la documentación](https://www.markdownguide.org/)
![Texto alternativo](imagen.png)
```

El texto alternativo de una imagen es importante para la accesibilidad (lectores de pantalla) y aparece cuando la imagen no puede cargarse.

### Código

Para una línea de código se usan comillas invertidas simples:

```markdown
Ejecuta `npm install` en la terminal.
```

Para varias líneas se utiliza un bloque cercado con tres comillas invertidas. El nombre después de las primeras comillas activa el resaltado de sintaxis (*syntax highlighting*):

````markdown
```javascript
const mensaje = "Hola, Markdown";
console.log(mensaje);
```
````

> **Tip:** si tu bloque de código necesita mostrar, a su vez, otro bloque con tres comillas invertidas dentro (como en el ejemplo anterior), envuelve todo con **cuatro** comillas invertidas en lugar de tres.

### Citas, líneas y tablas

```markdown
> Esta es una cita.
> Puede tener varias líneas.

---

| Nombre   | Tipo                  |
|----------|-----------------------|
| Markdown | Lenguaje de marcado   |
| HTML     | Lenguaje de marcado   |
```

Los dos puntos en la fila separadora (`:---`, `:---:`, `---:`) permiten alinear el contenido de una columna a la izquierda, al centro o a la derecha.

### Lista de tareas

```markdown
- [x] Leer la teoría
- [ ] Practicar la sintaxis
```

### Saltos de línea y caracteres especiales

Una línea en blanco separa párrafos. Para forzar un salto de línea **dentro** del mismo párrafo, se terminan las líneas con dos espacios o se usa la etiqueta HTML `<br>`.

Para mostrar literalmente un carácter que Markdown interpretaría como sintaxis (por ejemplo un asterisco), se escapa con una barra invertida:

```markdown
Esto \*no\* aparece en cursiva.
```

### Notas al pie y HTML embebido (extensiones)

Muchas plataformas (GitHub incluido) añaden extensiones sobre el Markdown básico, como las notas al pie o la posibilidad de insertar HTML directamente cuando se necesita algo que Markdown no cubre (por ejemplo, centrar una imagen):

```markdown
Este es un dato importante[^1].

[^1]: Aquí va la aclaración de la nota al pie.

<p align="center">También puedes usar HTML si lo necesitas.</p>
```

## Ejemplos

### Ejemplo 1: README de un proyecto

`````markdown
# Mi aplicación

Aplicación para gestionar tareas.

## Instalación

```bash
npm install
```

## Uso

```bash
npm run dev
```

## Licencia

MIT
`````

### Ejemplo 2: apuntes de clase

```markdown
# Redes neuronales

## Idea principal

Una red neuronal aprende patrones a partir de ejemplos.

## Conceptos clave

- Entrada: datos que recibe el modelo.
- Pesos: valores que se ajustan durante el aprendizaje.
- Salida: predicción del modelo.

## Duda

¿Cómo se evita el sobreajuste?
```

## Tabla resumen

| Elemento          | Sintaxis                    | Resultado             |
|-------------------|------------------------------|------------------------|
| Título            | `# Texto`                   | Encabezado             |
| Negrita           | `**texto**`                 | **texto**              |
| Cursiva           | `*texto*`                   | *texto*                |
| Tachado           | `~~texto~~`                 | ~~texto~~              |
| Enlace            | `[texto](url)`               | Enlace clicable        |
| Imagen            | `![alt](ruta)`               | Imagen                 |
| Lista             | `- elemento`                 | Lista sin ordenar      |
| Lista numerada    | `1. elemento`                 | Pasos ordenados        |
| Código corto      | `` `código` ``               | Código en línea        |
| Bloque de código  | ```` ```js ... ``` ````      | Código multilínea      |
| Cita              | `> texto`                    | Texto citado           |
| Línea horizontal  | `---`                         | Separador              |
| Tabla             | `\| A \| B \|`               | Tabla                  |
| Tarea             | `- [ ] tarea`                 | Casilla pendiente      |
| Salto de línea    | dos espacios al final o `<br>` | Nueva línea, mismo párrafo |

## Markdown online y herramientas

**Especificación y referencia**
- [Markdown Guide](https://www.markdownguide.org/): referencia y sintaxis.
- [CommonMark](https://commonmark.org/): especificación común de Markdown.
- [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/): extensión usada por GitHub (tablas, tareas, tachado...).

**Editores online**
- [Dillinger](https://dillinger.io/): editor online con vista previa.
- [StackEdit](https://stackedit.io/): editor online sincronizable con Google Drive/Dropbox.

**Extensiones y diagramas embebidos en Markdown**
- [Mermaid](https://mermaid.js.org/): diagramas de flujo, secuencia, etc., escritos en texto.
- [MarkMap](https://markmap.js.org/): convierte listas Markdown en mapas mentales.

## Buenas prácticas

1. Usar un único título principal (`#`) por documento y recordar siempre dejar un espacio después de las almohadillas.
2. Mantener una jerarquía lógica de encabezados (no saltar de `#` a `###` sin pasar por `##`).
3. Separar los párrafos con una línea en blanco.
4. Añadir texto alternativo descriptivo a las imágenes.
5. Indicar el lenguaje en los bloques de código para activar el resaltado de sintaxis.
6. Escribir enlaces descriptivos en lugar de usar solo "aquí" (mejor para accesibilidad y SEO).
7. Comprobar la vista previa antes de publicar.
8. Ser consistente con el estilo elegido (por ejemplo, usar siempre `-` para listas, no mezclar `-` y `*`).
9. Evitar abusar de HTML embebido: si Markdown puede hacerlo, es preferible usar Markdown puro por legibilidad.

## Dónde se usa Markdown hoy en día

- Editores de notas: Apple Notas, Obsidian, Notion, Bear.
- Plataformas de desarrollo: GitHub, GitLab, Bitbucket.
- Gestión de contenido: WordPress (bloque Markdown), sitios estáticos (Jekyll, Hugo, MkDocs, Docusaurus).
- Comunicación: Slack, Discord, Reddit.
- Entornos de programación: Jupyter Notebook (celdas Markdown), VS Code.
