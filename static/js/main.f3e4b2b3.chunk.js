(this["webpackJsonpdigital-service"]=this["webpackJsonpdigital-service"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),s=n(6),r=n.n(s),l=n(7),o=n(2);function d(e){var t=e.setModalActive,n=e.handleModal;return Object(a.jsx)("nav",{className:"nav",children:Object(a.jsx)("div",{className:"nav-wrapper",children:Object(a.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"nav__sign-in",onClick:function(){return t(!0)},href:"#",children:"Sign in"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"nav__registration",onClick:function(){return n(!0)},href:"#",children:"Registration"})})]})})})}n(13);function u(e){var t=e.active,n=e.handleModal,c=e.children;return Object(a.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return n(!1)},children:Object(a.jsx)("div",{className:t?"modal__content active":"modal",onClick:function(e){return e.stopPropagation()},children:c})})}n(14);function j(e){var t=e.setRegister;return Object(a.jsxs)("form",{className:"register-from",children:[Object(a.jsx)("div",{className:"row margin",children:Object(a.jsx)("div",{className:"input-field col s12",children:Object(a.jsx)("input",{className:"validate",type:"email",placeholder:"Login",required:!0})})}),Object(a.jsx)("div",{className:"row margin",children:Object(a.jsx)("div",{className:"input-field col s12",children:Object(a.jsx)("input",{className:"validate",type:"password",placeholder:"Password",required:!0})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"input-field col s12",children:Object(a.jsx)("button",{className:"btn waves-effect waves-light col s12",type:"sumbit",children:"Sign in"})}),Object(a.jsx)("div",{className:"input-field col s12",children:Object(a.jsxs)("p",{className:"margin center medium-small sign-up",children:["Don't have an account?",Object(a.jsx)("a",{onClick:function(){return t(!0)},href:"#",children:" Register now"})]})})]})]})}n(15);function b(e){var t=e.setNewUser,n=Object(c.useState)(""),i=Object(o.a)(n,2),s=i[0],r=i[1],l=Object(c.useState)(""),d=Object(o.a)(l,2),u=d[0],j=d[1],b=Object(c.useState)(""),v=Object(o.a)(b,2),O=v[0],f=v[1],h=Object(c.useState)(""),m=Object(o.a)(h,2),p=m[0],g=m[1],x=Object(c.useState)(""),N=Object(o.a)(x,2),w=N[0],S=N[1],y=Object(c.useState)(""),C=Object(o.a)(y,2),k=C[0],_=C[1];return Object(a.jsxs)("form",{className:"register-form flex",onSubmit:function(e){return function(e){e.preventDefault(),t({fullName:s,position:u,phone:O,login:p,password:w,reTypePassword:k}),r(""),j(""),f(""),g(""),S(""),_("")}(e)},children:[Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"text",placeholder:"Full Name",value:s,onChange:function(e){return r(e.target.value)},required:!0})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"text",placeholder:"Position",value:u,onChange:function(e){return j(e.target.value)},required:!0})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"tel",name:"tel",placeholder:"Number of phone",value:O,onChange:function(e){return f(e.target.value)},required:!0})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"email",placeholder:"Login",value:p,onChange:function(e){return g(e.target.value)},required:!0})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"password",placeholder:"Password",value:w,onChange:function(e){return S(e.target.value)},required:!0})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{className:"validate",type:"password",placeholder:"Re-type password",value:k,onChange:function(e){return _(e.target.value)},required:!0})}),Object(a.jsx)("div",{className:"button__regist",children:Object(a.jsx)("button",{className:"btn waves-effect button__regist-link",children:"Sign Up"})})]})}n(16);var v=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),r=Object(o.a)(s,2),v=r[0],O=r[1],f=Object(c.useState)([]),h=Object(o.a)(f,2),m=h[0],p=h[1];function g(e){i(e),O(e)}return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("users")||"[]");p(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("users",JSON.stringify(m))}),[m]),Object(c.useEffect)((function(){var e=function(e){27===e.keyCode&&(i(!1),O(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),console.log(m),Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(d,{setModalActive:i,handleModal:g}),Object(a.jsx)(u,{active:n,handleModal:g,children:v?Object(a.jsx)(b,{setNewUser:function(e){p((function(t){return[e].concat(Object(l.a)(t))})),O(!1)}}):Object(a.jsx)(j,{setRegister:O})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};n(17);r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.f3e4b2b3.chunk.js.map