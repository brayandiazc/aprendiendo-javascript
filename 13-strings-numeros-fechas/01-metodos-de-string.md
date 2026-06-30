# Métodos de String

Las cadenas de texto (*strings*) son uno de los tipos con los que más se trabaja. JavaScript
trae muchos **métodos** integrados para inspeccionarlas y transformarlas. Recuerda que los
strings son **inmutables**: estos métodos **devuelven uno nuevo**, no modifican el original.

## Objetivos de aprendizaje

- Inspeccionar cadenas (longitud, búsqueda).
- Extraer y transformar partes de una cadena.
- Dividir y unir cadenas.

## Prerrequisitos

- [Tipos de datos](../02-fundamentos/02-tipos-de-datos.md)
- [String templates](../06-objetos-y-clases/03-string-templates.md)

## Longitud y búsqueda

```javascript
const texto = "Hola, mundo";

console.log(texto.length);            // => 11
console.log(texto.toUpperCase());     // => HOLA, MUNDO
console.log(texto.includes("mundo")); // => true
console.log(texto.indexOf("mundo"));  // => 6
```

- `length` — cantidad de caracteres (es una propiedad, no un método).
- `toUpperCase()` / `toLowerCase()` — cambian mayúsculas/minúsculas.
- `includes(sub)` — `true` si contiene la subcadena.
- `indexOf(sub)` — posición de la subcadena (o `-1` si no está).

## Extraer partes

```javascript
const texto = "Hola, mundo";

console.log(texto.slice(0, 4)); // => Hola
console.log("  hola  ".trim()); // => hola
console.log("ab".repeat(3));    // => ababab
```

- `slice(inicio, fin)` — extrae desde `inicio` hasta antes de `fin`.
- `trim()` — quita espacios al principio y al final.
- `repeat(n)` — repite la cadena `n` veces.

## Reemplazar

```javascript
console.log("a-b-c".replaceAll("-", "/")); // => a/b/c
```

- `replace(buscar, nuevo)` — reemplaza la **primera** coincidencia.
- `replaceAll(buscar, nuevo)` — reemplaza **todas** las coincidencias.

## Dividir y rellenar

```javascript
console.log("rojo,verde,azul".split(",")); // => [ 'rojo', 'verde', 'azul' ]
console.log(String(5).padStart(3, "0"));   // => 005
```

- `split(separador)` — convierte la cadena en un **array** cortando por el separador.
- `padStart(largo, relleno)` — rellena al inicio hasta alcanzar el largo (útil para ceros).

> El opuesto de `split` es `array.join(separador)`, que une un array en una cadena (lo viste
> en el módulo de [arrays](../05-arrays/README.md)).

## Resumen

- Los strings son inmutables: sus métodos devuelven una cadena nueva.
- Inspecciona con `length`, `includes`, `indexOf`.
- Transforma con `slice`, `trim`, `repeat`, `replace`/`replaceAll`, `padStart`.
- `split` pasa de cadena a array; `join`, de array a cadena.

---

[Siguiente: Números y Math →](./02-numeros-y-math.md)
