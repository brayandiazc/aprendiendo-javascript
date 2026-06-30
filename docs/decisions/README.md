# Registros de Decisión (ADRs)

Un **ADR** (Architecture/Any Decision Record) captura una decisión relevante y duradera
del proyecto: por qué se tomó, qué se consideró y qué consecuencias tiene. En este curso
los ADRs registran decisiones **curriculares y de proceso** (orden de los módulos, qué
versión de JavaScript se enseña, qué se incluye o se deja fuera, etc.).

## Cuándo escribir un ADR

Escribe uno cuando una decisión:

- cambie el orden o la estructura del currículo,
- defina un criterio que afectará muchas lecciones (p. ej. "siempre `const`/`let`, nunca `var`"),
- elija entre alternativas con consecuencias a largo plazo.

Las correcciones pequeñas no necesitan ADR.

## Convenciones

- Nombre de archivo: `NNNN-titulo-en-kebab-case.md` (numeración correlativa con relleno de
  ceros: `0001`, `0002`, …).
- Estados: `Propuesta` → `Aceptada` → (`Reemplazada por NNNN` / `Obsoleta`).
- Los ADRs son **inmutables** una vez aceptados: para cambiar una decisión, crea un ADR
  nuevo que reemplace al anterior; no reescribas el viejo.
- Copia [`0000-template.md`](0000-template.md) para empezar (o usa la skill `new-adr`).

## Índice

| ADR                                                          | Título                          | Estado   |
| ------------------------------------------------------------ | ------------------------------- | -------- |
| [0001](0001-registrar-decisiones.md)                         | Registrar las decisiones (ADRs) | Aceptada |

---

> Última actualización: 2026-06-30
