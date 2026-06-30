#!/bin/bash

# Formatea los archivos del curso con Prettier.
# No requiere instalar Prettier: lo ejecuta vía npx (necesita Node.js).
#
# Uso:
#   bash .github/scripts/format-markdown.sh           # formatea (--write)
#   bash .github/scripts/format-markdown.sh --check    # solo verifica, no escribe
#
# Por defecto formatea Markdown y los ejemplos de código (.js / .mjs).

set -e

MODE="--write"
if [ "$1" = "--check" ]; then
	MODE="--check"
fi

if ! command -v npx &> /dev/null; then
	echo "Error: se necesita Node.js (npx) para ejecutar Prettier." >&2
	echo "Instálalo desde https://nodejs.org/" >&2
	exit 1
fi

echo "Ejecutando Prettier ($MODE) sobre Markdown y ejemplos…"
npx --yes prettier@3 "$MODE" "**/*.{md,js,mjs}"
echo "Listo."
