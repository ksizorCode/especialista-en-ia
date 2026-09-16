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







-----


Gemini
Nueva conversación
Buscar conversaciones
Imágenes
Biblioteca
Gems
Nuevo cuaderno
Revisión de Guía de IA
Temario y Apuntes de Inteligencia Artificial
Comparativa de potencia entre iMac
Solución de problemas en pantalla portátil
Cómo abrir cerraduras en Fallout 4
Cargadores para MacBook Pro M1
Guía de Generadores para el Transportador en Fallout 4
Guía para vender cama usada
Guía de misión en el Prydwen
Guía para limpiar macOS
Widgets en el Escritorio de macOS
Solución al atajo de GitHub.dev
Recuperar herramientas en Affinity Designer
Duración de llamadas en Google Meet
Reconstruir Taller de Armaduras
Cómo conseguir cobre en Fallout 4
Desactivar ajuste a píxeles en Figma
Diseño UI/UX Web Nakron Stud
Construcción del taller de servoarmaduras
Ayuda con Puzle Fallout 4
Optimización SEO para Instituto Uría
Competidores de Nakron Stud en Europa
Generador de Pregunta de Seguridad en PHP
Plugin de Campos Extra WooCommerce
Mapa interactivo de rodajes en Asturias
Archivo single en WordPress
CSS para Carta de Pizzería Responsive
CSS para Carta de Pizzería Moderna
Diseño CV Morado para Psicología
Juegos Star Wars para Mac
Alquiler de bicis para Vélocean
Rama • Diseño Web Premium para Marketing Hostelería
Diseño Web Premium para Marketing Hostelería
Temperaturas Máximas Verano España Histórico
WWDC 2026: Juegos Windows en Mac
Optimización GEO y LLM de Contenido Web
Autobús X95: Syntagma al Aeropuerto
Toy Story 5 y cines en Atenas
Cine en Atenas: Toy Story 5

Actividad
Gijón, España
Según tus sitios (casa)
Actualizar ubicación
Conversación con Gemini
revisa estos apuntes

Es verdad lo que dice?



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

Sí, lo que dice el documento es sustancialmente correcto, actualizado y está técnicamente muy bien estructurado. Refleja con precisión las convenciones modernas (2024–2026) que utilizan editores como VS Code (GitHub Copilot), Claude Code, Codex, y estándares emergentes como el protocolo MCP.

Los conceptos clave coinciden plenamente con el ecosistema actual de desarrollo asistido por IA:

AGENTS.md & SKILL.md: Reflejan el estándar abierto para context-files y la especificación de Agent Skills promovida ampliamente en herramientas como Claude Code y entornos de programación agéntica.

Archivos de Copilot (.instructions.md, .prompt.md, .agent.md): Siguen la sintaxis oficial y la estructura de archivos que utiliza la extensión GitHub Copilot en VS Code para personalización por carpetas, agentes locales y prompts.

Model Context Protocol (MCP): Define correctamente la arquitectura cliente-servidor abierta (creada por Anthropic) para conectar herramientas/datos externos a los LLM.

Hooks, Workflows y design.md: Aplican con precisión la distinción entre automatización determinista (Husky/CI/CD), orquestación de procesos y guías de contexto de diseño para la generación de código UI.

Precisiones y matices a tener en cuenta

Elemento	Matiz o corrección técnica
Formato AGENTS.md	Aunque es un estándar de facto muy adoptado, no todos los modelos/IDEs lo leen automáticamente de forma nativa a menos que la herramienta explícitamente soporte lectura contextual de la raíz o esté configurada para ello.
Ubicación de .git/hooks	Como señala bien el texto, .git/hooks no se sube al repositorio Git remoto. Por ello, en proyectos reales se depende de herramientas como Husky o pre-commit para distribuir hooks al equipo.
Integración MCP	La configuración mostrada en el ejemplo ("servers": {...}) es la estructura JSON típica que usan aplicaciones como Claude Desktop, Cursor o VS Code para registrar servidores MCP locales/remotos.
El documento es una guía práctica sólida, bien organizada y sin errores conceptuales importantes.

mejorarías algo, podrías re-redactarlo para gente con poca experiencia en informática e ia y no poner ejemplos tan tecnicos??

