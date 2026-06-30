// Soluciones — Ejercicios de String, Number y fechas (módulo 13)
// Ejecuta:  node soluciones/13-strings-numeros-fechas.js

// Ejercicio 1 - Capitalizar una palabra
function capitalizar(palabra) {
  return palabra[0].toUpperCase() + palabra.slice(1);
}
console.log("Ej1:", capitalizar("hola"), capitalizar("javascript"));

// Ejercicio 2 - Contar palabras
function contarPalabras(frase) {
  return frase.trim().split(" ").length;
}
console.log("Ej2:", contarPalabras("hola mundo cruel"), contarPalabras("una"));

// Ejercicio 3 - Formatear un precio
function formatearPrecio(numero) {
  return "$" + numero.toFixed(2);
}
console.log("Ej3:", formatearPrecio(3.5), formatearPrecio(10));

// Ejercicio 4 - El mayor de una lista
function mayor(numeros) {
  return Math.max(...numeros);
}
console.log("Ej4:", mayor([3, 9, 1, 7]));

// Ejercicio 5 - Días entre dos fechas
function diasEntre(inicioISO, finISO) {
  return (new Date(finISO) - new Date(inicioISO)) / (1000 * 60 * 60 * 24);
}
console.log("Ej5:", diasEntre("2024-01-15T00:00:00Z", "2024-01-20T00:00:00Z"));
