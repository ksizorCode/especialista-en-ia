---
name: ficha-alumnos
description: crear ficha por alumno en HTML expotable a PDF
---


# Skill: Gestión de fichas de alumnos

Crea una ficha de alumno por cada alumno en un HTML individual que tenga el nombre del alumno y un identificador único. La ficha debe contener información relevante para el departamento de captación y para los profesores, incluyendo datos de contacto, historial formativo, conocimientos previos, objetivos y preferencias de contacto.

El HTML ha de tener un diseño claro y estructurado, con secciones diferenciadas para cada tipo de información. Además, debe incluir un resumen para el profesor que resuma la formación previa, experiencia, nivel declarado, conocimientos dominados, carencias y objetivos del alumno.

Y un botón imprimir y otro Guardar como PDF para su descarga.

E inserta una foto de ejemplo del alumno que puedes extraer de un banco de imágenes gratuito, como Unsplash o Pexels, para ilustrar la ficha.


## Objetivo

Crear y mantener una ficha estructurada de cada alumno de un centro de estudios que permita:

- Al departamento de captación, disponer de los datos necesarios para contactar con el alumno en el futuro y conocer su historial formativo e intereses.
- Al profesor, conocer los conocimientos previos, experiencia y necesidades formativas del alumno antes de comenzar un curso.

La ficha debe recoger únicamente información relevante para estos objetivos y evitar datos innecesarios.

## Cuándo utilizar esta skill

Utilizar esta skill cuando:

- Se matricule un alumno en un curso.
- Un alumno solicite información sobre una formación.
- Se complete una entrevista o formulario de admisión.
- Un profesor necesite consultar los conocimientos previos de un alumno.
- El departamento de captación necesite consultar el historial de un alumno.
- Se actualicen los datos de contacto o la situación formativa del alumno.

## Estructura de la ficha

Cada alumno debe tener una ficha con las siguientes secciones.

### 1. Identificación del alumno

| Campo | Descripción |
| --- | --- |
| `alumno_id` | Identificador único del alumno. |
| `nombre` | Nombre. |
| `apellidos` | Apellidos. |
| `email` | Correo electrónico. |
| `telefono` | Teléfono. |
| `fecha_alta` | Fecha en la que se creó la ficha. |
| `ultima_actualizacion` | Fecha de la última modificación. |

No inventar ningún dato. Si un dato no está disponible, dejarlo vacío o indicar **No informado**.

### 2. Información de captación y seguimiento

Esta sección está destinada principalmente al departamento de captación.

#### Campos

- `canal_captacion`: cómo llegó el alumno al centro.
  - Web
  - Google
  - Redes sociales
  - Recomendación
  - Antiguo alumno
  - Evento
  - Otro
- `fecha_primer_contacto`
- `persona_contacto`
- `interes_inicial`
- `objetivo_formativo`
- `cursos_realizados`
- `cursos_interes_futuro`
- `fecha_ultimo_contacto`
- `resultado_ultimo_contacto`
- `proximo_contacto`
- `observaciones_captacion`

Las observaciones de captación deben ser objetivas y útiles para futuros contactos.

**Ejemplo:**

> Mostró interés en formación avanzada de Excel después de finalizar el curso de Excel intermedio. Indicó que podría estar interesado en realizarla durante el primer trimestre de 2027.

Evitar comentarios subjetivos como:

> Es un alumno complicado.

### 3. Perfil académico y profesional

Esta sección permite al profesor conocer el contexto del alumno.

#### Campos

- `profesion_actual`
- `sector_profesional`
- `puesto_actual`
- `experiencia_profesional_relevante`
- `formacion_previa`
- `experiencia_relacionada_con_el_curso`

**Ejemplo:**

```yaml
profesion_actual: Técnico administrativo
sector_profesional: Servicios
puesto_actual: Administrativo
experiencia_profesional_relevante: 4 años utilizando hojas de cálculo
formacion_previa: Ciclo Formativo de Grado Superior en Administración y Finanzas
experiencia_relacionada_con_el_curso: Utiliza Excel habitualmente para informes y tablas.
```

### 4. Conocimientos previos

Esta es una de las secciones más importantes para el profesor.

Registrar los conocimientos previos relacionados directamente con el curso.

#### Campos

