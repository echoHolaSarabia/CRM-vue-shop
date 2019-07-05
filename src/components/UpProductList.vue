<template>

  <b-container fluid>

     <b-row class="text-center espacio-superior">
                <b-col cols="12">
                    <h3>
                       {{ $t('lang.menu.g_productos') }}
                    </h3>
                </b-col>
                <b-col>
                    <b-button
                        class="text-white"
                        block
                        @click="goToCreateProduct"
                    >
                         {{ $t('lang.productos.anadir') }}
                    </b-button>
                </b-col>
             </b-row>
 
    <b-row>
      <b-col md="6" class="my-1 mb-4">
        <b-form-group label-cols-sm="3" v-bind:label="$t('lang.productos.buscar')" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" v-bind:placeholder="$t('lang.productos.buscar_placeholder')"></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">{{ $t('lang.productos.borrar') }}</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="6" class="my-1 mb-4">
        <b-form-group label-cols-sm="3" v-bind:label="$t('lang.productos.borrar')" class="mb-0">
          <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>



    <!-- Main table element -->

<b-table
    show-empty
    stacked="md"
    :items= this.products
    :fields="fields"
    :current-page="currentPage"
    :per-page="perPage"
    :filter="filter"
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    @filtered="onFiltered"
>
    
    <template slot="picture" slot-scope="row">
        <img :src="row.value" class="img_width_list">
    </template>

    <template slot="name" slot-scope="row">
        {{ row.value }}
    </template>

    <template slot="category" slot-scope="row">
        {{ row.value ? givMeName(row.value) : 'Sin categoria' }}
    </template>

    <template slot="color" slot-scope="row">
        <div v-for="products in row.value" v-bind:key="products.id" class="box_color"
            v-bind:style="{
            backgroundColor: products ? givMeColor(products) : '#ffffff',
            display: row.value ? 'block' : 'none',
            }">
        </div>
   </template>

    <template slot="actions" slot-scope="row">
        <b-button variant="warning" size="sm" @click="goToUpdateProduct(row.item)" class="mr-1">
            {{ $t('lang.productos.editar') }}
        </b-button>
        <b-button variant="info" size="sm" @click="row.toggleDetails" class="mr-1">
            {{ $t('lang.productos.detalles') }}
        </b-button>
        <b-button variant="danger" size="sm" @click="removeProduct(row.item.id, row.item.name)">
            {{ $t('lang.productos.eliminar') }}
        </b-button>


         
    </template>

    <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
    </template>
</b-table>

    <b-row class="pagination espacio-superior">
      <b-col md="6" class="my-1 pagination">

        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>
    
    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>

</template>

<script>

    //importo para poder acceder al store
    import { mapActions, mapMutations, mapState } from 'vuex'

    //Exporto para que esté disponible y pueda ser llamado
    export default{

 

        mounted (){
            //Obtenemos Productos
            
            this.fetchCategories(),
            this.fetchColors(),
            this.fetchProducts(),
            this.totalRows = this.products.length 
        },
     
        data() {
        return {
        product: this.product,
        items: [],
        fields: [
        { key: 'picture', label: 'Imágenes'},
        { key: 'id', sortable: true, sortDirection: 'desc'},
          { key: 'name', label: 'Producto', sortable: true, sortDirection: 'desc' },
          { key: 'category', label: 'Categoría', sortable: true, class: 'text-center' },
          { key: 'color', label: 'Colores' },
          { key: 'actions', label: 'Acciones' }
        ],

        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: 'id',
        sortDesc: true,
        sortDirection: 'asc',
        filter: null,
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
     methods: {
        goToCreateProduct () {
          this.$router.push({
          name: 'product-create',
        })
      },
    //Doy nombre a las categorías
     givMeName (category_name){
         //return this.categories[category_name-1].name
        var x;
        for (x in this.categories) 
        {
          if (this.categories[x].id ===category_name){
            return this.categories[x].name
          }
        }
         
         
    },
    //Asigno cajetín a los colores
    givMeColor (category_name){
         //return this.colors[category_name-1].css;
        var x;
        for (x in this.colors) 
        {
          if (this.colors[x].id ===category_name){
            return this.colors[x].css
          }
        }
   },

      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredProducts.length
        this.currentPage = 1
      },
        ...mapActions('products', ['fetchProducts']),
        ...mapActions('categories', ['fetchCategories']),
        ...mapActions('colors', ['fetchColors']),
         ...mapActions({
          _updateProductStatus: 'products/updateProductStatus',
          _removeProduct: 'products/removeProduct',
        }),

        ...mapMutations('products', ['setProduct']),
        goToUpdateProduct (item) {
          this.setProduct(item)
          this.$router.push({
            name: 'products-update',
            params: {id: item.id}
          })
        },
        updateProductStatus () {
          this._updateProductStatus(this.product)
        },
        removeProduct (id, name) {  
          const hola = this.$t('lang.productos_add.alert');
            if(confirm( hola + "'" + name +"'?")){
              this._removeProduct(id)
            } 
        }
      
    },
    computed: {
        ...mapState('categories', ['categories']),
        ...mapState('colors', ['colors']),
         ...mapState('products', ['products']),

      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
        
    }

}
</script>

<style scoped>

.espacio-superior{
    margin-bottom: 3rem !important;
}

.pagination{
    float:right!important;
}

.img_width_list{
    max-width: 80px;
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

</style>