(this.webpackJsonpcatalog=this.webpackJsonpcatalog||[]).push([[0],{135:function(e,t,a){e.exports=a(200)},140:function(e,t,a){},141:function(e,t,a){},153:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=(a(140),a(141),a(18)),o=a(19);function m(){var e=Object(i.a)(["\n    float: left;\n    margin: 5% auto;\n    width: 20%;\n    a {\n        color: #000000;\n    }\n"]);return m=function(){return e},e}var s=o.a.div(m()),u=a(10),g=a(111),d=a.n(g),f=a(112),E=a.n(f),p=a(110),v=a.n(p),h=a(109),y=a.n(h),b=a(113),N=a.n(b),w=function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(s,null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/screen1"},r.a.createElement(y.a,null)))),r.a.createElement(s,null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/favorites"},r.a.createElement(v.a,null)))),r.a.createElement(s,null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/home"},r.a.createElement(d.a,null)))),r.a.createElement(s,null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/screen4"},r.a.createElement(E.a,null)))),r.a.createElement(s,null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/screen5"},r.a.createElement(N.a,null))))))},x=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(w,null))};function j(){var e=Object(i.a)(["\n    background-color: #fff;\n    color: #000000;\n    z-index: 1000;\n    top: 0;\n    float: left;\n    height: 6%;\n    margin: 2% 0% 3% 0%;\n    position: fixed;\n    width: 100%;\n    > h5 {\n        margin: 1% auto 1% auto;\n    }\n    font-size: 25px;\n    font-family: Lato;\n    font-weight: 100 !important;\n"]);return j=function(){return e},e}function J(){var e=Object(i.a)(["\n    background-color: #fff;\n    color: #000000;\n    z-index: 1000;\n    top: 0;\n    float: left;\n    height: 6%;\n    margin: 2% 0% 3% 0%;\n    position: fixed;\n    width: 100%;\n    > h5 {\n        margin: 1% auto 1% auto;\n    }\n    font-size: 25px;\n    font-family: Lato;\n    font-weight: 100 !important;\n"]);return J=function(){return e},e}function O(){var e=Object(i.a)(["\n    background-color: #f9f9f9;\n    color: #000000;\n    z-index: 1000;\n    top: 0;\n    float: left;\n    height: auto;\n    margin: 0% 0% 3% 0%;\n    position: fixed;\n    width: 100%;\n    > h5 {\n        margin: 1% auto 1% auto;\n    }\n    font-size: 50px;\n    font-family: Cinzel;\n"]);return O=function(){return e},e}var S=o.a.div(O()),L=o.a.div(J()),_=(o.a.div(j()),a(16)),I=a(32),k=a(54),C=a(251);var D=Object(I.g)((function(){var e=Object(_.a)();return console.log(e.location),console.log("page is",e.location.pathname),r.a.createElement(n.Fragment,null,function(){switch(e.location.pathname){case"/home":return r.a.createElement(S,null,r.a.createElement("h5",null,"DL Jewels"));case"/favorites":return r.a.createElement(k.a,{component:"div"},r.a.createElement(C.a,{fontWeight:"fontWeightLight",m:1},r.a.createElement(L,null,"My cart")));case"/itemDetails":return r.a.createElement(k.a,{component:"div"},r.a.createElement(C.a,{fontWeight:"fontWeightLight",m:1},r.a.createElement(L,null,"Jewel Details")));case"/categories":return r.a.createElement(k.a,{component:"div"},r.a.createElement(C.a,{fontWeight:"fontWeightLight",m:1},r.a.createElement(L,null,"Categories")))}}())}));function F(){var e=Object(i.a)(["\n    background-color: #ffffff;\n    border: 1px solid #ddd;\n    bottom: 0;\n    float: left;\n    height: 10%;\n    margin: auto;\n    position: fixed;\n    width: 100%;\n"]);return F=function(){return e},e}var R=o.a.div(F()),A=function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"Screen 1"))},z=a(86),P=a(44),W=a(80),B=a(235),T=a(236),M=a(237),U=a(247),G=a(240),H=a(238),q=a(239),K=a(114),V=a.n(K),Y=a(115),$=a.n(Y),Q=a(246),X=a(202),Z=a(241),ee=a(252),te=a(245),ae=a(243),ne=a(244),re=Object(B.a)((function(e){return{root:{width:"96%",maxWidth:"98%",backgroundColor:"#f9f9f9",margin:"1%"},divider:{border:"1px solid ".concat(e.palette.divider),height:"30px"},cartItemName:{"& .MuiTypography-body1":{fontFamily:"Cabin !important"}},deleteCartItem:{width:"48%"},imageAvatar:{border:"1px solid #aaa",padding:"15%"},inline:{display:"inline"},margin:{borderColor:"#339966",padding:"1px 5px"},Avatar:{marginRight:"25px"}}}));function le(e){var t=e.favName,a=e.favImage,l=e.favId,c=e.favCategory,i=e.removeItemFromCart,o=re(),m=r.a.useState(!1),s=Object(P.a)(m,2),g=s[0],d=s[1],f=function(){d(!1)};return r.a.createElement(n.Fragment,null,r.a.createElement(T.a,{className:o.root},r.a.createElement(M.a,{alignItems:"flex-start"},r.a.createElement(H.a,{className:o.Avatar},r.a.createElement(u.b,{to:{pathname:"/itemDetails",search:"?img=".concat(a,"&modelNo=").concat(l,"&itemName=").concat(t,"&itemCategory=").concat(c)}},r.a.createElement(q.a,{className:o.imageAvatar,alt:"image",src:a}))),r.a.createElement(G.a,{className:o.cartItemName,primary:t,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{variant:"caption",display:"block",gutterBottom:!0},"Click SAVE to get confirmation OTP. We will never spam you"))}))),r.a.createElement(Z.a,{container:!0,alignItems:"center",className:o.root},r.a.createElement(ee.a,{open:g,onClose:f,"aria-labelledby":"draggable-dialog-title"},r.a.createElement(ae.a,null,r.a.createElement(ne.a,null,"Sure you want to remove this item from cart?")),r.a.createElement(te.a,null,r.a.createElement(X.a,{autoFocus:!0,onClick:f,color:"primary"},"Cancel"),r.a.createElement(X.a,{onClick:function(){return function(e){f(),i(e)}(l)},color:"primary"},"Remove"))),r.a.createElement("div",{className:o.deleteCartItem,onClick:function(){d(!0)}},r.a.createElement(Q.a,{"aria-label":"delete"},r.a.createElement(V.a,null)),r.a.createElement(X.a,{style:{fontFamily:"Lato",textTransform:"capitalize"}},"Remove")),r.a.createElement(U.a,{className:o.divider,orientation:"vertical"}),r.a.createElement("div",{className:o.deleteCartItem},r.a.createElement(Q.a,{"aria-label":"add to shopping cart"},r.a.createElement($.a,null)),r.a.createElement(X.a,{style:{fontFamily:"Lato",textTransform:"capitalize"}},"Proceed"))),r.a.createElement(U.a,null))}var ce=a(248);var ie=function(){var e=Object(n.useState)(localStorage.getItem("favs")?JSON.parse(localStorage.getItem("favs")).ids:[]),t=Object(P.a)(e,2),a=t[0],l=t[1],c=function(e){var t=localStorage.getItem("favs"),a=JSON.parse(t).ids.filter((function(t){return t!==e}));localStorage.setItem("favs",JSON.stringify({ids:a})),l(JSON.parse(localStorage.getItem("favs")).ids)},i=[].concat(Object(z.a)(W.a),Object(z.a)(W.b));return r.a.createElement(n.Fragment,null,a.length>0?Array.from(new Set(a)).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement(le,{favName:i.filter((function(t){return t.modelNo===e}))[0].title,favImage:i.filter((function(t){return t.modelNo===e}))[0].img,favId:i.filter((function(t){return t.modelNo===e}))[0].modelNo,favCategory:i.filter((function(t){return t.modelNo===e}))[0].category,removeItemFromCart:c}))})):r.a.createElement("div",null,r.a.createElement("img",{width:"300px",height:"300px",src:"DLJ/icon_emptybox.jpg",alt:"empty_cart"}),r.a.createElement(ce.a,{fixed:!0},r.a.createElement(k.a,{component:"div"},r.a.createElement("h5",null,"Your box looks empty. Please try adding new items and check back again")))))},oe=a(242),me=function(e){var t=e.src;return r.a.createElement("img",{src:t,style:{width:"60px",margin:"10% auto"},alt:"grid_image"})},se=Object(B.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:60,width:60,borderRadius:"50%"},gridItem1:{margin:"2% 4%"},gridItem2:{margin:"2% 0%"},itemname:{textAlign:"right",color:"#555"},itemname2:{textAlign:"center",color:"#555"},paper2:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:60,width:60,borderRadius:"50%",margin:"auto"},gridRoot2:{margin:"auto 10%"}}})),ue=Object(I.g)((function(){var e=se(),t="DLJ/icon_anklets1.png",a="DLJ/icon_bangles2.png",n="DLJ/icon_necklace2.png",l="DLJ/icon_earrings2.png",c="DLJ/icon_rings1.png";return r.a.createElement("div",{className:e.root},r.a.createElement(Z.a,{container:!0,spacing:2},r.a.createElement(Z.a,{container:!0,item:!0,xs:12,spacing:2,className:e.gridRoot1},r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{item:!0,xs:3,className:e.gridItem1},r.a.createElement(oe.a,{className:e.paper},r.a.createElement(me,{src:t})),r.a.createElement("h5",{className:e.itemname},"Anklets")),r.a.createElement(Z.a,{item:!0,xs:3,className:e.gridItem1},r.a.createElement(oe.a,{className:e.paper},r.a.createElement(me,{src:a})),r.a.createElement("h5",{className:e.itemname},"Bangles")),r.a.createElement(Z.a,{item:!0,xs:3,className:e.gridItem1},r.a.createElement(oe.a,{className:e.paper},r.a.createElement(me,{src:n})),r.a.createElement("h5",{className:e.itemname},"Necklaces")))}),null)),r.a.createElement(Z.a,{container:!0,item:!0,xs:12,spacing:2,className:e.gridRoot2},r.a.createElement((function(){var t=Object(I.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{item:!0,xs:6,className:e.gridItem2},r.a.createElement(u.b,{to:{pathname:"/categories",search:"?name=earrings"},onClick:function(){return t.push("/categories?name=earrings")}},r.a.createElement(oe.a,{className:e.paper2},r.a.createElement(me,{src:l}))),r.a.createElement("h5",{className:e.itemname2},"Ear rings")),r.a.createElement(Z.a,{item:!0,xs:6,className:e.gridItem2},r.a.createElement(u.b,{to:{pathname:"/categories",search:"?name=rings"},onClick:function(){return t.push("/categories?name=rings")}},r.a.createElement(oe.a,{className:e.paper2},r.a.createElement(me,{src:c}))),r.a.createElement("h5",{className:e.itemname2},"Rings")))}),null))))})),ge=Object(B.a)((function(e){return{root:{padding:e.spacing(3,2)}}}));function de(){var e=ge();return r.a.createElement("div",null,r.a.createElement(oe.a,{className:e.root},r.a.createElement(ue,null)))}function fe(){var e=Object(i.a)(["\n    margin: auto 2%;\n    margin-bottom: 20%;\n    .homeScreenPapers {\n        margin-top: auto;\n    }\n    .MuiPaper-root {\n    }\n"]);return fe=function(){return e},e}var Ee=o.a.div(fe()),pe=Object(B.a)((function(e){return{button:{margin:"0px",backgroundImage:"linear-gradient(141deg, #333 0%, #666 51%, #aaa 75%)",borderRadius:"0px",width:"100%",textTransform:"capitalize"},input:{display:"none"}}}));function ve(){var e=pe();return r.a.createElement(X.a,{variant:"contained",color:"primary",className:e.button},"CHECK IT OUT")}var he=Object(B.a)((function(e){return{root:{padding:e.spacing(1,2,2,2)},paragraph:{textAlign:"left",borderBottom:"1px dotted #ddd"}}}));function ye(){var e=he();return r.a.createElement("div",null,r.a.createElement(oe.a,{className:e.root},r.a.createElement("p",{className:e.paragraph},"Jewellery set"),r.a.createElement(me,{src:"DLJ/icon_jewelleryset1.jpeg",alt:"jewellery_set"}),r.a.createElement(me,{src:"DLJ/icon_jewelleryset7.jpg",alt:"jewellery_set"}),r.a.createElement(me,{src:"DLJ/icon_jewelleryset4.png",alt:"jewellery_set"}),r.a.createElement(me,{src:"DLJ/icon_jewelleryset5.jpeg",alt:"jewellery_set"}),r.a.createElement(me,{src:"DLJ/icon_jewelleryset6.jpg",alt:"jewellery_set"}),r.a.createElement(ve,null)))}var be=function(e){var t=e.src;return r.a.createElement("img",{src:t,style:{width:"60px",margin:"10% auto 10% 0%",float:"left"},alt:"card_image"})},Ne=function(){return r.a.createElement("p",{style:{width:"70%",margin:"2% auto 10% 10%",float:"left",textAlign:"justify",fontFamily:"calibri"}},"Get the latest wedding collections at every range with no compromise in quality")},we=Object(B.a)((function(e){return{root:{padding:e.spacing(1,2,2,2),height:"auto"},paragraph:{textAlign:"left",borderBottom:"1px dotted #ddd"}}}));function xe(){var e=we();return r.a.createElement("div",null,r.a.createElement(oe.a,{className:e.root},r.a.createElement("p",{className:e.paragraph},"Wedding collections"),r.a.createElement(be,{src:"DLJ/icon_wedding2.png"}),r.a.createElement(Ne,null),r.a.createElement(ve,null)))}var je=Object(B.a)((function(e){return{root:{padding:e.spacing(1,2,2,2)},paragraph:{textAlign:"left",borderBottom:"1px dotted #ddd"}}}));function Je(){var e=je();return r.a.createElement("div",null,r.a.createElement(oe.a,{className:e.root},r.a.createElement("p",{className:e.paragraph},"Silver coins & Bars"),r.a.createElement(me,{src:"DLJ/icon_silverbar3.png"}),r.a.createElement(me,{src:"DLJ/icon_silvercoinbox.png"}),r.a.createElement(me,{src:"DLJ/icon_silverbar.png"}),r.a.createElement(me,{src:"DLJ/icon_silvercoin.png"}),r.a.createElement(ve,null)))}var Oe=a(116),Se=a.n(Oe),Le=Object(B.a)((function(e){return{button:{marginTop:"80px",backgroundColor:"#fff",color:"#333",borderRadius:"2%",bottom:"20",width:"80%"}}}));function _e(){var e=Le();return r.a.createElement(n.Fragment,null,r.a.createElement(X.a,{variant:"contained",className:e.button},"See all our fashion collection",r.a.createElement(Se.a,null)))}var Ie=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(Ee,null,r.a.createElement("div",null,r.a.createElement("div",{className:"homeScreenPapers"},r.a.createElement(de,null)),r.a.createElement("div",{className:"homeScreenPapers"},r.a.createElement(ye,null)),r.a.createElement("div",{className:"homeScreenPapers"},r.a.createElement(xe,null)),r.a.createElement("div",{className:"homeScreenPapers"},r.a.createElement(Je,null)),r.a.createElement("div",{className:"homeScreenPapers"},r.a.createElement(_e,null)))))},ke=function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"Screen 4"))},Ce=function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"Screen 5"))},De=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"loader.gif",alt:"loading..."}))},Fe=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,259))})),Re=function(){return r.a.createElement("div",null,r.a.createElement("h5",null,window.location.search.split("?name=")[1].charAt(0).toUpperCase()+window.location.search.split("?name=")[1].slice(1)),r.a.createElement(n.Suspense,{fallback:r.a.createElement(De,null)},r.a.createElement(Fe,{gallerySelection:window.location.search.split("?name=")[1]})))},Ae=a(117),ze=a.n(Ae),Pe=a(118),We=a.n(Pe),Be=a(93),Te=a(249),Me=a(250),Ue=(a(153),a(253)),Ge=a(254);function He(e){e.itemName;var t=e.imgModelNo,a=e.itemCategory,l=Object(n.useState)("heart"),c=Object(P.a)(l,2),i=c[0],o=c[1],m=Object(I.f)();return r.a.createElement(Z.a,{item:!0},r.a.createElement(Te.a,{size:"large","aria-label":"large outlined secondary button group"},r.a.createElement(Me.a,{variant:"extended",style:{backgroundColor:"#ffffff"}},r.a.createElement(u.b,{to:{pathname:"/categories",search:"?name="+a},onClick:function(){return m.push("/categories?name="+a)}},r.a.createElement(We.a,null))),r.a.createElement(Me.a,{variant:"extended",style:{backgroundColor:"#ffffff"}},r.a.createElement("div",{className:i,onClick:function(){return function(e){o("heart is-active"),Object(Be.a)(e)}(t)}})),r.a.createElement(Me.a,{variant:"extended",style:{backgroundColor:"#ffffff"}},r.a.createElement(Ue.a,{url:":: "+window.location.href,title:"Hey there! Check it out"},r.a.createElement(Ge.a,{size:32,round:!0})))))}var qe=Object(B.a)((function(e){return{ImageBox:{display:"none"}}})),Ke=function(){var e=qe(),t=function(e){return new URLSearchParams(window.location.search).get(e)},a=t("img"),l=t("modelNo"),c=t("itemName"),i=t("itemCategory");return r.a.createElement(n.Fragment,null,r.a.createElement("h4",{style:{fontFamily:"Lato"}},c),r.a.createElement(ze.a,{key:l,image:a,className:e.ImageBox}),r.a.createElement(He,{itemName:c,imgModelNo:l,itemCategory:i}))};function Ve(){var e=Object(i.a)(["\n    height: 90%;\n    margin-top: 20%;\n"]);return Ve=function(){return e},e}var Ye=o.a.div(Ve()),$e=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(Ye,null,r.a.createElement(I.c,null,r.a.createElement(I.a,{path:"/screen1"},r.a.createElement(A,null)),r.a.createElement(I.a,{path:"/favorites"},r.a.createElement(ie,null)),r.a.createElement(I.a,{path:"/home"},r.a.createElement(Ie,null)),r.a.createElement(I.a,{path:"/screen4"},r.a.createElement(ke,null)),r.a.createElement(I.a,{path:"/screen5"},r.a.createElement(Ce,null)),r.a.createElement(I.a,{path:"/categories/",component:Re}),r.a.createElement(I.a,{path:"/itemDetails"},r.a.createElement(Ke,null)))))},Qe=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(Ye,null,r.a.createElement(u.a,{style:{height:"100%"}},r.a.createElement(D,null),r.a.createElement($e,null),r.a.createElement(R,null,r.a.createElement(x,null)))))};var Xe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Qe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n=[{img:"DLJ/icon_earrings3.png",title:"Earrings 1",modelNo:"1",category:"earrings"},{img:"https://res.cloudinary.com/betapro/image/upload/v1573989288/CatalogImages/icon_earrings2_ro12f0.png",title:"Earrings 2",modelNo:"2",category:"earrings"},{img:"DLJ/icon_earrings11.png",title:"Earrings 3",modelNo:"3",category:"earrings"},{img:"DLJ/icon_earrings7.png",title:"Earrings 4",modelNo:"4",category:"earrings"},{img:"DLJ/icon_earrings8.png",title:"Earrings 5",modelNo:"5",category:"earrings"},{img:"DLJ/icon_earrings12.png",title:"Necklace",modelNo:"6",category:"earrings"}],r=[{img:"DLJ/icon_jewelleryset1.jpeg",title:"Rings 1",modelNo:"71",category:"rings"},{img:"DLJ/icon_jewelleryset2.png",title:"Rings 2",modelNo:"8",category:"rings"},{img:"DLJ/icon_jewelleryset3.jpg",title:"Rings 3",modelNo:"9",category:"rings"},{img:"DLJ/icon_jewelleryset4.png",title:"Rings 4",modelNo:"10",category:"rings"},{img:"DLJ/icon_jewelleryset5.jpeg",title:"Rings 5",modelNo:"11",category:"rings"},{img:"DLJ/icon_jewelleryset6.jpg",title:"Rings 6",modelNo:"12",category:"rings"}]},93:function(e,t,a){"use strict";t.a=function(e){if(localStorage.getItem("favs")){var t=JSON.parse(localStorage.getItem("favs")).ids;t.push(e),t?localStorage.setItem("favs",JSON.stringify({ids:t})):localStorage.setItem("favs",JSON.stringify({ids:[e]}))}else localStorage.setItem("favs",JSON.stringify({ids:[e]}))}}},[[135,1,2]]]);
//# sourceMappingURL=main.f8fec7f5.chunk.js.map