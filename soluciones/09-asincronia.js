// Soluciones — Ejercicios de Asincronía (módulo 09)
// Ejecuta:  node soluciones/09-asincronia.js

// Ejercicio 1 - Un callback con setTimeout
function saludarDespuesCb(nombre, callback) {
  setTimeout(() => callback(`Hola, ${nombre}`), 200);
}
saludarDespuesCb("Ada", (m) => console.log("Ej1:", m));

// Ejercicio 2 - Convertir un callback en promesa
function saludarDespues(nombre) {
  return new Promise((resolve) => setTimeout(() => resolve(`Hola, ${nombre}`), 200));
}
saludarDespues("Linus").then((m) => console.log("Ej2:", m));

// Ejercicio 3 - Encadenar promesas
Promise.resolve(5)
  .then((n) => n + 10)
  .then((n) => n * 2)
  .then((r) => console.log("Ej3:", r));

// Ejercicio 4 - async / await con manejo de errores
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, nombre: "Grace" });
      else reject(new Error("id inválido"));
    }, 100);
  });
}
async function mostrarUsuario(id) {
  try {
    const u = await obtenerUsuario(id);
    console.log("Ej4:", "Usuario:", u.nombre);
  } catch (e) {
    console.log("Ej4:", "Error:", e.message);
  }
}
mostrarUsuario(1);
mostrarUsuario(-5);

// Ejercicio 5 - Tareas en paralelo
function tarea(nombre, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(`${nombre} (${ms}ms)`), ms));
}
async function ejecutarTodas() {
  const r = await Promise.all([tarea("A", 300), tarea("B", 100), tarea("C", 200)]);
  console.log("Ej5:", r);
}
ejecutarTodas();
