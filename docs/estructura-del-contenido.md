# Estructura del contenido

Cómo está organizado el curso "Aprendiendo JavaScript". Esta es la fuente de verdad sobre
la disposición de módulos, lecciones y proyectos.

## Módulos

El contenido se divide en **módulos**: carpetas en la raíz con prefijo numérico de dos
dígitos y nombre en `kebab-case`, en orden pedagógico creciente.

```text
01-introduccion/
02-fundamentos/
03-estructuras-de-control/
04-funciones/
05-arrays/
06-objetos-y-clases/
07-poo/
08-dom/
proyectos/
```

El orden importa: cada módulo asume lo aprendido en los anteriores. Insertar un módulo
entre dos existentes implica renumerar — registra esa decisión como un
[ADR](decisions/README.md).

## Lecciones

Dentro de cada módulo, cada **lección** es un archivo Markdown con prefijo numérico de dos
dígitos y nombre en `kebab-case`:

```text
02-fundamentos/
├── 01-variables.md
├── 02-tipos-de-datos.md
├── 03-coercion-de-datos.md
├── 04-operadores.md
└── 05-ejercicios.md
```

Convenciones:

- La **última lección de cada módulo** es `NN-ejercicios.md`, con práctica que integra el
  módulo completo.
- Cada módulo tiene (o debería tener) un `README.md` que indexa sus lecciones.
- Para la estructura interna de una lección, ver
  [`conventions/estilo-de-contenido.md`](conventions/estilo-de-contenido.md).
- Para las reglas de nombres, ver [`conventions/nomenclatura.md`](conventions/nomenclatura.md).

## Proyectos

[`proyectos/`](../proyectos) contiene aplicaciones prácticas que integran varios módulos.
Cada proyecto tiene un `.md` descriptor y sus archivos de código (`.js` / `.html`)
numerados por etapa, mostrando una progresión (variables → inputs → condicionales →
ciclos → funciones, etc.).

## Ejemplos de código

- Los ejemplos breves viven **incrustados** en el Markdown de la lección.
- Los ejemplos que se ejecutan o que el lector debe correr pueden vivir como archivos
  `.js`/`.html` junto a la lección o en una subcarpeta `ejemplos/` del módulo.
- Reglas de ejecución y verificación: [`conventions/verificacion-de-ejemplos.md`](conventions/verificacion-de-ejemplos.md).

---

> Última actualización: 2026-06-30
