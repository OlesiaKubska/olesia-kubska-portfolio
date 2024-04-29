import{g as qt,r as l,u as rt,j as H}from"./index-Dkw8SdPm.js";import{m as Xt}from"./motion-dKog3fvk.js";var Zt=function(r){return Jt(r)&&!Qt(r)};function Jt(e){return!!e&&typeof e=="object"}function Qt(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||tn(e)}var en=typeof Symbol=="function"&&Symbol.for,rn=en?Symbol.for("react.element"):60103;function tn(e){return e.$$typeof===rn}function nn(e){return Array.isArray(e)?[]:{}}function ge(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ce(nn(e),e,r):e}function an(e,r,t){return e.concat(r).map(function(n){return ge(n,t)})}function on(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=ge(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=ge(r[i],t):n[i]=ce(e[i],r[i],t)}),n}function ce(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||an,t.isMergeableObject=t.isMergeableObject||Zt;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):on(e,r,t):ge(r,t)}ce.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return ce(n,i,t)},{})};var We=ce,tt=typeof global=="object"&&global&&global.Object===Object&&global,un=typeof self=="object"&&self&&self.Object===Object&&self,U=tt||un||Function("return this")(),z=U.Symbol,nt=Object.prototype,cn=nt.hasOwnProperty,sn=nt.toString,oe=z?z.toStringTag:void 0;function ln(e){var r=cn.call(e,oe),t=e[oe];try{e[oe]=void 0;var n=!0}catch{}var i=sn.call(e);return n&&(r?e[oe]=t:delete e[oe]),i}var fn=Object.prototype,dn=fn.toString;function pn(e){return dn.call(e)}var yn="[object Null]",vn="[object Undefined]",$r=z?z.toStringTag:void 0;function X(e){return e==null?e===void 0?vn:yn:$r&&$r in Object(e)?ln(e):pn(e)}function at(e,r){return function(t){return e(r(t))}}var Qe=at(Object.getPrototypeOf,Object);function Z(e){return e!=null&&typeof e=="object"}var hn="[object Object]",gn=Function.prototype,bn=Object.prototype,it=gn.toString,mn=bn.hasOwnProperty,Tn=it.call(Object);function Or(e){if(!Z(e)||X(e)!=hn)return!1;var r=Qe(e);if(r===null)return!0;var t=mn.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&it.call(t)==Tn}var Cr=Array.isArray,Ir=Object.keys,Sn=Object.prototype.hasOwnProperty,En=typeof Element<"u";function ke(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=Cr(e),n=Cr(r),i,o,u;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!ke(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,v=r instanceof Date;if(p!=v)return!1;if(p&&v)return e.getTime()==r.getTime();var b=e instanceof RegExp,I=r instanceof RegExp;if(b!=I)return!1;if(b&&I)return e.toString()==r.toString();var w=Ir(e);if(o=w.length,o!==Ir(r).length)return!1;for(i=o;i--!==0;)if(!Sn.call(r,w[i]))return!1;if(En&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(u=w[i],!(u==="_owner"&&e.$$typeof)&&!ke(e[u],r[u]))return!1;return!0}return e!==e&&r!==r}var _n=function(r,t){try{return ke(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const W=qt(_n);function An(){this.__data__=[],this.size=0}function ot(e,r){return e===r||e!==e&&r!==r}function be(e,r){for(var t=e.length;t--;)if(ot(e[t][0],r))return t;return-1}var jn=Array.prototype,$n=jn.splice;function On(e){var r=this.__data__,t=be(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():$n.call(r,t,1),--this.size,!0}function Cn(e){var r=this.__data__,t=be(r,e);return t<0?void 0:r[t][1]}function In(e){return be(this.__data__,e)>-1}function wn(e,r){var t=this.__data__,n=be(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function B(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}B.prototype.clear=An;B.prototype.delete=On;B.prototype.get=Cn;B.prototype.has=In;B.prototype.set=wn;function Fn(){this.__data__=new B,this.size=0}function Mn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Rn(e){return this.__data__.get(e)}function Pn(e){return this.__data__.has(e)}function fe(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var xn="[object AsyncFunction]",Ln="[object Function]",Dn="[object GeneratorFunction]",Nn="[object Proxy]";function ut(e){if(!fe(e))return!1;var r=X(e);return r==Ln||r==Dn||r==xn||r==Nn}var ze=U["__core-js_shared__"],wr=function(){var e=/[^.]+$/.exec(ze&&ze.keys&&ze.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Un(e){return!!wr&&wr in e}var Vn=Function.prototype,Bn=Vn.toString;function J(e){if(e!=null){try{return Bn.call(e)}catch{}try{return e+""}catch{}}return""}var zn=/[\\^$.*+?()[\]{}|]/g,Gn=/^\[object .+?Constructor\]$/,Hn=Function.prototype,Kn=Object.prototype,Wn=Hn.toString,kn=Kn.hasOwnProperty,Yn=RegExp("^"+Wn.call(kn).replace(zn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function qn(e){if(!fe(e)||Un(e))return!1;var r=ut(e)?Yn:Gn;return r.test(J(e))}function Xn(e,r){return e==null?void 0:e[r]}function Q(e,r){var t=Xn(e,r);return qn(t)?t:void 0}var se=Q(U,"Map"),le=Q(Object,"create");function Zn(){this.__data__=le?le(null):{},this.size=0}function Jn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Qn="__lodash_hash_undefined__",ea=Object.prototype,ra=ea.hasOwnProperty;function ta(e){var r=this.__data__;if(le){var t=r[e];return t===Qn?void 0:t}return ra.call(r,e)?r[e]:void 0}var na=Object.prototype,aa=na.hasOwnProperty;function ia(e){var r=this.__data__;return le?r[e]!==void 0:aa.call(r,e)}var oa="__lodash_hash_undefined__";function ua(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=le&&r===void 0?oa:r,this}function q(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}q.prototype.clear=Zn;q.prototype.delete=Jn;q.prototype.get=ta;q.prototype.has=ia;q.prototype.set=ua;function ca(){this.size=0,this.__data__={hash:new q,map:new(se||B),string:new q}}function sa(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function me(e,r){var t=e.__data__;return sa(r)?t[typeof r=="string"?"string":"hash"]:t.map}function la(e){var r=me(this,e).delete(e);return this.size-=r?1:0,r}function fa(e){return me(this,e).get(e)}function da(e){return me(this,e).has(e)}function pa(e,r){var t=me(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function G(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}G.prototype.clear=ca;G.prototype.delete=la;G.prototype.get=fa;G.prototype.has=da;G.prototype.set=pa;var ya=200;function va(e,r){var t=this.__data__;if(t instanceof B){var n=t.__data__;if(!se||n.length<ya-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new G(n)}return t.set(e,r),this.size=t.size,this}function ae(e){var r=this.__data__=new B(e);this.size=r.size}ae.prototype.clear=Fn;ae.prototype.delete=Mn;ae.prototype.get=Rn;ae.prototype.has=Pn;ae.prototype.set=va;function ha(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Fr=function(){try{var e=Q(Object,"defineProperty");return e({},"",{}),e}catch{}}();function ct(e,r,t){r=="__proto__"&&Fr?Fr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var ga=Object.prototype,ba=ga.hasOwnProperty;function st(e,r,t){var n=e[r];(!(ba.call(e,r)&&ot(n,t))||t===void 0&&!(r in e))&&ct(e,r,t)}function Te(e,r,t,n){var i=!t;t||(t={});for(var o=-1,u=r.length;++o<u;){var p=r[o],v=n?n(t[p],e[p],p,t,e):void 0;v===void 0&&(v=e[p]),i?ct(t,p,v):st(t,p,v)}return t}function ma(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Ta="[object Arguments]";function Mr(e){return Z(e)&&X(e)==Ta}var lt=Object.prototype,Sa=lt.hasOwnProperty,Ea=lt.propertyIsEnumerable,_a=Mr(function(){return arguments}())?Mr:function(e){return Z(e)&&Sa.call(e,"callee")&&!Ea.call(e,"callee")},de=Array.isArray;function Aa(){return!1}var ft=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Rr=ft&&typeof module=="object"&&module&&!module.nodeType&&module,ja=Rr&&Rr.exports===ft,Pr=ja?U.Buffer:void 0,$a=Pr?Pr.isBuffer:void 0,dt=$a||Aa,Oa=9007199254740991,Ca=/^(?:0|[1-9]\d*)$/;function Ia(e,r){var t=typeof e;return r=r??Oa,!!r&&(t=="number"||t!="symbol"&&Ca.test(e))&&e>-1&&e%1==0&&e<r}var wa=9007199254740991;function pt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=wa}var Fa="[object Arguments]",Ma="[object Array]",Ra="[object Boolean]",Pa="[object Date]",xa="[object Error]",La="[object Function]",Da="[object Map]",Na="[object Number]",Ua="[object Object]",Va="[object RegExp]",Ba="[object Set]",za="[object String]",Ga="[object WeakMap]",Ha="[object ArrayBuffer]",Ka="[object DataView]",Wa="[object Float32Array]",ka="[object Float64Array]",Ya="[object Int8Array]",qa="[object Int16Array]",Xa="[object Int32Array]",Za="[object Uint8Array]",Ja="[object Uint8ClampedArray]",Qa="[object Uint16Array]",ei="[object Uint32Array]",E={};E[Wa]=E[ka]=E[Ya]=E[qa]=E[Xa]=E[Za]=E[Ja]=E[Qa]=E[ei]=!0;E[Fa]=E[Ma]=E[Ha]=E[Ra]=E[Ka]=E[Pa]=E[xa]=E[La]=E[Da]=E[Na]=E[Ua]=E[Va]=E[Ba]=E[za]=E[Ga]=!1;function ri(e){return Z(e)&&pt(e.length)&&!!E[X(e)]}function er(e){return function(r){return e(r)}}var yt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ue=yt&&typeof module=="object"&&module&&!module.nodeType&&module,ti=ue&&ue.exports===yt,Ge=ti&&tt.process,ne=function(){try{var e=ue&&ue.require&&ue.require("util").types;return e||Ge&&Ge.binding&&Ge.binding("util")}catch{}}(),xr=ne&&ne.isTypedArray,ni=xr?er(xr):ri,ai=Object.prototype,ii=ai.hasOwnProperty;function vt(e,r){var t=de(e),n=!t&&_a(e),i=!t&&!n&&dt(e),o=!t&&!n&&!i&&ni(e),u=t||n||i||o,p=u?ma(e.length,String):[],v=p.length;for(var b in e)(r||ii.call(e,b))&&!(u&&(b=="length"||i&&(b=="offset"||b=="parent")||o&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Ia(b,v)))&&p.push(b);return p}var oi=Object.prototype;function rr(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||oi;return e===t}var ui=at(Object.keys,Object),ci=Object.prototype,si=ci.hasOwnProperty;function li(e){if(!rr(e))return ui(e);var r=[];for(var t in Object(e))si.call(e,t)&&t!="constructor"&&r.push(t);return r}function ht(e){return e!=null&&pt(e.length)&&!ut(e)}function tr(e){return ht(e)?vt(e):li(e)}function fi(e,r){return e&&Te(r,tr(r),e)}function di(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var pi=Object.prototype,yi=pi.hasOwnProperty;function vi(e){if(!fe(e))return di(e);var r=rr(e),t=[];for(var n in e)n=="constructor"&&(r||!yi.call(e,n))||t.push(n);return t}function nr(e){return ht(e)?vt(e,!0):vi(e)}function hi(e,r){return e&&Te(r,nr(r),e)}var gt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Lr=gt&&typeof module=="object"&&module&&!module.nodeType&&module,gi=Lr&&Lr.exports===gt,Dr=gi?U.Buffer:void 0,Nr=Dr?Dr.allocUnsafe:void 0;function bi(e,r){if(r)return e.slice();var t=e.length,n=Nr?Nr(t):new e.constructor(t);return e.copy(n),n}function bt(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function mi(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var u=e[t];r(u,t,e)&&(o[i++]=u)}return o}function mt(){return[]}var Ti=Object.prototype,Si=Ti.propertyIsEnumerable,Ur=Object.getOwnPropertySymbols,ar=Ur?function(e){return e==null?[]:(e=Object(e),mi(Ur(e),function(r){return Si.call(e,r)}))}:mt;function Ei(e,r){return Te(e,ar(e),r)}function Tt(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var _i=Object.getOwnPropertySymbols,St=_i?function(e){for(var r=[];e;)Tt(r,ar(e)),e=Qe(e);return r}:mt;function Ai(e,r){return Te(e,St(e),r)}function Et(e,r,t){var n=r(e);return de(e)?n:Tt(n,t(e))}function ji(e){return Et(e,tr,ar)}function $i(e){return Et(e,nr,St)}var Ye=Q(U,"DataView"),qe=Q(U,"Promise"),Xe=Q(U,"Set"),Ze=Q(U,"WeakMap"),Vr="[object Map]",Oi="[object Object]",Br="[object Promise]",zr="[object Set]",Gr="[object WeakMap]",Hr="[object DataView]",Ci=J(Ye),Ii=J(se),wi=J(qe),Fi=J(Xe),Mi=J(Ze),k=X;(Ye&&k(new Ye(new ArrayBuffer(1)))!=Hr||se&&k(new se)!=Vr||qe&&k(qe.resolve())!=Br||Xe&&k(new Xe)!=zr||Ze&&k(new Ze)!=Gr)&&(k=function(e){var r=X(e),t=r==Oi?e.constructor:void 0,n=t?J(t):"";if(n)switch(n){case Ci:return Hr;case Ii:return Vr;case wi:return Br;case Fi:return zr;case Mi:return Gr}return r});const ir=k;var Ri=Object.prototype,Pi=Ri.hasOwnProperty;function xi(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&Pi.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Kr=U.Uint8Array;function or(e){var r=new e.constructor(e.byteLength);return new Kr(r).set(new Kr(e)),r}function Li(e,r){var t=r?or(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Di=/\w*$/;function Ni(e){var r=new e.constructor(e.source,Di.exec(e));return r.lastIndex=e.lastIndex,r}var Wr=z?z.prototype:void 0,kr=Wr?Wr.valueOf:void 0;function Ui(e){return kr?Object(kr.call(e)):{}}function Vi(e,r){var t=r?or(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Bi="[object Boolean]",zi="[object Date]",Gi="[object Map]",Hi="[object Number]",Ki="[object RegExp]",Wi="[object Set]",ki="[object String]",Yi="[object Symbol]",qi="[object ArrayBuffer]",Xi="[object DataView]",Zi="[object Float32Array]",Ji="[object Float64Array]",Qi="[object Int8Array]",eo="[object Int16Array]",ro="[object Int32Array]",to="[object Uint8Array]",no="[object Uint8ClampedArray]",ao="[object Uint16Array]",io="[object Uint32Array]";function oo(e,r,t){var n=e.constructor;switch(r){case qi:return or(e);case Bi:case zi:return new n(+e);case Xi:return Li(e,t);case Zi:case Ji:case Qi:case eo:case ro:case to:case no:case ao:case io:return Vi(e,t);case Gi:return new n;case Hi:case ki:return new n(e);case Ki:return Ni(e);case Wi:return new n;case Yi:return Ui(e)}}var Yr=Object.create,uo=function(){function e(){}return function(r){if(!fe(r))return{};if(Yr)return Yr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();function co(e){return typeof e.constructor=="function"&&!rr(e)?uo(Qe(e)):{}}var so="[object Map]";function lo(e){return Z(e)&&ir(e)==so}var qr=ne&&ne.isMap,fo=qr?er(qr):lo,po="[object Set]";function yo(e){return Z(e)&&ir(e)==po}var Xr=ne&&ne.isSet,vo=Xr?er(Xr):yo,ho=1,go=2,bo=4,_t="[object Arguments]",mo="[object Array]",To="[object Boolean]",So="[object Date]",Eo="[object Error]",At="[object Function]",_o="[object GeneratorFunction]",Ao="[object Map]",jo="[object Number]",jt="[object Object]",$o="[object RegExp]",Oo="[object Set]",Co="[object String]",Io="[object Symbol]",wo="[object WeakMap]",Fo="[object ArrayBuffer]",Mo="[object DataView]",Ro="[object Float32Array]",Po="[object Float64Array]",xo="[object Int8Array]",Lo="[object Int16Array]",Do="[object Int32Array]",No="[object Uint8Array]",Uo="[object Uint8ClampedArray]",Vo="[object Uint16Array]",Bo="[object Uint32Array]",S={};S[_t]=S[mo]=S[Fo]=S[Mo]=S[To]=S[So]=S[Ro]=S[Po]=S[xo]=S[Lo]=S[Do]=S[Ao]=S[jo]=S[jt]=S[$o]=S[Oo]=S[Co]=S[Io]=S[No]=S[Uo]=S[Vo]=S[Bo]=!0;S[Eo]=S[At]=S[wo]=!1;function he(e,r,t,n,i,o){var u,p=r&ho,v=r&go,b=r&bo;if(t&&(u=i?t(e,n,i,o):t(e)),u!==void 0)return u;if(!fe(e))return e;var I=de(e);if(I){if(u=xi(e),!p)return bt(e,u)}else{var w=ir(e),f=w==At||w==_o;if(dt(e))return bi(e,p);if(w==jt||w==_t||f&&!i){if(u=v||f?{}:co(e),!p)return v?Ai(e,hi(u,e)):Ei(e,fi(u,e))}else{if(!S[w])return i?e:{};u=oo(e,w,p)}}o||(o=new ae);var j=o.get(e);if(j)return j;o.set(e,u),vo(e)?e.forEach(function(C){u.add(he(C,r,t,C,e,o))}):fo(e)&&e.forEach(function(C,A){u.set(A,he(C,r,t,A,e,o))});var x=b?v?$i:ji:v?nr:tr,F=I?void 0:x(e);return ha(F||e,function(C,A){F&&(A=C,C=e[A]),st(u,A,he(C,r,t,A,e,o))}),u}var zo=4;function Zr(e){return he(e,zo)}function $t(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var Go="[object Symbol]";function ur(e){return typeof e=="symbol"||Z(e)&&X(e)==Go}var Ho="Expected a function";function cr(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Ho);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var u=e.apply(this,n);return t.cache=o.set(i,u)||o,u};return t.cache=new(cr.Cache||G),t}cr.Cache=G;var Ko=500;function Wo(e){var r=cr(e,function(n){return t.size===Ko&&t.clear(),n}),t=r.cache;return r}var ko=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yo=/\\(\\)?/g,qo=Wo(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(ko,function(t,n,i,o){r.push(i?o.replace(Yo,"$1"):n||t)}),r});const Xo=qo;var Zo=1/0;function Jo(e){if(typeof e=="string"||ur(e))return e;var r=e+"";return r=="0"&&1/e==-Zo?"-0":r}var Qo=1/0,Jr=z?z.prototype:void 0,Qr=Jr?Jr.toString:void 0;function Ot(e){if(typeof e=="string")return e;if(de(e))return $t(e,Ot)+"";if(ur(e))return Qr?Qr.call(e):"";var r=e+"";return r=="0"&&1/e==-Qo?"-0":r}function eu(e){return e==null?"":Ot(e)}function Ct(e){return de(e)?$t(e,Jo):ur(e)?[e]:bt(Xo(eu(e)))}var It={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=typeof Symbol=="function"&&Symbol.for,sr=O?Symbol.for("react.element"):60103,lr=O?Symbol.for("react.portal"):60106,Se=O?Symbol.for("react.fragment"):60107,Ee=O?Symbol.for("react.strict_mode"):60108,_e=O?Symbol.for("react.profiler"):60114,Ae=O?Symbol.for("react.provider"):60109,je=O?Symbol.for("react.context"):60110,fr=O?Symbol.for("react.async_mode"):60111,$e=O?Symbol.for("react.concurrent_mode"):60111,Oe=O?Symbol.for("react.forward_ref"):60112,Ce=O?Symbol.for("react.suspense"):60113,ru=O?Symbol.for("react.suspense_list"):60120,Ie=O?Symbol.for("react.memo"):60115,we=O?Symbol.for("react.lazy"):60116,tu=O?Symbol.for("react.block"):60121,nu=O?Symbol.for("react.fundamental"):60117,au=O?Symbol.for("react.responder"):60118,iu=O?Symbol.for("react.scope"):60119;function P(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case sr:switch(e=e.type,e){case fr:case $e:case Se:case _e:case Ee:case Ce:return e;default:switch(e=e&&e.$$typeof,e){case je:case Oe:case we:case Ie:case Ae:return e;default:return r}}case lr:return r}}}function wt(e){return P(e)===$e}g.AsyncMode=fr;g.ConcurrentMode=$e;g.ContextConsumer=je;g.ContextProvider=Ae;g.Element=sr;g.ForwardRef=Oe;g.Fragment=Se;g.Lazy=we;g.Memo=Ie;g.Portal=lr;g.Profiler=_e;g.StrictMode=Ee;g.Suspense=Ce;g.isAsyncMode=function(e){return wt(e)||P(e)===fr};g.isConcurrentMode=wt;g.isContextConsumer=function(e){return P(e)===je};g.isContextProvider=function(e){return P(e)===Ae};g.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr};g.isForwardRef=function(e){return P(e)===Oe};g.isFragment=function(e){return P(e)===Se};g.isLazy=function(e){return P(e)===we};g.isMemo=function(e){return P(e)===Ie};g.isPortal=function(e){return P(e)===lr};g.isProfiler=function(e){return P(e)===_e};g.isStrictMode=function(e){return P(e)===Ee};g.isSuspense=function(e){return P(e)===Ce};g.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Se||e===$e||e===_e||e===Ee||e===Ce||e===ru||typeof e=="object"&&e!==null&&(e.$$typeof===we||e.$$typeof===Ie||e.$$typeof===Ae||e.$$typeof===je||e.$$typeof===Oe||e.$$typeof===nu||e.$$typeof===au||e.$$typeof===iu||e.$$typeof===tu)};g.typeOf=P;It.exports=g;var ou=It.exports,Ft=ou,uu={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mt={};Mt[Ft.ForwardRef]=uu;Mt[Ft.Memo]=cu;function _(){return _=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_.apply(this,arguments)}function te(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Fe=l.createContext(void 0);Fe.displayName="FormikContext";var su=Fe.Provider;Fe.Consumer;function Rt(){var e=l.useContext(Fe);return e}var R=function(r){return typeof r=="function"},Me=function(r){return r!==null&&typeof r=="object"},lu=function(r){return String(Math.floor(Number(r)))===r},He=function(r){return Object.prototype.toString.call(r)==="[object String]"},fu=function(r){return l.Children.count(r)===0},Ke=function(r){return Me(r)&&R(r.then)};function M(e,r,t,n){n===void 0&&(n=0);for(var i=Ct(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function Y(e,r,t){for(var n=Zr(e),i=n,o=0,u=Ct(r);o<u.length-1;o++){var p=u[o],v=M(e,u.slice(0,o+1));if(v&&(Me(v)||Array.isArray(v)))i=i[p]=Zr(v);else{var b=u[o+1];i=i[p]=lu(b)&&Number(b)>=0?[]:{}}}return(o===0?e:i)[u[o]]===t?e:(t===void 0?delete i[u[o]]:i[u[o]]=t,o===0&&t===void 0&&delete n[u[o]],n)}function Pt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var u=o[i],p=e[u];Me(p)?t.get(p)||(t.set(p,!0),n[u]=Array.isArray(p)?[]:{},Pt(p,r,t,n[u])):n[u]=r}return n}function du(e,r){switch(r.type){case"SET_VALUES":return _({},e,{values:r.payload});case"SET_TOUCHED":return _({},e,{touched:r.payload});case"SET_ERRORS":return W(e.errors,r.payload)?e:_({},e,{errors:r.payload});case"SET_STATUS":return _({},e,{status:r.payload});case"SET_ISSUBMITTING":return _({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return _({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return _({},e,{values:Y(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return _({},e,{touched:Y(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return _({},e,{errors:Y(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return _({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return _({},e,{touched:Pt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return _({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return _({},e,{isSubmitting:!1});default:return e}}var K={},ve={};function pu(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,u=o===void 0?!1:o,p=e.isInitialValid,v=e.enableReinitialize,b=v===void 0?!1:v,I=e.onSubmit,w=te(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=_({validateOnChange:t,validateOnBlur:i,validateOnMount:u,onSubmit:I},w),j=l.useRef(f.initialValues),x=l.useRef(f.initialErrors||K),F=l.useRef(f.initialTouched||ve),C=l.useRef(f.initialStatus),A=l.useRef(!1),L=l.useRef({});l.useEffect(function(){return A.current=!0,function(){A.current=!1}},[]);var Re=l.useState(0),Pe=Re[1],pe=l.useRef({values:f.initialValues,errors:f.initialErrors||K,touched:f.initialTouched||ve,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=pe.current,m=l.useCallback(function(a){var c=pe.current;pe.current=du(c,a),c!==pe.current&&Pe(function(s){return s+1})},[]),dr=l.useCallback(function(a,c){return new Promise(function(s,d){var y=f.validate(a,c);y==null?s(K):Ke(y)?y.then(function(h){s(h||K)},function(h){d(h)}):s(y)})},[f.validate]),xe=l.useCallback(function(a,c){var s=f.validationSchema,d=R(s)?s(c):s,y=c&&d.validateAt?d.validateAt(c,a):hu(a,d);return new Promise(function(h,$){y.then(function(){h(K)},function(V){V.name==="ValidationError"?h(vu(V)):$(V)})})},[f.validationSchema]),pr=l.useCallback(function(a,c){return new Promise(function(s){return s(L.current[a].validate(c))})},[]),yr=l.useCallback(function(a){var c=Object.keys(L.current).filter(function(d){return R(L.current[d].validate)}),s=c.length>0?c.map(function(d){return pr(d,M(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(s).then(function(d){return d.reduce(function(y,h,$){return h==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||h&&(y=Y(y,c[$],h)),y},{})})},[pr]),Lt=l.useCallback(function(a){return Promise.all([yr(a),f.validationSchema?xe(a):{},f.validate?dr(a):{}]).then(function(c){var s=c[0],d=c[1],y=c[2],h=We.all([s,d,y],{arrayMerge:gu});return h})},[f.validate,f.validationSchema,yr,dr,xe]),N=D(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),Lt(a).then(function(c){return A.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});l.useEffect(function(){u&&A.current===!0&&W(j.current,f.initialValues)&&N(j.current)},[u,N]);var ie=l.useCallback(function(a){var c=a&&a.values?a.values:j.current,s=a&&a.errors?a.errors:x.current?x.current:f.initialErrors||{},d=a&&a.touched?a.touched:F.current?F.current:f.initialTouched||{},y=a&&a.status?a.status:C.current?C.current:f.initialStatus;j.current=c,x.current=s,F.current=d,C.current=y;var h=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:s,touched:d,status:y,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var $=f.onReset(T.values,Ar);Ke($)?$.then(h):h()}else h()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);l.useEffect(function(){A.current===!0&&!W(j.current,f.initialValues)&&b&&(j.current=f.initialValues,ie(),u&&N(j.current))},[b,f.initialValues,ie,u,N]),l.useEffect(function(){b&&A.current===!0&&!W(x.current,f.initialErrors)&&(x.current=f.initialErrors||K,m({type:"SET_ERRORS",payload:f.initialErrors||K}))},[b,f.initialErrors]),l.useEffect(function(){b&&A.current===!0&&!W(F.current,f.initialTouched)&&(F.current=f.initialTouched||ve,m({type:"SET_TOUCHED",payload:f.initialTouched||ve}))},[b,f.initialTouched]),l.useEffect(function(){b&&A.current===!0&&!W(C.current,f.initialStatus)&&(C.current=f.initialStatus,m({type:"SET_STATUS",payload:f.initialStatus}))},[b,f.initialStatus,f.initialTouched]);var vr=D(function(a){if(L.current[a]&&R(L.current[a].validate)){var c=M(T.values,a),s=L.current[a].validate(c);return Ke(s)?(m({type:"SET_ISVALIDATING",payload:!0}),s.then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:s}}),Promise.resolve(s))}else if(f.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),xe(T.values,a).then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:M(d,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Dt=l.useCallback(function(a,c){var s=c.validate;L.current[a]={validate:s}},[]),Nt=l.useCallback(function(a){delete L.current[a]},[]),hr=D(function(a,c){m({type:"SET_TOUCHED",payload:a});var s=c===void 0?i:c;return s?N(T.values):Promise.resolve()}),gr=l.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),br=D(function(a,c){var s=R(a)?a(T.values):a;m({type:"SET_VALUES",payload:s});var d=c===void 0?t:c;return d?N(s):Promise.resolve()}),ye=l.useCallback(function(a,c){m({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),ee=D(function(a,c,s){m({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=s===void 0?t:s;return d?N(Y(T.values,a,c)):Promise.resolve()}),mr=l.useCallback(function(a,c){var s=c,d=a,y;if(!He(a)){a.persist&&a.persist();var h=a.target?a.target:a.currentTarget,$=h.type,V=h.name,Ve=h.id,Be=h.value,kt=h.checked,_u=h.outerHTML,jr=h.options,Yt=h.multiple;s=c||V||Ve,d=/number|range/.test($)?(y=parseFloat(Be),isNaN(y)?"":y):/checkbox/.test($)?mu(M(T.values,s),kt,Be):jr&&Yt?bu(jr):Be}s&&ee(s,d)},[ee,T.values]),Le=D(function(a){if(He(a))return function(c){return mr(c,a)};mr(a)}),re=D(function(a,c,s){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=s===void 0?i:s;return d?N(T.values):Promise.resolve()}),Tr=l.useCallback(function(a,c){a.persist&&a.persist();var s=a.target,d=s.name,y=s.id,h=s.outerHTML,$=c||d||y;re($,!0)},[re]),De=D(function(a){if(He(a))return function(c){return Tr(c,a)};Tr(a)}),Sr=l.useCallback(function(a){R(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),Er=l.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),_r=l.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),Ne=D(function(){return m({type:"SUBMIT_ATTEMPT"}),N().then(function(a){var c=a instanceof Error,s=!c&&Object.keys(a).length===0;if(s){var d;try{if(d=Vt(),d===void 0)return}catch(y){throw y}return Promise.resolve(d).then(function(y){return A.current&&m({type:"SUBMIT_SUCCESS"}),y}).catch(function(y){if(A.current)throw m({type:"SUBMIT_FAILURE"}),y})}else if(A.current&&(m({type:"SUBMIT_FAILURE"}),c))throw a})}),Ut=D(function(a){a&&a.preventDefault&&R(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&R(a.stopPropagation)&&a.stopPropagation(),Ne().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),Ar={resetForm:ie,validateForm:N,validateField:vr,setErrors:gr,setFieldError:ye,setFieldTouched:re,setFieldValue:ee,setStatus:Er,setSubmitting:_r,setTouched:hr,setValues:br,setFormikState:Sr,submitForm:Ne},Vt=D(function(){return I(T.values,Ar)}),Bt=D(function(a){a&&a.preventDefault&&R(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&R(a.stopPropagation)&&a.stopPropagation(),ie()}),zt=l.useCallback(function(a){return{value:M(T.values,a),error:M(T.errors,a),touched:!!M(T.touched,a),initialValue:M(j.current,a),initialTouched:!!M(F.current,a),initialError:M(x.current,a)}},[T.errors,T.touched,T.values]),Gt=l.useCallback(function(a){return{setValue:function(s,d){return ee(a,s,d)},setTouched:function(s,d){return re(a,s,d)},setError:function(s){return ye(a,s)}}},[ee,re,ye]),Ht=l.useCallback(function(a){var c=Me(a),s=c?a.name:a,d=M(T.values,s),y={name:s,value:d,onChange:Le,onBlur:De};if(c){var h=a.type,$=a.value,V=a.as,Ve=a.multiple;h==="checkbox"?$===void 0?y.checked=!!d:(y.checked=!!(Array.isArray(d)&&~d.indexOf($)),y.value=$):h==="radio"?(y.checked=d===$,y.value=$):V==="select"&&Ve&&(y.value=y.value||[],y.multiple=!0)}return y},[De,Le,T.values]),Ue=l.useMemo(function(){return!W(j.current,T.values)},[j.current,T.values]),Kt=l.useMemo(function(){return typeof p<"u"?Ue?T.errors&&Object.keys(T.errors).length===0:p!==!1&&R(p)?p(f):p:T.errors&&Object.keys(T.errors).length===0},[p,Ue,T.errors,f]),Wt=_({},T,{initialValues:j.current,initialErrors:x.current,initialTouched:F.current,initialStatus:C.current,handleBlur:De,handleChange:Le,handleReset:Bt,handleSubmit:Ut,resetForm:ie,setErrors:gr,setFormikState:Sr,setFieldTouched:re,setFieldValue:ee,setFieldError:ye,setStatus:Er,setSubmitting:_r,setTouched:hr,setValues:br,submitForm:Ne,validateForm:N,validateField:vr,isValid:Kt,dirty:Ue,unregisterField:Nt,registerField:Dt,getFieldProps:Ht,getFieldMeta:zt,getFieldHelpers:Gt,validateOnBlur:i,validateOnChange:t,validateOnMount:u});return Wt}function yu(e){var r=pu(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return l.useImperativeHandle(o,function(){return r}),l.createElement(su,{value:r},t?l.createElement(t,r):i?i(r):n?R(n)?n(r):fu(n)?null:l.Children.only(n):null)}function vu(e){var r={};if(e.inner){if(e.inner.length===0)return Y(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var u=o;M(r,u.path)||(r=Y(r,u.path,u.message))}}return r}function hu(e,r,t,n){t===void 0&&(t=!1);var i=Je(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Je(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||Or(i)?Je(i):i!==""?i:void 0}):Or(e[n])?r[n]=Je(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function gu(e,r,t){var n=e.slice();return r.forEach(function(o,u){if(typeof n[u]>"u"){var p=t.clone!==!1,v=p&&t.isMergeableObject(o);n[u]=v?We(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[u]=We(e[u],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function bu(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function mu(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Tu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?l.useLayoutEffect:l.useEffect;function D(e){var r=l.useRef(e);return Tu(function(){r.current=e}),l.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}function et(e){var r=e.validate,t=e.name,n=e.render,i=e.children,o=e.as,u=e.component,p=e.className,v=te(e,["validate","name","render","children","as","component","className"]),b=Rt(),I=te(b,["validate","validationSchema"]),w=I.registerField,f=I.unregisterField;l.useEffect(function(){return w(t,{validate:r}),function(){f(t)}},[w,f,t,r]);var j=I.getFieldProps(_({name:t},v)),x=I.getFieldMeta(t),F={field:j,form:I};if(n)return n(_({},F,{meta:x}));if(R(i))return i(_({},F,{meta:x}));if(u){if(typeof u=="string"){var C=v.innerRef,A=te(v,["innerRef"]);return l.createElement(u,_({ref:C},j,A,{className:p}),i)}return l.createElement(u,_({field:j,form:I},v,{className:p}),i)}var L=o||"input";if(typeof L=="string"){var Re=v.innerRef,Pe=te(v,["innerRef"]);return l.createElement(L,_({ref:Re},j,Pe,{className:p}),i)}return l.createElement(L,_({},j,v,{className:p}),i)}var xt=l.forwardRef(function(e,r){var t=e.action,n=te(e,["action"]),i=t??"#",o=Rt(),u=o.handleReset,p=o.handleSubmit;return l.createElement("form",_({onSubmit:p,ref:r,onReset:u,action:i},n))});xt.displayName="Form";const Su=rt(Xt.div)`
 padding: 2rem;
`,Eu=rt(xt)`
 display: flex;
 flex-direction: column;
`,$u=()=>H.jsxs(Su,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},children:[H.jsx("h2",{children:"Contact Me"}),H.jsx(yu,{initialValues:{email:"",message:""},onSubmit:(e,r)=>{console.log(e),r.setSubmitting(!1)},children:()=>H.jsxs(Eu,{children:[H.jsx(et,{name:"email",type:"email",placeholder:"Your Email"}),H.jsx(et,{name:"message",as:"textarea",placeholder:"Your Message"}),H.jsx("button",{type:"submit",children:"Send"})]})})]});export{$u as default};
