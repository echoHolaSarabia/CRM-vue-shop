## Respuesta a las preguntas técnicas ##
### de Cristian Sarabia Martínez ###
----

### Si has integrado un sistema de autentificación en la API, explica cuál y por qué.
> Se ha incorporado un sistema de autenticación a través del paquete JWT.
Este sistema únicamente autoriza el acceso a usuarios registrados a través de la autenticación de su token de acceso, el cual vence a los 14 días.

Pueden enviarse peticiones denegadas a través de la url:
https://nodejs-api-shop-vue2.herokuapp.com/api/private/

Sin embargo, el sistema para crear nuevas cuentas de usuario no está terminado. Dichas peticiones irían aquí:
https://nodejs-api-shop-vue2.herokuapp.com/api/signup

La creación del sistema de autenticaciones es siempre interesante para proteger los servicios de datos de accesos no deseados, o para ofrecer servicios de pago en APIs que ofrezcan información de interés general. Ej: Servicios de meteorología, datos deportivos, feeds de noticias...


### En la parte frontal, si has usado librerías de componentes (Material Design, Vuetify, Keen-UI…), explica cuál y por qué.
> Se ha empleado Bootstrap-vue, ya que para los que usamos bootstrap habitualmente, el uso de esta adaptación de componentes es bastante intuitiva y con una curva de aprendizaje muy corta.

Además cuenta con una amplísima documentación y la mayor parte de los componentes que se necesitan habitualmente en el diseño de una UI.


### Si has optado por poner el CMS en Server Rendering (Angular Universal / Nuxt) explica cuál, por qué y cómo crees que afecta a la aplicación.
> Para el desarrollo de aplicaciones reales, creo obligatorio el uso de un SSR. El porqué es el tener un mayor control sobre los elementos del SEO on page tales como heads, metas, titles, H1, H2... titles, alts... en definitiva, poder hacer SEO de verdad.

Me hubiera encantado usar Nuxt en el desarrollo de este proyecto, pero honestamente, no leí la especificación deseable y al ser una aplicación de prueba la desarrollé en vue.js directamente.