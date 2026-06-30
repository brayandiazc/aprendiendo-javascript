# Roadmap de contenido

Hacia dónde va el curso "Aprendiendo JavaScript". No es un compromiso de fechas, sino una
lista priorizada de qué falta y qué mejorar.

## Estado actual

Módulos publicados:

| Módulo                       | Estado      |
| ---------------------------- | ----------- |
| 01 · Introducción            | ✅ Completo (ampliar historia) |
| 02 · Fundamentos             | ✅ Completo |
| 03 · Estructuras de control  | ✅ Completo |
| 04 · Funciones               | ✅ Completo |
| 05 · Arrays                  | ✅ Completo |
| 06 · Objetos y clases        | ✅ Completo |
| 07 · POO                     | 🚧 Falta el archivo de ejercicios |
| 08 · DOM y eventos           | ✅ Completo |
| 09 · Asincronía              | ✅ Completo (callbacks, promesas, async/await) |
| 10 · Fetch y APIs            | ✅ Completo (APIs, JSON, fetch, POST) |
| Proyectos · Conversor de monedas | ✅ Completo |

## Correcciones pendientes (prioridad alta)

- [ ] Escribir `07-poo/07-ejercicios.md` (actualmente vacío).
- [ ] Ampliar `01-introduccion/02-historia-javascript.md` (origen 1995, Brendan Eich, ES5/ES6+).
- [ ] Añadir un `README.md` por módulo (índice de lecciones).
- [ ] Normalizar los títulos de las lecciones según [`estilo-de-contenido.md`](../conventions/estilo-de-contenido.md).
- [ ] Añadir ejemplos `.html` de referencia para el módulo 08 (DOM).

## Contenido nuevo propuesto

Temas que un curso de JavaScript moderno debería cubrir y que aún no están:

- [x] **Asincronía** — callbacks, Promises, `async`/`await`. *(módulo 09)*
- [x] **Fetch y APIs** — consumir datos con `fetch`, JSON, manejo de respuestas. *(módulo 10)*
- [ ] **Manejo de errores** — `try`/`catch`/`finally`, `throw`, errores en asincronía.
- [ ] **Módulos ES** — `import`/`export`, organización de código.
- [ ] **Métodos avanzados de String y Number**, fechas (`Date`).
- [ ] **Proyectos nuevos** — al menos uno que use DOM + asincronía (p. ej. consumir una API pública).

## Ideas a evaluar

- Versión web navegable del curso (GitHub Pages).
- Soluciones a los ejercicios en una carpeta aparte.
- Tests de los ejemplos en CI.

---

> Última actualización: 2026-06-30
