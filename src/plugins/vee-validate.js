//Validaciones de formularios
//Uso https://baianat.github.io/vee-validate/guide/getting-started.html#installation
import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';

//Para las traducciones de los errores
import validatorEs from 'vee-validate/dist/locale/es';

//Cuando se usa junto a BootstraopVue hay un problema con una clase al llamarse igual, por ello podemos aprovechar que se importa
//con Vue.use para asignar un alias a esa clase

//Vue.use(VeeValidate); --> Importación original

Vue.use(VeeValidate, {
    fieldsBagName:  'veeFields'
});

Validator.localize('es', validatorEs);


//Creo una nueva función para añadir fortaleza a la contraseña
Validator.extend('strength_password', {
    getMessage: field => `El campo ${field} debe contener al menos: 1 letra mayúscula, 1 letra minúscula, 1 número y un carácter especial (por ejemplo,. _ &? Etc.)`,
    validate: value => {
        //minúscula + mayúscula + número + símbolo
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        //test devuelve booleano
        return strongRegex.test(value);
    }
});