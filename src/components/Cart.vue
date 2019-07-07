<template>
    <div v-if="cart.length">
        <b-table striped hover :items="cart" :fields="fields">
            <template slot="actions" slot-scope="cell">
                <!-- @click.stop evita la propagación -->
                <b-button
                    size="sm"
                    variant="danger"
                    @click.stop="removeProductFromCart(cell.item)"
                >{{ $t('lang.portada.delete_carrito') }}
                </b-button>
            </template>
        </b-table>
        <b-alert show variant="success" class="text-center">{{ $t('lang.portada.total_carrito') }}: {{ totalCost.toFixed(2) }}€</b-alert>
    </div>
    <b-alert v-else show variant="info">{{ $t('lang.portada.emty') }}</b-alert>
</template>

<script>
    import { mapGetters, mapMutations, mapState } from 'vuex'
    export default{
        data(){
            return{
                fields: ['name', 'qty', 'price', 'actions']
            } 
        },
        computed: {
            //...mapState('NombreModulo', ['NombreEstado'])
            ...mapState('cart', ['cart']),
            ...mapGetters('cart', ['totalCost']),
        },
        methods: {
            ...mapMutations('cart', ['removeProductFromCart'])
        }
    }
</script>