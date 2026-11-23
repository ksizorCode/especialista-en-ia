---
name: onnx-export
description: Export validated scikit-learn models to ONNX for portable inference, especially in JavaScript runtimes.
---

# ONNX export

Use this skill when a trained scikit-learn model must be consumed outside Python.

- Export the complete preprocessing-plus-model pipeline whenever preprocessing is required at inference time.
- Define ONNX input names, shapes, and numeric types explicitly; keep feature order and categorical encoding stable.
- Use a representative input sample with the same schema as production data and record the opset and converter versions.
- Validate the exported model with an ONNX runtime against Python predictions on the same cases, including edge cases.
- Document output names, output shapes, class-label mapping, and the JavaScript runtime/package expected to load the model.
- Treat the `.onnx` file as a versioned build artifact; do not export an unvalidated model.

