# El DOM (Document Object Model)

El DOM (Document Object Model) es una representación en forma de árbol de la estructura de un documento HTML (o XML). El DOM proporciona una interfaz que permite acceder y manipular los elementos y contenido de un documento web.

En JavaScript, podemos interactuar con el DOM para realizar diversas tareas, como acceder a elementos HTML, modificar su contenido, agregar o eliminar elementos, cambiar estilos y manejar eventos.

A continuación, te mostraré un ejemplo básico de cómo acceder y manipular el DOM utilizando JavaScript:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>DOM</title>
</head>

<body>
    <h1 id="titulo">Título</h1>
    <p id="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
    <button id="boton">Haz clic</button>

    <script>
        // Acceder a un elemento HTML
        const titulo = document.getElementById("titulo");
        console.log(titulo);

        // Modificar el contenido de un elemento HTML
        titulo.textContent = "Nuevo título";

        // Agregar un evento a un elemento HTML
        const boton = document.getElementById("boton");
        boton.addEventListener("click", () => {
            console.log("Haz hecho clic en el botón");
        });
    </script>
</body>
</html>
```

En este ejemplo, accedemos a un elemento HTML utilizando el método `getElementById` y lo almacenamos en una variable llamada `titulo`. Luego, modificamos el contenido del elemento utilizando la propiedad `textContent`. Finalmente, agregamos un evento al botón utilizando el método `addEventListener`.

Aqui podemos ver otro ejemplo de como acceder y manipular el DOM utilizando JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Manipulación del DOM</title>
</head>
<body>
  <h1 id="titulo">¡Hola, Mundo!</h1>
  <p id="parrafo">Este es un párrafo de ejemplo.</p>

  <script>
    // Acceder a elementos del DOM
    const tituloElemento = document.getElementById("titulo");
    const parrafoElemento = document.getElementById("parrafo");

    // Modificar contenido de elementos
    tituloElemento.textContent = "¡Hola, UDD!";
    parrafoElemento.innerHTML = "Este es un párrafo modificado.";

    // Agregar un nuevo elemento
    const nuevoElemento = document.createElement("p");
    nuevoElemento.textContent = "Este es un nuevo párrafo.";
    document.body.appendChild(nuevoElemento);

    // Cambiar estilos
    tituloElemento.style.color = "red";
    parrafoElemento.style.fontSize = "20px";

    // Manejar eventos
    tituloElemento.addEventListener("click", function() {
      alert("¡Haz hecho clic en el título!");
    });
  </script>
</body>
</html>
```

En este ejemplo, utilizamos JavaScript dentro de la etiqueta `<script>` para acceder y manipular el DOM. Algunas acciones que realizamos son:

- Acceder a elementos del DOM utilizando `getElementById`.
- Modificar el contenido de elementos utilizando `textContent` y `innerHTML`.
- Crear un nuevo elemento utilizando `createElement` y agregarlo al DOM utilizando `appendChild`.
- Cambiar estilos utilizando la propiedad `style`.
- Manejar eventos utilizando `addEventListener`.

Recuerda que el DOM puede tener una estructura más compleja, con elementos anidados y diferentes atributos. Sin embargo, el ejemplo anterior te da una idea básica de cómo interactuar con el DOM utilizando JavaScript.

## Buenas prácticas

Algunas buenas prácticas para trabajar con el DOM son:

**Cachea las referencias a elementos del DOM:** Al acceder a elementos del DOM utilizando métodos como `getElementById` o `querySelector`, almacena esas referencias en variables para evitar buscar los elementos repetidamente. Esto mejora el rendimiento y evita el código redundante.

```javascript
// Mala práctica: Acceder al elemento del DOM cada vez que se necesita
document.getElementById("myElement").textContent = "Hola";

// Buena práctica: Almacenar la referencia del elemento en una variable
const myElement = document.getElementById("myElement");
myElement.textContent = "Hola";
```

**Utiliza eventos delegados:** En lugar de adjuntar un controlador de eventos a cada elemento individualmente, considera utilizar eventos delegados. Esto implica adjuntar el controlador de eventos a un elemento superior que contiene a todos los elementos objetivo. Luego, puedes utilizar la propiedad `event.target` para identificar el elemento específico que desencadenó el evento.

```javascript
// Mala práctica: Adjuntar un controlador de eventos a cada elemento
const button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
  // Lógica del evento para button1
});

const button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
  // Lógica del evento para button2
});

// Buena práctica: Utilizar eventos delegados
const container = document.getElementById("container");
container.addEventListener("click", function(event) {
  if (event.target.matches("button")) {
    // Lógica del evento para los botones
  }
});
```

**Evita la manipulación excesiva del DOM:** Realizar muchas modificaciones al DOM puede ser costoso en términos de rendimiento. En lugar de hacer múltiples cambios, considera agrupar las modificaciones en un solo bloque utilizando fragmentos de documento o manipulando cadenas de texto, y luego realizar una sola modificación al DOM.

```javascript
// Mala práctica: Modificar el DOM varias veces
const container = document.getElementById("container");
container.innerHTML = "";
container.appendChild(element1);
container.appendChild(element2);
container.appendChild(element3);

// Buena práctica: Agrupar las modificaciones y realizar una sola modificación
const container = document.getElementById("container");
const fragment = document.createDocumentFragment();
fragment.appendChild(element1);
fragment.appendChild(element2);
fragment.appendChild(element3);
container.innerHTML = "";
container.appendChild(fragment);
```

**Elimina los event listeners:** Si adjuntas un event listener a un elemento y posteriormente ya no lo necesitas, asegúrate de eliminarlo para evitar posibles fugas de memoria. Puedes utilizar el método `removeEventListener` para eliminar el event listener asociado a un elemento.

```javascript
// Mala práctica: No eliminar el event listener
const button = document.getElementById("myButton");
button.addEventListener("click", myFunction);

// Buena práctica: Eliminar el event listener cuando ya no se necesita
const button = document.getElementById("myButton");
button.addEventListener("click", myFunction);

// Cuando ya no se necesita el event listener
button.removeEventListener("click", myFunction);
```

Estas son solo algunas buenas prácticas al trabajar con el DOM en JavaScript. Recuerda que cada caso puede ser diferente y es importante adaptar las prácticas según las necesidades de tu proyecto.
