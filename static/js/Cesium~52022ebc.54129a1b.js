(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~52022ebc"],{"21d7":function(t,e,s){"use strict";var n=s("2f63");function i(){this._listeners=[],this._scopes=[],this._toRemove=[],this._insideRaiseEvent=!1}function o(t,e){return e-t}Object.defineProperties(i.prototype,{numberOfListeners:{get:function(){return this._listeners.length-this._toRemove.length}}}),i.prototype.addEventListener=function(t,e){this._listeners.push(t),this._scopes.push(e);const s=this;return function(){s.removeEventListener(t,e)}},i.prototype.removeEventListener=function(t,e){const s=this._listeners,n=this._scopes;let i=-1;for(let o=0;o<s.length;o++)if(s[o]===t&&n[o]===e){i=o;break}return-1!==i&&(this._insideRaiseEvent?(this._toRemove.push(i),s[i]=void 0,n[i]=void 0):(s.splice(i,1),n.splice(i,1)),!0)},i.prototype.raiseEvent=function(){let t;this._insideRaiseEvent=!0;const e=this._listeners,s=this._scopes;let i=e.length;for(t=0;t<i;t++){const i=e[t];Object(n["a"])(i)&&e[t].apply(s[t],arguments)}const r=this._toRemove;if(i=r.length,i>0){for(r.sort(o),t=0;t<i;t++){const n=r[t];e.splice(n,1),s.splice(n,1)}r.length=0}this._insideRaiseEvent=!1},e["a"]=i},eff8:function(t,e,s){"use strict";function n(){this._removalFunctions=[]}n.prototype.add=function(t,e,s){const n=t.addEventListener(e,s);this._removalFunctions.push(n);const i=this;return function(){n();const t=i._removalFunctions;t.splice(t.indexOf(n),1)}},n.prototype.removeAll=function(){const t=this._removalFunctions;for(let e=0,s=t.length;e<s;++e)t[e]();t.length=0},e["a"]=n}}]);