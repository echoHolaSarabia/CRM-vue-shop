<!-- Template para la ampliada de producto -->
<template>
    <b-card
        :title="product.name"
        :img-src="product.picture"
        :img-alt="product.name"
        img-top
      
        class="mb-3"
    >
        <b-button
            block
            variant="warning"
            @click="$emit('addToCard', product)"
        >
            {{ $t('lang.portada.anadir_carrito') }}
        </b-button>
    </b-card>
</template>

<script>
    export default{
        props: {
            product: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped>
.card-deck .card{
    flex: auto!important;
}

.card-deck .card {
    max-width: calc(33% - 30px);
}



.card-body{
    padding-bottom: 20px!important;
    min-height: 180px!important;
}
.card-body .btn {
    position: absolute;
    bottom: 20px;
    left: auto;
    max-width: 200px!important;
}

</style>