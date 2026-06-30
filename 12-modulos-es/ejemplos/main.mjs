// main.mjs — un módulo que IMPORTA desde operaciones.mjs.
// Ejecuta este archivo con:  node main.mjs

// El default se importa sin llaves (con el nombre que quieras);
// las exportaciones con nombre van entre llaves.
import saludar, { PI, sumar, restar } from "./operaciones.mjs";

console.log(saludar("Ada"));
console.log("PI:", PI);
console.log("2 + 3 =", sumar(2, 3));
console.log("5 - 1 =", restar(5, 1));
