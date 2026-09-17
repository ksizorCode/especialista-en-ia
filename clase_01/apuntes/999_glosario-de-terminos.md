# Terminolog-iA: Glosario de Conceptos Esenciales de Inteligencia Artificial

Términos clave en el mundo de la Inteligencia Artificial.

---

## 1. Alucinar (Hallucination)

Cuando un modelo genera información falsa, inventada o no respaldada por los datos, pero la presenta con apariencia de certeza.

* **¿Por qué ocurre?** Los modelos de lenguaje no "piensan" ni consultan una base de verdad absoluta; generan texto prediciendo la palabra más probable a continuación basándose en patrones estadísticos.
* **Ejemplo:** Si le pides a una IA que cite un estudio científico sobre un tema muy específico, podría inventarse el título del artículo, los autores y el año de publicación con un formato impecable.

Ver más:
- https://www.elmundo.es/internacional/2026/09/17/6aabedd2e9cf4aa5768b4582.html
- https://www.expansion.com/juridico/2026/07/29/6a6a092ae5fdea114e8b458e.html

---

## Artefactos

## Find Tunning

## 2. Ventana de Contexto (Context Window)
Cantidad máxima de información (medida en *tokens*) que un modelo de lenguaje puede procesar y recordar en una sola interacción o conversación. Es decir, La cantidad de información que un modelo puede tener en cuenta simultáneamente durante una interacción.


* **Importancia:** Define el "límite de memoria a corto plazo" del modelo. Todo lo que esté dentro de la ventana de contexto (el prompt inicial, el historial del chat, documentos adjuntos) es tenido en cuenta para generar la respuesta.
* **Consecuencias del límite:** Si una conversación o documento supera el tamaño de la ventana de contexto, el modelo olvidará la información más antigua o simplemente recortará la entrada.

>> Solución:
Por eso cuando se tiene una conversación larga con un LLM es recomendable crear un nuevo chat o pedirle que haga un resumen con los puntos clave y las conslusiones y pasarlas al nuevo chat.

---

## 3. Tokenización (Tokenization)

En la fase de entrenamiento, es el proceso de dividir un texto en unidades pequeñas (tokens) que el modelo puede procesar. Un token puede ser una palabra, parte de una palabra, un signo o incluso un fragmento de código.

Los tokens que pueden ser procesadas numéricamente por la red neuronal.

* **¿Qué es un token?** Un token no siempre equivale a una palabra completa. Puede ser una palabra entera, una sílaba, una subpalabra o incluso un solo carácter o signo de puntuación.
  * En inglés, *1 token ≈ 0.75 palabras* (aprox. 4 caracteres).
  * En español y otros idiomas, las palabras suelen dividirse en más tokens debido a la estructura de los tokenizadores tradicionales.
* **Proceso:** 
  1. **Texto original:** `"¡Hola, mundo!"`
  2. **Tokens (ejemplo):** `["¡", "Hola", ",", " mundo", "!"]`
  3. **Vectores de ID:** `[2354, 8912, 11, 4012, 0]`


Ver tambien:
- https://gpt.space/es/blog/understanding-openai-gpt-tokens-a-comprehensive-guide
- https://neuraltrust.ai/es/blog/ai-token-optimization-guide

Tokenizador
- https://platform.openai.com/tokenizer
- https://www.claudetokenizer.com/
- https://claude-tokenizer.vercel.app/
- https://aiandapi.com/tokenizer/gemini
- https://gptforwork.com/tools/tokenizer

---

## 4. Habitación China (Chinese Room Argument)
La **Habitación China** es un famoso experimento mental filosófico propuesto por **John Searle** en 1980 para rebatir la idea de la "IA Fuerte" (la noción de que una computadora programada adecuadamente puede tener una mente real y comprensión genuina).

