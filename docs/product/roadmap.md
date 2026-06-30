# Roadmap de contenido

Hacia dónde va el curso "Aprendiendo JavaScript". No es un compromiso de fechas, sino una
lista priorizada de qué falta y qué mejorar.

## Estado actual

Módulos publicados:

| Módulo                       | Estado      |
| ---------------------------- | ----------- |
| 01 · Introducción            | ✅ Completo |
| 02 · Fundamentos             | ✅ Completo |
| 03 · Estructuras de control  | ✅ Completo |
| 04 · Funciones               | ✅ Completo |
| 05 · Arrays                  | ✅ Completo |
| 06 · Objetos y clases        | ✅ Completo |
| 07 · POO                     | ✅ Completo |
| 08 · DOM y eventos           | ✅ Completo |
| 09 · Asincronía              | ✅ Completo (callbacks, promesas, async/await) |
| 10 · Fetch y APIs            | ✅ Completo (APIs, JSON, fetch, POST) |
| 11 · Manejo de errores       | ✅ Completo (try/catch, throw, errores async) |
| 12 · Módulos ES              | ✅ Completo (export/import, default, dinámico) |
| 13 · String, Number y fechas | ✅ Completo (métodos de string, Math, Date) |
| Proyectos · Conversor de monedas | ✅ Completo |
| Proyectos · Buscador de usuarios (API) | ✅ Completo (DOM + fetch + errores) |

## Correcciones (completadas en v0.2.0)

- [x] Escribir `07-poo/07-ejercicios.md` (estaba vacío).
- [x] Ampliar `01-introduccion/02-historia-javascript.md` (origen 1995, Brendan Eich, ES5/ES6+).
- [x] Añadir un `README.md` por módulo (índice de lecciones).
- [x] Normalizar los títulos de las lecciones según [`estilo-de-contenido.md`](../conventions/estilo-de-contenido.md).
- [x] Añadir ejemplos `.html` de referencia para el módulo 08 (DOM).

## Contenido nuevo propuesto

Temas que un curso de JavaScript moderno debería cubrir y que aún no están:

- [x] **Asincronía** — callbacks, Promises, `async`/`await`. *(módulo 09)*
- [x] **Fetch y APIs** — consumir datos con `fetch`, JSON, manejo de respuestas. *(módulo 10)*
- [x] **Manejo de errores** — `try`/`catch`/`finally`, `throw`, errores en asincronía. *(módulo 11)*
- [x] **Módulos ES** — `import`/`export`, organización de código. *(módulo 12)*
- [x] **Métodos avanzados de String y Number**, fechas (`Date`). *(módulo 13)*
- [x] **Proyectos nuevos** — al menos uno que use DOM + asincronía (Buscador de usuarios).

## Ideas a evaluar

- Versión web navegable del curso (GitHub Pages).
- Soluciones a los ejercicios en una carpeta aparte.
- Tests de los ejemplos en CI.

---

> Última actualización: 2026-06-30
