---
name: refactor
description: Mejora la claridad, la estructura y la consistencia de una lección o de un ejemplo SIN cambiar lo que enseña, en pasos pequeños guiados por las convenciones del proyecto. Úsalo cuando la persona pida mejorar la redacción, reorganizar una lección, simplificar un ejemplo o unificar el estilo sin añadir tema nuevo (p. ej. "limpia esta lección", "simplifica este ejemplo").
---

Mejora el contenido indicado preservando lo que enseña.

1. Lee la guía relevante en `docs/conventions/` (`estilo-de-contenido.md`, `nomenclatura.md`) y síguela — las convenciones definen qué significa "mejor" aquí.
2. Establece la línea base: identifica qué concepto enseña la lección/ejemplo y qué salida produce el código, para no alterarlo.
3. Mejora en pasos pequeños, por ejemplo:
   - Reescribe explicaciones confusas; ordena los subtemas por dependencia.
   - Simplifica un ejemplo al mínimo que ilustra el concepto; unifica nombres y formato de los bloques de código.
   - Corrige terminología para que coincida con el glosario; arregla el Markdown.
4. Después de tocar un ejemplo ejecutable, vuelve a correrlo con `node` y confirma que la salida descrita sigue siendo correcta (ver `verificacion-de-ejemplos.md`).
5. Resume qué cambió estructuralmente y confirma que el concepto enseñado y la salida de los ejemplos no cambiaron.

NO cambies lo que enseña la lección ni el comportamiento de los ejemplos — si hace falta un cambio de contenido, detente y plantéalo aparte. NO mezcles temas nuevos. NO hagas una reescritura gigante de una sola vez; prefiere incrementos revisables.
