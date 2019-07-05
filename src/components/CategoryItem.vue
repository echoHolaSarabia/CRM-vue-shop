<!-- Template para la ampliada de producto -->
<template>
    <b-card
        :title="category.name"
        :img-src="category.picture"
        :img-alt="category.name"
        img-top
        style="max-width: 20rem; text-align:center;"
        class="mb-2"
    >
        <b-button
            block
            variant="warning"
            @click="goToUpdateCategory"
        >
            {{ $t('lang.color_add.editar') }}
        </b-button>

        <b-button
            block
            variant="danger"
            @click="removeCategory(category.name)"
        >
            {{ $t('lang.color_add.eliminar') }}
        </b-button>

    </b-card>
</template>

<script>

import {mapMutations, mapActions} from 'vuex'

    export default{
        props: {
            category: {
                type: Object,
                required: true,
            }
        },
        methods: {
        ...mapActions({
          _updateCategoryStatus: 'categories/updateCategoryStatus',
          _removeCategory: 'categories/removeCategory',
        }),
        ...mapMutations('categories', ['setCategory']),
        goToUpdateCategory () {
          this.setCategory(this.category)
          this.$router.push({
            name: 'categories-update',
            params: {id: this.category.id}
          })
        },
        updateCategoryStatus () {
          this._updateCategoryStatus(this.category)
        }, 
        removeCategory (name) {

           const hola = this.$t('lang.categoria_add.alert');
           const hola2 = this.$t('lang.categoria_add.alert2');

            if(confirm( hola + "'" + name + "'" + hola2 + "?")){
             this._removeCategory(this.category.id)
            }


        }
      }
    }
</script>

<style scoped>
.card-img-top {
    width: auto!important;
    margin-top: 30px;
}
</style>