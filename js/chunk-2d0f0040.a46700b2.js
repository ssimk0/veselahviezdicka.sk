(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0040"],{"9b23":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},t._l(t.categories,(function(a){return e("div",{key:a.id,staticClass:"col-xl-3 col-md-4 col-12 col-sm-6 gallery-card"},[e("router-link",{staticClass:"card-link",attrs:{to:"/gallery/"+a.slug}},[e("b-card",{staticClass:"mt-2 mr-2",attrs:{"img-src":a.thumbnail||"https://via.placeholder.com/150","img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" "+t._s(a.name)+" ")])],1)],1)],1)})),0),t.user&&(t.user.is_admin||t.user.can_edit)?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 admin-button text-right"},[e("router-link",{staticClass:"text-secondary btn btn-xs btn-primary h4 mt-2",attrs:{to:"/gallery/create"}},[e("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.$t("gallery.buttons.create"))+" ")])],1)]):t._e()])},r=[],i=e("5530"),o=e("2f62"),c=e("6aa0"),n={name:"Index",beforeRouteEnter:function(t,a,e){e((function(t){t.getUploadsCategories(c["a"]).then((function(){e()}))}))},data:function(){return{galleryType:c["a"]}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["getUploadsCategories"])),{},{test:function(){this.$bvToast.toast("Toast body content",{title:"Variant default",variant:"success",solid:!0,appendToast:!0,toaster:"b-toaster-top-right"})}}),computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["uploadCategories","user"])),{},{categories:function(){return this.uploadCategories&&this.uploadCategories[c["a"]]?this.uploadCategories[c["a"]]:null}})},l=n,u=e("2877"),d=Object(u["a"])(l,s,r,!1,null,"16989473",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0f0040.a46700b2.js.map