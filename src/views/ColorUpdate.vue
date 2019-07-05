<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <div v-if="selectedColor">
                    <color-form :color="selectedColor" @processColor="updateColor" v-bind:colorTiulo="$t('lang.categoria_add.boton_ed2')" v-bind:colorSubmit="$t('lang.categoria_add.boton_ed2')"></color-form>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import ColorForm from '@/components/ColorForm'

    export default {
        components: {
            ColorForm
        },
        computed: {
            ...mapState('colors', ['selectedColor'])
        },
        methods: {
            ...mapActions({
                _updateColor: 'colors/updateColor'
            }),
            updateColor (color) {
                this._updateColor(color).then(() => {
                    this.$router.push('/attribute/colors')
                    
                })
            }
        }
    }
</script>