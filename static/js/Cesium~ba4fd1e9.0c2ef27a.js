(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~ba4fd1e9"],{2221:function(e,t,a){"use strict";var i=a("c8d1"),o=a("e438"),r=a("cef5"),s=a("670c"),n=a("be18"),h=a("a561"),c=a("bef8"),u=a("2f63"),d=a("4f04"),l=a("af23"),f=a("93da"),g=a("78e5"),m=a("9410"),T=a("eace"),_=a("0769"),w=a("4261"),x=a("fde5"),p=a("1184"),b=a("2856"),S=a("ee78");function y(e){this.tile=e,this.frameLastUpdated=void 0,this.westMeshes=[],this.westTiles=[],this.southMeshes=[],this.southTiles=[],this.eastMeshes=[],this.eastTiles=[],this.northMeshes=[],this.northTiles=[],this.southwestMesh=void 0,this.southwestTile=void 0,this.southeastMesh=void 0,this.southeastTile=void 0,this.northwestMesh=void 0,this.northwestTile=void 0,this.northeastMesh=void 0,this.northeastTile=void 0,this.changedThisFrame=!0,this.visitedFrame=void 0,this.enqueuedFrame=void 0,this.mesh=void 0,this.vertexArray=void 0,this.waterMaskTexture=void 0,this.waterMaskTranslationAndScale=new h["a"]}y.prototype.update=function(e,t,a){this.changedThisFrame&&(G(e,t,this.tile,a),this.changedThisFrame=!1)},y.prototype.destroy=function(e){this._destroyVertexArray(e),Object(u["a"])(this.waterMaskTexture)&&(--this.waterMaskTexture.referenceCount,0===this.waterMaskTexture.referenceCount&&this.waterMaskTexture.destroy(),this.waterMaskTexture=void 0)},y.prototype._destroyVertexArray=function(e){Object(u["a"])(this.vertexArray)&&(Object(u["a"])(e)?e.push(this.vertexArray):b["a"]._freeVertexArray(this.vertexArray),this.vertexArray=void 0)};const E=new m["a"];function O(e,t,a,i,o,r,s,n,h){if(void 0===i)return;let c=i;while(c&&(c._lastSelectionResultFrame!==o||S["a"].wasKicked(c._lastSelectionResult)||S["a"].originalResult(c._lastSelectionResult)===S["a"].CULLED)){if(s)return;const e=c.parent;if(r>=x["a"].NORTHWEST&&void 0!==e)switch(r){case x["a"].NORTHWEST:c=c===e.northwestChild?e:void 0;break;case x["a"].NORTHEAST:c=c===e.northeastChild?e:void 0;break;case x["a"].SOUTHWEST:c=c===e.southwestChild?e:void 0;break;case x["a"].SOUTHEAST:c=c===e.southeastChild?e:void 0;break}else c=e}if(void 0!==c)if(c._lastSelectionResult!==S["a"].RENDERED){if(S["a"].originalResult(i._lastSelectionResult)!==S["a"].CULLED)switch(r){case x["a"].WEST:O(e,t,a,i.northwestChild,o,r,!0,n,h),O(e,t,a,i.southwestChild,o,r,!0,n,h);break;case x["a"].EAST:O(e,t,a,i.southeastChild,o,r,!0,n,h),O(e,t,a,i.northeastChild,o,r,!0,n,h);break;case x["a"].SOUTH:O(e,t,a,i.southwestChild,o,r,!0,n,h),O(e,t,a,i.southeastChild,o,r,!0,n,h);break;case x["a"].NORTH:O(e,t,a,i.northeastChild,o,r,!0,n,h),O(e,t,a,i.northwestChild,o,r,!0,n,h);break;case x["a"].NORTHWEST:O(e,t,a,i.northwestChild,o,r,!0,n,h);break;case x["a"].NORTHEAST:O(e,t,a,i.northeastChild,o,r,!0,n,h);break;case x["a"].SOUTHWEST:O(e,t,a,i.southwestChild,o,r,!0,n,h);break;case x["a"].SOUTHEAST:O(e,t,a,i.southeastChild,o,r,!0,n,h);break;default:throw new d["a"]("Invalid edge")}}else{if(Object(u["a"])(c.data.vertexArray))return;M(e,t,a,c,r,o,n,h)}}function M(e,t,a,i,o,r,s,n){const h=i.data;if(void 0===h.fill)h.fill=new y(i);else if(h.fill.visitedFrame===r)return;h.fill.enqueuedFrame!==r&&(h.fill.enqueuedFrame=r,h.fill.changedThisFrame=!1,s.enqueue(i)),A(e,t,a,i,o,n)}function A(e,t,a,i,o,r){const s=i.data.fill;let n;const h=a.data.fill;let c,d,l,g,m,T;switch(Object(u["a"])(h)?(h.visitedFrame=t.frameNumber,h.changedThisFrame&&(G(e,t,a,r),h.changedThisFrame=!1),n=a.data.fill.mesh):n=a.data.mesh,o){case x["a"].WEST:c=s.westMeshes,d=s.westTiles;break;case x["a"].SOUTH:c=s.southMeshes,d=s.southTiles;break;case x["a"].EAST:c=s.eastMeshes,d=s.eastTiles;break;case x["a"].NORTH:c=s.northMeshes,d=s.northTiles;break;case x["a"].NORTHWEST:return s.changedThisFrame=s.changedThisFrame||s.northwestMesh!==n,s.northwestMesh=n,void(s.northwestTile=a);case x["a"].NORTHEAST:return s.changedThisFrame=s.changedThisFrame||s.northeastMesh!==n,s.northeastMesh=n,void(s.northeastTile=a);case x["a"].SOUTHWEST:return s.changedThisFrame=s.changedThisFrame||s.southwestMesh!==n,s.southwestMesh=n,void(s.southwestTile=a);case x["a"].SOUTHEAST:return s.changedThisFrame=s.changedThisFrame||s.southeastMesh!==n,s.southeastMesh=n,void(s.southeastTile=a)}if(a.level<=i.level)return s.changedThisFrame=s.changedThisFrame||c[0]!==n||1!==c.length,c[0]=n,d[0]=a,c.length=1,void(d.length=1);const _=a.rectangle;let w;const p=i.rectangle;switch(o){case x["a"].WEST:for(w=(p.north-p.south)*f["a"].EPSILON5,l=0;l<d.length;++l)if(m=d[l],T=m.rectangle,f["a"].greaterThan(_.north,T.south,w))break;for(g=l;g<d.length;++g)if(m=d[g],T=m.rectangle,f["a"].greaterThanOrEquals(_.south,T.north,w))break;break;case x["a"].SOUTH:for(w=(p.east-p.west)*f["a"].EPSILON5,l=0;l<d.length;++l)if(m=d[l],T=m.rectangle,f["a"].lessThan(_.west,T.east,w))break;for(g=l;g<d.length;++g)if(m=d[g],T=m.rectangle,f["a"].lessThanOrEquals(_.east,T.west,w))break;break;case x["a"].EAST:for(w=(p.north-p.south)*f["a"].EPSILON5,l=0;l<d.length;++l)if(m=d[l],T=m.rectangle,f["a"].lessThan(_.south,T.north,w))break;for(g=l;g<d.length;++g)if(m=d[g],T=m.rectangle,f["a"].lessThanOrEquals(_.north,T.south,w))break;break;case x["a"].NORTH:for(w=(p.east-p.west)*f["a"].EPSILON5,l=0;l<d.length;++l)if(m=d[l],T=m.rectangle,f["a"].greaterThan(_.east,T.west,w))break;for(g=l;g<d.length;++g)if(m=d[g],T=m.rectangle,f["a"].greaterThanOrEquals(_.west,T.east,w))break;break}g-l===1?(s.changedThisFrame=s.changedThisFrame||c[l]!==n,c[l]=n,d[l]=a):(s.changedThisFrame=!0,c.splice(l,g-l,n),d.splice(l,g-l,a))}y.updateFillTiles=function(e,t,a,i){const o=e._quadtree,r=o._levelZeroTiles,s=o._lastSelectionFrameNumber,n=E;n.clear();for(let c=0;c<t.length;++c){const e=t[c];Object(u["a"])(e.data.vertexArray)&&n.enqueue(t[c])}let h=n.dequeue();while(void 0!==h){const t=h.findTileToWest(r),o=h.findTileToSouth(r),c=h.findTileToEast(r),u=h.findTileToNorth(r);O(e,a,h,t,s,x["a"].EAST,!1,n,i),O(e,a,h,o,s,x["a"].NORTH,!1,n,i),O(e,a,h,c,s,x["a"].WEST,!1,n,i),O(e,a,h,u,s,x["a"].SOUTH,!1,n,i);const d=t.findTileToNorth(r),l=t.findTileToSouth(r),f=c.findTileToNorth(r),g=c.findTileToSouth(r);O(e,a,h,d,s,x["a"].SOUTHEAST,!1,n,i),O(e,a,h,f,s,x["a"].SOUTHWEST,!1,n,i),O(e,a,h,l,s,x["a"].NORTHEAST,!1,n,i),O(e,a,h,g,s,x["a"].NORTHWEST,!1,n,i),h=n.dequeue()}};const N=new c["a"],C=new c["a"],R=new n["a"],v=new n["a"],I=new s["a"],L=new s["a"],P=new s["a"];function H(){this.height=0,this.encodedNormal=new s["a"]}function F(e,t,a,i,o,r,s,n,h){if(Object(u["a"])(o))return o;let c;if(Object(u["a"])(r)&&Object(u["a"])(s))c=.5*(r.height+s.height);else if(Object(u["a"])(r))c=r.height;else if(Object(u["a"])(s))c=s.height;else if(Object(u["a"])(n))c=n.height;else{const t=e.tile.data,a=t.tileBoundingRegion;let i=0,o=0;Object(u["a"])(a)&&(i=a.minimumHeight,o=a.maximumHeight),c=.5*(i+o)}return ee(e,t,a,i,c,h),h}const W={minimumHeight:0,maximumHeight:0},j=new n["a"],k=new H,D=new H,U=new H,z=new H,B="undefined"!==typeof Uint8Array?new Uint8Array(81):void 0,V={tilingScheme:void 0,x:0,y:0,level:0,exaggeration:1,exaggerationRelativeHeight:0};function G(e,t,a,o){b["a"].initialize(a,e.terrainProvider,e._imageryLayers);const n=a.data,h=n.fill,c=a.rectangle,d=t.terrainExaggeration,f=t.terrainExaggerationRelativeHeight,m=1!==d,S=a.tilingScheme.ellipsoid;let y=te(h,S,0,1,h.northwestTile,h.northwestMesh,h.northTiles,h.northMeshes,h.westTiles,h.westMeshes,U),E=te(h,S,0,0,h.southwestTile,h.southwestMesh,h.westTiles,h.westMeshes,h.southTiles,h.southMeshes,k),O=te(h,S,1,0,h.southeastTile,h.southeastMesh,h.southTiles,h.southMeshes,h.eastTiles,h.eastMeshes,D),M=te(h,S,1,1,h.northeastTile,h.northeastMesh,h.eastTiles,h.eastMeshes,h.northTiles,h.northMeshes,z);y=F(h,S,0,1,y,E,M,O,U),E=F(h,S,0,0,E,y,O,M,k),O=F(h,S,1,1,O,E,M,y,D),M=F(h,S,1,1,M,O,y,E,z);const A=E.height,R=O.height,L=y.height,H=M.height;let G=Math.min(A,R,L,H),q=Math.max(A,R,L,H);const Y=.5*(G+q);let Q,J;const Z=e.getLevelMaximumGeometricError(a.level),X=S.maximumRadius-Z;let $=4*Math.acos(X/S.maximumRadius);if($*=1.5,c.width>$&&q-G<=Z){const e=new l["a"]({width:9,height:9,buffer:B,structure:{heightOffset:q}}),t=V;t.tilingScheme=a.tilingScheme,t.x=a.x,t.y=a.y,t.level=a.level,t.exaggeration=d,t.exaggerationRelativeHeight=f,h.mesh=e._createMeshSync(t)}else{const t=m,o=T["a"].center(c,C);o.height=Y;const n=S.cartographicToCartesian(o,j),u=new _["a"](n,void 0,void 0,void 0,void 0,!0,!0,t,d,f);let l,b=5;for(l=h.westMeshes,Q=0,J=l.length;Q<J;++Q)b+=l[Q].eastIndicesNorthToSouth.length;for(l=h.southMeshes,Q=0,J=l.length;Q<J;++Q)b+=l[Q].northIndicesWestToEast.length;for(l=h.eastMeshes,Q=0,J=l.length;Q<J;++Q)b+=l[Q].westIndicesSouthToNorth.length;for(l=h.northMeshes,Q=0,J=l.length;Q<J;++Q)b+=l[Q].southIndicesEastToWest.length;const A=W;A.minimumHeight=G,A.maximumHeight=q;const R=u.stride;let L=new Float32Array(b*R),H=0;const F=H;H=K(S,c,u,L,H,0,1,y.height,y.encodedNormal,1,A),H=ie(h,S,u,L,H,h.westTiles,h.westMeshes,x["a"].EAST,A);const k=H;H=K(S,c,u,L,H,0,0,E.height,E.encodedNormal,0,A),H=ie(h,S,u,L,H,h.southTiles,h.southMeshes,x["a"].NORTH,A);const D=H;H=K(S,c,u,L,H,1,0,O.height,O.encodedNormal,0,A),H=ie(h,S,u,L,H,h.eastTiles,h.eastMeshes,x["a"].WEST,A);const U=H;H=K(S,c,u,L,H,1,1,M.height,M.encodedNormal,1,A),H=ie(h,S,u,L,H,h.northTiles,h.northMeshes,x["a"].SOUTH,A),G=A.minimumHeight,q=A.maximumHeight;const z=g["a"].fromRectangle(c,G,q,a.tilingScheme.ellipsoid),B=p["a"].geodeticLatitudeToMercatorAngle(c.south),V=1/(p["a"].geodeticLatitudeToMercatorAngle(c.north)-B),Z=(p["a"].geodeticLatitudeToMercatorAngle(o.latitude)-B)*V,X=S.geodeticSurfaceNormalCartographic(N,v),$=i["a"].octEncode(X,I),ee=H;u.encode(L,H*R,z.center,s["a"].fromElements(.5,.5,P),Y,$,Z,X),++H;const te=H,ae=te<256?1:2,oe=3*(te-1),re=oe*ae,se=(L.length-te*R)*Float32Array.BYTES_PER_ELEMENT;let ne;if(se>=re){const e=te*R*Float32Array.BYTES_PER_ELEMENT;ne=te<256?new Uint8Array(L.buffer,e,oe):new Uint16Array(L.buffer,e,oe)}else ne=te<256?new Uint8Array(oe):new Uint16Array(oe);L=new Float32Array(L.buffer,0,te*R);let he=0;for(Q=0;Q<te-2;++Q)ne[he++]=ee,ne[he++]=Q,ne[he++]=Q+1;ne[he++]=ee,ne[he++]=Q,ne[he++]=0;const ue=[];for(Q=k;Q>=F;--Q)ue.push(Q);const de=[];for(Q=D;Q>=k;--Q)de.push(Q);const le=[];for(Q=U;Q>=D;--Q)le.push(Q);const fe=[];for(fe.push(0),Q=ee-1;Q>=U;--Q)fe.push(Q);h.mesh=new w["a"](u.center,L,ne,oe,te,G,q,r["a"].fromOrientedBoundingBox(z),ce(e,z.center,c,G,q),u.stride,z,u,ue,de,le,fe)}const ee=t.context;h._destroyVertexArray(o),h.vertexArray=b["a"]._createVertexArrayForMesh(ee,h.mesh),n.processImagery(a,e.terrainProvider,t,!0);const ae=h.waterMaskTexture;if(h.waterMaskTexture=void 0,e.terrainProvider.hasWaterMask){const e=n._findAncestorTileWithTerrainData(a);Object(u["a"])(e)&&Object(u["a"])(e.data.waterMaskTexture)&&(h.waterMaskTexture=e.data.waterMaskTexture,++h.waterMaskTexture.referenceCount,n._computeWaterMaskTranslationAndScale(a,e,h.waterMaskTranslationAndScale))}Object(u["a"])(ae)&&(--ae.referenceCount,0===ae.referenceCount&&ae.destroy())}function K(e,t,a,i,o,r,s,n,h,c,u){const d=N;d.longitude=f["a"].lerp(t.west,t.east,r),d.latitude=f["a"].lerp(t.south,t.north,s),d.height=n;const l=e.cartographicToCartesian(d,R);let g;a.hasGeodeticSurfaceNormals&&(g=e.geodeticSurfaceNormal(l,v));const m=L;return m.x=r,m.y=s,a.encode(i,o*a.stride,l,m,n,h,c,g),u.minimumHeight=Math.min(u.minimumHeight,n),u.maximumHeight=Math.max(u.maximumHeight,n),o+1}const q=new T["a"];function Y(e,t,a,i){let o=e.rectangle;const r=t.rectangle;0===t.x&&1===a.x&&e.x===e.tilingScheme.getNumberOfXTilesAtLevel(e.level)-1?(o=T["a"].clone(e.rectangle,q),o.west-=f["a"].TWO_PI,o.east-=f["a"].TWO_PI):0===e.x&&0===a.x&&t.x===t.tilingScheme.getNumberOfXTilesAtLevel(t.level)-1&&(o=T["a"].clone(e.rectangle,q),o.west+=f["a"].TWO_PI,o.east+=f["a"].TWO_PI);const s=o.east-o.west,n=(r.west-o.west)/s,h=(r.east-o.west)/s,c=o.north-o.south,u=(r.south-o.south)/c,d=(r.north-o.south)/c;let l=(a.x-n)/(h-n),g=(a.y-u)/(d-u);return Math.abs(l)<Math.EPSILON5?l=0:Math.abs(l-1)<Math.EPSILON5&&(l=1),Math.abs(g)<Math.EPSILON5?g=0:Math.abs(g-1)<Math.EPSILON5&&(g=1),i.x=l,i.y=g,i}const Q=new s["a"];function J(e,t,a,i,o){const r=e.encoding,s=e.vertices;if(o.height=r.decodeHeight(s,t),r.hasVertexNormals)r.getOctEncodedNormal(s,t,o.encodedNormal);else{const e=o.encodedNormal;e.x=0,e.y=0}}const Z=new s["a"],X=new n["a"];function $(e,t,a,o,r,s,h,c,u,d){const l=o.encoding,g=o.vertices,m=Y(t,a,l.decodeTextureCoordinates(g,r,P),P),T=Y(t,a,l.decodeTextureCoordinates(g,s,L),L);let _;_=u?(h-m.x)/(T.x-m.x):(c-m.y)/(T.y-m.y);const w=l.decodeHeight(g,r),x=l.decodeHeight(g,s),p=a.rectangle;let b;if(N.longitude=f["a"].lerp(p.west,p.east,h),N.latitude=f["a"].lerp(p.south,p.north,c),d.height=N.height=f["a"].lerp(w,x,_),l.hasVertexNormals){const e=l.getOctEncodedNormal(g,r,Q),t=l.getOctEncodedNormal(g,s,Z),a=i["a"].octDecode(e.x,e.y,R),o=i["a"].octDecode(t.x,t.y,X);b=n["a"].lerp(a,o,_,R),n["a"].normalize(b,b),i["a"].octEncode(b,d.encodedNormal)}else b=e.geodeticSurfaceNormalCartographic(N,R),i["a"].octEncode(b,d.encodedNormal)}function ee(e,t,a,o,r,s){s.height=r;const n=t.geodeticSurfaceNormalCartographic(N,R);i["a"].octEncode(n,s.encodedNormal)}function te(e,t,a,i,o,r,s,n,h,c,d){const l=ne(e,t,n,s,!1,a,i,d)||ne(e,t,c,h,!0,a,i,d);if(l)return d;let f,g;return se(o,r)?(f=0===a?0===i?r.eastIndicesNorthToSouth[0]:r.southIndicesEastToWest[0]:0===i?r.northIndicesWestToEast[0]:r.westIndicesSouthToNorth[0],J(r,f,a,i,d),d):(g=0===a?0===i?ae(e.westMeshes,e.westTiles,x["a"].EAST,e.southMeshes,e.southTiles,x["a"].NORTH,a,i):ae(e.northMeshes,e.northTiles,x["a"].SOUTH,e.westMeshes,e.westTiles,x["a"].EAST,a,i):0===i?ae(e.southMeshes,e.southTiles,x["a"].NORTH,e.eastMeshes,e.eastTiles,x["a"].WEST,a,i):ae(e.eastMeshes,e.eastTiles,x["a"].WEST,e.northMeshes,e.northTiles,x["a"].SOUTH,a,i),Object(u["a"])(g)?(ee(e,t,a,i,g,d),d):void 0)}function ae(e,t,a,i,o,r,s,n){const h=re(e,t,!1,a,s,n),c=re(i,o,!0,r,s,n);return Object(u["a"])(h)&&Object(u["a"])(c)?.5*(h+c):Object(u["a"])(h)?h:c}function ie(e,t,a,i,o,r,s,n,h){for(let c=0;c<r.length;++c)o=oe(e,t,a,i,o,r[c],s[c],n,h);return o}function oe(e,t,a,i,o,r,s,n,h){let c=r.rectangle;n===x["a"].EAST&&0===e.tile.x?(c=T["a"].clone(r.rectangle,q),c.west-=f["a"].TWO_PI,c.east-=f["a"].TWO_PI):n===x["a"].WEST&&0===r.x&&(c=T["a"].clone(r.rectangle,q),c.west+=f["a"].TWO_PI,c.east+=f["a"].TWO_PI);const u=e.tile.rectangle;let d,l,g,m;switch(o>0&&(a.decodeTextureCoordinates(i,o-1,P),d=P.x,l=P.y),n){case x["a"].WEST:g=s.westIndicesSouthToNorth,m=!1;break;case x["a"].NORTH:g=s.northIndicesWestToEast,m=!0;break;case x["a"].EAST:g=s.eastIndicesNorthToSouth,m=!1;break;case x["a"].SOUTH:g=s.southIndicesEastToWest,m=!0;break}const _=r,w=e.tile,b=s.encoding,S=s.vertices,y=a.stride;let E,O;b.hasWebMercatorT&&(E=p["a"].geodeticLatitudeToMercatorAngle(u.south),O=1/(p["a"].geodeticLatitudeToMercatorAngle(u.north)-E));for(let T=0;T<g.length;++T){const e=g[T],r=b.decodeTextureCoordinates(S,e,P);Y(_,w,r,r);const s=r.x,n=r.y,c=m?s:n;if(c<0||c>1)continue;if(Math.abs(s-d)<f["a"].EPSILON5&&Math.abs(n-l)<f["a"].EPSILON5)continue;const x=Math.abs(s)<f["a"].EPSILON5||Math.abs(s-1)<f["a"].EPSILON5,M=Math.abs(n)<f["a"].EPSILON5||Math.abs(n-1)<f["a"].EPSILON5;if(x&&M)continue;const A=b.decodePosition(S,e,R),N=b.decodeHeight(S,e);let C;b.hasVertexNormals?C=b.getOctEncodedNormal(S,e,I):(C=I,C.x=0,C.y=0);let L,H=n;if(b.hasWebMercatorT){const e=f["a"].lerp(u.south,u.north,n);H=(p["a"].geodeticLatitudeToMercatorAngle(e)-E)*O}a.hasGeodeticSurfaceNormals&&(L=t.geodeticSurfaceNormal(A,v)),a.encode(i,o*y,A,r,N,C,H,L),h.minimumHeight=Math.min(h.minimumHeight,N),h.maximumHeight=Math.max(h.maximumHeight,N),++o}return o}function re(e,t,a,i,o,r){let s,n,h;a?(s=0,n=e.length,h=1):(s=e.length-1,n=-1,h=-1);for(let c=s;c!==n;c+=h){const o=e[c],r=t[c];if(!se(r,o))continue;let s;switch(i){case x["a"].WEST:s=o.westIndicesSouthToNorth;break;case x["a"].SOUTH:s=o.southIndicesEastToWest;break;case x["a"].EAST:s=o.eastIndicesNorthToSouth;break;case x["a"].NORTH:s=o.northIndicesWestToEast;break}const n=s[a?0:s.length-1];if(Object(u["a"])(n))return o.encoding.decodeHeight(o.vertices,n)}}function se(e,t){return Object(u["a"])(t)&&(!Object(u["a"])(e.data.fill)||!e.data.fill.changedThisFrame)}function ne(e,t,a,i,r,s,n,h){let c,u,d,l,f;const g=i[r?0:a.length-1],m=a[r?0:a.length-1];if(se(g,m)&&(0===s?0===n?(c=r?m.northIndicesWestToEast:m.eastIndicesNorthToSouth,u=r,d=r):(c=r?m.eastIndicesNorthToSouth:m.southIndicesEastToWest,u=!r,d=!1):0===n?(c=r?m.westIndicesSouthToNorth:m.northIndicesWestToEast,u=!r,d=!0):(c=r?m.southIndicesEastToWest:m.westIndicesSouthToNorth,u=r,d=!r),c.length>0)){l=r?0:c.length-1,f=c[l],m.encoding.decodeTextureCoordinates(m.vertices,f,P);const a=Y(g,e.tile,P,P);if(a.x===s&&a.y===n)return J(m,f,s,n,h),!0;if(l=Object(o["a"])(c,u?s:n,(function(t,a){m.encoding.decodeTextureCoordinates(m.vertices,t,P);const i=Y(g,e.tile,P,P);return d?u?i.x-s:i.y-n:u?s-i.x:n-i.y})),!(l<0))return J(m,c[l],s,n,h),!0;if(l=~l,l>0&&l<c.length)return $(t,g,e.tile,m,c[l-1],c[l],s,n,u,h),!0}return!1}const he=[new n["a"],new n["a"],new n["a"],new n["a"]];function ce(e,t,a,i,o,r){const s=e.quadtree._occluders.ellipsoid,h=s.ellipsoid,c=he;return n["a"].fromRadians(a.west,a.south,o,h,c[0]),n["a"].fromRadians(a.east,a.south,o,h,c[1]),n["a"].fromRadians(a.west,a.north,o,h,c[2]),n["a"].fromRadians(a.east,a.north,o,h,c[3]),s.computeHorizonCullingPointPossiblyUnderEllipsoid(t,c,i,r)}t["a"]=y},"25ef":function(e,t,a){"use strict";var i=a("daa2");const o={ZERO:i["a"].ZERO,KEEP:i["a"].KEEP,REPLACE:i["a"].REPLACE,INCREMENT:i["a"].INCR,DECREMENT:i["a"].DECR,INVERT:i["a"].INVERT,INCREMENT_WRAP:i["a"].INCR_WRAP,DECREMENT_WRAP:i["a"].DECR_WRAP};t["a"]=Object.freeze(o)},3334:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a("535a");function o(e){e=Object(i["a"])(e,i["a"].EMPTY_OBJECT),this.webp=Object(i["a"])(e.webp,!1),this.basis=Object(i["a"])(e.basis,!1)}},3626:function(e,t,a){"use strict";var i=a("6102"),o=a("25ef");const r={CESIUM_3D_TILE_MASK:128,SKIP_LOD_MASK:112,SKIP_LOD_BIT_SHIFT:4,CLASSIFICATION_MASK:15,setCesium3DTileBit:function(){return{enabled:!0,frontFunction:i["a"].ALWAYS,frontOperation:{fail:o["a"].KEEP,zFail:o["a"].KEEP,zPass:o["a"].REPLACE},backFunction:i["a"].ALWAYS,backOperation:{fail:o["a"].KEEP,zFail:o["a"].KEEP,zPass:o["a"].REPLACE},reference:r.CESIUM_3D_TILE_MASK,mask:r.CESIUM_3D_TILE_MASK}}};t["a"]=Object.freeze(r)},"3de6":function(e,t,a){"use strict";const i={LEFT:-1,NONE:0,RIGHT:1};t["a"]=Object.freeze(i)},"4c22":function(e,t,a){"use strict";const i={FAILED:0,UNLOADED:1,RECEIVING:2,RECEIVED:3,TRANSFORMING:4,TRANSFORMED:5,READY:6};t["a"]=Object.freeze(i)},6102:function(e,t,a){"use strict";var i=a("daa2");const o={NEVER:i["a"].NEVER,LESS:i["a"].LESS,EQUAL:i["a"].EQUAL,LESS_OR_EQUAL:i["a"].LEQUAL,GREATER:i["a"].GREATER,NOT_EQUAL:i["a"].NOTEQUAL,GREATER_OR_EQUAL:i["a"].GEQUAL,ALWAYS:i["a"].ALWAYS};t["a"]=Object.freeze(o)},"7eb3":function(e,t,a){"use strict";var i=a("77af"),o=a("670c"),r=a("71ce"),s=a("535a"),n=a("2f63"),h=a("7d62"),c=a("e42d"),u=a("d4ed"),d=a("283e"),l=a("ac3b"),f=a("a913");function g(e,t,a,i,r){this.bottomLeft=Object(s["a"])(e,o["a"].ZERO),this.topRight=Object(s["a"])(t,o["a"].ZERO),this.childNode1=a,this.childNode2=i,this.imageIndex=r}const m=new o["a"](16,16);function T(e){e=Object(s["a"])(e,s["a"].EMPTY_OBJECT);const t=Object(s["a"])(e.borderWidthInPixels,1),a=Object(s["a"])(e.initialSize,m);this._context=e.context,this._pixelFormat=Object(s["a"])(e.pixelFormat,c["a"].RGBA),this._borderWidthInPixels=t,this._textureCoordinates=[],this._guid=Object(r["a"])(),this._idHash={},this._indexHash={},this._initialSize=a,this._root=void 0}function _(e,t){const a=e._context,i=e.numberOfImages,r=2,s=e._borderWidthInPixels;if(i>0){const i=e._texture.width,h=e._texture.height,c=r*(i+t.width+s),u=r*(h+t.height+s),d=i/c,m=h/u,T=new g(new o["a"](i+s,s),new o["a"](c,h)),_=new g(new o["a"],new o["a"](c,h),e._root,T),w=new g(new o["a"](s,h+s),new o["a"](c,u)),x=new g(new o["a"],new o["a"](c,u),_,w);for(let t=0;t<e._textureCoordinates.length;t++){const a=e._textureCoordinates[t];Object(n["a"])(a)&&(a.x*=d,a.y*=m,a.width*=d,a.height*=m)}const p=new f["a"]({context:e._context,width:c,height:u,pixelFormat:e._pixelFormat}),b=new l["a"]({context:a,colorTextures:[e._texture],destroyAttachments:!1});b._bind(),p.copyFromFramebuffer(0,0,0,0,c,u),b._unBind(),b.destroy(),e._texture=e._texture&&e._texture.destroy(),e._texture=p,e._root=x}else{let a=r*(t.width+2*s),i=r*(t.height+2*s);a<e._initialSize.x&&(a=e._initialSize.x),i<e._initialSize.y&&(i=e._initialSize.y),e._texture=e._texture&&e._texture.destroy(),e._texture=new f["a"]({context:e._context,width:a,height:i,pixelFormat:e._pixelFormat}),e._root=new g(new o["a"](s,s),new o["a"](a,i))}}function w(e,t,a){if(Object(n["a"])(t)){if(!Object(n["a"])(t.childNode1)&&!Object(n["a"])(t.childNode2)){if(Object(n["a"])(t.imageIndex))return;const i=t.topRight.x-t.bottomLeft.x,r=t.topRight.y-t.bottomLeft.y,s=i-a.width,h=r-a.height;if(s<0||h<0)return;if(0===s&&0===h)return t;if(s>h){t.childNode1=new g(new o["a"](t.bottomLeft.x,t.bottomLeft.y),new o["a"](t.bottomLeft.x+a.width,t.topRight.y));const i=t.bottomLeft.x+a.width+e._borderWidthInPixels;i<t.topRight.x&&(t.childNode2=new g(new o["a"](i,t.bottomLeft.y),new o["a"](t.topRight.x,t.topRight.y)))}else{t.childNode1=new g(new o["a"](t.bottomLeft.x,t.bottomLeft.y),new o["a"](t.topRight.x,t.bottomLeft.y+a.height));const i=t.bottomLeft.y+a.height+e._borderWidthInPixels;i<t.topRight.y&&(t.childNode2=new g(new o["a"](t.bottomLeft.x,i),new o["a"](t.topRight.x,t.topRight.y)))}return w(e,t.childNode1,a)}return w(e,t.childNode1,a)||w(e,t.childNode2,a)}}function x(e,t,a){const o=w(e,e._root,t);if(Object(n["a"])(o)){o.imageIndex=a;const r=e._texture.width,s=e._texture.height,n=o.topRight.x-o.bottomLeft.x,h=o.topRight.y-o.bottomLeft.y,c=o.bottomLeft.x/r,u=o.bottomLeft.y/s,d=n/r,l=h/s;e._textureCoordinates[a]=new i["a"](c,u,d,l),e._texture.copyFrom({source:t,xOffset:o.bottomLeft.x,yOffset:o.bottomLeft.y})}else _(e,t),x(e,t,a);e._guid=Object(r["a"])()}function p(e,t){if(!Object(n["a"])(e)||e.isDestroyed())return-1;const a=e.numberOfImages;return x(e,t,a),a}Object.defineProperties(T.prototype,{borderWidthInPixels:{get:function(){return this._borderWidthInPixels}},textureCoordinates:{get:function(){return this._textureCoordinates}},texture:{get:function(){return Object(n["a"])(this._texture)||(this._texture=new f["a"]({context:this._context,width:this._initialSize.x,height:this._initialSize.y,pixelFormat:this._pixelFormat})),this._texture}},numberOfImages:{get:function(){return this._textureCoordinates.length}},guid:{get:function(){return this._guid}}}),T.prototype.getImageIndex=function(e){return this._indexHash[e]},T.prototype.addImageSync=function(e,t){let a=this._indexHash[e];return Object(n["a"])(a)||(a=p(this,t),this._idHash[e]=Promise.resolve(a),this._indexHash[e]=a),a},T.prototype.addImage=function(e,t){let a=this._idHash[e];if(Object(n["a"])(a))return a;if("function"===typeof t)t=t(e);else if("string"===typeof t||t instanceof u["a"]){const e=u["a"].createIfNeeded(t);t=e.fetchImage()}const i=this;return a=Promise.resolve(t).then((function(t){const a=p(i,t);return i._indexHash[e]=a,a})),this._idHash[e]=a,a},T.prototype.addSubRegion=function(e,t){const a=this._idHash[e];if(!Object(n["a"])(a))throw new d["a"](`image with id "${e}" not found in the atlas.`);const o=this;return Promise.resolve(a).then((function(e){if(-1===e)return-1;const a=o._texture.width,s=o._texture.height,n=o.numberOfImages,h=o._textureCoordinates[e],c=h.x+t.x/a,u=h.y+t.y/s,d=t.width/a,l=t.height/s;return o._textureCoordinates.push(new i["a"](c,u,d,l)),o._guid=Object(r["a"])(),n}))},T.prototype.isDestroyed=function(){return!1},T.prototype.destroy=function(){return this._texture=this._texture&&this._texture.destroy(),Object(h["a"])(this)},t["a"]=T},b85c:function(e,t,a){"use strict";var i=a("5770");const o={modifyFragmentShader:function(e){return e=i["a"].replaceMain(e,"czm_splitter_main"),e+="uniform float czm_splitDirection; \nvoid main() \n{ \n#ifndef SHADOW_MAP\n    if (czm_splitDirection < 0.0 && gl_FragCoord.x > czm_splitPosition) discard; \n    if (czm_splitDirection > 0.0 && gl_FragCoord.x < czm_splitPosition) discard; \n#endif\n    czm_splitter_main(); \n} \n",e},addUniforms:function(e,t){t.czm_splitDirection=function(){return e.splitDirection}}};t["a"]=o},ccf4:function(e,t,a){"use strict";var i=a("cef5"),o=a("670c"),r=a("be18"),s=a("a561"),n=a("abab"),h=a("2f63"),c=a("7d62"),u=a("0123"),d=a("93da"),l=a("52f0"),f=a("e42d"),g=a("1b8d"),m=a("f20a"),T=a("8b68"),_=a("5b54"),w=a("a894"),x=a("6ef5"),p=a("6dc0"),b=a("e90c"),S=a("a913"),y=a("7c5e"),E=a("563a"),O=a("a036"),M=a("7c36"),A=a("b7c8"),N=a("a307"),C=a("0c80");function R(){this.show=!0,this._drawCommand=new w["a"]({primitiveType:g["a"].TRIANGLES,boundingVolume:new i["a"],owner:this}),this._commands={drawCommand:this._drawCommand,computeCommand:void 0},this._boundingVolume=new i["a"],this._boundingVolume2D=new i["a"],this._texture=void 0,this._drawingBufferWidth=void 0,this._drawingBufferHeight=void 0,this._radiusTS=void 0,this._size=void 0,this.glowFactor=1,this._glowFactorDirty=!1,this._useHdr=void 0;const e=this;this._uniformMap={u_texture:function(){return e._texture},u_size:function(){return e._size}}}Object.defineProperties(R.prototype,{glowFactor:{get:function(){return this._glowFactor},set:function(e){e=Math.max(e,0),this._glowFactor=e,this._glowFactorDirty=!0}}});const v=new o["a"],I=new o["a"],L=new s["a"],P=new s["a"];R.prototype.update=function(e,t,a){if(!this.show)return;const s=e.mode;if(s===N["a"].SCENE2D||s===N["a"].MORPHING)return;if(!e.passes.render)return;const c=e.context,g=t.viewport.width,w=t.viewport.height;if(!Object(h["a"])(this._texture)||g!==this._drawingBufferWidth||w!==this._drawingBufferHeight||this._glowFactorDirty||a!==this._useHdr){this._texture=this._texture&&this._texture.destroy(),this._drawingBufferWidth=g,this._drawingBufferHeight=w,this._glowFactorDirty=!1,this._useHdr=a;let e=Math.max(g,w);e=Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))-2),e=Math.max(1,e);const t=a?c.halfFloatingPointTexture?x["a"].HALF_FLOAT:x["a"].FLOAT:x["a"].UNSIGNED_BYTE;this._texture=new S["a"]({context:c,width:e,height:e,pixelFormat:f["a"].RGBA,pixelDatatype:t}),this._glowLengthTS=5*this._glowFactor,this._radiusTS=1/(1+2*this._glowLengthTS)*.5;const i=this,o={u_radiusTS:function(){return i._radiusTS}};this._commands.computeCommand=new _["a"]({fragmentShaderSource:O["a"],outputTexture:this._texture,uniformMap:o,persists:!1,owner:this,postExecute:function(){i._commands.computeCommand=void 0}})}const R=this._drawCommand;if(!Object(h["a"])(R.vertexArray)){const e={direction:0},t=new Uint8Array(8);t[0]=0,t[1]=0,t[2]=255,t[3]=0,t[4]=255,t[5]=255,t[6]=0,t[7]=255;const a=m["a"].createVertexBuffer({context:c,typedArray:t,usage:T["a"].STATIC_DRAW}),i=[{index:e.direction,vertexBuffer:a,componentsPerAttribute:2,normalize:!0,componentDatatype:n["a"].UNSIGNED_BYTE}],o=m["a"].createIndexBuffer({context:c,typedArray:new Uint16Array([0,1,2,0,2,3]),usage:T["a"].STATIC_DRAW,indexDatatype:u["a"].UNSIGNED_SHORT});R.vertexArray=new y["a"]({context:c,attributes:i,indexBuffer:o}),R.shaderProgram=b["a"].fromCache({context:c,vertexShaderSource:M["a"],fragmentShaderSource:E["a"],attributeLocations:e}),R.renderState=p["a"].fromCache({blending:A["a"].ALPHA_BLEND}),R.uniformMap=this._uniformMap}const H=c.uniformState.sunPositionWC,F=c.uniformState.sunPositionColumbusView,W=this._boundingVolume,j=this._boundingVolume2D;r["a"].clone(H,W.center),j.center.x=F.z,j.center.y=F.x,j.center.z=F.y,W.radius=d["a"].SOLAR_RADIUS+d["a"].SOLAR_RADIUS*this._glowLengthTS,j.radius=W.radius,s===N["a"].SCENE3D?i["a"].clone(W,R.boundingVolume):s===N["a"].COLUMBUS_VIEW&&i["a"].clone(j,R.boundingVolume);const k=C["a"].computeActualWgs84Position(e,H,P),D=r["a"].magnitude(r["a"].subtract(k,e.camera.position,P)),U=c.uniformState.projection,z=L;z.x=0,z.y=0,z.z=-D,z.w=1;const B=l["a"].multiplyByVector(U,z,P),V=C["a"].clipToGLWindowCoordinates(t.viewport,B,v);z.x=d["a"].SOLAR_RADIUS;const G=l["a"].multiplyByVector(U,z,P),K=C["a"].clipToGLWindowCoordinates(t.viewport,G,I);return this._size=o["a"].magnitude(o["a"].subtract(K,V,P)),this._size=2*this._size*(1+2*this._glowLengthTS),this._size=Math.ceil(this._size),this._commands},R.prototype.isDestroyed=function(){return!1},R.prototype.destroy=function(){const e=this._drawCommand;return e.vertexArray=e.vertexArray&&e.vertexArray.destroy(),e.shaderProgram=e.shaderProgram&&e.shaderProgram.destroy(),this._texture=this._texture&&this._texture.destroy(),Object(c["a"])(this)},t["a"]=R},cdd6:function(e,t,a){"use strict";var i=a("77af"),o=a("670c"),r=a("a561"),s=a("2f63"),n=a("7d62"),h=a("93da"),c=a("52f0"),u=a("f806"),d=a("1627"),l=a("34e1"),f=a("ae18"),g=a("3720"),m=a("9249"),T=a("f724"),_=a("0d09"),w=a("18a0"),x=a("7fe1");function p(){this._sceneFramebuffer=new x["a"];const e=.125,t=new Array(6);t[0]=new m["a"]({fragmentShader:g["a"],textureScale:e,forcePowerOfTwo:!0,sampleMode:_["a"].LINEAR});const a=t[1]=new m["a"]({fragmentShader:l["a"],uniforms:{avgLuminance:.5,threshold:.25,offset:.1},textureScale:e,forcePowerOfTwo:!0}),i=this;this._delta=1,this._sigma=2,this._blurStep=new o["a"],t[2]=new m["a"]({fragmentShader:f["a"],uniforms:{step:function(){return i._blurStep.x=i._blurStep.y=1/a.outputTexture.width,i._blurStep},delta:function(){return i._delta},sigma:function(){return i._sigma},direction:0},textureScale:e,forcePowerOfTwo:!0}),t[3]=new m["a"]({fragmentShader:f["a"],uniforms:{step:function(){return i._blurStep.x=i._blurStep.y=1/a.outputTexture.width,i._blurStep},delta:function(){return i._delta},sigma:function(){return i._sigma},direction:1},textureScale:e,forcePowerOfTwo:!0}),t[4]=new m["a"]({fragmentShader:g["a"],sampleMode:_["a"].LINEAR}),this._uCenter=new o["a"],this._uRadius=void 0,t[5]=new m["a"]({fragmentShader:d["a"],uniforms:{center:function(){return i._uCenter},radius:function(){return i._uRadius},colorTexture2:function(){return i._sceneFramebuffer.framebuffer.getColorTexture(0)}}}),this._stages=new T["a"]({stages:t});const r=new w["a"](this),s=t.length;for(let o=0;o<s;++o)t[o]._textureCache=r;this._textureCache=r,this.length=t.length}p.prototype.get=function(e){return this._stages.get(e)},p.prototype.getStageByName=function(e){const t=this._stages.length;for(let a=0;a<t;++a){const t=this._stages.get(a);if(t.name===e)return t}};const b=new r["a"],S=new o["a"],y=new o["a"],E=new c["a"];function O(e,t,a){const r=t.uniformState,s=r.sunPositionWC,n=r.view,d=r.viewProjection,l=r.projection;let f=c["a"].computeViewportTransformation(a,0,1,E);const g=c["a"].multiplyByPoint(n,s,b);let m=u["a"].pointToGLWindowCoordinates(d,f,s,S);g.x+=h["a"].SOLAR_RADIUS;const T=u["a"].pointToGLWindowCoordinates(l,f,g,g),_=30*o["a"].magnitude(o["a"].subtract(T,m,T))*2,w=y;w.x=_,w.y=_,e._uCenter=o["a"].clone(m,e._uCenter),e._uRadius=.15*Math.max(w.x,w.y);const x=t.drawingBufferWidth,p=t.drawingBufferHeight,O=e._stages,M=O.get(0),A=M.outputTexture.width,N=M.outputTexture.height,C=new i["a"];C.width=A,C.height=N,f=c["a"].computeViewportTransformation(C,0,1,E),m=u["a"].pointToGLWindowCoordinates(d,f,s,S),w.x*=A/x,w.y*=N/p;const R=M.scissorRectangle;R.x=Math.max(m.x-.5*w.x,0),R.y=Math.max(m.y-.5*w.y,0),R.width=Math.min(w.x,x),R.height=Math.min(w.y,p);for(let o=1;o<4;++o)i["a"].clone(R,O.get(o).scissorRectangle)}p.prototype.clear=function(e,t,a){this._sceneFramebuffer.clear(e,t,a),this._textureCache.clear(e)},p.prototype.update=function(e){const t=e.context,a=e.viewport,i=this._sceneFramebuffer;i.update(t,a);const o=i.framebuffer;return this._textureCache.update(t),this._stages.update(t,!1),O(this,t,a),o},p.prototype.execute=function(e){const t=this._sceneFramebuffer.framebuffer.getColorTexture(0),a=this._stages,i=a.length;a.get(0).execute(e,t);for(let o=1;o<i;++o)a.get(o).execute(e,a.get(o-1).outputTexture)},p.prototype.copy=function(e,t){if(!Object(s["a"])(this._copyColorCommand)){const t=this;this._copyColorCommand=e.createViewportQuadCommand(g["a"],{uniformMap:{colorTexture:function(){return t._stages.get(t._stages.length-1).outputTexture}},owner:this})}this._copyColorCommand.framebuffer=t,this._copyColorCommand.execute(e)},p.prototype.isDestroyed=function(){return!1},p.prototype.destroy=function(){return this._textureCache.destroy(),this._stages.destroy(),Object(n["a"])(this)},t["a"]=p},e065:function(e,t,a){"use strict";var i=a("bd8d"),o=a("535a");function r(e){e=Object(o["a"])(e,o["a"].EMPTY_OBJECT),this.color=i["a"].clone(Object(o["a"])(e.color,i["a"].WHITE)),this.intensity=Object(o["a"])(e.intensity,2)}t["a"]=r},fdb7:function(e,t,a){"use strict";var i=a("535a"),o=a("2f63");function r(e){e=Object(i["a"])(e,i["a"].EMPTY_OBJECT),this._schema=e.schema;const t=e.propertyTables;this._propertyTableCount=Object(o["a"])(t)?t.length:0,this._propertyTables=t,this._propertyTextures=e.propertyTextures,this._propertyAttributes=e.propertyAttributes,this._statistics=e.statistics,this._extras=e.extras,this._extensions=e.extensions}Object.defineProperties(r.prototype,{schema:{get:function(){return this._schema}},statistics:{get:function(){return this._statistics}},extras:{get:function(){return this._extras}},extensions:{get:function(){return this._extensions}},propertyTableCount:{get:function(){return this._propertyTableCount}},propertyTables:{get:function(){return this._propertyTables}},propertyTextures:{get:function(){return this._propertyTextures}},propertyAttributes:{get:function(){return this._propertyAttributes}},propertyTablesByteLength:{get:function(){if(!Object(o["a"])(this._propertyTables))return 0;let e=0;const t=this._propertyTables.length;for(let a=0;a<t;a++)e+=this._propertyTables[a].byteLength;return e}}}),r.prototype.getPropertyTable=function(e){return this._propertyTables[e]},r.prototype.getPropertyTexture=function(e){return this._propertyTextures[e]},r.prototype.getPropertyAttribute=function(e){return this._propertyAttributes[e]},t["a"]=r}}]);