// operaciones.mjs — un módulo que EXPORTA valores y funciones.

// Exportaciones con nombre (named exports):
export const PI = 3.1416;

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

// Exportación por defecto (default export): solo puede haber una por módulo.
export default function saludar(nombre) {
  return `Hola, ${nombre}`;
}
