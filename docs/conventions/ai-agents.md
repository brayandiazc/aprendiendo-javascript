# Convención: trabajo con agentes de IA

Este repositorio está "listo para IA": el contexto canónico vive en
[`AGENTS.md`](../../AGENTS.md) y hay subagentes y skills en
[`.claude/`](../../.claude). Estas son las reglas para que el contenido asistido por IA
mantenga la calidad del curso.

## Reglas

1. **Revisión humana obligatoria.** Ningún contenido generado por IA se mergea sin que una
   persona lo revise. La IA acelera, no reemplaza el criterio pedagógico.
2. **Exactitud verificada.** La IA no debe presentar afirmaciones sobre JavaScript ni
   ejemplos sin verificarlos (ejecutar el código, contrastar con MDN/ECMAScript). Ver
   [`verificacion-de-ejemplos.md`](verificacion-de-ejemplos.md).
3. **Mismo flujo que cualquier cambio.** Git Flow, Conventional Commits y PR con revisión,
   igual que una contribución humana (ver [`CONTRIBUTING.md`](../../CONTRIBUTING.md)).
4. **Atribución.** Los commits asistidos por IA incluyen un trailer de coautoría:

   ```text
   Co-Authored-By: Claude <noreply@anthropic.com>
   ```

5. **Nada de secretos.** No se commitean credenciales ni datos personales (aunque este
   repo no maneje configuración sensible, la regla aplica).
6. **Idioma y voz.** La IA respeta el español y el tono del curso; no introduce inglés ni
   reescribe el estilo establecido sin pedirlo.

## Herramientas disponibles

- **Subagentes** ([`.claude/agents/`](../../.claude/agents)): `architect` (planifica
  lecciones), `content-reviewer` (revisa exactitud y claridad), `example-author` (escribe y
  verifica ejemplos), `doc-keeper` (mantiene índices), `explorer` (mapea el curso).
- **Skills** ([`.claude/skills/`](../../.claude/skills)): `nueva-leccion`, `commit`,
  `open-pr`, `new-spec`, `new-adr`, `changelog`, `refactor`.

---

> Última actualización: 2026-06-30
