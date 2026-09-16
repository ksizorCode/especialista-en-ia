# Guía de instrucciones, Skills y agentes para proyectos de IA

## Introducción

Los asistentes de IA trabajan mejor cuando reciben contexto estable, reglas claras y procedimientos repetibles. Estos recursos no son equivalentes: algunos indican cómo responder, otros aportan conocimiento, otros describen procesos y otros ejecutan acciones.

La sintaxis y las carpetas dependen de la herramienta. Comprueba siempre la documentación del sistema de IA utilizado. Markdown y YAML son formatos habituales porque son legibles y versionables.

## Mapa rápido

| Elemento | Para qué sirve | Ámbito habitual | Ejemplo |
|---|---|---|---|
| `AGENTS.md` | Reglas y contexto para agentes de código | Repositorio y subdirectorios | Usar TypeScript y ejecutar pruebas |
| `SKILL.md` | Conocimiento y procedimiento reutilizable | Skills de agentes | Revisar una API con una lista de control |
| `copilot-instructions.md` | Instrucciones generales para Copilot | VS Code/GitHub Copilot | Convenciones y arquitectura |
| `*.instructions.md` | Reglas aplicadas a patrones de archivos | VS Code/Copilot | Reglas para `src/**/*.ts` |
| `*.prompt.md` | Prompt reutilizable invocado por el usuario | VS Code/Copilot | Generar pruebas del archivo activo |
| `*.agent.md` | Misión, herramientas y personalidad de un agente | IDEs y plataformas de agentes | Agente revisor de seguridad |
| Workflow | Secuencia de pasos y validaciones | Proyecto, equipo, CI/CD | Flujo de una migración |
| `design.md` | Sistema visual y criterios de UX | Web y móvil | Colores, tipografías y estados |
| Hook | Automatización ante un evento | Agentes, Git y CI/CD | Ejecutar tests tras un cambio |
| MCP | Conexión con herramientas y datos externos | Asistentes con herramientas | Consultar documentación |
| RAG | Recuperación de documentos relevantes | Chatbots y asistentes | Buscar en manuales internos |

### Otros elementos útiles

También suelen faltar las instrucciones globales del proveedor, las instrucciones por patrón, prompts, agentes, hooks, MCP, `README.md`, `CONTRIBUTING.md`, `SECURITY.md`, `ARCHITECTURE.md`, pruebas, evaluaciones y criterios de aceptación.

---

# Skills

## Qué es

Un **skill** es un paquete de instrucciones y, opcionalmente, recursos o scripts que enseña a un agente a resolver una clase concreta de tareas. No es solo un prompt: puede incluir procedimiento, criterios de calidad, ejemplos, referencias y herramientas auxiliares.

Se utiliza en agentes de programación, soporte, automatizaciones y sistemas que cargan instrucciones bajo demanda. Debe ser específico, comprobable y reutilizable.

## Cómo se crea o instala

Una estructura habitual es:

```text
.agents/
└── skills/
    └── revisar-api/
        ├── SKILL.md
        ├── referencias/
        └── scripts/
```

Formato mínimo:

```markdown
---
name: revisar-api
description: Revisa una API REST y detecta problemas de contrato, seguridad y pruebas.
---

# Revisar una API

## Cuándo usarlo
Cuando se solicite revisar o diseñar un endpoint REST.

## Procedimiento
1. Identificar rutas, entradas y salidas.
2. Revisar autenticación, autorización y validación.
3. Comprobar pruebas y documentación.

## Resultado esperado
Entregar hallazgos priorizados con archivo, evidencia y corrección.
```

Algunas herramientas esperan `.agents/skills`, otras `.claude/skills` o una carpeta configurada por el proveedor. La ubicación debe coincidir con su documentación.

## Ejemplo 1: revisión de Python

```markdown
---
name: revisar-python
description: Revisa Python buscando errores, tipos, pruebas y problemas de rendimiento.
---

# Procedimiento
1. Leer código y pruebas relacionadas.
2. Ejecutar el comprobador disponible.
3. Informar primero de errores reproducibles.
4. Proponer el cambio mínimo y volver a validar.
```

