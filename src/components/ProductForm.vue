<template>
    <div class="espacio-superior mb-5">
        <b-row class="text-center">
            <b-col cols="12">
                <h3>{{ $t(productTiulo) }}</h3>

                <b-form @submit.prevent="$emit('processProduct', product)">
                    <b-form-group
                        id="product"
                        label=""
                        label-for="product"
                    >
                    
                    <b-card class="mb-3 mt-5" v-bind:header="$t('lang.productos_add.t1')">
                        <b-form-input
                            autocomplete="off"
                            id="product"
                            v-model="product.name"
                            :state="!$v.product.name.$invalid"
                            v-bind:placeholder="$t('lang.productos_add.t1_placeholder')"
                            @input="$v.product.$touch"
                        ></b-form-input>

                        <b-form-invalid-feedback id="ProductInfo" v-if="$v.product.$dirty">
                            {{ $t('lang.categoria_add.error') }}
                        </b-form-invalid-feedback>
                        
                    </b-card>

                    <b-card class="mb-3 mt-5" v-bind:header="$t('lang.productos_add.t2')">
                        <b-form-input
                            autocomplete="off"
                            id="product"
                            v-model="product.picture"
                            :state="!$v.product.picture.$invalid"
                            v-bind:placeholder="$t('lang.productos_add.t2_placeholder')"
                            @input="$v.product.$touch"
                        ></b-form-input>

                        <b-form-invalid-feedback id="ProductInfo" v-if="$v.product.$dirty">
                            {{ $t('lang.categoria_add.error') }}
                        </b-form-invalid-feedback>
                    </b-card>

                    <b-card-group deck>

                        <b-card v-bind:header="$t('lang.productos_add.t3')">
                            <b-form-input
                                type="number"
                                step="any"
                                autocomplete="off"
                                id="product"
                                v-model.number="product.price"
                                v-bind:placeholder="$t('lang.productos_add.t3_placeholder')"
                                :state="!$v.product.price.$invalid"
                                @input="$v.product.$touch"
                            ></b-form-input>

                            <b-form-invalid-feedback id="productInfo" v-if="$v.product.$dirty">
                                {{ $t('lang.categoria_add.error2') }}
                            </b-form-invalid-feedback>

                        </b-card>

                        <b-card v-bind:header="$t('lang.productos_add.t4')">
                            <b-form-input
                                type="number"
                                autocomplete="off"
                                id="product"
                                v-model.number="product.stock"
                                v-bind:placeholder="$t('lang.productos_add.t4_placeholder')"
                                :state="!$v.product.stock.$invalid"
                                @input="$v.product.$touch"
                            ></b-form-input>

                             <b-form-invalid-feedback id="productInfo" v-if="$v.product.$dirty">
                                {{ $t('lang.categoria_add.error3') }}
                            </b-form-invalid-feedback>

                        </b-card>


                    <!-- <b-form-select
                        value-field="id"
                        text-field="type"
                 
                        data-vv-as="Nombre de la actividad"
                        :options="activity_types"
                        :state="$parent.validateState('activity_name')"
                        name="activity_name"
                        class="mb-3"
                    ></b-form-select>-->

                        <b-card v-bind:header="$t('lang.productos_add.t5')">
                            <select v-model="product.category">
                                <option 
                                    v-for="category in categories" 
                                    v-bind:key="category.id" 
                                    v-bind:value="category.id"
                                    >
                                        {{ category.name }}
                                </option>
                            </select>
                        </b-card>
                    </b-card-group>

                        <b-card class="mb-3 mt-5 bloque_colores" v-bind:header="$t('lang.productos_add.t6_placeholder')">
                            <b-row class="text-left">
                                <ul>
                                    <li v-for="color in colors" v-bind:key="color.id">
                                        <input type="checkbox"  v-bind:id="color.id" v-bind:value="color.id" v-model="product.color">
                                        <div class="box_color" v-bind:style="{ backgroundColor: color.css }"></div>
                                            <label>{{color.name}}</label>
                                    </li>
                                </ul>
                            </b-row>
                        </b-card>
                    
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-1 variant="info">{{ $t('lang.productos_add.t7_placeholder') }}</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>
                                <b-form-textarea
                                    id="textarea-small"
                                    v-model="product.descrip_esp"
                                    placeholder="Escribe aquí la descripción del producto en español. ¡Atento al SEO!"
                                ></b-form-textarea>
                            </b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-2 variant="info">{{ $t('lang.productos_add.t8_placeholder') }}</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>
                                <b-form-textarea
                                    id="textarea-small"
                                    v-model="product.descrip_eng"
                                    placeholder="Write here the description of the product in English"
                                ></b-form-textarea>
                            </b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-3 variant="info">{{ $t('lang.productos_add.t9_placeholder') }}</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>
                                <b-form-textarea
                                    id="textarea-small"
                                    v-model="product.descrip_grm"
                                    placeholder="Schreiben Sie hier die Beschreibung des Produktes in Deutsch"
                                ></b-form-textarea>
                            </b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                    </b-form-group>

                    <b-button
                        type="submit"
                        variant="primary"
                        :disabled="$v.product.$invalid"
                    >

                        {{ $t(productSubmit) }}
                    </b-button>

                </b-form>

            </b-col>
        </b-row>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength } from 'vuelidate/lib/validators'
    import { mapActions, mapMutations, mapState } from 'vuex'
    
    export default {

        mixins: [validationMixin],

        data() {
            return {
                selectedSelect: this.product.category,
            }
    
        },

        props: {
            product: {
                type: Object,
                required: true
            },
           
            productSubmit: {
                type: String,
                default: 'lang.productos_add.t10_boton'
            },
            productTiulo: {
                type: String,
                default: 'lang.productos_add.titulo2'
            },
        },

         validations: {
            product:{
                name: {
                    required, minLength: minLength(3)
                },
                picture: {
                    required, minLength: minLength(3)
                },
                price: {
                    required, 
                },
                stock: {
                    required, 
                }
            }
        },
        computed: {
            ...mapState('categories', ['categories']),
            ...mapState('colors', ['colors']),
        }
    }
</script>

<style scoped>
.espacio-superior{
    margin-top: 3rem !important;
}
.box_color{
    height: 20px;
    width: 20px;
    float: left;
    margin: 3px;
    border-color: #e4e4e4;
    border-width: thin;
    border-style: solid;
}
ul{
    list-style-type: none;
    columns: 3;
    -webkit-columns: 3;
    -moz-columns: 3;
}

ul > li{
    -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid; 
}

.bloque_colores .card-body{
    text-align:center; 
    margin:0 auto;
}
</style>