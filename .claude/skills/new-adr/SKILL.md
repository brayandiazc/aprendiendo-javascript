---
name: new-adr
description: Genera un nuevo Registro de Decisión (ADR) copiando la plantilla en el siguiente archivo numerado y registrándolo en el índice de decisiones. Úsalo cuando la persona quiera registrar una decisión curricular o de proceso, crear/añadir un ADR o documentar una elección (p. ej. "escribe un ADR para reordenar los módulos", "añade un registro de decisión").
argument-hint: "[título breve]"
---

Crea un nuevo ADR para la decisión cuyo título está en `$ARGUMENTS`.

1. Lee `docs/decisions/README.md` para conocer el esquema de numeración, la convención de nombres de archivo y cómo se mantiene el índice. Sigue ese documento si difiere de los pasos siguientes.
2. Encuentra el `NNNN-*.md` existente con el número más alto en `docs/decisions/` y calcula el siguiente número con relleno de ceros (p. ej. `0003`).
3. Copia `docs/decisions/0000-template.md` a `docs/decisions/<NNNN>-<kebab-title>.md`, donde `<kebab-title>` es `$ARGUMENTS` convertido a slug (minúsculas, separado por guiones).
4. En el nuevo archivo, completa:
   - Título (la forma legible de `$ARGUMENTS`)
   - Estado: `Propuesta`
   - Fecha: la fecha de hoy (`YYYY-MM-DD`)
   - Deja Contexto / Decisión / Consecuencias como indicaciones para que la persona autora las complete.
5. Añade un enlace al nuevo ADR en el índice dentro de `docs/decisions/README.md`, en orden numérico.
6. Informa la ruta del archivo creado y recuerda completar Contexto, Decisión y Consecuencias.

NO marques el ADR como Aceptada por tu cuenta ni edites ADRs ya aceptados.
