<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <div v-if="selectedCategory">
                    <category-form :category="selectedCategory" @processCategory="updateCategory" v-bind:categoryTiulo="$t('lang.categoria_add.titulo3')" v-bind:categorySubmit="$t('lang.categoria_add.boton_ed')"></category-form>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import CategoryForm from '@/components/CategoryForm'

    export default {
        components: {
            CategoryForm
        },
        computed: {
            ...mapState('categories', ['selectedCategory'])
        },
        methods: {
            ...mapActions({
                _updateCategory: 'categories/updateCategory'
            }),
            updateCategory (category) {
                this._updateCategory(category).then(() => {
                    this.$router.push('/attribute/categories')
                })
            }
        }
    }
</script>