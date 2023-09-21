"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7609],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const o={title:"Copying Courses",id:"copying-courses",categories:"Learn Rest",published:"2023-09-19",edited:"2023-09-19",author:"Mark Kauffman, Mark O'Neil"},i=void 0,s={unversionedId:"rest-apis/learn/working-with-learn-apis/copying-courses",id:"rest-apis/learn/working-with-learn-apis/copying-courses",title:"Copying Courses",description:"Notes:",source:"@site/docs/rest-apis/learn/working-with-learn-apis/copying-courses.md",sourceDirName:"rest-apis/learn/working-with-learn-apis",slug:"/rest-apis/learn/working-with-learn-apis/copying-courses",permalink:"/docs/rest-apis/learn/working-with-learn-apis/copying-courses",draft:!1,tags:[],version:"current",frontMatter:{title:"Copying Courses",id:"copying-courses",categories:"Learn Rest",published:"2023-09-19",edited:"2023-09-19",author:"Mark Kauffman, Mark O'Neil"},sidebar:"documentationSidebar",previous:{title:"Using Attendance APIs",permalink:"/docs/rest-apis/learn/working-with-learn-apis/attendance"},next:{title:"Using Table of Contents in Original course view",permalink:"/docs/rest-apis/learn/working-with-learn-apis/course-toc"}},l={},c=[{value:"Topic",id:"topic",level:2},{value:"1. POST to the course copy endpoint.",id:"1-post-to-the-course-copy-endpoint",level:2},{value:"Best Practices",id:"best-practices",level:3},{value:"Example",id:"example",level:3},{value:"2. Poll the Location tasks endpoint.",id:"2-poll-the-location-tasks-endpoint",level:2},{value:"Best Practices",id:"best-practices-1",level:3},{value:"Example",id:"example-1",level:3},{value:"3. (Optional) PATCH to update the copied course",id:"3-optional-patch-to-update-the-copied-course",level:2},{value:"Example",id:"example-2",level:3},{value:"General Best Practices",id:"general-best-practices",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=p("VersioningTracker"),d=p("AuthorBox"),m={toc:c},h="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(u,{frontMatter:o,mdxType:"VersioningTracker"}),(0,n.kt)("h1",{id:"using-learn-public-rest-apis-to-copy-courses"},"Using Learn Public REST APIs to Copy Courses"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notes:  "),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"The Learn Course Copy APIs work the same for either Original or Ultra course experiences. "),(0,n.kt)("li",{parentName:"ul"},"Learn Public REST APIs are documented at https;//developer.anthology.com/portal/displayAPI/Learn "),(0,n.kt)("li",{parentName:"ul"},"Information on System Administrators is not generally available via Public REST APIs, thus it is a Best Practice for Learn Administrators who are teaching or taking courses be enrolled using a non-Admininistrator Role privileged user. "))),(0,n.kt)("h2",{id:"topic"},"Topic"),(0,n.kt)("p",null,"This document covers General API Use and Best Practices to meet use cases for using the Learn REST APIs to copy courses. "),(0,n.kt)("p",null,"We strongly recommended you follow the Best Practices outlined below. "),(0,n.kt)("h1",{id:"general-api-use"},"General API Use"),(0,n.kt)("p",null,"Details follow below but in general, the workflow for copying a course consists of: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"POST to the course copy endpoint. "),(0,n.kt)("li",{parentName:"ol"},"Poll via GET to the Location task endpiont that was returned in the header of the course copy response. Wait for a response other than 200. This is so that when you attempt to update the copied course with step #3 that the copy has completed."),(0,n.kt)("li",{parentName:"ol"},"PATCH to update the copied course's externaId, name, description, dates, and any other values that are to be different for the copied course. Any of these values are optional to update, but the copied course won't look any different to the instructor as the copied course is an EXACT copy of the source course except for the courseId.")),(0,n.kt)("p",null,"DO NOT POST to UPDATE THE COPIED COURSE UNTIL CERTAIN THE COPY IS COMPLETE VIA STEP #2 ABOVE.   "),(0,n.kt)("p",null,"The below sections further elaborate on each of the above steps. "),(0,n.kt)("h2",{id:"1-post-to-the-course-copy-endpoint"},"1. POST to the course copy endpoint."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"POST /learn/api/public/v2/courses/:courseId/copy")," "),(0,n.kt)("h3",{id:"best-practices"},"Best Practices"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Keep track of your copy requests and the Location header in the response from each. You will need the Location to monitor the status of the copy as the course copy will take time. It is not immediate.")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"POST /learn/api/public/v2/courses/courseId:mbk-original-template/copy"),"\nBody: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "targetCourse": {\n    "courseId": "mbk-original-target2"\n  },\n  "copy": {\n    "adaptiveReleaseRules": "true",\n    "announcements": "true",\n    "assessments": "true",\n    "blogs": "true",\n    "calendar": "true",\n    "contacts": "true",\n    "contentAlignments": "true",\n    "contentAreas": "true",\n    "discussions": "ForumsAndStarterPosts",\n    "glossary": "true",\n    "gradebook": "true",\n    "groupSettings": "true",\n    "journals": "true",\n    "retentionRules": "true",\n    "rubrics": "true",\n    "settings": {\n      "availability": "true",\n      "bannerImage": "true",\n      "duration": "true",\n      "enrollmentOptions": "true",\n      "guestAccess": "true",\n      "languagePack": "true",\n      "navigationSettings": "true",\n      "observerAccess": "true"\n    },\n    "tasks": "true",\n    "wikis": "true"\n  }\n}\n')),(0,n.kt)("p",null,"will return all \u2018{}\u2019 and the response Location header might look like ",(0,n.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/courses/_12_1/tasks/_127_1"),". "),(0,n.kt)("p",null,"You may now proceed to step 2 and query the given tasks endpoint. "),(0,n.kt)("h2",{id:"2-poll-the-location-tasks-endpoint"},"2. Poll the Location tasks endpoint."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/{courseId}/tasks/{taskId}")," "),(0,n.kt)("h3",{id:"best-practices-1"},"Best Practices"),(0,n.kt)("p",null,"If task is complete this endpoint will return a 303 SEE OTHER with a Location header providing a URI to the GET Course endpoint. Statistical data shows that the average copy task duration is under a second. However, very large courses can take several minutes. Also important to note is that these background tasks can potentially be queued behind other system tasks therefore prolonging the time a task stays in the Queued status. We recommend that this endpoint be polled every 60 seconds while waiting for a Course copy to complete."),(0,n.kt)("p",null,"Experience is that some operations - such as managing memberships - may be handled before full copy completion\u2026 which can dramatically improve integration performance. Typically you can start to work with the copied course around 15% completion\u2026 the remaining 85% is around copying content, discussions and so on."),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/_12_1/tasks/_127_1")),(0,n.kt)("h2",{id:"3-optional-patch-to-update-the-copied-course"},"3. (Optional) PATCH to update the copied course"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"PATCH /learn/api/public/v3/courses/{courseId}")),(0,n.kt)("h3",{id:"example-2"},"Example"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"PATCH https://kauffman390071b2.ddns.net/learn/api/public/v2/courses/_12_1"),"\nBody:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "externalId": "mbk-original-target2",\n  "name": "mbk-original-target2",\n  "description": "my copied course"\n}\n')),(0,n.kt)("h1",{id:"best-practices-2"},"Best Practices"),(0,n.kt)("h2",{id:"general-best-practices"},"General Best Practices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn System Administrators should be enrolled in courses only using a non-Admin enabled user. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"System Administrator information is generally only available to 3LO Administrator requests. "))),(0,n.kt)("li",{parentName:"ul"},"Always monitor your API usage using the x-header information returned on non-oauth requests ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Details on rate_limits and x-headers are available ",(0,n.kt)("a",{parentName:"li",href:"https://docs.anthology.com/docs/developer-portal/production-groups-rest-api-and-site-registration-limits#rest-api-calls-limit"},"here"),". "))),(0,n.kt)("li",{parentName:"ul"},"Not all data operations are best done JIT.\nSome operations, such as backfilling data warehouses or refreshing caches are best done during off-peak Learn hours. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'JIT calling or repeatedly calling for the same "static" data is inefficient. '),(0,n.kt)("li",{parentName:"ul"},"Checking whether a student is still in a course or getting their course grades are reasonable JIT activities as that is data that may change between now and their last access. "))),(0,n.kt)("li",{parentName:"ul"},"Cache infrequently changed or \u201cstatic\u201d data and refresh periodically. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This reduces repetitive calls.  "),(0,n.kt)("li",{parentName:"ul"},"This reduces integration performance impact. "),(0,n.kt)("li",{parentName:"ul"},"Don\u2019t JIT retrieve ALL Courses for example as that data changes infrequently. Instead do this once and then periodically retrieve course data created or modified since you last request. "))),(0,n.kt)("li",{parentName:"ul"},'Always "optimize" your requests.',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"reduce your \u201csearch\u201d criteria to as small a set of data as possible. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This limits the number of pages of returned data set. "),(0,n.kt)("li",{parentName:"ul"},"E.g. use ",(0,n.kt)("inlineCode",{parentName:"li"},"?dataSourceId=")," to reduce your search to objects created using a specific DSK and follow caching practices. "))),(0,n.kt)("li",{parentName:"ul"},"Use the fields parameter to reduce the returned data set to only data points you require. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This limits the data transmitted and system load "))))),(0,n.kt)("li",{parentName:"ul"},"Always try to logically bound your requests or before acting on request results ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Check if dates are within bounds "),(0,n.kt)("li",{parentName:"ul"},"Check if attempts exist of if items are graded "),(0,n.kt)("li",{parentName:"ul"},"Check availability ")))),(0,n.kt)(d,{frontMatter:o,mdxType:"AuthorBox"}))}k.isMDXComponent=!0}}]);