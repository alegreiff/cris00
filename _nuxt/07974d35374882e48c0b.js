(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{362:function(e,t,r){"use strict";r(123);var l=r(128);t.a=Object(l.a)("flex")},363:function(e,t,r){"use strict";r(123);var l=r(128);t.a=Object(l.a)("layout")},372:function(e,t,r){"use strict";r.r(t);r(11),r(7),r(5),r(4),r(6);var l=r(2),o=r(102);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={data:function(){return{bubleseries:[{name:"Chile",data:[[1980,1,1600]]},{name:"Colombia",data:[[2011,14,9665],[1990,5,4600],[2002,8,9200],[2006,2,1600],[2019,4,7200]]},{name:"Ecuador",data:[[2005,5,4555],[2011,6,9200]]}],bubleoptions:{dataLabels:{enabled:!1},fill:{opacity:.8},title:{text:"Películas, países, visitas"},tooltip:{enabled:!0,marker:{show:!0},z:{title:"Visualizaciones"}},xaxis:{tickAmount:5,type:"category",categories:["ollo","alona"],title:{text:"Año de estreno de la película"}},yaxis:{max:75,title:{text:"Número de películas"}}},headersYears:[{text:"Año",align:"left",sortable:!0,value:"year",width:120},{text:"Ocurrencias",value:"peliculas",width:120},{text:"Visitas",value:"visitas"}],headersPaises:[{text:"País",align:"left",sortable:!0,value:"pais",width:120},{text:"Ocurrencias",value:"peliculas",width:120},{text:"Visitas",value:"visitas"},{text:"Corto",value:"corto",width:60},{text:"Largo",value:"largo",width:60},{text:"Documental",value:"documental",width:60},{text:"Ficcion",value:"ficcion",width:60}],headers:[{text:"Término",align:"left",sortable:!0,value:"termino",width:200},{text:"Ocurrencias",value:"contador",width:200},{text:"Visitas",value:"visitas"},{text:"PROMM",value:"promedio"}]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(source,!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({apexchart:function(){return function(){return Promise.resolve().then(r.t.bind(null,173,7))}}},Object(o.b)(["listaetiquetas","lospaises","losyears","bubbledata","bubblepaises"]))},d=r(53),v=r(75),h=r.n(v),f=r(371),x=r(362),m=r(363),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-flex",[r("client-only",[r(e.apexchart,{tag:"component",attrs:{width:"100%",type:"bubble",options:e.bubleoptions,series:e.bubbledata}})],1),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.listaetiquetas,"items-per-page":10}}),e._v(" "),r("hr"),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headersPaises,items:e.lospaises,"items-per-page":10}}),e._v(" "),r("hr"),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headersYears,items:e.losyears,"items-per-page":10}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VDataTable:f.a,VFlex:x.a,VLayout:m.a})}}]);