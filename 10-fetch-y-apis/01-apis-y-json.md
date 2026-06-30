# APIs y JSON

Las aplicaciones reales no viven aisladas: piden y envían datos a **servidores**. La forma
más común de hacerlo en la web es a través de una **API** que habla **JSON**. Antes de
aprender a pedir datos con `fetch`, conviene entender estos dos conceptos.

## Objetivos de aprendizaje

- Entender qué es una API web y el modelo petición/respuesta de HTTP.
- Conocer los métodos HTTP principales y los códigos de estado.
- Convertir entre texto JSON y objetos de JavaScript.

## Prerrequisitos

- [Objetos](../06-objetos-y-clases/04-objetos.md)
- [Asincronía](../09-asincronia/README.md)

## ¿Qué es una API?

Una **API** (*Application Programming Interface*) es un conjunto de "puntos de entrada"
(URLs) que un servidor expone para que otros programas consuman o modifiquen datos. Cuando es
una API **web/REST**, interactúas con ella mediante **HTTP**: envías una **petición** a una
URL y recibes una **respuesta**.

Por ejemplo, una API de tareas podría ofrecer:

```text
GET    https://api.ejemplo.com/tareas       → lista de tareas
GET    https://api.ejemplo.com/tareas/1     → la tarea con id 1
POST   https://api.ejemplo.com/tareas       → crea una tarea
PUT    https://api.ejemplo.com/tareas/1     → actualiza la tarea 1
DELETE https://api.ejemplo.com/tareas/1     → elimina la tarea 1
```

## Métodos HTTP

Cada petición usa un **método** que indica la intención:

| Método   | Para qué sirve                  |
| -------- | ------------------------------- |
| `GET`    | Obtener datos                   |
| `POST`   | Crear un recurso nuevo          |
| `PUT`    | Reemplazar un recurso existente |
| `PATCH`  | Modificar parte de un recurso   |
| `DELETE` | Eliminar un recurso             |

## Códigos de estado

La respuesta incluye un **código de estado** que dice cómo fue:

- **2xx** — éxito (p. ej. `200 OK`, `201 Created`).
- **4xx** — error del cliente (p. ej. `404 Not Found`, `401 Unauthorized`).
- **5xx** — error del servidor (p. ej. `500 Internal Server Error`).

Lo tendremos en cuenta al manejar errores con `fetch` en la siguiente lección.

## JSON

**JSON** (*JavaScript Object Notation*) es el formato de texto más usado para intercambiar
datos. Se parece mucho a un objeto de JavaScript, pero es **texto**:

```json
{
  "id": 1,
  "titulo": "Aprender fetch",
  "completada": false
}
```

JavaScript trae dos funciones para convertir entre texto JSON y objetos:

- `JSON.parse(texto)` — convierte un **texto JSON** en un **objeto**.
- `JSON.stringify(objeto)` — convierte un **objeto** en **texto JSON**.

```javascript
const texto = '{"id":1,"titulo":"Aprender fetch","completada":false}';

const objeto = JSON.parse(texto);
console.log(objeto.titulo); // => Aprender fetch

const deNuevoTexto = JSON.stringify(objeto);
console.log(deNuevoTexto); // => {"id":1,"titulo":"Aprender fetch","completada":false}
```

> Diferencia clave: en JSON las claves van **siempre entre comillas dobles** y no admite
> comentarios ni funciones. Es solo datos.

## Resumen

- Una **API web** expone URLs que consumes con **HTTP** (petición → respuesta).
- El **método** (`GET`, `POST`…) indica la intención y el **código de estado** el resultado.
- **JSON** es texto con forma de objeto; se convierte con `JSON.parse` y `JSON.stringify`.
- En la siguiente lección pediremos datos reales a una API con `fetch`.

---

[Siguiente: fetch →](./02-fetch.md)
