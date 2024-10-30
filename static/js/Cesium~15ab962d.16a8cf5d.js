(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~15ab962d"],{"0b8f":function(e,t,i){"use strict";var n=i("933b"),s=i("7229"),o=i("8dfe"),r=i("535a"),c=i("2f63"),d=i("7d62"),l=i("c909"),a=i.n(l);const h=576,u=100,m="#ffffff",p="#48b";function C(e,t){this.credit=e,this.count=Object(r["a"])(t,1)}function x(e,t){const i=e.length;for(let n=0;n<i;n++){const i=e[n];if(o["a"].equals(i,t))return!0}return!1}function g(e){const t=e._previousCesiumCredit,i=e._currentCesiumCredit;o["a"].equals(i,t)||(Object(c["a"])(t)&&e._cesiumCreditContainer.removeChild(t.element),Object(c["a"])(i)&&e._cesiumCreditContainer.appendChild(i.element),e._previousCesiumCredit=i)}const b="cesium-credit-delimiter";function _(e){const t=document.createElement("span");return t.textContent=e,t.className=b,t}function f(e,t){if(Object(c["a"])(t)){const i=document.createElement(t);i._creditId=e._creditId,i.appendChild(e),e=i}return e}function v(e,t,i,n){const s=e.childNodes;let o=-1;t.sort((function(e,t){return t.count-e.count}));for(let r=0;r<t.length;++r){const d=t[r].credit;if(Object(c["a"])(d)){if(o=r,Object(c["a"])(i)&&(o*=2,r>0)){const t=o-1;if(s.length<=t)e.appendChild(_(i));else{const n=s[t];n.className!==b&&e.replaceChild(_(i),n)}}const t=d.element;if(s.length<=o)e.appendChild(f(t,n));else{const i=s[o];i._creditId!==d._id&&e.replaceChild(f(t,n),i)}}}++o;while(o<s.length)e.removeChild(s[o])}function y(e){const t=e._lightboxCredits,i=e.viewport.clientWidth,n=e.viewport.clientHeight;i!==e._lastViewportWidth&&(i<h?(t.className="cesium-credit-lightbox cesium-credit-lightbox-mobile",t.style.marginTop="0"):(t.className="cesium-credit-lightbox cesium-credit-lightbox-expanded",t.style.marginTop=Math.floor(.5*(n-t.clientHeight))+"px"),e._lastViewportWidth=i),i>=h&&n!==e._lastViewportHeight&&(t.style.marginTop=Math.floor(.5*(n-t.clientHeight))+"px",e._lastViewportHeight=n)}function w(e,t){let i=e+" {";for(const n in t)t.hasOwnProperty(n)&&(i+=`${n}: ${t[n]}; `);return i+=" }\n",i}function E(){let e="";e+=w(".cesium-credit-lightbox-overlay",{display:"none","z-index":"1",position:"absolute",top:"0",left:"0",width:"100%",height:"100%","background-color":"rgba(80, 80, 80, 0.8)"}),e+=w(".cesium-credit-lightbox",{"background-color":"#303336",color:m,position:"relative","min-height":u+"px",margin:"auto"}),e+=w(".cesium-credit-lightbox > ul > li a, .cesium-credit-lightbox > ul > li a:visited",{color:m}),e+=w(".cesium-credit-lightbox > ul > li a:hover",{color:p}),e+=w(".cesium-credit-lightbox.cesium-credit-lightbox-expanded",{border:"1px solid #444","border-radius":"5px","max-width":"370px"}),e+=w(".cesium-credit-lightbox.cesium-credit-lightbox-mobile",{height:"100%",width:"100%"}),e+=w(".cesium-credit-lightbox-title",{padding:"20px 20px 0 20px"}),e+=w(".cesium-credit-lightbox-close",{"font-size":"18pt",cursor:"pointer",position:"absolute",top:"0",right:"6px",color:m}),e+=w(".cesium-credit-lightbox-close:hover",{color:p}),e+=w(".cesium-credit-lightbox > ul",{margin:"0",padding:"12px 20px 12px 40px","font-size":"13px"}),e+=w(".cesium-credit-lightbox > ul > li",{"padding-bottom":"6px"}),e+=w(".cesium-credit-lightbox > ul > li *",{padding:"0",margin:"0"}),e+=w(".cesium-credit-expand-link",{"padding-left":"5px",cursor:"pointer","text-decoration":"underline",color:m}),e+=w(".cesium-credit-expand-link:hover",{color:p}),e+=w(".cesium-credit-text",{color:m}),e+=w(".cesium-credit-textContainer *, .cesium-credit-logoContainer *",{display:"inline"});const t=document.head,i=document.createElement("style");i.innerHTML=e,t.insertBefore(i,t.firstChild)}function O(e,t,i){const s=this;i=Object(r["a"])(i,document.body);const c=document.createElement("div");c.className="cesium-credit-lightbox-overlay",i.appendChild(c);const d=document.createElement("div");function l(e){d.contains(e.target)||s.hideLightbox()}d.className="cesium-credit-lightbox",c.appendChild(d),c.addEventListener("click",l,!1);const a=document.createElement("div");a.className="cesium-credit-lightbox-title",a.textContent="Data provided by:",d.appendChild(a);const h=document.createElement("a");h.onclick=this.hideLightbox.bind(this),h.innerHTML="&times;",h.className="cesium-credit-lightbox-close",d.appendChild(h);const u=document.createElement("ul");d.appendChild(u);const m=document.createElement("div");m.className="cesium-credit-logoContainer",m.style.display="inline",e.appendChild(m);const p=document.createElement("div");p.className="cesium-credit-textContainer",p.style.display="inline",e.appendChild(p);const C=document.createElement("a");C.className="cesium-credit-expand-link",C.onclick=this.showLightbox.bind(this),C.textContent="Data attribution",e.appendChild(C),E();const x=o["a"].clone(O.cesiumCredit);this._delimiter=Object(r["a"])(t," • "),this._screenContainer=p,this._cesiumCreditContainer=m,this._lastViewportHeight=void 0,this._lastViewportWidth=void 0,this._lightboxCredits=d,this._creditList=u,this._lightbox=c,this._hideLightbox=l,this._expandLink=C,this._expanded=!1,this._defaultCredits=[],this._cesiumCredit=x,this._previousCesiumCredit=void 0,this._currentCesiumCredit=x,this._creditDisplayElementPool=[],this._creditDisplayElementIndex=0,this._currentFrameCredits={screenCredits:new n["a"],lightboxCredits:new n["a"]},this._defaultCredit=void 0,this.viewport=i,this.container=e}function L(e,t,i,n){n=Object(r["a"])(n,1);let s=t.get(i.id);if(Object(c["a"])(s))s.count<Number.MAX_VALUE&&(s.count+=n);else{const o=e._creditDisplayElementPool,r=e._creditDisplayElementPoolIndex;r<o.length?(s=o[r],s.credit=i,s.count=n):(s=new C(i,n),o.push(s)),++e._creditDisplayElementPoolIndex,t.set(i.id,s)}}let k;function j(){if(!Object(c["a"])(k)){let e=Object(s["a"])("Assets/Images/ion-credit.png");if(0!==e.indexOf("http://")&&0!==e.indexOf("https://")&&0!==e.indexOf("data:")){const t=new a.a(e);e=t.path()}k=new o["a"](`<a href="https://cesium.com/" target="_blank"><img src="${e}" title="Cesium ion"/></a>`,!0)}return O._cesiumCreditInitialized||(O._cesiumCredit=k,O._cesiumCreditInitialized=!0),k}O.prototype.addCredit=function(e){if(e._isIon)return Object(c["a"])(this._defaultCredit)||(this._defaultCredit=o["a"].clone(j())),void(this._currentCesiumCredit=this._defaultCredit);let t;t=e.showOnScreen?this._currentFrameCredits.screenCredits:this._currentFrameCredits.lightboxCredits,L(this,t,e)},O.prototype.addDefaultCredit=function(e){const t=this._defaultCredits;x(t,e)||t.push(e)},O.prototype.removeDefaultCredit=function(e){const t=this._defaultCredits,i=t.indexOf(e);-1!==i&&t.splice(i,1)},O.prototype.showLightbox=function(){this._lightbox.style.display="block",this._expanded=!0},O.prototype.hideLightbox=function(){this._lightbox.style.display="none",this._expanded=!1},O.prototype.update=function(){this._expanded&&y(this)},O.prototype.beginFrame=function(){const e=this._currentFrameCredits;this._creditDisplayElementPoolIndex=0;const t=e.screenCredits;t.removeAll();const i=this._defaultCredits;for(let n=0;n<i.length;++n){const e=i[n];L(this,t,e,Number.MAX_VALUE)}e.lightboxCredits.removeAll(),o["a"].equals(O.cesiumCredit,this._cesiumCredit)||(this._cesiumCredit=o["a"].clone(O.cesiumCredit)),this._currentCesiumCredit=this._cesiumCredit},O.prototype.endFrame=function(){const e=this._currentFrameCredits.screenCredits.values;v(this._screenContainer,e,this._delimiter,void 0);const t=this._currentFrameCredits.lightboxCredits.values;this._expandLink.style.display=t.length>0?"inline":"none",v(this._creditList,t,void 0,"li"),g(this)},O.prototype.destroy=function(){return this._lightbox.removeEventListener("click",this._hideLightbox,!1),this.container.removeChild(this._cesiumCreditContainer),this.container.removeChild(this._screenContainer),this.container.removeChild(this._expandLink),this.viewport.removeChild(this._lightbox),Object(d["a"])(this)},O.prototype.isDestroyed=function(){return!1},O._cesiumCredit=void 0,O._cesiumCreditInitialized=!1,Object.defineProperties(O,{cesiumCredit:{get:function(){return j(),O._cesiumCredit},set:function(e){O._cesiumCredit=e,O._cesiumCreditInitialized=!0}}}),O.CreditDisplayElement=C,t["a"]=O}}]);