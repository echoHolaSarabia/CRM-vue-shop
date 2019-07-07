import Vue from 'vue'

//Extraemos los datos del .json
//export async function fetchProducts ({state, commit, dispatch, rootState}){
export async function fetchProducts ({commit}){
    try {
        const {data} = await Vue.axios({
          url: 'https://nodejs-api-shop-vue2.herokuapp.com/api/products_json/'
    })
    commit('setProducts', data.products)
    } catch (e) {
        commit('productsError', e.message)
    } finally {
        console.log('La petición para obtener los productos ha finalizado')
    }
}
    
export async function addProducts ({commit}, product) {
    try {
        await Vue.axios({
          method: 'POST',
          url: 'https://nodejs-api-shop-vue2.herokuapp.com/api/product',
          data: {
            id: Date.now(),
            name: product.name,
            picture: product.picture,
            price: product.price,
            stock: product.stock,
            category: product.category,
            color: product.color,
            descrip_esp: product.descrip_esp,
            descrip_eng: product.descrip_eng,
            descrip_grm: product.descrip_grm,
            actions: product.id,
            done: false
          }
        })
    } catch (e) {
        commit('productsError', e.message)
    } finally {
        console.log('La petición para crear una product ha finalizado')
    }
}
    
export async function updateProduct ({commit, dispatch}, product) {
    try {
        await Vue.axios({
          method: 'PUT',
          url: `https://nodejs-api-shop-vue2.herokuapp.com/api/product_update/${product._id}`,
          data: {
            id: product.id,
            name: product.name,
            picture: product.picture,
            price: product.price,
            stock: product.stock,
            category: product.category,
            color: product.color,
            actions: product.id,
            descrip_esp: product.descrip_esp,
            descrip_eng: product.descrip_eng,
            descrip_grm: product.descrip_grm,
            done: product.done
          }
        })
        dispatch('fetchProducts')
      } catch (e) {
        commit('productsError', e.message)
      } finally {
        console.log('La petición para actualizar un product ha finalizado')
      }
    }
    
    
    export async function updateProductstatus ({commit, dispatch}, product) {
      try {
        await Vue.axios({
          method: 'PUT',
          url: `https://nodejs-api-shop-vue2.herokuapp.com/api/product_update/${product._id}`,
          data: {
            id: product.id,
            name: product.name,
            picture: product.picture,
            price: product.price,
            stock: product.stock,
            category: product.category,
            color: product.color,
            actions: product.id,
            descrip_esp: product.descrip_esp,
            descrip_eng: product.descrip_eng,
            descrip_grm: product.descrip_grm,
            done: ! product.done
          }
        })
        dispatch('fetchProducts')
      } catch (e) {
        commit('productsError', e.message)
      } finally {
        console.log('La petición para actualizar el estado de product ha finalizado')
      }
    }
    
    export async function removeProduct ({commit, dispatch}, _id) {
      try {
        await Vue.axios({
          method: 'DELETE',
          url: `https://nodejs-api-shop-vue2.herokuapp.com/api/product_delete/${_id}`,
        })
        dispatch('fetchProducts')
      } catch (e) {
        commit('productsError', e.message)
      } finally {
        console.log('La petición para borrar el product ha finalizado')
      }
    }