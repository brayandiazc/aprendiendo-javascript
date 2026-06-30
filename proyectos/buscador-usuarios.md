# Proyecto: Buscador de usuarios

Una pequeña aplicación que **descarga usuarios de una API** y permite **filtrarlos por
nombre** en tiempo real. Es el proyecto integrador del curso: combina lo aprendido en los
módulos de DOM, asincronía, fetch y manejo de errores.

## Qué integra

- **[DOM y eventos](../08-dom/README.md)** — seleccionar elementos, crear nodos, escuchar el
  evento `input`.
- **[Asincronía](../09-asincronia/README.md)** y **[Fetch y APIs](../10-fetch-y-apis/README.md)**
  — pedir datos con `fetch` y `async`/`await`.
- **[Manejo de errores](../11-manejo-de-errores/README.md)** — comprobar `response.ok` y
  mostrar un mensaje si la descarga falla.
- **[String, Number y fechas](../13-strings-numeros-fechas/README.md)** — `toLowerCase` e
  `includes` para el filtro.

## Cómo ejecutarlo

Abre [`buscador-usuarios/index.html`](./buscador-usuarios/index.html) en tu navegador (doble
clic). Necesitas **conexión a internet**: los datos vienen de la API pública
[JSONPlaceholder](https://jsonplaceholder.typicode.com/users).

## Cómo funciona

El código está en [`buscador-usuarios/app.js`](./buscador-usuarios/app.js), comentado paso a
paso. La idea general:

1. **Estado de carga.** Al abrir, muestra "Cargando…".
2. **Descarga.** `cargarUsuarios()` hace `fetch` a la API; si `response.ok` es `false`, lanza
   un error.
3. **Render.** `mostrar()` crea un `<li>` por usuario con su nombre y correo.
4. **Filtro.** Cada vez que escribes (evento `input`), `filtrar()` deja solo los usuarios cuyo
   nombre **incluye** el texto, sin volver a pedir los datos.
5. **Manejo de errores.** Si la descarga falla, se muestra un mensaje en vez de romperse.

## Retos para practicar

- Muestra también la **empresa** de cada usuario (`usuario.company.name`).
- Añade un botón **"Reintentar"** que vuelva a llamar a `iniciar()` si hubo un error.
- Ordena los resultados **alfabéticamente** por nombre antes de mostrarlos.
- Resalta en negrita la parte del nombre que coincide con la búsqueda.
- Cambia la API por otra pública y adapta el render a sus datos.

---

[← Conversor de monedas](./conversor-monedas.md) · [Volver a Proyectos](./README.md)
