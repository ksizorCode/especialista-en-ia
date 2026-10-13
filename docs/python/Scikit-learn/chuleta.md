# Scikit-learn: chuleta

<img class="library-logo library-logo--page" src="../assets/img/Scikit_learn-logo.webp" alt="Logo de Scikit-learn" width="140">

| Uso | Función / clase | Ejemplo corto | Tip |
|---|---|---|---|
| Separar datos | `train_test_split` | `Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.2, random_state=42)` | Usa `stratify=y` en clasificación para conservar proporciones. |
| Clasificación | `RandomForestClassifier` | `m = RandomForestClassifier(random_state=42)` | Buen punto de partida; ajusta hiperparámetros con validación. |
| Regresión | `RandomForestRegressor` | `m = RandomForestRegressor(random_state=42)` | Mide con MAE o RMSE, no con exactitud. |
| Entrenar | `fit` | `m.fit(X_train, y_train)` | Ajusta solo con los datos de entrenamiento. |
| Predecir | `predict` | `y_pred = m.predict(X_test)` | Las entradas deben tener las mismas columnas y orden del entrenamiento. |
| Probabilidades | `predict_proba` | `p = m.predict_proba(X_test)` | Disponible solo en estimadores que estiman probabilidades. |
| Escalar datos | `StandardScaler` | `scaler = StandardScaler()` | Necesario para algunos modelos; no ajustes el escalador con datos de prueba. |
| Crear flujo | `make_pipeline` | `pipe = make_pipeline(StandardScaler(), LogisticRegression())` | Evita fuga de información al combinar preprocesamiento y modelo. |
| Validación cruzada | `cross_val_score` | `scores = cross_val_score(m, X, y, cv=5)` | Usa datos de entrenamiento al comparar modelos. |
| Métrica de clasificación | `classification_report` | `print(classification_report(y_test, y_pred))` | Incluye precisión, exhaustividad y F1 por clase. |
| Matriz de confusión | `confusion_matrix` | `cm = confusion_matrix(y_test, y_pred)` | Muestra qué clases se confunden. |
| Buscar parámetros | `GridSearchCV` | `busqueda = GridSearchCV(m, {"max_depth": [3, 5]}, cv=5)` | Puede ser costoso si la cuadrícula es grande. |
| Datos de ejemplo | `load_iris` | `X, y = load_iris(return_X_y=True)` | Útil para probar el flujo antes de cargar datos propios. |

## Tips rápidos

- Mantén separadas las particiones de entrenamiento, validación y prueba.
- Usa `random_state` para hacer reproducibles las particiones y los algoritmos aleatorios.
- Ajusta los hiperparámetros con validación cruzada; reserva el conjunto de prueba para la evaluación final.
- Consulta `sklearn.metrics` para seleccionar una métrica acorde con el problema.
