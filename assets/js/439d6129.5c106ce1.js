"use strict";(self.webpackChunkkuberlogic_com=self.webpackChunkkuberlogic_com||[]).push([[1735],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),g=i,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||r;return t?a.createElement(d,o(o({ref:n},l),{},{components:t})):a.createElement(d,o({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const r={id:"application-access-management",title:"Providing application access",tags:["ingress","application","configuration","docker-compose"]},o=void 0,c={unversionedId:"configuring/application-access-management",id:"configuring/application-access-management",title:"Providing application access",description:"Applications, provisioned by KuberLogic are exposed via Kubernetes Ingress objects. That means that only HTTP based applications are supported at the moment.",source:"@site/docs/configuring/application-access-management.md",sourceDirName:"configuring",slug:"/configuring/application-access-management",permalink:"/docs/configuring/application-access-management",draft:!1,editUrl:"https://github.com/kuberlogic/kuberlogic.com/blob/master/docs/configuring/application-access-management.md",tags:[{label:"ingress",permalink:"/docs/tags/ingress"},{label:"application",permalink:"/docs/tags/application"},{label:"configuration",permalink:"/docs/tags/configuration"},{label:"docker-compose",permalink:"/docs/tags/docker-compose"}],version:"current",frontMatter:{id:"application-access-management",title:"Providing application access",tags:["ingress","application","configuration","docker-compose"]},sidebar:"mySidebar",previous:{title:"Configuring managed application instances",permalink:"/docs/configuring/application-configuration"},next:{title:"Updating application instances",permalink:"/docs/configuring/application-instances-update"}},p={},s=[],l={toc:s};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Applications, provisioned by KuberLogic are exposed via Kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingress")," objects. That means that only HTTP based applications are supported at the moment."),(0,i.kt)("h1",{id:"https"},"HTTPS"),(0,i.kt)("p",null,"Application can be configured to be accessible by HTTPS protocol. Set ",(0,i.kt)("inlineCode",{parentName:"p"},"--tls_enabled")," CLI flag when creating the application (or ",(0,i.kt)("inlineCode",{parentName:"p"},"tlsEnabled")," field when using REST API) to enable HTTPS access.\nKuberLogic will use the certificate/key pair that was provided during the installation process to configure secure access."),(0,i.kt)("h1",{id:"accessing-multi-container-application"},"Accessing multi-container application"),(0,i.kt)("p",null,"By default, only one ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," service can be exposed.\n",(0,i.kt)("inlineCode",{parentName:"p"},"x-kuberlogic-access-http-path")," extension allows you to expose more than one service by specifying HTTP path prefixes. Default path prefix is ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Duplicates are not allowed and will trigger a service provisioning error.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Will work:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\nservices:\n  - name: api # This will be exposed at `/api`\n    x-kuberlogic-access-http-path: /api\n    image: my-image\n    command:\n      - "./run.sh"\n    ports:\n      - "8080:8080"\n  - name: web # This will be exposed on `/`\n    image: web\n    ports:\n      - "8080:8080"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Will not work:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\nservices:\n  - name: api # This will be exposed at `/api`\n    x-kuberlogic-access-http-path: /api\n    image: my-image\n    command:\n      - "./run.sh"\n    ports:\n      - "8080:8080"\n  - name: web # Duplicate HTTP path prefix!\n    x-kuberlogic-access-http-path: /api\n    image: web\n    ports:\n      - "8080:8080"\n')))}m.isMDXComponent=!0}}]);