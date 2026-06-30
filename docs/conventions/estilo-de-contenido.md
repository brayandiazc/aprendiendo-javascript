# Convención: estilo de contenido

Cómo se escribe una lección en "Aprendiendo JavaScript". El objetivo es que cualquier
persona principiante, en español, pueda seguir el curso por su cuenta.

## Estructura de una lección

Cada lección (`NN-tema.md`) sigue esta estructura, adaptándola a su tamaño:

1. **Título** (`# Tema`) — claro y en español, sin el prefijo numérico del archivo.
2. **Introducción breve** — qué es el tema y por qué importa (1–3 frases).
3. **Objetivos de aprendizaje** (opcional en lecciones cortas) — qué sabrá hacer quien la
   complete.
4. **Explicación** — secciones con encabezados `##`/`###`, de lo simple a lo complejo.
5. **Ejemplos de código** — bloques con lenguaje anotado (` ```js `), mínimos y enfocados.
6. **Notas / errores comunes** (opcional) — advertencias y malentendidos típicos.
7. **Resumen** (opcional) — puntos clave.

La práctica integradora va en el archivo `NN-ejercicios.md` del módulo, no en cada lección.

## Tono

- **Español** en todo el contenido visible (texto, comentarios de código, nombres de
  variables de ejemplo). No mezcles idiomas.
- Cercano y directo; trata de "tú" a quien lee.
- Explica el **porqué**, no solo el cómo. Evita la jerga sin definir; si usas un término
  nuevo, defínelo o enlázalo al [glosario](../glossary.md).
- Progresión honesta: no uses un concepto antes de haberlo enseñado, salvo que lo aclares.

## Formato

- Markdown con encabezados jerárquicos (`#` solo uno por archivo, el título).
- Bloques de código **siempre** con el lenguaje anotado (`js`, `html`, `bash`).
- Anota la salida esperada en comentario cuando aporte:

  ```js
  const nombre = "Ada";
  console.log(`Hola, ${nombre}`); // => Hola, Ada
  ```

- Usa listas, tablas y negritas para estructurar; evita párrafos muy largos.
- Resalta términos clave con **negrita** la primera vez que aparecen.

## Exactitud

- Toda afirmación técnica debe ser correcta y verificable (MDN / especificación
  ECMAScript). Una explicación incorrecta es peor que ninguna.
- Todo ejemplo presentado como ejecutable debe correr tal cual — ver
  [`verificacion-de-ejemplos.md`](verificacion-de-ejemplos.md).

---

> Última actualización: 2026-06-30
