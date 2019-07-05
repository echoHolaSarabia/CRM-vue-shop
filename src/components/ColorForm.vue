<template>
    <div class="espacio-superior">
        <b-row class="text-center">
            <b-col cols="12">
                <h3>{{ $t(colorTiulo) }}</h3>

                <b-form @submit.prevent="$emit('processColor', color)">

                <b-form-group
                    id="color"
                    label=""
                    label-for="color"
                >
                    <!-- La $v sale de vuelidate-->
                    <b-card class="mb-3 mt-5" v-bind:header="$t('lang.color_add.t2')">
                        <b-form-input
                            autocomplete="off"
                            id="color"
                            v-model="color.name"
                            :state="!$v.color.name.$invalid"
                            v-bind:placeholder="$t('lang.color_add.t2_placeholder')"
                            @input="$v.color.$touch"
                        ></b-form-input>
                        

                        <b-form-invalid-feedback id="colorInfo" v-if="$v.color.$dirty">
                            {{ $t('lang.color_add.error') }}
                        </b-form-invalid-feedback>
                    </b-card>

                    <b-card class="mb-2" v-bind:header="$t('lang.color_add.t3')">
                        <verte id="css" v-model="color.css" picker="square" model="rgb"></verte> {{ color.css }}
                    </b-card>

                </b-form-group>

                    <b-button
                        type="submit"
                        variant="primary"
                        :disabled="$v.color.$invalid"
                    >
                        {{ $t(colorSubmit) }}
                    </b-button>

                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength } from 'vuelidate/lib/validators'
    import Verte from 'verte';
    import 'verte/dist/verte.css';


    export default {
        
        mixins: [validationMixin],
        props: {
            color: {
                type: Object,
                required: true
            },
            css: {
                type: Object
            },
            colorSubmit: {
                type: String,
                default: 'lang.color_add.boton_ed'
            },
            colorTiulo: {
                type: String,
                default: 'lang.color_add.t1'
            }
        },
        components: { Verte },
        
        validations: {
            color:{
                name: {
                    required, minLength: minLength(3)
                }
            }
        }
    }
</script>

<style>
.espacio-superior{
    margin-top: 3rem !important;
}
</style>