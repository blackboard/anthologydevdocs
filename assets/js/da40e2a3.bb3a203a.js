"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7070],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3389:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(4137));const o={title:"Basic Authentication with REST",id:"basic-authentication",categories:"Learn REST",sidebar_position:2,author:"Scott Hurrey",published:"",edited:""},i=void 0,l={unversionedId:"rest-apis/learn/getting-started/basic-authentication",id:"rest-apis/learn/getting-started/basic-authentication",title:"Basic Authentication with REST",description:"Overview",source:"@site/docs/rest-apis/learn/getting-started/basic-authentication.md",sourceDirName:"rest-apis/learn/getting-started",slug:"/rest-apis/learn/getting-started/basic-authentication",permalink:"/docs/rest-apis/learn/getting-started/basic-authentication",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Basic Authentication with REST",id:"basic-authentication",categories:"Learn REST",sidebar_position:2,author:"Scott Hurrey",published:"",edited:""},sidebar:"documentationSidebar",previous:{title:"First Steps with Learn REST API",permalink:"/docs/rest-apis/learn/getting-started/first-steps"},next:{title:"Anthology's REST API Framework",permalink:"/docs/rest-apis/learn/getting-started/framework"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"Before You Start",id:"before-you-start",level:3},{value:"To Get a Token Using Basic OAuth 2.0",id:"to-get-a-token-using-basic-oauth-20",level:3},{value:"To Make a REST Call with the Basic OAuth 2.0 Token",id:"to-make-a-rest-call-with-the-basic-oauth-20-token",level:3},{value:"Example: Using cURL to Get a Token and Make a REST Call",id:"example-using-curl-to-get-a-token-and-make-a-rest-call",level:3},{value:"Implementation notes:",id:"implementation-notes",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("VersioningTracker"),d=c("AuthorBox"),h={toc:p},m="wrapper";function k(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u,{frontMatter:o,mdxType:"VersioningTracker"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Authentication for REST Integrations follows the ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749"},"OAuth 2.0 RFC Standard"),". Each developer has a unique key and secret associated with each application they create. The developer makes an HTTP Post directly to the REST-enabled Learn server requesting an OAuth access token. The Learn instance forwards the request to Anthology's Developer Portal, adding its own siteId to the request so that the portal can determine whether the application is registered with the server. The Portal returns an authorization token that grants the application access to the Learn REST API for one hour. The developer uses this token in subsequent REST calls until the token expires. This workflow is illustrated in the following diagram:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OAuth Workflow Diagram",src:a(5152).Z,width:"559",height:"306"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WARNING: Never share or expose an application's key/secret pair. These are used for requesting OAuth tokens, which enable the holder to issue REST requests. Exposing an application key/secret pair or token is a serious security risk. If you think you have exposed a key/secret pair you may request a new pair for the application using the Developer Portal My Applications management page.")),(0,r.kt)("p",null,"REST calls are subject to quotas and limits. For more information, see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-portal/production-groups-rest-api-and-site-registration-limits"},"Developer Groups, Site Quotas, and Rate Limit"),"."),(0,r.kt)("h3",{id:"before-you-start"},"Before You Start"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must have a developer account at ",(0,r.kt)("a",{parentName:"li",href:"https://developer.anthology.com/"},"developer.anthology.com"),"."),(0,r.kt)("li",{parentName:"ul"},"Your application must be registered at ",(0,r.kt)("a",{parentName:"li",href:"https://developer.anthology.com/"},"developer.anthology.com"),"."),(0,r.kt)("li",{parentName:"ul"},"The application ID you receive when registering at developer.anthology.com must then be used to install your integgration on your Learn instance. Installing your application on a Learn instance provides the application key:secret pair access to the Learn instance.")),(0,r.kt)("h3",{id:"to-get-a-token-using-basic-oauth-20"},"To Get a Token Using Basic OAuth 2.0"),(0,r.kt)("p",null,"Use the following high-level steps to fetch a token from your Learn instance.\nRemember that your Learn instance must be registered at\ndeveloper.anthology.com and that your application must be registered on your\nLearn instance. Registering your application with your Learn instance provides\nyou with an application key and secret."),(0,r.kt)("p",null,"Use cURL or an appropriate HTTP library to make a POST REST call to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/oauth2/token")," endpoint."),(0,r.kt)("p",null,"Headers must include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content-Type set to application/x-www-form-urlencoded"),(0,r.kt)("li",{parentName:"ul"},"Authorization set to Basic followed by a space and with your base64-encoded credentials appended. Credentials must be formatted as application-key:secret before encoding.")),(0,r.kt)("p",null,"For example, if your application key were:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"`12345678-1234-5678-1234-1234567890ab")),(0,r.kt)("p",null,"and your secret were"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"abcdefghijklmnopqrstuvwxyzabcdef"))),(0,r.kt)("p",null,"you would encode the string:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"12345678-1234-5678-1234-1234567890ab:abcdefghijklmnopqrstuvwxyzabcdef"))),(0,r.kt)("p",null,"yielding the encoded value"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MTIzNDU2NzgtMTIzNC01Njc4LTEyMzQtMTIzNDU2Nzg5MGFiOmFiY2Rl.htmloaWprbG1ub3BxcnN0dXZ3eHl6YWJjZGVm"))),(0,r.kt)("p",null,"Prepending Basic to that value gives"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Basic MTIzNDU2NzgtMTIzNC01Njc4LTEyMzQtMTIzNDU2Nzg5MGFiOmFiY2Rl.htmloaWprbG1ub3Bx cnN0dXZ3eHl6YWJjZGVm")),(0,r.kt)("p",null,"which would be your Authorization header value. Some REST libraries and\nclients like cURL handle this encoding for you."),(0,r.kt)("p",null,"The body must include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"grant_type=client_credentials.")),(0,r.kt)("p",null,"If everything is working correctly, the server will return an HTTP 200\nresponse and a data body. The data body includes a field access_token. Your\naccess token for further REST calls is the value of this field."),(0,r.kt)("h3",{id:"to-make-a-rest-call-with-the-basic-oauth-20-token"},"To Make a REST Call with the Basic OAuth 2.0 Token"),(0,r.kt)("p",null,"Use the following high-level steps to use a Learn REST API token to\nauthorize other REST calls."),(0,r.kt)("p",null,"Use cURL or an appropriate HTTP library to make a REST call to the appropriate\nendpoint. For a list of endpoints and the methods supported for each, see the\nLearn REST reference docs at ",(0,r.kt)("a",{parentName:"p",href:"https://developer.anthology.com/portal/displayApi/Learn"},"https://developer.anthology.com/portal/displayApi/Learn"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Headers must include:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content-Type and Accept should be set as specified by the reference docs for the call you want."),(0,r.kt)("li",{parentName:"ul"},"Authorization set to Bearer followed by a space and your access token. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"Bearer abcdefghijklmnopqrstuvwxyzabcdef")),(0,r.kt)("li",{parentName:"ul"},"The body and URL parameters must be set as specified by the reference docs for the call you want.")),(0,r.kt)("p",null,"If everything is working correctly, the server will return an HTTP 200\nresponse and a response body as specified by the reference docs for the call\nyou made."),(0,r.kt)("h3",{id:"example-using-curl-to-get-a-token-and-make-a-rest-call"},"Example: Using cURL to Get a Token and Make a REST Call"),(0,r.kt)("p",null,"The easist way to test is using cURL. We will assume you have already\nregistered through the ","[Developer Portal]","(/rest-apis/learn/Getting Started/registry) and\nretrieved your application ID, key, and secret, as well as ","[added your application ID]","(/rest-apis/learn/Getting Started/registry) to\nthe Learn server you wish to integrate with:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the command line, use cURL to send a token request to Learn, signed with their application key and secret:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'    key=<your key>\n    secret=<your secret>\n    curl -i -X POST -u "$key:$secret" https://<your server>/learn/api/public/v1/oauth2/token\n    -d "grant_type=client_credentials"\n')),(0,r.kt)("p",null,"The cURL statement calls and HTTP POST request. This POST request contains an\nAuthorization header that states this is Basic authentication. The cURL\ncommand uses the -u switch to create and send a Base64-encoded version of\nkey:secret. cURL sets content-type to application/x-www-form-urlencoded for\nyou."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The developer portal returns a standard OAuth 2.0 response, which is passed back to the developer. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n    HTTP/1.1 200 OK\n    Content-Type: application/json;charset=UTF-8\n    Cache-Control: no-store\n    Pragma: no-cache\xa0\n    {\n    \xa0\xa0\xa0\xa0 "access_token": "abcdefghijklmnopqrstuvwxyzabcdef",\n    \xa0\xa0\xa0\xa0 "token_type": "bearer",\n    \xa0\xa0\xa0\xa0 "expires_in": 3600\n    }\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Use the returned access token to make further REST calls. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'    curl -X GET -H "authorization: Bearer abcdefghijklmnopqrstuvwxyz"\n    https://yourserver/learn/api/public/v1/users?query=userName\n')),(0,r.kt)("h3",{id:"implementation-notes"},"Implementation notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tokens expire after 1 hour, as per the OAuth RFC examples."),(0,r.kt)("li",{parentName:"ul"},"Tokens are associated with a specific Learn site."),(0,r.kt)("li",{parentName:"ul"},"Any application may have only one token per Learn site. Asking for a token returns the existing one with an updated expiry time if it has not expired yet."),(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.anthology.com/portal/displayApi/Learn"},"Learn REST API Documentation")," for error codes.",(0,r.kt)(d,{frontMatter:o,mdxType:"AuthorBox"}))))}k.isMDXComponent=!0},5152:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/basic-auth-learn-d6de25085b5e51c09d8a97e0689f2aac.png"}}]);