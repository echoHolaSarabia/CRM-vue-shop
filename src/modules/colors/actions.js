import Vue from 'vue'

//Extraemos los datos del .json
//export async function fetchProducts ({state, commit, dispatch, rootState}){
export async function fetchColors ({commit}){
    try {
        //const data = await fetch('https://nodejs-api-shop-vue2.herokuapp.com/api/colors_json/')
        //const colors = await data.json()
        const {data} = await Vue.axios({
          url: 'https://nodejs-api-shop-vue2.herokuapp.com/api/colors_json/'
    })
    //commit('colors/setColors', colors, { root: true })
    commit('setColors', data.colors)
    } catch (e) {
        commit('colorsError', e.message)
    } finally {
        console.log('La petición para obtener los colores ha finalizado')
    }
}
    
export async function addColors ({commit}, color) {
    try {
        await Vue.axios({
          method: 'POST',
          url: 'https://nodejs-api-shop-vue2.herokuapp.com/api/color',
          data: {
              id: Date.now(),
              name: color.name,
              css: color.css,
              done: false
            }
        })
    } catch (e) {
        commit('colorsError', e.message)
    } finally {
        console.log('La petición para crear una color ha finalizado')
    }
}
    
export async function updateColor ({commit, dispatch}, color) {
    try {
        await Vue.axios({
          method: 'PUT',
          url: `https://nodejs-api-shop-vue2.herokuapp.com/api/color_update/${color._id}`,
          data: {
              id: color.id,
              name: color.name,
              css: color.css,
              done: color.done
          }
        })
        dispatch('fetchColors')
      } catch (e) {
        commit('colorsError', e.message)
      } finally {
        console.log('La petición para actualizar un color ha finalizado')
      }
    }
    
    
    export async function updateColorStatus ({commit, dispatch}, color) {
      try {
        await Vue.axios({
          method: 'PUT',
          url: `https://nodejs-api-shop-vue2.herokuapp.com/api/color_update/${color._id}`,
          data: {
              id: color.id,
              name: color.name,
              css: color.css,
              done: ! color.done
            
          }
        })
        dispatch('fetchColors')
      } catch (e) {
        commit('colorsError', e.message)
      } finally {
        console.log('La petición para actualizar el estado de color ha finalizado')
      }
    }
    
    export async function removeColor ({commit, dispatch}, id) {
      try {
        await Vue.axios({
          method: 'DELETE',
          url: `https://nodejs-api-shop-vue2.herokuapp.com/api/color_delete/${id}`,
        })
        dispatch('fetchColors')
      } catch (e) {
        commit('colorsError', e.message)
      } finally {
        console.log('La petición para actualizar el estado del color ha finalizado')
      }
    }