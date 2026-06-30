# Convención: tooling de calidad

Herramientas que mantienen el contenido consistente y sin enlaces rotos. Todo es opcional
para contribuir, pero el CI las ejecuta sobre los PRs.

## EditorConfig

[`.editorconfig`](../../.editorconfig) fija codificación (UTF-8), finales de línea (LF),
indentación (2 espacios) y nueva línea final. La mayoría de editores lo respetan
automáticamente.

## Markdownlint

Estilo consistente del Markdown:

```bash
npx markdownlint-cli2 "**/*.md"
```

Coherencia de encabezados, listas, longitud y bloques de código. Las reglas concretas se
pueden ajustar con un `.markdownlint.jsonc` en la raíz si hace falta relajar alguna.

## Revisión de enlaces

Detecta enlaces rotos en el contenido:

```bash
npx markdown-link-check **/*.md
```

(o el verificador que use el workflow de CI).

## Formato (opcional)

Prettier puede formatear Markdown y JS de ejemplo de forma consistente:

```bash
npx prettier --write "**/*.{md,js}"
```

## CI

El workflow [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) corre markdownlint
y la revisión de enlaces en cada push/PR. Mantén el contenido verde antes de pedir review.

---

> Última actualización: 2026-06-30
