# Ejercicios de String, Number y fechas

Esta sección contiene ejercicios para practicar los métodos de cadenas, los números/`Math` y
las fechas.

## String, Number y fechas

### Ejercicio 1 - Capitalizar una palabra

Crea una función `capitalizar` que reciba una palabra y devuelva esa palabra con la primera
letra en mayúscula.

**Solución:**

```javascript
function capitalizar(palabra) {
  return palabra[0].toUpperCase() + palabra.slice(1);
}

console.log(capitalizar("hola")); // => Hola
console.log(capitalizar("javascript")); // => Javascript
```

Tomamos la primera letra con `palabra[0]`, la pasamos a mayúscula y le pegamos el resto con
`slice(1)`.

**Desafío adicional:**

Haz que también convierta el resto de la palabra a minúsculas (para entradas como `"hOLA"`).

### Ejercicio 2 - Contar palabras

Crea una función `contarPalabras` que reciba una frase y devuelva cuántas palabras tiene.

**Solución:**

```javascript
function contarPalabras(frase) {
  return frase.trim().split(" ").length;
}

console.log(contarPalabras("hola mundo cruel")); // => 3
console.log(contarPalabras("una")); // => 1
```

`split(" ")` divide la frase en un array por los espacios; su `length` es el número de
palabras. Usamos `trim()` para evitar contar espacios sobrantes en los extremos.

**Desafío adicional:**

Haz que funcione aunque haya **varios espacios** seguidos entre palabras.

### Ejercicio 3 - Formatear un precio

Crea una función `formatearPrecio` que reciba un número y lo devuelva como texto con el
símbolo `$` y siempre dos decimales.

**Solución:**

```javascript
function formatearPrecio(numero) {
  return "$" + numero.toFixed(2);
}

console.log(formatearPrecio(3.5));   // => $3.50
console.log(formatearPrecio(10));    // => $10.00
```

`toFixed(2)` fuerza dos decimales y devuelve una cadena, a la que anteponemos el símbolo.

**Desafío adicional:**

Devuelve `"Gratis"` si el número es `0`.

### Ejercicio 4 - El mayor de una lista

Crea una función `mayor` que reciba un array de números y devuelva el más grande, usando
`Math.max`.

**Solución:**

```javascript
function mayor(numeros) {
  return Math.max(...numeros);
}

console.log(mayor([3, 9, 1, 7])); // => 9
```

`Math.max` recibe varios argumentos; con el operador *spread* (`...`) "desempacamos" el array
en argumentos individuales.

**Desafío adicional:**

Devuelve `null` si el array está vacío (en vez de `-Infinity`).

### Ejercicio 5 - Días entre dos fechas

Crea una función `diasEntre` que reciba dos fechas (textos ISO) y devuelva cuántos días hay
entre ellas.

**Solución:**

```javascript
function diasEntre(inicioISO, finISO) {
  const inicio = new Date(inicioISO);
  const fin = new Date(finISO);
  const ms = fin - inicio;
  return ms / (1000 * 60 * 60 * 24);
}

console.log(diasEntre("2024-01-15T00:00:00Z", "2024-01-20T00:00:00Z")); // => 5
```

Restamos las dos fechas (que se convierten a milisegundos) y dividimos entre los milisegundos
que tiene un día.

**Desafío adicional:**

Usa `Math.abs` para que el resultado sea positivo aunque las fechas se pasen en orden inverso.

---

[← Fechas](./03-fechas.md) · [Volver al módulo](./README.md)
