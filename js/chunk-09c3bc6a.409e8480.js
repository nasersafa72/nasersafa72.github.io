(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09c3bc6a"],{"3bb3":function(e,t,r){"use strict";r("4720")},"3fd1":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("RegistrationComponent")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-body"},[r("b-alert",{staticClass:"login-alert",attrs:{variant:"danger",dismissible:""},model:{value:e.errorAlert,callback:function(t){e.errorAlert=t},expression:"errorAlert"}},[r("b",[e._v(e._s(e.errorMessage))])]),r("b-alert",{staticClass:"login-alert",attrs:{variant:"success",dismissible:""},model:{value:e.successAlert,callback:function(t){e.successAlert=t},expression:"successAlert"}},[e._v("User created successfuly")]),r("div",{staticClass:"login-body"},[r("h1",{staticClass:"login-title"},[e._v("Register")]),r("b-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit(t)}}},[r("b-form-group",{attrs:{id:"user-input-group-1",label:"User","label-for":"user-input-1"}},[r("b-form-input",{attrs:{id:"user-input-1",name:"user-input-1",type:"text",state:e.validateUser("user"),"aria-describedby":"user-feedback"},model:{value:e.$v.form.user.$model,callback:function(t){e.$set(e.$v.form.user,"$model",t)},expression:"$v.form.user.$model"}}),r("b-form-invalid-feedback",{attrs:{id:"user-feedback"}},[e._v("required field")])],1),r("b-form-group",{attrs:{id:"email-input-group-1",label:"Email","label-for":"email-input-1"}},[r("b-form-input",{attrs:{id:"email-input-1",type:"email",name:"email-input-1",state:e.validateEmail("email"),"aria-describedby":"email-feedback"},model:{value:e.$v.form.email.$model,callback:function(t){e.$set(e.$v.form.email,"$model",t)},expression:"$v.form.email.$model"}}),r("b-form-invalid-feedback",{attrs:{id:"email-feedback"}},[e._v("enter vali email address")])],1),r("b-form-group",{attrs:{id:"password-input-group-1",label:"Password","label-for":"password-input-1"}},[r("b-form-input",{attrs:{id:"password-input-1",type:"password",name:"password-input-1",state:e.validatePassword("password"),"aria-describedby":"password-feedback"},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),r("b-form-invalid-feedback",{attrs:{id:"password-feedback"}},[e._v("Required field (min length 8 characters)")])],1),r("b-button",{staticClass:"submit-button",attrs:{variant:"primary",type:"submit",disabled:e.disabledButton||e.$v.form.$invalid}},[e._v(" Submit "),e.loadingButton?r("b-spinner",{attrs:{small:"",type:"grow"}}):e._e()],1)],1),r("div",{staticClass:"subtitle-links"},[r("span",[e._v("Already Registered?")]),r("router-link",{staticClass:"register-link",attrs:{to:"/login"}},[e._v("Login")])],1)],1)],1)},o=[],l=r("1dce"),n=r("b5ae"),u=r("93d6"),d=r("5bf0"),m=r("7424"),c={mixins:[l["validationMixin"]],data(){return{form:{user:null,email:null,password:null},errorAlert:!1,successAlert:!1,errorMessage:"",loadingButton:!1,disabledButton:!1}},validations:{form:{user:{required:n["required"]},email:{email:n["email"],required:n["required"]},password:{required:n["required"],minLength:Object(n["minLength"])(8)}}},computed:{},methods:{resetStateFlags(){this.errorAlert=!1,this.successAlert=!1,this.loadingButton=!1,this.disabledButton=!1},validateUser(e){const{$dirty:t,$error:r}=this.$v.form[e];return t?!r:null},validateEmail(e){const{$dirty:t,$error:r}=this.$v.form[e];return t?!r:null},validatePassword(e){const{$dirty:t,$error:r}=this.$v.form[e];return t?!r:null},resetForm(){this.form={user:null,email:null,password:null},this.$nextTick(()=>{this.$v.$reset()})},onSubmit(){this.resetStateFlags(),this.$v.form.$touch(),this.$v.form.$anyError||(this.loadingButton=!0,this.disabledButton=!0,u["a"].create({username:this.form.user,email:this.form.email,password:this.form.password}).then(e=>{Object(d["c"])(e.data.user.token),m["a"].addAuthorizationHeader(),this.successAlert=!0,setTimeout(()=>{this.$router.push({path:"/articles"}),this.loadingButton=!1,this.disabledButton=!1},2e3)}).catch(e=>{this.loadingButton=!1,this.disabledButton=!1;let t=e.response.data.errors;const r=[];let s=Object.entries(t);for(let a=0;a<s.length;a++)r.push(s[a][0]+" "+s[a][1][0]);this.errorMessage=r.join(" , "),this.errorAlert=!0}))}}},b=c,p=(r("3bb3"),r("2877")),f=Object(p["a"])(b,i,o,!1,null,"b725ca32",null),v=f.exports,h={name:"Registration",components:{RegistrationComponent:v}},$=h,g=Object(p["a"])($,s,a,!1,null,null,null);t["default"]=g.exports},4720:function(e,t,r){},"93d6":function(e,t,r){"use strict";var s=r("7424");const a={create(e){return s["a"].post("users",{user:e})},getOne(){return s["a"].get("user")},login(e){return s["a"].post("users/login",{user:e})}};t["a"]=a}}]);
//# sourceMappingURL=chunk-09c3bc6a.409e8480.js.map