## Ejemplo 2: documentación de API

```markdown
---
name: documentar-endpoint
description: Genera OpenAPI para endpoints existentes sin inventar contratos.
---

# Reglas
- Inspeccionar rutas, modelos y pruebas.
- Marcar como desconocido lo que no aparezca en el código.
- Incluir ejemplos válidos de petición y respuesta.
```

## Recursos

- [Agent Skills](https://agentskills.io/): especificación y ejemplos.
- [Skills de Claude Code](https://docs.anthropic.com/en/docs/claude-code/skills): instalación y uso.
- [Repositorio de ejemplos de Anthropic](https://github.com/anthropics/skills): referencia práctica.

---

# Workflow

## Qué es

Un **workflow** es un flujo ordenado que define objetivo, pasos, decisiones, herramientas, salidas y validaciones. Puede ejecutarlo una persona, un agente o un sistema CI/CD. Se usa cuando el orden de varias fases importa: analizar, modificar, probar y publicar.

## Cómo se crea o instala

No hay un formato universal. Puede escribirse en Markdown para que lo siga un agente o en YAML para un motor de automatización.

```markdown
# Workflow: cambio de funcionalidad

## Entrada
Petición, repositorio y criterios de aceptación.

## Pasos
1. Inspeccionar el código relacionado.
2. Proponer una hipótesis y un cambio pequeño.
3. Ejecutar pruebas focalizadas.
4. Revisar el diff y documentar el resultado.

## Finalización
Las pruebas pasan y no quedan errores conocidos sin explicar.
```

## Ejemplo 1: revisión de código

1. Leer diff y contexto cercano.
2. Buscar regresiones, riesgos de seguridad y pruebas ausentes.
3. Ordenar hallazgos por severidad.
4. Informar archivo, evidencia, impacto y corrección.

## Ejemplo 2: GitHub Actions

```yaml
name: pruebas
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm test
```

## Recursos

- [GitHub Actions](https://docs.github.com/en/actions): workflows CI/CD en YAML.
- [GitHub Skills](https://skills.github.com/): cursos prácticos.
- [Temporal](https://temporal.io/): workflows duraderos y orquestación.

---

# AGENTS.md

## Qué es

`AGENTS.md` es un archivo de contexto para agentes de programación. Describe comandos, arquitectura, convenciones, límites y validaciones. No suele definir un agente autónomo completo, sino el contexto en el que trabaja.

Se usa en herramientas compatibles, como Codex y otros agentes de código. Un archivo dentro de una subcarpeta puede aportar reglas más específicas, según el agente.

## Cómo se crea o instala

Se crea normalmente en la raíz:

```text
proyecto/
├── AGENTS.md
├── README.md
└── src/
```

```markdown
# Instrucciones del repositorio

## Comandos
- Instalar: `npm ci`
- Probar: `npm test`
- Tipos: `npm run typecheck`

## Reglas
- Mantener compatible la API pública.
- Añadir una prueba a cada cambio de comportamiento.
- No modificar archivos generados.
```

## Ejemplo 1

En un frontend, indicar que los componentes viven en `src/components`, que se usa el sistema de diseño existente y que cada interacción nueva necesita una prueba.

## Ejemplo 2

En un monorepo, el `AGENTS.md` raíz define reglas comunes y `packages/api/AGENTS.md` añade comandos y convenciones del backend.

## Recursos

- [AGENTS.md en GitHub](https://github.com/agentsmd/agents.md): propuesta y ejemplos.
- [Guía de AGENTS.md de Codex](https://developers.openai.com/codex/guides/agents-md/): configuración para agentes.

---

# Instrucciones para Copilot

## `copilot-instructions.md`

Es el archivo de instrucciones generales que GitHub Copilot puede aplicar a un workspace. En VS Code suele ubicarse aquí:

```text
.github/copilot-instructions.md
```

```markdown
# Instrucciones del proyecto
- Responde en español.
- Usa utilidades existentes antes de crear otras.
- Ejecuta una prueba focalizada después de editar.
- No cambies archivos fuera del alcance.
```

## `*.instructions.md`

Aplica reglas a archivos que coincidan con un patrón mediante front matter:

```markdown
---
description: Reglas para componentes React
applyTo: "src/components/**/*.tsx"
---

- Usa los componentes del sistema de diseño.
- Mantén accesibles los estados de carga y error.
```

## Ejemplos

1. `.github/instructions/python.instructions.md` exige type hints y pytest en Python.
2. `.github/instructions/frontend.instructions.md` aplica reglas de accesibilidad a componentes web.

## Recursos

- [Instrucciones personalizadas de VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions).
- [Personalización de GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot).

---

# Prompt reutilizable

## Qué es

Un **prompt** es una entrada que orienta a un modelo para responder o ejecutar una tarea. Puede ser puntual, una plantilla con variables o un prompt versionado. Se usa en chat, API, agentes, evaluación y automatización.

Debe expresar objetivo, contexto, restricciones, formato de salida y criterio de calidad. No debe incluir secretos ni depender de información que el modelo no puede consultar.

## Cómo se crea o instala

En VS Code/Copilot puede guardarse como:

```text
.github/prompts/revisar-cambio.prompt.md
```

```markdown
---
description: Revisa el cambio del archivo activo
agent: ask
---

Revisa el cambio actual.

Entrega:
1. Hallazgos por severidad.
2. Riesgo y evidencia.
3. Pruebas que faltan.

No propongas cambios fuera del alcance.
```

La extensión y los campos disponibles dependen del editor. En una API, puede guardarse como plantilla con variables estructuradas.

## Ejemplo 1: generar pruebas

```text
Analiza la función seleccionada. Crea pruebas para el caso normal, entradas
vacías, límites y errores. Usa el framework instalado y no cambies la
implementación. Devuelve primero los casos y después el código.
```

## Ejemplo 2: extracción estructurada

```text
Extrae nombre, fecha y cantidad. Devuelve exclusivamente JSON válido:
{"nombre": string, "fecha": string|null, "cantidad": number|null}
Si falta un valor, usa null. No inventes datos.
```

## Recursos

- [Guía de prompting de OpenAI](https://platform.openai.com/docs/guides/prompt-engineering).
- [Ingeniería de prompts de Microsoft](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering).
- [Prompting de Anthropic](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview).

---

# Agent y `*.agent.md`

## Qué es

Un **agent** interpreta una petición, decide pasos, usa herramientas y comprueba resultados. Un prompt suele responder una vez; un agente puede mantener estado y ejecutar un ciclo de trabajo.

En VS Code, `*.agent.md` puede describir un modo de agente especializado. Otros productos usan JSON, YAML o interfaces propias; no existe un formato universal.

## Cómo se crea o instala

Ejemplo de ubicación:

```text
.github/agents/reviewer.agent.md
```

```markdown
---
name: reviewer
description: Revisa cambios buscando errores y regresiones
tools: [search, read, terminal]
---

Eres un revisor de código riguroso.
1. Inspecciona diff y pruebas relacionadas.
2. Ejecuta comprobaciones focalizadas.
3. Devuelve primero problemas con archivo y evidencia.
```

## Ejemplo 1

Un agente `tester` identifica el framework, ejecuta la suite apropiada y propone casos faltantes.

## Ejemplo 2

Un agente `security-reviewer` solo lee y analiza, busca secretos, valida entradas y revisa autenticación sin modificar el repositorio.

## Recursos

- [Agentes personalizados de VS Code](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode).
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/).
- [Microsoft AutoGen](https://microsoft.github.io/autogen/).

---

# Design / `design.md`

## Qué es

`design.md` documenta el sistema visual y las reglas de UX: tipografías, colores, espaciado, componentes, estados, accesibilidad, responsive y tono. Se usa en productos digitales para que personas y agentes implementen una interfaz coherente.

No sustituye a una biblioteca de componentes ni a los tokens del código: los explica y sirve de referencia.

## Cómo se crea o instala

Se guarda en la raíz o en `docs/design.md`:

```markdown
# Sistema visual

## Tipografía
- Texto: familia definida por el proyecto.
- Jerarquía: títulos, cuerpo, etiquetas y ayudas.

## Color
- `--color-primary`: acción principal.
- `--color-danger`: errores y acciones destructivas.

## Componentes
Documentar variantes, foco, error, carga y deshabilitado.

## Accesibilidad
Contraste AA, foco visible, teclado y nombres accesibles.
```

## Ejemplo 1

Una aplicación administrativa define una rejilla de 8 px, estados de foco y error, tablas densas y una paleta contrastada.

## Ejemplo 2

Una aplicación móvil documenta tamaños táctiles mínimos, navegación inferior, estados sin conexión y pantallas pequeñas.

## Recursos

- [Material Design](https://m3.material.io/): componentes y principios.
- [W3C WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/): accesibilidad web.
- [Radix Primitives](https://www.radix-ui.com/primitives): componentes accesibles.

---

# Hooks

## Qué es

Un **hook** es una acción automática antes o después de un evento. En agentes puede interceptar una herramienta; en Git puede ejecutarse antes de un commit; en CI/CD puede reaccionar a un push.

Sirve para validaciones repetibles, pero debe ser rápido, determinista y seguro. No debe confiar ciegamente en texto generado por un modelo ni exponer secretos.

## Cómo se crea o instala

Ejemplo de hook de Git:

```text
.git/hooks/pre-commit
```

```sh
#!/bin/sh
npm run lint && npm test -- --runInBand
```

```sh
chmod +x .git/hooks/pre-commit
```

Para compartir hooks es preferible Husky, pre-commit o CI, porque `.git/hooks` no se versiona normalmente.

## Ejemplo 1

Un `pre-commit` ejecuta formato y lint para impedir commits que incumplan las reglas.

## Ejemplo 2

Un hook de agente solicita confirmación antes de ejecutar comandos destructivos o acceder a un sistema externo.

## Recursos

- [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).
- [Husky](https://typicode.github.io/husky/).
- [pre-commit](https://pre-commit.com/).

---

# MCP

## Qué es

**Model Context Protocol (MCP)** conecta aplicaciones de IA con herramientas, recursos y prompts externos mediante una interfaz común. Permite consultar documentación, acceder a una base de datos o crear una incidencia con permisos configurados.

## Cómo se crea o instala

Se instala un servidor MCP y se registra en el cliente compatible. La configuración exacta cambia según el cliente; este es un ejemplo conceptual:

```json
{
  "servers": {
    "documentacion": {
      "command": "npx",
      "args": ["-y", "mi-servidor-mcp"]
    }
  }
}
```

Revisa siempre permisos, origen del paquete y datos que el servidor puede leer o modificar.

## Ejemplo 1

Un servidor MCP expone búsqueda de documentación interna como recurso de solo lectura.

## Ejemplo 2

Un servidor MCP permite crear tickets, pero el agente pide confirmación antes de ejecutarlo.

## Recursos

- [Especificación MCP](https://modelcontextprotocol.io/specification).
- [SDKs de MCP](https://modelcontextprotocol.io/docs/sdk).
- [Servidores MCP de referencia](https://github.com/modelcontextprotocol/servers).

---

# Buenas prácticas finales

1. Mantener instrucciones breves, concretas y verificables.
2. Separar reglas permanentes del contexto de una tarea.
3. Indicar qué hacer cuando falta información; no pedir que se invente.
4. Limitar herramientas y permisos al mínimo necesario.
5. Versionar prompts, skills y workflows junto con el proyecto.
6. Añadir ejemplos positivos y casos límite.
7. Validar con pruebas o evaluaciones, no solo leyendo respuestas.
8. Evitar secretos, datos personales y credenciales.
9. Documentar herramienta compatible y versión.
10. Revisar enlaces, comandos y modelos porque estas interfaces evolucionan.
