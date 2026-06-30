# Convención: nomenclatura

Reglas de nombres para módulos, lecciones, proyectos y archivos de ejemplo.

## Módulos (carpetas)

- Formato: `NN-nombre-en-kebab-case` (dos dígitos + guion + nombre).
- `NN` refleja el orden pedagógico (`01`, `02`, …). Deja hueco mental para futuros módulos,
  pero no saltes números sin motivo.
- Nombre en español, en minúsculas, palabras separadas por guiones: `03-estructuras-de-control`.

## Lecciones (archivos `.md`)

- Formato: `NN-tema-en-kebab-case.md` dentro de su módulo.
- `NN` es el orden dentro del módulo. El archivo de práctica final es `NN-ejercicios.md`.
- El nombre del archivo describe el tema; el `# Título` del documento es su forma legible
  (sin el número): `04-operadores.md` → `# Operadores`.

## Proyectos

- Carpeta `proyectos/`; cada proyecto tiene un descriptor `nombre-proyecto.md`.
- Los archivos de código se numeran por etapa con un sufijo descriptivo:
  `01-conversor-monedas-variables.js`, `02-conversor-monedas-inputs.js`, …

## Archivos de ejemplo (`.js` / `.html`)

- En `kebab-case`, en español, describiendo lo que muestran: `desestructuracion-basica.js`.
- Si pertenecen a una lección concreta, agrúpalos en una subcarpeta `ejemplos/` del módulo
  o nómbralos con el prefijo de la lección.

## Reglas generales

- Solo minúsculas, números y guiones en nombres de archivo y carpeta (sin espacios, sin
  mayúsculas, sin acentos en los nombres de archivo).
- Codificación UTF-8 y finales de línea LF (ver [`.editorconfig`](../../.editorconfig)).

---

> Última actualización: 2026-06-30
