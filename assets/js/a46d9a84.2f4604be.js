"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[2116],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(r),g=n,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||o;return r?a.createElement(m,l(l({ref:t},s),{},{components:r})):a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},48454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(58168),n=(r(96540),r(15680));const o={title:"Integrating with Blackboard Learn",id:"welcome"},l=void 0,i={unversionedId:"blackboard/welcome",id:"blackboard/welcome",title:"Integrating with Blackboard Learn",description:"Welcome to the world of integrations!",source:"@site/docs/blackboard/welcome.md",sourceDirName:"blackboard",slug:"/blackboard/welcome",permalink:"/docs/blackboard/welcome",draft:!1,editUrl:"https://github.com/blackboard/anthologydevdocs/tree/main/docs/blackboard/welcome.md",tags:[],version:"current",frontMatter:{title:"Integrating with Blackboard Learn",id:"welcome"},sidebar:"documentationSidebar",previous:{title:"FAQ",permalink:"/docs/developer-portal/faq"},next:{title:"About Anthology REST APIs",permalink:"/docs/blackboard/rest-apis/start-here"}},c={},d=[{value:"Welcome to the world of integrations!",id:"welcome-to-the-world-of-integrations",level:2},{value:"The available options",id:"the-available-options",level:2},{value:"Ready to start?",id:"ready-to-start",level:2}],s={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"welcome-to-the-world-of-integrations"},"Welcome to the world of integrations!"),(0,n.yg)("p",null,"Blackboard Learn has different means of interacting with grading, users, courses and enrollments, each one will provide different levels of access to information. Blackboard Learn incorporates most of the standards for education, mostly the ones provided by 1EdTech"),(0,n.yg)("h2",{id:"the-available-options"},"The available options"),(0,n.yg)("p",null,"As indicated, Blackboard Learn does provide different frameworks to integrate, here are the list of options available:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Use case"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"REST API"),(0,n.yg)("td",{parentName:"tr",align:null},"Access needed for course content area, items, grades, enrollments, course configuration, etc.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LTI Advantage"),(0,n.yg)("td",{parentName:"tr",align:null},"Provides access to external tools and allows creation of course items, graded columns and grades")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Student Information System (SIS)"),(0,n.yg)("td",{parentName:"tr",align:null},"Provides a framework to create users, courses and enrollments in bulk")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Ultra Extension Framework"),(0,n.yg)("td",{parentName:"tr",align:null},"Framework created by Anthology to allow third-party tools to interact with the Ultra Course Navigation to render additional data")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Proctoring"),(0,n.yg)("td",{parentName:"tr",align:null},"Leverages the Ultra Extension Framework to interconnect external Proctoring services to Blackboard Learn tests")))),(0,n.yg)("h2",{id:"ready-to-start"},"Ready to start?"),(0,n.yg)("p",null,"Under this section you will have access to documentation regarding the most used and popular integrations methods, feel free to peruse around and follow the docs for the one you feel matches your use case."))}u.isMDXComponent=!0}}]);