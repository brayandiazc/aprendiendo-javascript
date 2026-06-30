---
name: commit
description: Escribe un mensaje de Conventional Commits para los cambios en stage y crea el commit, incluyendo la línea de coautoría de atribución de IA. Úsalo cuando la persona pida hacer commit, escribir un mensaje de commit o guardar cambios (p. ej. "haz commit de esto", "escribe un mensaje de commit para estos cambios"). No hace push.
---

Crea un commit bien formado para los cambios actuales.

1. Lee `CONTRIBUTING.md` para conocer las reglas de commit del proyecto (tipos permitidos, convenciones de scope, estilo del asunto, footers requeridos). Sigue ese documento por encima de los valores por defecto de abajo.
2. Inspecciona lo que está en stage con `git status` y `git diff --staged`. Si no hay nada en stage, revisa `git diff` y agrega al stage los archivos correspondientes; pregunta antes de hacer stage si es ambiguo.
3. Redacta un mensaje de Conventional Commits:
   - Formato: `<type>(<optional scope>): <short imperative subject>`
   - Tipos comunes: `feat`, `fix`, `docs`, `refactor`, `chore`, `ci`. En este repo educativo `docs` y `feat` (lección/módulo nuevo) son los más frecuentes; usa el módulo como scope cuando aplique (p. ej. `feat(05-arrays): …`).
   - Mantén el asunto por debajo de ~72 caracteres; añade un cuerpo que explique el porqué cuando el cambio no sea trivial.
4. Para trabajo asistido por IA, añade la línea de coautoría en el footer según lo definido en `CONTRIBUTING.md` (un trailer `Co-Authored-By:`).
5. Crea el commit. Muestra el mensaje final a la persona.

Ejemplo de asunto: `feat(08-dom): agrega lección de delegación de eventos`.

NO hagas push ni modifiques el historial. NO incluyas secretos. Da prioridad a `CONTRIBUTING.md`.
