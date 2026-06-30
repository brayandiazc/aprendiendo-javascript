# Lanzar y crear errores

No solo capturamos errores: también podemos **lanzarlos** nosotros cuando detectamos una
situación inválida. Lanzar un error a tiempo deja claro qué salió mal y permite que quien usa
nuestra función lo maneje.

## Objetivos de aprendizaje

- Lanzar errores con `throw`.
- Conocer los tipos de error integrados (`TypeError`, `RangeError`, etc.).
- Crear tu propia clase de error.

## Prerrequisitos

- [try / catch / finally](./01-try-catch.md)
- [Clases](../06-objetos-y-clases/08-clases.md)

## Lanzar con `throw`

`throw` interrumpe la ejecución y "lanza" un valor (lo idiomático es lanzar un objeto
`Error`). Quien llame a la función puede capturarlo con `try`/`catch`.

```javascript
function raizCuadrada(numero) {
  if (numero < 0) {
    throw new Error("No existe la raíz cuadrada de un número negativo");
  }
  return Math.sqrt(numero);
}

try {
  console.log(raizCuadrada(16)); // => 4
  console.log(raizCuadrada(-9)); // lanza el error
} catch (error) {
  console.log("Error:", error.message);
}

// => 4
// => Error: No existe la raíz cuadrada de un número negativo
```

> Lanza siempre un objeto `Error` (o derivado), no un texto. `throw "algo"` funciona, pero
> pierdes `name`, `message` y la traza del error.

## Tipos de error integrados

JavaScript trae varios tipos de error para situaciones comunes. Todos heredan de `Error`:

- **`TypeError`** — un valor no es del tipo esperado (p. ej. llamar algo que no es función).
- **`RangeError`** — un número fuera del rango permitido.
- **`SyntaxError`** — código mal escrito (lo lanza el propio motor).
- **`ReferenceError`** — usar una variable que no existe.

Puedes lanzar el más adecuado para dar más información:

```javascript
function repetir(texto, veces) {
  if (typeof texto !== "string") {
    throw new TypeError("El primer argumento debe ser un texto");
  }
  if (veces < 0) {
    throw new RangeError("El número de veces no puede ser negativo");
  }
  return texto.repeat(veces);
}

try {
  console.log(repetir("ab", 3)); // => ababab
  repetir("ab", -1);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// => ababab
// => RangeError: El número de veces no puede ser negativo
```

## Crear tu propia clase de error

Para errores específicos de tu programa, puedes crear una clase que **extienda** `Error`.
Esto permite distinguirlos con `instanceof`.

```javascript
class ErrorDeValidacion extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorDeValidacion";
  }
}

function registrar(edad) {
  if (edad < 18) {
    throw new ErrorDeValidacion("Debes ser mayor de edad");
  }
  return "Registro exitoso";
}

try {
  registrar(15);
} catch (error) {
  if (error instanceof ErrorDeValidacion) {
    console.log("Validación falló:", error.message);
  } else {
    console.log("Otro error:", error.message);
  }
}

// => Validación falló: Debes ser mayor de edad
```

Llamamos a `super(mensaje)` para reutilizar el constructor de `Error` y ajustamos `name`. Así
`error.name` será `"ErrorDeValidacion"` y `instanceof` nos deja reaccionar distinto según el
tipo.

## Resumen

- `throw` lanza un error; lo idiomático es lanzar un objeto `Error`.
- Hay tipos integrados (`TypeError`, `RangeError`…) para describir mejor el fallo.
- Puedes crear errores propios extendiendo `Error` y distinguirlos con `instanceof`.
- En la siguiente lección veremos cómo se manejan los errores en código **asíncrono**.

---

[← try / catch / finally](./01-try-catch.md) · [Siguiente: Errores en código asíncrono →](./03-errores-en-asincronia.md)
