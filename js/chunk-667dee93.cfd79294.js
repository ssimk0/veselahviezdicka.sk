(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-667dee93"],{"1e3f":function(t,e,a){},ae99:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center align-items-center"},[a("ValidationObserver",{staticClass:"col-12 pt-5",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),o(t.submit)}}},[a("vue-dropzone",{ref:"uploader",attrs:{options:t.dropzoneOptions,id:"uploader"},on:{"vdropzone-queue-complete":t.uploaded}}),a("div",{staticClass:"text-right pt-4"},[a("b-button",{attrs:{size:"xs",type:"submit",variant:"primary",disabled:t.disabled}},[t._v(" "+t._s(t.$t("pageEdit.buttons.confirm"))+" ")])],1)],1)]}}])})],1)},n=[],s=(a("99af"),a("d3b7"),a("1e3f"),a("6aa0")),i=a("a060"),u=a("bc3a"),r=a.n(u),l={name:"Upload",components:{vueDropzone:function(){return a.e("chunk-2d0e51ff").then(a.t.bind(null,"92c3",7))}},methods:{submit:function(){this.disabled=!0,this.$refs.uploader.processQueue()},uploaded:function(){this.$router.push({name:i["a"].GALLERY_DETAIL,param:{slug:this.$route.params.category}})}},data:function(){return{category:this.$route.params.slug,disabled:!1,dropzoneOptions:{url:"".concat(r.a.defaults.baseURL,"/api/v1/uploads/").concat(s["a"],"/").concat(this.$route.params.slug),thumbnailWidth:200,addRemoveLinks:!0,autoProcessQueue:!1,dictDefaultMessage:this.$t("form.fields.upload.buttons.upload"),headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},parallelUploads:3,paramName:"file",acceptedFiles:"image/*",dictFileTooBig:this.$t("validations.uploadSize"),dictInvalidFileType:this.$t("validations.uploadType")}}}},d=l,c=a("2877"),p=Object(c["a"])(d,o,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-667dee93.cfd79294.js.map