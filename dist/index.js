"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=m(function(y,s){
var v=require('@stdlib/assert-is-integer-array/dist').primitives,d=require('@stdlib/assert-is-integer/dist').isPrimitive,f=require('@stdlib/assert-is-plain-object/dist'),g=require('@stdlib/assert-is-ndarray-like/dist'),n=require('@stdlib/assert-has-own-property/dist'),o=require('@stdlib/ndarray-base-to-rot90/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function w(e,r){var a,t;if(!g(e))throw new TypeError(i('null4f',e));if(a=[-2,-1],t=1,arguments.length>1){if(!f(r))throw new TypeError(i('null2V',r));if(n(r,"k")){if(!d(r.k))throw new TypeError(i('null8M',"k",r.k));t=r.k}if(n(r,"dims")){if(!v(r.dims))throw new TypeError(i('nullHk',"dims",r.dims));a=r.dims}}return o(e,a,t)}s.exports=w
});var l=u();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
