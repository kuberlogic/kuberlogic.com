"use strict";(self.webpackChunkkuberlogic_com=self.webpackChunkkuberlogic_com||[]).push([[9219],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,f=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return t?i.createElement(f,r(r({ref:n},s),{},{components:t})):i.createElement(f,r({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=t(7462),a=(t(7294),t(3905));const o={id:"application-configuration",title:"Configuring managed application instances",tags:["configuration","application","configuration"]},r=void 0,c={unversionedId:"configuring/application-configuration",id:"configuring/application-configuration",title:"Configuring managed application instances",description:"KuberLogic runs application in Kubernetes pods.",source:"@site/docs/configuring/application-configuration.md",sourceDirName:"configuring",slug:"/configuring/application-configuration",permalink:"/docs/configuring/application-configuration",draft:!1,editUrl:"https://github.com/kuberlogic/kuberlogic.com/blob/master/docs/configuring/application-configuration.md",tags:[{label:"configuration",permalink:"/docs/tags/configuration"},{label:"application",permalink:"/docs/tags/application"}],version:"current",frontMatter:{id:"application-configuration",title:"Configuring managed application instances",tags:["configuration","application","configuration"]},sidebar:"mySidebar",previous:{title:"Preparing your application",permalink:"/docs/configuring/docker-compose"},next:{title:"Providing application access",permalink:"/docs/configuring/application-access-management"}},l={},p=[],s={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KuberLogic runs application in Kubernetes pods.\nIt expects that an application container image will be self-contained and will have everything that the application requires."),(0,a.kt)("p",null,"Still, applications need to be configured and there are a number of ways to do so.\nAll examples show how to configure an application via ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"."),(0,a.kt)("h1",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"Standard de-facto in a Kubernetes world. Application container will have the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"TOKEN")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  - name: my-service\n    image: my-image\n    environment:\n      - TOKEN=test\n')),(0,a.kt)("p",null,"You can also use templating functions that are provided by Kuberlogic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  - name: my-service\n    image: my-image\n    environment:\n      - BASE_URL={{ Endpoint "localhost" }}\n')),(0,a.kt)("p",null,"To learn more about templating, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuring/docker-compose"},"this page"),"."),(0,a.kt)("h1",{id:"providing-secret-configuration-parameters"},"Providing secret configuration parameters"),(0,a.kt)("p",null,"An example above shows how to configure a static environment variable.\nThis method has one downside: all your application instances will have environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"TOKEN")," set to the same value."),(0,a.kt)("p",null,"This can be changed, when using combining templating with ",(0,a.kt)("inlineCode",{parentName:"p"},"x-kuberlogic-secrets")," extension."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nx-kuberlogic-secrets: # this extension can only be set at the root of docker-compose\n  token: "{{ GenerateKey 16 }}"\n\nservices:\n  - name: my-service\n    image: my-image\n    environment:\n      - TOKEN={{ Secrets "token" }} # we reference a secret `token` defined in `x-kuberlogic-secrets` extension.\n')),(0,a.kt)("p",null,"In this example all application instances will have a ",(0,a.kt)("inlineCode",{parentName:"p"},"TOKEN")," variable set to the random 16 characters string."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Secrets defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"x-kuberlogic-secrets")," are static during the application instance lifetime.\nThey will not be updated if already set.")),(0,a.kt)("h1",{id:"providing-configuration-files"},"Providing configuration files"),(0,a.kt)("p",null,"Some applications also require config files to be available locally.\nConfiguration files content can be set with ",(0,a.kt)("inlineCode",{parentName:"p"},"x-kuberlogic-file-configs")," extension on the service level."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nx-kuberlogic-secrets:\n  key: {{ GenerateKey 16 }}\n\nservices:\n  - name: web\n    image: my-image\n    x-kuberlogic-file-confis:\n      /etc/app.cfg: |\n        app=web\n        api-key={{ Secret "key" }}\n  - name: api\n    image: my-api\n    x-kuberlogic-file-configs:\n      /etc/app.cfg: |\n        app=api\n        api-key={{ Secret "key" }}\n')),(0,a.kt)("p",null,"In the example above, both container will have the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/web.cfg")," available locally, but the content will be specific for each service."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also you ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," templating when providing configuration files content.")))}u.isMDXComponent=!0}}]);