(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{378:function(e,t,r){"use strict";r.r(t);r(10),r(8),r(6),r(5),r(7);var n=r(2),o=r(58);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={name:"Chart",components:{Apexcharts:function(){return Promise.resolve().then(r.t.bind(null,183,7))}},data:function(){return{seriesa:[76,67,61,90],chartOptionsa:{plotOptions:{radialBar:{offsetY:-10,startAngle:0,endAngle:270,hollow:{margin:5,size:"30%",background:"transparent",image:void 0},dataLabels:{name:{show:!1},value:{show:!1}}}},colors:["#1ab7ea","#0084ff","#39539E","#0077B5"],labels:["Pornhub","Messenger","Facebook","LinkedIn"],legend:{show:!0,floating:!0,fontSize:"16px",position:"left",offsetX:160,offsetY:10,labels:{useSeriesColors:!0},markers:{size:0},formatter:function(e,t){return e+":  "+t.w.globals.series[t.seriesIndex]},itemMargin:{horizontal:1}},responsive:[{breakpoint:480,options:{legend:{show:!1}}}]},chartOptions:{chart:{id:"basic-bar"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]}]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)(["datosbasicos","lospaises","losyears"]))},f=r(39),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"example"},[r("div",e._l(e.datosbasicos.paises,(function(t,n){return r("p",{key:n},[e._v("\n      "+e._s(t)+"\n    ")])})),0),e._v(" "),r("client-only",{attrs:{placeholder:"Loading..."}},[r("apexcharts",{attrs:{width:"500",height:"350",type:"bar",options:e.chartOptions,series:e.series}})],1),e._v(" "),r("client-only",[r("apexcharts",{attrs:{type:"radialBar",height:"350",options:e.chartOptionsa,series:e.seriesa}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);