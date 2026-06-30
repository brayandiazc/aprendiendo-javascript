# Etiquetas (labels)

Etiquetas usadas en issues y pull requests de este repositorio.

## Por tipo de contenido (PRs — automáticas vía `labeler.yml`)

| Label           | Cuándo aplica                                   |
| --------------- | ----------------------------------------------- |
| `contenido`     | Cambios en lecciones (`NN-*/*.md`)              |
| `ejemplos`      | Archivos de código de ejemplo (`.js`, `.html`)  |
| `proyectos`     | Cambios en `proyectos/`                         |
| `documentacion` | `docs/`, README, plantillas                     |
| `ia`            | `.claude/`, `AGENTS.md`, `CLAUDE.md`            |
| `ci-cd`         | Workflows, dependabot, labeler                  |

## Por tipo de issue (manuales)

| Label              | Significado                                          |
| ------------------ | ---------------------------------------------------- |
| `error-contenido`  | Error técnico, ejemplo roto, errata o enlace roto    |
| `sugerencia`       | Propuesta de lección, módulo, ejercicio o proyecto   |
| `pregunta`         | Duda sobre el contenido                              |
| `good first issue` | Buen punto de entrada para nuevas personas           |
| `help wanted`      | Se agradece ayuda externa                            |
| `dependencies`     | Actualizaciones de dependencias (Dependabot)         |

## Crear las etiquetas

La forma más simple es ejecutar el script incluido (requiere `gh` autenticado):

```bash
bash .github/scripts/setup-labels.sh
```

Crea (o actualiza, con `--force`) todas las labels de este documento. También puedes
crearlas a mano en GitHub (Settings → Labels) o con `gh label create` una por una.
