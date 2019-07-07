<!-- Template para la ampliada de producto -->
<template>

    <b-card
        class="mb-2 bloque_colores"
    >

        <div class="box_color" v-bind:style="{ backgroundColor: color.css }"></div>
        <h4>{{ color.name }}</h4>
      
        <b-button
            variant="danger"
            @click.stop="removeColor(color.name)"
        >
            {{ $t('lang.color_add.eliminar') }}
        </b-button>


        <b-button
            block
            variant="warning"
           @click="goToUpdateColor"
        >
            {{ $t('lang.color_add.editar') }}
        </b-button>


    </b-card>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex'

    export default{
        props: {
            color: {
                type: Object,
                required: true,
            }
        },
        data: {color_back: '#673AB7'},
        methods: {
        ...mapActions({
          _updateColorStatus: 'colors/updateColorStatus',
          _removeColor: 'colors/removeColor',
        }),
        ...mapMutations('colors', ['setColor']),
        goToUpdateColor () {
          this.setColor(this.color)
          this.$router.push({
            name: 'colors-update',
            params: {id: this.color.id}
          })
        },
        updateColorStatus () {
          this._updateColorStatus(this.color)
        },
        removeColor (name) {
        const hola = this.$t('lang.productos_add.alert');
           const hola2 = this.$t('lang.color_add.alert');

            if(confirm( hola + "'" + name + "'? " + hola2)){
                this._removeColor(this.color._id)
            }
        }

      },
    }
</script>

<style scoped>
.bloque_colores .card-title{
    float: left!important;
}

.bloque_colores .btn {
    float: right;
    display: block;
    width: auto!important;
    margin-left: 20px;
}

.bloque_colores h4{
    width: fit-content;
    display: contents;
}

.box_color{
    height: 30px;
    width: 30px;
    float: left;
    margin-right: 20px;

    border-color: #e9e9e9;
    border-style: solid;
    border-width: thin;
}



</style>