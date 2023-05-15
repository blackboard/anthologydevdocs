"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7944],{4137:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6053:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(4137));const i={layout:"post",title:"Blackboard REST API Framework",id:"rest_apis-learn-getting-started-framework",categories:"Learn Rest",author:"Mark O'Neil"},o="The Blackboard REST API Framework",s={unversionedId:"REST APIs/Learn/Getting Started/rest_apis-learn-getting-started-framework",id:"REST APIs/Learn/Getting Started/rest_apis-learn-getting-started-framework",title:"Blackboard REST API Framework",description:"Blackboard\u2019s new REST API Framework is a giant step forward for integrating",source:"@site/docs/REST APIs/Learn/Getting Started/framework.md",sourceDirName:"REST APIs/Learn/Getting Started",slug:"/REST APIs/Learn/Getting Started/rest_apis-learn-getting-started-framework",permalink:"/docs/REST APIs/Learn/Getting Started/rest_apis-learn-getting-started-framework",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Blackboard REST API Framework",id:"rest_apis-learn-getting-started-framework",categories:"Learn Rest",author:"Mark O'Neil"},sidebar:"documentationSidebar",previous:{title:"First Steps with Learn REST API",permalink:"/docs/REST APIs/Learn/Getting Started/rest_apis-learn-getting-started-first-steps"},next:{title:"LTI or REST?",permalink:"/docs/REST APIs/Learn/Getting Started/rest_apis-learn-getting-started-lti-or-rest"}},l={},p=[{value:"The Actors in REST API Use Cases",id:"the-actors-in-rest-api-use-cases",level:3},{value:"How These Three Actors Work Together to Enable Learn REST Integrations",id:"how-these-three-actors-work-together-to-enable-learn-rest-integrations",level:4},{value:"Data Exchange between the Actors",id:"data-exchange-between-the-actors",level:4},{value:"Data Flow",id:"data-flow",level:2},{value:"<em>Pre-authorization</em>",id:"pre-authorization",level:3},{value:"<em>Post-authorization</em>",id:"post-authorization",level:3},{value:"Rate Limiting",id:"rate-limiting",level:3}],h={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-blackboard-rest-api-framework"},"The Blackboard REST API Framework"),(0,r.kt)("p",null,"Blackboard\u2019s new REST API Framework is a giant step forward for integrating\nwith Learn. By moving the integration from in-process code to a\nseparate machine the health of your Learn instance is dramatically\nimproved by lowering complexity and reducing the amount of code running in a\nsingle location. The new REST API and Developer Portal are a work in progress\nand will continually grow in functionality as Learn, the REST APIs,\nand the Developer Portal continue to mature."),(0,r.kt)("h3",{id:"the-actors-in-rest-api-use-cases"},"The Actors in REST API Use Cases"),(0,r.kt)("p",null,"There are three actors in the REST API use case:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Developer:"),": This is the person who writes an application that uses the new REST APIs. Through the application the developer manages authorization using the registered application\u2019s OAuth Key and Secret, any data sent to or received from Learn, and tracks application entitlements required for operation. ",(0,r.kt)("em",{parentName:"p"},"Developers are limited to non-production testing pursuant to the applicable REST Developer Agreements."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Learn Administrator"),": By default, no Applications can access the REST APIs. A Learn Administrator must enable each app from the Learn Admin Panel before access is granted. This is done by creating an integration using the Learn Admin REST API Integrations tool using the developer provided application Id","*"," and a User with the required entitlements as specified by the developer."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Important Note")),": By default NO integrations are enabled and the Learn server will not allow integrations without a Learn Administrator taking action."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Learn Administrator"),": The Developer Portal: This is a new website (",(0,r.kt)("a",{parentName:"li",href:"https://developer.anthology.com/"},"https://developer.anthology.com"),") where a developer can browse the REST API documentation, register as a REST Developer, and register application references for integrating with Learn.")),(0,r.kt)("p",null,"The REST API Framework Actors, interactions, and data paths\n",(0,r.kt)("img",{alt:"RESTDiagram.png",src:a(6633).Z,width:"3305",height:"1923"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NOTE"),": We do NOT support a model where the developer of the REST Application requires the Learn Administrator to get the Application ID, key, and secret for installing the developer\u2019s application on the Learn system. The developer will get one APP ID, key and secret for the one application. The developer is responsible for configuring the key and secret on their server. For security reasons, the key and secret should never be shared with the client or any other another party. The REST Application can determine which institution requests are coming from by examining the FQDN in the requests. There is no need for installing a separate Application ID for a given vendors application on each Learn instance.")),(0,r.kt)("h4",{id:"how-these-three-actors-work-together-to-enable-learn-rest-integrations"},"How These Three Actors Work Together to Enable Learn REST Integrations"),(0,r.kt)("p",null,"A developer (A) - or organization - decides that they want to create a new\napplication which uses the Learn REST APIs. She reviews the\ndocumentation and signs up inside the developer portal (C). Once she\nregisters, she may create one to many applications. Creating an application\nprovides an OAuth Key and Secret which is used to authorize Learn\nREST API access and an Application ID that is used to approve Learn\ninstances."),(0,r.kt)("p",null,"The developer uses the Learn Admin REST API Integrations tool on a\nDeveloper Virtual Machine (B) or their Test instance of Learn (B)\nto enable access within Learn by providing the application ID for\nthe particular application in development. Once the Application has been\nenabled, the developer may now issue REST requests against the specific Learn\nserver. These HTTPS requests are issued directly against the Learn instance\nand are secured by OAuth 2.0."),(0,r.kt)("p",null,"Once the application development and testing is completed, the developer\nshares the application Id and the required entitlements with the Blackboard\nLearn admin to enable access within Learn for the particular\napplication. The admin inputs the application Id provided by the developer and\nassigns a Learn User that the integration will run as. The role for\nthis user must have the entitlements as requested by the developer. This user\ncan be an existing user or a newly created user specific to the application.\nThe application will run as this user in Learn and will thus have all the\nrights that the user has in the system. If the admin wants to allow the\napplication only READ access, this can be done with the security system\nalready available in Learn by assigning the user role READ only entitlements."),(0,r.kt)("h4",{id:"data-exchange-between-the-actors"},"Data Exchange between the Actors"),(0,r.kt)("p",null,"The request BODY or response is ",(0,r.kt)("em",{parentName:"p"},"never")," sent to the developer portal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Personal data is exchanged between the application and Learn\nsystem only - no personally identifiable data is shared with the portal.\nTherefore, all data may remain within the Learn server and REST application\nregions.")),(0,r.kt)("p",null,"Primary key identifiers (e.g. Learn PK1 for User or Course) are shared with\nthe portal for purposes of request logging and error messages. Note that in an\nupcoming release of Learn these PK1s will also be anonymized so no PII\ninformation is ever communicated outside the bounds of Learn-to-application\nexchanges."),(0,r.kt)("h2",{id:"data-flow"},"Data Flow"),(0,r.kt)("h3",{id:"pre-authorization"},(0,r.kt)("em",{parentName:"h3"},"Pre-authorization")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The developed application first makes an authorization request to their\nLearn server. This request contains the OAuth Key and Secret provisioned on\napplication creation in the developer portal.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Learn receives the request and asks the Developer Portal for a TOKEN if the\nKEY/SECRET are correct and valid for that Learn instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Developer Portal returns a response to Learn containing a TOKEN if\nvalidation was successful.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If validation is successful Learn caches and returns the TOKEN in the\nresponse to the application or returns a 401 Invalid client credentials."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Tokens have a lifecycle of one hour and currently are not revocable."),(0,r.kt)("h3",{id:"post-authorization"},(0,r.kt)("em",{parentName:"h3"},"Post-authorization")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once authorized, the application may then make data oriented requests to\nLearn by including the issued Token.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Developer data oriented requests are processed by Learn which returns\nresponse data to the requesting application."),(0,r.kt)("p",{parentName:"li"},"a. Learn checks the local cache to validate the TOKEN \u2013 if valid it runs and\nreturns the request response."),(0,r.kt)("p",{parentName:"li"},"b. In a background thread Learn contacts the developer portal indicating a\nspecified request was used by a TOKEN on a Learn server."),(0,r.kt)("p",{parentName:"li"},"c. The developer portal responds to Learn to indicate if the TOKEN is still\nvalid (not revoked) and is still running under the rate limits."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the TOKEN has been revoked or rate limits have been reached, all future requests for that token will fail.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Learn sends REST transaction and error log messages to the portal for purposes of API management and usage. The data sent to the portal includes the Learn Instance ID, Developer Application ID, and the REST API used (GET /users/ for instance)."),(0,r.kt)("h3",{id:"rate-limiting"},"Rate Limiting"),(0,r.kt)("p",null,"In the background, the Learn instance securely communicates with the Developer\nPortal to enable rate limiting on the Developer Application. This is done by\ntelling the Portal how many and which type of REST calls are being issued to\nLearn."),(0,r.kt)("p",null,"For the duration of the technical preview we have set the rate limit on a\ndevelopers suite of applications to individual institution integrations at\n10,000 requests per 24 hour period. As the Technical Preview progresses we\nwill be collecting data on usage which will be analyzed to determine Customer\nand third party developer production grade rate limits when the Technical\nPreview is lifted."))}d.isMDXComponent=!0},6633:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/framework-1-cb7614afb8215eae842596f1b8693e9d.png"}}]);