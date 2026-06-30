# Errores en código asíncrono

Los errores en tareas asíncronas no se capturan igual que los síncronos: cuando algo falla
"más tarde", un `try`/`catch` normal alrededor de la llamada no lo atrapa. Esta lección une el
manejo de errores con lo aprendido en [Asincronía](../09-asincronia/README.md).

## Objetivos de aprendizaje

- Manejar el rechazo de una promesa con `.catch`.
- Capturar errores asíncronos con `async`/`await` y `try`/`catch`.
- Entender por qué un `try`/`catch` síncrono no atrapa un error de `setTimeout`.

## Prerrequisitos

- [Promesas](../09-asincronia/02-promesas.md)
- [async / await](../09-asincronia/03-async-await.md)
- [Lanzar y crear errores](./02-lanzar-y-crear-errores.md)

## Promesas rechazadas: `.catch`

Cuando una promesa se **rechaza**, el error se maneja con `.catch`, no con `try`/`catch`:

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

dividir(10, 0)
  .then((resultado) => console.log("Resultado:", resultado))
  .catch((error) => console.log("Capturado:", error.message));

// => Capturado: No se puede dividir entre cero
```

## Con `async` / `await`: `try` / `catch`

Dentro de una función `async`, `await` "convierte" un rechazo en una excepción que sí puedes
capturar con `try`/`catch` normal:

```javascript
function dividir(a, b) {
  return new Promise((resolve, reject) => {
    b === 0 ? reject(new Error("No se puede dividir entre cero")) : resolve(a / b);
  });
}

async function calcular() {
  try {
    const r = await dividir(10, 0);
    console.log("Resultado:", r);
  } catch (error) {
    console.log("Capturado:", error.message);
  }
}

calcular();

// => Capturado: No se puede dividir entre cero
```

## El error clásico: `try`/`catch` y `setTimeout`

Un `try`/`catch` solo atrapa lo que falla **mientras se ejecuta** su bloque. Si el error
ocurre dentro de un callback que se ejecuta más tarde (como en `setTimeout`), el `try` ya
terminó y **no** lo captura:

```javascript
try {
  setTimeout(() => {
    throw new Error("¡Fallo tardío!");
  }, 100);
} catch (error) {
  // Esto NUNCA se ejecuta: el try ya terminó cuando el error ocurre.
  console.log("Capturado:", error.message);
}

console.log("El try ya terminó");

// => El try ya terminó
// (y luego el error queda sin capturar)
```

La solución es manejar el error **dentro** del propio callback, o usar promesas/`async`-`await`
que sí propagan el error correctamente.

## Resumen

- Una promesa rechazada se maneja con `.catch`.
- Con `async`/`await`, `await` convierte el rechazo en una excepción capturable con `try`/`catch`.
- Un `try`/`catch` síncrono **no** atrapa errores que ocurren más tarde (p. ej. en `setTimeout`):
  manéjalos dentro del callback o con promesas.

---

[← Lanzar y crear errores](./02-lanzar-y-crear-errores.md) · [Siguiente: Ejercicios →](./04-ejercicios.md)
