// VERSION: 1.11.0, TIMESTAMP: 2/10/2021, 9:00:31 PM
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){var r,o;!function(i){if(void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=a,u}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var c in i)i[c]&&(u+="; "+c,!0!==i[c]&&(u+="="+i[c].split(";")[0]));return document.cookie=t+"="+n+u}}function a(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var u=i[a].split("="),c=u.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(u[0]);if(c=(r.read||r)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(o[l]=c,e===l)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=n(10),o=n(11),i=n(4),a=n(12);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},,function(e,t,n){var r=n(5);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(13),o=n(14),i=n(4),a=n(15);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},function(e,t,n){e.exports=n(16)},function(e,t){[Element.prototype,CharacterData.prototype,DocumentType.prototype].filter(Boolean).forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode&&this.parentNode.removeChild(this)}})}))},function(e,t){function n(){var e,t=this.parentNode,n=arguments.length;if(t)for(n||t.removeChild(this);n--;)"object"!=typeof(e=arguments[n])?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),n?t.insertBefore(this.previousSibling,e):t.replaceChild(e,this)}Element.prototype.replaceWith||(Element.prototype.replaceWith=n),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=n),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=n)},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){var r=n(5);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n.r(t);n(8),n(9);function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(e){if(!e.html)return!1;if(e.domElement&&document.documentElement.contains(e.domElement))return!1;var t=document.querySelector(e.selector);if(!t)return!1;var n=a(e.html);return null!=n&&(t.replaceWith(n),e.domElement=n,e.baselineElement=t,!0)},a=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},u=function(e){try{!function(e){var t,n=Date.now();do{t=0;var o,a=r(e);try{for(a.s();!(o=a.n()).done;){var u=o.value;i(u)&&t++}}catch(e){a.e(e)}finally{a.f()}}while(t>0);var c=Date.now()-n;console.debug("Variant insertion took",c,"ms")}(e)}catch(e){console.error("Error inserting variants",e)}},c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),l=new Uint8Array(16);function d(){if(!c)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(l)}for(var s=[],f=0;f<256;++f)s[f]=(f+256).toString(16).substr(1);var p=function(e,t){var n=t||0,r=s;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")};var m=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||d)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var i=0;i<16;++i)t[r+i]=o[i];return t||p(o)},v=n(1),y=n.n(v),w=n(0),g=n.n(w);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O,_=function(){return{customer_id:window._czCustomerId,url:window.location.href,user_id:g.a.get("cauzal_user_id")||g.a.get("cauzal_client_id"),google_user_id:g.a.get("_ga")}},S=function(e,t){return h(h({},_()),{},{request_id:e,features:{referrer:{string_value:document.referrer}},holdout:t})},z=function(e){g.a.set("cauzal_holdout",e,{domain:window._czDomain,expires:1e3})},E=function(){return"HOLDOUT"===g.a.get("cauzal_holdout")},C=!1,T=[],j=new MutationObserver((function(e){var t=e.some((function(e){var t;return(null===(t=e.addedNodes)||void 0===t?void 0:t.length)>0}));window._czIgnoreVariants?(console.debug("Block call flag set... detaching listener"),j.disconnect()):t&&(j.disconnect(),u(T),D())})),x=function(){var e=document.documentElement;e.className=e.className.replace(RegExp(" ?cauzal-hidden"),"")},P=function(){document.documentElement.className+=" cauzal-hidden"},I=function(e){C||(u(T=e),x())},D=function(){document.body?j.observe(document.body,{childList:!0,subtree:!0}):console.error("Attempted to listen for changes but body is null")},N=function(){x(),clearTimeout(O)},R=function(e){var t=new XMLHttpRequest;t.open("POST",window._czServerAddr+"/cauzal.VariantService/NotifyTimeout",!0),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({request_id:e,customer_id:window._czCustomerId}))},A=function(e){var t=new XMLHttpRequest;t.open("POST",window._czServerAddr+"/cauzal.VariantService/GetVariant",!0),t.setRequestHeader("Content-Type","text/plain"),t.onload=function(){var e;t.status>=200&&t.status<400?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];function t(){I(e),D()}C||(clearTimeout(O),"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t))}((null!==(e=JSON.parse(t.responseText))&&void 0!==e?e:{}).variants):N()},t.onerror=N,t.send(JSON.stringify(S(e,E())))};function L(e,t){try{return function(e,t){var n=new URL(e),r=new URL(t);return r.host===n.host&&r.pathname===n.pathname}(e,t)}catch(e){return!1}}var M=n(2),k=n.n(M);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e,t){if(e){t&&(t=V(t));var n=new XMLHttpRequest;n.open("POST",window._czServerAddr+"/cauzal.TrackingService/Event",!0),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify(H(H({},_()),{},{referrer:document.referrer,event_name:e,attributes:t})))}else console.log("Cauzal sendEvent() requires a name parameter")},V=function(e){var t={};return Object.entries(e).forEach((function(e){var n=k()(e,2),r=n[0],o=n[1];return t[r]=JSON.stringify(o)})),t};function J(e){var t;null===(t=e.components)||void 0===t||t.forEach((function(t){document.querySelector(t.selector)?t.subcomponents.forEach((function(n){if(!n.element||!document.documentElement.contains(n.element)){var r=document.querySelector(n.selector);r?(n.element=r,n.content&&(r.textContent=n.content),n.link&&"A"===r.tagName&&(r.href="javascript:void(0)",r.addEventListener("click",(function(){window.cauzalEvent("_cauzalComponentClick",{requestId:e.requestId,componentId:t.id}),window.location.href=window.location.protocol+"//"+t.url}),{capture:!0,once:!0}))):console.debug("Couldn't insert content optimization:",n,r)}})):console.debug("Couldn't find content optimization root element:",t)}))}var B,W=n(6),F=n.n(W),X=function(e){document.body.style.setProperty("position","relative"),document.body.style.setProperty("top",e+"px"),F()(document.body.getElementsByTagName("*")).forEach((function(t){var n=getComputedStyle(t,null);if("fixed"===n.getPropertyValue("position")){var r=t.dataset.cauzalTop||parseFloat(n.getPropertyValue("top"));r<e&&(t.dataset.cauzalTop=r,t.style.setProperty("top",r+e+"px"))}}))},G=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},$=new MutationObserver((function(e){e.some((function(e){var t;return(null===(t=e.addedNodes)||void 0===t?void 0:t.length)>0}))&&($.disconnect(),J(B),Z())})),Z=function(){$.observe(document.body,{childList:!0,subtree:!0})},K=function(e){function t(){J(B=e),function(e){var t=e.widgetHtml;if(t&&e.links&&e.links.length){var n=e.links[0],r=G(t);if(null!=r){var o=r.querySelector(".cauzal-content-title"),i=r.querySelector(".cauzal-link");Object.entries(n.properties).forEach((function(e){var t=k()(e,2),n=t[0],o=t[1],i=r.querySelector(".cauzal-"+n.replace(" ","-"));i&&(i.textContent=o)})),o&&(o.textContent=n.title),i&&(i.href="javascript:void(0)",i.addEventListener("click",(function(){console.log("event sent"),window.cauzalEvent("_cauzalWidgetClick",{requestId:e.requestId}),window.location.href=window.location.protocol+"//"+n.url}),{capture:!0,once:!0}));var a=r.querySelector(".cauzal-widget-close");a&&a.addEventListener("click",(function(e){"0px"===r.style.top&&X(0),r.remove()}));var u=function(){"0px"===r.style.top&&X(parseFloat(r.style.height)),document.body.append(r)};"loading"!==document.readyState?u():document.addEventListener("DOMContentLoaded",u)}}else console.debug("Ignoring widget... complete data not provided.")}(B),Z()}"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)},Q=function(){!function(e){var t=new XMLHttpRequest;t.open("POST",window._czServerAddr+"/cauzal.VariantService/PredictContent",!0),t.setRequestHeader("Content-Type","text/plain"),window._czPreviewRandom&&t.setRequestHeader("cauzal-random","true"),t.onload=function(){if(t.status>=200&&t.status<400){var e,n=null!==(e=JSON.parse(t.responseText))&&void 0!==e?e:{};K(n)}},t.send(JSON.stringify(S(e,E())))}(m())};!function(){var e,t;if(window.cauzalLoaded)console.debug("Cauzal has already been initialized");else if(window._czIgnoreVariants)console.debug("Cauzal editor prevented this page from making variant/tracking requests");else{window._czCustomerId="cauzal_customer_id",window._czDomain="",window._czHoldout=0.33;var n;(n=window._czDomain)&&!window.location.origin.includes(n)&&(window._czDomain=void 0);var r=document.getElementById("_cauzalTag");window._czServerAddr=(null==r?void 0:r.getAttribute("data-addr"))||"https://api.cauzal.ai";var o,i,a=null==r?void 0:r.getAttribute("data-consent-cookie");if(!a||g.a.get(a))!function(){if(!g.a.get("cauzal_user_id"))if(window._czDomain){var e={expires:1e3,domain:window._czDomain},t=g.a.get("cauzal_client_id")||m();g.a.set("cauzal_user_id",t,e)}else g.a.get("cauzal_client_id")||g.a.set("cauzal_client_id",m(),{expires:1e3})}(),g.a.get("cauzal_holdout")||(Math.random()<(window._czHoldout||0)?z("HOLDOUT"):z("NOT_HOLDOUT")),o=window.location.href,null!=(i=["https://www.fantasytrack.net/CauzalTest/", "http://localhost:7777/index.html", "https://try.babbel.com/100-experts-v3-blue-25off/"])&&i.some((function(e){return L(o,e)}))&&function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P();var n=m();O=setTimeout((function(){C=!0,N(),R(n)}),null!==(e=t.timeOutMillis)&&void 0!==e?e:250),A(n)}({timeOutMillis:600}),Q(),window.cauzalEvent=U,window.cauzalFetchProducts=function(e){return function(e,t){return new Promise((function(n,r){var o=m(),i=new XMLHttpRequest;i.open("POST",window._czServerAddr+"/cauzal.VariantService/TopProducts",!0),i.setRequestHeader("Content-Type","text/plain"),i.timeout=e.timeOutMillis||250;var a=function(){return r({status:i.status,message:i.statusText})};i.onload=function(){i.status>=200&&i.status<400?n(JSON.parse(i.responseText)):a()},i.ontimeout=function(){R(o),r({status:504,message:"Call timed out."})},i.onerror=a,i.send(JSON.stringify(S(o,t)))}))}({timeOutMillis:600},e.holdout)},null===(e=(t=window).cauzalOnload)||void 0===e||e.call(t),window.cauzalLoaded=!0;else console.debug("User has not yet consented to cookies")}}()}]);