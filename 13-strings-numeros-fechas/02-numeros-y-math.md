# Números y Math

JavaScript tiene un único tipo numérico (`number`) y un objeto global **`Math`** con
funciones matemáticas. Aquí veremos cómo formatear números, convertir texto a número y usar
las operaciones de `Math` más comunes.

## Objetivos de aprendizaje

- Formatear y redondear números.
- Convertir texto a número y validar números.
- Usar funciones de `Math`.

## Prerrequisitos

- [Tipos de datos](../02-fundamentos/02-tipos-de-datos.md)
- [Operadores](../02-fundamentos/04-operadores.md)

## Formatear y redondear

```javascript
console.log((3.14159).toFixed(2)); // => 3.14
```

- `toFixed(decimales)` — devuelve una **cadena** con esa cantidad de decimales (útil para
  mostrar precios). Ojo: el resultado es texto, no número.

## Convertir texto a número

```javascript
console.log(parseInt("42px"));   // => 42
console.log(parseFloat("3.5kg")); // => 3.5
console.log(Number("10"));        // => 10
```

- `parseInt(texto)` — lee un entero al inicio del texto (ignora lo que sigue).
- `parseFloat(texto)` — igual pero con decimales.
- `Number(texto)` — convierte todo el texto; si no es un número válido, da `NaN`.

## Validar números

```javascript
console.log(Number.isInteger(10));   // => true
console.log(Number.isInteger(10.5)); // => false
console.log(Number.isNaN(NaN));      // => true
```

- `Number.isInteger(x)` — `true` si es un entero.
- `Number.isNaN(x)` — `true` si es exactamente `NaN` (más fiable que el `isNaN` global).

## El objeto Math

```javascript
console.log(Math.round(4.6)); // => 5
console.log(Math.floor(4.6)); // => 4
console.log(Math.ceil(4.2));  // => 5

console.log(Math.max(3, 9, 1)); // => 9
console.log(Math.min(3, 9, 1)); // => 1

console.log(Math.pow(2, 10)); // => 1024
console.log(Math.sqrt(81));   // => 9
```

- `Math.round` / `floor` / `ceil` — redondear, truncar hacia abajo, hacia arriba.
- `Math.max` / `Math.min` — mayor y menor de una lista.
- `Math.pow(base, exp)` (o el operador `**`) y `Math.sqrt` — potencia y raíz.

## Números aleatorios

`Math.random()` devuelve un decimal entre 0 (incluido) y 1 (excluido). Para un entero en un
rango se combina con `Math.floor`:

```javascript
// Entero aleatorio entre 1 y 6 (como un dado).
const dado = Math.floor(Math.random() * 6) + 1;
console.log(dado); // => un número del 1 al 6 (varía en cada ejecución)
```

> Este es uno de los pocos ejemplos cuya salida **cambia** en cada ejecución, por su
> naturaleza aleatoria.

## Resumen

- `toFixed` formatea con decimales (devuelve texto).
- `parseInt`/`parseFloat`/`Number` convierten texto a número; valida con `Number.isInteger`
  y `Number.isNaN`.
- `Math` ofrece redondeo, máximos/mínimos, potencias, raíces y aleatorios.

---

[← Métodos de String](./01-metodos-de-string.md) · [Siguiente: Fechas →](./03-fechas.md)
