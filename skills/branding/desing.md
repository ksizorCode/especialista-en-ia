# design.md — Sistema de Diseño y Branding: Alimerka

Guía de identidad visual, tokens de diseño y pautas de interfaz inspiradas en la marca **Alimerka** (`alimerka.es`), orientada a mantener coherencia gráfica, cercanía, legibilidad y confianza en productos digitales.

---

## 1. Personalidad y tono de marca
- **Esencia:** Supermercado cercano, fresco, cotidiano, práctico y orientado al ahorro familiar y al producto local.
- **Tono visual:** Limpio, luminoso, accesible y ordenado, con acentos vibrantes en azul corporativo y amarillo promocional, equilibrados con neutros claros y mucho aire en pantalla.
- **Tono verbal (UI copy):** Directo, amable, claro y funcional (ej. *"Añadir al carro"*, *"Ver ofertas"*, *"Tu tienda más cercana"*). Evitar tecnicismos innecesarios o lenguaje excesivamente formal.

---

## 2. Paleta de colores

### Colores principales de marca
| Token | Uso | Hex | RGB |
| :--- | :--- | :--- | :--- |
| `--color-brand-primary` | Azul corporativo principal (cabeceras, botones primarios, enlaces clave, identidad de marca) | `#004B93` | `rgb(0, 75, 147)` |
| `--color-brand-primary-dark` | Estado `:hover` / `:active` del azul principal, pies de página, énfasis oscuros | `#00356B` | `rgb(0, 53, 107)` |
| `--color-brand-primary-light` | Fondos suaves destacados, estados seleccionados, badges informativos | `#E6F0FA` | `rgb(230, 240, 250)` |
| `--color-brand-accent` | Amarillo corporativo / promocional (destacados, ofertas, etiquetas de ahorro, llamadas de atención) | `#FFD100` | `rgb(255, 209, 0)` |
| `--color-brand-accent-dark` | Estado `:hover` del amarillo o contraste sobre fondos claros | `#E5BC00` | `rgb(229, 188, 0)` |

### Colores semánticos y de apoyo
| Token | Uso | Hex |
| :--- | :--- | :--- |
| `--color-fresh-green` | Producto fresco, ecológico, sostenibilidad, disponibilidad en stock | `#1E8E3E` |
| `--color-promo-red` | Descuentos agresivos, bajadas de precio, alertas urgentes | `#D93025` |
| `--color-warning` | Avisos de stock limitado o alertas suaves | `#F29900` |

### Neutros y superficies
| Token | Uso | Hex |
| :--- | :--- | :--- |
| `--color-bg-page` | Fondo general de página | `#F7F8FA` |
| `--color-bg-surface` | Tarjetas de producto, modales, contenedores principales | `#FFFFFF` |
| `--color-bg-subtle` | Bandas secundarias, tablas alternas, inputs en reposo | `#EEF1F5` |
| `--color-border` | Bordes de tarjetas, divisores y campos de formulario | `#DCE1E7` |
| `--color-text-primary` | Texto principal y títulos oscuros (alto contraste) | `#1A202C` |
| `--color-text-secondary` | Descripciones, metadatos, subtítulos | `#4A5568` |
| `--color-text-muted` | Texto auxiliar, precios por kilo/litro, notas legales | `#718096` |

### Reglas de contraste y uso del color
- Nunca usar texto blanco sobre `--color-brand-accent` (`#FFD100`); sobre amarillo usar siempre `--color-brand-primary` (`#004B93`) o `--color-text-primary` (`#1A202C`).
- Reservar el rojo (`#D93025`) y el amarillo (`#FFD100`) para precios especiales, etiquetas de promoción o alertas; no saturar toda la interfaz.

---

## 3. Tipografía

### Familias recomendadas
- **Títulos y encabezados (`--font-heading`):** `'Montserrat', 'Poppins', 'Segoe UI', sans-serif` (geométrica, amable, con buena presencia en pesos semibold/bold).
- **Cuerpo, precios y UI (`--font-body`):** `'Open Sans', 'Inter', system-ui, -apple-system, sans-serif` (alta legibilidad en pantallas móviles y listados densos).

### Escala tipográfica y jerarquía
| Elemento | Tamaño (Desktop / Mobile) | Peso | Line-height | Notas |
| :--- | :--- | :--- | :--- | :--- |
| `H1` (Título principal) | `2.25rem` / `1.75rem` | `700` (Bold) | `1.2` | Color `--color-brand-primary` o `--color-text-primary` |
| `H2` (Secciones) | `1.75rem` / `1.4rem` | `700` (Bold) | `1.25` | Margen inferior claro para separar bloques |
| `H3` (Subsecciones / Cards) | `1.25rem` / `1.125rem` | `600` (SemiBold) | `1.3` | Máximo 2 líneas en tarjetas de producto |
| `Body` (Texto estándar) | `1rem` (`16px`) | `400` (Regular) | `1.5` | Nunca bajar de `14px` en párrafos |
| `Small / Meta` (Precio/kg, legal) | `0.8125rem` (`13px`) | `400`–`500` | `1.4` | Color `--color-text-muted` |
| `Precio destacado` | `1.375rem`–`1.75rem` | `800` (ExtraBold) | `1.1` | Usar `font-variant-numeric: tabular-nums` |

---

## 4. Espaciado, rejilla y bordes

