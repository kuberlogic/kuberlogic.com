"use strict";(self.webpackChunkkuberlogic_com=self.webpackChunkkuberlogic_com||[]).push([[5509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),f=l,m=b["".concat(i,".").concat(f)]||b[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const o={},a="Uninstalling KuberLogic",c={unversionedId:"uninstall/README",id:"uninstall/README",title:"Uninstalling KuberLogic",description:"1. Uninstall KuberLogic",source:"@site/docs/uninstall/README.md",sourceDirName:"uninstall",slug:"/uninstall/",permalink:"/docs/uninstall/",draft:!1,editUrl:"https://github.com/kuberlogic/docs.kuberlogic.com/docs/uninstall/README.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Backups management with CLI",permalink:"/docs/using/backups_cli"}},i={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"uninstalling-kuberlogic"},"Uninstalling KuberLogic"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Uninstall KuberLogic")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns kuberlogic\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Cleanup all KuberLogic resources")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# delete KuberLogic backups\nkubectl delete klb --all\n# delete KuberLogicservices and restores\nkubectl delete kls,klr --all\n# check and delete any PVs if there any left\nkubectl get pv\nkubectl delete pv <NAME>\n")))}p.isMDXComponent=!0}}]);