(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc7a09ce"],{"78e8":function(t,e,s){"use strict";s("c653")},9080:function(t,e,s){"use strict";s("f94c")},"93d6":function(t,e,s){"use strict";var a=s("7424");const n={create(t){return a["a"].post("users",{user:t})},getOne(){return a["a"].get("user")},login(t){return a["a"].post("users/login",{user:t})}};e["a"]=n},ac48:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Sidebar"),s("TopNavbar"),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 p-0"},[s("Content")],1)])])],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("div",{staticClass:"content-section"},[s("router-view")],1)])},i=[],c={},l=c,o=(s("78e8"),s("2877")),u=Object(o["a"])(l,r,i,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar-expanded",attrs:{id:"sidebar-container"}},[s("b-list-group",[s("b-list-group-item",[s("span",{staticClass:"title"},[t._v("Posts")]),s("b-list-group",{staticClass:"nested"},[s("b-list-group-item",{attrs:{to:"/articles",exact:""}},[s("span",{staticClass:"content"},[t._v("All Articles")])]),s("b-list-group-item",{attrs:{exact:"",to:"/articles/create"}},[s("span",{staticClass:"content"},[t._v("New Article")])])],1)],1)],1)],1)},v=[],f={data(){return{}},methods:{},computed:{}},b=f,m=(s("9080"),Object(o["a"])(b,p,v,!1,null,null,null)),g=m.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"top-nav-bar"},[s("div",{staticClass:"header-title"},[s("span",{staticClass:"page-title"},[t._v("Arvan Challenge")]),s("span",{staticClass:"user-name"},[t._v("wellcome "+t._s(t.userName))])]),s("b-button",{attrs:{variant:"outline-primary"},on:{click:t.logOut}},[t._v("Logout")])],1)])},C=[],_=s("93d6"),w=s("5bf0"),O=s("7424"),x={data(){return{userName:""}},methods:{logOut(){Object(w["b"])(),this.$router.push({path:"/login"}),O["a"].removeAuthorizationHeader()}},mounted(){_["a"].getOne().then(t=>{this.userName=t.data.user.username}).catch(t=>{console.log({error:t})})}},N=x,j=(s("ef6a"),Object(o["a"])(N,h,C,!1,null,null,null)),A=j.exports,$={components:{Content:d,Sidebar:g,TopNavbar:A}},k=$,E=Object(o["a"])(k,a,n,!1,null,null,null);e["default"]=E.exports},af2f:function(t,e,s){},c653:function(t,e,s){},ef6a:function(t,e,s){"use strict";s("af2f")},f94c:function(t,e,s){}}]);
//# sourceMappingURL=chunk-cc7a09ce.dcdffcdb.js.map