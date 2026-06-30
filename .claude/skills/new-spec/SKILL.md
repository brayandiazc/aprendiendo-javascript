---
name: new-spec
description: Genera una nueva especificación de cambio ligera copiando el directorio de plantilla de especificación en una carpeta con nombre. Úsalo cuando la persona quiera planificar un módulo o lección no triviales, o una reorganización, antes de escribir el contenido (p. ej. "especifica el módulo de asincronía", "crea una especificación para reordenar arrays").
argument-hint: "[nombre del cambio]"
---

Crea una nueva especificación de cambio cuyo nombre está en `$ARGUMENTS`.

1. Lee `specs/README.md` para conocer el flujo de trabajo, la convención de nombres de carpeta y qué espera cada archivo de la plantilla. Sigue ese documento si difiere de los pasos siguientes.
2. Convierte `$ARGUMENTS` en `<nombre-del-cambio>` con formato slug (minúsculas, separado por guiones).
3. Copia todo el directorio `specs/_template/` a `specs/<nombre-del-cambio>/` (conserva cada archivo de la plantilla).
4. En los archivos copiados, completa los metadatos obvios:
   - El título del cambio (la forma legible de `$ARGUMENTS`)
   - Estado: `Borrador`
   - Fecha: la fecha de hoy (`YYYY-MM-DD`)
   - Deja problema, objetivos, no-objetivos y enfoque como indicaciones para la persona autora.
5. Si `specs/README.md` mantiene un índice, añade una entrada para la nueva especificación.
6. Informa la ruta del directorio creado y enumera los archivos que aún deben completarse.

NO implementes el contenido todavía ni sobrescribas una carpeta de especificación existente.