El documento original está excelente, pero para personas sin experiencia técnica o que se están iniciando en el mundo de la IA, resulta muy abstracto y cargado de jerga (CI/CD, YAML, hooks, MCP, front matter).

Aquí tienes una versión adaptada: más clara, con explicaciones basadas en analogías cotidianas y con ejemplos prácticos que cualquier persona pueda entender sin necesidad de saber programar.

Guía sencilla: Cómo darle instrucciones, reglas y herramientas a una IA
¿Por qué necesitamos todo esto?
Un asistente de IA es como un nuevo empleado muy inteligente, pero que sufre de amnesia. No conoce las reglas de tu empresa, no sabe dónde guardas tus documentos ni cómo te gusta que trabaje.

Para que no invente cosas ni cometa errores, le damos "instrucciones" y "herramientas". No todos estos recursos sirven para lo mismo:

Reglas generales: Le dicen cómo comportarse.

Manuales de conocimiento: Le aportan información.

Procedimientos: Le explican el paso a paso de un proceso.

Herramientas: Le permiten realizar acciones por sí misma.

Resumen rápido: ¿Qué es cada cosa?
Concepto	Analogía sencilla	Para qué sirve	Ejemplo práctico
Reglas del proyecto (AGENTS.md)	El reglamento interno de la oficina	Reglas fijas que la IA debe leer antes de empezar a trabajar.	"Escribe siempre en español y sé muy formal."
Instrucciones de archivo (*.instructions.md)	Post-it pegado en una carpeta específica	Instrucciones que solo se activan al tocar ciertos archivos.	"Si editas un documento de ventas, revisa los precios."
Plantilla de consulta (*.prompt.md)	Un formulario prellenado	Un mensaje repetible que le envías a la IA para una tarea rápida.	"Corrige la ortografía de este texto."
Habilidad / Skill (SKILL.md)	Un manual de formación sobre un tema	Un paquete con conocimientos y pasos para resolver una tarea compleja.	Cómo analizar las opiniones de clientes en redes.
Agente (*.agent.md)	Un especialista contratado	Una IA configurada para un rol concreto, con sus propias herramientas.	Un asistente especializado solo en revisar contratos.
Flujo de trabajo / Workflow	Una receta de cocina	La secuencia exacta de pasos que hay que seguir del inicio al fin.	1. Leer borrador → 2. Corregir → 3. Publicar.
Guía de diseño (design.md)	El libro de estilo visual	Reglas sobre colores, tipos de letra y apariencia visual.	"Usa el azul corporativo y letra tamaño 12."
Activador automático (Hook)	Una alarma o detector	Una acción que se ejecuta sola cuando ocurre algo.	"Comprobar que no haya palabrotas antes de guardar un texto."
Conector de datos (MCP)	Un puente o cable de conexión	Permite a la IA consultar bases de datos o programas externos.	Permitir que la IA lea tu correo o tu calendario.
Búsqueda en documentos (RAG)	Consultar un archivador de la empresa	Buscar en manuales en PDF para responder con datos reales.	Responder dudas buscando en el manual de un electrodoméstico.
Explicación detallada con ejemplos sencillos
1. Habilidades (Skills)
¿Qué es? Es una "guía paso a paso" que le enseña a la IA a hacer un trabajo concreto de principio a fin.

Ejemplo no técnico: Un manual para responder quejas de clientes.

Leer la queja y detectar la emoción (¿está enojado?).

Comprobar si el producto está en garantía.

Redactar una disculpa amable y ofrecer un descuento del 10%.

2. Flujo de Trabajo (Workflow)
¿Qué es? Un proceso ordenado donde el resultado de un paso es la entrada del siguiente.

Ejemplo no técnico: Publicar un artículo en un blog.

Paso 1: Escribir el borrador del tema.

Paso 2: Revisar que no tenga faltas de ortografía.

Paso 3: Traducirlo al inglés.

Paso 4: Publicarlo.

3. Instrucciones Generales (AGENTS.md / copilot-instructions.md)
¿Qué es? Un archivo donde pones las "normas de la casa" para que la IA nunca las olvide.

Ejemplo no técnico:

"Habla siempre de 'usted'."

"Usa una lista de viñetas en vez de párrafos largos."

