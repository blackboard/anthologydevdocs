"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[5340],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return t?i.createElement(b,o(o({ref:n},d),{},{components:t})):i.createElement(b,o({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const r={title:"Working with Rubrics APIs",id:"rubrics-apis",categories:"Learn REST Working-with APIs Rubrics",published:"2023-10-20",edited:"2023-10-20",author:"Mark O'Neil"},o=void 0,l={unversionedId:"blackboard/rest-apis/hands-on/rubrics-apis",id:"blackboard/rest-apis/hands-on/rubrics-apis",title:"Working with Rubrics APIs",description:"Tested with Blackboard Learn version 3900.69.0",source:"@site/docs/blackboard/rest-apis/hands-on/rubrics.md",sourceDirName:"blackboard/rest-apis/hands-on",slug:"/blackboard/rest-apis/hands-on/rubrics-apis",permalink:"/docs/blackboard/rest-apis/hands-on/rubrics-apis",draft:!1,editUrl:"https://github.com/OneComputerGuy/anthologydevdocs/tree/main/docs/blackboard/rest-apis/hands-on/rubrics.md",tags:[],version:"current",frontMatter:{title:"Working with Rubrics APIs",id:"rubrics-apis",categories:"Learn REST Working-with APIs Rubrics",published:"2023-10-20",edited:"2023-10-20",author:"Mark O'Neil"},sidebar:"documentationSidebar",previous:{title:"Working with groups and the API",permalink:"/docs/blackboard/rest-apis/hands-on/groups-in-rest-api"},next:{title:"Use APIs to Merge and Cross-list Courses",permalink:"/docs/blackboard/rest-apis/advanced/crosslist-courses"}},s={},u=[{value:"Topic",id:"topic",level:2},{value:"General API Use",id:"general-api-use",level:2},{value:"Rubrics used by a course",id:"rubrics-used-by-a-course",level:3},{value:"1. Starting with an identified course",id:"1-starting-with-an-identified-course",level:4},{value:"2. Starting with an identified gradebook column",id:"2-starting-with-an-identified-gradebook-column",level:4},{value:"A known column:",id:"a-known-column",level:5},{value:"A known rubricId",id:"a-known-rubricid",level:5},{value:"Rubric Details",id:"rubric-details",level:3},{value:"Rubrics Evaluations",id:"rubrics-evaluations",level:3},{value:"Attempts",id:"attempts",level:4},{value:"Evaluations",id:"evaluations",level:4},{value:"Entitlements and System Role Privileges",id:"entitlements-and-system-role-privileges",level:2},{value:"Necessary Entitlements",id:"necessary-entitlements",level:3},{value:"Read Rubrics",id:"read-rubrics",level:4},{value:"Read Associations",id:"read-associations",level:4},{value:"Read Evaluations, and Columns and Attempts",id:"read-evaluations-and-columns-and-attempts",level:4},{value:"Necessary Role Privileges",id:"necessary-role-privileges",level:3},{value:"Read Rubrics",id:"read-rubrics-1",level:4},{value:"Read Associations",id:"read-associations-1",level:4},{value:"Read Evaluations, and Columns and Attempts",id:"read-evaluations-and-columns-and-attempts-1",level:4},{value:"Rubrics APIs Best Practices",id:"rubrics-apis-best-practices",level:2}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tested with Blackboard Learn version 3900.69.0")),(0,a.kt)("h2",{id:"topic"},"Topic"),(0,a.kt)("p",null,"Learn supports the use of Rubrics to provide consistency in grading which\xa0enhances the consistency, transparency, and fairness\xa0for assessing student work."),(0,a.kt)("p",null,"Our Public APIs support the reading of Rubric information and enables the development of analytic tooling for validating rubrics use and fine-tuning the adoption of rubrics."),(0,a.kt)("h2",{id:"general-api-use"},"General API Use"),(0,a.kt)("p",null,"There are several use cases supported by our Rubrics APIs and they share a common workflow. Some use cases are determining:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"which, if any, Rubric(s) a course is using."),(0,a.kt)("li",{parentName:"ul"},"the details of a specific Rubric."),(0,a.kt)("li",{parentName:"ul"},"the selected Rubric cells used for a grade."),(0,a.kt)("li",{parentName:"ul"},"the feedback provided on the rubric selection and graded item.")),(0,a.kt)("p",null,"The general workflow for using rubrics is based on the goal of the use case, but goes something like this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get the courseId",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Use appropriate Get ",(0,a.kt)("inlineCode",{parentName:"li"},"/courses")," API"))),(0,a.kt)("li",{parentName:"ol"},"Get the rubricId",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Use appropriate Get ",(0,a.kt)("inlineCode",{parentName:"li"},"/courses/rubric")," API"))),(0,a.kt)("li",{parentName:"ol"},"Get the rubric to gradebookColumnId association(s)",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Use appropriate get ",(0,a.kt)("inlineCode",{parentName:"li"},"/courses/rubric/associations")," api"))),(0,a.kt)("li",{parentName:"ol"},"Get the attempt rubric evaluation:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"/courses/gradebook/attempt")," API"),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"/courses/gradebook/attempts/rubric/evaluations")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"/courses/rubric/associations/evaluations")," API")))),(0,a.kt)("p",null,"The API you use in the above steps is largely determined by data previously collected. In all cases you will need the courseId - additional Ids are discovered as part of the work flow supporting the use case."),(0,a.kt)("p",null,"Let's look at each of the steps assuming you have already completed step 1 and identified the course of interest."),(0,a.kt)("h3",{id:"rubrics-used-by-a-course"},"Rubrics used by a course"),(0,a.kt)("p",null,"Not all courses may be using rubrics as part of their grading process. Identifying whether a course is using rubrics is straight forward."),(0,a.kt)("p",null,"You may discover rubrics use either via the courseId alone or via a gradebookColumnId."),(0,a.kt)("h4",{id:"1-starting-with-an-identified-course"},"1. Starting with an identified course"),(0,a.kt)("p",null,"Assuming a courseId of ",(0,a.kt)("inlineCode",{parentName:"p"},"_12345_1")," you would call the Get Rubrics endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/{courseId}/rubrics"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/_12345_1/rubrics")),(0,a.kt)("p",null,"which would either return Rubric(s) information or an empty set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "id": "_11964_1",\n      "courseId": "_12345_1",\n      "title": "DEMO-RUBRIC",\n      "created": "2023-10-03T18:55:23.332Z",\n      "modified": "2023-10-03T18:55:23.332Z",\n      "rubricType": "Percentage",\n      "readOnly": false\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "results": [] }\n')),(0,a.kt)("p",null,"In the above results ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"rubricId")," - this should be noted as it and the ",(0,a.kt)("inlineCode",{parentName:"p"},"courseId")," are used in ",(0,a.kt)("em",{parentName:"p"},"nearly")," every rubrics API request. A course may be using multiple rubrics and the rubicId is used to differentiate between them."),(0,a.kt)("p",null,"For example once you know the rubricId for a rubric used by a course you may call ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}")," to request a specific rubric."),(0,a.kt)("h4",{id:"2-starting-with-an-identified-gradebook-column"},"2. Starting with an identified gradebook column"),(0,a.kt)("p",null,"Step 1 helps identify whether a course is potentially using rubrics, but it does not tell us if the instructor has a gradeable item using a rubric. The next step is to determine if the rubric has been applied to a gradeable item or ",(0,a.kt)("inlineCode",{parentName:"p"},"gradeColumn"),"."),(0,a.kt)("p",null,"There are a couple ways of determining this. You may get get a course's grade columns and inspect the following elements which will exist if a rubric is being used, the ",(0,a.kt)("inlineCode",{parentName:"p"},"gradebookColumnId")," associated, and whether it is currently being ",(0,a.kt)("inlineCode",{parentName:"p"},"usedForGrading"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results": [\n        {\n            ...\n            "rubricAssociations": [\n                {\n                    "id": "string",\n                    "rubricId": "string",\n                    "associationEntity": {\n                        "gradebookColumnId": "string",\n                        "questionId": "string"\n                    },\n                    "usedForGrading": true,\n                    ...\n                }\n            ]\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"You may also use the Rubric associations APIs to determine the columns in the course which have rubrics applied as shown below."),(0,a.kt)("h5",{id:"a-known-column"},"A known column:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/rubrics/associations\n"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/courses/_12594_1/gradebook/columns/_120127_1/rubrics/associations\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results" : [\n        {\n            "id" : "_15388_1",\n            "rubricId" : "_11964_1",\n            "associationEntity" : {\n                "gradebookColumnId" : "_120127_1"\n            },\n            "usedForGrading" : true,\n            "rubricVisibility" : "Enabled",\n            ...\n        }\n    ]\n}\n')),(0,a.kt)("h5",{id:"a-known-rubricid"},"A known rubricId"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/courses/_12594_1/rubrics/_11964_1/associations")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results" : [\n        {\n            "id" : "_15388_1",\n            "rubricId" : "_11964_1",\n            "associationEntity" : {\n                "gradebookColumnId" : "_120127_1"\n            },\n            "usedForGrading" : true,\n            "rubricVisibility" : "Enabled",\n            ...\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"Notice the same data is returned regardless of the endpoint used - the difference is the data which you had on hand to make the request."),(0,a.kt)("p",null,"Of note in each of the above results examples is the ",(0,a.kt)("inlineCode",{parentName:"p"},'"gradebookColumnId": "string",')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"rubricId" : "_11964_1",')," which will be required for further investigation into rubrics use and most importantly the applied evaluations which used the rubric."),(0,a.kt)("p",null,"Additionally the associationId or id in the get /associations results is used in evaluations requests."),(0,a.kt)("p",null,"The pertinent data we have collected thus far on our rubric quest is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"courseId":"_1234_1')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"rubricId": "_11964_1"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"gradebookColumnId": "_120127_1"')),(0,a.kt)("li",{parentName:"ul"},"and ",(0,a.kt)("inlineCode",{parentName:"li"},'"associationId": "_15388_1"'))),(0,a.kt)("p",null,"With the above derived information you now know which rubric(s) a course is using and which columns are using which rubric."),(0,a.kt)("h3",{id:"rubric-details"},"Rubric Details"),(0,a.kt)("p",null,"Using the above information you may also pull the full rubric details by expanding the ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}")," to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"cells, columns, and rows"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/courses/_12594_1/rubrics/_11964_1?expand=cells,columns,rows")),(0,a.kt)("p",null,"Results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "_11964_1",\n  "courseId": "_12594_1",\n  "title": "Demo-Rubric",\n  "description": "Created via the Original Rubric UI",\n  "created": "2023-10-13T12:24:10.696Z",\n  "modified": "2023-10-13T12:27:18.899Z",\n  "rubricType": "Percentage",\n  "readOnly": false,\n  "columns": [\n    {\n      "id": "_43512_1",\n      "header": "Novice 1",\n      "position": 0\n    },\n    {\n      "id": "_43513_1",\n      "header": "Competent 2",\n      "position": 1\n    },\n    {\n      "id": "_43514_1",\n      "header": "Proficient 3",\n      "position": 2\n    }\n  ],\n  "rows": [\n    {\n      "id": "_45496_1",\n      "header": "Formatting A",\n      "position": 0,\n      "percentage": 33.0\n    },\n    {\n      "id": "_45497_1",\n      "header": "Organization B",\n      "position": 1,\n      "percentage": 34.0\n    },\n    {\n      "id": "_45498_1",\n      "header": "Grammar C",\n      "position": 2,\n      "percentage": 33.0\n    }\n  ],\n  "cells": [\n    {\n      "id": "_168718_1",\n      "rowId": "_45496_1",\n      "columnId": "_43512_1",\n      "description": "",\n      "rowPosition": 0,\n      "columnPosition": 0,\n      "percentage": {\n        "value": 0.0\n      }\n    },\n    {\n      "id": "_168719_1",\n      "rowId": "_45496_1",\n      "columnId": "_43513_1",\n      "description": "",\n      "rowPosition": 0,\n      "columnPosition": 1,\n      "percentage": {\n        "value": 50.0\n      }\n    },\n    {\n      "id": "_168720_1",\n      "rowId": "_45496_1",\n      "columnId": "_43514_1",\n      "description": "",\n      "rowPosition": 0,\n      "columnPosition": 2,\n      "percentage": {\n        "value": 100.0\n      }\n    },\n    {\n      "id": "_168721_1",\n      "rowId": "_45497_1",\n      "columnId": "_43512_1",\n      "description": "",\n      "rowPosition": 1,\n      "columnPosition": 0,\n      "percentage": {\n        "value": 0.0\n      }\n    },\n    {\n      "id": "_168722_1",\n      "rowId": "_45497_1",\n      "columnId": "_43513_1",\n      "description": "",\n      "rowPosition": 1,\n      "columnPosition": 1,\n      "percentage": {\n        "value": 50.0\n      }\n    },\n    {\n      "id": "_168723_1",\n      "rowId": "_45497_1",\n      "columnId": "_43514_1",\n      "description": "",\n      "rowPosition": 1,\n      "columnPosition": 2,\n      "percentage": {\n        "value": 100.0\n      }\n    },\n    {\n      "id": "_168724_1",\n      "rowId": "_45498_1",\n      "columnId": "_43512_1",\n      "description": "",\n      "rowPosition": 2,\n      "columnPosition": 0,\n      "percentage": {\n        "value": 0.0\n      }\n    },\n    {\n      "id": "_168725_1",\n      "rowId": "_45498_1",\n      "columnId": "_43513_1",\n      "description": "",\n      "rowPosition": 2,\n      "columnPosition": 1,\n      "percentage": {\n        "value": 50.0\n      }\n    },\n    {\n      "id": "_168726_1",\n      "rowId": "_45498_1",\n      "columnId": "_43514_1",\n      "description": "",\n      "rowPosition": 2,\n      "columnPosition": 2,\n      "percentage": {\n        "value": 100.0\n      }\n    }\n  ]\n}\n')),(0,a.kt)("h3",{id:"rubrics-evaluations"},"Rubrics Evaluations"),(0,a.kt)("p",null,"Evaluations are part of the grading workflow and as such require accessing gradebook data - specifically attempts."),(0,a.kt)("h4",{id:"attempts"},"Attempts"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v2/courses/{courseId}/gradebook/columns/gradebookColumnId/attempts")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v2/courses/_12594_1/gradebook/columns/_120127_1/attempts")),(0,a.kt)("p",null,"Results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "id": "_844981_1",\n      "userId": "_28497_1",\n      "status": "Completed",\n      "displayGrade": {\n        "scaleType": "Score",\n        "score": 62.5\n      },\n      "text": "62.50000",\n      "score": 62.5,\n      "feedback": "<h5>Overall Feedback</h5>",\n      "studentSubmission": "<p>your 200 word story</p>",\n      "exempt": false,\n      "created": "2023-10-09T18:40:34.278Z",\n      "attemptDate": "2023-10-09T18:41:00.562Z",\n      "modified": "2023-10-12T13:03:14.372Z",\n      "attemptReceipt": {\n        "receiptId": "eec942431d4f4266b5571ecade1fe4c1",\n        "submissionDate": "2023-10-09T18:41:00.562Z",\n        "submissionTotalSize": 26\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"The pertinent data we have collected thus far on our rubric quest is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"courseId":"_1234_1')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"rubricId": "_11964_1"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"gradebookColumnId": "_120127_1"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"associationId": "_15388_1"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"attemptId" : "_844981_1"')),(0,a.kt)("li",{parentName:"ul"},"and ",(0,a.kt)("inlineCode",{parentName:"li"},'"userId" : "_28497_1"'))),(0,a.kt)("p",null,"Note: You may leverage the grade ",(0,a.kt)("inlineCode",{parentName:"p"},"status"),' to determine whether to proceed with pulling any evaluation data. There is really no point in making the evaluation requests if the status is not "Completed".'),(0,a.kt)("h4",{id:"evaluations"},"Evaluations"),(0,a.kt)("p",null,"You may use the attempt information, notably the ",(0,a.kt)("inlineCode",{parentName:"p"},"attemptId")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"gradebookColumnId")," to find the instructor entered evaluation data:\n",(0,a.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId}/rubric/evaluations")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/courses/_12594_1/gradebook/columns/_120127_1/attempts/_844981_1/rubric/evaluations")),(0,a.kt)("p",null,"Results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "id": "_47213_1",\n      "rubricAssociationId": "_15388_1",\n      "evaluationEntity": {\n        "attemptId": "_844981_1"\n      },\n      "possibleScore": {\n        "numerator": 100,\n        "denominator": 1\n      },\n      "totalScore": {\n        "numerator": 125,\n        "denominator": 2\n      },\n      "submitted": "2023-10-11T19:56:19.483Z"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"The pertinent data we have collected thus far on our rubric quest is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"courseId":"_1234_1')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"rubricId": "_11964_1"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"gradebookColumnId": "_120127_1"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"associationId": "_15388_1"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"attemptId" : "_844981_1"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"userId" : "_28497_1"')),(0,a.kt)("li",{parentName:"ul"},"and ",(0,a.kt)("inlineCode",{parentName:"li"},'"evaluationId": "_47213_1"'))),(0,a.kt)("p",null,"To access the actual rubric criteria applied for the evaluation and any feedback provided by the grader you need to expand the evaluation cells:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{associationId}/evaluations/{evaluationId}?expand=cells")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/courses/_12594_1/rubrics/_11964_1/associations/_15388_1/evaluations/_47213_1?expand=cells")),(0,a.kt)("p",null,"Results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "_47213_1",\n  "rubricAssociationId": "_15388_1",\n  "evaluationEntity": {\n    "attemptId": "_844981_1"\n  },\n  "possibleScore": {\n    "numerator": 100,\n    "denominator": 1\n  },\n  "totalScore": {\n    "numerator": 125,\n    "denominator": 2\n  },\n  "submitted": "2023-10-11T19:56:19.483Z",\n  "cells": [\n    {\n      "id": "_95594_1",\n      "rubricCellId": "_167078_1",\n      "rubricRowId": "_45050_1",\n      "selectedScore": {\n        "numerator": 100,\n        "denominator": 1\n      },\n      "feedback": "<p>comment 1</p>"\n    },\n    {\n      "id": "_95596_1",\n      "rubricCellId": "_167083_1",\n      "rubricRowId": "_45051_1",\n      "selectedScore": {\n        "numerator": 75,\n        "denominator": 1\n      },\n      "feedback": "<p>comment 2</p>"\n    },\n    {\n      "id": "_95599_1",\n      "rubricCellId": "_167088_1",\n      "rubricRowId": "_45052_1",\n      "selectedScore": {\n        "numerator": 50,\n        "denominator": 1\n      },\n      "feedback": "<p>comment 3</p>"\n    },\n    {\n      "id": "_95603_1",\n      "rubricCellId": "_167093_1",\n      "rubricRowId": "_45053_1",\n      "selectedScore": {\n        "numerator": 25,\n        "denominator": 1\n      },\n      "feedback": "<p>comment 4</p>"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Now that you know the rubricCellId and rubricRowId you may inspect the original rubric data acquired above and pull details for each cell and headers for use in display or mapping to additional processes supporting evaluation workflows."),(0,a.kt)("p",null,"Also, by this point you have collected sufficient information (course, user, grade column, grade, rubric, etc) to inform any additional logic such as passing data to your SIS, Reporting, or User facing interfaces!"),(0,a.kt)("h2",{id:"entitlements-and-system-role-privileges"},"Entitlements and System Role Privileges"),(0,a.kt)("h3",{id:"necessary-entitlements"},"Necessary Entitlements"),(0,a.kt)("p",null,"Rubrics entitlements required per endpoint are listed in the rubrics API documentation."),(0,a.kt)("h4",{id:"read-rubrics"},"Read Rubrics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"course.rubrics.VIEW")),(0,a.kt)("h4",{id:"read-associations"},"Read Associations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"course.rubrics.VIEW"),(0,a.kt)("li",{parentName:"ul"},"course.gradebook-metadata.VIEW"),(0,a.kt)("li",{parentName:"ul"},"course.gradebook.MODIFY")),(0,a.kt)("h4",{id:"read-evaluations-and-columns-and-attempts"},"Read Evaluations, and Columns and Attempts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"course.gradebook.MODIFY")),(0,a.kt)("h3",{id:"necessary-role-privileges"},"Necessary Role Privileges"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": You must share these System Role Privileges with Learn System Admins via your documentation for successful deployment of your application on their Learn server."),(0,a.kt)("h4",{id:"read-rubrics-1"},"Read Rubrics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Course/Organization Control Panel (Tools) > Rubrics > View Rubric")),(0,a.kt)("h4",{id:"read-associations-1"},"Read Associations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Course/Organization Control Panel (Tools) > Rubrics > View Rubric"),(0,a.kt)("li",{parentName:"ul"},"Course/Organization Control Panel (Grade Center) > View Grade Center Items and Settings"),(0,a.kt)("li",{parentName:"ul"},"Course/Organization Control Panel (Grade Center) > Full Control")),(0,a.kt)("h4",{id:"read-evaluations-and-columns-and-attempts-1"},"Read Evaluations, and Columns and Attempts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Course/Organization Control Panel (Grade Center) > Full Control")),(0,a.kt)("h2",{id:"rubrics-apis-best-practices"},"Rubrics APIs Best Practices"),(0,a.kt)("p",null,"Note: Please review our General REST API Best Practices which are outlined in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/blackboard/rest-apis/rest-api-best-practices"},"REST API Best Practices")," guide."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cache rubrics and gradebook data when working within a specific course and gradebook to reduce the number of requests required.")))}p.isMDXComponent=!0}}]);