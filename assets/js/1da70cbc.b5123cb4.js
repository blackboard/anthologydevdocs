"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[8526],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>p});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=r.createContext({}),m=function(e){var t=r.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(g.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(a),y=n,p=d["".concat(g,".").concat(y)]||d[y]||s[y]||l;return a?r.createElement(p,i(i({ref:t},u),{},{components:a})):r.createElement(p,i({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},67504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(58168),n=(a(96540),a(15680));const l={title:"Dynamic Rendering with Template Variables",categories:"Learn rest",id:"dynamic-rendering",published:"",edited:"",author:"Scott Hurrey"},i=void 0,o={unversionedId:"blackboard/rest-apis/advanced/dynamic-rendering",id:"blackboard/rest-apis/advanced/dynamic-rendering",title:"Dynamic Rendering with Template Variables",description:"Using template variables you can create URLs to integrate with other systems by including information about the user's context.",source:"@site/docs/blackboard/rest-apis/advanced/dynamic-rendering-with-template-variables.md",sourceDirName:"blackboard/rest-apis/advanced",slug:"/blackboard/rest-apis/advanced/dynamic-rendering",permalink:"/docs/blackboard/rest-apis/advanced/dynamic-rendering",draft:!1,editUrl:"https://github.com/blackboard/anthologydevdocs/tree/main/docs/blackboard/rest-apis/advanced/dynamic-rendering-with-template-variables.md",tags:[],version:"current",frontMatter:{title:"Dynamic Rendering with Template Variables",categories:"Learn rest",id:"dynamic-rendering",published:"",edited:"",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"Data types for contentHandler",permalink:"/docs/blackboard/rest-apis/advanced/content-handler"},next:{title:"SOAP-to-REST",permalink:"/docs/blackboard/rest-apis/advanced/soap-to-rest"}},g={},m=[{value:"Using context variables",id:"using-context-variables",level:2}],u={toc:m},d="wrapper";function s(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Using template variables you can create URLs to integrate with other systems by including information about the user's context."),(0,n.yg)("p",null,"Template variables are represented by a series of values given the special syntax: @",(0,n.yg)("a",{parentName:"p",href:"mailto:X@object.attribute"},"X@object.attribute"),"@X@. These variables are expanded when rendered into their corresponding values. Within the UI, they can be used in portal modules and within the body of content items in courses."),(0,n.yg)("p",null,"Note that not all of these variables will resolve on all pages. For example, if the page is not inside a course, there will be no course-related variables available."),(0,n.yg)("h2",{id:"using-context-variables"},"Using context variables"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Context item"),(0,n.yg)("th",{parentName:"tr",align:null},"Context variable"),(0,n.yg)("th",{parentName:"tr",align:null},"Example output"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User external person key"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.batch_uid"},"X@user.batch_uid"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"123-45-6789")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User username (user id)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.id"},"X@user.id"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"jsmith")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User student_id (student id)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.student_id"},"X@user.student_id"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"jsmith")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User full name"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.full_name"},"X@user.full_name"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"John Smith")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User primary key identifier"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.pk_string"},"X@user.pk_string"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"_","521_1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User locale"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.locale"},"X@user.locale"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"en_GB")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User system role(s)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.role"},"X@user.role"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"System Roles:",(0,n.yg)("br",null),(0,n.yg)("em",{parentName:"td"}," C- Course Administrator",(0,n.yg)("br",null))," U- Guest",(0,n.yg)("br",null),(0,n.yg)("em",{parentName:"td"}," N- None",(0,n.yg)("br",null))," O- Observer",(0,n.yg)("br",null),(0,n.yg)("em",{parentName:"td"}," Y- Community Administrator",(0,n.yg)("br",null))," R- Support",(0,n.yg)("br",null),(0,n.yg)("em",{parentName:"td"}," Z- System Admin",(0,n.yg)("br",null))," H- System Support",(0,n.yg)("br",null),"*"," A- User Administrator")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User primary institution role"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.institution_role"},"X@user.institution_role"),"@X@",(0,n.yg)("br",null),"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.primary_institution_role"},"X@user.primary_institution_role"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"student")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User secondary institution role(s)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.secondary_institution_role"},"X@user.secondary_institution_role"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"student,faculty")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User company (as of 3900.34)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.company"},"X@user.company"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"Anthology")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User institution email (as of 3900.34)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.email.institution_email"},"X@user.email.institution_email"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"mailto:john.smith@anthology.com"},"john.smith@anthology.com"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User other name (as of 3900.34)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.name.other"},"X@user.name.other"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"Johnie")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User title (as of 3900.34)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.name.title"},"X@user.name.title"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"Dr.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User mobile phone (as of 3900.34)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.mobile_phone"},"X@user.mobile_phone"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"0-123-456-7890")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"User website (as of 3900.34)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@user.website"},"X@user.website"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://smithjohn.anthology.com"},"https://smithjohn.anthology.com"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Course membership role"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@membership.role"},"X@membership.role"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"Course/Organization Roles:",(0,n.yg)("br",null),(0,n.yg)("em",{parentName:"td"}," B- Course Builder/Organization Builder",(0,n.yg)("br",null))," G- Grader/Grader",(0,n.yg)("br",null),(0,n.yg)("em",{parentName:"td"}," U- Guest/Guest",(0,n.yg)("br",null))," P- Instructor/Leader",(0,n.yg)("br",null),(0,n.yg)("em",{parentName:"td"}," S- Student/Participant",(0,n.yg)("br",null))," T- Teacher's Assistant/Assistant")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Course external course key"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.batch_uid"},"X@course.batch_uid"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"ABC123ABC")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Course course id"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.id"},"X@course.id"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"BIO101")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Course name"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.course_name"},"X@course.course_name"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"Introduction to Concepts in Biology")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Course primary key identifier"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.pk_string"},"X@course.pk_string"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"_","12344_1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Course URL"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.url"},"X@course.url"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"/courses/1/BIO101/")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Course membership role"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.role"},"X@course.role"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"student")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Course locale (As of 3900.32)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.locale"},"X@course.locale"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"en_US")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Institution hierarchy nodes (As of 3900.32 ",(0,n.yg)("em",{parentName:"td"},"use with caution. The output can be a long list that might affect an LTI launch."),")"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.ih_nodes"},"X@course.ih_nodes"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"db75df7b-04e8-4d3c-b7f9-7f1371a3f325,fb11e84b-ff7f-44ab-bf77-89299b053232")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Institution primary node (As of 3900.32)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.ih_primary_node"},"X@course.ih_primary_node"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"fb11e84b-ff7f-44ab-bf77-89299b053232")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Is it an Ultra course? (As of 3900.32)"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.ultra_status"},"X@course.ultra_status"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Content primary key identifier"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@content.id"},"X@content.id"),"@X@",(0,n.yg)("br",null),"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@content.pk_string"},"X@content.pk_string"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"_","23_1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Content URL"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@content.url"},"X@content.url"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"/courses/1/BOB101/content/","_","221_1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Request ",(0,n.yg)("a",{parentName:"td",href:"https://www.opengroup.org/onlinepubs/009629399/apdxa.htm"},"UUID")),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@request.id"},"X@request.id"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Request locale"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@request.locale"},"X@request.locale"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Request return URL"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@request.return"},"X@request.return"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"System host name"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@system.site_id"},"X@system.site_id"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Raw course id"),(0,n.yg)("td",{parentName:"tr",align:null},"@",(0,n.yg)("a",{parentName:"td",href:"mailto:X@course.raw_course_id"},"X@course.raw_course_id"),"@X@"),(0,n.yg)("td",{parentName:"tr",align:null},"Returns the course.getCourseId() for the current course ignoring the rule that a student is supposed to see the id of the course they are actually enrolled in. Effectively gives the parent course ID to a student LTI launch from the parent of a cross listed corse, not the child section course ID the are enrolled in.")))))}s.isMDXComponent=!0}}]);