- `nivel_previo_declarado`
- `conocimientos`
- `herramientas_utilizadas`
- `experiencia_practica`
- `certificaciones`
- `aspectos_que_domina`
- `aspectos_que_necesita_reforzar`

Cuando sea posible, diferenciar entre:

- No tiene conocimientos.
- Conocimientos básicos.
- Nivel intermedio.
- Nivel avanzado.
- Experto.
- No evaluado.

No inferir el nivel del alumno únicamente a partir de su profesión o formación académica.

**Ejemplo:**

```yaml
nivel_previo_declarado: Intermedio

conocimientos:
  - Fórmulas básicas
  - Tablas
  - Filtros
  - Gráficos

herramientas_utilizadas:
  - Microsoft Excel

experiencia_practica:
  - Elaboración de informes mensuales
  - Gestión de bases de datos pequeñas

aspectos_que_domina:
  - Fórmulas básicas
  - Formato de tablas
  - Filtros

aspectos_que_necesita_reforzar:
  - Tablas dinámicas
  - Funciones avanzadas
  - Automatización
```

### 5. Objetivos y necesidades formativas

Registrar qué quiere conseguir el alumno con el curso.

#### Campos

- `objetivo_principal`
- `objetivos_secundarios`
- `motivacion`
- `necesidades_detectadas`
- `aplicacion_practica`

**Ejemplo:**

```yaml
objetivo_principal: Mejorar el uso de Excel para reducir el tiempo dedicado a informes.

objetivos_secundarios:
  - Aprender tablas dinámicas
  - Automatizar tareas repetitivas

motivacion: Aplicar los conocimientos directamente en su puesto de trabajo.

necesidades_detectadas:
  - Trabajar con grandes cantidades de datos
  - Automatizar informes

aplicacion_practica: Informes mensuales del departamento.
```

### 6. Información específica para el profesor

El profesor debe poder obtener rápidamente una visión general del alumno.

Crear un resumen de entre 3 y 6 líneas con:

- Formación previa relevante.
- Experiencia relacionada.
- Nivel declarado.
- Conocimientos que ya domina.
- Principales carencias o necesidades.
- Objetivo del alumno.

**Ejemplo:**

> Alumno con formación administrativa y 4 años de experiencia utilizando Excel en su puesto de trabajo. Tiene un nivel intermedio y utiliza habitualmente fórmulas, filtros y tablas. No ha trabajado habitualmente con tablas dinámicas ni automatización. Su objetivo es mejorar la elaboración de informes y reducir tareas repetitivas.

Este resumen debe basarse únicamente en la información disponible en la ficha.

### 7. Historial formativo

Registrar las formaciones realizadas o iniciadas por el alumno.

Cada registro debe contener:

```yaml
- curso: Excel Intermedio
  fecha: 2026-05-12
  estado: Finalizado
  resultado: Aprovechamiento satisfactorio
  observaciones: Mostró especial interés por el análisis de datos.

- curso: Excel Avanzado
  fecha: 2026-10-15
  estado: Matriculado
  resultado:
  observaciones:
```

#### Estados posibles

- Solicitado
- Preinscrito
- Matriculado
- En curso
- Finalizado
- Abandonado
- Cancelado

### 8. Preferencias de contacto

Registrar únicamente las preferencias necesarias para futuras comunicaciones.

#### Campos

- `canal_preferido`: email / teléfono / otro
- `horario_preferido_contacto`
- `preferencia_comunicaciones_formativas`
- `fecha_ultima_confirmacion_preferencias`

No asumir que el alumno desea recibir comunicaciones comerciales simplemente por haber realizado un curso.

Las comunicaciones y el tratamiento de datos deberán ajustarse a las preferencias y autorizaciones correspondientes y a la normativa aplicable.

### 9. Observaciones

Separar siempre:

- **Observaciones de captación:** información útil para futuras acciones de seguimiento.
- **Observaciones docentes:** información útil para profesores y planificación de la formación.

No mezclar ambas categorías.

No incluir comentarios subjetivos, rumores o información que no tenga una finalidad clara.

## Formato de almacenamiento recomendado

