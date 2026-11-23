---
name: clean-reusable-code
description: Produce maintainable, testable, and reusable code for the machine learning and web parts of this project.
---

# Clean and reusable code

Use this skill when implementing or refactoring project code.

- Separate data access, preprocessing, training, export, inference, and presentation responsibilities.
- Prefer small functions with explicit inputs and outputs; name domain concepts clearly and avoid hidden global state.
- Reuse shared transformations and schemas rather than copying logic between notebook, training, and web code.
- Keep configuration separate from implementation and make paths, seeds, model versions, and thresholds explicit.
- Handle expected failures with actionable messages; avoid broad catches that hide defects.
- Remove dead code and duplication only when behavior is understood, and preserve compatibility with existing project conventions.

