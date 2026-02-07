// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bytes-per-element@v0.3.0-esm/index.mjs";var e=64,t=8;function n(n){var l,s,i,u;if((s=n.length)<=0)return t;if(null===(l=r(n[0])))return t;for(u=1;u<s;u++){if(null===(i=r(n[u])))return t;i>l&&(l=i)}return(i=e/l|0)>0?i:1}export{n as default};
//# sourceMappingURL=index.mjs.map