"No inventes datos si no los sabes."

4. Agentes Especializados
¿Qué es? En lugar de usar una sola IA "todoterreno", usas varias IAs pequeñas con roles muy específicos.

Ejemplo no técnico:

Agente Redactor: Solo se encarga de escribir historias.

Agente Contador: Solo revisa números y facturas, y no tiene permitido cambiar el texto.

5. Conector MCP (Model Context Protocol)
¿Qué es? El "cable" que conecta a la IA con el mundo exterior para que pueda realizar acciones reales.

Ejemplo no técnico: Sin MCP, la IA solo te dice cómo enviar un correo. Con MCP, la IA puede presionar el botón de enviar en tu cuenta de correo o consultar tu agenda de Google Calendar.

Consejos básicos para empezar con IA
Sé muy claro: A la IA no le gustan las adivinanzas. Explícale el contexto, el objetivo y el formato que quieres.

Usa ejemplos: Si quieres que responda de una forma determinada, muéstrale un ejemplo de cómo quieres el resultado final.

Paso a paso: Para tareas largas, pídele a la IA que trabaje por fases en lugar de hacerlo todo de golpe.

No compartas datos privados: Nunca introduzcas contraseñas, tarjetas de crédito ni datos médicos en la IA.

damelo en formato .md

Ejemplo sencillo de SKILL.md
Markdown
---
name: revisar-atencion-cliente
description: Evalúa respuestas del equipo de soporte antes de enviarlas al cliente.
---

# Procedimiento de revisión

## Cuándo usarlo
Utilizar cada vez que se redacte un mensaje de respuesta a una reclamación.

## Pasos a seguir
1. **Tono:** Verificar que la respuesta sea empática y respetuosa.
2. **Solución:** Comprobar si se ofrece una alternativa clara al problema.
3. **Claridad:** Confirmar que no se usen tecnicismos innecesarios.

## Resultado esperado
Presentar los puntos a mejorar organizados por prioridad (alta, media, baja).
2. Workflows (Flujos de trabajo)
¿Qué es?
Un workflow define una secuencia ordenada de pasos donde el resultado de una fase alimenta a la siguiente. Garantiza que las tareas complejas se completen en el orden correcto.

Ejemplo de flujo estructurado
Markdown
# Workflow: Publicación de un artículo

## Entrada
Idea inicial o borrador proporcionado por el usuario.

## Pasos
1. **Estructuración:** Crear el índice de secciones principal.
2. **Redacción:** Desarrollar el contenido de cada sección.
3. **Revisión:** Corregir faltas de ortografía y tono de voz.
4. **Formato:** Formatear el resultado final en Markdown.

## Criterio de finalización
El texto no contiene errores y cumple las pautas del libro de estilo.
3. Instrucciones generales (AGENTS.md)
¿Qué es?
AGENTS.md es un archivo situado habitualmente en la raíz de un proyecto para definir las reglas de juego permanentes. Cualquier asistente que trabaje en ese proyecto debe leerlo primero.

Ejemplo práctico
Markdown
# Reglas generales del proyecto

## Pautas de comunicación
- Utiliza un lenguaje claro, accesible y sin jerga técnica innecesaria.
- Si falta información para completar una tarea, pídela en lugar de asumir datos.
- Mantén un formato estructurado utilizando listas y encabezados claros.

## Reglas de contenido
- No incluyas información confidencial o datos personales en tus respuestas.
- Proporciona siempre ejemplos prácticos en cada explicación.
4. Agentes especializados (*.agent.md)
¿Qué es?
En lugar de usar un único asistente genérico, un agente es un perfil configurado con un rol específico, limitaciones claras y acceso a herramientas concretas.

Ejemplo práctico de agente
Markdown
---
name: revisor-estilo
description: Agente especializado en corregir y pulir textos corporativos.
tools: [buscar_diccionario, analizar_texto]
---

Eres un corrector de estilo profesional.

## Tu objetivo
Revisar el texto proporcionado para asegurar que cumple con las normas de ortografía, gramática y tono de la empresa.

## Reglas
- Señala primero las correcciones ortográficas directas.
- Sugiere alternativas para mejorar la fluidez del texto.
- No alteres el significado original del mensaje.
5. Model Context Protocol (MCP)
¿Qué es?
MCP es un estándar abierto que actúa como un "puente" seguro entre los asistentes de IA y el software externo (bases de datos, servicios de correo, calendarios o herramientas de gestión).

