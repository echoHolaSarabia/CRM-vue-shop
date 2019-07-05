<!-- El template es la estética del componente -->
<template>
    <div v-if="categories.length">
       <paginate
            name="categories"
            :list="categories"
            :per="perPage"
       > 

       <b-row class="text-center espacio-superior">
                <b-col cols="12">
                    <h3>
                        {{ $t('lang.categoria_add.titulo') }}
                    </h3>
                </b-col>
                <b-col>
                    <b-button
                        class="text-white"
                        block
                        @click="goToCreateCategory"
                    >
                        {{ $t('lang.categoria_add.boton') }}
                    </b-button>

                </b-col>
             </b-row>


            <b-card-group columns>
                <category-item
                    v-for="category in orderedUsers"
                    :category="category"
                    :key="category.id"
                ></category-item>
            </b-card-group>
            
        </paginate>

        <paginate-links
            for="categories"
            :classes="{
                'ul': 'pagination',
                'li': 'page-item',
                'li > a': 'page-link'
            }"
        ></paginate-links>
    </div>
    <b-alert v-else show variant="info">{{ $t('lang.categoria_add.boton') }}</b-alert>
</template>

<script>
    //importo para poder acceder al store
    import { mapActions, mapMutations, mapState } from 'vuex'

    //importo el template de la categoría
    import CategoryItem from './CategoryItem'

    //Exporto para que esté disponible y pueda ser llamado
    export default{
        components: {
            CategoryItem
        },
        //Obtenemos Productos
        mounted (){
            this.fetchCategories()
        },
        //Configuramos paginación
        data (){
            return{
                paginate: ['categories'], 
                perPage: 9
            }
        },
        //Accedemos a los productos que ha devuelto la petición http
        //['products'] es la clave que hay en el state.js
        computed: {
            ...mapState('categories', ['categories']),
            orderedUsers: function () {
                    return _.orderBy(this.paginated('categories'), 'id', 'desc')
                }
              
        },
        //Mapeamos la acción para poder establecer los productos
        methods: {
            //Actions o methods según sea (nombre del modulo, [accion])
            ...mapActions('categories', ['fetchCategories']),
            goToCreateCategory () {
                this.$router.push({
                    name: 'category-create',
          })
        },

        }
    }
</script>

<style scoped>

.espacio-superior{
    margin-bottom: 3rem !important;
}

.pagination{
    float:right!important;
}

.card{
    flex-direction: row!important;
}

.card-columns{
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
}
</style>

