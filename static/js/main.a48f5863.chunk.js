(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var c,r,i,a,o,s,p,j,l,b,d,h,x,u,f,O,g,m,v=t(0),w=t.n(v),y=t(26),k=t.n(y),S=(t(37),t(9)),z=t(11),M=t(4),T=t(2),I=t(3),C=Object(T.b)(c||(c=Object(I.a)(["\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Poppins', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]))),E=T.c.div(r||(r=Object(I.a)(["\n  width: 1000px;\n  max-width: 100%;\n  padding: 0 20px;\n  margin: 0 auto;\n\n"]))),F=T.c.div(i||(i=Object(I.a)(["\n  position: relative;\n  max-width: 900px;\n  height: 320px;\n  margin: 0 auto;\n\n  h1 {\n    text-align: center;\n    margin: 40px auto;\n    font-size: 3rem;\n  }\n"]))),D=T.c.div(a||(a=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  max-width: 1000px;\n  margin: 0 auto;\n\n  h1 {\n    margin: 40px 0 20px;\n    font-size: 3rem;\n  }\n"]))),A=T.c.div(o||(o=Object(I.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n"]))),J=T.c.div(s||(s=Object(I.a)(["\n  position: relative;\n  width: 100%;\n  height: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: white;\n  padding: 0 60px;\n  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 15%)\n"]))),R=T.c.img(p||(p=Object(I.a)(["\n  height: 50px;\n"]))),B=T.c.form(j||(j=Object(I.a)(["\n  background-color: white;\n  width: 400px;\n  height: 38px;\n  border-radius: 5px;\n  border: 1px grey solid;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-left: auto;\n\n  input {\n    color: grey;\n    height: 100%;\n    width: 100%;\n    padding: 6px 10px;\n    border: none;\n    font-size: 1rem;\n    border-radius: 5px;\n  }\n\n  input::placeholder {\n    color: grey;\n    opacity: 0.7;\n  }\n\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: transparent;\n    cursor: pointer;\n    width: 45px;\n    height: 100%;\n    border: none;\n    border-radius: 0 5px 5px 0;\n\n    &:hover {\n      background-color: orange;\n      color: white;\n    }\n\n    .buttonIcon {\n      font-size: 30px;\n    }\n  }\n"]))),L=t.p+"static/media/logo.9a3f42d6.png",N=t(32),P=t(1),Y=function(n){var e=n.setRecipeSearch,t=Object(M.f)();return Object(P.jsxs)(J,{children:[Object(P.jsx)(z.b,{to:"/",children:Object(P.jsx)(R,{src:L,alt:"logo"})}),Object(P.jsxs)(B,{onSubmit:function(n){n.preventDefault();var c=n.currentTarget.elements;e(c.searchInput.value),t.push("/search")},action:"/search/",children:[Object(P.jsx)("input",{type:"text",id:"searchInput",placeholder:"Find a recipe"}),Object(P.jsx)("button",{type:"submit",children:Object(P.jsx)(N.a,{className:"buttonIcon"})})]})]})},q=t(13),G=t(10),H=t.n(G),K=t(12),Q=t(31),U=t.n(Q),V=T.c.div(l||(l=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: white;\n\n  h2 {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n\n  a {\n    text-decoration: none;\n    color: black;\n  }\n"]))),W=T.c.div(b||(b=Object(I.a)(["\n  height: 230px;\n  width: 100%;\n  position: relative;\n\n  img {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    object-fit: contain;\n    object-position: center;\n  }\n"]))),X=function(n){n.idCategory;var e=n.strCategory,t=n.strCategoryThumb;return Object(P.jsxs)(V,{children:[Object(P.jsx)(W,{children:Object(P.jsx)(z.b,{to:"categories/".concat(e),children:Object(P.jsx)("img",{src:t,alt:e})})}),Object(P.jsx)("a",{href:"categories/".concat(e),children:Object(P.jsx)("h2",{children:e})})]})},Z=Object(T.c)(U.a)(d||(d=Object(I.a)(["\n  .slick-next,\n  .slick-prev {\n    width: 50px;\n    height: 50px;\n    background-color: orange !important;\n    border-radius: 50%;\n    z-index: 99999;\n    top: 50%;\n    transform: translateY(-50%);\n    color: white;\n  }\n"]))),$=function(){var n=Object(v.useState)([]),e=Object(S.a)(n,2),t=e[0],c=e[1];return Object(v.useEffect)((function(){(function(){var n=Object(K.a)(H.a.mark((function n(){var e,t;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://www.themealdb.com/api/json/v1/1/categories.php");case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,c(t.categories),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(F,{children:[Object(P.jsx)("h1",{children:"Categories"}),Object(P.jsx)(Z,Object(q.a)(Object(q.a)({},{dots:!0,infinite:!0,accessibility:!0,speed:500,autoplay:!0,autoplaySpeed:3e3,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:950,settings:{slidesToShow:3}},{breakpoint:650,settings:{slidesToShow:2}}]}),{},{children:t.length&&t.map((function(n){return Object(P.jsx)(X,Object(q.a)({},n),n.idCategory)}))}))]})})},_=T.c.div(h||(h=Object(I.a)(["\n  width: 270px;\n  border: 1px solid grey;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin: 20px;\n"]))),nn=T.c.div(x||(x=Object(I.a)(["\n  height: 200px;\n  width: 100%;\n  position: relative;\n  justify-self: flex-start;\n  align-self: flex-start;\n\n  img {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    object-fit: cover;\n    object-position: center;\n  }\n"]))),en=T.c.div(u||(u=Object(I.a)(["\n  width: 100%;\n  padding: 15px;\n\n  a {\n    text-decoration: none;\n    color: black;\n    font-size: 0.8rem;\n    font-weight: 300;\n  }\n"]))),tn=function(n){var e=n.idMeal,t=n.strMealThumb,c=n.strMeal;return Object(P.jsxs)(_,{children:[Object(P.jsx)(nn,{children:Object(P.jsx)(z.b,{to:"recipe/".concat(e),children:Object(P.jsx)("img",{src:t,alt:c})})}),Object(P.jsx)(en,{children:Object(P.jsx)(z.b,{to:"recipe/".concat(e),children:Object(P.jsx)("h2",{children:c})})})]})},cn=function(){var n=Object(v.useState)([]),e=Object(S.a)(n,2),t=e[0],c=e[1],r=Object(M.g)().id;return Object(v.useEffect)((function(){(function(){var n=Object(K.a)(H.a.mark((function n(){var e,t;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(r));case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,c(t.meals),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}})()()}),[r]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(D,{children:[Object(P.jsx)("h1",{children:r}),Object(P.jsx)(A,{children:t.map((function(n){return Object(P.jsx)(tn,Object(q.a)({},n),n.idMeal)}))})]})})},rn=T.c.div(f||(f=Object(I.a)(["\n  width: 1000px;\n  max-width: 100%;\n  padding: 0 20px;\n  margin: 0 auto;\n\n  h2 {\n    font-size: 2rem;\n    margin: 25px 0 5px;\n  }\n\n  p {\n    padding: 30px 0;\n  }\n"]))),an=T.c.div(O||(O=Object(I.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),on=T.c.div(g||(g=Object(I.a)(["\n  height: 400px;\n  width: 48%;\n  position: relative;\n  margin: 15px 0;\n\n  img {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    object-fit: contain;\n    object-position: center;\n  }\n"]))),sn=T.c.ul(m||(m=Object(I.a)(["\n  width: 48%;\n  list-style: none;\n  font-size: 1.3rem;\n\n  li {\n    border-bottom: 1px solid #DADADA;\n    margin: 2px 0;\n  }\n"]))),pn=function(){var n=Object(v.useState)({}),e=Object(S.a)(n,2),t=e[0],c=e[1],r=Object(v.useState)([]),i=Object(S.a)(r,2),a=i[0],o=i[1],s=Object(M.g)().id;Object(v.useEffect)((function(){(function(){var n=Object(K.a)(H.a.mark((function n(){var e,r;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(s));case 3:return e=n.sent,n.next=6,e.json();case 6:r=n.sent,c(r.meals[0]),function(n){for(var e=[],t=1;t<=10&&n["strIngredient".concat(t)];t++){var c={ingredient:n["strIngredient".concat(t)],measure:n["strMeasure".concat(t)]};e.push(c)}o(e)}(t),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}})()()}),[s,t]);var p=t.strMeal,j=t.strMealThumb,l=t.strInstructions;return Object(P.jsxs)(rn,{children:[Object(P.jsx)("h2",{children:p}),Object(P.jsxs)(an,{children:[Object(P.jsx)(on,{children:Object(P.jsx)("img",{src:j,alt:p})}),Object(P.jsx)(sn,{children:a.map((function(n,e){var t=n.ingredient,c=n.measure;return Object(P.jsxs)("li",{children:[t," - ",c]},e)}))})]}),Object(P.jsx)("p",{children:l})]})},jn=function(n){var e=n.recipeSearch,t=Object(v.useState)([]),c=Object(S.a)(t,2),r=c[0],i=c[1],a=Object(v.useState)(!0),o=Object(S.a)(a,2),s=o[0],p=o[1];return Object(v.useEffect)((function(){i([]),p(!0),function(){var n=Object(K.a)(H.a.mark((function n(){var t,c;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e));case 3:return t=n.sent,n.next=6,t.json();case 6:c=n.sent,console.log(c),setTimeout((function(){i(c.meals),p(!1)}),500),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}()()}),[e]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(D,{children:[s&&Object(P.jsx)("h1",{children:"Loading"}),!r&&Object(P.jsxs)("h1",{children:["Can't find any recipes for ",e]}),r&&!s&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("h1",{children:["Search result for ",e]}),Object(P.jsx)(A,{children:r.map((function(n){return Object(P.jsx)(tn,Object(q.a)({},n),n.idMeal)}))})," "]})]})})},ln={colors:{main:"orange",header:"black",text:"grey"},mobile:"768px"};var bn=function(){var n=Object(v.useState)(""),e=Object(S.a)(n,2),t=e[0],c=e[1];return Object(P.jsx)(z.a,{basename:"/recipe-app",children:Object(P.jsxs)(T.a,{theme:ln,children:[Object(P.jsx)(C,{}),Object(P.jsx)(Y,{setRecipeSearch:c}),Object(P.jsx)(M.c,{children:Object(P.jsxs)(E,{children:[Object(P.jsx)(M.a,{exact:!0,path:"/",component:$}),Object(P.jsx)(M.a,{exact:!0,path:"/categories/:id",component:cn}),Object(P.jsx)(M.a,{exact:!0,path:"/recipe/:id",component:pn}),Object(P.jsx)(M.a,{exact:!0,path:"/categories/recipe/:id",component:pn}),Object(P.jsx)(M.a,{path:"/search",children:Object(P.jsx)(jn,{recipeSearch:t})})]})})]})})};k.a.render(Object(P.jsx)(w.a.StrictMode,{children:Object(P.jsx)(bn,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.a48f5863.chunk.js.map