(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60138007"],{"1c14":function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.products.length?o("div",[o("paginate",{attrs:{name:"products",list:t.products,per:t.perPage}},[o("b-card-group",{attrs:{deck:""}},t._l(t.paginated("products"),function(e){return o("product-item",{key:e.id,attrs:{product:e},on:{addToCard:t.addProductToCart}})}),1)],1),o("paginate-links",{attrs:{for:"products",classes:{ul:"pagination",li:"page-item","li > a":"page-link"}}})],1):o("b-alert",{attrs:{show:"",variant:"info"}},[t._v(t._s(t.$t("lang.productos.emty")))])},s=[],n=o("cebc"),a=o("2f62"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",{staticClass:"mb-3",attrs:{title:t.product.name,"img-src":t.product.picture,"img-alt":t.product.name,"img-top":""}},[o("b-button",{attrs:{block:"",variant:"warning"},on:{click:function(e){return t.$emit("addToCard",t.product)}}},[t._v("\n        "+t._s(t.$t("lang.portada.anadir_carrito"))+"\n    ")])],1)},i=[],u={props:{product:{type:Object,required:!0}}},l=u,d=(o("5eec"),o("2877")),p=Object(d["a"])(l,c,i,!1,null,"3f431602",null),f=p.exports,b={components:{ProductItem:f},mounted:function(){this.fetchProducts()},data:function(){return{paginate:["products"],perPage:9}},computed:Object(n["a"])({},Object(a["e"])("products",["products"])),methods:Object(n["a"])({},Object(a["b"])("products",["fetchProducts"]),Object(a["d"])("cart",["addProduct"]),{addProductToCart:function(t){this.addProduct(t)}})},m=b,g=(o("b8b5"),Object(d["a"])(m,r,s,!1,null,"43e1b1f5",null));e["a"]=g.exports},"3bd3":function(t,e,o){},"4a9f":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[[o("b-container",[o("b-row",[o("b-col",{attrs:{cols:"12"}},[[o("up-product-list",{staticClass:"mt-5"})]],2)],1)],1)]],2)},s=[],n=o("f71c"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"text-center espacio-superior"},[o("b-col",{attrs:{cols:"12"}},[o("h3",[t._v("\n                       "+t._s(t.$t("lang.menu.g_productos"))+"\n                    ")])]),o("b-col",[o("b-button",{staticClass:"text-white",attrs:{block:""},on:{click:t.goToCreateProduct}},[t._v("\n                         "+t._s(t.$t("lang.productos.anadir"))+"\n                    ")])],1)],1),o("b-row",[o("b-col",{staticClass:"my-1 mb-4",attrs:{md:"6"}},[o("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:t.$t("lang.productos.buscar")}},[o("b-input-group",[o("b-form-input",{attrs:{placeholder:t.$t("lang.productos.buscar_placeholder")},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),o("b-input-group-append",[o("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(t._s(t.$t("lang.productos.borrar")))])],1)],1)],1)],1),o("b-col",{staticClass:"my-1 mb-4",attrs:{md:"6"}},[o("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:t.$t("lang.productos.borrar")}},[o("b-form-select",{attrs:{options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)],1),o("b-table",{attrs:{"show-empty":"",stacked:"md",items:this.products,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"picture",fn:function(t){return[o("img",{staticClass:"img_width_list",attrs:{src:t.value}})]}},{key:"name",fn:function(e){return[t._v("\n        "+t._s(e.value)+"\n    ")]}},{key:"category",fn:function(e){return[t._v("\n        "+t._s(e.value?t.givMeName(e.value):"Sin categoria")+"\n    ")]}},{key:"color",fn:function(e){return t._l(e.value,function(r){return o("div",{key:r.id,staticClass:"box_color",style:{backgroundColor:r?t.givMeColor(r):"#ffffff",display:e.value?"block":"none"}})})}},{key:"actions",fn:function(e){return[o("b-button",{staticClass:"mr-1",attrs:{variant:"warning",size:"sm"},on:{click:function(o){return t.goToUpdateProduct(e.item)}}},[t._v("\n            "+t._s(t.$t("lang.productos.editar"))+"\n        ")]),o("b-button",{staticClass:"mr-1",attrs:{variant:"info",size:"sm"},on:{click:e.toggleDetails}},[t._v("\n            "+t._s(t.$t("lang.productos.detalles"))+"\n        ")]),o("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(o){return t.removeProduct(e.item._id,e.item.name)}}},[t._v("\n            "+t._s(t.$t("lang.productos.eliminar"))+"\n        ")])]}},{key:"row-details",fn:function(e){return[o("b-card",[o("ul",t._l(e.item,function(e,r){return o("li",{key:r},[t._v(t._s(r)+": "+t._s(e))])}),0)])]}}])}),o("b-row",{staticClass:"pagination espacio-superior"},[o("b-col",{staticClass:"my-1 pagination",attrs:{md:"6"}},[o("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),o("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetInfoModal}},[o("pre",[t._v(t._s(t.infoModal.content))])])],1)},c=[],i=(o("7f7f"),o("cebc")),u=o("2f62"),l={mounted:function(){this.fetchCategories(),this.fetchColors(),this.fetchProducts(),this.totalRows=this.products.length},data:function(){return{product:this.product,items:[],fields:[{key:"picture",label:"Imágenes"},{key:"id",sortable:!0,sortDirection:"desc"},{key:"name",label:"Producto",sortable:!0,sortDirection:"desc"},{key:"category",label:"Categoría",sortable:!0,class:"text-center"},{key:"color",label:"Colores"},{key:"actions",label:"Acciones"}],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:"id",sortDesc:!0,sortDirection:"asc",filter:null,infoModal:{id:"info-modal",title:"",content:""}}},methods:Object(i["a"])({goToCreateProduct:function(){this.$router.push({name:"product-create"})},givMeName:function(t){var e;for(e in this.categories)if(this.categories[e].id===t)return this.categories[e].name},givMeColor:function(t){var e;for(e in this.colors)if(this.colors[e].id===t)return this.colors[e].css},info:function(t,e,o){this.infoModal.title="Row index: ".concat(e),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,o)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(t){this.totalRows=filteredProducts.length,this.currentPage=1}},Object(u["b"])("products",["fetchProducts"]),Object(u["b"])("categories",["fetchCategories"]),Object(u["b"])("colors",["fetchColors"]),Object(u["b"])({_updateProductStatus:"products/updateProductStatus",_removeProduct:"products/removeProduct"}),Object(u["d"])("products",["setProduct"]),{goToUpdateProduct:function(t){this.setProduct(t),this.$router.push({name:"products-update",params:{id:t.id}})},updateProductStatus:function(){this._updateProductStatus(this.product)},removeProduct:function(t,e){var o=this.$t("lang.productos_add.alert");confirm(o+"'"+e+"'?")&&this._removeProduct(t)}}),computed:Object(i["a"])({},Object(u["e"])("categories",["categories"]),Object(u["e"])("colors",["colors"]),Object(u["e"])("products",["products"]),{sortOptions:function(){return this.fields.filter(function(t){return t.sortable}).map(function(t){return{text:t.label,value:t.key}})}})},d=l,p=(o("e584"),o("2877")),f=Object(p["a"])(d,a,c,!1,null,"752d8c08",null),b=f.exports,m=o("1c14"),g={name:"productslist",components:{ShopLayout:n["a"],UpProductList:b,ProductList:m["a"]}},h=g,v=Object(p["a"])(h,r,s,!1,null,null,null);e["default"]=v.exports},"5eec":function(t,e,o){"use strict";var r=o("5f36"),s=o.n(r);s.a},"5f36":function(t,e,o){},b506:function(t,e,o){},b8b5:function(t,e,o){"use strict";var r=o("b506"),s=o.n(r);s.a},e584:function(t,e,o){"use strict";var r=o("3bd3"),s=o.n(r);s.a},f71c:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",[o("b-row",[o("b-col",{attrs:{cols:"9"}},[t._t("product-list")],2),o("b-col",{attrs:{cols:"3"}},[t._t("cart")],2)],1)],1)},s=[],n=o("2877"),a={},c=Object(n["a"])(a,r,s,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-60138007.013fd8f2.js.map