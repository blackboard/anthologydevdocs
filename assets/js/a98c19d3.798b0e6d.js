"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[9822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"Data types for contentHandler",id:"content-handler",categories:"Learn REST",published:"",edited:"",author:"Ryan Haber"},i=void 0,o={unversionedId:"blackboard/rest-apis/advanced/content-handler",id:"blackboard/rest-apis/advanced/content-handler",title:"Data types for contentHandler",description:"Learn's /contents endpoints accommodate different types of content",source:"@site/docs/blackboard/rest-apis/advanced/contenthandler-datatypes.md",sourceDirName:"blackboard/rest-apis/advanced",slug:"/blackboard/rest-apis/advanced/content-handler",permalink:"/docs/blackboard/rest-apis/advanced/content-handler",draft:!1,editUrl:"https://github.com/OneComputerGuy/anthologydevdocs/tree/main/docs/blackboard/rest-apis/advanced/contenthandler-datatypes.md",tags:[],version:"current",frontMatter:{title:"Data types for contentHandler",id:"content-handler",categories:"Learn REST",published:"",edited:"",author:"Ryan Haber"},sidebar:"documentationSidebar",previous:{title:"BbML",permalink:"/docs/blackboard/rest-apis/advanced/bbml"},next:{title:"Dynamic Rendering with Template Variables",permalink:"/docs/blackboard/rest-apis/advanced/dynamic-rendering"}},s={},u=[{value:"resource/x-bb-document",id:"resourcex-bb-document",level:3},{value:"resource/x-bb-externallink",id:"resourcex-bb-externallink",level:3},{value:"resource/x-bb-folder",id:"resourcex-bb-folder",level:3},{value:"resource/x-bb-courselink",id:"resourcex-bb-courselink",level:3},{value:"resource/x-bb-forumlink",id:"resourcex-bb-forumlink",level:3},{value:"resource/x-bb-blti-link",id:"resourcex-bb-blti-link",level:3},{value:"resource/x-bb-file",id:"resourcex-bb-file",level:3},{value:"resource/x-bb-asmt-test-link",id:"resourcex-bb-asmt-test-link",level:3},{value:"resource/x-bb-assignment",id:"resourcex-bb-assignment",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Learn's ",(0,a.kt)("inlineCode",{parentName:"p"},"/contents")," endpoints accommodate different types of content\nby using different handlers. Use the contentHandler field of requests and\nresponses to indicate which content handler should be used. Available\ncontentHandlers their uses are summarized below."),(0,a.kt)("p",null,"Supported handlers include:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"contentHandler ID"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported since"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#resourcex-bb-document"},"resource/x-bb-document")),(0,a.kt)("td",{parentName:"tr",align:null},"(Original) base document type, consists of rich text with an associated title",(0,a.kt)("br",null),"(Ultra) basic content item"),(0,a.kt)("td",{parentName:"tr",align:null},"3000.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#resourcex-bb-externallink"},"resource/x-bb-externallink")),(0,a.kt)("td",{parentName:"tr",align:null},"external link"),(0,a.kt)("td",{parentName:"tr",align:null},"3000.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#resourcex-bb-folder"},"resource/x-bb-folder")),(0,a.kt)("td",{parentName:"tr",align:null},"document that has child documents"),(0,a.kt)("td",{parentName:"tr",align:null},"3000.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#resourcex-bb-courselink"},"resource/x-bb-courselink")),(0,a.kt)("td",{parentName:"tr",align:null},"link to a Blackboard course"),(0,a.kt)("td",{parentName:"tr",align:null},"3100.5.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#resourcex-bb-forumlink"},"resource/x-bb-forumlink")),(0,a.kt)("td",{parentName:"tr",align:null},"link to a discussion object"),(0,a.kt)("td",{parentName:"tr",align:null},"3100.6.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#resourcex-bb-blti-link"},"resource/x-bb-blti-link")),(0,a.kt)("td",{parentName:"tr",align:null},"link to an LTI object"),(0,a.kt)("td",{parentName:"tr",align:null},"3200.6.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#resourcex-bb-file"},"resource/x-bb-file")),(0,a.kt)("td",{parentName:"tr",align:null},"represents a file object within Learn"),(0,a.kt)("td",{parentName:"tr",align:null},"3200.6.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#resourcex-bb-asmt-test-link"},"resource/x-bb-asmt-test-link")),(0,a.kt)("td",{parentName:"tr",align:null},"(Ultra only) Ultra assignment or test object"),(0,a.kt)("td",{parentName:"tr",align:null},"3300.5.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#resourcex-bb-assignment"},"resource/x-bb-assignment")),(0,a.kt)("td",{parentName:"tr",align:null},"(Original only)"),(0,a.kt)("td",{parentName:"tr",align:null},"3400.9.0")))),(0,a.kt)("h3",{id:"resourcex-bb-document"},"resource/x-bb-document"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Original experience"),": Base content type consisting of rich text with an associated title."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ultra"),": represents the body of an Ultra document object. It must be the child of a resource/x-bb-folder content item for which isBbPage=true.")),(0,a.kt)("h3",{id:"resourcex-bb-externallink"},"resource/x-bb-externallink"),(0,a.kt)("p",null,"Link to an external resource. It has the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id (string, read-only) of the object in Learn"),(0,a.kt)("li",{parentName:"ul"},"url (string) of the external resource")),(0,a.kt)("h3",{id:"resourcex-bb-folder"},"resource/x-bb-folder"),(0,a.kt)("p",null,"Content item that contains child content items. It has the following\nproperties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id (string, read-only) of the object in Learn"),(0,a.kt)("li",{parentName:"ul"},"isBbPage (boolean) whether the object represents a page in its own right")),(0,a.kt)("h3",{id:"resourcex-bb-courselink"},"resource/x-bb-courselink"),(0,a.kt)("p",null,"Content item with a link to other objects within Learn. It has the\nfollowing properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id (string, read-only) of the object in Learn"),(0,a.kt)("li",{parentName:"ul"},"targetId (string) of the linked Learn object"),(0,a.kt)("li",{parentName:"ul"},"targetType (string) is the Blackboard object type of the linked object. Possible values include:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Unset"),(0,a.kt)("li",{parentName:"ul"},"CourseAssessment"),(0,a.kt)("li",{parentName:"ul"},"CourseTOC"),(0,a.kt)("li",{parentName:"ul"},"Forum"),(0,a.kt)("li",{parentName:"ul"},"Tool"),(0,a.kt)("li",{parentName:"ul"},"CollabSession (deprecated since 3000.1.0)"),(0,a.kt)("li",{parentName:"ul"},"Group"),(0,a.kt)("li",{parentName:"ul"},"BlogJournal"),(0,a.kt)("li",{parentName:"ul"},"StaffInfo"),(0,a.kt)("li",{parentName:"ul"},"ModulePage")))),(0,a.kt)("h3",{id:"resourcex-bb-forumlink"},"resource/x-bb-forumlink"),(0,a.kt)("p",null,"Content item with a link to a discussion object. It has the following\nproperties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id (string, read-only) of the object in Learn"),(0,a.kt)("li",{parentName:"ul"},"discussionId (string) for the discussion object in Learn")),(0,a.kt)("h3",{id:"resourcex-bb-blti-link"},"resource/x-bb-blti-link"),(0,a.kt)("p",null,"Representation of an LTI link within course content. It has the following\nproperties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id (string, read-only) of the object in Learn"),(0,a.kt)("li",{parentName:"ul"},"url (string) of the the LTI link"),(0,a.kt)("li",{parentName:"ul"},"customParameters is a map of custom parameters to POST to the specified launch URL. Learn serializes the entire custom parameters map, so you should specify all custom parameters when the map is changed.")),(0,a.kt)("h3",{id:"resourcex-bb-file"},"resource/x-bb-file"),(0,a.kt)("p",null,"Representation of a file uploaded to course content."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id (string, read-only) of the object in Learn"),(0,a.kt)("li",{parentName:"ul"},"file is an object with the following properties:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"uploadId (string, read-only) is the system-assigned ID of the uploaded file"),(0,a.kt)("li",{parentName:"ul"},"fileName (string) is the name of the file"),(0,a.kt)("li",{parentName:"ul"},"mimeType (string, read-only) is the MIME type. Learn uses IANA standards to assign MIME type based on the filename extension."),(0,a.kt)("li",{parentName:"ul"},"duplicateFileHandling (string, optional) used to describe behavior when a file is uploaded that duplicates an existing filename. Options include:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Rename (default) causes the new file with the duplicate name to be renamed."),(0,a.kt)("li",{parentName:"ul"},"Replace causes the new file to replace the earlier file with the same name."),(0,a.kt)("li",{parentName:"ul"},"ThrowError causes Learn to throw an error.")))))),(0,a.kt)("h3",{id:"resourcex-bb-asmt-test-link"},"resource/x-bb-asmt-test-link"),(0,a.kt)("p",null,"(Ultra experience only) Representation of an assignment/test link object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id (string, read-only) of the object in Learn"),(0,a.kt)("li",{parentName:"ul"},"assessmentId (string) is the ID of the associated assessment"),(0,a.kt)("li",{parentName:"ul"},"gradeColumnId (string) is the ID of the associated grade column")),(0,a.kt)("h3",{id:"resourcex-bb-assignment"},"resource/x-bb-assignment"),(0,a.kt)("p",null,"(Original experience only)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id (string, read-only) of the object in Learn"),(0,a.kt)("li",{parentName:"ul"},"gradeColumnId (string, read only) ID of the associated grade column"),(0,a.kt)("li",{parentName:"ul"},"groupContent (boolean) specifies whether or not the content is group content.")))}p.isMDXComponent=!0}}]);