```yaml
alumno:
  alumno_id:
  nombre:
  apellidos:
  email:
  telefono:
  fecha_alta:
  ultima_actualizacion:

captacion:
  canal_captacion:
  fecha_primer_contacto:
  persona_contacto:
  interes_inicial:
  objetivo_formativo:
  cursos_realizados:
  cursos_interes_futuro:
  fecha_ultimo_contacto:
  resultado_ultimo_contacto:
  proximo_contacto:
  observaciones_captacion:

perfil:
  profesion_actual:
  sector_profesional:
  puesto_actual:
  experiencia_profesional_relevante:
  formacion_previa:
  experiencia_relacionada_con_el_curso:

conocimientos_previos:
  nivel_previo_declarado:
  conocimientos:
  herramientas_utilizadas:
  experiencia_practica:
  certificaciones:
  aspectos_que_domina:
  aspectos_que_necesita_reforzar:

objetivos:
  objetivo_principal:
  objetivos_secundarios:
  motivacion:
  necesidades_detectadas:
  aplicacion_practica:

resumen_profesor:

historial_formativo:

preferencias_contacto:
  canal_preferido:
  horario_preferido_contacto:
  preferencia_comunicaciones_formativas:
  fecha_ultima_confirmacion_preferencias:

observaciones:
  captacion:
  docencia:
```

## Reglas de calidad

### No inventar información

Si el alumno no ha proporcionado un dato, no deducirlo.

Usar:

```yaml
nivel_previo_declarado: No informado
```

en lugar de asignar un nivel basándose en su profesión.

### Diferenciar datos declarados de datos evaluados

Cuando proceda, indicar si el nivel procede de:

- Declaración del alumno.
- Cuestionario inicial.
- Prueba de nivel.
- Evaluación del profesor.

**Ejemplo:**

```yaml
nivel_previo:
  nivel: Intermedio
  fuente: Prueba de nivel
  fecha: 2026-09-10
```

### Mantener la información actualizada
Skill: Gestión de fichas de alumnos

Objetivo

Crear y mantener una ficha estructurada de cada alumno de un centro de estudios que permita:

Al departamento de captación disponer de los datos necesarios para contactar con el alumno en el futuro y conocer su historial formativo e intereses.

Al profesor conocer los conocimientos previos, experiencia y necesidades formativas del alumno antes de comenzar un curso.

La ficha debe recoger únicamente información relevante para estos objetivos y evitar datos innecesarios.

Cuándo utilizar esta skill

Utilizar esta skill cuando:

Se matricule un alumno en un curso.

Un alumno solicite información sobre una formación.

Se complete una entrevista o formulario de admisión.

Un profesor necesite consultar los conocimientos previos de un alumno.

El departamento de captación necesite consultar el historial de un alumno.

Se actualicen los datos de contacto o la situación formativa del alumno.

Estructura de la ficha

Cada alumno debe tener una ficha con las siguientes secciones.

1. Identificación del alumno

Campos:

alumno_id: identificador único del alumno.

nombre: nombre.

apellidos: apellidos.

email: correo electrónico.

telefono: teléfono.

fecha_alta: fecha en la que se creó la ficha.

ultima_actualizacion: fecha de la última modificación.

No inventar ningún dato. Si un dato no está disponible, dejarlo vacío o indicar No informado.

2. Información de captación y seguimiento

Esta sección está destinada principalmente al departamento de captación.

Campos:

canal_captacion: cómo llegó el alumno al centro.

Web

Google

Redes sociales

Recomendación

Antiguo alumno

Evento

Otro

fecha_primer_contacto

persona_contacto

interes_inicial

objetivo_formativo

cursos_realizados

cursos_interes_futuro

fecha_ultimo_contacto

resultado_ultimo_contacto

proximo_contacto

observaciones_captacion

Las observaciones de captación deben ser objetivas y útiles para futuros contactos.

Ejemplo:

Mostró interés en formación avanzada de Excel después de finalizar el curso de Excel intermedio. Indicó que podría estar interesado en realizarla durante el primer trimestre de 2027.

Evitar comentarios subjetivos como:

Es un alumno complicado.

3. Perfil académico y profesional

Esta sección permite al profesor conocer el contexto del alumno.

Campos:

profesion_actual

sector_profesional

puesto_actual

experiencia_profesional_relevante

formacion_previa

experiencia_relacionada_con_el_curso

Ejemplo:

