---
name: posicionamiento-seo
description: Audita y optimiza el SEO on-page, el snippet en SERP, las meta etiquetas, el interlinking y Open Graph de una web manteniendo la fidelidad del contenido.
---

## Objetivo
Optimizar la estructura HTML, metadatos, enlaces internos y etiquetas sociales de la web para mejorar su indexación, relevancia temática y tasa de clic (CTR) en resultados de búsqueda.

## SEO on-page y estructura de contenido
- **Title (`<title>`):** Define un título único, claro y descriptivo por página, alineado con la intención de búsqueda principal (~50-60 caracteres como referencia).
- **Jerarquía de encabezados (`H1`–`H4`):** Asegura un único `<h1>` por vista que refleje el tema principal, seguido de `<h2>`, `<h3>` y `<h4>` en orden lógico según la jerarquía del contenido.
- **Palabras clave:** Integra de forma natural los términos clave principales y secundarios en título, `<h1>`, introducción y subtítulos, evitando repeticiones forzadas (*keyword stuffing*).
- **Imágenes (`alt`):** Revisa que todas las imágenes relevantes tengan atributo `alt` descriptivo en el idioma de la página (y `alt=""` solo en elementos puramente decorativos).
- **URLs limpias:** Verifica o propón rutas cortas, legibles, en minúsculas y separadas por guiones, sin parámetros superfluos ni cadenas genéricas.
- **Interlinking:** Mejora los enlaces internos entre páginas relacionadas usando textos ancla (*anchor text*) descriptivos y evitando textos genéricos como "aquí" o "leer más".

## Optimización para SERP y meta etiquetas
- **Meta description:** Redacta o ajusta `<meta name="description">` única por página (~140-160 caracteres aprox.) con propuesta de valor clara para mejorar el CTR en SERP.
- **Canonical y rastreo:** Revisa o añade `<link rel="canonical">` apuntando a la URL canónica correspondiente y comprueba que las etiquetas `<meta name="robots">` no bloqueen por error páginas indexables.
- **Datos estructurados (si aplica):** Añade marcado JSON-LD (`schema.org`) coherente con el tipo de página (por ejemplo `WebSite`, `Organization`, `LocalBusiness`, `Article` o `BreadcrumbList`) sin inventar datos inexistentes.

## Open Graph y redes sociales
- Configura etiquetas `og:title`, `og:description`, `og:type`, `og:url` y `og:image` acordes con cada página.
- Si se usan etiquetas Twitter/X (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`), mantenlas alineadas con Open Graph.

## Reglas y entrega
- **No alteres** el significado original del contenido ni inventes datos, precios, fechas o hechos.
- Si sugieres o aplicas cambios de URL o redirecciones, documenta el mapeo `URL anterior -> URL nueva` para no dejar enlaces rotos.
- Entrega un resumen de los cambios aplicados y una lista de puntos pendientes que requieran validación humana (por ejemplo, elección final de *keywords* o creación de imágenes OG).