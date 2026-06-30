// Buscador de usuarios
// Integra DOM (módulo 08), fetch/APIs (módulo 10) y manejo de errores (módulo 11).
// Consume la API pública JSONPlaceholder: https://jsonplaceholder.typicode.com/users

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Referencias a los elementos del DOM.
const buscador = document.getElementById("buscador");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

// Aquí guardamos los usuarios una vez descargados, para filtrarlos sin volver a pedirlos.
let usuarios = [];

// Pide los usuarios a la API. Lanza un error si la respuesta no es correcta.
async function cargarUsuarios() {
  const respuesta = await fetch(API_URL);
  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`);
  }
  return respuesta.json();
}

// Dibuja una lista de usuarios en el DOM.
function mostrar(lista_usuarios) {
  lista.innerHTML = "";

  if (lista_usuarios.length === 0) {
    estado.textContent = "No se encontraron usuarios.";
    return;
  }

  estado.textContent = `${lista_usuarios.length} usuario(s)`;

  for (const usuario of lista_usuarios) {
    const item = document.createElement("li");

    const nombre = document.createElement("strong");
    nombre.textContent = usuario.name;

    const correo = document.createElement("span");
    correo.textContent = ` · ${usuario.email}`;

    item.appendChild(nombre);
    item.appendChild(correo);
    lista.appendChild(item);
  }
}

// Filtra por nombre (sin distinguir mayúsculas) y vuelve a mostrar.
function filtrar(texto) {
  const termino = texto.trim().toLowerCase();
  const filtrados = usuarios.filter((u) => u.name.toLowerCase().includes(termino));
  mostrar(filtrados);
}

// Punto de entrada: descarga inicial con estados de carga y error.
async function iniciar() {
  estado.textContent = "Cargando…";
  try {
    usuarios = await cargarUsuarios();
    mostrar(usuarios);
  } catch (error) {
    estado.textContent = `No se pudieron cargar los usuarios (${error.message}).`;
  }
}

// Reaccionamos a cada tecla en el buscador.
buscador.addEventListener("input", (evento) => filtrar(evento.target.value));

iniciar();
