# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### Changed

- El sitio Docsify adopta el estilo gráfico de [brayandiazc.com](https://brayandiazc.com)
  (reutilizado en `social-banner-template`): tokens de color claro/oscuro, tipografía
  monoespaciada _Google Sans Code_, acento de marca (azul en claro, naranja en oscuro) y
  detalles de firma (prefijo `// ` en la marca, enlaces con subrayado punteado). Nueva hoja
  `assets/theme.css` que sobreescribe el tema Vue, más un toggle de tema claro/oscuro
  persistido y respeto por `prefers-color-scheme`.

## [0.3.2] - 2026-06-30

### Added

- CI: nuevo job **Ejecutar soluciones** que corre las soluciones de `soluciones/` con Node
  (no solo verifica sintaxis); la solución de `fetch` es best-effort por depender de la red.

## [0.3.1] - 2026-06-30

### Added

- Script `.github/scripts/format-markdown.sh` para formatear Markdown y ejemplos con
  Prettier (`--write`/`--check`), más `.prettierrc` (`proseWrap: preserve`) y `.prettierignore`.
- Script `.github/scripts/setup-labels.sh` para crear/actualizar las labels del repo con `gh`.

### Fixed

- CI: el chequeo de enlaces (lychee) fallaba por `_sidebar.md` (enlaces raíz-relativos que
  necesita docsify) y por la URL de GitHub Pages; ahora se excluyen vía `lychee.toml`.

## [0.3.0] - 2026-06-30

### Added

- Módulo **09 · Asincronía**: lecciones de callbacks, promesas y `async`/`await`, con
  ejercicios y ejemplos verificados con Node.
- Módulo **10 · Fetch y APIs**: APIs/JSON y `fetch` (GET, manejo de errores con
  `response.ok`, POST), con ejercicios verificados contra una API pública real.
- Módulo **11 · Manejo de errores**: `try`/`catch`/`finally`, `throw` y errores propios, y
  manejo de errores en código asíncrono, con ejercicios verificados con Node.
- Módulo **12 · Módulos ES**: `export`/`import` (con nombre, por defecto, `as`, `* as`,
  importación dinámica), con archivos `.mjs` de ejemplo ejecutables y ejercicios.
- Módulo **13 · String, Number y fechas**: métodos de cadenas, números/`Math` y `Date`, con
  ejercicios verificados con Node.
- Proyecto **Buscador de usuarios**: app que descarga usuarios de una API pública y los
  filtra por nombre, integrando DOM, `fetch` y manejo de errores.
- Carpeta [`soluciones/`](soluciones/README.md): soluciones **ejecutables** de los ejercicios
  de los módulos 07, 09, 10, 11, 12 y 13.
- **Versión web navegable** del curso con docsify + GitHub Pages (`index.html`, `_sidebar.md`).
- CI: la verificación de sintaxis de ejemplos ahora cubre también archivos `.mjs`.

## [0.2.0] - 2026-06-30

### Added

- Documentación de proceso en [`docs/`](docs/README.md): estructura del contenido,
  convenciones (estilo, nomenclatura, verificación de ejemplos, tooling, IA), registro de
  decisiones (ADRs), roadmap de contenido y glosario de términos.
- Capa de IA: [`AGENTS.md`](AGENTS.md)/[`CLAUDE.md`](CLAUDE.md), subagentes y skills en
  [`.claude/`](.claude) adaptados a un curso de JavaScript.
- Flujo ligero de especificaciones en [`specs/`](specs/README.md).
- Gobernanza: `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `.editorconfig`,
  `.gitignore`, plantillas de issues/PR, `dependabot.yml` y workflow de CI.
- `README.md` por cada módulo (01–08 y `proyectos/`) con índice y navegación.
- Ejercicios del módulo 07 (POO): clases, encapsulamiento, herencia, abstracción y
  polimorfismo, con soluciones verificadas (`07-poo/07-ejercicios.md`).
- Ejemplos HTML ejecutables del módulo DOM en `08-dom/ejemplos/`.

### Changed

- `CONTRIBUTING.md` y `CODE_OF_CONDUCT.md` movidos a la raíz y reescritos para un proyecto
  de contenido educativo en JavaScript (antes referían herramientas de Python).
- `README.md` raíz reescrito: descripción, badges, cómo estudiar, ejecución de ejemplos,
  sección de IA/agentes y enlaces a `docs/`.
- Lección "Historia de JavaScript" ampliada (origen, estandarización, Node.js, era ES6+).
- Títulos normalizados: "Historia de JavaScript", "El DOM", "Eventos del DOM".

### Fixed

- Archivo de ejercicios de POO que estaba vacío.
- Enlaces rotos en el `README`: `CONTRIBUTING` apuntaba a un gist y la licencia a
  `LICENSE.md` (el archivo es `LICENSE`).

## [0.1.0]

### Added

- Contenido inicial del curso: módulos 01–08 (introducción, fundamentos, estructuras de
  control, funciones, arrays, objetos y clases, POO, DOM) y el proyecto "Conversor de
  monedas".

<!--
Enlaces de comparación entre versiones (ajusta a tu repositorio):
[Unreleased]: https://github.com/brayandiazc/aprendiendo-javascript/compare/v0.3.2...HEAD
[0.3.2]: https://github.com/brayandiazc/aprendiendo-javascript/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/brayandiazc/aprendiendo-javascript/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/brayandiazc/aprendiendo-javascript/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/brayandiazc/aprendiendo-javascript/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/brayandiazc/aprendiendo-javascript/releases/tag/v0.1.0
-->
