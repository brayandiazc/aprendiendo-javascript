# ¿Qué son los módulos?

A medida que un programa crece, meter todo el código en un solo archivo se vuelve
inmanejable. Los **módulos** permiten dividir el código en archivos separados y reutilizables,
donde cada archivo decide **qué comparte** con los demás y **qué mantiene privado**.

## Objetivos de aprendizaje

- Entender qué problema resuelven los módulos.
- Conocer el ámbito (scope) de un módulo.
- Saber cómo ejecutar módulos ES en el navegador y en Node.js.

## Prerrequisitos

- [Funciones](../04-funciones/01-funciones.md)
- [Objetos](../06-objetos-y-clases/04-objetos.md)

## El problema: todo en el ámbito global

Antes de los módulos, varios archivos `<script>` compartían el **mismo ámbito global**: una
variable declarada en uno era visible (y pisable) por los demás. Eso provocaba colisiones de
nombres y un código difícil de mantener.

```javascript
// archivo-a.js
let total = 10;

// archivo-b.js
let total = 5; // 💥 colisión: ambos comparten el ámbito global
```

## La solución: módulos ES

Los **módulos ES** (ESM), estandarizados en ES6, hacen que **cada archivo tenga su propio
ámbito**. Nada se comparte salvo lo que **exportas** explícitamente, y otro archivo lo usa
solo si lo **importa**.

- `export` — marca qué cosas de un módulo quedan disponibles para otros.
- `import` — trae a un módulo las cosas exportadas por otro.

Lo veremos en detalle en la [siguiente lección](./02-export-e-import.md).

## Ámbito de módulo

Todo lo que declaras en un módulo es **privado** por defecto: solo existe dentro de ese
archivo a menos que lo exportes. Esto elimina las colisiones del ámbito global.

## Cómo se ejecutan los módulos ES

Los módulos no se ejecutan como un script normal; hay que indicar que el archivo **es un
módulo**:

- **En el navegador**: añade `type="module"` a la etiqueta script.

  ```html
  <script type="module" src="main.js"></script>
  ```

- **En Node.js**: usa la extensión `.mjs`, o pon `"type": "module"` en el `package.json`.

  ```bash
  node main.mjs
  ```

En la carpeta [`ejemplos/`](./ejemplos) tienes
[`operaciones.mjs`](./ejemplos/operaciones.mjs) y [`main.mjs`](./ejemplos/main.mjs) listos
para ejecutar con `node main.mjs`.

> Nota: gran parte de este curso (clases, `let`/`const`, etc.) ya usa características de ES6.
> Los módulos son una de ellas; los vemos ahora con calma porque cobran sentido cuando el
> proyecto tiene varios archivos.

## Resumen

- Los **módulos** dividen el código en archivos con su propio ámbito.
- Cada módulo comparte solo lo que **exporta**; otro lo usa si lo **importa**.
- Para ejecutarlos: `type="module"` en el navegador, o `.mjs` / `"type": "module"` en Node.

---

[Siguiente: export e import →](./02-export-e-import.md)
