# export e import

Ya sabemos para qué sirven los módulos; ahora veamos la sintaxis para **compartir** código
(`export`) y **usarlo** desde otro archivo (`import`).

## Objetivos de aprendizaje

- Usar exportaciones **con nombre** y **por defecto**.
- Importar, renombrar (`as`) e importar todo (`* as`).
- Conocer la importación dinámica `import()`.

## Prerrequisitos

- [¿Qué son los módulos?](./01-que-son-los-modulos.md)

## Exportaciones con nombre

Puedes exportar tantas cosas como quieras por su nombre. Se importan **entre llaves** usando
exactamente esos nombres.

```javascript
// operaciones.mjs
export const PI = 3.1416;

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}
```

```javascript
// main.mjs
import { PI, sumar } from "./operaciones.mjs";

console.log(PI);          // => 3.1416
console.log(sumar(2, 3)); // => 5
```

## Exportación por defecto

Cada módulo puede tener **una** exportación por defecto (`export default`). Se importa **sin
llaves** y puedes darle el nombre que quieras.

```javascript
// operaciones.mjs
export default function saludar(nombre) {
  return `Hola, ${nombre}`;
}
```

```javascript
// main.mjs
import saludar from "./operaciones.mjs"; // sin llaves
console.log(saludar("Ada")); // => Hola, Ada
```

Puedes combinar el default y los nombrados en un mismo `import` (el default va primero):

```javascript
import saludar, { PI, sumar, restar } from "./operaciones.mjs";
```

> Los archivos [`ejemplos/operaciones.mjs`](./ejemplos/operaciones.mjs) y
> [`ejemplos/main.mjs`](./ejemplos/main.mjs) contienen exactamente este ejemplo. Ejecútalo
> con `node main.mjs` y verás:
>
> ```text
> Hola, Ada
> PI: 3.1416
> 2 + 3 = 5
> 5 - 1 = 4
> ```

## Renombrar al importar (`as`)

Si un nombre choca con otro o quieres uno más claro, usa `as`:

```javascript
import { sumar as agregar } from "./operaciones.mjs";
console.log(agregar(1, 1)); // => 2
```

## Importar todo (`* as`)

Puedes traer todas las exportaciones con nombre dentro de un objeto:

```javascript
import * as operaciones from "./operaciones.mjs";

console.log(operaciones.PI);          // => 3.1416
console.log(operaciones.sumar(4, 4)); // => 8
```

## Importación dinámica

`import()` (como función) carga un módulo **bajo demanda** y devuelve una promesa. Es útil
para cargar algo solo cuando se necesita.

```javascript
async function cargar() {
  const operaciones = await import("./operaciones.mjs");
  console.log(operaciones.sumar(10, 5)); // => 15
}

cargar();
```

## Resumen

- **Con nombre**: `export const/function …` → `import { nombre } from "…"`.
- **Por defecto**: `export default …` → `import loQueQuieras from "…"` (sin llaves).
- `as` renombra; `* as obj` importa todo en un objeto.
- `import()` carga módulos de forma dinámica y devuelve una promesa.

---

[← ¿Qué son los módulos?](./01-que-son-los-modulos.md) · [Siguiente: Ejercicios →](./03-ejercicios.md)
