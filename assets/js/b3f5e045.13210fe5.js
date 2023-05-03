"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[5681],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||l;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const l={layout:"post",title:"Check the processing status of a file",id:"rest_apis-ally-check_status",categories:"Ally",author:"Scott Hurrey"},s="Check the processing status of a file",o={unversionedId:"REST APIs/Ally/rest_apis-ally-check_status",id:"REST APIs/Ally/rest_apis-ally-check_status",title:"Check the processing status of a file",description:"Ally processes files asynchronously. We aim to process files in near-realtime, but some delays might be present. This endpoint can be used to poll for status updates.",source:"@site/docs/REST APIs/Ally/check-status.md",sourceDirName:"REST APIs/Ally",slug:"/REST APIs/Ally/rest_apis-ally-check_status",permalink:"/docs/REST APIs/Ally/rest_apis-ally-check_status",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Check the processing status of a file",id:"rest_apis-ally-check_status",categories:"Ally",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"Authorize and Authenticate in Ally",permalink:"/docs/REST APIs/Ally/rest_apis-ally-authorization"},next:{title:"Feedback parameter definitions",permalink:"/docs/REST APIs/Ally/rest_apis-ally-api_feedback_def"}},i={},c=[{value:"Endpoint",id:"endpoint",level:3},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Body Parameters",id:"body-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Expected response",id:"expected-response",level:3},{value:"Testing with cURL",id:"testing-with-curl",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"check-the-processing-status-of-a-file"},"Check the processing status of a file"),(0,n.kt)("p",null,"Ally processes files asynchronously. We aim to process files in near-realtime, but some delays might be present. This endpoint can be used to poll for status updates."),(0,n.kt)("h3",{id:"endpoint"},"Endpoint"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /api/v2/clients/:clientId/content/:contentHash/status\n")),(0,n.kt)("h4",{id:"path-parameters"},"Path Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"clientId")," - Path parameter - Your Ally Client ID"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"contentHash")," - Path parameter - The content hash from the previous endpoint")),(0,n.kt)("h4",{id:"body-parameters"},"Body Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"None")),(0,n.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"None")),(0,n.kt)("h3",{id:"expected-response"},"Expected response"),(0,n.kt)("p",null,"This endpoint will always return a 200 status code for existing content hashes regardless of whether the file was processed successfully."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hash": "MS4gQWxsI...",\n  "status": "success",\n  "statusUrl": "/api/v2/clients/:clientId/content/MS4gQWxsIH.../status",\n  "resourceUrl": "/api/v2/clients/:clientId/content/MS4gQWxsIH..."\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hash"),(0,n.kt)("td",{parentName:"tr",align:null},"the content hash used to reference the file by Ally as a Service")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"the stage of processing the file is in","*")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"statusUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"the endpoint to call to check the status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resourceUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"the endpoint to retrieve the report or metadata")))),(0,n.kt)("p",null,"The following status values can be identified:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"success"),(0,n.kt)("li",{parentName:"ul"},"pending"),(0,n.kt)("li",{parentName:"ul"},"inprogress"),(0,n.kt)("li",{parentName:"ul"},"failed")),(0,n.kt)("h2",{id:"testing-with-curl"},"Testing with cURL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n  -H "Authorization: Bearer myJwtToken" \\\n  https://prod.ally.ac/api/v2/clients/:clientId/content/:contentHash/status\n')))}d.isMDXComponent=!0}}]);