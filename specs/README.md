# Especificaciones — cambios ligeros guiados por especificaciones

Esta carpeta contiene **especificaciones de cambios**: una forma breve y estructurada de
capturar _qué_ se va a hacer y _por qué_ **antes** de escribir contenido. Le da tanto a las
personas como a los agentes de IA un objetivo claro y un punto de revisión, sin proceso
pesado.

> Opcional pero recomendado para cambios no triviales (un módulo nuevo, una reorganización,
> un proyecto). Las correcciones pequeñas y las erratas no necesitan especificación.

## Cuándo escribir una especificación

Escríbela cuando un cambio sea grande o afecte a varias partes del curso: un módulo nuevo,
reordenar lecciones, un proyecto práctico nuevo. Omítela para arreglar un ejemplo o un
enlace.

## Cómo funciona

1. Copia [`_template/`](_template) a `specs/<nombre-del-cambio>/`
   (kebab-case, p. ej. `specs/modulo-asincronia/`). O ejecuta la skill `/new-spec`.
2. Completa los tres archivos:
   - `proposal.md` — el qué y el por qué (problema, objetivos, alcance).
   - `tasks.md` — la lista de tareas (qué lecciones/ejemplos/índices crear).
   - `design.md` — decisiones de contenido (orden de temas, prerrequisitos, enlaza a ADRs).
3. Hazla revisar y luego impleméntala siguiendo `tasks.md`.
4. Al terminar, la especificación queda como registro (opcionalmente muévela a `archive/`).

## Relación con los ADRs

- Una **especificación** describe una unidad de trabajo (un cambio concreto).
- Un **ADR** ([`../docs/decisions/`](../docs/decisions/README.md)) registra una decisión
  duradera. El `design.md` de una especificación puede producir uno o más ADRs.

---

> Última actualización: 2026-06-30
