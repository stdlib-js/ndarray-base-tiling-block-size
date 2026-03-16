"use strict";var i=function(E,r){return function(){return r||E((r={exports:{}}).exports,r),r.exports}};var S=i(function(v,n){
var s={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};n.exports=s
});var l=i(function(B,I){
var a=require('@stdlib/ndarray-base-bytes-per-element/dist'),t=S();function L(E){var r,u,e,_;if(u=E.length,u<=0||(r=a(E[0]),r===null))return t.BLOCK_SIZE_IN_ELEMENTS;for(_=1;_<u;_++){if(e=a(E[_]),e===null)return t.BLOCK_SIZE_IN_ELEMENTS;e>r&&(r=e)}return e=t.BLOCK_SIZE_IN_BYTES/r|0,e>0?e:1}I.exports=L
});var N=l();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
