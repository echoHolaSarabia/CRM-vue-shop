import Vue from 'vue'
import Vuex from 'vuex'

//Idea para aplicaciones web progresivas. Cachea en IndexedDB de navegador
import localForage from 'localforage'

//Se usa para cachear poca información en LocalStorage
import VuexPersistence from 'vuex-persist'
import products from './modules/products'
import colors from './modules/colors'
import categories from './modules/categories'
import cart from './modules/cart'
import idioma from './modules/idioma'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    /*storage: window.localStorage,*/
    storage: localForage,    
    modules: ['cart']
})

export default new Vuex.Store({
    state : {
        //rootState
    },
    modules: {
        products,
        cart,
        categories,
        colors,
        idioma
    },
    plugins: [vuexLocal.plugin]
})
