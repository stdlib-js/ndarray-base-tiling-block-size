// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function t(t){return n[t]||null}var i=64,u=8;function l(n){var l,r,o,e;if((r=n.length)<=0)return u;if(null===(l=t(n[0])))return u;for(e=1;e<r;e++){if(null===(o=t(n[e])))return u;o>l&&(l=o)}return(o=i/l|0)>0?o:1}export{l as default};
//# sourceMappingURL=mod.js.map
