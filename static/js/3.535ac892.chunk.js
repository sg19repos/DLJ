(this.webpackJsonpcatalog=this.webpackJsonpcatalog||[]).push([[3],{230:function(e,t,a){"use strict";var i=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(0)),o=(0,i(a(27)).default)(l.default.createElement("path",{d:"M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorderRounded");t.default=o},285:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),o=a(261),n=a(1),r=a(2),c=(a(43),a(6),a(3)),s=a(4),m=l.a.forwardRef((function(e,t){var a=e.cellHeight,i=void 0===a?180:a,o=e.children,s=e.classes,m=e.className,d=e.cols,p=void 0===d?2:d,u=e.component,f=void 0===u?"ul":u,g=e.spacing,h=void 0===g?4:g,b=e.style,v=Object(r.a)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return l.a.createElement(f,Object(n.a)({className:Object(c.a)(s.root,m),ref:t,style:Object(n.a)({margin:-h/2},b)},v),l.a.Children.map(o,(function(e){if(!l.a.isValidElement(e))return null;var t=e.props.cols||1,a=e.props.rows||1;return l.a.cloneElement(e,{style:Object(n.a)({width:"".concat(100/p*t,"%"),height:"auto"===i?"auto":i*a+h,padding:h/2},e.props.style)})})))})),d=Object(s.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(m),p=a(23);var u=a(101),f=function(e,t){var a,i,l,o;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((a=e.classList).remove.apply(a,Object(p.a)(t.imgFullWidth.split(" "))),(i=e.classList).add.apply(i,Object(p.a)(t.imgFullHeight.split(" ")))):((l=e.classList).remove.apply(l,Object(p.a)(t.imgFullHeight.split(" "))),(o=e.classList).add.apply(o,Object(p.a)(t.imgFullWidth.split(" ")))))};var g=l.a.forwardRef((function(e,t){var a=e.children,i=e.classes,o=e.className,s=(e.cols,e.component),m=void 0===s?"li":s,d=(e.rows,Object(r.a)(e,["children","classes","className","cols","component","rows"])),p=l.a.useRef(null);return l.a.useEffect((function(){!function(e,t){e&&(e.complete?f(e,t):e.addEventListener("load",(function(){f(e,t)})))}(p.current,i)})),l.a.useEffect((function(){var e=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function i(){for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];var n=this;clearTimeout(t),t=setTimeout((function(){e.apply(n,l)}),a)}return i.clear=function(){clearTimeout(t)},i}((function(){f(p.current,i)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[i]),l.a.createElement(m,Object(n.a)({className:Object(c.a)(i.root,o),ref:t},d),l.a.createElement("div",{className:i.tile},l.a.Children.map(a,(function(e){return l.a.isValidElement(e)?"img"===e.type||Object(u.a)(e,["Image"])?l.a.cloneElement(e,{ref:p}):e:null}))))})),h=Object(s.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(g),b=a(82),v=a(230),y=a.n(v),w=a(16),E=a(10),x=a(102),j=Object(w.a)(),O=Object(o.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"90%",height:"auto",marginBottom:"15% !important"},icon:{color:"rgba(255, 255, 255, 0.54)"},favIcon:{position:"absolute",top:"2%",right:"2%",color:"#999"},catImage:{width:"65%",left:"35% !important"}}}));function N(e){var t=e.gallerySelection,a=O(),i=[];return i="rings"===t?b.b:b.a,l.a.createElement("div",{className:a.root},l.a.createElement(d,{cellHeight:180,className:a.gridList},i.map((function(e){return l.a.createElement(E.b,{key:e.img,to:{pathname:"/itemDetails",search:"?img=".concat(e.img,"&modelNo=").concat(e.modelNo,"&itemName=").concat(e.title,"&itemCategory=").concat(e.category)},style:{padding:"0px",margin:"1%",width:"48%",color:"#f2f2f2"}},l.a.createElement(h,{key:e.img,id:e.modelNo,style:{height:"-webkit-fill-available",border:"1px solid #fc3",borderTop:"none",borderLeft:"none",padding:"10%",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"},onClick:function(){return j.push({pathname:"/itemDetails",search:"?img=".concat(e.img)})}},l.a.createElement("img",{className:a.catImage,src:e.img,alt:e.title,width:"30%",height:"70%"}),l.a.createElement(y.a,{onClick:function(){return Object(x.a)(e.modelNo)},className:a.favIcon}),l.a.createElement("h5",{style:{color:"#999",fontFamily:"calibri",margin:"1% auto",position:"absolute",top:"65%",left:"35%"}},e.title),l.a.createElement("h3",{style:{color:"#555",fontFamily:"calibri",margin:"2% auto",position:"absolute",top:"80%",left:"35%"}},"\u20b9400")))}))))}t.default=function(e){var t=e.gallerySelection;return l.a.createElement("div",null,l.a.createElement(N,{gallerySelection:t}))}}}]);
//# sourceMappingURL=3.535ac892.chunk.js.map