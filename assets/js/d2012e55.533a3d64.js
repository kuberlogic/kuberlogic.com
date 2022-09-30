"use strict";(self.webpackChunkkuberlogic_com=self.webpackChunkkuberlogic_com||[]).push([[6158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={id:"backups",title:"Enabling backup/restore capability",tags:["backup","restore","configuration"]},i=void 0,l={unversionedId:"configuring/backups",id:"configuring/backups",title:"Enabling backup/restore capability",description:"Backups will only work if you use CSI based volumes. Backups will not work for hostPath volumes.",source:"@site/docs/configuring/backups.md",sourceDirName:"configuring",slug:"/configuring/backups",permalink:"/docs/configuring/backups",draft:!1,editUrl:"https://github.com/kuberlogic/kuberlogic.com/blob/master/docs/configuring/backups.md",tags:[{label:"backup",permalink:"/docs/tags/backup"},{label:"restore",permalink:"/docs/tags/restore"},{label:"configuration",permalink:"/docs/tags/configuration"}],version:"current",frontMatter:{id:"backups",title:"Enabling backup/restore capability",tags:["backup","restore","configuration"]},sidebar:"mySidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started/"},next:{title:"Preparing your application",permalink:"/docs/configuring/docker-compose"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Backups will only work if you use CSI based volumes. Backups will not work for ",(0,o.kt)("inlineCode",{parentName:"p"},"hostPath")," volumes.")),(0,o.kt)("p",null,"Backups and restores feature is provided via ",(0,o.kt)("a",{parentName:"p",href:"https://velero.io"},"Velero")," integration. Both file-based and volume snapshot based backups are supported.\nBackups and restores are disabled by default. Follow these steps to configure environment and enable backup feature:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get supported Velero release (follow the ",(0,o.kt)("a",{parentName:"p",href:"https://velero.io/docs/v1.9/basic-install/"},"steps")," from the official Velero website)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Velero for your ",(0,o.kt)("a",{parentName:"p",href:"https://velero.io/docs/v1.9/supported-providers/"},"infrastructure provider"),". Make sure to include ",(0,o.kt)("inlineCode",{parentName:"p"},"--use-restic")," to enable file based backups."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're evaluating KuberLogic and do not want to use cloud resources, you can install Velero with local S3 compatible storage: ",(0,o.kt)("a",{parentName:"p",href:"https://velero.io/docs/main/contributions/minio/"},"see here"))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Verify Velero status.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"velero version\n# Example output\n#\n# Client:\n#         Version: v1.9.0\n#         Git commit: -\n# Server:\n#         Version: v1.9.0\nvelero get backup-locations\n# Example output\n# NAME      PROVIDER   BUCKET/PREFIX     PHASE       LAST VALIDATED                   ACCESS MODE   DEFAULT\n# default   aws        kl-demo-backups   Available   2022-07-11 13:54:24 +0300 EEST   ReadWrite     true\n")))}u.isMDXComponent=!0}}]);