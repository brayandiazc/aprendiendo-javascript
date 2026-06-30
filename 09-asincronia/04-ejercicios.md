# Ejercicios de Asincronía

Esta sección contiene ejercicios para practicar los conceptos del módulo: callbacks,
promesas y `async`/`await`.

## Asincronía

Los ejercicios usan `setTimeout` para simular tareas que tardan, sin necesidad de conexión a
internet.

### Ejercicio 1 - Un callback con setTimeout

Crea una función `saludarDespues` que reciba un `nombre` y un callback, y que tras medio
segundo llame al callback con el saludo `"Hola, <nombre>"`.

**Solución:**

```javascript
function saludarDespues(nombre, callback) {
  setTimeout(() => {
    callback(`Hola, ${nombre}`);
  }, 500);
}

saludarDespues("Ada", (mensaje) => {
  console.log(mensaje);
});

// => Hola, Ada
```

Usamos `setTimeout` para agendar la ejecución y, cuando se cumple el tiempo, llamamos al
`callback` pasándole el saludo ya armado.

**Desafío adicional:**

Permite que el tiempo de espera sea un tercer parámetro de la función.

### Ejercicio 2 - Convertir un callback en promesa

Reescribe el ejercicio anterior para que `saludarDespues` **devuelva una promesa** que se
cumpla con el saludo, en lugar de recibir un callback.

**Solución:**

```javascript
function saludarDespues(nombre) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Hola, ${nombre}`), 500);
  });
}

saludarDespues("Linus").then((mensaje) => {
  console.log(mensaje);
});

// => Hola, Linus
```

La función crea y devuelve una `Promise`; cuando el temporizador termina, `resolve` cumple la
promesa con el saludo, que recibimos en el `.then`.

**Desafío adicional:**

Añade un `.finally` que imprima `"Listo"` después del saludo.

### Ejercicio 3 - Encadenar promesas

Partiendo de un número, crea una cadena de promesas que le sume 10, luego lo duplique y
finalmente muestre el resultado.

**Solución:**

```javascript
Promise.resolve(5)
  .then((n) => n + 10)
  .then((n) => n * 2)
  .then((resultado) => console.log("Resultado:", resultado));

// => Resultado: 30
```

Cada `.then` recibe lo que devolvió el anterior, lo que permite transformar el valor paso a
paso sin anidar funciones.

**Desafío adicional:**

Inserta un paso intermedio que rechace la promesa si el número supera 100 y captúralo con
`.catch`.

### Ejercicio 4 - async / await con manejo de errores

Crea una función `obtenerUsuario` que devuelva una promesa: si el `id` es positivo, se cumple
con un objeto de usuario; si no, se rechaza con un error. Luego consúmela con `async`/`await`
y `try`/`catch`.

**Solución:**

```javascript
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nombre: "Grace" });
      } else {
        reject(new Error("id inválido"));
      }
    }, 300);
  });
}

async function mostrarUsuario(id) {
  try {
    const usuario = await obtenerUsuario(id);
    console.log("Usuario:", usuario.nombre);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

mostrarUsuario(1);
mostrarUsuario(-5);

// => Usuario: Grace
// => Error: id inválido
```

`await` espera el resultado de la promesa dentro de la función `async`; si la promesa se
rechaza, el control salta al `catch`.

**Desafío adicional:**

Modifica `mostrarUsuario` para que devuelva el nombre en vez de imprimirlo, y muéstralo desde
fuera con otro `await`.

### Ejercicio 5 - Tareas en paralelo

Tienes tres tareas independientes que tardan distinto. Lánzalas **a la vez** y muestra todos
los resultados cuando terminen.

**Solución:**

```javascript
function tarea(nombre, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${nombre} (${ms}ms)`), ms);
  });
}

async function ejecutarTodas() {
  const resultados = await Promise.all([
    tarea("A", 300),
    tarea("B", 100),
    tarea("C", 200),
  ]);
  console.log("Resultados:", resultados);
}

ejecutarTodas();

// => Resultados: [ 'A (300ms)', 'B (100ms)', 'C (200ms)' ]
```

`Promise.all` lanza las tres tareas a la vez y espera a que todas se cumplan. El array de
resultados conserva el **orden de las promesas**, no el orden en que terminaron.

**Desafío adicional:**

Cambia una de las tareas para que se rechace y observa cómo `Promise.all` rechaza todo;
captúralo con `try`/`catch`.

---

[← async / await](./03-async-await.md) · [Volver al módulo](./README.md)
