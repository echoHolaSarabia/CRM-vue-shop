<template>
  <div id="app" >

    <navigation-logged class="mt-3"></navigation-logged>
    
    <router-view/>
  </div>
</template>

<script>
import NavigationLogged from '@/components/Navigations/Logged'
import i18n from './lang'

export default {
  name: 'app',
  components: {
    NavigationLogged
    },
    state: {
          fallback:'es',
          locale:''
     },
     getters: {
          language (state) {
               return state.locale
          }
     },
    i18n
}
</script>

<style>
  

</style>