profesion_actual: Técnico administrativo
sector_profesional: Servicios
puesto_actual: Administrativo
experiencia_profesional_relevante: 4 años utilizando hojas de cálculo
formacion_previa: Ciclo Formativo de Grado Superior en Administración y Finanzas
experiencia_relacionada_con_el_curso: Utiliza Excel habitualmente para informes y tablas.

4. Conocimientos previos

Esta es una de las secciones más importantes para el profesor.

Registrar los conocimientos previos relacionados directamente con el curso.

Campos:

nivel_previo_declarado

conocimientos

herramientas_utilizadas

experiencia_practica

certificaciones

aspectos_que_domina

aspectos_que_necesita_reforzar

Cuando sea posible, diferenciar entre:

No tiene conocimientos.

Conocimientos básicos.

Nivel intermedio.

Nivel avanzado.

Experto.

No evaluado.

No inferir el nivel del alumno únicamente a partir de su profesión o formación académica.

Ejemplo:

nivel_previo_declarado: Intermedio

conocimientos:
  - Fórmulas básicas
  - Tablas
  - Filtros
  - Gráficos

herramientas_utilizadas:
  - Microsoft Excel

experiencia_practica:
  - Elaboración de informes mensuales
  - Gestión de bases de datos pequeñas

aspectos_que_domina:
  - Fórmulas básicas
  - Formato de tablas
  - Filtros

aspectos_que_necesita_reforzar:
  - Tablas dinámicas
  - Funciones avanzadas
  - Automatización

5. Objetivos y necesidades formativas

Registrar qué quiere conseguir el alumno con el curso.

Campos:

objetivo_principal

objetivos_secundarios

motivacion

necesidades_detectadas

aplicacion_practica

Ejemplo:

objetivo_principal: Mejorar el uso de Excel para reducir el tiempo dedicado a informes.

objetivos_secundarios:
  - Aprender tablas dinámicas
  - Automatizar tareas repetitivas

motivacion: Aplicar los conocimientos directamente en su puesto de trabajo.

necesidades_detectadas:
  - Trabajar con grandes cantidades de datos
  - Automatizar informes

aplicacion_practica: Informes mensuales del departamento.

6. Información específica para el profesor

El profesor debe poder obtener rápidamente una visión general del alumno.

Crear un resumen de entre 3 y 6 líneas con:

Formación previa relevante.

Experiencia relacionada.

Nivel declarado.

Conocimientos que ya domina.

Principales carencias o necesidades.

Objetivo del alumno.

Ejemplo:

Alumno con formación administrativa y 4 años de experiencia utilizando Excel en su puesto de trabajo. Tiene un nivel intermedio y utiliza habitualmente fórmulas, filtros y tablas. No ha trabajado habitualmente con tablas dinámicas ni automatización. Su objetivo es mejorar la elaboración de informes y reducir tareas repetitivas.

Este resumen debe basarse únicamente en la información disponible en la ficha.

7. Historial formativo

Registrar las formaciones realizadas o iniciadas por el alumno.

Cada registro debe contener:

- curso: Excel Intermedio
  fecha: 2026-05-12
  estado: Finalizado
  resultado: Aprovechamiento satisfactorio
  observaciones: Mostró especial interés por el análisis de datos.

- curso: Excel Avanzado
  fecha: 2026-10-15
  estado: Matriculado
  resultado:
  observaciones:


Estados posibles:

Solicitado

Preinscrito

Matriculado

En curso

Finalizado

Abandonado

Cancelado

8. Preferencias de contacto

Registrar únicamente las preferencias necesarias para futuras comunicaciones.

Campos:

canal_preferido: email / teléfono / otro

horario_preferido_contacto

preferencia_comunicaciones_formativas

fecha_ultima_confirmacion_preferencias

No asumir que el alumno desea recibir comunicaciones comerciales simplemente por haber realizado un curso.

Las comunicaciones y el tratamiento de datos deberán ajustarse a las preferencias y autorizaciones correspondientes y a la normativa aplicable.

9. Observaciones

Separar siempre:

Observaciones de captación

Información útil para futuras acciones de seguimiento.

Observaciones docentes

Información útil para profesores y planificación de la formación.

No mezclar ambas categorías.

No incluir comentarios subjetivos, rumores o información que no tenga una finalidad clara.

Formato de almacenamiento recomendado
alumno:
  alumno_id:
  nombre:
  apellidos:
  email:
  telefono:
  fecha_alta:
  ultima_actualizacion:

