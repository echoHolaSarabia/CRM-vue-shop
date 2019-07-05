<template>
<div class="menu_superior" style="margin-top: 0rem">
    <b-nav tabs class="container">
        <b-nav-item exact to="/">{{ $t('lang.menu.tienda') }}</b-nav-item>
        <b-nav-item to="/upload/products">{{ $t('lang.menu.g_productos') }}</b-nav-item>
        <b-nav-item to="/attribute/categories">{{ $t('lang.menu.g_categorias') }}</b-nav-item>
        <b-nav-item to="/attribute/colors">{{ $t('lang.menu.g_colores') }}</b-nav-item>
    
        <b-nav-item class="locale-changer">
          <select v-model="$i18n.locale" @change="goToUpdateLanguage($i18n.locale)">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
          </select>
        </b-nav-item>
        
    </b-nav>

  </div>
</template>



<script>

import { mapActions, mapMutations, mapState } from 'vuex'

    export default{
       name: 'locale-changer',
        data () {
          return { langs: ['en', 'es', 'de',] }
        },

         computed: {
            ...mapState('idioma', ['selectedIdioma'])
        },

         methods: {
      

             ...mapMutations('idioma', ['setIdioma']),
        goToUpdateLanguage (lang) {
          this.setIdioma(lang)          
          
         }
      }
    }


     

</script>

<style>
.nav-tabs .router-link-exact-active, .router-link-active {
    color: #ffffff;
    background-color: #4bcadc;
}

.nav-tabs .nav-item .nav-link:hover, .nav-tabs .nav-item .nav-link:focus {
    /* border-color: #e9ecef #e9ecef #dee2e6; */
    color: #ffffff;
    background-color: #4bcadc;
    
}

.nav-tabs .nav-link {
    border: 0px!important;
    padding: 20px;
    border-radius: 0!important;
}

.nav-tabs .nav-link:hover {
    color: #ffffff;
}


.nav-tabs {
    border: 0px!important;
    overflow: hidden;
}

.menu_superior {
      background-color: #17a2b8!important;
      margin-top: 0rem !important;
      
}

.menu_superior a {
    color: #ffffff;
    text-decoration: none;
    background-color: transparent;
}


</style>
