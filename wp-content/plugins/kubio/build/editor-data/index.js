this.kubio=this.kubio||{},this.kubio.editorData=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=552)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e){!function(){t.exports=this.wp.compose}()},2:function(t,e){!function(){t.exports=this.lodash}()},21:function(t,e){!function(){t.exports=this.kubio.constants}()},34:function(t,e){!function(){t.exports=this.wp.url}()},39:function(t,e,n){"use strict";t.exports=n(68)},41:function(t,e,n){"use strict";var r,o,u,c=n(69),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){u=!1}function l(t){if(t){if(t!==r){if(t.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==i&&(r=i,s())}function a(){return u||(u=function(){r||l(i);for(var t,e=r.split(""),n=[],o=c.nextValue();e.length>0;)o=c.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||i},characters:function(t){return l(t),r},seed:function(t){c.seed(t),o!==t&&(s(),o=t)},lookup:function(t){return a()[t]},shuffled:a}},552:function(t,e,n){"use strict";n.r(e),n.d(e,"useSessionProp",(function(){return O})),n.d(e,"SESSION_STORE_KEY",(function(){return f.SESSION_STORE_KEY})),n.d(e,"GLOBAL_SESSION_ID",(function(){return f.GLOBAL_SESSION_ID})),n.d(e,"withSessionProps",(function(){return E})),n.d(e,"useGlobalSessionProp",(function(){return S})),n.d(e,"useBlocksOwnerDocument",(function(){return g})),n.d(e,"withBlocksOwnerDocument",(function(){return _})),n.d(e,"useOwnerDocumentChanged",(function(){return j})),n.d(e,"useCurrentPageBodyClasses",(function(){return w})),n.d(e,"useCurrentPageTitle",(function(){return m})),n.d(e,"useSetGlobalSessionProp",(function(){return h})),n.d(e,"useGetGlobalSessionProp",(function(){return b})),n.d(e,"useEditorIsLoadedChanged",(function(){return v})),n.d(e,"useSetPageTitle",(function(){return x}));var r=n(7),o=n(0),u=n(10),c=n(8),i=n(1),s=n(34),l=n(2),a=n(39),f=n(21),d=n(89);const p={};Object(c.registerStore)(f.SESSION_STORE_KEY,{reducer:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,{type:e,clientId:n,prop:r,value:o}=arguments.length>1?arguments[1]:void 0;if("SET_PROP"===e){const e="kubio-dummy-value"+Object(a.generate)(),u=Object(l.get)(t,`${n}.${r}`,e);if(u===e||!Object(l.isEqual)(u,o)){const e=Object(l.set)({},`${n}.${r}`,o);return Object(l.merge)({},t,e)}return t}},actions:{setProp:(t,e,n)=>({type:"SET_PROP",clientId:t,prop:e,value:n})},selectors:{getProp:(t,e,n,r)=>e?Object(l.get)(t,`${e}.${n}`,r):r}});const O=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=Object(c.useSelect)((r=>r(f.SESSION_STORE_KEY).getProp(t,e,n)),[]),{setProp:u}=Object(c.useDispatch)(f.SESSION_STORE_KEY),i=Object(o.useCallback)(((t,e,r)=>{const o=Object(c.select)(f.SESSION_STORE_KEY).getProp(t,e,n);Object(l.isEqual)(o,r)||u(t,e,r)}),[r]),s=Object(o.useCallback)((n=>i(t,e,n)),[t,e]);return[r,s]},h=t=>{const[,e]=O(f.GLOBAL_SESSION_ID,t);return e},b=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const[n]=O(f.GLOBAL_SESSION_ID,t,e),[r,u]=Object(o.useState)(n);return Object(o.useEffect)((()=>{Object(l.isEqual)(r,n)||u(n)}),[n]),r},S=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return O(f.GLOBAL_SESSION_ID,t,e)},g=()=>b("blocksOwnerDocument",window.document),v=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.noop;const e=b("ready",!1),[n,r]=Object(o.useState)(null);Object(o.useEffect)((()=>{if(null===n||e!==n)return r(n),t(e)}),[e])},j=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.noop;const e=g(),n=Object(o.useRef)(null);Object(o.useEffect)((()=>{if(!n.current||!e.isSameNode(n.current))return n.current=e,t(e)}),[e])},E=()=>Object(u.createHigherOrderComponent)((t=>e=>{const{clientId:n}=e,{getProp:u}=Object(c.useSelect)((t=>t(f.SESSION_STORE_KEY)),[n]),{setProp:i}=Object(c.useDispatch)(f.SESSION_STORE_KEY),s={getValue:(t,e)=>u(n,t,e),setValue:(t,e)=>i(n,t,e)};return Object(o.createElement)(t,Object(r.a)({},e,{sessionProps:s}))}),"withSessionProps"),_=()=>Object(u.createHigherOrderComponent)((t=>e=>{const n=g();return Object(o.createElement)(t,Object(r.a)({},e,{ownerDocument:n}))}),"withBlocksOwnerDocument"),w=()=>{const t=Object(c.useSelect)((t=>{var e;return null===(e=t(f.STORE_KEY).getPage())||void 0===e?void 0:e.path}),[]),[e,n]=S("pagesClasses",{});Object(o.useEffect)((()=>{!t||null!=e&&e[t]||(n({...e,[t]:[]}),window.fetch(Object(s.addQueryArgs)(t,{"__kubio-body-class":1})).then((t=>t.json())).then((r=>{var o,u;Object(l.isArray)(null==r||null===(o=r.data)||void 0===o?void 0:o.bodyClass)&&n({...e,[t]:null==r||null===(u=r.data)||void 0===u?void 0:u.bodyClass})})))}),[t,n,e]);return Object(o.useMemo)((()=>(null==e?void 0:e[t])||[]),[e,t])},x=()=>{const[t,e]=S("pagesTitles",{});return(n,r)=>e({...t,[n]:{title:r,isLoading:!1}})},m=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"placeholder",title:Object(i.__)("Page title placeholder","kubio")};const e=Object(c.useSelect)((t=>{var e;return null===(e=t(f.STORE_KEY).getPage())||void 0===e?void 0:e.path}),[]),[n,r]=S("pagesTitles",{});Object(d.useEffectAsync)((async()=>{var t;!e||null!=n&&n[e]||null!==(t=n[e])&&void 0!==t&&t.isLoading||(r({...n,[e]:{isLoading:!0}}),window.fetch(Object(s.addQueryArgs)(e,{"__kubio-page-title":1})).then((t=>t.json())).then((t=>{t.data&&r({...n,[e]:{...t.data,isLoading:!1}})})))}),[e,n,r]);const u=Object(o.useMemo)((()=>{const r=null==n?void 0:n[e];return!r||r.isLoading?t:r}),[n,e,t]);return u}},68:function(t,e,n){"use strict";var r=n(41),o=n(70),u=n(74),c=n(75)||0;function i(){return o(c)}t.exports=i,t.exports.generate=i,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return c=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=u},69:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},7:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}n.d(e,"a",(function(){return r}))},70:function(t,e,n){"use strict";var r,o,u=n(71);n(41);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=u(7),e+=u(t),r>0&&(e+=u(r)),e+=u(n)}},71:function(t,e,n){"use strict";var r=n(41),o=n(72),u=n(73);t.exports=function(t){for(var e,n=0,c="";!e;)c+=u(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return c}},72:function(t,e,n){"use strict";var r,o="object"==typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(t){return o.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},73:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),u="";;)for(var c=t(o),i=o;i--;)if((u+=e[c[i]&r]||"").length===+n)return u}},74:function(t,e,n){"use strict";var r=n(41);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},75:function(t,e,n){"use strict";t.exports=0},8:function(t,e){!function(){t.exports=this.wp.data}()},89:function(t,e){!function(){t.exports=this.kubio.coreHooks}()}});
