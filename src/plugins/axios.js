//Usamos Axios para enviar peticiones HTTP a endpoints
//Uso https://www.npmjs.com/package/vue-axios

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

//Definimos una url de base para facilitar migraciones o cambios de dominio futuros
//const baseURL = 'http://localhost:3000'
const baseURL = 'https://vue-shop-prueba-tecnica.s3-eu-west-1.amazonaws.com/fixtures/'

axios.defaults.baseURL = baseURL;

Vue.use(VueAxios, axios);