Ejemplo de uso
Sin MCP, la IA solo puede darte el texto de un correo para que tú lo copies y pegues. Con un servidor MCP configurado, la IA puede redactar y guardar el borrador directamente en tu aplicación de correo previa confirmación.

Buenas prácticas para trabajar con IA
Claridad sobre adivinanza: Proporciona objetivos claros, restricciones y el formato de salida esperado.

Aporta ejemplos: Incluir un ejemplo del resultado deseado mejora drásticamente la calidad de la respuesta.

Divide tareas complejas: Para procesos largos, utiliza workflows que dividan el trabajo en etapas manejables.

Seguridad y privacidad: Nunca incluyas contraseñas, claves secretas ni información sensible en las instrucciones.
"""

with open("guia_instrucciones_skills_agentes_ia.md", "w", encoding="utf-8") as f:
f.write(markdown_content)

print("Archivo creado correctamente.")


```text?code_stdout&code_event_index=1
Archivo creado correctamente.

Aquí tienes el documento redactado y adaptado para un público general, sin jerga técnica compleja y en formato Markdown listo para descargar:

Icono de MD
guia_instrucciones_skills_agentes_ia
 MD 
Markdown
# Guía sencilla: Instrucciones, Skills y Agentes para Proyectos de IA

## Introducción

Un asistente de inteligencia artificial trabaja mucho mejor cuando cuenta con contexto claro, normas estables y procedimientos repetibles. Sin embargo, no todos los recursos sirven para lo mismo:

* **Reglas generales:** Indican cómo debe comportarse y responder la IA.
* **Manuales de conocimiento:** Le aportan información o contexto sobre un tema.
* **Procedimientos y flujos:** Le explican la secuencia de pasos que debe seguir.
* **Conectores y herramientas:** Le permiten consultar datos externos o realizar acciones automáticas.

La sintaxis y la estructura concreta pueden variar según el editor o la herramienta que utilices. **Markdown** (archivos `.md`) y **YAML** son los formatos más habituales por ser fáciles de leer por personas y procesar por máquinas.

---

## Resumen rápido de elementos

| Elemento | Analogía sencilla | Para qué sirve | Ejemplo práctico |
|---|---|---|---|
| `AGENTS.md` | *Reglamento de la oficina* | Normas y contexto general para la IA en un proyecto. | "Usa tono formal y responde siempre en español." |
| `SKILL.md` | *Manual de formación* | Procedimiento detallado y reutilizable para una tarea específica. | Cómo evaluar y responder una reclamación de un cliente. |
| `copilot-instructions.md` | *Guía de estilo del editor* | Instrucciones globales de comportamiento para el asistente. | "Prefiere respuestas cortas y estructuradas en viñetas." |
| `*.instructions.md` | *Nota adhesiva en un documento* | Reglas particulares que solo se aplican a ciertos archivos. | "Si editas archivos de presupuestos, revisa los totales." |
| `*.prompt.md` | *Formulario o plantilla reutilizable* | Instrucción empaquetada que el usuario invoca bajo demanda. | "Genera un resumen ejecutivo del texto seleccionado." |
| `*.agent.md` | *Rol o especialista asignado* | Define la misión, herramientas y personalidad de un asistente. | Un agente especializado exclusivamente en revisar ortografía. |
| **Workflow** | *Receta de cocina* | Secuencia ordenada de pasos, aprobaciones y decisiones. | Flujo: Borrador → Revisión → Corrección → Publicación. |
| `design.md` | *Libro de estilo visual* | Criterios de diseño, paleta de colores y reglas estéticas. | Colores corporativos, tipos de letra y tamaños. |
| **Hook** | *Alarma o automatización* | Acción que se ejecuta automáticamente ante un evento. | Verificar que no haya palabras prohibidas antes de guardar. |
| **MCP** | *Cable de conexión externo* | Estándar para conectar la IA con datos o programas externos. | Permitir a la IA consultar tu calendario o correo. |
| **RAG** | *Búsqueda en el archivo* | Mecanismo para recuperar fragmentos de documentos reales. | Buscar la respuesta en el manual interno en PDF de la empresa. |

---

# Explicación detallada de los recursos

## 1. Skills (Habilidades)

### ¿Qué es?
Un **skill** es un paquete de instrucciones y recursos que enseña a una IA a resolver una categoría concreta de tareas. No es solo un mensaje puntual, sino una guía que puede incluir listas de control, ejemplos y criterios de calidad.

### Estructura habitual

```text
.agents/
└── skills/
    └── revisar-atencion-cliente/
        ├── SKILL.md
        └── ejemplos/
Ejemplo sencillo de SKILL.md
Markdown
---
name: revisar-atencion-cliente
description: Evalúa respuestas del equipo de soporte antes de enviarlas al cliente.
---

# Procedimiento de revisión

## Cuándo usarlo
Utilizar cada vez que se redacte un mensaje de respuesta a una reclamación.

## Pasos a seguir
1. **Tono:** Verificar que la respuesta sea empática y respetuosa.
2. **Solución:** Comprobar si se ofrece una alternativa clara al problema.
3. **Claridad:** Confirmar que no se usen tecnicismos innecesarios.

## Resultado esperado
Presentar los puntos a mejorar organizados por prioridad (alta, media, baja).
2. Workflows (Flujos de trabajo)
¿Qué es?
Un workflow define una secuencia ordenada de pasos donde el resultado de una fase alimenta a la siguiente. Garantiza que las tareas complejas se completen en el orden correcto.

Ejemplo de flujo estructurado
Markdown
# Workflow: Publicación de un artículo

## Entrada
Idea inicial o borrador proporcionado por el usuario.

## Pasos
1. **Estructuración:** Crear el índice de secciones principal.
2. **Redacción:** Desarrollar el contenido de cada sección.
3. **Revisión:** Corregir faltas de ortografía y tono de voz.
4. **Formato:** Formatear el resultado final en Markdown.

## Criterio de finalización
El texto no contiene errores y cumple las pautas del libro de estilo.
3. Instrucciones generales (AGENTS.md)
¿Qué es?
AGENTS.md es un archivo situado habitualmente en la raíz de un proyecto para definir las reglas de juego permanentes. Cualquier asistente que trabaje en ese proyecto debe leerlo primero.

Ejemplo práctico
Markdown
# Reglas generales del proyecto

## Pautas de comunicación
- Utiliza un lenguaje claro, accesible y sin jerga técnica innecesaria.
- Si falta información para completar una tarea, pídela en lugar de asumir datos.
- Mantén un formato estructurado utilizando listas y encabezados claros.

## Reglas de contenido
- No incluyas información confidencial o datos personales en tus respuestas.
- Proporciona siempre ejemplos prácticos en cada explicación.
4. Agentes especializados (*.agent.md)
¿Qué es?
En lugar de usar un único asistente genérico, un agente es un perfil configurado con un rol específico, limitaciones claras y acceso a herramientas concretas.

Ejemplo práctico de agente
Markdown
---
name: revisor-estilo
description: Agente especializado en corregir y pulir textos corporativos.
tools: [buscar_diccionario, analizar_texto]
---

Eres un corrector de estilo profesional.

## Tu objetivo
Revisar el texto proporcionado para asegurar que cumple con las normas de ortografía, gramática y tono de la empresa.

## Reglas
- Señala primero las correcciones ortográficas directas.
- Sugiere alternativas para mejorar la fluidez del texto.
- No alteres el significado original del mensaje.
5. Model Context Protocol (MCP)
¿Qué es?
MCP es un estándar abierto que actúa como un "puente" seguro entre los asistentes de IA y el software externo (bases de datos, servicios de correo, calendarios o herramientas de gestión).

Ejemplo de uso
Sin MCP, la IA solo puede darte el texto de un correo para que tú lo copies y pegues. Con un servidor MCP configurado, la IA puede redactar y guardar el borrador directamente en tu aplicación de correo previa confirmación.

Buenas prácticas para trabajar con IA
Claridad sobre adivinanza: Proporciona objetivos claros, restricciones y el formato de salida esperado.

Aporta ejemplos: Incluir un ejemplo del resultado deseado mejora drásticamente la calidad de la respuesta.

Divide tareas complejas: Para procesos largos, utiliza workflows que dividan el trabajo en etapas manejables.

Seguridad y privacidad: Nunca incluyas contraseñas, claves secretas ni información sensible en las instrucciones.

podrías pasarmelo en un descargable?

Aquí tienes el archivo Markdown (.md) listo para descargar:

Tu archivo Markdown (.md) está listo
[file-tag: code-generated-file-3c221c6a-8fb5-412f-aea0-08518b183512]

no funciona el enlace a la descarga

Ejemplo sencillo de SKILL.md
Markdown
---
name: revisar-atencion-cliente
description: Evalúa respuestas del equipo de soporte antes de enviarlas al cliente.
---

# Procedimiento de revisión

## Cuándo usarlo
Utilizar cada vez que se redacte un mensaje de respuesta a una reclamación.

## Pasos a seguir
1. **Tono:** Verificar que la respuesta sea empática y respetuosa.
2. **Solución:** Comprobar si se ofrece una alternativa clara al problema.
3. **Claridad:** Confirmar que no se usen tecnicismos innecesarios.

## Resultado esperado
Presentar los puntos a mejorar organizados por prioridad (alta, media, baja).
2. Workflows (Flujos de trabajo)
¿Qué es?
Un workflow define una secuencia ordenada de pasos donde el resultado de una fase alimenta a la siguiente. Garantiza que las tareas complejas se completen en el orden correcto.

Ejemplo de flujo estructurado
Markdown
# Workflow: Publicación de un artículo

## Entrada
Idea inicial o borrador proporcionado por el usuario.

## Pasos
1. **Estructuración:** Crear el índice de secciones principal.
2. **Redacción:** Desarrollar el contenido de cada sección.
3. **Revisión:** Corregir faltas de ortografía y tono de voz.
4. **Formato:** Formatear el resultado final en Markdown.

## Criterio de finalización
El texto no contiene errores y cumple las pautas del libro de estilo.
3. Instrucciones generales (AGENTS.md)
¿Qué es?
AGENTS.md es un archivo situado habitualmente en la raíz de un proyecto para definir las reglas de juego permanentes. Cualquier asistente que trabaje en ese proyecto debe leerlo primero.

Ejemplo práctico
Markdown
# Reglas generales del proyecto

## Pautas de comunicación
- Utiliza un lenguaje claro, accesible y sin jerga técnica innecesaria.
- Si falta información para completar una tarea, pídela en lugar de asumir datos.
- Mantén un formato estructurado utilizando listas y encabezados claros.

## Reglas de contenido
- No incluyas información confidencial o datos personales en tus respuestas.
- Proporciona siempre ejemplos prácticos en cada explicación.
4. Agentes especializados (*.agent.md)
¿Qué es?
En lugar de usar un único asistente genérico, un agente es un perfil configurado con un rol específico, limitaciones claras y acceso a herramientas concretas.

Ejemplo práctico de agente
Markdown
---
name: revisor-estilo
description: Agente especializado en corregir y pulir textos corporativos.
tools: [buscar_diccionario, analizar_texto]
---

Eres un corrector de estilo profesional.

## Tu objetivo
Revisar el texto proporcionado para asegurar que cumple con las normas de ortografía, gramática y tono de la empresa.

## Reglas
- Señala primero las correcciones ortográficas directas.
- Sugiere alternativas para mejorar la fluidez del texto.
- No alteres el significado original del mensaje.
5. Model Context Protocol (MCP)
¿Qué es?
MCP es un estándar abierto que actúa como un "puente" seguro entre los asistentes de IA y el software externo (bases de datos, servicios de correo, calendarios o herramientas de gestión).

Ejemplo de uso
Sin MCP, la IA solo puede darte el texto de un correo para que tú lo copies y pegues. Con un servidor MCP configurado, la IA puede redactar y guardar el borrador directamente en tu aplicación de correo previa confirmación.

Buenas prácticas para trabajar con IA
Claridad sobre adivinanza: Proporciona objetivos claros, restricciones y el formato de salida esperado.

Aporta ejemplos: Incluir un ejemplo del resultado deseado mejora drásticamente la calidad de la respuesta.

Divide tareas complejas: Para procesos largos, utiliza workflows que dividan el trabajo en etapas manejables.

Seguridad y privacidad: Nunca incluyas contraseñas, claves secretas ni información sensible en las instrucciones.
"""

