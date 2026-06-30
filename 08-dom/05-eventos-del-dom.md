# Eventos del DOM

Los eventos del DOM son acciones o sucesos que ocurren en los elementos del documento HTML y a los cuales se puede responder mediante la ejecución de código JavaScript. Los eventos permiten interactuar con los usuarios y capturar sus acciones, como hacer clic en un elemento, mover el mouse, escribir en un campo de texto, entre otros.

JavaScript proporciona diferentes métodos para adjuntar y manejar eventos en los elementos del DOM. A continuación, te mostraré algunos ejemplos de eventos comunes y cómo trabajar con ellos:

## onchange

El evento `onchange` se desencadena cuando el valor de un elemento cambia y pierde el foco, como en el caso de los campos de entrada de texto o las listas desplegables.

```html
<input type="text" onchange="miFuncion()">
```

En este ejemplo, cuando el usuario cambie el valor del campo de entrada y salga del mismo, se ejecutará la función `miFuncion()`.

## onclick

El evento `onclick` se desencadena cuando se hace clic en un elemento, como un botón o un enlace.

```html
<button onclick="miFuncion()">Haz clic</button>
```

En este ejemplo, cuando el usuario haga clic en el botón, se ejecutará la función `miFuncion()`.

## onmouseover y onmouseout

Los eventos `onmouseover` y `onmouseout` se desencadenan cuando el cursor del mouse se mueve sobre un elemento o sale de él, respectivamente.

```html
<div onmouseover="miFuncion()" onmouseout="miOtraFuncion()"></div>
```

En este ejemplo, cuando el cursor del mouse se mueva sobre el elemento `div`, se ejecutará la función `miFuncion()`, y cuando el cursor del mouse salga del elemento `div`, se ejecutará la función `miOtraFuncion()`.

## onkeydown

El evento `onkeydown` se desencadena cuando se presiona una tecla del teclado mientras un elemento tiene el foco, como un campo de entrada de texto.

```html
<input type="text" onkeydown="miFuncion(event)">
```

En este ejemplo, cuando el usuario presione una tecla mientras el campo de entrada de texto tiene el foco, se ejecutará la función `miFuncion()` y se pasará el evento como argumento.

## Evento click

El evento `click` se desencadena cuando se hace clic en un elemento.

```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  // Lógica a ejecutar cuando se hace clic en el botón
});
```

## Evento submit

El evento `submit` se desencadena cuando se envía un formulario.

```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Lógica a ejecutar cuando se envía el formulario
});
```

## Evento input

El evento `input` se desencadena cuando se realiza un cambio en un campo de entrada, como un campo de texto.

```javascript
const input = document.getElementById('myInput');

input.addEventListener('input', function() {
  // Lógica a ejecutar cuando cambia el valor del campo de entrada
});
```

## Evento mouseover y mouseout

Los eventos `mouseover` y `mouseout` se desencadenan cuando el mouse se mueve sobre un elemento y sale de él, respectivamente.

```javascript
const element = document.getElementById('myElement');

element.addEventListener('mouseover', function() {
  // Lógica a ejecutar cuando el mouse se mueve sobre el elemento
});

element.addEventListener('mouseout', function() {
  // Lógica a ejecutar cuando el mouse sale del elemento
});
```

## Recomendación

Es importante tener en cuenta que los atributos de eventos en línea, como `onchange`, `onclick`, etc., se utilizan comúnmente para casos sencillos. Sin embargo, en situaciones más complejas, se recomienda utilizar el método `addEventListener` para adjuntar eventos de manera más flexible y separar el código JavaScript del HTML.

```html
<button id="myButton">Haz clic</button>

<script>
  const button = document.getElementById("myButton");

  button.addEventListener("click", function() {
    // Lógica del evento onclick utilizando addEventListener
    miFuncion();
  });
</script>
```

En este caso, se utiliza `addEventListener` para adjuntar el evento `click` al botón y ejecutar la función `miFuncion()` cuando se hace clic en el botón.

En el siguiente ejemplo utilizaremos algunos de los eventos del DOM que hemos visto hasta ahora:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Eventos del DOM</title>
</head>
<body>
  <h1>Eventos del DOM</h1>
  <input type="text" id="inputText" onchange="mostrarMensaje()">
  <button onclick="cambiarColor()">Haz clic</button>
  <p onmouseover="mostrarMensaje('¡Pasaste el mouse por encima!')" onmouseout="mostrarMensaje('¡Mouse fuera!')">Pasa el mouse aquí</p>
  <input type="text" onkeydown="mostrarTecla(event)">

  <script>
    function mostrarMensaje(mensaje) {
      if (mensaje) {
        console.log(mensaje);
      } else {
        console.log("El valor del input ha cambiado");
      }
    }

    function cambiarColor() {
      document.body.style.backgroundColor = "red";
    }

    function mostrarTecla(event) {
      console.log("Tecla presionada: " + event.key);
    }
  </script>
</body>
</html>
```

En este ejemplo, se utilizan diferentes eventos del DOM:

- `onchange`: Se utiliza en un campo de entrada de texto (`<input>`) con el atributo `onchange="mostrarMensaje()"`. Cuando el valor del campo de entrada cambia y se pierde el enfoque del campo, se ejecuta la función `mostrarMensaje()`. En este caso, la función muestra un mensaje en la consola indicando que el valor del input ha cambiado.

- `onclick`: Se utiliza en un botón (`<button>`) con el atributo `onclick="cambiarColor()"`. Cuando se hace clic en el botón, se ejecuta la función `cambiarColor()`. En este caso, la función cambia el color de fondo del `<body>` a rojo.

- `onmouseover` y `onmouseout`: Se utilizan en un párrafo (`<p>`) con los atributos `onmouseover="mostrarMensaje('¡Pasaste el mouse por encima!')"` y `onmouseout="mostrarMensaje('¡Mouse fuera!')"`. Cuando el cursor del mouse se mueve sobre el párrafo, se ejecuta la función `mostrarMensaje()` con el mensaje correspondiente. Cuando el cursor se mueve fuera del párrafo, también se ejecuta la función `mostrarMensaje()` con el mensaje correspondiente.

- `onkeydown`: Se utiliza en un campo de entrada de texto (`<input>`) con el atributo `onkeydown="mostrarTecla(event)"`. Cuando se presiona una tecla mientras el campo de entrada tiene el foco, se ejecuta la función `mostrarTecla()` y se pasa como argumento el evento (`event`) que contiene información sobre la tecla presionada. En este caso, la función muestra en la consola la tecla presionada.

Cada evento está asociado a una función que se ejecuta cuando ocurre ese evento en el elemento correspondiente. Puedes personalizar las funciones y los mensajes según tus necesidades y agregar más lógica para interactuar con los elementos del DOM en respuesta a los eventos.

Estos son solo algunos ejemplos de eventos comunes que se pueden utilizar en JavaScript. Existen muchos más eventos disponibles, como `keydown`, `keyup`, `change`, `focus`, `blur`, entre otros. Puedes consultar la documentación oficial de eventos en JavaScript para obtener más información sobre los diferentes tipos de eventos y cómo utilizarlos.

Recuerda que los eventos son una parte fundamental de la interacción con los usuarios en una página web, y mediante su uso adecuado, puedes capturar y responder a las acciones del usuario para crear una experiencia interactiva y dinámica.
