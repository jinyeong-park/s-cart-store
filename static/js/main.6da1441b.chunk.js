(this["webpackJsonps-cart"]=this["webpackJsonps-cart"]||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},105:function(e,t,c){"use strict";c.r(t);var i=c(2),n=c(3),a=c.n(n),s=c(49),r=c.n(s),o=(c(62),c(50)),d=c(6),l=(c(63),c(64),c(52)),j=c.n(l),m=Object(n.createContext)(),u=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(i.jsx)(m.Provider,{value:Object(n.useReducer)(t,c),children:a})},h=function(){return Object(n.useContext)(m)},b=(c(65),c(51)),p=c.n(b);var O=function(){var e=h(),t=Object(d.a)(e,2),c=(t[0].displayItems,t[1]),a=Object(n.useState)(""),s=Object(d.a)(a,2),r=s[0],o=s[1];return Object(i.jsxs)("div",{className:"search",children:[Object(i.jsx)("input",{className:"search__searchInput",type:"text",placeholder:"Search",onChange:function(e){return o(e.target.value)}}),Object(i.jsx)(p.a,{className:"search__searchIcon",onClick:""===r?function(){c({type:"REFRESH_DISPLAY_PRODUCTS"})}:function(){c({type:"UPDATE_DISPLAY_PRODUCTS",searchword:r})}})]})};c(70);var x=function(){var e=["Diptyque perfume","MacBook Laptop","Apple Watch","Patio Set","Chanel reissue"],t=Object(n.useState)(1),c=Object(d.a)(t,2),a=(c[0],c[1],Object(n.useState)(e[0])),s=Object(d.a)(a,2);return s[0],s[1],Object(i.jsxs)("div",{className:"trendingitem__container",children:[Object(i.jsxs)("div",{className:"trendingitem__eachItem",children:[Object(i.jsx)("h4",{className:"trendingitem_number",children:Object(i.jsx)("i",{children:"1"})}),Object(i.jsx)("h4",{className:"trendingitem_name",children:e[0]})]}),Object(i.jsxs)("div",{className:"trendingitem__eachItem",children:[Object(i.jsx)("h4",{className:"trendingitem_number",children:Object(i.jsx)("i",{children:"2"})}),Object(i.jsx)("h4",{className:"trendingitem_name",children:e[1]})]}),Object(i.jsxs)("div",{className:"trendingitem__eachItem",children:[Object(i.jsx)("h4",{className:"trendingitem_number",children:Object(i.jsx)("i",{children:"3"})}),Object(i.jsx)("h4",{className:"trendingitem_name",children:e[2]})]}),Object(i.jsxs)("div",{className:"trendingitem__eachItem",children:[Object(i.jsx)("h4",{className:"trendingitem_number",children:Object(i.jsx)("i",{children:"4"})}),Object(i.jsx)("h4",{className:"trendingitem_name",children:e[3]})]}),Object(i.jsxs)("div",{className:"trendingitem__eachItem",children:[Object(i.jsx)("h4",{className:"trendingitem_number",children:Object(i.jsx)("i",{children:"5"})}),Object(i.jsx)("h4",{className:"trendingitem_name",children:e[4]})]})]})},g=c(14),_=c(39),f=_.a.initializeApp({apiKey:"AIzaSyBu-vPgPApae-hKqOh4EoJVN1gWlrZk4KU",authDomain:"e-commerce-scart.firebaseapp.com",databaseURL:"https://e-commerce-scart.firebaseio.com",projectId:"e-commerce-scart",storageBucket:"e-commerce-scart.appspot.com",messagingSenderId:"1051946373823",appId:"1:1051946373823:web:29df1839fd57400e492c0a",measurementId:"G-70PYB2NJBB"}).firestore(),v=_.a.auth();var N=function(){var e=h(),t=Object(d.a)(e,2),c=t[0],n=c.cart,a=c.user,s=t[1],r=a?a.email.split("@")[0]:"Guest";return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)(g.b,{to:"/",children:Object(i.jsx)("img",{className:"header__logo",src:"https://i.imgur.com/B0eaVD2.png",onClick:function(){s({type:"REFRESH_DISPLAY_PRODUCTS"})}})}),Object(i.jsx)(O,{}),Object(i.jsx)(x,{}),Object(i.jsxs)("div",{className:"header__nav",children:[Object(i.jsx)(g.b,{to:"/login",children:Object(i.jsxs)("div",{className:"header__option",children:[Object(i.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",r]}),Object(i.jsx)("span",{className:"header__optionLineTwo",onClick:function(){a&&v.signOut()},children:a?"Sign Out":"Sign In"})]})}),Object(i.jsx)(g.b,{to:"/orders",children:Object(i.jsxs)("div",{className:"header__option",children:[Object(i.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(i.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(i.jsx)(g.b,{to:"/checkout",children:Object(i.jsxs)("div",{className:"header__optionCart",children:[Object(i.jsx)(j.a,{}),Object(i.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:n.length})]})})]})]})},y=(c(76),c(77),c(32)),S=c.n(y);var C=function(e){var t=e.id,c=e.title,n=e.condition,a=e.price,s=e.image,r=e.rating,o=h(),l=Object(d.a)(o,2),j=(l[0].allItems,l[1]);return Object(i.jsxs)("div",{className:"product",children:[Object(i.jsxs)("div",{className:"product__info",children:[Object(i.jsx)("p",{children:c}),Object(i.jsxs)("p",{className:"product__price",children:[Object(i.jsx)("small",{children:"$"}),Object(i.jsx)("strong",{children:a})]}),Object(i.jsxs)("p",{className:"product__condition",children:["Condition: ",n]}),Object(i.jsx)("div",{className:"product__rating",children:Array(r).fill().map((function(){return Object(i.jsx)("p",{className:"product__starIcon",children:Object(i.jsx)(S.a,{fontSize:"small"})})}))})]}),Object(i.jsx)("img",{src:s,alt:""}),Object(i.jsx)("button",{onClick:function(){j({type:"ADD_TO_CART",item:{id:t,title:c,condition:n,price:a,image:s,rating:r}})},children:"Add to Cart"})]})};var w=function(){var e=h(),t=Object(d.a)(e,2),c=t[0].displayItems;return t[1],Object(i.jsx)("div",{className:"home",children:Object(i.jsxs)("div",{className:"home_container",children:[Object(i.jsx)("img",{className:"home_image",src:"https://i.imgur.com/qydIey7.png",alt:""}),Object(i.jsx)("div",{className:"home_row",children:c.map((function(e){return Object(i.jsx)(C,{id:e.id,title:e.title,price:e.price,condition:e.condition,image:e.image,rating:e.rating})}))})]})})},I=c(9),k=(c(78),c(79),c(25)),P=c.n(k),A=c(23),B=c(13),E=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(console.log("action in reducer",t),t.type){case"REFRESH_DISPLAY_PRODUCTS":return Object(B.a)(Object(B.a)({},e),{},{displayItems:e.allItems});case"UPDATE_DISPLAY_PRODUCTS":var c=e.displayItems.filter((function(e){return e.title.toLowerCase().includes(t.searchword.toLowerCase())}));return console.log("filteredItem in reducer",c),Object(B.a)(Object(B.a)({},e),{},{displayItems:c});case"ADD_TO_CART":return Object(B.a)(Object(B.a)({},e),{},{cart:[].concat(Object(A.a)(e.cart),[t.item])});case"EMPTY_CART":return Object(B.a)(Object(B.a)({},e),{},{cart:[]});case"REMOVE_FROM_CART":var i=e.cart.findIndex((function(e){return e.id===t.id})),n=Object(A.a)(e.cart);return i>=0?n.splice(i,1):console.log("cannot remove product (id: ".concat(t.id,") as it is not in the cart")),Object(B.a)(Object(B.a)({},e),{},{cart:n});case"SET_USER":return Object(B.a)(Object(B.a)({},e),{},{user:t.user});default:return e}};var D=function(){var e=Object(I.f)(),t=h(),c=Object(d.a)(t,2),n=c[0].cart;return c[1],Object(i.jsxs)("div",{className:"subtotal",children:[Object(i.jsx)(P.a,{renderText:function(e){return Object(i.jsxs)("p",{children:["Subtotal (",n.length," items):",Object(i.jsxs)("strong",{children:[" ",e]})]})},decimalScale:2,value:E(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(i.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};c(81);var R=function(e){var t=e.id,c=e.title,n=e.condition,a=e.price,s=e.image,r=e.rating,o=e.hideButton,l=h(),j=Object(d.a)(l,2),m=(j[0].cart,j[1]);return Object(i.jsxs)("div",{className:"checkoutItem",children:[console.log("hello checkout"),Object(i.jsx)("img",{className:"checkoutItem__image",src:s}),Object(i.jsxs)("div",{className:"checkoutItem__info",children:[Object(i.jsx)("p",{className:"checkoutItem__title",children:c}),Object(i.jsxs)("p",{className:"checkoutItem__price",children:[Object(i.jsx)("small",{children:"$"}),Object(i.jsx)("strong",{children:a})]}),Object(i.jsxs)("p",{className:"checkoutItem__condition",children:["Condition: ",n]}),Object(i.jsx)("div",{className:"checkoutItem__rating",children:Array(r).fill().map((function(){return Object(i.jsx)("p",{className:"checkoutItem__starIcon",children:Object(i.jsx)(S.a,{fontSize:"small"})})}))}),!o&&Object(i.jsx)("button",{onClick:function(){m({type:"REMOVE_FROM_CART",id:t})},children:"Remove from Cart"})]})]})};var L=function(){var e=h(),t=Object(d.a)(e,2),c=t[0],n=c.cart,a=c.user,s=(t[1],a?a.email.split("@")[0]:"Guest");return console.log("cartitem",n),Object(i.jsxs)("div",{className:"checkout",children:[Object(i.jsxs)("div",{className:"checkout__left",children:[Object(i.jsx)("img",{className:"checkout__ad",src:"",alt:""}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{children:["Hello, ",s]}),Object(i.jsx)("h2",{className:"checkout__title",children:"Your Shopping Cart"}),n.map((function(e){return Object(i.jsx)(R,{id:e.id,title:e.title,condition:e.condition,price:e.price,image:e.image,rating:e.rating})}))]})]}),Object(i.jsx)("div",{className:"checkout__right",children:Object(i.jsx)(D,{})})]})};c(82);var U=function(){var e=Object(I.f)(),t=Object(n.useState)(""),c=Object(d.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),o=Object(d.a)(r,2),l=o[0],j=o[1];return Object(i.jsxs)("div",{className:"login",children:[Object(i.jsx)(g.b,{to:"/",children:Object(i.jsx)("img",{className:"login__logo",src:"https://i.imgur.com/Q3TUC8Z_d.webp?maxwidth=728&fidelity=grand"})}),Object(i.jsxs)("div",{className:"login__container",children:[Object(i.jsx)("h2",{children:"Sign-in"}),Object(i.jsxs)("form",{children:[Object(i.jsx)("h5",{children:"E-mail"}),Object(i.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("h5",{children:"Password"}),Object(i.jsx)("input",{type:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),v.signInWithEmailAndPassword(a,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(i.jsx)("button",{typpe:"submit",onClick:function(t){t.preventDefault(),v.createUserWithEmailAndPassword(a,l).then((function(t){console.log("authentification success and auth object:",t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signUpButton",children:"Create your sCart Account"})]})]})},M=c(27),G=c.n(M),Y=c(38),H=(c(84),c(24)),W=c(53),q=c.n(W).a.create({baseURL:"https://us-central1-e-commerce-scart.cloudfunctions.net/api"});var z=function(){var e=h(),t=Object(d.a)(e,2),c=t[0],a=c.cart,s=c.user,r=t[1],o=Object(I.f)(),l=Object(H.useStripe)(),j=Object(H.useElements)(),m=Object(n.useState)(""),u=Object(d.a)(m,2),b=u[0],p=u[1],O=Object(n.useState)(!1),x=Object(d.a)(O,2),_=x[0],v=x[1],N=Object(n.useState)(null),y=Object(d.a)(N,2),S=y[0],C=y[1],w=Object(n.useState)(!0),k=Object(d.a)(w,2),A=k[0],B=k[1],T=Object(n.useState)(!0),D=Object(d.a)(T,2),L=D[0],U=D[1];Object(n.useEffect)((function(){(function(){var e=Object(Y.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q({method:"post",url:"/payments/create?total=".concat(100*E(a))});case 2:t=e.sent,U(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),console.log("The clientSecret:",L),console.log("user:",s);var M=function(){var e=Object(Y.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(!0),e.next=4,l.confirmCardPayment(L,{payment_method:{card:j.getElement(H.CardElement)}}).then((function(e){var t=e.paymentIntent;f.collection("user").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(t.id).set({cart:a,amount:t.amount,created:t.created}),v(!0),C(null),p(!1),r({type:"EMPTY_CART"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"payment",children:Object(i.jsxs)("div",{className:"payment__container",children:[Object(i.jsxs)("h3",{children:["Checkout ",Object(i.jsxs)(g.b,{to:"/checkout",children:["(",null===a||void 0===a?void 0:a.length," items)"]})]}),Object(i.jsxs)("div",{className:"payment__section",children:[Object(i.jsx)("div",{className:"payment__title",children:Object(i.jsx)("h3",{children:"Delivery Address"})}),Object(i.jsxs)("div",{className:"payment__address",children:[Object(i.jsxs)("p",{children:["Email: ",null===s||void 0===s?void 0:s.email]}),Object(i.jsx)("p",{children:"770 Harrison St"}),Object(i.jsx)("p",{children:"Santa Clara, CA 95050"})]})]}),Object(i.jsxs)("div",{className:"payment__section",children:[Object(i.jsx)("div",{className:"payment__title",children:Object(i.jsx)("h3",{children:"Review items and delivery"})}),Object(i.jsx)("div",{className:"payment__item",children:a.map((function(e){return Object(i.jsx)(R,{id:e.id,title:e.title,condition:e.condition,price:e.price,image:e.image,rating:e.rating})}))})]}),Object(i.jsxs)("div",{className:"payment__section",children:[Object(i.jsx)("div",{className:"payment__title",children:Object(i.jsx)("h3",{children:"Payment Method"})}),Object(i.jsx)("div",{className:"payment__details",children:Object(i.jsxs)("form",{onSubmit:M,children:[Object(i.jsx)(H.CardElement,{onChange:function(e){B(event.empty),C(event.error?event.error.message:"")}}),Object(i.jsxs)("div",{className:"payment__priceContainer",children:[Object(i.jsx)(P.a,{renderText:function(e){return Object(i.jsxs)("h4",{children:["Order total: ",e]})},decimalScale:2,value:E(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(i.jsx)("button",{className:"payment__btn",disabled:b||A||_,children:Object(i.jsx)("span",{children:b?Object(i.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),S&&Object(i.jsx)("div",{children:S})]})})]})]})})},F=(c(101),c(102),c(54)),J=c.n(F);var V=function(e){var t,c=e.order;return Object(i.jsxs)("div",{className:"order",children:[Object(i.jsx)("h2",{children:"Order"}),console.log("order",c),Object(i.jsx)("p",{children:J.a.unix(c.data.created).format("MMMM Do YYYY, h:mm a")}),Object(i.jsx)("p",{className:"order__id",children:Object(i.jsx)("small",{children:c.id})}),null===(t=c.data.cart)||void 0===t?void 0:t.map((function(e){return Object(i.jsx)(R,{id:e.id,tile:e.title,condition:e.condition,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(i.jsx)(P.a,{renderText:function(e){return Object(i.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var Z=function(){console.log("orders");var e=h(),t=Object(d.a)(e,2),c=t[0],a=(c.cart,c.user),s=(t[1],Object(n.useState)([])),r=Object(d.a)(s,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){a?f.collection("user").doc(null===a||void 0===a?void 0:a.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):l([])}),[a]),Object(i.jsxs)("div",{className:"orders",children:[Object(i.jsx)("h1",{children:"Your Orders"}),Object(i.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(i.jsx)(V,{order:e})}))})]})},$=c(55),K=Object($.a)("pk_test_51HjZ6hCMZ8B0kysvPMgSDPsWtDmi5cNcufylauBZKh8wyTRaBoDv6WoeI2gfnqyzY8UTPOcv874qX15SNEokPLqS00bpVJCOrd");var Q=function(){var e=h(),t=Object(d.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){v.onAuthStateChanged((function(e){console.log("THE USER IS >>>",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(i.jsx)(g.a,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(I.c,{children:[Object(i.jsx)(I.a,{path:"/login",children:Object(i.jsx)(U,{})}),Object(i.jsxs)(I.a,{path:"/checkout",children:[Object(i.jsx)(N,{}),Object(i.jsx)(L,{})]}),Object(i.jsxs)(I.a,{path:"/orders",children:[Object(i.jsx)(N,{}),Object(i.jsx)(Z,{})]}),Object(i.jsxs)(I.a,{path:"/payment",children:[Object(i.jsx)(N,{}),Object(i.jsx)(H.Elements,{stripe:K,children:Object(i.jsx)(z,{})})]}),Object(i.jsxs)(I.a,{path:"/",children:[Object(i.jsx)(N,{}),Object(i.jsx)(w,{})]})]})})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(u,{initialState:{cart:[],user:null,allItems:[{id:"1",title:"Diptyque Perfume Doson",price:90,condition:"Almost new",image:"https://mercari-images.global.ssl.fastly.net/photos/m76577444376_1.jpg?1602650326&w=200&h=200&fitcrop&sharpen",rating:5},{id:"2",title:'[Refurbished] Apple - MacBook Pro - 16" Display with Touch Bar - Intel Core i7 - 16GB Memory - 512GB SSD - Space Gray',price:1100,condition:"Good",image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366564_sd.jpg",rating:4},{id:"3",title:"CHANEL Aged Calfskin Quilted 2.55 Reissue 226 Flap Black",price:4050,condition:"Good",image:"https://www.fashionphile.com/images/product-images/thumb/3ab0b98ff0565c8e099a5e8e6c0b2bf9/1ba36119ee329bec22ae0714e9a287a0.jpg",rating:4},{id:"4",title:"[Used] Apple Watch 38mm Series 2 Aluminum GPS with Sport Band MP0D2LL/A",price:120,condition:"Good",image:"https://i5.walmartimages.com/asr/378bb73b-0705-4493-9941-35e24101047c_1.c5ed98ac6aca7a05e1a785ed146c3677.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",rating:3},{id:"5",title:"Tadwick Patio 3 Piece Bistro Set",price:299,condition:"New",image:"https://secure.img1-fg.wfcdn.com/im/53410039/resize-h250%5Ecompr-r85/6757/67571957/Tadwick+Patio+3+Piece+Bistro+Set.jpg",rating:4},{id:"6",title:'39 in. x 16 in. "Classic Orchid" by Graham and Brown Printed Canvas Wall Art',price:39.55,condition:"New",image:"https://images.homedepot-static.com/productImages/43486047-8534-4c33-9ef7-be6de132d5de/svn/blue-graham-brown-posters-art-prints-41-542-e1_600.jpg",rating:3}],displayItems:[{id:"1",title:"Diptyque Perfume Doson",price:90,condition:"Almost new",image:"https://mercari-images.global.ssl.fastly.net/photos/m76577444376_1.jpg?1602650326&w=200&h=200&fitcrop&sharpen",rating:5},{id:"2",title:'[Refurbished] Apple - MacBook Pro - 16" Display with Touch Bar - Intel Core i7 - 16GB Memory - 512GB SSD - Space Gray',price:1100,condition:"Good",image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366564_sd.jpg",rating:4},{id:"3",title:"CHANEL Aged Calfskin Quilted 2.55 Reissue 226 Flap Black",price:4050,condition:"Good",image:"https://www.fashionphile.com/images/product-images/thumb/3ab0b98ff0565c8e099a5e8e6c0b2bf9/1ba36119ee329bec22ae0714e9a287a0.jpg",rating:4},{id:"4",title:"[Used] Apple Watch 38mm Series 2 Aluminum GPS with Sport Band MP0D2LL/A",price:120,condition:"Good",image:"https://i5.walmartimages.com/asr/378bb73b-0705-4493-9941-35e24101047c_1.c5ed98ac6aca7a05e1a785ed146c3677.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",rating:3},{id:"5",title:"Tadwick Patio 3 Piece Bistro Set",price:299,condition:"New",image:"https://secure.img1-fg.wfcdn.com/im/53410039/resize-h250%5Ecompr-r85/6757/67571957/Tadwick+Patio+3+Piece+Bistro+Set.jpg",rating:4},{id:"6",title:'39 in. x 16 in. "Classic Orchid" by Graham and Brown Printed Canvas Wall Art',price:39.55,condition:"New",image:"https://images.homedepot-static.com/productImages/43486047-8534-4c33-9ef7-be6de132d5de/svn/blue-graham-brown-posters-art-prints-41-542-e1_600.jpg",rating:3}]},reducer:T,children:Object(i.jsx)(Q,{})})}),document.getElementById("root"))},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},70:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},84:function(e,t,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.6da1441b.chunk.js.map