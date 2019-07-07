import Vue from 'vue'

//Extraemos los datos del .json
//export async function fetchProducts ({state, commit, dispatch, rootState}){
export async function fetchCategories ({commit}){
    try {
        const {data} = await Vue.axios({
          url: 'https://nodejs-api-shop-vue2.herokuapp.com/api/categories_json/'
    })
    commit('setCategories', data.categories)
    } catch (e) {
        commit('categoriesError', e.message)
    } finally {
        console.log('La petición para obtener las categorías ha finalizado')
    }
}
    
export async function addCategories ({commit}, category) {
    try {
        await Vue.axios({
          method: 'POST',
          url: 'https://nodejs-api-shop-vue2.herokuapp.com/api/category',
          data: {
            id: Date.now(),
            name: category.name,
            picture: category.picture,
            done: false
          }
        })
    } catch (e) {
        commit('categoriesError', e.message)
    } finally {
        console.log('La petición para crear una categoria ha finalizado')
    }
}
    
export async function updateCategory ({commit, dispatch}, category) {
    try {
        await Vue.axios({
          method: 'PUT',
          url: `https://nodejs-api-shop-vue2.herokuapp.com/api/category_update/${category._id}`,
          data: {
            id: category.id,
            name: category.name,
            picture: category.picture,
            done: category.done
          }
        })
        dispatch('fetchCategories')
      } catch (e) {
        commit('categoriesError', e.message)
      } finally {
        console.log('La petición para actualizar una categoria ha finalizado')
      }
    }
    
    
    export async function updateCategoryStatus ({commit, dispatch}, category) {
      try {
        await Vue.axios({
          method: 'PUT',
          url: `https://nodejs-api-shop-vue2.herokuapp.com/api/category_update/${category._id}`,
          data: {
            id: category.id,
            text: category.text,
            done: ! category.done
          }
        })
        dispatch('fetchCategories')
      } catch (e) {
        commit('categoriesError', e.message)
      } finally {
        console.log('La petición para actualizar el estado de categorias ha finalizado')
      }
    }
    
    export async function removeCategory ({commit, dispatch}, id) {
      try {
        await Vue.axios({
          method: 'DELETE',
          url: `https://nodejs-api-shop-vue2.herokuapp.com/api/category_delete/${id}`,
        })
        dispatch('fetchCategories')
      } catch (e) {
        commit('categoriesError', e.message)
      } finally {
        console.log('La petición para actualizar el estado de la categoria ha finalizado')
      }
    }