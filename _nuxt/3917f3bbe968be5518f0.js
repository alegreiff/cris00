(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{358:function(t,e,n){var content=n(406);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("fc94ac48",content,!0,{sourceMap:!1})},405:function(t,e,n){"use strict";var r=n(358);n.n(r).a},406:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,".botonfiltro{margin:.7em}",""])},419:function(t,e,n){"use strict";n.r(e);n(10),n(5),n(7),n(33),n(34),n(58),n(8),n(6);var r=n(2),o=n(60);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={head:function(){return{title:"Variedad de contenidos"}},data:function(){return{base:null,busca:[],resultado:null,peliss:null,tx:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({apexchart:function(){return function(){return Promise.resolve().then(n.t.bind(null,193,7))}}},Object(o.c)(["peliculas"]),{},Object(o.b)(["listaetiquetas","lospaises","losyears","bubbledata","bubblepaises"])),watch:{base:function(t){}},methods:{selecciona:function(t,e){this.base.splice(e,1),this.busca.push(t),this.base=this.lodash.orderBy(this.base,["contador"],["desc"]),this.busca.length>0?this.buscatemas():(this.peliss=null,this.resultado=null)},desselecciona:function(t,e){this.busca.splice(e,1),this.base.push(t),this.base=this.lodash.orderBy(this.base,["contador"],["desc"]),this.busca.length>0?this.buscatemas():(this.peliss=null,this.resultado=null)},buscatemas:function(){var t=0,e=[],n=!0,r=!1,o=void 0;try{for(var c,l=this.peliculas[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var h=c.value,d=this.lodash.map(this.busca,"termino");this.tx=h.temas,d.every(this.contiene)&&(e.push(h.titulo),t++)}}catch(t){r=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}this.peliss=e,this.resultado=t},contiene:function(t){return this.tx.includes(t)}},mounted:function(){this.listaetiquetas&&(this.base=this.lodash.cloneDeep(this.listaetiquetas))}},h=(n(405),n(35)),d=n(41),f=n.n(d),v=n(149),m=n(139),y=n(57),_=n(332),O=n(337),w=n(333),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"grey lighten-5"},[n("Encabezado"),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",color:"primary"}},[n("v-card",{attrs:{color:"#e1b940"}},[n("v-card-title",{staticClass:"title"},[t._v("Contenidos")]),t._v(" "),n("v-card-text",{staticClass:"white text--primary"},[n("p",[t._v("Esta sección es el resultado de un experimento para ver cómo se comportan las combinaciones y la interacción entre las  etiquetas creadas. ")])])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},t._l(t.base,(function(e,r){return n("v-btn",{key:r,staticClass:"botonfiltro",attrs:{small:""},on:{click:function(n){return t.selecciona(e,r)}}},[t._v(t._s(e.termino)+" ("+t._s(e.contador)+")  ")])})),1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[t._v("\n        "+t._s(t.peliss)+"\n        "),n("hr"),t._v("\n        "+t._s(t.resultado)+"\n        "),n("h4",[t._v("\n          Etiquetas buscadas\n        ")]),t._v(" "),t._l(t.busca,(function(e,r){return n("v-btn",{key:r,staticClass:"botonfiltro",attrs:{small:"",color:"red"},on:{click:function(n){return t.desselecciona(e,r)}}},[t._v(t._s(e.termino)+" ("+t._s(e.contador)+")  ")])}))],2)],1),t._v(" "),n("Cierre")],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:v.a,VCard:m.a,VCardText:y.b,VCardTitle:y.c,VCol:_.a,VContainer:O.a,VRow:w.a})}}]);