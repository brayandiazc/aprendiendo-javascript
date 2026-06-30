# Promesas

Una **Promesa** (`Promise`) es un objeto que representa el resultado **futuro** de una
operación asíncrona. En lugar de pasar un callback, una función te **devuelve una promesa** a
la que le "enganchas" qué hacer cuando se resuelva (o falle). Esto evita el *callback hell* y
hace el manejo de errores mucho más claro.

## Objetivos de aprendizaje

- Entender los tres estados de una promesa.
- Usar `.then`, `.catch` y `.finally`.
- Crear una promesa y encadenar varias.
- Conocer `Promise.all` y `Promise.race`.

## Prerrequisitos

- [Callbacks y código asíncrono](./01-callbacks.md)

## Los tres estados de una promesa

Una promesa siempre está en uno de estos estados:

- **Pendiente** (*pending*): aún no terminó.
- **Cumplida** (*fulfilled*): terminó con éxito y tiene un valor.
- **Rechazada** (*rejected*): falló y tiene un motivo (un error).

Una vez que pasa de pendiente a cumplida o rechazada, ya no cambia.

## Consumir una promesa: `.then` y `.catch`

`.then` recibe el valor cuando la promesa se cumple; `.catch` recibe el error si se rechaza;
`.finally` se ejecuta siempre al final.

```javascript
// Promise.resolve crea una promesa ya cumplida con un valor.
Promise.resolve("¡Hola!")
  .then((valor) => {
    console.log("Cumplida con:", valor);
  })
  .catch((error) => {
    console.log("Falló con:", error);
  })
  .finally(() => {
    console.log("Terminó (pase lo que pase)");
  });

// => Cumplida con: ¡Hola!
// => Terminó (pase lo que pase)
```

## Crear una promesa

Para crear una promesa usamos `new Promise`, que recibe una función con dos parámetros:
`resolve` (para cumplirla) y `reject` (para rechazarla).

```javascript
function esperar(ms, valor) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor), ms);
  });
}

esperar(500, "listo").then((valor) => {
  console.log("Resultado:", valor);
});

// => Resultado: listo
```

Un ejemplo que puede fallar, según una condición:

```javascript
function dividir(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("No se puede dividir entre cero"));
    } else {
      resolve(a / b);
    }
  });
}

dividir(10, 2)
  .then((resultado) => console.log("Resultado:", resultado))
  .catch((error) => console.log("Error:", error.message));

// => Resultado: 5
```

## Encadenar promesas

Lo que devuelves dentro de un `.then` se convierte en el valor del siguiente `.then`. Así se
encadenan pasos **sin anidar**, a diferencia del callback hell:

```javascript
Promise.resolve(2)
  .then((n) => n + 3)
  .then((n) => n * 10)
  .then((n) => console.log("Resultado final:", n));

// => Resultado final: 50
```

## Varias promesas a la vez

- **`Promise.all`** espera a que **todas** se cumplan y devuelve un array con sus valores (si
  una falla, rechaza todo).
- **`Promise.race`** se resuelve con la **primera** que termine.

```javascript
const p1 = Promise.resolve("a");
const p2 = Promise.resolve("b");
const p3 = Promise.resolve("c");

Promise.all([p1, p2, p3]).then((valores) => {
  console.log("Todas:", valores);
});

// => Todas: [ 'a', 'b', 'c' ]
```

## Resumen

- Una **promesa** representa un resultado futuro: pendiente → cumplida o rechazada.
- Se consume con `.then` (éxito), `.catch` (error) y `.finally` (siempre).
- Encadenar `.then` evita el anidamiento de los callbacks.
- `Promise.all` espera a todas; `Promise.race`, a la primera.
- En la siguiente lección veremos `async`/`await`, una sintaxis aún más legible sobre promesas.

---

[← Callbacks](./01-callbacks.md) · [Siguiente: async / await →](./03-async-await.md)
