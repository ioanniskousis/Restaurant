!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";function r(n){return document.getElementById(n)}function o(n){return document.createElement(n)}t.r(e);var i=function(){const n=r("content"),e=o("div");n.appendChild(e)};function u(n){r("aboutUsTab").style.marginTop="0",r("menuTab").style.marginTop="0",r("contactTab").style.marginTop="0";r(["aboutUsTab","menuTab","contactTab"][n]).style.marginTop="20px"}!function(n){const e=r("content"),t=o("div");t.className="content-menu";const i=o("div");i.innerHTML="About Us",i.id="aboutUsTab",i.addEventListener("click",()=>{u(0),n(0)});const c=o("div");c.innerHTML="Menu",c.id="menuTab",c.addEventListener("click",()=>{u(1),n(1)});const a=o("div");a.innerHTML="Contact",a.id="contactTab",a.addEventListener("click",()=>{u(2),n(2)}),t.appendChild(i),t.appendChild(c),t.appendChild(a),e.appendChild(t)}((function(n){})),u(0),i()}]);