* **El experimento:**
  Imagine a una persona dentro de una habitación cerrada que solo habla español. Recibe hojas de papel con caracteres en chino por una rendija. Dentro de la habitación tiene un libro de reglas detallado en español que le indica: *"Si entra el símbolo X, responde con el símbolo Y"*.
  * Para las personas fuera de la habitación, las respuestas en chino son perfectas, dando la impresión de que quien está dentro **entiende** chino.
  * Sin embargo, la persona dentro solo está **siguiendo reglas sintácticas** sin comprender absolutamente nada del significado de los símbolos.
* **Aplicación a la IA moderna:** Searle argumenta que las IAs actuales (incluidos los LLM) son como el ocupante de la habitación china: manipulan símbolos y código de manera impecable basándose en reglas y estadística, pero no poseen **comprensión semántica** ni conciencia real.

---

## 5. Prompt Engineering (Ingeniería de Prompts)
Disciplina centrada en el diseño, optimización y estructuración de las instrucciones (*prompts*) enviadas a un modelo de lenguaje para obtener respuestas precisas, útiles y formateadas adecuadamente.

* **Técnicas comunes:** *Few-shot prompting* (dar ejemplos previos), *Chain-of-Thought* (pedir razonamiento paso a paso) y especificación de roles/sistemas.

---

## 6. RAG (Retrieval-Augmented Generation / Generación Aumentada por Recuperación)
Arquitectura que combina la capacidad generativa de un LLM con la búsqueda en bases de conocimiento externas o documentos privados.

* **Funcionamiento:** En lugar de depender solo de la memoria preentrenada del modelo, el sistema busca fragmentos de información relevantes en una base de datos vectorial y se los proporciona como contexto al LLM para responder.
* **Ventaja:** Reduce drásticamente las alucinaciones y permite al modelo responder sobre información privada o actualizada sin necesidad de reentrenarlo.

---

## 7. Fine-tuning (Ajuste Fino)
Proceso de tomar un modelo de lenguaje base previamente entrenado con grandes volúmenes de datos generales y entrenarlo adicionalmente en un conjunto de datos específico y más reducido.

* **Objetivo:** Adaptar el tono, estilo, formato o conocimiento del modelo a un dominio especializado (por ejemplo, atención médica, asesoría legal o generación de código específico).

---

## 8. Embeddings (Incrustaciones Vectoriales)
Representaciones numéricas en forma de vectores (listas de números de alta dimensión) que capturan el significado semántico de un texto, imagen u otro tipo de dato.

* **Utilidad:** Permiten a las computadoras medir la similitud semántica entre dos textos calculando la distancia matemática entre sus vectores. Si dos frases significan cosas similares, sus *embeddings* estarán muy cerca en el espacio vectorial.

---

## 9. Temperatura (Temperature)
Hiperparámetro que controla la creatividad o aleatoriedad de las respuestas generadas por un modelo de lenguaje.

* **Temperatura baja (e.g., 0.0 - 0.2):** El modelo selecciona siempre los tokens más probables. Genera respuestas más deterministas, precisas y rigurosas (ideal para programación o datos objetivos).
* **Temperatura alta (e.g., 0.7 - 1.0):** El modelo arriesga más al seleccionar tokens menos probables. Genera respuestas más variadas, creativas y diversas.

---

## 10. Agente de IA (AI Agent)
Sistema autónomo alimentado por un modelo de lenguaje que puede planificar tareas, tomar decisiones y utilizar herramientas externas (como búsqueda en la web, ejecución de código o llamadas a APIs) de forma iterativa para alcanzar un objetivo complejo definido por el usuario.





Habitación China — Experimento mental de John Searle que cuestiona si manipular símbolos siguiendo reglas equivale realmente a “comprender”. Es una referencia clásica en los debates sobre IA y conciencia.

Artefactos — Resultados generados por una IA que pueden ser utilizados directamente: textos, imágenes, código, tablas, documentos, presentaciones, etc. También se usa para referirse a elementos creados dentro de determinadas interfaces de IA.

