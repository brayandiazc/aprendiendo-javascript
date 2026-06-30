# Aprendiendo JavaScript

Guía completa y amigable para aprender **JavaScript desde cero y en español**, con
explicaciones claras, ejemplos prácticos y ejercicios al final de cada módulo.

![Licencia](https://img.shields.io/badge/licencia-MIT-blue)
![Idioma](https://img.shields.io/badge/idioma-espa%C3%B1ol-brightgreen)
![Nivel](https://img.shields.io/badge/nivel-principiante-orange)
![Hecho con](https://img.shields.io/badge/hecho%20con-Markdown%20%2B%20JavaScript-yellow)

## Tabla de contenidos

- [Descripción](#descripción)
- [¿Para quién es?](#para-quién-es)
- [Cómo estudiar esta guía](#cómo-estudiar-esta-guía)
- [Contenido](#contenido)
- [Requisitos](#requisitos)
- [Ejecutar los ejemplos](#ejecutar-los-ejemplos)
- [Cómo está organizado el repositorio](#cómo-está-organizado-el-repositorio)
- [IA y agentes](#ia-y-agentes)
- [Contribuir](#contribuir)
- [Recursos adicionales](#recursos-adicionales)
- [Autor](#autor)
- [Licencia](#licencia)
- [Agradecimientos](#agradecimientos)

## Descripción

Esta guía acompaña a quien empieza desde cero a aprender los fundamentos de JavaScript y a
ganar soltura programando. Avanza de forma progresiva: cada módulo asume lo aprendido en el
anterior, combina teoría con ejemplos y cierra con ejercicios para practicar.

## ¿Para quién es?

- Personas que **nunca han programado** y quieren empezar por JavaScript.
- Quienes ya programan en otro lenguaje y quieren **aprender JavaScript** en español.
- Estudiantes que buscan **material de repaso** ordenado por temas.

## Cómo estudiar esta guía

1. Sigue los módulos **en orden** (del `01` al `08`): cada uno se apoya en el anterior.
2. Lee la lección, **escribe y ejecuta** los ejemplos por tu cuenta (no solo los leas).
3. Al final de cada módulo, resuelve los **ejercicios** antes de mirar las soluciones.
4. Cuando termines, aplica lo aprendido en los [proyectos](./proyectos).

## Contenido

1. **Introducción**
   1. [¿Qué es JavaScript?](./01-introduccion/01-que-es-javascript.md)
   2. [Historia de JavaScript](./01-introduccion/02-historia-javascript.md)
2. **Fundamentos**
   1. [Variables](./02-fundamentos/01-variables.md)
   2. [Tipos de datos](./02-fundamentos/02-tipos-de-datos.md)
   3. [Coerción de datos](./02-fundamentos/03-coercion-de-datos.md)
   4. [Operadores](./02-fundamentos/04-operadores.md)
   5. [Ejercicios](./02-fundamentos/05-ejercicios.md)
3. **Estructuras de control**
   1. [Condicionales](./03-estructuras-de-control/01-condicionales.md)
   2. [Bucles](./03-estructuras-de-control/02-bucles.md)
   3. [Ejercicios](./03-estructuras-de-control/03-ejercicios.md)
4. **Funciones**
   1. [Funciones](./04-funciones/01-funciones.md)
   2. [Ejercicios](./04-funciones/02-ejercicios.md)
5. **Arrays**
   1. [Arrays](./05-arrays/01-arrays.md)
   2. [Agregar y eliminar elementos](./05-arrays/02-agregar-y-eliminar-elementos.md)
   3. [Iterando arrays](./05-arrays/03-iterando-arrays.md)
   4. [Arrow functions](./05-arrays/04-arrow-functions.md)
   5. [Arrow functions con arrays](./05-arrays/05-arrow-functions-con-arrays.md)
   6. [Ejercicios](./05-arrays/06-ejercicios.md)
6. **Objetos y clases**
   1. [ECMAScript 6](./06-objetos-y-clases/01-ecmascript-6.md)
   2. [Declaración con let y const](./06-objetos-y-clases/02-declaracion-con-let-y-const.md)
   3. [String templates](./06-objetos-y-clases/03-string-templates.md)
   4. [Objetos](./06-objetos-y-clases/04-objetos.md)
   5. [Iterando objetos](./06-objetos-y-clases/05-iterando-objetos.md)
   6. [Desestructuración de objetos](./06-objetos-y-clases/06-desestructuracion-de-objetos.md)
   7. [Desestructuración de arrays](./06-objetos-y-clases/07-desestructuracion-de-arrays.md)
   8. [Clases](./06-objetos-y-clases/08-clases.md)
   9. [Ejercicios](./06-objetos-y-clases/09-ejercicios.md)
7. **Programación orientada a objetos**
   1. [Programación orientada a objetos](./07-poo/01-programacion-orientada-a-objetos.md)
   2. [Declaración de clases](./07-poo/02-declaracion-de-clases.md)
   3. [Abstracción en clases](./07-poo/03-abstract-classes.md)
   4. [Herencia](./07-poo/04-herencia.md)
   5. [Encapsulamiento](./07-poo/05-encapsulamiento.md)
   6. [Polimorfismo](./07-poo/06-polimorfismo.md)
   7. [Ejercicios](./07-poo/07-ejercicios.md)
8. **DOM y eventos**
   1. [El DOM](./08-dom/01-dom.md)
   2. [Eventos](./08-dom/02-eventos.md)
   3. [Selección del DOM](./08-dom/03-seleccion-del-dom.md)
   4. [Crear elementos](./08-dom/04-crear-elementos.md)
   5. [Eventos del DOM](./08-dom/05-eventos-del-dom.md)
   6. [Agregar eventos a elementos](./08-dom/06-agregar-eventos-a-elementos.md)
   7. [Manipulación de atributos](./08-dom/07-manipulacion-de-atributos.md)
   8. [localStorage](./08-dom/08-localstorage.md)
   9. [Elementos dinámicos](./08-dom/09-elementos-dinamicos.md)
   10. [Ejercicios](./08-dom/10-ejercicios.md)
9. **Asincronía**
   1. [Callbacks y código asíncrono](./09-asincronia/01-callbacks.md)
   2. [Promesas](./09-asincronia/02-promesas.md)
   3. [async / await](./09-asincronia/03-async-await.md)
   4. [Ejercicios](./09-asincronia/04-ejercicios.md)
10. **Fetch y APIs**
    1. [APIs y JSON](./10-fetch-y-apis/01-apis-y-json.md)
    2. [fetch](./10-fetch-y-apis/02-fetch.md)
    3. [Ejercicios](./10-fetch-y-apis/03-ejercicios.md)
11. **Manejo de errores**
    1. [try / catch / finally](./11-manejo-de-errores/01-try-catch.md)
    2. [Lanzar y crear errores](./11-manejo-de-errores/02-lanzar-y-crear-errores.md)
    3. [Errores en código asíncrono](./11-manejo-de-errores/03-errores-en-asincronia.md)
    4. [Ejercicios](./11-manejo-de-errores/04-ejercicios.md)
12. **Módulos ES**
    1. [¿Qué son los módulos?](./12-modulos-es/01-que-son-los-modulos.md)
    2. [export e import](./12-modulos-es/02-export-e-import.md)
    3. [Ejercicios](./12-modulos-es/03-ejercicios.md)
13. **String, Number y fechas**
    1. [Métodos de String](./13-strings-numeros-fechas/01-metodos-de-string.md)
    2. [Números y Math](./13-strings-numeros-fechas/02-numeros-y-math.md)
    3. [Fechas](./13-strings-numeros-fechas/03-fechas.md)
    4. [Ejercicios](./13-strings-numeros-fechas/04-ejercicios.md)
14. **Proyectos**
    1. [Conversor de monedas](./proyectos/conversor-monedas.md)

> ¿Qué viene después? Consulta el [roadmap de contenido](./docs/product/roadmap.md).

## Requisitos

Para seguir la guía solo necesitas:

- Un **navegador web** moderno (Chrome, Firefox, Edge o Safari).
- Un **editor de código** (recomendado: [Visual Studio Code](https://code.visualstudio.com/)).
- Opcional, para ejecutar ejemplos fuera del navegador: [Node.js](https://nodejs.org).

## Ejecutar los ejemplos

Hay dos formas de probar el código, según el tema:

**En el navegador** (recomendado para todo lo visual y el módulo de DOM):

1. Crea un archivo `index.html` y un `script.js`.
2. Enlaza el script en el HTML: `<script src="script.js"></script>`.
3. Abre el HTML en el navegador y revisa la **consola de desarrollador** (`F12`).

**Con Node.js** (cómodo para fundamentos, funciones, arrays, objetos y POO):

```bash
node script.js
```

```javascript
console.log("¡Hola, mundo!"); // => ¡Hola, mundo!
```

> Los ejemplos del módulo **DOM** se ejecutan en el navegador, no en Node. Ver
> [convención de verificación de ejemplos](./docs/conventions/verificacion-de-ejemplos.md).

## Cómo está organizado el repositorio

```text
.
├── 01-introduccion … 13-strings-numeros-fechas/  # Módulos del curso (lecciones .md)
├── proyectos/                  # Proyectos prácticos
├── docs/                       # Cómo se construye y mantiene el curso
├── specs/                      # Plantillas para planear contenido nuevo
└── .claude/                    # Subagentes y skills de IA del proyecto
```

La documentación de proceso (estructura, convenciones, decisiones, roadmap y glosario) vive
en [`docs/`](./docs/README.md).

## IA y agentes

Este repositorio está **listo para IA**: el contexto para asistentes vive en
[`AGENTS.md`](./AGENTS.md) (que [`CLAUDE.md`](./CLAUDE.md) importa para Claude Code) e
incluye [subagentes](./.claude/agents) y [skills](./.claude/skills) adaptados a este curso
(planificar lecciones, revisar exactitud técnica, escribir y verificar ejemplos, mantener
índices…). Las reglas para trabajar con IA están en
[`docs/conventions/ai-agents.md`](./docs/conventions/ai-agents.md).

## Contribuir

¡Las contribuciones son bienvenidas! Antes de abrir un PR, lee la
[Guía de Contribución](./CONTRIBUTING.md) y el [Código de Conducta](./CODE_OF_CONDUCT.md).
Puedes proponer lecciones, corregir errores, mejorar redacción o añadir ejercicios y
proyectos.

## Recursos adicionales

- [MDN Web Docs — JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) (referencia oficial en español)
- [JavaScript.info](https://es.javascript.info/) (tutorial moderno y profundo)
- [Especificación ECMAScript](https://tc39.es/ecma262/) (la fuente de la verdad del lenguaje)

## Autor

- **Brayan Diaz C** — [@brayandiazc](https://github.com/brayandiazc)

## Licencia

Este proyecto está bajo la licencia **MIT** — consulta el archivo [LICENSE](./LICENSE) para
más detalles.

## Agradecimientos

Si esta guía te resulta útil, puedes:

- Darle una ⭐️ al repositorio.
- Compartirla con quien esté aprendiendo 📢.
- Hacer un *fork* y contribuir 🤓.
- Abrir un issue con sugerencias o correcciones 🙌.
- Invitar un café ☕.

---

⌨️ con ❤️ por [Brayan Diaz C](https://github.com/brayandiazc) 😊
