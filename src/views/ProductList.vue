<template>
    <div>
        <shop-layout class="mt-5">
        <template slot="product-list">
            <product-list></product-list>
            
        </template>
        <template slot="cart">
            <cart></cart>
        </template>
        </shop-layout>
    </div>
</template>
 
 <script>
import ShopLayout from '@/components/ShopLayout'
import ProductList from '@/components/ProductList'
import ColorsList from '@/components/ColorsList'
import Cart from '@/components/Cart'
import CategoriesList from '@/components/CategoriesList'

export default {
  name: 'productslist',
  components: {
      ShopLayout, ProductList, Cart, CategoriesList, ColorsList
    }
}
</script>