file_path = "guia_instrucciones_skills_agentes_ia_v2.md"
with open(file_path, "w", encoding="utf-8") as f:
f.write(markdown_content)

print(f"Archivo generado: {file_path}")


```text?code_stdout&code_event_index=1
Archivo generado: guia_instrucciones_skills_agentes_ia_v2.md

Disculpa las molestias. He vuelto a generar el archivo para ti.

Tu archivo Markdown (.md) está listo para descargar:

Icono de MD
guia_instrucciones_skills_agentes_ia_v2
 MD 



Gemini es una IA y puede cometer errores, incluso sobre personas. Tu privacidad y GeminiSe abre en una ventana nueva

Analizando
# Guía sencilla: Instrucciones, Skills y Agentes para Proyectos de IA

## Introducción

Un asistente de inteligencia artificial trabaja mucho mejor cuando cuenta con contexto claro, normas estables y procedimientos repetibles. Sin embargo, no todos los recursos sirven para lo mismo:

* **Reglas generales:** Indican cómo debe comportarse y responder la IA.
* **Manuales de conocimiento:** Le aportan información o contexto sobre un tema.
* **Procedimientos y flujos:** Le explican la secuencia de pasos que debe seguir.
* **Conectores y herramientas:** Le permiten consultar datos externos o realizar acciones automáticas.

La sintaxis y la estructura concreta pueden variar según el editor o la herramienta que utilices. **Markdown** (archivos `.md`) y **YAML** son los formatos más habituales por ser fáciles de leer por personas y procesar por máquinas.

---

## Resumen rápido de elementos

| Elemento | Analogía sencilla | Para qué sirve | Ejemplo práctico |
|---|---|---|---|
| `AGENTS.md` | *Reglamento de la oficina* | Normas y contexto general para la IA en un proyecto. | "Usa tono formal y responde siempre en español." |
| `SKILL.md` | *Manual de formación* | Procedimiento detallado y reutilizable para una tarea específica. | Cómo evaluar y responder una reclamación de un cliente. |
| `copilot-instructions.md` | *Guía de estilo del editor* | Instrucciones globales de comportamiento para el asistente. | "Prefiere respuestas cortas y estructuradas en viñetas." |
| `*.instructions.md` | *Nota adhesiva en un documento* | Reglas particulares que solo se aplican a ciertos archivos. | "Si editas archivos de presupuestos, revisa los totales." |
| `*.prompt.md` | *Formulario o plantilla reutilizable* | Instrucción empaquetada que el usuario invoca bajo demanda. | "Genera un resumen ejecutivo del texto seleccionado." |
| `*.agent.md` | *Rol o especialista asignado* | Define la misión, herramientas y personalidad de un asistente. | Un agente especializado exclusivamente en revisar ortografía. |
| **Workflow** | *Receta de cocina* | Secuencia ordenada de pasos, aprobaciones y decisiones. | Flujo: Borrador → Revisión → Corrección → Publicación. |
| `design.md` | *Libro de estilo visual* | Criterios de diseño, paleta de colores y reglas estéticas. | Colores corporativos, tipos de letra y tamaños. |
| **Hook** | *Alarma o automatización* | Acción que se ejecuta automáticamente ante un evento. | Verificar que no haya palabras prohibidas antes de guardar. |
| **MCP** | *Cable de conexión externo* | Estándar para conectar la IA con datos o programas externos. | Permitir a la IA consultar tu calendario o correo. |
| **RAG** | *Búsqueda en el archivo* | Mecanismo para recuperar fragmentos de documentos reales. | Buscar la respuesta en el manual interno en PDF de la empresa. |

---

# Explicación detallada de los recursos

## 1. Skills (Habilidades)

### ¿Qué es?
Un **skill** es un paquete de instrucciones y recursos que enseña a una IA a resolver una categoría concreta de tareas. No es solo un mensaje puntual, sino una guía que puede incluir listas de control, ejemplos y criterios de calidad.

### Estructura habitual

```text
.agents/
└── skills/
    └── revisar-atencion-cliente/
        ├── SKILL.md
        └── ejemplos/
