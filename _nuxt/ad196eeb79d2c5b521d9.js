(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{373:function(t,e,o){"use strict";o.r(e);o(11),o(4),o(6);var r=o(77),n=(o(54),o(7),o(5),o(2)),l=o(102);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{pais:null,paises:null,megacategorias:null,megaseleccionado:null,peliculasmuestra:null,temaseleccionado:null,kolor:null,indiceMega:-1,datodetalle:null,series:[],series2:[{name:"Películas",data:[1,2,3]}],opciones:{legend:{show:!1},plotOptions:{pie:{donut:{labels:{show:!0}}}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"top"}}}]},opciones2:{plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:[]}}}},computed:v({apexchart:function(){return function(){return Promise.resolve().then(o.t.bind(null,173,7))}}},Object(l.c)(["peliculas"]),{},Object(l.b)(["listaetiquetas","datosbasicos","loscolores"]),{listatemas:function(){return this.indiceMega>=0?(console.log("INDICE MEGA es mayor o igual a CERO"),this.datodetalle=this.megacategorias[this.indiceMega].datos,this.megacategorias[this.indiceMega].temas):(this.datodetalle=null,null)}}),watch:{pais:function(t){this.indiceMega=-8,this.megacategorias=this.$store.getters.megacategorias(t);var e=[],o=[],r=!0,n=!1,l=void 0;try{for(var c,d=this.megacategorias[Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var m=c.value;e.push(m.contador),o.push(m.nombre)}}catch(t){n=!0,l=t}finally{try{r||null==d.return||d.return()}finally{if(n)throw l}}this.series=e,this.opciones=v({colors:this.kolor},this.opciones,{labels:o})},datodetalle:function(t){if(null!==t){var e=[],o=[],r=!0,n=!1,l=void 0;try{for(var c,d=t[Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var m=c.value;e.push(m.veces),o.push(m.termino)}}catch(t){n=!0,l=t}finally{try{r||null==d.return||d.return()}finally{if(n)throw l}}this.series2[0].data=e,this.opciones2=v({colors:this.kolor},this.opciones2,{},{xaxis:{categories:o}})}}},methods:{clicMegaCategorias:function(a,b,t){console.log(t),this.temaseleccionado=null,this.indiceMega=t.dataPointIndex,this.megaseleccionado=this.opciones.labels[t.dataPointIndex]},clicTemas:function(a,b,t){this.temaseleccionado=this.opciones2.xaxis.categories[t.dataPointIndex],this.peliculasmuestra=this.resultadox(this.temaseleccionado)},resultadox:function(t){var e=this.pais;return this.$store.getters.filtropelis(t,e)}},created:function(){this.kolor=this.lodash.cloneDeep(this.loscolores),this.megacategorias=this.$store.getters.megacategorias("Todos los países");var t=this.lodash.cloneDeep(this.datosbasicos.paises);this.paises=["Todos los países"].concat(Object(r.a)(t))},mounted:function(){var t=[],e=[],o=!0,r=!1,n=void 0;try{for(var l,c=this.megacategorias[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var d=l.value;t.push(d.contador),e.push(d.nombre)}}catch(t){r=!0,n=t}finally{try{o||null==c.return||c.return()}finally{if(r)throw n}}this.series=t,this.opciones=v({colors:this.kolor},this.opciones,{labels:e})}},m=o(53),h=o(75),_=o.n(h),f=o(133),y=o(318),x=o(307),w=o(325),O=o(300),C=o(319),P=o(114),k=o(73),V=o(45),j=o(116),T=o(329),M=o(326),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"grey lighten-5"},[o("v-row",[o("v-col",{attrs:{cols:"4",color:"primary"}},[t._v(t._s(t.indiceMega)+" ")]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[t._v(t._s(t.temaseleccionado)+" --- "+t._s(t.megacategorias.length)+"  ")]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-menu",{attrs:{"offset-x":"",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-btn",t._g({attrs:{color:"primary",dark:""}},r),[t._v("\n          "+t._s(t.pais?t.pais:"Todos los países")+"\n        ")])]}}])},[t._v(" "),o("v-list",t._l(t.paises,(function(e,r){return o("v-list-item",{key:r,on:{click:function(o){t.pais=e}}},[o("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("v-card",[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline"},[t._v("Categorías \n                "+t._s(t.pais?t.pais:"Todos los países")+"\n                "+t._s(t.megacategorias.length))]),t._v(" "),o("v-list-item-subtitle",[t._v("subtexto")])],1)],1),t._v(" "),o("v-card-text",[o("v-list",{attrs:{dense:""}},[o("v-list-item-group",{attrs:{color:"primary"}},t._l(t.megacategorias,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",[o("v-list-item-title",[t._v(" "+t._s(e.nombre)+" ["+t._s(e.contador)+"] ")])],1)],1)})),1)],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{text:""}},[t._v("Lista de películas con tema: ")])],1)],1)],1),t._v(" "),o("v-col",{staticClass:"pa-2",attrs:{cols:"6"}},[o("v-card",[o("v-list-item",{attrs:{"two-line":""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline"},[t._v("\n                Categorías \n                "+t._s(t.pais?t.pais:"Todos los países")+"\n                "+t._s(t.megacategorias.length)+"\n              ")]),t._v(" "),o("v-list-item-subtitle",[t._v("subtexto")])],1)],1),t._v(" "),o("v-card-text",[o("no-ssr",[o(t.apexchart,{tag:"component",attrs:{width:"100%",type:"donut",options:t.opciones,series:t.series},on:{dataPointSelection:t.clicMegaCategorias}})],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{text:""}},[t._v("Temas agrupados en categorías")])],1)],1)],1)],1),t._v(" "),o("v-row",[t.listatemas&&t.datodetalle&&t.series2?o("v-col",{attrs:{cols:"6"}},[o("v-card",[o("v-list-item",{attrs:{"two-line":""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline"},[t._v(" "+t._s(t.megaseleccionado)+" ")]),t._v(" "),o("v-list-item-subtitle",[t._v("subtexto")])],1)],1),t._v(" "),o("v-card-text",[o("no-ssr",[o(t.apexchart,{tag:"component",attrs:{width:"100%",height:"700",type:"bar",options:t.opciones2,series:t.series2},on:{dataPointSelection:t.clicTemas}})],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{text:""}},[t._v("Temas agrupados en categorías")])],1)],1)],1):t._e(),t._v(" "),o("v-col",{attrs:{cols:"6"}},[t.temaseleccionado?o("v-card",[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline"},[t._v("Tema: "+t._s(t.temaseleccionado))]),t._v(" "),o("v-list-item-subtitle",[t._v("subtexto")])],1)],1),t._v(" "),o("v-card-text",[o("v-list",{attrs:{dense:""}},[o("v-list-item-group",{attrs:{color:"primary"}},t._l(t.peliculasmuestra,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.titulo)}})],1)],1)})),1)],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{text:""}},[t._v("Lista de películas con tema: "+t._s(t.temaseleccionado)+" ")])],1)],1):t._e()],1),t._v(" "),o("v-col",{attrs:{cols:"6"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:f.a,VCard:y.a,VCardActions:x.a,VCardText:x.b,VCol:w.a,VContainer:O.a,VDivider:C.a,VList:P.a,VListItem:k.a,VListItemContent:V.a,VListItemGroup:j.a,VListItemSubtitle:V.b,VListItemTitle:V.c,VMenu:T.a,VRow:M.a})}}]);