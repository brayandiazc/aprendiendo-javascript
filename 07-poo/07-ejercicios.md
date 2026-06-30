# Ejercicios de Programación Orientada a Objetos

Esta sección contiene ejercicios para practicar los conceptos aprendidos en el módulo de
Programación Orientada a Objetos: clases, abstracción, herencia, encapsulamiento y
polimorfismo.

## Programación Orientada a Objetos

Los ejercicios de esta sección se basan en el uso de clases y los pilares de la POO.

### Ejercicio 1 - Declaración de clases

Crea una clase `CuentaBancaria` con un titular y un saldo inicial. Añade métodos para
`depositar` y `retirar` dinero, y un método `consultarSaldo` que devuelva el saldo actual.

**Solución:**

```javascript
class CuentaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(monto) {
    this.saldo += monto;
    return this.saldo;
  }

  retirar(monto) {
    if (monto > this.saldo) {
      return "Fondos insuficientes";
    }
    this.saldo -= monto;
    return this.saldo;
  }

  consultarSaldo() {
    return `El saldo de ${this.titular} es ${this.saldo}`;
  }
}

const cuenta = new CuentaBancaria("Ana", 100);
cuenta.depositar(50);
cuenta.retirar(30);
console.log(cuenta.consultarSaldo()); // => El saldo de Ana es 120
```

Definimos la clase con un `constructor` que recibe el titular y un saldo inicial (con valor
por defecto `0`). Los métodos modifican o leen la propiedad `saldo` de la instancia creada
con `new`.

**Desafío adicional:**

Impide que se pueda retirar un monto negativo o cero, devolviendo un mensaje de error.

### Ejercicio 2 - Encapsulamiento

Reescribe la `CuentaBancaria` para que el `saldo` sea un **campo privado** (`#saldo`), de
modo que no se pueda modificar directamente desde fuera. Expón el saldo solo a través de un
*getter*.

**Solución:**

```javascript
class CuentaBancaria {
  #saldo;

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto <= 0) return "El monto debe ser positivo";
    this.#saldo += monto;
    return this.#saldo;
  }

  get saldo() {
    return this.#saldo;
  }
}

const cuenta = new CuentaBancaria("Luis", 200);
cuenta.depositar(100);
console.log(cuenta.saldo); // => 300
cuenta.saldo = 99999;      // no tiene efecto: no hay setter
console.log(cuenta.saldo); // => 300
```

El campo `#saldo` solo es accesible dentro de la clase. Al no definir un *setter* para
`saldo`, asignarle un valor desde fuera no lo modifica: el estado queda protegido.

**Desafío adicional:**

Añade un *setter* que permita ajustar el saldo solo si el nuevo valor no es negativo.

### Ejercicio 3 - Herencia

Crea una clase `Animal` con una propiedad `nombre` y un método `hacerSonido`. Luego crea una
clase `Perro` que **herede** de `Animal` y sobrescriba `hacerSonido`.

**Solución:**

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return `${this.nombre} hace un sonido`;
  }
}

class Perro extends Animal {
  hacerSonido() {
    return `${this.nombre} dice: ¡Guau!`;
  }
}

const generico = new Animal("Animal");
const firulais = new Perro("Firulais");
console.log(generico.hacerSonido());  // => Animal hace un sonido
console.log(firulais.hacerSonido());  // => Firulais dice: ¡Guau!
```

`Perro extends Animal` reutiliza el `constructor` y las propiedades de `Animal`, pero
**sobrescribe** `hacerSonido` con su propia versión. A esto se le llama *override*.

**Desafío adicional:**

Crea una clase `Gato` que también herede de `Animal`. En su `constructor`, usa `super(nombre)`
y añade una propiedad `vidas` con valor `7`.

### Ejercicio 4 - Abstracción

Crea una clase `FiguraGeometrica` que **no deba instanciarse directamente** y que obligue a
sus subclases a implementar el método `area`. Implementa una subclase `Cuadrado`.

**Solución:**

```javascript
class FiguraGeometrica {
  constructor() {
    if (new.target === FiguraGeometrica) {
      throw new Error("FiguraGeometrica es abstracta: no se puede instanciar.");
    }
  }

  area() {
    throw new Error("El método 'area' debe ser implementado por la subclase.");
  }
}

class Cuadrado extends FiguraGeometrica {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  area() {
    return this.lado * this.lado;
  }
}

const cuadrado = new Cuadrado(4);
console.log(cuadrado.area()); // => 16
```

`new.target` indica con qué clase se llamó a `new`. Si es la clase abstracta, lanzamos un
error. El método `area` de la base también lanza un error para forzar a cada subclase a
darle su propia implementación.

**Desafío adicional:**

Comprueba que `new FiguraGeometrica()` lanza el error esperado usando `try/catch`.

### Ejercicio 5 - Polimorfismo

Crea varias figuras (`Cuadrado`, `Circulo`) que compartan el método `area`, guárdalas en un
array y recórrelo mostrando el área de cada una **sin preguntar de qué tipo es**.

**Solución:**

```javascript
class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }
  area() {
    return this.lado ** 2;
  }
}

class Circulo {
  constructor(radio) {
    this.radio = radio;
  }
  area() {
    return Math.PI * this.radio ** 2;
  }
}

const figuras = [new Cuadrado(3), new Circulo(2)];

figuras.forEach(figura => {
  console.log(figura.area().toFixed(2));
});
// => 9.00
// => 12.57
```

Aunque `Cuadrado` y `Circulo` calculan el área de forma distinta, ambos responden al mismo
método `area()`. Eso permite tratarlos de manera uniforme: el bucle no necesita saber qué
figura es cada objeto. Eso es **polimorfismo**.

**Desafío adicional:**

Añade una clase `Triangulo` con base y altura, y verifica que el bucle sigue funcionando sin
cambios.

### Ejercicio 6 - Integrador

Modela un pequeño sistema de empleados: una clase base `Empleado` con `nombre` y un método
`calcularPago`, y dos subclases `EmpleadoPorHora` y `EmpleadoAsalariado` que calculen el pago
de forma distinta. Recórrelos y muestra el pago de cada uno.

**Solución:**

```javascript
class Empleado {
  constructor(nombre) {
    this.nombre = nombre;
  }
  calcularPago() {
    throw new Error("Cada tipo de empleado define su pago.");
  }
}

class EmpleadoPorHora extends Empleado {
  constructor(nombre, horas, tarifa) {
    super(nombre);
    this.horas = horas;
    this.tarifa = tarifa;
  }
  calcularPago() {
    return this.horas * this.tarifa;
  }
}

class EmpleadoAsalariado extends Empleado {
  constructor(nombre, salarioMensual) {
    super(nombre);
    this.salarioMensual = salarioMensual;
  }
  calcularPago() {
    return this.salarioMensual;
  }
}

const nomina = [
  new EmpleadoPorHora("Marta", 80, 15),
  new EmpleadoAsalariado("Pedro", 2000),
];

nomina.forEach(empleado => {
  console.log(`${empleado.nombre} cobra ${empleado.calcularPago()}`);
});
// => Marta cobra 1200
// => Pedro cobra 2000
```

Este ejercicio combina **herencia** (las subclases extienden `Empleado`), **abstracción**
(el método base obliga a implementar `calcularPago`) y **polimorfismo** (el bucle trata a
todos como `Empleado` y cada uno calcula su pago a su manera).

**Desafío adicional:**

Añade un `EmpleadoComision` cuyo pago sea un salario base más un porcentaje de sus ventas, e
inclúyelo en la nómina.
