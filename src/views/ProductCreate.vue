<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <div>
                     <product-form :product="product" :css="css" @processProduct="addProduct" v-bind:productTiulo="$t('lang.productos_add.titulo')"></product-form>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { mapActions } from 'vuex'
    import ProductForm from '@/components/ProductForm'

    export default {
        components: {
            ProductForm
        },
        data (){
            return{
                product: {
                    id: null,
                    name: '',
                    picture: '',
                    price: '',
                    stock: '',
                    color: [],
                    category: '',
                    descrip_esp: '',
                    descrip_eng: '',
                    descrip_grm: '',
                    done: false
                }
            }
        },
        methods: {
            ...mapActions({
                createProduct: 'products/addProducts'
            }),
            addProduct (product) {
                this.createProduct(product).then(() => {
                    this.$router.push('/upload/products')
                })
            }
        }
    }
</script>