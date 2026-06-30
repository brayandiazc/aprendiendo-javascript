# Guía de Contribución

¡Gracias por tu interés en contribuir a **Aprendiendo JavaScript**! Este es un curso de
contenido educativo en español; las contribuciones suelen ser lecciones nuevas, mejoras de
redacción, correcciones técnicas, ejemplos y ejercicios.

## Tabla de Contenidos

- [Antes de empezar](#antes-de-empezar)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Estándares de Contenido](#estándares-de-contenido)
- [Verificar tus ejemplos](#verificar-tus-ejemplos)
- [Commits y Mensajes](#commits-y-mensajes)
- [Pull Requests](#pull-requests)
- [Trabajo con agentes de IA](#trabajo-con-agentes-de-ia)

## Antes de empezar

Lee cómo está organizado y cómo se escribe el contenido:

- [`docs/estructura-del-contenido.md`](docs/estructura-del-contenido.md) — módulos y lecciones.
- [`docs/conventions/estilo-de-contenido.md`](docs/conventions/estilo-de-contenido.md) — cómo se escribe una lección.
- [`docs/conventions/nomenclatura.md`](docs/conventions/nomenclatura.md) — nombres de archivos y carpetas.
- [`docs/conventions/verificacion-de-ejemplos.md`](docs/conventions/verificacion-de-ejemplos.md) — cómo se verifican los ejemplos.

Para ejecutar y verificar ejemplos necesitas [Node.js](https://nodejs.org). Las herramientas
de calidad (markdownlint, revisión de enlaces) se ejecutan con `npx` sin instalar nada.

## Flujo de Trabajo

Usamos un flujo **Git Flow** simplificado.

| Rama       | Propósito                                  | Origen    | Destino            |
| ---------- | ------------------------------------------ | --------- | ------------------ |
| `main`     | Contenido publicado. Siempre estable.      | —         | —                  |
| `develop`  | Integración de contribuciones.             | `main`    | `main`             |
| `feat/*`   | Lección, módulo o proyecto nuevo.          | `develop` | `develop`          |
| `fix/*`    | Corrección de contenido (error, ejemplo).  | `develop` | `develop`          |
| `docs/*`   | Cambios de documentación de proceso.       | `develop` | `develop`          |
| `chore/*`  | Mantenimiento, tooling, configuración.     | `develop` | `develop`          |

```bash
# 1. Parte de develop actualizado
git checkout develop
git pull origin develop

# 2. Crea tu rama
git checkout -b feat/leccion-promesas

# 3. Trabaja y commitea (ver formato abajo)
git add .
git commit -m "feat(09-asincronia): agrega lección de promesas"

# 4. Sube tu rama y abre un PR hacia develop
git push origin feat/leccion-promesas
```

- Nombra las ramas en minúsculas, con prefijo de tipo y descripción en `kebab-case`.
- `main` y `develop` no reciben push directo: solo vía PR.

## Estándares de Contenido

- **Español** en todo el contenido visible, incluidos comentarios y nombres de variables de
  ejemplo. No mezcles idiomas.
- Sigue la estructura de lección y el tono de [`estilo-de-contenido.md`](docs/conventions/estilo-de-contenido.md).
- **Exactitud primero**: verifica cada afirmación (MDN / ECMAScript). Una explicación
  incorrecta es peor que ninguna.
- Indentación de 2 espacios, UTF-8, LF (ver [`.editorconfig`](.editorconfig)).

## Verificar tus ejemplos

Todo código presentado como ejecutable debe correr tal cual:

```bash
node ruta/al/ejemplo.js          # JS puro
npx markdownlint-cli2 "**/*.md"  # estilo de Markdown
```

Los ejemplos de DOM (módulo 08) se verifican en el navegador. Ver
[`verificacion-de-ejemplos.md`](docs/conventions/verificacion-de-ejemplos.md).

## Commits y Mensajes

Usamos [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/):

```text
<tipo>(<ámbito opcional>): <descripción breve en imperativo>
```

Tipos comunes: `feat`, `fix`, `docs`, `refactor`, `chore`, `ci`. Usa el módulo como ámbito
cuando aplique.

Ejemplos:

```text
feat(05-arrays): agrega lección de reduce
fix(07-poo): completa los ejercicios del módulo
docs: actualiza el roadmap de contenido
```

## Pull Requests

- Usa la [plantilla de PR](.github/PULL_REQUEST_TEMPLATE.md) (se carga automáticamente).
- Un PR por cambio lógico; mantenlos pequeños y enfocados.
- Vincula los issues relacionados (`Closes #123`).
- Asegúrate de que el CI pase (markdownlint, enlaces) y de haber verificado tus ejemplos.

## Trabajo con agentes de IA

Este repositorio está listo para IA (ver [`AGENTS.md`](AGENTS.md)). Los cambios asistidos
por IA siguen el **mismo** flujo y revisión que cualquier otro y deben respetar
[`docs/conventions/ai-agents.md`](docs/conventions/ai-agents.md): la revisión humana es
obligatoria, los ejemplos se verifican, y los commits asistidos se marcan con un trailer
`Co-Authored-By`.
