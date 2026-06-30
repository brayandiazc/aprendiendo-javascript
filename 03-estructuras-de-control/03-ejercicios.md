# Ejercicios estructuras de control

Esta sección contiene ejercicios para practicar los conceptos de estructuras de control en JavaScript.

## Condicionales

Los ejercicios de esta sección se basan en la declaración de condicionales.

### Ejercicio 1

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18.

```javascript
var edad = 18;

if (edad >= 18) {
  alert("Eres mayor de edad");
}
```

### Ejercicio 2

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18, y otro mensaje de alerta si la edad es menor a 18.

```javascript
var edad = 18;

if (edad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad");
}
```

### Ejercicio 3

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18, otro mensaje de alerta si la edad es menor a 18, y otro mensaje de alerta si la edad es igual a 18.

```javascript
var edad = 18;

if (edad >= 18) {
  alert("Eres mayor de edad");
} else if (edad < 18) {
  alert("Eres menor de edad");
} else {
  alert("Tienes 18 años");
}
```

### Ejercicio 4

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18, otro mensaje de alerta si la edad es menor a 18, y otro mensaje de alerta si la edad es igual a 18. Utiliza el operador ternario.

```javascript
var edad = 18;

var mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

alert(mensaje);
```

### Ejercicio 5

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18, otro mensaje de alerta si la edad es menor a 18, y otro mensaje de alerta si la edad es igual a 18. Utiliza el operador ternario y el operador lógico `&&`.

```javascript
var edad = 18;

var mensaje = edad >= 18 ? "Eres mayor de edad" : edad < 18 && edad > 0 ? "Eres menor de edad" : "No has nacido";

alert(mensaje);
```

### Ejercicio 6

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18, otro mensaje de alerta si la edad es menor a 18, y otro mensaje de alerta si la edad es igual a 18. Utiliza el operador ternario y el operador lógico `||`.

```javascript
var edad = 18;

var mensaje = edad >= 18 ? "Eres mayor de edad" : edad < 18 || edad > 0 ? "Eres menor de edad" : "No has nacido";

alert(mensaje);
```

### Ejercicio 7

Escribe un programa que solicite al usuario que ingrese un número y determine si es par o impar. Si el número es par, el programa debe imprimir "El número ingresado es par". De lo contrario, el programa debe imprimir "El número ingresado es impar".

```javascript
const numero = parseInt(prompt("Ingrese un número"));

if (numero % 2 === 0) {
  console.log("El número ingresado es par");
} else {
  console.log("El número ingresado es impar");
}
```

### Ejercicio 8

Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y determine a qué día de la semana corresponde. Si el número es 1, el programa debe imprimir "Lunes", si es 2, debe imprimir "Martes", y así sucesivamente hasta llegar a 7, que corresponde a "Domingo". Si el usuario ingresa un número fuera del rango válido, el programa debe imprimir "Número inválido".

```javascript
const numero = parseInt(prompt("Ingrese un número del 1 al 7"));

switch (numero) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número inválido");
    break;
}
```

### Ejercicio 9

Escribe un programa que imprima la tabla de multiplicar del número 5, del 1 al 10. El programa debe utilizar un bucle `for` para realizar la multiplicación y luego imprimir el resultado en cada iteración.

```javascript
const numero = 5;

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
```

### Ejercicio 10

Escribe un programa que solicite al usuario que adivine un número secreto entre 1 y 10. El programa debe generar un número aleatorio y luego solicitar al usuario que ingrese un número hasta que adivine el número secreto. El programa debe imprimir "¡Adivinaste!" y salir del bucle `while` cuando el usuario adivine el número.

```javascript
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroAdivinado = parseInt(prompt("Adivina el número secreto entre 1 y 10"));

while (numeroAdivinado !== numeroSecreto) {
  numeroAdivinado = parseInt(prompt("Intenta de nuevo. Adivina el número secreto entre 1 y 10"));
}

console.log("¡Adivinaste!");
```
