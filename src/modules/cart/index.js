//Contiene el estado: datos
import state from './state'
//alteran el estado, los datos
import * as mutations from './mutations'
//filtran los datos. X ejemplo: si quiero saber el valor de los artículos de un carrito, o creo una función en un componente
//o llamo a un getter
import * as getters from './getters'

export default {
    namespaced: true,
    state,
    mutations,
    getters
}

