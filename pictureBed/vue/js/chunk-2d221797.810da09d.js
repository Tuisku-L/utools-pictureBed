(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221797"],{cb02:function(s,e,a){"use strict";a.r(e);var t=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticStyle:{"min-height":"100%"}},[a("a-form",{attrs:{"label-col":{span:6},"wrapper-col":{span:12}}},[a("a-form-item",{attrs:{label:"region"}},[a("a-input",{attrs:{placeholder:"region"},model:{value:s.oss.aliOss.region,callback:function(e){s.$set(s.oss.aliOss,"region",e)},expression:"oss.aliOss.region"}})],1),a("a-form-item",{attrs:{label:"accessKeyId"}},[a("a-input",{attrs:{placeholder:"accessKeyId"},model:{value:s.oss.aliOss.accessKeyId,callback:function(e){s.$set(s.oss.aliOss,"accessKeyId",e)},expression:"oss.aliOss.accessKeyId"}})],1),a("a-form-item",{attrs:{label:"accessKeySecret"}},[a("a-input",{attrs:{placeholder:"accessKeySecret"},model:{value:s.oss.aliOss.accessKeySecret,callback:function(e){s.$set(s.oss.aliOss,"accessKeySecret",e)},expression:"oss.aliOss.accessKeySecret"}})],1),a("a-form-item",{attrs:{label:"bucket"}},[a("a-input",{attrs:{placeholder:"bucket"},model:{value:s.oss.aliOss.bucket,callback:function(e){s.$set(s.oss.aliOss,"bucket",e)},expression:"oss.aliOss.bucket"}})],1),a("a-form-item",{attrs:{label:"需要设置目录"}},[a("a-input",{attrs:{placeholder:"上传目录例如: abc/test"},model:{value:s.oss.aliOss.uploadDirectory,callback:function(e){s.$set(s.oss.aliOss,"uploadDirectory",e)},expression:"oss.aliOss.uploadDirectory"}})],1)],1),a("a-row",{attrs:{type:"flex",justify:"center"}},[a("a-button",{on:{click:s.getToken}},[s._v("怎么获取这些信息")])],1)],1)},l=[],o=a("5530"),c=a("2f62"),i={computed:Object(o["a"])({},Object(c["b"])(["oss"])),methods:{getToken:function(){window.openUrl("https://www.aliyun.com/product/oss"),window.openUrl("https://help.aliyun.com/document_detail/64097.html")}}},r=i,n=a("2877"),u=Object(n["a"])(r,t,l,!1,null,"7ff3d088",null);e["default"]=u.exports}}]);