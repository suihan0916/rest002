(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~6b38fa05"],{"43ee":function(e,t,i){"use strict";var n=i("c8d1"),a=i("670c"),s=i("be18"),r=i("a561"),o=i("bd8d"),c=i("535a"),u=i("2f63"),h=i("7d62"),d=i("21d7"),l=i("66bf"),p=i("52f0"),f=i("e42d"),_=i("188e"),m=i("b997"),g=i("6ef5"),b=i("6c84"),y=i("a913"),S=i("9d00");function O(e){e=Object(c["a"])(e,c["a"].EMPTY_OBJECT),this._planes=[],this._dirtyIndex=-1,this._multipleDirtyPlanes=!1,this._enabled=Object(c["a"])(e.enabled,!0),this.modelMatrix=p["a"].clone(Object(c["a"])(e.modelMatrix,p["a"].IDENTITY)),this.edgeColor=o["a"].clone(Object(c["a"])(e.edgeColor,o["a"].WHITE)),this.edgeWidth=Object(c["a"])(e.edgeWidth,0),this.planeAdded=new d["a"],this.planeRemoved=new d["a"],this._owner=void 0;const t=Object(c["a"])(e.unionClippingRegions,!1);this._unionClippingRegions=t,this._testIntersection=t?C:v,this._uint8View=void 0,this._float32View=void 0,this._clippingPlanesTexture=void 0;const i=e.planes;if(Object(u["a"])(i)){const e=i.length;for(let t=0;t<e;++t)this.add(i[t])}}function C(e){return e===l["a"].OUTSIDE}function v(e){return e===l["a"].INSIDE}function P(e,t){e._multipleDirtyPlanes=e._multipleDirtyPlanes||-1!==e._dirtyIndex&&e._dirtyIndex!==t,e._dirtyIndex=t}function x(e,t){const i=e.length;for(let n=0;n<i;++n)if(_["a"].equals(e[n],t))return n;return-1}Object.defineProperties(O.prototype,{length:{get:function(){return this._planes.length}},unionClippingRegions:{get:function(){return this._unionClippingRegions},set:function(e){this._unionClippingRegions!==e&&(this._unionClippingRegions=e,this._testIntersection=e?C:v)}},enabled:{get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e)}},texture:{get:function(){return this._clippingPlanesTexture}},owner:{get:function(){return this._owner}},clippingPlanesState:{get:function(){return this._unionClippingRegions?this._planes.length:-this._planes.length}}}),O.prototype.add=function(e){const t=this._planes.length,i=this;e.onChangeCallback=function(e){P(i,e)},e.index=t,P(this,t),this._planes.push(e),this.planeAdded.raiseEvent(e,t)},O.prototype.get=function(e){return this._planes[e]},O.prototype.contains=function(e){return-1!==x(this._planes,e)},O.prototype.remove=function(e){const t=this._planes,i=x(t,e);if(-1===i)return!1;e instanceof S["a"]&&(e.onChangeCallback=void 0,e.index=-1);const n=t.length-1;for(let a=i;a<n;++a){const e=t[a+1];t[a]=e,e instanceof S["a"]&&(e.index=a)}return this._multipleDirtyPlanes=!0,t.length=n,this.planeRemoved.raiseEvent(e,i),!0},O.prototype.removeAll=function(){const e=this._planes,t=e.length;for(let i=0;i<t;++i){const t=e[i];t instanceof S["a"]&&(t.onChangeCallback=void 0,t.index=-1),this.planeRemoved.raiseEvent(t,i)}this._multipleDirtyPlanes=!0,this._planes=[]};const I=new r["a"],E=new r["a"];function w(e,t,i){const a=e._uint8View,s=e._planes;let o=0;for(let c=t;c<i;++c){const e=s[c],t=n["a"].octEncodeToCartesian4(e.normal,E);a[o]=t.x,a[o+1]=t.y,a[o+2]=t.z,a[o+3]=t.w;const i=r["a"].packFloat(e.distance,I);a[o+4]=i.x,a[o+5]=i.y,a[o+6]=i.z,a[o+7]=i.w,o+=8}}function T(e,t,i){const n=e._float32View,a=e._planes;let s=0;for(let r=t;r<i;++r){const e=a[r],t=e.normal;n[s]=t.x,n[s+1]=t.y,n[s+2]=t.z,n[s+3]=e.distance,s+=4}}function A(e,t){const i=m["a"].maximumTextureSize;return t.x=Math.min(e,i),t.y=Math.ceil(e/t.x),t}const D=new a["a"];O.prototype.update=function(e){let t=this._clippingPlanesTexture;const i=e.context,n=O.useFloatTexture(i),a=n?this.length:2*this.length;if(Object(u["a"])(t)){const e=t.width*t.height;(e<a||a<.25*e)&&(t.destroy(),t=void 0,this._clippingPlanesTexture=void 0)}if(0===this.length)return;if(!Object(u["a"])(t)){const e=A(a,D);e.y*=2,n?(t=new y["a"]({context:i,width:e.x,height:e.y,pixelFormat:f["a"].RGBA,pixelDatatype:g["a"].FLOAT,sampler:b["a"].NEAREST,flipY:!1}),this._float32View=new Float32Array(e.x*e.y*4)):(t=new y["a"]({context:i,width:e.x,height:e.y,pixelFormat:f["a"].RGBA,pixelDatatype:g["a"].UNSIGNED_BYTE,sampler:b["a"].NEAREST,flipY:!1}),this._uint8View=new Uint8Array(e.x*e.y*4)),this._clippingPlanesTexture=t,this._multipleDirtyPlanes=!0}const s=this._dirtyIndex;if(this._multipleDirtyPlanes||-1!==s){if(this._multipleDirtyPlanes)n?(T(this,0,this._planes.length),t.copyFrom({source:{width:t.width,height:t.height,arrayBufferView:this._float32View}})):(w(this,0,this._planes.length),t.copyFrom({source:{width:t.width,height:t.height,arrayBufferView:this._uint8View}}));else{let e=0,i=0;n?(i=Math.floor(s/t.width),e=Math.floor(s-i*t.width),T(this,s,s+1),t.copyFrom({source:{width:1,height:1,arrayBufferView:this._float32View},xOffset:e,yOffset:i})):(i=Math.floor(2*s/t.width),e=Math.floor(2*s-i*t.width),w(this,s,s+1),t.copyFrom({source:{width:2,height:1,arrayBufferView:this._uint8View},xOffset:e,yOffset:i}))}this._multipleDirtyPlanes=!1,this._dirtyIndex=-1}};const L=new p["a"],j=new _["a"](s["a"].UNIT_X,0);O.prototype.computeIntersectionWithBoundingVolume=function(e,t){const i=this._planes,n=i.length;let a=this.modelMatrix;Object(u["a"])(t)&&(a=p["a"].multiply(t,a,L));let s=l["a"].INSIDE;!this.unionClippingRegions&&n>0&&(s=l["a"].OUTSIDE);for(let r=0;r<n;++r){const t=i[r];_["a"].transform(t,a,j);const n=e.intersectPlane(j);if(n===l["a"].INTERSECTING)s=n;else if(this._testIntersection(n))return n}return s},O.setOwner=function(e,t,i){e!==t[i]&&(t[i]=t[i]&&t[i].destroy(),Object(u["a"])(e)&&(e._owner=t,t[i]=e))},O.useFloatTexture=function(e){return e.floatingPointTexture},O.getTextureResolution=function(e,t,i){const n=e.texture;if(Object(u["a"])(n))return i.x=n.width,i.y=n.height,i;const a=O.useFloatTexture(t)?e.length:2*e.length,s=A(a,i);return s.y*=2,s},O.prototype.isDestroyed=function(){return!1},O.prototype.destroy=function(){return this._clippingPlanesTexture=this._clippingPlanesTexture&&this._clippingPlanesTexture.destroy(),Object(h["a"])(this)},t["a"]=O},"5a6c":function(e,t,i){"use strict";const n={TERRAIN:0,CESIUM_3D_TILE:1,BOTH:2,NUMBER_OF_CLASSIFICATION_TYPES:3};t["a"]=Object.freeze(n)},"9d00":function(e,t,i){"use strict";var n=i("be18"),a=i("2f63");function s(e,t){this._distance=t,this._normal=new r(e,this),this.onChangeCallback=void 0,this.index=-1}function r(e,t){this._clippingPlane=t,this._cartesian3=n["a"].clone(e)}Object.defineProperties(s.prototype,{distance:{get:function(){return this._distance},set:function(e){Object(a["a"])(this.onChangeCallback)&&e!==this._distance&&this.onChangeCallback(this.index),this._distance=e}},normal:{get:function(){return this._normal},set:function(e){Object(a["a"])(this.onChangeCallback)&&!n["a"].equals(this._normal._cartesian3,e)&&this.onChangeCallback(this.index),n["a"].clone(e,this._normal._cartesian3)}}}),s.fromPlane=function(e,t){return Object(a["a"])(t)?(t.normal=e.normal,t.distance=e.distance):t=new s(e.normal,e.distance),t},s.clone=function(e,t){return Object(a["a"])(t)?(t.normal=e.normal,t.distance=e.distance,t):new s(e.normal,e.distance)},Object.defineProperties(r.prototype,{x:{get:function(){return this._cartesian3.x},set:function(e){Object(a["a"])(this._clippingPlane.onChangeCallback)&&e!==this._cartesian3.x&&this._clippingPlane.onChangeCallback(this._clippingPlane.index),this._cartesian3.x=e}},y:{get:function(){return this._cartesian3.y},set:function(e){Object(a["a"])(this._clippingPlane.onChangeCallback)&&e!==this._cartesian3.y&&this._clippingPlane.onChangeCallback(this._clippingPlane.index),this._cartesian3.y=e}},z:{get:function(){return this._cartesian3.z},set:function(e){Object(a["a"])(this._clippingPlane.onChangeCallback)&&e!==this._cartesian3.z&&this._clippingPlane.onChangeCallback(this._clippingPlane.index),this._cartesian3.z=e}}}),t["a"]=s},b80d:function(e,t,i){"use strict";var n=i("cef5"),a=i("be18"),s=i("a561"),r=i("bd8d"),o=i("2bb9"),c=i("abab"),u=i("535a"),h=i("2f63"),d=i("7d62"),l=i("5e57"),p=i("0123"),f=i("52f0"),_=i("1b8d"),m=i("283e"),g=i("f806"),b=i("daa2"),y=i("555f"),S=i("9937"),O=i("c293"),C=i("8586"),v=i("89f5"),P=i("bc46"),x=i("b08e"),I=i("6289"),E=i("e349"),w=i("082a"),T=i("d007"),A=i("a307"),D=i("d8f6"),L=i("27aa");const j=new a["a"],M=E["a"].ModelState;function R(e){e=Object(u["a"])(e,u["a"].EMPTY_OBJECT);let t=e.gltf;if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),!(t instanceof Uint8Array))throw new m["a"]("Only binary glTF is supported as a classifier.");t=Object(v["a"])(t),Object(P["a"])(t),Object(y["a"])(t),Object(w["a"])(t),Object(T["a"])(t),S["a"].buffer(t,(function(e){if(!Object(h["a"])(e.extras._pipeline.source))throw new m["a"]("Buffer data must be embedded in the binary gltf.")}));const i=t.nodes,a=t.meshes,s=i[0],r=s.mesh;if(1!==i.length||!Object(h["a"])(r))throw new m["a"]("Only one node is supported for classification and it must have a mesh.");if(1!==a.length)throw new m["a"]("Only one mesh is supported when using b3dm for classification.");const o=a[0].primitives;if(1!==o.length)throw new m["a"]("Only one primitive per mesh is supported when using b3dm for classification.");const c=o[0].attributes.POSITION;if(!Object(h["a"])(c))throw new m["a"]("The mesh must have a position attribute.");const d=o[0].attributes._BATCHID;if(!Object(h["a"])(d))throw new m["a"]("The mesh must have a batch id attribute.");this._gltf=t,this.show=Object(u["a"])(e.show,!0),this.modelMatrix=f["a"].clone(Object(u["a"])(e.modelMatrix,f["a"].IDENTITY)),this._modelMatrix=f["a"].clone(this.modelMatrix),this._ready=!1;const l=this;this._readyPromise=new Promise(e=>{l._completeLoad=t=>{t.afterRender.push((function(){l._ready=!0,e(l)}))}}),this.debugShowBoundingVolume=Object(u["a"])(e.debugShowBoundingVolume,!1),this._debugShowBoundingVolume=!1,this.debugWireframe=Object(u["a"])(e.debugWireframe,!1),this._debugWireframe=!1,this._classificationType=e.classificationType,this._vertexShaderLoaded=e.vertexShaderLoaded,this._classificationShaderLoaded=e.classificationShaderLoaded,this._uniformMapLoaded=e.uniformMapLoaded,this._pickIdLoaded=e.pickIdLoaded,this._ignoreCommands=Object(u["a"])(e.ignoreCommands,!1),this._upAxis=Object(u["a"])(e.upAxis,x["a"].Y),this._batchTable=e.batchTable,this._computedModelMatrix=new f["a"],this._initialRadius=void 0,this._boundingSphere=void 0,this._scaledBoundingSphere=new n["a"],this._state=M.NEEDS_LOAD,this._loadResources=void 0,this._mode=void 0,this._dirty=!1,this._nodeMatrix=new f["a"],this._primitive=void 0,this._extensionsUsed=void 0,this._extensionsRequired=void 0,this._quantizedUniforms=void 0,this._buffers={},this._vertexArray=void 0,this._shaderProgram=void 0,this._uniformMap=void 0,this._geometryByteLength=0,this._trianglesLength=0,this._rtcCenter=void 0,this._rtcCenterEye=void 0,this._rtcCenter3D=void 0,this._rtcCenter2D=void 0}function k(e){const t=e.gltf,i=e._loadResources;S["a"].buffer(t,(function(e,t){i.buffers[t]=e.extras._pipeline.source}))}function B(e){const t=e.gltf.bufferViews,i=e._loadResources.vertexBuffersToCreate;S["a"].bufferView(e.gltf,(function(e,t){e.target===b["a"].ARRAY_BUFFER&&i.enqueue(t)}));const n=e._loadResources.indexBuffersToCreate,a={};S["a"].accessor(e.gltf,(function(e){const i=e.bufferView,s=t[i];s.target!==b["a"].ELEMENT_ARRAY_BUFFER||Object(h["a"])(a[i])||(a[i]=!0,n.enqueue({id:i,componentType:e.componentType}))}))}function V(e,t){const i=t._loadResources,n=t.gltf.bufferViews,a=n[e],s=i.getBuffer(a);t._buffers[e]=s,t._geometryByteLength+=s.byteLength}function U(e,t,i){const n=i._loadResources,a=i.gltf.bufferViews,s=a[e],r={typedArray:n.getBuffer(s),indexDatatype:t};i._buffers[e]=r,i._geometryByteLength+=r.typedArray.byteLength}function F(e){const t=e._loadResources;if(0!==t.pendingBufferLoads)return;const i=t.vertexBuffersToCreate,n=t.indexBuffersToCreate;while(i.length>0)V(i.dequeue(),e);while(n.length>0){const t=n.dequeue();U(t.id,t.componentType,e)}}function N(e,t){const i=t.gltf.meshes[0].primitives[0],n=E["a"].modifyShaderForQuantizedAttributes(t.gltf,i,e);return t._quantizedUniforms=n.uniforms,n.shader}function z(e,t){return Object(h["a"])(t)&&(e=t(e)),e}function G(e){const t=e.gltf,i=E["a"].getAttributeOrUniformBySemantic(t,"POSITION"),n=E["a"].getAttributeOrUniformBySemantic(t,"_BATCHID"),a={};a[i]=0,a[n]=1;const s=E["a"].getAttributeOrUniformBySemantic(t,"MODELVIEWPROJECTION");let r,o;if(Object(h["a"])(s))r=`uniform mat4 ${s};\n`,o=`${s} * vec4(${i}, 1.0)`;else{const e=E["a"].getAttributeOrUniformBySemantic(t,"PROJECTION");let n=E["a"].getAttributeOrUniformBySemantic(t,"MODELVIEW");Object(h["a"])(n)||(n=E["a"].getAttributeOrUniformBySemantic(t,"CESIUM_RTC_MODELVIEW")),r=`uniform mat4 ${n};\nuniform mat4 ${e};\n`,o=`${e} * ${n} * vec4(${i}, 1.0)`}const c=`    vec4 positionInClipCoords = ${o};\n`;let u=`attribute vec3 ${i};\nattribute float ${n};\n${r}void main() {\n${c}    gl_Position = czm_depthClamp(positionInClipCoords);\n}\n`;const d="#ifdef GL_EXT_frag_depth\n#extension GL_EXT_frag_depth : enable\n#endif\nvoid main() \n{ \n    gl_FragColor = vec4(1.0); \n    czm_writeDepthClamp();\n}\n";e.extensionsUsed.WEB3D_quantized_attributes&&(u=N(u,e));const l=z(u,e._vertexShaderLoaded),p=z(d,e._classificationShaderLoaded);e._shaderProgram={vertexShaderSource:l,fragmentShaderSource:p,attributeLocations:a}}function W(){return{POSITION:0,_BATCHID:1}}function q(e){const t=e._loadResources;if(!t.finishedBuffersCreation()||Object(h["a"])(e._vertexArray))return;const i=e._buffers,n=e.gltf,a=n.accessors,s=n.meshes,r=s[0].primitives,o=r[0],c=W(),u={};let d;if(S["a"].meshPrimitiveAttribute(o,(function(e,t){const s=c[t];if(Object(h["a"])(s)){const r=a[e];u[t]={index:s,vertexBuffer:i[r.bufferView],componentsPerAttribute:Object(C["a"])(r.type),componentDatatype:r.componentType,offsetInBytes:r.byteOffset,strideInBytes:Object(O["a"])(n,r)}}})),Object(h["a"])(o.indices)){const e=a[o.indices];d=i[e.bufferView]}e._vertexArray={attributes:u,indexBuffer:d}}Object.defineProperties(R.prototype,{gltf:{get:function(){return this._gltf}},gltfInternal:{get:function(){return this._gltf}},boundingSphere:{get:function(){const e=this.modelMatrix,t=f["a"].getScale(e,j),i=this._scaledBoundingSphere;return i.center=a["a"].multiplyComponents(this._boundingSphere.center,t,i.center),i.radius=a["a"].maximumComponent(t)*this._initialRadius,Object(h["a"])(this._rtcCenter)&&a["a"].add(this._rtcCenter,i.center,i.center),i}},ready:{get:function(){return this._ready}},readyPromise:{get:function(){return this._readyPromise}},dirty:{get:function(){return this._dirty}},extensionsUsed:{get:function(){return Object(h["a"])(this._extensionsUsed)||(this._extensionsUsed=E["a"].getUsedExtensions(this.gltf)),this._extensionsUsed}},extensionsRequired:{get:function(){return Object(h["a"])(this._extensionsRequired)||(this._extensionsRequired=E["a"].getRequiredExtensions(this.gltf)),this._extensionsRequired}},upAxis:{get:function(){return this._upAxis}},trianglesLength:{get:function(){return this._trianglesLength}},geometryByteLength:{get:function(){return this._geometryByteLength}},texturesByteLength:{get:function(){return 0}},classificationType:{get:function(){return this._classificationType}}});const $={PROJECTION:function(e,t){return E["a"].getGltfSemanticUniforms().PROJECTION(e,t)},MODELVIEW:function(e,t){return E["a"].getGltfSemanticUniforms().MODELVIEW(e,t)},CESIUM_RTC_MODELVIEW:function(e,t){return E["a"].getGltfSemanticUniforms().CESIUM_RTC_MODELVIEW(e,t)},MODELVIEWPROJECTION:function(e,t){return E["a"].getGltfSemanticUniforms().MODELVIEWPROJECTION(e,t)}};function H(e,t){if(Object(h["a"])(e._uniformMap))return;const i={};S["a"].technique(e.gltf,(function(n){S["a"].techniqueUniform(n,(function(n,a){Object(h["a"])(n.semantic)&&Object(h["a"])($[n.semantic])&&(i[a]=$[n.semantic](t.uniformState,e))}))})),e._uniformMap=i}function Y(e,t){return E["a"].createUniformsForQuantizedAttributes(e.gltf,t,e._quantizedUniforms)}function Q(e,t){switch(e.mode){case _["a"].TRIANGLES:return t/3;case _["a"].TRIANGLE_STRIP:case _["a"].TRIANGLE_FAN:return Math.max(t-2,0);default:return 0}}function Z(e){const t=e._batchTable;let i=e._uniformMap;const s=e._vertexArray,u=e.gltf,d=u.accessors,l=u.meshes,_=l[0].primitives[0],m=d[_.indices],g=_.attributes.POSITION,b=E["a"].getAccessorMinMax(u,g),y=n["a"].fromCornerPoints(a["a"].fromArray(b.min),a["a"].fromArray(b.max));let S,O;if(Object(h["a"])(m))O=m.count,S=m.byteOffset/p["a"].getSizeInBytes(m.componentType);else{const e=d[_.attributes.POSITION];O=e.count,S=0}if(e._trianglesLength+=Q(_,O),Object(h["a"])(e._uniformMapLoaded)&&(i=e._uniformMapLoaded(i)),e.extensionsUsed.WEB3D_quantized_attributes){const t=Y(e,_);i=Object(o["a"])(i,t)}let C=s.attributes.POSITION,v=C.componentDatatype,P=C.vertexBuffer,x=P.byteOffset,I=P.byteLength/c["a"].getSizeInBytes(v),w=c["a"].createArrayBufferView(v,P.buffer,x,I);C=s.attributes._BATCHID,v=C.componentDatatype,P=C.vertexBuffer,x=P.byteOffset,I=P.byteLength/c["a"].getSizeInBytes(v);let T=c["a"].createArrayBufferView(v,P.buffer,x,I);const A=s.indexBuffer.typedArray;let j;j=s.indexBuffer.indexDatatype===p["a"].UNSIGNED_SHORT?new Uint16Array(A.buffer,A.byteOffset,A.byteLength/Uint16Array.BYTES_PER_ELEMENT):new Uint32Array(A.buffer,A.byteOffset,A.byteLength/Uint32Array.BYTES_PER_ELEMENT),w=w.slice(),T=T.slice(),j=j.slice(S,S+O);const M=[],R=[],k=[],B=[];let V,U,F,N=T[j[0]];M.push(N),k.push(0);const z=j.length;for(let n=1;n<z;++n)V=T[j[n]],V!==N&&(U=k[k.length-1],F=n-U,M.push(V),R.push(F),k.push(n),B.push(new D["a"]({offset:U,count:F,batchIds:[N],color:r["a"].WHITE})),N=V);U=k[k.length-1],F=z-U,R.push(F),B.push(new D["a"]({offset:U,count:F,batchIds:[N],color:r["a"].WHITE}));const G=e._shaderProgram,W=G.vertexShaderSource,q=G.fragmentShaderSource,$=G.attributeLocations,H=Object(h["a"])(e._pickIdLoaded)?e._pickIdLoaded():void 0;e._primitive=new L["a"]({classificationType:e._classificationType,positions:w,indices:j,indexOffsets:k,indexCounts:R,batchIds:M,vertexBatchIds:T,batchedIndices:B,batchTable:t,boundingVolume:new n["a"],_vertexShaderSource:W,_fragmentShaderSource:q,_attributeLocations:$,_uniformMap:i,_pickId:H,_modelMatrix:new f["a"],_boundingSphere:y}),e._buffers=void 0,e._vertexArray=void 0,e._shaderProgram=void 0,e._uniformMap=void 0}function J(e){const t=e._loadResources;if(!t.finished())return;if(Object(h["a"])(e._primitive))return;const i=e.gltf,n=i.nodes,a=n[0];e._nodeMatrix=E["a"].getTransform(a,e._nodeMatrix),Z(e)}function K(e,t){const i=t.context;E["a"].checkSupportedGlExtensions(e.gltf.glExtensionsUsed,i),F(e),G(e),q(e),H(e,i),J(e)}const X=new s["a"],ee=new f["a"];function te(e,t,i,r){let o=e._computedModelMatrix;if(e._mode!==A["a"].SCENE3D&&!e._ignoreCommands){const t=f["a"].getColumn(o,3,X);if(s["a"].equals(t,s["a"].UNIT_W)){const t=e.boundingSphereInternal.center,i=g["a"].wgs84To2DModelMatrix(r,t,ee);o=f["a"].multiply(i,o,ee),Object(h["a"])(e._rtcCenter)&&(f["a"].setTranslation(o,s["a"].UNIT_W,o),e._rtcCenter=e._rtcCenter2D)}else o=g["a"].basisTo2D(r,o,ee),e._rtcCenter=e._rtcCenter3D}const c=e._primitive;(t||i)&&(f["a"].multiplyTransformation(o,e._nodeMatrix,c._modelMatrix),n["a"].transform(c._boundingSphere,c._modelMatrix,c._boundingVolume),Object(h["a"])(e._rtcCenter)&&a["a"].add(e._rtcCenter,c._boundingVolume.center,c._boundingVolume.center))}R.prototype.updateCommands=function(e,t){this._primitive.updateCommands(e,t)},R.prototype.update=function(e){if(e.mode===A["a"].MORPHING)return;if(!l["a"].supportsWebP.initialized)return void l["a"].supportsWebP.initialize();const t=l["a"].supportsWebP();if(this._state===M.NEEDS_LOAD&&Object(h["a"])(this.gltf)&&(this._state=M.LOADING,this._state!==M.FAILED)){const t=this.gltf.extensions;if(Object(h["a"])(t)&&Object(h["a"])(t.CESIUM_RTC)){const i=a["a"].fromArray(t.CESIUM_RTC.center);if(!a["a"].equals(i,a["a"].ZERO)){this._rtcCenter3D=i;const t=e.mapProjection,n=t.ellipsoid,s=n.cartesianToCartographic(this._rtcCenter3D),r=t.project(s);a["a"].fromElements(r.z,r.x,r.y,r),this._rtcCenter2D=r,this._rtcCenterEye=new a["a"],this._rtcCenter=this._rtcCenter3D}}this._loadResources=new I["a"],E["a"].parseBuffers(this)}const i=this._loadResources;let n=!1;this._state===M.LOADING&&(0===i.pendingBufferLoads&&(E["a"].checkSupportedExtensions(this.extensionsRequired,t),k(this),B(this),this._boundingSphere=E["a"].computeBoundingSphere(this),this._initialRadius=this._boundingSphere.radius,K(this,e)),i.finished()&&(this._state=M.LOADED,n=!0)),Object(h["a"])(i)&&this._state===M.LOADED&&(n||K(this,e),i.finished()&&(this._loadResources=void 0));const s=this.show;if(s&&this._state===M.LOADED||n){this._dirty=!1;const t=this.modelMatrix,i=e.mode!==this._mode;this._mode=e.mode;const a=!f["a"].equals(this._modelMatrix,t)||i;if(a||n){f["a"].clone(t,this._modelMatrix);const e=this._computedModelMatrix;f["a"].clone(t,e),this._upAxis===x["a"].Y?f["a"].multiplyTransformation(e,x["a"].Y_UP_TO_Z_UP,e):this._upAxis===x["a"].X&&f["a"].multiplyTransformation(e,x["a"].X_UP_TO_Z_UP,e)}(a||n)&&(te(this,a,n,e.mapProjection),this._dirty=!0)}n?this._completeLoad(e):s&&!this._ignoreCommands&&(this._primitive.debugShowBoundingVolume=this.debugShowBoundingVolume,this._primitive.debugWireframe=this.debugWireframe,this._primitive.update(e))},R.prototype.isDestroyed=function(){return!1},R.prototype.destroy=function(){return this._primitive=this._primitive&&this._primitive.destroy(),Object(d["a"])(this)},t["a"]=R},c1f7:function(e,t,i){"use strict";var n=i("93da");const a={HIGHLIGHT:0,REPLACE:1,MIX:2,getColorBlend:function(e,t){return e===a.HIGHLIGHT?0:e===a.REPLACE?1:e===a.MIX?n["a"].clamp(t,n["a"].EPSILON4,1):void 0}};t["a"]=Object.freeze(a)},c2ce:function(e,t,i){"use strict";var n=i("535a"),a=i("2f63"),s=i("7d62"),r=i("974b"),o=i("283e");function c(e,t,i,n,a,s){this._tileset=e,this._tile=t,this._resource=i,this._contents=[],this._metadata=void 0,this._group=void 0,this._readyPromise=h(this,n,a,s)}Object.defineProperties(c.prototype,{featurePropertiesDirty:{get:function(){const e=this._contents,t=e.length;for(let i=0;i<t;++i)if(e[i].featurePropertiesDirty)return!0;return!1},set:function(e){const t=this._contents,i=t.length;for(let n=0;n<i;++n)t[n].featurePropertiesDirty=e}},featuresLength:{get:function(){return 0}},pointsLength:{get:function(){return 0}},trianglesLength:{get:function(){return 0}},geometryByteLength:{get:function(){return 0}},texturesByteLength:{get:function(){return 0}},batchTableByteLength:{get:function(){return 0}},innerContents:{get:function(){return this._contents}},readyPromise:{get:function(){return this._readyPromise}},tileset:{get:function(){return this._tileset}},tile:{get:function(){return this._tile}},url:{get:function(){return this._resource.getUrlComponent(!0)}},metadata:{get:function(){return this._metadata},set:function(e){this._metadata=e;const t=this._contents,i=t.length;for(let n=0;n<i;++n)t[n].metadata=e}},batchTable:{get:function(){}},group:{get:function(){return this._group},set:function(e){this._group=e;const t=this._contents,i=t.length;for(let n=0;n<i;++n)t[n].group=e}}});const u=Uint32Array.BYTES_PER_ELEMENT;function h(e,t,i,s){i=Object(n["a"])(i,0);const c=new Uint8Array(t),h=new DataView(t);i+=u;const d=h.getUint32(i,!0);if(1!==d)throw new o["a"](`Only Composite Tile version 1 is supported. Version ${d} is not.`);i+=u,i+=u;const l=h.getUint32(i,!0);i+=u;const p=[],f=e._resource;let _=f.queryParameters.compositeIndex;Object(a["a"])(_)?_+="_":_="";for(let n=0;n<l;++n){const d=Object(r["a"])(c,i),l=h.getUint32(i+2*u,!0),m=s[d],g=`${_}${n}`,b=f.getDerivedResource({queryParameters:{compositeIndex:g}});if(!Object(a["a"])(m))throw new o["a"](`Unknown tile content type, ${d}, inside Composite tile`);{const n=m(e._tileset,e._tile,b,t,i);e._contents.push(n),p.push(n.readyPromise)}i+=l}return Promise.all(p).then((function(){return e}))}c.prototype.hasProperty=function(e,t){return!1},c.prototype.getFeature=function(e){},c.prototype.applyDebugSettings=function(e,t){const i=this._contents,n=i.length;for(let a=0;a<n;++a)i[a].applyDebugSettings(e,t)},c.prototype.applyStyle=function(e){const t=this._contents,i=t.length;for(let n=0;n<i;++n)t[n].applyStyle(e)},c.prototype.update=function(e,t){const i=this._contents,n=i.length;for(let a=0;a<n;++a)i[a].update(e,t)},c.prototype.isDestroyed=function(){return!1},c.prototype.destroy=function(){const e=this._contents,t=e.length;for(let i=0;i<t;++i)e[i].destroy();return Object(s["a"])(this)},t["a"]=c},e8b2:function(e,t,i){"use strict";var n=i("9541"),a=i("2bb9"),s=i("535a"),r=i("2f63"),o=i("7d62"),c=i("4f04"),u=i("d940"),h=i("a894"),d=i("d289"),l=i("6dc0"),p=i("e90c"),f=i("5770"),_=i("33db"),m=i("ae16"),g=i("b7c8"),b=i("5a6c"),y=i("06f0"),S=i("3a8e"),O=i("894b"),C=i("a307"),v=i("2a1b"),P=i("3626"),x=i("6102"),I=i("25ef");function E(e){e=Object(s["a"])(e,s["a"].EMPTY_OBJECT);const t=e.geometryInstances;this.geometryInstances=t,this.show=Object(s["a"])(e.show,!0),this.classificationType=Object(s["a"])(e.classificationType,b["a"].BOTH),this.debugShowBoundingVolume=Object(s["a"])(e.debugShowBoundingVolume,!1),this.debugShowShadowVolume=Object(s["a"])(e.debugShowShadowVolume,!1),this._debugShowShadowVolume=!1,this._extruded=Object(s["a"])(e._extruded,!1),this._uniformMap=e._uniformMap,this._sp=void 0,this._spStencil=void 0,this._spPick=void 0,this._spColor=void 0,this._spPick2D=void 0,this._spColor2D=void 0,this._rsStencilDepthPass=void 0,this._rsStencilDepthPass3DTiles=void 0,this._rsColorPass=void 0,this._rsPickPass=void 0,this._commandsIgnoreShow=[],this._ready=!1;const i=this;this._readyPromise=new Promise((e,t)=>{i._completeLoad=()=>{if(this._ready)return;this._ready=!0,this.releaseGeometryInstances&&(this.geometryInstances=void 0);const i=this._error;Object(r["a"])(i)?t(i):e(this)}}),this._primitive=void 0,this._pickPrimitive=e._pickPrimitive,this._hasSphericalExtentsAttribute=!1,this._hasPlanarExtentsAttributes=!1,this._hasPerColorAttribute=!1,this.appearance=e.appearance,this._createBoundingVolumeFunction=e._createBoundingVolumeFunction,this._updateAndQueueCommandsFunction=e._updateAndQueueCommandsFunction,this._usePickOffsets=!1,this._primitiveOptions={geometryInstances:void 0,appearance:void 0,vertexCacheOptimize:Object(s["a"])(e.vertexCacheOptimize,!1),interleave:Object(s["a"])(e.interleave,!1),releaseGeometryInstances:Object(s["a"])(e.releaseGeometryInstances,!0),allowPicking:Object(s["a"])(e.allowPicking,!0),asynchronous:Object(s["a"])(e.asynchronous,!0),compressVertices:Object(s["a"])(e.compressVertices,!0),_createBoundingVolumeFunction:void 0,_createRenderStatesFunction:void 0,_createShaderProgramFunction:void 0,_createCommandsFunction:void 0,_updateAndQueueCommandsFunction:void 0,_createPickOffsets:!0}}function w(e,t){const i=t?x["a"].EQUAL:x["a"].ALWAYS;return{colorMask:{red:!1,green:!1,blue:!1,alpha:!1},stencilTest:{enabled:e,frontFunction:i,frontOperation:{fail:I["a"].KEEP,zFail:I["a"].DECREMENT_WRAP,zPass:I["a"].KEEP},backFunction:i,backOperation:{fail:I["a"].KEEP,zFail:I["a"].INCREMENT_WRAP,zPass:I["a"].KEEP},reference:P["a"].CESIUM_3D_TILE_MASK,mask:P["a"].CESIUM_3D_TILE_MASK},stencilMask:P["a"].CLASSIFICATION_MASK,depthTest:{enabled:!0,func:y["a"].LESS_OR_EQUAL},depthMask:!1}}function T(e){return{stencilTest:{enabled:e,frontFunction:x["a"].NOT_EQUAL,frontOperation:{fail:I["a"].ZERO,zFail:I["a"].ZERO,zPass:I["a"].ZERO},backFunction:x["a"].NOT_EQUAL,backOperation:{fail:I["a"].ZERO,zFail:I["a"].ZERO,zPass:I["a"].ZERO},reference:0,mask:P["a"].CLASSIFICATION_MASK},stencilMask:P["a"].CLASSIFICATION_MASK,depthTest:{enabled:!1},depthMask:!1,blending:g["a"].PRE_MULTIPLIED_ALPHA_BLEND}}Object.defineProperties(E.prototype,{vertexCacheOptimize:{get:function(){return this._primitiveOptions.vertexCacheOptimize}},interleave:{get:function(){return this._primitiveOptions.interleave}},releaseGeometryInstances:{get:function(){return this._primitiveOptions.releaseGeometryInstances}},allowPicking:{get:function(){return this._primitiveOptions.allowPicking}},asynchronous:{get:function(){return this._primitiveOptions.asynchronous}},compressVertices:{get:function(){return this._primitiveOptions.compressVertices}},ready:{get:function(){return this._ready}},readyPromise:{get:function(){return this._readyPromise}},_needs2DShader:{get:function(){return this._hasPlanarExtentsAttributes||this._hasSphericalExtentsAttribute}}}),E.isSupported=function(e){return e.context.stencilBuffer};const A={stencilTest:{enabled:!0,frontFunction:x["a"].NOT_EQUAL,frontOperation:{fail:I["a"].ZERO,zFail:I["a"].ZERO,zPass:I["a"].ZERO},backFunction:x["a"].NOT_EQUAL,backOperation:{fail:I["a"].ZERO,zFail:I["a"].ZERO,zPass:I["a"].ZERO},reference:0,mask:P["a"].CLASSIFICATION_MASK},stencilMask:P["a"].CLASSIFICATION_MASK,depthTest:{enabled:!1},depthMask:!1};function D(e,t,i,n){if(Object(r["a"])(e._rsStencilDepthPass))return;const a=!e.debugShowShadowVolume;e._rsStencilDepthPass=l["a"].fromCache(w(a,!1)),e._rsStencilDepthPass3DTiles=l["a"].fromCache(w(a,!0)),e._rsColorPass=l["a"].fromCache(T(a,!1)),e._rsPickPass=l["a"].fromCache(A)}function L(e,t){if(!e.compressVertices)return t;if(-1!==t.search(/attribute\s+vec3\s+extrudeDirection;/g)){const e="compressedAttributes",i=`attribute vec2 ${e};`,n="vec3 extrudeDirection;\n",a=`    extrudeDirection = czm_octDecode(${e}, 65535.0);\n`;let s=t;s=s.replace(/attribute\s+vec3\s+extrudeDirection;/g,""),s=f["a"].replaceMain(s,"czm_non_compressed_main");const r=`void main() \n{ \n${a}    czm_non_compressed_main(); \n}`;return[i,n,s,r].join("\n")}}function j(e,t){const i=t.context,n=e._primitive;let a=_["a"];a=e._primitive._batchTable.getVertexShaderCallback()(a),a=O["a"]._appendDistanceDisplayConditionToShader(n,a),a=O["a"]._modifyShaderPosition(e,a,t.scene3DOnly),a=O["a"]._updateColorAttribute(n,a);const s=e._hasPlanarExtentsAttributes,o=s||e._hasSphericalExtentsAttribute;e._extruded&&(a=L(n,a));const c=e._extruded?"EXTRUDED_GEOMETRY":"";let u=new f["a"]({defines:[c],sources:[a]});const h=new f["a"]({sources:[m["a"]]}),d=e._primitive._attributeLocations,l=new v["a"](o,s,e.appearance);if(e._spStencil=p["a"].replaceCache({context:i,shaderProgram:e._spStencil,vertexShaderSource:u,fragmentShaderSource:h,attributeLocations:d}),e._primitive.allowPicking){let s=f["a"].createPickVertexShaderSource(a);s=O["a"]._appendShowToShader(n,s),s=O["a"]._updatePickColorAttribute(s);const u=l.createPickFragmentShader(!1),h=l.createPickVertexShader([c],s,!1,t.mapProjection);if(e._spPick=p["a"].replaceCache({context:i,shaderProgram:e._spPick,vertexShaderSource:h,fragmentShaderSource:u,attributeLocations:d}),o){let n=i.shaderCache.getDerivedShaderProgram(e._spPick,"2dPick");if(!Object(r["a"])(n)){const a=l.createPickFragmentShader(!0),r=l.createPickVertexShader([c],s,!0,t.mapProjection);n=i.shaderCache.createDerivedShaderProgram(e._spPick,"2dPick",{vertexShaderSource:r,fragmentShaderSource:a,attributeLocations:d})}e._spPick2D=n}}else e._spPick=p["a"].fromCache({context:i,vertexShaderSource:u,fragmentShaderSource:h,attributeLocations:d});a=O["a"]._appendShowToShader(n,a),u=new f["a"]({defines:[c],sources:[a]}),e._sp=p["a"].replaceCache({context:i,shaderProgram:e._sp,vertexShaderSource:u,fragmentShaderSource:h,attributeLocations:d});const g=l.createFragmentShader(!1),b=l.createVertexShader([c],a,!1,t.mapProjection);if(e._spColor=p["a"].replaceCache({context:i,shaderProgram:e._spColor,vertexShaderSource:b,fragmentShaderSource:g,attributeLocations:d}),o){let n=i.shaderCache.getDerivedShaderProgram(e._spColor,"2dColor");if(!Object(r["a"])(n)){const s=l.createFragmentShader(!0),r=l.createVertexShader([c],a,!0,t.mapProjection);n=i.shaderCache.createDerivedShaderProgram(e._spColor,"2dColor",{vertexShaderSource:r,fragmentShaderSource:s,attributeLocations:d})}e._spColor2D=n}}function M(e,t){const i=e._primitive;let n,s,o,c=2*i._va.length;t.length=c;let u=0,l=i._batchTable.getUniformMapCallback()(e._uniformMap);const p=e._needs2DShader;for(n=0;n<c;n+=2){const c=i._va[u++];s=t[n],Object(r["a"])(s)||(s=t[n]=new h["a"]({owner:e,primitiveType:i._primitiveType})),s.vertexArray=c,s.renderState=e._rsStencilDepthPass,s.shaderProgram=e._sp,s.uniformMap=l,s.pass=d["a"].TERRAIN_CLASSIFICATION,o=h["a"].shallowClone(s,s.derivedCommands.tileset),o.renderState=e._rsStencilDepthPass3DTiles,o.pass=d["a"].CESIUM_3D_TILE_CLASSIFICATION,s.derivedCommands.tileset=o,s=t[n+1],Object(r["a"])(s)||(s=t[n+1]=new h["a"]({owner:e,primitiveType:i._primitiveType})),s.vertexArray=c,s.renderState=e._rsColorPass,s.shaderProgram=e._spColor,s.pass=d["a"].TERRAIN_CLASSIFICATION;const f=e.appearance,_=f.material;if(Object(r["a"])(_)&&(l=Object(a["a"])(l,_._uniforms)),s.uniformMap=l,o=h["a"].shallowClone(s,s.derivedCommands.tileset),o.pass=d["a"].CESIUM_3D_TILE_CLASSIFICATION,s.derivedCommands.tileset=o,p){let t=h["a"].shallowClone(s,s.derivedCommands.appearance2D);t.shaderProgram=e._spColor2D,s.derivedCommands.appearance2D=t,t=h["a"].shallowClone(o,o.derivedCommands.appearance2D),t.shaderProgram=e._spColor2D,o.derivedCommands.appearance2D=t}}const f=e._commandsIgnoreShow,_=e._spStencil;let m=0;c=f.length=c/2;for(let a=0;a<c;++a){const e=f[a]=h["a"].shallowClone(t[m],f[a]);e.shaderProgram=_,e.pass=d["a"].CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW,m+=2}}function R(e,t){const i=e._usePickOffsets,n=e._primitive;let a,s,o,c,u,l=2*n._va.length,p=0;i&&(a=n._pickOffsets,l=2*a.length),t.length=l;let f=0;const _=n._batchTable.getUniformMapCallback()(e._uniformMap),m=e._needs2DShader;for(o=0;o<l;o+=2){let l=n._va[f++];if(i&&(s=a[p++],l=n._va[s.index]),c=t[o],Object(r["a"])(c)||(c=t[o]=new h["a"]({owner:e,primitiveType:n._primitiveType,pickOnly:!0})),c.vertexArray=l,c.renderState=e._rsStencilDepthPass,c.shaderProgram=e._sp,c.uniformMap=_,c.pass=d["a"].TERRAIN_CLASSIFICATION,i&&(c.offset=s.offset,c.count=s.count),u=h["a"].shallowClone(c,c.derivedCommands.tileset),u.renderState=e._rsStencilDepthPass3DTiles,u.pass=d["a"].CESIUM_3D_TILE_CLASSIFICATION,c.derivedCommands.tileset=u,c=t[o+1],Object(r["a"])(c)||(c=t[o+1]=new h["a"]({owner:e,primitiveType:n._primitiveType,pickOnly:!0})),c.vertexArray=l,c.renderState=e._rsPickPass,c.shaderProgram=e._spPick,c.uniformMap=_,c.pass=d["a"].TERRAIN_CLASSIFICATION,i&&(c.offset=s.offset,c.count=s.count),u=h["a"].shallowClone(c,c.derivedCommands.tileset),u.pass=d["a"].CESIUM_3D_TILE_CLASSIFICATION,c.derivedCommands.tileset=u,m){let t=h["a"].shallowClone(c,c.derivedCommands.pick2D);t.shaderProgram=e._spPick2D,c.derivedCommands.pick2D=t,t=h["a"].shallowClone(u,u.derivedCommands.pick2D),t.shaderProgram=e._spPick2D,u.derivedCommands.pick2D=t}}}function k(e,t,i,n,a,s,r){M(e,s),R(e,r)}function B(e,t){return Math.floor(e%t/2)}function V(e,t,i,n,a,s){e.modelMatrix=i,e.boundingVolume=a,e.cull=n,e.debugShowBoundingVolume=s,t.commandList.push(e)}function U(e,t,i,n,a){e.modelMatrix=i,e.boundingVolume=a,e.cull=n,t.commandList.push(e)}function F(e,t,i,n,a,s,o,c){const u=e._primitive;let h;O["a"]._updateBoundingVolumes(u,t,a),t.mode===C["a"].SCENE3D?h=u._boundingSphereWC:t.mode===C["a"].COLUMBUS_VIEW?h=u._boundingSphereCV:t.mode===C["a"].SCENE2D&&Object(r["a"])(u._boundingSphere2D)?h=u._boundingSphere2D:Object(r["a"])(u._boundingSphereMorph)&&(h=u._boundingSphereMorph);const d=e.classificationType,l=d!==b["a"].CESIUM_3D_TILE,p=d!==b["a"].TERRAIN,f=t.passes;let _,m,g;if(f.render){const n=i.length;for(_=0;_<n;++_)m=h[B(_,n)],l&&(g=i[_],V(g,t,a,s,m,o)),p&&(g=i[_].derivedCommands.tileset,V(g,t,a,s,m,o));if(t.invertClassification){const i=e._commandsIgnoreShow,n=i.length;for(_=0;_<n;++_)m=h[_],g=i[_],V(g,t,a,s,m,o)}}if(f.pick){const e=n.length,i=u._pickOffsets;for(_=0;_<e;++_){const r=i[B(_,e)];m=h[r.index],l&&(g=n[_],U(g,t,a,s,m)),p&&(g=n[_].derivedCommands.tileset,U(g,t,a,s,m))}}}E.prototype.update=function(e){if(!Object(r["a"])(this._primitive)&&!Object(r["a"])(this.geometryInstances))return;let t=this.appearance;Object(r["a"])(t)&&Object(r["a"])(t.material)&&t.material.update(e.context);const i=this,a=this._primitiveOptions;if(!Object(r["a"])(this._primitive)){const e=Array.isArray(this.geometryInstances)?this.geometryInstances:[this.geometryInstances],o=e.length;let h,d,l,p,f=!1,_=!0,m=!1,g=!1;for(o>0&&(l=e[0].attributes,m=v["a"].hasAttributesForSphericalExtents(l),g=v["a"].hasAttributesForTextureCoordinatePlanes(l),p=l.color),h=0;h<o;h++){d=e[h];const t=d.attributes.color;Object(r["a"])(t)&&(f=!0),_=_&&Object(r["a"])(t)&&n["a"].equals(p,t)}if(!_&&!m&&!g)throw new c["a"]("All GeometryInstances must have the same color attribute except via GroundPrimitives");f&&!Object(r["a"])(t)&&(t=new S["a"]({flat:!0}),this.appearance=t),this._usePickOffsets=!m&&!g,this._hasSphericalExtentsAttribute=m,this._hasPlanarExtentsAttributes=g,this._hasPerColorAttribute=f;const b=new Array(o);for(h=0;h<o;++h)d=e[h],b[h]=new u["a"]({geometry:d.geometry,attributes:d.attributes,modelMatrix:d.modelMatrix,id:d.id,pickPrimitive:Object(s["a"])(this._pickPrimitive,i)});a.appearance=t,a.geometryInstances=b,Object(r["a"])(this._createBoundingVolumeFunction)&&(a._createBoundingVolumeFunction=function(e,t){i._createBoundingVolumeFunction(e,t)}),a._createRenderStatesFunction=function(e,t,n,a){D(i,t)},a._createShaderProgramFunction=function(e,t,n){j(i,t)},a._createCommandsFunction=function(e,t,n,a,s,r,o){k(i,void 0,void 0,!0,!1,r,o)},Object(r["a"])(this._updateAndQueueCommandsFunction)?a._updateAndQueueCommandsFunction=function(e,t,n,a,s,r,o,c){i._updateAndQueueCommandsFunction(e,t,n,a,s,r,o,c)}:a._updateAndQueueCommandsFunction=function(e,t,n,a,s,r,o,c){F(i,t,n,a,s,r,o,c)},this._primitive=new O["a"](a)}this.debugShowShadowVolume&&!this._debugShowShadowVolume&&this._ready?(this._debugShowShadowVolume=!0,this._rsStencilDepthPass=l["a"].fromCache(w(!1,!1)),this._rsStencilDepthPass3DTiles=l["a"].fromCache(w(!1,!0)),this._rsColorPass=l["a"].fromCache(T(!1))):!this.debugShowShadowVolume&&this._debugShowShadowVolume&&(this._debugShowShadowVolume=!1,this._rsStencilDepthPass=l["a"].fromCache(w(!0,!1)),this._rsStencilDepthPass3DTiles=l["a"].fromCache(w(!0,!0)),this._rsColorPass=l["a"].fromCache(T(!0))),this._primitive.appearance!==t&&(this._primitive.appearance=t),this._primitive.show=this.show,this._primitive.debugShowBoundingVolume=this.debugShowBoundingVolume,this._primitive.update(e),e.afterRender.push(()=>{Object(r["a"])(this._primitive)&&this._primitive.ready&&this._completeLoad()})},E.prototype.getGeometryInstanceAttributes=function(e){return this._primitive.getGeometryInstanceAttributes(e)},E.prototype.isDestroyed=function(){return!1},E.prototype.destroy=function(){return this._primitive=this._primitive&&this._primitive.destroy(),this._sp=this._sp&&this._sp.destroy(),this._spPick=this._spPick&&this._spPick.destroy(),this._spColor=this._spColor&&this._spColor.destroy(),this._spPick2D=void 0,this._spColor2D=void 0,Object(o["a"])(this)},t["a"]=E}}]);