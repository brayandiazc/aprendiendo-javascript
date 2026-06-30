# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

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
[Unreleased]: https://github.com/brayandiazc/aprendiendo-javascript/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/brayandiazc/aprendiendo-javascript/releases/tag/v0.1.0
-->