Prompt — Instrucción o conjunto de instrucciones que damos a un modelo para obtener una respuesta o realizar una tarea.

Prompt engineering — Diseño y formulación deliberada de prompts para conseguir resultados más útiles, precisos o consistentes.

Modelo fundacional — Modelo de IA entrenado con grandes cantidades de datos y diseñado para servir como base de muchas tareas y aplicaciones posteriores.

LLM — Large Language Model o modelo de lenguaje de gran tamaño. Son modelos entrenados para procesar y generar lenguaje, como los utilizados en muchos asistentes conversacionales.

Embeddings — Representaciones numéricas de palabras, textos, imágenes u otros datos que permiten a una IA trabajar con relaciones de significado y similitud.

Inferencia — Momento en el que un modelo ya entrenado utiliza lo aprendido para producir una respuesta a partir de una entrada.

Entrenamiento — Proceso mediante el cual un modelo ajusta sus parámetros a partir de grandes cantidades de datos para aprender determinados patrones.

Fine-tuning — Adaptación adicional de un modelo ya entrenado mediante datos específicos para mejorar su comportamiento en una tarea, dominio o estilo concreto.

RAG — Retrieval-Augmented Generation. Técnica que permite a un modelo recuperar información de fuentes externas y utilizarla para generar una respuesta, en lugar de depender únicamente de lo aprendido durante su entrenamiento.

Agente — Sistema de IA capaz de perseguir un objetivo realizando varios pasos y, en algunos casos, utilizando herramientas externas, consultando información o ejecutando acciones.

Multimodalidad — Capacidad de un modelo para trabajar con diferentes tipos de información, como texto, imágenes, audio, vídeo o código.

Temperatura — Parámetro que influye en la aleatoriedad de las respuestas de algunos modelos. Una temperatura más alta suele producir resultados más variados; una más baja, respuestas más deterministas.

Alucinación — Véase alucinar; el sustantivo utilizado para describir el fenómeno.

Sesgo — Tendencia sistemática de un modelo a producir determinados resultados como consecuencia, entre otros factores, de sus datos de entrenamiento, diseño o contexto de uso.

Guardrails — Restricciones, controles o mecanismos de seguridad diseñados para limitar determinados comportamientos o respuestas de un sistema de IA.

RLHF — Reinforcement Learning from Human Feedback. Técnica mediante la que se utiliza la valoración humana para ajustar el comportamiento de un modelo.

Pesos — Valores numéricos que representan parte de lo que el modelo ha aprendido durante su entrenamiento. Millones o miles de millones de estos parámetros determinan cómo responde ante una entrada.

Parámetros — Valores internos que el modelo ajusta durante el entrenamiento para aprender patrones y relaciones presentes en los datos.

Contexto — Información disponible para el modelo en un momento determinado y que puede utilizar para construir su respuesta.

System prompt — Instrucciones de mayor nivel que establecen cómo debe comportarse un modelo o sistema de IA.

Zero-shot — Pedir a un modelo que realice una tarea sin proporcionarle ejemplos específicos de cómo debe hacerlo.

Few-shot — Proporcionar al modelo unos pocos ejemplos antes de pedirle que resuelva una tarea.

Chain of Thought — Concepto relacionado con el razonamiento paso a paso de los modelos. En aplicaciones reales se suele hablar de técnicas de razonamiento sin asumir que el razonamiento interno del modelo sea equivalente al humano.

Benchmark — Prueba o conjunto de pruebas utilizado para comparar el rendimiento de modelos de IA en determinadas tareas.

Grounding — Vinculación de las respuestas de un modelo con información externa o verificable para reducir respuestas desconectadas de los datos disponibles.

MCP — Model Context Protocol, un protocolo diseñado para facilitar que los modelos de IA interactúen de forma estandarizada con herramientas y fuentes de datos externas.

