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

Crea las etiquetas de contenido en GitHub (Settings → Labels) o con la CLI `gh`:

```bash
gh label create error-contenido --description "Error técnico, ejemplo o errata" --color d73a4a
gh label create sugerencia      --description "Propuesta de contenido"          --color 0e8a16
gh label create pregunta        --description "Duda sobre el contenido"         --color d876e3
gh label create contenido       --description "Cambios en lecciones"            --color 1d76db
gh label create ejemplos        --description "Código de ejemplo"               --color fbca04
gh label create proyectos       --description "Cambios en proyectos"            --color 5319e7
gh label create documentacion   --description "Documentación de proceso"        --color 0075ca
gh label create ia              --description "Capa de IA"                      --color c5def5
gh label create ci-cd           --description "CI / tooling"                    --color ededed
```
