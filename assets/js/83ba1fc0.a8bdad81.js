"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const l={title:"LTI Launch context added in new Window Launches",categories:"Learn UEF",id:"communication-page-lvl-analytics",author:"Gokulakrishnan Raman",published:"",edited:""},r=void 0,o={unversionedId:"blackboard/premium-apis/uef/tutorials/communication-page-lvl-analytics",id:"blackboard/premium-apis/uef/tutorials/communication-page-lvl-analytics",title:"LTI Launch context added in new Window Launches",description:"Introduction",source:"@site/docs/blackboard/premium-apis/uef/tutorials/communication_page_lvl_analytics-id.md",sourceDirName:"blackboard/premium-apis/uef/tutorials",slug:"/blackboard/premium-apis/uef/tutorials/communication-page-lvl-analytics",permalink:"/docs/blackboard/premium-apis/uef/tutorials/communication-page-lvl-analytics",draft:!1,editUrl:"https://github.com/OneComputerGuy/anthologydevdocs/tree/main/docs/blackboard/premium-apis/uef/tutorials/communication_page_lvl_analytics-id.md",tags:[],version:"current",frontMatter:{title:"LTI Launch context added in new Window Launches",categories:"Learn UEF",id:"communication-page-lvl-analytics",author:"Gokulakrishnan Raman",published:"",edited:""},sidebar:"documentationSidebar",previous:{title:"Learn's Ultra Extension Framework",permalink:"/docs/blackboard/premium-apis/uef/getting-started"},next:{title:"Configuring Ultra Extension Framework in Learn",permalink:"/docs/blackboard/premium-apis/uef/tutorials/configuring-uef"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Outline of page-level analytics-id to integration",id:"outline-of-page-level-analytics-id-to-integration",level:2},{value:"Batch Processing and Rate-limiting",id:"batch-processing-and-rate-limiting",level:2},{value:"Request Structure",id:"request-structure",level:2},{value:"Request Event",id:"request-event",level:3},{value:"Response Structure",id:"response-structure",level:2},{value:"Response event",id:"response-event",level:3},{value:"Page-Level analytics-id integration Workflow",id:"page-level-analytics-id-integration-workflow",level:2},{value:"Result Behaviour Of Page-level analytics-id Integration:",id:"result-behaviour-of-page-level-analytics-id-integration",level:2},{value:"Interface",id:"interface",level:3},{value:"Enum",id:"enum",level:3},{value:"Const:",id:"const",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This enhancement to the UEF integration allows the framework to know if an analytics-id exists (or not) on the page, so should partners want to add functionality onto a page based on an elements visibility they are sure of the object they want to target."),(0,i.kt)("h2",{id:"outline-of-page-level-analytics-id-to-integration"},"Outline of page-level analytics-id to integration"),(0,i.kt)("p",null,"In order to provide a number of key functionalities that are already being supported in Learn Original, Some partner integration need the ability to ask UEF about the presence of specific elements in the current focused panel and in view port on the page based on the analytics-id. The response will be a true or false as to whether the element is present on screen."),(0,i.kt)("h2",{id:"batch-processing-and-rate-limiting"},"Batch Processing and Rate-limiting"),(0,i.kt)("p",null,"All of the requests received under one second will be batched and a single response will be sent at the end of one second to its respective integration portal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If Single Integration - rate limiting to 20 requests / second."),(0,i.kt)("li",{parentName:"ul"},"If Multiple Integration - rate limiting to 15 requests /second to each integration.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The timer will be initiated on any first request.")),(0,i.kt)("h2",{id:"request-structure"},"Request Structure"),(0,i.kt)("p",null,"Two key's must be present in request Json -> ",(0,i.kt)("strong",{parentName:"p"},"Type and AnalyticsIds.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type")," \u2192 This key must contain the String value which indicates the request type and purpose of request.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"AnalyticsIds")," \u2192 This key should have the list of analytics Id's for which the page components presence will be checked in the current view port and in the active panel with 100% visibility."))),(0,i.kt)("p",null,"The type of this request event integration will always be ",(0,i.kt)("strong",{parentName:"p"},'"analytics:visible"')),(0,i.kt)("p",null,"Below is the example of the request structure"),(0,i.kt)("h3",{id:"request-event"},"Request Event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n"type":"analytics:visible",\n"analyticsIds":["analyticsId", "analyticsId", ...]\n}\n')),(0,i.kt)("h2",{id:"response-structure"},"Response Structure"),(0,i.kt)("p",null,"Two key's will be present in the response Json -> ",(0,i.kt)("strong",{parentName:"p"},"Type")," and ",(0,i.kt)("strong",{parentName:"p"},"Result"),'. This response will have all "analyticsId" which was sent in the request event along with "isElementVisible" flag to indicate whether the requested analytic Id is present in the view port and in the active panel with 100% visibility or not.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type")," \u2192 This will have the String value that indicates the request type and the purpose of the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Result")," \u2192 This will have two parameters -> AnalyticsId and isElementVisible."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AnalyticsId")," \u2192 This key will have the analytics id that was sent in the request event."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"isElementVisible")," \u2192 This key will have either True/False that indicates whether the given analytics ID is visible in view port and in active panel with 100% visibility or not.")),(0,i.kt)("h3",{id:"response-event"},"Response event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "type": "analytics:visible",\n        "results" : [ {\n                        "analyticsId": "analyticsId from UEF",\n                        "isElementVisible": true/false\n                    },\n                    {\n                        "analyticsId": "analyticsId from UEF",\n                        "isElementVisible": true/false\n                    } , ...\n                  ]\n}\n')),(0,i.kt)("h2",{id:"page-level-analytics-id-integration-workflow"},"Page-Level analytics-id integration Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Page-Level analytics-id integration Workflow",src:n(60904).Z,width:"2724",height:"2436"})),(0,i.kt)("h2",{id:"result-behaviour-of-page-level-analytics-id-integration"},"Result Behaviour Of Page-level analytics-id Integration:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Result Behaviour Of Page-level analytics-id Integration",src:n(55797).Z,width:"2924",height:"1822"})),(0,i.kt)("h3",{id:"interface"},"Interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"1.  IIntegrationPageAnalyticsRequest {\n    type: typeof ANALYTICS_VISIBLE_TYPE;\n    analyticsIds: string[];\n   }\n\n\n2. IIntegrationPageAnalyticsResult {\n   analyticsId: string;\n   isElementVisible: boolean;\n   }\n\n\n\n3. IIntegrationPageAnalyticsResponse {\n   type: typeof ANALYTICS_VISIBLE_TYPE;\n   Results: IIntegrationPageAnalyticsResult[];\n  }\n")),(0,i.kt)("h3",{id:"enum"},"Enum"),(0,i.kt)("p",null,"IntegrationPageAnalytics"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"ANALYTICS_RATE_LIMIT = 20"),(0,i.kt)("li",{parentName:"ol"},"MULTIPLE_INTEGRATION_ANALYTICS_RATE_LIMIT = 15"),(0,i.kt)("li",{parentName:"ol"},"ANALYTICS_TIMEOUT = 1000")),(0,i.kt)("h3",{id:"const"},"Const:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"ANALYTICS_VISIBLE_TYPE = 'analytics:visible';")))}d.isMDXComponent=!0},60904:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/communication_page_lvl_analytics_id_1-97e4473746d126e8c99096146ce3f7ac.png"},55797:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/communication_page_lvl_analytics_id_2-9154512eb2c2a102785815eb61a5e470.png"}}]);