"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3623],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(d,".").concat(u)]||b[u]||p[u]||o;return n?a.createElement(m,s(s({ref:t},i),{},{components:n})):a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[b]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const o={title:"Calculated Grade Snapshot Events",categories:"Standards",id:"snapshots-events",author:"Scott Hurrey",published:"",edited:""},s=void 0,c={unversionedId:"blackboard/caliper/events/snapshots-events",id:"blackboard/caliper/events/snapshots-events",title:"Calculated Grade Snapshot Events",description:"Learn's Caliper Analytics stream emits a CalculatedGradeSnapshotEvent nightly for any grade that is recalculated.",source:"@site/docs/blackboard/caliper/events/calculated-grade-snapshot-events.md",sourceDirName:"blackboard/caliper/events",slug:"/blackboard/caliper/events/snapshots-events",permalink:"/docs/blackboard/caliper/events/snapshots-events",draft:!1,editUrl:"https://github.com/blackboard/anthologydevdocs/tree/main/docs/blackboard/caliper/events/calculated-grade-snapshot-events.md",tags:[],version:"current",frontMatter:{title:"Calculated Grade Snapshot Events",categories:"Standards",id:"snapshots-events",author:"Scott Hurrey",published:"",edited:""},sidebar:"documentationSidebar",previous:{title:"Blog Events",permalink:"/docs/blackboard/caliper/events/blog-events"},next:{title:"Content Events",permalink:"/docs/blackboard/caliper/events/content-events"}},d={},l=[{value:"CalculatedGradeSnapshotEvent",id:"calculatedgradesnapshotevent",level:3},{value:"Sample Payload",id:"sample-payload",level:3}],i={toc:l},b="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(b,(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Learn's Caliper Analytics stream emits a CalculatedGradeSnapshotEvent nightly for any grade that is recalculated."),(0,r.yg)("p",null,"Here is some of the key data that is associated with these events:"),(0,r.yg)("h3",{id:"calculatedgradesnapshotevent"},"CalculatedGradeSnapshotEvent"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"object.course.courseNumber")," - the course batch_uid (i.e. the ID sent in by LIS or Data Integration)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"object.itemId")," - the primary key for the calculated grade column"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"user.id")," - contains a unique ID of the user (the ID is known to Bb)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"object.score")," - score provided"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"object.isCourseGrade")," - true if final grade"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"user.extensions")," - contains a tag called ",(0,r.yg)("strong",{parentName:"p"},"bb:user.externalId")," with the batch_uid for the user"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"action")," - Graded"),(0,r.yg)("h3",{id:"sample-payload"},"Sample Payload"),(0,r.yg)("p",null,"Here is a sample of what a payload might look like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "sensor": "54b54b42-dd02-42f8-88ed-07bd719bfb7c",\n  "sendTime": "2021-01-05T08:20:38.600Z",\n  "dataVersion": "http://purl.imsglobal.org/ctx/caliper/v1p1",\n  "data": [\n    {\n      "@context": [\n        "http://caliper.blackboard.com/ctx/caliper/v1/Context",\n        "http://purl.imsglobal.org/ctx/caliper/v1p1"\n      ],\n      "type": "http://caliper.blackboard.com/caliper/v1/CalculatedGradeSnapshotEvent",\n      "id": "54b54b42-dd02-42f8-88ed-07bd719bfb7c",\n      "actor": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/applications/learn",\n        "type": "SoftwareApplication"\n      },\n      "action": "Graded",\n      "object": {\n        "@context": [\n          "http://caliper.blackboard.com/ctx/caliper/v1/Context",\n          "http://purl.imsglobal.org/ctx/caliper/v1p1"\n        ],\n        "type": "http://caliper.blackboard.com/caliper/v1/CalculatedGrade",\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/gradableItems/_12345_1/calculatedGrade/329189703",\n        "name": "",\n        "description": "",\n        "itemId": "_12345_1",\n        "scorePossible": 100,\n        "isCourseGrade": false,\n        "syncVersion": 329189703,\n        "user": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/b1ea2fccd95144a29e5e906034e4ddee",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        },\n        "course": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/ab336626104044daab61e9a9d72ac8e2",\n          "type": "CourseOffering",\n          "extensions": {\n            "bb:course.id": "_12345_1"\n          },\n          "members": [],\n          "courseNumber": "BIO-101"\n        },\n        "extensions": {}\n      },\n      "eventTime": "2021-01-05T08:20:33.572Z",\n      "edApp": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/applications/learn",\n        "type": "SoftwareApplication"\n      },\n      "membership": {\n        "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/ab336626104044daab61e9a9d72ac8e2/members/b1ea2fccd95144a29e5e906034e4ddee",\n        "type": "Membership",\n        "extensions": {\n          "bb:course.id": "_12345_1",\n          "bb:course.externalId": "BIO-101",\n          "bb:user.id": "_12345_1",\n          "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n        },\n        "member": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/users/b1ea2fccd95144a29e5e906034e4ddee",\n          "type": "Person",\n          "extensions": {\n            "bb:user.id": "_12345_1",\n            "bb:user.externalId": "54b54b42-dd02-42f8-88ed-07bd719bfb7c"\n          }\n        },\n        "organization": {\n          "id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/54b54b42-dd02-42f8-88ed-07bd719bfb7c/courses/ab336626104044daab61e9a9d72ac8e2",\n          "type": "CourseOffering",\n          "extensions": {\n            "bb:course.id": "_12345_1"\n          },\n          "members": [],\n          "courseNumber": "BIO-101"\n        },\n        "roles": ["Learner"],\n        "status": "Active"\n      },\n      "extensions": {}\n    }\n  ]\n}\n')))}p.isMDXComponent=!0}}]);