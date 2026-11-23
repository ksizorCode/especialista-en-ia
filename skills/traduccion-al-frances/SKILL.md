---
name: traduccion-web-frances
description: Replica y adapta una web completa al francés de Francia en /fr, traduciendo textos, URLs, atributos SEO e imágenes con esquemas, manteniendo intactos CSS/JS y añadiendo selector de idiomas en cabecera y pie.
---

## Objetivo
Crear una réplica completa de la web en `/fr` adaptada al **francés de Francia** (`fr-FR`), conservando la estructura, estilos y funcionalidad original.

## Reglas generales y exclusiones
- **No modificar** la versión original en el idioma base salvo para integrar el selector de idiomas si aplica.
- **No traducir** archivos `.css`, `.js` ni lógica de código (solo textos visibles al usuario si estuvieran hardcodeados en plantillas o atributos `alt`/`aria-label`/`placeholder`).
- **Ignorar** carpetas como `.git/`, `node_modules/`, `vendor/` o archivos de compilación/sistema.

## Estructura y rutas en `/fr`
1. Replica la estructura de carpetas y páginas dentro de `/fr`.
2. Traduce los *slugs* y rutas al francés (ej. `/contacto` -> `/fr/contact`) manteniendo la jerarquía.
3. Genera un registro o tabla de equivalencias (`ruta_original` <-> `ruta_fr`) para garantizar que todos los enlaces internos y el selector de idiomas apunten a la URL exacta correspondiente.
4. Actualiza todos los enlaces internos (`href`), rutas de recursos y referencias dentro de `/fr` para que no apunten por error a rutas en otro idioma.

## Contenidos, SEO y metadatos
- Traduce títulos, subtítulos, párrafos, botones, formularios, `<title>`, `<meta name="description">`, Open Graph y textos alternativos (`alt`).
- Cambia `<html lang="...">` a `<html lang="fr">` en las páginas de `/fr` y añade etiquetas `<link rel="alternate" hreflang="...">` cruzadas entre versiones equivalentes.

## Imágenes con esquemas o texto
- Si una imagen (especialmente SVG o diagramas) contiene texto, tradúcelo al francés y guarda el archivo con el sufijo `_fr` antes de la extensión (ej. `esquema-proceso.svg` -> `esquema-proceso_fr.svg`).
- Actualiza la referencia en el HTML/código de `/fr` hacia la nueva ruta `_fr`.
- Si se trata de una imagen rasterizada (`.png`, `.jpg`, `.webp`) con texto incrustado y no es posible reeditarla limpiamente sin degradarla, déjala señalizada en un informe final con su ruta y el texto a traducir.

## Selector de idiomas (Header y Footer)
- Añade un selector de idiomas con banderas en la **esquina superior derecha** de la cabecera y otro en el **pie de página** (sin duplicar atributos `id` únicos).
- Cada opción debe enlazar **directamente a la vista equivalente** en el otro idioma (por ejemplo, desde `/fr/servicios/diseno` -> `/servicios/diseno`, y viceversa).
- Marca claramente el idioma activo e incluye `aria-label` descriptivos en francés/español según corresponda.

## Verificación final
- Revisa que no queden bloques sin traducir en `/fr` ni enlaces rotos.
- Entrega un resumen con las páginas creadas, el mapeo de URLs y las imágenes `_fr` generadas o pendientes.