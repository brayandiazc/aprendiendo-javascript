# try / catch / finally

Hasta los mejores programas fallan: una entrada inesperada, un dato que no existe, una
operación que no se puede completar. **Manejar errores** consiste en anticipar esos fallos y
reaccionar con elegancia en lugar de dejar que el programa se rompa.

## Objetivos de aprendizaje

- Usar `try`, `catch` y `finally` para capturar errores.
- Entender el objeto `Error` y sus propiedades.
- Saber qué pasa con el flujo del programa cuando ocurre un error.

## Prerrequisitos

- [Funciones](../04-funciones/01-funciones.md)
- [Condicionales](../03-estructuras-de-control/01-condicionales.md)

## El problema: un error detiene el programa

Cuando ocurre un error y nadie lo maneja, el programa se detiene y no ejecuta lo que venía
después:

```javascript
const datos = null;

console.log("Antes");
console.log(datos.nombre); // ❌ TypeError: Cannot read properties of null
console.log("Después");    // nunca se ejecuta

// => Antes
// (luego se lanza el error y "Después" no se imprime)
```

## La solución: `try` / `catch`

Ponemos el código que podría fallar dentro de `try`. Si algo lanza un error, el control salta
al bloque `catch`, que recibe el error, y el programa **continúa**.

```javascript
const datos = null;

console.log("Antes");

try {
  console.log(datos.nombre);
} catch (error) {
  console.log("Ocurrió un error, pero seguimos.");
}

console.log("Después");

// => Antes
// => Ocurrió un error, pero seguimos.
// => Después
```

## El objeto `Error`

El parámetro que recibe `catch` (aquí `error`) es un objeto `Error` con propiedades útiles:

- `name` — el tipo de error (p. ej. `"TypeError"`).
- `message` — la descripción legible.

```javascript
try {
  const datos = null;
  console.log(datos.nombre);
} catch (error) {
  console.log(error.name);    // => TypeError
  console.log(error.message); // => Cannot read properties of null (reading 'nombre')
}
```

## `finally`

El bloque `finally` se ejecuta **siempre**, haya error o no. Es útil para tareas de limpieza
(cerrar algo, ocultar un indicador de carga, etc.).

```javascript
function procesar(valor) {
  try {
    console.log("Procesando:", valor.toUpperCase());
  } catch (error) {
    console.log("No se pudo procesar.");
  } finally {
    console.log("Fin del intento.");
  }
}

procesar("hola");  // => Procesando: HOLA   |  => Fin del intento.
procesar(null);    // => No se pudo procesar. |  => Fin del intento.
```

## Resumen

- Un error no manejado **detiene** el programa; `try`/`catch` lo evita.
- El código que podría fallar va en `try`; la reacción al fallo, en `catch`.
- El `catch` recibe un objeto `Error` con `name` y `message`.
- `finally` se ejecuta siempre, ideal para limpieza.
- En la siguiente lección aprenderemos a **lanzar** nuestros propios errores.

---

[Siguiente: Lanzar y crear errores →](./02-lanzar-y-crear-errores.md)
