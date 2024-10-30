(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~dd4d408f"],{"09e7":function(e,t,i){"use strict";var n=i("be18"),o=i("535a"),r=i("2f63"),s=i("7d62"),a=i("e856"),c=i("52f0"),h=i("283e"),l=i("6596"),f=i("51a0");function u(e,t,i,n,o){this._tileset=e,this._tile=t,this._resource=i,this._geometries=void 0,this._metadata=void 0,this._batchTable=void 0,this._features=void 0,this.featurePropertiesDirty=!1,this._group=void 0,this._readyPromise=p(this,n,o)}function m(e){return function(t,i){Object(r["a"])(e._geometries)&&e._geometries.updateCommands(t,i)}}function d(e,t){let i,n,s,a,c;const l=Object(o["a"])(e.BOXES_LENGTH,0),f=Object(o["a"])(e.CYLINDERS_LENGTH,0),u=Object(o["a"])(e.ELLIPSOIDS_LENGTH,0),m=Object(o["a"])(e.SPHERES_LENGTH,0);if(l>0&&Object(r["a"])(e.BOX_BATCH_IDS)){const n=t.byteOffset+e.BOX_BATCH_IDS.byteOffset;i=new Uint16Array(t.buffer,n,l)}if(f>0&&Object(r["a"])(e.CYLINDER_BATCH_IDS)){const i=t.byteOffset+e.CYLINDER_BATCH_IDS.byteOffset;n=new Uint16Array(t.buffer,i,f)}if(u>0&&Object(r["a"])(e.ELLIPSOID_BATCH_IDS)){const i=t.byteOffset+e.ELLIPSOID_BATCH_IDS.byteOffset;s=new Uint16Array(t.buffer,i,u)}if(m>0&&Object(r["a"])(e.SPHERE_BATCH_IDS)){const i=t.byteOffset+e.SPHERE_BATCH_IDS.byteOffset;a=new Uint16Array(t.buffer,i,m)}const d=Object(r["a"])(i)||Object(r["a"])(n)||Object(r["a"])(s)||Object(r["a"])(a),b=l>0&&!Object(r["a"])(i)||f>0&&!Object(r["a"])(n)||u>0&&!Object(r["a"])(s)||m>0&&!Object(r["a"])(a);if(d&&b)throw new h["a"]("If one group of batch ids is defined, then all batch ids must be defined.");const p=!Object(r["a"])(i)&&!Object(r["a"])(n)&&!Object(r["a"])(s)&&!Object(r["a"])(a);if(p){let e=0;if(!Object(r["a"])(i)&&l>0)for(i=new Uint16Array(l),c=0;c<l;++c)i[c]=e++;if(!Object(r["a"])(n)&&f>0)for(n=new Uint16Array(f),c=0;c<f;++c)n[c]=e++;if(!Object(r["a"])(s)&&u>0)for(s=new Uint16Array(u),c=0;c<u;++c)s[c]=e++;if(!Object(r["a"])(a)&&m>0)for(a=new Uint16Array(m),c=0;c<m;++c)a[c]=e++}return{boxes:i,cylinders:n,ellipsoids:s,spheres:a}}Object.defineProperties(u.prototype,{featuresLength:{get:function(){return Object(r["a"])(this._batchTable)?this._batchTable.featuresLength:0}},pointsLength:{get:function(){return 0}},trianglesLength:{get:function(){return Object(r["a"])(this._geometries)?this._geometries.trianglesLength:0}},geometryByteLength:{get:function(){return Object(r["a"])(this._geometries)?this._geometries.geometryByteLength:0}},texturesByteLength:{get:function(){return 0}},batchTableByteLength:{get:function(){return Object(r["a"])(this._batchTable)?this._batchTable.batchTableByteLength:0}},innerContents:{get:function(){}},readyPromise:{get:function(){return this._readyPromise}},tileset:{get:function(){return this._tileset}},tile:{get:function(){return this._tile}},url:{get:function(){return this._resource.getUrlComponent(!0)}},metadata:{get:function(){return this._metadata},set:function(e){this._metadata=e}},batchTable:{get:function(){return this._batchTable}},group:{get:function(){return this._group},set:function(e){this._group=e}}});const b=Uint32Array.BYTES_PER_ELEMENT;function p(e,t,i){i=Object(o["a"])(i,0);const s=new Uint8Array(t),u=new DataView(t);i+=b;const p=u.getUint32(i,!0);if(1!==p)throw new h["a"](`Only Geometry tile version 1 is supported.  Version ${p} is not.`);i+=b;const g=u.getUint32(i,!0);if(i+=b,0===g)return void e._readyPromise.resolve(e);const y=u.getUint32(i,!0);if(i+=b,0===y)throw new h["a"]("Feature table must have a byte length greater than zero");const _=u.getUint32(i,!0);i+=b;const O=u.getUint32(i,!0);i+=b;const E=u.getUint32(i,!0);i+=b;const w=Object(a["a"])(s,i,y);i+=y;const S=new Uint8Array(t,i,_);let T,N;i+=_,O>0&&(T=Object(a["a"])(s,i,O),i+=O,E>0&&(N=new Uint8Array(t,i,E),N=new Uint8Array(N)));const j=Object(o["a"])(w.BOXES_LENGTH,0),L=Object(o["a"])(w.CYLINDERS_LENGTH,0),v=Object(o["a"])(w.ELLIPSOIDS_LENGTH,0),D=Object(o["a"])(w.SPHERES_LENGTH,0),P=j+L+v+D,C=new l["a"](e,P,T,N,m(e));if(e._batchTable=C,0===P)return;const I=e.tile.computedTransform;let B;Object(r["a"])(w.RTC_CENTER)&&(B=n["a"].unpack(w.RTC_CENTER),c["a"].multiplyByPoint(I,B,B));const x=d(w,S);if(j>0||L>0||v>0||D>0){let t,i,n,o;if(j>0){const e=S.byteOffset+w.BOXES.byteOffset;t=new Float32Array(S.buffer,e,f["a"].packedBoxLength*j)}if(L>0){const e=S.byteOffset+w.CYLINDERS.byteOffset;i=new Float32Array(S.buffer,e,f["a"].packedCylinderLength*L)}if(v>0){const e=S.byteOffset+w.ELLIPSOIDS.byteOffset;n=new Float32Array(S.buffer,e,f["a"].packedEllipsoidLength*v)}if(D>0){const e=S.byteOffset+w.SPHERES.byteOffset;o=new Float32Array(S.buffer,e,f["a"].packedSphereLength*D)}return e._geometries=new f["a"]({boxes:t,boxBatchIds:x.boxes,cylinders:i,cylinderBatchIds:x.cylinders,ellipsoids:n,ellipsoidBatchIds:x.ellipsoids,spheres:o,sphereBatchIds:x.spheres,center:B,modelMatrix:I,batchTable:C,boundingVolume:e.tile.boundingVolume.boundingVolume}),e._geometries.readyPromise.then((function(){return e}))}return Promise.resolve(e)}function g(e){const t=e.featuresLength;if(!Object(r["a"])(e._features)&&t>0){const i=new Array(t);Object(r["a"])(e._geometries)&&e._geometries.createFeatures(e,i),e._features=i}}u.prototype.hasProperty=function(e,t){return this._batchTable.hasProperty(e,t)},u.prototype.getFeature=function(e){return g(this),this._features[e]},u.prototype.applyDebugSettings=function(e,t){Object(r["a"])(this._geometries)&&this._geometries.applyDebugSettings(e,t)},u.prototype.applyStyle=function(e){g(this),Object(r["a"])(this._geometries)&&this._geometries.applyStyle(e,this._features)},u.prototype.update=function(e,t){Object(r["a"])(this._geometries)&&(this._geometries.classificationType=this._tileset.classificationType,this._geometries.debugWireframe=this._tileset.debugWireframe,this._geometries.update(t)),Object(r["a"])(this._batchTable)&&this._geometries._ready&&this._batchTable.update(e,t)},u.prototype.isDestroyed=function(){return!1},u.prototype.destroy=function(){return this._geometries=this._geometries&&this._geometries.destroy(),this._batchTable=this._batchTable&&this._batchTable.destroy(),Object(s["a"])(this)},t["a"]=u},"5e59":function(e,t,i){"use strict";var n=i("535a"),o=i("d289");function r(e,t){this.near=Object(n["a"])(e,0),this.far=Object(n["a"])(t,0);const i=o["a"].NUMBER_OF_PASSES,r=new Array(i),s=new Array(i);for(let n=0;n<i;++n)r[n]=[],s[n]=0;this.commands=r,this.indices=s}t["a"]=r},"8a5f":function(e,t,i){"use strict";var n=i("bef8"),o=i("2f63"),r=i("283e"),s=i("3e5e");function a(e,t,i){this.type=e,Object(o["a"])(t)||("json"===e?t="application/json":"xml"===e?t="text/xml":"html"===e?t="text/html":"text"===e&&(t="text/plain")),this.format=t,Object(o["a"])(i)||("json"===e?i=c:"xml"===e?i=m:("html"===e||"text"===e)&&(i=T)),this.callback=i}function c(e){const t=[],i=e.features;for(let r=0;r<i.length;++r){const e=i[r],a=new s["a"];if(a.data=e,a.properties=e.properties,a.configureNameFromProperties(e.properties),a.configureDescriptionFromProperties(e.properties),Object(o["a"])(e.geometry)&&"Point"===e.geometry.type){const t=e.geometry.coordinates[0],i=e.geometry.coordinates[1];a.position=n["a"].fromDegrees(t,i)}t.push(a)}return t}const h="http://www.mapinfo.com/mxp",l="http://www.esri.com/wms",f="http://www.opengis.net/wfs",u="http://www.opengis.net/gml";function m(e){const t=e.documentElement;if("MultiFeatureCollection"===t.localName&&t.namespaceURI===h)return d(e);if("FeatureInfoResponse"===t.localName&&t.namespaceURI===l)return b(e);if("FeatureCollection"===t.localName&&t.namespaceURI===f)return p(e);if("ServiceExceptionReport"===t.localName)throw new r["a"]((new XMLSerializer).serializeToString(t));return"msGMLOutput"===t.localName?g(e):O(e)}function d(e){const t=[],i=e.documentElement,n=i.getElementsByTagNameNS(h,"Feature");for(let o=0;o<n.length;++o){const e=n[o],i={},r=e.getElementsByTagNameNS(h,"Val");for(let t=0;t<r.length;++t){const e=r[t];if(e.hasAttribute("ref")){const t=e.getAttribute("ref"),n=e.textContent.trim();i[t]=n}}const a=new s["a"];a.data=e,a.properties=i,a.configureNameFromProperties(i),a.configureDescriptionFromProperties(i),t.push(a)}return t}function b(e){const t=e.documentElement,i=[];let n;const o=t.getElementsByTagNameNS("*","FIELDS");if(o.length>0)for(let r=0;r<o.length;++r){const e=o[r];n={};const t=e.attributes;for(let i=0;i<t.length;++i){const e=t[i];n[e.name]=e.value}i.push(_(e,n))}else{const e=t.getElementsByTagNameNS("*","FeatureInfo");for(let t=0;t<e.length;++t){const o=e[t];n={};const r=o.childNodes;for(let e=0;e<r.length;++e){const t=r[e];t.nodeType===Node.ELEMENT_NODE&&(n[t.localName]=t.textContent)}i.push(_(o,n))}}return i}function p(e){const t=[],i=e.documentElement,n=i.getElementsByTagNameNS(u,"featureMember");for(let o=0;o<n.length;++o){const e=n[o],i={};y(e,i),t.push(_(e,i))}return t}function g(e){const t=[];let i;const n=e.documentElement.childNodes;for(let o=0;o<n.length;o++)if(n[o].nodeType===Node.ELEMENT_NODE){i=n[o];break}if(!Object(o["a"])(i))throw new r["a"]("Unable to find first child of the feature info xml document");const s=i.childNodes;for(let o=0;o<s.length;++o){const e=s[o];if(e.nodeType===Node.ELEMENT_NODE){const i={};y(e,i),t.push(_(e,i))}}return t}function y(e,t){let i=!0;for(let n=0;n<e.childNodes.length;++n){const o=e.childNodes[n];o.nodeType===Node.ELEMENT_NODE&&(i=!1),"Point"!==o.localName&&"LineString"!==o.localName&&"Polygon"!==o.localName&&"boundedBy"!==o.localName&&(o.hasChildNodes()&&y(o,t)&&(t[o.localName]=o.textContent))}return i}function _(e,t){const i=new s["a"];return i.data=e,i.properties=t,i.configureNameFromProperties(t),i.configureDescriptionFromProperties(t),i}function O(e){const t=(new XMLSerializer).serializeToString(e),i=document.createElement("div"),n=document.createElement("pre");n.textContent=t,i.appendChild(n);const o=new s["a"];return o.data=e,o.description=i.innerHTML,[o]}const E=/<body>\s*<\/body>/im,w=/<ServiceExceptionReport([\s\S]*)<\/ServiceExceptionReport>/im,S=/<title>([\s\S]*)<\/title>/im;function T(e){if(E.test(e))return;if(w.test(e))return;let t;const i=S.exec(e);i&&i.length>1&&(t=i[1]);const n=new s["a"];return n.name=t,n.description=e,n.data=e,[n]}t["a"]=a},f3b8:function(e,t,i){"use strict";var n=i("a307");function o(e,t,i){this.context=e,this.commandList=[],this.shadowMaps=[],this.brdfLutGenerator=void 0,this.environmentMap=void 0,this.sphericalHarmonicCoefficients=void 0,this.specularEnvironmentMaps=void 0,this.specularEnvironmentMapsMaximumLOD=void 0,this.mode=n["a"].SCENE3D,this.morphTime=n["a"].getMorphTime(n["a"].SCENE3D),this.frameNumber=0,this.newFrame=!1,this.time=void 0,this.jobScheduler=i,this.mapProjection=void 0,this.camera=void 0,this.cameraUnderground=!1,this.globeTranslucencyState=void 0,this.cullingVolume=void 0,this.occluder=void 0,this.maximumScreenSpaceError=void 0,this.pixelRatio=1,this.passes={render:!1,pick:!1,depth:!1,postProcess:!1,offscreen:!1},this.creditDisplay=t,this.afterRender=[],this.scene3DOnly=!1,this.fog={enabled:!1,density:void 0,sse:void 0,minimumBrightness:void 0},this.terrainExaggeration=1,this.terrainExaggerationRelativeHeight=0,this.shadowState={shadowsEnabled:!0,shadowMaps:[],lightShadowMaps:[],nearPlane:1,farPlane:5e3,closestObjectSize:1e3,lastDirtyTime:0,outOfView:!0},this.splitPosition=0,this.frustumSplits=[],this.backgroundColor=void 0,this.light=void 0,this.minimumDisableDepthTestDistance=void 0,this.invertClassification=!1,this.invertClassificationColor=void 0,this.useLogDepth=!1,this.tilesetPassState=void 0,this.minimumTerrainHeight=0}t["a"]=o}}]);