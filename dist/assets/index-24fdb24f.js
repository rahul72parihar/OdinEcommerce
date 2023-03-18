function gg(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ni={},yg={get exports(){return ni},set exports(t){ni=t}},wo={},E={},wg={get exports(){return E},set exports(t){E=t}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),_g=Symbol.for("react.portal"),Sg=Symbol.for("react.fragment"),Eg=Symbol.for("react.strict_mode"),kg=Symbol.for("react.profiler"),Ig=Symbol.for("react.provider"),Tg=Symbol.for("react.context"),Cg=Symbol.for("react.forward_ref"),Pg=Symbol.for("react.suspense"),Ng=Symbol.for("react.memo"),Rg=Symbol.for("react.lazy"),Sc=Symbol.iterator;function xg(t){return t===null||typeof t!="object"?null:(t=Sc&&t[Sc]||t["@@iterator"],typeof t=="function"?t:null)}var xf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Of=Object.assign,Af={};function _r(t,e,n){this.props=t,this.context=e,this.refs=Af,this.updater=n||xf}_r.prototype.isReactComponent={};_r.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Df(){}Df.prototype=_r.prototype;function Gl(t,e,n){this.props=t,this.context=e,this.refs=Af,this.updater=n||xf}var Ql=Gl.prototype=new Df;Ql.constructor=Gl;Of(Ql,_r.prototype);Ql.isPureReactComponent=!0;var Ec=Array.isArray,Lf=Object.prototype.hasOwnProperty,Yl={current:null},Mf={key:!0,ref:!0,__self:!0,__source:!0};function Uf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lf.call(e,r)&&!Mf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xi,type:t,key:s,ref:o,props:i,_owner:Yl.current}}function Og(t,e){return{$$typeof:xi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jl(t){return typeof t=="object"&&t!==null&&t.$$typeof===xi}function Ag(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kc=/\/+/g;function ea(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ag(""+t.key):e.toString(36)}function ps(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xi:case _g:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ea(o,0):r,Ec(i)?(n="",t!=null&&(n=t.replace(kc,"$&/")+"/"),ps(i,e,n,"",function(u){return u})):i!=null&&(Jl(i)&&(i=Og(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(kc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ec(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ea(s,a);o+=ps(s,e,n,l,i)}else if(l=xg(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ea(s,a++),o+=ps(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gi(t,e,n){if(t==null)return t;var r=[],i=0;return ps(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Dg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ie={current:null},ms={transition:null},Lg={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:ms,ReactCurrentOwner:Yl};F.Children={map:Gi,forEach:function(t,e,n){Gi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gi(t,function(){e++}),e},toArray:function(t){return Gi(t,function(e){return e})||[]},only:function(t){if(!Jl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=_r;F.Fragment=Sg;F.Profiler=kg;F.PureComponent=Gl;F.StrictMode=Eg;F.Suspense=Pg;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lg;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Of({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Lf.call(e,l)&&!Mf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xi,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:Tg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ig,_context:t},t.Consumer=t};F.createElement=Uf;F.createFactory=function(t){var e=Uf.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:Cg,render:t}};F.isValidElement=Jl;F.lazy=function(t){return{$$typeof:Rg,_payload:{_status:-1,_result:t},_init:Dg}};F.memo=function(t,e){return{$$typeof:Ng,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=ms.transition;ms.transition={};try{t()}finally{ms.transition=e}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(t,e){return Ie.current.useCallback(t,e)};F.useContext=function(t){return Ie.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return Ie.current.useDeferredValue(t)};F.useEffect=function(t,e){return Ie.current.useEffect(t,e)};F.useId=function(){return Ie.current.useId()};F.useImperativeHandle=function(t,e,n){return Ie.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return Ie.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return Ie.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return Ie.current.useMemo(t,e)};F.useReducer=function(t,e,n){return Ie.current.useReducer(t,e,n)};F.useRef=function(t){return Ie.current.useRef(t)};F.useState=function(t){return Ie.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return Ie.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return Ie.current.useTransition()};F.version="18.2.0";(function(t){t.exports=F})(wg);const K=vg(E),Fa=gg({__proto__:null,default:K},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg=E,Ug=Symbol.for("react.element"),Fg=Symbol.for("react.fragment"),$g=Object.prototype.hasOwnProperty,bg=Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zg={key:!0,ref:!0,__self:!0,__source:!0};function Ff(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$g.call(e,r)&&!zg.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ug,type:t,key:s,ref:o,props:i,_owner:bg.current}}wo.Fragment=Fg;wo.jsx=Ff;wo.jsxs=Ff;(function(t){t.exports=wo})(yg);const Tn=ni.Fragment,g=ni.jsx,O=ni.jsxs;var $a={},ba={},Vg={get exports(){return ba},set exports(t){ba=t}},Ve={},za={},Bg={get exports(){return za},set exports(t){za=t}},$f={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,D){var M=T.length;T.push(D);e:for(;0<M;){var Z=M-1>>>1,ae=T[Z];if(0<i(ae,D))T[Z]=D,T[M]=ae,M=Z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],M=T.pop();if(M!==D){T[0]=M;e:for(var Z=0,ae=T.length,qi=ae>>>1;Z<qi;){var hn=2*(Z+1)-1,Zo=T[hn],pn=hn+1,Ki=T[pn];if(0>i(Zo,M))pn<ae&&0>i(Ki,Zo)?(T[Z]=Ki,T[pn]=M,Z=pn):(T[Z]=Zo,T[hn]=M,Z=hn);else if(pn<ae&&0>i(Ki,M))T[Z]=Ki,T[pn]=M,Z=pn;else break e}}return D}function i(T,D){var M=T.sortIndex-D.sortIndex;return M!==0?M:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,m=null,h=3,w=!1,_=!1,y=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function v(T){if(y=!1,p(T),!_)if(n(l)!==null)_=!0,Jo(k);else{var D=n(u);D!==null&&Xo(v,D.startTime-T)}}function k(T,D){_=!1,y&&(y=!1,f(N),N=-1),w=!0;var M=h;try{for(p(D),m=n(l);m!==null&&(!(m.expirationTime>D)||T&&!Qe());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,h=m.priorityLevel;var ae=Z(m.expirationTime<=D);D=t.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(l)&&r(l),p(D)}else r(l);m=n(l)}if(m!==null)var qi=!0;else{var hn=n(u);hn!==null&&Xo(v,hn.startTime-D),qi=!1}return qi}finally{m=null,h=M,w=!1}}var C=!1,P=null,N=-1,j=5,U=-1;function Qe(){return!(t.unstable_now()-U<j)}function Pr(){if(P!==null){var T=t.unstable_now();U=T;var D=!0;try{D=P(!0,T)}finally{D?Nr():(C=!1,P=null)}}else C=!1}var Nr;if(typeof c=="function")Nr=function(){c(Pr)};else if(typeof MessageChannel<"u"){var _c=new MessageChannel,mg=_c.port2;_c.port1.onmessage=Pr,Nr=function(){mg.postMessage(null)}}else Nr=function(){R(Pr,0)};function Jo(T){P=T,C||(C=!0,Nr())}function Xo(T,D){N=R(function(){T(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){_||w||(_=!0,Jo(k))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var M=h;h=D;try{return T()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=h;h=T;try{return D()}finally{h=M}},t.unstable_scheduleCallback=function(T,D,M){var Z=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Z+M:Z):M=Z,T){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,T={id:d++,callback:D,priorityLevel:T,startTime:M,expirationTime:ae,sortIndex:-1},M>Z?(T.sortIndex=M,e(u,T),n(l)===null&&T===n(u)&&(y?(f(N),N=-1):y=!0,Xo(v,M-Z))):(T.sortIndex=ae,e(l,T),_||w||(_=!0,Jo(k))),T},t.unstable_shouldYield=Qe,t.unstable_wrapCallback=function(T){var D=h;return function(){var M=h;h=D;try{return T.apply(this,arguments)}finally{h=M}}}})($f);(function(t){t.exports=$f})(Bg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf=E,be=za;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zf=new Set,ri={};function Un(t,e){lr(t,e),lr(t+"Capture",e)}function lr(t,e){for(ri[t]=e,t=0;t<e.length;t++)zf.add(e[t])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Va=Object.prototype.hasOwnProperty,jg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ic={},Tc={};function Hg(t){return Va.call(Tc,t)?!0:Va.call(Ic,t)?!1:jg.test(t)?Tc[t]=!0:(Ic[t]=!0,!1)}function Wg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qg(t,e,n,r){if(e===null||typeof e>"u"||Wg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Te(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ge[t]=new Te(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ge[e]=new Te(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ge[t]=new Te(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ge[t]=new Te(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ge[t]=new Te(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ge[t]=new Te(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ge[t]=new Te(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ge[t]=new Te(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ge[t]=new Te(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xl=/[\-:]([a-z])/g;function Zl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xl,Zl);ge[e]=new Te(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xl,Zl);ge[e]=new Te(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xl,Zl);ge[e]=new Te(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ge[t]=new Te(t,1,!1,t.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ge[t]=new Te(t,1,!1,t.toLowerCase(),null,!0,!0)});function eu(t,e,n,r){var i=ge.hasOwnProperty(e)?ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qg(e,n,i,r)&&(n=null),r||i===null?Hg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xt=bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qi=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),tu=Symbol.for("react.strict_mode"),Ba=Symbol.for("react.profiler"),Vf=Symbol.for("react.provider"),Bf=Symbol.for("react.context"),nu=Symbol.for("react.forward_ref"),ja=Symbol.for("react.suspense"),Ha=Symbol.for("react.suspense_list"),ru=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),jf=Symbol.for("react.offscreen"),Cc=Symbol.iterator;function Rr(t){return t===null||typeof t!="object"?null:(t=Cc&&t[Cc]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,ta;function Fr(t){if(ta===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ta=e&&e[1]||""}return`
`+ta+t}var na=!1;function ra(t,e){if(!t||na)return"";na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{na=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fr(t):""}function Kg(t){switch(t.tag){case 5:return Fr(t.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return t=ra(t.type,!1),t;case 11:return t=ra(t.type.render,!1),t;case 1:return t=ra(t.type,!0),t;default:return""}}function Wa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jn:return"Fragment";case Bn:return"Portal";case Ba:return"Profiler";case tu:return"StrictMode";case ja:return"Suspense";case Ha:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bf:return(t.displayName||"Context")+".Consumer";case Vf:return(t._context.displayName||"Context")+".Provider";case nu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ru:return e=t.displayName||null,e!==null?e:Wa(t.type)||"Memo";case Mt:e=t._payload,t=t._init;try{return Wa(t(e))}catch{}}return null}function Gg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wa(e);case 8:return e===tu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function on(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qg(t){var e=Hf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yi(t){t._valueTracker||(t._valueTracker=Qg(t))}function Wf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Os(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qa(t,e){var n=e.checked;return J({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=on(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qf(t,e){e=e.checked,e!=null&&eu(t,"checked",e,!1)}function Ka(t,e){qf(t,e);var n=on(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ga(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ga(t,e.type,on(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ga(t,e,n){(e!=="number"||Os(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $r=Array.isArray;function er(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+on(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return J({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if($r(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:on(n)}}function Kf(t,e){var n=on(e.value),r=on(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ya(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ji,Qf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ji=Ji||document.createElement("div"),Ji.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ji.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ii(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yg=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(t){Yg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vr[e]=Vr[t]})});function Yf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vr.hasOwnProperty(t)&&Vr[t]?(""+e).trim():e+"px"}function Jf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Jg=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ja(t,e){if(e){if(Jg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Xa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Za=null;function iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var el=null,tr=null,nr=null;function Oc(t){if(t=Di(t)){if(typeof el!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Io(e),el(t.stateNode,t.type,e))}}function Xf(t){tr?nr?nr.push(t):nr=[t]:tr=t}function Zf(){if(tr){var t=tr,e=nr;if(nr=tr=null,Oc(t),e)for(t=0;t<e.length;t++)Oc(e[t])}}function eh(t,e){return t(e)}function th(){}var ia=!1;function nh(t,e,n){if(ia)return t(e,n);ia=!0;try{return eh(t,e,n)}finally{ia=!1,(tr!==null||nr!==null)&&(th(),Zf())}}function si(t,e){var n=t.stateNode;if(n===null)return null;var r=Io(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var tl=!1;if(It)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){tl=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{tl=!1}function Xg(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Br=!1,As=null,Ds=!1,nl=null,Zg={onError:function(t){Br=!0,As=t}};function ev(t,e,n,r,i,s,o,a,l){Br=!1,As=null,Xg.apply(Zg,arguments)}function tv(t,e,n,r,i,s,o,a,l){if(ev.apply(this,arguments),Br){if(Br){var u=As;Br=!1,As=null}else throw Error(S(198));Ds||(Ds=!0,nl=u)}}function Fn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ac(t){if(Fn(t)!==t)throw Error(S(188))}function nv(t){var e=t.alternate;if(!e){if(e=Fn(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ac(i),t;if(s===r)return Ac(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function ih(t){return t=nv(t),t!==null?sh(t):null}function sh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sh(t);if(e!==null)return e;t=t.sibling}return null}var oh=be.unstable_scheduleCallback,Dc=be.unstable_cancelCallback,rv=be.unstable_shouldYield,iv=be.unstable_requestPaint,ee=be.unstable_now,sv=be.unstable_getCurrentPriorityLevel,su=be.unstable_ImmediatePriority,ah=be.unstable_UserBlockingPriority,Ls=be.unstable_NormalPriority,ov=be.unstable_LowPriority,lh=be.unstable_IdlePriority,_o=null,ct=null;function av(t){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(_o,t,void 0,(t.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:cv,lv=Math.log,uv=Math.LN2;function cv(t){return t>>>=0,t===0?32:31-(lv(t)/uv|0)|0}var Xi=64,Zi=4194304;function br(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ms(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=br(a):(s&=o,s!==0&&(r=br(s)))}else o=n&~i,o!==0?r=br(o):s!==0&&(r=br(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nt(e),i=1<<n,r|=t[n],e&=~i;return r}function dv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=dv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uh(){var t=Xi;return Xi<<=1,!(Xi&4194240)&&(Xi=64),t}function sa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nt(e),t[e]=n}function hv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ou(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function ch(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dh,au,fh,hh,ph,il=!1,es=[],Wt=null,qt=null,Kt=null,oi=new Map,ai=new Map,Ft=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lc(t,e){switch(t){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":oi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(e.pointerId)}}function Or(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Di(e),e!==null&&au(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mv(t,e,n,r,i){switch(e){case"focusin":return Wt=Or(Wt,t,e,n,r,i),!0;case"dragenter":return qt=Or(qt,t,e,n,r,i),!0;case"mouseover":return Kt=Or(Kt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return oi.set(s,Or(oi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ai.set(s,Or(ai.get(s)||null,t,e,n,r,i)),!0}return!1}function mh(t){var e=yn(t.target);if(e!==null){var n=Fn(e);if(n!==null){if(e=n.tag,e===13){if(e=rh(n),e!==null){t.blockedOn=e,ph(t.priority,function(){fh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Za=r,n.target.dispatchEvent(r),Za=null}else return e=Di(n),e!==null&&au(e),t.blockedOn=n,!1;e.shift()}return!0}function Mc(t,e,n){gs(t)&&n.delete(e)}function gv(){il=!1,Wt!==null&&gs(Wt)&&(Wt=null),qt!==null&&gs(qt)&&(qt=null),Kt!==null&&gs(Kt)&&(Kt=null),oi.forEach(Mc),ai.forEach(Mc)}function Ar(t,e){t.blockedOn===e&&(t.blockedOn=null,il||(il=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,gv)))}function li(t){function e(i){return Ar(i,t)}if(0<es.length){Ar(es[0],t);for(var n=1;n<es.length;n++){var r=es[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wt!==null&&Ar(Wt,t),qt!==null&&Ar(qt,t),Kt!==null&&Ar(Kt,t),oi.forEach(e),ai.forEach(e),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)mh(n),n.blockedOn===null&&Ft.shift()}var rr=xt.ReactCurrentBatchConfig,Us=!0;function vv(t,e,n,r){var i=V,s=rr.transition;rr.transition=null;try{V=1,lu(t,e,n,r)}finally{V=i,rr.transition=s}}function yv(t,e,n,r){var i=V,s=rr.transition;rr.transition=null;try{V=4,lu(t,e,n,r)}finally{V=i,rr.transition=s}}function lu(t,e,n,r){if(Us){var i=sl(t,e,n,r);if(i===null)ma(t,e,r,Fs,n),Lc(t,r);else if(mv(i,t,e,n,r))r.stopPropagation();else if(Lc(t,r),e&4&&-1<pv.indexOf(t)){for(;i!==null;){var s=Di(i);if(s!==null&&dh(s),s=sl(t,e,n,r),s===null&&ma(t,e,r,Fs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ma(t,e,r,null,n)}}var Fs=null;function sl(t,e,n,r){if(Fs=null,t=iu(r),t=yn(t),t!==null)if(e=Fn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fs=t,null}function gh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sv()){case su:return 1;case ah:return 4;case Ls:case ov:return 16;case lh:return 536870912;default:return 16}default:return 16}}var Bt=null,uu=null,vs=null;function vh(){if(vs)return vs;var t,e=uu,n=e.length,r,i="value"in Bt?Bt.value:Bt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return vs=i.slice(t,1<r?1-r:void 0)}function ys(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ts(){return!0}function Uc(){return!1}function Be(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ts:Uc,this.isPropagationStopped=Uc,this}return J(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),e}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cu=Be(Sr),Ai=J({},Sr,{view:0,detail:0}),wv=Be(Ai),oa,aa,Dr,So=J({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Dr&&(Dr&&t.type==="mousemove"?(oa=t.screenX-Dr.screenX,aa=t.screenY-Dr.screenY):aa=oa=0,Dr=t),oa)},movementY:function(t){return"movementY"in t?t.movementY:aa}}),Fc=Be(So),_v=J({},So,{dataTransfer:0}),Sv=Be(_v),Ev=J({},Ai,{relatedTarget:0}),la=Be(Ev),kv=J({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Be(kv),Tv=J({},Sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cv=Be(Tv),Pv=J({},Sr,{data:0}),$c=Be(Pv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xv[t])?!!e[t]:!1}function du(){return Ov}var Av=J({},Ai,{key:function(t){if(t.key){var e=Nv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dv=Be(Av),Lv=J({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=Be(Lv),Mv=J({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),Uv=Be(Mv),Fv=J({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=Be(Fv),bv=J({},So,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=Be(bv),Vv=[9,13,27,32],fu=It&&"CompositionEvent"in window,jr=null;It&&"documentMode"in document&&(jr=document.documentMode);var Bv=It&&"TextEvent"in window&&!jr,yh=It&&(!fu||jr&&8<jr&&11>=jr),zc=String.fromCharCode(32),Vc=!1;function wh(t,e){switch(t){case"keyup":return Vv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _h(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hn=!1;function jv(t,e){switch(t){case"compositionend":return _h(e);case"keypress":return e.which!==32?null:(Vc=!0,zc);case"textInput":return t=e.data,t===zc&&Vc?null:t;default:return null}}function Hv(t,e){if(Hn)return t==="compositionend"||!fu&&wh(t,e)?(t=vh(),vs=uu=Bt=null,Hn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yh&&e.locale!=="ko"?null:e.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wv[t.type]:e==="textarea"}function Sh(t,e,n,r){Xf(r),e=$s(e,"onChange"),0<e.length&&(n=new cu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hr=null,ui=null;function qv(t){Ah(t,0)}function Eo(t){var e=Kn(t);if(Wf(e))return t}function Kv(t,e){if(t==="change")return e}var Eh=!1;if(It){var ua;if(It){var ca="oninput"in document;if(!ca){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),ca=typeof jc.oninput=="function"}ua=ca}else ua=!1;Eh=ua&&(!document.documentMode||9<document.documentMode)}function Hc(){Hr&&(Hr.detachEvent("onpropertychange",kh),ui=Hr=null)}function kh(t){if(t.propertyName==="value"&&Eo(ui)){var e=[];Sh(e,ui,t,iu(t)),nh(qv,e)}}function Gv(t,e,n){t==="focusin"?(Hc(),Hr=e,ui=n,Hr.attachEvent("onpropertychange",kh)):t==="focusout"&&Hc()}function Qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eo(ui)}function Yv(t,e){if(t==="click")return Eo(e)}function Jv(t,e){if(t==="input"||t==="change")return Eo(e)}function Xv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var it=typeof Object.is=="function"?Object.is:Xv;function ci(t,e){if(it(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Va.call(e,i)||!it(t[i],e[i]))return!1}return!0}function Wc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qc(t,e){var n=Wc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wc(n)}}function Ih(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ih(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Th(){for(var t=window,e=Os();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Os(t.document)}return e}function hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zv(t){var e=Th(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ih(n.ownerDocument.documentElement,n)){if(r!==null&&hu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qc(n,s);var o=qc(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ey=It&&"documentMode"in document&&11>=document.documentMode,Wn=null,ol=null,Wr=null,al=!1;function Kc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||Wn==null||Wn!==Os(r)||(r=Wn,"selectionStart"in r&&hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&ci(Wr,r)||(Wr=r,r=$s(ol,"onSelect"),0<r.length&&(e=new cu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wn)))}function ns(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qn={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionend:ns("Transition","TransitionEnd")},da={},Ch={};It&&(Ch=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function ko(t){if(da[t])return da[t];if(!qn[t])return t;var e=qn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ch)return da[t]=e[n];return t}var Ph=ko("animationend"),Nh=ko("animationiteration"),Rh=ko("animationstart"),xh=ko("transitionend"),Oh=new Map,Gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(t,e){Oh.set(t,e),Un(e,[t])}for(var fa=0;fa<Gc.length;fa++){var ha=Gc[fa],ty=ha.toLowerCase(),ny=ha[0].toUpperCase()+ha.slice(1);ln(ty,"on"+ny)}ln(Ph,"onAnimationEnd");ln(Nh,"onAnimationIteration");ln(Rh,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(xh,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function Qc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tv(r,e,void 0,t),t.currentTarget=null}function Ah(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Qc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Qc(i,a,u),s=l}}}if(Ds)throw t=nl,Ds=!1,nl=null,t}function H(t,e){var n=e[fl];n===void 0&&(n=e[fl]=new Set);var r=t+"__bubble";n.has(r)||(Dh(e,t,2,!1),n.add(r))}function pa(t,e,n){var r=0;e&&(r|=4),Dh(n,t,r,e)}var rs="_reactListening"+Math.random().toString(36).slice(2);function di(t){if(!t[rs]){t[rs]=!0,zf.forEach(function(n){n!=="selectionchange"&&(ry.has(n)||pa(n,!1,t),pa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rs]||(e[rs]=!0,pa("selectionchange",!1,e))}}function Dh(t,e,n,r){switch(gh(e)){case 1:var i=vv;break;case 4:i=yv;break;default:i=lu}n=i.bind(null,e,n,t),i=void 0,!tl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ma(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=yn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nh(function(){var u=s,d=iu(n),m=[];e:{var h=Oh.get(t);if(h!==void 0){var w=cu,_=t;switch(t){case"keypress":if(ys(n)===0)break e;case"keydown":case"keyup":w=Dv;break;case"focusin":_="focus",w=la;break;case"focusout":_="blur",w=la;break;case"beforeblur":case"afterblur":w=la;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Uv;break;case Ph:case Nh:case Rh:w=Iv;break;case xh:w=$v;break;case"scroll":w=wv;break;case"wheel":w=zv;break;case"copy":case"cut":case"paste":w=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=bc}var y=(e&4)!==0,R=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var c=u,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=si(c,f),v!=null&&y.push(fi(c,v,p)))),R)break;c=c.return}0<y.length&&(h=new w(h,_,null,n,d),m.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",h&&n!==Za&&(_=n.relatedTarget||n.fromElement)&&(yn(_)||_[Tt]))break e;if((w||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,w?(_=n.relatedTarget||n.toElement,w=u,_=_?yn(_):null,_!==null&&(R=Fn(_),_!==R||_.tag!==5&&_.tag!==6)&&(_=null)):(w=null,_=u),w!==_)){if(y=Fc,v="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(y=bc,v="onPointerLeave",f="onPointerEnter",c="pointer"),R=w==null?h:Kn(w),p=_==null?h:Kn(_),h=new y(v,c+"leave",w,n,d),h.target=R,h.relatedTarget=p,v=null,yn(d)===u&&(y=new y(f,c+"enter",_,n,d),y.target=p,y.relatedTarget=R,v=y),R=v,w&&_)t:{for(y=w,f=_,c=0,p=y;p;p=bn(p))c++;for(p=0,v=f;v;v=bn(v))p++;for(;0<c-p;)y=bn(y),c--;for(;0<p-c;)f=bn(f),p--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=bn(y),f=bn(f)}y=null}else y=null;w!==null&&Yc(m,h,w,y,!1),_!==null&&R!==null&&Yc(m,R,_,y,!0)}}e:{if(h=u?Kn(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var k=Kv;else if(Bc(h))if(Eh)k=Jv;else{k=Qv;var C=Gv}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Yv);if(k&&(k=k(t,u))){Sh(m,k,n,d);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ga(h,"number",h.value)}switch(C=u?Kn(u):window,t){case"focusin":(Bc(C)||C.contentEditable==="true")&&(Wn=C,ol=u,Wr=null);break;case"focusout":Wr=ol=Wn=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,Kc(m,n,d);break;case"selectionchange":if(ey)break;case"keydown":case"keyup":Kc(m,n,d)}var P;if(fu)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Hn?wh(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(yh&&n.locale!=="ko"&&(Hn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Hn&&(P=vh()):(Bt=d,uu="value"in Bt?Bt.value:Bt.textContent,Hn=!0)),C=$s(u,N),0<C.length&&(N=new $c(N,t,null,n,d),m.push({event:N,listeners:C}),P?N.data=P:(P=_h(n),P!==null&&(N.data=P)))),(P=Bv?jv(t,n):Hv(t,n))&&(u=$s(u,"onBeforeInput"),0<u.length&&(d=new $c("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=P))}Ah(m,e)})}function fi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $s(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=si(t,n),s!=null&&r.unshift(fi(t,s,i)),s=si(t,e),s!=null&&r.push(fi(t,s,i))),t=t.return}return r}function bn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yc(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=si(n,s),l!=null&&o.unshift(fi(n,l,a))):i||(l=si(n,s),l!=null&&o.push(fi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iy=/\r\n?/g,sy=/\u0000|\uFFFD/g;function Jc(t){return(typeof t=="string"?t:""+t).replace(iy,`
`).replace(sy,"")}function is(t,e,n){if(e=Jc(e),Jc(t)!==e&&n)throw Error(S(425))}function bs(){}var ll=null,ul=null;function cl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dl=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,Xc=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof Xc<"u"?function(t){return Xc.resolve(null).then(t).catch(ly)}:dl;function ly(t){setTimeout(function(){throw t})}function ga(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),li(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(e)}function Gt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Er=Math.random().toString(36).slice(2),ut="__reactFiber$"+Er,hi="__reactProps$"+Er,Tt="__reactContainer$"+Er,fl="__reactEvents$"+Er,uy="__reactListeners$"+Er,cy="__reactHandles$"+Er;function yn(t){var e=t[ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tt]||n[ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zc(t);t!==null;){if(n=t[ut])return n;t=Zc(t)}return e}t=n,n=t.parentNode}return null}function Di(t){return t=t[ut]||t[Tt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Io(t){return t[hi]||null}var hl=[],Gn=-1;function un(t){return{current:t}}function W(t){0>Gn||(t.current=hl[Gn],hl[Gn]=null,Gn--)}function B(t,e){Gn++,hl[Gn]=t.current,t.current=e}var an={},_e=un(an),Re=un(!1),Cn=an;function ur(t,e){var n=t.type.contextTypes;if(!n)return an;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xe(t){return t=t.childContextTypes,t!=null}function zs(){W(Re),W(_e)}function ed(t,e,n){if(_e.current!==an)throw Error(S(168));B(_e,e),B(Re,n)}function Lh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,Gg(t)||"Unknown",i));return J({},n,r)}function Vs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||an,Cn=_e.current,B(_e,t),B(Re,Re.current),!0}function td(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Lh(t,e,Cn),r.__reactInternalMemoizedMergedChildContext=t,W(Re),W(_e),B(_e,t)):W(Re),B(Re,n)}var vt=null,To=!1,va=!1;function Mh(t){vt===null?vt=[t]:vt.push(t)}function dy(t){To=!0,Mh(t)}function cn(){if(!va&&vt!==null){va=!0;var t=0,e=V;try{var n=vt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vt=null,To=!1}catch(i){throw vt!==null&&(vt=vt.slice(t+1)),oh(su,cn),i}finally{V=e,va=!1}}return null}var Qn=[],Yn=0,Bs=null,js=0,je=[],He=0,Pn=null,wt=1,_t="";function mn(t,e){Qn[Yn++]=js,Qn[Yn++]=Bs,Bs=t,js=e}function Uh(t,e,n){je[He++]=wt,je[He++]=_t,je[He++]=Pn,Pn=t;var r=wt;t=_t;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var s=32-nt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wt=1<<32-nt(e)+i|n<<i|r,_t=s+t}else wt=1<<s|n<<i|r,_t=t}function pu(t){t.return!==null&&(mn(t,1),Uh(t,1,0))}function mu(t){for(;t===Bs;)Bs=Qn[--Yn],Qn[Yn]=null,js=Qn[--Yn],Qn[Yn]=null;for(;t===Pn;)Pn=je[--He],je[He]=null,_t=je[--He],je[He]=null,wt=je[--He],je[He]=null}var Fe=null,Ue=null,q=!1,et=null;function Fh(t,e){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fe=t,Ue=Gt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fe=t,Ue=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pn!==null?{id:wt,overflow:_t}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fe=t,Ue=null,!0):!1;default:return!1}}function pl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ml(t){if(q){var e=Ue;if(e){var n=e;if(!nd(t,e)){if(pl(t))throw Error(S(418));e=Gt(n.nextSibling);var r=Fe;e&&nd(t,e)?Fh(r,n):(t.flags=t.flags&-4097|2,q=!1,Fe=t)}}else{if(pl(t))throw Error(S(418));t.flags=t.flags&-4097|2,q=!1,Fe=t}}}function rd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fe=t}function ss(t){if(t!==Fe)return!1;if(!q)return rd(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cl(t.type,t.memoizedProps)),e&&(e=Ue)){if(pl(t))throw $h(),Error(S(418));for(;e;)Fh(t,e),e=Gt(e.nextSibling)}if(rd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ue=Gt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ue=null}}else Ue=Fe?Gt(t.stateNode.nextSibling):null;return!0}function $h(){for(var t=Ue;t;)t=Gt(t.nextSibling)}function cr(){Ue=Fe=null,q=!1}function gu(t){et===null?et=[t]:et.push(t)}var fy=xt.ReactCurrentBatchConfig;function Je(t,e){if(t&&t.defaultProps){e=J({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Hs=un(null),Ws=null,Jn=null,vu=null;function yu(){vu=Jn=Ws=null}function wu(t){var e=Hs.current;W(Hs),t._currentValue=e}function gl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ir(t,e){Ws=t,vu=Jn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ne=!0),t.firstContext=null)}function Ke(t){var e=t._currentValue;if(vu!==t)if(t={context:t,memoizedValue:e,next:null},Jn===null){if(Ws===null)throw Error(S(308));Jn=t,Ws.dependencies={lanes:0,firstContext:t}}else Jn=Jn.next=t;return e}var wn=null;function _u(t){wn===null?wn=[t]:wn.push(t)}function bh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_u(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ct(t,r)}function Ct(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ct(t,n)}return i=r.interleaved,i===null?(e.next=e,_u(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ct(t,n)}function ws(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ou(t,n)}}function id(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qs(t,e,n,r){var i=t.updateQueue;Ut=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var m=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,w=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,w=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){m=_.call(w,m,h);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(w,m,h):_,h==null)break e;m=J({},m,h);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=w,l=m):d=d.next=w,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Rn|=o,t.lanes=o,t.memoizedState=m}}function sd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Vh=new bf.Component().refs;function vl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:J({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Co={isMounted:function(t){return(t=t._reactInternals)?Fn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ke(),i=Jt(t),s=kt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qt(t,s,i),e!==null&&(rt(e,t,i,r),ws(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ke(),i=Jt(t),s=kt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qt(t,s,i),e!==null&&(rt(e,t,i,r),ws(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ke(),r=Jt(t),i=kt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qt(t,i,r),e!==null&&(rt(e,t,r,n),ws(e,t,r))}};function od(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ci(n,r)||!ci(i,s):!0}function Bh(t,e,n){var r=!1,i=an,s=e.contextType;return typeof s=="object"&&s!==null?s=Ke(s):(i=xe(e)?Cn:_e.current,r=e.contextTypes,s=(r=r!=null)?ur(t,i):an),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Co,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ad(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Co.enqueueReplaceState(e,e.state,null)}function yl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Vh,Su(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ke(s):(s=xe(e)?Cn:_e.current,i.context=ur(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Co.enqueueReplaceState(i,i.state,null),qs(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Vh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function os(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ld(t){var e=t._init;return e(t._payload)}function jh(t){function e(f,c){if(t){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Xt(f,c),f.index=0,f.sibling=null,f}function s(f,c,p){return f.index=p,t?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,v){return c===null||c.tag!==6?(c=Ia(p,f.mode,v),c.return=f,c):(c=i(c,p),c.return=f,c)}function l(f,c,p,v){var k=p.type;return k===jn?d(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Mt&&ld(k)===c.type)?(v=i(c,p.props),v.ref=Lr(f,c,p),v.return=f,v):(v=Ts(p.type,p.key,p.props,null,f.mode,v),v.ref=Lr(f,c,p),v.return=f,v)}function u(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ta(p,f.mode,v),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function d(f,c,p,v,k){return c===null||c.tag!==7?(c=kn(p,f.mode,v,k),c.return=f,c):(c=i(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ia(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qi:return p=Ts(c.type,c.key,c.props,null,f.mode,p),p.ref=Lr(f,null,c),p.return=f,p;case Bn:return c=Ta(c,f.mode,p),c.return=f,c;case Mt:var v=c._init;return m(f,v(c._payload),p)}if($r(c)||Rr(c))return c=kn(c,f.mode,p,null),c.return=f,c;os(f,c)}return null}function h(f,c,p,v){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qi:return p.key===k?l(f,c,p,v):null;case Bn:return p.key===k?u(f,c,p,v):null;case Mt:return k=p._init,h(f,c,k(p._payload),v)}if($r(p)||Rr(p))return k!==null?null:d(f,c,p,v,null);os(f,p)}return null}function w(f,c,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(c,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qi:return f=f.get(v.key===null?p:v.key)||null,l(c,f,v,k);case Bn:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,k);case Mt:var C=v._init;return w(f,c,p,C(v._payload),k)}if($r(v)||Rr(v))return f=f.get(p)||null,d(c,f,v,k,null);os(c,v)}return null}function _(f,c,p,v){for(var k=null,C=null,P=c,N=c=0,j=null;P!==null&&N<p.length;N++){P.index>N?(j=P,P=null):j=P.sibling;var U=h(f,P,p[N],v);if(U===null){P===null&&(P=j);break}t&&P&&U.alternate===null&&e(f,P),c=s(U,c,N),C===null?k=U:C.sibling=U,C=U,P=j}if(N===p.length)return n(f,P),q&&mn(f,N),k;if(P===null){for(;N<p.length;N++)P=m(f,p[N],v),P!==null&&(c=s(P,c,N),C===null?k=P:C.sibling=P,C=P);return q&&mn(f,N),k}for(P=r(f,P);N<p.length;N++)j=w(P,f,N,p[N],v),j!==null&&(t&&j.alternate!==null&&P.delete(j.key===null?N:j.key),c=s(j,c,N),C===null?k=j:C.sibling=j,C=j);return t&&P.forEach(function(Qe){return e(f,Qe)}),q&&mn(f,N),k}function y(f,c,p,v){var k=Rr(p);if(typeof k!="function")throw Error(S(150));if(p=k.call(p),p==null)throw Error(S(151));for(var C=k=null,P=c,N=c=0,j=null,U=p.next();P!==null&&!U.done;N++,U=p.next()){P.index>N?(j=P,P=null):j=P.sibling;var Qe=h(f,P,U.value,v);if(Qe===null){P===null&&(P=j);break}t&&P&&Qe.alternate===null&&e(f,P),c=s(Qe,c,N),C===null?k=Qe:C.sibling=Qe,C=Qe,P=j}if(U.done)return n(f,P),q&&mn(f,N),k;if(P===null){for(;!U.done;N++,U=p.next())U=m(f,U.value,v),U!==null&&(c=s(U,c,N),C===null?k=U:C.sibling=U,C=U);return q&&mn(f,N),k}for(P=r(f,P);!U.done;N++,U=p.next())U=w(P,f,N,U.value,v),U!==null&&(t&&U.alternate!==null&&P.delete(U.key===null?N:U.key),c=s(U,c,N),C===null?k=U:C.sibling=U,C=U);return t&&P.forEach(function(Pr){return e(f,Pr)}),q&&mn(f,N),k}function R(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qi:e:{for(var k=p.key,C=c;C!==null;){if(C.key===k){if(k=p.type,k===jn){if(C.tag===7){n(f,C.sibling),c=i(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Mt&&ld(k)===C.type){n(f,C.sibling),c=i(C,p.props),c.ref=Lr(f,C,p),c.return=f,f=c;break e}n(f,C);break}else e(f,C);C=C.sibling}p.type===jn?(c=kn(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Ts(p.type,p.key,p.props,null,f.mode,v),v.ref=Lr(f,c,p),v.return=f,f=v)}return o(f);case Bn:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=Ta(p,f.mode,v),c.return=f,f=c}return o(f);case Mt:return C=p._init,R(f,c,C(p._payload),v)}if($r(p))return _(f,c,p,v);if(Rr(p))return y(f,c,p,v);os(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=Ia(p,f.mode,v),c.return=f,f=c),o(f)):n(f,c)}return R}var dr=jh(!0),Hh=jh(!1),Li={},dt=un(Li),pi=un(Li),mi=un(Li);function _n(t){if(t===Li)throw Error(S(174));return t}function Eu(t,e){switch(B(mi,e),B(pi,t),B(dt,Li),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ya(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ya(e,t)}W(dt),B(dt,e)}function fr(){W(dt),W(pi),W(mi)}function Wh(t){_n(mi.current);var e=_n(dt.current),n=Ya(e,t.type);e!==n&&(B(pi,t),B(dt,n))}function ku(t){pi.current===t&&(W(dt),W(pi))}var G=un(0);function Ks(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ya=[];function Iu(){for(var t=0;t<ya.length;t++)ya[t]._workInProgressVersionPrimary=null;ya.length=0}var _s=xt.ReactCurrentDispatcher,wa=xt.ReactCurrentBatchConfig,Nn=0,Y=null,re=null,ue=null,Gs=!1,qr=!1,gi=0,hy=0;function ve(){throw Error(S(321))}function Tu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!it(t[n],e[n]))return!1;return!0}function Cu(t,e,n,r,i,s){if(Nn=s,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_s.current=t===null||t.memoizedState===null?vy:yy,t=n(r,i),qr){s=0;do{if(qr=!1,gi=0,25<=s)throw Error(S(301));s+=1,ue=re=null,e.updateQueue=null,_s.current=wy,t=n(r,i)}while(qr)}if(_s.current=Qs,e=re!==null&&re.next!==null,Nn=0,ue=re=Y=null,Gs=!1,e)throw Error(S(300));return t}function Pu(){var t=gi!==0;return gi=0,t}function at(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Y.memoizedState=ue=t:ue=ue.next=t,ue}function Ge(){if(re===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=re.next;var e=ue===null?Y.memoizedState:ue.next;if(e!==null)ue=e,re=t;else{if(t===null)throw Error(S(310));re=t,t={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ue===null?Y.memoizedState=ue=t:ue=ue.next=t}return ue}function vi(t,e){return typeof e=="function"?e(t):e}function _a(t){var e=Ge(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Nn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,o=r):l=l.next=m,Y.lanes|=d,Rn|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,it(r,e.memoizedState)||(Ne=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Y.lanes|=s,Rn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sa(t){var e=Ge(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);it(s,e.memoizedState)||(Ne=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qh(){}function Kh(t,e){var n=Y,r=Ge(),i=e(),s=!it(r.memoizedState,i);if(s&&(r.memoizedState=i,Ne=!0),r=r.queue,Nu(Yh.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,yi(9,Qh.bind(null,n,r,i,e),void 0,null),ce===null)throw Error(S(349));Nn&30||Gh(n,e,i)}return i}function Gh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qh(t,e,n,r){e.value=n,e.getSnapshot=r,Jh(e)&&Xh(t)}function Yh(t,e,n){return n(function(){Jh(e)&&Xh(t)})}function Jh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!it(t,n)}catch{return!0}}function Xh(t){var e=Ct(t,1);e!==null&&rt(e,t,1,-1)}function ud(t){var e=at();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:t},e.queue=t,t=t.dispatch=gy.bind(null,Y,t),[e.memoizedState,t]}function yi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zh(){return Ge().memoizedState}function Ss(t,e,n,r){var i=at();Y.flags|=t,i.memoizedState=yi(1|e,n,void 0,r===void 0?null:r)}function Po(t,e,n,r){var i=Ge();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&Tu(r,o.deps)){i.memoizedState=yi(e,n,s,r);return}}Y.flags|=t,i.memoizedState=yi(1|e,n,s,r)}function cd(t,e){return Ss(8390656,8,t,e)}function Nu(t,e){return Po(2048,8,t,e)}function ep(t,e){return Po(4,2,t,e)}function tp(t,e){return Po(4,4,t,e)}function np(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rp(t,e,n){return n=n!=null?n.concat([t]):null,Po(4,4,np.bind(null,e,t),n)}function Ru(){}function ip(t,e){var n=Ge();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sp(t,e){var n=Ge();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function op(t,e,n){return Nn&21?(it(n,e)||(n=uh(),Y.lanes|=n,Rn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ne=!0),t.memoizedState=n)}function py(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=wa.transition;wa.transition={};try{t(!1),e()}finally{V=n,wa.transition=r}}function ap(){return Ge().memoizedState}function my(t,e,n){var r=Jt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lp(t))up(e,n);else if(n=bh(t,e,n,r),n!==null){var i=ke();rt(n,t,r,i),cp(n,e,r)}}function gy(t,e,n){var r=Jt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lp(t))up(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,it(a,o)){var l=e.interleaved;l===null?(i.next=i,_u(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=bh(t,e,i,r),n!==null&&(i=ke(),rt(n,t,r,i),cp(n,e,r))}}function lp(t){var e=t.alternate;return t===Y||e!==null&&e===Y}function up(t,e){qr=Gs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ou(t,n)}}var Qs={readContext:Ke,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},vy={readContext:Ke,useCallback:function(t,e){return at().memoizedState=[t,e===void 0?null:e],t},useContext:Ke,useEffect:cd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ss(4194308,4,np.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ss(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ss(4,2,t,e)},useMemo:function(t,e){var n=at();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=at();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=my.bind(null,Y,t),[r.memoizedState,t]},useRef:function(t){var e=at();return t={current:t},e.memoizedState=t},useState:ud,useDebugValue:Ru,useDeferredValue:function(t){return at().memoizedState=t},useTransition:function(){var t=ud(!1),e=t[0];return t=py.bind(null,t[1]),at().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Y,i=at();if(q){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ce===null)throw Error(S(349));Nn&30||Gh(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cd(Yh.bind(null,r,s,t),[t]),r.flags|=2048,yi(9,Qh.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=at(),e=ce.identifierPrefix;if(q){var n=_t,r=wt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=gi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yy={readContext:Ke,useCallback:ip,useContext:Ke,useEffect:Nu,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:_a,useRef:Zh,useState:function(){return _a(vi)},useDebugValue:Ru,useDeferredValue:function(t){var e=Ge();return op(e,re.memoizedState,t)},useTransition:function(){var t=_a(vi)[0],e=Ge().memoizedState;return[t,e]},useMutableSource:qh,useSyncExternalStore:Kh,useId:ap,unstable_isNewReconciler:!1},wy={readContext:Ke,useCallback:ip,useContext:Ke,useEffect:Nu,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:Sa,useRef:Zh,useState:function(){return Sa(vi)},useDebugValue:Ru,useDeferredValue:function(t){var e=Ge();return re===null?e.memoizedState=t:op(e,re.memoizedState,t)},useTransition:function(){var t=Sa(vi)[0],e=Ge().memoizedState;return[t,e]},useMutableSource:qh,useSyncExternalStore:Kh,useId:ap,unstable_isNewReconciler:!1};function hr(t,e){try{var n="",r=e;do n+=Kg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ea(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _y=typeof WeakMap=="function"?WeakMap:Map;function dp(t,e,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Js||(Js=!0,Rl=r),wl(t,e)},n}function fp(t,e,n){n=kt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wl(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wl(t,e),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _y;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ly.bind(null,t,e,n),e.then(t,t))}function fd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kt(-1,1),e.tag=2,Qt(n,e,1))),n.lanes|=1),t)}var Sy=xt.ReactCurrentOwner,Ne=!1;function Ee(t,e,n,r){e.child=t===null?Hh(e,null,n,r):dr(e,t.child,n,r)}function pd(t,e,n,r,i){n=n.render;var s=e.ref;return ir(e,i),r=Cu(t,e,n,r,s,i),n=Pu(),t!==null&&!Ne?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pt(t,e,i)):(q&&n&&pu(e),e.flags|=1,Ee(t,e,r,i),e.child)}function md(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hp(t,e,s,r,i)):(t=Ts(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ci,n(o,r)&&t.ref===e.ref)return Pt(t,e,i)}return e.flags|=1,t=Xt(s,r),t.ref=e.ref,t.return=e,e.child=t}function hp(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ci(s,r)&&t.ref===e.ref)if(Ne=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ne=!0);else return e.lanes=t.lanes,Pt(t,e,i)}return _l(t,e,n,r,i)}function pp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Zn,Le),Le|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,B(Zn,Le),Le|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,B(Zn,Le),Le|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,B(Zn,Le),Le|=r;return Ee(t,e,i,n),e.child}function mp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _l(t,e,n,r,i){var s=xe(n)?Cn:_e.current;return s=ur(e,s),ir(e,i),n=Cu(t,e,n,r,s,i),r=Pu(),t!==null&&!Ne?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pt(t,e,i)):(q&&r&&pu(e),e.flags|=1,Ee(t,e,n,i),e.child)}function gd(t,e,n,r,i){if(xe(n)){var s=!0;Vs(e)}else s=!1;if(ir(e,i),e.stateNode===null)Es(t,e),Bh(e,n,r),yl(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=xe(n)?Cn:_e.current,u=ur(e,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ad(e,o,r,u),Ut=!1;var h=e.memoizedState;o.state=h,qs(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Re.current||Ut?(typeof d=="function"&&(vl(e,n,d,r),l=e.memoizedState),(a=Ut||od(e,n,a,r,h,l,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zh(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Je(e.type,a),o.props=u,m=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ke(l):(l=xe(n)?Cn:_e.current,l=ur(e,l));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||h!==l)&&ad(e,o,r,l),Ut=!1,h=e.memoizedState,o.state=h,qs(e,r,o,i);var _=e.memoizedState;a!==m||h!==_||Re.current||Ut?(typeof w=="function"&&(vl(e,n,w,r),_=e.memoizedState),(u=Ut||od(e,n,u,r,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Sl(t,e,n,r,s,i)}function Sl(t,e,n,r,i,s){mp(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&td(e,n,!1),Pt(t,e,s);r=e.stateNode,Sy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=dr(e,t.child,null,s),e.child=dr(e,null,a,s)):Ee(t,e,a,s),e.memoizedState=r.state,i&&td(e,n,!0),e.child}function gp(t){var e=t.stateNode;e.pendingContext?ed(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ed(t,e.context,!1),Eu(t,e.containerInfo)}function vd(t,e,n,r,i){return cr(),gu(i),e.flags|=256,Ee(t,e,n,r),e.child}var El={dehydrated:null,treeContext:null,retryLane:0};function kl(t){return{baseLanes:t,cachePool:null,transitions:null}}function vp(t,e,n){var r=e.pendingProps,i=G.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),B(G,i&1),t===null)return ml(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xo(o,r,0,null),t=kn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kl(n),e.memoizedState=El,t):xu(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ey(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Xt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Xt(a,s):(s=kn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=El,r}return s=t.child,t=s.sibling,r=Xt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xu(t,e){return e=xo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function as(t,e,n,r){return r!==null&&gu(r),dr(e,t.child,null,n),t=xu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ey(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ea(Error(S(422))),as(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xo({mode:"visible",children:r.children},i,0,null),s=kn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&dr(e,t.child,null,o),e.child.memoizedState=kl(o),e.memoizedState=El,s);if(!(e.mode&1))return as(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Ea(s,r,void 0),as(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ne||a){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ct(t,i),rt(r,t,i,-1))}return Uu(),r=Ea(Error(S(421))),as(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=My.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ue=Gt(i.nextSibling),Fe=e,q=!0,et=null,t!==null&&(je[He++]=wt,je[He++]=_t,je[He++]=Pn,wt=t.id,_t=t.overflow,Pn=e),e=xu(e,r.children),e.flags|=4096,e)}function yd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gl(t.return,e,n)}function ka(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yp(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ee(t,e,r.children,n),r=G.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yd(t,n,e);else if(t.tag===19)yd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(B(G,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ks(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ka(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ks(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ka(e,!0,n,null,s);break;case"together":ka(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Es(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Xt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ky(t,e,n){switch(e.tag){case 3:gp(e),cr();break;case 5:Wh(e);break;case 1:xe(e.type)&&Vs(e);break;case 4:Eu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;B(Hs,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),e.flags|=128,null):n&e.child.childLanes?vp(t,e,n):(B(G,G.current&1),t=Pt(t,e,n),t!==null?t.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return yp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return e.lanes=0,pp(t,e,n)}return Pt(t,e,n)}var wp,Il,_p,Sp;wp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Il=function(){};_p=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_n(dt.current);var s=null;switch(n){case"input":i=qa(t,i),r=qa(t,r),s=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),s=[];break;case"textarea":i=Qa(t,i),r=Qa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bs)}Ja(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ri.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ri.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Sp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mr(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Iy(t,e,n){var r=e.pendingProps;switch(mu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(e),null;case 1:return xe(e.type)&&zs(),ye(e),null;case 3:return r=e.stateNode,fr(),W(Re),W(_e),Iu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ss(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,et!==null&&(Al(et),et=null))),Il(t,e),ye(e),null;case 5:ku(e);var i=_n(mi.current);if(n=e.type,t!==null&&e.stateNode!=null)_p(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return ye(e),null}if(t=_n(dt.current),ss(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ut]=e,r[hi]=s,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<zr.length;i++)H(zr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Pc(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Rc(r,s),H("invalid",r)}Ja(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&is(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&is(r.textContent,a,t),i=["children",""+a]):ri.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Yi(r),Nc(r,s,!0);break;case"textarea":Yi(r),xc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ut]=e,t[hi]=r,wp(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xa(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<zr.length;i++)H(zr[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":Pc(t,r),i=qa(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),H("invalid",t);break;case"textarea":Rc(t,r),i=Qa(t,r),H("invalid",t);break;default:i=r}Ja(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jf(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qf(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ii(t,l):typeof l=="number"&&ii(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ri.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",t):l!=null&&eu(t,s,l,o))}switch(n){case"input":Yi(t),Nc(t,r,!1);break;case"textarea":Yi(t),xc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+on(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?er(t,!!r.multiple,s,!1):r.defaultValue!=null&&er(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ye(e),null;case 6:if(t&&e.stateNode!=null)Sp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=_n(mi.current),_n(dt.current),ss(e)){if(r=e.stateNode,n=e.memoizedProps,r[ut]=e,(s=r.nodeValue!==n)&&(t=Fe,t!==null))switch(t.tag){case 3:is(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&is(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=e,e.stateNode=r}return ye(e),null;case 13:if(W(G),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Ue!==null&&e.mode&1&&!(e.flags&128))$h(),cr(),e.flags|=98560,s=!1;else if(s=ss(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[ut]=e}else cr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ye(e),s=!1}else et!==null&&(Al(et),et=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||G.current&1?oe===0&&(oe=3):Uu())),e.updateQueue!==null&&(e.flags|=4),ye(e),null);case 4:return fr(),Il(t,e),t===null&&di(e.stateNode.containerInfo),ye(e),null;case 10:return wu(e.type._context),ye(e),null;case 17:return xe(e.type)&&zs(),ye(e),null;case 19:if(W(G),s=e.memoizedState,s===null)return ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Mr(s,!1);else{if(oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ks(t),o!==null){for(e.flags|=128,Mr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return B(G,G.current&1|2),e.child}t=t.sibling}s.tail!==null&&ee()>pr&&(e.flags|=128,r=!0,Mr(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ks(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return ye(e),null}else 2*ee()-s.renderingStartTime>pr&&n!==1073741824&&(e.flags|=128,r=!0,Mr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ee(),e.sibling=null,n=G.current,B(G,r?n&1|2:n&1),e):(ye(e),null);case 22:case 23:return Mu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Le&1073741824&&(ye(e),e.subtreeFlags&6&&(e.flags|=8192)):ye(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function Ty(t,e){switch(mu(e),e.tag){case 1:return xe(e.type)&&zs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fr(),W(Re),W(_e),Iu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ku(e),null;case 13:if(W(G),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));cr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(G),null;case 4:return fr(),null;case 10:return wu(e.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var ls=!1,we=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,I=null;function Xn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(t,e,r)}else n.current=null}function Tl(t,e,n){try{n()}catch(r){X(t,e,r)}}var wd=!1;function Py(t,e){if(ll=Us,t=Th(),hu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,m=t,h=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ul={focusedElem:t,selectionRange:n},Us=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,R=_.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Je(e.type,y),R);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){X(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return _=wd,wd=!1,_}function Kr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tl(e,n,s)}i=i.next}while(i!==r)}}function No(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Cl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ep(t){var e=t.alternate;e!==null&&(t.alternate=null,Ep(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ut],delete e[hi],delete e[fl],delete e[uy],delete e[cy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kp(t){return t.tag===5||t.tag===3||t.tag===4}function _d(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bs));else if(r!==4&&(t=t.child,t!==null))for(Pl(t,e,n),t=t.sibling;t!==null;)Pl(t,e,n),t=t.sibling}function Nl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nl(t,e,n),t=t.sibling;t!==null;)Nl(t,e,n),t=t.sibling}var de=null,Xe=!1;function Dt(t,e,n){for(n=n.child;n!==null;)Ip(t,e,n),n=n.sibling}function Ip(t,e,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:we||Xn(n,e);case 6:var r=de,i=Xe;de=null,Dt(t,e,n),de=r,Xe=i,de!==null&&(Xe?(t=de,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Xe?(t=de,n=n.stateNode,t.nodeType===8?ga(t.parentNode,n):t.nodeType===1&&ga(t,n),li(t)):ga(de,n.stateNode));break;case 4:r=de,i=Xe,de=n.stateNode.containerInfo,Xe=!0,Dt(t,e,n),de=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tl(n,e,o),i=i.next}while(i!==r)}Dt(t,e,n);break;case 1:if(!we&&(Xn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,e,a)}Dt(t,e,n);break;case 21:Dt(t,e,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Dt(t,e,n),we=r):Dt(t,e,n);break;default:Dt(t,e,n)}}function Sd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Cy),e.forEach(function(r){var i=Uy.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ye(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Xe=!1;break e;case 3:de=a.stateNode.containerInfo,Xe=!0;break e;case 4:de=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(de===null)throw Error(S(160));Ip(s,o,i),de=null,Xe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tp(e,t),e=e.sibling}function Tp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ye(e,t),ot(t),r&4){try{Kr(3,t,t.return),No(3,t)}catch(y){X(t,t.return,y)}try{Kr(5,t,t.return)}catch(y){X(t,t.return,y)}}break;case 1:Ye(e,t),ot(t),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(Ye(e,t),ot(t),r&512&&n!==null&&Xn(n,n.return),t.flags&32){var i=t.stateNode;try{ii(i,"")}catch(y){X(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qf(i,s),Xa(a,o);var u=Xa(a,s);for(o=0;o<l.length;o+=2){var d=l[o],m=l[o+1];d==="style"?Jf(i,m):d==="dangerouslySetInnerHTML"?Qf(i,m):d==="children"?ii(i,m):eu(i,d,m,u)}switch(a){case"input":Ka(i,s);break;case"textarea":Kf(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?er(i,!!s.multiple,w,!1):h!==!!s.multiple&&(s.defaultValue!=null?er(i,!!s.multiple,s.defaultValue,!0):er(i,!!s.multiple,s.multiple?[]:"",!1))}i[hi]=s}catch(y){X(t,t.return,y)}}break;case 6:if(Ye(e,t),ot(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){X(t,t.return,y)}}break;case 3:if(Ye(e,t),ot(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(e.containerInfo)}catch(y){X(t,t.return,y)}break;case 4:Ye(e,t),ot(t);break;case 13:Ye(e,t),ot(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Du=ee())),r&4&&Sd(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(we=(u=we)||d,Ye(e,t),we=u):Ye(e,t),ot(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(I=t,d=t.child;d!==null;){for(m=I=d;I!==null;){switch(h=I,w=h.child,h.tag){case 0:case 11:case 14:case 15:Kr(4,h,h.return);break;case 1:Xn(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){X(r,n,y)}}break;case 5:Xn(h,h.return);break;case 22:if(h.memoizedState!==null){kd(m);continue}}w!==null?(w.return=h,I=w):kd(m)}d=d.sibling}e:for(d=null,m=t;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yf("display",o))}catch(y){X(t,t.return,y)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(y){X(t,t.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ye(e,t),ot(t),r&4&&Sd(t);break;case 21:break;default:Ye(e,t),ot(t)}}function ot(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ii(i,""),r.flags&=-33);var s=_d(t);Nl(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=_d(t);Pl(t,a,o);break;default:throw Error(S(161))}}catch(l){X(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ny(t,e,n){I=t,Cp(t)}function Cp(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ls;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||we;a=ls;var u=we;if(ls=o,(we=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Id(i):l!==null?(l.return=o,I=l):Id(i);for(;s!==null;)I=s,Cp(s),s=s.sibling;I=i,ls=a,we=u}Ed(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):Ed(t)}}function Ed(t){for(;I!==null;){var e=I;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:we||No(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Je(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&li(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}we||e.flags&512&&Cl(e)}catch(h){X(e,e.return,h)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function kd(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Id(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{No(4,e)}catch(l){X(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){X(e,i,l)}}var s=e.return;try{Cl(e)}catch(l){X(e,s,l)}break;case 5:var o=e.return;try{Cl(e)}catch(l){X(e,o,l)}}}catch(l){X(e,e.return,l)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var Ry=Math.ceil,Ys=xt.ReactCurrentDispatcher,Ou=xt.ReactCurrentOwner,qe=xt.ReactCurrentBatchConfig,b=0,ce=null,te=null,me=0,Le=0,Zn=un(0),oe=0,wi=null,Rn=0,Ro=0,Au=0,Gr=null,Pe=null,Du=0,pr=1/0,gt=null,Js=!1,Rl=null,Yt=null,us=!1,jt=null,Xs=0,Qr=0,xl=null,ks=-1,Is=0;function ke(){return b&6?ee():ks!==-1?ks:ks=ee()}function Jt(t){return t.mode&1?b&2&&me!==0?me&-me:fy.transition!==null?(Is===0&&(Is=uh()),Is):(t=V,t!==0||(t=window.event,t=t===void 0?16:gh(t.type)),t):1}function rt(t,e,n,r){if(50<Qr)throw Qr=0,xl=null,Error(S(185));Oi(t,n,r),(!(b&2)||t!==ce)&&(t===ce&&(!(b&2)&&(Ro|=n),oe===4&&$t(t,me)),Oe(t,r),n===1&&b===0&&!(e.mode&1)&&(pr=ee()+500,To&&cn()))}function Oe(t,e){var n=t.callbackNode;fv(t,e);var r=Ms(t,t===ce?me:0);if(r===0)n!==null&&Dc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dc(n),e===1)t.tag===0?dy(Td.bind(null,t)):Mh(Td.bind(null,t)),ay(function(){!(b&6)&&cn()}),n=null;else{switch(ch(r)){case 1:n=su;break;case 4:n=ah;break;case 16:n=Ls;break;case 536870912:n=lh;break;default:n=Ls}n=Lp(n,Pp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pp(t,e){if(ks=-1,Is=0,b&6)throw Error(S(327));var n=t.callbackNode;if(sr()&&t.callbackNode!==n)return null;var r=Ms(t,t===ce?me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zs(t,r);else{e=r;var i=b;b|=2;var s=Rp();(ce!==t||me!==e)&&(gt=null,pr=ee()+500,En(t,e));do try{Ay();break}catch(a){Np(t,a)}while(1);yu(),Ys.current=s,b=i,te!==null?e=0:(ce=null,me=0,e=oe)}if(e!==0){if(e===2&&(i=rl(t),i!==0&&(r=i,e=Ol(t,i))),e===1)throw n=wi,En(t,0),$t(t,r),Oe(t,ee()),n;if(e===6)$t(t,r);else{if(i=t.current.alternate,!(r&30)&&!xy(i)&&(e=Zs(t,r),e===2&&(s=rl(t),s!==0&&(r=s,e=Ol(t,s))),e===1))throw n=wi,En(t,0),$t(t,r),Oe(t,ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:gn(t,Pe,gt);break;case 3:if($t(t,r),(r&130023424)===r&&(e=Du+500-ee(),10<e)){if(Ms(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dl(gn.bind(null,t,Pe,gt),e);break}gn(t,Pe,gt);break;case 4:if($t(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ry(r/1960))-r,10<r){t.timeoutHandle=dl(gn.bind(null,t,Pe,gt),r);break}gn(t,Pe,gt);break;case 5:gn(t,Pe,gt);break;default:throw Error(S(329))}}}return Oe(t,ee()),t.callbackNode===n?Pp.bind(null,t):null}function Ol(t,e){var n=Gr;return t.current.memoizedState.isDehydrated&&(En(t,e).flags|=256),t=Zs(t,e),t!==2&&(e=Pe,Pe=n,e!==null&&Al(e)),t}function Al(t){Pe===null?Pe=t:Pe.push.apply(Pe,t)}function xy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!it(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $t(t,e){for(e&=~Au,e&=~Ro,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nt(e),r=1<<n;t[n]=-1,e&=~r}}function Td(t){if(b&6)throw Error(S(327));sr();var e=Ms(t,0);if(!(e&1))return Oe(t,ee()),null;var n=Zs(t,e);if(t.tag!==0&&n===2){var r=rl(t);r!==0&&(e=r,n=Ol(t,r))}if(n===1)throw n=wi,En(t,0),$t(t,e),Oe(t,ee()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gn(t,Pe,gt),Oe(t,ee()),null}function Lu(t,e){var n=b;b|=1;try{return t(e)}finally{b=n,b===0&&(pr=ee()+500,To&&cn())}}function xn(t){jt!==null&&jt.tag===0&&!(b&6)&&sr();var e=b;b|=1;var n=qe.transition,r=V;try{if(qe.transition=null,V=1,t)return t()}finally{V=r,qe.transition=n,b=e,!(b&6)&&cn()}}function Mu(){Le=Zn.current,W(Zn)}function En(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oy(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(mu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zs();break;case 3:fr(),W(Re),W(_e),Iu();break;case 5:ku(r);break;case 4:fr();break;case 13:W(G);break;case 19:W(G);break;case 10:wu(r.type._context);break;case 22:case 23:Mu()}n=n.return}if(ce=t,te=t=Xt(t.current,null),me=Le=e,oe=0,wi=null,Au=Ro=Rn=0,Pe=Gr=null,wn!==null){for(e=0;e<wn.length;e++)if(n=wn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wn=null}return t}function Np(t,e){do{var n=te;try{if(yu(),_s.current=Qs,Gs){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gs=!1}if(Nn=0,ue=re=Y=null,qr=!1,gi=0,Ou.current=null,n===null||n.return===null){oe=1,wi=e,te=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=fd(o);if(w!==null){w.flags&=-257,hd(w,o,a,s,e),w.mode&1&&dd(s,u,e),e=w,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){dd(s,u,e),Uu();break e}l=Error(S(426))}}else if(q&&a.mode&1){var R=fd(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),hd(R,o,a,s,e),gu(hr(l,a));break e}}s=l=hr(l,a),oe!==4&&(oe=2),Gr===null?Gr=[s]:Gr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=dp(s,l,e);id(s,f);break e;case 1:a=l;var c=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Yt===null||!Yt.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=fp(s,a,e);id(s,v);break e}}s=s.return}while(s!==null)}Op(n)}catch(k){e=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Rp(){var t=Ys.current;return Ys.current=Qs,t===null?Qs:t}function Uu(){(oe===0||oe===3||oe===2)&&(oe=4),ce===null||!(Rn&268435455)&&!(Ro&268435455)||$t(ce,me)}function Zs(t,e){var n=b;b|=2;var r=Rp();(ce!==t||me!==e)&&(gt=null,En(t,e));do try{Oy();break}catch(i){Np(t,i)}while(1);if(yu(),b=n,Ys.current=r,te!==null)throw Error(S(261));return ce=null,me=0,oe}function Oy(){for(;te!==null;)xp(te)}function Ay(){for(;te!==null&&!rv();)xp(te)}function xp(t){var e=Dp(t.alternate,t,Le);t.memoizedProps=t.pendingProps,e===null?Op(t):te=e,Ou.current=null}function Op(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ty(n,e),n!==null){n.flags&=32767,te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{oe=6,te=null;return}}else if(n=Iy(n,e,Le),n!==null){te=n;return}if(e=e.sibling,e!==null){te=e;return}te=e=t}while(e!==null);oe===0&&(oe=5)}function gn(t,e,n){var r=V,i=qe.transition;try{qe.transition=null,V=1,Dy(t,e,n,r)}finally{qe.transition=i,V=r}return null}function Dy(t,e,n,r){do sr();while(jt!==null);if(b&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hv(t,s),t===ce&&(te=ce=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||us||(us=!0,Lp(Ls,function(){return sr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qe.transition,qe.transition=null;var o=V;V=1;var a=b;b|=4,Ou.current=null,Py(t,n),Tp(n,t),Zv(ul),Us=!!ll,ul=ll=null,t.current=n,Ny(n),iv(),b=a,V=o,qe.transition=s}else t.current=n;if(us&&(us=!1,jt=t,Xs=i),s=t.pendingLanes,s===0&&(Yt=null),av(n.stateNode),Oe(t,ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Js)throw Js=!1,t=Rl,Rl=null,t;return Xs&1&&t.tag!==0&&sr(),s=t.pendingLanes,s&1?t===xl?Qr++:(Qr=0,xl=t):Qr=0,cn(),null}function sr(){if(jt!==null){var t=ch(Xs),e=qe.transition,n=V;try{if(qe.transition=null,V=16>t?16:t,jt===null)var r=!1;else{if(t=jt,jt=null,Xs=0,b&6)throw Error(S(331));var i=b;for(b|=4,I=t.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Kr(8,d,s)}var m=d.child;if(m!==null)m.return=d,I=m;else for(;I!==null;){d=I;var h=d.sibling,w=d.return;if(Ep(d),d===u){I=null;break}if(h!==null){h.return=w,I=h;break}I=w}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var R=y.sibling;y.sibling=null,y=R}while(y!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,I=f;break e}I=s.return}}var c=t.current;for(I=c;I!==null;){o=I;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,I=p;else e:for(o=c;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:No(9,a)}}catch(k){X(a,a.return,k)}if(a===o){I=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}if(b=i,cn(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(_o,t)}catch{}r=!0}return r}finally{V=n,qe.transition=e}}return!1}function Cd(t,e,n){e=hr(n,e),e=dp(t,e,1),t=Qt(t,e,1),e=ke(),t!==null&&(Oi(t,1,e),Oe(t,e))}function X(t,e,n){if(t.tag===3)Cd(t,t,n);else for(;e!==null;){if(e.tag===3){Cd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){t=hr(n,t),t=fp(e,t,1),e=Qt(e,t,1),t=ke(),e!==null&&(Oi(e,1,t),Oe(e,t));break}}e=e.return}}function Ly(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ke(),t.pingedLanes|=t.suspendedLanes&n,ce===t&&(me&n)===n&&(oe===4||oe===3&&(me&130023424)===me&&500>ee()-Du?En(t,0):Au|=n),Oe(t,e)}function Ap(t,e){e===0&&(t.mode&1?(e=Zi,Zi<<=1,!(Zi&130023424)&&(Zi=4194304)):e=1);var n=ke();t=Ct(t,e),t!==null&&(Oi(t,e,n),Oe(t,n))}function My(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ap(t,n)}function Uy(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Ap(t,n)}var Dp;Dp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Re.current)Ne=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ne=!1,ky(t,e,n);Ne=!!(t.flags&131072)}else Ne=!1,q&&e.flags&1048576&&Uh(e,js,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Es(t,e),t=e.pendingProps;var i=ur(e,_e.current);ir(e,n),i=Cu(null,e,r,t,i,n);var s=Pu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xe(r)?(s=!0,Vs(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Su(e),i.updater=Co,e.stateNode=i,i._reactInternals=e,yl(e,r,t,n),e=Sl(null,e,r,!0,s,n)):(e.tag=0,q&&s&&pu(e),Ee(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Es(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$y(r),t=Je(r,t),i){case 0:e=_l(null,e,r,t,n);break e;case 1:e=gd(null,e,r,t,n);break e;case 11:e=pd(null,e,r,t,n);break e;case 14:e=md(null,e,r,Je(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),_l(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),gd(t,e,r,i,n);case 3:e:{if(gp(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zh(t,e),qs(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=hr(Error(S(423)),e),e=vd(t,e,r,n,i);break e}else if(r!==i){i=hr(Error(S(424)),e),e=vd(t,e,r,n,i);break e}else for(Ue=Gt(e.stateNode.containerInfo.firstChild),Fe=e,q=!0,et=null,n=Hh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cr(),r===i){e=Pt(t,e,n);break e}Ee(t,e,r,n)}e=e.child}return e;case 5:return Wh(e),t===null&&ml(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,cl(r,i)?o=null:s!==null&&cl(r,s)&&(e.flags|=32),mp(t,e),Ee(t,e,o,n),e.child;case 6:return t===null&&ml(e),null;case 13:return vp(t,e,n);case 4:return Eu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=dr(e,null,r,n):Ee(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),pd(t,e,r,i,n);case 7:return Ee(t,e,e.pendingProps,n),e.child;case 8:return Ee(t,e,e.pendingProps.children,n),e.child;case 12:return Ee(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,B(Hs,r._currentValue),r._currentValue=o,s!==null)if(it(s.value,o)){if(s.children===i.children&&!Re.current){e=Pt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=kt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gl(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gl(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ee(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ir(e,n),i=Ke(i),r=r(i),e.flags|=1,Ee(t,e,r,n),e.child;case 14:return r=e.type,i=Je(r,e.pendingProps),i=Je(r.type,i),md(t,e,r,i,n);case 15:return hp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),Es(t,e),e.tag=1,xe(r)?(t=!0,Vs(e)):t=!1,ir(e,n),Bh(e,r,i),yl(e,r,i,n),Sl(null,e,r,!0,t,n);case 19:return yp(t,e,n);case 22:return pp(t,e,n)}throw Error(S(156,e.tag))};function Lp(t,e){return oh(t,e)}function Fy(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(t,e,n,r){return new Fy(t,e,n,r)}function Fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $y(t){if(typeof t=="function")return Fu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nu)return 11;if(t===ru)return 14}return 2}function Xt(t,e){var n=t.alternate;return n===null?(n=We(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ts(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jn:return kn(n.children,i,s,e);case tu:o=8,i|=8;break;case Ba:return t=We(12,n,e,i|2),t.elementType=Ba,t.lanes=s,t;case ja:return t=We(13,n,e,i),t.elementType=ja,t.lanes=s,t;case Ha:return t=We(19,n,e,i),t.elementType=Ha,t.lanes=s,t;case jf:return xo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vf:o=10;break e;case Bf:o=9;break e;case nu:o=11;break e;case ru:o=14;break e;case Mt:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=We(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function kn(t,e,n,r){return t=We(7,t,r,e),t.lanes=n,t}function xo(t,e,n,r){return t=We(22,t,r,e),t.elementType=jf,t.lanes=n,t.stateNode={isHidden:!1},t}function Ia(t,e,n){return t=We(6,t,null,e),t.lanes=n,t}function Ta(t,e,n){return e=We(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function by(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $u(t,e,n,r,i,s,o,a,l){return t=new by(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=We(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(s),t}function zy(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Mp(t){if(!t)return an;t=t._reactInternals;e:{if(Fn(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(xe(n))return Lh(t,n,e)}return e}function Up(t,e,n,r,i,s,o,a,l){return t=$u(n,r,!0,t,i,s,o,a,l),t.context=Mp(null),n=t.current,r=ke(),i=Jt(n),s=kt(r,i),s.callback=e??null,Qt(n,s,i),t.current.lanes=i,Oi(t,i,r),Oe(t,r),t}function Oo(t,e,n,r){var i=e.current,s=ke(),o=Jt(i);return n=Mp(n),e.context===null?e.context=n:e.pendingContext=n,e=kt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qt(i,e,o),t!==null&&(rt(t,i,o,s),ws(t,i,o)),o}function eo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bu(t,e){Pd(t,e),(t=t.alternate)&&Pd(t,e)}function Vy(){return null}var Fp=typeof reportError=="function"?reportError:function(t){console.error(t)};function zu(t){this._internalRoot=t}Ao.prototype.render=zu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Oo(t,e,null,null)};Ao.prototype.unmount=zu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xn(function(){Oo(null,t,null,null)}),e[Tt]=null}};function Ao(t){this._internalRoot=t}Ao.prototype.unstable_scheduleHydration=function(t){if(t){var e=hh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ft.length&&e!==0&&e<Ft[n].priority;n++);Ft.splice(n,0,t),n===0&&mh(t)}};function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Do(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nd(){}function By(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=eo(o);s.call(u)}}var o=Up(e,r,t,0,null,!1,!1,"",Nd);return t._reactRootContainer=o,t[Tt]=o.current,di(t.nodeType===8?t.parentNode:t),xn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=eo(l);a.call(u)}}var l=$u(t,0,!1,null,null,!1,!1,"",Nd);return t._reactRootContainer=l,t[Tt]=l.current,di(t.nodeType===8?t.parentNode:t),xn(function(){Oo(e,l,n,r)}),l}function Lo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=eo(o);a.call(l)}}Oo(e,o,t,i)}else o=By(n,e,t,i,r);return eo(o)}dh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=br(e.pendingLanes);n!==0&&(ou(e,n|1),Oe(e,ee()),!(b&6)&&(pr=ee()+500,cn()))}break;case 13:xn(function(){var r=Ct(t,1);if(r!==null){var i=ke();rt(r,t,1,i)}}),bu(t,1)}};au=function(t){if(t.tag===13){var e=Ct(t,134217728);if(e!==null){var n=ke();rt(e,t,134217728,n)}bu(t,134217728)}};fh=function(t){if(t.tag===13){var e=Jt(t),n=Ct(t,e);if(n!==null){var r=ke();rt(n,t,e,r)}bu(t,e)}};hh=function(){return V};ph=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};el=function(t,e,n){switch(e){case"input":if(Ka(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Io(r);if(!i)throw Error(S(90));Wf(r),Ka(r,i)}}}break;case"textarea":Kf(t,n);break;case"select":e=n.value,e!=null&&er(t,!!n.multiple,e,!1)}};eh=Lu;th=xn;var jy={usingClientEntryPoint:!1,Events:[Di,Kn,Io,Xf,Zf,Lu]},Ur={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hy={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ih(t),t===null?null:t.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||Vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{_o=cs.inject(Hy),ct=cs}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;Ve.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(e))throw Error(S(200));return zy(t,e,null,n)};Ve.createRoot=function(t,e){if(!Vu(t))throw Error(S(299));var n=!1,r="",i=Fp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$u(t,1,!1,null,null,n,!1,r,i),t[Tt]=e.current,di(t.nodeType===8?t.parentNode:t),new zu(e)};Ve.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=ih(e),t=t===null?null:t.stateNode,t};Ve.flushSync=function(t){return xn(t)};Ve.hydrate=function(t,e,n){if(!Do(e))throw Error(S(200));return Lo(null,t,e,!0,n)};Ve.hydrateRoot=function(t,e,n){if(!Vu(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Up(e,null,t,1,n??null,i,!1,s,o),t[Tt]=e.current,di(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ao(e)};Ve.render=function(t,e,n){if(!Do(e))throw Error(S(200));return Lo(null,t,e,!1,n)};Ve.unmountComponentAtNode=function(t){if(!Do(t))throw Error(S(40));return t._reactRootContainer?(xn(function(){Lo(null,null,t,!1,function(){t._reactRootContainer=null,t[Tt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Lu;Ve.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Do(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Lo(t,e,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ve})(Vg);var Rd=ba;$a.createRoot=Rd.createRoot,$a.hydrateRoot=Rd.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_i.apply(this,arguments)}var Ht;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ht||(Ht={}));const xd="popstate";function Wy(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Dl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:to(i)}return Ky(e,n,null,t)}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qy(){return Math.random().toString(36).substr(2,8)}function Od(t,e){return{usr:t.state,key:t.key,idx:e}}function Dl(t,e,n,r){return n===void 0&&(n=null),_i({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?kr(e):e,{state:n,key:e&&e.key||r||qy()})}function to(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function kr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ky(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ht.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(_i({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function m(){a=Ht.Pop;let R=d(),f=R==null?null:R-u;u=R,l&&l({action:a,location:y.location,delta:f})}function h(R,f){a=Ht.Push;let c=Dl(y.location,R,f);n&&n(c,R),u=d()+1;let p=Od(c,u),v=y.createHref(c);try{o.pushState(p,"",v)}catch{i.location.assign(v)}s&&l&&l({action:a,location:y.location,delta:1})}function w(R,f){a=Ht.Replace;let c=Dl(y.location,R,f);n&&n(c,R),u=d();let p=Od(c,u),v=y.createHref(c);o.replaceState(p,"",v),s&&l&&l({action:a,location:y.location,delta:0})}function _(R){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof R=="string"?R:to(R);return ne(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let y={get action(){return a},get location(){return t(i,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(xd,m),l=R,()=>{i.removeEventListener(xd,m),l=null}},createHref(R){return e(i,R)},createURL:_,encodeLocation(R){let f=_(R);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:w,go(R){return o.go(R)}};return y}var Ad;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ad||(Ad={}));function Gy(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?kr(e):e,i=ju(r.pathname||"/",n);if(i==null)return null;let s=$p(t);Qy(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=i0(s[a],a0(i));return o}function $p(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zt([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$p(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:n0(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of bp(s.path))i(s,o,l)}),e}function bp(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=bp(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Qy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:r0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Yy=/^:\w+$/,Jy=3,Xy=2,Zy=1,e0=10,t0=-2,Dd=t=>t==="*";function n0(t,e){let n=t.split("/"),r=n.length;return n.some(Dd)&&(r+=t0),e&&(r+=Xy),n.filter(i=>!Dd(i)).reduce((i,s)=>i+(Yy.test(s)?Jy:s===""?Zy:e0),r)}function r0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function i0(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=s0({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let m=a.route;s.push({params:r,pathname:Zt([i,d.pathname]),pathnameBase:d0(Zt([i,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(i=Zt([i,d.pathnameBase]))}return s}function s0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=o0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,m)=>{if(d==="*"){let h=a[m]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=l0(a[m]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function o0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Bu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function a0(t){try{return decodeURI(t)}catch(e){return Bu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function l0(t,e){try{return decodeURIComponent(t)}catch(n){return Bu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ju(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function u0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?kr(t):t;return{pathname:n?n.startsWith("/")?n:c0(n,e):e,search:f0(r),hash:h0(i)}}function c0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ca(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=kr(t):(i=_i({},t),ne(!i.pathname||!i.pathname.includes("?"),Ca("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Ca("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Ca("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let m=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}a=m>=0?e[m]:"/"}let l=u0(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Zt=t=>t.join("/").replace(/\/\/+/g,"/"),d0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),f0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,h0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function p0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const g0=typeof Object.is=="function"?Object.is:m0,{useState:v0,useEffect:y0,useLayoutEffect:w0,useDebugValue:_0}=Fa;function S0(t,e,n){const r=e(),[{inst:i},s]=v0({inst:{value:r,getSnapshot:e}});return w0(()=>{i.value=r,i.getSnapshot=e,Pa(i)&&s({inst:i})},[t,r,e]),y0(()=>(Pa(i)&&s({inst:i}),t(()=>{Pa(i)&&s({inst:i})})),[t]),_0(r),r}function Pa(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!g0(n,r)}catch{return!0}}function E0(t,e,n){return e()}const k0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",I0=!k0,T0=I0?E0:S0;"useSyncExternalStore"in Fa&&(t=>t.useSyncExternalStore)(Fa);const Bp=E.createContext(null),Hu=E.createContext(null),Mi=E.createContext(null),Mo=E.createContext(null),$n=E.createContext({outlet:null,matches:[]}),jp=E.createContext(null);function Ll(){return Ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ll.apply(this,arguments)}function C0(t,e){let{relative:n}=e===void 0?{}:e;Ir()||ne(!1);let{basename:r,navigator:i}=E.useContext(Mi),{hash:s,pathname:o,search:a}=Wp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Zt([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ir(){return E.useContext(Mo)!=null}function Ui(){return Ir()||ne(!1),E.useContext(Mo).location}function Wu(){Ir()||ne(!1);let{basename:t,navigator:e}=E.useContext(Mi),{matches:n}=E.useContext($n),{pathname:r}=Ui(),i=JSON.stringify(zp(n).map(a=>a.pathnameBase)),s=E.useRef(!1);return E.useEffect(()=>{s.current=!0}),E.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Vp(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Zt([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function Hp(){let{matches:t}=E.useContext($n),e=t[t.length-1];return e?e.params:{}}function Wp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext($n),{pathname:i}=Ui(),s=JSON.stringify(zp(r).map(o=>o.pathnameBase));return E.useMemo(()=>Vp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function P0(t,e){Ir()||ne(!1);let{navigator:n}=E.useContext(Mi),r=E.useContext(Hu),{matches:i}=E.useContext($n),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ui(),u;if(e){var d;let y=typeof e=="string"?kr(e):e;a==="/"||(d=y.pathname)!=null&&d.startsWith(a)||ne(!1),u=y}else u=l;let m=u.pathname||"/",h=a==="/"?m:m.slice(a.length)||"/",w=Gy(t,{pathname:h}),_=O0(w&&w.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Zt([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Zt([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&_?E.createElement(Mo.Provider,{value:{location:Ll({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ht.Pop}},_):_}function N0(){let t=M0(),e=p0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}class R0 extends E.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement($n.Provider,{value:this.props.routeContext},E.createElement(jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function x0(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Bp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement($n.Provider,{value:e},r)}function O0(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ne(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=E.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=E.createElement(N0,null));let d=e.concat(r.slice(0,a+1)),m=()=>{let h=s;return l?h=u:o.route.Component?h=E.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),E.createElement(x0,{match:o,routeContext:{outlet:s,matches:d},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?E.createElement(R0,{location:n.location,component:u,error:l,children:m(),routeContext:{outlet:null,matches:d}}):m()},null)}var Ld;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Ld||(Ld={}));var no;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(no||(no={}));function A0(t){let e=E.useContext(Hu);return e||ne(!1),e}function D0(t){let e=E.useContext($n);return e||ne(!1),e}function L0(t){let e=D0(),n=e.matches[e.matches.length-1];return n.route.id||ne(!1),n.route.id}function M0(){var t;let e=E.useContext(jp),n=A0(no.UseRouteError),r=L0(no.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function qp(t){let{to:e,replace:n,state:r,relative:i}=t;Ir()||ne(!1);let s=E.useContext(Hu),o=Wu();return E.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function mt(t){ne(!1)}function U0(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ht.Pop,navigator:s,static:o=!1}=t;Ir()&&ne(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=kr(r));let{pathname:u="/",search:d="",hash:m="",state:h=null,key:w="default"}=r,_=E.useMemo(()=>{let y=ju(u,a);return y==null?null:{location:{pathname:y,search:d,hash:m,state:h,key:w},navigationType:i}},[a,u,d,m,h,w,i]);return _==null?null:E.createElement(Mi.Provider,{value:l},E.createElement(Mo.Provider,{children:n,value:_}))}function F0(t){let{children:e,location:n}=t,r=E.useContext(Bp),i=r&&!e?r.router.routes:Ml(e);return P0(i,n)}var Md;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Md||(Md={}));new Promise(()=>{});function Ml(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;if(r.type===E.Fragment){n.push.apply(n,Ml(r.props.children,e));return}r.type!==mt&&ne(!1),!r.props.index||!r.props.children||ne(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ml(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}function $0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function b0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function z0(t,e){return t.button===0&&(!e||e==="_self")&&!b0(t)}const V0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function B0(t){let{basename:e,children:n,window:r}=t,i=E.useRef();i.current==null&&(i.current=Wy({window:r,v5Compat:!0}));let s=i.current,[o,a]=E.useState({action:s.action,location:s.location});return E.useLayoutEffect(()=>s.listen(a),[s]),E.createElement(U0,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const j0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d}=e,m=$0(e,V0),{basename:h}=E.useContext(Mi),w,_=!1;if(typeof u=="string"&&H0.test(u)&&(w=u,j0)){let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),v=ju(p.pathname,h);p.origin===c.origin&&v!=null?u=v+p.search+p.hash:_=!0}let y=C0(u,{relative:i}),R=W0(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i});function f(c){r&&r(c),c.defaultPrevented||R(c)}return E.createElement("a",Ul({},m,{href:w||y,onClick:_||s?r:f,ref:n,target:l}))});var Ud;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Ud||(Ud={}));var Fd;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fd||(Fd={}));function W0(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Wu(),l=Ui(),u=Wp(t,{relative:o});return E.useCallback(d=>{if(z0(d,n)){d.preventDefault();let m=r!==void 0?r:to(l)===to(u);a(t,{replace:m,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const q0=()=>g("div",{children:g("h1",{children:"About"})}),K0="/assets/payments-b273e9b7.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},G0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,m=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,w=u&63;l||(w=64,o||(h=64)),r.push(n[d],n[m],n[h],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):G0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw new Q0;const h=s<<2|a>>4;if(r.push(h),u!==64){const w=a<<4&240|u>>2;if(r.push(w),m!==64){const _=u<<6&192|m;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Q0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y0=function(t){const e=Kp(t);return Gp.encodeByteArray(e,!0)},ro=function(t){return Y0(t).replace(/\./g,"")},Qp=function(t){try{return Gp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=()=>J0().__FIREBASE_DEFAULTS__,Z0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},e1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qp(t[1]);return e&&JSON.parse(e)},qu=()=>{try{return X0()||Z0()||e1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yp=t=>{var e,n;return(n=(e=qu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},t1=t=>{const e=Yp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},n1=()=>{var t;return(t=qu())===null||t===void 0?void 0:t.config},Jp=t=>{var e;return(e=qu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ro(JSON.stringify(n)),ro(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function o1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function a1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function l1(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function u1(){try{return typeof indexedDB=="object"}catch{return!1}}function c1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=d1,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?f1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,r)}}function f1(t,e){return t.replace(h1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const h1=/\{\$([^}]+)}/g;function p1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function io(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($d(s)&&$d(o)){if(!io(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $d(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function m1(t,e){const n=new g1(t,e);return n.subscribe.bind(n)}class g1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");v1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Na),i.error===void 0&&(i.error=Na),i.complete===void 0&&(i.complete=Na);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Na(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class On{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new r1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_1(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:w1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function w1(t){return t===vn?void 0:t}function _1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new y1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const E1={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},k1=z.INFO,I1={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},T1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=I1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ku{constructor(e){this.name=e,this._logLevel=k1,this._logHandler=T1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const C1=(t,e)=>e.some(n=>t instanceof n);let bd,zd;function P1(){return bd||(bd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N1(){return zd||(zd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xp=new WeakMap,Fl=new WeakMap,Zp=new WeakMap,Ra=new WeakMap,Gu=new WeakMap;function R1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(en(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xp.set(n,t)}).catch(()=>{}),Gu.set(e,t),e}function x1(t){if(Fl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Fl.set(t,e)}let $l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O1(t){$l=t($l)}function A1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xa(this),e,...n);return Zp.set(r,e.sort?e.sort():[e]),en(r)}:N1().includes(t)?function(...e){return t.apply(xa(this),e),en(Xp.get(this))}:function(...e){return en(t.apply(xa(this),e))}}function D1(t){return typeof t=="function"?A1(t):(t instanceof IDBTransaction&&x1(t),C1(t,P1())?new Proxy(t,$l):t)}function en(t){if(t instanceof IDBRequest)return R1(t);if(Ra.has(t))return Ra.get(t);const e=D1(t);return e!==t&&(Ra.set(t,e),Gu.set(e,t)),e}const xa=t=>Gu.get(t);function L1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=en(o);return r&&o.addEventListener("upgradeneeded",l=>{r(en(o.result),l.oldVersion,l.newVersion,en(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const M1=["get","getKey","getAll","getAllKeys","count"],U1=["put","add","delete","clear"],Oa=new Map;function Vd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oa.get(e))return Oa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=U1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||M1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Oa.set(e,s),s}O1(t=>({...t,get:(e,n,r)=>Vd(e,n)||t.get(e,n,r),has:(e,n)=>!!Vd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bl="@firebase/app",Bd="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Ku("@firebase/app"),b1="@firebase/app-compat",z1="@firebase/analytics-compat",V1="@firebase/analytics",B1="@firebase/app-check-compat",j1="@firebase/app-check",H1="@firebase/auth",W1="@firebase/auth-compat",q1="@firebase/database",K1="@firebase/database-compat",G1="@firebase/functions",Q1="@firebase/functions-compat",Y1="@firebase/installations",J1="@firebase/installations-compat",X1="@firebase/messaging",Z1="@firebase/messaging-compat",ew="@firebase/performance",tw="@firebase/performance-compat",nw="@firebase/remote-config",rw="@firebase/remote-config-compat",iw="@firebase/storage",sw="@firebase/storage-compat",ow="@firebase/firestore",aw="@firebase/firestore-compat",lw="firebase",uw="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="[DEFAULT]",cw={[bl]:"fire-core",[b1]:"fire-core-compat",[V1]:"fire-analytics",[z1]:"fire-analytics-compat",[j1]:"fire-app-check",[B1]:"fire-app-check-compat",[H1]:"fire-auth",[W1]:"fire-auth-compat",[q1]:"fire-rtdb",[K1]:"fire-rtdb-compat",[G1]:"fire-fn",[Q1]:"fire-fn-compat",[Y1]:"fire-iid",[J1]:"fire-iid-compat",[X1]:"fire-fcm",[Z1]:"fire-fcm-compat",[ew]:"fire-perf",[tw]:"fire-perf-compat",[nw]:"fire-rc",[rw]:"fire-rc-compat",[iw]:"fire-gcs",[sw]:"fire-gcs-compat",[ow]:"fire-fst",[aw]:"fire-fst-compat","fire-js":"fire-js",[lw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map,Vl=new Map;function dw(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mr(t){const e=t.name;if(Vl.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Vl.set(e,t);for(const n of so.values())dw(n,t);return!0}function Qu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tn=new Fi("app","Firebase",fw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=uw;function em(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw tn.create("bad-app-name",{appName:String(i)});if(n||(n=n1()),!n)throw tn.create("no-options");const s=so.get(i);if(s){if(io(n,s.options)&&io(r,s.config))return s;throw tn.create("duplicate-app",{appName:i})}const o=new S1(i);for(const l of Vl.values())o.addComponent(l);const a=new hw(n,r,o);return so.set(i,a),a}function tm(t=zl){const e=so.get(t);if(!e&&t===zl)return em();if(!e)throw tn.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let i=(r=cw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}mr(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="firebase-heartbeat-database",mw=1,Si="firebase-heartbeat-store";let Aa=null;function nm(){return Aa||(Aa=L1(pw,mw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Si)}}}).catch(t=>{throw tn.create("idb-open",{originalErrorMessage:t.message})})),Aa}async function gw(t){try{return(await nm()).transaction(Si).objectStore(Si).get(rm(t))}catch(e){if(e instanceof Ot)An.warn(e.message);else{const n=tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function jd(t,e){try{const r=(await nm()).transaction(Si,"readwrite");return await r.objectStore(Si).put(e,rm(t)),r.done}catch(n){if(n instanceof Ot)An.warn(n.message);else{const r=tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function rm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=1024,yw=30*24*60*60*1e3;class ww{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hd(),{heartbeatsToSend:n,unsentEntries:r}=_w(this._heartbeatsCache.heartbeats),i=ro(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hd(){return new Date().toISOString().substring(0,10)}function _w(t,e=vw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return u1()?c1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wd(t){return ro(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t){mr(new On("platform-logger",e=>new F1(e),"PRIVATE")),mr(new On("heartbeat",e=>new ww(e),"PRIVATE")),nn(bl,Bd,t),nn(bl,Bd,"esm2017"),nn("fire-js","")}Ew("");function Yu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function im(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kw=im,sm=new Fi("auth","Firebase",im());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new Ku("@firebase/auth");function Cs(t,...e){qd.logLevel<=z.ERROR&&qd.error(`Auth (${bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,...e){throw Ju(t,...e)}function ft(t,...e){return Ju(t,...e)}function om(t,e,n){const r=Object.assign(Object.assign({},kw()),{[e]:n});return new Fi("auth","Firebase",r).create(e,{appName:t.name})}function Iw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(t,"argument-error"),om(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ju(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sm.create(t,...e)}function A(t,e,...n){if(!t)throw Ju(e,...n)}function St(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cs(e),new Error(e)}function Nt(t,e){t||St(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Map;function Et(t){Nt(t instanceof Function,"Expected a class definition");let e=Kd.get(t);return e?(Nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kd.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e){const n=Qu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(io(s,e??{}))return i;pt(i,"already-initialized")}return n.initialize({options:e})}function Cw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pw(){return Gd()==="http:"||Gd()==="https:"}function Gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pw()||o1()||"connection"in navigator)?navigator.onLine:!0}function Rw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nt(n>e,"Short delay should be less than long delay!"),this.isMobile=s1()||a1()}get(){return Nw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t,e){Nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=new zi(3e4,6e4);function Aw(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Uo(t,e,n,r,i={}){return lm(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$i(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),am.fetch()(um(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function lm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xw),e);try{const i=new Lw(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ds(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ds(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ds(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw om(t,d,u);pt(t,d)}}catch(i){if(i instanceof Ot)throw i;pt(t,"internal-error",{message:String(i)})}}async function Dw(t,e,n,r,i={}){const s=await Uo(t,e,n,r,i);return"mfaPendingCredential"in s&&pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function um(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xu(t.config,i):`${t.config.apiScheme}://${i}`}class Lw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),Ow.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ds(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ft(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(t,e){return Uo(t,"POST","/v1/accounts:delete",e)}async function Uw(t,e){return Uo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fw(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=Zu(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yr(Da(i.auth_time)),issuedAtTime:Yr(Da(i.iat)),expirationTime:Yr(Da(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Da(t){return Number(t)*1e3}function Zu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qp(n);return i?JSON.parse(i):(Cs("Failed to decode base64 JWT payload"),null)}catch(i){return Cs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $w(t){const e=Zu(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&bw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yr(this.lastLoginAt),this.creationTime=Yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ei(t,Uw(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?jw(s.providerUserInfo):[],a=Bw(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,m)}async function Vw(t){const e=ze(t);await oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bw(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jw(t){return t.map(e=>{var{providerId:n}=e,r=Yu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(t,e){const n=await lm(t,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=um(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",am.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$w(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Hw(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ki;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Yu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fw(this,e)}reload(){return Vw(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ei(this,Mw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:v,isAnonymous:k,providerData:C,stsTokenManager:P}=n;A(p&&P,e,"internal-error");const N=ki.fromJSON(this.name,P);A(typeof p=="string",e,"internal-error"),Lt(m,e.name),Lt(h,e.name),A(typeof v=="boolean",e,"internal-error"),A(typeof k=="boolean",e,"internal-error"),Lt(w,e.name),Lt(_,e.name),Lt(y,e.name),Lt(R,e.name),Lt(f,e.name),Lt(c,e.name);const j=new In({uid:p,auth:e,email:h,emailVerified:v,displayName:m,isAnonymous:k,photoURL:_,phoneNumber:w,tenantId:y,stsTokenManager:N,createdAt:f,lastLoginAt:c});return C&&Array.isArray(C)&&(j.providerData=C.map(U=>Object.assign({},U))),R&&(j._redirectEventId=R),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new ki;i.updateFromServerResponse(n);const s=new In({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oo(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dm.type="NONE";const Qd=dm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t,e,n){return`firebase:${t}:${e}:${n}`}class or{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ps(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ps("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new or(Et(Qd),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Et(Qd);const o=Ps(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const m=In._fromJSON(e,d);u!==s&&(a=m),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new or(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new or(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gm(e))return"Blackberry";if(vm(e))return"Webos";if(ec(e))return"Safari";if((e.includes("chrome/")||hm(e))&&!e.includes("edge/"))return"Chrome";if(mm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fm(t=Se()){return/firefox\//i.test(t)}function ec(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hm(t=Se()){return/crios\//i.test(t)}function pm(t=Se()){return/iemobile/i.test(t)}function mm(t=Se()){return/android/i.test(t)}function gm(t=Se()){return/blackberry/i.test(t)}function vm(t=Se()){return/webos/i.test(t)}function Fo(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ww(t=Se()){var e;return Fo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qw(){return l1()&&document.documentMode===10}function ym(t=Se()){return Fo(t)||mm(t)||vm(t)||gm(t)||/windows phone/i.test(t)||pm(t)}function Kw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t,e=[]){let n;switch(t){case"Browser":n=Yd(Se());break;case"Worker":n=`${Yd(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jd(this),this.idTokenSubscription=new Jd(this),this.beforeStateQueue=new Gw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await or.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Et(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function $o(t){return ze(t)}class Jd{constructor(e){this.auth=e,this.observer=null,this.addObserver=m1(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Yw(t,e,n){const r=$o(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=_m(e),{host:o,port:a}=Jw(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Xw()}function _m(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jw(t){const e=_m(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xd(o)}}}function Xd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return St("not implemented")}_getIdTokenResponse(e){return St("not implemented")}_linkToIdToken(e,n){return St("not implemented")}_getReauthenticationResolver(e){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(t,e){return Dw(t,"POST","/v1/accounts:signInWithIdp",Aw(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="http://localhost";class Dn extends Sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Yu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ar(e,n)}buildRequest(){const e={requestUri:Zw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends tc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Vi{constructor(){super("facebook.com")}static credential(e){return Dn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dn._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Vi{constructor(){super("github.com")}static credential(e){return Dn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.GITHUB_SIGN_IN_METHOD="github.com";zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Vi{constructor(){super("twitter.com")}static credential(e,n){return Dn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await In._fromIdTokenResponse(e,r,i),o=Zd(r);return new gr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zd(r);return new gr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Ot{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ao.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ao(e,n,r,i)}}function Em(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ao._fromErrorAndOperation(t,s,e,r):s})}async function e_(t,e,n=!1){const r=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ei(t,Em(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Zu(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),gr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e,n=!1){const r="signIn",i=await Em(t,r,e),s=await gr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function r_(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function i_(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function s_(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}const lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lo,"1"),this.storage.removeItem(lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(){const t=Se();return ec(t)||Fo(t)}const a_=1e3,l_=10;class Im extends km{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=o_()&&Kw(),this.fallbackToPolling=ym(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,l_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},a_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Im.type="LOCAL";const u_=Im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm extends km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tm.type="SESSION";const Cm=Tm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await c_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=nc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const h=m;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function f_(t){ht().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function h_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function p_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function m_(){return Pm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="firebaseLocalStorageDb",g_=1,uo="firebaseLocalStorage",Rm="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zo(t,e){return t.transaction([uo],e?"readwrite":"readonly").objectStore(uo)}function v_(){const t=indexedDB.deleteDatabase(Nm);return new Bi(t).toPromise()}function jl(){const t=indexedDB.open(Nm,g_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uo,{keyPath:Rm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uo)?e(r):(r.close(),await v_(),e(await jl()))})})}async function ef(t,e,n){const r=zo(t,!0).put({[Rm]:e,value:n});return new Bi(r).toPromise()}async function y_(t,e){const n=zo(t,!1).get(e),r=await new Bi(n).toPromise();return r===void 0?null:r.value}function tf(t,e){const n=zo(t,!0).delete(e);return new Bi(n).toPromise()}const w_=800,__=3;class xm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>__)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bo._getInstance(m_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await h_(),!this.activeServiceWorker)return;this.sender=new d_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||p_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jl();return await ef(e,lo,"1"),await tf(e,lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ef(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>y_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zo(i,!1).getAll();return new Bi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xm.type="LOCAL";const S_=xm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function k_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",E_().appendChild(r)})}function I_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t,e){return e?Et(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends Sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function T_(t){return n_(t.auth,new rc(t),t.bypassAuthState)}function C_(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),t_(n,new rc(t),t.bypassAuthState)}async function P_(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),e_(n,new rc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T_;case"linkViaPopup":case"linkViaRedirect":return P_;case"reauthViaPopup":case"reauthViaRedirect":return C_;default:pt(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=new zi(2e3,1e4);async function R_(t,e,n){const r=$o(t);Iw(t,e,tc);const i=Om(r,n);return new Sn(r,"signInViaPopup",e,i).executeNotNull()}class Sn extends Am{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,N_.get())};e()}}Sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="pendingRedirect",Ns=new Map;class O_ extends Am{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ns.get(this.auth._key());if(!e){try{const r=await A_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ns.set(this.auth._key(),e)}return this.bypassAuthState||Ns.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A_(t,e){const n=M_(e),r=L_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function D_(t,e){Ns.set(t._key(),e)}function L_(t){return Et(t._redirectPersistence)}function M_(t){return Ps(x_,t.config.apiKey,t.name)}async function U_(t,e,n=!1){const r=$o(t),i=Om(r,e),o=await new O_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=10*60*1e3;class $_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F_&&this.cachedEventUids.clear(),this.cachedEventUids.has(nf(e))}saveEventToCache(e){this.cachedEventUids.add(nf(e)),this.lastProcessedEventTime=Date.now()}}function nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function b_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(t,e={}){return Uo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,B_=/^https?/;async function j_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await z_(t);for(const n of e)try{if(H_(n))return}catch{}pt(t,"unauthorized-domain")}function H_(t){const e=Bl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!B_.test(n))return!1;if(V_.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=new zi(3e4,6e4);function rf(){const t=ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function q_(t){return new Promise((e,n)=>{var r,i,s;function o(){rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rf(),n(ft(t,"network-request-failed"))},timeout:W_.get()})}if(!((i=(r=ht().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ht().gapi)===null||s===void 0)&&s.load)o();else{const a=I_("iframefcb");return ht()[a]=()=>{gapi.load?o():n(ft(t,"network-request-failed"))},k_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rs=null,e})}let Rs=null;function K_(t){return Rs=Rs||q_(t),Rs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=new zi(5e3,15e3),Q_="__/auth/iframe",Y_="emulator/auth/iframe",J_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},X_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Z_(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xu(e,Y_):`https://${t.config.authDomain}/${Q_}`,r={apiKey:e.apiKey,appName:t.name,v:bi},i=X_.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$i(r).slice(1)}`}async function eS(t){const e=await K_(t),n=ht().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:Z_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:J_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ft(t,"network-request-failed"),a=ht().setTimeout(()=>{s(o)},G_.get());function l(){ht().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nS=500,rS=600,iS="_blank",sS="http://localhost";class sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oS(t,e,n,r=nS,i=rS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tS),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Se().toLowerCase();n&&(a=hm(u)?iS:n),fm(u)&&(e=e||sS,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[w,_])=>`${h}${w}=${_},`,"");if(Ww(u)&&a!=="_self")return aS(e||"",a),new sf(null);const m=window.open(e||"",a,d);A(m,t,"popup-blocked");try{m.focus()}catch{}return new sf(m)}function aS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="__/auth/handler",uS="emulator/auth/handler";function of(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:i};if(e instanceof tc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",p1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Vi){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${cS(t)}?${$i(a).slice(1)}`}function cS({config:t}){return t.emulator?Xu(t,uS):`https://${t.authDomain}/${lS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="webStorageSupport";class dS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cm,this._completeRedirectFn=U_,this._overrideRedirectResult=D_}async _openPopup(e,n,r,i){var s;Nt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=of(e,n,r,Bl(),i);return oS(e,o,nc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),f_(of(e,n,r,Bl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eS(e),r=new $_(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(La,{type:La},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[La];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=j_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ym()||ec()||Fo()}}const fS=dS;var af="@firebase/auth",lf="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mS(t){mr(new On("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{A(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),A(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wm(t)},d=new Qw(a,l,u);return Cw(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mr(new On("auth-internal",e=>{const n=$o(e.getProvider("auth").getImmediate());return(r=>new hS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(af,lf,pS(t)),nn(af,lf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=5*60,vS=Jp("authIdTokenMaxAge")||gS;let uf=null;const yS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vS)return;const i=n==null?void 0:n.token;uf!==i&&(uf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wS(t=tm()){const e=Qu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tw(t,{popupRedirectResolver:fS,persistence:[S_,u_,Cm]}),r=Jp("authTokenSyncURL");if(r){const s=yS(r);i_(n,s,()=>s(n.currentUser)),r_(n,o=>s(o))}const i=Yp("auth");return i&&Yw(n,`http://${i}`),n}mS("Browser");var _S="firebase",SS="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(_S,SS,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Ku("@firebase/firestore");function co(t,...e){if(vr.logLevel<=z.DEBUG){const n=e.map(sc);vr.debug(`Firestore (${Tr}): ${t}`,...n)}}function ic(t,...e){if(vr.logLevel<=z.ERROR){const n=e.map(sc);vr.error(`Firestore (${Tr}): ${t}`,...n)}}function Lm(t,...e){if(vr.logLevel<=z.WARN){const n=e.map(sc);vr.warn(`Firestore (${Tr}): ${t}`,...n)}}function sc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Tr}) INTERNAL ASSERTION FAILED: `+t;throw ic(e),new Error(e)}function Ae(t,e){t||Q()}function ji(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="ok",ES="cancelled",Jr="unknown",L="invalid-argument",kS="deadline-exceeded",IS="not-found",TS="permission-denied",Hl="unauthenticated",CS="resource-exhausted",yr="failed-precondition",PS="aborted",NS="out-of-range",Mm="unimplemented",RS="internal",xS="unavailable";class x extends Ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ce.UNAUTHENTICATED))}shutdown(){}}class AS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DS{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Ae(typeof e.accessToken=="string"),new Um(e.accessToken,new Ce(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class LS{constructor(e,n,r,i){this.t=e,this.i=n,this.o=r,this.u=i,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(Ae(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class MS{constructor(e,n,r,i){this.t=e,this.i=n,this.o=r,this.u=i}getToken(){return Promise.resolve(new LS(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class US{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FS{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Ae(typeof e.token=="string"),new US(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ii&&e.projectId===this.projectId&&e.database===this.database}}class Ti{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ti.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ti?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends Ti{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(L,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const bS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends Ti{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return bS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(L,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(L,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(L,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(L,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(se.fromString(e))}static fromName(e){return new pe(se.fromString(e).popFirst(5))}static empty(){return new pe(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e,n){if(!n)throw new x(L,`Function ${t}() cannot be called with an empty ${e}.`)}function df(t){if(!pe.isDocumentKey(t))throw new x(L,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ff(t){if(pe.isDocumentKey(t))throw new x(L,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Bo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(L,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vo(t);throw new x(L,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){return t==null}function fo(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hf,$;function pf(t){if(t===void 0)return ic("RPC_ERROR","HTTP error has no status"),Jr;switch(t){case 200:return cf;case 400:return yr;case 401:return Hl;case 403:return TS;case 404:return IS;case 409:return PS;case 416:return NS;case 429:return CS;case 499:return ES;case 500:return Jr;case 501:return Mm;case 503:return xS;case 504:return kS;default:return t>=200&&t<300?cf:t>=400&&t<500?yr:t>=500&&t<600?RS:Jr}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */($=hf||(hf={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";class BS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}A(e,n,r,i,s){const o=this.I(e,n);co("RestConnection","Sending: ",o,r);const a={};return this.T(a,i,s),this.R(e,o,a,r).then(l=>(co("RestConnection","Received: ",l),l),l=>{throw Lm("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}P(e,n,r,i,s,o){return this.A(e,n,r,i,s)}T(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Tr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}I(e,n){const r=VS[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.V=n}$(e,n){throw new Error("Not supported by FetchConnection")}async R(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.V(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new x(pf(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new x(pf(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{static F(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=jS(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function $m(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new WS("Invalid base64 string: "+i):i}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const qS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=qS.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ie(t.seconds),nanos:ie(t.nanos)}}function ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(L,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(L,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(L,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(L,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zm(t){const e=t.mapValue.fields.__previous_value__;return bm(e)?zm(e):e}function Pi(t){const e=Ln(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs={fields:{__type__:{stringValue:"__max__"}}};function Mn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bm(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:Q()}function ho(t,e){if(t===e)return!0;const n=Mn(t);if(n!==Mn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pi(t).isEqual(Pi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ln(r.timestampValue),o=Ln(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ci(r.bytesValue).isEqual(Ci(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ie(r.geoPointValue.latitude)===ie(i.geoPointValue.latitude)&&ie(r.geoPointValue.longitude)===ie(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ie(r.integerValue)===ie(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ie(r.doubleValue),o=ie(i.doubleValue);return s===o?fo(s)===fo(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return $m(t.arrayValue.values||[],e.arrayValue.values||[],ho);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(mf(s)!==mf(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ho(s[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Ni(t,e){return(t.values||[]).find(n=>ho(n,e))!==void 0}function po(t,e){if(t===e)return 0;const n=Mn(t),r=Mn(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ie(i.integerValue||i.doubleValue),a=ie(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return gf(t.timestampValue,e.timestampValue);case 4:return gf(Pi(t),Pi(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ci(i),a=Ci(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=le(o[l],a[l]);if(u!==0)return u}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=le(ie(i.latitude),ie(s.latitude));return o!==0?o:le(ie(i.longitude),ie(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=po(o[l],a[l]);if(u)return u}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===fs&&s===fs)return 0;if(i===fs)return 1;if(s===fs)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let d=0;d<a.length&&d<u.length;++d){const m=le(a[d],u[d]);if(m!==0)return m;const h=po(o[a[d]],l[u[d]]);if(h!==0)return h}return le(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function gf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Ln(t),r=Ln(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function vf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vm(t){return!!t&&"arrayValue"in t}function yf(t){return!!t&&"nullValue"in t}function wf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ma(t){return!!t&&"mapValue"in t}function Xr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class _f{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{}class st extends Bm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new KS(e,n,r):n==="array-contains"?new YS(e,r):n==="in"?new JS(e,r):n==="not-in"?new XS(e,r):n==="array-contains-any"?new ZS(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GS(e,r):new QS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(po(n,this.value)):n!==null&&Mn(this.value)===Mn(n)&&this.matchesComparison(po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Hi extends Bm{constructor(e,n){super(),this.filters=e,this.op=n,this.S=null}static create(e,n){return new Hi(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.q(n=>n.isInequality());return e!==null?e.field:null}q(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class KS extends st{constructor(e,n,r){super(e,n,r),this.key=pe.fromName(r.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class GS extends st{constructor(e,n){super(e,"in",n),this.keys=jm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QS extends st{constructor(e,n){super(e,"not-in",n),this.keys=jm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class YS extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vm(n)&&Ni(n.arrayValue,this.value)}}class JS extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ni(this.value.arrayValue,n)}}class XS extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ni(this.value.arrayValue,n)}}class ZS extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ni(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new $e(0,0))}static max(){return new fe(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.comparator=e,this.root=n||he.EMPTY}insert(e,n){return new mo(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new mo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hs(this.root,e,this.comparator,!0)}}class hs{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??he.RED,this.left=i??he.EMPTY,this.right=s??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new he(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return he.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new he(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.comparator=e,this.data=new mo(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sf(this.data.getIterator())}getIteratorFrom(e){return new Sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof go)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new go(this.comparator);return n.data=e,n}}class Sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new Ri([])}unionWith(e){let n=new go(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ri(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $m(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xr(n)}setAll(e){let n=Me.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ho(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){jo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tt(Xr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,fe.min(),fe.min(),fe.min(),tt.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,fe.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,fe.min(),fe.min(),tt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,fe.min(),fe.min(),tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.O=null}}function Ef(t,e=null,n=[],r=[],i=null,s=null,o=null){return new eE(t,e,n,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.k=null,this.C=null,this.startAt,this.endAt}}function Wm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function oc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function tE(t){return t.collectionGroup!==null}function kf(t){const e=ji(t);if(e.k===null){e.k=[];const n=oc(e),r=Wm(e);if(n!==null&&r===null)n.isKeyField()||e.k.push(new xs(n)),e.k.push(new xs(Me.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.k.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.k.push(new xs(Me.keyField(),s))}}}return e.k}function nE(t){const e=ji(t);if(!e.C)if(e.limitType==="F")e.C=Ef(e.path,e.collectionGroup,kf(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of kf(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new xs(s.field,o))}const r=e.endAt?new _f(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new _f(e.startAt.position,e.startAt.inclusive):null;e.C=Ef(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function Wl(t,e){e.getFirstInequalityField(),oc(t);const n=t.filters.concat([e]);return new Hm(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!fo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.L){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fo(r)?"-0":r}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this._=void 0}}class iE extends Ho{}class sE extends Ho{constructor(e){super(),this.elements=e}}class oE extends Ho{constructor(e){super(),this.elements=e}}class aE extends Ho{constructor(e,n){super(),this.M=e,this.U=n}}class Zr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zr}static exists(e){return new Zr(void 0,e)}static updateTime(e){return new Zr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Wo{}class qm extends Wo{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Km extends Wo{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class lE extends Wo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uE extends Wo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),fE=(()=>({and:"AND",or:"OR"}))();class hE{constructor(e,n){this.databaseId=e,this.L=n}}function ql(t,e){return t.L?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pE(t,e){return t.L?e.toBase64():e.toUint8Array()}function mE(t,e){return ql(t,e.toTimestamp())}function ei(t){return Ae(!!t),fe.fromTimestamp(function(e){const n=Ln(e);return new $e(n.seconds,n.nanos)}(t))}function ac(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vo(t,e){return ac(t.databaseId,e.path)}function Kl(t,e){const n=function(i){const s=se.fromString(i);return Ae(Ym(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new x(L,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(L,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new pe((Ae((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function If(t,e){return ac(t.databaseId,e)}function Gm(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tf(t,e,n){return{name:vo(t,e),fields:n.value.mapValue.fields}}function gE(t,e){return"found"in e?function(n,r){Ae(!!r.found),r.found.name,r.found.updateTime;const i=Kl(n,r.found.name),s=ei(r.found.updateTime),o=r.found.createTime?ei(r.found.createTime):fe.min(),a=new tt({mapValue:{fields:r.found.fields}});return lt.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){Ae(!!r.missing),Ae(!!r.readTime);const i=Kl(n,r.missing),s=ei(r.readTime);return lt.newNoDocument(i,s)}(t,e):Q()}function vE(t,e){let n;if(e instanceof qm)n={update:Tf(t,e.key,e.value)};else if(e instanceof lE)n={delete:vo(t,e.key)};else if(e instanceof Km)n={update:Tf(t,e.key,e.data),updateMask:EE(e.fieldMask)};else{if(!(e instanceof uE))return Q();n={verify:vo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof iE)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof sE)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof oE)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof aE)return{fieldPath:s.field.canonicalString(),increment:o.U};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:mE(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function yE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=If(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=If(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Qm(Hi.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Vn(d.field),direction:wE(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.L||zS(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function wE(t){return cE[t]}function _E(t){return dE[t]}function SE(t){return fE[t]}function Vn(t){return{fieldPath:t.canonicalString()}}function Qm(t){return t instanceof st?function(e){if(e.op==="=="){if(wf(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NAN"}};if(yf(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wf(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NOT_NAN"}};if(yf(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vn(e.field),op:_E(e.op),value:e.value}}}(t):t instanceof Hi?function(e){const n=e.getFilters().map(r=>Qm(r));return n.length===1?n[0]:{compositeFilter:{op:SE(e.op),filters:n}}}(t):Q()}function EE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ym(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){return new hE(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.M=i,this.et=!1}nt(){if(this.et)throw new x(yr,"The client has already been terminated.")}A(e,n,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.A(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Hl&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(Jr,i.toString())})}P(e,n,r,i){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Hl&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(Jr,s.toString())})}terminate(){this.et=!0}}async function IE(t,e){const n=ji(t),r=Gm(n.M)+"/documents",i={writes:e.map(s=>vE(n.M,s))};await n.A("Commit",r,i)}async function TE(t,e){const n=ji(t),r=Gm(n.M)+"/documents",i={documents:e.map(l=>vo(n.M,l))},s=await n.P("BatchGetDocuments",r,i,e.length),o=new Map;s.forEach(l=>{const u=gE(n.M,l);o.set(u.key.toString(),u)});const a=[];return e.forEach(l=>{const u=o.get(l.toString());Ae(!!u),a.push(u)}),a}async function CE(t,e){const n=ji(t),r=yE(n.M,nE(e));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(s,o,a){const l=Kl(s,o.name),u=ei(o.updateTime),d=o.createTime?ei(o.createTime):fe.min(),m=new tt({mapValue:{fields:o.fields}}),h=lt.newFoundDocument(l,u,d,m);return a&&h.setHasCommittedMutations(),a?h.setHasCommittedMutations():h}(n.M,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Map;function uc(t){if(t._terminated)throw new x(yr,"The client has already been terminated.");if(!ti.has(t)){co("ComponentProvider","Initializing Datastore");const s=function(l){return new BS(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,i=t._freezeSettings(),new $S(e,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),o=lc(t._databaseId),a=function(l,u,d,m){return new kE(l,u,d,m)}(t._authCredentials,t._appCheckCredentials,s,o);ti.set(t,a)}var e,n,r,i;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return ti.get(t)}class Cf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(L,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(L,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,i,s,o){if(i===!0&&o===!0)throw new x(L,`${r} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(yr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(yr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new OS;switch(n.type){case"gapi":const r=n.client;return new MS(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(L,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ti.get(e);n&&(co("ComponentProvider","Removing Datastore"),ti.delete(e),n.terminate())}(this),Promise.resolve()}}function PE(t,e){const n=typeof t=="object"?t:tm(),r=typeof t=="string"?t:e||"(default)",i=Qu(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=t1("firestore");s&&NE(i,...s)}return i}function NE(t,e,n,r={}){var i;const s=(t=Bo(t,qo))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Lm("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ce.MOCK_USER;else{o=i1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new x(L,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ce(l)}t._authCredentials=new AS(new Um(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class Cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class rn extends Cr{constructor(e,n,r){super(e,n,new Hm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new pe(e))}withConverter(e){return new rn(this.firestore,e,this._path)}}function cc(t,e,...n){if(t=ze(t),Fm("collection","path",e),t instanceof qo){const r=se.fromString(e,...n);return ff(r),new rn(t,null,r)}{if(!(t instanceof De||t instanceof rn))throw new x(L,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return ff(r),new rn(t.firestore,null,r)}}function Wi(t,e,...n){if(t=ze(t),arguments.length===1&&(e=HS.F()),Fm("doc","path",e),t instanceof qo){const r=se.fromString(e,...n);return df(r),new De(t,null,new pe(r))}{if(!(t instanceof De||t instanceof rn))throw new x(L,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return df(r),new De(t.firestore,t instanceof rn?t.converter:null,new pe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wr(Rt.fromBase64String(e))}catch(n){throw new x(L,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wr(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(L,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(L,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(L,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=/^__.*__$/;class xE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Km(e,this.data,this.fieldMask,n,this.fieldTransforms):new qm(e,this.data,n,this.fieldTransforms)}}function Xm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class hc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.rt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get st(){return this.settings.st}it(e){return new hc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ut:!1});return i.ct(e),i}at(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ut:!1});return i.rt(),i}ht(e){return this.it({path:void 0,ut:!0})}lt(e){return yo(e,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ct(this.path.get(e))}ct(e){if(e.length===0)throw this.lt("Document fields must not be empty");if(Xm(this.st)&&RE.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class OE{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||lc(e)}wt(e,n,r,i=!1){return new hc({st:e,methodName:n,dt:r,path:Me.emptyPath(),ut:!1,ft:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Zm(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new OE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AE(t,e,n,r,i,s={}){const o=t.wt(s.merge||s.mergeFields?2:0,e,n,i);ng("Data must be an object, but it was:",o,r);const a=eg(r,o);let l,u;if(s.merge)l=new Ri(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const m of s.mergeFields){const h=LE(e,m,n);if(!o.contains(h))throw new x(L,`Field '${h}' is specified in your field mask but missing from your input data.`);UE(d,h)||d.push(h)}l=new Ri(d),u=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,u=o.fieldTransforms;return new xE(new tt(a),l,u)}function DE(t,e,n,r=!1){return pc(n,t.wt(r?4:3,e))}function pc(t,e){if(tg(t=ze(t)))return ng("Unsupported field value:",e,t),eg(t,e);if(t instanceof Jm)return function(n,r){if(!Xm(r.st))throw r.lt(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.lt(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ut&&e.st!==4)throw e.lt("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=pc(o,r.ht(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rE(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=$e.fromDate(n);return{timestampValue:ql(r.M,i)}}if(n instanceof $e){const i=new $e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ql(r.M,i)}}if(n instanceof fc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wr)return{bytesValue:pE(r.M,n._byteString)};if(n instanceof De){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.lt(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ac(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.lt(`Unsupported field value: ${Vo(n)}`)}(t,e)}function eg(t,e){const n={};return function(r){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jo(t,(r,i)=>{const s=pc(i,e.ot(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof fc||t instanceof wr||t instanceof De||t instanceof Jm)}function ng(t,e,n){if(!tg(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Vo(n);throw r==="an object"?e.lt(t+" a custom object"):e.lt(t+" "+r)}}function LE(t,e,n){if((e=ze(e))instanceof dc)return e._internalPath;if(typeof e=="string")return rg(t,e);throw yo("Field path arguments must be of type string or ",t,!1,void 0,n)}const ME=new RegExp("[~\\*/\\[\\]]");function rg(t,e,n){if(e.search(ME)>=0)throw yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dc(...e.split("."))._internalPath}catch{throw yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(L,a+t+l)}function UE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(og("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sg extends ig{data(){return super.data()}}class FE{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function og(t,e){return typeof e=="string"?rg(t,e):e instanceof dc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{}class $E extends mc{}function bE(t,e,...n){let r=[];e instanceof mc&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof gc).length,o=i.filter(a=>a instanceof Ko).length;if(s>1||s>0&&o>0)throw new x(L,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ko extends $E{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ko(e,n,r)}_apply(e){const n=this._parse(e);return ag(e._query,n),new Cr(e.firestore,e.converter,Wl(e._query,n))}_parse(e){const n=Zm(e.firestore);return function(i,s,o,a,l,u,d){let m;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(L,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Nf(d,u);const h=[];for(const w of d)h.push(Pf(a,i,w));m={arrayValue:{values:h}}}else m=Pf(a,i,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Nf(d,u),m=DE(o,s,d,u==="in"||u==="not-in");return st.create(l,u,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function zE(t,e,n){const r=e,i=og("where",t);return Ko._create(i,r,n)}class gc extends mc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gc(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Hi.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)ag(s,a),s=Wl(s,a)}(e._query,n),new Cr(e.firestore,e.converter,Wl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Pf(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new x(L,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tE(e)&&n.indexOf("/")!==-1)throw new x(L,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!pe.isDocumentKey(r))throw new x(L,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vf(t,new pe(r))}if(n instanceof De)return vf(t,n._key);throw new x(L,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vo(n)}.`)}function Nf(t,e){if(!Array.isArray(t)||t.length===0)throw new x(L,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ag(t,e){if(e.isInequality()){const r=oc(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new x(L,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Wm(t);s!==null&&VE(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(L,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(L,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function VE(t,e,n){if(!n.isEqual(e))throw new x(L,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lg extends class{convertValue(e,n="none"){switch(Mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const r={};return jo(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new fc(ie(e.latitude),ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){const n=Ln(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);Ae(Ym(r));const i=new Ii(r.get(1),r.get(3)),s=new pe(r.popFirst(5));return i.isEqual(n)||ic(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}function jE(t){const e=uc((t=Bo(t,De)).firestore),n=new lg(t.firestore);return TE(e,[t._key]).then(r=>{Ae(r.length===1);const i=r[0];return new ig(t.firestore,n,t._key,i.isFoundDocument()?i:null,t.converter)})}function Go(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new x(Mm,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Bo(t,Cr))._query);const e=uc(t.firestore),n=new lg(t.firestore);return CE(e,t._query).then(r=>{const i=r.map(s=>new sg(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new FE(t,i)})}function Qo(t,e,n){const r=BE((t=Bo(t,De)).converter,e,n),i=AE(Zm(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return IE(uc(t.firestore),[i.toMutation(t._key,Zr.none())])}(function(t){Tr=t})(`${bi}_lite`),mr(new On("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),i=new qo(new DS(t.getProvider("auth-internal")),new FS(t.getProvider("app-check-internal")),function(s,o){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new x(L,'"projectId" not provided in firebase.initializeApp.');return new Ii(s.options.projectId,o)}(r,e),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),nn("firestore-lite","3.8.4",""),nn("firestore-lite","3.8.4","esm2017");const HE={apiKey:"AIzaSyA-yi3884uMF-T82Vq3TM1hnTeC4zl4BxA",authDomain:"ecommerceodin.firebaseapp.com",projectId:"ecommerceodin",storageBucket:"ecommerceodin.appspot.com",messagingSenderId:"388718595094",appId:"1:388718595094:web:26fbf7dac6fe040923f937",measurementId:"G-96SL1K1DFE"},ug=em(HE),dn=PE(ug),cg=cc(dn,"products"),WE=cc(dn,"banner"),qE=cc(dn,"recent");async function dg(){return(await Go(cg)).docs.map(n=>({...n.data(),id:n.id}))}async function KE(){return(await Go(WE)).docs.map(n=>({...n.data(),id:n.id}))}async function GE(){return(await Go(qE)).docs.map(n=>({...n.data(),id:n.id}))}async function QE(t){const e=bE(cg,zE("title","==",t));return(await Go(e)).docs.map(i=>({...i.data(),id:i.id}))}async function Yo(t){const e=Wi(dn,"user",t);let n;try{const r=await jE(e);r.exists()?n=r.data():console.log("Document does not exist")}catch(r){console.log(r)}return n}const YE=async(t,e,n,r)=>{await Qo(Wi(dn,"user",t),{cart:[{title:e,image:n,price:r,quantity:1}]})},JE=async(t,e,n)=>{t[e].quantity=t[e].quantity+1,await Qo(Wi(dn,"user",n),{cart:t})},XE=async(t,e,n,r,i)=>{t.push({title:n,image:r,price:i,quantity:1}),await Qo(Wi(dn,"user",e),{cart:t})},vc=async(t,e,n,r)=>{const i=await Yo(t);if(!i||i.length===0){YE(t,e,n,r);return}const s=i.cart.find(a=>a.title===e),o=i.cart;if(s){const a=o.indexOf(s);JE(o,a,t)}else XE(o,t,e,n,r)},ZE=async(t,e,n)=>{t[e].quantity=t[e].quantity-1,t[e].quantity===0&&t.splice(e,1),await Qo(Wi(dn,"user",n),{cart:t})},ek=async(t,e)=>{const n=await Yo(t),r=n.cart.find(o=>o.title===e),i=n.cart,s=i.indexOf(r);ZE(i,s,t)},Ua=wS(ug),tk=new yt,fg=E.createContext(null);function nk({children:t}){const[e,n]=K.useState(""),[r,i]=K.useState(!0),[s,o]=K.useState(0),a=()=>{R_(Ua,tk).then(u=>g(qp,{to:"/",state:{from:location},replace:!0})).catch(u=>!1)},l=()=>{Ua.signOut()};return K.useEffect(()=>{const u=s_(Ua,d=>{n(d),i(!1)});return()=>{u()}},[]),g(fg.Provider,{value:{signInWithGoogle:a,user:e,googleSignOut:l,loading:r,count:s,setCount:o},children:t})}function fn(){return E.useContext(fg)}const rk=()=>{const{googleSignOut:t,user:e}=fn();return O("div",{className:"footer-container",children:[e&&g("div",{className:"letter",children:g("button",{onClick:t,className:"signout-button",children:"LOGOUT"})}),!e&&e!==""&&O("div",{className:"letter",children:[g("h4",{children:"NEWSLETTER"}),g("h3",{children:"Sign Up to NewsLetter"}),O("div",{className:"email",children:[g("input",{type:"email"}),g("button",{children:"Enter"})]})]}),O("div",{className:"footer",children:[g("h5",{children:"Rahul Parihar Pvt. Lim."}),g("img",{src:K0,alt:"payment image"})]})]})};var hg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rf=K.createContext&&K.createContext(hg),sn=globalThis&&globalThis.__assign||function(){return sn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},sn.apply(this,arguments)},ik=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function pg(t){return t&&t.map(function(e,n){return K.createElement(e.tag,sn({key:n},e.attr),pg(e.child))})}function At(t){return function(e){return K.createElement(sk,sn({attr:sn({},t.attr)},e),pg(t.child))}}function sk(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=ik(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),K.createElement("svg",sn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:sn(sn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&K.createElement("title",null,s),t.children)};return Rf!==void 0?K.createElement(Rf.Consumer,null,function(n){return e(n)}):e(hg)}function ok(t){return At({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]})(t)}function yc(t){return At({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"}}]})(t)}const ak=()=>{const{count:t,user:e,setCount:n}=fn();(async()=>{if(!e){n(0);return}await Promise.resolve(await Yo(e.uid)).then(y=>{n(y.cart.length)})})();const[i,s]=K.useState(!1);window.addEventListener("scroll",()=>{window.pageYOffset>70?s(!0):s(!1)});const[o,a]=K.useState(!1);function l(){a(_=>!_)}const[u,d]=K.useState("");function m(_){d(_.target.value)}function h(){a(!1),d("")}function w(_){var y;_.key==="Enter"&&((y=document.getElementById("search-button"))==null||y.click(),h())}return O("div",{className:`header ${i?"sticky":""}`,children:[O("div",{className:"left",children:[g(Ze,{to:"/home",children:g("ul",{children:"Home"})}),g(Ze,{to:"/about",children:g("ul",{children:"About"})}),g(Ze,{to:"/products",children:g("ul",{children:"Products"})})]}),g(Ze,{to:"/home",children:g("div",{className:"center",children:"RPSTORE"})}),O("div",{className:"right",children:[g("div",{className:"header-products",children:g(Ze,{to:"/products",children:"Products"})}),g("div",{children:O("div",{className:"searchIcon",children:[g("div",{onClick:l,children:g(ok,{})}),o&&O("div",{className:"searchDiv",children:[g("input",{type:"text",onChange:m,onKeyDown:w}),g(Ze,{to:{pathname:`/search/${u}`},children:g("button",{id:"search-button",onClick:h,children:"Enter"})})]})]})}),g(Ze,{to:{pathname:"/cart"},children:O("div",{className:"cart",children:[g(yc,{}),g("div",{className:"cartScore",children:t})]})})]})]})};const lk=()=>g("div",{className:"empty-search",children:g("h1",{children:"Please Enter Something to Search... I have to type this for edge cases like you, Please make my life easy."})});function uk(t){return At({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(t)}function ck(t){return At({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(t)}function dk(t){return At({tag:"svg",attr:{viewBox:"0 0 8 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"}}]})(t)}const fk=()=>{const[t,e]=K.useState();E.useEffect(()=>{Promise.resolve(KE()).then(u=>{e(u)})},[]);const n=Wu(),r=l=>{n(`/product/${l}`)},[i,s]=E.useState(0),o=()=>{s(l=>l===t.length-1?0:l+1)},a=()=>{s(l=>l===0?t.length-1:l-1)};return E.useEffect(()=>{const l=setInterval(()=>{var u;(u=document.getElementById("plusbutton"))==null||u.click()},3e3);return()=>clearInterval(l)},[]),t?O("div",{className:"banner",children:[g("div",{className:"banner__image",children:t.map(l=>g("div",{className:"banner__i",style:{backgroundImage:`url(${l.image})`,transform:`translateX(-${i*100}%)`},onClick:()=>r(l.title),children:g("h2",{children:l.title})},l.title))}),O("div",{className:"arrow",children:[g("div",{onClick:a,children:g(uk,{})}),g("div",{id:"plusbutton",onClick:o,children:g(ck,{})})]}),g("div",{className:"dot",children:t.map((l,u)=>g("div",{className:u===i?"highlighted-dot":"",onClick:()=>s(u),children:g(dk,{},u)},u))})]}):g(Tn,{})};const wc=t=>{const{user:e}=fn(),n=async()=>{await vc(e.uid,t.title,t.image,t.price),document.location.reload()};return O("div",{className:"solo",children:[g(Ze,{to:{pathname:`/product/${t.title}`},children:g("img",{className:"product-image",src:t.image,alt:`image of the book ${t.title}`})}),g("div",{className:"title",children:g("h4",{children:t.title})}),O("div",{className:"price",children:[O("h4",{children:["₹ ",t.price]}),O("button",{onClick:n,children:["ADD ",g(yc,{})]})]})]})};const hk=()=>{const[t,e]=K.useState();E.useEffect(()=>{Promise.resolve(GE()).then(i=>{e(i)})},[]);const n=()=>t.map(r=>g(wc,{id:r.id,title:r.title,image:r.image,price:r.price},r.id));return t?O(Tn,{children:[g("h1",{className:"product-header",children:"RECENTLY ADDED"}),g("div",{className:"recent-container",children:n()})]}):g(Tn,{})},pk=()=>O("div",{children:[g(fk,{}),g(hk,{})]});const mk=()=>{const[t,e]=K.useState("all"),[n,r]=K.useState(null),[i,s]=K.useState([{category:"",description:"",id:"",image:"",pages:320,price:448,title:""}]);E.useEffect(()=>{Promise.resolve(dg()).then(d=>{s(d)})},[]);function o(){return i.sort((u,d)=>n==="descending"?d.price-u.price:n==="ascending"?u.price-d.price:n==="random"?Math.random()-.5:0).map(u=>{if(!(t!=="all"&&u.category!==t))return g(wc,{id:u.id,title:u.title,image:u.image,price:u.price},u.id)})}function a(u){let d=u.target;e(d.textContent)}function l(u){let d=u.target;r(d.textContent)}return i[0].title===""?g(Tn,{}):O(Tn,{children:[g("h1",{className:"product-header",children:"Products"}),O("div",{className:"category-filter",children:[g("button",{onClick:a,children:"non-fiction"}),g("button",{onClick:a,children:"biography"}),g("button",{onClick:a,children:"fantasy"}),g("button",{onClick:a,children:"young-adult"}),g("button",{onClick:a,children:"all"})]}),O("div",{className:"category-filter",children:[g("button",{onClick:l,children:"ascending"}),g("button",{onClick:l,children:"descending"}),g("button",{onClick:l,children:"random"})]}),g("div",{className:"thumb-container",children:o()})]})},zn=({children:t})=>{const{user:e,loading:n}=fn();let r=Ui();return n?g("div",{className:"loading-div",children:g("h1",{children:"Loading"})}):e?t:g(qp,{to:"/",state:{from:r},replace:!0})};const gk=()=>{const t=Hp().toSearch,[e,n]=K.useState([{category:"",description:"",id:"",image:"",pages:320,price:448,title:""}]);E.useEffect(()=>{Promise.resolve(dg()).then(o=>{n(o)})},[]);function r(){return t?e.map(s=>{if(s.title.toLowerCase().includes(t.toLowerCase()))return g(wc,{id:s.id,title:s.title,image:s.image,price:s.price},s.id)}):g("div",{children:g("h1",{children:"NO RESULT FOUND"})})}function i(s){if(s)return s.charAt(0).toUpperCase()+s.slice(1)}return O(Tn,{children:[O("h1",{className:"product-header",children:["Search : ",i(t)]}),g("div",{className:"thumb-container",children:r()})]})};function vk(t){return At({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(t)}function yk(t){return At({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#E8EAF6",points:"42,39 6,39 6,23 24,6 42,23"}},{tag:"g",attr:{fill:"#C5CAE9"},child:[{tag:"polygon",attr:{points:"39,21 34,16 34,9 39,9"}},{tag:"rect",attr:{x:"6",y:"39",width:"36",height:"5"}}]},{tag:"polygon",attr:{fill:"#B71C1C",points:"24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"}},{tag:"rect",attr:{x:"18",y:"28",fill:"#D84315",width:"12",height:"16"}},{tag:"rect",attr:{x:"21",y:"17",fill:"#01579B",width:"6",height:"6"}},{tag:"path",attr:{fill:"#FF8A65",d:"M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"}}]})(t)}function wk(t){return At({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#2196F3"},child:[{tag:"rect",attr:{x:"6",y:"22",width:"4",height:"4"}},{tag:"rect",attr:{x:"6",y:"14",width:"4",height:"4"}},{tag:"rect",attr:{x:"6",y:"30",width:"4",height:"4"}},{tag:"rect",attr:{x:"6",y:"6",width:"4",height:"4"}},{tag:"rect",attr:{x:"6",y:"38",width:"4",height:"4"}}]},{tag:"g",attr:{fill:"#2196F3"},child:[{tag:"rect",attr:{x:"14",y:"22",width:"28",height:"4"}},{tag:"rect",attr:{x:"14",y:"14",width:"28",height:"4"}},{tag:"rect",attr:{x:"14",y:"30",width:"28",height:"4"}},{tag:"rect",attr:{x:"14",y:"6",width:"28",height:"4"}},{tag:"rect",attr:{x:"14",y:"38",width:"28",height:"4"}}]}]})(t)}const _k=()=>{const{signInWithGoogle:t,user:e}=fn();return O("div",{className:"signup-container",children:[!e&&e!==""&&O("div",{onClick:()=>{t()},className:"signin-button",children:[g("span",{className:"larger",children:g(vk,{})}),"Signup With Google"]}),e&&O("div",{className:"signin-after",children:[g(Ze,{to:"/home",children:O("div",{className:"signin-button",children:[g("span",{className:"larger",children:g(yk,{})}),"Home"]})}),g(Ze,{to:"/products",children:O("div",{className:"signin-button",children:[g("span",{className:"larger",children:g(wk,{})}),"All Products"]})})]})]})};function Sk(t){return At({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}}]})(t)}const Ek=()=>{const t=Hp().productid,[e,n]=K.useState();E.useEffect(()=>{Promise.resolve(QE(t)).then(o=>{n(o[0])})},[]);const{user:r}=fn(),i=async(s,o,a)=>{await vc(r.uid,s,o,a),document.location.reload()};return e?O("div",{className:"single-container",children:[g("div",{className:"single-left",children:g("img",{src:e.image,alt:`image of book ${e.title}`})}),O("div",{className:"single-right",children:[g("h1",{children:e.title}),O("h1",{children:["₹ ",e.price]}),O("button",{className:"single-add-cart",onClick:()=>i(e.title,e.image,e.price),children:["ADD ",g(yc,{})]}),O("div",{className:"extra-details",children:[O("div",{className:"pages-detail",children:[g("h1",{children:g(Sk,{})}),O("h2",{children:[": ",e.pages," Pages"]})]}),O("h2",{children:["Category : ",e.category.toUpperCase()]})]}),g("h3",{children:e.description})]})]}):g(Tn,{})};const kk=t=>{const{user:e}=fn(),n=async()=>{await vc(e.uid,t.title,t.image,t.price),document.location.reload()},r=async()=>{await ek(e.uid,t.title),document.location.reload()};return O("div",{className:"cart-container",children:[g("div",{className:"left",children:g(Ze,{to:{pathname:`/product/${t.title}`},children:g("img",{src:t.image,alt:"image of the cart item"})})}),O("div",{className:"right",children:[g("h1",{children:t.title}),O("h2",{className:"limegreen",children:["Price : ",t.price," ₹"]}),O("h2",{children:["Quantity : ",t.quantity]}),O("h2",{className:"limegreen",children:["Subtotal : ",t.quantity*t.price," ₹"]}),g("button",{className:"green-button",onClick:n,children:"ADD"}),g("button",{className:"red-button",onClick:r,children:t.quantity===1?"REMOVE":"REDUCE"})]})]})};const Ik=()=>{const{user:t,setCount:e}=fn(),[n,r]=K.useState();E.useEffect(()=>{Promise.resolve(Yo(t.uid)).then(l=>{l&&(l.cart&&r(l.cart),e(l.cart.length))})},[]);function i(){return n.map(a=>g(kk,{image:a.image,title:a.title,quantity:a.quantity,price:a.price},a.title))}const s=(a,l)=>a+l.quantity*l.price,o=()=>{let a;return n?a=n.reduce(s,0):a=0,O("div",{className:"cart-checkout",children:[O("h1",{children:["TOTAL = ",O("span",{className:"limegreen",children:[a," ₹/-"]})]}),g("button",{children:"CHECKOUT"})]})};return n?O("div",{children:[n&&i(),o()]}):g("div",{})};function Tk(){return g("div",{className:"app",children:g(nk,{children:O(B0,{children:[g(ak,{}),O(F0,{children:[g(mt,{path:"/",element:g(_k,{})}),g(mt,{path:"home",element:g(zn,{children:g(pk,{})})}),g(mt,{path:"products",element:g(zn,{children:g(mk,{})})}),g(mt,{path:"about",element:g(q0,{})}),g(mt,{path:"search/:toSearch",element:g(zn,{children:g(gk,{})})}),g(mt,{path:"search",element:g(zn,{children:g(lk,{})})}),g(mt,{path:"product/:productid",element:g(zn,{children:g(Ek,{})})}),g(mt,{path:"cart",element:g(zn,{children:g(Ik,{})})})]}),g(rk,{})]})})})}$a.createRoot(document.getElementById("root")).render(g(K.StrictMode,{children:g(Tk,{})}));
