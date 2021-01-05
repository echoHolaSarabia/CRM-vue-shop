(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31299ff6"],{"1c14":function(t,o,r){"use strict";var e=function(){var t=this,o=t.$createElement,r=t._self._c||o;return t.products.length?r("div",[r("paginate",{attrs:{name:"products",list:t.products,per:t.perPage}},[r("b-card-group",{attrs:{deck:""}},t._l(t.paginated("products"),function(o){return r("product-item",{key:o.id,attrs:{product:o},on:{addToCard:t.addProductToCart}})}),1)],1),r("paginate-links",{attrs:{for:"products",classes:{ul:"pagination",li:"page-item","li > a":"page-link"}}})],1):r("b-alert",{attrs:{show:"",variant:"info"}},[t._v(t._s(t.$t("lang.productos.emty")))])},a=[],c=r("cebc"),n=r("2f62"),s=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-card",{staticClass:"mb-3",attrs:{title:t.product.name,"img-src":t.product.picture,"img-alt":t.product.name,"img-top":""}},[r("b-button",{attrs:{block:"",variant:"warning"},on:{click:function(o){return t.$emit("addToCard",t.product)}}},[t._v("\n        "+t._s(t.$t("lang.portada.anadir_carrito"))+"\n    ")])],1)},l=[],i={props:{product:{type:Object,required:!0}}},u=i,d=(r("5eec"),r("2877")),p=Object(d["a"])(u,s,l,!1,null,"3f431602",null),b=p.exports,f={components:{ProductItem:b},mounted:function(){this.fetchProducts()},data:function(){return{paginate:["products"],perPage:9}},computed:Object(c["a"])({},Object(n["e"])("products",["products"])),methods:Object(c["a"])({},Object(n["b"])("products",["fetchProducts"]),Object(n["d"])("cart",["addProduct"]),{addProductToCart:function(t){this.addProduct(t)}})},_=f,m=(r("b8b5"),Object(d["a"])(_,e,a,!1,null,"43e1b1f5",null));o["a"]=m.exports},"266b":function(t,o,r){},3228:function(t,o,r){"use strict";var e=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",[r("b-row",{staticClass:"text-center espacio-superior"},[r("b-col",{attrs:{cols:"12"}},[r("h3",[t._v("\r\n                      "+t._s(t.$t("lang.color_add.titulo"))+"\r\n                    ")])]),r("b-col",[r("b-button",{staticClass:"text-white",attrs:{block:""},on:{click:t.goToCreateColor}},[t._v("\r\n                        "+t._s(t.$t("lang.color_add.boton"))+"\r\n                    ")])],1)],1),t.colors.length?r("div",[r("paginate",{attrs:{name:"colors",list:t.colors,per:t.perPage}},[r("div",t._l(t.orderedUsers,function(o){return r("colors-item",{key:o.id,attrs:{color:o},on:{addToCard:t.addProductToCart}})}),1)]),r("paginate-links",{attrs:{for:"colors",classes:{ul:"pagination",li:"page-item","li > a":"page-link"}}})],1):r("b-alert",{attrs:{show:"",variant:"info"}},[t._v(t._s(t.$t("lang.color_add.error2")))])],1)},a=[],c=r("cebc"),n=r("2f62"),s=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-card",{staticClass:"mb-2 bloque_colores"},[r("div",{staticClass:"box_color",style:{backgroundColor:t.color.css}}),r("h4",[t._v(t._s(t.color.name))]),r("b-button",{attrs:{variant:"danger"},on:{click:function(o){return o.stopPropagation(),t.removeColor(t.color.name)}}},[t._v("\n        "+t._s(t.$t("lang.color_add.eliminar"))+"\n    ")]),r("b-button",{attrs:{block:"",variant:"warning"},on:{click:t.goToUpdateColor}},[t._v("\n        "+t._s(t.$t("lang.color_add.editar"))+"\n    ")])],1)},l=[],i={props:{color:{type:Object,required:!0}},data:{color_back:"#673AB7"},methods:Object(c["a"])({},Object(n["b"])({_updateColorStatus:"colors/updateColorStatus",_removeColor:"colors/removeColor"}),Object(n["d"])("colors",["setColor"]),{goToUpdateColor:function(){this.setColor(this.color),this.$router.push({name:"colors-update",params:{id:this.color.id}})},updateColorStatus:function(){this._updateColorStatus(this.color)},removeColor:function(t){var o=this.$t("lang.productos_add.alert"),r=this.$t("lang.color_add.alert");confirm(o+"'"+t+"'? "+r)&&this._removeColor(this.color._id)}})},u=i,d=(r("e3a0"),r("2877")),p=Object(d["a"])(u,s,l,!1,null,"f4e6cb00",null),b=p.exports,f={components:{ColorsItem:b},mounted:function(){this.fetchColors()},data:function(){return{paginate:["colors"],perPage:10}},computed:Object(c["a"])({},Object(n["e"])("colors",["colors"]),{orderedUsers:function(){return _.orderBy(this.paginated("colors"),"id","desc")}}),methods:Object(c["a"])({},Object(n["b"])("colors",["fetchColors"]),Object(n["d"])("cart",["addProduct"]),{addProductToCart:function(t){this.addProduct(t)},goToCreateColor:function(){this.$router.push({name:"color-create"})}})},m=f,g=(r("47ed"),Object(d["a"])(m,e,a,!1,null,"7b08baa9",null));o["a"]=g.exports},"47ed":function(t,o,r){"use strict";var e=r("5e2f"),a=r.n(e);a.a},"5e2f":function(t,o,r){},"5eec":function(t,o,r){"use strict";var e=r("5f36"),a=r.n(e);a.a},"5f36":function(t,o,r){},b506:function(t,o,r){},b8b5:function(t,o,r){"use strict";var e=r("b506"),a=r.n(e);a.a},dc7a:function(t,o,r){"use strict";r.r(o);var e=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",[[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"12"}},[[r("colors-list",{staticClass:"mt-5"})]],2)],1)],1)]],2)},a=[],c=r("f71c"),n=r("1c14"),s=r("3228"),l={name:"productslist",components:{ShopLayout:c["a"],ProductList:n["a"],ColorsList:s["a"]}},i=l,u=r("2877"),d=Object(u["a"])(i,e,a,!1,null,null,null);o["default"]=d.exports},e3a0:function(t,o,r){"use strict";var e=r("266b"),a=r.n(e);a.a},f71c:function(t,o,r){"use strict";var e=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"9"}},[t._t("product-list")],2),r("b-col",{attrs:{cols:"3"}},[t._t("cart")],2)],1)],1)},a=[],c=r("2877"),n={},s=Object(c["a"])(n,e,a,!1,null,null,null);o["a"]=s.exports}}]);
//# sourceMappingURL=chunk-31299ff6.f5926f36.js.map