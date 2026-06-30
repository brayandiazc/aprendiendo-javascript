<!--
  Instrucciones canónicas para agentes de IA que trabajan en "Aprendiendo JavaScript".
  Esta es la única fuente de verdad para los agentes de codificación con IA (Claude Code,
  Copilot, Cursor, etc.). CLAUDE.md importa este archivo. Manténlo conciso (<150 líneas)
  e incluye solo guía no evidente y específica del proyecto — las personas leen el README.
-->

# AGENTS.md — Aprendiendo JavaScript

Instrucciones para los agentes de IA que trabajan en este repositorio.

## Resumen del proyecto

**Aprendiendo JavaScript** es un curso/guía en español para aprender JavaScript desde
cero. **No es una aplicación**: es **contenido educativo** — lecciones en Markdown
organizadas en módulos numerados, con ejemplos de código y ejercicios. El "producto" es
la claridad pedagógica, no un binario que se despliega.

La documentación de cómo trabajamos vive en [`docs/`](docs/README.md) — léela antes de un
cambio no trivial.

## Mapa del repositorio (lee esto primero)

| Necesitas saber…                          | Lee                                                                            |
| ----------------------------------------- | ------------------------------------------------------------------------------ |
| Cómo se organizan módulos y lecciones     | [`docs/estructura-del-contenido.md`](docs/estructura-del-contenido.md)         |
| Cómo escribir una lección (tono, formato) | [`docs/conventions/estilo-de-contenido.md`](docs/conventions/estilo-de-contenido.md) |
| Cómo nombrar archivos y carpetas          | [`docs/conventions/nomenclatura.md`](docs/conventions/nomenclatura.md)         |
| Cómo se verifican los ejemplos de código  | [`docs/conventions/verificacion-de-ejemplos.md`](docs/conventions/verificacion-de-ejemplos.md) |
| Todas las convenciones                    | [`docs/conventions/`](docs/conventions/README.md)                              |
| Por qué se tomaron las decisiones         | [`docs/decisions/`](docs/decisions/README.md)                                  |
| Qué contenido falta / hacia dónde va      | [`docs/product/roadmap.md`](docs/product/roadmap.md)                           |

> Remítete siempre a `docs/conventions/` para el estilo y las reglas — son la fuente de
> verdad, no tus suposiciones previas.

## Estructura del contenido

Los módulos son carpetas numeradas (`01-introduccion`, `02-fundamentos`, …). Cada lección
es un archivo Markdown numerado dentro del módulo (`01-variables.md`). Los proyectos
prácticos viven en [`proyectos/`](proyectos). Detalle completo en
[`docs/estructura-del-contenido.md`](docs/estructura-del-contenido.md).

## Cómo verificar el trabajo

No hay suite de pruebas tradicional. La "verificación" aquí es:

```bash
node ruta/al/ejemplo.js     # cada snippet ejecutable debe correr sin error
npx markdownlint-cli2 "**/*.md"   # estilo de Markdown (si está configurado)
```

Todo bloque de código JavaScript que se presente como ejecutable **debe funcionar tal
cual**. Ver [`docs/conventions/verificacion-de-ejemplos.md`](docs/conventions/verificacion-de-ejemplos.md).

## Acuerdo de trabajo

- **Planifica antes de cambios grandes.** Para un módulo o lección nuevos, redacta una
  especificación ligera en [`specs/`](specs/README.md) (o usa la skill `nueva-leccion` /
  delega en el subagente `architect`).
- **Sigue Git Flow.** Crea ramas desde `develop` como `feat/…`, `fix/…`, `docs/…`.
  Consulta [`CONTRIBUTING.md`](CONTRIBUTING.md). Nunca hagas commit directo a `main`.
- **Conventional Commits.** `type(scope): summary`. Añade la línea de coautoría de IA en
  los commits asistidos (ver [`docs/conventions/ai-agents.md`](docs/conventions/ai-agents.md)).
- **Exactitud técnica primero.** El contenido enseña: una explicación incorrecta es peor
  que ninguna. Verifica cada afirmación y cada ejemplo.
- **Mantén la documentación sincronizada.** Actualiza los índices (README del módulo,
  `docs/`) y `CHANGELOG.md`; registra decisiones notables como ADR en `docs/decisions/`.

## Reglas estrictas — nunca hagas esto

- Nunca presentes un ejemplo de código que no hayas verificado que funciona.
- Nunca inventes APIs, métodos o comportamiento del lenguaje — verifica primero (MDN,
  ECMAScript). Ante la duda, dilo explícitamente en la lección.
- Nunca cambies el español por inglés ni mezcles idiomas en el contenido.
- Nunca hagas push a `main` ni force-push a ramas compartidas.
- No reformatees lecciones no relacionadas ni hagas cambios masivos fuera de la tarea.

## Asistentes de IA y herramientas

- Este archivo es el contexto canónico. Los archivos específicos de cada herramienta
  (`CLAUDE.md`, etc.) apuntan aquí.
- Los subagentes reutilizables viven en [`.claude/agents/`](.claude/agents) y las skills
  en [`.claude/skills/`](.claude/skills); están **adaptados a este proyecto educativo**.
- Reglas para trabajar con IA: [`docs/conventions/ai-agents.md`](docs/conventions/ai-agents.md).
