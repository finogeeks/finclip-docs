"use strict";(self.webpackChunkfinclip_ops_docs=self.webpackChunkfinclip_ops_docs||[]).push([[927],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(r),d=i,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1527:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c=["components"],a={id:"finclip-ops-architecture",title:"\u8fd0\u7ef4\u67b6\u6784"},p="\u67b6\u6784\u62d3\u6251",l={unversionedId:"finclip-ops-architecture",id:"finclip-ops-architecture",isDocsHomePage:!1,title:"\u8fd0\u7ef4\u67b6\u6784",description:"FinClip \u540e\u7aef\u670d\u52a1\u91c7\u7528 Golang \u8bed\u8a00\u7f16\u5199\uff0c\u7cfb\u7edf\u67b6\u6784\u91c7\u7528\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u6bcf\u4e2a\u670d\u52a1\u7ecf\u8fc7\u7f16\u8bd1\u4e4b\u540e\u4f1a\u88ab\u6253\u5305\u6210\u5bb9\u5668\uff0c\u6211 \u4eec\u91c7\u7528\u4e1a\u754c\u4e3b\u6d41\u7684\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\u8fdb\u884c\u670d\u52a1\u7f16\u6392\u3002\u6b64\u5916\uff0cFinClip \u8fd8\u4f9d\u8d56\u90e8\u5206\u6210\u719f\u7684\u5f00\u6e90\u7ec4\u4ef6\u4f5c\u4e3a\u57fa\u7840\u8bbe\u65bd\uff0c\u4ee5\u5b9e\u73b0 \u4e1a\u52a1\u7cfb\u7edf\u4e2d\u7684\u6570\u636e\u5b58\u50a8\u3001\u7f13\u5b58\u3001\u6d88\u606f\u961f\u5217\u3001\u670d\u52a1\u6cbb\u7406\u7b49\u57fa\u7840\u529f\u80fd\u3002",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/finclip-ops-architecture",permalink:"/docs/finclip-ops-architecture",tags:[],version:"current",frontMatter:{id:"finclip-ops-architecture",title:"\u8fd0\u7ef4\u67b6\u6784"},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u8981\u6c42",permalink:"/docs/requirements"},next:{title:"\u4e1a\u52a1\u7ec4\u4ef6",permalink:"/docs/servicelist"}},u=[{value:"\u67b6\u6784\u62d3\u6251\uff1a",id:"\u67b6\u6784\u62d3\u6251\uff1a",children:[]}],f={toc:u};function s(e){var t=e.components,a=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u67b6\u6784\u62d3\u6251"},"\u67b6\u6784\u62d3\u6251"),(0,o.kt)("p",null,"FinClip \u540e\u7aef\u670d\u52a1\u91c7\u7528 Golang \u8bed\u8a00\u7f16\u5199\uff0c\u7cfb\u7edf\u67b6\u6784\u91c7\u7528\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u6bcf\u4e2a\u670d\u52a1\u7ecf\u8fc7\u7f16\u8bd1\u4e4b\u540e\u4f1a\u88ab\u6253\u5305\u6210\u5bb9\u5668\uff0c\u6211 \u4eec\u91c7\u7528\u4e1a\u754c\u4e3b\u6d41\u7684\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\u8fdb\u884c\u670d\u52a1\u7f16\u6392\u3002\u6b64\u5916\uff0cFinClip \u8fd8\u4f9d\u8d56\u90e8\u5206\u6210\u719f\u7684\u5f00\u6e90\u7ec4\u4ef6\u4f5c\u4e3a\u57fa\u7840\u8bbe\u65bd\uff0c\u4ee5\u5b9e\u73b0 \u4e1a\u52a1\u7cfb\u7edf\u4e2d\u7684\u6570\u636e\u5b58\u50a8\u3001\u7f13\u5b58\u3001\u6d88\u606f\u961f\u5217\u3001\u670d\u52a1\u6cbb\u7406\u7b49\u57fa\u7840\u529f\u80fd\u3002"),(0,o.kt)("h3",{id:"\u67b6\u6784\u62d3\u6251\uff1a"},"\u67b6\u6784\u62d3\u6251\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arch",src:r(6279).Z})))}s.isMDXComponent=!0},6279:function(e,t,r){t.Z=r.p+"assets/images/finclip-ops-arch-4db2abf9fcbdbb892f544e7654051775.png"}}]);