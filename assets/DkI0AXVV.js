const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DANRw6i2.js","./BQDKeJ-3.js","./C5YVw4IS.js","./BXZk_JrV.js","./index.BIy6Awuw.css","./5Z8j3HAD.js","./Bl0viK5s.js","./DB7g2Lih.js","./CP0ZXfAK.js","./CrC_pZV4.js","./D-K2TBwU.js","./error-404.ehK72JOs.css","./C5OsiVDx.js","./error-500._g0akJim.css"])))=>i.map(i=>d[i]);
var Cy=Object.defineProperty;var Iy=(t,e,n)=>e in t?Cy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var dn=(t,e,n)=>Iy(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function il(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ge={},Ps=[],Ft=()=>{},Ty=()=>!1,oi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ol=t=>t.startsWith("onUpdate:"),He=Object.assign,al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sy=Object.prototype.hasOwnProperty,he=(t,e)=>Sy.call(t,e),Q=Array.isArray,Ns=t=>ai(t)==="[object Map]",Rd=t=>ai(t)==="[object Set]",Ry=t=>ai(t)==="[object RegExp]",ee=t=>typeof t=="function",Ie=t=>typeof t=="string",an=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",kd=t=>(we(t)||ee(t))&&ee(t.then)&&ee(t.catch),Ad=Object.prototype.toString,ai=t=>Ad.call(t),ky=t=>ai(t).slice(8,-1),Pd=t=>ai(t)==="[object Object]",cl=t=>Ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ay=/-(\w)/g,vt=Ho(t=>t.replace(Ay,(e,n)=>n?n.toUpperCase():"")),Py=/\B([A-Z])/g,ds=Ho(t=>t.replace(Py,"-$1").toLowerCase()),jo=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),ma=Ho(t=>t?`on${jo(t)}`:""),Rn=(t,e)=>!Object.is(t,e),xs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Nd=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},nc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Od=t=>{const e=Ie(t)?Number(t):NaN;return isNaN(e)?t:e};let Mu;const Bo=()=>Mu||(Mu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $o(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ie(s)?My(s):$o(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ie(t)||we(t))return t}const Ny=/;(?![^(]*\))/g,Oy=/:([^]+)/,xy=/\/\*[^]*?\*\//g;function My(t){const e={};return t.replace(xy,"").split(Ny).forEach(n=>{if(n){const s=n.split(Oy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Wo(t){let e="";if(Ie(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const s=Wo(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Ly(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ie(e)&&(t.class=Wo(e)),n&&(t.style=$o(n)),t}const Dy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fy=il(Dy);function xd(t){return!!t||t===""}const Md=t=>!!(t&&t.__v_isRef===!0),Uy=t=>Ie(t)?t:t==null?"":Q(t)||we(t)&&(t.toString===Ad||!ee(t.toString))?Md(t)?Uy(t.value):JSON.stringify(t,Ld,2):String(t),Ld=(t,e)=>Md(e)?Ld(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[ya(s,i)+" =>"]=r,n),{})}:Rd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ya(n))}:an(e)?ya(e):we(e)&&!Q(e)&&!Pd(e)?String(e):e,ya=(t,e="")=>{var n;return an(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class Dd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ye,!e&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ye;try{return Ye=this,e()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ll(t){return new Dd(t)}function ul(){return Ye}function Hy(t,e=!1){Ye&&Ye.cleanups.push(t)}let ye;const va=new WeakSet;class Fd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&Ye.active&&Ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,va.has(this)&&(va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lu(this),jd(this);const e=ye,n=Rt;ye=this,Rt=!0;try{return this.fn()}finally{Bd(this),ye=e,Rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)dl(e);this.deps=this.depsTail=void 0,Lu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sc(this)&&this.run()}get dirty(){return sc(this)}}let Ud=0,br,Cr;function Hd(t,e=!1){if(t.flags|=8,e){t.next=Cr,Cr=t;return}t.next=br,br=t}function fl(){Ud++}function hl(){if(--Ud>0)return;if(Cr){let e=Cr;for(Cr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;br;){let e=br;for(br=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function jd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bd(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),dl(s),jy(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function sc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($d(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $d(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Fr))return;t.globalVersion=Fr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!sc(t)){t.flags&=-3;return}const n=ye,s=Rt;ye=t,Rt=!0;try{jd(t);const r=t.fn(t._value);(e.version===0||Rn(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ye=n,Rt=s,Bd(t),t.flags&=-3}}function dl(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)dl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rt=!0;const Wd=[];function Un(){Wd.push(Rt),Rt=!1}function Hn(){const t=Wd.pop();Rt=t===void 0?!0:t}function Lu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ye;ye=void 0;try{e()}finally{ye=n}}}let Fr=0;class By{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ye||!Rt||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new By(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,Vd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=s)}return n}trigger(e){this.version++,Fr++,this.notify(e)}notify(e){fl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hl()}}}function Vd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Vd(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Zi=new WeakMap,Xn=Symbol(""),rc=Symbol(""),Ur=Symbol("");function $e(t,e,n){if(Rt&&ye){let s=Zi.get(t);s||Zi.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new pl),r.map=s,r.key=n),r.track()}}function Gt(t,e,n,s,r,i){const o=Zi.get(t);if(!o){Fr++;return}const a=c=>{c&&c.trigger()};if(fl(),e==="clear")o.forEach(a);else{const c=Q(t),l=c&&cl(n);if(c&&n==="length"){const u=Number(s);o.forEach((f,h)=>{(h==="length"||h===Ur||!an(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Ur)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Xn)),Ns(t)&&a(o.get(rc)));break;case"delete":c||(a(o.get(Xn)),Ns(t)&&a(o.get(rc)));break;case"set":Ns(t)&&a(o.get(Xn));break}}hl()}function $y(t,e){const n=Zi.get(t);return n&&n.get(e)}function ws(t){const e=ae(t);return e===t?e:($e(e,"iterate",Ur),yt(t)?e:e.map(We))}function Vo(t){return $e(t=ae(t),"iterate",Ur),t}const Wy={__proto__:null,[Symbol.iterator](){return wa(this,Symbol.iterator,We)},concat(...t){return ws(this).concat(...t.map(e=>Q(e)?ws(e):e))},entries(){return wa(this,"entries",t=>(t[1]=We(t[1]),t))},every(t,e){return Wt(this,"every",t,e,void 0,arguments)},filter(t,e){return Wt(this,"filter",t,e,n=>n.map(We),arguments)},find(t,e){return Wt(this,"find",t,e,We,arguments)},findIndex(t,e){return Wt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Wt(this,"findLast",t,e,We,arguments)},findLastIndex(t,e){return Wt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Wt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ea(this,"includes",t)},indexOf(...t){return Ea(this,"indexOf",t)},join(t){return ws(this).join(t)},lastIndexOf(...t){return Ea(this,"lastIndexOf",t)},map(t,e){return Wt(this,"map",t,e,void 0,arguments)},pop(){return cr(this,"pop")},push(...t){return cr(this,"push",t)},reduce(t,...e){return Du(this,"reduce",t,e)},reduceRight(t,...e){return Du(this,"reduceRight",t,e)},shift(){return cr(this,"shift")},some(t,e){return Wt(this,"some",t,e,void 0,arguments)},splice(...t){return cr(this,"splice",t)},toReversed(){return ws(this).toReversed()},toSorted(t){return ws(this).toSorted(t)},toSpliced(...t){return ws(this).toSpliced(...t)},unshift(...t){return cr(this,"unshift",t)},values(){return wa(this,"values",We)}};function wa(t,e,n){const s=Vo(t),r=s[e]();return s!==t&&!yt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Vy=Array.prototype;function Wt(t,e,n,s,r,i){const o=Vo(t),a=o!==t&&!yt(t),c=o[e];if(c!==Vy[e]){const f=c.apply(t,i);return a?We(f):f}let l=n;o!==t&&(a?l=function(f,h){return n.call(this,We(f),h,t)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,t)}));const u=c.call(o,l,s);return a&&r?r(u):u}function Du(t,e,n,s){const r=Vo(t);let i=n;return r!==t&&(yt(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,We(a),c,t)}),r[e](i,...s)}function Ea(t,e,n){const s=ae(t);$e(s,"iterate",Ur);const r=s[e](...n);return(r===-1||r===!1)&&ml(n[0])?(n[0]=ae(n[0]),s[e](...n)):r}function cr(t,e,n=[]){Un(),fl();const s=ae(t)[e].apply(t,n);return hl(),Hn(),s}const qy=il("__proto__,__v_isRef,__isVue"),qd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(an));function Ky(t){an(t)||(t=String(t));const e=ae(this);return $e(e,"has",t),e.hasOwnProperty(t)}class Kd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?nv:Qd:i?Yd:zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=Q(e);if(!r){let c;if(o&&(c=Wy[n]))return c;if(n==="hasOwnProperty")return Ky}const a=Reflect.get(e,n,Te(e)?e:s);return(an(n)?qd.has(n):qy(n))||(r||$e(e,"get",n),i)?a:Te(a)?o&&cl(n)?a:a.value:we(a)?r?Jd(a):$t(a):a}}class Gd extends Kd{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Mn(i);if(!yt(s)&&!Mn(s)&&(i=ae(i),s=ae(s)),!Q(e)&&Te(i)&&!Te(s))return c?!1:(i.value=s,!0)}const o=Q(e)&&cl(n)?Number(n)<e.length:he(e,n),a=Reflect.set(e,n,s,Te(e)?e:r);return e===ae(r)&&(o?Rn(s,i)&&Gt(e,"set",n,s):Gt(e,"add",n,s)),a}deleteProperty(e,n){const s=he(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Gt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!an(n)||!qd.has(n))&&$e(e,"has",n),s}ownKeys(e){return $e(e,"iterate",Q(e)?"length":Xn),Reflect.ownKeys(e)}}class Gy extends Kd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zy=new Gd,Yy=new Gy,Qy=new Gd(!0);const ic=t=>t,Ri=t=>Reflect.getPrototypeOf(t);function Jy(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=Ns(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ic:e?oc:We;return!e&&$e(i,"iterate",c?rc:Xn),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ki(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xy(t,e){const n={get(r){const i=this.__v_raw,o=ae(i),a=ae(r);t||(Rn(r,a)&&$e(o,"get",r),$e(o,"get",a));const{has:c}=Ri(o),l=e?ic:t?oc:We;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&$e(ae(r),"iterate",Xn),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=ae(i),a=ae(r);return t||(Rn(r,a)&&$e(o,"has",r),$e(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=ae(a),l=e?ic:t?oc:We;return!t&&$e(c,"iterate",Xn),a.forEach((u,f)=>r.call(i,l(u),l(f),o))}};return He(n,t?{add:ki("add"),set:ki("set"),delete:ki("delete"),clear:ki("clear")}:{add(r){!e&&!yt(r)&&!Mn(r)&&(r=ae(r));const i=ae(this);return Ri(i).has.call(i,r)||(i.add(r),Gt(i,"add",r,r)),this},set(r,i){!e&&!yt(i)&&!Mn(i)&&(i=ae(i));const o=ae(this),{has:a,get:c}=Ri(o);let l=a.call(o,r);l||(r=ae(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,i),l?Rn(i,u)&&Gt(o,"set",r,i):Gt(o,"add",r,i),this},delete(r){const i=ae(this),{has:o,get:a}=Ri(i);let c=o.call(i,r);c||(r=ae(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&Gt(i,"delete",r,void 0),l},clear(){const r=ae(this),i=r.size!==0,o=r.clear();return i&&Gt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Jy(r,t,e)}),n}function gl(t,e){const n=Xy(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(he(n,r)&&r in s?n:s,r,i)}const Zy={get:gl(!1,!1)},ev={get:gl(!1,!0)},tv={get:gl(!0,!1)};const zd=new WeakMap,Yd=new WeakMap,Qd=new WeakMap,nv=new WeakMap;function sv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rv(t){return t.__v_skip||!Object.isExtensible(t)?0:sv(ky(t))}function $t(t){return Mn(t)?t:_l(t,!1,zy,Zy,zd)}function Yt(t){return _l(t,!1,Qy,ev,Yd)}function Jd(t){return _l(t,!0,Yy,tv,Qd)}function _l(t,e,n,s,r){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=rv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Zt(t){return Mn(t)?Zt(t.__v_raw):!!(t&&t.__v_isReactive)}function Mn(t){return!!(t&&t.__v_isReadonly)}function yt(t){return!!(t&&t.__v_isShallow)}function ml(t){return t?!!t.__v_raw:!1}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function yl(t){return!he(t,"__v_skip")&&Object.isExtensible(t)&&Nd(t,"__v_skip",!0),t}const We=t=>we(t)?$t(t):t,oc=t=>we(t)?Jd(t):t;function Te(t){return t?t.__v_isRef===!0:!1}function st(t){return Xd(t,!1)}function Hr(t){return Xd(t,!0)}function Xd(t,e){return Te(t)?t:new iv(t,e)}class iv{constructor(e,n){this.dep=new pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ae(e),this._value=n?e:We(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||yt(e)||Mn(e);e=s?e:ae(e),Rn(e,n)&&(this._rawValue=e,this._value=s?e:We(e),this.dep.trigger())}}function be(t){return Te(t)?t.value:t}function ov(t){return ee(t)?t():be(t)}const av={get:(t,e,n)=>e==="__v_raw"?t:be(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Te(r)&&!Te(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Zd(t){return Zt(t)?t:new Proxy(t,av)}function cv(t){const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=ep(t,n);return e}class lv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $y(ae(this._object),this._key)}}class uv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function fv(t,e,n){return Te(t)?t:ee(t)?new uv(t):we(t)&&arguments.length>1?ep(t,e,n):st(t)}function ep(t,e,n){const s=t[e];return Te(s)?s:new lv(t,e,n)}class hv{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return Hd(this,!0),!0}get value(){const e=this.dep.track();return $d(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dv(t,e,n=!1){let s,r;return ee(t)?s=t:(s=t.get,r=t.set),new hv(s,r,n)}const Ai={},eo=new WeakMap;let Gn;function pv(t,e=!1,n=Gn){if(n){let s=eo.get(n);s||eo.set(n,s=[]),s.push(t)}}function gv(t,e,n=ge){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=v=>r?v:yt(v)||r===!1||r===0?zt(v,1):zt(v);let u,f,h,d,p=!1,g=!1;if(Te(t)?(f=()=>t.value,p=yt(t)):Zt(t)?(f=()=>l(t),p=!0):Q(t)?(g=!0,p=t.some(v=>Zt(v)||yt(v)),f=()=>t.map(v=>{if(Te(v))return v.value;if(Zt(v))return l(v);if(ee(v))return c?c(v,2):v()})):ee(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){Un();try{h()}finally{Hn()}}const v=Gn;Gn=u;try{return c?c(t,3,[d]):t(d)}finally{Gn=v}}:f=Ft,e&&r){const v=f,C=r===!0?1/0:r;f=()=>zt(v(),C)}const w=ul(),b=()=>{u.stop(),w&&w.active&&al(w.effects,u)};if(i&&e){const v=e;e=(...C)=>{v(...C),b()}}let E=g?new Array(t.length).fill(Ai):Ai;const _=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const C=u.run();if(r||p||(g?C.some((T,S)=>Rn(T,E[S])):Rn(C,E))){h&&h();const T=Gn;Gn=u;try{const S=[C,E===Ai?void 0:g&&E[0]===Ai?[]:E,d];c?c(e,3,S):e(...S),E=C}finally{Gn=T}}}else u.run()};return a&&a(_),u=new Fd(f),u.scheduler=o?()=>o(_,!1):_,d=v=>pv(v,!1,u),h=u.onStop=()=>{const v=eo.get(u);if(v){if(c)c(v,4);else for(const C of v)C();eo.delete(u)}},e?s?_(!0):E=u.run():o?o(_.bind(null,!0),!0):u.run(),b.pause=u.pause.bind(u),b.resume=u.resume.bind(u),b.stop=b,b}function zt(t,e=1/0,n){if(e<=0||!we(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Te(t))zt(t.value,e,n);else if(Q(t))for(let s=0;s<t.length;s++)zt(t[s],e,n);else if(Rd(t)||Ns(t))t.forEach(s=>{zt(s,e,n)});else if(Pd(t)){for(const s in t)zt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&zt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(t,e,n,s){try{return s?t(...s):t()}catch(r){Js(r,e,n)}}function At(t,e,n,s){if(ee(t)){const r=ci(t,e,n,s);return r&&kd(r)&&r.catch(i=>{Js(i,e,n)}),r}if(Q(t)){const r=[];for(let i=0;i<t.length;i++)r.push(At(t[i],e,n,s));return r}}function Js(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ge;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){Un(),ci(i,null,10,[t,c,l]),Hn();return}}_v(t,n,r,s,o)}function _v(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Qe=[];let Mt=-1;const Ms=[];let mn=null,Is=0;const tp=Promise.resolve();let to=null;function ps(t){const e=to||tp;return t?e.then(this?t.bind(this):t):e}function mv(t){let e=Mt+1,n=Qe.length;for(;e<n;){const s=e+n>>>1,r=Qe[s],i=jr(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function vl(t){if(!(t.flags&1)){const e=jr(t),n=Qe[Qe.length-1];!n||!(t.flags&2)&&e>=jr(n)?Qe.push(t):Qe.splice(mv(e),0,t),t.flags|=1,np()}}function np(){to||(to=tp.then(sp))}function ac(t){Q(t)?Ms.push(...t):mn&&t.id===-1?mn.splice(Is+1,0,t):t.flags&1||(Ms.push(t),t.flags|=1),np()}function Fu(t,e,n=Mt+1){for(;n<Qe.length;n++){const s=Qe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Qe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function no(t){if(Ms.length){const e=[...new Set(Ms)].sort((n,s)=>jr(n)-jr(s));if(Ms.length=0,mn){mn.push(...e);return}for(mn=e,Is=0;Is<mn.length;Is++){const n=mn[Is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mn=null,Is=0}}const jr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function sp(t){try{for(Mt=0;Mt<Qe.length;Mt++){const e=Qe[Mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Mt<Qe.length;Mt++){const e=Qe[Mt];e&&(e.flags&=-2)}Mt=-1,Qe.length=0,no(),to=null,(Qe.length||Ms.length)&&sp()}}let Me=null,rp=null;function so(t){const e=Me;return Me=t,rp=t&&t.type.__scopeId||null,e}function wl(t,e=Me,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Yu(-1);const i=so(e);let o;try{o=t(...r)}finally{so(i),s._d&&Yu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function NO(t,e){if(Me===null)return t;const n=Qo(Me),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=ge]=e[r];i&&(ee(i)&&(i={mounted:i,updated:i}),i.deep&&zt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Lt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Un(),At(c,n,8,[t.el,a,t,e]),Hn())}}const yv=Symbol("_vte"),ip=t=>t.__isTeleport,yn=Symbol("_leaveCb"),Pi=Symbol("_enterCb");function vv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bl(()=>{t.isMounted=!0}),ui(()=>{t.isUnmounting=!0}),t}const pt=[Function,Array],op={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pt,onEnter:pt,onAfterEnter:pt,onEnterCancelled:pt,onBeforeLeave:pt,onLeave:pt,onAfterLeave:pt,onLeaveCancelled:pt,onBeforeAppear:pt,onAppear:pt,onAfterAppear:pt,onAppearCancelled:pt},ap=t=>{const e=t.subTree;return e.component?ap(e.component):e},wv={name:"BaseTransition",props:op,setup(t,{slots:e}){const n=Yo(),s=vv();return()=>{const r=e.default&&up(e.default(),!0);if(!r||!r.length)return;const i=cp(r),o=ae(t),{mode:a}=o;if(s.isLeaving)return ba(i);const c=Uu(i);if(!c)return ba(i);let l=cc(c,o,s,n,f=>l=f);c.type!==Pe&&Bs(c,l);let u=n.subTree&&Uu(n.subTree);if(u&&u.type!==Pe&&!bt(c,u)&&ap(n).type!==Pe){let f=cc(u,o,s,n);if(Bs(u,f),a==="out-in"&&c.type!==Pe)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},ba(i);a==="in-out"&&c.type!==Pe?f.delayLeave=(h,d,p)=>{const g=lp(s,u);g[String(u.key)]=u,h[yn]=()=>{d(),h[yn]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{p(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function cp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Pe){e=n;break}}return e}const Ev=wv;function lp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function cc(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:w,onAppear:b,onAfterAppear:E,onAppearCancelled:_}=e,v=String(t.key),C=lp(n,t),T=(R,P)=>{R&&At(R,s,9,P)},S=(R,P)=>{const V=P[1];T(R,P),Q(R)?R.every(O=>O.length<=1)&&V():R.length<=1&&V()},M={mode:o,persisted:a,beforeEnter(R){let P=c;if(!n.isMounted)if(i)P=w||c;else return;R[yn]&&R[yn](!0);const V=C[v];V&&bt(t,V)&&V.el[yn]&&V.el[yn](),T(P,[R])},enter(R){let P=l,V=u,O=f;if(!n.isMounted)if(i)P=b||l,V=E||u,O=_||f;else return;let q=!1;const re=R[Pi]=ce=>{q||(q=!0,ce?T(O,[R]):T(V,[R]),M.delayedLeave&&M.delayedLeave(),R[Pi]=void 0)};P?S(P,[R,re]):re()},leave(R,P){const V=String(t.key);if(R[Pi]&&R[Pi](!0),n.isUnmounting)return P();T(h,[R]);let O=!1;const q=R[yn]=re=>{O||(O=!0,P(),re?T(g,[R]):T(p,[R]),R[yn]=void 0,C[V]===t&&delete C[V])};C[V]=t,d?S(d,[R,q]):q()},clone(R){const P=cc(R,e,n,s,r);return r&&r(P),P}};return M}function ba(t){if(li(t))return t=nn(t),t.children=null,t}function Uu(t){if(!li(t))return ip(t.type)&&t.children?cp(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ee(n.default))return n.default()}}function Bs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Bs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function up(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ve?(o.patchFlag&128&&r++,s=s.concat(up(o.children,e,a))):(e||o.type!==Pe)&&s.push(a!=null?nn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function cn(t,e){return ee(t)?He({name:t.name},e,{setup:t}):t}function El(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Br(t,e,n,s,r=!1){if(Q(t)){t.forEach((p,g)=>Br(p,e&&(Q(e)?e[g]:e),n,s,r));return}if(kn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Br(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Qo(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,f=a.setupState,h=ae(f),d=f===ge?()=>!1:p=>he(h,p);if(l!=null&&l!==c&&(Ie(l)?(u[l]=null,d(l)&&(f[l]=null)):Te(l)&&(l.value=null)),ee(c))ci(c,a,12,[o,u]);else{const p=Ie(c),g=Te(c);if(p||g){const w=()=>{if(t.f){const b=p?d(c)?f[c]:u[c]:c.value;r?Q(b)&&al(b,i):Q(b)?b.includes(i)||b.push(i):p?(u[c]=[i],d(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,d(c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,je(w,n)):w()}}}let Hu=!1;const Es=()=>{Hu||(console.error("Hydration completed but contains mismatches."),Hu=!0)},bv=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Cv=t=>t.namespaceURI.includes("MathML"),Ni=t=>{if(t.nodeType===1){if(bv(t))return"svg";if(Cv(t))return"mathml"}},Rs=t=>t.nodeType===8;function Iv(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(_,v)=>{if(!v.hasChildNodes()){n(null,_,v),no(),v._vnode=_;return}f(v.firstChild,_,null,null,null),no(),v._vnode=_},f=(_,v,C,T,S,M=!1)=>{M=M||!!v.dynamicChildren;const R=Rs(_)&&_.data==="[",P=()=>g(_,v,C,T,S,R),{type:V,ref:O,shapeFlag:q,patchFlag:re}=v;let ce=_.nodeType;v.el=_,re===-2&&(M=!1,v.dynamicChildren=null);let $=null;switch(V){case ns:ce!==3?v.children===""?(c(v.el=r(""),o(_),_),$=_):$=P():(_.data!==v.children&&(Es(),_.data=v.children),$=i(_));break;case Pe:E(_)?($=i(_),b(v.el=_.content.firstChild,_,C)):ce!==8||R?$=P():$=i(_);break;case Hi:if(R&&(_=i(_),ce=_.nodeType),ce===1||ce===3){$=_;const z=!v.children.length;for(let K=0;K<v.staticCount;K++)z&&(v.children+=$.nodeType===1?$.outerHTML:$.data),K===v.staticCount-1&&(v.anchor=$),$=i($);return R?i($):$}else P();break;case Ve:R?$=p(_,v,C,T,S,M):$=P();break;default:if(q&1)(ce!==1||v.type.toLowerCase()!==_.tagName.toLowerCase())&&!E(_)?$=P():$=h(_,v,C,T,S,M);else if(q&6){v.slotScopeIds=S;const z=o(_);if(R?$=w(_):Rs(_)&&_.data==="teleport start"?$=w(_,_.data,"teleport end"):$=i(_),e(v,z,null,C,T,Ni(z),M),kn(v)&&!v.type.__asyncResolved){let K;R?(K=Se(Ve),K.anchor=$?$.previousSibling:z.lastChild):K=_.nodeType===3?Kp(""):Se("div"),K.el=_,v.component.subTree=K}}else q&64?ce!==8?$=P():$=v.type.hydrate(_,v,C,T,S,M,t,d):q&128&&($=v.type.hydrate(_,v,C,T,Ni(o(_)),S,M,t,f))}return O!=null&&Br(O,null,T,v),$},h=(_,v,C,T,S,M)=>{M=M||!!v.dynamicChildren;const{type:R,props:P,patchFlag:V,shapeFlag:O,dirs:q,transition:re}=v,ce=R==="input"||R==="option";if(ce||V!==-1){q&&Lt(v,null,C,"created");let $=!1;if(E(_)){$=Mp(null,re)&&C&&C.vnode.props&&C.vnode.props.appear;const K=_.content.firstChild;$&&re.beforeEnter(K),b(K,_,C),v.el=_=K}if(O&16&&!(P&&(P.innerHTML||P.textContent))){let K=d(_.firstChild,v,_,C,T,S,M);for(;K;){Oi(_,1)||Es();const Ae=K;K=K.nextSibling,a(Ae)}}else if(O&8){let K=v.children;K[0]===`
`&&(_.tagName==="PRE"||_.tagName==="TEXTAREA")&&(K=K.slice(1)),_.textContent!==K&&(Oi(_,0)||Es(),_.textContent=v.children)}if(P){if(ce||!M||V&48){const K=_.tagName.includes("-");for(const Ae in P)(ce&&(Ae.endsWith("value")||Ae==="indeterminate")||oi(Ae)&&!Os(Ae)||Ae[0]==="."||K)&&s(_,Ae,null,P[Ae],void 0,C)}else if(P.onClick)s(_,"onClick",null,P.onClick,void 0,C);else if(V&4&&Zt(P.style))for(const K in P.style)P.style[K]}let z;(z=P&&P.onVnodeBeforeMount)&&et(z,C,v),q&&Lt(v,null,C,"beforeMount"),((z=P&&P.onVnodeMounted)||q||$)&&jp(()=>{z&&et(z,C,v),$&&re.enter(_),q&&Lt(v,null,C,"mounted")},T)}return _.nextSibling},d=(_,v,C,T,S,M,R)=>{R=R||!!v.dynamicChildren;const P=v.children,V=P.length;for(let O=0;O<V;O++){const q=R?P[O]:P[O]=lt(P[O]),re=q.type===ns;_?(re&&!R&&O+1<V&&lt(P[O+1]).type===ns&&(c(r(_.data.slice(q.children.length)),C,i(_)),_.data=q.children),_=f(_,q,T,S,M,R)):re&&!q.children?c(q.el=r(""),C):(Oi(C,1)||Es(),n(null,q,C,null,T,S,Ni(C),M))}return _},p=(_,v,C,T,S,M)=>{const{slotScopeIds:R}=v;R&&(S=S?S.concat(R):R);const P=o(_),V=d(i(_),v,P,C,T,S,M);return V&&Rs(V)&&V.data==="]"?i(v.anchor=V):(Es(),c(v.anchor=l("]"),P,V),V)},g=(_,v,C,T,S,M)=>{if(Oi(_.parentElement,1)||Es(),v.el=null,M){const V=w(_);for(;;){const O=i(_);if(O&&O!==V)a(O);else break}}const R=i(_),P=o(_);return a(_),n(null,v,P,R,C,T,Ni(P),S),C&&(C.vnode.el=v.el,zo(C,v.el)),R},w=(_,v="[",C="]")=>{let T=0;for(;_;)if(_=i(_),_&&Rs(_)&&(_.data===v&&T++,_.data===C)){if(T===0)return i(_);T--}return _},b=(_,v,C)=>{const T=v.parentNode;T&&T.replaceChild(_,v);let S=C;for(;S;)S.vnode.el===v&&(S.vnode.el=S.subTree.el=_),S=S.parent},E=_=>_.nodeType===1&&_.tagName==="TEMPLATE";return[u,f]}const ju="data-allow-mismatch",Tv={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Oi(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(ju);)t=t.parentElement;const n=t&&t.getAttribute(ju);if(n==null)return!1;if(n==="")return!0;{const s=n.split(",");return e===0&&s.includes("children")?!0:n.split(",").includes(Tv[e])}}Bo().requestIdleCallback;Bo().cancelIdleCallback;function Sv(t,e){if(Rs(t)&&t.data==="["){let n=1,s=t.nextSibling;for(;s;){if(s.nodeType===1){if(e(s)===!1)break}else if(Rs(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else e(t)}const kn=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function $r(t){ee(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let l=null,u,f=0;const h=()=>(f++,l=null,d()),d=()=>{let p;return l||(p=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),c)return new Promise((w,b)=>{c(g,()=>w(h()),()=>b(g),f+1)});throw g}).then(g=>p!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),u=g,g)))};return cn({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(p,g,w){const b=i?()=>{const E=i(w,_=>Sv(p,_));E&&(g.bum||(g.bum=[])).push(E)}:w;u?b():d().then(()=>!g.isUnmounted&&b())},get __asyncResolved(){return u},setup(){const p=Ne;if(El(p),u)return()=>Ca(u,p);const g=_=>{l=null,Js(_,p,13,!s)};if(a&&p.suspense||Ws)return d().then(_=>()=>Ca(_,p)).catch(_=>(g(_),()=>s?Se(s,{error:_}):null));const w=st(!1),b=st(),E=st(!!r);return r&&setTimeout(()=>{E.value=!1},r),o!=null&&setTimeout(()=>{if(!w.value&&!b.value){const _=new Error(`Async component timed out after ${o}ms.`);g(_),b.value=_}},o),d().then(()=>{w.value=!0,p.parent&&li(p.parent.vnode)&&p.parent.update()}).catch(_=>{g(_),b.value=_}),()=>{if(w.value&&u)return Ca(u,p);if(b.value&&s)return Se(s,{error:b.value});if(n&&!E.value)return Se(n)}}})}function Ca(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=Se(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const li=t=>t.type.__isKeepAlive,Rv={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Yo(),s=n.ctx;if(!s.renderer)return()=>{const E=e.default&&e.default();return E&&E.length===1?E[0]:E};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=s,h=f("div");s.activate=(E,_,v,C,T)=>{const S=E.component;l(E,_,v,0,a),c(S.vnode,E,_,v,S,a,C,E.slotScopeIds,T),je(()=>{S.isDeactivated=!1,S.a&&xs(S.a);const M=E.props&&E.props.onVnodeMounted;M&&et(M,S.parent,E)},a)},s.deactivate=E=>{const _=E.component;io(_.m),io(_.a),l(E,h,null,1,a),je(()=>{_.da&&xs(_.da);const v=E.props&&E.props.onVnodeUnmounted;v&&et(v,_.parent,E),_.isDeactivated=!0},a)};function d(E){Ia(E),u(E,n,a,!0)}function p(E){r.forEach((_,v)=>{const C=_c(_.type);C&&!E(C)&&g(v)})}function g(E){const _=r.get(E);_&&(!o||!bt(_,o))?d(_):o&&Ia(o),r.delete(E),i.delete(E)}ts(()=>[t.include,t.exclude],([E,_])=>{E&&p(v=>yr(E,v)),_&&p(v=>!yr(_,v))},{flush:"post",deep:!0});let w=null;const b=()=>{w!=null&&(oo(n.subTree.type)?je(()=>{r.set(w,xi(n.subTree))},n.subTree.suspense):r.set(w,xi(n.subTree)))};return bl(b),pp(b),ui(()=>{r.forEach(E=>{const{subTree:_,suspense:v}=n,C=xi(_);if(E.type===C.type&&E.key===C.key){Ia(C);const T=C.component.da;T&&je(T,v);return}d(E)})}),()=>{if(w=null,!e.default)return o=null;const E=e.default(),_=E[0];if(E.length>1)return o=null,E;if(!rs(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let v=xi(_);if(v.type===Pe)return o=null,v;const C=v.type,T=_c(kn(v)?v.type.__asyncResolved||{}:C),{include:S,exclude:M,max:R}=t;if(S&&(!T||!yr(S,T))||M&&T&&yr(M,T))return v.shapeFlag&=-257,o=v,_;const P=v.key==null?C:v.key,V=r.get(P);return v.el&&(v=nn(v),_.shapeFlag&128&&(_.ssContent=v)),w=P,V?(v.el=V.el,v.component=V.component,v.transition&&Bs(v,v.transition),v.shapeFlag|=512,i.delete(P),i.add(P)):(i.add(P),R&&i.size>parseInt(R,10)&&g(i.values().next().value)),v.shapeFlag|=256,o=v,oo(_.type)?_:v}}},kv=Rv;function yr(t,e){return Q(t)?t.some(n=>yr(n,e)):Ie(t)?t.split(",").includes(e):Ry(t)?(t.lastIndex=0,t.test(e)):!1}function fp(t,e){dp(t,"a",e)}function hp(t,e){dp(t,"da",e)}function dp(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(qo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)li(r.parent.vnode)&&Av(s,e,n,r),r=r.parent}}function Av(t,e,n,s){const r=qo(e,t,s,!0);gp(()=>{al(s[e],r)},n)}function Ia(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function xi(t){return t.shapeFlag&128?t.ssContent:t}function qo(t,e,n=Ne,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Un();const a=fi(n),c=At(e,n,t,o);return a(),Hn(),c});return s?r.unshift(i):r.push(i),i}}const ln=t=>(e,n=Ne)=>{(!Ws||t==="sp")&&qo(t,(...s)=>e(...s),n)},Pv=ln("bm"),bl=ln("m"),Nv=ln("bu"),pp=ln("u"),ui=ln("bum"),gp=ln("um"),Ov=ln("sp"),xv=ln("rtg"),Mv=ln("rtc");function _p(t,e=Ne){qo("ec",t,e)}const mp="components";function OO(t,e){return vp(mp,t,!0,e)||t}const yp=Symbol.for("v-ndc");function Lv(t){return Ie(t)?vp(mp,t,!1)||t:t||yp}function vp(t,e,n=!0,s=!1){const r=Me||Ne;if(r){const i=r.type;{const a=_c(i,!1);if(a&&(a===e||a===vt(e)||a===jo(vt(e))))return i}const o=Bu(r[t]||i[t],e)||Bu(r.appContext[t],e);return!o&&s?i:o}}function Bu(t,e){return t&&(t[e]||t[vt(e)]||t[jo(vt(e))])}function xO(t,e,n,s){let r;const i=n,o=Q(t);if(o||Ie(t)){const a=o&&Zt(t);let c=!1;a&&(c=!yt(t),t=Vo(t)),r=new Array(t.length);for(let l=0,u=t.length;l<u;l++)r[l]=e(c?We(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(we(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}function MO(t,e,n={},s,r){if(Me.ce||Me.parent&&kn(Me.parent)&&Me.parent.ce)return _t(),Dt(Ve,null,[Se("slot",n,s)],64);let i=t[e];i&&i._c&&(i._d=!1),_t();const o=i&&wp(i(n)),a=n.key||o&&o.key,c=Dt(Ve,{key:(a&&!an(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function wp(t){return t.some(e=>rs(e)?!(e.type===Pe||e.type===Ve&&!wp(e.children)):!0)?t:null}const lc=t=>t?zp(t)?Qo(t):lc(t.parent):null,Ir=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lc(t.parent),$root:t=>lc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bp(t),$forceUpdate:t=>t.f||(t.f=()=>{vl(t.update)}),$nextTick:t=>t.n||(t.n=ps.bind(t.proxy)),$watch:t=>nw.bind(t)}),Ta=(t,e)=>t!==ge&&!t.__isScriptSetup&&he(t,e),Dv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ta(s,e))return o[e]=1,s[e];if(r!==ge&&he(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&he(l,e))return o[e]=3,i[e];if(n!==ge&&he(n,e))return o[e]=4,n[e];uc&&(o[e]=0)}}const u=Ir[e];let f,h;if(u)return e==="$attrs"&&$e(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ge&&he(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,he(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ta(r,e)?(r[e]=n,!0):s!==ge&&he(s,e)?(s[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ge&&he(t,o)||Ta(e,o)||(a=i[0])&&he(a,o)||he(s,o)||he(Ir,o)||he(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $u(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uc=!0;function Fv(t){const e=bp(t),n=t.proxy,s=t.ctx;uc=!1,e.beforeCreate&&Wu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:p,activated:g,deactivated:w,beforeDestroy:b,beforeUnmount:E,destroyed:_,unmounted:v,render:C,renderTracked:T,renderTriggered:S,errorCaptured:M,serverPrefetch:R,expose:P,inheritAttrs:V,components:O,directives:q,filters:re}=e;if(l&&Uv(l,s,null),o)for(const z in o){const K=o[z];ee(K)&&(s[z]=K.bind(n))}if(r){const z=r.call(n,n);we(z)&&(t.data=$t(z))}if(uc=!0,i)for(const z in i){const K=i[z],Ae=ee(K)?K.bind(n,n):ee(K.get)?K.get.bind(n,n):Ft,hn=!ee(K)&&ee(K.set)?K.set.bind(n):Ft,Ot=ut({get:Ae,set:hn});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:Ze=>Ot.value=Ze})}if(a)for(const z in a)Ep(a[z],s,n,z);if(c){const z=ee(c)?c.call(n):c;Reflect.ownKeys(z).forEach(K=>{es(K,z[K])})}u&&Wu(u,t,"c");function $(z,K){Q(K)?K.forEach(Ae=>z(Ae.bind(n))):K&&z(K.bind(n))}if($(Pv,f),$(bl,h),$(Nv,d),$(pp,p),$(fp,g),$(hp,w),$(_p,M),$(Mv,T),$(xv,S),$(ui,E),$(gp,v),$(Ov,R),Q(P))if(P.length){const z=t.exposed||(t.exposed={});P.forEach(K=>{Object.defineProperty(z,K,{get:()=>n[K],set:Ae=>n[K]=Ae})})}else t.exposed||(t.exposed={});C&&t.render===Ft&&(t.render=C),V!=null&&(t.inheritAttrs=V),O&&(t.components=O),q&&(t.directives=q),R&&El(t)}function Uv(t,e,n=Ft){Q(t)&&(t=fc(t));for(const s in t){const r=t[s];let i;we(r)?"default"in r?i=Ke(r.from||s,r.default,!0):i=Ke(r.from||s):i=Ke(r),Te(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Wu(t,e,n){At(Q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ep(t,e,n,s){let r=s.includes(".")?Fp(n,s):()=>n[s];if(Ie(t)){const i=e[t];ee(i)&&ts(r,i)}else if(ee(t))ts(r,t.bind(n));else if(we(t))if(Q(t))t.forEach(i=>Ep(i,e,n,s));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&ts(r,i,t)}}function bp(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>ro(c,l,o,!0)),ro(c,e,o)),we(e)&&i.set(e,c),c}function ro(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ro(t,i,n,!0),r&&r.forEach(o=>ro(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Hv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Hv={data:Vu,props:qu,emits:qu,methods:vr,computed:vr,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:vr,directives:vr,watch:Bv,provide:Vu,inject:jv};function Vu(t,e){return e?t?function(){return He(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function jv(t,e){return vr(fc(t),fc(e))}function fc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function vr(t,e){return t?He(Object.create(null),t,e):e}function qu(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:He(Object.create(null),$u(t),$u(e??{})):e}function Bv(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function Cp(){return{app:null,config:{isNativeTag:Ty,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $v=0;function Wv(t,e){return function(s,r=null){ee(s)||(s=He({},s)),r!=null&&!we(r)&&(r=null);const i=Cp(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:$v++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Tw,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&ee(u.install)?(o.add(u),u.install(l,...f)):ee(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!c){const d=l._ceVNode||Se(s,r);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):t(d,u,h),c=!0,l._container=u,u.__vue_app__=l,Qo(d.component)}},onUnmount(u){a.push(u)},unmount(){c&&(At(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=Zn;Zn=l;try{return u()}finally{Zn=f}}};return l}}let Zn=null;function es(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function Ke(t,e,n=!1){const s=Ne||Me;if(s||Zn){const r=Zn?Zn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ee(e)?e.call(s&&s.proxy):e}}function Ko(){return!!(Ne||Me||Zn)}const Ip={},Tp=()=>Object.create(Ip),Sp=t=>Object.getPrototypeOf(t)===Ip;function Vv(t,e,n,s=!1){const r={},i=Tp();t.propsDefaults=Object.create(null),Rp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Yt(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function qv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Go(t.emitsOptions,h))continue;const d=e[h];if(c)if(he(i,h))d!==i[h]&&(i[h]=d,l=!0);else{const p=vt(h);r[p]=hc(c,a,p,d,t,!1)}else d!==i[h]&&(i[h]=d,l=!0)}}}else{Rp(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!he(e,f)&&((u=ds(f))===f||!he(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=hc(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!he(e,f))&&(delete i[f],l=!0)}l&&Gt(t.attrs,"set","")}function Rp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Os(c))continue;const l=e[c];let u;r&&he(r,u=vt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Go(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ae(n),l=a||ge;for(let u=0;u<i.length;u++){const f=i[u];n[f]=hc(r,c,f,l[f],t,!he(l,f))}}return o}function hc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ee(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=fi(r);s=l[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ds(n))&&(s=!0))}return s}const Kv=new WeakMap;function kp(t,e,n=!1){const s=n?Kv:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=f=>{c=!0;const[h,d]=kp(f,e,!0);He(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&s.set(t,Ps),Ps;if(Q(i))for(let u=0;u<i.length;u++){const f=vt(i[u]);Ku(f)&&(o[f]=ge)}else if(i)for(const u in i){const f=vt(u);if(Ku(f)){const h=i[u],d=o[f]=Q(h)||ee(h)?{type:h}:He({},h),p=d.type;let g=!1,w=!0;if(Q(p))for(let b=0;b<p.length;++b){const E=p[b],_=ee(E)&&E.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(w=!1)}else g=ee(p)&&p.name==="Boolean";d[0]=g,d[1]=w,(g||he(d,"default"))&&a.push(f)}}const l=[o,a];return we(t)&&s.set(t,l),l}function Ku(t){return t[0]!=="$"&&!Os(t)}const Ap=t=>t[0]==="_"||t==="$stable",Cl=t=>Q(t)?t.map(lt):[lt(t)],Gv=(t,e,n)=>{if(e._n)return e;const s=wl((...r)=>Cl(e(...r)),n);return s._c=!1,s},Pp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ap(r))continue;const i=t[r];if(ee(i))e[r]=Gv(r,i,s);else if(i!=null){const o=Cl(i);e[r]=()=>o}}},Np=(t,e)=>{const n=Cl(e);t.slots.default=()=>n},Op=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},zv=(t,e,n)=>{const s=t.slots=Tp();if(t.vnode.shapeFlag&32){const r=e._;r?(Op(s,e,n),n&&Nd(s,"_",r,!0)):Pp(e,s)}else e&&Np(t,e)},Yv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ge;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Op(r,e,n):(i=!e.$stable,Pp(e,r)),o=e}else e&&(Np(t,e),o={default:1});if(i)for(const a in r)!Ap(a)&&o[a]==null&&delete r[a]},je=jp;function Qv(t){return xp(t)}function Jv(t){return xp(t,Iv)}function xp(t,e){const n=Bo();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Ft,insertStaticContent:p}=t,g=(m,y,I,N=null,k=null,x=null,H=void 0,U=null,F=!!y.dynamicChildren)=>{if(m===y)return;m&&!bt(m,y)&&(N=A(m),Ze(m,k,x,!0),m=null),y.patchFlag===-2&&(F=!1,y.dynamicChildren=null);const{type:L,ref:J,shapeFlag:B}=y;switch(L){case ns:w(m,y,I,N);break;case Pe:b(m,y,I,N);break;case Hi:m==null&&E(y,I,N,H);break;case Ve:O(m,y,I,N,k,x,H,U,F);break;default:B&1?C(m,y,I,N,k,x,H,U,F):B&6?q(m,y,I,N,k,x,H,U,F):(B&64||B&128)&&L.process(m,y,I,N,k,x,H,U,F,G)}J!=null&&k&&Br(J,m&&m.ref,x,y||m,!y)},w=(m,y,I,N)=>{if(m==null)s(y.el=a(y.children),I,N);else{const k=y.el=m.el;y.children!==m.children&&l(k,y.children)}},b=(m,y,I,N)=>{m==null?s(y.el=c(y.children||""),I,N):y.el=m.el},E=(m,y,I,N)=>{[m.el,m.anchor]=p(m.children,y,I,N,m.el,m.anchor)},_=({el:m,anchor:y},I,N)=>{let k;for(;m&&m!==y;)k=h(m),s(m,I,N),m=k;s(y,I,N)},v=({el:m,anchor:y})=>{let I;for(;m&&m!==y;)I=h(m),r(m),m=I;r(y)},C=(m,y,I,N,k,x,H,U,F)=>{y.type==="svg"?H="svg":y.type==="math"&&(H="mathml"),m==null?T(y,I,N,k,x,H,U,F):R(m,y,k,x,H,U,F)},T=(m,y,I,N,k,x,H,U)=>{let F,L;const{props:J,shapeFlag:B,transition:Y,dirs:te}=m;if(F=m.el=o(m.type,x,J&&J.is,J),B&8?u(F,m.children):B&16&&M(m.children,F,null,N,k,Sa(m,x),H,U),te&&Lt(m,null,N,"created"),S(F,m,m.scopeId,H,N),J){for(const me in J)me!=="value"&&!Os(me)&&i(F,me,null,J[me],x,N);"value"in J&&i(F,"value",null,J.value,x),(L=J.onVnodeBeforeMount)&&et(L,N,m)}te&&Lt(m,null,N,"beforeMount");const oe=Mp(k,Y);oe&&Y.beforeEnter(F),s(F,y,I),((L=J&&J.onVnodeMounted)||oe||te)&&je(()=>{L&&et(L,N,m),oe&&Y.enter(F),te&&Lt(m,null,N,"mounted")},k)},S=(m,y,I,N,k)=>{if(I&&d(m,I),N)for(let x=0;x<N.length;x++)d(m,N[x]);if(k){let x=k.subTree;if(y===x||oo(x.type)&&(x.ssContent===y||x.ssFallback===y)){const H=k.vnode;S(m,H,H.scopeId,H.slotScopeIds,k.parent)}}},M=(m,y,I,N,k,x,H,U,F=0)=>{for(let L=F;L<m.length;L++){const J=m[L]=U?vn(m[L]):lt(m[L]);g(null,J,y,I,N,k,x,H,U)}},R=(m,y,I,N,k,x,H)=>{const U=y.el=m.el;let{patchFlag:F,dynamicChildren:L,dirs:J}=y;F|=m.patchFlag&16;const B=m.props||ge,Y=y.props||ge;let te;if(I&&Wn(I,!1),(te=Y.onVnodeBeforeUpdate)&&et(te,I,y,m),J&&Lt(y,m,I,"beforeUpdate"),I&&Wn(I,!0),(B.innerHTML&&Y.innerHTML==null||B.textContent&&Y.textContent==null)&&u(U,""),L?P(m.dynamicChildren,L,U,I,N,Sa(y,k),x):H||K(m,y,U,null,I,N,Sa(y,k),x,!1),F>0){if(F&16)V(U,B,Y,I,k);else if(F&2&&B.class!==Y.class&&i(U,"class",null,Y.class,k),F&4&&i(U,"style",B.style,Y.style,k),F&8){const oe=y.dynamicProps;for(let me=0;me<oe.length;me++){const de=oe[me],ot=B[de],Be=Y[de];(Be!==ot||de==="value")&&i(U,de,ot,Be,k,I)}}F&1&&m.children!==y.children&&u(U,y.children)}else!H&&L==null&&V(U,B,Y,I,k);((te=Y.onVnodeUpdated)||J)&&je(()=>{te&&et(te,I,y,m),J&&Lt(y,m,I,"updated")},N)},P=(m,y,I,N,k,x,H)=>{for(let U=0;U<y.length;U++){const F=m[U],L=y[U],J=F.el&&(F.type===Ve||!bt(F,L)||F.shapeFlag&70)?f(F.el):I;g(F,L,J,null,N,k,x,H,!0)}},V=(m,y,I,N,k)=>{if(y!==I){if(y!==ge)for(const x in y)!Os(x)&&!(x in I)&&i(m,x,y[x],null,k,N);for(const x in I){if(Os(x))continue;const H=I[x],U=y[x];H!==U&&x!=="value"&&i(m,x,U,H,k,N)}"value"in I&&i(m,"value",y.value,I.value,k)}},O=(m,y,I,N,k,x,H,U,F)=>{const L=y.el=m?m.el:a(""),J=y.anchor=m?m.anchor:a("");let{patchFlag:B,dynamicChildren:Y,slotScopeIds:te}=y;te&&(U=U?U.concat(te):te),m==null?(s(L,I,N),s(J,I,N),M(y.children||[],I,J,k,x,H,U,F)):B>0&&B&64&&Y&&m.dynamicChildren?(P(m.dynamicChildren,Y,I,k,x,H,U),(y.key!=null||k&&y===k.subTree)&&Lp(m,y,!0)):K(m,y,I,J,k,x,H,U,F)},q=(m,y,I,N,k,x,H,U,F)=>{y.slotScopeIds=U,m==null?y.shapeFlag&512?k.ctx.activate(y,I,N,H,F):re(y,I,N,k,x,H,F):ce(m,y,F)},re=(m,y,I,N,k,x,H)=>{const U=m.component=vw(m,N,k);if(li(m)&&(U.ctx.renderer=G),ww(U,!1,H),U.asyncDep){if(k&&k.registerDep(U,$,H),!m.el){const F=U.subTree=Se(Pe);b(null,F,y,I)}}else $(U,m,y,I,k,x,H)},ce=(m,y,I)=>{const N=y.component=m.component;if(cw(m,y,I))if(N.asyncDep&&!N.asyncResolved){z(N,y,I);return}else N.next=y,N.update();else y.el=m.el,N.vnode=y},$=(m,y,I,N,k,x,H)=>{const U=()=>{if(m.isMounted){let{next:B,bu:Y,u:te,parent:oe,vnode:me}=m;{const at=Dp(m);if(at){B&&(B.el=me.el,z(m,B,H)),at.asyncDep.then(()=>{m.isUnmounted||U()});return}}let de=B,ot;Wn(m,!1),B?(B.el=me.el,z(m,B,H)):B=me,Y&&xs(Y),(ot=B.props&&B.props.onVnodeBeforeUpdate)&&et(ot,oe,B,me),Wn(m,!0);const Be=Ra(m),wt=m.subTree;m.subTree=Be,g(wt,Be,f(wt.el),A(wt),m,k,x),B.el=Be.el,de===null&&zo(m,Be.el),te&&je(te,k),(ot=B.props&&B.props.onVnodeUpdated)&&je(()=>et(ot,oe,B,me),k)}else{let B;const{el:Y,props:te}=y,{bm:oe,m:me,parent:de,root:ot,type:Be}=m,wt=kn(y);if(Wn(m,!1),oe&&xs(oe),!wt&&(B=te&&te.onVnodeBeforeMount)&&et(B,de,y),Wn(m,!0),Y&&Ce){const at=()=>{m.subTree=Ra(m),Ce(Y,m.subTree,m,k,null)};wt&&Be.__asyncHydrate?Be.__asyncHydrate(Y,m,at):at()}else{ot.ce&&ot.ce._injectChildStyle(Be);const at=m.subTree=Ra(m);g(null,at,I,N,m,k,x),y.el=at.el}if(me&&je(me,k),!wt&&(B=te&&te.onVnodeMounted)){const at=y;je(()=>et(B,de,at),k)}(y.shapeFlag&256||de&&kn(de.vnode)&&de.vnode.shapeFlag&256)&&m.a&&je(m.a,k),m.isMounted=!0,y=I=N=null}};m.scope.on();const F=m.effect=new Fd(U);m.scope.off();const L=m.update=F.run.bind(F),J=m.job=F.runIfDirty.bind(F);J.i=m,J.id=m.uid,F.scheduler=()=>vl(J),Wn(m,!0),L()},z=(m,y,I)=>{y.component=m;const N=m.vnode.props;m.vnode=y,m.next=null,qv(m,y.props,N,I),Yv(m,y.children,I),Un(),Fu(m),Hn()},K=(m,y,I,N,k,x,H,U,F=!1)=>{const L=m&&m.children,J=m?m.shapeFlag:0,B=y.children,{patchFlag:Y,shapeFlag:te}=y;if(Y>0){if(Y&128){hn(L,B,I,N,k,x,H,U,F);return}else if(Y&256){Ae(L,B,I,N,k,x,H,U,F);return}}te&8?(J&16&&dt(L,k,x),B!==L&&u(I,B)):J&16?te&16?hn(L,B,I,N,k,x,H,U,F):dt(L,k,x,!0):(J&8&&u(I,""),te&16&&M(B,I,N,k,x,H,U,F))},Ae=(m,y,I,N,k,x,H,U,F)=>{m=m||Ps,y=y||Ps;const L=m.length,J=y.length,B=Math.min(L,J);let Y;for(Y=0;Y<B;Y++){const te=y[Y]=F?vn(y[Y]):lt(y[Y]);g(m[Y],te,I,null,k,x,H,U,F)}L>J?dt(m,k,x,!0,!1,B):M(y,I,N,k,x,H,U,F,B)},hn=(m,y,I,N,k,x,H,U,F)=>{let L=0;const J=y.length;let B=m.length-1,Y=J-1;for(;L<=B&&L<=Y;){const te=m[L],oe=y[L]=F?vn(y[L]):lt(y[L]);if(bt(te,oe))g(te,oe,I,null,k,x,H,U,F);else break;L++}for(;L<=B&&L<=Y;){const te=m[B],oe=y[Y]=F?vn(y[Y]):lt(y[Y]);if(bt(te,oe))g(te,oe,I,null,k,x,H,U,F);else break;B--,Y--}if(L>B){if(L<=Y){const te=Y+1,oe=te<J?y[te].el:N;for(;L<=Y;)g(null,y[L]=F?vn(y[L]):lt(y[L]),I,oe,k,x,H,U,F),L++}}else if(L>Y)for(;L<=B;)Ze(m[L],k,x,!0),L++;else{const te=L,oe=L,me=new Map;for(L=oe;L<=Y;L++){const ct=y[L]=F?vn(y[L]):lt(y[L]);ct.key!=null&&me.set(ct.key,L)}let de,ot=0;const Be=Y-oe+1;let wt=!1,at=0;const ar=new Array(Be);for(L=0;L<Be;L++)ar[L]=0;for(L=te;L<=B;L++){const ct=m[L];if(ot>=Be){Ze(ct,k,x,!0);continue}let xt;if(ct.key!=null)xt=me.get(ct.key);else for(de=oe;de<=Y;de++)if(ar[de-oe]===0&&bt(ct,y[de])){xt=de;break}xt===void 0?Ze(ct,k,x,!0):(ar[xt-oe]=L+1,xt>=at?at=xt:wt=!0,g(ct,y[xt],I,null,k,x,H,U,F),ot++)}const Ou=wt?Xv(ar):Ps;for(de=Ou.length-1,L=Be-1;L>=0;L--){const ct=oe+L,xt=y[ct],xu=ct+1<J?y[ct+1].el:N;ar[L]===0?g(null,xt,I,xu,k,x,H,U,F):wt&&(de<0||L!==Ou[de]?Ot(xt,I,xu,2):de--)}}},Ot=(m,y,I,N,k=null)=>{const{el:x,type:H,transition:U,children:F,shapeFlag:L}=m;if(L&6){Ot(m.component.subTree,y,I,N);return}if(L&128){m.suspense.move(y,I,N);return}if(L&64){H.move(m,y,I,G);return}if(H===Ve){s(x,y,I);for(let B=0;B<F.length;B++)Ot(F[B],y,I,N);s(m.anchor,y,I);return}if(H===Hi){_(m,y,I);return}if(N!==2&&L&1&&U)if(N===0)U.beforeEnter(x),s(x,y,I),je(()=>U.enter(x),k);else{const{leave:B,delayLeave:Y,afterLeave:te}=U,oe=()=>s(x,y,I),me=()=>{B(x,()=>{oe(),te&&te()})};Y?Y(x,oe,me):me()}else s(x,y,I)},Ze=(m,y,I,N=!1,k=!1)=>{const{type:x,props:H,ref:U,children:F,dynamicChildren:L,shapeFlag:J,patchFlag:B,dirs:Y,cacheIndex:te}=m;if(B===-2&&(k=!1),U!=null&&Br(U,null,I,m,!0),te!=null&&(y.renderCache[te]=void 0),J&256){y.ctx.deactivate(m);return}const oe=J&1&&Y,me=!kn(m);let de;if(me&&(de=H&&H.onVnodeBeforeUnmount)&&et(de,y,m),J&6)Si(m.component,I,N);else{if(J&128){m.suspense.unmount(I,N);return}oe&&Lt(m,null,y,"beforeUnmount"),J&64?m.type.remove(m,y,I,G,N):L&&!L.hasOnce&&(x!==Ve||B>0&&B&64)?dt(L,y,I,!1,!0):(x===Ve&&B&384||!k&&J&16)&&dt(F,y,I),N&&ys(m)}(me&&(de=H&&H.onVnodeUnmounted)||oe)&&je(()=>{de&&et(de,y,m),oe&&Lt(m,null,y,"unmounted")},I)},ys=m=>{const{type:y,el:I,anchor:N,transition:k}=m;if(y===Ve){vs(I,N);return}if(y===Hi){v(m);return}const x=()=>{r(I),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(m.shapeFlag&1&&k&&!k.persisted){const{leave:H,delayLeave:U}=k,F=()=>H(I,x);U?U(m.el,x,F):F()}else x()},vs=(m,y)=>{let I;for(;m!==y;)I=h(m),r(m),m=I;r(y)},Si=(m,y,I)=>{const{bum:N,scope:k,job:x,subTree:H,um:U,m:F,a:L}=m;io(F),io(L),N&&xs(N),k.stop(),x&&(x.flags|=8,Ze(H,m,y,I)),U&&je(U,y),je(()=>{m.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},dt=(m,y,I,N=!1,k=!1,x=0)=>{for(let H=x;H<m.length;H++)Ze(m[H],y,I,N,k)},A=m=>{if(m.shapeFlag&6)return A(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const y=h(m.anchor||m.el),I=y&&y[yv];return I?h(I):y};let W=!1;const j=(m,y,I)=>{m==null?y._vnode&&Ze(y._vnode,null,null,!0):g(y._vnode||null,m,y,null,null,null,I),y._vnode=m,W||(W=!0,Fu(),no(),W=!1)},G={p:g,um:Ze,m:Ot,r:ys,mt:re,mc:M,pc:K,pbc:P,n:A,o:t};let ue,Ce;return e&&([ue,Ce]=e(G)),{render:j,hydrate:ue,createApp:Wv(j,ue)}}function Sa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Mp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lp(t,e,n=!1){const s=t.children,r=e.children;if(Q(s)&&Q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=vn(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Lp(o,a)),a.type===ns&&(a.el=o.el)}}function Xv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Dp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dp(e)}function io(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Zv=Symbol.for("v-scx"),ew=()=>Ke(Zv);function tw(t,e){return Il(t,null,e)}function ts(t,e,n){return Il(t,e,n)}function Il(t,e,n=ge){const{immediate:s,deep:r,flush:i,once:o}=n,a=He({},n),c=e&&s||!e&&i!=="post";let l;if(Ws){if(i==="sync"){const d=ew();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!c){const d=()=>{};return d.stop=Ft,d.resume=Ft,d.pause=Ft,d}}const u=Ne;a.call=(d,p,g)=>At(d,u,p,g);let f=!1;i==="post"?a.scheduler=d=>{je(d,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(d,p)=>{p?d():vl(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=gv(t,e,a);return Ws&&(l?l.push(h):c&&h()),h}function nw(t,e,n){const s=this.proxy,r=Ie(t)?t.includes(".")?Fp(s,t):()=>s[t]:t.bind(s,s);let i;ee(e)?i=e:(i=e.handler,n=e);const o=fi(this),a=Il(r,i.bind(s),n);return o(),a}function Fp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const sw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vt(e)}Modifiers`]||t[`${ds(e)}Modifiers`];function rw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let r=n;const i=e.startsWith("update:"),o=i&&sw(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>Ie(u)?u.trim():u)),o.number&&(r=n.map(nc)));let a,c=s[a=ma(e)]||s[a=ma(vt(e))];!c&&i&&(c=s[a=ma(ds(e))]),c&&At(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(l,t,6,r)}}function Up(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=Up(l,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&s.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):He(o,i),we(t)&&s.set(t,o),o)}function Go(t,e){return!t||!oi(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,ds(e))||he(t,e))}function Ra(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:d,ctx:p,inheritAttrs:g}=t,w=so(t);let b,E;try{if(n.shapeFlag&4){const v=r||s,C=v;b=lt(l.call(C,v,u,f,d,h,p)),E=a}else{const v=e;b=lt(v.length>1?v(f,{attrs:a,slots:o,emit:c}):v(f,null)),E=e.props?a:ow(a)}}catch(v){Tr.length=0,Js(v,t,1),b=Se(Pe)}let _=b;if(E&&g!==!1){const v=Object.keys(E),{shapeFlag:C}=_;v.length&&C&7&&(i&&v.some(ol)&&(E=aw(E,i)),_=nn(_,E,!1,!0))}return n.dirs&&(_=nn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&Bs(_,n.transition),b=_,so(w),b}function iw(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(rs(r)){if(r.type!==Pe||r.children==="v-if"){if(n)return;n=r}}else return}return n}const ow=t=>{let e;for(const n in t)(n==="class"||n==="style"||oi(n))&&((e||(e={}))[n]=t[n]);return e},aw=(t,e)=>{const n={};for(const s in t)(!ol(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function cw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Gu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==s[h]&&!Go(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gu(s,o,l):!0:!!o;return!1}function Gu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Go(n,i))return!0}return!1}function zo({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const oo=t=>t.__isSuspense;let dc=0;const lw={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){if(t==null)uw(e,n,s,r,i,o,a,c,l);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}fw(t,e,n,s,r,o,a,c,l)}},hydrate:hw,normalize:dw},Tl=lw;function Wr(t,e){const n=t.props&&t.props[e];ee(n)&&n()}function uw(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),h=t.suspense=Hp(t,r,s,e,f,n,i,o,a,c);l(null,h.pendingBranch=t.ssContent,f,null,s,h,i,o),h.deps>0?(Wr(t,"onPending"),Wr(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),Ls(h,t.ssFallback)):h.resolve(!1,!0)}function fw(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:g,isInFallback:w,isHydrating:b}=f;if(g)f.pendingBranch=h,bt(h,g)?(c(g,h,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():w&&(b||(c(p,d,n,s,r,null,i,o,a),Ls(f,d)))):(f.pendingId=dc++,b?(f.isHydrating=!1,f.activeBranch=g):l(g,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),w?(c(null,h,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():(c(p,d,n,s,r,null,i,o,a),Ls(f,d))):p&&bt(h,p)?(c(p,h,n,s,r,f,i,o,a),f.resolve(!0)):(c(null,h,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0&&f.resolve()));else if(p&&bt(h,p))c(p,h,n,s,r,f,i,o,a),Ls(f,h);else if(Wr(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=dc++,c(null,h,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:E,pendingId:_}=f;E>0?setTimeout(()=>{f.pendingId===_&&f.fallback(d)},E):E===0&&f.fallback(d)}}function Hp(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:f,m:h,um:d,n:p,o:{parentNode:g,remove:w}}=l;let b;const E=pw(t);E&&e&&e.pendingBranch&&(b=e.pendingId,e.deps++);const _=t.props?Od(t.props.timeout):void 0,v=i,C={vnode:t,parent:e,parentComponent:n,namespace:o,container:s,hiddenContainer:r,deps:0,pendingId:dc++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1,S=!1){const{vnode:M,activeBranch:R,pendingBranch:P,pendingId:V,effects:O,parentComponent:q,container:re}=C;let ce=!1;C.isHydrating?C.isHydrating=!1:T||(ce=R&&P.transition&&P.transition.mode==="out-in",ce&&(R.transition.afterLeave=()=>{V===C.pendingId&&(h(P,re,i===v?p(R):i,0),ac(O))}),R&&(g(R.el)===re&&(i=p(R)),d(R,q,C,!0)),ce||h(P,re,i,0)),Ls(C,P),C.pendingBranch=null,C.isInFallback=!1;let $=C.parent,z=!1;for(;$;){if($.pendingBranch){$.effects.push(...O),z=!0;break}$=$.parent}!z&&!ce&&ac(O),C.effects=[],E&&e&&e.pendingBranch&&b===e.pendingId&&(e.deps--,e.deps===0&&!S&&e.resolve()),Wr(M,"onResolve")},fallback(T){if(!C.pendingBranch)return;const{vnode:S,activeBranch:M,parentComponent:R,container:P,namespace:V}=C;Wr(S,"onFallback");const O=p(M),q=()=>{C.isInFallback&&(f(null,T,P,O,R,null,V,a,c),Ls(C,T))},re=T.transition&&T.transition.mode==="out-in";re&&(M.transition.afterLeave=q),C.isInFallback=!0,d(M,R,null,!0),re||q()},move(T,S,M){C.activeBranch&&h(C.activeBranch,T,S,M),C.container=T},next(){return C.activeBranch&&p(C.activeBranch)},registerDep(T,S,M){const R=!!C.pendingBranch;R&&C.deps++;const P=T.vnode.el;T.asyncDep.catch(V=>{Js(V,T,0)}).then(V=>{if(T.isUnmounted||C.isUnmounted||C.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:O}=T;gc(T,V),P&&(O.el=P);const q=!P&&T.subTree.el;S(T,O,g(P||T.subTree.el),P?null:p(T.subTree),C,o,M),q&&w(q),zo(T,O.el),R&&--C.deps===0&&C.resolve()})},unmount(T,S){C.isUnmounted=!0,C.activeBranch&&d(C.activeBranch,n,T,S),C.pendingBranch&&d(C.pendingBranch,n,T,S)}};return C}function hw(t,e,n,s,r,i,o,a,c){const l=e.suspense=Hp(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function dw(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=zu(s?n.default:n),t.ssFallback=s?zu(n.fallback):Se(Pe)}function zu(t){let e;if(ee(t)){const n=$s&&t._c;n&&(t._d=!1,_t()),t=t(),n&&(t._d=!0,e=tt,Bp())}return Q(t)&&(t=iw(t)),t=lt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function jp(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):ac(t)}function Ls(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,zo(s,r))}function pw(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ve=Symbol.for("v-fgt"),ns=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),Hi=Symbol.for("v-stc"),Tr=[];let tt=null;function _t(t=!1){Tr.push(tt=t?null:[])}function Bp(){Tr.pop(),tt=Tr[Tr.length-1]||null}let $s=1;function Yu(t,e=!1){$s+=t,t<0&&tt&&e&&(tt.hasOnce=!0)}function $p(t){return t.dynamicChildren=$s>0?tt||Ps:null,Bp(),$s>0&&tt&&tt.push(t),t}function gw(t,e,n,s,r,i){return $p(Vp(t,e,n,s,r,i,!0))}function Dt(t,e,n,s,r){return $p(Se(t,e,n,s,r,!0))}function rs(t){return t?t.__v_isVNode===!0:!1}function bt(t,e){return t.type===e.type&&t.key===e.key}const Wp=({key:t})=>t??null,ji=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ie(t)||Te(t)||ee(t)?{i:Me,r:t,k:e,f:!!n}:t:null);function Vp(t,e=null,n=null,s=0,r=null,i=t===Ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wp(e),ref:e&&ji(e),scopeId:rp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Me};return a?(Sl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ie(n)?8:16),$s>0&&!o&&tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&tt.push(c),c}const Se=_w;function _w(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===yp)&&(t=Pe),rs(t)){const a=nn(t,e,!0);return n&&Sl(a,n),$s>0&&!i&&tt&&(a.shapeFlag&6?tt[tt.indexOf(t)]=a:tt.push(a)),a.patchFlag=-2,a}if(Iw(t)&&(t=t.__vccOpts),e){e=qp(e);let{class:a,style:c}=e;a&&!Ie(a)&&(e.class=Wo(a)),we(c)&&(ml(c)&&!Q(c)&&(c=He({},c)),e.style=$o(c))}const o=Ie(t)?1:oo(t)?128:ip(t)?64:we(t)?4:ee(t)?2:0;return Vp(t,e,n,s,r,o,i,!0)}function qp(t){return t?ml(t)||Sp(t)?He({},t):t:null}function nn(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Gp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Wp(l),ref:e&&e.ref?n&&i?Q(i)?i.concat(ji(e)):[i,ji(e)]:ji(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Bs(u,c.clone(u)),u}function Kp(t=" ",e=0){return Se(ns,null,t,e)}function LO(t="",e=!1){return e?(_t(),Dt(Pe,null,t)):Se(Pe,null,t)}function lt(t){return t==null||typeof t=="boolean"?Se(Pe):Q(t)?Se(Ve,null,t.slice()):rs(t)?vn(t):Se(ns,null,String(t))}function vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:nn(t)}function Sl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Sl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Sp(e)?e._ctx=Me:r===3&&Me&&(Me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:Me},n=32):(e=String(e),s&64?(n=16,e=[Kp(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Wo([e.class,s.class]));else if(r==="style")e.style=$o([e.style,s.style]);else if(oi(r)){const i=e[r],o=s[r];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function et(t,e,n,s=null){At(t,e,7,[n,s])}const mw=Cp();let yw=0;function vw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||mw,i={uid:yw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Dd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kp(s,r),emitsOptions:Up(s,r),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rw.bind(null,i),t.ce&&t.ce(i),i}let Ne=null;const Yo=()=>Ne||Me;let ao,pc;{const t=Bo(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ao=e("__VUE_INSTANCE_SETTERS__",n=>Ne=n),pc=e("__VUE_SSR_SETTERS__",n=>Ws=n)}const fi=t=>{const e=Ne;return ao(t),t.scope.on(),()=>{t.scope.off(),ao(e)}},Qu=()=>{Ne&&Ne.scope.off(),ao(null)};function zp(t){return t.vnode.shapeFlag&4}let Ws=!1;function ww(t,e=!1,n=!1){e&&pc(e);const{props:s,children:r}=t.vnode,i=zp(t);Vv(t,s,i,e),zv(t,r,n);const o=i?Ew(t,e):void 0;return e&&pc(!1),o}function Ew(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dv);const{setup:s}=n;if(s){Un();const r=t.setupContext=s.length>1?Cw(t):null,i=fi(t),o=ci(s,t,0,[t.props,r]),a=kd(o);if(Hn(),i(),(a||t.sp)&&!kn(t)&&El(t),a){if(o.then(Qu,Qu),e)return o.then(c=>{gc(t,c)}).catch(c=>{Js(c,t,0)});t.asyncDep=o}else gc(t,o)}else Yp(t)}function gc(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Zd(e)),Yp(t)}function Yp(t,e,n){const s=t.type;t.render||(t.render=s.render||Ft);{const r=fi(t);Un();try{Fv(t)}finally{Hn(),r()}}}const bw={get(t,e){return $e(t,"get",""),t[e]}};function Cw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,bw),slots:t.slots,emit:t.emit,expose:e}}function Qo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zd(yl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ir)return Ir[n](t)},has(e,n){return n in e||n in Ir}})):t.proxy}function _c(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function Iw(t){return ee(t)&&"__vccOpts"in t}const ut=(t,e)=>dv(t,e,Ws);function Ue(t,e,n){const s=arguments.length;return s===2?we(e)&&!Q(e)?rs(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&rs(n)&&(n=[n]),Se(t,e,n))}const Tw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mc;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{mc=Ju.createPolicy("vue",{createHTML:t=>t})}catch{}const Qp=mc?t=>mc.createHTML(t):t=>t,Sw="http://www.w3.org/2000/svg",Rw="http://www.w3.org/1998/Math/MathML",Kt=typeof document<"u"?document:null,Xu=Kt&&Kt.createElement("template"),kw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Kt.createElementNS(Sw,t):e==="mathml"?Kt.createElementNS(Rw,t):n?Kt.createElement(t,{is:n}):Kt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Xu.innerHTML=Qp(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Xu.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pn="transition",lr="animation",Vr=Symbol("_vtc"),Jp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Aw=He({},op,Jp),Pw=t=>(t.displayName="Transition",t.props=Aw,t),Nw=Pw((t,{slots:e})=>Ue(Ev,Ow(t),e)),Vn=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},Zu=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function Ow(t){const e={};for(const O in t)O in Jp||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=xw(r),g=p&&p[0],w=p&&p[1],{onBeforeEnter:b,onEnter:E,onEnterCancelled:_,onLeave:v,onLeaveCancelled:C,onBeforeAppear:T=b,onAppear:S=E,onAppearCancelled:M=_}=e,R=(O,q,re,ce)=>{O._enterCancelled=ce,qn(O,q?u:a),qn(O,q?l:o),re&&re()},P=(O,q)=>{O._isLeaving=!1,qn(O,f),qn(O,d),qn(O,h),q&&q()},V=O=>(q,re)=>{const ce=O?S:E,$=()=>R(q,O,re);Vn(ce,[q,$]),ef(()=>{qn(q,O?c:i),Vt(q,O?u:a),Zu(ce)||tf(q,s,g,$)})};return He(e,{onBeforeEnter(O){Vn(b,[O]),Vt(O,i),Vt(O,o)},onBeforeAppear(O){Vn(T,[O]),Vt(O,c),Vt(O,l)},onEnter:V(!1),onAppear:V(!0),onLeave(O,q){O._isLeaving=!0;const re=()=>P(O,q);Vt(O,f),O._enterCancelled?(Vt(O,h),rf()):(rf(),Vt(O,h)),ef(()=>{O._isLeaving&&(qn(O,f),Vt(O,d),Zu(v)||tf(O,s,w,re))}),Vn(v,[O,re])},onEnterCancelled(O){R(O,!1,void 0,!0),Vn(_,[O])},onAppearCancelled(O){R(O,!0,void 0,!0),Vn(M,[O])},onLeaveCancelled(O){P(O),Vn(C,[O])}})}function xw(t){if(t==null)return null;if(we(t))return[ka(t.enter),ka(t.leave)];{const e=ka(t);return[e,e]}}function ka(t){return Od(t)}function Vt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Vr]||(t[Vr]=new Set)).add(e)}function qn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Vr];n&&(n.delete(e),n.size||(t[Vr]=void 0))}function ef(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Mw=0;function tf(t,e,n,s){const r=t._endId=++Mw,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Lw(t,e);if(!o)return s();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),i()},h=d=>{d.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function Lw(t,e){const n=window.getComputedStyle(t),s=p=>(n[p]||"").split(", "),r=s(`${pn}Delay`),i=s(`${pn}Duration`),o=nf(r,i),a=s(`${lr}Delay`),c=s(`${lr}Duration`),l=nf(a,c);let u=null,f=0,h=0;e===pn?o>0&&(u=pn,f=o,h=i.length):e===lr?l>0&&(u=lr,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?pn:lr:null,h=u?u===pn?i.length:c.length:0);const d=u===pn&&/\b(transform|all)(,|$)/.test(s(`${pn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function nf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>sf(n)+sf(t[s])))}function sf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function rf(){return document.body.offsetHeight}function Dw(t,e,n){const s=t[Vr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const of=Symbol("_vod"),Fw=Symbol("_vsh"),Uw=Symbol(""),Hw=/(^|;)\s*display\s*:/;function jw(t,e,n){const s=t.style,r=Ie(n);let i=!1;if(n&&!r){if(e)if(Ie(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Bi(s,a,"")}else for(const o in e)n[o]==null&&Bi(s,o,"");for(const o in n)o==="display"&&(i=!0),Bi(s,o,n[o])}else if(r){if(e!==n){const o=s[Uw];o&&(n+=";"+o),s.cssText=n,i=Hw.test(n)}}else e&&t.removeAttribute("style");of in t&&(t[of]=i?s.display:"",t[Fw]&&(s.display="none"))}const af=/\s*!important$/;function Bi(t,e,n){if(Q(n))n.forEach(s=>Bi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Bw(t,e);af.test(n)?t.setProperty(ds(s),n.replace(af,""),"important"):t[s]=n}}const cf=["Webkit","Moz","ms"],Aa={};function Bw(t,e){const n=Aa[e];if(n)return n;let s=vt(e);if(s!=="filter"&&s in t)return Aa[e]=s;s=jo(s);for(let r=0;r<cf.length;r++){const i=cf[r]+s;if(i in t)return Aa[e]=i}return e}const lf="http://www.w3.org/1999/xlink";function uf(t,e,n,s,r,i=Fy(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(lf,e.slice(6,e.length)):t.setAttributeNS(lf,e,n):n==null||i&&!xd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":an(n)?String(n):n)}function ff(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=xd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Ts(t,e,n,s){t.addEventListener(e,n,s)}function $w(t,e,n,s){t.removeEventListener(e,n,s)}const hf=Symbol("_vei");function Ww(t,e,n,s,r=null){const i=t[hf]||(t[hf]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Vw(e);if(s){const l=i[e]=Gw(s,r);Ts(t,a,l,c)}else o&&($w(t,a,o,c),i[e]=void 0)}}const df=/(?:Once|Passive|Capture)$/;function Vw(t){let e;if(df.test(t)){e={};let s;for(;s=t.match(df);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ds(t.slice(2)),e]}let Pa=0;const qw=Promise.resolve(),Kw=()=>Pa||(qw.then(()=>Pa=0),Pa=Date.now());function Gw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;At(zw(s,n.value),e,5,[s])};return n.value=t,n.attached=Kw(),n}function zw(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const pf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Yw=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Dw(t,s,o):e==="style"?jw(t,n,s):oi(e)?ol(e)||Ww(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qw(t,e,s,o))?(ff(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&uf(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ie(s))?ff(t,vt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),uf(t,e,s,o))};function Qw(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&pf(e)&&ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return pf(e)&&Ie(n)?!1:e in t}const gf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>xs(e,n):e};function Jw(t){t.target.composing=!0}function _f(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Na=Symbol("_assign"),DO={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Na]=gf(r);const i=s||r.props&&r.props.type==="number";Ts(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=nc(a)),t[Na](a)}),n&&Ts(t,"change",()=>{t.value=t.value.trim()}),e||(Ts(t,"compositionstart",Jw),Ts(t,"compositionend",_f),Ts(t,"change",_f))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Na]=gf(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?nc(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},Xw=["ctrl","shift","alt","meta"],Zw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Xw.some(n=>t[`${n}Key`]&&!e.includes(n))},FO=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=Zw[e[o]];if(a&&a(r,e))return}return t(r,...i)})},Xp=He({patchProp:Yw},kw);let Sr,mf=!1;function eE(){return Sr||(Sr=Qv(Xp))}function tE(){return Sr=mf?Sr:Jv(Xp),mf=!0,Sr}const nE=(...t)=>{const e=eE().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=eg(s);if(!r)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Zp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},sE=(...t)=>{const e=tE().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=eg(s);if(r)return n(r,!0,Zp(r))},e};function Zp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function eg(t){return Ie(t)?document.querySelector(t):t}const rE=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,iE=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,oE=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function aE(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){cE(t);return}return e}function cE(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function co(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const s=n.toLowerCase();if(s==="true")return!0;if(s==="false")return!1;if(s==="undefined")return;if(s==="null")return null;if(s==="nan")return Number.NaN;if(s==="infinity")return Number.POSITIVE_INFINITY;if(s==="-infinity")return Number.NEGATIVE_INFINITY}if(!oE.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(rE.test(t)||iE.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,aE)}return JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}const lE=/#/g,uE=/&/g,fE=/\//g,hE=/=/g,Rl=/\+/g,dE=/%5e/gi,pE=/%60/gi,gE=/%7c/gi,_E=/%20/gi;function mE(t){return encodeURI(""+t).replace(gE,"|")}function yc(t){return mE(typeof t=="string"?t:JSON.stringify(t)).replace(Rl,"%2B").replace(_E,"+").replace(lE,"%23").replace(uE,"%26").replace(pE,"`").replace(dE,"^").replace(fE,"%2F")}function Oa(t){return yc(t).replace(hE,"%3D")}function lo(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function yE(t){return lo(t.replace(Rl," "))}function vE(t){return lo(t.replace(Rl," "))}function tg(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const r=yE(s[1]);if(r==="__proto__"||r==="constructor")continue;const i=vE(s[2]||"");e[r]===void 0?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]}return e}function wE(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Oa(t)}=${yc(n)}`).join("&"):`${Oa(t)}=${yc(e)}`:Oa(t)}function EE(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>wE(e,t[e])).filter(Boolean).join("&")}const bE=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,CE=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,IE=/^([/\\]\s*){2,}[^/\\]/,TE=/^[\s\0]*(blob|data|javascript|vbscript):$/i,SE=/\/$|\/\?|\/#/,RE=/^\.?\//;function gs(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?bE.test(t):CE.test(t)||(e.acceptRelative?IE.test(t):!1)}function kE(t){return!!t&&TE.test(t)}function vc(t="",e){return e?SE.test(t):t.endsWith("/")}function kl(t="",e){if(!e)return(vc(t)?t.slice(0,-1):t)||"/";if(!vc(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");r>=0&&(n=t.slice(0,r),s=t.slice(r));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+s}function wc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(vc(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");if(r>=0&&(n=t.slice(0,r),s=t.slice(r),!n))return s;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+s}function AE(t=""){return t.startsWith("/")}function yf(t=""){return AE(t)?t:"/"+t}function PE(t,e){if(sg(e)||gs(t))return t;const n=kl(e);return t.startsWith(n)?t:Al(n,t)}function vf(t,e){if(sg(e))return t;const n=kl(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function ng(t,e){const n=og(t),s={...tg(n.search),...e};return n.search=EE(s),xE(n)}function sg(t){return!t||t==="/"}function NE(t){return t&&t!=="/"}function Al(t,...e){let n=t||"";for(const s of e.filter(r=>NE(r)))if(n){const r=s.replace(RE,"");n=wc(n)+r}else n=s;return n}function rg(...t){var o,a,c,l;const e=/\/(?!\/)/,n=t.filter(Boolean),s=[];let r=0;for(const u of n)if(!(!u||u==="/")){for(const[f,h]of u.split(e).entries())if(!(!h||h===".")){if(h===".."){if(s.length===1&&gs(s[0]))continue;s.pop(),r--;continue}if(f===1&&((o=s[s.length-1])!=null&&o.endsWith(":/"))){s[s.length-1]+="/"+h;continue}s.push(h),r++}}let i=s.join("/");return r>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*r)+i,(l=n[n.length-1])!=null&&l.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function OE(t,e,n={}){return n.trailingSlash||(t=wc(t),e=wc(e)),n.leadingSlash||(t=yf(t),e=yf(e)),n.encoding||(t=lo(t),e=lo(e)),t===e}const ig=Symbol.for("ufo:protocolRelative");function og(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,h=""]=n;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!gs(t,{acceptRelative:!0}))return wf(t);const[,s="",r,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];s==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:l,hash:u}=wf(a);return{protocol:s.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:c,search:l,hash:u,[ig]:!s}}function wf(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function xE(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",s=t.hash||"",r=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[ig]?(t.protocol||"")+"//":"")+r+i+e+n+s}class ME extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function LE(t){var c,l,u,f,h;const e=((c=t.error)==null?void 0:c.message)||((l=t.error)==null?void 0:l.toString())||"",n=((u=t.request)==null?void 0:u.method)||((f=t.options)==null?void 0:f.method)||"GET",s=((h=t.request)==null?void 0:h.url)||String(t.request)||"/",r=`[${n}] ${JSON.stringify(s)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${i}${e?` ${e}`:""}`,a=new ME(o,t.error?{cause:t.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(a,d,{get(){return t[d]}});for(const[d,p]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,d,{get(){return t.response&&t.response[p]}});return a}const DE=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Ef(t="GET"){return DE.has(t.toUpperCase())}function FE(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const UE=new Set(["image/svg","application/xml","application/xhtml","application/html"]),HE=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function jE(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return HE.test(e)?"json":UE.has(e)||e.startsWith("text/")?"text":"blob"}function BE(t,e,n,s){const r=$E((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,s);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:r}}function $E(t,e,n){if(!e)return new n(t);const s=new n(e);if(t)for(const[r,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))s.set(r,i);return s}async function Mi(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const WE=new Set([408,409,425,429,500,502,503,504]),VE=new Set([101,204,205,304]);function ag(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:s=globalThis.AbortController}=t;async function r(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Ef(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):WE.has(f))){const h=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),i(a.request,{...a.options,retry:u-1})}}const l=LE(a);throw Error.captureStackTrace&&Error.captureStackTrace(l,i),l}const i=async function(c,l={}){const u={request:c,options:BE(c,l,t.defaults,n),response:void 0,error:void 0};u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&await Mi(u,u.options.onRequest),typeof u.request=="string"&&(u.options.baseURL&&(u.request=PE(u.request,u.options.baseURL)),u.options.query&&(u.request=ng(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&Ef(u.options.method)&&(FE(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let f;if(!u.options.signal&&u.options.timeout){const d=new s;f=setTimeout(()=>{const p=new Error("[TimeoutError]: The operation was aborted due to timeout");p.name="TimeoutError",p.code=23,d.abort(p)},u.options.timeout),u.options.signal=d.signal}try{u.response=await e(u.request,u.options)}catch(d){return u.error=d,u.options.onRequestError&&await Mi(u,u.options.onRequestError),await r(u)}finally{f&&clearTimeout(f)}if((u.response.body||u.response._bodyInit)&&!VE.has(u.response.status)&&u.options.method!=="HEAD"){const d=(u.options.parseResponse?"json":u.options.responseType)||jE(u.response.headers.get("content-type")||"");switch(d){case"json":{const p=await u.response.text(),g=u.options.parseResponse||co;u.response._data=g(p);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[d]()}}return u.options.onResponse&&await Mi(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await Mi(u,u.options.onResponseError),await r(u)):u.response},o=async function(c,l){return(await i(c,l))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>ag({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const uo=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),qE=uo.fetch?(...t)=>uo.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),KE=uo.Headers,GE=uo.AbortController,zE=ag({fetch:qE,Headers:KE,AbortController:GE}),YE=zE,QE=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},fo=QE().app,JE=()=>fo.baseURL,XE=()=>fo.buildAssetsDir,Pl=(...t)=>rg(cg(),XE(),...t),cg=(...t)=>{const e=fo.cdnURL||fo.baseURL;return t.length?rg(e,...t):e};globalThis.__buildAssetsURL=Pl,globalThis.__publicAssetsURL=cg;globalThis.$fetch||(globalThis.$fetch=YE.create({baseURL:JE()}));function Ec(t,e={},n){for(const s in t){const r=t[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?Ec(r,e,i):typeof r=="function"&&(e[i]=r)}return e}const ZE={run:t=>t()},eb=()=>ZE,lg=typeof console.createTask<"u"?console.createTask:eb;function tb(t,e){const n=e.shift(),s=lg(n);return t.reduce((r,i)=>r.then(()=>s.run(()=>i(...e))),Promise.resolve())}function nb(t,e){const n=e.shift(),s=lg(n);return Promise.all(t.map(r=>s.run(()=>r(...e))))}function xa(t,e){for(const n of[...t])n(e)}class sb{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let o=i.message;o||(o=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Ec(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=Ec(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(tb,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(nb,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&xa(this._before,r);const i=e(n in this._hooks?[...this._hooks[n]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&xa(this._after,r)}):(this._after&&r&&xa(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function ug(){return new sb}function rb(t={}){let e,n=!1;const s=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||s(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{s(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},l=()=>e===o?c:void 0;bc.add(l);try{const u=r?r.run(o,a):a();return n||(e=void 0),await u}finally{bc.delete(l)}}}}function ib(t={}){const e={};return{get(n,s={}){return e[n]||(e[n]=rb({...t,...s})),e[n]}}}const ho=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},bf="__unctx__",ob=ho[bf]||(ho[bf]=ib()),ab=(t,e={})=>ob.get(t,e),Cf="__unctx_async_handlers__",bc=ho[Cf]||(ho[Cf]=new Set);function ss(t){const e=[];for(const r of bc){const i=r();i&&e.push(i)}const n=()=>{for(const r of e)r()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(r=>{throw n(),r})),[s,n]}const cb=!1,Cc=!1,lb=!1,If={id:"__nuxt-loader"},UO={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},ub=void 0,fb="#__nuxt",fg="nuxt-app",Tf=36e5,hb="vite:preloadError";function hg(t=fg){return ab(t,{asyncContext:!1})}const db="__nuxt_plugin";function pb(t){var r;let e=0;const n={_id:t.id||fg||"nuxt-app",_scope:ll(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.16.2"},get vue(){return n.vueApp.version}},payload:Yt({...((r=t.ssrContext)==null?void 0:r.payload)||{},data:Yt({}),state:$t({}),once:new Set,_errors:Yt({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!ul()?n._scope.run(()=>Sf(n,i)):Sf(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Yt({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=ug(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Li(n,a,o),Li(n.vueApp.config.globalProperties,a,o)},Li(n.vueApp,"$nuxt",n),Li(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(hb,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=ke);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const s=n.payload.config;return n.provide("config",s),n}function gb(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function _b(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}}async function mb(t,e){const n=[],s=[],r=[],i=[];let o=0;async function a(c){var u;const l=((u=c.dependsOn)==null?void 0:u.filter(f=>e.some(h=>h._name===f)&&!n.includes(f)))??[];if(l.length>0)s.push([new Set(l),c]);else{const f=_b(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(s.map(async([h,d])=>{h.has(c._name)&&(h.delete(c._name),h.size===0&&(o++,await a(d)))})))});c.parallel?r.push(f.catch(h=>i.push(h))):await f}}for(const c of e)gb(t,c);for(const c of e)await a(c);if(await Promise.all(r),o)for(let c=0;c<o;c++)await Promise.all(r);if(i.length)throw i[0]}function ht(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[db]:!0,_name:e})}const yb=ht;function Sf(t,e,n){const s=()=>e();return hg(t._id).set(t),t.vueApp.runWithContext(s)}function vb(t){var n;let e;return Ko()&&(e=(n=Yo())==null?void 0:n.appContext.app.$nuxt),e||(e=hg(t).tryUse()),e||null}function ke(t){const e=vb(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Xs(t){return ke().$config}function Li(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function wb(t,e){return{ctx:{table:t},matchAll:n=>pg(n,t)}}function dg(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([s,r])=>[s,dg(r)])):new Map(Object.entries(t[n]));return e}function Eb(t){return wb(dg(t))}function pg(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const s=[];for(const[i,o]of Rf(e.wildcard))(t===i||t.startsWith(i+"/"))&&s.push(o);for(const[i,o]of Rf(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");s.push(...pg(a,o))}const r=e.static.get(t);return r&&s.push(r),s.filter(Boolean)}function Rf(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Ma(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Ic(t,e,n=".",s){if(!Ma(e))return Ic(t,{},n,s);const r=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=[...o,...r[i]]:Ma(o)&&Ma(r[i])?r[i]=Ic(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function gg(t){return(...e)=>e.reduce((n,s)=>Ic(n,s,"",t),{})}const _g=gg(),bb=gg((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function Cb(t,e){try{return e in t}catch{return!1}}class Tc extends Error{constructor(n,s={}){super(n,s);dn(this,"statusCode",500);dn(this,"fatal",!1);dn(this,"unhandled",!1);dn(this,"statusMessage");dn(this,"data");dn(this,"cause");s.cause&&!this.cause&&(this.cause=s.cause)}toJSON(){const n={message:this.message,statusCode:Sc(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=mg(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}dn(Tc,"__h3_error__",!0);function $i(t){if(typeof t=="string")return new Tc(t);if(Ib(t))return t;const e=new Tc(t.message??t.statusMessage??"",{cause:t.cause||t});if(Cb(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Sc(t.statusCode,e.statusCode):t.status&&(e.statusCode=Sc(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;mg(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Ib(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Tb=/[^\u0009\u0020-\u007E]/g;function mg(t=""){return t.replace(Tb,"")}function Sc(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const yg=Symbol("layout-meta"),hi=Symbol("route"),ft=()=>{var t;return(t=ke())==null?void 0:t.$router},Nl=()=>Ko()?Ke(hi,ke()._route):ke()._route;function HO(t){return t}const Sb=()=>{try{if(ke()._processingMiddleware)return!0}catch{return!1}return!1},jO=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Rb(t):ft().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:l={}}=e.open,u=Object.entries(l).filter(([f,h])=>h!==void 0).map(([f,h])=>`${f.toLowerCase()}=${h}`).join(", ");return open(n,c,u),Promise.resolve()}const s=gs(n,{acceptRelative:!0}),r=(e==null?void 0:e.external)||s;if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&kE(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=Sb();if(!r&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:c,search:l,hash:u}=og(t);return{path:c,...l&&{query:tg(l)},...u&&{hash:u},replace:!0}}return{...t,replace:!0}}return t}const o=ft(),a=ke();return r?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Rb(t){return ng(t.path||"",t.query||{})+(t.hash||"")}const vg="__nuxt_error",Jo=()=>fv(ke().payload,"error"),wn=t=>{const e=Xo(t);try{const n=ke(),s=Jo();n.hooks.callHook("app:error",e),s.value||(s.value=e)}catch{throw e}return e},kb=async(t={})=>{const e=ke(),n=Jo();e.callHook("app:error:cleared",t),t.redirect&&await ft().replace(t.redirect),n.value=ub},wg=t=>!!t&&typeof t=="object"&&vg in t,Xo=t=>{const e=$i(t);return Object.defineProperty(e,vg,{value:!0,configurable:!1,writable:!1}),e};/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Eg;const di=t=>Eg=t,bg=Symbol();function Rc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Rr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Rr||(Rr={}));function Ab(){const t=ll(!0),e=t.run(()=>st({}));let n=[],s=[];const r=yl({install(i){di(r),r._a=i,i.provide(bg,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return this._a?n.push(i):s.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Cg=()=>{};function kf(t,e,n,s=Cg){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&ul()&&Hy(r),r}function bs(t,...e){t.slice().forEach(n=>{n(...e)})}const Pb=t=>t(),Af=Symbol(),La=Symbol();function kc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Rc(r)&&Rc(s)&&t.hasOwnProperty(n)&&!Te(s)&&!Zt(s)?t[n]=kc(r,s):t[n]=s}return t}const Nb=Symbol();function Ob(t){return!Rc(t)||!t.hasOwnProperty(Nb)}const{assign:_n}=Object;function xb(t){return!!(Te(t)&&t.effect)}function Mb(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=cv(n.state.value[t]);return _n(u,i,Object.keys(o||{}).reduce((f,h)=>(f[h]=yl(ut(()=>{di(n);const d=n._s.get(t);return o[h].call(d,d)})),f),{}))}return c=Ig(t,l,e,n,s,!0),c}function Ig(t,e,n={},s,r,i){let o;const a=_n({actions:{}},n),c={deep:!0};let l,u,f=[],h=[],d;const p=s.state.value[t];!i&&!p&&(s.state.value[t]={}),st({});let g;function w(M){let R;l=u=!1,typeof M=="function"?(M(s.state.value[t]),R={type:Rr.patchFunction,storeId:t,events:d}):(kc(s.state.value[t],M),R={type:Rr.patchObject,payload:M,storeId:t,events:d});const P=g=Symbol();ps().then(()=>{g===P&&(l=!0)}),u=!0,bs(f,R,s.state.value[t])}const b=i?function(){const{state:R}=n,P=R?R():{};this.$patch(V=>{_n(V,P)})}:Cg;function E(){o.stop(),f=[],h=[],s._s.delete(t)}const _=(M,R="")=>{if(Af in M)return M[La]=R,M;const P=function(){di(s);const V=Array.from(arguments),O=[],q=[];function re(z){O.push(z)}function ce(z){q.push(z)}bs(h,{args:V,name:P[La],store:C,after:re,onError:ce});let $;try{$=M.apply(this&&this.$id===t?this:C,V)}catch(z){throw bs(q,z),z}return $ instanceof Promise?$.then(z=>(bs(O,z),z)).catch(z=>(bs(q,z),Promise.reject(z))):(bs(O,$),$)};return P[Af]=!0,P[La]=R,P},v={_p:s,$id:t,$onAction:kf.bind(null,h),$patch:w,$reset:b,$subscribe(M,R={}){const P=kf(f,M,R.detached,()=>V()),V=o.run(()=>ts(()=>s.state.value[t],O=>{(R.flush==="sync"?u:l)&&M({storeId:t,type:Rr.direct,events:d},O)},_n({},c,R)));return P},$dispose:E},C=$t(v);s._s.set(t,C);const S=(s._a&&s._a.runWithContext||Pb)(()=>s._e.run(()=>(o=ll()).run(()=>e({action:_}))));for(const M in S){const R=S[M];if(Te(R)&&!xb(R)||Zt(R))i||(p&&Ob(R)&&(Te(R)?R.value=p[M]:kc(R,p[M])),s.state.value[t][M]=R);else if(typeof R=="function"){const P=_(R,M);S[M]=P,a.actions[M]=R}}return _n(C,S),_n(ae(C),S),Object.defineProperty(C,"$state",{get:()=>s.state.value[t],set:M=>{w(R=>{_n(R,M)})}}),s._p.forEach(M=>{_n(C,o.run(()=>M({store:C,app:s._a,pinia:s,options:a})))}),p&&i&&n.hydrate&&n.hydrate(C.$state,p),l=!0,u=!0,C}/*! #__NO_SIDE_EFFECTS__ */function Lb(t,e,n){let s;const r=typeof e=="function";s=r?n:e;function i(o,a){const c=Ko();return o=o||(c?Ke(bg,null):null),o&&di(o),o=Eg,o._s.has(t)||(r?Ig(t,e,s,o):Mb(t,s,o)),o._s.get(t)}return i.$id=t,i}function Pf(t){const e=Fb(t),n=new ArrayBuffer(e.length),s=new DataView(n);for(let r=0;r<n.byteLength;r++)s.setUint8(r,e.charCodeAt(r));return n}const Db="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Fb(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,s=0;for(let r=0;r<t.length;r++)n<<=6,n|=Db.indexOf(t[r]),s+=6,s===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=s=0);return s===12?(n>>=4,e+=String.fromCharCode(n)):s===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const Ub=-1,Hb=-2,jb=-3,Bb=-4,$b=-5,Wb=-6;function Vb(t,e){return qb(JSON.parse(t),e)}function qb(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,s=Array(n.length);function r(i,o=!1){if(i===Ub)return;if(i===jb)return NaN;if(i===Bb)return 1/0;if(i===$b)return-1/0;if(i===Wb)return-0;if(o)throw new Error("Invalid input");if(i in s)return s[i];const a=n[i];if(!a||typeof a!="object")s[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],l=e==null?void 0:e[c];if(l)return s[i]=l(r(a[1]));switch(c){case"Date":s[i]=new Date(a[1]);break;case"Set":const u=new Set;s[i]=u;for(let d=1;d<a.length;d+=1)u.add(r(a[d]));break;case"Map":const f=new Map;s[i]=f;for(let d=1;d<a.length;d+=2)f.set(r(a[d]),r(a[d+1]));break;case"RegExp":s[i]=new RegExp(a[1],a[2]);break;case"Object":s[i]=Object(a[1]);break;case"BigInt":s[i]=BigInt(a[1]);break;case"null":const h=Object.create(null);s[i]=h;for(let d=1;d<a.length;d+=2)h[a[d]]=r(a[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[c],p=a[1],g=Pf(p),w=new d(g);s[i]=w;break}case"ArrayBuffer":{const d=a[1],p=Pf(d);s[i]=p;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);s[i]=c;for(let l=0;l<a.length;l+=1){const u=a[l];u!==Hb&&(c[l]=r(u))}}else{const c={};s[i]=c;for(const l in a){const u=a[l];c[l]=r(u)}}return s[i]}return r(0)}const Kb=new Set(["link","style","script","noscript"]),Gb=new Set(["title","titleTemplate","script","style","noscript"]),Nf=new Set(["base","meta","link","style","script","noscript"]),zb=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Yb=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Qb=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Jb=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Xb=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),Zb=["name","property","http-equiv"];function Tg(t){const e=t.split(":")[1];return Xb.has(e)}function Ac(t){const{props:e,tag:n}=t;if(Yb.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const s of Zb)if(e[s]!==void 0)return`${n}:${e[s]}`}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(Gb.has(n)){const s=t.textContent||t.innerHTML;if(s)return`${n}:content:${s}`}}function Of(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([s,r])=>`${s}:${String(r)}`).join(",")}`}function po(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let r;if(e&&(r=e(n,t)),Array.isArray(r))return r.map(i=>po(i,e));if((r==null?void 0:r.constructor)===Object){const i={};for(const o of Object.keys(r))i[o]=po(r[o],e,o);return i}return r}function eC(t,e){const n=t==="style"?new Map:new Set;function s(r){const i=r.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(s):s(e):Array.isArray(e)?e.forEach(r=>s(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,i])=>{i&&i!=="false"&&(t==="style"?n.set(r.trim(),i):s(r))}),n}function Sg(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,s])=>{if(s===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=eC(n,s);return}if(Qb.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof s=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(s)}else t[n]=s;return}const r=String(s),i=n.startsWith("data-");r==="true"||r===""?t.props[n]=i?r:!0:!s&&i&&r==="false"?t.props[n]="false":s!==void 0&&(t.props[n]=s)}),t}function tC(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},s=Sg({tag:t,props:{}},n);return s.key&&Kb.has(s.tag)&&(s.props["data-hid"]=s._h=s.key),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(r=>({...s,props:{...s.props,content:r}})):s}function nC(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(r,i)=>{for(let o=0;o<e.length;o++)i=e[o](r,i);return i};t=n(void 0,t);const s=[];return t=po(t,n),Object.entries(t||{}).forEach(([r,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])s.push(tC(r,o))}),s.flat()}const xf=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Mf={base:-10,title:10},sC={critical:-8,high:-1,low:2},Lf={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},rC=/@import/,ur=t=>t===""||t===!0;function iC(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const s=sC[e.tagPriority]||0,r=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Lf;if(e.tag in Mf)n=Mf[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=Lf.meta[o])}else e.tag==="link"&&e.props.rel?n=r.link[e.props.rel]:e.tag==="script"?ur(e.props.async)?n=r.script.async:e.props.src&&!ur(e.props.defer)&&!ur(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=r.script.sync:ur(e.props.defer)&&e.props.src&&!ur(e.props.async)&&(n=r.script.defer):e.tag==="style"&&(n=e.innerHTML&&rC.test(e.innerHTML)?r.style.imported:r.style.sync);return(n||100)+s}function Df(t,e){const n=typeof e=="function"?e(t):e,s=n.key||String(t.plugins.size+1);t.plugins.get(s)||(t.plugins.set(s,n),t.hooks.addHooks(n.hooks||{}))}function oC(t={}){var a;const e=ug();e.addHooks(t.hooks||{});const n=!t.document,s=new Map,r=new Map,i=[],o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:s,headEntries(){return[...s.values()]},use:c=>Df(o,c),push(c,l){const u={...l||{}};delete u.head;const f=u._index??o._entryCount++,h={_i:f,input:c,options:u},d={_poll(p=!1){o.dirty=!0,!p&&i.push(f),e.callHook("entries:updated",o)},dispose(){s.delete(f)&&d._poll(!0)},patch(p){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(h.input=p,s.set(f,h),d._poll())}};return d.patch(c),d},async resolveTags(){var d;const c={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",c);i.length;){const p=i.shift(),g=s.get(p);if(g){const w={tags:nC(g.input,t.propResolvers||[]).map(b=>Object.assign(b,g.options)),entry:g};await e.callHook("entries:normalize",w),g._tags=w.tags.map((b,E)=>(b._w=iC(o,b),b._p=(g._i<<10)+E,b._d=Ac(b),b))}}let l=!1;c.entries.flatMap(p=>(p._tags||[]).map(g=>({...g,props:{...g.props}}))).sort(xf).reduce((p,g)=>{const w=String(g._d||g._p);if(!p.has(w))return p.set(w,g);const b=p.get(w);if(((g==null?void 0:g.tagDuplicateStrategy)||(Jb.has(g.tag)?"merge":null)||(g.key&&g.key===b.key?"merge":null))==="merge"){const _={...b.props};Object.entries(g.props).forEach(([v,C])=>_[v]=v==="style"?new Map([...b.props.style||new Map,...C]):v==="class"?new Set([...b.props.class||new Set,...C]):C),p.set(w,{...g,props:_})}else g._p>>10===b._p>>10&&Tg(g._d)?(p.set(w,Object.assign([...Array.isArray(b)?b:[b],g],g)),l=!0):(g._w===b._w?g._p>b._p:(g==null?void 0:g._w)<(b==null?void 0:b._w))&&p.set(w,g);return p},c.tagMap);const u=c.tagMap.get("title"),f=c.tagMap.get("titleTemplate");if(o._title=u==null?void 0:u.textContent,f){const p=f==null?void 0:f.textContent;if(o._titleTemplate=p,p){let g=typeof p=="function"?p(u==null?void 0:u.textContent):p;typeof g=="string"&&!o.plugins.has("template-params")&&(g=g.replace("%s",(u==null?void 0:u.textContent)||"")),u?g===null?c.tagMap.delete("title"):c.tagMap.set("title",{...u,textContent:g}):(f.tag="title",f.textContent=g)}}c.tags=Array.from(c.tagMap.values()),l&&(c.tags=c.tags.flat().sort(xf)),await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c);const h=[];for(const p of c.tags){const{innerHTML:g,tag:w,props:b}=p;if(zb.has(w)&&!(Object.keys(b).length===0&&!p.innerHTML&&!p.textContent)&&!(w==="meta"&&!b.content&&!b["http-equiv"]&&!b.charset)){if(w==="script"&&g){if((d=b.type)!=null&&d.endsWith("json")){const E=typeof g=="string"?g:JSON.stringify(g);p.innerHTML=E.replace(/</g,"\\u003C")}else typeof g=="string"&&(p.innerHTML=g.replace(new RegExp(`</${w}`,"g"),`<\\/${w}`));p._d=Ac(p)}h.push(p)}}return h}};return((t==null?void 0:t.plugins)||[]).forEach(c=>Df(o,c)),o.hooks.callHook("init",o),(a=t.init)==null||a.forEach(c=>c&&o.push(c)),o}const aC=(t,e)=>Te(e)?ov(e):e,Rg="usehead";function cC(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Rg,t)}}.install}function lC(){if(Ko()){const t=Ke(Rg);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function BO(t,e={}){const n=e.head||lC();return n.ssr?n.push(t||{},e):uC(n,t,e)}function uC(t,e,n={}){const s=st(!1);let r;return tw(()=>{const o=s.value?{}:po(e,aC);r?r.patch(o):r=t.push(o,n)}),Yo()&&(ui(()=>{r.dispose()}),hp(()=>{s.value=!0}),fp(()=>{s.value=!1})),r}const fC="modulepreload",hC=function(t,e){return new URL(t,e).href},Ff={},Ut=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=hC(l,s),l in Ff)return;Ff[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!s)for(let p=o.length-1;p>=0;p--){const g=o[p];if(g.href===l&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":fC,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let Wi,Vi;function dC(){return Wi=$fetch(Pl(`builds/meta/${Xs().app.buildId}.json`),{responseType:"json"}),Wi.then(t=>{Vi=Eb(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Wi}function Zo(){return Wi||dC()}async function Ol(t){const e=typeof t=="string"?t:t.path;if(await Zo(),!Vi)return console.error("[nuxt] Error creating app manifest matcher.",Vi),{};try{return _g({},...Vi.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Uf(t,e={}){if(!await Ag(t))return null;const s=await gC(t,e);return await kg(s)||null}const pC="_payload.json";async function gC(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||gs(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const s=Xs(),r=e.hash||(e.fresh?Date.now():s.app.buildId),i=s.app.cdnURL,o=i&&await Ag(t)?i:s.app.baseURL;return Al(o,n.pathname,pC+(r?`?${r}`:""))}async function kg(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(Pg));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Ag(t=Nl().path){const e=ke();return t=kl(t),(await Zo()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const s=await Ol({path:t});return!!s.prerender&&!s.redirect})}let Kn=null;async function _C(){var s;if(Kn)return Kn;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Pg(t.textContent||""),n=t.dataset.src?await kg(t.dataset.src):void 0;return Kn={...e,...n,...window.__NUXT__},(s=Kn.config)!=null&&s.public&&(Kn.config.public=$t(Kn.config.public)),Kn}async function Pg(t){return await Vb(t,ke()._payloadRevivers)}function Ng(t,e){ke()._payloadRevivers[t]=e}const mC=yb(()=>{Ng("skipHydrate",t=>{})}),yC=[["NuxtError",t=>Xo(t)],["EmptyShallowRef",t=>Hr(t==="_"?void 0:t==="0n"?BigInt(0):co(t))],["EmptyRef",t=>st(t==="_"?void 0:t==="0n"?BigInt(0):co(t))],["ShallowRef",t=>Hr(t)],["ShallowReactive",t=>Yt(t)],["Ref",t=>st(t)],["Reactive",t=>$t(t)]],vC=ht({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[s,r]of yC)Ng(s,r);Object.assign(t.payload,([e,n]=ss(()=>t.runWithContext(_C)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function xl(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const s={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{var d;const i=new Map,o=new Promise(p=>{t.resolveTags().then(g=>{p(g.map(w=>{const b=i.get(w._d)||0,E={tag:w,id:(b?`${w._d}:${b}`:w._d)||Of(w),shouldRender:!0};return w._d&&Tg(w._d)&&i.set(w._d,b+1),E}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const p of["body","head"]){const g=(d=n[p])==null?void 0:d.children;for(const w of g){const b=w.tagName.toLowerCase();if(!Nf.has(b))continue;const E=Sg({tag:b,props:{}},{innerHTML:w.innerHTML,...w.getAttributeNames().reduce((_,v)=>(_[v]=w.getAttribute(v),_),{})||{}});if(E.key=w.getAttribute("data-hid")||void 0,E._d=Ac(E)||Of(E),a.elMap.has(E._d)){let _=1,v=E._d;for(;a.elMap.has(v);)v=`${E._d}:${_++}`;a.elMap.set(v,w)}else a.elMap.set(E._d,w)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(p,g,w){const b=`${p}:${g}`;a.sideEffects[b]=w,delete a.pendingSideEffects[b]}function l({id:p,$el:g,tag:w}){const b=w.tag.endsWith("Attrs");a.elMap.set(p,g),b||(w.textContent&&w.textContent!==g.textContent&&(g.textContent=w.textContent),w.innerHTML&&w.innerHTML!==g.innerHTML&&(g.innerHTML=w.innerHTML),c(p,"el",()=>{g==null||g.remove(),a.elMap.delete(p)}));for(const E in w.props){if(!Object.prototype.hasOwnProperty.call(w.props,E))continue;const _=w.props[E];if(E.startsWith("on")&&typeof _=="function"){const C=g==null?void 0:g.dataset;if(C&&C[`${E}fired`]){const T=E.slice(0,-5);_.call(g,new Event(T.substring(2)))}g.getAttribute(`data-${E}`)!==""&&((w.tag==="bodyAttrs"?n.defaultView:g).addEventListener(E.substring(2),_.bind(g)),g.setAttribute(`data-${E}`,""));continue}const v=`attr:${E}`;if(E==="class"){if(!_)continue;for(const C of _)b&&c(p,`${v}:${C}`,()=>g.classList.remove(C)),!g.classList.contains(C)&&g.classList.add(C)}else if(E==="style"){if(!_)continue;for(const[C,T]of _)c(p,`${v}:${C}`,()=>{g.style.removeProperty(C)}),g.style.setProperty(C,T)}else _!==!1&&_!==null&&(g.getAttribute(E)!==_&&g.setAttribute(E,_===!0?"":String(_)),b&&c(p,v,()=>g.removeAttribute(E)))}}const u=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},h=await o;for(const p of h){const{tag:g,shouldRender:w,id:b}=p;if(w){if(g.tag==="title"){n.title=g.textContent,c("title","",()=>n.title=a.title);continue}p.$el=p.$el||a.elMap.get(b),p.$el?l(p):Nf.has(g.tag)&&u.push(p)}}for(const p of u){const g=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),f[g]=f[g]||n.createDocumentFragment(),f[g].appendChild(p.$el)}for(const p of h)await t.hooks.callHook("dom:renderTag",p,n,c);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const p in a.pendingSideEffects)a.pendingSideEffects[p]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:h}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function wC(t={}){var s,r,i;const e=((s=t.domOptions)==null?void 0:s.render)||xl;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(r=t.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return oC({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function EC(t,e){let n=0;return()=>{const s=++n;e(()=>{n===s&&t()})}}function bC(t={}){const e=wC({domOptions:{render:EC(()=>xl(e),ps)},...t});return e.install=cC(e),e}const CC={disableDefaults:!0},IC=ht({name:"nuxt:head",enforce:"pre",setup(t){const e=bC(CC);t.vueApp.use(e);{let n=!0;const s=async()=>{n=!1,await xl(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||s()}),t.hooks.hook("app:error",s),t.hooks.hook("app:suspense:resolve",s)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ss=typeof document<"u";function Og(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function TC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Og(t.default)}const fe=Object.assign;function Da(t,e){const n={};for(const s in e){const r=e[s];n[s]=Pt(r)?r.map(t):t(r)}return n}const kr=()=>{},Pt=Array.isArray,xg=/#/g,SC=/&/g,RC=/\//g,kC=/=/g,AC=/\?/g,Mg=/\+/g,PC=/%5B/g,NC=/%5D/g,Lg=/%5E/g,OC=/%60/g,Dg=/%7B/g,xC=/%7C/g,Fg=/%7D/g,MC=/%20/g;function Ml(t){return encodeURI(""+t).replace(xC,"|").replace(PC,"[").replace(NC,"]")}function LC(t){return Ml(t).replace(Dg,"{").replace(Fg,"}").replace(Lg,"^")}function Pc(t){return Ml(t).replace(Mg,"%2B").replace(MC,"+").replace(xg,"%23").replace(SC,"%26").replace(OC,"`").replace(Dg,"{").replace(Fg,"}").replace(Lg,"^")}function DC(t){return Pc(t).replace(kC,"%3D")}function FC(t){return Ml(t).replace(xg,"%23").replace(AC,"%3F")}function UC(t){return t==null?"":FC(t).replace(RC,"%2F")}function qr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const HC=/\/$/,jC=t=>t.replace(HC,"");function Fa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=VC(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:qr(o)}}function BC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $C(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Vs(e.matched[s],n.matched[r])&&Ug(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ug(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!WC(t[n],e[n]))return!1;return!0}function WC(t,e){return Pt(t)?jf(t,e):Pt(e)?jf(e,t):t===e}function jf(t,e){return Pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function VC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Kr;(function(t){t.pop="pop",t.push="push"})(Kr||(Kr={}));var Ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ar||(Ar={}));function qC(t){if(!t)if(Ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jC(t)}const KC=/^[^#]+#/;function GC(t,e){return t.replace(KC,"#")+e}function zC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ea=()=>({left:window.scrollX,top:window.scrollY});function YC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=zC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bf(t,e){return(history.state?history.state.position-e:-1)+t}const Nc=new Map;function QC(t,e){Nc.set(t,e)}function JC(t){const e=Nc.get(t);return Nc.delete(t),e}let XC=()=>location.protocol+"//"+location.host;function Hg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Hf(c,"")}return Hf(n,t)+s+r}function ZC(t,e,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const d=Hg(t,location),p=n.value,g=e.value;let w=0;if(h){if(n.value=d,e.value=h,o&&o===p){o=null;return}w=g?h.position-g.position:0}else s(d);r.forEach(b=>{b(n.value,p,{delta:w,type:Kr.pop,direction:w?w>0?Ar.forward:Ar.back:Ar.unknown})})};function c(){o=n.value}function l(h){r.push(h);const d=()=>{const p=r.indexOf(h);p>-1&&r.splice(p,1)};return i.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(fe({},h.state,{scroll:ea()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function $f(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ea():null}}function eI(t){const{history:e,location:n}=window,s={value:Hg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:XC()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(c,l){const u=fe({},e.state,$f(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=fe({},r.value,e.state,{forward:c,scroll:ea()});i(u.current,u,!0);const f=fe({},$f(s.value,c,null),{position:u.position+1},l);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function tI(t){t=qC(t);const e=eI(t),n=ZC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=fe({location:"",base:t,go:s,createHref:GC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function nI(t){return typeof t=="string"||t&&typeof t=="object"}function jg(t){return typeof t=="string"||typeof t=="symbol"}const Bg=Symbol("");var Wf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wf||(Wf={}));function qs(t,e){return fe(new Error,{type:t,[Bg]:!0},e)}function qt(t,e){return t instanceof Error&&Bg in t&&(e==null||!!(t.type&e))}const Vf="[^/]+?",sI={sensitive:!1,strict:!1,start:!0,end:!0},rI=/[.+*?^${}()[\]/\\]/g;function iI(t,e){const n=fe({},sI,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const h=l[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(rI,"\\$&"),d+=40;else if(h.type===1){const{value:p,repeatable:g,optional:w,regexp:b}=h;i.push({name:p,repeatable:g,optional:w});const E=b||Vf;if(E!==Vf){d+=10;try{new RegExp(`(${E})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${p}" (${E}): `+v.message)}}let _=g?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(_=w&&l.length<2?`(?:/${_})`:"/"+_),w&&(_+="?"),r+=_,d+=20,w&&(d+=-8),g&&(d+=-20),E===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",p=i[h-1];f[p.name]=d&&p.repeatable?d.split("/"):d}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:g,optional:w}=d,b=p in l?l[p]:"";if(Pt(b)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const E=Pt(b)?b.join("/"):b;if(!E)if(w)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${p}"`);u+=E}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function oI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $g(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=oI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(qf(s))return 1;if(qf(r))return-1}return r.length-s.length}function qf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aI={type:0,value:""},cI=/[a-zA-Z0-9_]/;function lI(t){if(!t)return[[]];if(t==="/")return[[aI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:cI.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),r}function uI(t,e,n){const s=iI(lI(t.path),n),r=fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function fI(t,e){const n=[],s=new Map;e=Yf({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,d){const p=!d,g=Gf(f);g.aliasOf=d&&d.record;const w=Yf(e,f),b=[g];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of v)b.push(Gf(fe({},g,{components:d?d.record.components:g.components,path:C,aliasOf:d?d.record:g})))}let E,_;for(const v of b){const{path:C}=v;if(h&&C[0]!=="/"){const T=h.record.path,S=T[T.length-1]==="/"?"":"/";v.path=h.record.path+(C&&S+C)}if(E=uI(v,h,w),d?d.alias.push(E):(_=_||E,_!==E&&_.alias.push(E),p&&f.name&&!zf(E)&&o(f.name)),Wg(E)&&c(E),g.children){const T=g.children;for(let S=0;S<T.length;S++)i(T[S],E,d&&d.children[S])}d=d||E}return _?()=>{o(_)}:kr}function o(f){if(jg(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const h=pI(f,n);n.splice(h,0,f),f.record.name&&!zf(f)&&s.set(f.record.name,f)}function l(f,h){let d,p={},g,w;if("name"in f&&f.name){if(d=s.get(f.name),!d)throw qs(1,{location:f});w=d.record.name,p=fe(Kf(h.params,d.keys.filter(_=>!_.optional).concat(d.parent?d.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),f.params&&Kf(f.params,d.keys.map(_=>_.name))),g=d.stringify(p)}else if(f.path!=null)g=f.path,d=n.find(_=>_.re.test(g)),d&&(p=d.parse(g),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(_=>_.re.test(h.path)),!d)throw qs(1,{location:f,currentLocation:h});w=d.record.name,p=fe({},h.params,f.params),g=d.stringify(p)}const b=[];let E=d;for(;E;)b.unshift(E.record),E=E.parent;return{name:w,path:g,params:p,matched:b,meta:dI(b)}}t.forEach(f=>i(f));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Kf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Gf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:hI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function hI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function zf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dI(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Yf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function pI(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;$g(t,e[i])<0?s=i:n=i+1}const r=gI(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function gI(t){let e=t;for(;e=e.parent;)if(Wg(e)&&$g(t,e)===0)return e}function Wg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _I(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Mg," "),o=i.indexOf("="),a=qr(o<0?i:i.slice(0,o)),c=o<0?null:qr(i.slice(o+1));if(a in e){let l=e[a];Pt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Qf(t){let e="";for(let n in t){const s=t[n];if(n=DC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(s)?s.map(i=>i&&Pc(i)):[s&&Pc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const yI=Symbol(""),Jf=Symbol(""),Ll=Symbol(""),Dl=Symbol(""),Oc=Symbol("");function fr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function En(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(qs(4,{from:n,to:e})):h instanceof Error?c(h):nI(h)?c(qs(2,{from:e,to:h})):(o&&s.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(s&&s.instances[r],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function Ua(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Og(c)){const u=(c.__vccOpts||c)[e];u&&i.push(En(u,n,s,o,a,r))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=TC(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&En(d,n,s,o,a,r)()}))}}return i}function Xf(t){const e=Ke(Ll),n=Ke(Dl),s=ut(()=>{const c=be(t.to);return e.resolve(c)}),r=ut(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Vs.bind(null,u));if(h>-1)return h;const d=Zf(c[l-2]);return l>1&&Zf(u)===d&&f[f.length-1].path!==d?f.findIndex(Vs.bind(null,c[l-2])):h}),i=ut(()=>r.value>-1&&CI(n.params,s.value.params)),o=ut(()=>r.value>-1&&r.value===n.matched.length-1&&Ug(n.params,s.value.params));function a(c={}){if(bI(c)){const l=e[be(t.replace)?"replace":"push"](be(t.to)).catch(kr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:s,href:ut(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function vI(t){return t.length===1?t[0]:t}const wI=cn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xf,setup(t,{slots:e}){const n=$t(Xf(t)),{options:s}=Ke(Ll),r=ut(()=>({[eh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[eh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&vI(e.default(n));return t.custom?i:Ue("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),EI=wI;function bI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function CI(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Pt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Zf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const eh=(t,e,n)=>t??e??n,II=cn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ke(Oc),r=ut(()=>t.route||s.value),i=Ke(Jf,0),o=ut(()=>{let l=be(i);const{matched:u}=r.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=ut(()=>r.value.matched[o.value]);es(Jf,ut(()=>o.value+1)),es(yI,a),es(Oc,r);const c=st();return ts(()=>[c.value,a.value,t.name],([l,u,f],[h,d,p])=>{u&&(u.instances[f]=l,d&&d!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Vs(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return th(n.default,{Component:h,route:l});const d=f.props[u],p=d?d===!0?l.params:typeof d=="function"?d(l):d:null,w=Ue(h,fe({},p,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return th(n.default,{Component:w,route:l})||w}}});function th(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vg=II;function TI(t){const e=fI(t.routes,t),n=t.parseQuery||_I,s=t.stringifyQuery||Qf,r=t.history,i=fr(),o=fr(),a=fr(),c=Hr(Et);let l=Et;Ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Da.bind(null,A=>""+A),f=Da.bind(null,UC),h=Da.bind(null,qr);function d(A,W){let j,G;return jg(A)?(j=e.getRecordMatcher(A),G=W):G=A,e.addRoute(G,j)}function p(A){const W=e.getRecordMatcher(A);W&&e.removeRoute(W)}function g(){return e.getRoutes().map(A=>A.record)}function w(A){return!!e.getRecordMatcher(A)}function b(A,W){if(W=fe({},W||c.value),typeof A=="string"){const y=Fa(n,A,W.path),I=e.resolve({path:y.path},W),N=r.createHref(y.fullPath);return fe(y,I,{params:h(I.params),hash:qr(y.hash),redirectedFrom:void 0,href:N})}let j;if(A.path!=null)j=fe({},A,{path:Fa(n,A.path,W.path).path});else{const y=fe({},A.params);for(const I in y)y[I]==null&&delete y[I];j=fe({},A,{params:f(y)}),W.params=f(W.params)}const G=e.resolve(j,W),ue=A.hash||"";G.params=u(h(G.params));const Ce=BC(s,fe({},A,{hash:LC(ue),path:G.path})),m=r.createHref(Ce);return fe({fullPath:Ce,hash:ue,query:s===Qf?mI(A.query):A.query||{}},G,{redirectedFrom:void 0,href:m})}function E(A){return typeof A=="string"?Fa(n,A,c.value.path):fe({},A)}function _(A,W){if(l!==A)return qs(8,{from:W,to:A})}function v(A){return S(A)}function C(A){return v(fe(E(A),{replace:!0}))}function T(A){const W=A.matched[A.matched.length-1];if(W&&W.redirect){const{redirect:j}=W;let G=typeof j=="function"?j(A):j;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=E(G):{path:G},G.params={}),fe({query:A.query,hash:A.hash,params:G.path!=null?{}:A.params},G)}}function S(A,W){const j=l=b(A),G=c.value,ue=A.state,Ce=A.force,m=A.replace===!0,y=T(j);if(y)return S(fe(E(y),{state:typeof y=="object"?fe({},ue,y.state):ue,force:Ce,replace:m}),W||j);const I=j;I.redirectedFrom=W;let N;return!Ce&&$C(s,G,j)&&(N=qs(16,{to:I,from:G}),Ot(G,G,!0,!1)),(N?Promise.resolve(N):P(I,G)).catch(k=>qt(k)?qt(k,2)?k:hn(k):K(k,I,G)).then(k=>{if(k){if(qt(k,2))return S(fe({replace:m},E(k.to),{state:typeof k.to=="object"?fe({},ue,k.to.state):ue,force:Ce}),W||I)}else k=O(I,G,!0,m,ue);return V(I,G,k),k})}function M(A,W){const j=_(A,W);return j?Promise.reject(j):Promise.resolve()}function R(A){const W=vs.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(A):A()}function P(A,W){let j;const[G,ue,Ce]=SI(A,W);j=Ua(G.reverse(),"beforeRouteLeave",A,W);for(const y of G)y.leaveGuards.forEach(I=>{j.push(En(I,A,W))});const m=M.bind(null,A,W);return j.push(m),dt(j).then(()=>{j=[];for(const y of i.list())j.push(En(y,A,W));return j.push(m),dt(j)}).then(()=>{j=Ua(ue,"beforeRouteUpdate",A,W);for(const y of ue)y.updateGuards.forEach(I=>{j.push(En(I,A,W))});return j.push(m),dt(j)}).then(()=>{j=[];for(const y of Ce)if(y.beforeEnter)if(Pt(y.beforeEnter))for(const I of y.beforeEnter)j.push(En(I,A,W));else j.push(En(y.beforeEnter,A,W));return j.push(m),dt(j)}).then(()=>(A.matched.forEach(y=>y.enterCallbacks={}),j=Ua(Ce,"beforeRouteEnter",A,W,R),j.push(m),dt(j))).then(()=>{j=[];for(const y of o.list())j.push(En(y,A,W));return j.push(m),dt(j)}).catch(y=>qt(y,8)?y:Promise.reject(y))}function V(A,W,j){a.list().forEach(G=>R(()=>G(A,W,j)))}function O(A,W,j,G,ue){const Ce=_(A,W);if(Ce)return Ce;const m=W===Et,y=Ss?history.state:{};j&&(G||m?r.replace(A.fullPath,fe({scroll:m&&y&&y.scroll},ue)):r.push(A.fullPath,ue)),c.value=A,Ot(A,W,j,m),hn()}let q;function re(){q||(q=r.listen((A,W,j)=>{if(!Si.listening)return;const G=b(A),ue=T(G);if(ue){S(fe(ue,{replace:!0,force:!0}),G).catch(kr);return}l=G;const Ce=c.value;Ss&&QC(Bf(Ce.fullPath,j.delta),ea()),P(G,Ce).catch(m=>qt(m,12)?m:qt(m,2)?(S(fe(E(m.to),{force:!0}),G).then(y=>{qt(y,20)&&!j.delta&&j.type===Kr.pop&&r.go(-1,!1)}).catch(kr),Promise.reject()):(j.delta&&r.go(-j.delta,!1),K(m,G,Ce))).then(m=>{m=m||O(G,Ce,!1),m&&(j.delta&&!qt(m,8)?r.go(-j.delta,!1):j.type===Kr.pop&&qt(m,20)&&r.go(-1,!1)),V(G,Ce,m)}).catch(kr)}))}let ce=fr(),$=fr(),z;function K(A,W,j){hn(A);const G=$.list();return G.length?G.forEach(ue=>ue(A,W,j)):console.error(A),Promise.reject(A)}function Ae(){return z&&c.value!==Et?Promise.resolve():new Promise((A,W)=>{ce.add([A,W])})}function hn(A){return z||(z=!A,re(),ce.list().forEach(([W,j])=>A?j(A):W()),ce.reset()),A}function Ot(A,W,j,G){const{scrollBehavior:ue}=t;if(!Ss||!ue)return Promise.resolve();const Ce=!j&&JC(Bf(A.fullPath,0))||(G||!j)&&history.state&&history.state.scroll||null;return ps().then(()=>ue(A,W,Ce)).then(m=>m&&YC(m)).catch(m=>K(m,A,W))}const Ze=A=>r.go(A);let ys;const vs=new Set,Si={currentRoute:c,listening:!0,addRoute:d,removeRoute:p,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:g,resolve:b,options:t,push:v,replace:C,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:Ae,install(A){const W=this;A.component("RouterLink",EI),A.component("RouterView",Vg),A.config.globalProperties.$router=W,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>be(c)}),Ss&&!ys&&c.value===Et&&(ys=!0,v(r.location).catch(ue=>{}));const j={};for(const ue in Et)Object.defineProperty(j,ue,{get:()=>c.value[ue],enumerable:!0});A.provide(Ll,W),A.provide(Dl,Yt(j)),A.provide(Oc,c);const G=A.unmount;vs.add(A),A.unmount=function(){vs.delete(A),vs.size<1&&(l=Et,q&&q(),q=null,c.value=Et,ys=!1,z=!1),G()}}};function dt(A){return A.reduce((W,j)=>W.then(()=>R(j)),Promise.resolve())}return Si}function SI(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Vs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Vs(l,c))||r.push(c))}return[n,s,r]}function RI(t){return Ke(Dl)}const kI=/(:\w+)\([^)]+\)/g,AI=/(:\w+)[?+*]/g,PI=/:\w+/g,NI=(t,e)=>e.path.replace(kI,"$1").replace(AI,"$1").replace(PI,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),xc=(t,e)=>{const n=t.route.matched.find(r=>{var i;return((i=r.components)==null?void 0:i.default)===t.Component.type}),s=e??(n==null?void 0:n.meta.key)??(n&&NI(t.route,n));return typeof s=="function"?s(t.route):s},OI=(t,e)=>({default:()=>t?Ue(kv,t===!0?{}:t,e):e});function Fl(t){return Array.isArray(t)?t:[t]}const xI={layout:"authenticated",middleware:["auth","notes"]},MI={layout:"default",middleware:"auth"},LI={layout:"default",middleware:"auth"};const Ha=[{name:"index",path:"/",meta:xI||{},component:()=>Ut(()=>import("./DANRw6i2.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)},{name:"login",path:"/login",meta:MI||{},component:()=>Ut(()=>import("./5Z8j3HAD.js"),__vite__mapDeps([5,1,2,6]),import.meta.url)},{name:"register",path:"/register",meta:LI||{},component:()=>Ut(()=>import("./DB7g2Lih.js"),__vite__mapDeps([7,1,2,6]),import.meta.url)}],qg=(t,e)=>({default:()=>{var n;return t?Ue(Nw,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),DI=/(:\w+)\([^)]+\)/g,FI=/(:\w+)[?+*]/g,UI=/:\w+/g;function nh(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(DI,"$1").replace(FI,"$1").replace(UI,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""});return typeof e=="function"?e(t):e}function HI(t,e){return t===e||e===Et?!1:nh(t)!==nh(e)?!0:!t.matched.every((s,r)=>{var i,o;return s.components&&s.components.default===((o=(i=e.matched[r])==null?void 0:i.components)==null?void 0:o.default)})}const jI={scrollBehavior(t,e,n){var l;const s=ke(),r=((l=ft().options)==null?void 0:l.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&HI(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Kg(t.hash),behavior:r}:!1;const a=u=>!!(u.meta.pageTransition??Cc),c=a(e)&&a(t)?"page:transition:finish":"page:loading:end";return new Promise(u=>{s.hooks.hookOnce(c,()=>{requestAnimationFrame(()=>u(BI(t,"instant",i)))})})}};function Kg(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function BI(t,e,n){return n||(t.hash?{el:t.hash,top:Kg(t.hash),behavior:e}:{left:0,top:0,behavior:e})}const $I={hashMode:!1,scrollBehaviorType:"auto"},gt={...$I,...jI},WI=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const s=ke(),r=ft(),i=([e,n]=ss(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Xo({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=r.beforeResolve(l=>{if(a(),l===t){const u=r.afterEach(async()=>{u(),await s.runWithContext(()=>wn(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},VI=async t=>{let e,n;const s=([e,n]=ss(()=>Ol({path:t.path})),e=await e,n(),e);if(s.redirect)return gs(s.redirect,{acceptRelative:!0})?(window.location.href=s.redirect,!1):s.redirect},qI=[WI,VI],Pr={auth:()=>Ut(()=>import("./tAoYMiF1.js"),[],import.meta.url),notes:()=>Ut(()=>import("./CP0ZXfAK.js"),__vite__mapDeps([8,3]),import.meta.url)};function KI(t,e,n){const{pathname:s,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){const l=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(l);return u[0]!=="/"&&(u="/"+u),vf(u,"")}const a=vf(s,t),c=!n||OE(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":r)+i}const GI=ht({name:"nuxt:router",enforce:"pre",async setup(t){var w;let e,n,s=Xs().app.baseURL;const r=((w=gt.history)==null?void 0:w.call(gt,s))??tI(s),i=gt.routes?([e,n]=ss(()=>gt.routes(Ha)),e=await e,n(),e??Ha):Ha;let o;const a=TI({...gt,scrollBehavior:(b,E,_)=>{if(E===Et){o=_;return}if(gt.scrollBehavior){if(a.options.scrollBehavior=gt.scrollBehavior,"scrollRestoration"in window.history){const v=a.beforeEach(()=>{v(),window.history.scrollRestoration="manual"})}return gt.scrollBehavior(b,Et,o||_)}},history:r,routes:i});gt.routes&&gt.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=Hr(a.currentRoute.value);a.afterEach((b,E)=>{c.value=E}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const l=KI(s,window.location,t.payload.path),u=Hr(a.currentRoute.value),f=()=>{u.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((b,E)=>{var _,v,C,T;((v=(_=b.matched[0])==null?void 0:_.components)==null?void 0:v.default)===((T=(C=E.matched[0])==null?void 0:C.components)==null?void 0:T.default)&&f()});const h={};for(const b in u.value)Object.defineProperty(h,b,{get:()=>u.value[b],enumerable:!0});t._route=Yt(h),t._middleware||(t._middleware={global:[],named:{}});const d=Jo();a.afterEach(async(b,E,_)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(kb),_&&await t.callHook("page:loading:end")});try{[e,n]=ss(()=>a.isReady()),await e,n()}catch(b){[e,n]=ss(()=>t.runWithContext(()=>wn(b))),await e,n()}const p=l!==a.currentRoute.value.fullPath?a.resolve(l):a.currentRoute.value;f();const g=t.payload.state._layout;return a.beforeEach(async(b,E)=>{var _;await t.callHook("page:loading:start"),b.meta=$t(b.meta),t.isHydrating&&g&&!Mn(b.meta.layout)&&(b.meta.layout=g),t._processingMiddleware=!0;{const v=new Set([...qI,...t._middleware.global]);for(const C of b.matched){const T=C.meta.middleware;if(T)for(const S of Fl(T))v.add(S)}{const C=await t.runWithContext(()=>Ol({path:b.path}));if(C.appMiddleware)for(const T in C.appMiddleware)C.appMiddleware[T]?v.add(T):v.delete(T)}for(const C of v){const T=typeof C=="string"?t._middleware.named[C]||await((_=Pr[C])==null?void 0:_.call(Pr).then(S=>S.default||S)):C;if(!T)throw new Error(`Unknown route middleware: '${C}'.`);try{const S=await t.runWithContext(()=>T(b,E));if(!t.payload.serverRendered&&t.isHydrating&&(S===!1||S instanceof Error)){const M=S||$i({statusCode:404,statusMessage:`Page Not Found: ${l}`});return await t.runWithContext(()=>wn(M)),!1}if(S===!0)continue;if(S===!1)return S;if(S)return wg(S)&&S.fatal&&await t.runWithContext(()=>wn(S)),S}catch(S){const M=$i(S);return M.fatal&&await t.runWithContext(()=>wn(M)),M}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(b,E)=>{b.matched.length===0&&await t.runWithContext(()=>wn($i({statusCode:404,fatal:!1,statusMessage:`Page not found: ${b.fullPath}`,data:{path:b.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in p&&(p.name=void 0),await a.replace({...p,force:!0}),a.options.scrollBehavior=gt.scrollBehavior}catch(b){await t.runWithContext(()=>wn(b))}}),{provide:{router:a}}}}),sh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),$O=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Ul=t=>{const e=ke();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{sh(()=>t())}):sh(()=>t())},zI=ht({name:"nuxt:payload",setup(t){const e=new Set;ft().beforeResolve(async(n,s)=>{if(n.path===s.path)return;const r=await Uf(n.path);if(r){for(const i of e)delete t.static.data[i];for(const i in r.data)i in t.static.data||e.add(i),t.static.data[i]=r.data[i]}}),Ul(()=>{var n;t.hooks.hook("link:prefetch",async s=>{const{hostname:r}=new URL(s,window.location.href);r===window.location.hostname&&await Uf(s).catch(()=>{console.warn("[nuxt] Error preloading payload for",s)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Zo,1e3)})}}),YI=ht(()=>{const t=ft();Ul(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),QI=ht(t=>{let e;async function n(){const s=await Zo();e&&clearTimeout(e),e=setTimeout(n,Tf);try{const r=await $fetch(Pl("builds/latest.json")+`?${Date.now()}`);r.id!==s.id&&t.hooks.callHook("app:manifest:update",r)}catch{}}Ul(()=>{e=setTimeout(n,Tf)})});function JI(t={}){const e=t.path||window.location.pathname;let n={};try{n=co(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:ke().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const XI=ht({name:"nuxt:chunk-reload",setup(t){const e=ft(),n=Xs(),s=new Set;e.beforeEach(()=>{s.clear()}),t.hook("app:chunkError",({error:i})=>{s.add(i)});function r(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Al(n.app.baseURL,i.fullPath);JI({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((i,o)=>{s.has(i)&&r(o)})}}),ZI={nuxt:{},icon:{provider:"iconify",class:"",aliases:{},iconifyApiEndpoint:"https://api.iconify.design",localApiEndpoint:"/api/_nuxt_icon",fallbackToApi:!0,cssSelectorPrefix:"i-",cssWherePseudo:!0,mode:"css",attrs:{"aria-hidden":!0},collections:["academicons","akar-icons","ant-design","arcticons","basil","bi","bitcoin-icons","bpmn","brandico","bx","bxl","bxs","bytesize","carbon","catppuccin","cbi","charm","ci","cib","cif","cil","circle-flags","circum","clarity","codicon","covid","cryptocurrency","cryptocurrency-color","dashicons","devicon","devicon-plain","ei","el","emojione","emojione-monotone","emojione-v1","entypo","entypo-social","eos-icons","ep","et","eva","f7","fa","fa-brands","fa-regular","fa-solid","fa6-brands","fa6-regular","fa6-solid","fad","fe","feather","file-icons","flag","flagpack","flat-color-icons","flat-ui","flowbite","fluent","fluent-emoji","fluent-emoji-flat","fluent-emoji-high-contrast","fluent-mdl2","fontelico","fontisto","formkit","foundation","fxemoji","gala","game-icons","geo","gg","gis","gravity-ui","gridicons","grommet-icons","guidance","healthicons","heroicons","heroicons-outline","heroicons-solid","hugeicons","humbleicons","ic","icomoon-free","icon-park","icon-park-outline","icon-park-solid","icon-park-twotone","iconamoon","iconoir","icons8","il","ion","iwwa","jam","la","lets-icons","line-md","logos","ls","lucide","lucide-lab","mage","majesticons","maki","map","marketeq","material-symbols","material-symbols-light","mdi","mdi-light","medical-icon","memory","meteocons","mi","mingcute","mono-icons","mynaui","nimbus","nonicons","noto","noto-v1","octicon","oi","ooui","openmoji","oui","pajamas","pepicons","pepicons-pencil","pepicons-pop","pepicons-print","ph","pixelarticons","prime","ps","quill","radix-icons","raphael","ri","rivet-icons","si-glyph","simple-icons","simple-line-icons","skill-icons","solar","streamline","streamline-emojis","subway","svg-spinners","system-uicons","tabler","tdesign","teenyicons","token","token-branded","topcoat","twemoji","typcn","uil","uim","uis","uit","uiw","unjs","vaadin","vs","vscode-icons","websymbol","weui","whh","wi","wpf","zmdi","zondicons"],fetchTimeout:1500}},eT=bb(ZI);function tT(){const t=ke();return t._appConfig||(t._appConfig=$t(eT)),t._appConfig}const nT=ht({name:"pinia",setup(t){const e=Ab();return t.vueApp.use(e),di(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),sT=$r(()=>Ut(()=>import("./C5YVw4IS.js"),[],import.meta.url).then(t=>t.default||t.default||t)),rT=[["Icon",sT]],iT=ht({name:"nuxt:global-components",setup(t){for(const[e,n]of rT)t.vueApp.component(e,n),t.vueApp.component("Lazy"+e,n)}}),Sn={authenticated:$r(()=>Ut(()=>import("./CAEwRQ3R.js"),[],import.meta.url).then(t=>t.default||t)),default:$r(()=>Ut(()=>import("./BAJQBoz9.js"),[],import.meta.url).then(t=>t.default||t))},oT=ht({name:"nuxt:prefetch",setup(t){const e=ft();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const s=(r=n==null?void 0:n.meta)==null?void 0:r.layout;s&&typeof Sn[s]=="function"&&await Sn[s]()})}),t.hooks.hook("link:prefetch",n=>{if(gs(n))return;const s=e.resolve(n);if(!s)return;const r=s.meta.layout;let i=Fl(s.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Pr[o]=="function"&&Pr[o]();r&&typeof Sn[r]=="function"&&Sn[r]()})}}),Gg=/^[a-z0-9]+(-[a-z0-9]+)*$/,pi=(t,e,n,s="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;s=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),c=r.pop(),l={provider:r.length>0?r[0]:s,prefix:c,name:a};return e&&!qi(l)?null:l}const i=r[0],o=i.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!qi(a)?null:a}if(n&&s===""){const a={provider:s,prefix:"",name:i};return e&&!qi(a,n)?null:a}return null},qi=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,zg=Object.freeze({left:0,top:0,width:16,height:16}),go=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Zs=Object.freeze({...zg,...go}),Mc=Object.freeze({...Zs,body:"",hidden:!1});function aT(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function rh(t,e){const n=aT(t,e);for(const s in Mc)s in go?s in t&&!(s in n)&&(n[s]=go[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function cT(t,e){const n=t.icons,s=t.aliases||Object.create(null),r=Object.create(null);function i(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=s[o]&&s[o].parent,c=a&&i(a);c&&(r[o]=[a].concat(c))}return r[o]}return Object.keys(n).concat(Object.keys(s)).forEach(i),r}function lT(t,e,n){const s=t.icons,r=t.aliases||Object.create(null);let i={};function o(a){i=rh(s[a]||r[a],i)}return o(e),n.forEach(o),rh(t,i)}function Yg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const s=cT(t);for(const r in s){const i=s[r];i&&(e(r,lT(t,r,i)),n.push(r))}return n}const uT={provider:"",aliases:{},not_found:{},...zg};function ja(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Qg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!ja(t,uT))return null;const n=e.icons;for(const r in n){const i=n[r];if(!r||typeof i.body!="string"||!ja(i,Mc))return null}const s=e.aliases||Object.create(null);for(const r in s){const i=s[r],o=i.parent;if(!r||typeof o!="string"||!n[o]&&!s[o]||!ja(i,Mc))return null}return e}const ih=Object.create(null);function fT(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function is(t,e){const n=ih[t]||(ih[t]=Object.create(null));return n[e]||(n[e]=fT(t,e))}function Jg(t,e){return Qg(e)?Yg(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function hT(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Gr=!1;function Xg(t){return typeof t=="boolean"&&(Gr=t),Gr}function Hl(t){const e=typeof t=="string"?pi(t,!0,Gr):t;if(e){const n=is(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function dT(t,e){const n=pi(t,!0,Gr);if(!n)return!1;const s=is(n.provider,n.prefix);return e?hT(s,n.name,e):(s.missing.add(n.name),!0)}function pT(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Gr&&!e&&!t.prefix){let r=!1;return Qg(t)&&(t.prefix="",Yg(t,(i,o)=>{dT(i,o)&&(r=!0)})),r}const n=t.prefix;if(!qi({prefix:n,name:"a"}))return!1;const s=is(e,n);return!!Jg(s,t)}function WO(t){const e=Hl(t);return e&&{...Zs,...e}}const Zg=Object.freeze({width:null,height:null}),e_=Object.freeze({...Zg,...go}),gT=/(-?[0-9.]*[0-9]+[0-9.]*)/g,_T=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function oh(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(gT);if(s===null||!s.length)return t;const r=[];let i=s.shift(),o=_T.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?r.push(i):r.push(Math.ceil(a*e*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}function mT(t,e="defs"){let n="";const s=t.indexOf("<"+e);for(;s>=0;){const r=t.indexOf(">",s),i=t.indexOf("</"+e);if(r===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(r+1,i).trim(),t=t.slice(0,s).trim()+t.slice(o+1)}return{defs:n,content:t}}function yT(t,e){return t?"<defs>"+t+"</defs>"+e:e}function vT(t,e,n){const s=mT(t);return yT(s.defs,e+s.content+n)}const wT=t=>t==="unset"||t==="undefined"||t==="none";function ET(t,e){const n={...Zs,...t},s={...e_,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(g=>{const w=[],b=g.hFlip,E=g.vFlip;let _=g.rotate;b?E?_+=2:(w.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),w.push("scale(-1 1)"),r.top=r.left=0):E&&(w.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),w.push("scale(1 -1)"),r.top=r.left=0);let v;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:v=r.height/2+r.top,w.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:w.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:v=r.width/2+r.left,w.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}_%2===1&&(r.left!==r.top&&(v=r.left,r.left=r.top,r.top=v),r.width!==r.height&&(v=r.width,r.width=r.height,r.height=v)),w.length&&(i=vT(i,'<g transform="'+w.join(" ")+'">',"</g>"))});const o=s.width,a=s.height,c=r.width,l=r.height;let u,f;o===null?(f=a===null?"1em":a==="auto"?l:a,u=oh(f,c/l)):(u=o==="auto"?c:o,f=a===null?oh(u,l/c):a==="auto"?l:a);const h={},d=(g,w)=>{wT(w)||(h[g]=w.toString())};d("width",u),d("height",f);const p=[r.left,r.top,c,l];return h.viewBox=p.join(" "),{attributes:h,viewBox:p,body:i}}const bT=/\sid="(\S+)"/g,CT="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let IT=0;function TT(t,e=CT){const n=[];let s;for(;s=bT.exec(t);)n.push(s[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(IT++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const Lc=Object.create(null);function t_(t,e){Lc[t]=e}function Dc(t){return Lc[t]||Lc[""]}function jl(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const ta=Object.create(null),hr=["https://api.simplesvg.com","https://api.unisvg.com"],Ki=[];for(;hr.length>0;)hr.length===1||Math.random()>.5?Ki.push(hr.shift()):Ki.push(hr.pop());ta[""]=jl({resources:["https://api.iconify.design"].concat(Ki)});function n_(t,e){const n=jl(e);return n===null?!1:(ta[t]=n,!0)}function na(t){return ta[t]}function ST(){return Object.keys(ta)}const RT=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let _o=RT();function kT(t){_o=t}function AT(){return _o}function PT(t,e){const n=na(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const i=e+".json?icons=";s=n.maxURL-r-n.path.length-i.length}return s}function NT(t){return t===404}const OT=(t,e,n)=>{const s=[],r=PT(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((c,l)=>{a+=c.length+1,a>=r&&l>0&&(s.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=c.length),o.icons.push(c)}),s.push(o),s};function xT(t){if(typeof t=="string"){const e=na(t);if(e)return e.path}return"/"}const MT=(t,e,n)=>{if(!_o){n("abort",424);return}let s=xT(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),c=new URLSearchParams({icons:a});s+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;_o(t+s).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(NT(o)?"abort":"next",o)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},LT={prepare:OT,send:MT};function DT(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return t.forEach(r=>{if(s.name===r.name&&s.prefix===r.prefix&&s.provider===r.provider)return;s=r;const i=r.provider,o=r.prefix,a=r.name,c=n[i]||(n[i]=Object.create(null)),l=c[o]||(c[o]=is(i,o));let u;a in l.icons?u=e.loaded:o===""||l.missing.has(a)?u=e.missing:u=e.pending;const f={provider:i,prefix:o,name:a};u.push(f)}),e}function s_(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(r=>r.id!==e))})}function FT(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,r=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==r)return!0;const l=c.name;if(t.icons[l])o.loaded.push({provider:s,prefix:r,name:l});else if(t.missing.has(l))o.missing.push({provider:s,prefix:r,name:l});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||s_([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let UT=0;function HT(t,e,n){const s=UT++,r=s_.bind(null,n,s);if(!e.pending.length)return r;const i={id:s,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),r}function jT(t,e=!0,n=!1){const s=[];return t.forEach(r=>{const i=typeof r=="string"?pi(r,e,n):r;i&&s.push(i)}),s}var BT={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function $T(t,e,n,s){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let T=t.resources.slice(0);for(o=[];T.length>1;){const S=Math.floor(Math.random()*T.length);o.push(T[S]),T=T.slice(0,S).concat(T.slice(S+1))}o=o.concat(T)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let c="pending",l=0,u,f=null,h=[],d=[];typeof s=="function"&&d.push(s);function p(){f&&(clearTimeout(f),f=null)}function g(){c==="pending"&&(c="aborted"),p(),h.forEach(T=>{T.status==="pending"&&(T.status="aborted")}),h=[]}function w(T,S){S&&(d=[]),typeof T=="function"&&d.push(T)}function b(){return{startTime:a,payload:e,status:c,queriesSent:l,queriesPending:h.length,subscribe:w,abort:g}}function E(){c="failed",d.forEach(T=>{T(void 0,u)})}function _(){h.forEach(T=>{T.status==="pending"&&(T.status="aborted")}),h=[]}function v(T,S,M){const R=S!=="success";switch(h=h.filter(P=>P!==T),c){case"pending":break;case"failed":if(R||!t.dataAfterTimeout)return;break;default:return}if(S==="abort"){u=M,E();return}if(R){u=M,h.length||(o.length?C():E());return}if(p(),_(),!t.random){const P=t.resources.indexOf(T.resource);P!==-1&&P!==t.index&&(t.index=P)}c="completed",d.forEach(P=>{P(M)})}function C(){if(c!=="pending")return;p();const T=o.shift();if(T===void 0){if(h.length){f=setTimeout(()=>{p(),c==="pending"&&(_(),E())},t.timeout);return}E();return}const S={status:"pending",resource:T,callback:(M,R)=>{v(S,M,R)}};h.push(S),l++,f=setTimeout(C,t.rotate),n(T,e,S.callback)}return setTimeout(C),b}function r_(t){const e={...BT,...t};let n=[];function s(){n=n.filter(a=>a().status==="pending")}function r(a,c,l){const u=$T(e,a,c,(f,h)=>{s(),l&&l(f,h)});return n.push(u),u}function i(a){return n.find(c=>a(c))||null}return{query:r,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:s}}function ah(){}const Ba=Object.create(null);function WT(t){if(!Ba[t]){const e=na(t);if(!e)return;const n=r_(e),s={config:e,redundancy:n};Ba[t]=s}return Ba[t]}function i_(t,e,n){let s,r;if(typeof t=="string"){const i=Dc(t);if(!i)return n(void 0,424),ah;r=i.send;const o=WT(t);o&&(s=o.redundancy)}else{const i=jl(t);if(i){s=r_(i);const o=t.resources?t.resources[0]:"",a=Dc(o);a&&(r=a.send)}}return!s||!r?(n(void 0,424),ah):s.query(e,r,n)().abort}function ch(){}function VT(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,FT(t)}))}function qT(t){const e=[],n=[];return t.forEach(s=>{(s.match(Gg)?e:n).push(s)}),{valid:e,invalid:n}}function dr(t,e,n){function s(){const r=t.pendingIcons;e.forEach(i=>{r&&r.delete(i),t.icons[i]||t.missing.add(i)})}if(n&&typeof n=="object")try{if(!Jg(t,n).length){s();return}}catch(r){console.error(r)}s(),VT(t)}function lh(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function KT(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,r=t.iconsToLoad;if(delete t.iconsToLoad,!r||!r.length)return;const i=t.loadIcon;if(t.loadIcons&&(r.length>1||!i)){lh(t.loadIcons(r,s,n),u=>{dr(t,r,u)});return}if(i){r.forEach(u=>{const f=i(u,s,n);lh(f,h=>{const d=h?{prefix:s,icons:{[u]:h}}:null;dr(t,[u],d)})});return}const{valid:o,invalid:a}=qT(r);if(a.length&&dr(t,a,null),!o.length)return;const c=s.match(Gg)?Dc(n):null;if(!c){dr(t,o,null);return}c.prepare(n,s,o).forEach(u=>{i_(n,u,f=>{dr(t,u.icons,f)})})}))}const o_=(t,e)=>{const n=jT(t,!0,Xg()),s=DT(n);if(!s.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(s.loaded,s.missing,s.pending,ch)}),()=>{c=!1}}const r=Object.create(null),i=[];let o,a;return s.pending.forEach(c=>{const{provider:l,prefix:u}=c;if(u===a&&l===o)return;o=l,a=u,i.push(is(l,u));const f=r[l]||(r[l]=Object.create(null));f[u]||(f[u]=[])}),s.pending.forEach(c=>{const{provider:l,prefix:u,name:f}=c,h=is(l,u),d=h.pendingIcons||(h.pendingIcons=new Set);d.has(f)||(d.add(f),r[l][u].push(f))}),i.forEach(c=>{const l=r[c.provider][c.prefix];l.length&&KT(c,l)}),e?HT(e,s,i):ch},VO=t=>new Promise((e,n)=>{const s=typeof t=="string"?pi(t,!0):t;if(!s){n(t);return}o_([s||t],r=>{if(r.length&&s){const i=Hl(s);if(i){e({...Zs,...i});return}}n(t)})});function GT(t,e,n){is("",e).loadIcons=t}function zT(t,e){const n={...t};for(const s in e){const r=e[s],i=typeof r;s in Zg?(r===null||r&&(i==="string"||i==="number"))&&(n[s]=r):i===typeof n[s]&&(n[s]=s==="rotate"?r%4:r)}return n}const YT=/[\s,]+/;function QT(t,e){e.split(YT).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function JT(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:s(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?s(i):0)}}return e}function XT(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function ZT(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function eS(t){return"data:image/svg+xml,"+ZT(t)}function tS(t){return'url("'+eS(t)+'")'}const uh={...e_,inline:!1},nS={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},sS={display:"inline-block"},Fc={backgroundColor:"currentColor"},a_={backgroundColor:"transparent"},fh={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},hh={webkitMask:Fc,mask:Fc,background:a_};for(const t in hh){const e=hh[t];for(const n in fh)e[t+n]=fh[n]}const Gi={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Gi[t+"-flip"]=e,Gi[t.slice(0,1)+"-flip"]=e,Gi[t+"Flip"]=e});function dh(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const ph=(t,e)=>{const n=zT(uh,e),s={...nS},r=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let g in e){const w=e[g];if(w!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[g]=w===!0||w==="true"||w===1;break;case"flip":typeof w=="string"&&QT(n,w);break;case"color":i.color=w;break;case"rotate":typeof w=="string"?n[g]=JT(w):typeof w=="number"&&(n[g]=w);break;case"ariaHidden":case"aria-hidden":w!==!0&&w!=="true"&&delete s["aria-hidden"];break;default:{const b=Gi[g];b?(w===!0||w==="true"||w===1)&&(n[b]=!0):uh[g]===void 0&&(s[g]=w)}}}const c=ET(t,n),l=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),r==="svg"){s.style={...i,...a},Object.assign(s,l);let g=0,w=e.id;return typeof w=="string"&&(w=w.replace(/-/g,"_")),s.innerHTML=TT(c.body,w?()=>w+"ID"+g++:"iconifyVue"),Ue("svg",s)}const{body:u,width:f,height:h}=t,d=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),p=XT(u,{...l,width:f+"",height:h+""});return s.style={...i,"--svg":tS(p),width:dh(l.width),height:dh(l.height),...sS,...d?Fc:a_,...a},Ue("span",s)};Xg(!0);t_("",LT);if(typeof document<"u"&&typeof window<"u"){const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!pT(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;n_(n,r)||console.error(s)}catch{console.error(s)}}}}const rS={...Zs,body:""},qO=cn({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let s;if(typeof t!="string"||(s=pi(t,!1,!0))===null)return this.abortLoading(),null;let r=Hl(s);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:o_([s],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){r=Object.assign({},r);const o=n(r.body,s.name,s.prefix,s.provider);typeof o=="string"&&(r.body=o)}const i=["iconify"];return s.prefix!==""&&i.push("iconify--"+s.prefix),s.provider!==""&&i.push("iconify--"+s.provider),{data:r,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return ph(rS,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),ph({...Zs,...e.data},n)}}),iS={getAPIConfig:na,setAPIModule:t_,sendAPIQuery:i_,setFetch:kT,getFetch:AT,listAPIProviders:ST},oS=ht({name:"@nuxt/icon",setup(){var r,i;const t=Xs(),e=tT().icon;iS.setFetch($fetch.native);const n=[];if(e.provider==="server"){const o=((i=(r=t.app)==null?void 0:r.baseURL)==null?void 0:i.replace(/\/$/,""))??"";n.push(o+(e.localApiEndpoint||"/api/_nuxt_icon")),(e.fallbackToApi===!0||e.fallbackToApi==="client-only")&&n.push(e.iconifyApiEndpoint)}else n.push(e.iconifyApiEndpoint);async function s(o,a){try{const c=await $fetch(n[0]+"/"+a+".json",{query:{icons:o.join(",")}});if(!c||c.prefix!==a||!c.icons)throw new Error("Invalid data"+JSON.stringify(c));return c}catch(c){return console.error("Failed to load custom icons",c),null}}n_("",{resources:n});for(const o of e.customCollections||[])o&&GT(s,o)}}),aS=()=>{};var gh={};/**
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
 */const c_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(t,e){if(!t)throw er(e)},er=function(t){return new Error("Firebase Database ("+c_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const l_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},cS=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(h=64)),s.push(n[u],n[f],n[h],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(l_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new lS;const h=i<<2|a>>4;if(s.push(h),l!==64){const d=a<<4&240|l>>2;if(s.push(d),f!==64){const p=l<<6&192|f;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u_=function(t){const e=l_(t);return Bl.encodeByteArray(e,!0)},mo=function(t){return u_(t).replace(/\./g,"")},yo=function(t){try{return Bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uS(t){return f_(void 0,t)}function f_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fS(n)||(t[n]=f_(t[n],e[n]));return t}function fS(t){return t!=="__proto__"}/**
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
 */function hS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dS=()=>hS().__FIREBASE_DEFAULTS__,pS=()=>{if(typeof process>"u"||typeof gh>"u")return;const t=gh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yo(t[1]);return e&&JSON.parse(e)},$l=()=>{try{return aS()||dS()||pS()||gS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},h_=t=>{var e,n;return(n=(e=$l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_S=t=>{const e=h_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},d_=()=>{var t;return(t=$l())===null||t===void 0?void 0:t.config},p_=t=>{var e;return(e=$l())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function mS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mo(JSON.stringify(n)),mo(JSON.stringify(o)),""].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function yS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function g_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wS(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ES(){return c_.NODE_ADMIN===!0}function bS(){try{return typeof indexedDB=="object"}catch{return!1}}function CS(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const IS="FirebaseError";class jn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=IS,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?TS(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new jn(r,a,s)}}function TS(t,e){return t.replace(SS,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const SS=/\{\$([^}]+)}/g;/**
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
 */function zr(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
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
 */const __=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=zr(yo(i[0])||""),n=zr(yo(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},RS=function(t){const e=__(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kS=function(t){const e=__(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ks(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Uc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vo(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function os(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(_h(i)&&_h(o)){if(!os(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function _h(t){return t!==null&&typeof t=="object"}/**
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
 */function tr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Er(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class AS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let f=0;f<80;f++){f<40?f<20?(l=a^i&(o^a),u=1518500249):(l=i^o^a,u=1859775393):f<60?(l=i&o|a&(i|o),u=2400959708):(l=i^o^a,u=3395469782);const h=(r<<5|r>>>27)+l+c+u+s[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function PS(t,e){const n=new NS(t,e);return n.subscribe.bind(n)}class NS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");OS(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=$a),r.error===void 0&&(r.error=$a),r.complete===void 0&&(r.complete=$a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}function Vl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const xS=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,D(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ra=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class as{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class MS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new sa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DS(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:LS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LS(t){return t===zn?void 0:t}function DS(t){return t.instantiationMode==="EAGER"}/**
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
 */class FS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const US={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},HS=pe.INFO,jS={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},BS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=jS[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ql{constructor(e){this.name=e,this._logLevel=HS,this._logHandler=BS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?US[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const $S=(t,e)=>e.some(n=>t instanceof n);let mh,yh;function WS(){return mh||(mh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VS(){return yh||(yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,Hc=new WeakMap,y_=new WeakMap,Wa=new WeakMap,Kl=new WeakMap;function qS(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(An(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m_.set(n,t)}).catch(()=>{}),Kl.set(e,t),e}function KS(t){if(Hc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hc.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||y_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GS(t){jc=t(jc)}function zS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Va(this),e,...n);return y_.set(s,e.sort?e.sort():[e]),An(s)}:VS().includes(t)?function(...e){return t.apply(Va(this),e),An(m_.get(this))}:function(...e){return An(t.apply(Va(this),e))}}function YS(t){return typeof t=="function"?zS(t):(t instanceof IDBTransaction&&KS(t),$S(t,WS())?new Proxy(t,jc):t)}function An(t){if(t instanceof IDBRequest)return qS(t);if(Wa.has(t))return Wa.get(t);const e=YS(t);return e!==t&&(Wa.set(t,e),Kl.set(e,t)),e}const Va=t=>Kl.get(t);function QS(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=An(o);return s&&o.addEventListener("upgradeneeded",c=>{s(An(o.result),c.oldVersion,c.newVersion,An(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const JS=["get","getKey","getAll","getAllKeys","count"],XS=["put","add","delete","clear"],qa=new Map;function vh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=XS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||JS.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return qa.set(e,i),i}GS(t=>({...t,get:(e,n,s)=>vh(e,n)||t.get(e,n,s),has:(e,n)=>!!vh(e,n)||t.has(e,n)}));/**
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
 */class ZS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(e0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function e0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bc="@firebase/app",wh="0.11.4";/**
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
 */const sn=new ql("@firebase/app"),t0="@firebase/app-compat",n0="@firebase/analytics-compat",s0="@firebase/analytics",r0="@firebase/app-check-compat",i0="@firebase/app-check",o0="@firebase/auth",a0="@firebase/auth-compat",c0="@firebase/database",l0="@firebase/data-connect",u0="@firebase/database-compat",f0="@firebase/functions",h0="@firebase/functions-compat",d0="@firebase/installations",p0="@firebase/installations-compat",g0="@firebase/messaging",_0="@firebase/messaging-compat",m0="@firebase/performance",y0="@firebase/performance-compat",v0="@firebase/remote-config",w0="@firebase/remote-config-compat",E0="@firebase/storage",b0="@firebase/storage-compat",C0="@firebase/firestore",I0="@firebase/vertexai",T0="@firebase/firestore-compat",S0="firebase",R0="11.6.0";/**
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
 */const $c="[DEFAULT]",k0={[Bc]:"fire-core",[t0]:"fire-core-compat",[s0]:"fire-analytics",[n0]:"fire-analytics-compat",[i0]:"fire-app-check",[r0]:"fire-app-check-compat",[o0]:"fire-auth",[a0]:"fire-auth-compat",[c0]:"fire-rtdb",[l0]:"fire-data-connect",[u0]:"fire-rtdb-compat",[f0]:"fire-fn",[h0]:"fire-fn-compat",[d0]:"fire-iid",[p0]:"fire-iid-compat",[g0]:"fire-fcm",[_0]:"fire-fcm-compat",[m0]:"fire-perf",[y0]:"fire-perf-compat",[v0]:"fire-rc",[w0]:"fire-rc-compat",[E0]:"fire-gcs",[b0]:"fire-gcs-compat",[C0]:"fire-fst",[T0]:"fire-fst-compat",[I0]:"fire-vertex","fire-js":"fire-js",[S0]:"fire-js-all"};/**
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
 */const wo=new Map,A0=new Map,Wc=new Map;function Eh(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gs(t){const e=t.name;if(Wc.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;Wc.set(e,t);for(const n of wo.values())Eh(n,t);for(const n of A0.values())Eh(n,t);return!0}function Gl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const P0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new gi("app","Firebase",P0);/**
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
 */class N0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const nr=R0;function v_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$c,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Pn.create("bad-app-name",{appName:String(r)});if(n||(n=d_()),!n)throw Pn.create("no-options");const i=wo.get(r);if(i){if(os(n,i.options)&&os(s,i.config))return i;throw Pn.create("duplicate-app",{appName:r})}const o=new FS(r);for(const c of Wc.values())o.addComponent(c);const a=new N0(n,s,o);return wo.set(r,a),a}function w_(t=$c){const e=wo.get(t);if(!e&&t===$c&&d_())return v_();if(!e)throw Pn.create("no-app",{appName:t});return e}function Nn(t,e,n){var s;let r=(s=k0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}Gs(new as(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const O0="firebase-heartbeat-database",x0=1,Yr="firebase-heartbeat-store";let Ka=null;function E_(){return Ka||(Ka=QS(O0,x0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Ka}async function M0(t){try{const n=(await E_()).transaction(Yr),s=await n.objectStore(Yr).get(b_(t));return await n.done,s}catch(e){if(e instanceof jn)sn.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(n.message)}}}async function bh(t,e){try{const s=(await E_()).transaction(Yr,"readwrite");await s.objectStore(Yr).put(e,b_(t)),await s.done}catch(n){if(n instanceof jn)sn.warn(n.message);else{const s=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(s.message)}}}function b_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const L0=1024,D0=30;class F0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ch();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>D0){const o=j0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){sn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ch(),{heartbeatsToSend:s,unsentEntries:r}=U0(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return sn.warn(n),""}}}function Ch(){return new Date().toISOString().substring(0,10)}function U0(t,e=L0){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ih(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ih(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class H0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bS()?CS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ih(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}function j0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function B0(t){Gs(new as("platform-logger",e=>new ZS(e),"PRIVATE")),Gs(new as("heartbeat",e=>new F0(e),"PRIVATE")),Nn(Bc,wh,t),Nn(Bc,wh,"esm2017"),Nn("fire-js","")}B0("");var $0="firebase",W0="11.6.0";/**
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
 */Nn($0,W0,"app");function zl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function C_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const V0=C_,I_=new gi("auth","Firebase",C_());/**
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
 */const Eo=new ql("@firebase/auth");function q0(t,...e){Eo.logLevel<=pe.WARN&&Eo.warn(`Auth (${nr}): ${t}`,...e)}function zi(t,...e){Eo.logLevel<=pe.ERROR&&Eo.error(`Auth (${nr}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw Yl(t,...e)}function Ht(t,...e){return Yl(t,...e)}function T_(t,e,n){const s=Object.assign(Object.assign({},V0()),{[e]:n});return new gi("auth","Firebase",s).create(e,{appName:t.name})}function en(t){return T_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return I_.create(t,...e)}function X(t,e,...n){if(!t)throw Yl(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zi(e),new Error(e)}function rn(t,e){t||Qt(e)}/**
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
 */function Vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function K0(){return Th()==="http:"||Th()==="https:"}function Th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function G0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(K0()||vS()||"connection"in navigator)?navigator.onLine:!0}function z0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Wl()||g_()}get(){return G0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ql(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class S_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Y0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Q0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],J0=new _i(3e4,6e4);function Bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,s,r={}){return R_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=tr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return yS()||(l.referrerPolicy="no-referrer"),S_.fetch()(await k_(t,t.config.apiHost,n,a),l)})}async function R_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Y0),e);try{const r=new Z0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Di(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Di(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Di(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Di(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw T_(t,u,l);Nt(t,u)}}catch(r){if(r instanceof jn)throw r;Nt(t,"network-request-failed",{message:String(r)})}}async function mi(t,e,n,s,r={}){const i=await $n(t,e,n,s,r);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function k_(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Ql(t.config,r):`${t.config.apiScheme}://${r}`;return Q0.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function X0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Z0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),J0.get())})}}function Di(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ht(t,e,s);return r.customData._tokenResponse=n,r}function Sh(t){return t!==void 0&&t.enterprise!==void 0}class eR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return X0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tR(t,e){return $n(t,"GET","/v2/recaptchaConfig",Bn(t,e))}/**
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
 */async function nR(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function bo(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Nr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sR(t,e=!1){const n=Ge(t),s=await n.getIdToken(e),r=Jl(s);X(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Nr(Ga(r.auth_time)),issuedAtTime:Nr(Ga(r.iat)),expirationTime:Nr(Ga(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ga(t){return Number(t)*1e3}function Jl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const r=yo(n);return r?JSON.parse(r):(zi("Failed to decode base64 JWT payload"),null)}catch(r){return zi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Rh(t){const e=Jl(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof jn&&rR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function rR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class iR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Co(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Qr(t,bo(n,{idToken:s}));X(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?A_(i.providerUserInfo):[],a=aR(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function oR(t){const e=Ge(t);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aR(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function A_(t){return t.map(e=>{var{providerId:n}=e,s=zl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function cR(t,e){const n=await R_(t,{},async()=>{const s=tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await k_(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",S_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lR(t,e){return $n(t,"POST","/v2/accounts:revokeToken",Bn(t,e))}/**
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
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Rh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await cR(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ds;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(X(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function gn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class It{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=zl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qr(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sR(this,e)}reload(){return oR(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Co(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(en(this.auth));const e=await this.getIdToken();return await Qr(this,nR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:v,isAnonymous:C,providerData:T,stsTokenManager:S}=n;X(_&&S,e,"internal-error");const M=Ds.fromJSON(this.name,S);X(typeof _=="string",e,"internal-error"),gn(f,e.name),gn(h,e.name),X(typeof v=="boolean",e,"internal-error"),X(typeof C=="boolean",e,"internal-error"),gn(d,e.name),gn(p,e.name),gn(g,e.name),gn(w,e.name),gn(b,e.name),gn(E,e.name);const R=new It({uid:_,auth:e,email:h,emailVerified:v,displayName:f,isAnonymous:C,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:M,createdAt:b,lastLoginAt:E});return T&&Array.isArray(T)&&(R.providerData=T.map(P=>Object.assign({},P))),w&&(R._redirectEventId=w),R}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ds;r.updateFromServerResponse(n);const i=new It({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Co(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];X(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?A_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Ds;a.updateFromIdToken(s);const c=new It({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new qc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const kh=new Map;function Jt(t){rn(t instanceof Function,"Expected a class definition");let e=kh.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kh.set(t,e),e)}/**
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
 */class P_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}P_.type="NONE";const Ah=P_;/**
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
 */function Yi(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Yi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Yi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await bo(this.auth,{idToken:e}).catch(()=>{});return n?It._fromGetAccountInfoResponse(this.auth,n,e):null}return It._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Fs(Jt(Ah),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Jt(Ah);const o=Yi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const h=await bo(e,{idToken:u}).catch(()=>{});if(!h)break;f=await It._fromGetAccountInfoResponse(e,h,u)}else f=It._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Fs(i,e,s))}}/**
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
 */function Ph(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D_(e))return"Blackberry";if(F_(e))return"Webos";if(O_(e))return"Safari";if((e.includes("chrome/")||x_(e))&&!e.includes("edge/"))return"Chrome";if(L_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function N_(t=Xe()){return/firefox\//i.test(t)}function O_(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x_(t=Xe()){return/crios\//i.test(t)}function M_(t=Xe()){return/iemobile/i.test(t)}function L_(t=Xe()){return/android/i.test(t)}function D_(t=Xe()){return/blackberry/i.test(t)}function F_(t=Xe()){return/webos/i.test(t)}function Xl(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uR(t=Xe()){var e;return Xl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fR(){return wS()&&document.documentMode===10}function U_(t=Xe()){return Xl(t)||L_(t)||F_(t)||D_(t)||/windows phone/i.test(t)||M_(t)}/**
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
 */function H_(t,e=[]){let n;switch(t){case"Browser":n=Ph(Xe());break;case"Worker":n=`${Ph(Xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${s}`}/**
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
 */class hR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function dR(t,e={}){return $n(t,"GET","/v2/passwordPolicy",Bn(t,e))}/**
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
 */const pR=6;class gR{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:pR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class _R{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nh(this),this.idTokenSubscription=new Nh(this),this.beforeStateQueue=new hR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bo(this,{idToken:e}),s=await It._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=z0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(en(this));const n=e?Ge(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dR(this),n=new gR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await lR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=H_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&q0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _s(t){return Ge(t)}class Nh{constructor(e){this.auth=e,this.observer=null,this.addObserver=PS(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ia={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mR(t){ia=t}function j_(t){return ia.loadJS(t)}function yR(){return ia.recaptchaEnterpriseScript}function vR(){return ia.gapiScript}function wR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ER{constructor(){this.enterprise=new bR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class bR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const CR="recaptcha-enterprise",B_="NO_RECAPTCHA";class IR{constructor(e){this.type=CR,this.auth=_s(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{tR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new eR(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Sh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(B_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ER().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Sh(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=yR();c.length!==0&&(c+=a),j_(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Oh(t,e,n,s=!1,r=!1){const i=new IR(t);let o;if(r)o=B_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Kc(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Oh(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Oh(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function TR(t,e){const n=Gl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(os(i,e??{}))return r;Nt(r,"already-initialized")}return n.initialize({options:e})}function SR(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function RR(t,e,n){const s=_s(t);X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=$_(e),{host:o,port:a}=kR(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){X(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),X(os(l,s.config.emulator)&&os(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,AR()}function $_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kR(t){const e=$_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:xh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:xh(o)}}}function xh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Zl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function PR(t,e){return $n(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NR(t,e){return mi(t,"POST","/v1/accounts:signInWithPassword",Bn(t,e))}/**
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
 */async function OR(t,e){return mi(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}async function xR(t,e){return mi(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}/**
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
 */class Jr extends Zl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Jr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Jr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kc(e,n,"signInWithPassword",NR);case"emailLink":return OR(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kc(e,s,"signUpPassword",PR);case"emailLink":return xR(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Us(t,e){return mi(t,"POST","/v1/accounts:signInWithIdp",Bn(t,e))}/**
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
 */const MR="http://localhost";class cs extends Zl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=zl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new cs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Us(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:MR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tr(n)}return e}}/**
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
 */function LR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DR(t){const e=wr(Er(t)).link,n=e?wr(Er(e)).deep_link_id:null,s=wr(Er(t)).deep_link_id;return(s?wr(Er(s)).link:null)||s||n||e||t}class eu{constructor(e){var n,s,r,i,o,a;const c=wr(Er(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,f=LR((r=c.mode)!==null&&r!==void 0?r:null);X(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=DR(e);try{return new eu(n)}catch{return null}}}/**
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
 */class sr{constructor(){this.providerId=sr.PROVIDER_ID}static credential(e,n){return Jr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=eu.parseLink(n);return X(s,"argument-error"),Jr._fromEmailAndCode(e,s.code,s.tenantId)}}sr.PROVIDER_ID="password";sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class W_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yi extends W_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends yi{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cs._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class In extends yi{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class Tn extends yi{constructor(){super("twitter.com")}static credential(e,n){return cs._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */async function FR(t,e){return mi(t,"POST","/v1/accounts:signUp",Bn(t,e))}/**
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
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await It._fromIdTokenResponse(e,s,r),o=Mh(s);return new ls({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Mh(s);return new ls({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Mh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Io extends jn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Io(e,n,s,r)}}function V_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(t,i,e,s):i})}async function UR(t,e,n=!1){const s=await Qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",s)}/**
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
 */async function HR(t,e,n=!1){const{auth:s}=t;if(mt(s.app))return Promise.reject(en(s));const r="reauthenticate";try{const i=await Qr(t,V_(s,r,e,t),n);X(i.idToken,s,"internal-error");const o=Jl(i.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),ls._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(s,"user-mismatch"),i}}/**
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
 */async function q_(t,e,n=!1){if(mt(t.app))return Promise.reject(en(t));const s="signIn",r=await V_(t,s,e),i=await ls._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function jR(t,e){return q_(_s(t),e)}/**
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
 */async function K_(t){const e=_s(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function KO(t,e,n){if(mt(t.app))return Promise.reject(en(t));const s=_s(t),o=await Kc(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&K_(t),c}),a=await ls._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function GO(t,e,n){return mt(t.app)?Promise.reject(en(t)):jR(Ge(t),sr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&K_(t),s})}/**
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
 */function BR(t,e){return Ge(t).setPersistence(e)}function $R(t,e,n,s){return Ge(t).onIdTokenChanged(e,n,s)}function WR(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function VR(t,e,n,s){return Ge(t).onAuthStateChanged(e,n,s)}function zO(t){return Ge(t).signOut()}const To="__sak";/**
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
 */class G_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(To,"1"),this.storage.removeItem(To),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qR=1e3,KR=10;class z_ extends G_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=U_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);fR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,KR):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}z_.type="LOCAL";const Y_=z_;/**
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
 */class Q_ extends G_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Q_.type="SESSION";const J_=Q_;/**
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
 */function GR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new oa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await GR(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oa.receivers=[];/**
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
 */function tu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=tu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jt(){return window}function YR(t){jt().location.href=t}/**
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
 */function X_(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function QR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XR(){return X_()?self:null}/**
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
 */const Z_="firebaseLocalStorageDb",ZR=1,So="firebaseLocalStorage",em="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(t,e){return t.transaction([So],e?"readwrite":"readonly").objectStore(So)}function ek(){const t=indexedDB.deleteDatabase(Z_);return new vi(t).toPromise()}function Gc(){const t=indexedDB.open(Z_,ZR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(So,{keyPath:em})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(So)?e(s):(s.close(),await ek(),e(await Gc()))})})}async function Lh(t,e,n){const s=aa(t,!0).put({[em]:e,value:n});return new vi(s).toPromise()}async function tk(t,e){const n=aa(t,!1).get(e),s=await new vi(n).toPromise();return s===void 0?null:s.value}function Dh(t,e){const n=aa(t,!0).delete(e);return new vi(n).toPromise()}const nk=800,sk=3;class tm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>sk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return X_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oa._getInstance(XR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QR(),!this.activeServiceWorker)return;this.sender=new zR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await Lh(e,To,"1"),await Dh(e,To),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>tk(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=aa(r,!1).getAll();return new vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tm.type="LOCAL";const rk=tm;new _i(3e4,6e4);/**
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
 */function ik(t,e){return e?Jt(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nu extends Zl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ok(t){return q_(t.auth,new nu(t),t.bypassAuthState)}function ak(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),HR(n,new nu(t),t.bypassAuthState)}async function ck(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),UR(n,new nu(t),t.bypassAuthState)}/**
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
 */class nm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ok;case"linkViaPopup":case"linkViaRedirect":return ck;case"reauthViaPopup":case"reauthViaRedirect":return ak;default:Nt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lk=new _i(2e3,1e4);class ks extends nm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lk.get())};e()}}ks.currentPopupAction=null;/**
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
 */const uk="pendingRedirect",Qi=new Map;class fk extends nm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Qi.get(this.auth._key());if(!e){try{const s=await hk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Qi.set(this.auth._key(),e)}return this.bypassAuthState||Qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hk(t,e){const n=gk(e),s=pk(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function dk(t,e){Qi.set(t._key(),e)}function pk(t){return Jt(t._redirectPersistence)}function gk(t){return Yi(uk,t.config.apiKey,t.name)}async function _k(t,e,n=!1){if(mt(t.app))return Promise.reject(en(t));const s=_s(t),r=ik(s,e),o=await new fk(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const mk=10*60*1e3;class yk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!sm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fh(e))}saveEventToCache(e){this.cachedEventUids.add(Fh(e)),this.lastProcessedEventTime=Date.now()}}function Fh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sm(t);default:return!1}}/**
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
 */async function wk(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
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
 */const Ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bk=/^https?/;async function Ck(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wk(t);for(const n of e)try{if(Ik(n))return}catch{}Nt(t,"unauthorized-domain")}function Ik(t){const e=Vc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!bk.test(n))return!1;if(Ek.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Tk=new _i(3e4,6e4);function Uh(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Sk(t){return new Promise((e,n)=>{var s,r,i;function o(){Uh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uh(),n(Ht(t,"network-request-failed"))},timeout:Tk.get()})}if(!((r=(s=jt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)o();else{const a=wR("iframefcb");return jt()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},j_(`${vR()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ji=null,e})}let Ji=null;function Rk(t){return Ji=Ji||Sk(t),Ji}/**
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
 */const kk=new _i(5e3,15e3),Ak="__/auth/iframe",Pk="emulator/auth/iframe",Nk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ok=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xk(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ql(e,Pk):`https://${t.config.authDomain}/${Ak}`,s={apiKey:e.apiKey,appName:t.name,v:nr},r=Ok.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${tr(s).slice(1)}`}async function Mk(t){const e=await Rk(t),n=jt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:xk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=jt().setTimeout(()=>{i(o)},kk.get());function c(){jt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Lk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dk=500,Fk=600,Uk="_blank",Hk="http://localhost";class Hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jk(t,e,n,s=Dk,r=Fk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Lk),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Xe().toLowerCase();n&&(a=x_(l)?Uk:n),N_(l)&&(e=e||Hk,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[d,p])=>`${h}${d}=${p},`,"");if(uR(l)&&a!=="_self")return Bk(e||"",a),new Hh(null);const f=window.open(e||"",a,u);X(f,t,"popup-blocked");try{f.focus()}catch{}return new Hh(f)}function Bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const $k="__/auth/handler",Wk="emulator/auth/handler",Vk=encodeURIComponent("fac");async function jh(t,e,n,s,r,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:nr,eventId:r};if(e instanceof W_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Uc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof yi){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Vk}=${encodeURIComponent(c)}`:"";return`${qk(t)}?${tr(a).slice(1)}${l}`}function qk({config:t}){return t.emulator?Ql(t,Wk):`https://${t.authDomain}/${$k}`}/**
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
 */const za="webStorageSupport";class Kk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J_,this._completeRedirectFn=_k,this._overrideRedirectResult=dk}async _openPopup(e,n,s,r){var i;rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jh(e,n,s,Vc(),r);return jk(e,o,tu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await jh(e,n,s,Vc(),r);return YR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(rn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Mk(e),s=new yk(e);return n.register("authEvent",r=>(X(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(za,{type:za},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[za];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ck(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return U_()||O_()||Xl()}}const Gk=Kk;var Bh="@firebase/auth",$h="1.10.0";/**
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
 */class zk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Yk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qk(t){Gs(new as("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H_(t)},l=new _R(s,r,i,c);return SR(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Gs(new as("auth-internal",e=>{const n=_s(e.getProvider("auth").getImmediate());return(s=>new zk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(Bh,$h,Yk(t)),Nn(Bh,$h,"esm2017")}/**
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
 */const Jk=5*60,Xk=p_("authIdTokenMaxAge")||Jk;let Wh=null;const Zk=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Xk)return;const r=n==null?void 0:n.token;Wh!==r&&(Wh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function eA(t=w_()){const e=Gl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TR(t,{popupRedirectResolver:Gk,persistence:[rk,Y_,J_]}),s=p_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Zk(i.toString());WR(n,o,()=>o(n.currentUser)),$R(n,a=>o(a))}}const r=h_("auth");return r&&RR(n,`http://${r}`),n}function tA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mR({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ht("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",tA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qk("Browser");var Vh={};const qh="@firebase/database",Kh="1.0.14";/**
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
 */let rm="";function nA(t){rm=t}/**
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
 */class sA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:zr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class rA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const im=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sA(e)}}catch{}return new rA},Qn=im("localStorage"),iA=im("sessionStorage");/**
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
 */const Hs=new ql("@firebase/database"),oA=function(){let t=1;return function(){return t++}}(),om=function(t){const e=xS(t),n=new AS;n.update(e);const s=n.digest();return Bl.encodeByteArray(s)},wi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=wi.apply(null,s):typeof s=="object"?e+=Oe(s):e+=s,e+=" "}return e};let Or=null,Gh=!0;const aA=function(t,e){D(!0,"Can't turn on custom loggers persistently."),Hs.logLevel=pe.VERBOSE,Or=Hs.log.bind(Hs)},qe=function(...t){if(Gh===!0&&(Gh=!1,Or===null&&iA.get("logging_enabled")===!0&&aA()),Or){const e=wi.apply(null,t);Or(e)}},Ei=function(t){return function(...e){qe(t,...e)}},zc=function(...t){const e="FIREBASE INTERNAL ERROR: "+wi(...t);Hs.error(e)},on=function(...t){const e=`FIREBASE FATAL ERROR: ${wi(...t)}`;throw Hs.error(e),new Error(e)},rt=function(...t){const e="FIREBASE WARNING: "+wi(...t);Hs.warn(e)},cA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},am=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},lA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zs="[MIN_NAME]",us="[MAX_NAME]",rr=function(t,e){if(t===e)return 0;if(t===zs||e===us)return-1;if(e===zs||t===us)return 1;{const n=zh(t),s=zh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},uA=function(t,e){return t===e?0:t<e?-1:1},pr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},su=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Oe(e[s]),n+=":",n+=su(t[e[s]]);return n+="}",n},cm=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function it(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const lm=function(t){D(!am(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(r?1:0),l.reverse();const u=l.join("");let f="";for(c=0;c<64;c+=8){let h=parseInt(u.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},fA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const pA=new RegExp("^-?(0*)\\d{1,10}$"),gA=-2147483648,_A=2147483647,zh=function(t){if(pA.test(t)){const e=Number(t);if(e>=gA&&e<=_A)return e}return null},ir=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw rt("Exception was thrown by user callback.",n),e},Math.floor(0))}},mA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class yA{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,mt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){rt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class vA{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',rt(e)}}class Xi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xi.OWNER="owner";/**
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
 */const ru="5",um="v",fm="s",hm="r",dm="f",pm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gm="ls",_m="p",Yc="ac",mm="websocket",ym="long_polling";/**
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
 */class vm{constructor(e,n,s,r,i=!1,o="",a=!1,c=!1,l=null){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wm(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===mm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ym)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wA(t)&&(n.ns=t.namespace);const r=[];return it(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class EA{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return uS(this.counters_)}}/**
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
 */const Ya={},Qa={};function iu(t){const e=t.toString();return Ya[e]||(Ya[e]=new EA),Ya[e]}function bA(t,e){const n=t.toString();return Qa[n]||(Qa[n]=e()),Qa[n]}/**
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
 */class CA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&ir(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Yh="start",IA="close",TA="pLPCommand",SA="pRTLPCB",Em="id",bm="pw",Cm="ser",RA="cb",kA="seg",AA="ts",PA="d",NA="dframe",Im=1870,Tm=30,OA=Im-Tm,xA=25e3,MA=3e4;class As{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ei(e),this.stats_=iu(n),this.urlFn=c=>(this.appCheckToken&&(c[Yc]=this.appCheckToken),wm(n,ym,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new CA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(MA)),lA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ou((...i)=>{const[o,a,c,l,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yh)this.id=a,this.password=c;else if(o===IA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Yh]="t",s[Cm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[RA]=this.scriptTagHolder.uniqueCallbackIdentifier),s[um]=ru,this.transportSessionId&&(s[fm]=this.transportSessionId),this.lastSessionId&&(s[gm]=this.lastSessionId),this.applicationId&&(s[_m]=this.applicationId),this.appCheckToken&&(s[Yc]=this.appCheckToken),typeof location<"u"&&location.hostname&&pm.test(location.hostname)&&(s[hm]=dm);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){As.forceAllow_=!0}static forceDisallow(){As.forceDisallow_=!0}static isAvailable(){return As.forceAllow_?!0:!As.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fA()&&!hA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=u_(n),r=cm(s,OA);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[NA]="t",s[Em]=e,s[bm]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ou{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=oA(),window[TA+this.uniqueCallbackIdentifier]=e,window[SA+this.uniqueCallbackIdentifier]=n,this.myIFrame=ou.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Em]=this.myID,e[bm]=this.myPW,e[Cm]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tm+s.length<=Im;){const o=this.pendingSegs.shift();s=s+"&"+kA+r+"="+o.seg+"&"+AA+r+"="+o.ts+"&"+PA+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(xA)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const LA=16384,DA=45e3;let Ro=null;typeof MozWebSocket<"u"?Ro=MozWebSocket:typeof WebSocket<"u"&&(Ro=WebSocket);class Ct{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ei(this.connId),this.stats_=iu(n),this.connURL=Ct.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[um]=ru,typeof location<"u"&&location.hostname&&pm.test(location.hostname)&&(o[hm]=dm),n&&(o[fm]=n),s&&(o[gm]=s),r&&(o[Yc]=r),i&&(o[_m]=i),wm(e,mm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qn.set("previous_websocket_failure",!0);try{let s;ES(),this.mySock=new Ro(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ro!==null&&!Ct.forceDisallow_}static previouslyFailed(){return Qn.isInMemoryStorage||Qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=zr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=cm(n,LA);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(DA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
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
 */class Xr{static get ALL_TRANSPORTS(){return[As,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ct&&Ct.isAvailable();let s=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ct];else{const r=this.transports_=[];for(const i of Xr.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Xr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xr.globalTransportInitialized_=!1;/**
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
 */const FA=6e4,UA=5e3,HA=10*1024,jA=100*1024,Ja="t",Qh="d",BA="s",Jh="r",$A="e",Xh="o",Zh="a",ed="n",td="p",WA="h";class VA{constructor(e,n,s,r,i,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ei("c:"+this.id+":"),this.transportManager_=new Xr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=xr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ja in e){const n=e[Ja];n===Zh?this.upgradeIfSecondaryHealthy_():n===Jh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=pr("t",e),s=pr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:td,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ed,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=pr("t",e),s=pr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=pr(Ja,e);if(Qh in e){const s=e[Qh];if(n===WA){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===ed){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BA?this.onConnectionShutdown_(s):n===Jh?this.onReset_(s):n===$A?zc("Server Error: "+s):n===Xh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ru!==s&&rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),xr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(FA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(UA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:td,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Sm{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Rm{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ko extends Rm{static getInstance(){return new ko}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const nd=32,sd=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new _e("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ln(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function km(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function qA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Am(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Pm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function xe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new _e(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Je(t,e){const n=ie(t),s=ie(e);if(n===null)return e;if(n===s)return Je(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Nm(t,e){if(Ln(t)!==Ln(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ln(t)>Ln(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class KA{constructor(e,n){this.errorPrefix_=n,this.parts_=Am(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ra(this.parts_[s]);Om(this)}}function GA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ra(e),Om(t)}function zA(t){const e=t.parts_.pop();t.byteLength_-=ra(e),t.parts_.length>0&&(t.byteLength_-=1)}function Om(t){if(t.byteLength_>sd)throw new Error(t.errorPrefix_+"has a key path longer than "+sd+" bytes ("+t.byteLength_+").");if(t.parts_.length>nd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nd+") or object contains a cycle "+Yn(t))}function Yn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class au extends Rm{static getInstance(){return new au}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const gr=1e3,YA=60*5*1e3,rd=30*1e3,QA=1.3,JA=3e4,XA="server_kill",id=3;class tn extends Sm{constructor(e,n,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=tn.nextPersistentConnectionId_++,this.log_=Ei("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gr,this.maxReconnectDelay_=YA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");au.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ko.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Oe(i)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new sa,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,l=a.s;tn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const s=Ks(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=RS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zc("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>JA&&(this.reconnectDelay_=gr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+tn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(f){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new VA(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{rt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(XA)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&rt(f),c())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Uc(this.interruptReasons_)&&(this.reconnectDelay_=gr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>su(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=id&&(this.reconnectDelay_=rd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=id&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+rm.replace(/\./g,"-")]=1,Wl()?e["framework.cordova"]=1:g_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ko.getInstance().currentlyOnline();return Uc(this.interruptReasons_)&&e}}tn.nextPersistentConnectionId_=0;tn.nextConnectionId_=0;/**
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
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
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
 */class ca{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(zs,e),r=new ne(zs,n);return this.compare(s,r)!==0}minPost(){return ne.MIN}}/**
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
 */let Fi;class xm extends ca{static get __EMPTY_NODE(){return Fi}static set __EMPTY_NODE(e){Fi=e}compare(e,n){return rr(e.name,n.name)}isDefinedOn(e){throw er("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(us,Fi)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,Fi)}toString(){return".key"}}const js=new xm;/**
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
 */class Ui{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??De.RED,this.left=r??nt.EMPTY_NODE,this.right=i??nt.EMPTY_NODE}copy(e,n,s,r,i){return new De(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class ZA{copy(e,n,s,r,i){return this}insert(e,n,s){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nt{constructor(e,n=nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ui(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ui(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ui(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ui(this.root_,null,this.comparator_,!0,e)}}nt.EMPTY_NODE=new ZA;/**
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
 */function eP(t,e){return rr(t.name,e.name)}function cu(t,e){return rr(t,e)}/**
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
 */let Qc;function tP(t){Qc=t}const Mm=function(t){return typeof t=="number"?"number:"+lm(t):"string:"+t},Lm=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else D(t===Qc||t.isEmpty(),"priority of unexpected type.");D(t===Qc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let od;class Le{static set __childrenNodeConstructor(e){od=e}static get __childrenNodeConstructor(){return od}constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Lm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ie(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Ln(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=lm(this.value_):e+=this.value_,this.lazyHash_=om(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Le.VALUE_TYPE_ORDER.indexOf(n),i=Le.VALUE_TYPE_ORDER.indexOf(s);return D(r>=0,"Unknown leaf type: "+n),D(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Dm,Fm;function nP(t){Dm=t}function sP(t){Fm=t}class rP extends ca{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?rr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(us,new Le("[PRIORITY-POST]",Fm))}makePost(e,n){const s=Dm(e);return new ne(n,new Le("[PRIORITY-POST]",s))}toString(){return".priority"}}const Re=new rP;/**
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
 */const iP=Math.log(2);class oP{constructor(e){const n=i=>parseInt(Math.log(i)/iP,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ao=function(t,e,n,s){t.sort(e);const r=function(c,l){const u=l-c;let f,h;if(u===0)return null;if(u===1)return f=t[c],h=n?n(f):f,new De(h,f.node,De.BLACK,null,null);{const d=parseInt(u/2,10)+c,p=r(c,d),g=r(d+1,l);return f=t[d],h=n?n(f):f,new De(h,f.node,De.BLACK,p,g)}},i=function(c){let l=null,u=null,f=t.length;const h=function(p,g){const w=f-p,b=f;f-=p;const E=r(w+1,b),_=t[w],v=n?n(_):_;d(new De(v,_.node,g,null,E))},d=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const g=c.nextBitIsOne(),w=Math.pow(2,c.count-(p+1));g?h(w,De.BLACK):(h(w,De.BLACK),h(w,De.RED))}return u},o=new oP(t.length),a=i(o);return new nt(s||e,a)};/**
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
 */let Xa;const Cs={};class Xt{static get Default(){return D(Cs&&Re,"ChildrenNode.ts has not been loaded"),Xa=Xa||new Xt({".priority":Cs},{".priority":Re}),Xa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ks(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nt?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){D(e!==js,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(ne.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Ao(s,e.getCompare()):a=Cs;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Xt(u,l)}addToIndexes(e,n){const s=vo(this.indexes_,(r,i)=>{const o=Ks(this.indexSet_,i);if(D(o,"Missing index implementation for "+i),r===Cs)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ne.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ao(a,o.getCompare())}else return Cs;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new ne(e.name,a))),c.insert(e,e.node)}});return new Xt(s,this.indexSet_)}removeFromIndexes(e,n){const s=vo(this.indexes_,r=>{if(r===Cs)return r;{const i=n.get(e.name);return i?r.remove(new ne(e.name,i)):r}});return new Xt(s,this.indexSet_)}}/**
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
 */let _r;class Z{static get EMPTY_NODE(){return _r||(_r=new Z(new nt(cu),null,Xt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Lm(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_r}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_r:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?_r:this.priorityNode_;return new Z(r,o,i)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{D(ie(e)!==".priority"||Ln(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Re,(o,a)=>{n[o]=a.val(e),s++,i&&Z.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mm(this.getPriority().val())+":"),this.forEachChild(Re,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":om(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new ne(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ne.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bi?-1:0}withIndex(e){if(e===js||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===js||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Re),r=n.getIterator(Re);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===js?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class aP extends Z{constructor(){super(new nt(cu),Z.EMPTY_NODE,Xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const bi=new aP;Object.defineProperties(ne,{MIN:{value:new ne(zs,Z.EMPTY_NODE)},MAX:{value:new ne(us,bi)}});xm.__EMPTY_NODE=Z.EMPTY_NODE;Le.__childrenNodeConstructor=Z;tP(bi);sP(bi);/**
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
 */const cP=!0;function Fe(t,e=null){if(t===null)return Z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,Fe(e))}if(!(t instanceof Array)&&cP){const n=[];let s=!1;if(it(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Fe(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new ne(o,c)))}}),n.length===0)return Z.EMPTY_NODE;const i=Ao(n,eP,o=>o.name,cu);if(s){const o=Ao(n,Re.getCompare());return new Z(i,Fe(e),new Xt({".priority":o},{".priority":Re}))}else return new Z(i,Fe(e),Xt.Default)}else{let n=Z.EMPTY_NODE;return it(t,(s,r)=>{if(un(t,s)&&s.substring(0,1)!=="."){const i=Fe(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Fe(e))}}nP(Fe);/**
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
 */class lP extends ca{constructor(e){super(),this.indexPath_=e,D(!se(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?rr(e.name,n.name):i}makePost(e,n){const s=Fe(e),r=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,r)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,bi);return new ne(us,e)}toString(){return Am(this.indexPath_,0).join("/")}}/**
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
 */class uP extends ca{compare(e,n){const s=e.node.compareTo(n.node);return s===0?rr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=Fe(e);return new ne(n,s)}toString(){return".value"}}const fP=new uP;/**
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
 */function Um(t){return{type:"value",snapshotNode:t}}function Ys(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ei(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class lu{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Zr(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ys(n,s)):o.trackChildChange(ei(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Re,(r,i)=>{n.hasChild(r)||s.trackChildChange(Zr(r,i))}),n.isLeafNode()||n.forEachChild(Re,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(ei(r,i,o))}else s.trackChildChange(Ys(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ti{constructor(e){this.indexedFilter_=new lu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ti.getStartPost_(e),this.endPost_=ti.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new ne(n,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Z.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(Z.EMPTY_NODE);const i=this;return n.forEachChild(Re,(o,a)=>{i.matches(new ne(o,a))||(r=r.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class dP{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ti(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new ne(n,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=Z.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(Z.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,d)=>f(d,h)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const c=new ne(n,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const d=h==null?1:o(h,c);if(u&&!s.isEmpty()&&d>=0)return i!=null&&i.trackChildChange(ei(n,s,f)),a.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(Zr(n,f));const g=a.updateImmediateChild(n,Z.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i!=null&&i.trackChildChange(Ys(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return s.isEmpty()?e:u&&o(l,c)>=0?(i!=null&&(i.trackChildChange(Zr(l.name,l.node)),i.trackChildChange(Ys(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(l.name,Z.EMPTY_NODE)):e}}/**
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
 */class uu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zs}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:us}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new uu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pP(t){return t.loadsAllData()?new lu(t.getIndex()):t.hasLimit()?new dP(t):new ti(t)}function ad(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Re?n="$priority":t.index_===fP?n="$value":t.index_===js?n="$key":(D(t.index_ instanceof lP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Oe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Oe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Oe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Re&&(e.i=t.index_.toString()),e}/**
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
 */class Po extends Sm{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Ei("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Po.getListenId_(e,s),a={};this.listens_[o]=a;const c=ad(e._queryParams);this.restRequest_(i+".json",c,(l,u)=>{let f=u;if(l===404&&(f=null,l=null),l===null&&this.onDataUpdate_(i,f,!1,s),Ks(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",r(h,null)}})}unlisten(e,n){const s=Po.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ad(e._queryParams),s=e._path.toString(),r=new sa;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=zr(a.responseText)}catch{rt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&rt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class gP{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function No(){return{value:null,children:new Map}}function Hm(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ie(e);t.children.has(s)||t.children.set(s,No());const r=t.children.get(s);e=ve(e),Hm(r,e,n)}}function Jc(t,e,n){t.value!==null?n(e,t.value):_P(t,(s,r)=>{const i=new _e(e.toString()+"/"+s);Jc(r,i,n)})}function _P(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class mP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&it(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const ld=10*1e3,yP=30*1e3,vP=5*60*1e3;class wP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mP(e);const s=ld+(yP-ld)*Math.random();xr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;it(e,(r,i)=>{i>0&&un(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),xr(this.reportStats_.bind(this),Math.floor(Math.random()*2*vP))}}/**
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
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function jm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Oo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=jm()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Oo(le(),n,this.revert)}}else return D(ie(this.path)===e,"operationForChild called for unrelated child."),new Oo(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class ni{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new ni(this.source,le()):new ni(this.source,ve(this.path))}}/**
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
 */class fs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return se(this.path)?new fs(this.source,le(),this.snap.getImmediateChild(e)):new fs(this.source,ve(this.path),this.snap)}}/**
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
 */class si{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=St.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new fs(this.source,le(),n.value):new si(this.source,le(),n)}else return D(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new si(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Dn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class EP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bP(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(hP(o.childName,o.snapshotNode))}),mr(t,r,"child_removed",e,s,n),mr(t,r,"child_added",e,s,n),mr(t,r,"child_moved",i,s,n),mr(t,r,"child_changed",e,s,n),mr(t,r,"value",e,s,n),r}function mr(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,c)=>IP(t,a,c)),o.forEach(a=>{const c=CP(t,a,i);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function CP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function IP(t,e,n){if(e.childName==null||n.childName==null)throw er("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),r=new ne(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function la(t,e){return{eventCache:t,serverCache:e}}function Mr(t,e,n,s){return la(new Dn(e,n,s),t.serverCache)}function Bm(t,e,n,s){return la(t.eventCache,new Dn(e,n,s))}function xo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Za;const TP=()=>(Za||(Za=new nt(uA)),Za);class Ee{static fromObject(e){let n=new Ee(null);return it(e,(s,r)=>{n=n.set(new _e(s),r)}),n}constructor(e,n=TP()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(se(e))return null;{const s=ie(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(ve(e),n);return i!=null?{path:xe(new _e(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new Ee(null)}}set(e,n){if(se(e))return new Ee(n,this.children);{const s=ie(e),i=(this.children.get(s)||new Ee(null)).set(ve(e),n),o=this.children.insert(s,i);return new Ee(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const r=s.remove(ve(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new Ee(null):new Ee(this.value,i)}else return this}}get(e){if(se(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(se(e))return n;{const s=ie(e),i=(this.children.get(s)||new Ee(null)).setTree(ve(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Ee(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(xe(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(se(e))return null;{const i=ie(e),o=this.children.get(i);return o?o.findOnPath_(ve(e),xe(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const r=ie(e),i=this.children.get(r);return i?i.foreachOnPath_(ve(e),xe(n,r),s):new Ee(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(xe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new Ee(null))}}function Lr(t,e,n){if(se(e))return new kt(new Ee(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Je(r,e);return i=i.updateChild(o,n),new kt(t.writeTree_.set(r,i))}else{const r=new Ee(n),i=t.writeTree_.setTree(e,r);return new kt(i)}}}function ud(t,e,n){let s=t;return it(n,(r,i)=>{s=Lr(s,xe(e,r),i)}),s}function fd(t,e){if(se(e))return kt.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new kt(n)}}function Xc(t,e){return ms(t,e)!=null}function ms(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Je(n.path,e)):null}function hd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Re,(s,r)=>{e.push(new ne(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new ne(s,r.value))}),e}function On(t,e){if(se(e))return t;{const n=ms(t,e);return n!=null?new kt(new Ee(n)):new kt(t.writeTree_.subtree(e))}}function Zc(t){return t.writeTree_.isEmpty()}function Qs(t,e){return $m(le(),t.writeTree_,e)}function $m(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(D(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=$m(xe(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(xe(t,".priority"),s)),n}}/**
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
 */function ua(t,e){return Km(e,t)}function SP(t,e,n,s,r){D(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Lr(t.visibleWrites,e,n)),t.lastWriteId=s}function RP(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function kP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&AP(a,s.path)?r=!1:Tt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return PP(t),!0;if(s.snap)t.visibleWrites=fd(t.visibleWrites,s.path);else{const a=s.children;it(a,c=>{t.visibleWrites=fd(t.visibleWrites,xe(s.path,c))})}return!0}else return!1}function AP(t,e){if(t.snap)return Tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tt(xe(t.path,n),e))return!0;return!1}function PP(t){t.visibleWrites=Wm(t.allWrites,NP,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function NP(t){return t.visible}function Wm(t,e,n){let s=kt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)Tt(n,o)?(a=Je(n,o),s=Lr(s,a,i.snap)):Tt(o,n)&&(a=Je(o,n),s=Lr(s,le(),i.snap.getChild(a)));else if(i.children){if(Tt(n,o))a=Je(n,o),s=ud(s,a,i.children);else if(Tt(o,n))if(a=Je(o,n),se(a))s=ud(s,le(),i.children);else{const c=Ks(i.children,ie(a));if(c){const l=c.getChild(ve(a));s=Lr(s,le(),l)}}}else throw er("WriteRecord should have .snap or .children")}}return s}function Vm(t,e,n,s,r){if(!s&&!r){const i=ms(t.visibleWrites,e);if(i!=null)return i;{const o=On(t.visibleWrites,e);if(Zc(o))return n;if(n==null&&!Xc(o,le()))return null;{const a=n||Z.EMPTY_NODE;return Qs(o,a)}}}else{const i=On(t.visibleWrites,e);if(!r&&Zc(i))return n;if(!r&&n==null&&!Xc(i,le()))return null;{const o=function(l){return(l.visible||r)&&(!s||!~s.indexOf(l.writeId))&&(Tt(l.path,e)||Tt(e,l.path))},a=Wm(t.allWrites,o,e),c=n||Z.EMPTY_NODE;return Qs(a,c)}}}function OP(t,e,n){let s=Z.EMPTY_NODE;const r=ms(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Re,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=On(t.visibleWrites,e);return n.forEachChild(Re,(o,a)=>{const c=Qs(On(i,new _e(o)),a);s=s.updateImmediateChild(o,c)}),hd(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=On(t.visibleWrites,e);return hd(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function xP(t,e,n,s,r){D(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=xe(e,n);if(Xc(t.visibleWrites,i))return null;{const o=On(t.visibleWrites,i);return Zc(o)?r.getChild(n):Qs(o,r.getChild(n))}}function MP(t,e,n,s){const r=xe(e,n),i=ms(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=On(t.visibleWrites,r);return Qs(o,s.getNode().getImmediateChild(n))}else return null}function LP(t,e){return ms(t.visibleWrites,e)}function DP(t,e,n,s,r,i,o){let a;const c=On(t.visibleWrites,e),l=ms(c,le());if(l!=null)a=l;else if(n!=null)a=Qs(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=h.getNext();for(;d&&u.length<r;)f(d,s)!==0&&u.push(d),d=h.getNext();return u}else return[]}function FP(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Mo(t,e,n,s){return Vm(t.writeTree,t.treePath,e,n,s)}function du(t,e){return OP(t.writeTree,t.treePath,e)}function dd(t,e,n,s){return xP(t.writeTree,t.treePath,e,n,s)}function Lo(t,e){return LP(t.writeTree,xe(t.treePath,e))}function UP(t,e,n,s,r,i){return DP(t.writeTree,t.treePath,e,n,s,r,i)}function pu(t,e,n){return MP(t.writeTree,t.treePath,e,n)}function qm(t,e){return Km(xe(t.treePath,e),t.writeTree)}function Km(t,e){return{treePath:t,writeTree:e}}/**
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
 */class HP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,ei(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,Zr(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,Ys(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,ei(s,e.snapshotNode,r.oldSnap));else throw er("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class jP{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Gm=new jP;class gu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Dn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hs(this.viewCache_),i=UP(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
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
 */function BP(t){return{filter:t}}function $P(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function WP(t,e,n,s,r){const i=new HP;let o,a;if(n.type===St.OVERWRITE){const l=n;l.source.fromUser?o=el(t,e,l.path,l.snap,s,r,i):(D(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!se(l.path),o=Do(t,e,l.path,l.snap,s,r,a,i))}else if(n.type===St.MERGE){const l=n;l.source.fromUser?o=qP(t,e,l.path,l.children,s,r,i):(D(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=tl(t,e,l.path,l.children,s,r,a,i))}else if(n.type===St.ACK_USER_WRITE){const l=n;l.revert?o=zP(t,e,l.path,s,r,i):o=KP(t,e,l.path,l.affectedTree,s,r,i)}else if(n.type===St.LISTEN_COMPLETE)o=GP(t,e,n.path,s,i);else throw er("Unknown operation type: "+n.type);const c=i.getChanges();return VP(e,o,c),{viewCache:o,changes:c}}function VP(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=xo(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(Um(xo(e)))}}function zm(t,e,n,s,r,i){const o=e.eventCache;if(Lo(s,n)!=null)return e;{let a,c;if(se(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=hs(e),u=l instanceof Z?l:Z.EMPTY_NODE,f=du(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const l=Mo(s,hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,i)}else{const l=ie(n);if(l===".priority"){D(Ln(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const f=dd(s,n,u,c);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=ve(n);let f;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=dd(s,n,o.getNode(),c);h!=null?f=o.getNode().getImmediateChild(l).updateChild(u,h):f=o.getNode().getImmediateChild(l)}else f=pu(s,l,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),l,f,u,r,i):a=o.getNode()}}return Mr(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Do(t,e,n,s,r,i,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(se(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const d=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),d,null)}else{const d=ie(n);if(!c.isCompleteForPath(n)&&Ln(n)>1)return e;const p=ve(n),w=c.getNode().getImmediateChild(d).updateChild(p,s);d===".priority"?l=u.updatePriority(c.getNode(),w):l=u.updateChild(c.getNode(),d,w,p,Gm,null)}const f=Bm(e,l,c.isFullyInitialized()||se(n),u.filtersNodes()),h=new gu(r,f,i);return zm(t,f,n,r,h,a)}function el(t,e,n,s,r,i,o){const a=e.eventCache;let c,l;const u=new gu(r,e,i);if(se(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Mr(e,l,!0,t.filter.filtersNodes());else{const f=ie(n);if(f===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=Mr(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=ve(n),d=a.getNode().getImmediateChild(f);let p;if(se(h))p=s;else{const g=u.getCompleteChild(f);g!=null?km(h)===".priority"&&g.getChild(Pm(h)).isEmpty()?p=g:p=g.updateChild(h,s):p=Z.EMPTY_NODE}if(d.equals(p))c=e;else{const g=t.filter.updateChild(a.getNode(),f,p,h,u,o);c=Mr(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function pd(t,e){return t.eventCache.isCompleteForChild(e)}function qP(t,e,n,s,r,i,o){let a=e;return s.foreach((c,l)=>{const u=xe(n,c);pd(e,ie(u))&&(a=el(t,a,u,l,r,i,o))}),s.foreach((c,l)=>{const u=xe(n,c);pd(e,ie(u))||(a=el(t,a,u,l,r,i,o))}),a}function gd(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function tl(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;se(n)?l=s:l=new Ee(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const d=e.serverCache.getNode().getImmediateChild(f),p=gd(t,d,h);c=Do(t,c,new _e(f),p,r,i,o,a)}}),l.children.inorderTraversal((f,h)=>{const d=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!d){const p=e.serverCache.getNode().getImmediateChild(f),g=gd(t,p,h);c=Do(t,c,new _e(f),g,r,i,o,a)}}),c}function KP(t,e,n,s,r,i,o){if(Lo(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(se(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Do(t,e,n,c.getNode().getChild(n),r,i,a,o);if(se(n)){let l=new Ee(null);return c.getNode().forEachChild(js,(u,f)=>{l=l.set(new _e(u),f)}),tl(t,e,n,l,r,i,a,o)}else return e}else{let l=new Ee(null);return s.foreach((u,f)=>{const h=xe(n,u);c.isCompleteForPath(h)&&(l=l.set(u,c.getNode().getChild(h)))}),tl(t,e,n,l,r,i,a,o)}}function GP(t,e,n,s,r){const i=e.serverCache,o=Bm(e,i.getNode(),i.isFullyInitialized()||se(n),i.isFiltered());return zm(t,o,n,s,Gm,r)}function zP(t,e,n,s,r,i){let o;if(Lo(s,n)!=null)return e;{const a=new gu(s,e,r),c=e.eventCache.getNode();let l;if(se(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Mo(s,hs(e));else{const f=e.serverCache.getNode();D(f instanceof Z,"serverChildren would be complete if leaf node"),u=du(s,f)}u=u,l=t.filter.updateFullNode(c,u,i)}else{const u=ie(n);let f=pu(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=c.getImmediateChild(u)),f!=null?l=t.filter.updateChild(c,u,f,ve(n),a,i):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,Z.EMPTY_NODE,ve(n),a,i):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mo(s,hs(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,i)))}return o=e.serverCache.isFullyInitialized()||Lo(s,le())!=null,Mr(e,l,o,t.filter.filtersNodes())}}/**
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
 */class YP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new lu(s.getIndex()),i=pP(s);this.processor_=BP(i);const o=n.serverCache,a=n.eventCache,c=r.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),l=i.updateFullNode(Z.EMPTY_NODE,a.getNode(),null),u=new Dn(c,o.isFullyInitialized(),r.filtersNodes()),f=new Dn(l,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=la(f,u),this.eventGenerator_=new EP(this.query_)}get query(){return this.query_}}function QP(t){return t.viewCache_.serverCache.getNode()}function JP(t){return xo(t.viewCache_)}function XP(t,e){const n=hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function _d(t){return t.eventRegistrations_.length===0}function ZP(t,e){t.eventRegistrations_.push(e)}function md(t,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function yd(t,e,n,s){e.type===St.MERGE&&e.source.queryId!==null&&(D(hs(t.viewCache_),"We should always have a full cache before handling merges"),D(xo(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=WP(t.processor_,r,e,n,s);return $P(t.processor_,i.viewCache),D(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Ym(t,i.changes,i.viewCache.eventCache.getNode(),null)}function eN(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Re,(i,o)=>{s.push(Ys(i,o))}),n.isFullyInitialized()&&s.push(Um(n.getNode())),Ym(t,s,n.getNode(),e)}function Ym(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return bP(t.eventGenerator_,e,n,r)}/**
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
 */let Fo;class Qm{constructor(){this.views=new Map}}function tN(t){D(!Fo,"__referenceConstructor has already been defined"),Fo=t}function nN(){return D(Fo,"Reference.ts has not been loaded"),Fo}function sN(t){return t.views.size===0}function _u(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return D(i!=null,"SyncTree gave us an op for an invalid query."),yd(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(yd(o,e,n,s));return i}}function Jm(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Mo(n,r?s:null),c=!1;a?c=!0:s instanceof Z?(a=du(n,s),c=!1):(a=Z.EMPTY_NODE,c=!1);const l=la(new Dn(a,c,!1),new Dn(s,r,!1));return new YP(e,l)}return o}function rN(t,e,n,s,r,i){const o=Jm(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ZP(o,n),eN(o,n)}function iN(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=Fn(t);if(r==="default")for(const[c,l]of t.views.entries())o=o.concat(md(l,n,s)),_d(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||i.push(l.query));else{const c=t.views.get(r);c&&(o=o.concat(md(c,n,s)),_d(c)&&(t.views.delete(r),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!Fn(t)&&i.push(new(nN())(e._repo,e._path)),{removed:i,events:o}}function Xm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const s of t.views.values())n=n||XP(s,e);return n}function Zm(t,e){if(e._queryParams.loadsAllData())return fa(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ey(t,e){return Zm(t,e)!=null}function Fn(t){return fa(t)!=null}function fa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Uo;function oN(t){D(!Uo,"__referenceConstructor has already been defined"),Uo=t}function aN(){return D(Uo,"Reference.ts has not been loaded"),Uo}let cN=1;class vd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=FP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ty(t,e,n,s,r){return SP(t.pendingWriteTree_,e,n,s,r),r?Ii(t,new fs(jm(),e,n)):[]}function Jn(t,e,n=!1){const s=RP(t.pendingWriteTree_,e);if(kP(t.pendingWriteTree_,e)){let i=new Ee(null);return s.snap!=null?i=i.set(le(),!0):it(s.children,o=>{i=i.set(new _e(o),!0)}),Ii(t,new Oo(s.path,i,n))}else return[]}function Ci(t,e,n){return Ii(t,new fs(fu(),e,n))}function lN(t,e,n){const s=Ee.fromObject(n);return Ii(t,new si(fu(),e,s))}function uN(t,e){return Ii(t,new ni(fu(),e))}function fN(t,e,n){const s=yu(t,n);if(s){const r=vu(s),i=r.path,o=r.queryId,a=Je(i,e),c=new ni(hu(o),a);return wu(t,i,c)}else return[]}function ny(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||ey(o,e))){const c=iN(o,e,n,s);sN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=c.removed;if(a=c.events,!r){const u=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(h,d)=>Fn(d));if(u&&!f){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const d=gN(h);for(let p=0;p<d.length;++p){const g=d[p],w=g.query,b=oy(t,g);t.listenProvider_.startListening(Dr(w),ri(t,w),b.hashFn,b.onComplete)}}}!f&&l.length>0&&!s&&(u?t.listenProvider_.stopListening(Dr(e),null):l.forEach(h=>{const d=t.queryToTagMap.get(ha(h));t.listenProvider_.stopListening(Dr(h),d)}))}_N(t,l)}return a}function sy(t,e,n,s){const r=yu(t,s);if(r!=null){const i=vu(r),o=i.path,a=i.queryId,c=Je(o,e),l=new fs(hu(a),c,n);return wu(t,o,l)}else return[]}function hN(t,e,n,s){const r=yu(t,s);if(r){const i=vu(r),o=i.path,a=i.queryId,c=Je(o,e),l=Ee.fromObject(n),u=new si(hu(a),c,l);return wu(t,o,u)}else return[]}function dN(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(h,d)=>{const p=Je(h,r);i=i||xn(d,p),o=o||Fn(d)});let a=t.syncPointTree_.get(r);a?(o=o||Fn(a),i=i||xn(a,le())):(a=new Qm,t.syncPointTree_=t.syncPointTree_.set(r,a));let c;i!=null?c=!0:(c=!1,i=Z.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((d,p)=>{const g=xn(p,le());g&&(i=i.updateImmediateChild(d,g))}));const l=ey(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=ha(e);D(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=mN();t.queryToTagMap.set(h,d),t.tagToQueryMap.set(d,h)}const u=ua(t.pendingWriteTree_,r);let f=rN(a,e,n,u,i,c);if(!l&&!o&&!s){const h=Zm(a,e);f=f.concat(yN(t,e,h))}return f}function mu(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Je(o,e),l=xn(a,c);if(l)return l});return Vm(r,e,i,n,!0)}function pN(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(l,u)=>{const f=Je(l,n);s=s||xn(u,f)});let r=t.syncPointTree_.get(n);r?s=s||xn(r,le()):(r=new Qm,t.syncPointTree_=t.syncPointTree_.set(n,r));const i=s!=null,o=i?new Dn(s,!0,!1):null,a=ua(t.pendingWriteTree_,e._path),c=Jm(r,e,a,i?o.getNode():Z.EMPTY_NODE,i);return JP(c)}function Ii(t,e){return ry(e,t.syncPointTree_,null,ua(t.pendingWriteTree_,le()))}function ry(t,e,n,s){if(se(t.path))return iy(t,e,n,s);{const r=e.get(le());n==null&&r!=null&&(n=xn(r,le()));let i=[];const o=ie(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=qm(s,o);i=i.concat(ry(a,c,l,u))}return r&&(i=i.concat(_u(r,t,s,n))),i}}function iy(t,e,n,s){const r=e.get(le());n==null&&r!=null&&(n=xn(r,le()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=qm(s,o),u=t.operationForChild(o);u&&(i=i.concat(iy(u,a,c,l)))}),r&&(i=i.concat(_u(r,t,s,n))),i}function oy(t,e){const n=e.query,s=ri(t,n);return{hashFn:()=>(QP(e)||Z.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?fN(t,n._path,s):uN(t,n._path);{const i=dA(r,n);return ny(t,n,null,i)}}}}function ri(t,e){const n=ha(e);return t.queryToTagMap.get(n)}function ha(t){return t._path.toString()+"$"+t._queryIdentifier}function yu(t,e){return t.tagToQueryMap.get(e)}function vu(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function wu(t,e,n){const s=t.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const r=ua(t.pendingWriteTree_,e);return _u(s,n,r,null)}function gN(t){return t.fold((e,n,s)=>{if(n&&Fn(n))return[fa(n)];{let r=[];return n&&(r=Xm(n)),it(s,(i,o)=>{r=r.concat(o)}),r}})}function Dr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(aN())(t._repo,t._path):t}function _N(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=ha(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function mN(){return cN++}function yN(t,e,n){const s=e._path,r=ri(t,e),i=oy(t,n),o=t.listenProvider_.startListening(Dr(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)D(!Fn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,f)=>{if(!se(l)&&u&&Fn(u))return[fa(u).query];{let h=[];return u&&(h=h.concat(Xm(u).map(d=>d.query))),it(f,(d,p)=>{h=h.concat(p)}),h}});for(let l=0;l<c.length;++l){const u=c[l];t.listenProvider_.stopListening(Dr(u),ri(t,u))}}return o}/**
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
 */class Eu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Eu(n)}node(){return this.node_}}class bu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new bu(this.syncTree_,n)}node(){return mu(this.syncTree_,this.path_)}}const vN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wd=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return EN(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},EN=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const r=e.node();if(D(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},bN=function(t,e,n,s){return Cu(e,new bu(n,t),s)},ay=function(t,e,n){return Cu(t,new Eu(e),n)};function Cu(t,e,n){const s=t.getPriority().val(),r=wd(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=wd(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Le(a,Fe(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Le(r))),o.forEachChild(Re,(a,c)=>{const l=Cu(c,e.getImmediateChild(a),n);l!==c&&(i=i.updateImmediateChild(a,l))}),i}}/**
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
 */class Iu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Tu(t,e){let n=e instanceof _e?e:new _e(e),s=t,r=ie(n);for(;r!==null;){const i=Ks(s.node.children,r)||{children:{},childCount:0};s=new Iu(r,s,i),n=ve(n),r=ie(n)}return s}function or(t){return t.node.value}function cy(t,e){t.node.value=e,nl(t)}function ly(t){return t.node.childCount>0}function CN(t){return or(t)===void 0&&!ly(t)}function da(t,e){it(t.node.children,(n,s)=>{e(new Iu(n,t,s))})}function uy(t,e,n,s){n&&e(t),da(t,r=>{uy(r,e,!0)})}function IN(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ti(t){return new _e(t.parent===null?t.name:Ti(t.parent)+"/"+t.name)}function nl(t){t.parent!==null&&TN(t.parent,t.name,t)}function TN(t,e,n){const s=CN(n),r=un(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,nl(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,nl(t))}/**
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
 */const SN=/[\[\].#$\/\u0000-\u001F\u007F]/,RN=/[\[\].#$\u0000-\u001F\u007F]/,ec=10*1024*1024,fy=function(t){return typeof t=="string"&&t.length!==0&&!SN.test(t)},hy=function(t){return typeof t=="string"&&t.length!==0&&!RN.test(t)},kN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hy(t)},AN=function(t,e,n,s){Su(Vl(t,"value"),e,n)},Su=function(t,e,n){const s=n instanceof _e?new KA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Yn(s)+" with contents = "+e.toString());if(am(e))throw new Error(t+"contains "+e.toString()+" "+Yn(s));if(typeof e=="string"&&e.length>ec/3&&ra(e)>ec)throw new Error(t+"contains a string greater than "+ec+" utf8 bytes "+Yn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(it(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!fy(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GA(s,o),Su(t,a,s),zA(s)}),r&&i)throw new Error(t+' contains ".value" child '+Yn(s)+" in addition to actual children.")}},dy=function(t,e,n,s){if(!hy(n))throw new Error(Vl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},PN=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dy(t,e,n)},py=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},NN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kN(n))throw new Error(Vl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ON{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gy(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!Nm(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Bt(t,e,n){gy(t,n),xN(t,s=>Tt(s,e)||Tt(e,s))}function xN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(MN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function MN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Or&&qe("event: "+n.toString()),ir(s)}}}/**
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
 */const LN="repo_interrupt",DN=25;class FN{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ON,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=No(),this.transactionQueueTree_=new Iu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function UN(t,e,n){if(t.stats_=iu(t.repoInfo_),t.forceRestClient_||mA())t.server_=new Po(t.repoInfo_,(s,r,i,o)=>{Ed(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>bd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new tn(t.repoInfo_,e,(s,r,i,o)=>{Ed(t,s,r,i,o)},s=>{bd(t,s)},s=>{jN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=bA(t.repoInfo_,()=>new wP(t.stats_,t.server_)),t.infoData_=new gP,t.infoSyncTree_=new vd({startListening:(s,r,i,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Ci(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ku(t,"connected",!1),t.serverSyncTree_=new vd({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,c)=>{const l=o(a,c);Bt(t.eventQueue_,s._path,l)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function HN(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ru(t){return vN({timestamp:HN(t)})}function Ed(t,e,n,s,r){t.dataUpdateCount++;const i=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=vo(n,l=>Fe(l));o=hN(t.serverSyncTree_,i,c,r)}else{const c=Fe(n);o=sy(t.serverSyncTree_,i,c,r)}else if(s){const c=vo(n,l=>Fe(l));o=lN(t.serverSyncTree_,i,c)}else{const c=Fe(n);o=Ci(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=ga(t,i)),Bt(t.eventQueue_,a,o)}function bd(t,e){ku(t,"connected",e),e===!1&&WN(t)}function jN(t,e){it(e,(n,s)=>{ku(t,n,s)})}function ku(t,e,n){const s=new _e("/.info/"+e),r=Fe(n);t.infoData_.updateSnapshot(s,r);const i=Ci(t.infoSyncTree_,s,r);Bt(t.eventQueue_,s,i)}function _y(t){return t.nextWriteId_++}function BN(t,e,n){const s=pN(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(r=>{const i=Fe(r).withIndex(e._queryParams.getIndex());dN(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ci(t.serverSyncTree_,e._path,i);else{const a=ri(t.serverSyncTree_,e);o=sy(t.serverSyncTree_,e._path,i,a)}return Bt(t.eventQueue_,e._path,o),ny(t.serverSyncTree_,e,n,null,!0),i},r=>(pa(t,"get for query "+Oe(e)+" failed: "+r),Promise.reject(new Error(r))))}function $N(t,e,n,s,r){pa(t,"set",{path:e.toString(),value:n,priority:s});const i=Ru(t),o=Fe(n,s),a=mu(t.serverSyncTree_,e),c=ay(o,a,i),l=_y(t),u=ty(t.serverSyncTree_,e,c,l,!0);gy(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,d)=>{const p=h==="ok";p||rt("set at "+e+" failed: "+h);const g=Jn(t.serverSyncTree_,l,!p);Bt(t.eventQueue_,e,g),qN(t,r,h,d)});const f=Ey(t,e);ga(t,f),Bt(t.eventQueue_,f,[])}function WN(t){pa(t,"onDisconnectEvents");const e=Ru(t),n=No();Jc(t.onDisconnect_,le(),(r,i)=>{const o=bN(r,i,t.serverSyncTree_,e);Hm(n,r,o)});let s=[];Jc(n,le(),(r,i)=>{s=s.concat(Ci(t.serverSyncTree_,r,i));const o=Ey(t,r);ga(t,o)}),t.onDisconnect_=No(),Bt(t.eventQueue_,le(),s)}function VN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(LN)}function pa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function qN(t,e,n,s){e&&ir(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function my(t,e,n){return mu(t.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Au(t,e=t.transactionQueueTree_){if(e||_a(t,e),or(e)){const n=vy(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&KN(t,Ti(e),n)}else ly(e)&&da(e,n=>{Au(t,n)})}function KN(t,e,n){const s=n.map(l=>l.currentWriteId),r=my(t,e,s);let i=r;const o=r.hash();for(let l=0;l<n.length;l++){const u=n[l];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Je(e,u.path);i=i.updateChild(f,u.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,l=>{pa(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Jn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();_a(t,Tu(t.transactionQueueTree_,e)),Au(t,t.transactionQueueTree_),Bt(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)ir(f[h])}else{if(l==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{rt("transaction at "+c.toString()+" failed: "+l);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=l}ga(t,e)}},o)}function ga(t,e){const n=yy(t,e),s=Ti(n),r=vy(t,n);return GN(t,r,s),s}function GN(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Je(n,c.path);let u=!1,f;if(D(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,f=c.abortReason,r=r.concat(Jn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=DN)u=!0,f="maxretry",r=r.concat(Jn(t.serverSyncTree_,c.currentWriteId,!0));else{const h=my(t,c.path,o);c.currentInputSnapshot=h;const d=e[a].update(h.val());if(d!==void 0){Su("transaction failed: Data returned ",d,c.path);let p=Fe(d);typeof d=="object"&&d!=null&&un(d,".priority")||(p=p.updatePriority(h.getPriority()));const w=c.currentWriteId,b=Ru(t),E=ay(p,h,b);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=E,c.currentWriteId=_y(t),o.splice(o.indexOf(w),1),r=r.concat(ty(t.serverSyncTree_,c.path,E,c.currentWriteId,c.applyLocally)),r=r.concat(Jn(t.serverSyncTree_,w,!0))}else u=!0,f="nodata",r=r.concat(Jn(t.serverSyncTree_,c.currentWriteId,!0))}Bt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}_a(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ir(s[a]);Au(t,t.transactionQueueTree_)}function yy(t,e){let n,s=t.transactionQueueTree_;for(n=ie(e);n!==null&&or(s)===void 0;)s=Tu(s,n),e=ve(e),n=ie(e);return s}function vy(t,e){const n=[];return wy(t,e,n),n.sort((s,r)=>s.order-r.order),n}function wy(t,e,n){const s=or(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);da(e,r=>{wy(t,r,n)})}function _a(t,e){const n=or(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,cy(e,n.length>0?n:void 0)}da(e,s=>{_a(t,s)})}function Ey(t,e){const n=Ti(yy(t,e)),s=Tu(t.transactionQueueTree_,e);return IN(s,r=>{tc(t,r)}),tc(t,s),uy(s,r=>{tc(t,r)}),n}function tc(t,e){const n=or(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?cy(e,void 0):n.length=i+1,Bt(t.eventQueue_,Ti(e),r);for(let o=0;o<s.length;o++)ir(s[o])}}/**
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
 */function zN(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function YN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):rt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cd=function(t,e){const n=QN(t),s=n.namespace;n.domain==="firebase.com"&&on(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&on("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||cA();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vm(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new _e(n.pathString)}},QN=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=zN(t.substring(u,f)));const h=YN(t.substring(Math.min(t.length,f)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=s}"ns"in h&&(i=h.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class JN{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class XN{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ZN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Pu{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return se(this._path)?null:km(this._path)}get ref(){return new fn(this._repo,this._path)}get _queryIdentifier(){const e=cd(this._queryParams),n=su(e);return n==="{}"?"default":n}get _queryObject(){return cd(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof Pu))return!1;const n=this._repo===e._repo,s=Nm(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+qA(this._path)}}class fn extends Pu{constructor(e,n){super(e,n,new uu,!1)}get parent(){const e=Pm(this._path);return e===null?null:new fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ii{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=sl(this.ref,e);return new ii(this._node.getChild(n),s,Re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new ii(r,sl(this.ref,s),Re)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function YO(t,e){return t=Ge(t),t._checkNotDeleted("ref"),e!==void 0?sl(t._root,e):t._root}function sl(t,e){return t=Ge(t),ie(t._path)===null?PN("child","path",e):dy("child","path",e),new fn(t._repo,xe(t._path,e))}function QO(t){return py("remove",t._path),eO(t,null)}function eO(t,e){t=Ge(t),py("set",t._path),AN("set",e,t._path);const n=new sa;return $N(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function JO(t){t=Ge(t);const e=new ZN(()=>{}),n=new Nu(e);return BN(t._repo,t,n).then(s=>new ii(s,new fn(t._repo,t._path),t._queryParams.getIndex()))}class Nu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new JN("value",this,new ii(e.snapshotNode,new fn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new XN(this,e,n):null}matches(e){return e instanceof Nu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}tN(fn);oN(fn);/**
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
 */const tO="FIREBASE_DATABASE_EMULATOR_HOST",rl={};let nO=!1;function sO(t,e,n,s){t.repoInfo_=new vm(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function rO(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||on("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cd(i,r),a=o.repoInfo,c;typeof process<"u"&&Vh&&(c=Vh[tO]),c?(i=`http://${c}?ns=${a.namespace}`,o=Cd(i,r),a=o.repoInfo):o.repoInfo.secure;const l=new vA(t.name,t.options,e);NN("Invalid Firebase Database URL",o),se(o.path)||on("Database URL must point to the root of a Firebase Database (not including a child path).");const u=oO(a,t,l,new yA(t,n));return new aO(u,t)}function iO(t,e){const n=rl[e];(!n||n[t.key]!==t)&&on(`Database ${e}(${t.repoInfo_}) has already been deleted.`),VN(t),delete n[t.key]}function oO(t,e,n,s){let r=rl[e.name];r||(r={},rl[e.name]=r);let i=r[t.toURLString()];return i&&on("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new FN(t,nO,n,s),r[t.toURLString()]=i,i}class aO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(UN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fn(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&on("Cannot call "+e+" on a deleted database.")}}function cO(t=w_(),e){const n=Gl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=_S("database");s&&lO(n,...s)}return n}function lO(t,e,n,s={}){t=Ge(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&os(s,i.repoInfo_.emulatorOptions))return;on("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&on('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Xi(Xi.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:mS(s.mockUserToken,t.app.options.projectId);o=new Xi(a)}sO(i,r,s,o)}/**
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
 */function uO(t){nA(nr),Gs(new as("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return rO(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Nn(qh,Kh,t),Nn(qh,Kh,"esm2017")}tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};uO();const fO=Lb("auth",()=>{const t=st(null),e=st(!1);return{authResolved:e,user:t,setUser:r=>{t.value=r,e.value=!0},logout:()=>{t.value=null}}}),hO=ht(async()=>{let t,e;const n=Xs(),s={apiKey:n.public.apiKey,authDomain:n.public.authDomain,projectId:n.public.projectId,storageBucket:n.public.storageBucket,messagingSenderId:n.public.messagingSenderId,appId:n.public.appId,databaseURL:"https://learning-firebase-9dba3-default-rtdb.firebaseio.com/"},r=v_(s),i=eA(r),o=cO(r);return[t,e]=ss(()=>BR(i,Y_)),await t,e(),VR(i,a=>{fO().setUser(a)}),{provide:{firebase:{app:r,auth:i,db:o}}}}),dO=[mC,vC,IC,GI,zI,YI,QI,XI,nT,iT,oT,oS,hO],by=(t="RouteProvider")=>cn({name:t,props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,s=e.route,r={};for(const i in e.route)Object.defineProperty(r,i,{get:()=>n===e.renderKey?e.route[i]:s[i],enumerable:!0});return es(hi,Yt(r)),()=>Ue(e.vnode,{ref:e.vnodeRef})}}),pO=by(),Id=new WeakMap,gO=cn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:s}){const r=ke(),i=st(),o=Ke(hi,null);let a;s({pageRef:i});const c=Ke(yg,null);let l;const u=r.deferHydration();if(r.isHydrating){const h=r.hooks.hookOnce("app:error",u);ft().beforeEach(h)}t.pageKey&&ts(()=>t.pageKey,(h,d)=>{h!==d&&r.callHook("page:loading:start")});let f=!1;{const h=ft().beforeResolve(()=>{f=!1});ui(()=>{h()})}return()=>Ue(Vg,{name:t.name,route:t.route,...e},{default:h=>{const d=mO(o,h.route,h.Component),p=o&&o.matched.length===h.route.matched.length;if(!h.Component){if(l&&!p)return l;u();return}if(l&&c&&!c.isCurrent(h.route))return l;if(d&&o&&(!c||c!=null&&c.isCurrent(o)))return p?l:null;const g=xc(h,t.pageKey),w=yO(o,h.route,h.Component);!r.isHydrating&&a===g&&!w&&(r.callHook("page:loading:end"),f=!0),a=g;const b=!!(t.transition??h.route.meta.pageTransition??Cc),E=b&&_O([t.transition,h.route.meta.pageTransition,Cc,{onAfterLeave:()=>{r.callHook("page:transition:finish",h.Component)}}]),_=t.keepalive??h.route.meta.keepalive??lb;return l=qg(b&&E,OI(_,Ue(Tl,{suspensible:!0,onPending:()=>r.callHook("page:start",h.Component),onResolve:()=>{ps(()=>r.callHook("page:finish",h.Component).then(()=>{if(!f&&!w)return f=!0,r.callHook("page:loading:end")}).finally(u))}},{default:()=>{const v={key:g||void 0,vnode:n.default?vO(n.default,h):h.Component,route:h.route,renderKey:g||void 0,trackRootNodes:b,vnodeRef:i};if(!_)return Ue(pO,v);const C=h.Component.type,T=C;let S=Id.get(T);return S||(S=by(C.name||C.__name),Id.set(T,S)),Ue(S,v)}}))).default(),l}})}});function _O(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?Fl(n.onAfterLeave):void 0}));return _g(...e)}function mO(t,e,n){if(!t)return!1;const s=e.matched.findIndex(r=>{var i;return((i=r.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!s||s===-1?!1:e.matched.slice(0,s).some((r,i)=>{var o,a,c;return((o=r.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&xc({route:e,Component:n})!==xc({route:t,Component:n})}function yO(t,e,n){return t?e.matched.findIndex(r=>{var i;return((i=r.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function vO(t,e){const n=t(e);return n.length===1?Ue(n[0]):Ue(Ve,void 0,n)}const wO=cn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Ue(Sn[t.name],t.layoutProps,e.slots)}}),EO={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},bO=cn({name:"NuxtLayout",inheritAttrs:!1,props:EO,setup(t,e){const n=ke(),s=Ke(hi),r=s===Nl()?RI():s,i=ut(()=>{let c=be(t.name)??r.meta.layout??"default";return c&&!(c in Sn)&&t.fallback&&(c=be(t.fallback)),c}),o=st();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",a);ft().beforeEach(c)}return()=>{const c=i.value&&i.value in Sn,l=r.meta.layoutTransition??cb;return qg(c&&l,{default:()=>Ue(Tl,{suspensible:!0,onResolve:()=>{ps(a)}},{default:()=>Ue(CO,{layoutProps:Gp(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!l},e.slots)})}).default()}}}),CO=cn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&es(yg,{isCurrent:s=>n===(s.meta.layout??"default")}),()=>{var s,r;return!n||typeof n=="string"&&!(n in Sn)?(r=(s=e.slots).default)==null?void 0:r.call(s):Ue(wO,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),IO=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},TO={};function SO(t,e){const n=gO,s=bO;return _t(),Dt(s,null,{default:wl(()=>[Se(n)]),_:1})}const RO=IO(TO,[["render",SO]]),kO={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const s=Number(n.statusCode||500),r=s===404,i=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=r?$r(()=>Ut(()=>import("./CrC_pZV4.js"),__vite__mapDeps([9,6,10,11]),import.meta.url)):$r(()=>Ut(()=>import("./C5OsiVDx.js"),__vite__mapDeps([12,10,13]),import.meta.url));return(f,h)=>(_t(),Dt(be(u),Ly(qp({statusCode:be(s),statusMessage:be(i),description:be(o),stack:be(a)})),null,16))}},AO={key:0},Td={__name:"nuxt-root",setup(t){const e=()=>null,n=ke(),s=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",s);ft().beforeEach(c)}const r=!1;es(hi,Nl()),n.hooks.callHookWith(c=>c.map(l=>l()),"vue:setup");const i=Jo(),o=!1;_p((c,l,u)=>{if(n.hooks.callHook("vue:error",c,l,u).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),wg(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>wn(c)),!1});const a=!1;return(c,l)=>(_t(),Dt(Tl,{onResolve:be(s)},{default:wl(()=>[be(o)?(_t(),gw("div",AO)):be(i)?(_t(),Dt(be(kO),{key:1,error:be(i)},null,8,["error"])):be(a)?(_t(),Dt(be(e),{key:2,context:be(a)},null,8,["context"])):be(r)?(_t(),Dt(Lv(be(r)),{key:3})):(_t(),Dt(be(RO),{key:4}))]),_:1},8,["onResolve"]))}};let Sd;{let t;Sd=async function(){var o,a;if(t)return t;const n=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true"),s=n?sE(Td):nE(Td),r=pb({vueApp:s});async function i(c){var l;await r.callHook("app:error",c),(l=r.payload).error||(l.error=Xo(c))}s.config.errorHandler=i,r.hook("app:suspense:resolve",()=>{s.config.errorHandler===i&&(s.config.errorHandler=void 0)}),!n&&If.id&&r.hook("app:suspense:resolve",()=>{var c;(c=document.getElementById(If.id))==null||c.remove()});try{await mb(r,dO)}catch(c){i(c)}try{await r.hooks.callHook("app:created",s),await r.hooks.callHook("app:beforeMount",s),s.mount(fb),await r.hooks.callHook("app:mounted",s),await ps()}catch(c){i(c)}return s},t=Sd().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{ss as $,eO as A,QO as B,FO as C,LO as D,Te as E,Ve as F,GO as G,KO as H,ft as I,bl as J,Ul as K,sh as L,ui as M,$O as N,Ue as O,OO as P,tg as Q,Rb as R,gs as S,Al as T,Xs as U,wc as V,kl as W,UO as X,es as Y,HO as Z,IO as _,Vp as a,ts as a0,JO as a1,Lb as a2,tT as a3,WO as a4,VO as a5,dT as a6,qO as a7,MO as a8,Se as b,gw as c,Kp as d,ke as e,Rg as f,ov as g,Ko as h,Ke as i,cn as j,fO as k,ut as l,Dt as m,be as n,_t as o,Wo as p,xO as q,st as r,NO as s,Uy as t,BO as u,DO as v,wl as w,zO as x,jO as y,YO as z};
