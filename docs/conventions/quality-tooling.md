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

Hay un script que formatea el Markdown y los ejemplos (`.js`/`.mjs`) con Prettier vía `npx`
(no necesitas instalar nada, solo Node.js):

```bash
bash .github/scripts/format-markdown.sh          # formatea (--write)
bash .github/scripts/format-markdown.sh --check   # solo verifica, no escribe
```

La configuración está en [`.prettierrc`](../../.prettierrc) (con `proseWrap: preserve`, así
que **no reescribe** los párrafos existentes) y las exclusiones en
[`.prettierignore`](../../.prettierignore). También puedes invocar Prettier directamente:

```bash
npx prettier --write "**/*.{md,js,mjs}"
```

## CI

El workflow [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) corre en cada
push/PR:

- **Markdown lint y enlaces** — markdownlint + revisión de enlaces (lychee).
- **Sintaxis de ejemplos JS** — `node --check` sobre todos los `.js`/`.mjs`.
- **Ejecutar soluciones** — ejecuta de verdad las soluciones de `soluciones/` con Node
  (la de `fetch`, que necesita red, es best-effort).

Mantén el contenido verde antes de pedir review.

---

> Última actualización: 2026-06-30
