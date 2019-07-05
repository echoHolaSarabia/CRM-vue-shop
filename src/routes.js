export default [
    {
      path: '/',
      name: 'productslist',
      component: () => import ('./views/ProductList.vue')
    },
    {
      path: '/upload/products',
      name: 'upproducts',
      component: () => import ('./views/UpProductList.vue')
    },
    {
      path: '/upload/products/create',
      name: 'product-create',
      component: () => import(/* webpackChunkName: "todos-create" */ './views/ProductCreate.vue')
    },
    {
      path: '/upload/products/:id/update',
      name: 'products-update',
      component: () => import(/* webpackChunkName: "todos-update" */ './views/ProductUpdate.vue')
    },
    {
      path: '/attribute/categories',
      name: 'categories',
      component: () => import ('./views/CategoriesList.vue')   
    },
    {
      path: '/attribute/categories/create',
      name: 'category-create',
      component: () => import(/* webpackChunkName: "todos-create" */ './views/CategoryCreate.vue')
    },
    {
      path: '/attribute/categories/:id/update',
      name: 'categories-update',
      component: () => import(/* webpackChunkName: "todos-update" */ './views/CategoryUpdate.vue')
    },
    {
      path: '/attribute/colors',
      name: 'colors',
      component: () => import ('./views/ColorsList.vue')
    },

    {
      path: '/attribute/colors/create',
      name: 'color-create',
      component: () => import(/* webpackChunkName: "todos-create" */ './views/ColorCreate.vue')
    },
    {
      path: '/attribute/colors/:id/update',
      name: 'colors-update',
      component: () => import(/* webpackChunkName: "todos-update" */ './views/ColorUpdate.vue')
      

      //Rutas hijas
      /*children: [
        {
          path: 'notes',
          component: () => import ('./views/Secret/Notes.vue')
        }*/
      
    }
  ]