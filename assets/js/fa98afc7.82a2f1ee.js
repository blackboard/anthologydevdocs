"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[8836],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=r,y=d["".concat(i,".").concat(g)]||d[g]||p[g]||o;return t?a.createElement(y,s(s({ref:n},c),{},{components:t})):a.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},61126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const o={title:"Using Table of Contents in Original course view",id:"course-toc",categories:"Learn REST toc",Author:"Davey Herrera",published:"",edited:""},s=void 0,l={unversionedId:"blackboard/rest-apis/hands-on/course-toc",id:"blackboard/rest-apis/hands-on/course-toc",title:"Using Table of Contents in Original course view",description:"This guide is only intended to be used in courses that use the original course view.",source:"@site/docs/blackboard/rest-apis/hands-on/course-toc.md",sourceDirName:"blackboard/rest-apis/hands-on",slug:"/blackboard/rest-apis/hands-on/course-toc",permalink:"/docs/blackboard/rest-apis/hands-on/course-toc",draft:!1,editUrl:"https://github.com/blackboard/anthologydevdocs/tree/main/docs/blackboard/rest-apis/hands-on/course-toc.md",tags:[],version:"current",frontMatter:{title:"Using Table of Contents in Original course view",id:"course-toc",categories:"Learn REST toc",Author:"Davey Herrera",published:"",edited:""},sidebar:"documentationSidebar",previous:{title:"Copying Courses",permalink:"/docs/blackboard/rest-apis/hands-on/copying-courses"},next:{title:"Pulling Gradebook Data and Assessment Grades",permalink:"/docs/blackboard/rest-apis/hands-on/pulling-gradebook-data-and-assessment-grades"}},i={},u=[{value:"What is TOC?",id:"what-is-toc",level:2},{value:"Required entitlements",id:"required-entitlements",level:3},{value:"Mapping the returned values with the GUI",id:"mapping-the-returned-values-with-the-gui",level:3},{value:"Using PATCH Course TOC",id:"using-patch-course-toc",level:3}],c={toc:u},d="wrapper";function p(e){let{components:n,...o}=e;return(0,r.yg)(d,(0,a.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This guide is only intended to be used in courses that use the original course view."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Tested with Blackboard Learn Release 3900.48.0-rel.18+c7edfda")),(0,r.yg)("p",null,"For now, it is possible to ",(0,r.yg)("strong",{parentName:"p"},"GET")," and ",(0,r.yg)("strong",{parentName:"p"},"PATCH")," the Table of contents (TOC) ",(0,r.yg)("strong",{parentName:"p"},"ONLY")," in Courses that use the original course view, if you try to make API calls on Ultra course view, you will receive the following message:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"GET /learn/api/public/v1/courses/:courseId/tocItems")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "message": "Ultra course is not supported"\n}\n')),(0,r.yg)("h2",{id:"what-is-toc"},"What is TOC?"),(0,r.yg)("p",null,"TOC or Table of contents is the menu that everyone sees on the top left of the page, like this:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Image of the course toc within Learn",src:t(55474).A,width:"1160",height:"861"})),(0,r.yg)("p",null,"Now if you do the same call, you will receive this:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"GET {{baseUrl}}/learn/api/public/v1/courses/:courseId/tocItems")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "id": "_10223_1",\n      "courseId": "_907_1",\n      "contentId": null,\n      "label": "Home Page",\n      "targetType": "Module",\n      "position": 0,\n      "launchInNewWindow": false,\n      "isEnabled": true,\n      "isEntryPoint": true,\n      "allowGuests": true,\n      "allowObservers": true\n    },\n    {\n      "id": "_10222_1",\n      "courseId": "_907_1",\n      "contentId": "_6674_1",\n      "label": "Information",\n      "targetType": "Content",\n      "position": 1,\n      "launchInNewWindow": false,\n      "isEnabled": true,\n      "isEntryPoint": false,\n      "internalHandle": "content",\n      "allowGuests": true,\n      "allowObservers": true\n    },\n    {\n      "id": "_10221_1",\n      "courseId": "_907_1",\n      "contentId": "_6673_1",\n      "label": "Content",\n      "targetType": "Content",\n      "position": 2,\n      "launchInNewWindow": false,\n      "isEnabled": true,\n      "isEntryPoint": false,\n      "internalHandle": "content",\n      "allowGuests": true,\n      "allowObservers": true\n    },\n    {\n      "id": "_10220_1",\n      "courseId": "_907_1",\n      "contentId": null,\n      "label": "Discussions",\n      "targetType": "Application",\n      "position": 3,\n      "launchInNewWindow": false,\n      "isEnabled": true,\n      "isEntryPoint": false,\n      "internalHandle": "discussion_board_entry",\n      "allowGuests": false,\n      "allowObservers": false\n    },\n    {\n      "id": "_10219_1",\n      "courseId": "_907_1",\n      "contentId": null,\n      "label": "Groups",\n      "targetType": "Application",\n      "position": 4,\n      "launchInNewWindow": false,\n      "isEnabled": true,\n      "isEntryPoint": false,\n      "internalHandle": "groups",\n      "allowGuests": false,\n      "allowObservers": false\n    },\n    {\n      "id": "_10218_1",\n      "courseId": "_907_1",\n      "contentId": null,\n      "label": "Tools",\n      "targetType": "Application",\n      "position": 5,\n      "launchInNewWindow": false,\n      "isEnabled": true,\n      "isEntryPoint": false,\n      "internalHandle": "course_tools_area",\n      "allowGuests": false,\n      "allowObservers": false\n    },\n    {\n      "id": "_10217_1",\n      "courseId": "_907_1",\n      "contentId": null,\n      "label": "Help",\n      "targetType": "Application",\n      "position": 6,\n      "launchInNewWindow": false,\n      "isEnabled": true,\n      "isEntryPoint": false,\n      "internalHandle": "student_manual",\n      "allowGuests": false,\n      "allowObservers": false\n    }\n  ]\n}\n')),(0,r.yg)("p",null,'Basically, when using this endpoint it "Returns a list of Course TOC entries associated to a course.".'),(0,r.yg)("h3",{id:"required-entitlements"},"Required entitlements"),(0,r.yg)("p",null,"In order to use:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"GET /learn/api/public/v1/courses/:courseId/tocItems"),(0,r.yg)("li",{parentName:"ul"},"PATCH /learn/api/public/v1/courses/{courseId}/tocItems/{tocId}")),(0,r.yg)("p",null,"You will need:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"course.configure-areas.EXECUTE -> Entitlement")),(0,r.yg)("h3",{id:"mapping-the-returned-values-with-the-gui"},"Mapping the returned values with the GUI"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Image of the mapping between course toc and get payload",src:t(1374).A,width:"1054",height:"948"})),(0,r.yg)("p",null,"Please remember you can always check in our documentation the model to understand the meaning of each attribute in the payload in our ",(0,r.yg)("a",{parentName:"p",href:"https://developer.anthology.com/portal/displayApi"},"Developer Portal")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Image of the model",src:t(57657).A,width:"627",height:"383"})),(0,r.yg)("h3",{id:"using-patch-course-toc"},"Using PATCH Course TOC"),(0,r.yg)("p",null,"It is very important to remember that this patch method can only update two attributes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"allowGuests -> Defines whether or not Guests can view this TOC"),(0,r.yg)("li",{parentName:"ul"},"allowObservers -> Defines whether or not observers can view this TOC")),(0,r.yg)("p",null,"The payload looks like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'}\n  "allowGuests": true,\n  "allowObservers": true\n}\n')),(0,r.yg)("p",null,"Also, please keep in mind the following guideline:"),(0,r.yg)("p",null,"\"Updates a specific TOC entry. Only allowGuests and allowObservers flags are modifiable, the remaining fields are read-only. User should keep in mind that in order to modify such TOC fields, Course's allowGuest and allowObservers configuration must be enabled. Also, if user wants to update a TOC register's allowGuest flag and TOC is associated to a CONTENT or APPLICATION target type, Course Tool Settings must have allowGuests flag enabled. If user wants to update a TOC register's allowObserver flag and TOC is associated to an APPLICATION target type, Course Tool Settings must have allowObservers flag enabled.\""))}p.isMDXComponent=!0},55474:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/course_toc-first-image-207637e29ffbdce0ecb63675fe90a4b2.png"},1374:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/course_toc-second-image-dee8311254d4fa8dcdec3c1710a23923.png"},57657:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/course_toc-third_image-16e646f7944047023d6f281cc0f6a330.png"}}]);