captacion:
  canal_captacion:
  fecha_primer_contacto:
  persona_contacto:
  interes_inicial:
  objetivo_formativo:
  cursos_realizados:
  cursos_interes_futuro:
  fecha_ultimo_contacto:
  resultado_ultimo_contacto:
  proximo_contacto:
  observaciones_captacion:

perfil:
  profesion_actual:
  sector_profesional:
  puesto_actual:
  experiencia_profesional_relevante:
  formacion_previa:
  experiencia_relacionada_con_el_curso:

conocimientos_previos:
  nivel_previo_declarado:
  conocimientos:
  herramientas_utilizadas:
  experiencia_practica:
  certificaciones:
  aspectos_que_domina:
  aspectos_que_necesita_reforzar:

objetivos:
  objetivo_principal:
  objetivos_secundarios:
  motivacion:
  necesidades_detectadas:
  aplicacion_practica:

resumen_profesor:

historial_formativo:

preferencias_contacto:
  canal_preferido:
  horario_preferido_contacto:
  preferencia_comunicaciones_formativas:
  fecha_ultima_confirmacion_preferencias:

observaciones:
  captacion:
  docencia:

Reglas de calidad
No inventar información

Si el alumno no ha proporcionado un dato, no deducirlo.

Usar:

nivel_previo_declarado: No informado


en lugar de asignar un nivel basándose en su profesión.

Diferenciar datos declarados de datos evaluados

Cuando proceda, indicar si el nivel procede de:

Declaración del alumno.

Cuestionario inicial.

Prueba de nivel.

Evaluación del profesor.

Ejemplo:

nivel_previo:
  nivel: Intermedio
  fuente: Prueba de nivel
  fecha: 2026-09-10

Mantener la información actualizada

Cuando se reciba nueva información:

Actualizar el dato correspondiente.

Mantener el historial cuando sea relevante.

Actualizar ultima_actualizacion.

No duplicar información.

Minimización de datos

Solo almacenar información necesaria para los objetivos de captación y docencia.

No incluir información personal sensible que no sea necesaria para la prestación del servicio.

Información contradictoria

Si existen datos contradictorios, no elegir uno arbitrariamente.

Ejemplo:

nivel_previo:
  valor: Contradictorio
  observacion: El alumno declara nivel avanzado, pero la prueba inicial indica nivel intermedio.
  requiere_revision: true

Vistas según el usuario
Vista para captación

Cuando el departamento de captación consulte una ficha, mostrar primero:

Nombre y apellidos.

Teléfono.

Email.

Canal de captación.

Interés inicial.

Objetivo formativo.

Cursos realizados.

Cursos de interés futuro.

Fecha del último contacto.

Resultado del último contacto.

Próxima acción prevista.

Preferencia de contacto.

La información docente debe quedar en una sección secundaria.

Vista para profesor

Cuando un profesor consulte una ficha, mostrar primero:

Resumen del alumno.

Curso en el que está matriculado.

Nivel previo.

Conocimientos que domina.

Conocimientos que necesita reforzar.

Experiencia relacionada.

Herramientas que utiliza.

Objetivos formativos.

Aplicación práctica que espera darle a los conocimientos.

La información comercial y de captación debe quedar en una sección secundaria.

Preguntas que puede realizar el agente al alumno

Cuando falte información relevante, el agente puede solicitarla mediante preguntas sencillas.

Datos personales

¿Cuál es tu nombre y apellidos?

¿Cuál es tu teléfono de contacto?

¿Cuál es tu correo electrónico?

Experiencia

¿A qué te dedicas actualmente?

¿Qué experiencia tienes relacionada con este curso?

¿Qué herramientas utilizas habitualmente?

Conocimientos previos

¿Qué conocimientos tienes actualmente sobre esta materia?

¿Has realizado anteriormente algún curso relacionado?

¿Qué herramientas o programas has utilizado?

¿Qué aspectos consideras que dominas?

¿Qué aspectos te gustaría reforzar?

Objetivos

¿Qué te gustaría conseguir con este curso?

¿Para qué vas a utilizar los conocimientos adquiridos?

¿Hay alguna tarea concreta de tu trabajo que quieras aprender a realizar?

Futuras formaciones

