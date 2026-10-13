# Pandas: funcionamiento básico

<img class="library-logo library-logo--page" src="../assets/img/Pandas-logo.webp" alt="Logo de Pandas" width="150">

Pandas es una biblioteca para cargar, inspeccionar, limpiar y transformar datos tabulares. Sus estructuras principales son `Series` (una columna etiquetada) y `DataFrame` (una tabla con filas y columnas).

Ejemplo guiado: [ventas de una tienda](01_ventas.ipynb), con una tabla pequeña, limpieza, filtros, agrupaciones y un gráfico.

## Flujo habitual

1. Carga datos desde un archivo o fuente con `read_csv`, `read_excel` u otra función `read_*`.
2. Inspecciona dimensiones, nombres de columnas, tipos y valores ausentes.
3. Selecciona, filtra, transforma y combina columnas o filas.
4. Resume los datos con agrupaciones y estadísticas.
5. Exporta los resultados con `to_csv`, `to_excel` u otro método `to_*`.

```python
import pandas as pd

df = pd.read_csv("ventas.csv")
print(df.head())
print(df.dtypes)
ventas_por_producto = df.groupby("producto")["importe"].sum()
ventas_por_producto.to_csv("resumen.csv")
```

## Conceptos importantes

- **Índice:** etiquetas de las filas; puede ser numérico, texto o fecha.
- **Selección:** usa `df["columna"]` para una columna, `loc` para etiquetas y `iloc` para posiciones.
- **Filtrado:** una condición booleana, como `df[df["edad"] >= 18]`, devuelve filas que la cumplen.
- **Valores ausentes:** `isna`, `dropna` e `fillna` ayudan a detectarlos o tratarlos; decide el tratamiento según el significado de los datos.
- **Agrupación:** `groupby` divide filas por categorías y permite calcular resúmenes.
- **Tipos:** revisa `dtypes`; convertir fechas o números correctamente evita errores en cálculos.

Instalación: `pip install pandas`. Es habitual usarlo junto a NumPy para operaciones numéricas y Scikit-learn para modelado.
