"use strict";(self.webpackChunkkuberlogic_com=self.webpackChunkkuberlogic_com||[]).push([[5509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),f=l,m=b["".concat(i,".").concat(f)]||b[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const o={},a="Uninstalling KuberLogic",c={unversionedId:"uninstall/README",id:"uninstall/README",title:"Uninstalling KuberLogic",description:"1. Uninstall KuberLogic",source:"@site/docs/uninstall/README.md",sourceDirName:"uninstall",slug:"/uninstall/",permalink:"/docs/uninstall/",draft:!1,editUrl:"https://github.com/kuberlogic/kuberlogic.com/blob/master/docs/uninstall/README.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Updating KuberLogic",permalink:"/docs/update/"}},i={},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"uninstalling-kuberlogic"},"Uninstalling KuberLogic"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Uninstall KuberLogic")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns kuberlogic\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Cleanup all KuberLogic resources")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# delete all KuberLogic resources\nkubectl delete kuberlogic --all\n# check and delete any PVs if there any left\nkubectl get pv\nkubectl delete pv <NAME>\n")))}p.isMDXComponent=!0}}]);