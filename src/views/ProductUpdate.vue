<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <div v-if="selectedProduct">
                    <product-form :product="selectedProduct" @processProduct="updateProduct" v-bind:productTiulo="$t('lang.productos_add.titulo2')" v-bind:productSubmit="$t('lang.categoria_add.boton_ed')"></product-form>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import ProductForm from '@/components/ProductForm'

    export default {
        components: {
            ProductForm
        },
        computed: {
            ...mapState('products', ['selectedProduct'])
        },
        methods: {
            ...mapActions({
                _updateProduct: 'products/updateProduct'
            }),
            updateProduct (product) {
                this._updateProduct(product).then(() => {
                    this.$router.push('/upload/products')
                })
            }
        }
    }
</script>