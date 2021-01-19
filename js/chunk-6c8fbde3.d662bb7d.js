(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c8fbde3"],{"0b2f":function(t,e,i){"use strict";i("2679")},2679:function(t,e,i){},"27c4":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"articles-container"},[i("h1",{staticClass:"articles-title"},[t._v(t._s(t.pageTitle))]),i("div",[i("b-alert",{staticClass:"error-alert",attrs:{variant:"danger",dismissible:""},model:{value:this.$store.state.articles.editError,callback:function(e){t.$set(this.$store.state.articles,"editError",e)},expression:"this.$store.state.articles.editError"}},[t._v(t._s(t.editErrorMessage))]),i("b-form",[i("b-row",[i("b-col",{staticClass:"form-inputs",attrs:{xl:"8"}},[i("b-form-group",{attrs:{id:"title-input-group",label:"Title","label-for":"title-input"}},[i("b-form-input",{attrs:{id:"title-input",name:"title-input",type:"text",state:t.validateTitle("title"),"aria-describedby":"title"},model:{value:t.$v.form.title.$model,callback:function(e){t.$set(t.$v.form.title,"$model",e)},expression:"$v.form.title.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"title"}},[t._v("Required field")])],1),i("b-form-group",{attrs:{id:"description-input-group",label:"Description","label-for":"description-input"}},[i("b-form-input",{attrs:{id:"description-input",type:"description",state:t.validateDescription("description"),name:"description-input","aria-describedby":"description-feedback"},model:{value:t.$v.form.description.$model,callback:function(e){t.$set(t.$v.form.description,"$model",e)},expression:"$v.form.description.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"description"}},[t._v("Required field")])],1),i("b-form-group",[i("label",{attrs:{for:"textarea"}},[t._v("Body")]),i("b-form-textarea",{staticClass:"text-area",attrs:{id:"body-textarea",state:t.validateBody("body"),placeholder:"Enter something...","no-resize":""},model:{value:t.$v.form.body.$model,callback:function(e){t.$set(t.$v.form.body,"$model",e)},expression:"$v.form.body.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"body-textarea"}},[t._v("Required field")])],1),i("b-button",{staticClass:"submit-button",attrs:{type:"button",variant:"primary",disabled:t.$v.form.$invalid},on:{click:t.onSubmit}},[t._v("Submit")])],1),i("b-col",{staticClass:"text-left",attrs:{xl:"4"}},[i("b-form-group",{attrs:{id:"tag-input-group-1",label:"Tags","label-for":"input-1"}},[i("b-form-input",{attrs:{id:"tag-input-1",type:"text",placeholder:"Add New Tag"},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?(e.stopPropagation(),e.preventDefault(),t.addTag(e)):null}},model:{value:t.newTag,callback:function(e){t.newTag=e},expression:"newTag"}})],1),i("b-form-group",[t.tagsLoaded?i("b-form-checkbox-group",{staticClass:"tags-container",attrs:{id:"article-tags-checkbox-group-1",options:t.sortedTags,name:"tagList-1",stacked:""},model:{value:t.form.tagList,callback:function(e){t.$set(t.form,"tagList",e)},expression:"form.tagList"}}):i("div",{staticClass:"spiner-container"},[i("b-spinner",{attrs:{variant:"primary",type:"grow",label:"Spinning"}})],1)],1)],1)],1),i("b-row",[i("b-col",{staticClass:"text-left",attrs:{xl:"12"}})],1)],1)],1)])])},s=[],a=i("1dce"),o=i("b5ae"),l=i("7424");const n={getList(){return l["a"].query("tags")}};var c=n,d={mixins:[a["validationMixin"]],props:["initialValues"],data(){return{errorAlert:!1,tagsLoaded:!1,newTag:"",form:{title:"",body:"",description:"",tagList:[]},tags:[],newArticle:{tagList:[]}}},validations:{form:{title:{required:o["required"]},description:{required:o["required"]},body:{required:o["required"]}}},methods:{validateTitle(t){const{$dirty:e,$error:i}=this.$v.form[t];return e?!i:null},validateDescription(t){const{$dirty:e,$error:i}=this.$v.form[t];return e?!i:null},validateBody(t){const{$dirty:e,$error:i}=this.$v.form[t];return e?!i:null},resetForm(){this.form={title:null,description:null,body:null},this.$nextTick(()=>{this.$v.$reset()})},onSubmit(){this.$v.form.$touch(),this.$v.form.$anyError?this.errorAlert=!0:this.$emit("submit",this.form)},addTag(){this.newTag.length&&(this.tags.push(this.newTag),this.form.tagList.push(this.newTag)),this.newTag=""}},computed:{pageTitle(){return"create"===this.$router.currentRoute.name?"New Article":"Edit Article"},sortedTags(){let t=this.tags.slice().map(t=>t.replace(/[\u200B-\u200D\uFEFF]/g,"")).filter(t=>Boolean(t)).sort((t,e)=>t.localeCompare(e));return t.filter(t=>Boolean(t))},editErrorMessage(){return this.$store.state.articles.editErrorMessage+" (You are being redirected to articles page)"}},mounted(){this.tagsLoaded=!1,c.getList({}).then(t=>{this.tags=t.data.tags,this.tagsLoaded=!0}),this.$props.initialValues&&(this.form.title=this.$props.initialValues.title?this.$props.initialValues.title:"",this.form.body=this.$props.initialValues.body?this.$props.initialValues.body:"",this.form.description=this.$props.initialValues.description?this.$props.initialValues.description:"",this.form.tagList=this.$props.initialValues.tagList?this.$props.initialValues.tagList:"")}},u=d,p=(i("b320"),i("2877")),m=Object(p["a"])(u,r,s,!1,null,"e0bf4da0",null);e["a"]=m.exports},"4cfb":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.article?i("EditArticle",{attrs:{initialValues:t.article},on:{submit:t.onSubmit}}):i("div",{staticClass:"spiner-container"},[i("b-spinner",{attrs:{variant:"primary",label:"Spinning"}})],1)],1)},s=[],a=i("27c4"),o=i("d8d4"),l=i("2f62"),n={components:{EditArticle:a["a"]},data(){return{articleIsLoaded:!1}},computed:{...Object(l["c"])({article:t=>t.articles.editingArticle})},methods:{onSubmit(t){o["a"].update(this.$router.currentRoute.params.slug,t).then(t=>{console.log(t),this.$store.commit("articles/setEditStatus",!0),this.$router.push({path:"/articles"})}).catch(t=>{this.$store.commit("articles/changeEditError",!0);let e=t.response.data.errors;const i=[];let r=Object.entries(e);for(let s=0;s<r.length;s++)i.push(r[s][0]+" "+r[s][1][0]);this.$store.commit("articles/setEditErrorMessage",i[0]),setTimeout(()=>{this.$router.push({path:"/articles"})},3e3)})}},created(){this.$store.commit("articles/setEditingArticle",null)},beforeDestroy(){this.$store.commit("articles/changeEditError",!1)},mounted(){const t=this.$router.currentRoute.params.slug;o["a"].getOne(t).then(t=>{const e=t.data.article;console.log(e),this.$store.commit("articles/setEditingArticle",e)})}},c=n,d=(i("0b2f"),i("2877")),u=Object(d["a"])(c,r,s,!1,null,null,null);e["default"]=u.exports},"7bdf":function(t,e,i){},b320:function(t,e,i){"use strict";i("7bdf")},d8d4:function(t,e,i){"use strict";var r=i("7424");const s={create(t){return r["a"].post("articles",{article:t})},getOne(t){return r["a"].get("articles",t)},getList(t={}){return r["a"].query("articles",{params:t})},delete(t){return r["a"].delete("articles/"+t)},update(t,e){return r["a"].update("articles",t,{article:e})}};e["a"]=s}}]);
//# sourceMappingURL=chunk-6c8fbde3.d662bb7d.js.map