```

### Ejemplo sencillo de `SKILL.md`

```markdown
---
name: revisar-atencion-cliente
description: Evalúa respuestas del equipo de soporte antes de enviarlas al cliente.
---

# Procedimiento de revisión

## Cuándo usarlo
Utilizar cada vez que se redacte un mensaje de respuesta a una reclamación.

## Pasos a seguir
1. **Tono:** Verificar que la respuesta sea empática y respetuosa.
2. **Solución:** Comprobar si se ofrece una alternativa clara al problema.
3. **Claridad:** Confirmar que no se usen tecnicismos innecesarios.

## Resultado esperado
Presentar los puntos a mejorar organizados por prioridad (alta, media, baja).
```

---

## 2. Workflows (Flujos de trabajo)

### ¿Qué es?
Un **workflow** define una secuencia ordenada de pasos donde el resultado de una fase alimenta a la siguiente. Garantiza que las tareas complejas se completen en el orden correcto.

### Ejemplo de flujo estructurado

```markdown
# Workflow: Publicación de un artículo

## Entrada
Idea inicial o borrador proporcionado por el usuario.

## Pasos
1. **Estructuración:** Crear el índice de secciones principal.
2. **Redacción:** Desarrollar el contenido de cada sección.
3. **Revisión:** Corregir faltas de ortografía y tono de voz.
4. **Formato:** Formatear el resultado final en Markdown.

