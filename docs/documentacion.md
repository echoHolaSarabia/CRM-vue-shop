## Prueba técnica FULLSTACK ##
### de Cristian Sarabia Martínez ###
----

## Introducción
Desarrollo de una aplicación web tipo CMS cuyo propósito es demostrar las habilidades técnicas en los lenguajes y metodologías especificadas.

## Tecnologías empleadas
### Front-End
* **Vue.js**: Framwork de desarrollo 
* **Vuex**: Control de estados
* **Bootstrap-Vue**: Framework de componentes
* **Axios**: Peticiones HTTP
* **vee-validate**: Validación de formularios
* **vue-paginate**: Paginación de resultados
* **vue-i18n**: Control de traducciones
* **VuexPersistence**: Persistencia de información en carrito de compra
* **localForage**: Cacheo de información a nivel de navegador

### Back-End
* **Node.js**: Lenguaje de servidor
* **express js**: Framework de desarrollo
* **mongoose**: Validación de datos Schema
* **MongoDB**: Almacenamiento información


### Globales, tester y documentación
* **IDE**: Visual Studio Code
* **Photoshop**: Retoque imágenes
* **GitHub**: Repositorio de versiones
* **swaggerhub**: Documentación de la API
* **markdownlivepreview**: Documentación del desarrollo
* **PostMan**: Test de peticiones HTTP
* **Robo 3T**: gestión de Mongo BBDD
* **npm**: Instalador de paquetes
* **Chome**: Navegador
* **Vue Dev Tools**: Control de estados desde Chrome
* **AWS**: Servidor de despliegue


## Objetivo y evolución
Se pretendía desarrollar un CRM con las secciones de *productos*, *colores* y *categorías*, cuyos datos puediesen ser CRUD.

Además, debía añadirse la *traducción de campos multilingüe* y se especificaba que no era necesario el desarrollo del frontal público.

Durante el desarrollo, por razones estéticas de representatividad de datos, se decidió crear la *home* de una tienda online con un **carrito de compra con persistencia de datos**.

Además, ya que el objetivo era mostrar el nivel de conocimientos en una prueba técnica, se optó por añadir funcionalidades extras tales como:

* Buscador de productos con filters.
* Paginación de resultados con ordenación que facilitase la visualización de los últimos items añadidos.
* Opciones para configurar el núm. de resultados en la paginación.
* Aplicación de las traducciones a entorno real.
* Descripciones de los productos en varios idiomas.
* Validación de formularios.

## Desarrollo

Para no trabajar directamente sobre la BBDD de Mongo, se ha exportado, a través de la API, un .json alojado en el directorio public/fixtures.

La tienda ha sido creada con los módulos visuales de bootstrap, si bien, por no querer dilatar demasiado el tiempo de entrega, no se ha optimizado la visualización para resoluciones < 1200px.

Así mismo, podría haberse añadido un módulo de login que permitiese restringir al acceso a determinadas rutas que se considerasen privadas (secciones de gestión de información), pero, una vez más, por encontrarse fuera de los requerimentos del proyecto, y por no exceder en demasía los tiempos de entrega, se ha omitido.

## Conclusiones
Este proyecto me ha permitido familiarizarme con tecnologías que desconocía, tales como swaggerhub o el propio markdown que aquí se emplea.


Espero que el desarrollo esté a la altura de vuestras expectativas y, cualquier cuestión, estaré encantado de aclarálosla.

Un cordial saludo,
Cristian Sarabia