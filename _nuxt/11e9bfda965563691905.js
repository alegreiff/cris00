(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{407:function(t,e,r){"use strict";r.r(e);r(10),r(5),r(7);var o=r(59),n=(r(58),r(8),r(6),r(2)),l=r(60);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={head:function(){return{title:"Licencias"}},data:function(){return{orderpeli:!0,genero:"Todos los géneros",formato:"Todas las duraciones",laslicencias:null,lice:"Todas las licencias",pais:null,paises:null,pelis:null,series:[{data:[]}],chartOptions:{plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!0},xaxis:{categories:[]}}}},computed:d({apexchart:function(){return function(){return Promise.resolve().then(r.t.bind(null,192,7))}}},Object(l.c)(["peliculas"]),{},Object(l.b)(["listaetiquetas","datosbasicos","loscolores","datosglobales","licencias"]),{moviefilter:function(){var t=this.pelis;t=this.pais&&"Miembros Retina Latina"!==this.pais&&"Todos los países"!==this.pais?this.lodash.filter(t,{pais:this.pais}):"Miembros Retina Latina"===this.pais?this.lodash.filter(t,{retina:!0}):t,this.orderpeli||(t=this.lodash.orderBy(t,["visitas"],["desc"]));var e=this.lice;"Todas las licencias"!==e&&(t=this.lodash.filter(t,{licencia:e}));var r=this.genero;"Todos los géneros"!==r&&(t=this.lodash.filter(t,{genero:r}));var o=this.formato;return"Todas las duraciones"!==o&&(t=this.lodash.filter(t,{formato:o})),t=this.lodash.slice(t,0,20)},datosgrafico:function(){var t=[],e=[],r=[];if(this.moviefilter){var o=!0,n=!1,l=void 0;try{for(var c,d=this.moviefilter[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){var v=c.value;this.orderpeli?e.push(v.promedio):e.push(v.visitas),r.push(v.titulo)}}catch(t){n=!0,l=t}finally{try{o||null==d.return||d.return()}finally{if(n)throw l}}}return t[0]=e,t[1]=r,t}}),created:function(){var t=this.lodash.cloneDeep(this.datosbasicos.paises);this.paises=["Todos los países","Miembros Retina Latina"].concat(Object(o.a)(t)),this.kolor=this.lodash.cloneDeep(this.loscolores);var e=this.lodash.cloneDeep(this.peliculas),r=!0,n=!1,l=void 0;try{for(var c,d=e[Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var v=c.value;v.promedio=parseFloat((v.visitas/v.diasalaire).toFixed(2))}}catch(t){n=!0,l=t}finally{try{r||null==d.return||d.return()}finally{if(n)throw l}}e=this.lodash.orderBy(e,["promedio"],["desc"]),this.pelis=e},mounted:function(){this.pais="Todos los países";var t=this.lodash.cloneDeep(this.licencias);t=this.lodash.map(t,(function(t,e){return{nombre:e,num:t}})),t=this.lodash.orderBy(t,["num"],["desc"]),this.laslicencias=t},watch:{moviefilter:function(t){var e=this.lodash.countBy(t,"licencia");e=this.lodash.map(e,(function(t,e){return{nombre:e,num:t}})),e=this.lodash.orderBy(e,["num"],["desc"]),this.laslicencias=e},pais:function(t){this.lice="Todas las licencias"},datosgrafico:function(t){this.series[0].data=t[0],this.chartOptions=d({},this.chartOptions,{},{xaxis:{categories:t[1]}})}}},h=r(35),f=r(41),m=r.n(f),_=r(147),y=r(138),O=r(57),w=r(329),x=r(334),V=r(315),T=r(134),k=r(86),j=r(50),C=r(357),L=r(330),P=r(411),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"grey lighten-5"},[r("Encabezado"),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{dark:""}},[r("v-card-title",{staticClass:"title"},[t._v("Usuarios")]),t._v(" "),r("v-card-text",{staticClass:"white text--primary"},[r("p",[t._v("Los usuarios, en esta investigación, son todos los visitantes registrados de Retina Latina que hayan reproducido una de las "+t._s(t.peliculas.length)+" películas de la muestra.")]),t._v(" "),r("v-btn",{staticClass:"mx-0",attrs:{outlined:""}},[t._v("\r\n            Button\r\n          ")])],1)],1)],1),t._v(" "),r("v-row",[r("v-col",[r("v-menu",{attrs:{"offset-x":"",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({attrs:{color:"primary",dark:""}},o),[t._v("\r\n          "+t._s(t.pais?t.pais:"Ver detalles por país")+"\r\n        ")])]}}])},[t._v(" "),r("v-list",t._l(t.paises,(function(e,o){return r("v-list-item",{key:o,on:{click:function(r){t.pais=e}}},[r("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),t._v(" "),r("v-col",[r("v-switch",{attrs:{label:t.orderpeli?"Promedio":"Visitas"},model:{value:t.orderpeli,callback:function(e){t.orderpeli=e},expression:"orderpeli"}})],1),t._v(" "),r("v-col",[r("v-menu",{attrs:{"offset-x":"",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({attrs:{color:"primary",dark:""}},o),[t._v("\r\n          "+t._s(t.lice?t.lice:"Todas las licencias")+"\r\n        ")])]}}])},[t._v(" "),r("v-list",[r("v-list-item",{on:{click:function(e){t.lice="Todas las licencias"}}},[r("v-list-item-title",[t._v("Todas las licencias")])],1),t._v(" "),t._l(t.laslicencias,(function(e,o){return r("v-list-item",{key:o,on:{click:function(r){t.lice=e.nombre}}},[r("v-list-item-title",[t._v(t._s(e.nombre))])],1)}))],2)],1)],1),t._v(" "),r("v-col")],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[t._v("Películas con mayor "),r("strong",[t._v(" "+t._s(t.orderpeli?"promedio":"número")+" ")]),t._v(" de  visitas")]),t._v(" "),r("v-list-item-subtitle",[t._v(" "+t._s(t.pais)+" ")])],1)],1),t._v(" "),r("v-card-text",[r("no-ssr",[r(t.apexchart,{tag:"component",attrs:{height:"500",type:"bar",options:t.chartOptions,series:t.series}})],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""}},[t._v("Temas agrupados en categorías")])],1)],1)],1)],1),t._v(" "),r("Cierre")],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:_.a,VCard:y.a,VCardActions:O.a,VCardText:O.b,VCardTitle:O.c,VCol:w.a,VContainer:x.a,VDivider:V.a,VList:T.a,VListItem:k.a,VListItemContent:j.a,VListItemSubtitle:j.b,VListItemTitle:j.c,VMenu:C.a,VRow:L.a,VSwitch:P.a})}}]);