<template>
    <div>
        <template>
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <template>
                            <up-product-list class="mt-5"></up-product-list>
                        </template>
                    </b-col>
                </b-row>
            </b-container>
        </template>
    </div>
</template>
 
 <script>
import ShopLayout from '@/components/ShopLayout'
import UpProductList from '@/components/UpProductList'
import ProductList from '@/components/ProductList'

export default {
  name: 'productslist',
  components: {
      ShopLayout, UpProductList, ProductList
    }
}
</script>