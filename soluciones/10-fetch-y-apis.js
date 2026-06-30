// Soluciones — Ejercicios de Fetch y APIs (módulo 10)
// Requiere internet y Node.js 18+ (fetch global).
// Ejecuta:  node soluciones/10-fetch-y-apis.js

const BASE = "https://jsonplaceholder.typicode.com";

// Ejercicio 1 - Obtener un usuario
async function obtenerUsuario(id) {
  const r = await fetch(`${BASE}/users/${id}`);
  const u = await r.json();
  console.log("Ej1:", u.name);
}

// Ejercicio 2 - Contar resultados de una lista
async function contarPosts() {
  const r = await fetch(`${BASE}/posts`);
  const posts = await r.json();
  console.log("Ej2:", `Hay ${posts.length} posts`);
}

// Ejercicio 3 - Transformar la respuesta
async function primerosTitulos() {
  const r = await fetch(`${BASE}/posts`);
  const posts = await r.json();
  console.log("Ej3:", posts.slice(0, 3).map((p) => p.title.toUpperCase()));
}

// Ejercicio 4 - Manejar un error HTTP
async function obtenerTarea(id) {
  try {
    const r = await fetch(`${BASE}/todos/${id}`);
    if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);
    const t = await r.json();
    console.log("Ej4:", "Título:", t.title);
  } catch (e) {
    console.log("Ej4:", "No se pudo obtener la tarea:", e.message);
  }
}

// Ejercicio 5 - Crear un recurso con POST
async function crearPost(datos) {
  const r = await fetch(`${BASE}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  const creado = await r.json();
  console.log("Ej5:", "Post creado con id:", creado.id);
}

async function main() {
  await obtenerUsuario(1);
  await contarPosts();
  await primerosTitulos();
  await obtenerTarea(99999999);
  await crearPost({ title: "Hola", body: "Mi primer post", userId: 1 });
}

main();
