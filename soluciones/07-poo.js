// Soluciones — Ejercicios de POO (módulo 07)
// Ejecuta:  node soluciones/07-poo.js

// Ejercicio 1 - Declaración de clases
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
    if (monto > this.saldo) return "Fondos insuficientes";
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
console.log("Ej1:", cuenta.consultarSaldo());

// Ejercicio 2 - Encapsulamiento
class CuentaPrivada {
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
const cp = new CuentaPrivada("Luis", 200);
cp.depositar(100);
console.log("Ej2:", cp.saldo);

// Ejercicio 3 - Herencia
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
console.log("Ej3:", new Perro("Firulais").hacerSonido());

// Ejercicio 4 - Abstracción
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
console.log("Ej4:", new Cuadrado(4).area());

// Ejercicio 5 - Polimorfismo
class CuadradoP {
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
console.log("Ej5:", [new CuadradoP(3), new Circulo(2)].map((f) => f.area().toFixed(2)));

// Ejercicio 6 - Integrador
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
const nomina = [new EmpleadoPorHora("Marta", 80, 15), new EmpleadoAsalariado("Pedro", 2000)];
nomina.forEach((e) => console.log("Ej6:", `${e.nombre} cobra ${e.calcularPago()}`));
