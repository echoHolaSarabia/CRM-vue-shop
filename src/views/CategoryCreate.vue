<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <div>
                     <category-form :category="category" :picture="picture" @processCategory="addCategory" v-bind:categoryTiulo="$t('lang.categoria_add.titulo2')"></category-form>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { mapActions } from 'vuex'
    import CategoryForm from '@/components/CategoryForm'

    export default {
        components: {
            CategoryForm
        },
        data (){
            return{
                category: {
                    id: null,
                    name: '',
                    picture: '',
                    done: false
                }
            }
        },
        methods: {
            ...mapActions({
                createCategory: 'categories/addCategories'
            }),
            addCategory (category) {
                this.createCategory(category).then(() => {
                    this.$router.push('/attribute/categories')
                })
            }
        }
    }
</script>