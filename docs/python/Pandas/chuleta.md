# Pandas: chuleta

<img class="library-logo library-logo--page" src="../assets/img/Pandas-logo.webp" alt="Logo de Pandas" width="150">

| Uso | Función / método | Ejemplo corto | Tip |
|---|---|---|---|
| Leer CSV | `read_csv` | `df = pd.read_csv("datos.csv")` | Revisa `sep`, `encoding` y `parse_dates` si la lectura no sale bien. |
| Guardar CSV | `to_csv` | `df.to_csv("salida.csv", index=False)` | `index=False` evita guardar el índice como columna extra. |
| Inspeccionar | `head` | `df.head()` | Muestra las primeras filas. |
| Dimensiones | `shape` | `filas, columnas = df.shape` | Es un atributo, no se llama con paréntesis. |
| Tipos y nulos | `info` | `df.info()` | Resume columnas, tipos y valores no nulos. |
| Estadísticas | `describe` | `df.describe()` | Añade `include="all"` para más tipos de columnas. |
| Elegir columnas | Selección | `df[["nombre", "edad"]]` | Usa una lista para conservar un DataFrame. |
| Elegir por etiqueta | `loc` | `df.loc[df["edad"] > 18, ["nombre"]]` | Admite etiquetas de filas y columnas. |
| Elegir por posición | `iloc` | `df.iloc[:5, :2]` | Los límites de corte no incluyen la posición final. |
| Filtrar filas | Máscara booleana | `adultos = df[df["edad"] >= 18]` | Para varias condiciones usa `&` o `|` y paréntesis. |
| Valores ausentes | `isna` | `df.isna().sum()` | Cuenta nulos por columna. |
| Rellenar nulos | `fillna` | `df["edad"] = df["edad"].fillna(df["edad"].median())` | Elige el valor de relleno según el significado del dato. |
| Eliminar nulos | `dropna` | `limpio = df.dropna(subset=["objetivo"])` | Indica `subset` para no borrar filas por cualquier columna. |
| Agrupar y resumir | `groupby` | `df.groupby("grupo")["venta"].mean()` | Usa `agg` para aplicar varias estadísticas. |
| Combinar tablas | `merge` | `pd.merge(a, b, on="id", how="left")` | Comprueba que la clave y la cardinalidad sean correctas. |
| Ordenar | `sort_values` | `df.sort_values("fecha")` | Usa `ascending=False` para orden descendente. |
| Convertir fecha | `to_datetime` | `df["fecha"] = pd.to_datetime(df["fecha"])` | Convierte errores en nulos con `errors="coerce"` si procede. |

## Tips rápidos

- Para acceder a filas por etiquetas y modificar valores con claridad, prefiere `.loc`.
- Evita modificar una vista filtrada directamente; crea una copia con `.copy()` cuando corresponda.
- Encadena operaciones con cuidado y valida dimensiones, tipos y nulos tras cada transformación.
