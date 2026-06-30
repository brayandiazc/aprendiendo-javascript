# 0001. Registrar las decisiones (ADRs)

- **Estado:** Aceptada
- **Fecha:** 2026-06-30

## Contexto

El curso evoluciona: se añaden módulos, se reordenan temas y se fijan criterios que afectan
a muchas lecciones (qué versión del lenguaje se enseña, qué se incluye o se omite). Sin un
registro, esas decisiones se olvidan y se vuelven a debatir, y quien contribuye no sabe por
qué las cosas están como están.

## Decisión

Registramos las decisiones relevantes del proyecto como **ADRs** en `docs/decisions/`,
siguiendo el formato de [`0000-template.md`](0000-template.md) y las convenciones del
[README](README.md) de esta carpeta.

## Alternativas consideradas

- **No documentar decisiones** — descartada: lleva a re-debatir y a inconsistencias.
- **Anotarlas en el README o en issues** — descartada: se dispersan y no quedan como
  registro estable y numerado.

## Consecuencias

- Cada decisión curricular o de proceso significativa queda trazable.
- Hay un pequeño costo por decisión (escribir el ADR), asumido a cambio de claridad.
- El índice de `docs/decisions/README.md` debe mantenerse al día.
