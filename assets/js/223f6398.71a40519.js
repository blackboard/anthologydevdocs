"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[434],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>b});var r=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),y=a,b=u["".concat(l,".").concat(y)]||u[y]||d[y]||n;return o?r.createElement(b,i(i({ref:t},p),{},{components:o})):r.createElement(b,i({ref:t},p))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},61455:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(58168),a=(o(96540),o(15680));const n={layout:"post",title:"Cookies and Browsers",date:"2020-10-15 12:00",category:"blog",post_id:"20201015-cookiesandbrowsers",author:"Eric Preston",tags:["lti","learn","api"],toc:!1,summary:"Most people like cookies. Internet browsers used to like cookies, but a lot has changed in the last few years."},i="Cookies and Browsers",s={permalink:"/blog/2020/10/15/2020/Cookies-and-Browsers",source:"@site/blog/2020/2020-10-15-Cookies-and-Browsers.md",title:"Cookies and Browsers",description:"Most people like cookies. Internet browsers used to like cookies, but a lot has changed in the last few years.",date:"2020-10-15T12:00:00.000Z",formattedDate:"October 15, 2020",tags:[{label:"lti",permalink:"/blog/tags/lti"},{label:"learn",permalink:"/blog/tags/learn"},{label:"api",permalink:"/blog/tags/api"}],readingTime:1.555,hasTruncateMarker:!1,authors:[{name:"Eric Preston"}],frontMatter:{layout:"post",title:"Cookies and Browsers",date:"2020-10-15 12:00",category:"blog",post_id:"20201015-cookiesandbrowsers",author:"Eric Preston",tags:["lti","learn","api"],toc:!1,summary:"Most people like cookies. Internet browsers used to like cookies, but a lot has changed in the last few years."},prevItem:{title:"SOAP EOL Explained",permalink:"/blog/2020/12/16/2020/SOAP-EOL-Explained"},nextItem:{title:"Student Id Template Variable",permalink:"/blog/2020/10/07/2020/New-Student-Id-Template-Variable"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.yg)(u,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Most people like cookies. Internet browsers used to like cookies, but a lot has changed in the last few years."),(0,a.yg)("p",null,"We are seeing a lot of applications stop working in some browsers because cookies are not being shared, and this post hopes to help explain why that is happening and what can be done about it."),(0,a.yg)("p",null,"A web application may set a cookie to track a user\u2019s session. This is very common, however if your web application is going to be hosted in an iframe, then there\u2019s a good chance your cookie won\u2019t be sent back to you. This is because browsers are clamping down on sending \u201c3rd-party\u201d cookies back to applications hosted in an iframe. Note that a 3rd party is a site that is hosted on a domain different than the 1st party, or your web application. The reason is because these cookies can be used for tracking your internet and browsing activity. Safari has disallowed this for years as a user privacy measure."),(0,a.yg)("p",null,"Another case where cookies aren\u2019t being sent back is during a form POST back to your application. If you set a cookie, then launch to a 3rd party application, if that application does a form POST back to you, the browser will likely not send your cookie back because it is trying to help prevent cross-site request forgery attacks."),(0,a.yg)("p",null,"Rather than detail all the scenarios and work arounds here I link to two web pages that are immensely helpful in explaining the situation and some possible workarounds."),(0,a.yg)("p",null,"The TL;DR is if you must set a cookie in your web application, be careful how you configure that cookie\u2019s properties, and understand that at least in Safari, your cookies may not get passed back to you. The other browser makers are going to get as restrictive as Safari soon."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://web.dev/samesite-cookies-explained/"},"Samesite Cookies Explained")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://web.dev/samesite-cookie-recipes/"},"Samesite Cookie Recipes"))))}d.isMDXComponent=!0}}]);