"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[4754],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,m=c["".concat(l,".").concat(d)]||c[d]||g[d]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43099:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Creating and Managing groups",id:"creating-and-managing-groups",categories:"Developer Portal",sidebar_position:3,published:"2023-05-09",edited:"2024-03-20",date:new Date("2023-05-09T00:00:00.000Z"),author:"Davey Herrera, Dan Magers"},i=void 0,p={unversionedId:"developer-portal/creating-and-managing-groups",id:"developer-portal/creating-and-managing-groups",title:"Creating and Managing groups",description:"What are Groups?",source:"@site/docs/developer-portal/creating-and-managing-groups.md",sourceDirName:"developer-portal",slug:"/developer-portal/creating-and-managing-groups",permalink:"/docs/developer-portal/creating-and-managing-groups",draft:!1,editUrl:"https://github.com/OneComputerGuy/anthologydevdocs/tree/main/docs/developer-portal/creating-and-managing-groups.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Creating and Managing groups",id:"creating-and-managing-groups",categories:"Developer Portal",sidebar_position:3,published:"2023-05-09",edited:"2024-03-20",date:"2023-05-09T00:00:00.000Z",author:"Davey Herrera, Dan Magers"},sidebar:"documentationSidebar",previous:{title:"Registering and Managing a REST or LTI Application",permalink:"/docs/developer-portal/creating-new-rest-or-lti-application"},next:{title:"Production groups, REST API and site registrations limits",permalink:"/docs/developer-portal/production-groups-rest-api-and-site-registration-limits"}},l={},s=[{value:"What are Groups?",id:"what-are-groups",level:2},{value:"Creating a group",id:"creating-a-group",level:2}],u={toc:s},c="wrapper";function g(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-are-groups"},"What are Groups?"),(0,n.kt)("p",null,"Groups allow you to manage application releases and associate developers with specific applications. This page explains how to create and manage your groups."),(0,n.kt)("p",null,"You can create groups for individual and team development. You can target a specific group for a production application release (this is your Production Group). This allows you to manage your applications and the developer teams behind them, enabling access to application references by team members. Here are some rules governing groups:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A Group always has at least one member.")," That member has administrator rights and cannot be removed from the group. You can add developers to a group. Developers added to a group can be given administrator privileges."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A Group can have one or more applications associated with it.")," This association allows for granular management of applications and teams' access to application information."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Groups enable you to manage the developers")," associated with your projects and the release level of your applications."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Groups allow for a higher contracted rate_limit and site quota")," over those set for default developer accounts. These settings are based on your Blackboard Learn license or Business Development contract. If you do not have a Blackboard Learn product license or do not have a Business Development contract, your groups will all have default developer account settings."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Groups cannot be deleted or removed by you or Anthology."))),(0,n.kt)("h2",{id:"creating-a-group"},"Creating a group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Groups page composition",src:a(92071).Z,width:"1479",height:"675"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Create a group.")," You can create a group by selecting ",(0,n.kt)("strong",{parentName:"p"},"Create"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rename a group.")," You can rename an existing group by selecting ",(0,n.kt)("strong",{parentName:"p"},"Rename"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Select a new group.")," This dropdown menu allows you to select a Group between the ones you have created.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add a new developer to the group.")," Add a developer to a group using the developer's email address.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Change the administrator status.")," You can give administrator privileges to exisiting group members. An administrator is empowered to:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add new developers to the group"),(0,n.kt)("li",{parentName:"ul"},"Edit, Delete or manage keys of the application."),(0,n.kt)("li",{parentName:"ul"},"Manage placements and see which schools have the application deployed.")))))}g.isMDXComponent=!0},92071:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-and-manage-groups-1-92b9dfb4e64368f90ec98baa076e6f99.png"}}]);