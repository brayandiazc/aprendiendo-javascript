// Soluciones — Ejercicios de Módulos ES (módulo 12)
// Ejecuta:  node soluciones/12-modulos-es/main.mjs

// Ejercicio 1 - Exportaciones con nombre
import { areaCuadrado, areaRectangulo } from "./figuras.mjs";
console.log("Ej1:", areaCuadrado(4), areaRectangulo(3, 5));

// Ejercicio 2 - Exportación por defecto
import saludar from "./saludo.mjs";
console.log("Ej2:", saludar("Grace"));

// Ejercicio 3 - Importar todo
import * as figuras from "./figuras.mjs";
console.log("Ej3:", figuras.areaCuadrado(2), figuras.areaRectangulo(2, 6));

// Ejercicio 4 - Importación dinámica
async function calcular() {
  const fig = await import("./figuras.mjs");
  console.log("Ej4:", fig.areaCuadrado(5));
}
calcular();
