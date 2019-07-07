<template>
    <div class="espacio-superior">
        <b-row class="text-center">
            <b-col cols="12">
                <h3>{{ $t(categoryTiulo) }}</h3>

                <b-form @submit.prevent="$emit('processCategory', category)">

                <b-form-group
                    id="category"
                    label=""
                    label-for="category"
                >
                    <!-- La $v sale de vuelidate-->
                <b-card class="mb-3 mt-5" v-bind:header="$t('lang.categoria_add.t2')">
                    <b-form-input
                        autocomplete="off"
                        id="category"
                        v-model="category.name"
                        :state="!$v.category.name.$invalid"
                        v-bind:placeholder="$t('lang.categoria_add.t2_placeholder')"
                        @input="$v.category.$touch"
                    ></b-form-input>

                    
                    <b-form-invalid-feedback id="categoryInfo" v-if="$v.category.$dirty">
                        {{ $t('lang.color_add.error') }}
                    </b-form-invalid-feedback>

                </b-card>

                <b-card class="mb-3 mt-5" v-bind:header="$t('lang.categoria_add.t3')">

                    <b-form-input class="mt-3"
                        autocomplete="off"
                        id="picture"
                        v-model="category.picture"
                        :state="!$v.category.picture.$invalid"
                        v-bind:placeholder="$t('lang.categoria_add.t3_placeholder')"
                        @input="$v.category.$touch"
                    ></b-form-input>

                    <!--<b-form-file
                        accept=".jpg, .png, .gif"
                        type="file" 
                        id="category"
                        v-model="category.picture"
                        placeholder="Selecciona una imagen"
                        drop-placeholder="Arrastra una imagen aquí"
                        v-on:change="handleFileUpload()">
                    </b-form-file>

                    <div id="preview">
                        <img id="picture" :src="url" />
                    </div>

                    <input v-model="url"> --->
                
                    <b-form-invalid-feedback id="categoryInfo" v-if="$v.category.$dirty">
                        {{ $t('lang.color_add.error') }}
                    </b-form-invalid-feedback>
                </b-card>


                </b-form-group>

                    <b-button
                        type="submit"
                        variant="primary"
                        :disabled="$v.category.$invalid"
                    >
                        {{ $t(categorySubmit) }}
                        
                    </b-button>

                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength } from 'vuelidate/lib/validators'


    export default {
        
        mixins: [validationMixin],
        props: {
            category: {
                type: Object,
                required: true
            },
            categorySubmit: { 
                type: String,
                default: 'lang.categoria_add.boton2'
            },
            categoryTiulo: {
                type: String,
                default: 'lang.categoria_add.boton_ed2'
            }
        },
        
        validations: {
            category:{
                name: {
                    required, minLength: minLength(3)
                },
                 picture: {
                    required, minLength: minLength(3)
                }
            }
        },
    }
</script>

<style>
.espacio-superior{
    margin-top: 3rem !important;
}
</style>