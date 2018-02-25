webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("div",{staticClass:"nav-wrapper blue"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Administración")]),this._v(" "),e("ul",{staticClass:"right"},[e("li",[e("router-link",{attrs:{to:"/"}},[this._v("Dashboard")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/login"}},[this._v("Ingresar")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/register"}},[this._v("Registro")])],1)])],1)])])},staticRenderFns:[]},o={name:"App",components:{Navbar:i("VU/8")(null,s,!1,null,null,null).exports}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},r=i("VU/8")(o,n,!1,null,null,null).exports,l=i("/ocq"),c=i("Sazm"),u=i.n(c),p=(i("3VHS"),u.a.initializeApp({apiKey:"AIzaSyCBPAMzaJm7ncbUiZZYz4K3M1BEesAJDzE",authDomain:"pollavue-2cecd.firebaseapp.com",databaseURL:"https://pollavue-2cecd.firebaseio.com",projectId:"pollavue-2cecd",storageBucket:"pollavue-2cecd.appspot.com",messagingSenderId:"764528621861"}).firestore()),d={name:"dashboard",data:function(){return{equipos:[]}},created:function(){var t=this;p.collection("equipos").get().then(function(e){e.forEach(function(e){var i={id:e.id,equipo_id:e.data().equipo_id,equipo:e.data().equipo,activo:e.data().activo};t.equipos.push(i)})})}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"dashboard"}},[i("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.equipos,function(e){return i("li",{key:e.equipo_id,staticClass:"collection-item"},[i("router-link",{staticClass:"chip",attrs:{to:{name:"view-equipo",params:{equipo_id:e.equipo_id}}}},[t._v(t._s(e.equipo_id))]),t._v(" "),i("router-link",{attrs:{to:{name:"view-equipo",params:{equipo_id:e.equipo_id}}}},[t._v(t._s(e.equipo))]),t._v(" "),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-equipo",params:{equipo_id:e.equipo_id}}}},[i("i",{staticClass:"fa fa-eye"})])],1)})],2),t._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",[this._v("Equipos")])])}]},_=i("VU/8")(d,v,!1,null,null,null).exports,m={name:"new-equipo",data:function(){return{equipo_id:null,equipo:null,activo:null}},methods:{saveEquipo:function(){var t=this;p.collection("equipos").add({equipo_id:this.equipo_id,equipo:this.equipo,activo:this.activo}).then(function(e){t.$router.push("/")}).catch(function(t){return console.log(err)})}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"new-equipo"}},[i("h3",[t._v("Nuevo Equipo")]),t._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.saveEquipo(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.equipo_id,expression:"equipo_id"}],attrs:{type:"text",required:""},domProps:{value:t.equipo_id},on:{input:function(e){e.target.composing||(t.equipo_id=e.target.value)}}}),t._v(" "),i("label",[t._v("Equipo ID")])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.equipo,expression:"equipo"}],attrs:{type:"text",required:""},domProps:{value:t.equipo},on:{input:function(e){e.target.composing||(t.equipo=e.target.value)}}}),t._v(" "),i("label",[t._v("Equipo")])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-check col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.activo,expression:"activo"}],staticClass:"filled-in",attrs:{type:"checkbox",id:"checkbox",required:""},domProps:{checked:Array.isArray(t.activo)?t._i(t.activo,null)>-1:t.activo},on:{change:function(e){var i=t.activo,a=e.target,s=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.activo=i.concat([null])):o>-1&&(t.activo=i.slice(0,o).concat(i.slice(o+1)))}else t.activo=s}}}),t._v(" "),i("label",{attrs:{for:"checkbox"}},[t._v(t._s(t.checked))])])]),t._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Ingresar")]),t._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancelar")])],1)])])},staticRenderFns:[]},f=i("VU/8")(m,h,!1,null,null,null).exports,q={name:"edit-equipo",data:function(){return{equipo_id:null,equipo:null,activo:null}},beforeRouteEnter:function(t,e,i){p.collection("equipos").where("equipo_id","==",t.params.equipo_id).get().then(function(t){t.forEach(function(t){i(function(e){e.equipo_id=t.data().equipo_id,e.equipo=t.data().equipo,e.activo=t.data().activo})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;p.collection("equipos").where("equipo_id","==",this.$route.params.equipo_id).get().then(function(e){e.forEach(function(e){t.equipo_id=e.data().equipo_id,t.equipo=e.data().equipo,t.activo=e.data().activo})})},updateEquipo:function(){var t=this;p.collection("equipos").where("equipo_id","==",this.$route.params.equipo_id).get().then(function(e){e.forEach(function(e){e.ref.update({equipo_id:t.equipo_id,equipo:t.equipo,activo:t.activo}).then(function(){t.$router.push({name:"view-equipo",params:{equipo_id:t.equipo_id}})})})})}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"edit-equipo"}},[i("h3",[t._v("Editar Equipo")]),t._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.updateEquipo(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.equipo_id,expression:"equipo_id"}],attrs:{type:"text",disabled:"true"},domProps:{value:t.equipo_id},on:{input:function(e){e.target.composing||(t.equipo_id=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.equipo,expression:"equipo"}],attrs:{type:"text",required:""},domProps:{value:t.equipo},on:{input:function(e){e.target.composing||(t.equipo=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-check col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.activo,expression:"activo"}],staticClass:"filled-in",attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.activo)?t._i(t.activo,null)>-1:t.activo},on:{change:function(e){var i=t.activo,a=e.target,s=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.activo=i.concat([null])):o>-1&&(t.activo=i.slice(0,o).concat(i.slice(o+1)))}else t.activo=s}}}),t._v(" "),i("label",{attrs:{for:"checkbox"}},[t._v(t._s(t.checked))])])]),t._v(" "),i("div",{staticClass:"row"},[i("FileUpload")],1),t._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Actualizar")]),t._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancelar")])],1)])])},staticRenderFns:[]};var C=i("VU/8")(q,g,!1,function(t){i("tBzO")},"data-v-4863398e",null).exports,w={name:"view-equipo",data:function(){return{equipo_id:null,equipo:null,activo:null}},beforeRouteEnter:function(t,e,i){p.collection("equipos").where("equipo_id","==",t.params.equipo_id).get().then(function(t){t.forEach(function(t){i(function(e){e.equipo_id=t.data().equipo_id,e.equipo=t.data().equipo,e.activo=t.data().activo})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;p.collection("equipos").where("equipo_id","==",this.$route.params.equipo_id).get().then(function(e){e.forEach(function(e){t.equipo_id=e.data().equipo_id,t.equipo=e.data().equipo,t.activo=e.data().activo})})},deleteEquipo:function(){var t=this;confirm("Esta seguro que desea eliminar el Equipo?")&&p.collection("equipos").where("equipo_id","==",this.$route.params.equipo_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"view-equipo"}},[(t.activo,[i("ul",{staticClass:"collection with-header"},[i("li",{staticClass:"collection-header"},[i("h4",[t._v("Ver Equipo ")]),i("div",{staticClass:"chip"},[t._v(t._s(t.equipo_id))]),t._v(" "+t._s(t.equipo)+"\n\t\t")])])]),t._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancelar")]),t._v(" "),i("button",{staticClass:"btn red",on:{click:t.deleteEquipo}},[t._v("Eliminar")]),t._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-equipo",params:{equipo_id:t.equipo_id}}}},[i("i",{staticClass:"fa fa-pencil"})])],1)],2)},staticRenderFns:[]},E=i("VU/8")(w,b,!1,null,null,null).exports,x={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("Tienes sesion con el usuario ${user.email}"),e.$router.push("/")},function(t){alert(t.message)}),t.preventDefault()}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col s12 m8 offset-m2"},[i("div",{staticClass:"login card-panel blue white-text center"},[i("h3",[t._v("Ingrese")]),t._v(" "),i("form",[t._m(0),t._v(" "),t._m(1),t._v(" "),i("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:t.login}},[t._v("Ingrese")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-field"},[e("i",{staticClass:"material-icons prefix"},[this._v("email")]),this._v(" "),e("input",{attrs:{type:"text",id:"email"}}),this._v(" "),e("label",{staticClass:"white-text",attrs:{for:"email"}},[this._v("Email")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-field"},[e("i",{staticClass:"material-icons prefix"},[this._v("lock")]),this._v(" "),e("input",{attrs:{type:"password",id:"password"}}),this._v(" "),e("label",{staticClass:"white-text",attrs:{for:"password"}},[this._v("Clave")])])}]},y=i("VU/8")(x,k,!1,null,null,null).exports,$={name:"register",data:function(){return{email:null,password:null}},methods:{register:function(t){var e=this;firebase.auth().createUserInWithEmailAndPassword(this.email,this.password).then(function(t){alert("Se creo el usuario ${user.email}"),e.$router.push("/")},function(t){alert(t.message)}),t.preventDefault()}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col s12 m8 offset-m2"},[i("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[i("h3",[t._v("Registrarse")]),t._v(" "),i("form",[i("div",{staticClass:"input-field"},[i("i",{staticClass:"material-icons prefix"},[t._v("email")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),i("label",{attrs:{for:"email"}},[t._v("Email")])]),t._v(" "),i("div",{staticClass:"input-field"},[i("i",{staticClass:"material-icons prefix"},[t._v("lock")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),i("label",{attrs:{for:"password"}},[t._v("Clave")])]),t._v(" "),i("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:t.register}},[t._v("Registro")])])])])])])])},staticRenderFns:[]},R=i("VU/8")($,A,!1,null,null,null).exports;a.a.use(l.a);var N=new l.a({routes:[{path:"/",name:"dashboard",component:_},{path:"/register",name:"register",component:R},{path:"/login",name:"login",component:y},{path:"/new",name:"new-equipo",component:f},{path:"/edit/:equipo_id",name:"edit-equipo",component:C},{path:"/:equipo_id",name:"view-equipo",component:E}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:N,components:{App:r},template:"<App/>"})},tBzO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.380192df69ac7784f5f0.js.map