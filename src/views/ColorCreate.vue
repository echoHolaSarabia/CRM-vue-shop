<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <div>
                     <color-form :color="color" :css="css" @processColor="addColor" v_bind:colorTiulo="$t('lang.color_add.t1')"></color-form>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { mapActions } from 'vuex'
    import ColorForm from '@/components/ColorForm'

    export default {
        components: {
            ColorForm
        },
        data (){
            return{
                color: {
                    id: null,
                    name: '',
                    css: '',
                    done: false
                }
            }
        },
        methods: {
            ...mapActions({
                createColor: 'colors/addColors'
            }),
            addColor (color) {
                this.createColor(color).then(() => {
                    this.$router.push('/attribute/colors')
                })
            }
        }
    }
</script>