# Matplotlib: funcionamiento básico

<img class="library-logo library-logo--page" src="../assets/img/matplotblib-logo.webp" alt="Logo de Matplotlib" width="150">

Matplotlib es una biblioteca para representar datos en gráficos estáticos, animados e interactivos. El módulo `matplotlib.pyplot` ofrece una interfaz rápida; la interfaz orientada a objetos (`fig, ax`) facilita controlar varias gráficas y personalizar cada eje.

## Flujo habitual

1. Prepara valores para los ejes `x` e `y`.
2. Crea la figura y los ejes con `plt.subplots`.
3. Dibuja con métodos como `ax.plot`, `ax.scatter` o `ax.hist`.
4. Añade título, etiquetas, leyenda y cuadrícula cuando ayuden a interpretar.
5. Muestra con `plt.show()` o guarda con `fig.savefig`.

```python
import matplotlib.pyplot as plt

meses = ["Ene", "Feb", "Mar"]
ventas = [12, 18, 15]

fig, ax = plt.subplots()
ax.plot(meses, ventas, marker="o", label="Ventas")
ax.set(title="Ventas mensuales", xlabel="Mes", ylabel="Unidades")
ax.legend()
fig.tight_layout()
plt.show()
```

## Conceptos importantes

- **Figure:** el lienzo completo, creado normalmente con `plt.subplots`.
- **Axes:** área donde se dibuja cada gráfica; contiene métodos para líneas, etiquetas, límites y leyenda.
- **Artistas:** elementos visuales, como líneas, puntos, textos o barras.
- **Tipos de gráfico:** líneas para cambios ordenados, dispersión para relaciones entre variables, histogramas para distribuciones y barras para categorías.
- **Guardar:** usa `fig.savefig("grafico.png", dpi=150, bbox_inches="tight")` antes de cerrar la figura.

Instalación: `pip install matplotlib`. Funciona con arreglos NumPy y datos de Pandas.
