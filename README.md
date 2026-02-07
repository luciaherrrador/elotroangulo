
Este proyecto web en proceso de construcción dedicada a la recopilación y presentación de información relevante sobre carreras de caballos.

La plataforma reúne datos clave como:

📊 Últimas actuaciones de caballos en competiciones recientes

🏁 Resultados técnicos de las carreras, incluyendo clasificaciones y detalles de cada prueba

📰 Noticias y artículos de interés relacionados con el mundo de las carreras de caballos

El objetivo es centralizar información actualizada y estructurada para facilitar el análisis, seguimiento y consulta tanto a aficionados como a personas interesadas en el ámbito hípico.

Actualmente el proyecto se encuentra en desarrollo activo, por lo que algunas funcionalidades y secciones pueden estar incompletas o sujetas a cambios.

Creado en **node y vite**.  una **plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas**.

Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más. El Kit nos ayuda a trabajar más cómodamente, nos automatiza tareas.

En el Kit hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio, como vite.config.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos (excepto este README.md, para describir tu proyecto).
- La carpeta `src/`: son los ficheros de nuestra página web, como HTML, CSS, JS...
- La carpeta `public/`, que tiene fichero estáticos como imágenes, fuentes, favicon, librerías de JavaScript antiguas (jQuery, ...)
- Y la carpeta `docs/`, que es generada automáticamente cuando arrancamos el proyecto. El Kit lee los ficheros que hay dentro de `src/` y `public/`, los procesa y los genera dentro de `public/` y `docs/`.

## Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) con una versión superior a la 14 para trabajar con este Starter Kit:

### Pasos a seguir cada vez que queremos arrancar un proyecto desde cero:

1. **Crea tu propio repositorio.**
1. Descarga este **Starter kit desde GitHub**.
   - No recomendamos que clones este repo ya que no podrás añadir commits.
1. **Copia todos los ficheros** de este Starter kit en la carpeta raíz de tu repositorio.
   - Recuerda que debes copiar **también los ficheros ocultos** que comienzan por un punto.
   - Si has decidido clonar este repo, no debes copiar la carpeta `.git`. Si lo haces estarás machacando tu propio repositorio.
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Pasos para arrancar el proyecto:

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez que te pongas a programar.** Para ello ejecuta el comando:

```bash
npm run dev
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm run dev` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

### Pasos para publicar el proyecto en GitHub Pages:

Para generar tu página para producción ejecuta el comando:

```bash
npm run build
```

Y a continuación:

1. Sube a tu repo la carpeta `docs/` que se te acaba de generar.
1. Entra en la pestaña `settings` de tu repo.
1. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.
1. Y ya estaría!!!

Además, los comandos:

```bash
npm run push-docs
```
o

```bash
npm run deploy
```

son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón. Te recomendamos ver el fichero `package.json` para aprender cómo funciona.
<!--
## Flujo de archivos con Gulp

Estas tareas de Gulp producen el siguiente flujo de archivos:

![Gulp flow](./gulp-flow.png)

## `gulpfile.js` y `config.json`

Nuestro **gulpfile.js** usa el fichero `config.json` de configuración con las rutas de los archivos a generar / observar.

De esta manera separarmos las acciones que están en `gulpfile.js` de la configuración de las acciones que están en `config.json`.
-->
## Estructura de carpetas

La estructura de carpetas tiene esta pinta:

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ images
 |  └─ logo.jpg
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |  └─ events.js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```

> **NOTA:** Los partials de HTML y SASS del proyecto son orientativos. Te recomendamos usar los que quieras, y borrar los que no uses.
<!--
## Vídeotutoriales del Starter kit

- [Qué es, trabajar con la versión de desarrollo y rutas relativas](https://www.youtube.com/watch?v=XwvhXvBijos)
- [Migración de un proyecto, trabajar con la versión de producción y GitHub Pages](https://www.youtube.com/watch?v=qqGClcgt9Uc)
- [Motor de plantillas](https://www.youtube.com/watch?v=4GwXOJ045Zg)
-->
## Falta algo?