API — Interfaz que permite que una aplicación se comunique con un modelo o servicio de IA sin que el usuario tenga que interactuar directamente con su interfaz.

Open source / código abierto — En IA puede referirse a modelos, código o componentes publicados con distintos grados de apertura. Conviene distinguir entre que el código sea abierto, que los pesos del modelo estén disponibles y que la licencia permita determinados usos.

Modelo local — Modelo que se ejecuta en el propio ordenador, servidor o dispositivo del usuario, en lugar de procesarse necesariamente en la infraestructura de un proveedor externo.

Inferencia local — Ejecución de un modelo directamente en un dispositivo o infraestructura bajo control del usuario.

AGI — Artificial General Intelligence o inteligencia artificial general. Concepto hipotético y objeto de debate que suele referirse a sistemas con capacidades generales comparables o superiores a las humanas en una amplia variedad de tareas.

Singularidad — Hipótesis según la cual el desarrollo de sistemas de IA cada vez más capaces podría desencadenar una transformación tecnológica acelerada y difícil de predecir.

Alineamiento — Área de investigación centrada en conseguir que el comportamiento de los sistemas de IA sea coherente con objetivos, valores, instrucciones y restricciones humanas.

Interpretabilidad — Campo que intenta comprender qué ocurre dentro de un modelo y por qué produce determinadas respuestas.

Explicabilidad — Técnicas destinadas a proporcionar explicaciones comprensibles sobre las decisiones o resultados de un sistema de IA.

Contaminación de datos — Situación en la que información utilizada para evaluar un modelo ya estaba, directa o indirectamente, presente en sus datos de entrenamiento, haciendo que una evaluación pueda parecer mejor de lo que realmente es.

Model collapse — Fenómeno que puede producirse cuando modelos sucesivos se entrenan repetidamente con datos generados por otros modelos, perdiendo progresivamente parte de la diversidad de la distribución original.

MoE — Mixture of Experts. Arquitectura en la que diferentes “expertos” especializados dentro del modelo se activan según la entrada, en lugar de utilizar todos los parámetros en cada cálculo.

Latencia — Tiempo que transcurre entre que enviamos una petición a un sistema de IA y recibimos su respuesta.

Almacenamiento en caché — Conservación temporal de información o resultados para evitar repetir determinados cálculos y acelerar futuras operaciones.

Inferencia multimodal — Procesamiento conjunto de diferentes modalidades, por ejemplo, analizar una imagen y responder mediante texto.

Text-to-image — Generación de imágenes a partir de instrucciones escritas.

Text-to-speech (TTS) — Conversión de texto escrito en voz sintetizada.

Speech-to-text (STT) — Conversión de voz o audio en texto.

Computer vision — Campo de la IA dedicado a interpretar y analizar imágenes y vídeo.

NLP — Natural Language Processing o procesamiento del lenguaje natural: técnicas para que los sistemas informáticos procesen lenguaje humano.

Transformer — Arquitectura de redes neuronales introducida en 2017 y fundamental para la generación de los actuales modelos de lenguaje y muchos sistemas multimodales.

Attention — Mecanismo que permite al modelo ponderar qué partes de una entrada son especialmente relevantes para procesar otra parte de esa información.

Fine-tuning — Ajuste de un modelo previamente entrenado con datos adicionales y más específicos.

Distillation — Técnica para transferir parte del comportamiento de un modelo grande a otro más pequeño, buscando reducir costes de ejecución manteniendo buena parte de sus capacidades.

Quantization — Reducción de la precisión numérica utilizada para representar los parámetros de un modelo, normalmente para disminuir memoria y costes de inferencia.

Vibe coding — Forma informal de programar en la que una persona describe a una IA lo que quiere construir y deja que el modelo genere buena parte del código, iterando mediante instrucciones y pruebas.


---

> *Glosario ampliado para referencia técnica e introductoria sobre Inteligencia Artificial Generativa.*