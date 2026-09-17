# Terminolog-iA: Glosario de Conceptos Esenciales de Inteligencia Artificial

Bienvenido a **Terminolog-iA**, una guía concisa y accesible sobre los términos clave en el mundo de la Inteligencia Artificial y los Modelos de Lenguaje de Gran Escala (LLM).

---

## 1. Alucinar (Hallucination)
En el contexto de la Inteligencia Artificial, **alucinar** se refiere al fenómeno en el cual un modelo generativo (como GPT-4, Claude o Gemini) genera información que suena convincente y sintácticamente correcta, pero que en realidad es **falsa, inexacta o carece de fundamento** en los datos reales.

* **¿Por qué ocurre?** Los modelos de lenguaje no "piensan" ni consultan una base de verdad absoluta; generan texto prediciendo la palabra más probable a continuación basándose en patrones estadísticos.
* **Ejemplo:** Si le pides a una IA que cite un estudio científico sobre un tema muy específico, podría inventarse el título del artículo, los autores y el año de publicación con un formato impecable.

---

## 2. Ventana de Contexto (Context Window)
La **ventana de contexto** es la cantidad máxima de información (medida en *tokens*) que un modelo de lenguaje puede procesar y recordar en una sola interacción o conversación.

* **Importancia:** Define el "límite de memoria a corto plazo" del modelo. Todo lo que esté dentro de la ventana de contexto (el prompt inicial, el historial del chat, documentos adjuntos) es tenido en cuenta para generar la respuesta.
* **Consecuencias del límite:** Si una conversación o documento supera el tamaño de la ventana de contexto, el modelo olvidará la información más antigua o simplemente recortará la entrada.

---

## 3. Tokenización (Tokenization)
La **tokenización** es el proceso fundamental mediante el cual el texto estructurado en lenguaje humano se divide en unidades más pequeñas llamadas **tokens**, que pueden ser procesadas numéricamente por la red neuronal.

* **¿Qué es un token?** Un token no siempre equivale a una palabra completa. Puede ser una palabra entera, una sílaba, una subpalabra o incluso un solo carácter o signo de puntuación.
  * En inglés, *1 token ≈ 0.75 palabras* (aprox. 4 caracteres).
  * En español y otros idiomas, las palabras suelen dividirse en más tokens debido a la estructura de los tokenizadores tradicionales.
* **Proceso:** 
  1. **Texto original:** `"¡Hola, mundo!"`
  2. **Tokens (ejemplo):** `["¡", "Hola", ",", " mundo", "!"]`
  3. **Vectores de ID:** `[2354, 8912, 11, 4012, 0]`

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

---

> *Glosario ampliado para referencia técnica e introductoria sobre Inteligencia Artificial Generativa.*