(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~a57d3e3a"],{9201:function(e,t,a){"use strict";const i={NONE:0,GEODESIC:1,RHUMB:2};t["a"]=Object.freeze(i)},dd06:function(e,t,a){"use strict";var i=a("cef5"),n=a("7229"),r=a("670c"),o=a("be18"),s=a("bef8"),c=a("535a"),f=a("2f63"),u=a("c52f"),h=a("5d5c"),l=a("eace"),d=a("d4ed");const g=new o["a"],m=new o["a"],w=new s["a"],H=new o["a"],b=new o["a"],_=new i["a"],T=new h["a"],x=[new s["a"],new s["a"],new s["a"],new s["a"]],M=new r["a"],O={};function j(e){s["a"].fromRadians(e.east,e.north,0,x[0]),s["a"].fromRadians(e.west,e.north,0,x[1]),s["a"].fromRadians(e.east,e.south,0,x[2]),s["a"].fromRadians(e.west,e.south,0,x[3]);let t=0,a=0,i=0,n=0;const r=O._terrainHeightsMaxLevel;let o;for(o=0;o<=r;++o){let e=!1;for(let t=0;t<4;++t){const a=x[t];if(T.positionToTileXY(a,o,M),0===t)i=M.x,n=M.y;else if(i!==M.x||n!==M.y){e=!0;break}}if(e)break;t=i,a=n}if(0!==o)return{x:t,y:a,level:o>r?r:o-1}}O.initialize=function(){let e=O._initPromise;return Object(f["a"])(e)||(e=d["a"].fetchJson(Object(n["a"])("Assets/approximateTerrainHeights.json")).then((function(e){O._terrainHeights=e})),O._initPromise=e),e},O.getMinimumMaximumHeights=function(e,t){t=Object(c["a"])(t,u["a"].WGS84);const a=j(e);let i=O._defaultMinTerrainHeight,n=O._defaultMaxTerrainHeight;if(Object(f["a"])(a)){const r=`${a.level}-${a.x}-${a.y}`,s=O._terrainHeights[r];Object(f["a"])(s)&&(i=s[0],n=s[1]),t.cartographicToCartesian(l["a"].northeast(e,w),g),t.cartographicToCartesian(l["a"].southwest(e,w),m),o["a"].midpoint(m,g,H);const c=t.scaleToGeodeticSurface(H,b);if(Object(f["a"])(c)){const e=o["a"].distance(H,c);i=Math.min(i,-e)}else i=O._defaultMinTerrainHeight}return i=Math.max(O._defaultMinTerrainHeight,i),{minimumTerrainHeight:i,maximumTerrainHeight:n}},O.getBoundingSphere=function(e,t){t=Object(c["a"])(t,u["a"].WGS84);const a=j(e);let n=O._defaultMaxTerrainHeight;if(Object(f["a"])(a)){const e=`${a.level}-${a.x}-${a.y}`,t=O._terrainHeights[e];Object(f["a"])(t)&&(n=t[1])}const r=i["a"].fromRectangle3D(e,t,0);return i["a"].fromRectangle3D(e,t,n,_),i["a"].union(r,_,r)},O._terrainHeightsMaxLevel=6,O._defaultMaxTerrainHeight=9e3,O._defaultMinTerrainHeight=-1e5,O._terrainHeights=void 0,O._initPromise=void 0,Object.defineProperties(O,{initialized:{get:function(){return Object(f["a"])(O._terrainHeights)}}}),t["a"]=O}}]);