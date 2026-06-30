# Ejercicios de Fetch y APIs

Esta sección contiene ejercicios para practicar peticiones HTTP con `fetch`.

> Todos usan la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com).
> Necesitas **internet** y un navegador o **Node.js 18+**.

## Fetch y APIs

### Ejercicio 1 - Obtener un usuario

Pide el usuario con `id` 1 a `https://jsonplaceholder.typicode.com/users/1` y muestra su
nombre.

**Solución:**

```javascript
async function obtenerUsuario(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const usuario = await response.json();
  console.log(usuario.name);
}

obtenerUsuario(1); // => Leanne Graham
```

Hacemos la petición, convertimos la respuesta a objeto con `.json()` y leemos la propiedad
`name`.

**Desafío adicional:**

Muestra también el correo (`usuario.email`) en la misma línea.

### Ejercicio 2 - Contar resultados de una lista

Pide la lista de posts a `https://jsonplaceholder.typicode.com/posts` y muestra cuántos hay.

**Solución:**

```javascript
async function contarPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(`Hay ${posts.length} posts`);
}

contarPosts(); // => Hay 100 posts
```

La respuesta es un array; basta con leer su `length`. Combina lo aprendido sobre
[arrays](../05-arrays/README.md) con `fetch`.

**Desafío adicional:**

Muestra solo los posts cuyo `userId` sea 1 (pista: `posts.filter(...)`).

### Ejercicio 3 - Transformar la respuesta

Pide la lista de posts y muestra los títulos de los **tres primeros**, en mayúsculas.

**Solución:**

```javascript
async function primerosTitulos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const titulos = posts
    .slice(0, 3)
    .map((post) => post.title.toUpperCase());

  console.log(titulos);
}

primerosTitulos();
// => [
//   'SUNT AUT FACERE REPELLAT PROVIDENT OCCAECATI EXCEPTURI OPTIO REPREHENDERIT',
//   'QUI EST ESSE',
//   'EA MOLESTIAS QUASI EXERCITATIONEM REPELLAT QUI IPSA SIT AUT'
// ]
```

Recortamos con `slice` y transformamos con `map`: los datos de una API se procesan con los
mismos métodos de array que ya conoces.

**Desafío adicional:**

Ordena los títulos alfabéticamente antes de mostrarlos.

### Ejercicio 4 - Manejar un error HTTP

Pide una tarea que no existe y maneja el error comprobando `response.ok`.

**Solución:**

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
    console.log("No se pudo obtener la tarea:", error.message);
  }
}

obtenerTarea(99999999); // => No se pudo obtener la tarea: Error HTTP: 404
```

Como `fetch` no rechaza ante un `404`, comprobamos `response.ok` y lanzamos el error nosotros
para que lo capture el `catch`.

**Desafío adicional:**

Llama también a `obtenerTarea(1)` y comprueba que en ese caso sí muestra el título.

### Ejercicio 5 - Crear un recurso con POST

Envía un nuevo post con `title`, `body` y `userId` a la API y muestra el `id` que devuelve.

**Solución:**

```javascript
async function crearPost(datos) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  const creado = await response.json();
  console.log("Post creado con id:", creado.id);
}

crearPost({ title: "Hola", body: "Mi primer post", userId: 1 });
// => Post creado con id: 101
```

Configuramos `method`, `headers` y un `body` en formato JSON. JSONPlaceholder simula la
creación y siempre responde con `id: 101`.

**Desafío adicional:**

Muestra el objeto completo que devuelve la API, no solo el `id`.

---

[← fetch](./02-fetch.md) · [Volver al módulo](./README.md)
