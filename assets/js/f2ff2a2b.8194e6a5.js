"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7572],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>g});var a=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=i,g=p["".concat(l,".").concat(u)]||p[u]||h[u]||n;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(58168),i=(r(96540),r(15680));const n={layout:"post",title:"OIDC Login Without Cookies - Sharing the lti_storage_target Between Platform and Tool",id:"poidc-login-lti_storage_target",categories:"Standards",published:"2024-01-05",edited:"2024-01-05",author:"Mark Kauffman"},o=void 0,s={unversionedId:"blackboard/lti/archive/poidc-login-lti_storage_target",id:"blackboard/lti/archive/poidc-login-lti_storage_target",title:"OIDC Login Without Cookies - Sharing the lti_storage_target Between Platform and Tool",description:"Motivation",source:"@site/docs/blackboard/lti/archive/poidc-login-lti_storage_target.md",sourceDirName:"blackboard/lti/archive",slug:"/blackboard/lti/archive/poidc-login-lti_storage_target",permalink:"/docs/blackboard/lti/archive/poidc-login-lti_storage_target",draft:!1,editUrl:"https://github.com/blackboard/anthologydevdocs/tree/main/docs/blackboard/lti/archive/poidc-login-lti_storage_target.md",tags:[],version:"current",frontMatter:{layout:"post",title:"OIDC Login Without Cookies - Sharing the lti_storage_target Between Platform and Tool",id:"poidc-login-lti_storage_target",categories:"Standards",published:"2024-01-05",edited:"2024-01-05",author:"Mark Kauffman"}},l={},c=[{value:"Motivation",id:"motivation",level:3},{value:"Details",id:"details",level:3}],d={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"motivation"},"Motivation"),(0,i.yg)("p",null,"We've seen questions from tool developers about the fact that Learn does not append the lti_storage_target parameter to the redirect URL that the tool has pre-registered with the Learn platform. We don't append that because Learn keeps that redirect URL sacrosanct given that ",(0,i.yg)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/redirect-uri-registration/"},"https://www.oauth.com/oauth2-servers/redirect-uris/redirect-uri-registration/")," indicates it should never be modified from the value given at registration time. You can get the lti_storage_target a couple of ways as shown in ",(0,i.yg)("a",{parentName:"p",href:"https://youtu.be/li1xkqDo1XQ?feature=shared"},"this video"),", one being to use the capabilities request, because Learn supports the optional frame field. The other way that you could get the lti_storage_target as a parameter on your redirect URL is to add that parameter and the value Learn uses: ","<","i_storage_target=lti_storage_frame"),(0,i.yg)("h3",{id:"details"},"Details"),(0,i.yg)("p",null,"In the evolving landscape of Learning Tools Interoperability (LTI) and online learning platforms, LTI 1.3 has emerged as a crucial standard for integrating learning applications with Learning Management Systems (Platforms) like Blackboard Learn and others. The core of LTI 1.3 facilitates seamless single sign-on (SSO) from an LMS into a learning application, but it's faced challenges with the move to block third-party cookies in web browsers for privacy reasons."),(0,i.yg)("p",null,"Third-party cookies, used in the original LTI 1.3 Core and LTI Advantage Deep Linking specifications, are crucial for completing the security handshake required for users to SSO into a learning tool's user interface within an iframe in the LMS. However, as browsers increasingly block these cookies to protect user privacy, this poses a significant hurdle for LTI integrations."),(0,i.yg)("p",null,"In response to these challenges, 1EdTech (formerly IMS Global) has developed new specifications to circumvent the use of third-party cookies during LTI 1.3 Core resource link launches, as well as Deep Linking content picker launches. These include allowing the tool to use JavaScript postMessage for accessing an additional iframe for shared storage between the tool and LMS. This approach maintains high security standards, ensuring that neither LTI Core resource link launches nor Deep Linking content picker launches can be spoofed."),(0,i.yg)("p",null,"An essential aspect of this new specification is that it does not require the inclusion of the lti_storage_target parameter in the tool launch process following the OIDC login. Instead, the specifications offer alternative ways to achieve the necessary functionality without relying on this parameter. For example, the LMS can indicate its support for an additional iframe for shared storage through a capabilities endpoint. This flexibility is particularly crucial for platforms like Learn, which adheres strictly to the guidelines that redirect URIs should not be modified from their registered value, as indicated by OAuth 2.0 standards."),(0,i.yg)("p",null,"These changes represent a significant advancement in addressing the challenges posed by the evolving web privacy landscape, ensuring that LTI integrations can continue to provide seamless and secure user experiences in online learning environments. For developers and institutions, it's essential to stay informed about these updates and consider implementing them to maintain the efficacy and security of their LTI integrations."))}h.isMDXComponent=!0}}]);