(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{409:function(t,e,r){"use strict";r.r(e);r(10),r(5),r(7);var o=r(59),n=(r(57),r(8),r(6),r(33),r(34),r(2)),l=r(58);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{megacategorias:null,mega:null,orderpeli:!0,pais:null,paises:null,pelis:null,series:[{data:[]}],chartOptions:{plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!0},xaxis:{categories:[]}}}},computed:v({apexchart:function(){return function(){return Promise.resolve().then(r.t.bind(null,192,7))}}},Object(l.c)(["peliculas"]),{},Object(l.b)(["listaetiquetas","datosbasicos","loscolores","datosglobales"]),{moviefilter:function(){var t=this.pelis;t=this.pais&&"Miembros Retina Latina"!==this.pais&&"Todos los países"!==this.pais?this.lodash.filter(t,{pais:this.pais}):"Miembros Retina Latina"===this.pais?this.lodash.filter(t,{retina:!0}):t,this.orderpeli||(t=this.lodash.orderBy(t,["visitas"],["desc"]));var e=this.mega;return"Todas las megacategorías"!==e&&null!==e&&(console.log(e.nombre),t=this.lodash.filter(t,(function(t){return t.megas.includes(e.nombre)}))),t=this.lodash.slice(t,0,20)},datosgrafico:function(){var t=[],e=[],r=[];if(this.moviefilter){var o=!0,n=!1,l=void 0;try{for(var c,v=this.moviefilter[Symbol.iterator]();!(o=(c=v.next()).done);o=!0){var d=c.value;this.orderpeli?e.push(d.promedio):e.push(d.visitas),r.push(d.titulo)}}catch(t){n=!0,l=t}finally{try{o||null==v.return||v.return()}finally{if(n)throw l}}}return t[0]=e,t[1]=r,t}}),created:function(){var t=this.lodash.cloneDeep(this.datosbasicos.paises),e=this.lodash.cloneDeep(this.listaetiquetas);this.paises=["Todos los países","Miembros Retina Latina"].concat(Object(o.a)(t)),this.kolor=this.lodash.cloneDeep(this.loscolores);var r=this.lodash.cloneDeep(this.peliculas),n=!0,l=!1,c=void 0;try{for(var v,d=r[Symbol.iterator]();!(n=(v=d.next()).done);n=!0){var h=v.value;h.promedio=parseFloat((h.visitas/h.diasalaire).toFixed(2))}}catch(t){l=!0,c=t}finally{try{n||null==d.return||d.return()}finally{if(l)throw c}}r=this.lodash.orderBy(r,["promedio"],["desc"]);var m=!0,f=!1,y=void 0;try{for(var _,w=r[Symbol.iterator]();!(m=(_=w.next()).done);m=!0){var O=_.value;O.megas=[];var x=!0,V=!1,k=void 0;try{for(var j,C=O.temas[Symbol.iterator]();!(x=(j=C.next()).done);x=!0){var L=j.value;this.lodash.filter(e,{termino:L})[0]?O.megas.push(this.lodash.filter(e,{termino:L})[0].megacategoria):console.log("Error en "+L)}}catch(t){V=!0,k=t}finally{try{x||null==C.return||C.return()}finally{if(V)throw k}}O.megas=this.lodash.uniq(O.megas)}}catch(t){f=!0,y=t}finally{try{m||null==w.return||w.return()}finally{if(f)throw y}}this.pelis=r},mounted:function(){this.pais="Todos los países",this.megacategorias=this.$store.getters.megacategorias(this.pais)},watch:{pais:function(t){this.mega=null,this.megacategorias=this.$store.getters.megacategorias(t)},datosgrafico:function(t){this.series[0].data=t[0],this.chartOptions=v({},this.chartOptions,{},{xaxis:{categories:t[1]}})}}},h=r(35),m=r(41),f=r.n(m),y=r(147),_=r(138),w=r(114),O=r(329),x=r(334),V=r(315),k=r(134),j=r(85),C=r(50),L=r(358),P=r(330),S=r(417),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"grey lighten-5"},[r("Encabezado"),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{dark:""}},[r("v-card-title",{staticClass:"title"},[t._v("Usuarios")]),t._v(" "),r("v-card-text",{staticClass:"white text--primary"},[r("p",[t._v("Los usuarios, en esta investigación, son todos los visitantes registrados de Retina Latina que hayan reproducido una de las "+t._s(t.peliculas.length)+" películas de la muestra.")]),t._v(" "),r("v-btn",{staticClass:"mx-0",attrs:{outlined:""}},[t._v("\r\n            Button\r\n          ")])],1)],1)],1),t._v(" "),r("v-row",[r("v-col",[r("v-menu",{attrs:{"offset-x":"",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({attrs:{color:"primary",dark:""}},o),[t._v("\r\n          "+t._s(t.pais?t.pais:"Ver detalles por país")+"\r\n        ")])]}}])},[t._v(" "),r("v-list",t._l(t.paises,(function(e,o){return r("v-list-item",{key:o,on:{click:function(r){t.pais=e}}},[r("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),t._v(" "),r("v-col",[r("v-switch",{attrs:{label:t.orderpeli?"Promedio":"Visitas"},model:{value:t.orderpeli,callback:function(e){t.orderpeli=e},expression:"orderpeli"}})],1),t._v(" "),r("v-col",[t.megacategorias?r("v-menu",{attrs:{"offset-x":"",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({attrs:{color:"primary",dark:""}},o),[t._v("\r\n          "+t._s(t.mega?t.mega.nombre:"Todas las megacategorías")+"\r\n        ")])]}}],null,!1,670615157)},[t._v(" "),r("v-list",[r("v-list-item",{on:{click:function(e){t.mega=null}}},[r("v-list-item-title",[t._v("Todas las megacategorías")])],1),t._v(" "),t._l(t.megacategorias,(function(e,o){return r("v-list-item",{key:o,on:{click:function(r){t.mega=e}}},[r("v-list-item-title",[t._v(t._s(e.nombre))])],1)}))],2)],1):t._e()],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[t._v("Películas con mayor "),r("strong",[t._v(" "+t._s(t.orderpeli?"número":"promedio")+" ")]),t._v(" de  visitas")]),t._v(" "),r("v-list-item-subtitle",[t._v(" "+t._s(t.pais)+" ")])],1)],1),t._v(" "),r("v-card-text",[r("no-ssr",[r(t.apexchart,{tag:"component",attrs:{height:"500",type:"bar",options:t.chartOptions,series:t.series}})],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""}},[t._v("Temas agrupados en categorías")])],1)],1)],1)],1),t._v(" "),r("Cierre")],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:y.a,VCard:_.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCol:O.a,VContainer:x.a,VDivider:V.a,VList:k.a,VListItem:j.a,VListItemContent:C.a,VListItemSubtitle:C.b,VListItemTitle:C.c,VMenu:L.a,VRow:P.a,VSwitch:S.a})}}]);