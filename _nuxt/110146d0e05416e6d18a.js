(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{350:function(t,e,o){var content=o(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("71f917a0",content,!0,{sourceMap:!1})},386:function(t,e,o){"use strict";var n=o(350);o.n(n).a},387:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,".misstemas{font-weight:bolder}.misspeli{padding:1em}",""])},403:function(t,e,o){"use strict";o.r(e);o(10),o(5),o(7);var n=o(58),r=(o(57),o(8),o(6),o(2)),l=o(59);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={data:function(){return{numeropeliculas:null,expanded:[],singleExpand:!1,headers:[{text:"Título",align:"left",sortable:!0,value:"titulo",width:300},{text:"País",value:"pais",width:120},{text:"Visitas",value:"visitas"},{text:"",value:"data-table-expand"}],pais:null,paises:null,megacategorias:null,megaseleccionado:null,peliculasmuestra:null,temaseleccionado:null,kolor:null,indiceMega:-1,datodetalle:null,series:[],series2:[{name:"Películas",data:[1,2,3]}],opciones:{legend:{show:!1},plotOptions:{pie:{donut:{labels:{show:!0}}}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"top"}}}]},opciones2:{plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!0},tooltip:{enabled:!0,y:{formatter:function(t){return t+"%"}}},xaxis:{categories:[]}}}},computed:d({apexchart:function(){return function(){return Promise.resolve().then(o.t.bind(null,192,7))}}},Object(l.c)(["peliculas"]),{},Object(l.b)(["listaetiquetas","datosbasicos","loscolores"]),{listatemas:function(){return this.indiceMega>=0?(this.datodetalle=this.megacategorias[this.indiceMega].datos,this.megacategorias[this.indiceMega].temas):(this.datodetalle=null,null)}}),watch:{pais:function(t){this.indiceMega=-8,this.megacategorias=this.$store.getters.megacategorias(t),this.numeropeliculas=this.$store.getters.cuantaspeliculas(t);var e=[],o=[],n=!0,r=!1,l=void 0;try{for(var c,v=this.megacategorias[Symbol.iterator]();!(n=(c=v.next()).done);n=!0){var m=c.value;e.push(m.contador),o.push(m.nombre)}}catch(t){r=!0,l=t}finally{try{n||null==v.return||v.return()}finally{if(r)throw l}}this.series=e,this.opciones=d({colors:this.kolor},this.opciones,{labels:o})},datodetalle:function(t){if(null!==t){var e=[],o=[],n=!0,r=!1,l=void 0;try{for(var c,v=t[Symbol.iterator]();!(n=(c=v.next()).done);n=!0){var m=c.value;e.push(m.veces),o.push(m.termino)}}catch(t){r=!0,l=t}finally{try{n||null==v.return||v.return()}finally{if(r)throw l}}this.series2[0].data=e,this.opciones2=d({colors:this.kolor},this.opciones2,{},{xaxis:{categories:o}})}}},methods:{clicked:function(t){this.expanded.push(t)},clicMegaCategorias:function(a,b,t){this.temaseleccionado=null,this.indiceMega=t.dataPointIndex,this.megaseleccionado=this.opciones.labels[t.dataPointIndex]},clicTemas:function(a,b,t){this.temaseleccionado=this.opciones2.xaxis.categories[t.dataPointIndex],this.peliculasmuestra=this.resultadox(this.temaseleccionado)},resultadox:function(t){var e=this.pais;return this.$store.getters.filtropelis(t,e)}},created:function(){this.kolor=this.lodash.cloneDeep(this.loscolores),this.pais="Todos los países",this.megacategorias=this.$store.getters.megacategorias(this.pais),this.numeropeliculas=this.$store.getters.cuantaspeliculas(this.pais);var t=this.lodash.cloneDeep(this.datosbasicos.paises);this.paises=["Todos los países","Miembros Retina Latina"].concat(Object(n.a)(t))},mounted:function(){var t=[],e=[],o=!0,n=!1,r=void 0;try{for(var l,c=this.megacategorias[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var v=l.value;t.push(v.contador),e.push(v.nombre)}}catch(t){n=!0,r=t}finally{try{o||null==c.return||c.return()}finally{if(n)throw r}}this.series=t,this.opciones=d({colors:this.kolor},this.opciones,{labels:e})}},m=(o(386),o(35)),h=o(41),_=o.n(h),f=o(147),x=o(138),y=o(114),w=o(329),C=o(334),O=o(401),k=o(315),V=o(134),P=o(85),j=o(50),T=o(137),L=o(358),M=o(330),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"grey lighten-5"},[o("Encabezado",{attrs:{paisactivo:t.pais}}),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"8",color:"primary"}},[o("v-card",{attrs:{dark:""}},[o("v-card-title",{staticClass:"title"},[t._v("Contenidos")]),t._v(" "),o("v-card-text",{staticClass:"white text--primary"},[o("p",[t._v("Las etiquetas que se muestran en la sección contenidos son una propuesta de esta investigación, realizadas a partir de la revisión de las 374 películas  de Retina Latina publicadas entre el 3 de marzo de 2016 y el 31 de agosto de 2019.")]),t._v(" "),o("v-btn",{staticClass:"mx-0",attrs:{outlined:""}},[t._v("\n            Button\n          ")])],1)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-menu",{attrs:{"offset-x":"",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{color:"primary",dark:""}},n),[t._v("\n          "+t._s(t.pais?t.pais:"Todos los países")+"\n        ")])]}}])},[t._v(" "),o("v-list",t._l(t.paises,(function(e,n){return o("v-list-item",{key:n,on:{click:function(o){t.pais=e}}},[o("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("v-card",[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline"},[t._v("Categorías \n                "+t._s(t.pais?t.pais:"Todos los países")+"\n                "+t._s(t.megacategorias.length))]),t._v(" "),o("v-list-item-subtitle",[t._v("subtexto")])],1)],1),t._v(" "),o("v-card-text",[o("v-list",{attrs:{dense:""}},[o("v-list-item-group",{attrs:{color:"primary"}},t._l(t.megacategorias,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",[o("v-list-item-title",[t._v(" "+t._s(e.nombre)+" ["+t._s(e.contador)+"] ")])],1)],1)})),1)],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{text:""}},[t._v("Lista de películas con tema: ")])],1)],1)],1),t._v(" "),o("v-col",{staticClass:"pa-2",attrs:{cols:"6"}},[o("v-card",[o("v-list-item",{attrs:{"two-line":""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline"},[t._v("\n                Categorías \n                "+t._s(t.pais?t.pais:"Todos los países")+"\n                "+t._s(t.megacategorias.length)+"\n              ")]),t._v(" "),o("v-list-item-subtitle",[t._v("subtexto")])],1)],1),t._v(" "),o("v-card-text",[o("no-ssr",[o(t.apexchart,{tag:"component",attrs:{width:"100%",type:"donut",options:t.opciones,series:t.series},on:{dataPointSelection:t.clicMegaCategorias}})],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions")],1)],1)],1),t._v(" "),t.listatemas&&t.datodetalle&&t.series2?o("v-row",[o("v-col",{attrs:{cols:"5"}},[o("v-card",[o("v-list-item",{attrs:{"two-line":""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline"},[t._v(" "+t._s(t.megaseleccionado)+" ")]),t._v(" "),o("v-list-item-subtitle",[t._v("subtexto")])],1)],1),t._v(" "),o("v-card-text",[o("no-ssr",[o(t.apexchart,{tag:"component",attrs:{width:"100%",height:"700",type:"bar",options:t.opciones2,series:t.series2},on:{dataPointSelection:t.clicTemas}})],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{text:""}},[t._v("Temas agrupados en categorías")])],1)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"7"}},[t.temaseleccionado?o("v-card",[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline"},[t._v("Tema: "+t._s(t.temaseleccionado))]),t._v(" "),o("v-list-item-subtitle",[t._v("subtexto")])],1)],1),t._v(" "),o("v-card-text",[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.peliculasmuestra,"items-per-page":10,"single-expand":!0,expanded:t.expanded,"item-key":"titulo","show-expand":""},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.clicked},scopedSlots:t._u([{key:"expanded-item",fn:function(e){var n=e.headers,r=e.item;return[o("td",{staticClass:"misstemas",attrs:{colspan:n.length}},[o("div",{staticClass:"misspeli"},[o("div",[t._v("Temas: "+t._s(r.temas.join(" | "))+" ")]),t._v(" "),o("div",[t._v("Género: "+t._s(r.genero)+" ")]),t._v(" "),o("div",[t._v("Formato: "+t._s(r.formato)+" ")]),t._v(" "),o("div",[t._v("Duración: "+t._s(r.duracion)+" min.")]),t._v(" "),o("div",[t._v("Años de estreno: "+t._s(r.year)+" ")])])])]}}],null,!1,3874792642)})],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{text:""}},[t._v("Lista de películas con tema: "+t._s(t.temaseleccionado)+" en "),o("strong",[t._v("  "+t._s(t.pais))])])],1)],1):t._e()],1),t._v(" "),o("v-col",{attrs:{cols:"6"}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:f.a,VCard:x.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:w.a,VContainer:C.a,VDataTable:O.a,VDivider:k.a,VList:V.a,VListItem:P.a,VListItemContent:j.a,VListItemGroup:T.a,VListItemSubtitle:j.b,VListItemTitle:j.c,VMenu:L.a,VRow:M.a})}}]);