### Sistema de espaciado (escala base `4px`)
- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px`
- `--space-6`: `24px`
- `--space-8`: `32px`
- `--space-12`: `48px`
- `--space-16`: `64px`

### Layout y Grid
- **Ancho máximo de contenedor:** `1280px` centrado con padding lateral de `16px` en móvil y `24px`–`32px` en escritorio.
- **Rejilla de catálogo / tarjetas:**
  - Desktop (`>= 1024px`): 4 columnas (`gap: 20px`).
  - Tablet (`768px - 1023px`): 2 o 3 columnas (`gap: 16px`).
  - Mobile (`< 768px`): 2 columnas para catálogo compacto o 1 columna para destacados (`gap: 12px`).

### Radios y sombras
- `--radius-sm`: `6px` (badges, etiquetas de oferta, inputs)
- `--radius-md`: `12px` (tarjetas de producto, paneles informativos)
- `--radius-lg`: `16px` (banners promocionales, modales)
- `--radius-pill`: `9999px` (botones principales, buscador, filtros tipo chip)
- `--shadow-card`: `0 2px 8px rgba(0, 43, 85, 0.06)`
- `--shadow-card-hover`: `0 8px 20px rgba(0, 43, 85, 0.12)`

---

## 5. Componentes clave de interfaz

### Cabecera (Header)
- Fondo blanco (`#FFFFFF`) o azul corporativo (`#004B93`) con borde inferior suave.
- Debe priorizar: **Logotipo Alimerka** a la izquierda, **buscador amplio** en el centro (con borde redondeado y botón de búsqueda visible), y **accesos rápidos** a la derecha (Mi cuenta, Tiendas/Folleto, Carro de compra con contador visible).
- Navegación secundaria por categorías clara y escaneable.

### Botones
- **Primario (CTA principal / Añadir al carro):**
  - Fondo `--color-brand-primary` (`#004B93`), texto `#FFFFFF`, `font-weight: 600`, `border-radius: 9999px`, padding `10px 20px`.
  - Hover: `--color-brand-primary-dark` (`#00356B`).
- **Promocional / Destacado:**
  - Fondo `--color-brand-accent` (`#FFD100`), texto `--color-brand-primary` (`#004B93`), `font-weight: 700`.
- **Secundario:**
  - Fondo `#FFFFFF`, borde `1.5px solid #004B93`, texto `#004B93`.

### Tarjetas de producto / oferta
1. **Zona superior:** Imagen del producto centrada sobre fondo blanco (`aspect-ratio: 1 / 1` o `4 / 3`, `object-fit: contain`), con *badge* superior izquierdo si hay promoción (ej. `-20%`, `2ª unidad al 50%` en amarillo `#FFD100` o rojo `#D93025`).
2. **Zona intermedia:** Marca/categoría en pequeño, nombre del producto (máx. 2 líneas con `line-clamp`), y formato/peso (`500 g`, `1 L`).
3. **Zona de precio:** Precio final bien visible en negrita (`tabular-nums`), precio anterior tachado si aplica, y precio por unidad de medida (`€/kg` o `€/L`) en gris suave.
4. **Zona inferior:** Botón ancho de acción rápida (`Añadir` o selector de cantidad `- / 1 / +` una vez añadido).

### Badges y etiquetas
- **Etiqueta Oferta:** Fondo `#FFD100`, texto `#004B93`, texto en mayúsculas corto (`OFERTA`, `AHORRO`).
- **Etiqueta Producto Fresco / Origen:** Fondo `#E8F5E9`, texto `#1E8E3E` (ej. `Producto de Asturias`, `Fresco`).

---

## 6. Fotografía, iconografía e ilustraciones
- **Fotografía de producto:** Fondo blanco puro o neutro muy limpio, iluminación uniforme y sin sombras duras.
- **Fotografía de frescos y recetas:** Luz natural, tonos cálidos y apetitosos, protagonismo del producto fresco (frutas, verduras, carnes, pescados, panadería) y escenas cotidianas reales.
- **Iconografía:** Iconos lineales de trazo medio (`1.75px`–`2px`) con esquinas ligeramente redondeadas (estilo *Lucide* o *Heroicons Outline*), coherentes en tamaño (`20px` o `24px`).

---

## 7. Accesibilidad y buenas prácticas UI
- Garantizar ratio de contraste mínimo **WCAG AA** (`4.5:1` en texto normal y `3:1` en texto grande/iconos activos).
- Todos los botones de icono (carro, búsqueda, favorito, cantidad) deben incluir `aria-label` descriptivo.
- Estados `:focus-visible` claramente visibles mediante anillo de enfoque azul (`outline: 2px solid #004B93; outline-offset: 2px`).
- En móvil, asegurar áreas táctiles mínimas de `44x44px` en botones de compra y selectores de cantidad.


## 8. Recursos Graficos
en la carpeta branding-material existen:
- Logo en Bitmap: branding-material/alimerka-logo.png
- Logo en Vectorial (le daremos preferencia ): branding-material/alimerka-logo.svg
- Icono y favicon: branding-material/alimerka-icono.jpeg
- Imagen en: branding-material/alimerka-imagen-familia.jpeg

Para el resto de las imágenes utiliza imágenes de ejemplo de Unsplash, Pexels, Pixabay. Dando prioridad a imágenes limpias, familiares, con buena iluminación, con gente joven y feliz.

## 9. Animaciones
Añade en la web animaciones de aparición por CSS moderno (en la medida de lo posibl evita el JS a no ser que sea necesario)

crea animaciones de scroll con aparición de contenido, efectos con sombras, efectos que se produzcan al mover el ratón.