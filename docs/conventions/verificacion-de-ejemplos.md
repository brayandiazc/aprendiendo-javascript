# Convención: verificación de ejemplos

En un curso, un ejemplo que no funciona enseña algo equivocado. Esta es la regla que
sustituye a una "suite de pruebas" tradicional.

## Principio

**Todo código presentado como ejecutable debe correr tal cual y producir la salida que la
lección describe.** Sin excepción.

## Cómo verificar

### Ejemplos de JavaScript "puro" (sin DOM)

Córrelos con Node.js:

```bash
node ruta/al/ejemplo.js
```

O verifica un snippet incrustado copiándolo a un archivo temporal y ejecutándolo. La salida
real debe coincidir con la anotada en el comentario `// => ...` o con el texto de la
lección.

### Ejemplos con DOM o eventos (módulo 08)

El DOM no existe en Node. Verifica estos ejemplos en el **navegador**:

- Acompaña el `.js` con un `.html` mínimo que lo cargue, o
- Indica claramente que el snippet se ejecuta en la consola del navegador / DevTools.

No presentes código de DOM como si corriera en Node.

## Reglas

- Si anotas una salida (`// => 42`), debe ser la salida real, no la esperada "de memoria".
- Si un ejemplo es intencionalmente incorrecto (para enseñar un error), márcalo de forma
  explícita: `// ❌ esto lanza un TypeError`.
- Usa nombres de variable en español y consistentes con el resto del curso.
- Prefiere `const`/`let` sobre `var` salvo cuando la lección enseñe específicamente `var`.

## Herramienta

El subagente [`example-author`](../../.claude/agents/example-author.md) escribe y ejecuta
ejemplos siguiendo esta convención.

---

> Última actualización: 2026-06-30
