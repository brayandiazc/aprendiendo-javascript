# Ejercicios de Módulos ES

Esta sección contiene ejercicios para practicar `export` e `import`.

> Cada ejercicio usa **dos archivos**. Guárdalos con extensión `.mjs` en la misma carpeta y
> ejecuta el principal con `node main.mjs`.

## Módulos ES

### Ejercicio 1 - Exportaciones con nombre

Crea un módulo `figuras.mjs` que exporte dos funciones: `areaCuadrado(lado)` y
`areaRectangulo(base, altura)`. Impórtalas en `main.mjs` y úsalas.

**Solución:**

```javascript
// figuras.mjs
export function areaCuadrado(lado) {
  return lado * lado;
}

export function areaRectangulo(base, altura) {
  return base * altura;
}
```

```javascript
// main.mjs
import { areaCuadrado, areaRectangulo } from "./figuras.mjs";

console.log(areaCuadrado(4));        // => 16
console.log(areaRectangulo(3, 5));   // => 15
```

Cada función se exporta con su nombre y se importa entre llaves usando ese mismo nombre.

**Desafío adicional:**

Añade y exporta una constante `VERSION` y muéstrala desde `main.mjs`.

### Ejercicio 2 - Exportación por defecto

Crea un módulo `saludo.mjs` con una **exportación por defecto**: una función que reciba un
nombre y devuelva `"¡Bienvenida, <nombre>!"`. Impórtala con el nombre que prefieras.

**Solución:**

```javascript
// saludo.mjs
export default function bienvenida(nombre) {
  return `¡Bienvenida, ${nombre}!`;
}
```

```javascript
// main.mjs
import saludar from "./saludo.mjs"; // sin llaves, nombre libre

console.log(saludar("Grace")); // => ¡Bienvenida, Grace!
```

La exportación por defecto se importa sin llaves y puedes nombrarla como quieras (`saludar`).

**Desafío adicional:**

Añade además una exportación con nombre `IDIOMA = "es"` y muéstrala junto al saludo.

### Ejercicio 3 - Renombrar e importar todo

Reutiliza `figuras.mjs` del ejercicio 1. En `main.mjs`, importa **todo** el módulo en un
objeto llamado `figuras` y usa sus funciones.

**Solución:**

```javascript
// main.mjs
import * as figuras from "./figuras.mjs";

console.log(figuras.areaCuadrado(2));      // => 4
console.log(figuras.areaRectangulo(2, 6)); // => 12
```

`import * as figuras` agrupa todas las exportaciones con nombre dentro del objeto `figuras`,
al que accedes con punto.

**Desafío adicional:**

Importa solo `areaCuadrado` pero renómbrala a `cuadrado` con `as`.

### Ejercicio 4 - Importación dinámica

Carga `figuras.mjs` de forma **dinámica** dentro de una función `async` y usa una de sus
funciones.

**Solución:**

```javascript
// main.mjs
async function calcular() {
  const figuras = await import("./figuras.mjs");
  console.log(figuras.areaCuadrado(5)); // => 25
}

calcular();
```

`import()` como función devuelve una promesa que se resuelve con el módulo; con `await`
obtenemos sus exportaciones solo cuando hacen falta.

**Desafío adicional:**

Muestra un mensaje `"Módulo cargado"` justo antes de usar la función.

---

[← export e import](./02-export-e-import.md) · [Volver al módulo](./README.md)