¿Hay alguna otra formación que te interese realizar en el futuro?

No realizar todas las preguntas necesariamente. El agente debe solicitar únicamente la información que falte y sea relevante para el curso o para los objetivos de la ficha.

Flujo de creación de una ficha

Identificar al alumno.

Comprobar si ya existe una ficha.

Si existe, actualizarla en lugar de crear una ficha duplicada.

Recopilar los datos de contacto disponibles.

Registrar el curso o formación de interés.

Recopilar información sobre experiencia y formación previa.

Recopilar los conocimientos previos relacionados con el curso.

Registrar los objetivos del alumno.

Registrar las preferencias de contacto cuando corresponda.

Generar el resumen para el profesor.

Guardar la ficha.

Registrar la fecha de actualización.

Ejemplo completo
alumno:
  alumno_id: ALU-00042
  nombre: Laura
  apellidos: García López
  email: laura@example.com
  telefono: "+34 XXX XXX XXX"
  fecha_alta: 2026-05-10
  ultima_actualizacion: 2026-09-10

captacion:
  canal_captacion: Web
  fecha_primer_contacto: 2026-05-10
  persona_contacto: Departamento de Captación
  interes_inicial: Excel
  objetivo_formativo: Mejorar sus competencias para aplicarlas en el trabajo
  cursos_realizados:
    - Excel Básico
  cursos_interes_futuro:
    - Excel Avanzado
    - Power BI
  fecha_ultimo_contacto: 2026-09-01
  resultado_ultimo_contacto: Confirmó interés en continuar formándose
  proximo_contacto: 2026-12-01
  observaciones_captacion: Interesada en formación avanzada relacionada con análisis de datos.

perfil:
  profesion_actual: Técnica administrativa
  sector_profesional: Servicios
  puesto_actual: Técnica administrativa
  experiencia_profesional_relevante: 4 años
  formacion_previa: Formación profesional en administración
  experiencia_relacionada_con_el_curso: Utiliza Excel semanalmente para informes.

conocimientos_previos:
  nivel_previo_declarado: Intermedio
  conocimientos:
    - Fórmulas básicas
    - Tablas
    - Filtros
    - Gráficos
  herramientas_utilizadas:
    - Microsoft Excel
  experiencia_practica:
    - Informes mensuales
    - Gestión de datos
  certificaciones: []
  aspectos_que_domina:
    - Fórmulas básicas
    - Filtros
    - Tablas
  aspectos_que_necesita_reforzar:
    - Tablas dinámicas
    - Funciones avanzadas

objetivos:
  objetivo_principal: Mejorar la elaboración de informes.
  objetivos_secundarios:
    - Aprender tablas dinámicas
    - Reducir tareas manuales
  motivacion: Aplicar lo aprendido directamente en el trabajo.
  necesidades_detectadas:
    - Análisis de datos
    - Automatización de tareas
  aplicacion_practica: Informes mensuales del departamento.

resumen_profesor: >
  Laura tiene formación administrativa y 4 años de experiencia utilizando Excel.
  Declara un nivel intermedio y domina fórmulas básicas, tablas y filtros.
  Necesita reforzar tablas dinámicas y funciones avanzadas. Su objetivo principal
  es mejorar sus informes y reducir tareas manuales.

historial_formativo:
  - curso: Excel Básico
    fecha: 2026-05-12
    estado: Finalizado
    resultado: Finalizado
    observaciones:

preferencias_contacto:
  canal_preferido: Email
  horario_preferido_contacto: Tardes
  preferencia_comunicaciones_formativas: Según autorización/preferencia registrada
  fecha_ultima_confirmacion_preferencias: 2026-09-01

observaciones:
  captacion: Interesada en Excel Avanzado y Power BI.
  docencia: Conviene partir de ejercicios prácticos relacionados con informes.

Resultado esperado

La ficha debe permitir responder rápidamente a dos preguntas diferentes.

Para captación

¿Quién es el alumno, cómo puedo contactar con él, qué ha estudiado, qué le interesa y cuándo debería volver a contactar?

Para el profesor

¿Qué sabe ya el alumno, qué experiencia tiene, qué necesita aprender y qué objetivo quiere conseguir?

La información debe estar estructurada de manera que ambas necesidades puedan gestionarse sin duplicar datos ni mezclar información comercial y docente.