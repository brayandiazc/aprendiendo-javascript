# Ejercicios de Manejo de errores

Esta sección contiene ejercicios para practicar `try`/`catch`/`finally`, `throw`, errores
personalizados y errores en código asíncrono.

## Manejo de errores

### Ejercicio 1 - Capturar un JSON inválido

`JSON.parse` lanza un error si el texto no es JSON válido. Escribe una función `parsearSeguro`
que intente parsear un texto y, si falla, devuelva `null` en vez de romperse.

**Solución:**

```javascript
function parsearSeguro(texto) {
  try {
    return JSON.parse(texto);
  } catch (error) {
    return null;
  }
}

console.log(parsearSeguro('{"ok":true}')); // => { ok: true }
console.log(parsearSeguro("esto no es json")); // => null
```

Envolvemos `JSON.parse` en un `try`/`catch`: si lanza, devolvemos `null` y el programa
continúa con normalidad.

**Desafío adicional:**

Permite pasar un valor por defecto como segundo parámetro, en lugar de devolver siempre `null`.

### Ejercicio 2 - Usar finally

Escribe una función que simule abrir y cerrar un recurso: pase lo que pase, debe imprimir
`"Recurso cerrado"` al final.

**Solución:**

```javascript
function usarRecurso(valor) {
  try {
    console.log("Usando:", valor.toUpperCase());
  } catch (error) {
    console.log("Error al usar el recurso");
  } finally {
    console.log("Recurso cerrado");
  }
}

usarRecurso("dato");
usarRecurso(null);

// => Usando: DATO
// => Recurso cerrado
// => Error al usar el recurso
// => Recurso cerrado
```

`finally` se ejecuta tanto en el caso exitoso como en el fallido, ideal para liberar
recursos.

**Desafío adicional:**

Haz que la función devuelva `true` si tuvo éxito y `false` si falló.

### Ejercicio 3 - Lanzar un error de validación

Escribe una función `dividir(a, b)` que lance un error si `b` es `0`, y captúrala mostrando el
mensaje.

**Solución:**

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

try {
  console.log(dividir(10, 2)); // => 5
  console.log(dividir(10, 0)); // lanza el error
} catch (error) {
  console.log("Error:", error.message);
}

// => 5
// => Error: No se puede dividir entre cero
```

Validamos la condición inválida y lanzamos un `Error` descriptivo; el `catch` lo recibe y
muestra su `message`.

**Desafío adicional:**

Lanza un `TypeError` si alguno de los argumentos no es un número.

### Ejercicio 4 - Error personalizado con instanceof

Crea una clase `ErrorDeSaldo` que extienda `Error`. Úsala en una función `retirar` que la
lance si el monto supera el saldo, y distíngue ese error con `instanceof`.

**Solución:**

```javascript
class ErrorDeSaldo extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorDeSaldo";
  }
}

function retirar(saldo, monto) {
  if (monto > saldo) {
    throw new ErrorDeSaldo("Fondos insuficientes");
  }
  return saldo - monto;
}

try {
  console.log(retirar(100, 30));  // => 70
  console.log(retirar(100, 200)); // lanza ErrorDeSaldo
} catch (error) {
  if (error instanceof ErrorDeSaldo) {
    console.log("Saldo:", error.message);
  } else {
    console.log("Otro error:", error.message);
  }
}

// => 70
// => Saldo: Fondos insuficientes
```

Al extender `Error` y ajustar `name`, podemos reconocer nuestro error con `instanceof` y
reaccionar de forma específica.

**Desafío adicional:**

Añade una propiedad `this.faltante` con cuánto dinero falta y muéstrala en el `catch`.

### Ejercicio 5 - Errores con async / await

Crea una función asíncrona `obtenerDato(id)` que se rechace si `id` es menor o igual a 0, y
consúmela con `async`/`await` y `try`/`catch`.

**Solución:**

```javascript
function obtenerDato(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error("id inválido"));
      } else {
        resolve(`dato-${id}`);
      }
    }, 200);
  });
}

async function mostrar(id) {
  try {
    const dato = await obtenerDato(id);
    console.log("Obtenido:", dato);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

mostrar(5);   // => Obtenido: dato-5
mostrar(-1);  // => Error: id inválido
```

`await` convierte el rechazo de la promesa en una excepción que el `try`/`catch` captura, igual
que con código síncrono.

**Desafío adicional:**

Añade un `finally` que imprima `"Consulta finalizada"` en ambos casos.

---

[← Errores en código asíncrono](./03-errores-en-asincronia.md) · [Volver al módulo](./README.md)
