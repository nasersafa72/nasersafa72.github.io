(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4f647c0"],{"93d6":function(t,e,s){"use strict";var i=s("7424");const r={create(t){return i["a"].post("users",{user:t})},getOne(){return i["a"].get("user")},login(t){return i["a"].post("users/login",{user:t})}};e["a"]=r},a55b:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("LoginComponent")],1)},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-body"},[s("b-alert",{staticClass:"login-alert",attrs:{variant:"danger",dismissible:""},model:{value:t.errorAlert,callback:function(e){t.errorAlert=e},expression:"errorAlert"}},[s("b",[t._v("Login Failed!")]),t._v(" User name and/or Password is invalid ")]),s("b-alert",{staticClass:"login-alert",attrs:{variant:"success",dismissible:""},model:{value:t.successAlert,callback:function(e){t.successAlert=e},expression:"successAlert"}},[t._v("Logged in successfuly")]),s("div",{staticClass:"login-body"},[s("h1",{staticClass:"login-title"},[t._v("LOGIN")]),s("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[s("b-form-group",{attrs:{id:"email-input-group-1",label:"Email","label-for":"email-input-1"}},[s("b-form-input",{attrs:{id:"email-input-1",name:"email-input-1",type:"email",state:t.validateState("email"),"aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.email.$model,callback:function(e){t.$set(t.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),s("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("enter valid email address")])],1),s("b-form-group",{attrs:{id:"password-input-group-1",label:"Password","label-for":"password-input-1"}},[s("b-form-input",{attrs:{id:"password-input-1",type:"password",name:"password-input-1",state:t.validatePassword("password"),"aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.password.$model,callback:function(e){t.$set(t.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),s("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Required field (min length 8 characters)")])],1),s("b-button",{staticClass:"submit-button",attrs:{variant:"primary",type:"submit",disabled:t.disabledButton||t.$v.form.$invalid}},[t._v(" Submit "),t.loadingButton?s("b-spinner",{attrs:{small:"",type:"grow"}}):t._e()],1)],1),s("div",{staticClass:"subtitle-links"},[s("span",[t._v("Don’t have account?")]),s("router-link",{staticClass:"register-link",attrs:{to:"/registration"}},[t._v("Register Now")])],1)],1)],1)},o=[],n=s("1dce"),l=s("b5ae"),d=s("93d6"),u=s("5bf0"),c=s("7424"),m={mixins:[n["validationMixin"]],data(){return{form:{email:null,password:null},errorAlert:!1,successAlert:!1,loadingButton:!1,disabledButton:!1}},validations:{form:{email:{required:l["required"],email:l["email"]},password:{required:l["required"],minLength:Object(l["minLength"])(8)}}},methods:{resetStateFlags(){this.errorAlert=!1,this.successAlert=!1,this.loadingButton=!1,this.disabledButton=!1},validateState(t){const{$dirty:e,$error:s}=this.$v.form[t];return e?!s:null},validatePassword(t){const{$dirty:e,$error:s}=this.$v.form[t];return e?!s:null},resetForm(){this.form={email:null,password:null},this.$nextTick(()=>{this.$v.$reset()})},onSubmit(){this.resetStateFlags(),this.$v.form.$touch(),this.$v.form.$anyError?this.errorAlert=!0:(this.loadingButton=!0,this.disabledButton=!0,d["a"].login({email:this.form.email,password:this.form.password}).then(t=>{Object(u["c"])(t.data.user.token),c["a"].addAuthorizationHeader(),this.successAlert=!0,setTimeout(()=>{this.$router.push({path:"/articles"}),this.loadingButton=!1,this.disabledButton=!1},2e3)}).catch(()=>{this.loadingButton=!1,this.disabledButton=!1,this.errorAlert=!0}))}}},b=m,p=(s("ba46"),s("2877")),v=Object(p["a"])(b,a,o,!1,null,"b37d6292",null),f=v.exports,h={name:"Login",components:{LoginComponent:f}},g=h,$=Object(p["a"])(g,i,r,!1,null,null,null);e["default"]=$.exports},ba46:function(t,e,s){"use strict";s("f38a")},f38a:function(t,e,s){}}]);
//# sourceMappingURL=chunk-e4f647c0.d79c23fc.js.map