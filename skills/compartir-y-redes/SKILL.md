---
name: compartir-y-redes-sociales
description: Implementa botones para compartir contenido y optimiza las vistas previas y miniaturas para WhatsApp, Facebook y otras redes sociales mediante Open Graph y tarjetas sociales.
---

## Objetivo
Facilitar que los usuarios compartan páginas o artículos y lograr que los enlaces compartidos muestren título, descripción y miniatura correctos en WhatsApp, Facebook y otras plataformas.

## Miniaturas y metadatos sociales (WhatsApp, Facebook, etc.)
- Verifica o añade etiquetas Open Graph (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`) y `twitter:card` / `twitter:image` si aplica.
- Asegúrate de que `og:image` y `og:url` utilicen **URLs absolutas** (`https://...`) accesibles públicamente.
- Recomienda o utiliza imágenes en orientación horizontal (idealmente `1200x630 px`, proporción `1.91:1`) y advierte si una imagen es demasiado pequeña, cuadrada o con texto cortado en los bordes.
- Mantén coherencia entre el contenido visible de la página y las etiquetas sociales para evitar vistas previas engañosas o desactualizadas.

## Botones para compartir
- Implementa botones o enlaces de compartir limpios y ligeros (priorizando enlaces directos o `navigator.share` con alternativa de respaldo frente a *scripts* externos pesados).
- Incluye al menos opciones habituales como **WhatsApp** y **Facebook** (y otras pertinentes según el contexto, como LinkedIn, Telegram o copiar enlace), codificando correctamente la URL y el texto.
- Asegúrate de que los botones sean accesibles (texto visible o `aria-label` descriptivo, contraste adecuado y tamaño táctil cómodo en móvil).

## Reglas y entrega
- No inventes URLs de imágenes ni rutas inexistentes; si falta una imagen de miniatura adecuada, indícalo en el informe final.
- No sobrescribas configuraciones existentes sin comprobar su impacto en el resto del sitio.
- Entrega un resumen de los botones añadidos, las etiquetas sociales configuradas y las miniaturas pendientes de crear o revisar.