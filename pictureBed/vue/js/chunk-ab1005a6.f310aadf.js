(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab1005a6"],{"79d9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("a-page-header",{staticStyle:{border:"1px solid rgb(235, 237, 240)"},attrs:{title:"设置"},on:{back:function(){return t.$router.replace({name:"index"})}}}),n("a-tabs",{staticStyle:{padding:"10px 15px"},on:{change:e.tabsChange},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},e._l(e.tabsData,(function(t){return n("a-tab-pane",{key:t.name,attrs:{tab:t.name}},[n("router-view",{staticStyle:{"max-height":"85vh"}})],1)})),1)],1)},r=[],u=(a("7db0"),a("b0c0"),a("ac1f"),a("5319"),{data:function(){return{tabsData:[{name:"阿里OSS",router:{name:"aliOss"}},{name:"腾讯OSS",router:{name:"tencentOss"}},{name:"GitHub",router:{name:"GitHub"}},{name:"sm.ms",router:{name:"smMs"}},{name:"如优",router:{name:"rruu"}},{name:"支持",router:{name:"contributions"}}],currentTab:"阿里OSS"}},methods:{tabsChange:function(t){var e=this.tabsData.find((function(e){return e.name===t}));this.$router.replace(e.router)}}}),i=u,o=a("2877"),s=Object(o["a"])(i,n,r,!1,null,"735e9120",null);e["default"]=s.exports},"7db0":function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").find,u=a("44d2"),i=a("ae40"),o="find",s=!0,c=i(o);o in[]&&Array(1)[o]((function(){s=!1})),n({target:"Array",proto:!0,forced:s||!c},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),u(o)}}]);