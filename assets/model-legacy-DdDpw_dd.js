!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,u=[],s=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return u}}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,o=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw o}}}}function r(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var a=t&&t.prototype instanceof A?t:A,o=Object.create(a.prototype),u=new D(n||[]);return i(o,"_invoke",{value:I(e,r,u)}),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",d="suspendedYield",y="executing",v="completed",g={};function A(){}function m(){}function b(){}var w={};l(w,u,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(P([])));k&&k!==r&&n.call(k,u)&&(w=k);var E=b.prototype=A.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(a,i,o,u){var s=h(e[a],e,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,o,u)}),(function(e){r("throw",e,o,u)})):t.resolve(l).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(i,i):i()}})}function I(t,r,n){var a=p;return function(i,o){if(a===y)throw Error("Generator is already running");if(a===v){if("throw"===i)throw o;return{value:e,done:!0}}for(n.method=i,n.arg=o;;){var u=n.delegate;if(u){var s=S(u,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=y;var c=h(t,r,n);if("normal"===c.type){if(a=n.done?v:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=v,n.method="throw",n.arg=c.arg)}}}function S(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(a,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function B(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return m.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:m,configurable:!0}),m.displayName=l(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},L(O.prototype),l(O.prototype,s,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new O(f(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},L(E),l(E,c,"Generator"),l(E,u,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(B),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return u.type="throw",u.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),B(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;B(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function i(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){i(o,n,a,u,s,"next",e)}function s(e){i(o,n,a,u,s,"throw",e)}u(void 0)}))}}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy-DM2LLwfl.js","./index-legacy-CfH5SgwR.js"],(function(r,n){"use strict";var i,u,c,l,f,h,p,d,y,v,g,A,m,b,w,x,k,E,L,O,I,S,N,B,D,P,C,M,T,U,R,j,z,J,V;return{setters:[e=>{i=e.aV,u=e.r,c=e.e,l=e.h,f=e.i,h=e.j,p=e.u,d=e.v,y=e.l,v=e.t,g=e.d,A=e.n,m=e.L,b=e.k,w=e.H,x=e._,k=e.q,E=e.s,L=e.aW,O=e.c,I=e.an,S=e.w,N=e.aX,B=e.f,D=e.aY,P=e.ar,C=e.ap,M=e.P,T=e.aZ,U=e.a_,R=e.a$,j=e.b0},e=>{z=e.s,J=e.a,V=e.S}],execute:function(){var n=document.createElement("style");n.textContent=".pcNav[data-v-6a1268ea]{width:100%;background:#7858ff;position:relative;z-index:1}.pcNavInner[data-v-6a1268ea]{max-width:824px;margin:auto;display:flex;flex-direction:row;align-items:center;justify-content:space-between;height:48px;padding:0 24px}.pcNav .logoD[data-v-6a1268ea]{flex-shrink:0;display:flex;flex-direction:row-reverse;align-items:center;background-size:contain;background-repeat:no-repeat;width:64px;height:30px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABaCAMAAADZ/6kQAAAAKlBMVEVMaXH////////////////////////////////////////////////////m1kuZAAAADXRSTlMAYDvEit/vIBBwn1Cw7U1tYQAAAAlwSFlzAAAhOAAAITgBRZYxYAAABKVJREFUeJztWdmS4yAMNOKwje3//92tzCTWDU7VPG2pn2YMAqlpiSPLEggEAoFAIBAIBAKBQCAQ+AusqfRca7uuq9Wcz7LDZveExCB6rdiy4tfDsUg3QMzCLNIx8R76y3GFXOSwL2TeSXQBbNnxa7MtAD92PswmXHHIfA8jXKKoqvcqehR35tNylAV24MfEh0liFkKGQvHdv65LdZdDN9FejZadWWBgxV3IU8ySff/79V0AarnAHW+13cHATpcGJWlXQ5yceQBSQUpDZMBDrwoPLHsME23ZErux1S8DkApS5IEObfWcuTwWtCw8DWl/ht4ZCpIa2poSu+Sz6FhFndRFsTkakskyq0JI5umxl5Vxcdg88BPZM1hDmWmIKqidJSUAgLSXMzczAFyxozqrRNzd7FVrqmf1FAQzDZFhi1gkSL2qANCXlczixPhukJvSbZCNyspprfinrSGSXmKMTxD8f/SlknJTvDF3Yxt7IQk/xQhocNLFmAQw2usMdk9iW70MLE6lLoIN4Rw6vZMZ+18EgJm7U0f5/LK660KR5cpweeDKAPHQ1BAhQdQSE5yz7tgWka23PxjZxleGJygwe4+mN7C5me0cialmdzREquPLUeQQzYEHyvOvs+99rCFa4XI5gNdjCT400R8LXmgb44HK9Jod+Vb2PfmbKmfhZnNwmWm8jshstT24p2iYDZ2bs/hJasCAJt1bxNH1LUjunN0RMU+Om+iMsVS+UA6ndVhs3xhdZqRBF0OTLYtJj2fnTXQhDGyUOx5+Fakha8LTJfjxk6dEE/nk1TBWRlACB/t7cTZCkPsdWXf4+kLASpM+PDrneRLYRuZf2WosyOzhZOX6rNTv5oX+jbqN7lpqskUGBlz3JB8W2slU0IeUPNbQspBjmUYZDW0/QdBQE05/8oq0NNMt46HCvzljCOn0liGPrlrk8sI0ROXd7KK+Ojls3EiNiS1skErp+X0PMLTRDSJIDdvs4+TmFPVELi3UDWtEclwYBEAiKfSacx+oycf6QXM0dH+vwP3BLC6KaXl9tmZ5cN6RsjMusCayzWPh7ZjFp2b6wSPJkyPnzyroVJq8H3E/kIDMp8YsruZJcLCv6s4jVBXA7P2Fach47DicB5/rHL46STzV0CUDmCmIa8hwxLsfX5PAJxpyAkrKYvyCqjSkqnJzNQJfKEg9TqxX7eppflmSri5TBXEqT08oZRT3Op9EvCD9WrTcSzpeL0IAKRW+qcFDBXFydi+6NLJKD2Zxn0AcNEXcyX+hIV0JlypZP8uskqDbCipskuJpaB5AVwoSFx0yKXlEUn5a/aXR6iqFnFl4yzyAVfUTt02HHJEz2CSTANCGrKZ8SMzOlr8+VNzuDw22hrqnXJFNzfZSVkvPgVkAfagTxXVysxg8ceXFbJGVcXMkMAnA+oVCPbwUMyEF0TbPF6M6jU4MjoaGAeSbhoGCPA1xoqkVT4LD3Dv0G5ZXh46iLgBvX+hvxF4K/cI+7TKiqaThgbb03kqt5KMVwF5yrm8t1/ra1rhQSEVehz/dg/ODPrNiFR4/b+ZX66f78fNhIBAIBAKBQCAQCAQCgUDgf8Y/QZfZtd1ei10AAAAASUVORK5CYIJ0aW55)}.pcNav .logoC[data-v-6a1268ea]{flex-shrink:0;display:flex;flex-direction:row-reverse;align-items:center;background-size:contain;background-repeat:no-repeat;width:104px;height:44px;background-image:url(data:image/png;base64,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)}.pcNav .nameC[data-v-6a1268ea]{display:flex;flex-direction:row;align-items:center;cursor:pointer;height:100%}.pcNav .name[data-v-6a1268ea]{color:#deccee;font-size:14px;line-height:24px}.name[data-v-6a1268ea]:hover{text-decoration:underline}.pcNavCaret[data-v-6a1268ea]{width:24px;height:24px;position:relative;margin-top:0;margin-left:0;background-size:cover;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAFVBMVEUAAADgy+7ezO7ezO7fyuveze7ezO5jYx7UAAAABnRSTlMAX4C1MN8zAyz9AAAARklEQVQ4y2MYboAFl3hYIHYJ5rQ0AVwSiVglGNNwaVHDpYVpmGlxwKXFgCQJhFGELUc4d4hrQCQfwgkOkUQJJGrMbDA8AQCzqySNKOecDwAAAABJRU5ErkJggnRpbnk=)}[data-v-6a1268ea]:root{--u: 10px}@media screen and (max-width: 600px){[data-v-6a1268ea]:root{--u: $basePx}}@media screen and (min-width: 600px){[data-v-6a1268ea]:root{--u: 1px}}.logo[data-v-6a1268ea]{display:flex;flex-direction:row-reverse;align-items:center;background-repeat:no-repeat;background-size:100% 100%;width:62px;height:31px;color:#fff;font-size:22px}.avatar[data-v-6a1268ea]{background-repeat:no-repeat;background-size:100% 100%;width:24px;height:24px;margin-right:16px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAJ1BMVEX///8zMzPl5eXy8vJNTU2MjIyurq57e3tgYGBAQEDT09O/v7+ZmZkDhrRPAAACcElEQVRIx8VWsW7UQBBdkpwP4isYMDl8pDBSBAhRQAGioCApIKJKFAmEaC4RCOguKFDnAFHjghTQJHSIJiloqC7AhzHe9fitd+xIqfIae8fPO/NmxrM2J4orTz4SLb/9fQRl9imVeLjfxrmRU4XkTTPnKtXQyLpNQBsrFl/wOAw506tU4OLj78Zc/zW2iws3A9I1a/5Umqdf2eVSIH6RbenfQEWS1Ug/iLGmtH71LVNF1I9MDQvF3ruBgcPUUpa8dRHRJBTcK9TizQ4v54zCOptXaquhJkVsvlSFzd7mTQMOOXTx13XbanS8B5eJkkAaBJ0r7zf5trK/XEzeVW/sEfXLkIhoJObXxHjg+8uqkKRId8nig+ybS/5meE8xuh7hHELfZ3tzgJA6jgNNt4gGEvc2AnUYlIbTXFN7wzqH0Fn6Q9JT229sk4YUDiylqBjvxSDJxzl2bjrsFps7IIBVJ6KLUvdAmqBBRk7AoH2nPSd9BmnyY0Lx7/PlFNFZ06wOT+0FWiykToqkM65JunYgIXDdBQgcKdD9hBR0a9/cc2LsYH1gk4my6B5HWSIUuAFjl9cppM4H0msnS45KAahmIm63qzdfbOW0/CwzaN++qDxf2u5InjYkTdJHZ6pxcS8Ph/imzSWjJ7MjAofSCT5uuVspruwLSDJ83OWeA5nAwDcXUr82eiIKMKxGD2bVekiasw9G3uyYj0lh99CGhlLTP03awVBGQ2qgRdGQGv4sXSANdZjN5s2cNAuOMg0cZTgUNBKcZO1RvdcHdQCcgECkHKb7rT8YwNqxf0PA8jymf0wL4i3hfIF4jZ/uJ2vDnCT+A3XokIOMqTVjAAAAAElFTkSuQmCCdGlueQ==);position:absolute;top:10px;left:20%}.btn-login[data-v-6a1268ea]{width:106px;height:30px;border:1px solid #9780ff;background:transparent;border-radius:4px;color:#fff;display:flex;justify-content:center;align-items:center;color:#d3ccee;font-family:TajawalZii;font-size:15px;line-height:23px;letter-spacing:0px;text-align:center}.btn-login[data-v-6a1268ea]:hover{background:#9379ff;color:#c7b1f4}\n/*$vite$:1*/",document.head.appendChild(n),r("s",(function(){S("feedBack",k());var r=g._T("充值问题反馈"),n=Q(),i=N(n),u=i.feedbackContent,s=i.fileInfoMap,c=i.fileList,l=i.fileInput,f=O((()=>{var e=u.value.length>0;console.log("fileInfoMap",s.value);var t=!0;return s.value.forEach((e=>{e.uploaded||(t=!1)})),e&&t}));function h(){return h=o(a().mark((function e(t){var r,n,i,u,l,f,h;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.target,n=r.files,i=n?n.length:0,u=(u=3-c.value.length)<0?0:u,i=Math.min(i,u),l=a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n?n[h]:null)){e.next=5;break}if(!s.value.has(t.name)){e.next=4;break}return e.abrupt("return",{v:void 0});case 4:t.type.indexOf("image")>-1&&((r=new FileReader).onload=function(){var e=o(a().mark((function e(r){var n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(" img onload e",r,r.target.result),s.value.set(t.name,{coverUrl:r.target.result,type:t.type,name:t.name,uploaded:!1}),e.next=4,b(t);case 4:n=e.sent,(i=s.value.get(t.name))&&(i.remoteUrl=n,i.uploaded=!0,s.value.set(t.name,i));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.readAsDataURL(t),c.value.push(t));case 5:case"end":return e.stop()}}),e)})),h=0;case 8:if(!(h<i)){e.next=16;break}return e.delegateYield(l(),"t0",10);case 10:if(!(f=e.t0)){e.next=13;break}return e.abrupt("return",f.v);case 13:h++,e.next=8;break;case 16:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function p(){var e=navigator.userAgent,t="unknown",r="unknown";return/Android/.test(e)?(t="Android",r=/Android ([\d\.]+)/.test(e)?RegExp.$1:"unknown"):/iPhone|iPad|iPod/.test(e)?(t="iOS",r=/OS (\d+)_(\d+)_?(\d+)?/.test(e)?[RegExp.$1,RegExp.$2,RegExp.$3].join("."):"unknown"):/Windows/.test(e)?(t="Windows",r=/Windows NT ([\d\.]+)/.test(e)?RegExp.$1:"unknown"):/Mac OS X/.test(e)&&(t="Mac OS X",r=/Mac OS X (\d+)[_\.](\d+)[_\.]?(\d+)?/.test(e)?[RegExp.$1,RegExp.$2,RegExp.$3].join("."):"unknown"),r&&"."===r[r.length-1]&&(r=r.substring(0,r.length-1)),{os:t,version:r}}function d(){n.setFeedbackContent(""),n.setFileInfoMap(new Map),n.setFileList([])}function y(){return(y=o(a().mark((function r(){var n,i,o,c,l,h,y,v,A,m,b,w,x,k,E,L,O,I,S;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(f.value){r.next=2;break}return r.abrupt("return");case 2:if(u.value){r.next=5;break}return M(g._T("请输入反馈内容")),r.abrupt("return");case 5:if(!(u.value.length>300)){r.next=8;break}return M(g._T("文案过长，请调整文案字数")),r.abrupt("return");case 8:n=_.value.uid,i=u.value,console.log("submit url:",s.value),o=[],c=t(s.value.entries()),r.prev=13,c.s();case 15:if((l=c.n()).done){r.next=23;break}if(h=e(l.value,2),h[0],(y=h[1]).remoteUrl){r.next=19;break}return r.abrupt("return");case 19:v=y.remoteUrl||"",o.push(v);case 21:r.next=15;break;case 23:r.next=28;break;case 25:r.prev=25,r.t0=r.catch(13),c.e(r.t0);case 28:return r.prev=28,c.f(),r.finish(28);case 31:return o=o.filter((e=>e)),A=p(),m=A.os,b=A.version,w=`${m}`,x=b,k=g.api.getUUid(),console.log("222222"),r.next=39,T(n,i,o,w,x,k);case 39:if(E=r.sent,L=e(E,2),O=L[0],I=L[1],S=I.result,I.data,I.message,!O||0!==S){r.next=50;break}return d(),C.push({name:"feedbackSuccess"}),r.abrupt("return");case 50:case"end":return r.stop()}}),r,null,[[13,25,28,31]])})))).apply(this,arguments)}function v(e){return new Promise((t=>{try{var r=new FileReader;r.readAsBinaryString(e),r.onload=e=>{if(e.target){var r=H.hashBinary(e.target.result),n=(a=r,Uint8Array.from(a.match(/.{1,2}/g).map((e=>parseInt(e,16)))));t(btoa(String.fromCharCode.apply(null,n)))}var a}}catch(n){t("")}}))}function A(e,t,r,n){return m.apply(this,arguments)}function m(){return(m=o(a().mark((function e(t,r,n,i,o=0,u=!1){var s,c,l,f,h;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(l in s=t.tokens[0],c=JSON.parse(s.headers))f=c[l],c[l]=f.join(",");return e.prev=3,e.next=6,j.request({url:s.url||"",method:s.method,headers:c,data:n,timeout:3e5}).catch((e=>(console.info("upload2 catch",e),{status:-1e3,data:e.toString()})));case 6:h=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),console.info("upload2 err",e.t0),e.abrupt("return","");case 13:if(200!==h.status){e.next=22;break}if(console.log("link 222",u,s.result,s.url,""),!u){e.next=17;break}return e.abrupt("return",s.result||s.url||"");case 17:if(!(o<3)){e.next=21;break}return e.abrupt("return",A(t,r,n,i,o+1));case 21:return e.abrupt("return","");case 22:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return(w=o(a().mark((function e(t){var r,n,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return r=e.sent,n={name:t.name,size:t.size,content_type:t.type,md5:r},e.next=6,U("audit",[JSON.stringify(n)]);case 6:if(i=e.sent,!R(i)){e.next=14;break}return e.next=10,A(i[1].data,t.size,t,null,null,!0);case 10:if(o=e.sent,console.log("link 111 :",o),!o){e.next=14;break}return e.abrupt("return",o);case 14:return e.abrupt("return","");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return B((()=>{var e;e=window.innerHeight,g.getPlatform().isIPhone||window.addEventListener("resize",(()=>{var t=document.querySelector(".btn-area");if(console.log("resize:",t),t){if(g.getPlatform().isPc)return;window.innerHeight<e?t.style.position="static":t.style.position="fixed"}}))})),D(((e,t)=>("login"!==e.name&&d(),!0))),{expose:{},feedbackContent:u,title:r,userInfo:_,canSubmit:f,fileInput:l,fileList:c,fileInfoMap:s,report:G,close:W,submit:function(){return y.apply(this,arguments)},switchAccount:$,triggerFileInput:function(e){if(!l.value)return void console.log("fileInput is null");l.value.click()},getFile:function(e){return h.apply(this,arguments)},removeFile:function(e){s.value.delete(c.value[e].name),c.value.splice(e,1)},durationShow:function(e){if(!e)return"";var t=Math.floor(e/3600),r=Math.floor(e/60),n=Math.floor(e%60);t>0&&(t=t<10?"0"+t:t);if(r=r<10?"0"+r:r,n=n<10?"0"+n:n,!!t)return`${t}:${r}:${n}`;return`${r}:${n}`},showLargePic:function(e){if(!(c.value[e].type.indexOf("image")>-1))return;var t=document.getElementById("largeImage"),r=document.getElementById("overlay");t.src=s.value.get(c.value[e].name).coverUrl,t.classList.add("show_img"),r.style.display="flex"},showSmallPic:function(){var e=document.getElementById("largeImage"),t=document.getElementById("overlay");e.classList.remove("show_img"),t.style.display="none",e.src=""}}}));var F,Q=i("feedback",(()=>{var e=u(""),t=u(!1),r=u({}),n=u(null),a=u(new Map),i=u([]);return{feedbackContent:e,setFeedbackContent:function(t){e.value=t},canSubmit:t,setCanSubmit:function(e){t.value=e},userInfo:r,setUserInfo:function(e){r.value=e},fileInput:n,setFileInput:function(e){n.value=e},fileInfoMap:a,setFileInfoMap:function(e){a.value=e},fileList:i,addFile:function(e){i.value.push(e)},setFileList:function(e){i.value=e}}})),Z="ksa",X={class:"pcNav"},K={class:"pcNavInner"},q={key:1,class:"btn-login"};r("L",x(c({__name:"index.pc",props:{title:{}},emits:["toLogin"],setup(e,{emit:t}){var r=t,n=Z;function a(){z.value?(console.log("side login",J.value),J.value.close(),z.value=!1):d().skey?z.value=!0:r("toLogin")}return(e,t)=>{var r,i;return l(),f(w,null,[h("div",X,[h("div",K,[h("div",{class:"nameC",onClick:a},[null!==(r=p(d)().user)&&void 0!==r&&r.icon?(l(),f("div",{key:0,class:"avatar",style:y(p(d)().skey?{backgroundImage:`url(${null===(i=p(d)().user)||void 0===i?void 0:i.icon})`}:{})},null,4)):(l(),f("div",q,v(p(g._T)("去登录")),1))]),h("div",{class:A("ksa"===p(n)?"logoD":"logoC")},null,2)])]),p(z)?(l(),m(V,{key:0,ref_key:"sideLogin",ref:J,show:p(z)},null,8,["show"])):b("",!0)],64)}}}),[["__scopeId","data-v-6a1268ea"]]));function G(e,t={}){var r=k(),n=(null==r?void 0:r.proxy)||{};"test_report_ow"===e&&function(e,r={}){E.report(e,s(s({},r),t))}(e,{a:n.a})}!function(e){e.LOAD="LOAD",e.EXEC="EXEC",e.WRITE_FILE="WRITE_FILE",e.READ_FILE="READ_FILE",e.DELETE_FILE="DELETE_FILE",e.RENAME="RENAME",e.CREATE_DIR="CREATE_DIR",e.LIST_DIR="LIST_DIR",e.DELETE_DIR="DELETE_DIR",e.ERROR="ERROR",e.DOWNLOAD="DOWNLOAD",e.PROGRESS="PROGRESS",e.LOG="LOG",e.MOUNT="MOUNT",e.UNMOUNT="UNMOUNT"}(F||(F={}));var Y={exports:{}};!function(e){e.exports=function(e){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function r(e,t){var r=e[0],n=e[1],a=e[2],i=e[3];n=((n+=((a=((a+=((i=((i+=((r=((r+=(n&a|~n&i)+t[0]-680876936|0)<<7|r>>>25)+n|0)&n|~r&a)+t[1]-389564586|0)<<12|i>>>20)+r|0)&r|~i&n)+t[2]+606105819|0)<<17|a>>>15)+i|0)&i|~a&r)+t[3]-1044525330|0)<<22|n>>>10)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n&a|~n&i)+t[4]-176418897|0)<<7|r>>>25)+n|0)&n|~r&a)+t[5]+1200080426|0)<<12|i>>>20)+r|0)&r|~i&n)+t[6]-1473231341|0)<<17|a>>>15)+i|0)&i|~a&r)+t[7]-45705983|0)<<22|n>>>10)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n&a|~n&i)+t[8]+1770035416|0)<<7|r>>>25)+n|0)&n|~r&a)+t[9]-1958414417|0)<<12|i>>>20)+r|0)&r|~i&n)+t[10]-42063|0)<<17|a>>>15)+i|0)&i|~a&r)+t[11]-1990404162|0)<<22|n>>>10)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n&a|~n&i)+t[12]+1804603682|0)<<7|r>>>25)+n|0)&n|~r&a)+t[13]-40341101|0)<<12|i>>>20)+r|0)&r|~i&n)+t[14]-1502002290|0)<<17|a>>>15)+i|0)&i|~a&r)+t[15]+1236535329|0)<<22|n>>>10)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n&i|a&~i)+t[1]-165796510|0)<<5|r>>>27)+n|0)&a|n&~a)+t[6]-1069501632|0)<<9|i>>>23)+r|0)&n|r&~n)+t[11]+643717713|0)<<14|a>>>18)+i|0)&r|i&~r)+t[0]-373897302|0)<<20|n>>>12)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n&i|a&~i)+t[5]-701558691|0)<<5|r>>>27)+n|0)&a|n&~a)+t[10]+38016083|0)<<9|i>>>23)+r|0)&n|r&~n)+t[15]-660478335|0)<<14|a>>>18)+i|0)&r|i&~r)+t[4]-405537848|0)<<20|n>>>12)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n&i|a&~i)+t[9]+568446438|0)<<5|r>>>27)+n|0)&a|n&~a)+t[14]-1019803690|0)<<9|i>>>23)+r|0)&n|r&~n)+t[3]-187363961|0)<<14|a>>>18)+i|0)&r|i&~r)+t[8]+1163531501|0)<<20|n>>>12)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n&i|a&~i)+t[13]-1444681467|0)<<5|r>>>27)+n|0)&a|n&~a)+t[2]-51403784|0)<<9|i>>>23)+r|0)&n|r&~n)+t[7]+1735328473|0)<<14|a>>>18)+i|0)&r|i&~r)+t[12]-1926607734|0)<<20|n>>>12)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n^a^i)+t[5]-378558|0)<<4|r>>>28)+n|0)^n^a)+t[8]-2022574463|0)<<11|i>>>21)+r|0)^r^n)+t[11]+1839030562|0)<<16|a>>>16)+i|0)^i^r)+t[14]-35309556|0)<<23|n>>>9)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n^a^i)+t[1]-1530992060|0)<<4|r>>>28)+n|0)^n^a)+t[4]+1272893353|0)<<11|i>>>21)+r|0)^r^n)+t[7]-155497632|0)<<16|a>>>16)+i|0)^i^r)+t[10]-1094730640|0)<<23|n>>>9)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n^a^i)+t[13]+681279174|0)<<4|r>>>28)+n|0)^n^a)+t[0]-358537222|0)<<11|i>>>21)+r|0)^r^n)+t[3]-722521979|0)<<16|a>>>16)+i|0)^i^r)+t[6]+76029189|0)<<23|n>>>9)+a|0,n=((n+=((a=((a+=((i=((i+=((r=((r+=(n^a^i)+t[9]-640364487|0)<<4|r>>>28)+n|0)^n^a)+t[12]-421815835|0)<<11|i>>>21)+r|0)^r^n)+t[15]+530742520|0)<<16|a>>>16)+i|0)^i^r)+t[2]-995338651|0)<<23|n>>>9)+a|0,n=((n+=((i=((i+=(n^((r=((r+=(a^(n|~i))+t[0]-198630844|0)<<6|r>>>26)+n|0)|~a))+t[7]+1126891415|0)<<10|i>>>22)+r|0)^((a=((a+=(r^(i|~n))+t[14]-1416354905|0)<<15|a>>>17)+i|0)|~r))+t[5]-57434055|0)<<21|n>>>11)+a|0,n=((n+=((i=((i+=(n^((r=((r+=(a^(n|~i))+t[12]+1700485571|0)<<6|r>>>26)+n|0)|~a))+t[3]-1894986606|0)<<10|i>>>22)+r|0)^((a=((a+=(r^(i|~n))+t[10]-1051523|0)<<15|a>>>17)+i|0)|~r))+t[1]-2054922799|0)<<21|n>>>11)+a|0,n=((n+=((i=((i+=(n^((r=((r+=(a^(n|~i))+t[8]+1873313359|0)<<6|r>>>26)+n|0)|~a))+t[15]-30611744|0)<<10|i>>>22)+r|0)^((a=((a+=(r^(i|~n))+t[6]-1560198380|0)<<15|a>>>17)+i|0)|~r))+t[13]+1309151649|0)<<21|n>>>11)+a|0,n=((n+=((i=((i+=(n^((r=((r+=(a^(n|~i))+t[4]-145523070|0)<<6|r>>>26)+n|0)|~a))+t[11]-1120210379|0)<<10|i>>>22)+r|0)^((a=((a+=(r^(i|~n))+t[2]+718787259|0)<<15|a>>>17)+i|0)|~r))+t[9]-343485551|0)<<21|n>>>11)+a|0,e[0]=r+e[0]|0,e[1]=n+e[1]|0,e[2]=a+e[2]|0,e[3]=i+e[3]|0}function n(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}function a(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return r}function i(e){var t,a,i,o,u,s,c=e.length,l=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=c;t+=64)r(l,n(e.substring(t-64,t)));for(a=(e=e.substring(t-64)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<a;t+=1)i[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(i[t>>2]|=128<<(t%4<<3),t>55)for(r(l,i),t=0;t<16;t+=1)i[t]=0;return o=(o=8*c).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(o[2],16),s=parseInt(o[1],16)||0,i[14]=u,i[15]=s,r(l,i),l}function o(e){var t,n,i,o,u,s,c=e.length,l=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=c;t+=64)r(l,a(e.subarray(t-64,t)));for(n=(e=t-64<c?e.subarray(t-64):new Uint8Array(0)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)i[t>>2]|=e[t]<<(t%4<<3);if(i[t>>2]|=128<<(t%4<<3),t>55)for(r(l,i),t=0;t<16;t+=1)i[t]=0;return o=(o=8*c).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(o[2],16),s=parseInt(o[1],16)||0,i[14]=u,i[15]=s,r(l,i),l}function u(e){var r,n="";for(r=0;r<4;r+=1)n+=t[e>>8*r+4&15]+t[e>>8*r&15];return n}function s(e){var t;for(t=0;t<e.length;t+=1)e[t]=u(e[t]);return e.join("")}function c(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function l(e,t){var r,n=e.length,a=new ArrayBuffer(n),i=new Uint8Array(a);for(r=0;r<n;r+=1)i[r]=e.charCodeAt(r);return t?i:a}function f(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function h(e,t,r){var n=new Uint8Array(e.byteLength+t.byteLength);return n.set(new Uint8Array(e)),n.set(new Uint8Array(t),e.byteLength),n}function p(e){var t,r=[],n=e.length;for(t=0;t<n-1;t+=2)r.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,r)}function d(){this.reset()}return s(i("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(r,n){var a,i,o,u,s=this.byteLength,c=t(r,s),l=s;return n!==e&&(l=t(n,s)),c>l?new ArrayBuffer(0):(a=l-c,i=new ArrayBuffer(a),o=new Uint8Array(i),u=new Uint8Array(this,c,a),o.set(u),i)}}(),d.prototype.append=function(e){return this.appendBinary(c(e)),this},d.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,a=this._buff.length;for(t=64;t<=a;t+=64)r(this._hash,n(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},d.prototype.end=function(e){var t,r,n=this._buff,a=n.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<a;t+=1)i[t>>2]|=n.charCodeAt(t)<<(t%4<<3);return this._finish(i,a),r=s(this._hash),e&&(r=p(r)),this.reset(),r},d.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},d.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},d.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},d.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},d.prototype._finish=function(e,t){var n,a,i,o=t;if(e[o>>2]|=128<<(o%4<<3),o>55)for(r(this._hash,e),o=0;o<16;o+=1)e[o]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(n[2],16),i=parseInt(n[1],16)||0,e[14]=a,e[15]=i,r(this._hash,e)},d.hash=function(e,t){return d.hashBinary(c(e),t)},d.hashBinary=function(e,t){var r=s(i(e));return t?p(r):r},d.ArrayBuffer=function(){this.reset()},d.ArrayBuffer.prototype.append=function(e){var t,n=h(this._buff.buffer,e),i=n.length;for(this._length+=e.byteLength,t=64;t<=i;t+=64)r(this._hash,a(n.subarray(t-64,t)));return this._buff=t-64<i?new Uint8Array(n.buffer.slice(t-64)):new Uint8Array(0),this},d.ArrayBuffer.prototype.end=function(e){var t,r,n=this._buff,a=n.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<a;t+=1)i[t>>2]|=n[t]<<(t%4<<3);return this._finish(i,a),r=s(this._hash),e&&(r=p(r)),this.reset(),r},d.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},d.ArrayBuffer.prototype.getState=function(){var e=d.prototype.getState.call(this);return e.buff=f(e.buff),e},d.ArrayBuffer.prototype.setState=function(e){return e.buff=l(e.buff,!0),d.prototype.setState.call(this,e)},d.ArrayBuffer.prototype.destroy=d.prototype.destroy,d.ArrayBuffer.prototype._finish=d.prototype._finish,d.ArrayBuffer.hash=function(e,t){var r=s(o(new Uint8Array(e)));return t?p(r):r},d}()}(Y);var H=L(Y.exports),_=r("u",O((()=>{var e={},t=d(),r=t.user,n=t.skey,a=I(),i=a.pay2User,o=a.pay2Uid;return n&&r&&(e={icon:r.icon,nickname:r.nickname,display_uid:r.display_uid,type:"loginAccount",uid:r.uid}),i&&(e={icon:i.icon,nickname:i.nickname,display_uid:i.display_uid,type:"rechargeAccount",uid:o||i.uid}),e})));function W(){console.log("close"),P({name:"pay"})}function $(){C.push({name:"login",query:{from:"feedback"}})}}}}))}();