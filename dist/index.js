"use strict";var i=function(E,r){return function(){try{return r||E((r={exports:{}}).exports,r),r.exports}catch(_){throw (r=0, _)}};};var S=i(function(v,n){
var s={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};n.exports=s
});var l=i(function(B,I){
var a=require('@stdlib/ndarray-base-bytes-per-element/dist'),u=S();function L(E){var r,_,e,t;if(_=E.length,_<=0||(r=a(E[0]),r===null))return u.BLOCK_SIZE_IN_ELEMENTS;for(t=1;t<_;t++){if(e=a(E[t]),e===null)return u.BLOCK_SIZE_IN_ELEMENTS;e>r&&(r=e)}return e=u.BLOCK_SIZE_IN_BYTES/r|0,e>0?e:1}I.exports=L
});var N=l();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