## Criterio de finalización
El texto no contiene errores y cumple las pautas del libro de estilo.
```

---

## 3. Instrucciones generales (`AGENTS.md`)

### ¿Qué es?
`AGENTS.md` es un archivo situado habitualmente en la raíz de un proyecto para definir las reglas de juego permanentes. Cualquier asistente que trabaje en ese proyecto debe leerlo primero.

### Ejemplo práctico

```markdown
# Reglas generales del proyecto

## Pautas de comunicación
- Utiliza un lenguaje claro, accesible y sin jerga técnica innecesaria.
- Si falta información para completar una tarea, pídela en lugar de asumir datos.
- Mantén un formato estructurado utilizando listas y encabezados claros.

## Reglas de contenido
- No incluyas información confidencial o datos personales en tus respuestas.
- Proporciona siempre ejemplos prácticos en cada explicación.
```

---

## 4. Agentes especializados (`*.agent.md`)

### ¿Qué es?
En lugar de usar un único asistente genérico, un **agente** es un perfil configurado con un rol específico, limitaciones claras y acceso a herramientas concretas.

### Ejemplo práctico de agente

```markdown
---
name: revisor-estilo
description: Agente especializado en corregir y pulir textos corporativos.
tools: [buscar_diccionario, analizar_texto]
---

