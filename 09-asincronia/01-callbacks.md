# Callbacks y código asíncrono

Hasta ahora el código de este curso se ejecutaba **línea por línea, de arriba abajo**: cada
instrucción terminaba antes de empezar la siguiente. Eso es código **síncrono**. Pero muchas
tareas reales (esperar una respuesta de internet, leer un archivo, esperar un temporizador)
**tardan**, y no queremos que el programa se quede congelado mientras tanto. Ahí entra la
**asincronía**.

## Objetivos de aprendizaje

- Distinguir entre código síncrono y asíncrono.
- Entender qué es una función *callback*.
- Reconocer el problema del "callback hell".

## Prerrequisitos

- [Funciones](../04-funciones/01-funciones.md)
- [Arrow functions](../05-arrays/04-arrow-functions.md)

## Síncrono vs asíncrono

JavaScript ejecuta una sola cosa a la vez, pero puede **agendar** tareas para que terminen
"más tarde" sin bloquear el resto del programa. Un ejemplo clásico es `setTimeout`, que
ejecuta una función después de cierto tiempo:

```javascript
console.log("Primero");

setTimeout(() => {
  console.log("Tercero (después de 1 segundo)");
}, 1000);

console.log("Segundo");

// => Primero
// => Segundo
// => Tercero (después de 1 segundo)
```

Aunque `setTimeout` aparece antes que el último `console.log`, su mensaje se imprime al
final: JavaScript **no espera** el segundo; agenda la función y sigue con lo demás.

## ¿Qué es un callback?

Un **callback** es una función que pasas como argumento a otra función para que la "llame de
vuelta" cuando termine su trabajo. En el ejemplo anterior, la arrow function que le pasamos a
`setTimeout` es un callback.

Los callbacks no son exclusivos de la asincronía: muchos métodos de arrays los usan de forma
síncrona.

```javascript
const numeros = [1, 2, 3];

// La función que pasamos a forEach es un callback.
numeros.forEach((numero) => {
  console.log(numero * 2);
});

// => 2
// => 4
// => 6
```

## Callbacks para tareas en secuencia

Cuando una tarea asíncrona depende de otra, una opción es anidar callbacks. Simulemos tres
pasos que tardan, usando `setTimeout`:

```javascript
function paso(nombre, callback) {
  setTimeout(() => {
    console.log(`Terminó: ${nombre}`);
    callback();
  }, 500);
}

paso("descargar", () => {
  paso("procesar", () => {
    paso("guardar", () => {
      console.log("¡Todo listo!");
    });
  });
});

// => Terminó: descargar
// => Terminó: procesar
// => Terminó: guardar
// => ¡Todo listo!
```

## El problema: "callback hell"

Cuando hay muchos pasos dependientes, los callbacks anidados crecen hacia la derecha y se
vuelven difíciles de leer y de mantener. A esa pirámide se le llama informalmente **"callback
hell"** (el infierno de los callbacks):

```javascript
hacerA(() => {
  hacerB(() => {
    hacerC(() => {
      hacerD(() => {
        // ...y así sucesivamente
      });
    });
  });
});
```

Además, manejar errores en cada nivel se vuelve engorroso. Para resolver esto, JavaScript
introdujo las **Promesas**, que veremos en la siguiente lección.

## Resumen

- El código **asíncrono** permite agendar tareas que tardan sin bloquear el programa.
- Un **callback** es una función que se pasa a otra para ejecutarse cuando algo termina.
- Anidar muchos callbacks lleva al **callback hell**: difícil de leer y mantener.
- Las **Promesas** (siguiente lección) ofrecen una forma más limpia de encadenar tareas.

---

[Siguiente: Promesas →](./02-promesas.md)
