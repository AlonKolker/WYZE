(function(){"use strict";var e={7556:function(e,r,n){var t=n(144),s=n(998),a=n(2928),o=function(){var e=this,r=e._self._c;return r(s.Z,[r(a.Z,[r("HomePage")],1)],1)},i=[],u=n(6570),c=n(266),d=n(2150),l=n(1641),m=n(1713),h=n(470),g=function(){var e=this,r=e._self._c;return r(d.Z,{staticClass:"app-container ma-0 pa-0",attrs:{fluid:""}},[r("header",{staticClass:"header"},[e._v("Find Wyze Branches!")]),r(m.Z,{staticClass:"select-container",attrs:{align:"center"}},[r(c.Z,{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[r(h.Z,{attrs:{items:e.regionsList,label:"Select region",dense:"",solo:""},on:{change:function(r){return e.selectedRegion()}},model:{value:e.region,callback:function(r){e.region=r},expression:"region"}})],1),r(c.Z,{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[r(h.Z,{attrs:{items:e.townList,label:"Select town",dense:"",solo:""},on:{change:function(r){return e.selectedTown()}},model:{value:e.town,callback:function(r){e.town=r},expression:"town"}})],1)],1),r(d.Z,{staticClass:"action-btn-container mb-5",attrs:{fluid:"",align:"center"}},[""!==e.town||""!==e.region?r(u.Z,{attrs:{depressed:""},on:{click:function(r){return e.onReset()}}},[e._v(" Reset ")]):e._e(),""!==e.town?r(u.Z,{attrs:{color:"primary",elevation:"6"},on:{click:function(r){return e.getTownBranches(e.town)}}},[e._v("Show")]):e._e()],1),e.showBranches?r(d.Z,{staticClass:"table-container d-flex flex-column align-center"},[r("div",{staticClass:"table-header"},[e._v(e._s(e.town.toUpperCase())+" Branches")]),r(l.Z,{staticClass:"elevation-1 ma-12 pa-12 branches-table",attrs:{dense:"",headers:e.headers,items:e.branches,"item-key":"name","hide-default-footer":!0}})],1):e._e()],1)},b=[],w=n(3907),f=JSON.parse('["center","south","north"]'),p=JSON.parse('[{"region":"center","town":"Tel-aviv"},{"region":"south","town":"Beer-sheva"},{"region":"center","town":"Herzliya"},{"region":"south","town":"Netivot"},{"region":"center","town":"Tel-aviv"},{"region":"south","town":"Ashdod"},{"region":"north","town":"Shlomi"},{"region":"north","town":"Heifa"}]'),y=JSON.parse('[{"town":"Beer-sheva","region":"south","branches":[{"adress":"yesod 5","number":"08-6514896"},{"adress":"yona 2","number":"08-6513945"},{"adress":"shoval 82","number":"08-6514896"},{"adress":"ein-or 21","number":"08-6513945"},{"adress":"magen 54","number":"08-6514896"},{"adress":"shomer 5","number":"08-6513945"},{"adress":"sereh metier 116","number":"08-6514896"},{"adress":"sereh metier 116","number":"08-6514896"},{"adress":"yatir 26","number":"08-6513945"},{"adress":"tziklag 71","number":"08-6514896"},{"adress":"zait 14","number":"08-6513945"}]},{"town":"Netivot","region":"south","branches":[{"adress":"shoval 82","number":"08-6514896"},{"adress":"ein-or 21","number":"08-6513945"},{"adress":"magen 54","number":"08-6514896"},{"adress":"shomer 5","number":"08-6513945"},{"adress":"sereh metier 116","number":"08-6514896"},{"adress":"sereh metier 116","number":"08-6514896"},{"adress":"yatir 26","number":"08-6513945"},{"adress":"tziklag 71","number":"08-6514896"},{"adress":"zait 14","number":"08-6513945"}]},{"town":"Ashdod","region":"south","branches":[{"adress":"shoval 82","number":"08-6514896"},{"adress":"ein-or 21","number":"08-6513945"}]},{"town":"Tel-aviv","region":"center","branches":[{"adress":"yesod 5","number":"03-6514896"},{"adress":"ein-or 21","number":"08-6513945"},{"adress":"magen 54","number":"03-6514896"},{"adress":"shomer 5","number":"03-6513945"},{"adress":"sereh metier 116","number":"03-6514896"},{"adress":"yatir 26","number":"03-6513945"},{"adress":"tziklag 71","number":"03-6514896"},{"adress":"zait 14","number":"03-6513945"}]},{"town":"Herzliya","region":"center","branches":[{"adress":"maapil 1","number":"03-6514896"},{"adress":"ein-or 21","number":"03-6513945"},{"adress":"magen 54","number":"03-6514896"},{"adress":"shomer 5","number":"03-6513945"},{"adress":"sereh metier 116","number":"03-6514896"},{"adress":"yatir 26","number":"03-6513945"},{"adress":"tziklag 71","number":"03-6514896"},{"adress":"zait 14","number":"03-6513945"}]},{"town":"Shlomi","region":"center","branches":[{"adress":"dereh ashalom 1","number":"04-6514896"},{"adress":"ein-or 21","number":"04-6513945"},{"adress":"magen 54","number":"04-6514896"},{"adress":"shomer 5","number":"04-6513945"},{"adress":"sereh metier 116","number":"04-6514896"},{"adress":"yatir 26","number":"04-6513945"},{"adress":"tziklag 71","number":"04-6514896"},{"adress":"zait 14","number":"04-6513945"}]},{"town":"Heifa","region":"center","branches":[{"adress":"dereh ashalom 1","number":"04-6514896"},{"adress":"ein-or 21","number":"04-6513945"},{"adress":"magen 54","number":"04-6514896"},{"adress":"shomer 5","number":"04-6513945"},{"adress":"sereh metier 116","number":"04-6514896"},{"adress":"yatir 26","number":"04-6513945"},{"adress":"tziklag 71","number":"04-6514896"},{"adress":"zait 14","number":"04-6513945"}]}]');const v={query:T,getBranches:Z};function T(e){return"townList"===e?JSON.parse(JSON.stringify(p)):"regions"===e?JSON.parse(JSON.stringify(f)):void 0}function Z(e="tel-aviv"){return y.filter((r=>r.town===e))}t.ZP.use(w.ZP);const O=new w.ZP.Store({state:{currTown:"",currReigon:"",townList:[],regions:[]},getters:{getTownList({townList:e,currReigon:r}){return r?r?e.map((e=>{if(e.region===r)return e.town})):void 0:e.map((e=>e.town))},getRegionsList({regions:e,currTown:r,townList:n}){if(!r)return e;if(r){let e=new Array(n.filter((e=>e.town===r))[0].region);return e}}},mutations:{loadData(e,{data:r,dataType:n}){"regions"===n&&(e.regions=r),"townList"===n&&(e.townList=r)},setTown(e,{town:r}){e.currTown=r},setRegion(e,{region:r}){e.currReigon=r}},actions:{async loadData({commit:e},{dataType:r}){try{let n=await v.query(r);e({type:"loadData",data:n,dataType:r})}catch(n){throw console.log("Faild getting data"),n}},setTown({commit:e},{town:r}){e({type:"setTown",town:r})},setRegion({commit:e},{region:r}){e({type:"setRegion",region:r})}}});var S={name:"HOME",data:()=>({town:"",region:"",showBranches:!1,headers:[{text:"Adress",align:"start",value:"adress"},{text:"Phone",value:"number"}],branches:[]}),methods:{selectedTown(){O.dispatch({type:"setTown",town:this.town}),this.showBranches=!1},selectedRegion(){O.dispatch({type:"setRegion",region:this.region})},async getTownBranches(e){try{this.branches=await v.getBranches(e)[0].branches,this.showBranches=!0}catch(r){throw console.log("Faild to fetch branches"),r}},onReset(){O.dispatch({type:"setTown",town:""}),O.dispatch({type:"setRegion",region:""}),this.town="",this.region="",this.showBranches=!1}},computed:{townList(){return O.getters.getTownList},regionsList(){return O.getters.getRegionsList}}},z=S,k=n(1001),_=(0,k.Z)(z,g,b,!1,null,null,null),L=_.exports,P={name:"App",data:()=>({}),async created(){try{await O.dispatch({type:"loadData",dataType:"regions"}),await O.dispatch({type:"loadData",dataType:"townList"})}catch(e){console.log("Faild load data")}},components:{HomePage:L}},R=P,x=(0,k.Z)(R,o,i,!1,null,null,null),B=x.exports,C=n(1705);t.ZP.use(C.Z);var N=new C.Z({});t.ZP.config.productionTip=!1,t.ZP.use(w.ZP),new t.ZP({store:O,vuetify:N,render:e=>e(B)}).$mount("#app")}},r={};function n(t){var s=r[t];if(void 0!==s)return s.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(r,t,s,a){if(!t){var o=1/0;for(d=0;d<e.length;d++){t=e[d][0],s=e[d][1],a=e[d][2];for(var i=!0,u=0;u<t.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(i=!1,a<o&&(o=a));if(i){e.splice(d--,1);var c=s();void 0!==c&&(r=c)}}return r}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[t,s,a]}}(),function(){n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,{a:r}),r}}(),function(){n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var s,a,o=t[0],i=t[1],u=t[2],c=0;if(o.some((function(r){return 0!==e[r]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(u)var d=u(n)}for(r&&r(t);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},t=self["webpackChunkwyze"]=self["webpackChunkwyze"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(7556)}));t=n.O(t)})();
//# sourceMappingURL=app.2382d2e1.js.map