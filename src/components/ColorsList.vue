<!-- El template es la estética del componente -->
<template>

<div>
    <b-row class="text-center espacio-superior">
                <b-col cols="12">
                    <h3>
                      {{ $t('lang.color_add.titulo') }}
                    </h3>
                </b-col>
                <b-col>
                    <b-button
                        class="text-white"
                        block
                        @click="goToCreateColor"
                    >
                        {{ $t('lang.color_add.boton') }}
                    </b-button>
                </b-col>
    </b-row>


    <div v-if="colors.length">
       <paginate
            name="colors"
            :list="colors"
            :per="perPage"
       > 
            <div>
                <colors-item
                    v-for="color in orderedUsers"
                    :color="color"
                    :key="color.id"
                    @addToCard="addProductToCart"
                ></colors-item>
            </div>
            
        </paginate>

        <paginate-links
            for="colors"
            :classes="{
                'ul': 'pagination',
                'li': 'page-item',
                'li > a': 'page-link'
            }"
        ></paginate-links>
    </div>
    <b-alert v-else show variant="info">{{ $t('lang.color_add.error2') }}</b-alert>
</div>
</template>

<script>
    //importo para poder acceder al store
    import { mapActions, mapMutations, mapState } from 'vuex'

    //importo el template de la categoría
    import ColorsItem from './ColorsItem'

    //Exporto para que esté disponible y pueda ser llamado
    export default{
        components: {
            ColorsItem
        },
        //Obtenemos Productos
        mounted (){
            this.fetchColors()
        },
        //Configuramos paginación
        data (){
            return{
                paginate: ['colors'], 
                perPage: 10
            }
        },
        //Accedemos a los productos que ha devuelto la petición http
        //['products'] es la clave que hay en el state.js
        computed: {
            ...mapState('colors', ['colors']),
                orderedUsers: function () {
                    return _.orderBy(this.paginated('colors'), 'id', 'desc')
                }

        },
        //Mapeamos la acción para poder establecer los productos
        methods: {
            //Actions o methods según sea (nombre del modulo, [accion])
            ...mapActions('colors', ['fetchColors']),
            ...mapMutations('cart', ['addProduct']),
            addProductToCart (product){
                this.addProduct(product)
            },
            goToCreateColor () {
                this.$router.push({
                    name: 'color-create',
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
</style>