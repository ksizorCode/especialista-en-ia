---
name: prediction-web
description: Create web interfaces that collect dataset-related inputs and run a machine learning prediction with clear validation and feedback.
---

# Prediction web interface

Use this skill when building the page that sends user input to an exported model.

- Derive form fields, types, ranges, defaults, and labels from the model's documented input schema.
- Validate required fields and numeric bounds before inference, with accessible error messages near the relevant field.
- Load the ONNX model once when possible; keep inference asynchronous and expose loading, success, and failure states.
- Present the prediction and any confidence or explanation only when it is supported by the model output.
- Keep model loading and inference logic separate from UI rendering so it can be tested and replaced.
- Never log sensitive user inputs by default, and do not claim medical, financial, or other high-stakes certainty without appropriate context.

