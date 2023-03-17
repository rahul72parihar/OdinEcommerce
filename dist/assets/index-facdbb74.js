function Vm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Bm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qr={},jm={get exports(){return Qr},set exports(t){Qr=t}},so={},E={},Hm={get exports(){return E},set exports(t){E=t}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ki=Symbol.for("react.element"),Wm=Symbol.for("react.portal"),Km=Symbol.for("react.fragment"),qm=Symbol.for("react.strict_mode"),Gm=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),Xm=Symbol.for("react.suspense"),Zm=Symbol.for("react.memo"),eg=Symbol.for("react.lazy"),tc=Symbol.iterator;function tg(t){return t===null||typeof t!="object"?null:(t=tc&&t[tc]||t["@@iterator"],typeof t=="function"?t:null)}var uf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cf=Object.assign,df={};function mr(t,e,n){this.props=t,this.context=e,this.refs=df,this.updater=n||uf}mr.prototype.isReactComponent={};mr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ff(){}ff.prototype=mr.prototype;function Nl(t,e,n){this.props=t,this.context=e,this.refs=df,this.updater=n||uf}var Rl=Nl.prototype=new ff;Rl.constructor=Nl;cf(Rl,mr.prototype);Rl.isPureReactComponent=!0;var nc=Array.isArray,hf=Object.prototype.hasOwnProperty,Ol={current:null},pf={key:!0,ref:!0,__self:!0,__source:!0};function mf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hf.call(e,r)&&!pf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ki,type:t,key:s,ref:o,props:i,_owner:Ol.current}}function ng(t,e){return{$$typeof:ki,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xl(t){return typeof t=="object"&&t!==null&&t.$$typeof===ki}function rg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rc=/\/+/g;function Mo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rg(""+t.key):e.toString(36)}function ss(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ki:case Wm:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Mo(o,0):r,nc(i)?(n="",t!=null&&(n=t.replace(rc,"$&/")+"/"),ss(i,e,n,"",function(u){return u})):i!=null&&(xl(i)&&(i=ng(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",nc(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Mo(s,a);o+=ss(s,e,n,l,i)}else if(l=tg(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Mo(s,a++),o+=ss(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bi(t,e,n){if(t==null)return t;var r=[],i=0;return ss(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ig(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Se={current:null},os={transition:null},sg={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:os,ReactCurrentOwner:Ol};F.Children={map:bi,forEach:function(t,e,n){bi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bi(t,function(){e++}),e},toArray:function(t){return bi(t,function(e){return e})||[]},only:function(t){if(!xl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=mr;F.Fragment=Km;F.Profiler=Gm;F.PureComponent=Nl;F.StrictMode=qm;F.Suspense=Xm;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sg;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ol.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)hf.call(e,l)&&!pf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ki,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:Ym,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qm,_context:t},t.Consumer=t};F.createElement=mf;F.createFactory=function(t){var e=mf.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:Jm,render:t}};F.isValidElement=xl;F.lazy=function(t){return{$$typeof:eg,_payload:{_status:-1,_result:t},_init:ig}};F.memo=function(t,e){return{$$typeof:Zm,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=os.transition;os.transition={};try{t()}finally{os.transition=e}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(t,e){return Se.current.useCallback(t,e)};F.useContext=function(t){return Se.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return Se.current.useDeferredValue(t)};F.useEffect=function(t,e){return Se.current.useEffect(t,e)};F.useId=function(){return Se.current.useId()};F.useImperativeHandle=function(t,e,n){return Se.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return Se.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return Se.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return Se.current.useMemo(t,e)};F.useReducer=function(t,e,n){return Se.current.useReducer(t,e,n)};F.useRef=function(t){return Se.current.useRef(t)};F.useState=function(t){return Se.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return Se.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return Se.current.useTransition()};F.version="18.2.0";(function(t){t.exports=F})(Hm);const Z=Bm(E),ya=Vm({__proto__:null,default:Z},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og=E,ag=Symbol.for("react.element"),lg=Symbol.for("react.fragment"),ug=Object.prototype.hasOwnProperty,cg=og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dg={key:!0,ref:!0,__self:!0,__source:!0};function gf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ug.call(e,r)&&!dg.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ag,type:t,key:s,ref:o,props:i,_owner:cg.current}}so.Fragment=lg;so.jsx=gf;so.jsxs=gf;(function(t){t.exports=so})(jm);const Yr=Qr.Fragment,g=Qr.jsx,L=Qr.jsxs;var wa={},_a={},fg={get exports(){return _a},set exports(t){_a=t}},Me={},Sa={},hg={get exports(){return Sa},set exports(t){Sa=t}},vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,A){var D=C.length;C.push(A);e:for(;0<D;){var J=D-1>>>1,se=C[J];if(0<i(se,A))C[J]=A,C[D]=se,D=J;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var A=C[0],D=C.pop();if(D!==A){C[0]=D;e:for(var J=0,se=C.length,Fi=se>>>1;J<Fi;){var ln=2*(J+1)-1,Lo=C[ln],un=ln+1,$i=C[un];if(0>i(Lo,D))un<se&&0>i($i,Lo)?(C[J]=$i,C[un]=D,J=un):(C[J]=Lo,C[ln]=D,J=ln);else if(un<se&&0>i($i,D))C[J]=$i,C[un]=D,J=un;else break e}}return A}function i(C,A){var D=C.sortIndex-A.sortIndex;return D!==0?D:C.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,p=null,m=3,y=!1,S=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=C)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function v(C){if(w=!1,h(C),!S)if(n(l)!==null)S=!0,Ao(k);else{var A=n(u);A!==null&&Do(v,A.startTime-C)}}function k(C,A){S=!1,w&&(w=!1,f(N),N=-1),y=!0;var D=m;try{for(h(A),p=n(l);p!==null&&(!(p.expirationTime>A)||C&&!je());){var J=p.callback;if(typeof J=="function"){p.callback=null,m=p.priorityLevel;var se=J(p.expirationTime<=A);A=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&r(l),h(A)}else r(l);p=n(l)}if(p!==null)var Fi=!0;else{var ln=n(u);ln!==null&&Do(v,ln.startTime-A),Fi=!1}return Fi}finally{p=null,m=D,y=!1}}var T=!1,P=null,N=-1,j=5,U=-1;function je(){return!(t.unstable_now()-U<j)}function Er(){if(P!==null){var C=t.unstable_now();U=C;var A=!0;try{A=P(!0,C)}finally{A?kr():(T=!1,P=null)}}else T=!1}var kr;if(typeof c=="function")kr=function(){c(Er)};else if(typeof MessageChannel<"u"){var ec=new MessageChannel,zm=ec.port2;ec.port1.onmessage=Er,kr=function(){zm.postMessage(null)}}else kr=function(){R(Er,0)};function Ao(C){P=C,T||(T=!0,kr())}function Do(C,A){N=R(function(){C(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){S||y||(S=!0,Ao(k))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var D=m;m=A;try{return C()}finally{m=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,A){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var D=m;m=C;try{return A()}finally{m=D}},t.unstable_scheduleCallback=function(C,A,D){var J=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?J+D:J):D=J,C){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=D+se,C={id:d++,callback:A,priorityLevel:C,startTime:D,expirationTime:se,sortIndex:-1},D>J?(C.sortIndex=D,e(u,C),n(l)===null&&C===n(u)&&(w?(f(N),N=-1):w=!0,Do(v,D-J))):(C.sortIndex=se,e(l,C),S||y||(S=!0,Ao(k))),C},t.unstable_shouldYield=je,t.unstable_wrapCallback=function(C){var A=m;return function(){var D=m;m=A;try{return C.apply(this,arguments)}finally{m=D}}}})(vf);(function(t){t.exports=vf})(hg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=E,Le=Sa;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wf=new Set,Jr={};function xn(t,e){rr(t,e),rr(t+"Capture",e)}function rr(t,e){for(Jr[t]=e,t=0;t<e.length;t++)wf.add(e[t])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,pg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ic={},sc={};function mg(t){return Ea.call(sc,t)?!0:Ea.call(ic,t)?!1:pg.test(t)?sc[t]=!0:(ic[t]=!0,!1)}function gg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vg(t,e,n,r){if(e===null||typeof e>"u"||gg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ee(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){de[t]=new Ee(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];de[e]=new Ee(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){de[t]=new Ee(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){de[t]=new Ee(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){de[t]=new Ee(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){de[t]=new Ee(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){de[t]=new Ee(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){de[t]=new Ee(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){de[t]=new Ee(t,5,!1,t.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function Dl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Al,Dl);de[e]=new Ee(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Al,Dl);de[e]=new Ee(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Al,Dl);de[e]=new Ee(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){de[t]=new Ee(t,1,!1,t.toLowerCase(),null,!1,!1)});de.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){de[t]=new Ee(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ll(t,e,n,r){var i=de.hasOwnProperty(e)?de[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vg(e,n,i,r)&&(n=null),r||i===null?mg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tt=yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Ml=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),_f=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),Ul=Symbol.for("react.forward_ref"),Ia=Symbol.for("react.suspense"),Ca=Symbol.for("react.suspense_list"),Fl=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Ef=Symbol.for("react.offscreen"),oc=Symbol.iterator;function Ir(t){return t===null||typeof t!="object"?null:(t=oc&&t[oc]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,Uo;function Ar(t){if(Uo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uo=e&&e[1]||""}return`
`+Uo+t}var Fo=!1;function $o(t,e){if(!t||Fo)return"";Fo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ar(t):""}function yg(t){switch(t.tag){case 5:return Ar(t.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return t=$o(t.type,!1),t;case 11:return t=$o(t.type.render,!1),t;case 1:return t=$o(t.type,!0),t;default:return""}}function Ta(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fn:return"Fragment";case Un:return"Portal";case ka:return"Profiler";case Ml:return"StrictMode";case Ia:return"Suspense";case Ca:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sf:return(t.displayName||"Context")+".Consumer";case _f:return(t._context.displayName||"Context")+".Provider";case Ul:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fl:return e=t.displayName||null,e!==null?e:Ta(t.type)||"Memo";case At:e=t._payload,t=t._init;try{return Ta(t(e))}catch{}}return null}function wg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(e);case 8:return e===Ml?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _g(t){var e=kf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vi(t){t._valueTracker||(t._valueTracker=_g(t))}function If(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=kf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Es(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pa(t,e){var n=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ac(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=nn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cf(t,e){e=e.checked,e!=null&&Ll(t,"checked",e,!1)}function Na(t,e){Cf(t,e);var n=nn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ra(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ra(t,e.type,nn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ra(t,e,n){(e!=="number"||Es(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Dr=Array.isArray;function Gn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+nn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Oa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if(Dr(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nn(n)}}function Tf(t,e){var n=nn(e.value),r=nn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bi,Nf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sg=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(t){Sg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ur[e]=Ur[t]})});function Rf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ur.hasOwnProperty(t)&&Ur[t]?(""+e).trim():e+"px"}function Of(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Eg=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Aa(t,e){if(e){if(Eg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function Da(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var La=null;function $l(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ma=null,Qn=null,Yn=null;function dc(t){if(t=Ti(t)){if(typeof Ma!="function")throw Error(_(280));var e=t.stateNode;e&&(e=co(e),Ma(t.stateNode,t.type,e))}}function xf(t){Qn?Yn?Yn.push(t):Yn=[t]:Qn=t}function Af(){if(Qn){var t=Qn,e=Yn;if(Yn=Qn=null,dc(t),e)for(t=0;t<e.length;t++)dc(e[t])}}function Df(t,e){return t(e)}function Lf(){}var bo=!1;function Mf(t,e,n){if(bo)return t(e,n);bo=!0;try{return Df(t,e,n)}finally{bo=!1,(Qn!==null||Yn!==null)&&(Lf(),Af())}}function Zr(t,e){var n=t.stateNode;if(n===null)return null;var r=co(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var Ua=!1;if(wt)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){Ua=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{Ua=!1}function kg(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Fr=!1,ks=null,Is=!1,Fa=null,Ig={onError:function(t){Fr=!0,ks=t}};function Cg(t,e,n,r,i,s,o,a,l){Fr=!1,ks=null,kg.apply(Ig,arguments)}function Tg(t,e,n,r,i,s,o,a,l){if(Cg.apply(this,arguments),Fr){if(Fr){var u=ks;Fr=!1,ks=null}else throw Error(_(198));Is||(Is=!0,Fa=u)}}function An(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Uf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fc(t){if(An(t)!==t)throw Error(_(188))}function Pg(t){var e=t.alternate;if(!e){if(e=An(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fc(i),t;if(s===r)return fc(i),e;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function Ff(t){return t=Pg(t),t!==null?$f(t):null}function $f(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$f(t);if(e!==null)return e;t=t.sibling}return null}var bf=Le.unstable_scheduleCallback,hc=Le.unstable_cancelCallback,Ng=Le.unstable_shouldYield,Rg=Le.unstable_requestPaint,X=Le.unstable_now,Og=Le.unstable_getCurrentPriorityLevel,bl=Le.unstable_ImmediatePriority,zf=Le.unstable_UserBlockingPriority,Cs=Le.unstable_NormalPriority,xg=Le.unstable_LowPriority,Vf=Le.unstable_IdlePriority,oo=null,it=null;function Ag(t){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(oo,t,void 0,(t.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Mg,Dg=Math.log,Lg=Math.LN2;function Mg(t){return t>>>=0,t===0?32:31-(Dg(t)/Lg|0)|0}var ji=64,Hi=4194304;function Lr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ts(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Lr(a):(s&=o,s!==0&&(r=Lr(s)))}else o=n&~i,o!==0?r=Lr(o):s!==0&&(r=Lr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qe(e),i=1<<n,r|=t[n],e&=~i;return r}function Ug(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Ug(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $a(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bf(){var t=ji;return ji<<=1,!(ji&4194240)&&(ji=64),t}function zo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ii(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qe(e),t[e]=n}function $g(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qe(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function jf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Hf,Vl,Wf,Kf,qf,ba=!1,Wi=[],jt=null,Ht=null,Wt=null,ei=new Map,ti=new Map,Mt=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(t,e){switch(t){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":ei.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(e.pointerId)}}function Tr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ti(e),e!==null&&Vl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function zg(t,e,n,r,i){switch(e){case"focusin":return jt=Tr(jt,t,e,n,r,i),!0;case"dragenter":return Ht=Tr(Ht,t,e,n,r,i),!0;case"mouseover":return Wt=Tr(Wt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ei.set(s,Tr(ei.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ti.set(s,Tr(ti.get(s)||null,t,e,n,r,i)),!0}return!1}function Gf(t){var e=pn(t.target);if(e!==null){var n=An(e);if(n!==null){if(e=n.tag,e===13){if(e=Uf(n),e!==null){t.blockedOn=e,qf(t.priority,function(){Wf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function as(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=za(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);La=r,n.target.dispatchEvent(r),La=null}else return e=Ti(n),e!==null&&Vl(e),t.blockedOn=n,!1;e.shift()}return!0}function mc(t,e,n){as(t)&&n.delete(e)}function Vg(){ba=!1,jt!==null&&as(jt)&&(jt=null),Ht!==null&&as(Ht)&&(Ht=null),Wt!==null&&as(Wt)&&(Wt=null),ei.forEach(mc),ti.forEach(mc)}function Pr(t,e){t.blockedOn===e&&(t.blockedOn=null,ba||(ba=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Vg)))}function ni(t){function e(i){return Pr(i,t)}if(0<Wi.length){Pr(Wi[0],t);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jt!==null&&Pr(jt,t),Ht!==null&&Pr(Ht,t),Wt!==null&&Pr(Wt,t),ei.forEach(e),ti.forEach(e),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)Gf(n),n.blockedOn===null&&Mt.shift()}var Jn=Tt.ReactCurrentBatchConfig,Ps=!0;function Bg(t,e,n,r){var i=V,s=Jn.transition;Jn.transition=null;try{V=1,Bl(t,e,n,r)}finally{V=i,Jn.transition=s}}function jg(t,e,n,r){var i=V,s=Jn.transition;Jn.transition=null;try{V=4,Bl(t,e,n,r)}finally{V=i,Jn.transition=s}}function Bl(t,e,n,r){if(Ps){var i=za(t,e,n,r);if(i===null)Yo(t,e,r,Ns,n),pc(t,r);else if(zg(i,t,e,n,r))r.stopPropagation();else if(pc(t,r),e&4&&-1<bg.indexOf(t)){for(;i!==null;){var s=Ti(i);if(s!==null&&Hf(s),s=za(t,e,n,r),s===null&&Yo(t,e,r,Ns,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yo(t,e,r,null,n)}}var Ns=null;function za(t,e,n,r){if(Ns=null,t=$l(r),t=pn(t),t!==null)if(e=An(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Uf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ns=t,null}function Qf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Og()){case bl:return 1;case zf:return 4;case Cs:case xg:return 16;case Vf:return 536870912;default:return 16}default:return 16}}var zt=null,jl=null,ls=null;function Yf(){if(ls)return ls;var t,e=jl,n=e.length,r,i="value"in zt?zt.value:zt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ls=i.slice(t,1<r?1-r:void 0)}function us(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ki(){return!0}function gc(){return!1}function Ue(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ki:gc,this.isPropagationStopped=gc,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),e}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Ue(gr),Ci=Q({},gr,{view:0,detail:0}),Hg=Ue(Ci),Vo,Bo,Nr,ao=Q({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Nr&&(Nr&&t.type==="mousemove"?(Vo=t.screenX-Nr.screenX,Bo=t.screenY-Nr.screenY):Bo=Vo=0,Nr=t),Vo)},movementY:function(t){return"movementY"in t?t.movementY:Bo}}),vc=Ue(ao),Wg=Q({},ao,{dataTransfer:0}),Kg=Ue(Wg),qg=Q({},Ci,{relatedTarget:0}),jo=Ue(qg),Gg=Q({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qg=Ue(Gg),Yg=Q({},gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jg=Ue(Yg),Xg=Q({},gr,{data:0}),yc=Ue(Xg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tv[t])?!!e[t]:!1}function Wl(){return nv}var rv=Q({},Ci,{key:function(t){if(t.key){var e=Zg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ev[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(t){return t.type==="keypress"?us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iv=Ue(rv),sv=Q({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=Ue(sv),ov=Q({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),av=Ue(ov),lv=Q({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uv=Ue(lv),cv=Q({},ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dv=Ue(cv),fv=[9,13,27,32],Kl=wt&&"CompositionEvent"in window,$r=null;wt&&"documentMode"in document&&($r=document.documentMode);var hv=wt&&"TextEvent"in window&&!$r,Jf=wt&&(!Kl||$r&&8<$r&&11>=$r),_c=String.fromCharCode(32),Sc=!1;function Xf(t,e){switch(t){case"keyup":return fv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $n=!1;function pv(t,e){switch(t){case"compositionend":return Zf(e);case"keypress":return e.which!==32?null:(Sc=!0,_c);case"textInput":return t=e.data,t===_c&&Sc?null:t;default:return null}}function mv(t,e){if($n)return t==="compositionend"||!Kl&&Xf(t,e)?(t=Yf(),ls=jl=zt=null,$n=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jf&&e.locale!=="ko"?null:e.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ec(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gv[t.type]:e==="textarea"}function eh(t,e,n,r){xf(r),e=Rs(e,"onChange"),0<e.length&&(n=new Hl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var br=null,ri=null;function vv(t){dh(t,0)}function lo(t){var e=Vn(t);if(If(e))return t}function yv(t,e){if(t==="change")return e}var th=!1;if(wt){var Ho;if(wt){var Wo="oninput"in document;if(!Wo){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),Wo=typeof kc.oninput=="function"}Ho=Wo}else Ho=!1;th=Ho&&(!document.documentMode||9<document.documentMode)}function Ic(){br&&(br.detachEvent("onpropertychange",nh),ri=br=null)}function nh(t){if(t.propertyName==="value"&&lo(ri)){var e=[];eh(e,ri,t,$l(t)),Mf(vv,e)}}function wv(t,e,n){t==="focusin"?(Ic(),br=e,ri=n,br.attachEvent("onpropertychange",nh)):t==="focusout"&&Ic()}function _v(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lo(ri)}function Sv(t,e){if(t==="click")return lo(e)}function Ev(t,e){if(t==="input"||t==="change")return lo(e)}function kv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Je=typeof Object.is=="function"?Object.is:kv;function ii(t,e){if(Je(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ea.call(e,i)||!Je(t[i],e[i]))return!1}return!0}function Cc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tc(t,e){var n=Cc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cc(n)}}function rh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ih(){for(var t=window,e=Es();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Es(t.document)}return e}function ql(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Iv(t){var e=ih(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rh(n.ownerDocument.documentElement,n)){if(r!==null&&ql(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Tc(n,s);var o=Tc(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cv=wt&&"documentMode"in document&&11>=document.documentMode,bn=null,Va=null,zr=null,Ba=!1;function Pc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ba||bn==null||bn!==Es(r)||(r=bn,"selectionStart"in r&&ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&ii(zr,r)||(zr=r,r=Rs(Va,"onSelect"),0<r.length&&(e=new Hl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bn)))}function qi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zn={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},Ko={},sh={};wt&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function uo(t){if(Ko[t])return Ko[t];if(!zn[t])return t;var e=zn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sh)return Ko[t]=e[n];return t}var oh=uo("animationend"),ah=uo("animationiteration"),lh=uo("animationstart"),uh=uo("transitionend"),ch=new Map,Nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(t,e){ch.set(t,e),xn(e,[t])}for(var qo=0;qo<Nc.length;qo++){var Go=Nc[qo],Tv=Go.toLowerCase(),Pv=Go[0].toUpperCase()+Go.slice(1);sn(Tv,"on"+Pv)}sn(oh,"onAnimationEnd");sn(ah,"onAnimationIteration");sn(lh,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(uh,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Rc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Tg(r,e,void 0,t),t.currentTarget=null}function dh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Rc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Rc(i,a,u),s=l}}}if(Is)throw t=Fa,Is=!1,Fa=null,t}function H(t,e){var n=e[qa];n===void 0&&(n=e[qa]=new Set);var r=t+"__bubble";n.has(r)||(fh(e,t,2,!1),n.add(r))}function Qo(t,e,n){var r=0;e&&(r|=4),fh(n,t,r,e)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function si(t){if(!t[Gi]){t[Gi]=!0,wf.forEach(function(n){n!=="selectionchange"&&(Nv.has(n)||Qo(n,!1,t),Qo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gi]||(e[Gi]=!0,Qo("selectionchange",!1,e))}}function fh(t,e,n,r){switch(Qf(e)){case 1:var i=Bg;break;case 4:i=jg;break;default:i=Bl}n=i.bind(null,e,n,t),i=void 0,!Ua||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yo(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Mf(function(){var u=s,d=$l(n),p=[];e:{var m=ch.get(t);if(m!==void 0){var y=Hl,S=t;switch(t){case"keypress":if(us(n)===0)break e;case"keydown":case"keyup":y=iv;break;case"focusin":S="focus",y=jo;break;case"focusout":S="blur",y=jo;break;case"beforeblur":case"afterblur":y=jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=av;break;case oh:case ah:case lh:y=Qg;break;case uh:y=uv;break;case"scroll":y=Hg;break;case"wheel":y=dv;break;case"copy":case"cut":case"paste":y=Jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wc}var w=(e&4)!==0,R=!w&&t==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,h;c!==null;){h=c;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,f!==null&&(v=Zr(c,f),v!=null&&w.push(oi(c,v,h)))),R)break;c=c.return}0<w.length&&(m=new y(m,S,null,n,d),p.push({event:m,listeners:w}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==La&&(S=n.relatedTarget||n.fromElement)&&(pn(S)||S[_t]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=u,S=S?pn(S):null,S!==null&&(R=An(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=u),y!==S)){if(w=vc,v="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(w=wc,v="onPointerLeave",f="onPointerEnter",c="pointer"),R=y==null?m:Vn(y),h=S==null?m:Vn(S),m=new w(v,c+"leave",y,n,d),m.target=R,m.relatedTarget=h,v=null,pn(d)===u&&(w=new w(f,c+"enter",S,n,d),w.target=h,w.relatedTarget=R,v=w),R=v,y&&S)t:{for(w=y,f=S,c=0,h=w;h;h=Ln(h))c++;for(h=0,v=f;v;v=Ln(v))h++;for(;0<c-h;)w=Ln(w),c--;for(;0<h-c;)f=Ln(f),h--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=Ln(w),f=Ln(f)}w=null}else w=null;y!==null&&Oc(p,m,y,w,!1),S!==null&&R!==null&&Oc(p,R,S,w,!0)}}e:{if(m=u?Vn(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var k=yv;else if(Ec(m))if(th)k=Ev;else{k=_v;var T=wv}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Sv);if(k&&(k=k(t,u))){eh(p,k,n,d);break e}T&&T(t,m,u),t==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Ra(m,"number",m.value)}switch(T=u?Vn(u):window,t){case"focusin":(Ec(T)||T.contentEditable==="true")&&(bn=T,Va=u,zr=null);break;case"focusout":zr=Va=bn=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,Pc(p,n,d);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":Pc(p,n,d)}var P;if(Kl)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $n?Xf(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Jf&&n.locale!=="ko"&&($n||N!=="onCompositionStart"?N==="onCompositionEnd"&&$n&&(P=Yf()):(zt=d,jl="value"in zt?zt.value:zt.textContent,$n=!0)),T=Rs(u,N),0<T.length&&(N=new yc(N,t,null,n,d),p.push({event:N,listeners:T}),P?N.data=P:(P=Zf(n),P!==null&&(N.data=P)))),(P=hv?pv(t,n):mv(t,n))&&(u=Rs(u,"onBeforeInput"),0<u.length&&(d=new yc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=P))}dh(p,e)})}function oi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zr(t,n),s!=null&&r.unshift(oi(t,s,i)),s=Zr(t,e),s!=null&&r.push(oi(t,s,i))),t=t.return}return r}function Ln(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Oc(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Zr(n,s),l!=null&&o.unshift(oi(n,l,a))):i||(l=Zr(n,s),l!=null&&o.push(oi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Rv=/\r\n?/g,Ov=/\u0000|\uFFFD/g;function xc(t){return(typeof t=="string"?t:""+t).replace(Rv,`
`).replace(Ov,"")}function Qi(t,e,n){if(e=xc(e),xc(t)!==e&&n)throw Error(_(425))}function Os(){}var ja=null,Ha=null;function Wa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,xv=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,Av=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(t){return Ac.resolve(null).then(t).catch(Dv)}:Ka;function Dv(t){setTimeout(function(){throw t})}function Jo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ni(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ni(e)}function Kt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vr=Math.random().toString(36).slice(2),rt="__reactFiber$"+vr,ai="__reactProps$"+vr,_t="__reactContainer$"+vr,qa="__reactEvents$"+vr,Lv="__reactListeners$"+vr,Mv="__reactHandles$"+vr;function pn(t){var e=t[rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_t]||n[rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dc(t);t!==null;){if(n=t[rt])return n;t=Dc(t)}return e}t=n,n=t.parentNode}return null}function Ti(t){return t=t[rt]||t[_t],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function co(t){return t[ai]||null}var Ga=[],Bn=-1;function on(t){return{current:t}}function W(t){0>Bn||(t.current=Ga[Bn],Ga[Bn]=null,Bn--)}function B(t,e){Bn++,Ga[Bn]=t.current,t.current=e}var rn={},ve=on(rn),Pe=on(!1),Sn=rn;function ir(t,e){var n=t.type.contextTypes;if(!n)return rn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(t){return t=t.childContextTypes,t!=null}function xs(){W(Pe),W(ve)}function Lc(t,e,n){if(ve.current!==rn)throw Error(_(168));B(ve,e),B(Pe,n)}function hh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,wg(t)||"Unknown",i));return Q({},n,r)}function As(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rn,Sn=ve.current,B(ve,t),B(Pe,Pe.current),!0}function Mc(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=hh(t,e,Sn),r.__reactInternalMemoizedMergedChildContext=t,W(Pe),W(ve),B(ve,t)):W(Pe),B(Pe,n)}var ct=null,fo=!1,Xo=!1;function ph(t){ct===null?ct=[t]:ct.push(t)}function Uv(t){fo=!0,ph(t)}function an(){if(!Xo&&ct!==null){Xo=!0;var t=0,e=V;try{var n=ct;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ct=null,fo=!1}catch(i){throw ct!==null&&(ct=ct.slice(t+1)),bf(bl,an),i}finally{V=e,Xo=!1}}return null}var jn=[],Hn=0,Ds=null,Ls=0,Fe=[],$e=0,En=null,pt=1,mt="";function cn(t,e){jn[Hn++]=Ls,jn[Hn++]=Ds,Ds=t,Ls=e}function mh(t,e,n){Fe[$e++]=pt,Fe[$e++]=mt,Fe[$e++]=En,En=t;var r=pt;t=mt;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var s=32-Qe(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pt=1<<32-Qe(e)+i|n<<i|r,mt=s+t}else pt=1<<s|n<<i|r,mt=t}function Gl(t){t.return!==null&&(cn(t,1),mh(t,1,0))}function Ql(t){for(;t===Ds;)Ds=jn[--Hn],jn[Hn]=null,Ls=jn[--Hn],jn[Hn]=null;for(;t===En;)En=Fe[--$e],Fe[$e]=null,mt=Fe[--$e],Fe[$e]=null,pt=Fe[--$e],Fe[$e]=null}var Ae=null,xe=null,K=!1,qe=null;function gh(t,e){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ae=t,xe=Kt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ae=t,xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=En!==null?{id:pt,overflow:mt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ae=t,xe=null,!0):!1;default:return!1}}function Qa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ya(t){if(K){var e=xe;if(e){var n=e;if(!Uc(t,e)){if(Qa(t))throw Error(_(418));e=Kt(n.nextSibling);var r=Ae;e&&Uc(t,e)?gh(r,n):(t.flags=t.flags&-4097|2,K=!1,Ae=t)}}else{if(Qa(t))throw Error(_(418));t.flags=t.flags&-4097|2,K=!1,Ae=t}}}function Fc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ae=t}function Yi(t){if(t!==Ae)return!1;if(!K)return Fc(t),K=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wa(t.type,t.memoizedProps)),e&&(e=xe)){if(Qa(t))throw vh(),Error(_(418));for(;e;)gh(t,e),e=Kt(e.nextSibling)}if(Fc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xe=Kt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xe=null}}else xe=Ae?Kt(t.stateNode.nextSibling):null;return!0}function vh(){for(var t=xe;t;)t=Kt(t.nextSibling)}function sr(){xe=Ae=null,K=!1}function Yl(t){qe===null?qe=[t]:qe.push(t)}var Fv=Tt.ReactCurrentBatchConfig;function We(t,e){if(t&&t.defaultProps){e=Q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ms=on(null),Us=null,Wn=null,Jl=null;function Xl(){Jl=Wn=Us=null}function Zl(t){var e=Ms.current;W(Ms),t._currentValue=e}function Ja(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xn(t,e){Us=t,Jl=Wn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ce=!0),t.firstContext=null)}function Ve(t){var e=t._currentValue;if(Jl!==t)if(t={context:t,memoizedValue:e,next:null},Wn===null){if(Us===null)throw Error(_(308));Wn=t,Us.dependencies={lanes:0,firstContext:t}}else Wn=Wn.next=t;return e}var mn=null;function eu(t){mn===null?mn=[t]:mn.push(t)}function yh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,eu(e)):(n.next=i.next,i.next=n),e.interleaved=n,St(t,r)}function St(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dt=!1;function tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,St(t,n)}return i=r.interleaved,i===null?(e.next=e,eu(r)):(e.next=i.next,i.next=e),r.interleaved=e,St(t,n)}function cs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zl(t,n)}}function $c(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fs(t,e,n,r){var i=t.updateQueue;Dt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,d=u=l=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,w=a;switch(m=e,y=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){p=S.call(y,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,m=typeof S=="function"?S.call(y,p,m):S,m==null)break e;p=Q({},p,m);break e;case 2:Dt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=p):d=d.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);In|=o,t.lanes=o,t.memoizedState=p}}function bc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var _h=new yf.Component().refs;function Xa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ho={isMounted:function(t){return(t=t._reactInternals)?An(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_e(),i=Qt(t),s=yt(r,i);s.payload=e,n!=null&&(s.callback=n),e=qt(t,s,i),e!==null&&(Ye(e,t,i,r),cs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_e(),i=Qt(t),s=yt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qt(t,s,i),e!==null&&(Ye(e,t,i,r),cs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_e(),r=Qt(t),i=yt(n,r);i.tag=2,e!=null&&(i.callback=e),e=qt(t,i,r),e!==null&&(Ye(e,t,r,n),cs(e,t,r))}};function zc(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ii(n,r)||!ii(i,s):!0}function Sh(t,e,n){var r=!1,i=rn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ve(s):(i=Ne(e)?Sn:ve.current,r=e.contextTypes,s=(r=r!=null)?ir(t,i):rn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ho,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ho.enqueueReplaceState(e,e.state,null)}function Za(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=_h,tu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ve(s):(s=Ne(e)?Sn:ve.current,i.context=ir(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ho.enqueueReplaceState(i,i.state,null),Fs(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Rr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===_h&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function Ji(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bc(t){var e=t._init;return e(t._payload)}function Eh(t){function e(f,c){if(t){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Yt(f,c),f.index=0,f.sibling=null,f}function s(f,c,h){return f.index=h,t?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,c,h,v){return c===null||c.tag!==6?(c=sa(h,f.mode,v),c.return=f,c):(c=i(c,h),c.return=f,c)}function l(f,c,h,v){var k=h.type;return k===Fn?d(f,c,h.props.children,v,h.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===At&&Bc(k)===c.type)?(v=i(c,h.props),v.ref=Rr(f,c,h),v.return=f,v):(v=gs(h.type,h.key,h.props,null,f.mode,v),v.ref=Rr(f,c,h),v.return=f,v)}function u(f,c,h,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=oa(h,f.mode,v),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function d(f,c,h,v,k){return c===null||c.tag!==7?(c=wn(h,f.mode,v,k),c.return=f,c):(c=i(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=sa(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case zi:return h=gs(c.type,c.key,c.props,null,f.mode,h),h.ref=Rr(f,null,c),h.return=f,h;case Un:return c=oa(c,f.mode,h),c.return=f,c;case At:var v=c._init;return p(f,v(c._payload),h)}if(Dr(c)||Ir(c))return c=wn(c,f.mode,h,null),c.return=f,c;Ji(f,c)}return null}function m(f,c,h,v){var k=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(f,c,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zi:return h.key===k?l(f,c,h,v):null;case Un:return h.key===k?u(f,c,h,v):null;case At:return k=h._init,m(f,c,k(h._payload),v)}if(Dr(h)||Ir(h))return k!==null?null:d(f,c,h,v,null);Ji(f,h)}return null}function y(f,c,h,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(h)||null,a(c,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zi:return f=f.get(v.key===null?h:v.key)||null,l(c,f,v,k);case Un:return f=f.get(v.key===null?h:v.key)||null,u(c,f,v,k);case At:var T=v._init;return y(f,c,h,T(v._payload),k)}if(Dr(v)||Ir(v))return f=f.get(h)||null,d(c,f,v,k,null);Ji(c,v)}return null}function S(f,c,h,v){for(var k=null,T=null,P=c,N=c=0,j=null;P!==null&&N<h.length;N++){P.index>N?(j=P,P=null):j=P.sibling;var U=m(f,P,h[N],v);if(U===null){P===null&&(P=j);break}t&&P&&U.alternate===null&&e(f,P),c=s(U,c,N),T===null?k=U:T.sibling=U,T=U,P=j}if(N===h.length)return n(f,P),K&&cn(f,N),k;if(P===null){for(;N<h.length;N++)P=p(f,h[N],v),P!==null&&(c=s(P,c,N),T===null?k=P:T.sibling=P,T=P);return K&&cn(f,N),k}for(P=r(f,P);N<h.length;N++)j=y(P,f,N,h[N],v),j!==null&&(t&&j.alternate!==null&&P.delete(j.key===null?N:j.key),c=s(j,c,N),T===null?k=j:T.sibling=j,T=j);return t&&P.forEach(function(je){return e(f,je)}),K&&cn(f,N),k}function w(f,c,h,v){var k=Ir(h);if(typeof k!="function")throw Error(_(150));if(h=k.call(h),h==null)throw Error(_(151));for(var T=k=null,P=c,N=c=0,j=null,U=h.next();P!==null&&!U.done;N++,U=h.next()){P.index>N?(j=P,P=null):j=P.sibling;var je=m(f,P,U.value,v);if(je===null){P===null&&(P=j);break}t&&P&&je.alternate===null&&e(f,P),c=s(je,c,N),T===null?k=je:T.sibling=je,T=je,P=j}if(U.done)return n(f,P),K&&cn(f,N),k;if(P===null){for(;!U.done;N++,U=h.next())U=p(f,U.value,v),U!==null&&(c=s(U,c,N),T===null?k=U:T.sibling=U,T=U);return K&&cn(f,N),k}for(P=r(f,P);!U.done;N++,U=h.next())U=y(P,f,N,U.value,v),U!==null&&(t&&U.alternate!==null&&P.delete(U.key===null?N:U.key),c=s(U,c,N),T===null?k=U:T.sibling=U,T=U);return t&&P.forEach(function(Er){return e(f,Er)}),K&&cn(f,N),k}function R(f,c,h,v){if(typeof h=="object"&&h!==null&&h.type===Fn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case zi:e:{for(var k=h.key,T=c;T!==null;){if(T.key===k){if(k=h.type,k===Fn){if(T.tag===7){n(f,T.sibling),c=i(T,h.props.children),c.return=f,f=c;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===At&&Bc(k)===T.type){n(f,T.sibling),c=i(T,h.props),c.ref=Rr(f,T,h),c.return=f,f=c;break e}n(f,T);break}else e(f,T);T=T.sibling}h.type===Fn?(c=wn(h.props.children,f.mode,v,h.key),c.return=f,f=c):(v=gs(h.type,h.key,h.props,null,f.mode,v),v.ref=Rr(f,c,h),v.return=f,f=v)}return o(f);case Un:e:{for(T=h.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=oa(h,f.mode,v),c.return=f,f=c}return o(f);case At:return T=h._init,R(f,c,T(h._payload),v)}if(Dr(h))return S(f,c,h,v);if(Ir(h))return w(f,c,h,v);Ji(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=sa(h,f.mode,v),c.return=f,f=c),o(f)):n(f,c)}return R}var or=Eh(!0),kh=Eh(!1),Pi={},st=on(Pi),li=on(Pi),ui=on(Pi);function gn(t){if(t===Pi)throw Error(_(174));return t}function nu(t,e){switch(B(ui,e),B(li,t),B(st,Pi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xa(e,t)}W(st),B(st,e)}function ar(){W(st),W(li),W(ui)}function Ih(t){gn(ui.current);var e=gn(st.current),n=xa(e,t.type);e!==n&&(B(li,t),B(st,n))}function ru(t){li.current===t&&(W(st),W(li))}var q=on(0);function $s(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zo=[];function iu(){for(var t=0;t<Zo.length;t++)Zo[t]._workInProgressVersionPrimary=null;Zo.length=0}var ds=Tt.ReactCurrentDispatcher,ea=Tt.ReactCurrentBatchConfig,kn=0,G=null,ne=null,ae=null,bs=!1,Vr=!1,ci=0,$v=0;function fe(){throw Error(_(321))}function su(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Je(t[n],e[n]))return!1;return!0}function ou(t,e,n,r,i,s){if(kn=s,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ds.current=t===null||t.memoizedState===null?Bv:jv,t=n(r,i),Vr){s=0;do{if(Vr=!1,ci=0,25<=s)throw Error(_(301));s+=1,ae=ne=null,e.updateQueue=null,ds.current=Hv,t=n(r,i)}while(Vr)}if(ds.current=zs,e=ne!==null&&ne.next!==null,kn=0,ae=ne=G=null,bs=!1,e)throw Error(_(300));return t}function au(){var t=ci!==0;return ci=0,t}function nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?G.memoizedState=ae=t:ae=ae.next=t,ae}function Be(){if(ne===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=ne.next;var e=ae===null?G.memoizedState:ae.next;if(e!==null)ae=e,ne=t;else{if(t===null)throw Error(_(310));ne=t,t={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ae===null?G.memoizedState=ae=t:ae=ae.next=t}return ae}function di(t,e){return typeof e=="function"?e(t):e}function ta(t){var e=Be(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((kn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,G.lanes|=d,In|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Je(r,e.memoizedState)||(Ce=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,G.lanes|=s,In|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function na(t){var e=Be(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Je(s,e.memoizedState)||(Ce=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ch(){}function Th(t,e){var n=G,r=Be(),i=e(),s=!Je(r.memoizedState,i);if(s&&(r.memoizedState=i,Ce=!0),r=r.queue,lu(Rh.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,fi(9,Nh.bind(null,n,r,i,e),void 0,null),le===null)throw Error(_(349));kn&30||Ph(n,e,i)}return i}function Ph(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nh(t,e,n,r){e.value=n,e.getSnapshot=r,Oh(e)&&xh(t)}function Rh(t,e,n){return n(function(){Oh(e)&&xh(t)})}function Oh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Je(t,n)}catch{return!0}}function xh(t){var e=St(t,1);e!==null&&Ye(e,t,1,-1)}function jc(t){var e=nt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:t},e.queue=t,t=t.dispatch=Vv.bind(null,G,t),[e.memoizedState,t]}function fi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ah(){return Be().memoizedState}function fs(t,e,n,r){var i=nt();G.flags|=t,i.memoizedState=fi(1|e,n,void 0,r===void 0?null:r)}function po(t,e,n,r){var i=Be();r=r===void 0?null:r;var s=void 0;if(ne!==null){var o=ne.memoizedState;if(s=o.destroy,r!==null&&su(r,o.deps)){i.memoizedState=fi(e,n,s,r);return}}G.flags|=t,i.memoizedState=fi(1|e,n,s,r)}function Hc(t,e){return fs(8390656,8,t,e)}function lu(t,e){return po(2048,8,t,e)}function Dh(t,e){return po(4,2,t,e)}function Lh(t,e){return po(4,4,t,e)}function Mh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uh(t,e,n){return n=n!=null?n.concat([t]):null,po(4,4,Mh.bind(null,e,t),n)}function uu(){}function Fh(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&su(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $h(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&su(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bh(t,e,n){return kn&21?(Je(n,e)||(n=Bf(),G.lanes|=n,In|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ce=!0),t.memoizedState=n)}function bv(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=ea.transition;ea.transition={};try{t(!1),e()}finally{V=n,ea.transition=r}}function zh(){return Be().memoizedState}function zv(t,e,n){var r=Qt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vh(t))Bh(e,n);else if(n=yh(t,e,n,r),n!==null){var i=_e();Ye(n,t,r,i),jh(n,e,r)}}function Vv(t,e,n){var r=Qt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vh(t))Bh(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Je(a,o)){var l=e.interleaved;l===null?(i.next=i,eu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=yh(t,e,i,r),n!==null&&(i=_e(),Ye(n,t,r,i),jh(n,e,r))}}function Vh(t){var e=t.alternate;return t===G||e!==null&&e===G}function Bh(t,e){Vr=bs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zl(t,n)}}var zs={readContext:Ve,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Bv={readContext:Ve,useCallback:function(t,e){return nt().memoizedState=[t,e===void 0?null:e],t},useContext:Ve,useEffect:Hc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fs(4194308,4,Mh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fs(4194308,4,t,e)},useInsertionEffect:function(t,e){return fs(4,2,t,e)},useMemo:function(t,e){var n=nt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=zv.bind(null,G,t),[r.memoizedState,t]},useRef:function(t){var e=nt();return t={current:t},e.memoizedState=t},useState:jc,useDebugValue:uu,useDeferredValue:function(t){return nt().memoizedState=t},useTransition:function(){var t=jc(!1),e=t[0];return t=bv.bind(null,t[1]),nt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=G,i=nt();if(K){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),le===null)throw Error(_(349));kn&30||Ph(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hc(Rh.bind(null,r,s,t),[t]),r.flags|=2048,fi(9,Nh.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nt(),e=le.identifierPrefix;if(K){var n=mt,r=pt;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ci++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$v++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jv={readContext:Ve,useCallback:Fh,useContext:Ve,useEffect:lu,useImperativeHandle:Uh,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:$h,useReducer:ta,useRef:Ah,useState:function(){return ta(di)},useDebugValue:uu,useDeferredValue:function(t){var e=Be();return bh(e,ne.memoizedState,t)},useTransition:function(){var t=ta(di)[0],e=Be().memoizedState;return[t,e]},useMutableSource:Ch,useSyncExternalStore:Th,useId:zh,unstable_isNewReconciler:!1},Hv={readContext:Ve,useCallback:Fh,useContext:Ve,useEffect:lu,useImperativeHandle:Uh,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:$h,useReducer:na,useRef:Ah,useState:function(){return na(di)},useDebugValue:uu,useDeferredValue:function(t){var e=Be();return ne===null?e.memoizedState=t:bh(e,ne.memoizedState,t)},useTransition:function(){var t=na(di)[0],e=Be().memoizedState;return[t,e]},useMutableSource:Ch,useSyncExternalStore:Th,useId:zh,unstable_isNewReconciler:!1};function lr(t,e){try{var n="",r=e;do n+=yg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ra(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function el(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wv=typeof WeakMap=="function"?WeakMap:Map;function Hh(t,e,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bs||(Bs=!0,cl=r),el(t,e)},n}function Wh(t,e,n){n=yt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){el(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){el(t,e),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Wv;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sy.bind(null,t,e,n),e.then(t,t))}function Kc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yt(-1,1),e.tag=2,qt(n,e,1))),n.lanes|=1),t)}var Kv=Tt.ReactCurrentOwner,Ce=!1;function we(t,e,n,r){e.child=t===null?kh(e,null,n,r):or(e,t.child,n,r)}function Gc(t,e,n,r,i){n=n.render;var s=e.ref;return Xn(e,i),r=ou(t,e,n,r,s,i),n=au(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):(K&&n&&Gl(e),e.flags|=1,we(t,e,r,i),e.child)}function Qc(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kh(t,e,s,r,i)):(t=gs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ii,n(o,r)&&t.ref===e.ref)return Et(t,e,i)}return e.flags|=1,t=Yt(s,r),t.ref=e.ref,t.return=e,e.child=t}function Kh(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ii(s,r)&&t.ref===e.ref)if(Ce=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ce=!0);else return e.lanes=t.lanes,Et(t,e,i)}return tl(t,e,n,r,i)}function qh(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(qn,Oe),Oe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,B(qn,Oe),Oe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,B(qn,Oe),Oe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,B(qn,Oe),Oe|=r;return we(t,e,i,n),e.child}function Gh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tl(t,e,n,r,i){var s=Ne(n)?Sn:ve.current;return s=ir(e,s),Xn(e,i),n=ou(t,e,n,r,s,i),r=au(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):(K&&r&&Gl(e),e.flags|=1,we(t,e,n,i),e.child)}function Yc(t,e,n,r,i){if(Ne(n)){var s=!0;As(e)}else s=!1;if(Xn(e,i),e.stateNode===null)hs(t,e),Sh(e,n,r),Za(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Ne(n)?Sn:ve.current,u=ir(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vc(e,o,r,u),Dt=!1;var m=e.memoizedState;o.state=m,Fs(e,r,o,i),l=e.memoizedState,a!==r||m!==l||Pe.current||Dt?(typeof d=="function"&&(Xa(e,n,d,r),l=e.memoizedState),(a=Dt||zc(e,n,a,r,m,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,wh(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:We(e.type,a),o.props=u,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ve(l):(l=Ne(n)?Sn:ve.current,l=ir(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Vc(e,o,r,l),Dt=!1,m=e.memoizedState,o.state=m,Fs(e,r,o,i);var S=e.memoizedState;a!==p||m!==S||Pe.current||Dt?(typeof y=="function"&&(Xa(e,n,y,r),S=e.memoizedState),(u=Dt||zc(e,n,u,r,m,S,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return nl(t,e,n,r,s,i)}function nl(t,e,n,r,i,s){Gh(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mc(e,n,!1),Et(t,e,s);r=e.stateNode,Kv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=or(e,t.child,null,s),e.child=or(e,null,a,s)):we(t,e,a,s),e.memoizedState=r.state,i&&Mc(e,n,!0),e.child}function Qh(t){var e=t.stateNode;e.pendingContext?Lc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lc(t,e.context,!1),nu(t,e.containerInfo)}function Jc(t,e,n,r,i){return sr(),Yl(i),e.flags|=256,we(t,e,n,r),e.child}var rl={dehydrated:null,treeContext:null,retryLane:0};function il(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yh(t,e,n){var r=e.pendingProps,i=q.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),B(q,i&1),t===null)return Ya(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vo(o,r,0,null),t=wn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=il(n),e.memoizedState=rl,t):cu(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qv(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Yt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yt(a,s):(s=wn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?il(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rl,r}return s=t.child,t=s.sibling,r=Yt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cu(t,e){return e=vo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xi(t,e,n,r){return r!==null&&Yl(r),or(e,t.child,null,n),t=cu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qv(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ra(Error(_(422))),Xi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vo({mode:"visible",children:r.children},i,0,null),s=wn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&or(e,t.child,null,o),e.child.memoizedState=il(o),e.memoizedState=rl,s);if(!(e.mode&1))return Xi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=ra(s,r,void 0),Xi(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ce||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,St(t,i),Ye(r,t,i,-1))}return gu(),r=ra(Error(_(421))),Xi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=oy.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xe=Kt(i.nextSibling),Ae=e,K=!0,qe=null,t!==null&&(Fe[$e++]=pt,Fe[$e++]=mt,Fe[$e++]=En,pt=t.id,mt=t.overflow,En=e),e=cu(e,r.children),e.flags|=4096,e)}function Xc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ja(t.return,e,n)}function ia(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Jh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(we(t,e,r.children,n),r=q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xc(t,n,e);else if(t.tag===19)Xc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(B(q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$s(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ia(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$s(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ia(e,!0,n,null,s);break;case"together":ia(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Et(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),In|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=Yt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gv(t,e,n){switch(e.tag){case 3:Qh(e),sr();break;case 5:Ih(e);break;case 1:Ne(e.type)&&As(e);break;case 4:nu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;B(Ms,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(B(q,q.current&1),e.flags|=128,null):n&e.child.childLanes?Yh(t,e,n):(B(q,q.current&1),t=Et(t,e,n),t!==null?t.sibling:null);B(q,q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Jh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(q,q.current),r)break;return null;case 22:case 23:return e.lanes=0,qh(t,e,n)}return Et(t,e,n)}var Xh,sl,Zh,ep;Xh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sl=function(){};Zh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gn(st.current);var s=null;switch(n){case"input":i=Pa(t,i),r=Pa(t,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Oa(t,i),r=Oa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Os)}Aa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ep=function(t,e,n,r){n!==r&&(e.flags|=4)};function Or(t,e){if(!K)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function he(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Qv(t,e,n){var r=e.pendingProps;switch(Ql(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(e),null;case 1:return Ne(e.type)&&xs(),he(e),null;case 3:return r=e.stateNode,ar(),W(Pe),W(ve),iu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qe!==null&&(hl(qe),qe=null))),sl(t,e),he(e),null;case 5:ru(e);var i=gn(ui.current);if(n=e.type,t!==null&&e.stateNode!=null)Zh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return he(e),null}if(t=gn(st.current),Yi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rt]=e,r[ai]=s,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Mr.length;i++)H(Mr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ac(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":uc(r,s),H("invalid",r)}Aa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qi(r.textContent,a,t),i=["children",""+a]):Jr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Vi(r),lc(r,s,!0);break;case"textarea":Vi(r),cc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Os)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rt]=e,t[ai]=r,Xh(t,e,!1,!1),e.stateNode=t;e:{switch(o=Da(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<Mr.length;i++)H(Mr[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":ac(t,r),i=Pa(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),H("invalid",t);break;case"textarea":uc(t,r),i=Oa(t,r),H("invalid",t);break;default:i=r}Aa(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Of(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nf(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xr(t,l):typeof l=="number"&&Xr(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",t):l!=null&&Ll(t,s,l,o))}switch(n){case"input":Vi(t),lc(t,r,!1);break;case"textarea":Vi(t),cc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+nn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return he(e),null;case 6:if(t&&e.stateNode!=null)ep(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=gn(ui.current),gn(st.current),Yi(e)){if(r=e.stateNode,n=e.memoizedProps,r[rt]=e,(s=r.nodeValue!==n)&&(t=Ae,t!==null))switch(t.tag){case 3:Qi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=e,e.stateNode=r}return he(e),null;case 13:if(W(q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(K&&xe!==null&&e.mode&1&&!(e.flags&128))vh(),sr(),e.flags|=98560,s=!1;else if(s=Yi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(_(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[rt]=e}else sr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;he(e),s=!1}else qe!==null&&(hl(qe),qe=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||q.current&1?ie===0&&(ie=3):gu())),e.updateQueue!==null&&(e.flags|=4),he(e),null);case 4:return ar(),sl(t,e),t===null&&si(e.stateNode.containerInfo),he(e),null;case 10:return Zl(e.type._context),he(e),null;case 17:return Ne(e.type)&&xs(),he(e),null;case 19:if(W(q),s=e.memoizedState,s===null)return he(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Or(s,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$s(t),o!==null){for(e.flags|=128,Or(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return B(q,q.current&1|2),e.child}t=t.sibling}s.tail!==null&&X()>ur&&(e.flags|=128,r=!0,Or(s,!1),e.lanes=4194304)}else{if(!r)if(t=$s(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Or(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return he(e),null}else 2*X()-s.renderingStartTime>ur&&n!==1073741824&&(e.flags|=128,r=!0,Or(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=X(),e.sibling=null,n=q.current,B(q,r?n&1|2:n&1),e):(he(e),null);case 22:case 23:return mu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Oe&1073741824&&(he(e),e.subtreeFlags&6&&(e.flags|=8192)):he(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}function Yv(t,e){switch(Ql(e),e.tag){case 1:return Ne(e.type)&&xs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ar(),W(Pe),W(ve),iu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ru(e),null;case 13:if(W(q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(q),null;case 4:return ar(),null;case 10:return Zl(e.type._context),null;case 22:case 23:return mu(),null;case 24:return null;default:return null}}var Zi=!1,me=!1,Jv=typeof WeakSet=="function"?WeakSet:Set,I=null;function Kn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(t,e,r)}else n.current=null}function ol(t,e,n){try{n()}catch(r){Y(t,e,r)}}var Zc=!1;function Xv(t,e){if(ja=Ps,t=ih(),ql(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,p=t,m=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===t)break t;if(m===n&&++u===i&&(a=o),m===s&&++d===r&&(l=o),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ha={focusedElem:t,selectionRange:n},Ps=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,R=S.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?w:We(e.type,w),R);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){Y(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return S=Zc,Zc=!1,S}function Br(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ol(e,n,s)}i=i.next}while(i!==r)}}function mo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function al(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tp(t){var e=t.alternate;e!==null&&(t.alternate=null,tp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rt],delete e[ai],delete e[qa],delete e[Lv],delete e[Mv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function ed(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ll(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Os));else if(r!==4&&(t=t.child,t!==null))for(ll(t,e,n),t=t.sibling;t!==null;)ll(t,e,n),t=t.sibling}function ul(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ul(t,e,n),t=t.sibling;t!==null;)ul(t,e,n),t=t.sibling}var ue=null,Ke=!1;function Ot(t,e,n){for(n=n.child;n!==null;)rp(t,e,n),n=n.sibling}function rp(t,e,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(oo,n)}catch{}switch(n.tag){case 5:me||Kn(n,e);case 6:var r=ue,i=Ke;ue=null,Ot(t,e,n),ue=r,Ke=i,ue!==null&&(Ke?(t=ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ke?(t=ue,n=n.stateNode,t.nodeType===8?Jo(t.parentNode,n):t.nodeType===1&&Jo(t,n),ni(t)):Jo(ue,n.stateNode));break;case 4:r=ue,i=Ke,ue=n.stateNode.containerInfo,Ke=!0,Ot(t,e,n),ue=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ol(n,e,o),i=i.next}while(i!==r)}Ot(t,e,n);break;case 1:if(!me&&(Kn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,e,a)}Ot(t,e,n);break;case 21:Ot(t,e,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Ot(t,e,n),me=r):Ot(t,e,n);break;default:Ot(t,e,n)}}function td(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Jv),e.forEach(function(r){var i=ay.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function He(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ke=!1;break e;case 3:ue=a.stateNode.containerInfo,Ke=!0;break e;case 4:ue=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(ue===null)throw Error(_(160));rp(s,o,i),ue=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ip(e,t),e=e.sibling}function ip(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(He(e,t),tt(t),r&4){try{Br(3,t,t.return),mo(3,t)}catch(w){Y(t,t.return,w)}try{Br(5,t,t.return)}catch(w){Y(t,t.return,w)}}break;case 1:He(e,t),tt(t),r&512&&n!==null&&Kn(n,n.return);break;case 5:if(He(e,t),tt(t),r&512&&n!==null&&Kn(n,n.return),t.flags&32){var i=t.stateNode;try{Xr(i,"")}catch(w){Y(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cf(i,s),Da(a,o);var u=Da(a,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?Of(i,p):d==="dangerouslySetInnerHTML"?Nf(i,p):d==="children"?Xr(i,p):Ll(i,d,p,u)}switch(a){case"input":Na(i,s);break;case"textarea":Tf(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Gn(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Gn(i,!!s.multiple,s.defaultValue,!0):Gn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ai]=s}catch(w){Y(t,t.return,w)}}break;case 6:if(He(e,t),tt(t),r&4){if(t.stateNode===null)throw Error(_(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Y(t,t.return,w)}}break;case 3:if(He(e,t),tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ni(e.containerInfo)}catch(w){Y(t,t.return,w)}break;case 4:He(e,t),tt(t);break;case 13:He(e,t),tt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hu=X())),r&4&&td(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(me=(u=me)||d,He(e,t),me=u):He(e,t),tt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(I=t,d=t.child;d!==null;){for(p=I=d;I!==null;){switch(m=I,y=m.child,m.tag){case 0:case 11:case 14:case 15:Br(4,m,m.return);break;case 1:Kn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(w){Y(r,n,w)}}break;case 5:Kn(m,m.return);break;case 22:if(m.memoizedState!==null){rd(p);continue}}y!==null?(y.return=m,I=y):rd(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Rf("display",o))}catch(w){Y(t,t.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Y(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:He(e,t),tt(t),r&4&&td(t);break;case 21:break;default:He(e,t),tt(t)}}function tt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(np(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var s=ed(t);ul(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ed(t);ll(t,a,o);break;default:throw Error(_(161))}}catch(l){Y(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zv(t,e,n){I=t,sp(t)}function sp(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=Zi;var u=me;if(Zi=o,(me=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?id(i):l!==null?(l.return=o,I=l):id(i);for(;s!==null;)I=s,sp(s),s=s.sibling;I=i,Zi=a,me=u}nd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):nd(t)}}function nd(t){for(;I!==null;){var e=I;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:me||mo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:We(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bc(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bc(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ni(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}me||e.flags&512&&al(e)}catch(m){Y(e,e.return,m)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function rd(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function id(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mo(4,e)}catch(l){Y(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Y(e,i,l)}}var s=e.return;try{al(e)}catch(l){Y(e,s,l)}break;case 5:var o=e.return;try{al(e)}catch(l){Y(e,o,l)}}}catch(l){Y(e,e.return,l)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var ey=Math.ceil,Vs=Tt.ReactCurrentDispatcher,du=Tt.ReactCurrentOwner,ze=Tt.ReactCurrentBatchConfig,b=0,le=null,ee=null,ce=0,Oe=0,qn=on(0),ie=0,hi=null,In=0,go=0,fu=0,jr=null,Ie=null,hu=0,ur=1/0,ut=null,Bs=!1,cl=null,Gt=null,es=!1,Vt=null,js=0,Hr=0,dl=null,ps=-1,ms=0;function _e(){return b&6?X():ps!==-1?ps:ps=X()}function Qt(t){return t.mode&1?b&2&&ce!==0?ce&-ce:Fv.transition!==null?(ms===0&&(ms=Bf()),ms):(t=V,t!==0||(t=window.event,t=t===void 0?16:Qf(t.type)),t):1}function Ye(t,e,n,r){if(50<Hr)throw Hr=0,dl=null,Error(_(185));Ii(t,n,r),(!(b&2)||t!==le)&&(t===le&&(!(b&2)&&(go|=n),ie===4&&Ut(t,ce)),Re(t,r),n===1&&b===0&&!(e.mode&1)&&(ur=X()+500,fo&&an()))}function Re(t,e){var n=t.callbackNode;Fg(t,e);var r=Ts(t,t===le?ce:0);if(r===0)n!==null&&hc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hc(n),e===1)t.tag===0?Uv(sd.bind(null,t)):ph(sd.bind(null,t)),Av(function(){!(b&6)&&an()}),n=null;else{switch(jf(r)){case 1:n=bl;break;case 4:n=zf;break;case 16:n=Cs;break;case 536870912:n=Vf;break;default:n=Cs}n=hp(n,op.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function op(t,e){if(ps=-1,ms=0,b&6)throw Error(_(327));var n=t.callbackNode;if(Zn()&&t.callbackNode!==n)return null;var r=Ts(t,t===le?ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hs(t,r);else{e=r;var i=b;b|=2;var s=lp();(le!==t||ce!==e)&&(ut=null,ur=X()+500,yn(t,e));do try{ry();break}catch(a){ap(t,a)}while(1);Xl(),Vs.current=s,b=i,ee!==null?e=0:(le=null,ce=0,e=ie)}if(e!==0){if(e===2&&(i=$a(t),i!==0&&(r=i,e=fl(t,i))),e===1)throw n=hi,yn(t,0),Ut(t,r),Re(t,X()),n;if(e===6)Ut(t,r);else{if(i=t.current.alternate,!(r&30)&&!ty(i)&&(e=Hs(t,r),e===2&&(s=$a(t),s!==0&&(r=s,e=fl(t,s))),e===1))throw n=hi,yn(t,0),Ut(t,r),Re(t,X()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:dn(t,Ie,ut);break;case 3:if(Ut(t,r),(r&130023424)===r&&(e=hu+500-X(),10<e)){if(Ts(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_e(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ka(dn.bind(null,t,Ie,ut),e);break}dn(t,Ie,ut);break;case 4:if(Ut(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qe(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ey(r/1960))-r,10<r){t.timeoutHandle=Ka(dn.bind(null,t,Ie,ut),r);break}dn(t,Ie,ut);break;case 5:dn(t,Ie,ut);break;default:throw Error(_(329))}}}return Re(t,X()),t.callbackNode===n?op.bind(null,t):null}function fl(t,e){var n=jr;return t.current.memoizedState.isDehydrated&&(yn(t,e).flags|=256),t=Hs(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&hl(e)),t}function hl(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Je(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ut(t,e){for(e&=~fu,e&=~go,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qe(e),r=1<<n;t[n]=-1,e&=~r}}function sd(t){if(b&6)throw Error(_(327));Zn();var e=Ts(t,0);if(!(e&1))return Re(t,X()),null;var n=Hs(t,e);if(t.tag!==0&&n===2){var r=$a(t);r!==0&&(e=r,n=fl(t,r))}if(n===1)throw n=hi,yn(t,0),Ut(t,e),Re(t,X()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dn(t,Ie,ut),Re(t,X()),null}function pu(t,e){var n=b;b|=1;try{return t(e)}finally{b=n,b===0&&(ur=X()+500,fo&&an())}}function Cn(t){Vt!==null&&Vt.tag===0&&!(b&6)&&Zn();var e=b;b|=1;var n=ze.transition,r=V;try{if(ze.transition=null,V=1,t)return t()}finally{V=r,ze.transition=n,b=e,!(b&6)&&an()}}function mu(){Oe=qn.current,W(qn)}function yn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xv(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ql(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xs();break;case 3:ar(),W(Pe),W(ve),iu();break;case 5:ru(r);break;case 4:ar();break;case 13:W(q);break;case 19:W(q);break;case 10:Zl(r.type._context);break;case 22:case 23:mu()}n=n.return}if(le=t,ee=t=Yt(t.current,null),ce=Oe=e,ie=0,hi=null,fu=go=In=0,Ie=jr=null,mn!==null){for(e=0;e<mn.length;e++)if(n=mn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mn=null}return t}function ap(t,e){do{var n=ee;try{if(Xl(),ds.current=zs,bs){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bs=!1}if(kn=0,ae=ne=G=null,Vr=!1,ci=0,du.current=null,n===null||n.return===null){ie=1,hi=e,ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Kc(o);if(y!==null){y.flags&=-257,qc(y,o,a,s,e),y.mode&1&&Wc(s,u,e),e=y,l=u;var S=e.updateQueue;if(S===null){var w=new Set;w.add(l),e.updateQueue=w}else S.add(l);break e}else{if(!(e&1)){Wc(s,u,e),gu();break e}l=Error(_(426))}}else if(K&&a.mode&1){var R=Kc(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),qc(R,o,a,s,e),Yl(lr(l,a));break e}}s=l=lr(l,a),ie!==4&&(ie=2),jr===null?jr=[s]:jr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Hh(s,l,e);$c(s,f);break e;case 1:a=l;var c=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Gt===null||!Gt.has(h)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Wh(s,a,e);$c(s,v);break e}}s=s.return}while(s!==null)}cp(n)}catch(k){e=k,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function lp(){var t=Vs.current;return Vs.current=zs,t===null?zs:t}function gu(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(In&268435455)&&!(go&268435455)||Ut(le,ce)}function Hs(t,e){var n=b;b|=2;var r=lp();(le!==t||ce!==e)&&(ut=null,yn(t,e));do try{ny();break}catch(i){ap(t,i)}while(1);if(Xl(),b=n,Vs.current=r,ee!==null)throw Error(_(261));return le=null,ce=0,ie}function ny(){for(;ee!==null;)up(ee)}function ry(){for(;ee!==null&&!Ng();)up(ee)}function up(t){var e=fp(t.alternate,t,Oe);t.memoizedProps=t.pendingProps,e===null?cp(t):ee=e,du.current=null}function cp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yv(n,e),n!==null){n.flags&=32767,ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,ee=null;return}}else if(n=Qv(n,e,Oe),n!==null){ee=n;return}if(e=e.sibling,e!==null){ee=e;return}ee=e=t}while(e!==null);ie===0&&(ie=5)}function dn(t,e,n){var r=V,i=ze.transition;try{ze.transition=null,V=1,iy(t,e,n,r)}finally{ze.transition=i,V=r}return null}function iy(t,e,n,r){do Zn();while(Vt!==null);if(b&6)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($g(t,s),t===le&&(ee=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||es||(es=!0,hp(Cs,function(){return Zn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ze.transition,ze.transition=null;var o=V;V=1;var a=b;b|=4,du.current=null,Xv(t,n),ip(n,t),Iv(Ha),Ps=!!ja,Ha=ja=null,t.current=n,Zv(n),Rg(),b=a,V=o,ze.transition=s}else t.current=n;if(es&&(es=!1,Vt=t,js=i),s=t.pendingLanes,s===0&&(Gt=null),Ag(n.stateNode),Re(t,X()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bs)throw Bs=!1,t=cl,cl=null,t;return js&1&&t.tag!==0&&Zn(),s=t.pendingLanes,s&1?t===dl?Hr++:(Hr=0,dl=t):Hr=0,an(),null}function Zn(){if(Vt!==null){var t=jf(js),e=ze.transition,n=V;try{if(ze.transition=null,V=16>t?16:t,Vt===null)var r=!1;else{if(t=Vt,Vt=null,js=0,b&6)throw Error(_(331));var i=b;for(b|=4,I=t.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Br(8,d,s)}var p=d.child;if(p!==null)p.return=d,I=p;else for(;I!==null;){d=I;var m=d.sibling,y=d.return;if(tp(d),d===u){I=null;break}if(m!==null){m.return=y,I=m;break}I=y}}}var S=s.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Br(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,I=f;break e}I=s.return}}var c=t.current;for(I=c;I!==null;){o=I;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,I=h;else e:for(o=c;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mo(9,a)}}catch(k){Y(a,a.return,k)}if(a===o){I=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}if(b=i,an(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(oo,t)}catch{}r=!0}return r}finally{V=n,ze.transition=e}}return!1}function od(t,e,n){e=lr(n,e),e=Hh(t,e,1),t=qt(t,e,1),e=_e(),t!==null&&(Ii(t,1,e),Re(t,e))}function Y(t,e,n){if(t.tag===3)od(t,t,n);else for(;e!==null;){if(e.tag===3){od(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){t=lr(n,t),t=Wh(e,t,1),e=qt(e,t,1),t=_e(),e!==null&&(Ii(e,1,t),Re(e,t));break}}e=e.return}}function sy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_e(),t.pingedLanes|=t.suspendedLanes&n,le===t&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>X()-hu?yn(t,0):fu|=n),Re(t,e)}function dp(t,e){e===0&&(t.mode&1?(e=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):e=1);var n=_e();t=St(t,e),t!==null&&(Ii(t,e,n),Re(t,n))}function oy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dp(t,n)}function ay(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),dp(t,n)}var fp;fp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pe.current)Ce=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ce=!1,Gv(t,e,n);Ce=!!(t.flags&131072)}else Ce=!1,K&&e.flags&1048576&&mh(e,Ls,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hs(t,e),t=e.pendingProps;var i=ir(e,ve.current);Xn(e,n),i=ou(null,e,r,t,i,n);var s=au();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ne(r)?(s=!0,As(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tu(e),i.updater=ho,e.stateNode=i,i._reactInternals=e,Za(e,r,t,n),e=nl(null,e,r,!0,s,n)):(e.tag=0,K&&s&&Gl(e),we(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uy(r),t=We(r,t),i){case 0:e=tl(null,e,r,t,n);break e;case 1:e=Yc(null,e,r,t,n);break e;case 11:e=Gc(null,e,r,t,n);break e;case 14:e=Qc(null,e,r,We(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:We(r,i),tl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:We(r,i),Yc(t,e,r,i,n);case 3:e:{if(Qh(e),t===null)throw Error(_(387));r=e.pendingProps,s=e.memoizedState,i=s.element,wh(t,e),Fs(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=lr(Error(_(423)),e),e=Jc(t,e,r,n,i);break e}else if(r!==i){i=lr(Error(_(424)),e),e=Jc(t,e,r,n,i);break e}else for(xe=Kt(e.stateNode.containerInfo.firstChild),Ae=e,K=!0,qe=null,n=kh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===i){e=Et(t,e,n);break e}we(t,e,r,n)}e=e.child}return e;case 5:return Ih(e),t===null&&Ya(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wa(r,i)?o=null:s!==null&&Wa(r,s)&&(e.flags|=32),Gh(t,e),we(t,e,o,n),e.child;case 6:return t===null&&Ya(e),null;case 13:return Yh(t,e,n);case 4:return nu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=or(e,null,r,n):we(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:We(r,i),Gc(t,e,r,i,n);case 7:return we(t,e,e.pendingProps,n),e.child;case 8:return we(t,e,e.pendingProps.children,n),e.child;case 12:return we(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,B(Ms,r._currentValue),r._currentValue=o,s!==null)if(Je(s.value,o)){if(s.children===i.children&&!Pe.current){e=Et(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ja(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ja(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}we(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xn(e,n),i=Ve(i),r=r(i),e.flags|=1,we(t,e,r,n),e.child;case 14:return r=e.type,i=We(r,e.pendingProps),i=We(r.type,i),Qc(t,e,r,i,n);case 15:return Kh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:We(r,i),hs(t,e),e.tag=1,Ne(r)?(t=!0,As(e)):t=!1,Xn(e,n),Sh(e,r,i),Za(e,r,i,n),nl(null,e,r,!0,t,n);case 19:return Jh(t,e,n);case 22:return qh(t,e,n)}throw Error(_(156,e.tag))};function hp(t,e){return bf(t,e)}function ly(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(t,e,n,r){return new ly(t,e,n,r)}function vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uy(t){if(typeof t=="function")return vu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ul)return 11;if(t===Fl)return 14}return 2}function Yt(t,e){var n=t.alternate;return n===null?(n=be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fn:return wn(n.children,i,s,e);case Ml:o=8,i|=8;break;case ka:return t=be(12,n,e,i|2),t.elementType=ka,t.lanes=s,t;case Ia:return t=be(13,n,e,i),t.elementType=Ia,t.lanes=s,t;case Ca:return t=be(19,n,e,i),t.elementType=Ca,t.lanes=s,t;case Ef:return vo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _f:o=10;break e;case Sf:o=9;break e;case Ul:o=11;break e;case Fl:o=14;break e;case At:o=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=be(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function wn(t,e,n,r){return t=be(7,t,r,e),t.lanes=n,t}function vo(t,e,n,r){return t=be(22,t,r,e),t.elementType=Ef,t.lanes=n,t.stateNode={isHidden:!1},t}function sa(t,e,n){return t=be(6,t,null,e),t.lanes=n,t}function oa(t,e,n){return e=be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cy(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zo(0),this.expirationTimes=zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yu(t,e,n,r,i,s,o,a,l){return t=new cy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=be(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(s),t}function dy(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function pp(t){if(!t)return rn;t=t._reactInternals;e:{if(An(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ne(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(Ne(n))return hh(t,n,e)}return e}function mp(t,e,n,r,i,s,o,a,l){return t=yu(n,r,!0,t,i,s,o,a,l),t.context=pp(null),n=t.current,r=_e(),i=Qt(n),s=yt(r,i),s.callback=e??null,qt(n,s,i),t.current.lanes=i,Ii(t,i,r),Re(t,r),t}function yo(t,e,n,r){var i=e.current,s=_e(),o=Qt(i);return n=pp(n),e.context===null?e.context=n:e.pendingContext=n,e=yt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qt(i,e,o),t!==null&&(Ye(t,i,o,s),cs(t,i,o)),o}function Ws(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ad(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wu(t,e){ad(t,e),(t=t.alternate)&&ad(t,e)}function fy(){return null}var gp=typeof reportError=="function"?reportError:function(t){console.error(t)};function _u(t){this._internalRoot=t}wo.prototype.render=_u.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));yo(t,e,null,null)};wo.prototype.unmount=_u.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cn(function(){yo(null,t,null,null)}),e[_t]=null}};function wo(t){this._internalRoot=t}wo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mt.length&&e!==0&&e<Mt[n].priority;n++);Mt.splice(n,0,t),n===0&&Gf(t)}};function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ld(){}function hy(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ws(o);s.call(u)}}var o=mp(e,r,t,0,null,!1,!1,"",ld);return t._reactRootContainer=o,t[_t]=o.current,si(t.nodeType===8?t.parentNode:t),Cn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ws(l);a.call(u)}}var l=yu(t,0,!1,null,null,!1,!1,"",ld);return t._reactRootContainer=l,t[_t]=l.current,si(t.nodeType===8?t.parentNode:t),Cn(function(){yo(e,l,n,r)}),l}function So(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ws(o);a.call(l)}}yo(e,o,t,i)}else o=hy(n,e,t,i,r);return Ws(o)}Hf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lr(e.pendingLanes);n!==0&&(zl(e,n|1),Re(e,X()),!(b&6)&&(ur=X()+500,an()))}break;case 13:Cn(function(){var r=St(t,1);if(r!==null){var i=_e();Ye(r,t,1,i)}}),wu(t,1)}};Vl=function(t){if(t.tag===13){var e=St(t,134217728);if(e!==null){var n=_e();Ye(e,t,134217728,n)}wu(t,134217728)}};Wf=function(t){if(t.tag===13){var e=Qt(t),n=St(t,e);if(n!==null){var r=_e();Ye(n,t,e,r)}wu(t,e)}};Kf=function(){return V};qf=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};Ma=function(t,e,n){switch(e){case"input":if(Na(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=co(r);if(!i)throw Error(_(90));If(r),Na(r,i)}}}break;case"textarea":Tf(t,n);break;case"select":e=n.value,e!=null&&Gn(t,!!n.multiple,e,!1)}};Df=pu;Lf=Cn;var py={usingClientEntryPoint:!1,Events:[Ti,Vn,co,xf,Af,pu]},xr={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},my={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ff(t),t===null?null:t.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{oo=ts.inject(my),it=ts}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;Me.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(e))throw Error(_(200));return dy(t,e,null,n)};Me.createRoot=function(t,e){if(!Su(t))throw Error(_(299));var n=!1,r="",i=gp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yu(t,1,!1,null,null,n,!1,r,i),t[_t]=e.current,si(t.nodeType===8?t.parentNode:t),new _u(e)};Me.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=Ff(e),t=t===null?null:t.stateNode,t};Me.flushSync=function(t){return Cn(t)};Me.hydrate=function(t,e,n){if(!_o(e))throw Error(_(200));return So(null,t,e,!0,n)};Me.hydrateRoot=function(t,e,n){if(!Su(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mp(e,null,t,1,n??null,i,!1,s,o),t[_t]=e.current,si(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wo(e)};Me.render=function(t,e,n){if(!_o(e))throw Error(_(200));return So(null,t,e,!1,n)};Me.unmountComponentAtNode=function(t){if(!_o(t))throw Error(_(40));return t._reactRootContainer?(Cn(function(){So(null,null,t,!1,function(){t._reactRootContainer=null,t[_t]=null})}),!0):!1};Me.unstable_batchedUpdates=pu;Me.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_o(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return So(t,e,n,!1,r)};Me.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Me})(fg);var ud=_a;wa.createRoot=ud.createRoot,wa.hydrateRoot=ud.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pi.apply(this,arguments)}var Bt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Bt||(Bt={}));const cd="popstate";function gy(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return pl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ks(i)}return yy(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Eu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vy(){return Math.random().toString(36).substr(2,8)}function dd(t,e){return{usr:t.state,key:t.key,idx:e}}function pl(t,e,n,r){return n===void 0&&(n=null),pi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yr(e):e,{state:n,key:e&&e.key||r||vy()})}function Ks(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function yy(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Bt.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(pi({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){a=Bt.Pop;let R=d(),f=R==null?null:R-u;u=R,l&&l({action:a,location:w.location,delta:f})}function m(R,f){a=Bt.Push;let c=pl(w.location,R,f);n&&n(c,R),u=d()+1;let h=dd(c,u),v=w.createHref(c);try{o.pushState(h,"",v)}catch{i.location.assign(v)}s&&l&&l({action:a,location:w.location,delta:1})}function y(R,f){a=Bt.Replace;let c=pl(w.location,R,f);n&&n(c,R),u=d();let h=dd(c,u),v=w.createHref(c);o.replaceState(h,"",v),s&&l&&l({action:a,location:w.location,delta:0})}function S(R){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof R=="string"?R:Ks(R);return te(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return a},get location(){return t(i,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(cd,p),l=R,()=>{i.removeEventListener(cd,p),l=null}},createHref(R){return e(i,R)},createURL:S,encodeLocation(R){let f=S(R);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:y,go(R){return o.go(R)}};return w}var fd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fd||(fd={}));function wy(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?yr(e):e,i=ku(r.pathname||"/",n);if(i==null)return null;let s=vp(t);_y(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Ry(s[a],Ay(i));return o}function vp(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jt([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vp(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Py(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of yp(s.path))i(s,o,l)}),e}function yp(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=yp(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function _y(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ny(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Sy=/^:\w+$/,Ey=3,ky=2,Iy=1,Cy=10,Ty=-2,hd=t=>t==="*";function Py(t,e){let n=t.split("/"),r=n.length;return n.some(hd)&&(r+=Ty),e&&(r+=ky),n.filter(i=>!hd(i)).reduce((i,s)=>i+(Sy.test(s)?Ey:s===""?Iy:Cy),r)}function Ny(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ry(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Oy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let p=a.route;s.push({params:r,pathname:Jt([i,d.pathname]),pathnameBase:Uy(Jt([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Jt([i,d.pathnameBase]))}return s}function Oy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let m=a[p]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=Dy(a[p]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function xy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Eu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ay(t){try{return decodeURI(t)}catch(e){return Eu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Dy(t,e){try{return decodeURIComponent(t)}catch(n){return Eu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ku(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ly(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yr(t):t;return{pathname:n?n.startsWith("/")?n:My(n,e):e,search:Fy(r),hash:$y(i)}}function My(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function aa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _p(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yr(t):(i=pi({},t),te(!i.pathname||!i.pathname.includes("?"),aa("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),aa("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),aa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let p=e.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?e[p]:"/"}let l=Ly(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Jt=t=>t.join("/").replace(/\/\/+/g,"/"),Uy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Fy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$y=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function by(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Vy=typeof Object.is=="function"?Object.is:zy,{useState:By,useEffect:jy,useLayoutEffect:Hy,useDebugValue:Wy}=ya;function Ky(t,e,n){const r=e(),[{inst:i},s]=By({inst:{value:r,getSnapshot:e}});return Hy(()=>{i.value=r,i.getSnapshot=e,la(i)&&s({inst:i})},[t,r,e]),jy(()=>(la(i)&&s({inst:i}),t(()=>{la(i)&&s({inst:i})})),[t]),Wy(r),r}function la(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!Vy(n,r)}catch{return!0}}function qy(t,e,n){return e()}const Gy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qy=!Gy,Yy=Qy?qy:Ky;"useSyncExternalStore"in ya&&(t=>t.useSyncExternalStore)(ya);const Sp=E.createContext(null),Iu=E.createContext(null),Ni=E.createContext(null),Eo=E.createContext(null),Dn=E.createContext({outlet:null,matches:[]}),Ep=E.createContext(null);function ml(){return ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ml.apply(this,arguments)}function Jy(t,e){let{relative:n}=e===void 0?{}:e;wr()||te(!1);let{basename:r,navigator:i}=E.useContext(Ni),{hash:s,pathname:o,search:a}=Ip(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Jt([r,o])),i.createHref({pathname:l,search:a,hash:s})}function wr(){return E.useContext(Eo)!=null}function Ri(){return wr()||te(!1),E.useContext(Eo).location}function Cu(){wr()||te(!1);let{basename:t,navigator:e}=E.useContext(Ni),{matches:n}=E.useContext(Dn),{pathname:r}=Ri(),i=JSON.stringify(wp(n).map(a=>a.pathnameBase)),s=E.useRef(!1);return E.useEffect(()=>{s.current=!0}),E.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=_p(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Jt([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function kp(){let{matches:t}=E.useContext(Dn),e=t[t.length-1];return e?e.params:{}}function Ip(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(Dn),{pathname:i}=Ri(),s=JSON.stringify(wp(r).map(o=>o.pathnameBase));return E.useMemo(()=>_p(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Xy(t,e){wr()||te(!1);let{navigator:n}=E.useContext(Ni),r=E.useContext(Iu),{matches:i}=E.useContext(Dn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ri(),u;if(e){var d;let w=typeof e=="string"?yr(e):e;a==="/"||(d=w.pathname)!=null&&d.startsWith(a)||te(!1),u=w}else u=l;let p=u.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",y=wy(t,{pathname:m}),S=n0(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Jt([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Jt([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return e&&S?E.createElement(Eo.Provider,{value:{location:ml({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Bt.Pop}},S):S}function Zy(){let t=o0(),e=by(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}class e0 extends E.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(Dn.Provider,{value:this.props.routeContext},E.createElement(Ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function t0(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Sp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Dn.Provider,{value:e},r)}function n0(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||te(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=E.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=E.createElement(Zy,null));let d=e.concat(r.slice(0,a+1)),p=()=>{let m=s;return l?m=u:o.route.Component?m=E.createElement(o.route.Component,null):o.route.element&&(m=o.route.element),E.createElement(t0,{match:o,routeContext:{outlet:s,matches:d},children:m})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?E.createElement(e0,{location:n.location,component:u,error:l,children:p(),routeContext:{outlet:null,matches:d}}):p()},null)}var pd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(pd||(pd={}));var qs;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(qs||(qs={}));function r0(t){let e=E.useContext(Iu);return e||te(!1),e}function i0(t){let e=E.useContext(Dn);return e||te(!1),e}function s0(t){let e=i0(),n=e.matches[e.matches.length-1];return n.route.id||te(!1),n.route.id}function o0(){var t;let e=E.useContext(Ep),n=r0(qs.UseRouteError),r=s0(qs.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Cp(t){let{to:e,replace:n,state:r,relative:i}=t;wr()||te(!1);let s=E.useContext(Iu),o=Cu();return E.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function fn(t){te(!1)}function a0(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Bt.Pop,navigator:s,static:o=!1}=t;wr()&&te(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=yr(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:y="default"}=r,S=E.useMemo(()=>{let w=ku(u,a);return w==null?null:{location:{pathname:w,search:d,hash:p,state:m,key:y},navigationType:i}},[a,u,d,p,m,y,i]);return S==null?null:E.createElement(Ni.Provider,{value:l},E.createElement(Eo.Provider,{children:n,value:S}))}function l0(t){let{children:e,location:n}=t,r=E.useContext(Sp),i=r&&!e?r.router.routes:gl(e);return Xy(i,n)}var md;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(md||(md={}));new Promise(()=>{});function gl(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;if(r.type===E.Fragment){n.push.apply(n,gl(r.props.children,e));return}r.type!==fn&&te(!1),!r.props.index||!r.props.children||te(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=gl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vl.apply(this,arguments)}function u0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function c0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function d0(t,e){return t.button===0&&(!e||e==="_self")&&!c0(t)}const f0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function h0(t){let{basename:e,children:n,window:r}=t,i=E.useRef();i.current==null&&(i.current=gy({window:r,v5Compat:!0}));let s=i.current,[o,a]=E.useState({action:s.action,location:s.location});return E.useLayoutEffect(()=>s.listen(a),[s]),E.createElement(a0,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const p0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",m0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dt=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d}=e,p=u0(e,f0),{basename:m}=E.useContext(Ni),y,S=!1;if(typeof u=="string"&&m0.test(u)&&(y=u,p0)){let c=new URL(window.location.href),h=u.startsWith("//")?new URL(c.protocol+u):new URL(u),v=ku(h.pathname,m);h.origin===c.origin&&v!=null?u=v+h.search+h.hash:S=!0}let w=Jy(u,{relative:i}),R=g0(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i});function f(c){r&&r(c),c.defaultPrevented||R(c)}return E.createElement("a",vl({},p,{href:y||w,onClick:S||s?r:f,ref:n,target:l}))});var gd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(gd||(gd={}));var vd;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vd||(vd={}));function g0(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Cu(),l=Ri(),u=Ip(t,{relative:o});return E.useCallback(d=>{if(d0(d,n)){d.preventDefault();let p=r!==void 0?r:Ks(l)===Ks(u);a(t,{replace:p,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const v0=()=>g("div",{children:g("h1",{children:"About"})}),y0="/assets/payments-b273e9b7.png";/**
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
 */const Tp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},w0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):w0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new _0;const m=s<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S0=function(t){const e=Tp(t);return Pp.encodeByteArray(e,!0)},Gs=function(t){return S0(t).replace(/\./g,"")},Np=function(t){try{return Pp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function E0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k0=()=>E0().__FIREBASE_DEFAULTS__,I0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},C0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Np(t[1]);return e&&JSON.parse(e)},Tu=()=>{try{return k0()||I0()||C0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rp=t=>{var e,n;return(n=(e=Tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},T0=t=>{const e=Rp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},P0=()=>{var t;return(t=Tu())===null||t===void 0?void 0:t.config},Op=t=>{var e;return(e=Tu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class N0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function R0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gs(JSON.stringify(n)),Gs(JSON.stringify(o)),a].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function O0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function x0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function A0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function D0(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function L0(){try{return typeof indexedDB=="object"}catch{return!1}}function M0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const U0="FirebaseError";class Pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=U0,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?F0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pt(i,a,r)}}function F0(t,e){return t.replace($0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $0=/\{\$([^}]+)}/g;function b0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yd(s)&&yd(o)){if(!Qs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yd(t){return t!==null&&typeof t=="object"}/**
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
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function z0(t,e){const n=new V0(t,e);return n.subscribe.bind(n)}class V0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");B0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ua),i.error===void 0&&(i.error=ua),i.complete===void 0&&(i.complete=ua);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ua(){}/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hn="[DEFAULT]";/**
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
 */class j0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new N0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(W0(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:H0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H0(t){return t===hn?void 0:t}function W0(t){return t.instantiationMode==="EAGER"}/**
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
 */class K0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new j0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const q0={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},G0=z.INFO,Q0={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Y0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Q0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pu{constructor(e){this.name=e,this._logLevel=G0,this._logHandler=Y0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?q0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const J0=(t,e)=>e.some(n=>t instanceof n);let wd,_d;function X0(){return wd||(wd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Z0(){return _d||(_d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xp=new WeakMap,yl=new WeakMap,Ap=new WeakMap,ca=new WeakMap,Nu=new WeakMap;function e1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xp.set(n,t)}).catch(()=>{}),Nu.set(e,t),e}function t1(t){if(yl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yl.set(t,e)}let wl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ap.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function n1(t){wl=t(wl)}function r1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(da(this),e,...n);return Ap.set(r,e.sort?e.sort():[e]),Xt(r)}:Z0().includes(t)?function(...e){return t.apply(da(this),e),Xt(xp.get(this))}:function(...e){return Xt(t.apply(da(this),e))}}function i1(t){return typeof t=="function"?r1(t):(t instanceof IDBTransaction&&t1(t),J0(t,X0())?new Proxy(t,wl):t)}function Xt(t){if(t instanceof IDBRequest)return e1(t);if(ca.has(t))return ca.get(t);const e=i1(t);return e!==t&&(ca.set(t,e),Nu.set(e,t)),e}const da=t=>Nu.get(t);function s1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xt(o.result),l.oldVersion,l.newVersion,Xt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const o1=["get","getKey","getAll","getAllKeys","count"],a1=["put","add","delete","clear"],fa=new Map;function Sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=a1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||o1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fa.set(e,s),s}n1(t=>({...t,get:(e,n,r)=>Sd(e,n)||t.get(e,n,r),has:(e,n)=>!!Sd(e,n)||t.has(e,n)}));/**
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
 */class l1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function u1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _l="@firebase/app",Ed="0.9.4";/**
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
 */const Pn=new Pu("@firebase/app"),c1="@firebase/app-compat",d1="@firebase/analytics-compat",f1="@firebase/analytics",h1="@firebase/app-check-compat",p1="@firebase/app-check",m1="@firebase/auth",g1="@firebase/auth-compat",v1="@firebase/database",y1="@firebase/database-compat",w1="@firebase/functions",_1="@firebase/functions-compat",S1="@firebase/installations",E1="@firebase/installations-compat",k1="@firebase/messaging",I1="@firebase/messaging-compat",C1="@firebase/performance",T1="@firebase/performance-compat",P1="@firebase/remote-config",N1="@firebase/remote-config-compat",R1="@firebase/storage",O1="@firebase/storage-compat",x1="@firebase/firestore",A1="@firebase/firestore-compat",D1="firebase",L1="9.17.2";/**
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
 */const Sl="[DEFAULT]",M1={[_l]:"fire-core",[c1]:"fire-core-compat",[f1]:"fire-analytics",[d1]:"fire-analytics-compat",[p1]:"fire-app-check",[h1]:"fire-app-check-compat",[m1]:"fire-auth",[g1]:"fire-auth-compat",[v1]:"fire-rtdb",[y1]:"fire-rtdb-compat",[w1]:"fire-fn",[_1]:"fire-fn-compat",[S1]:"fire-iid",[E1]:"fire-iid-compat",[k1]:"fire-fcm",[I1]:"fire-fcm-compat",[C1]:"fire-perf",[T1]:"fire-perf-compat",[P1]:"fire-rc",[N1]:"fire-rc-compat",[R1]:"fire-gcs",[O1]:"fire-gcs-compat",[x1]:"fire-fst",[A1]:"fire-fst-compat","fire-js":"fire-js",[D1]:"fire-js-all"};/**
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
 */const Ys=new Map,El=new Map;function U1(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cr(t){const e=t.name;if(El.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;El.set(e,t);for(const n of Ys.values())U1(n,t);return!0}function Ru(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const F1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new Oi("app","Firebase",F1);/**
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
 */class $1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ai=L1;function Dp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(n||(n=P0()),!n)throw Zt.create("no-options");const s=Ys.get(i);if(s){if(Qs(n,s.options)&&Qs(r,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}const o=new K0(i);for(const l of El.values())o.addComponent(l);const a=new $1(n,r,o);return Ys.set(i,a),a}function Lp(t=Sl){const e=Ys.get(t);if(!e&&t===Sl)return Dp();if(!e)throw Zt.create("no-app",{appName:t});return e}function en(t,e,n){var r;let i=(r=M1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}cr(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const b1="firebase-heartbeat-database",z1=1,mi="firebase-heartbeat-store";let ha=null;function Mp(){return ha||(ha=s1(b1,z1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mi)}}}).catch(t=>{throw Zt.create("idb-open",{originalErrorMessage:t.message})})),ha}async function V1(t){try{return(await Mp()).transaction(mi).objectStore(mi).get(Up(t))}catch(e){if(e instanceof Pt)Pn.warn(e.message);else{const n=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function kd(t,e){try{const r=(await Mp()).transaction(mi,"readwrite");return await r.objectStore(mi).put(e,Up(t)),r.done}catch(n){if(n instanceof Pt)Pn.warn(n.message);else{const r=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function Up(t){return`${t.name}!${t.options.appId}`}/**
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
 */const B1=1024,j1=30*24*60*60*1e3;class H1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new K1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Id();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=j1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Id(),{heartbeatsToSend:n,unsentEntries:r}=W1(this._heartbeatsCache.heartbeats),i=Gs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Id(){return new Date().toISOString().substring(0,10)}function W1(t,e=B1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class K1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return L0()?M0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await V1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cd(t){return Gs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function q1(t){cr(new Tn("platform-logger",e=>new l1(e),"PRIVATE")),cr(new Tn("heartbeat",e=>new H1(e),"PRIVATE")),en(_l,Ed,t),en(_l,Ed,"esm2017"),en("fire-js","")}q1("");function Ou(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Fp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G1=Fp,$p=new Oi("auth","Firebase",Fp());/**
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
 */const Td=new Pu("@firebase/auth");function vs(t,...e){Td.logLevel<=z.ERROR&&Td.error(`Auth (${Ai}): ${t}`,...e)}/**
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
 */function lt(t,...e){throw xu(t,...e)}function ot(t,...e){return xu(t,...e)}function bp(t,e,n){const r=Object.assign(Object.assign({},G1()),{[e]:n});return new Oi("auth","Firebase",r).create(e,{appName:t.name})}function Q1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&lt(t,"argument-error"),bp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $p.create(t,...e)}function x(t,e,...n){if(!t)throw xu(e,...n)}function gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vs(e),new Error(e)}function kt(t,e){t||gt(e)}/**
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
 */const Pd=new Map;function vt(t){kt(t instanceof Function,"Expected a class definition");let e=Pd.get(t);return e?(kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pd.set(t,e),e)}/**
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
 */function Y1(t,e){const n=Ru(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qs(s,e??{}))return i;lt(i,"already-initialized")}return n.initialize({options:e})}function J1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function kl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function X1(){return Nd()==="http:"||Nd()==="https:"}function Nd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Z1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(X1()||x0()||"connection"in navigator)?navigator.onLine:!0}function ew(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Di{constructor(e,n){this.shortDelay=e,this.longDelay=n,kt(n>e,"Short delay should be less than long delay!"),this.isMobile=O0()||A0()}get(){return Z1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Au(t,e){kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const nw=new Di(3e4,6e4);function rw(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ko(t,e,n,r,i={}){return Vp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zp.fetch()(Bp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Vp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tw),e);try{const i=new sw(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ns(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ns(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ns(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bp(t,d,u);lt(t,d)}}catch(i){if(i instanceof Pt)throw i;lt(t,"internal-error",{message:String(i)})}}async function iw(t,e,n,r,i={}){const s=await ko(t,e,n,r,i);return"mfaPendingCredential"in s&&lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Bp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Au(t.config,i):`${t.config.apiScheme}://${i}`}class sw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),nw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ns(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ot(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ow(t,e){return ko(t,"POST","/v1/accounts:delete",e)}async function aw(t,e){return ko(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lw(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),i=Du(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wr(pa(i.auth_time)),issuedAtTime:Wr(pa(i.iat)),expirationTime:Wr(pa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pa(t){return Number(t)*1e3}function Du(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Np(n);return i?JSON.parse(i):(vs("Failed to decode base64 JWT payload"),null)}catch(i){return vs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uw(t){const e=Du(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pt&&cw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wr(this.lastLoginAt),this.creationTime=Wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Js(t){var e;const n=t.auth,r=await t.getIdToken(),i=await gi(t,aw(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?pw(s.providerUserInfo):[],a=hw(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function fw(t){const e=Xe(t);await Js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hw(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pw(t){return t.map(e=>{var{providerId:n}=e,r=Ou(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mw(t,e){const n=await Vp(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Bp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mw(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vi;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
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
 */function xt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ou(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await gi(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lw(this,e)}reload(){return fw(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gi(this,ow(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:h,emailVerified:v,isAnonymous:k,providerData:T,stsTokenManager:P}=n;x(h&&P,e,"internal-error");const N=vi.fromJSON(this.name,P);x(typeof h=="string",e,"internal-error"),xt(p,e.name),xt(m,e.name),x(typeof v=="boolean",e,"internal-error"),x(typeof k=="boolean",e,"internal-error"),xt(y,e.name),xt(S,e.name),xt(w,e.name),xt(R,e.name),xt(f,e.name),xt(c,e.name);const j=new _n({uid:h,auth:e,email:m,emailVerified:v,displayName:p,isAnonymous:k,photoURL:S,phoneNumber:y,tenantId:w,stsTokenManager:N,createdAt:f,lastLoginAt:c});return T&&Array.isArray(T)&&(j.providerData=T.map(U=>Object.assign({},U))),R&&(j._redirectEventId=R),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new vi;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Js(s),s}}/**
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
 */class Hp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hp.type="NONE";const Rd=Hp;/**
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
 */function ys(t,e,n){return`firebase:${t}:${e}:${n}`}class er{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ys(this.userKey,i.apiKey,s),this.fullPersistenceKey=ys("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new er(vt(Rd),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||vt(Rd);const o=ys(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const p=_n._fromJSON(e,d);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new er(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new er(s,e,r))}}/**
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
 */function Od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qp(e))return"Blackberry";if(Yp(e))return"Webos";if(Lu(e))return"Safari";if((e.includes("chrome/")||Kp(e))&&!e.includes("edge/"))return"Chrome";if(Gp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wp(t=ye()){return/firefox\//i.test(t)}function Lu(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kp(t=ye()){return/crios\//i.test(t)}function qp(t=ye()){return/iemobile/i.test(t)}function Gp(t=ye()){return/android/i.test(t)}function Qp(t=ye()){return/blackberry/i.test(t)}function Yp(t=ye()){return/webos/i.test(t)}function Io(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gw(t=ye()){var e;return Io(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vw(){return D0()&&document.documentMode===10}function Jp(t=ye()){return Io(t)||Gp(t)||Yp(t)||Qp(t)||/windows phone/i.test(t)||qp(t)}function yw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Xp(t,e=[]){let n;switch(t){case"Browser":n=Od(ye());break;case"Worker":n=`${Od(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}/**
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
 */class ww{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class _w{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xd(this),this.idTokenSubscription=new xd(this),this.beforeStateQueue=new ww(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Js(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ew()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Co(t){return Xe(t)}class xd{constructor(e){this.auth=e,this.observer=null,this.addObserver=z0(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Sw(t,e,n){const r=Co(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Zp(e),{host:o,port:a}=Ew(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||kw()}function Zp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ew(t){const e=Zp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ad(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ad(o)}}}function Ad(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class em{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,n){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}/**
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
 */async function tr(t,e){return iw(t,"POST","/v1/accounts:signInWithIdp",rw(t,e))}/**
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
 */const Iw="http://localhost";class Nn extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ou(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Nn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tr(e,n)}buildRequest(){const e={requestUri:Iw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
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
 */class Mu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Li extends Mu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ft extends Li{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
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
 */class ft extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nn._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
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
 */class $t extends Li{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
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
 */class bt extends Li{constructor(){super("twitter.com")}static credential(e,n){return Nn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
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
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=Dd(r);return new dr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Dd(r);return new dr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xs extends Pt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xs(e,n,r,i)}}function tm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xs._fromErrorAndOperation(t,s,e,r):s})}async function Cw(t,e,n=!1){const r=await gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dr._forOperation(t,"link",r)}/**
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
 */async function Tw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await gi(t,tm(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=Du(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),dr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),s}}/**
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
 */async function Pw(t,e,n=!1){const r="signIn",i=await tm(t,r,e),s=await dr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Nw(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function Rw(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function Ow(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}const Zs="__sak";/**
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
 */class nm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xw(){const t=ye();return Lu(t)||Io(t)}const Aw=1e3,Dw=10;class rm extends nm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xw()&&yw(),this.fallbackToPolling=Jp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rm.type="LOCAL";const Lw=rm;/**
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
 */class im extends nm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}im.type="SESSION";const sm=im;/**
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
 */function Mw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class To{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new To(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Mw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}To.receivers=[];/**
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
 */function Uu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Uw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Uu("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function Fw(t){at().location.href=t}/**
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
 */function om(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function $w(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zw(){return om()?self:null}/**
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
 */const am="firebaseLocalStorageDb",Vw=1,eo="firebaseLocalStorage",lm="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Po(t,e){return t.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function Bw(){const t=indexedDB.deleteDatabase(am);return new Mi(t).toPromise()}function Il(){const t=indexedDB.open(am,Vw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(eo,{keyPath:lm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(eo)?e(r):(r.close(),await Bw(),e(await Il()))})})}async function Ld(t,e,n){const r=Po(t,!0).put({[lm]:e,value:n});return new Mi(r).toPromise()}async function jw(t,e){const n=Po(t,!1).get(e),r=await new Mi(n).toPromise();return r===void 0?null:r.value}function Md(t,e){const n=Po(t,!0).delete(e);return new Mi(n).toPromise()}const Hw=800,Ww=3;class um{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ww)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return om()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=To._getInstance(zw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $w(),!this.activeServiceWorker)return;this.sender=new Uw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Il();return await Ld(e,Zs,"1"),await Md(e,Zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ld(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Md(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Po(i,!1).getAll();return new Mi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}um.type="LOCAL";const Kw=um;/**
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
 */function qw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qw().appendChild(r)})}function Qw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Di(3e4,6e4);/**
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
 */function cm(t,e){return e?vt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fu extends em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yw(t){return Pw(t.auth,new Fu(t),t.bypassAuthState)}function Jw(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Tw(n,new Fu(t),t.bypassAuthState)}async function Xw(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Cw(n,new Fu(t),t.bypassAuthState)}/**
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
 */class dm{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yw;case"linkViaPopup":case"linkViaRedirect":return Xw;case"reauthViaPopup":case"reauthViaRedirect":return Jw;default:lt(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zw=new Di(2e3,1e4);async function e_(t,e,n){const r=Co(t);Q1(t,e,Mu);const i=cm(r,n);return new vn(r,"signInViaPopup",e,i).executeNotNull()}class vn extends dm{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const e=Uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Zw.get())};e()}}vn.currentPopupAction=null;/**
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
 */const t_="pendingRedirect",ws=new Map;class n_ extends dm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ws.get(this.auth._key());if(!e){try{const r=await r_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ws.set(this.auth._key(),e)}return this.bypassAuthState||ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r_(t,e){const n=o_(e),r=s_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function i_(t,e){ws.set(t._key(),e)}function s_(t){return vt(t._redirectPersistence)}function o_(t){return ys(t_,t.config.apiKey,t.name)}async function a_(t,e,n=!1){const r=Co(t),i=cm(r,e),o=await new n_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const l_=10*60*1e3;class u_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!c_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ud(e))}saveEventToCache(e){this.cachedEventUids.add(Ud(e)),this.lastProcessedEventTime=Date.now()}}function Ud(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function c_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fm(t);default:return!1}}/**
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
 */async function d_(t,e={}){return ko(t,"GET","/v1/projects",e)}/**
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
 */const f_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h_=/^https?/;async function p_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d_(t);for(const n of e)try{if(m_(n))return}catch{}lt(t,"unauthorized-domain")}function m_(t){const e=kl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!h_.test(n))return!1;if(f_.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const g_=new Di(3e4,6e4);function Fd(){const t=at().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function v_(t){return new Promise((e,n)=>{var r,i,s;function o(){Fd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fd(),n(ot(t,"network-request-failed"))},timeout:g_.get()})}if(!((i=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=at().gapi)===null||s===void 0)&&s.load)o();else{const a=Qw("iframefcb");return at()[a]=()=>{gapi.load?o():n(ot(t,"network-request-failed"))},Gw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _s=null,e})}let _s=null;function y_(t){return _s=_s||v_(t),_s}/**
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
 */const w_=new Di(5e3,15e3),__="__/auth/iframe",S_="emulator/auth/iframe",E_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I_(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Au(e,S_):`https://${t.config.authDomain}/${__}`,r={apiKey:e.apiKey,appName:t.name,v:Ai},i=k_.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xi(r).slice(1)}`}async function C_(t){const e=await y_(t),n=at().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:I_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ot(t,"network-request-failed"),a=at().setTimeout(()=>{s(o)},w_.get());function l(){at().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const T_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P_=500,N_=600,R_="_blank",O_="http://localhost";class $d{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function x_(t,e,n,r=P_,i=N_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},T_),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ye().toLowerCase();n&&(a=Kp(u)?R_:n),Wp(u)&&(e=e||O_,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,S])=>`${m}${y}=${S},`,"");if(gw(u)&&a!=="_self")return A_(e||"",a),new $d(null);const p=window.open(e||"",a,d);x(p,t,"popup-blocked");try{p.focus()}catch{}return new $d(p)}function A_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const D_="__/auth/handler",L_="emulator/auth/handler";function bd(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(e instanceof Mu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",b0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Li){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${M_(t)}?${xi(a).slice(1)}`}function M_({config:t}){return t.emulator?Au(t,L_):`https://${t.authDomain}/${D_}`}/**
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
 */const ma="webStorageSupport";class U_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sm,this._completeRedirectFn=a_,this._overrideRedirectResult=i_}async _openPopup(e,n,r,i){var s;kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=bd(e,n,r,kl(),i);return x_(e,o,Uu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Fw(bd(e,n,r,kl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C_(e),r=new u_(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ma,{type:ma},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ma];o!==void 0&&n(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jp()||Lu()||Io()}}const F_=U_;var zd="@firebase/auth",Vd="0.21.4";/**
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
 */class $_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function b_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function z_(t){cr(new Tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{x(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xp(t)},d=new _w(a,l,u);return J1(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cr(new Tn("auth-internal",e=>{const n=Co(e.getProvider("auth").getImmediate());return(r=>new $_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(zd,Vd,b_(t)),en(zd,Vd,"esm2017")}/**
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
 */const V_=5*60,B_=Op("authIdTokenMaxAge")||V_;let Bd=null;const j_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>B_)return;const i=n==null?void 0:n.token;Bd!==i&&(Bd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function H_(t=Lp()){const e=Ru(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Y1(t,{popupRedirectResolver:F_,persistence:[Kw,Lw,sm]}),r=Op("authTokenSyncURL");if(r){const s=j_(r);Rw(n,s,()=>s(n.currentUser)),Nw(n,o=>s(o))}const i=Rp("auth");return i&&Sw(n,`http://${i}`),n}z_("Browser");var W_="firebase",K_="9.17.2";/**
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
 */en(W_,K_,"app");/**
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
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
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
 */let _r="9.17.2";/**
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
 */const fr=new Pu("@firebase/firestore");function to(t,...e){if(fr.logLevel<=z.DEBUG){const n=e.map(bu);fr.debug(`Firestore (${_r}): ${t}`,...n)}}function $u(t,...e){if(fr.logLevel<=z.ERROR){const n=e.map(bu);fr.error(`Firestore (${_r}): ${t}`,...n)}}function hm(t,...e){if(fr.logLevel<=z.WARN){const n=e.map(bu);fr.warn(`Firestore (${_r}): ${t}`,...n)}}function bu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Ze(t="Unexpected state"){const e=`FIRESTORE (${_r}) INTERNAL ASSERTION FAILED: `+t;throw $u(e),new Error(e)}function It(t,e){t||Ze()}function zu(t,e){return t}/**
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
 */const jd="ok",q_="cancelled",Kr="unknown",M="invalid-argument",G_="deadline-exceeded",Q_="not-found",Y_="permission-denied",Cl="unauthenticated",J_="resource-exhausted",hr="failed-precondition",X_="aborted",Z_="out-of-range",pm="unimplemented",eS="internal",tS="unavailable";class O extends Pt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class rS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iS{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(It(typeof e.accessToken=="string"),new mm(e.accessToken,new ke(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class sS{constructor(e,n,r,i){this.t=e,this.i=n,this.o=r,this.u=i,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(It(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class oS{constructor(e,n,r,i){this.t=e,this.i=n,this.o=r,this.u=i}getToken(){return Promise.resolve(new sS(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lS{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(It(typeof e.token=="string"),new aS(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class uS{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}class wi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ze(),r===void 0?r=e.length-n:r>e.length-n&&Ze(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends wi{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(M,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const cS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends wi{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return cS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(M,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(M,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(M,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(M,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(ge.fromString(e))}static fromName(e){return new Te(ge.fromString(e).popFirst(5))}static empty(){return new Te(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new ge(e.slice()))}}/**
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
 */function dS(t,e,n){if(!n)throw new O(M,`Function ${t}() cannot be called with an empty ${e}.`)}function Hd(t){if(Te.isDocumentKey(t))throw new O(M,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function No(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ze()}function gm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(M,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=No(t);throw new O(M,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function fS(t){return t==null}function no(t){return t===0&&1/t==-1/0}/**
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
 */const hS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Wd,$;function Kd(t){if(t===void 0)return $u("RPC_ERROR","HTTP error has no status"),Kr;switch(t){case 200:return jd;case 400:return hr;case 401:return Cl;case 403:return Y_;case 404:return Q_;case 409:return X_;case 416:return Z_;case 429:return J_;case 499:return q_;case 500:return Kr;case 501:return pm;case 503:return tS;case 504:return G_;default:return t>=200&&t<300?jd:t>=400&&t<500?hr:t>=500&&t<600?eS:Kr}}/**
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
 */($=Wd||(Wd={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";class pS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}A(e,n,r,i,s){const o=this.I(e,n);to("RestConnection","Sending: ",o,r);const a={};return this.T(a,i,s),this.R(e,o,a,r).then(l=>(to("RestConnection","Received: ",l),l),l=>{throw hm("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}P(e,n,r,i,s,o){return this.A(e,n,r,i,s)}T(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+_r,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}I(e,n){const r=hS[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.V=n}$(e,n){throw new Error("Not supported by FetchConnection")}async R(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.V(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new O(Kd(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new O(Kd(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}function oe(t,e){return t<e?-1:t>e?1:0}function mS(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */function qd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ro(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class gS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new gS("Invalid base64 string: "+i):i}}(e);return new Ct(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const vS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(It(!!t),typeof t=="string"){let e=0;const n=vS.exec(t);if(It(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(t.seconds),nanos:re(t.nanos)}}function re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(M,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(M,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(M,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(M,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function vm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ym(t){const e=t.mapValue.fields.__previous_value__;return vm(e)?ym(e):e}function Si(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */const rs={fields:{__type__:{stringValue:"__max__"}}};function On(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vm(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:Ze()}function ro(t,e){if(t===e)return!0;const n=On(t);if(n!==On(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Si(t).isEqual(Si(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Rn(r.timestampValue),o=Rn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return _i(r.bytesValue).isEqual(_i(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return re(r.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(r.geoPointValue.longitude)===re(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return re(r.integerValue)===re(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=re(r.doubleValue),o=re(i.doubleValue);return s===o?no(s)===no(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return mS(t.arrayValue.values||[],e.arrayValue.values||[],ro);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(qd(s)!==qd(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ro(s[a],o[a])))return!1;return!0}(t,e);default:return Ze()}}function Ei(t,e){return(t.values||[]).find(n=>ro(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=On(t),r=On(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=re(i.integerValue||i.doubleValue),a=re(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gd(t.timestampValue,e.timestampValue);case 4:return Gd(Si(t),Si(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=_i(i),a=_i(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=oe(o[l],a[l]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=oe(re(i.latitude),re(s.latitude));return o!==0?o:oe(re(i.longitude),re(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=io(o[l],a[l]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===rs&&s===rs)return 0;if(i===rs)return 1;if(s===rs)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let d=0;d<a.length&&d<u.length;++d){const p=oe(a[d],u[d]);if(p!==0)return p;const m=io(o[a[d]],l[u[d]]);if(m!==0)return m}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Ze()}}function Gd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Rn(t),r=Rn(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Qd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wm(t){return!!t&&"arrayValue"in t}function Yd(t){return!!t&&"nullValue"in t}function Jd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ga(t){return!!t&&"mapValue"in t}function qr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ro(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Xd{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class _m{}class et extends _m{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yS(e,n,r):n==="array-contains"?new SS(e,r):n==="in"?new ES(e,r):n==="not-in"?new kS(e,r):n==="array-contains-any"?new IS(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wS(e,r):new _S(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(io(n,this.value)):n!==null&&On(this.value)===On(n)&&this.matchesComparison(io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ze()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ui extends _m{constructor(e,n){super(),this.filters=e,this.op=n,this.S=null}static create(e,n){return new Ui(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.q(n=>n.isInequality());return e!==null?e.field:null}q(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class yS extends et{constructor(e,n,r){super(e,n,r),this.key=Te.fromName(r.referenceValue)}matches(e){const n=Te.comparator(e.key,this.key);return this.matchesComparison(n)}}class wS extends et{constructor(e,n){super(e,"in",n),this.keys=Sm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _S extends et{constructor(e,n){super(e,"not-in",n),this.keys=Sm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Te.fromName(r.referenceValue))}class SS extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wm(n)&&Ei(n.arrayValue,this.value)}}class ES extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ei(this.value.arrayValue,n)}}class kS extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ei(this.value.arrayValue,n)}}class IS extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ei(this.value.arrayValue,r))}}/**
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
 */class Ss{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new De(0,0))}static max(){return new pe(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qr(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=qr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ro(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ro(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ht(qr(this.value))}}/**
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
 */class Lt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Lt(e,0,pe.min(),pe.min(),pe.min(),ht.empty(),0)}static newFoundDocument(e,n,r,i){return new Lt(e,1,n,pe.min(),r,i,0)}static newNoDocument(e,n){return new Lt(e,2,n,pe.min(),pe.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,pe.min(),pe.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class CS{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.O=null}}function Zd(t,e=null,n=[],r=[],i=null,s=null,o=null){return new CS(t,e,n,r,i,s,o)}/**
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
 */class Em{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.k=null,this.C=null,this.startAt,this.endAt}}function km(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function TS(t){return t.collectionGroup!==null}function ef(t){const e=zu(t);if(e.k===null){e.k=[];const n=Vu(e),r=km(e);if(n!==null&&r===null)n.isKeyField()||e.k.push(new Ss(n)),e.k.push(new Ss(Ge.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.k.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.k.push(new Ss(Ge.keyField(),s))}}}return e.k}function PS(t){const e=zu(t);if(!e.C)if(e.limitType==="F")e.C=Zd(e.path,e.collectionGroup,ef(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ef(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ss(s.field,o))}const r=e.endAt?new Xd(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Xd(e.startAt.position,e.startAt.inclusive):null;e.C=Zd(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function Tl(t,e){e.getFirstInequalityField(),Vu(t);const n=t.filters.concat([e]);return new Em(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function NS(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!no(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.L){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:no(r)?"-0":r}}(t,e)}/**
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
 */const RS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),OS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xS=(()=>({and:"AND",or:"OR"}))();class AS{constructor(e,n){this.databaseId=e,this.L=n}}function tf(t,e){return t.L?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DS(t,e){return t.L?e.toBase64():e.toUint8Array()}function nf(t){return It(!!t),pe.fromTimestamp(function(e){const n=Rn(e);return new De(n.seconds,n.nanos)}(t))}function Im(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function LS(t,e){const n=function(i){const s=ge.fromString(i);return It(Tm(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new O(M,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(M,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Te((It((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function rf(t,e){return Im(t.databaseId,e)}function MS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=rf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=rf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Cm(Ui.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Mn(d.field),direction:US(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.L||fS(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function US(t){return RS[t]}function FS(t){return OS[t]}function $S(t){return xS[t]}function Mn(t){return{fieldPath:t.canonicalString()}}function Cm(t){return t instanceof et?function(e){if(e.op==="=="){if(Jd(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NAN"}};if(Yd(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jd(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NOT_NAN"}};if(Yd(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(e.field),op:FS(e.op),value:e.value}}}(t):t instanceof Ui?function(e){const n=e.getFilters().map(r=>Cm(r));return n.length===1?n[0]:{compositeFilter:{op:$S(e.op),filters:n}}}(t):Ze()}function Tm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Bu(t){return new AS(t,!0)}/**
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
 */class bS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.M=i,this.et=!1}nt(){if(this.et)throw new O(hr,"The client has already been terminated.")}A(e,n,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.A(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Cl&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(Kr,i.toString())})}P(e,n,r,i){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Cl&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(Kr,s.toString())})}terminate(){this.et=!0}}async function zS(t,e){const n=zu(t),r=MS(n.M,PS(e));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(s,o,a){const l=LS(s,o.name),u=nf(o.updateTime),d=o.createTime?nf(o.createTime):pe.min(),p=new ht({mapValue:{fields:o.fields}}),m=Lt.newFoundDocument(l,u,d,p);return a&&m.setHasCommittedMutations(),a?m.setHasCommittedMutations():m}(n.M,i.document,void 0))}/**
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
 */const Gr=new Map;function VS(t){if(t._terminated)throw new O(hr,"The client has already been terminated.");if(!Gr.has(t)){to("ComponentProvider","Initializing Datastore");const s=function(l){return new pS(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,i=t._freezeSettings(),new uS(e,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),o=Bu(t._databaseId),a=function(l,u,d,p){return new bS(l,u,d,p)}(t._authCredentials,t._appCheckCredentials,s,o);Gr.set(t,a)}var e,n,r,i;/**
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
*/return Gr.get(t)}class sf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(M,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(M,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,i,s,o){if(i===!0&&o===!0)throw new O(M,`${r} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ju{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(hr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(hr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nS;switch(n.type){case"gapi":const r=n.client;return new oS(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(M,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Gr.get(e);n&&(to("ComponentProvider","Removing Datastore"),Gr.delete(e),n.terminate())}(this),Promise.resolve()}}function BS(t,e){const n=typeof t=="object"?t:Lp(),r=typeof t=="string"?t:e||"(default)",i=Ru(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=T0("firestore");s&&jS(i,...s)}return i}function jS(t,e,n,r={}){var i;const s=(t=gm(t,ju))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&hm("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ke.MOCK_USER;else{o=R0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new O(M,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ke(l)}t._authCredentials=new rS(new mm(o,a))}}/**
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
 */class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class Sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class nr extends Sr{constructor(e,n,r){super(e,n,new Em(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new Te(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function Hu(t,e,...n){if(t=Xe(t),dS("collection","path",e),t instanceof ju){const r=ge.fromString(e,...n);return Hd(r),new nr(t,null,r)}{if(!(t instanceof Nt||t instanceof nr))throw new O(M,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Hd(r),new nr(t.firestore,null,r)}}/**
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
 */class pr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pr(Ct.fromBase64String(e))}catch(n){throw new O(M,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pr(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(M,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nm{constructor(e){this._methodName=e}}/**
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
 */class Wu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(M,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(M,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const HS=/^__.*__$/;function Rm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ze()}}class Ku{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.rt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get st(){return this.settings.st}it(e){return new Ku(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ut:!1});return i.ct(e),i}at(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.it({path:r,ut:!1});return i.rt(),i}ht(e){return this.it({path:void 0,ut:!0})}lt(e){return Pl(e,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ct(this.path.get(e))}ct(e){if(e.length===0)throw this.lt("Document fields must not be empty");if(Rm(this.st)&&HS.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class WS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||Bu(e)}wt(e,n,r,i=!1){return new Ku({st:e,methodName:n,dt:r,path:Ge.emptyPath(),ut:!1,ft:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function KS(t){const e=t._freezeSettings(),n=Bu(t._databaseId);return new WS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qS(t,e,n,r=!1){return qu(n,t.wt(r?4:3,e))}function qu(t,e){if(Om(t=Xe(t)))return QS("Unsupported field value:",e,t),GS(t,e);if(t instanceof Nm)return function(n,r){if(!Rm(r.st))throw r.lt(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.lt(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ut&&e.st!==4)throw e.lt("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=qu(o,r.ht(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return NS(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:tf(r.M,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tf(r.M,i)}}if(n instanceof Wu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof pr)return{bytesValue:DS(r.M,n._byteString)};if(n instanceof Nt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.lt(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Im(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.lt(`Unsupported field value: ${No(n)}`)}(t,e)}function GS(t,e){const n={};return function(r){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ro(t,(r,i)=>{const s=qu(i,e.ot(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Om(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Wu||t instanceof pr||t instanceof Nt||t instanceof Nm)}function QS(t,e,n){if(!Om(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=No(n);throw r==="an object"?e.lt(t+" a custom object"):e.lt(t+" "+r)}}const YS=new RegExp("[~\\*/\\[\\]]");function JS(t,e,n){if(e.search(YS)>=0)throw Pl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pm(...e.split("."))._internalPath}catch{throw Pl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(M,a+t+l)}/**
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
 */class XS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Am("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xm extends XS{data(){return super.data()}}class ZS{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Am(t,e){return typeof e=="string"?JS(t,e):e instanceof Pm?e._internalPath:e._delegate._internalPath}/**
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
 */class Gu{}class eE extends Gu{}function tE(t,e,...n){let r=[];e instanceof Gu&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Qu).length,o=i.filter(a=>a instanceof Oo).length;if(s>1||s>0&&o>0)throw new O(M,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Oo extends eE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Oo(e,n,r)}_apply(e){const n=this._parse(e);return Dm(e._query,n),new Sr(e.firestore,e.converter,Tl(e._query,n))}_parse(e){const n=KS(e.firestore);return function(i,s,o,a,l,u,d){let p;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new O(M,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){af(d,u);const m=[];for(const y of d)m.push(of(a,i,y));p={arrayValue:{values:m}}}else p=of(a,i,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||af(d,u),p=qS(o,s,d,u==="in"||u==="not-in");return et.create(l,u,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function nE(t,e,n){const r=e,i=Am("where",t);return Oo._create(i,r,n)}class Qu extends Gu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ui.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Dm(s,a),s=Tl(s,a)}(e._query,n),new Sr(e.firestore,e.converter,Tl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function of(t,e,n){if(typeof(n=Xe(n))=="string"){if(n==="")throw new O(M,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!TS(e)&&n.indexOf("/")!==-1)throw new O(M,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!Te.isDocumentKey(r))throw new O(M,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qd(t,new Te(r))}if(n instanceof Nt)return Qd(t,n._key);throw new O(M,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${No(n)}.`)}function af(t,e){if(!Array.isArray(t)||t.length===0)throw new O(M,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dm(t,e){if(e.isInequality()){const r=Vu(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new O(M,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=km(t);s!==null&&rE(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(M,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(M,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function rE(t,e,n){if(!n.isEqual(e))throw new O(M,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class iE extends class{convertValue(e,n="none"){switch(On(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ze()}}convertObject(e,n){const r={};return Ro(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Wu(re(e.latitude),re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ym(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Si(e));default:return null}}convertTimestamp(e){const n=Rn(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);It(Tm(r));const i=new yi(r.get(1),r.get(3)),s=new Te(r.popFirst(5));return i.isEqual(n)||$u(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new pr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function xo(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(pm,"limitToLast() queries require specifying at least one orderBy() clause")})((t=gm(t,Sr))._query);const e=VS(t.firestore),n=new iE(t.firestore);return zS(e,t._query).then(r=>{const i=r.map(s=>new xm(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new ZS(t,i)})}(function(t){_r=t})(`${Ai}_lite`),cr(new Tn("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),i=new ju(new iS(t.getProvider("auth-internal")),new lS(t.getProvider("app-check-internal")),function(s,o){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new O(M,'"projectId" not provided in firebase.initializeApp.');return new yi(s.options.projectId,o)}(r,e),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),en("firestore-lite","3.8.4",""),en("firestore-lite","3.8.4","esm2017");const sE={apiKey:"AIzaSyA-yi3884uMF-T82Vq3TM1hnTeC4zl4BxA",authDomain:"ecommerceodin.firebaseapp.com",projectId:"ecommerceodin",storageBucket:"ecommerceodin.appspot.com",messagingSenderId:"388718595094",appId:"1:388718595094:web:26fbf7dac6fe040923f937",measurementId:"G-96SL1K1DFE"},Lm=Dp(sE),Yu=BS(Lm),Mm=Hu(Yu,"products"),oE=Hu(Yu,"banner"),aE=Hu(Yu,"recent");async function Um(){return(await xo(Mm)).docs.map(n=>({...n.data(),id:n.id}))}async function lE(){return(await xo(oE)).docs.map(n=>({...n.data(),id:n.id}))}async function uE(){return(await xo(aE)).docs.map(n=>({...n.data(),id:n.id}))}async function cE(t){const e=tE(Mm,nE("title","==",t));return(await xo(e)).docs.map(i=>({...i.data(),id:i.id}))}const va=H_(Lm),dE=new ft,Fm=E.createContext(null);function fE({children:t}){const[e,n]=Z.useState("");console.log(e);const r=()=>{e_(va,dE).then(s=>(console.log(s),g(Cp,{to:"/home",state:{from:location},replace:!0}))).catch(s=>(console.log(s),!1))},i=()=>{va.signOut()};return Z.useEffect(()=>{const s=Ow(va,o=>{n(o)});return()=>{s()}},[]),g(Fm.Provider,{value:{signInWithGoogle:r,user:e,googleSignOut:i},children:t})}function Ju(){return E.useContext(Fm)}const hE=()=>{const{googleSignOut:t,user:e}=Ju();return L("div",{className:"footer-container",children:[e&&g("div",{className:"letter",children:g("button",{onClick:t,className:"signout-button",children:"LOGOUT"})}),!e&&e!==""&&L("div",{className:"letter",children:[g("h4",{children:"NEWSLETTER"}),g("h3",{children:"Sign Up to NewsLetter"}),L("div",{className:"email",children:[g("input",{type:"email"}),g("button",{children:"Enter"})]})]}),L("div",{className:"footer",children:[g("h5",{children:"Rahul Parihar Pvt. Lim."}),g("img",{src:y0,alt:"payment image"})]})]})};var $m={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lf=Z.createContext&&Z.createContext($m),tn=globalThis&&globalThis.__assign||function(){return tn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},tn.apply(this,arguments)},pE=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function bm(t){return t&&t.map(function(e,n){return Z.createElement(e.tag,tn({key:n},e.attr),bm(e.child))})}function Rt(t){return function(e){return Z.createElement(mE,tn({attr:tn({},t.attr)},e),bm(t.child))}}function mE(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=pE(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Z.createElement("svg",tn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:tn(tn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Z.createElement("title",null,s),t.children)};return lf!==void 0?Z.createElement(lf.Consumer,null,function(n){return e(n)}):e($m)}function gE(t){return Rt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]})(t)}function Xu(t){return Rt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"}}]})(t)}const vE=()=>{const[t,e]=Z.useState(!1);window.addEventListener("scroll",()=>{window.pageYOffset>70?e(!0):e(!1)});const[n,r]=Z.useState(!1);function i(){r(p=>!p)}const[s,o]=Z.useState("");function a(p){o(p.target.value)}function l(){r(!1),o("")}function u(p){var m;p.key==="Enter"&&((m=document.getElementById("search-button"))==null||m.click(),l())}const d=0;return L("div",{className:`header ${t?"sticky":""}`,children:[L("div",{className:"left",children:[g(dt,{to:"/home",children:g("ul",{children:"Home"})}),g(dt,{to:"/about",children:g("ul",{children:"About"})}),g(dt,{to:"/products",children:g("ul",{children:"Products"})})]}),g(dt,{to:"/",children:g("div",{className:"center",children:"RPSTORE"})}),L("div",{className:"right",children:[g("div",{className:"header-products",children:g(dt,{to:"/products",children:"Products"})}),g("div",{children:L("div",{className:"searchIcon",children:[g("div",{onClick:i,children:g(gE,{})}),n&&L("div",{className:"searchDiv",children:[g("input",{type:"text",onChange:a,onKeyDown:u}),g(dt,{to:{pathname:`/search/${s}`},children:g("button",{id:"search-button",onClick:l,children:"Enter"})})]})]})}),L("div",{className:"cart",children:[g(Xu,{}),g("div",{className:"cartScore",children:d})]})]})]})};function yE(t){return Rt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(t)}function wE(t){return Rt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(t)}function _E(t){return Rt({tag:"svg",attr:{viewBox:"0 0 8 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"}}]})(t)}const SE=()=>{const[t,e]=Z.useState();E.useEffect(()=>{Promise.resolve(lE()).then(u=>{e(u)})},[]);const n=Cu(),r=l=>{n(`/product/${l}`),console.log("navigate",l)},[i,s]=E.useState(0),o=()=>{s(l=>l===t.length-1?0:l+1)},a=()=>{s(l=>l===0?t.length-1:l-1)};return t?L("div",{className:"banner",children:[g("div",{className:"banner__image",children:t.map(l=>g("div",{className:"banner__i",style:{backgroundImage:`url(${l.image})`,transform:`translateX(-${i*100}%)`},onClick:()=>r(l.title),children:g("h2",{children:l.title})},l.title))}),L("div",{className:"arrow",children:[g("div",{onClick:a,children:g(yE,{})}),g("div",{onClick:o,children:g(wE,{})})]}),g("div",{className:"dot",children:t.map((l,u)=>g("div",{className:u===i?"highlighted-dot":"",onClick:()=>s(u),children:g(_E,{},u)},u))})]}):g(Yr,{})};const Zu=t=>L("div",{className:"solo",children:[g(dt,{to:{pathname:`/product/${t.title}`},children:g("img",{className:"product-image",src:t.image,alt:`image of the book ${t.title}`})}),g("div",{className:"title",children:g("h4",{children:t.title})}),L("div",{className:"price",children:[L("h4",{children:["₹ ",t.price]}),L("button",{children:["ADD ",g(Xu,{})]})]})]});const EE=()=>{const[t,e]=Z.useState();E.useEffect(()=>{Promise.resolve(uE()).then(i=>{e(i)})},[]);const n=()=>t.map(r=>g(Zu,{id:r.id,title:r.title,image:r.image,price:r.price},r.id));return t?L(Yr,{children:[g("h1",{className:"product-header",children:"RECENTLY ADDED"}),g("div",{className:"recent-container",children:n()})]}):g(Yr,{})},kE=()=>L("div",{children:[g(SE,{}),g(EE,{})]});const IE=()=>{const[t,e]=Z.useState("all"),[n,r]=Z.useState(null),[i,s]=Z.useState([{category:"",description:"",id:"",image:"",pages:320,price:448,title:""}]);E.useEffect(()=>{Promise.resolve(Um()).then(d=>{s(d)})},[]);function o(){return i.sort((u,d)=>n==="descending"?d.price-u.price:n==="ascending"?u.price-d.price:Math.random()-.5).map(u=>{if(!(t!=="all"&&u.category!==t))return g(Zu,{id:u.id,title:u.title,image:u.image,price:u.price},u.id)})}function a(u){let d=u.target;e(d.textContent)}function l(u){let d=u.target;r(d.textContent)}return L(Yr,{children:[g("h1",{className:"product-header",children:"Products"}),L("div",{className:"category-filter",children:[g("button",{onClick:a,children:"non-fiction"}),g("button",{onClick:a,children:"biography"}),g("button",{onClick:a,children:"fantasy"}),g("button",{onClick:a,children:"young-adult"}),g("button",{onClick:a,children:"all"})]}),L("div",{className:"category-filter",children:[g("button",{onClick:l,children:"ascending"}),g("button",{onClick:l,children:"descending"}),g("button",{onClick:l,children:"random"})]}),g("div",{className:"thumb-container",children:o()})]})},is=({children:t})=>{const{user:e}=Ju();let n=Ri();return e?t:g(Cp,{to:"/",state:{from:n},replace:!0})};const CE=()=>{const t=kp().toSearch,[e,n]=Z.useState([{category:"",description:"",id:"",image:"",pages:320,price:448,title:""}]);E.useEffect(()=>{Promise.resolve(Um()).then(o=>{n(o)})},[]);function r(){return t?e.map(s=>{if(s.title.toLowerCase().includes(t.toLowerCase()))return g(Zu,{id:s.id,title:s.title,image:s.image,price:s.price},s.id)}):g("div",{children:g("h1",{children:"NO RESULT FOUND"})})}function i(s){if(s)return s.charAt(0).toUpperCase()+s.slice(1)}return L(Yr,{children:[L("h1",{className:"product-header",children:["Search : ",i(t)]}),g("div",{className:"thumb-container",children:r()})]})};function TE(t){return Rt({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(t)}function PE(t){return Rt({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#E8EAF6",points:"42,39 6,39 6,23 24,6 42,23"}},{tag:"g",attr:{fill:"#C5CAE9"},child:[{tag:"polygon",attr:{points:"39,21 34,16 34,9 39,9"}},{tag:"rect",attr:{x:"6",y:"39",width:"36",height:"5"}}]},{tag:"polygon",attr:{fill:"#B71C1C",points:"24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"}},{tag:"rect",attr:{x:"18",y:"28",fill:"#D84315",width:"12",height:"16"}},{tag:"rect",attr:{x:"21",y:"17",fill:"#01579B",width:"6",height:"6"}},{tag:"path",attr:{fill:"#FF8A65",d:"M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"}}]})(t)}function NE(t){return Rt({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#2196F3"},child:[{tag:"rect",attr:{x:"6",y:"22",width:"4",height:"4"}},{tag:"rect",attr:{x:"6",y:"14",width:"4",height:"4"}},{tag:"rect",attr:{x:"6",y:"30",width:"4",height:"4"}},{tag:"rect",attr:{x:"6",y:"6",width:"4",height:"4"}},{tag:"rect",attr:{x:"6",y:"38",width:"4",height:"4"}}]},{tag:"g",attr:{fill:"#2196F3"},child:[{tag:"rect",attr:{x:"14",y:"22",width:"28",height:"4"}},{tag:"rect",attr:{x:"14",y:"14",width:"28",height:"4"}},{tag:"rect",attr:{x:"14",y:"30",width:"28",height:"4"}},{tag:"rect",attr:{x:"14",y:"6",width:"28",height:"4"}},{tag:"rect",attr:{x:"14",y:"38",width:"28",height:"4"}}]}]})(t)}const RE=()=>{const{signInWithGoogle:t,user:e}=Ju();return L("div",{className:"signup-container",children:[!e&&e!==""&&L("div",{onClick:()=>{t()},className:"signin-button",children:[g("span",{className:"larger",children:g(TE,{})}),"Signup With Google"]}),e&&L("div",{className:"signin-after",children:[g(dt,{to:"/home",children:L("div",{className:"signin-button",children:[g("span",{className:"larger",children:g(PE,{})}),"Home"]})}),g(dt,{to:"/products",children:L("div",{className:"signin-button",children:[g("span",{className:"larger",children:g(NE,{})}),"All Products"]})})]})]})};function OE(t){return Rt({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}}]})(t)}const xE=()=>{const t=kp().productid,[e,n]=Z.useState();return E.useEffect(()=>{Promise.resolve(cE(t)).then(i=>{n(i[0])})},[]),e?L("div",{className:"single-container",children:[g("div",{className:"single-left",children:g("img",{src:e.image,alt:`image of book ${e.title}`})}),L("div",{className:"single-right",children:[g("h1",{children:e.title}),L("h1",{children:["₹ ",e.price]}),L("button",{className:"single-add-cart",children:["ADD ",g(Xu,{})]}),L("div",{className:"extra-details",children:[L("div",{className:"pages-detail",children:[g("h1",{children:g(OE,{})}),L("h2",{children:[": ",e.pages," Pages"]})]}),L("h2",{children:["Category : ",e.category.toUpperCase()]})]}),g("h3",{children:e.description})]})]}):g("div",{children:g("h1",{children:"Product Not found"})})};function AE(){return g("div",{className:"app",children:g(fE,{children:L(h0,{children:[g(vE,{}),L(l0,{children:[g(fn,{path:"/",element:g(RE,{})}),g(fn,{path:"/home",element:g(is,{children:g(kE,{})})}),g(fn,{path:"/products",element:g(is,{children:g(IE,{})})}),g(fn,{path:"/about",element:g(v0,{})}),g(fn,{path:"/search/:toSearch",element:g(is,{children:g(CE,{})})}),g(fn,{path:"/product/:productid",element:g(is,{children:g(xE,{})})})]}),g(hE,{})]})})})}wa.createRoot(document.getElementById("root")).render(g(Z.StrictMode,{children:g(AE,{})}));
