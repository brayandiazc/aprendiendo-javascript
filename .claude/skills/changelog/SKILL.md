---
name: changelog
description: Actualiza CHANGELOG.md en el formato Keep a Changelog, añadiendo los cambios actuales bajo la sección Unreleased. Úsalo cuando la persona pida actualizar el changelog, añadir una entrada al changelog o registrar lo que cambió (p. ej. "añade esto al changelog", "actualiza el CHANGELOG con estos commits").
---

Añade los cambios actuales a `CHANGELOG.md`.

1. Lee `CHANGELOG.md` para coincidir con su estilo existente y confirma que sigue Keep a Changelog (<https://keepachangelog.com>). Asegúrate de que exista una sección `## [Unreleased]` al inicio; créala si falta.
2. Determina qué cambió desde la última versión: revisa los commits recientes (`git log <last-tag>..HEAD --oneline`) y/o el diff del working tree.
3. Resume los cambios en las categorías estándar bajo Unreleased, creando solo las subsecciones que apliquen. En este curso lo habitual es:
   - `Added` — lecciones, módulos, ejercicios o proyectos nuevos.
   - `Changed` — reescrituras o reorganización de contenido existente.
   - `Fixed` — correcciones de errores técnicos, ejemplos que no funcionaban, enlaces rotos.
   - `Removed` — contenido eliminado.
4. Escribe las entradas como viñetas concisas y orientadas a quien aprende (qué cambió y por qué importa), no mensajes de commit en crudo. Vincula issues/PRs si el archivo lo hace.
5. Informa las líneas que añadiste.

NO publiques ni numeres una versión por tu cuenta; solo edita la sección Unreleased salvo que se pida explícitamente cerrar una versión.
