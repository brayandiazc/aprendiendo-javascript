# async / await

`async` y `await` son una forma más legible de trabajar con promesas, introducida en
ES2017. Permiten escribir código asíncrono que **se lee casi como si fuera síncrono**, sin
cadenas de `.then`.

## Objetivos de aprendizaje

- Declarar funciones `async` y usar `await`.
- Manejar errores con `try`/`catch`.
- Diferenciar ejecución secuencial de paralela con `Promise.all`.

## Prerrequisitos

- [Promesas](./02-promesas.md)

## Funciones `async`

Una función declarada con `async` **siempre devuelve una promesa**. Dentro de ella puedes usar
`await` para "esperar" a que una promesa se resuelva y obtener su valor directamente.

```javascript
function esperar(ms, valor) {
  return new Promise((resolve) => setTimeout(() => resolve(valor), ms));
}

async function principal() {
  console.log("Inicio");
  const resultado = await esperar(500, "datos listos");
  console.log("Recibido:", resultado);
  console.log("Fin");
}

principal();

// => Inicio
// => Recibido: datos listos
// => Fin
```

`await` pausa **solo dentro de la función async**, no bloquea el resto del programa.

## Manejo de errores con `try`/`catch`

Donde con promesas usábamos `.catch`, con `async`/`await` usamos el familiar `try`/`catch`:

```javascript
function dividir(a, b) {
  return new Promise((resolve, reject) => {
    b === 0 ? reject(new Error("No se puede dividir entre cero")) : resolve(a / b);
  });
}

async function calcular() {
  try {
    const ok = await dividir(10, 2);
    console.log("10 / 2 =", ok);

    const malo = await dividir(5, 0);
    console.log("Esto no se ejecuta:", malo);
  } catch (error) {
    console.log("Se capturó un error:", error.message);
  }
}

calcular();

// => 10 / 2 = 5
// => Se capturó un error: No se puede dividir entre cero
```

## Secuencial vs paralelo

Si usas `await` uno tras otro, las tareas se ejecutan **en secuencia** (una espera a la
anterior). Si son independientes, es más rápido lanzarlas a la vez con `Promise.all`:

```javascript
function esperar(ms, valor) {
  return new Promise((resolve) => setTimeout(() => resolve(valor), ms));
}

async function enParalelo() {
  // Las tres se lanzan a la vez; await espera a que todas terminen.
  const [a, b, c] = await Promise.all([
    esperar(300, "A"),
    esperar(300, "B"),
    esperar(300, "C"),
  ]);
  console.log("Resultados:", a, b, c);
}

enParalelo();

// => Resultados: A B C
```

Con `Promise.all`, las tres esperas de 300 ms ocurren simultáneamente (~300 ms en total) en
lugar de sumarse (~900 ms) si las hiciéramos una por una.

## Resumen

- Una función `async` devuelve una promesa; `await` espera el valor de una promesa.
- `await` se lee como código síncrono pero no bloquea el programa.
- Los errores se manejan con `try`/`catch`.
- Usa `Promise.all` para tareas independientes y gánale tiempo a la ejecución secuencial.

---

[← Promesas](./02-promesas.md) · [Siguiente: Ejercicios →](./04-ejercicios.md)
