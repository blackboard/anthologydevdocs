"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[9624],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return a?o.createElement(g,i(i({ref:t},c),{},{components:a})):o.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={title:"First Steps with Learn REST API",id:"first-steps",categories:"Learn REST",author:"Scott Hurrey",sidebar_position:1,published:"",edited:""},i=void 0,l={unversionedId:"blackboard/rest-apis/getting-started/first-steps",id:"blackboard/rest-apis/getting-started/first-steps",title:"First Steps with Learn REST API",description:"Anthology offers a suite of education technology tools, both software and",source:"@site/docs/blackboard/rest-apis/getting-started/first-steps.md",sourceDirName:"blackboard/rest-apis/getting-started",slug:"/blackboard/rest-apis/getting-started/first-steps",permalink:"/docs/blackboard/rest-apis/getting-started/first-steps",draft:!1,editUrl:"https://github.com/OneComputerGuy/anthologydevdocs/tree/main/docs/blackboard/rest-apis/getting-started/first-steps.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"First Steps with Learn REST API",id:"first-steps",categories:"Learn REST",author:"Scott Hurrey",sidebar_position:1,published:"",edited:""},sidebar:"documentationSidebar",previous:{title:"Best Practices",permalink:"/docs/blackboard/rest-apis/rest-api-best-practices"},next:{title:"Basic Authentication with REST",permalink:"/docs/blackboard/rest-apis/getting-started/basic-authentication"}},s={},p=[{value:"Before You Get Started",id:"before-you-get-started",level:2},{value:"Register as a Anthology Developer",id:"register-as-a-anthology-developer",level:3},{value:"Join the Community",id:"join-the-community",level:3},{value:"What Blackboard Application Do I Need?",id:"what-blackboard-application-do-i-need",level:4},{value:"Get Development Instances of Anthology Applications",id:"get-development-instances-of-anthology-applications",level:4},{value:"Developing with Learn",id:"developing-with-learn",level:3},{value:"Look at the Learn REST Reference",id:"look-at-the-learn-rest-reference",level:3},{value:"Authentication/Authorization",id:"authenticationauthorization",level:3},{value:"Calling Services",id:"calling-services",level:3},{value:"Configure an Instance of Learn to Work with Your Application",id:"configure-an-instance-of-learn-to-work-with-your-application",level:3},{value:"Glossary",id:"glossary",level:3},{value:"More Information",id:"more-information",level:4}],c={toc:p},h="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Anthology offers a suite of education technology tools, both software and\nhardware. REST stands for ",(0,n.kt)("strong",{parentName:"p"},"Re"),"presentational ",(0,n.kt)("strong",{parentName:"p"},"S"),"tate ",(0,n.kt)("strong",{parentName:"p"},"T"),"ransfer. It is a\nlightweight, flexible web service architecture that allows HTTP commands to be\nsent to Web Applications without unnecessary overhead. We provide specific\nexamples and tutorials about using Anthology REST APIs, particularly when a\nworkflow is more complicated. For more general questions about REST and using\nREST APIs, see any of the numerous tutorials available online. Most commonly\nused resources include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Anthology's ",(0,n.kt)("a",{parentName:"li",href:"/docs/developer-portal/start-here"},"developer portal")),(0,n.kt)("li",{parentName:"ul"},"Anthology's ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/search?utf8=%E2%9C%93&q=BBDN-REST"},"Github repos"))),(0,n.kt)("h2",{id:"before-you-get-started"},"Before You Get Started"),(0,n.kt)("p",null,"Anthology offers lots of tools to help you develop an application, plugin, or\nother integration for use with Anthology products like Learn and\nStudent. The most important ones are your accounts with these\nsites:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Anthology Developer Portal")," is where you register applications so they can work with Anthology products. It's also where you get your own key and secret that you need to authenticate your application with Anthology products."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Anthology Developer Community")," is where you learn to develop with Anthology products, get the latest news, and discuss with other Anthology integrators.")),(0,n.kt)("p",null,"Note that the Developer Portal and Developer Community require separate\naccounts."),(0,n.kt)("h3",{id:"register-as-a-anthology-developer"},"Register as a Anthology Developer"),(0,n.kt)("p",null,"LTI and REST integrations begin at the Developer Portal. This is\nwhere you register LTI and REST Applications and get the ID, key, and secrets for client deployment. In the\nportal, you can see which client systems are using the integrations. Signing\nup is free, and you can develop your integration at no cost. There may be cost\ninvolved in deploying your integration, but before that happens, you'll have\nto speak with us. To discuss deploying your application, please contact us at\n",(0,n.kt)("a",{parentName:"p",href:"mailto:developers@anthology.com"},"developers@anthology.com"),". Before you can\nauthenticate your project with Anthology applications, you need to be a\nregistered Anthology developer. To register as a Anthology developer:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://developer.anthology.com/"},"https://developer.anthology.com/")," and select ",(0,n.kt)("strong",{parentName:"li"},"Sign Up"),". Read and agree to the terms and conditions."),(0,n.kt)("li",{parentName:"ol"},"Provide your email address, a password, your first name and last, and select the checkbox to prove you are human."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Create Account")," and you're on your way.")),(0,n.kt)("p",null,"For more information about the Developer Portal please see ",(0,n.kt)("a",{parentName:"p",href:"/docs/developer-portal/start-here"},"this document")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," If you are an Anthology client, an Anthology Partner / Vendor / Developer of a REST Application should NEVER tell you to go to the developer portal and create an App ID with the associated key/secret to install their application. They should never tell you to apply for a Rate/Site increase for their application. Anthology DOES NOT support that model. Every REST Application developer should give you an App ID to install their REST App and tell you how to configure a system role for its use. Period. The REST Application developer needs to request the increases they need to run their application themselves. If they ask you to go to developer.anthology.com and get an App ID/Key/Secret, please tell them that is wrong. They should have exactly one App ID for their production REST application that they are asking you to install."),(0,n.kt)("p",null,"Contractors are an exception to this policy as they are producing an\nintegration on your, the Anthology client, behalf. Questions regarding the\npolicy and whether you are impacted may be asked here, or posted to\n",(0,n.kt)("a",{parentName:"p",href:"mailto:developers@anthology.com"},"developers@anthology.com")),(0,n.kt)("h3",{id:"join-the-community"},"Join the Community"),(0,n.kt)("p",null,"The Anthology developer community is the best place to find more information\nabout integrating your project with Anthology products. You will benefit from\nthe community most by joining in.To register in the Anthology developer\ncommunity:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"/docs/developer-portal/start-here"},"Anthology Developer Community")," and select ",(0,n.kt)("strong",{parentName:"li"},"Register"),"."),(0,n.kt)("li",{parentName:"ol"},"If your organization is a Blackboard client or partner organization and you have a Behind the Blackboard login, select ",(0,n.kt)("strong",{parentName:"li"},"Behind the Blackboard Login"),". Otherwise, select ",(0,n.kt)("strong",{parentName:"li"},"Community Site Login"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your email address to receive a link via email."),(0,n.kt)("li",{parentName:"ol"},"In your email's inbox, find the email sent by Blackboard. You might have to check your spam or junk folder. The email's subject is something like ",(0,n.kt)("em",{parentName:"li"},"Blackboard Community: Email Validation"),". Select the link in your email. You will be taken to a registration page."),(0,n.kt)("li",{parentName:"ol"},"In the registration page, complete all the required fields and select ",(0,n.kt)("strong",{parentName:"li"},"Create Account"),".")),(0,n.kt)("h4",{id:"what-blackboard-application-do-i-need"},"What Blackboard Application Do I Need?"),(0,n.kt)("p",null,"Your Anthology-compatible application can work with one or more of\nAnthology's tools. How you build an integration with Anthology software and\nhardware depends on which tools you want to integrate with. The tools you'll\nwant to use depend on what you want to do."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"I want to programmatically...")," ",(0,n.kt)("em",{parentName:"p"},"You'll need to...")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Add files, text, and the like to Learn")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/blackboard/rest-apis/getting-started/basic-authentication"},"Authenticate with Learn")," via REST API"),(0,n.kt)("li",{parentName:"ol"},"Check out our ",(0,n.kt)("a",{parentName:"li",href:"https://developer.anthology.com/portal/displayApi"},"Learn REST API reference"))),(0,n.kt)("h4",{id:"get-development-instances-of-anthology-applications"},"Get Development Instances of Anthology Applications"),(0,n.kt)("p",null,"Anthology makes available instances of Anthology applications that you can\nuse to build projects that integrate with Anthology applications. Among\nothers, we offer these popular developer instances."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer-ami"},"AWS instance of Learn"),(0,n.kt)("br",{parentName:"li"}),"While Blackboard does not charge for entry-level use, AWS may charge various\nfees for their services.")),(0,n.kt)("h3",{id:"developing-with-learn"},"Developing with Learn"),(0,n.kt)("p",null,"Go to the developer portal and ","[register as a Developer]","(/rest-apis/learn/Getting Started/registry) if you haven't already, and then register your\napplication to get a key and secret. Use your key and secret to ",(0,n.kt)("a",{parentName:"p",href:"/docs/blackboard/rest-apis/getting-started/basic-authentication"},"authenticate\nwith Learn"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"developer workflow",src:a(89605).Z,width:"562",height:"307"})),(0,n.kt)("h3",{id:"look-at-the-learn-rest-reference"},"Look at the Learn REST Reference"),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.anthology.com/portal/displayApi/Learn"},"Learn REST API Reference"),". In particular,look at the range of endpoints available. Check the ",(0,n.kt)("strong",{parentName:"p"},"Since")," version for endpoint that interest you. This version number indicates the version since which the endpoint has been available. This way, you can make sure that your Learn server is is able to use it."),(0,n.kt)("h3",{id:"authenticationauthorization"},"Authentication/Authorization"),(0,n.kt)("p",null,"Authentication for REST Integrations follows the ",(0,n.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749"},"OAuth 2.0 RFC Standard"),". Essentially,\nevery developer has a unique key and secret associated with each application they create. They make an HTTP Post to the API requesting client_credentials, which returns an authorization token that grants the application access to the Learn REST API for one hour. This token is then passed in subsequent REST calls until such time that the token expires. This can be done either with ",(0,n.kt)("a",{parentName:"p",href:"/docs/blackboard/rest-apis/getting-started/basic-authentication"},"Basic Authentication")," or, as of Learn 3200.7 in SaaS or Q4 2017 for self- and managed-hosted clients, using ",(0,n.kt)("a",{parentName:"p",href:"/docs/blackboard/rest-apis/getting-started/3lo"},"Three-Legged\nOAuth"),"."),(0,n.kt)("h3",{id:"calling-services"},"Calling Services"),(0,n.kt)("p",null,"Once your application acquires an access token, it only needs to pass that token as a Bearer token in the Authorization header of your API calls. Review the authentication documentation in the above section for an overview, or find more specific details on the available API endpoints and APIs on the Developer Portal's ",(0,n.kt)("a",{parentName:"p",href:"https://developer.anthology.com/portal/displayApi"},"Swagger API document"),".In its current implementation, Learn REST APIs does not support Cross-Origin Resource Sharing (CORS). To learn about this and see an example to workaround this with Angular2, see the blog entitled ",(0,n.kt)("a",{parentName:"p",href:"https://community.blackboard.com/blogs/4/17"},"Cross-Origin Resource Sharing; or Why I Can't Use AJAX with Learn APIs"),"."),(0,n.kt)("h3",{id:"configure-an-instance-of-learn-to-work-with-your-application"},"Configure an Instance of Learn to Work with Your Application"),(0,n.kt)("p",null,"Once you have registered with the developer portal and built an integration, deploying to a Learn SaaS instance is a simple step. The Learn administrator that wants to use your integration needs the Application ID you got from the developer portal. The administrator will also need to create a Learn user account with sufficient entitlements to associate with your integration. This gives the administrator full control over the entitlements used by your application. For more information on how to configure Learn, please see ",(0,n.kt)("a",{parentName:"p",href:"https://help.blackboard.com/Learn/Administrator/SaaS/Integrations/Compare_Building_Blocks_and_Rest"},"Managing REST Integrations in Learn: The REST Integrations Tool for System Administrators"),"."),(0,n.kt)("h3",{id:"glossary"},"Glossary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Term"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Application ID"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier for the application used to integrate with the",(0,n.kt)("br",null),"Learn REST Services. Each unique integration should have its own Application.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Application Key"),(0,n.kt)("td",{parentName:"tr",align:null},"Each application is assigned a unique key. This is used to authorize REST API",(0,n.kt)("br",null),"calls against Learn.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Application Secret"),(0,n.kt)("td",{parentName:"tr",align:null},"Each application is assigned a unique secret. This is used to authorize REST",(0,n.kt)("br",null),"API calls against Learn.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Access Token"),(0,n.kt)("td",{parentName:"tr",align:null},"A token is a unique string representing an implicit authorization granted by",(0,n.kt)("br",null),"an OAuth 2.0 Service Provider.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CRUD"),(0,n.kt)("td",{parentName:"tr",align:null},"Create, Read, Update, Delete")))),(0,n.kt)("p",null,"{: .striped}"),(0,n.kt)("h4",{id:"more-information"},"More Information"),(0,n.kt)("p",null,"We will continue to add new examples, tutorials, and code samples, so make\nsure to check these links regularly."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.anthology.com/"},"Developer Portal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.anthology.com/portal/displayApi"},"REST Documentation"))))}u.isMDXComponent=!0},89605:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/devworkflow-0106855d95f40fc3ea96161a75b91d3d.png"}}]);