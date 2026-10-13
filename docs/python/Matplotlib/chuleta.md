# Matplotlib: chuleta

<img class="library-logo library-logo--page" src="../assets/img/matplotblib-logo.webp" alt="Logo de Matplotlib" width="150">

| Uso | Función / método | Ejemplo corto | Tip |
|---|---|---|---|
| Crear figura y ejes | `subplots` | `fig, ax = plt.subplots()` | La interfaz `ax` facilita controlar cada gráfico. |
| Línea | `plot` | `ax.plot(x, y, marker="o")` | Los puntos de `x` e `y` deben corresponder. |
| Dispersión | `scatter` | `ax.scatter(x, y, alpha=0.7)` | Usa transparencia para reducir el solapamiento visual. |
| Barras | `bar` | `ax.bar(categorias, valores)` | Adecuado para comparar categorías. |
| Histograma | `hist` | `ax.hist(datos, bins=20)` | Permite explorar la distribución de una variable. |
| Título | `set_title` / `set` | `ax.set_title("Resultados")` | También puedes definir título y etiquetas en `ax.set(...)`. |
| Etiquetas | `set_xlabel`, `set_ylabel` | `ax.set_xlabel("Tiempo")` | Añade unidades cuando sean relevantes. |
| Leyenda | `legend` | `ax.plot(x, y, label="Serie"); ax.legend()` | Define `label` al dibujar la serie. |
| Cuadrícula | `grid` | `ax.grid(True, alpha=0.3)` | Usa una cuadrícula tenue para no distraer. |
| Límites | `set_xlim`, `set_ylim` | `ax.set_ylim(0, 100)` | No recortes el eje de forma que induzca a error. |
| Varios paneles | `subplots` | `fig, axs = plt.subplots(1, 2)` | `axs` contiene los ejes creados. |
| Ajustar espacios | `tight_layout` | `fig.tight_layout()` | Reduce solapamientos entre etiquetas y paneles. |
| Guardar | `savefig` | `fig.savefig("grafico.png", dpi=150)` | Usa `bbox_inches="tight"` para incluir etiquetas. |
| Mostrar | `show` | `plt.show()` | En scripts, llama a `show` para abrir la figura. |

## Tips rápidos

- Escoge el tipo de gráfica según la pregunta, no solo por apariencia.
- Etiqueta los ejes y especifica unidades para que el gráfico sea interpretable.
- Para comparar varios gráficos, mantén escalas y estilos coherentes.
