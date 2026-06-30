# Fechas

El objeto **`Date`** representa un instante en el tiempo. Se usa para mostrar fechas, calcular
duraciones o registrar cuándo ocurrió algo.

> En los ejemplos usamos fechas **fijas** y métodos `getUTC…` para que la salida sea
> predecible. Con fechas reales y métodos locales (`getFullYear`, etc.), el resultado depende
> de la zona horaria de quien ejecuta el código.

## Objetivos de aprendizaje

- Crear fechas y leer sus partes.
- Formatear fechas de forma legible.
- Calcular la diferencia entre dos fechas.

## Prerrequisitos

- [Números y Math](./02-numeros-y-math.md)

## Crear una fecha

```javascript
const ahora = new Date();              // la fecha y hora actuales
const fija = new Date("2024-01-15T10:30:00Z"); // una fecha concreta (texto ISO)
```

- `new Date()` — el instante actual.
- `new Date("AAAA-MM-DDThh:mm:ssZ")` — una fecha a partir de un texto en formato ISO 8601
  (la `Z` indica UTC).

## Leer las partes de una fecha

```javascript
const fecha = new Date("2024-01-15T10:30:00Z");

console.log(fecha.getUTCFullYear()); // => 2024
console.log(fecha.getUTCMonth());    // => 0
console.log(fecha.getUTCDate());     // => 15
```

- `getFullYear()` — el año.
- `getMonth()` — el mes **empezando en 0** (`0` = enero, `11` = diciembre). ¡Cuidado con esto!
- `getDate()` — el día del mes.
- (`getHours`, `getMinutes`, `getDay` para el día de la semana, etc.)

Las versiones `getUTC…` leen la fecha en horario UTC, sin depender de la zona local.

## Formatear una fecha

Para una fecha en formato estándar, `toISOString`. Para algo legible en español,
`Intl.DateTimeFormat`:

```javascript
const fecha = new Date("2024-01-15T10:30:00Z");

console.log(fecha.toISOString()); // => 2024-01-15T10:30:00.000Z

const formato = new Intl.DateTimeFormat("es-ES", {
  dateStyle: "long",
  timeZone: "UTC",
});
console.log(formato.format(fecha)); // => 15 de enero de 2024
```

`Intl.DateTimeFormat` adapta el formato al idioma indicado (`"es-ES"`), ideal para mostrar
fechas a la persona usuaria.

## Diferencia entre fechas

Una `Date` se puede convertir a número (milisegundos desde 1970). Restar dos fechas da la
diferencia en milisegundos, que luego conviertes a la unidad que quieras.

```javascript
const inicio = new Date("2024-01-15T00:00:00Z");
const fin = new Date("2024-01-20T00:00:00Z");

const ms = fin - inicio;
const dias = ms / (1000 * 60 * 60 * 24);
console.log(dias); // => 5
```

Dividimos los milisegundos entre `1000 * 60 * 60 * 24` (los milisegundos que tiene un día).

## Resumen

- `new Date()` da el instante actual; con un texto ISO creas una fecha concreta.
- Lee partes con `getFullYear`, `getMonth` (¡empieza en 0!), `getDate`…
- Formatea con `toISOString` o, legible, con `Intl.DateTimeFormat`.
- Resta dos fechas (en ms) y convierte para obtener duraciones.

---

[← Números y Math](./02-numeros-y-math.md) · [Siguiente: Ejercicios →](./04-ejercicios.md)
