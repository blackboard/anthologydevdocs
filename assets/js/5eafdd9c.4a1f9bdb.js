"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[8060],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,u=g["".concat(d,".").concat(m)]||g[m]||c[m]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={title:"Building the JWT token with the content",id:"dl-return-token",published:"",edited:"2024-09-25",sidebar_position:3},i=void 0,o={unversionedId:"blackboard/lti/1.3/dl/dl-return-token",id:"blackboard/lti/1.3/dl/dl-return-token",title:"Building the JWT token with the content",description:"Learn expects a JWT token signed from your tool (based on the specifications from 1EdTech), however, this token requires certain properties or claims to be included. We'll review the information that needs to be sent back to Learn to properly create items.",source:"@site/docs/blackboard/lti/1.3/dl/03-building-token.md",sourceDirName:"blackboard/lti/1.3/dl",slug:"/blackboard/lti/1.3/dl/dl-return-token",permalink:"/docs/blackboard/lti/1.3/dl/dl-return-token",draft:!1,editUrl:"https://github.com/blackboard/anthologydevdocs/tree/main/docs/blackboard/lti/1.3/dl/03-building-token.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Building the JWT token with the content",id:"dl-return-token",published:"",edited:"2024-09-25",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Course Content Types for Deep Linking 2.0",permalink:"/docs/blackboard/lti/1.3/dl/dl-types"},next:{title:"Handling the Deep Link item launch",permalink:"/docs/blackboard/lti/1.3/dl/dl-item-launch"}},d={},p=[{value:"The claims needed (object properties)",id:"the-claims-needed-object-properties",level:2},{value:"Sign and send to Blackboard Learn",id:"sign-and-send-to-blackboard-learn",level:2},{value:"Response sample",id:"response-sample",level:2}],s={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Learn expects a JWT token signed from your tool (based on the specifications from 1EdTech), however, this token requires certain properties or claims to be included. We'll review the information that needs to be sent back to Learn to properly create items."),(0,r.yg)("h2",{id:"the-claims-needed-object-properties"},"The claims needed (object properties)"),(0,r.yg)("p",null,"To properly create an item, the body of the JWT token should have the following required and optional claims (or properties). Please keep in mind that the body itself has to be a JSON object."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Required by Learn"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"iss")),(0,r.yg)("td",{parentName:"tr",align:null},"Issuer of the JWT token"),(0,r.yg)("td",{parentName:"tr",align:null},"Your Application ID"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aud")),(0,r.yg)("td",{parentName:"tr",align:null},"Target server or service where the JWT must have been sent"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"https://blackboard.com")),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sub")),(0,r.yg)("td",{parentName:"tr",align:null},"ID of the user that is performing the changes or"),(0,r.yg)("td",{parentName:"tr",align:null},"Your Application ID"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"iat")),(0,r.yg)("td",{parentName:"tr",align:null},"Date and time when the token was created"),(0,r.yg)("td",{parentName:"tr",align:null},"Numeric date time in Unix time"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"exp")),(0,r.yg)("td",{parentName:"tr",align:null},"Date and time when the token will expire"),(0,r.yg)("td",{parentName:"tr",align:null},"Numeric date time in Unix time"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locale")),(0,r.yg)("td",{parentName:"tr",align:null},"Locale of the content being created"),(0,r.yg)("td",{parentName:"tr",align:null},"locale code using the format languageCode_regionCode"),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"https://purl.imsglobal.org/spec/lti/claim/deployment_id"')),(0,r.yg)("td",{parentName:"tr",align:null},"Deployment ID sent by Learn"),(0,r.yg)("td",{parentName:"tr",align:null},"Unique ID sent by Learn in the Deep Linking Launch request"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"https://purl.imsglobal.org/spec/lti/claim/message_type"')),(0,r.yg)("td",{parentName:"tr",align:null},"Type of response"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"LtiDeepLinkingResponse")),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"https://purl.imsglobal.org/spec/lti/claim/version"')),(0,r.yg)("td",{parentName:"tr",align:null},"Deep linking object version"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"1.3.0")),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"https://purl.imsglobal.org/spec/lti-dl/claim/data"')),(0,r.yg)("td",{parentName:"tr",align:null},"Data object used by Learn to validate the creation request"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"data")," value sent in the ",(0,r.yg)("inlineCode",{parentName:"td"},"https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings")," claim. Must be sent back unaltered"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"https://purl.imsglobal.org/spec/lti-dl/claim/content_items"')),(0,r.yg)("td",{parentName:"tr",align:null},"Array of Content objects"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"[{<ContentTypeItem>},{ContentTypeItem},{}]")),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")))),(0,r.yg)("h2",{id:"sign-and-send-to-blackboard-learn"},"Sign and send to Blackboard Learn"),(0,r.yg)("p",null,"Once the object is built, you can use your preferred library to create and sign the JWT token"),(0,r.yg)("h2",{id:"response-sample"},"Response sample"),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Deep Linking response body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "iss": "baaf7da8-f99a-42ca-a72f-292cfd0eb27d",\n  "aud": "https://blackboard.com",\n  "sub": "baaf7da8-f99a-42ca-a72f-292cfd0eb27d",\n  "iat": 1727287883,\n  "exp": 1727288183,\n  "locale": "en_US",\n  "https://purl.imsglobal.org/spec/lti/claim/deployment_id": "86e8b331-a6cd-486c-b006-9893c749e242",\n  "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiDeepLinkingResponse",\n  "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",\n  "https://purl.imsglobal.org/spec/lti-dl/claim/data": "_4_1::_14_1::2::false::true::_13_1::e7a75af804fd4d9fb76812c7cde8ca70::false::false",\n  "https://purl.imsglobal.org/spec/lti-dl/claim/content_items": [\n    {\n      "type": "ltiResourceLink",\n      "title": "A title for LTI & 1.3 \\" Link",\n      "text": "A & description with quotes \\"",\n      "url": "https://dev.writingcode.dev/lti13",\n      "available": {\n        "startDateTime": "2024-09-25T13:00:00.000Z",\n        "endDateTime": "2024-10-25T13:00:00.000Z"\n      },\n      "submission": {\n        "endDateTime": "2024-10-25T13:00:00.000Z"\n      },\n      "lineItem": {\n        "scoreMaximum": 100,\n        "label": "Chapter 12 quiz",\n        "resourceId": "xyzpdq1234",\n        "tag": "originality"\n      }\n    }\n  ]\n}\n'))))}c.isMDXComponent=!0}}]);