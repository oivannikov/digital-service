(this["webpackJsonpdigital-service"]=this["webpackJsonpdigital-service"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n(7),r=n.n(s),i=n(8),u=n(3),o=n(4),l="SET_USERS",j="SET_USER",b="SET_AUTH_USER",d={users:[],currentUser:{},authUser:!1},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},O=n(6),f=n(2);function v(e){return{type:l,payload:e}}function m(e){return{type:j,payload:e}}function h(e){return{type:b,payload:e}}n(29);function g(e){var t=e.children;return Object(a.jsx)("div",{className:"modal active",children:Object(a.jsx)("div",{className:"modal__content active",children:t})})}var x=n(10),N=n.n(x);n(30);function y(e){var t=e.onRegister,n=Object(c.useState)(""),s=Object(f.a)(n,2),r=s[0],i=s[1],o=Object(c.useState)(""),l=Object(f.a)(o,2),j=l[0],b=l[1],d=Object(c.useState)(!1),p=Object(f.a)(d,2),O=p[0],v=p[1],g=Object(c.useState)({}),x=Object(f.a)(g,2),y=x[0],_=x[1],S=Object(u.c)((function(e){return e.users})),w=Object(u.b)();return Object(a.jsxs)("form",{className:"register-from",onSubmit:function(e){return function(e){e.preventDefault();var t=S.find((function(e){return r===e.signUpLogin&&j===e.signUpPassword}));if(!t)return _({errorSignIn:"Wrong password or login"}),void v(!0);w(m(t)),w(h(!0)),v(!1),_({})}(e)},children:[Object(a.jsx)("div",{className:"row margin",children:Object(a.jsx)("div",{className:"input-field col s12",children:Object(a.jsx)("input",{className:"validate",type:"email",placeholder:"Login",value:r,onChange:function(e){return function(e){i(e.value),_({})}(e.target)},required:!0})})}),Object(a.jsx)("div",{className:"row margin",children:Object(a.jsxs)("div",{className:"input-field col s12",children:[Object(a.jsx)("input",{className:"validate",type:"password",placeholder:"Password",value:j,onChange:function(e){return function(e){b(e.value),_({})}(e.target)},required:!0}),y.errorSignIn&&Object(a.jsx)("div",{className:"errors",children:y.errorSignIn})]})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"input-field col s12",children:Object(a.jsx)("button",{className:"btn waves-effect waves-light col s12",type:"sumbit",children:"Sign in"})}),Object(a.jsx)("div",{className:"input-field col s12",children:Object(a.jsxs)("p",{className:"margin center medium-small sign-up text",children:["Don't have an account?",Object(a.jsx)("span",{className:N()("register",{prompt:O}),onClick:function(){return t(!0)},children:"\u2009Register now"})]})})]})]})}n(31);function _(e){var t=e.setNewUser,n=e.onRegister,s=Object(c.useState)(""),r=Object(f.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(""),j=Object(f.a)(l,2),b=j[0],d=j[1],p=Object(c.useState)(""),O=Object(f.a)(p,2),v=O[0],m=O[1],h=Object(c.useState)(""),g=Object(f.a)(h,2),x=g[0],N=g[1],y=Object(c.useState)(""),_=Object(f.a)(y,2),S=_[0],w=_[1],C=Object(c.useState)(""),U=Object(f.a)(C,2),P=U[0],R=U[1],T=Object(c.useState)({}),L=Object(f.a)(T,2),k=L[0],E=L[1],I=Object(u.c)((function(e){return e.users}));function D(){k.errorReTypePassword&&E({}),S!==P&&E({errorReTypePassword:"Passwords do not match"})}return Object(a.jsxs)("form",{className:"register-form signUp",onSubmit:function(e){return function(e){if(e.preventDefault(),!k.errorReTypePassword){var n={fullName:i,position:b,phone:v,signUpLogin:x,signUpPassword:S,reTypePassword:P,id:I.length+1};t(n),o(""),d(""),m(""),N(""),w(""),R("")}}(e)},onKeyPress:function(e){return function(e){"Enter"===e.key&&D()}(e)},children:[Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"text",placeholder:"Full Name",value:i,onChange:function(e){var t=e.target;return o(t.value)}})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"text",placeholder:"Position",value:b,onChange:function(e){var t=e.target;return d(t.value)}})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"tel",name:"tel",placeholder:"Number of phone",value:v,onChange:function(e){var t=e.target;return m(t.value)}})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"email",placeholder:"Login",value:x,onChange:function(e){var t=e.target;return N(t.value)},required:!0})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"password",placeholder:"Password",value:S,onChange:function(e){return function(e){w(e.value),E({})}(e.target)},required:!0})}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{className:"validate",type:"password",placeholder:"Re-type password",value:P,onChange:function(e){return function(e){R(e.value),E({})}(e.target)},onBlur:function(){return D()},required:!0}),(null===k||void 0===k?void 0:k.errorReTypePassword)&&Object(a.jsx)("div",{className:"errors",children:k.errorReTypePassword})]}),Object(a.jsxs)("div",{className:"button__manipulation",children:[Object(a.jsx)("button",{className:"btn waves-effect button__manipulation-back",type:"button",onClick:function(){return n(!1)},children:"Back"}),Object(a.jsx)("button",{className:"btn waves-effect button__manipulation-signUp",children:"Sign Up"})]})]})}n(32);function S(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(f.a)(r,2),u=i[0],o=i[1];return Object(a.jsxs)("div",{className:"input-button",children:[Object(a.jsx)("button",{className:"btn button",onClick:function(){o(n)},children:"Display"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{className:"form__input",type:"text",value:n,onChange:function(e){var t=e.target;return s(t.value)}}),Object(a.jsx)("input",{className:"form__input",type:"text",value:u,readOnly:!0})]})]})}n(33);function w(){var e=Object(u.c)((function(e){return e.users})),t=Object(u.c)((function(e){return e.currentUser}));return Object(a.jsx)("ul",{className:"userList",children:e.map((function(e){var n=e.fullName,c=e.id;return Object(a.jsx)("li",{className:N()("userList__user",{"userList__user--active":t.id===c}),children:n},c)}))})}n(34);function C(e){var t=e.onTabChange,n=Object(u.c)((function(e){return e.currentUser})),s=Object(u.c)((function(e){return e.users})),r=Object(u.b)(),i=n.fullName,o=n.position,l=n.phone,j=n.signUpLogin,b=n.signUpPassword,d=n.reTypePassword,p=n.id,h=Object(c.useState)(i),g=Object(f.a)(h,2),x=g[0],N=g[1],y=Object(c.useState)(o),_=Object(f.a)(y,2),S=_[0],w=_[1],C=Object(c.useState)(l),U=Object(f.a)(C,2),P=U[0],R=U[1],T=Object(c.useState)(j),L=Object(f.a)(T,2),k=L[0],E=L[1],I=Object(c.useState)(b),D=Object(f.a)(I,2),B=D[0],q=D[1],F=Object(c.useState)(d),J=Object(f.a)(F,2),A=J[0],H=J[1],K=Object(c.useState)(!1),W=Object(f.a)(K,2),z=W[0],G=W[1];return Object(a.jsxs)("form",{className:"form",onSubmit:function(e){return function(e){if(e.preventDefault(),B===A){var a=s.findIndex((function(e){return e.id===n.id})),c={fullName:x,position:S,phone:P,signUpLogin:k,signUpPassword:B,reTypePassword:A,id:p},i=[].concat(Object(O.a)(s.slice(0,a)),[c],Object(O.a)(s.slice(a+1,s.length)));r(m(c)),r(v(i)),t("userList")}}(e)},children:[Object(a.jsx)("input",{className:"validate form__input",type:"text",value:x,onChange:function(e){var t=e.target;return N(t.value)}}),Object(a.jsx)("input",{className:"validate form__input",type:"text",value:S,onChange:function(e){var t=e.target;return w(t.value)}}),Object(a.jsx)("input",{className:"validate form__input",type:"text",value:P,onChange:function(e){var t=e.target;return R(t.value)}}),Object(a.jsx)("input",{className:"validate form__input",type:"text",value:k,onChange:function(e){var t=e.target;return E(t.value)}}),Object(a.jsx)("input",{className:"validate form__input",type:z?"text":"password",value:B,onChange:function(e){var t=e.target;return q(t.value)}}),Object(a.jsx)("input",{className:"validate form__input",type:z?"text":"password",value:A,onChange:function(e){var t=e.target;return H(t.value)}}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",onClick:function(){return G(!z)}}),Object(a.jsx)("span",{children:"show password"})]})}),Object(a.jsx)("button",{className:"btn form__update",type:"submit",children:"Update"})]})}n(35);function U(e){var t=e.onTabChange,n=e.onRegister,c=Object(u.b)();return Object(a.jsx)("nav",{className:"nav",children:Object(a.jsx)("div",{className:"nav-wrapper",children:Object(a.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(a.jsx)("li",{className:"nav__item",onClick:function(){return t("userEdit")},children:"Edit"}),Object(a.jsx)("li",{className:"nav__item",onClick:function(){return t("userList")},children:"List"}),Object(a.jsx)("li",{className:"nav__item",onClick:function(){return t("inputButton")},children:"Display"}),Object(a.jsx)("li",{className:"nav__item",onClick:function(){n(!1),c(h(!1))},children:"Exit"})]})})})}n(36);function P(e){var t=e.setRegister,n=Object(c.useState)("userList"),s=Object(f.a)(n,2),r=s[0],i=s[1];return Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(U,{onTabChange:i,onRegister:t}),Object(a.jsxs)("div",{className:"page__wrapper",children:["userEdit"===r&&Object(a.jsx)(C,{onTabChange:i}),"userList"===r&&Object(a.jsx)(w,{}),"inputButton"===r&&Object(a.jsx)(S,{})]})]})}n(37);var R=function(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),n=t[0],s=t[1],r=Object(u.c)((function(e){return e.users})),i=Object(u.c)((function(e){return e.authUser})),o=Object(u.b)();return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("users")||[]);o(v(e))}),[o]),Object(c.useEffect)((function(){localStorage.setItem("users",JSON.stringify(r))}),[r]),Object(a.jsx)("div",{className:"app",children:i?Object(a.jsx)(P,{setRegister:s}):Object(a.jsx)(g,{children:n?Object(a.jsx)(_,{setNewUser:function(e){o(v([].concat(Object(O.a)(r),[e]))),s(!1)},onRegister:s}):Object(a.jsx)(y,{onRegister:s})})})},T=(n(38),Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{users:t.payload});case j:return Object(o.a)(Object(o.a)({},e),{},{currentUser:t.payload});case b:return Object(o.a)(Object(o.a)({},e),{},{authUser:t.payload});default:return e}})));r.a.render(Object(a.jsx)(u.a,{store:T,children:Object(a.jsx)(R,{})}),document.getElementById("root")),p()}},[[39,1,2]]]);
//# sourceMappingURL=main.7b6bbd7d.chunk.js.map