# fetch

`fetch` es la función integrada del navegador (y de Node.js moderno) para hacer peticiones
HTTP. Devuelve una **promesa**, así que aquí se junta todo lo del módulo de
[asincronía](../09-asincronia/README.md).

> Los ejemplos de esta lección hacen peticiones reales a
> [JSONPlaceholder](https://jsonplaceholder.typicode.com), una API pública de prueba.
> Necesitas **conexión a internet** y un navegador o **Node.js 18 o superior** (que ya
> incluye `fetch`).

## Objetivos de aprendizaje

- Hacer una petición `GET` con `fetch` y leer la respuesta como JSON.
- Usar `fetch` con `async`/`await`.
- Comprobar si la respuesta fue exitosa (`response.ok`) y manejar errores.
- Enviar datos con una petición `POST`.

## Prerrequisitos

- [APIs y JSON](./01-apis-y-json.md)
- [async / await](../09-asincronia/03-async-await.md)

## fetch con `.then`

`fetch(url)` devuelve una promesa que se cumple con un objeto **Response**. Ese objeto no es
todavía los datos: para obtenerlos en JSON llamamos a `response.json()`, que **también**
devuelve una promesa.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((tarea) => {
    console.log(tarea.title); // => delectus aut autem
  });
```

## fetch con `async`/`await`

La misma petición con `async`/`await` se lee de forma más lineal:

```javascript
async function obtenerTarea() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const tarea = await response.json();
  console.log(tarea); // => { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
}

obtenerTarea();
```

## Comprobar la respuesta y manejar errores

Hay un detalle importante: **`fetch` solo rechaza la promesa si falla la red**. Si el
servidor responde con un error como `404` o `500`, la promesa **se cumple igual**. Por eso
hay que revisar `response.ok` (es `true` para códigos 2xx) y lanzar el error nosotros.

```javascript
async function obtenerTarea(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const tarea = await response.json();
    console.log("Título:", tarea.title);
  } catch (error) {
    console.log("Algo falló:", error.message);
  }
}

obtenerTarea(1);          // => Título: delectus aut autem
obtenerTarea(99999999);   // => Algo falló: Error HTTP: 404
```

## Enviar datos con POST

Para crear datos pasamos un segundo argumento a `fetch` con el `method`, los `headers` y el
`body` (el cuerpo se envía como texto JSON con `JSON.stringify`).

```javascript
async function crearPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Mi primer post",
      body: "Hola mundo",
      userId: 1,
    }),
  });

  const creado = await response.json();
  console.log("Creado con id:", creado.id); // => Creado con id: 101
}

crearPost();
```

> JSONPlaceholder no guarda nada de verdad: simula la creación y siempre devuelve `id: 101`.
> En una API real, ese `id` sería el del recurso recién creado.

## Resumen

- `fetch(url)` devuelve una promesa que se cumple con un objeto `Response`.
- Los datos se obtienen con `await response.json()` (o `.then`).
- `fetch` **no** rechaza ante `404`/`500`: revisa `response.ok` y lanza el error tú.
- Para enviar datos usa `method`, `headers` y un `body` con `JSON.stringify`.

---

[← APIs y JSON](./01-apis-y-json.md) · [Siguiente: Ejercicios →](./03-ejercicios.md)
