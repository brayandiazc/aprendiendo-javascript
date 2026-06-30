---
name: nueva-leccion
description: Crea el esqueleto de una nueva lección dentro de un módulo, con el archivo Markdown numerado y la estructura estándar de lección (objetivos, explicación, ejemplos, ejercicios). Úsalo cuando la persona quiera empezar una lección o tema nuevo (p. ej. "crea la lección de promesas en el módulo 09", "añade una lección sobre map").
argument-hint: "[módulo] [título de la lección]"
---

Crea el esqueleto de una lección nueva a partir de `$ARGUMENTS` (módulo destino + título).

1. Lee `docs/estructura-del-contenido.md`, `docs/conventions/estilo-de-contenido.md` y `docs/conventions/nomenclatura.md` para conocer la estructura de lección, el formato y la convención de nombres.
2. Identifica el módulo destino (carpeta numerada, p. ej. `09-asincronia`). Si no existe y la persona lo pidió, créalo y añade su `README.md` de módulo.
3. Calcula el siguiente número de lección dentro del módulo (el `NN-*.md` más alto + 1, con relleno de ceros). Respeta la posición del archivo de ejercicios (suele ir al final del módulo).
4. Crea `<modulo>/<NN>-<kebab-title>.md` con la estructura estándar de lección:
   - `# <Título>` (en la forma legible del título)
   - **Objetivos de aprendizaje** — qué sabrá hacer quien la complete.
   - **Prerrequisitos** — lecciones previas necesarias.
   - **Explicación** — secciones con la teoría (deja indicaciones de qué cubrir).
   - **Ejemplos** — al menos un bloque de código ejecutable con su salida esperada (puedes delegar en el subagente `example-author` para escribirlo y verificarlo).
   - **Resumen** y, si aplica, enlace a los ejercicios del módulo.
5. Actualiza los índices: el `README.md` del módulo y el `README.md` raíz (tabla de contenidos), siguiendo el estilo existente (o delega en `doc-keeper`).
6. Informa la ruta creada y qué secciones quedan por completar.

NO escribas el contenido pedagógico completo de golpe ni inventes APIs; deja indicaciones claras y verifica cualquier ejemplo que incluyas con `node`.
