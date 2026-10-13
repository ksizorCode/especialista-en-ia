"""Actualiza el contenido usado al abrir index.html directamente como archivo."""

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
app = (ROOT / "assets/app.js").read_text(encoding="utf-8")
index = re.search(r"const paginas = \[(.*?)\];", app, re.S)
if not index:
    raise SystemExit("No se encontró el array paginas en assets/app.js")

paths = re.findall(r'^\s*\["[^"]+",\s*"([^"]+\.md)"\],?\s*$', index.group(1), re.M)
if not paths:
    raise SystemExit("El array paginas no contiene archivos Markdown")

content = {path: (ROOT / path).read_text(encoding="utf-8") for path in paths}
output = ROOT / "assets/content.js"
output.write_text(
    "// Generado por build_content.py. No editar a mano.\n"
    + "window.courseMarkdown = Object.freeze("
    + json.dumps(content, ensure_ascii=False, separators=(",", ":"))
    + ");\n",
    encoding="utf-8",
)
print(f"Actualizado {output.relative_to(ROOT)}: {len(content)} lecciones")
