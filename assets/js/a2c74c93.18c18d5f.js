"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[1723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Service Maintenances and Releases",id:"maintenance-page",sidebar_position:1,hide_table_of_contents:!0,published:"2024-07-26",edited:"2024-07-26",author:"Mark O'Neil, Davey Herrera, Dan Magers, Camilo Dominguez, Sebastian Silva"},l=void 0,i={unversionedId:"maintenance-page",id:"maintenance-page",title:"Service Maintenances and Releases",description:"Developer Portal",source:"@site/docs/maintenance-and-releases.md",sourceDirName:".",slug:"/maintenance-page",permalink:"/docs/maintenance-page",draft:!1,editUrl:"https://github.com/OneComputerGuy/anthologydevdocs/tree/main/docs/maintenance-and-releases.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Service Maintenances and Releases",id:"maintenance-page",sidebar_position:1,hide_table_of_contents:!0,published:"2024-07-26",edited:"2024-07-26",author:"Mark O'Neil, Davey Herrera, Dan Magers, Camilo Dominguez, Sebastian Silva"},sidebar:"documentationSidebar",previous:{title:"How to contact us!",permalink:"/docs/community/contact-us"}},s={},u=[{value:"Developer Portal",id:"developer-portal",level:2},{value:"May 28th 2024 - 02:30 AM EST",id:"may-28th-2024---0230-am-est",level:4},{value:"25 February 2024 @ 1:30 am EST",id:"25-february-2024--130-am-est",level:4},{value:"17 October 2023",id:"17-october-2023",level:4},{value:"11 July 2023",id:"11-july-2023",level:4},{value:"6 June 2023",id:"6-june-2023",level:4},{value:"Blackboard Learn",id:"blackboard-learn",level:2},{value:"Student",id:"student",level:2},{value:"Reach",id:"reach",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"developer-portal"},"Developer Portal"),(0,r.kt)("p",null,"The Developer Portal has an ",(0,r.kt)("em",{parentName:"p"},"optional")," maintenance window scheduled every month on the Tuesday of the second week (after SaaS updates). The exception to this monthly maintenance schedule is when critical patches are required."),(0,r.kt)("p",null,"You may monitor the Portal maintenance schedule and progress at ",(0,r.kt)("a",{parentName:"p",href:"https://status.blackboard.com"},"https://status.blackboard.com")," and review any update release notes below."),(0,r.kt)("p",null,"When maintenance is executed or we set a release date/time (which usually happens on a maintenance window) our production system will not be able to take requests and any calls that rely on the Developer Portal. During this time, any request will fail."),(0,r.kt)("admonition",{title:"Outages",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Should a critical outage","*"," take place, we will release a detailed post-mortem on Behind the Blackboard as soon as possible (typically within four days post event)."),(0,r.kt)("p",{parentName:"admonition"},"Any non-critical outage","*","*"," will be covered using our in-Portal announcements feature only.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Release Notes"),(0,r.kt)("h4",{id:"may-28th-2024---0230-am-est"},"May 28th 2024 - 02:30 AM EST"),(0,r.kt)("p",null,"The Developer Portal will undergo a maintenance update at this time. There is no downtime involved."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Release Name: DP2024.3"),(0,r.kt)("li",{parentName:"ul"},"Release Date : 05/28"),(0,r.kt)("li",{parentName:"ul"},"Release Time : 02:30 AM EST (6:30 AM UTC) (12:00 PM IST)"),(0,r.kt)("li",{parentName:"ul"},"Downtime : 0 Mins")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rate Limiting"),":\nA more effective method for managing rate limits of API usage with enhanced control. Enjoy the flexibility to adjust from a 24-hour cycle to any time interval that better fits developer's requirements."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Performance issue fix:"),"\nSQL Query optimization to address the Performance issue"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"25-february-2024--130-am-est"},"25 February 2024 @ 1:30 am EST"),(0,r.kt)("p",null,"We moved this maintenance and feature release due to questions and requests from different sources to Feb 20th 2024. Maintenance release."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Admin to create groups"),": Enable Portal Administrators to create/view/edit Portal Account Groups and to manage the created groups.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Audit Trail"),": Admin to track events and actions done by both the registered developers and admins. This feature also includes downloadable log as a spreadsheet(csv) over a specified timeframe."))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"17-october-2023"},"17 October 2023"),(0,r.kt)("p",null,"Maintenance only."),(0,r.kt)("p",null,"In order to improve performance during peak usage periods and mitigate the risk of database connection failures due to over utilization we are upgrading our database instance type."),(0,r.kt)("p",null,"The Developer Portal will remain available during this time. Though some database related features such as creating new accounts or applications will be unavailable during the maintenance period. The ",(0,r.kt)("em",{parentName:"p"},"actual expected duration")," of the maintenance period is 2 minutes or less."),(0,r.kt)("p",null,"Maintenance Date : 10/17/2023"),(0,r.kt)("p",null,"Maintenance Time : 06:30 AM UTC (2023-10-17T06:30:00Z)"),(0,r.kt)("p",null,"Maintenance window : 10 Mins"),(0,r.kt)("p",null,"You may follow status and updates at ",(0,r.kt)("a",{parentName:"p",href:"https://status.blackboard.com"},"https://status.blackboard.com"),"."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"11-july-2023"},"11 July 2023"),(0,r.kt)("p",null,"Release Name: 2023.3"),(0,r.kt)("p",null,"\u2757 The length of this maintenance window, 12:30 am - 02:30 am EST, is due to the Redis Upgrade, but may complete in ~45 minutes. We apologize in advance for the short notice."),(0,r.kt)("p",null,"Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Redis Upgrade"),": For security and performance purposes we are upgrading to the latest version of Redis. This will have no impact on current Developer-facing functionality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LTI Dynamic Registration"),": For performance and forward looking enhancements we are improving the backend which supports the dynamic registration of LTI integrations with Learn. This will have no impact on current Developer-facing functionality.")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"6-june-2023"},"6 June 2023"),(0,r.kt)("p",null,"Release Name: 2023.2"),(0,r.kt)("p",null,"Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Announcement Panel"),": The Announcement Panel provides Developer facing Portal, APIs, and Event information. When a new announcement is available it will be indicated via a red dot on the Announcements icon in the Portal task bar. Clicking on the Announcements icon displays active announcements - latest at the top."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"blackboard-learn"},"Blackboard Learn"),(0,r.kt)("p",null,"Learn release dates and release notes can be found through ",(0,r.kt)("a",{parentName:"p",href:"https://behind.blackboard.com"},"Behind the Blackboard")," or through our Help Documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Release schedules for Blackboard Learn: ",(0,r.kt)("a",{parentName:"li",href:"https://help.blackboard.com/Learn/Administrator/SaaS/Release_Notes/Learn_SaaS_Release_Schedule"},"Release Schedule")),(0,r.kt)("li",{parentName:"ul"},"Release Notes: ",(0,r.kt)("a",{parentName:"li",href:"https://help.blackboard.com/Learn/Administrator/SaaS/Release_Notes"},"Release Notes"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"student"},"Student"),(0,r.kt)("p",null,"Anthology Student releases and docs are published through the Student Suite here: ",(0,r.kt)("a",{parentName:"p",href:"https://help.anthology.com/Content/DocSets/CNSDocSet.htm"},"Anthology Student Suite")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reach"},"Reach"),(0,r.kt)("p",null,"Anthology Release releases and docs are published through the Reach Suite here: ",(0,r.kt)("a",{parentName:"p",href:"https://help.campusmanagement.com/Content/DocSets/ENGDocSet.htm"},"Anthology Reach Suite")),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Annotations",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"*"," critical outage: service is unavailable or operating outside of usable performance or functional parameters."),(0,r.kt)("p",{parentName:"admonition"},"*","*"," non-critical outage: service is available, but operating at reduced performance.")))}d.isMDXComponent=!0}}]);