#!/bin/bash

# Crea/actualiza las labels del repositorio usando la CLI de GitHub (gh).
# Requiere: GitHub CLI (gh) instalado y autenticado.
# Uso: bash .github/scripts/setup-labels.sh

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}=== Configuración de labels ===${NC}\n"

if ! command -v gh &> /dev/null; then
	echo -e "${YELLOW}Error: GitHub CLI (gh) no está instalado.${NC}"
	echo "Instálalo desde: https://cli.github.com/"
	exit 1
fi

if ! gh auth status &> /dev/null; then
	echo -e "${YELLOW}Error: no estás autenticado en GitHub CLI.${NC}"
	echo "Ejecuta: gh auth login"
	exit 1
fi

REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null)
if [ -z "$REPO" ]; then
	echo -e "${YELLOW}Error: no se pudo detectar el repositorio.${NC}"
	echo "Ejecuta este script desde el directorio del repositorio."
	exit 1
fi

echo -e "${GREEN}Configurando labels para: $REPO${NC}"

create_label() {
	local name=$1
	local color=$2
	local description=$3
	echo -e "Creando label: ${BLUE}$name${NC}"
	gh label create "$name" --color "$color" --description "$description" --force 2>/dev/null || true
}

# ── Labels automáticos (usados por labeler.yml) ──────────────────────────────
echo -e "\n${GREEN}Labels automáticos (labeler)${NC}"
create_label "contenido"     "1D76DB" "Cambios en lecciones"
create_label "ejemplos"      "FBCA04" "Código de ejemplo (.js / .html / .mjs)"
create_label "proyectos"     "5319E7" "Cambios en proyectos"
create_label "documentacion" "0075CA" "Documentación de proceso (docs/, README)"
create_label "ia"            "C5DEF5" "Capa de IA (.claude, AGENTS.md)"
create_label "ci-cd"         "EDEDED" "CI, workflows y tooling"

# ── Labels manuales (issues) ─────────────────────────────────────────────────
echo -e "\n${GREEN}Labels manuales${NC}"
create_label "error-contenido"  "D73A4A" "Error técnico, ejemplo roto, errata o enlace roto"
create_label "sugerencia"       "0E8A16" "Propuesta de lección, módulo, ejercicio o proyecto"
create_label "pregunta"         "D876E3" "Duda sobre el contenido"
create_label "good first issue" "7057FF" "Buen punto de entrada para nuevas personas"
create_label "help wanted"      "008672" "Se agradece ayuda externa"
create_label "dependencies"     "0366D6" "Actualizaciones de dependencias (Dependabot)"

echo -e "\n${GREEN}¡Labels configurados!${NC}"
echo -e "Ver labels en: ${BLUE}https://github.com/$REPO/labels${NC}\n"
