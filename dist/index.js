"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function r(r,t){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var o,e,u=n.call(r),c=[];try{for(;(void 0===t||t-- >0)&&!(o=u.next()).done;)c.push(o.value)}catch(r){e={error:r}}finally{try{o&&!o.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}return c}function t(r,t,n){if(n||2===arguments.length)for(var o,e=0,u=t.length;e<u;e++)!o&&e in t||(o||(o=Array.prototype.slice.call(t,0,e)),o[e]=t[e]);return r.concat(o||Array.prototype.slice.call(t))}var n=function(){function n(){}return n.prototype.start=function(){var r=this.curry(this.sumNumber);console.log(r(1)(2)(6))},n.prototype.curry=function(n){return function o(){for(var e=[],u=0;u<arguments.length;u++)e[u]=arguments[u];return e.length>=n.length?n.apply(void 0,t([],r(e),!1)):function(){for(var n=[],u=0;u<arguments.length;u++)n[u]=arguments[u];return o.apply(void 0,t([],r(e.concat(n)),!1))}}},n.prototype.sumNumber=function(r,t,n){return r+t+n},n}();(new(function(){function r(){}return r.prototype.start=function(){(new n).start()},r}())).start();
//# sourceMappingURL=index.js.map
