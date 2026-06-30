# Política de Seguridad

**Aprendiendo JavaScript** es un repositorio de **contenido educativo**: lecciones en
Markdown y ejemplos de código. No es una aplicación desplegada, no procesa datos de
usuarios ni expone servicios, por lo que su superficie de seguridad es mínima. Aun así,
queremos que el contenido sea seguro de aprender y de ejecutar.

## Qué reportar

Abre un **issue** (o un PR) si encuentras:

- Un ejemplo de código que enseña una **práctica insegura** sin advertirlo (p. ej. construir
  HTML con entrada del usuario sin escaparla, usar `eval` de forma peligrosa, guardar datos
  sensibles en `localStorage` sin contexto).
- Un **enlace** a un recurso externo malicioso, comprometido o inapropiado.
- Una dependencia de ejemplo con una vulnerabilidad conocida relevante.

Si por algún motivo el reporte no debe ser público, escribe a <brayandiazc@gmail.com> con el
asunto empezando por `Security:`.

## Buenas prácticas en el contenido

Los ejemplos del curso deben modelar código seguro, o advertir explícitamente cuando
muestran un anti-patrón con fines didácticos:

- Preferir `textContent` sobre `innerHTML` con datos no confiables.
- No incluir credenciales, tokens ni claves reales en ningún ejemplo.
- Marcar claramente cualquier ejemplo intencionalmente inseguro: `// ⚠️ no hagas esto en producción`.

## Dependencias

El repositorio no depende de paquetes para su contenido. Las herramientas de calidad se
ejecutan con `npx`. Dependabot vigila las acciones de GitHub usadas en CI
(`.github/dependabot.yml`).

---

> Última actualización: 2026-06-30
