// Soluciones — Ejercicios de Manejo de errores (módulo 11)
// Ejecuta:  node soluciones/11-manejo-de-errores.js

// Ejercicio 1 - Capturar un JSON inválido
function parsearSeguro(texto) {
  try {
    return JSON.parse(texto);
  } catch (error) {
    return null;
  }
}
console.log("Ej1:", parsearSeguro('{"ok":true}'), parsearSeguro("no json"));

// Ejercicio 2 - Usar finally
function usarRecurso(valor) {
  try {
    console.log("Ej2:", "Usando:", valor.toUpperCase());
  } catch (error) {
    console.log("Ej2:", "Error al usar el recurso");
  } finally {
    console.log("Ej2:", "Recurso cerrado");
  }
}
usarRecurso("dato");
usarRecurso(null);

// Ejercicio 3 - Lanzar un error de validación
function dividir(a, b) {
  if (b === 0) throw new Error("No se puede dividir entre cero");
  return a / b;
}
try {
  console.log("Ej3:", dividir(10, 2));
  console.log("Ej3:", dividir(10, 0));
} catch (error) {
  console.log("Ej3:", "Error:", error.message);
}

// Ejercicio 4 - Error personalizado con instanceof
class ErrorDeSaldo extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorDeSaldo";
  }
}
function retirar(saldo, monto) {
  if (monto > saldo) throw new ErrorDeSaldo("Fondos insuficientes");
  return saldo - monto;
}
try {
  console.log("Ej4:", retirar(100, 30));
  console.log("Ej4:", retirar(100, 200));
} catch (error) {
  if (error instanceof ErrorDeSaldo) console.log("Ej4:", "Saldo:", error.message);
  else console.log("Ej4:", "Otro error:", error.message);
}

// Ejercicio 5 - Errores con async / await
function obtenerDato(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) reject(new Error("id inválido"));
      else resolve(`dato-${id}`);
    }, 100);
  });
}
async function mostrar(id) {
  try {
    const dato = await obtenerDato(id);
    console.log("Ej5:", "Obtenido:", dato);
  } catch (error) {
    console.log("Ej5:", "Error:", error.message);
  }
}
mostrar(5);
mostrar(-1);