Eres un corrector de estilo profesional.

## Tu objetivo
Revisar el texto proporcionado para asegurar que cumple con las normas de ortografía, gramática y tono de la empresa.

## Reglas
- Señala primero las correcciones ortográficas directas.
- Sugiere alternativas para mejorar la fluidez del texto.
- No alteres el significado original del mensaje.
```

---

## 5. Model Context Protocol (MCP)

### ¿Qué es?
**MCP** es un estándar abierto que actúa como un "puente" seguro entre los asistentes de IA y el software externo (bases de datos, servicios de correo, calendarios o herramientas de gestión).

### Ejemplo de uso
Sin MCP, la IA solo puede darte el texto de un correo para que tú lo copies y pegues. Con un servidor MCP configurado, la IA puede **redactar y guardar el borrador directamente en tu aplicación de correo** previa confirmación.

---

## Buenas prácticas para trabajar con IA

1. **Claridad sobre adivinanza:** Proporciona objetivos claros, restricciones y el formato de salida esperado.
2. **Aporta ejemplos:** Incluir un ejemplo del resultado deseado mejora drásticamente la calidad de la respuesta.
3. **Divide tareas complejas:** Para procesos largos, utiliza workflows que dividan el trabajo en etapas manejables.
4. **Seguridad y privacidad:** Nunca incluyas contraseñas, claves secretas ni información sensible en las instrucciones.
guia_instrucciones_skills_agentes_ia_v2.md
Mostrando guia_instrucciones_skills_agentes_ia_v2.md.