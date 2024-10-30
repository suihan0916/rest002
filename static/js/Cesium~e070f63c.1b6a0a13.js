(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~e070f63c"],{"0e94":function(e,t,a){"use strict";var n=a("2bb9"),o=a("2f63"),i=a("2ed4"),r=a("ef54"),s=a("1b40");const c={name:"ImageBasedLightingPipelineStage",process:function(e,t,a){const c=t.imageBasedLighting,d=e.shaderBuilder;if(d.addDefine("USE_IBL_LIGHTING",void 0,r["a"].FRAGMENT),d.addUniform("vec2","model_iblFactor",r["a"].FRAGMENT),s["a"].isSupported(a.context)){const e=c.useSphericalHarmonics||c.useSpecularEnvironmentMaps||c.enabled;e&&d.addUniform("mat3","model_iblReferenceFrameMatrix",r["a"].FRAGMENT),Object(o["a"])(c.sphericalHarmonicCoefficients)?(d.addDefine("DIFFUSE_IBL",void 0,r["a"].FRAGMENT),d.addDefine("CUSTOM_SPHERICAL_HARMONICS",void 0,r["a"].FRAGMENT),d.addUniform("vec3","model_sphericalHarmonicCoefficients[9]",r["a"].FRAGMENT)):c.useDefaultSphericalHarmonics&&d.addDefine("DIFFUSE_IBL",void 0,r["a"].FRAGMENT),Object(o["a"])(c.specularEnvironmentMapAtlas)&&c.specularEnvironmentMapAtlas.ready?(d.addDefine("SPECULAR_IBL",void 0,r["a"].FRAGMENT),d.addDefine("CUSTOM_SPECULAR_IBL",void 0,r["a"].FRAGMENT),d.addUniform("sampler2D","model_specularEnvironmentMaps",r["a"].FRAGMENT),d.addUniform("vec2","model_specularEnvironmentMapsSize",r["a"].FRAGMENT),d.addUniform("float","model_specularEnvironmentMapsMaximumLOD",r["a"].FRAGMENT)):t.useDefaultSpecularMaps&&d.addDefine("SPECULAR_IBL",void 0,r["a"].FRAGMENT)}Object(o["a"])(c.luminanceAtZenith)&&(d.addDefine("USE_SUN_LUMINANCE",void 0,r["a"].FRAGMENT),d.addUniform("float","model_luminanceAtZenith",r["a"].FRAGMENT)),d.addFragmentLines([i["a"]]);const u={model_iblFactor:function(){return c.imageBasedLightingFactor},model_iblReferenceFrameMatrix:function(){return t._iblReferenceFrameMatrix},model_luminanceAtZenith:function(){return c.luminanceAtZenith},model_sphericalHarmonicCoefficients:function(){return c.sphericalHarmonicCoefficients},model_specularEnvironmentMaps:function(){return c.specularEnvironmentMapAtlas.texture},model_specularEnvironmentMapsSize:function(){return c.specularEnvironmentMapAtlas.texture.dimensions},model_specularEnvironmentMapsMaximumLOD:function(){return c.specularEnvironmentMapAtlas.maximumMipmapLevel}};e.uniformMap=Object(n["a"])(u,e.uniformMap)}};t["a"]=c},"13b3":function(e,t,a){"use strict";var n=a("1da3"),o=a("f20a"),i=a("8b68"),r=a("be18"),s=a("dc1c"),c=a("2bb9"),d=a("abab"),u=a("2f63"),T=a("990a"),A=a("bfbe"),l=a("894b8"),f=a("26ea"),m=a("52f0"),_=a("60e0"),S=a("0260"),E=a("a307"),I=a("0c80"),p=a("ef54"),M=a("f806");const N=new m["a"],F=new m["a"],D=new m["a"],R={name:"InstancingPipelineStage",process:function(e,t,a){const n=t.instances,o=n.attributes[0].count,i=e.shaderBuilder;i.addDefine("HAS_INSTANCING"),i.addVertexLines([A["a"]]);const r=e.model,s=r.sceneGraph,d=a.mode!==E["a"].SCENE3D&&!a.scene3DOnly&&r._projectTo2D,u=[];Y(e,a,n,u,d),J(e,a,n,u);const T={};if(n.transformInWorldSpace?(i.addDefine("USE_LEGACY_INSTANCING",void 0,p["a"].VERTEX),i.addUniform("mat4","u_instance_modifiedModelView",p["a"].VERTEX),i.addUniform("mat4","u_instance_nodeTransform",p["a"].VERTEX),T.u_instance_modifiedModelView=function(){let e=m["a"].multiplyTransformation(r.modelMatrix,s.components.transform,N);return d?m["a"].multiplyTransformation(a.context.uniformState.view3D,e,N):(a.mode!==E["a"].SCENE3D&&(e=M["a"].basisTo2D(a.mapProjection,e,N)),m["a"].multiplyTransformation(a.context.uniformState.view,e,N))},T.u_instance_nodeTransform=function(){return m["a"].multiplyTransformation(s.axisCorrectionMatrix,e.runtimeNode.computedTransform,F)},i.addVertexLines([f["a"]])):i.addVertexLines([l["a"]]),d){i.addDefine("USE_2D_INSTANCING",void 0,p["a"].VERTEX),i.addUniform("mat4","u_modelView2D",p["a"].VERTEX);const t=a.context,n=m["a"].fromTranslation(e.instancingReferencePoint2D,new m["a"]);T.u_modelView2D=function(){return m["a"].multiplyTransformation(t.uniformState.view,n,D)}}e.uniformMap=Object(c["a"])(T,e.uniformMap),e.instanceCount=o,e.attributes.push.apply(e.attributes,u)}},b=new m["a"],C=new r["a"];function O(e,t,a,n,o){let i=m["a"].multiplyTransformation(t,e,b);return i=m["a"].multiplyTransformation(i,a,b),o=M["a"].basisTo2D(n.mapProjection,i,o),o}function L(e,t,a,n,o){const i=m["a"].fromTranslation(e,b);let r=m["a"].multiplyTransformation(t,i,b);r=m["a"].multiplyTransformation(r,a,b);const s=m["a"].getTranslation(r,C);return o=I["a"].computeActualWgs84Position(n,s,o),o}function U(e,t,a){const n=e.model,o=n.sceneGraph,i=e.runtimeNode.node.instances;i.transformInWorldSpace?(t=m["a"].multiplyTransformation(n.modelMatrix,o.components.transform,t),a=m["a"].multiplyTransformation(o.axisCorrectionMatrix,e.runtimeNode.computedTransform,a)):(t=m["a"].clone(o.computedModelMatrix,t),t=m["a"].multiplyTransformation(t,e.runtimeNode.computedTransform,t),a=m["a"].clone(m["a"].IDENTITY,a))}const g=new m["a"],y=new m["a"],x=new m["a"],h=new r["a"];function G(e,t,a,n){const o=g,i=y;U(t,o,i);const s=t.instancingReferencePoint2D,c=e.length;for(let d=0;d<c;d++){const t=e[d],c=O(t,o,i,a,x),u=m["a"].getTranslation(c,h),T=r["a"].subtract(u,s,u);n[d]=m["a"].setTranslation(c,T,n[d])}return n}function v(e,t,a,n){const o=g,i=y;U(t,o,i);const s=t.instancingReferencePoint2D,c=e.length;for(let d=0;d<c;d++){const t=e[d],c=L(t,o,i,a,t);n[d]=r["a"].subtract(c,s,n[d])}return n}const B=new r["a"],V=new r["a"];function w(e,t){const a=e.model.sceneGraph.computedModelMatrix,n=m["a"].multiplyByPoint(a,e.instancingTranslationMin,B),o=I["a"].computeActualWgs84Position(t,n,n),i=m["a"].multiplyByPoint(a,e.instancingTranslationMax,V),s=I["a"].computeActualWgs84Position(t,i,i);return r["a"].lerp(o,s,.5,new r["a"])}function j(e){const t=12,a=e.length,n=new Float32Array(a*t);for(let o=0;o<a;o++){const a=e[o],i=t*o;n[i+0]=a[0],n[i+1]=a[4],n[i+2]=a[8],n[i+3]=a[12],n[i+4]=a[1],n[i+5]=a[5],n[i+6]=a[9],n[i+7]=a[13],n[i+8]=a[2],n[i+9]=a[6],n[i+10]=a[10],n[i+11]=a[14]}return n}function P(e){const t=3,a=e.length,n=new Float32Array(a*t);for(let o=0;o<a;o++){const a=e[o],i=t*o;n[i+0]=a[0],n[i+1]=a[4],n[i+2]=a[8]}return n}const H=new r["a"],$=new S["a"],X=new r["a"];function Z(e,t,a){const n=new Array(t),o=_["a"].getAttributeBySemantic(e,T["a"].TRANSLATION),i=_["a"].getAttributeBySemantic(e,T["a"].ROTATION),s=_["a"].getAttributeBySemantic(e,T["a"].SCALE),c=new r["a"](-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),d=new r["a"](Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),A=Object(u["a"])(o),l=Object(u["a"])(i),f=Object(u["a"])(s),E=A?o.typedArray:new Float32Array(3*t),I=l?i.typedArray:new Float32Array(4*t);let p;f?p=s.typedArray:(p=new Float32Array(3*t),p.fill(1));for(let u=0;u<t;u++){const e=new r["a"](E[3*u],E[3*u+1],E[3*u+2],H);r["a"].maximumByComponent(c,e,c),r["a"].minimumByComponent(d,e,d);const t=new S["a"](I[4*u],I[4*u+1],I[4*u+2],l?I[4*u+3]:1,$),a=new r["a"](p[3*u],p[3*u+1],p[3*u+2],X),o=m["a"].fromTranslationQuaternionRotationScale(e,t,a,new m["a"]);n[u]=o}return a.instancingTranslationMax=c,a.instancingTranslationMin=d,n}function z(e,t){const a=new Array(t),n=e.typedArray;for(let o=0;o<t;o++)a[o]=new r["a"](n[3*o],n[3*o+1],n[3*o+2]);return a}function W(e,t){const a=o["a"].createVertexBuffer({context:t.context,typedArray:e,usage:i["a"].STATIC_DRAW});return a.vertexArrayDestroyable=!1,a}function Y(e,t,a,n,o){const i=_["a"].getAttributeBySemantic(a,T["a"].TRANSLATION);let r,c;Object(u["a"])(i)&&(r=i.max,c=i.min);const d=_["a"].getAttributeBySemantic(a,T["a"].ROTATION),A=e.shaderBuilder,l=a.attributes[0].count,f=Object(u["a"])(d)||!Object(u["a"])(r)||!Object(u["a"])(c),m=e.model.statistics,S=!1;let I;if(f){A.addDefine("HAS_INSTANCE_MATRICES");const o="Transform";I=Z(a,l,e);const i=j(I),r=W(i,t);e.model._pipelineResources.push(r),q(e,r,n,o),m.addBuffer(r,S)}else{if(Object(u["a"])(i)){A.addDefine("HAS_INSTANCE_TRANSLATION");const a=i.max,o=i.min;e.instancingTranslationMax=a,e.instancingTranslationMin=o;let r=i.buffer,s=i.byteOffset,c=i.byteStride;Object(u["a"])(r)||(r=W(i.typedArray,t),e.model._pipelineResources.push(r),s=0,c=void 0,m.addBuffer(r,S));const d="Translation";k(e,r,s,c,n,d)}const o=_["a"].getAttributeBySemantic(a,T["a"].SCALE);if(Object(u["a"])(o)){A.addDefine("HAS_INSTANCE_SCALE");let a=o.buffer,i=o.byteOffset,r=o.byteStride;Object(u["a"])(a)||(a=W(o.typedArray,t),e.model._pipelineResources.push(a),i=0,r=void 0,m.addBuffer(a,S));const s="Scale";k(e,a,i,r,n,s)}}if(!o)return;const p=Object(s["a"])(t);p.mode=E["a"].COLUMBUS_VIEW;const M=w(e,p);e.instancingReferencePoint2D=M;const N=e.runtimeNode;if(f){let a=N.instancingTransformsBuffer2D;if(!Object(u["a"])(a)){const n=G(I,e,p,I),o=j(n);a=W(o,t),e.model._modelResources.push(a),N.instancingTransformsBuffer2D=a}const o="Transform2D";q(e,a,n,o)}else{let a=N.instancingTranslationBuffer2D;if(!Object(u["a"])(a)){const n=z(i,l),o=v(n,e,p,n),r=P(o);a=W(r,t),e.model._modelResources.push(a),N.instancingTranslationBuffer2D=a}const o=0,r=void 0,s="Translation2D";k(e,a,o,r,n,s)}}function q(e,t,a,n){const o=12,i=d["a"].getSizeInBytes(d["a"].FLOAT),r=i*o,s=[{index:e.attributeIndex++,vertexBuffer:t,componentsPerAttribute:4,componentDatatype:d["a"].FLOAT,normalize:!1,offsetInBytes:0,strideInBytes:r,instanceDivisor:1},{index:e.attributeIndex++,vertexBuffer:t,componentsPerAttribute:4,componentDatatype:d["a"].FLOAT,normalize:!1,offsetInBytes:4*i,strideInBytes:r,instanceDivisor:1},{index:e.attributeIndex++,vertexBuffer:t,componentsPerAttribute:4,componentDatatype:d["a"].FLOAT,normalize:!1,offsetInBytes:8*i,strideInBytes:r,instanceDivisor:1}],c=e.shaderBuilder;c.addAttribute("vec4",`a_instancing${n}Row0`),c.addAttribute("vec4",`a_instancing${n}Row1`),c.addAttribute("vec4",`a_instancing${n}Row2`),a.push.apply(a,s)}function k(e,t,a,n,o,i){o.push({index:e.attributeIndex++,vertexBuffer:t,componentsPerAttribute:3,componentDatatype:d["a"].FLOAT,normalize:!1,offsetInBytes:a,strideInBytes:n,instanceDivisor:1});const r=e.shaderBuilder;r.addAttribute("vec3","a_instance"+i)}function J(e,t,a,r){const s=a.attributes,c=e.model,d=e.shaderBuilder;for(let u=0;u<s.length;u++){const a=s[u];if(a.semantic!==T["a"].FEATURE_ID)continue;a.setIndex>=e.featureIdVertexAttributeSetIndex&&(e.featureIdVertexAttributeSetIndex=a.setIndex+1);const A=o["a"].createVertexBuffer({context:t.context,typedArray:a.typedArray,usage:i["a"].STATIC_DRAW});A.vertexArrayDestroyable=!1,c._pipelineResources.push(A);const l=!1;c.statistics.addBuffer(A,l),r.push({index:e.attributeIndex++,vertexBuffer:A,componentsPerAttribute:n["a"].getNumberOfComponents(a.type),componentDatatype:a.componentDatatype,normalize:!1,offsetInBytes:a.byteOffset,strideInBytes:a.byteStride,instanceDivisor:1}),d.addAttribute("float","a_instanceFeatureId_"+a.setIndex)}}R._getInstanceTransformsAsMatrices=Z,R._transformsToTypedArray=j,t["a"]=R},"15f5":function(e,t,a){"use strict";var n=a("2f63"),o=a("ef54"),i=a("d283"),r=a("df9b");const s={name:"LightingPipelineStage",process:function(e,t){const a=e.model,s=e.lightingOptions,c=e.shaderBuilder;if(Object(n["a"])(a.lightColor)){c.addDefine("USE_CUSTOM_LIGHT_COLOR",void 0,o["a"].FRAGMENT),c.addUniform("vec3","model_lightColorHdr",o["a"].FRAGMENT);const t=e.uniformMap;t.model_lightColorHdr=function(){return a.lightColor}}const d=s.lightingModel;d===r["a"].PBR?c.addDefine("LIGHTING_PBR",void 0,o["a"].FRAGMENT):c.addDefine("LIGHTING_UNLIT",void 0,o["a"].FRAGMENT),c.addFragmentLines([i["a"]])}};t["a"]=s},"244f":function(e,t,a){"use strict";var n=a("2f63"),o=a("535a"),i=a("ef54"),r=a("9fb6"),s=a("df9b"),c=a("a3a4"),d=a("d289"),u=a("df07"),T=a("be18"),A=a("a561"),l=a("8bde"),f=a("a141"),m=a("60e0");const _=l["a"].Material,S=l["a"].MetallicRoughness,E=l["a"].SpecularGlossiness,I={};function p(e,t,a,n,o){const r=`HAS_${o}_TEXTURE_TRANSFORM`;e.addDefine(r,void 0,i["a"].FRAGMENT);const s=n+"Transform";e.addUniform("mat3",s,i["a"].FRAGMENT),t[s]=function(){return a.transform}}function M(e,t,a,r,s,c){e.addUniform("sampler2D",r,i["a"].FRAGMENT),t[r]=function(){return Object(o["a"])(a.texture,c)};const d=`HAS_${s}_TEXTURE`;e.addDefine(d,void 0,i["a"].FRAGMENT);const T=a.texCoord,A="v_texCoord_"+T,l="TEXCOORD_"+s;e.addDefine(l,A,i["a"].FRAGMENT);const f=a.transform;Object(n["a"])(f)&&!u["a"].equals(f,u["a"].IDENTITY)&&p(e,t,a,r,s)}function N(e,t,a,o,r,s){const c=e.emissiveTexture;Object(n["a"])(c)&&M(a,t,c,"u_emissiveTexture","EMISSIVE",s);const d=e.emissiveFactor;Object(n["a"])(d)&&!T["a"].equals(d,_.DEFAULT_EMISSIVE_FACTOR)&&(a.addUniform("vec3","u_emissiveFactor",i["a"].FRAGMENT),t.u_emissiveFactor=function(){return e.emissiveFactor},a.addDefine("HAS_EMISSIVE_FACTOR",void 0,i["a"].FRAGMENT));const u=e.normalTexture;Object(n["a"])(u)&&M(a,t,u,"u_normalTexture","NORMAL",r);const A=e.occlusionTexture;Object(n["a"])(A)&&M(a,t,A,"u_occlusionTexture","OCCLUSION",o)}function F(e,t,a,o){const r=e.specularGlossiness;a.addDefine("USE_SPECULAR_GLOSSINESS",void 0,i["a"].FRAGMENT);const s=r.diffuseTexture;Object(n["a"])(s)&&M(a,t,s,"u_diffuseTexture","DIFFUSE",o);const c=r.diffuseFactor;Object(n["a"])(c)&&!A["a"].equals(c,E.DEFAULT_DIFFUSE_FACTOR)&&(a.addUniform("vec4","u_diffuseFactor",i["a"].FRAGMENT),t.u_diffuseFactor=function(){return r.diffuseFactor},a.addDefine("HAS_DIFFUSE_FACTOR",void 0,i["a"].FRAGMENT));const d=r.specularGlossinessTexture;Object(n["a"])(d)&&M(a,t,d,"u_specularGlossinessTexture","SPECULAR_GLOSSINESS",o);const u=r.specularFactor;Object(n["a"])(u)&&!T["a"].equals(u,E.DEFAULT_SPECULAR_FACTOR)&&(a.addUniform("vec3","u_specularFactor",i["a"].FRAGMENT),t.u_specularFactor=function(){return r.specularFactor},a.addDefine("HAS_SPECULAR_FACTOR",void 0,i["a"].FRAGMENT));const l=r.glossinessFactor;Object(n["a"])(l)&&l!==E.DEFAULT_GLOSSINESS_FACTOR&&(a.addUniform("float","u_glossinessFactor",i["a"].FRAGMENT),t.u_glossinessFactor=function(){return r.glossinessFactor},a.addDefine("HAS_GLOSSINESS_FACTOR",void 0,i["a"].FRAGMENT))}function D(e,t,a,o){const r=e.metallicRoughness;a.addDefine("USE_METALLIC_ROUGHNESS",void 0,i["a"].FRAGMENT);const s=r.baseColorTexture;Object(n["a"])(s)&&M(a,t,s,"u_baseColorTexture","BASE_COLOR",o);const c=r.baseColorFactor;Object(n["a"])(c)&&!A["a"].equals(c,S.DEFAULT_BASE_COLOR_FACTOR)&&(a.addUniform("vec4","u_baseColorFactor",i["a"].FRAGMENT),t.u_baseColorFactor=function(){return r.baseColorFactor},a.addDefine("HAS_BASE_COLOR_FACTOR",void 0,i["a"].FRAGMENT));const d=r.metallicRoughnessTexture;Object(n["a"])(d)&&M(a,t,d,"u_metallicRoughnessTexture","METALLIC_ROUGHNESS",o);const u=r.metallicFactor;Object(n["a"])(u)&&u!==S.DEFAULT_METALLIC_FACTOR&&(a.addUniform("float","u_metallicFactor",i["a"].FRAGMENT),t.u_metallicFactor=function(){return r.metallicFactor},a.addDefine("HAS_METALLIC_FACTOR",void 0,i["a"].FRAGMENT));const T=r.roughnessFactor;Object(n["a"])(T)&&T!==S.DEFAULT_ROUGHNESS_FACTOR&&(a.addUniform("float","u_roughnessFactor",i["a"].FRAGMENT),t.u_roughnessFactor=function(){return r.roughnessFactor},a.addDefine("HAS_ROUGHNESS_FACTOR",void 0,i["a"].FRAGMENT))}I.name="MaterialPipelineStage",I.process=function(e,t,a){const o=t.material,u=e.uniformMap,T=e.shaderBuilder,A=a.context.defaultTexture,l=a.context.defaultNormalTexture,_=a.context.defaultEmissiveTexture;N(o,u,T,A,l,_),Object(n["a"])(o.specularGlossiness)?F(o,u,T,A):D(o,u,T,A);const S=m["a"].getAttributeBySemantic(t,f["a"].NORMAL),E=e.lightingOptions;o.unlit||!S?E.lightingModel=s["a"].UNLIT:E.lightingModel=s["a"].PBR;const I=e.model,p=I.backFaceCulling&&!o.doubleSided;e.renderStateOptions.cull.enabled=p;const M=e.alphaOptions;o.alphaMode===r["a"].BLEND?M.pass=d["a"].TRANSLUCENT:o.alphaMode===r["a"].MASK&&(M.alphaCutoff=o.alphaCutoff),T.addFragmentLines([c["a"]]),o.doubleSided&&T.addDefine("HAS_DOUBLE_SIDED_MATERIAL",void 0,i["a"].FRAGMENT)},I._processTexture=M,I._processTextureTransform=p,t["a"]=I},c7f8:function(e,t,a){"use strict";var n=a("535a"),o=a("2f63"),i=a("ef54"),r=a("3e36"),s=a("2fe8"),c=a("60e0");const d={};function u(e,t){const a=d.METADATACLASS_FIELDS;for(const n of t){const t=n+"MetadataClass",o=t+"VS",r=t+"FS";e.addStruct(o,t,i["a"].VERTEX),e.addStruct(r,t,i["a"].FRAGMENT);for(let i=0;i<a.length;i++){const t=a[i].shaderName;e.addStructField(o,n,t),e.addStructField(r,n,t)}}}function T(e){e.addStruct(d.STRUCT_ID_METADATA_VS,d.STRUCT_NAME_METADATA,i["a"].VERTEX),e.addStruct(d.STRUCT_ID_METADATA_FS,d.STRUCT_NAME_METADATA,i["a"].FRAGMENT),e.addStruct(d.STRUCT_ID_METADATACLASS_VS,d.STRUCT_NAME_METADATACLASS,i["a"].VERTEX),e.addStruct(d.STRUCT_ID_METADATACLASS_FS,d.STRUCT_NAME_METADATACLASS,i["a"].FRAGMENT),e.addFunction(d.FUNCTION_ID_INITIALIZE_METADATA_VS,d.FUNCTION_SIGNATURE_INITIALIZE_METADATA,i["a"].VERTEX),e.addFunction(d.FUNCTION_ID_INITIALIZE_METADATA_FS,d.FUNCTION_SIGNATURE_INITIALIZE_METADATA,i["a"].FRAGMENT),e.addFunction(d.FUNCTION_ID_SET_METADATA_VARYINGS,d.FUNCTION_SIGNATURE_SET_METADATA_VARYINGS,i["a"].VERTEX)}function A(e,t){for(let a=0;a<e.length;a++){const n=e[a].properties;for(const e in n)if(n.hasOwnProperty(e)){const a=n[e];t(e,a)}}}function l(e,t,a){const{getAttributeByName:n,getAttributeInfo:o}=c["a"];function i(a,i){const r=n(t,i.attribute),s=o(r),c=s.glslType;e.add(c)}A(a,i)}function f(e,t,a){const{getAttributeByName:n,getAttributeInfo:o}=c["a"];function i(a,i){const r=n(t,i.attribute),s=o(r);m(e,s,a,i)}A(a,i)}function m(e,t,a,n){const r=c["a"].sanitizeGlslIdentifier(a),s=t.variableName,u=t.glslType,T=e.shaderBuilder;T.addStructField(d.STRUCT_ID_METADATA_VS,u,r),T.addStructField(d.STRUCT_ID_METADATA_FS,u,r);const A=u+"MetadataClass";T.addStructField(d.STRUCT_ID_METADATACLASS_VS,A,r),T.addStructField(d.STRUCT_ID_METADATACLASS_FS,A,r);let l="attributes."+s;n.hasValueTransform&&(l=p(l,{renderResources:e,glslType:u,metadataVariable:r,shaderDestination:i["a"].BOTH,offset:n.offset,scale:n.scale}));const f=`metadata.${r} = ${l};`;T.addFunctionLines(d.FUNCTION_ID_INITIALIZE_METADATA_VS,[f]),T.addFunctionLines(d.FUNCTION_ID_INITIALIZE_METADATA_FS,[f]);const m=d.METADATACLASS_FIELDS;for(let i=0;i<m.length;i++){const{specName:e,shaderName:t}=m[i],a=n.classProperty[e];if(!Object(o["a"])(a))continue;const s=`metadataClass.${r}.${t} = ${u}(${a});`;T.addFunctionLines(d.FUNCTION_ID_INITIALIZE_METADATA_VS,[s]),T.addFunctionLines(d.FUNCTION_ID_INITIALIZE_METADATA_FS,[s])}}function _(e,t){function a(t,a){const n=a.getGlslType();e.add(n)}A(t,a)}function S(e,t){function a(t,a){a.isGpuCompatible()&&E(e,t,a)}A(t,a)}function E(e,t,a){const n=a.textureReader,r=n.index,s="u_propertyTexture_"+r;e.uniformMap.hasOwnProperty(s)||I(e,s,n);const u=c["a"].sanitizeGlslIdentifier(t),T=a.getGlslType(),A=e.shaderBuilder;A.addStructField(d.STRUCT_ID_METADATA_FS,T,u);const l=T+"MetadataClass";A.addStructField(d.STRUCT_ID_METADATACLASS_FS,l,u);const f=n.texCoord,m="attributes.texCoord_"+f,_=n.channels;let S=`texture2D(${s}, ${m}).${_}`;S=a.unpackInShader(S),a.hasValueTransform&&(S=p(S,{renderResources:e,glslType:T,metadataVariable:u,shaderDestination:i["a"].FRAGMENT,offset:a.offset,scale:a.scale}));const E=`metadata.${u} = ${S};`;A.addFunctionLines(d.FUNCTION_ID_INITIALIZE_METADATA_FS,[E]);const M=d.METADATACLASS_FIELDS;for(let i=0;i<M.length;i++){const{specName:e,shaderName:t}=M[i],n=a.classProperty[e];if(!Object(o["a"])(n))continue;const r=`metadataClass.${u}.${t} = ${T}(${n});`;A.addFunctionLines(d.FUNCTION_ID_INITIALIZE_METADATA_FS,[r])}}function I(e,t,a){const{shaderBuilder:n,uniformMap:o}=e;n.addUniform("sampler2D",t,i["a"].FRAGMENT),o[t]=()=>a.texture}function p(e,t){const a=t.metadataVariable,n=`u_${a}_offset`,o=`u_${a}_scale`,{shaderBuilder:i,uniformMap:r}=t.renderResources,s=t.glslType,c=t.shaderDestination;return i.addUniform(s,n,c),i.addUniform(s,o,c),r[n]=()=>t.offset,r[o]=()=>t.scale,`czm_valueTransform(${n}, ${o}, ${e})`}d.name="MetadataPipelineStage",d.STRUCT_ID_METADATA_VS="MetadataVS",d.STRUCT_ID_METADATA_FS="MetadataFS",d.STRUCT_NAME_METADATA="Metadata",d.STRUCT_ID_METADATACLASS_VS="MetadataClassVS",d.STRUCT_ID_METADATACLASS_FS="MetadataClassFS",d.STRUCT_NAME_METADATACLASS="MetadataClass",d.FUNCTION_ID_INITIALIZE_METADATA_VS="initializeMetadataVS",d.FUNCTION_ID_INITIALIZE_METADATA_FS="initializeMetadataFS",d.FUNCTION_SIGNATURE_INITIALIZE_METADATA="void initializeMetadata(out Metadata metadata, out MetadataClass metadataClass, ProcessedAttributes attributes)",d.FUNCTION_ID_SET_METADATA_VARYINGS="setMetadataVaryings",d.FUNCTION_SIGNATURE_SET_METADATA_VARYINGS="void setMetadataVaryings()",d.METADATACLASS_FIELDS=[{specName:"noData",shaderName:"noData"},{specName:"default",shaderName:"defaultValue"},{specName:"min",shaderName:"minValue"},{specName:"max",shaderName:"maxValue"}],d.process=function(e,t,a){const{shaderBuilder:i,model:c}=e,d=Object(n["a"])(c.structuralMetadata,{}),{propertyAttributes:A,propertyTextures:m}=d,E=new Set;Object(o["a"])(A)&&l(E,t,A),Object(o["a"])(m)&&_(E,m),u(i,E),T(i),i.addVertexLines([s["a"]]),i.addFragmentLines([r["a"]]),Object(o["a"])(A)&&f(e,t,A),Object(o["a"])(m)&&S(e,m)},t["a"]=d},df9b:function(e,t,a){"use strict";const n={UNLIT:0,PBR:1};t["a"]=Object.freeze(n)}}]);