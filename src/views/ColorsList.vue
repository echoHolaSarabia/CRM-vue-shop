<template>
    <div>
        <template>
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <template>
                            <colors-list class="mt-5"></colors-list>
                        </template>
                    </b-col>
                </b-row>
            </b-container>
        </template>
    </div>
</template>
 
 <script>
import ShopLayout from '@/components/ShopLayout'
import ProductList from '@/components/ProductList'
import ColorsList from '@/components/ColorsList'

export default {
  name: 'productslist',
  components: {
      ShopLayout, ProductList, ColorsList
    }
}
</script>