<!-- El template es la estética del componente -->
<template>
    <div v-if="products.length">
       <paginate
            name="products"
            :list="products"
            :per="perPage"
       > 
            <b-card-group deck>
                <product-item 
                    v-for="product in paginated('products')"
                    :product="product"
                    :key="product.id"
                    @addToCard="addProductToCart"
                ></product-item>
            </b-card-group>
            
        </paginate>

        <paginate-links
            for="products"
            :classes="{
                'ul': 'pagination',
                'li': 'page-item',
                'li > a': 'page-link'
            }"
        ></paginate-links>
    </div>
    <b-alert v-else show variant="info">{{ $t('lang.productos.emty') }}</b-alert>

    

</template>

<script>
    //importo para poder acceder al store
    import { mapActions, mapMutations, mapState } from 'vuex'

    //importo el template del producto
    import ProductItem from './ProductItem'

    //Exporto para que esté disponible y pueda ser llamado
    export default{
        components: {
            ProductItem
        },
        //Obtenemos Productos
        mounted (){
            this.fetchProducts()
        },
        //Configuramos paginación
        data (){
            return{
                paginate: ['products'], 
                perPage: 9
            }
        },
        //Accedemos a los productos que ha devuelto la petición http
        //['products'] es la clave que hay en el state.js
        computed: {
            ...mapState('products', ['products'])
        },
        //Mapeamos la acción para poder establecer los productos
        methods: {
            //Actions o methods según sea (nombre del modulo, [accion])
            ...mapActions('products', ['fetchProducts']),
            ...mapMutations('cart', ['addProduct']),
            addProductToCart (product){
                this.addProduct(product)
            }

        }
    }
</script>

<style scoped>

.pagination{
    float:right!important;
}

</style>