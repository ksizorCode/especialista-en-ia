---
name: ml-training
description: Train and evaluate scikit-learn machine learning models with reproducible preprocessing, validation, and metrics.
---

# Machine learning training

Use this skill when implementing the training stage of a scikit-learn project.

- Define the target and split data into train and test sets before fitting transformations; use stratification for classification when appropriate.
- Put preprocessing and the estimator in a scikit-learn `Pipeline` or `ColumnTransformer` to prevent leakage and keep inference consistent.
- Choose metrics that match the task and business goal; report a baseline, validation results, and held-out test results.
- Set and record random states, model parameters, feature names, data version, and library versions.
- Inspect errors and class imbalance instead of relying on a single aggregate score.
- Save the trained artifact only after evaluating it and document the expected input schema and output semantics.

