"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[4929],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},57004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(58168),o=(t(96540),t(15680));const r={title:"Using cURL to access content attachments",id:"curl-attach-demo",categories:"Learn Rest",published:"",edited:"",author:"Mark O'Neil"},l=void 0,i={unversionedId:"blackboard/rest-apis/demo-code/curl-attach-demo",id:"blackboard/rest-apis/demo-code/curl-attach-demo",title:"Using cURL to access content attachments",description:"The Learn REST API supports accessing Content Item information and URLs for",source:"@site/docs/blackboard/rest-apis/demo-code/accessing-content-attachments-with-cURL.md",sourceDirName:"blackboard/rest-apis/demo-code",slug:"/blackboard/rest-apis/demo-code/curl-attach-demo",permalink:"/docs/blackboard/rest-apis/demo-code/curl-attach-demo",draft:!1,editUrl:"https://github.com/blackboard/anthologydevdocs/tree/main/docs/blackboard/rest-apis/demo-code/accessing-content-attachments-with-cURL.md",tags:[],version:"current",frontMatter:{title:"Using cURL to access content attachments",id:"curl-attach-demo",categories:"Learn Rest",published:"",edited:"",author:"Mark O'Neil"},sidebar:"documentationSidebar",previous:{title:"SOAP-to-REST",permalink:"/docs/blackboard/rest-apis/advanced/soap-to-rest"},next:{title:"C# Demo",permalink:"/docs/blackboard/rest-apis/demo-code/c-sharp-demo"}},s={},c=[{value:"STEP ONE: Generate an Access Token",id:"step-one-generate-an-access-token",level:3},{value:"STEP TWO: GET a list of top level content",id:"step-two-get-a-list-of-top-level-content",level:3},{value:"STEP THREE: Discover Downloadable Content",id:"step-three-discover-downloadable-content",level:3},{value:"STEP FOUR: Accessing found documents",id:"step-four-accessing-found-documents",level:3},{value:"STEP FIVE:",id:"step-five",level:3},{value:"Uploading files to content",id:"uploading-files-to-content",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The Learn REST API supports accessing Content Item information and URLs for\ndownloading content attachments."),(0,o.yg)("p",null,"The following is a cookbook that covers the basics for discovering and\ndownloading attachments for both an Ultra and an Original Course."),(0,o.yg)("p",null,"Unless noted the steps are the same. Note that we will only comment on\niteration requirements and forego execution thereof in this demo."),(0,o.yg)("p",null,"Note that ",(0,o.yg)("strong",{parentName:"p"},"_","36662_1")," is an Ultra course and ",(0,o.yg)("strong",{parentName:"p"},"_","60054_1")," is an Original\nCourse."),(0,o.yg)("h3",{id:"step-one-generate-an-access-token"},"STEP ONE: Generate an Access Token"),(0,o.yg)("p",null,"Request:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -k --user <appkey>:<appsecret> --data "grant_type=client_credentials" https://ultra-integ.int.bbpd.io/learn/api/public/v1/oauth2/token\n')),(0,o.yg)("p",null,"Result:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\u201caccess_token\u201d:"QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr","token_type":"bearer","expires_in":3599}\n')),(0,o.yg)("h3",{id:"step-two-get-a-list-of-top-level-content"},"STEP TWO: GET a list of top level content"),(0,o.yg)("p",null,"Note this step is the same for both Ultra and Original courses"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Ultra"),":"),(0,o.yg)("p",null,"Request:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -k -X GET -H "Authorization: Bearer QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/courses/_36662_1/contents\n')),(0,o.yg)("p",null,"Results:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "parentId": "_216719_1",\n      "position": 0,\n      "availability": {\n        "allowGuests": true,\n        "available": "No",\n        "adaptiveRelease": {}\n      },\n      "id": "_596394_1",\n      "title": "SOAP Deprecation Announcement.pdf",\n      "created": "2018-11-28T18:38:50.621Z",\n      "contentHandler": {\n        "id": "resource/x-bb-file",\n        "file": {\n          "fileName": "SOAP-Deprecation-20Announcement.pdf"\n        }\n      }\n    },\n    {\n      "parentId": "_216719_1",\n      "position": 1,\n      "availability": {\n        "allowGuests": true,\n        "available": "Yes",\n        "adaptiveRelease": {}\n      },\n      "id": "_435736_1",\n      "title": "Download PDF",\n      "hasChildren": true,\n      "created": "2017-08-23T19:16:34.781Z",\n      "contentHandler": {\n        "id": "resource/x-bb-folder",\n        "isBbPage": true\n      }\n    }\n  ]\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Original"),":"),(0,o.yg)("p",null,"Request:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -k -X GET -H "Authorization: Bearer QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/courses/_60054_1/contents\n')),(0,o.yg)("p",null,"Results:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "position": 1,\n      "availability": {\n        "allowGuests": true,\n        "available": "Yes",\n        "adaptiveRelease": {}\n      },\n      "id": "_382277_1",\n      "title": "Information",\n      "hasChildren": true,\n      "created": "2017-06-09T12:41:07.019Z",\n      "contentHandler": {\n        "id": "resource/x-bb-folder"\n      }\n    },\n    {\n      "position": 2,\n      "availability": {\n        "allowGuests": true,\n        "available": "Yes",\n        "adaptiveRelease": {}\n      },\n      "id": "_382278_1",\n      "title": "Content",\n      "hasChildren": true,\n      "created": "2017-06-09T12:41:07.021Z",\n      "contentHandler": {\n        "id": "resource/x-bb-folder"\n      }\n    }\n  ]\n}\n')),(0,o.yg)("h3",{id:"step-three-discover-downloadable-content"},"STEP THREE: Discover Downloadable Content"),(0,o.yg)("p",null,"Here you will iterate over the result set and based on a set of criteria\nidentify downloadable content. The criteria is whether a content item has an\nid of ",(0,o.yg)("inlineCode",{parentName:"p"},"resource/x-bb-folder")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"resource/x-bb-document"),", has child items, and\nwhether an item has an id of ",(0,o.yg)("inlineCode",{parentName:"p"},"resource/x-bb-file"),"."),(0,o.yg)("p",null,"So in the above examples the Ultra course, ",(0,o.yg)("inlineCode",{parentName:"p"},"_36662_1"),", has one top level\ndownloadable and a folder with child content, and the Original course has two\nfolders."),(0,o.yg)("p",null,"In each case we would iterate over the result set and take the appropriate\naction based on the content item id and whether the item, if a type of folder\nor document, has children."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"Get children\nIf folder\n  Get children\n  If document and Ultra Course parse BBML for attachment URL\nelse if not Ultra Course get attachments\n  get attachment Id\n  get attachment download\n")),(0,o.yg)("p",null,"In this example both the Ultra and the Original course have folders, with\nchildren so we need to determine whether any of the children in either are\ndownloadable content:"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Ultra"),":"),(0,o.yg)("p",null,"Request:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -k -X GET -H "Authorization: Bearer QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/courses/_36662_1/contents/_435736_1/children\n')),(0,o.yg)("p",null,"Response:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "results" : [\n  {\n    "parentId" : "_435736_1",\n    "position" : 0,\n    "availability" : {\n      "allowGuests" : true,\n      "available" : "Yes",\n      "adaptiveRelease" : {\n      }\n    },\n    "id" : "_435737_1",\n    "title" : "ultraDocumentBody",\n    "created" : "2017-08-23T19:16:38.848Z",\n    "body" : "\x3c!-- {\\"bbMLEditorVersion\\":1} --\x3e<a href=\\"https:\\/\\/ultra-integ.int.bbpd.io\\/bbcswebdav\\/\n    pid-435737-dt-content-rid-21916118_1\\/xid-21916118_1?VxJw3wfC56=1543432981&Kq3cZcYS15=a253d31a6d36425\n    c81aaa457ee9e2f04&3cCnGYSz89=f5CtU2s5tQcNJpZFO8tjCoIPZ9z6ZpOhzQpZ23SXyFk%3D\\"data-bbfile=\\"{&quot;\n    render&quot;:&quot;attachment&quot;,&quot;alternativeText&quot;:&quot;SOAP Deprecation\n    Announcement.pdf&quot;,&quot;linkName&quot;:&quot;SOAP Deprecation Announcement.pdf&quot;,&quot;\n    mimeType&quot;:&quot;application\\/pdf&quot;}\\"data-bbid=\\"bbml-editor-id_e18bbfe0-876c-448e-b178-\n    0d8371738b86\\">SOAP Deprecation Announcement.pdf<\\/a>",\n    "contentHandler" : {\n      "id" : "resource\\/x-bb-document"\n    }\n  }]\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Original"),":"),(0,o.yg)("p",null,"Request:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -k -X GET -H "Authorization: Bearer QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/courses/_60054_1/contents/_382278_1/children\n')),(0,o.yg)("p",null,"Response:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  \u201cresults\u201d:[{\n    \u201cid\u201d:\u201d_382277_1\u201d,\n    \u201ctitle":"Information",\n    \u201ccreated":"2017-06-09T12:41:07.019Z",\n    \u201cposition":1,\n    \u201chasChildren":true,\n    \u201cavailability\u201d:{\n      "available":"Yes",\n      \u201callowGuests":true,\n      \u201cadaptiveRelease\u201d:{}\n    },\n    \u201ccontentHandler":{\n      \u201cid":"resource/x-bb-folder"\n    }\n  },\n  {\n    \u201cid":"_382278_1",\n    \u201ctitle\u201d:"Content",\n    \u201ccreated":"2017-06-09T12:41:07.021Z",\n    \u201cposition":2,\n    \u201chasChildren":true,\n    \u201cavailability\u201d:{\n      "available":"Yes",\n      \u201callowGuests":true,\n      "adaptiveRelease":{}\n    },\n    \u201ccontentHandler":{\n      \u201cid":"resource/x-bb-folder"\n    }\n  }]\n}\n')),(0,o.yg)("p",null,"Here we have a document and a folder - we can access the found document and\nthen continue iterating on requests until we had no folders and have walked\nthe folder tree."),(0,o.yg)("h3",{id:"step-four-accessing-found-documents"},"STEP FOUR: Accessing found documents"),(0,o.yg)("p",null,"Here is where Ultra is handled differently than Original."),(0,o.yg)("p",null,"In Ultra the URL for the attachment is embedded in the BBML for the content\nItem as shown in this snippet from the above example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-html"},'"body" : "\x3c!-- {\\"bbMLEditorVersion\\":1} --\x3e<a\nhref=\\"**https:\\/\\/ultra-integ.int.bbpd.io\\/bbcswebdav\\/\npid-435737-dt-content-rid-21916118_1\\/_xid-21916118_1_?VxJw3wfC56=1543432981&Kq3cZcYS15=a253d31a6d36425\nc81aaa457ee9e2f04&3cCnGYSz89=f5CtU2s5tQcNJpZFO8tjCoIPZ9z6ZpOhzQpZ23SXyFk%3D**\\"\ndata-bbfile=\\"{&quot;\nrender&quot;:&quot;attachment&quot;,&quot;alternativeText&quot;:&quot;SOAP\nDeprecation Announcement. pdf&quot;,&quot;linkName&quot;:&quot;SOAP Deprecation\nAnnouncement.pdf&quot;,&quot;mimeType&quot;: &quot;application\\/pdf&quot;}\\"\ndata-bbid=\\"bbml-editor-id_e18bbfe0-876c-448e-b178-0d8371738b86\\"> SOAP\nDeprecation Announcement.pdf<\\/a>"\n')),(0,o.yg)("p",null,"To access the document URL for downloading you must search the bbml and\nextract any href string that contains a content item xid:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-html"},"https:\\/\\/ultra-integ.int.bbpd.io\\/bbcswebdav\\/pid-435737-dt-content-rid-21916118_1\\/_xid-21916118_1_\n?VxJw3wfC56=1543432981&Kq3cZcYS15=a253d31a6d36425c81aaa457ee9e2f04&3cCnGYSz89=f5CtU2s5tQcNJpZFO8tj\nCoIPZ9z6ZpOhzQpZ23SXyFk%3D\n")),(0,o.yg)("p",null,"These URL strings represent content item attachments in Ultra."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Original"),":"),(0,o.yg)("p",null,"In the case of an Original course once you have identified a content item as\nan attachment via the ",(0,o.yg)("inlineCode",{parentName:"p"},'"id" : "resource\\/x-bb-document')," tag you then may get\nthe attachment id. Thus you must iterate through the content Ids to discover\ncontent which has the x-bb-document identifier :"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Request:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -k -X GET -H "Authorization: Bearer QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/courses/_60054_1/contents/_382278_1\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Result:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  \u201cid\u201d:"_382278_1",**\n  \u201ctitle":"Information",\n  \u201ccreated":"2017-06-09T12 : 41 : 07.019Z\u201d,\n  \u201cposition":1,"hasChildren":true,\n  \u201cavailability":{\n    \u201cavailable":"Yes",\n    \u201callowGuests":true,\n    "adaptiveRelease":{}\n  },\n  \u201ccontentHandler":{\n    \u201cid":"resource/x-bb-folder"\n  }\n}\n')),(0,o.yg)("p",null,"We have a folder so get it\u2019s children\u2026"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Request:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -k -X GET -H "Authorization: Bearer QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/courses/_60054_1/contents/_382278_1/children\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Response:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  \u201cresults\u201d:[{\n    \u201cid":"_596395_1",\n    \u201cparentId":"_382278_1",\n    "title":"FOLDER OF PDFs\u201d,\n    "body":"<p>Folder containing downloadable content</p>\u201d,\n    \u201ccreated":"2018-11-28T20:01:00.691Z",\n    \u201cposition":0,\n    \u201chasChildren":true,\n    \u201cavailability":{\n      \u201cavailable":"Yes",\n      \u201callowGuests":true,\n      \u201cadaptiveRelease\u201d:{}\n    },\n    \u201ccontentHandler":{\n      \u201cid":"resource/x-bb-folder"\n    }\n  }]\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Request:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -k -X GET -H "Authorization: Bearer QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/courses/_60054_1/contents/_596395_1\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Response:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  \u201cid":"_596395_1",\n  \u201cparentId":"_382278_1",\n  "title":"FOLDER OF PDFs\u201d,\n  "body":"<p>Folder containing downloadable content</p>\u201d,\n  \u201ccreated":"2018-11-28T20:01:00.691Z",\n  \u201cposition":0,\n  \u201chasChildren":true,\n  \u201cavailability":{\n    \u201cavailable":"Yes",\n    \u201callowGuests":true,\n    \u201cadaptiveRelease\u201d:{}\n  },\n  \u201ccontentHandler":{\n    \u201cid":"resource/x-bb-folder"\n  }\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Request:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -k -X GET -H "Authorization: Bearer QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/courses/_60054_1/contents/_596395_1/children\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Response:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  \u201cresults":[{\n    \u201cid":"_596397_1",\n    \u201cparentId":"_596395_1",\n    "title":"SOAP Deprecation PDF\u201d,\n    \u201dcreated\u201d:"2018-11-28T20:02:13.612Z",\n    \u201cposition":0,\n    \u201cavailability":{\n      \u201cavailable":"Yes",\n      \u201callowGuests":true,\n      \u201cadaptiveRelease":{}\n    },\n    \u201ccontentHandler":{\n      \u201cid":"resource/x-bb-document"\n    }\n  }]\n}\n')),(0,o.yg)("p",null,"Now we have a document - check to see if there are any attachments\u2026"),(0,o.yg)("p",null,"Note that there may be multiple file attachments - in this case there is only\none."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Request:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -k -X GET -H "Authorization: Bearer QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/cotsses/_60054_1/contents/_596397_1/attachments\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Response:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id":"_42588_1",\n  "fileName":"SOAP Deprecation Announcement.pdf\u201d,\u201dmimeType":"application/pdf"\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Request:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -k -X GET -H "Authorization: Bearer 8vHQpudSKbIx68jC6M5rykN66R2p048Z"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/courses/_60054_1/contents/_596397_1/attachments/_42588_1\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Response:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id":"_42588_1",\n  "fileName":"SOAP Deprecation Announcement.pdf\u201d,"mimeType":"application/pdf"\n}\n')),(0,o.yg)("p",null,"Once you have the Attachment Id you may request the download URL:"),(0,o.yg)("p",null,"Note that the download URL is contained in the response header\u2019s Location\nelement so you have to add the -i|\u2014include flag to the curl command to display\nthe response headers:"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Request:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -k -X GET -H "Authorization: Bearer QvWicpu3kMA9coWMv7TKLPzYnq4nUnfr"\nhttps://ultra-integ.int.bbpd.io/learn/api/public/v1/courses/_60054_1/contents/_596397_1/attachments/_42588_1/download\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Response:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 302\nCache-Control: private\nCache-Control: max-age=0\nCache-Control: no-store\nCache-Control: must-revalidate\nContent-Security-Policy: frame-ancestors 'self'\nContent-Type: application/octet-stream\nDate: Wed, 28 Nov 2018 23:40:32 GMT\nExpires: Tue, 28 Nov 2017 23:40:32 GMT\nLast-Modified: Sat, 28 Nov 1998 23:40:32 GMT\nLocation: https://ultra-integ.int.bbpd.io/bbcswebdav/xid-21916142_1?VxJw3wfC56=1543449332&Kq3cZcYS15=\na253d31a6d36425c81aaa457ee9e2f04&3cCnGYSz89=A9bgt2bWD7NXyIzsI5kHPQQKBCpZ/qnQZ6XM2cqmZPI%3D\nP3P: CP=\"CAO PSA OUR\"\nPragma: private\nServer: openresty/1.9.3.1\nSet-Cookie: JSESSIONID=96003AD1BF73967D9CE359D5037BDECE; Path=/learn/api;\nSecure\nX-Blackboard-appserver: ip-10-145-23-249.ec2.internal\nX-Blackboard-product: Learn &#8482; 3500.7.0-ci.4055+6a82373\nX-Frame-Options: SAMEORIGIN\nContent-Length: 0\nConnection: keep-alive\n")),(0,o.yg)("h3",{id:"step-five"},"STEP FIVE:"),(0,o.yg)("p",null,"Rinse-repeat for additional folder or document content items."),(0,o.yg)("h2",{id:"uploading-files-to-content"},"Uploading files to content"),(0,o.yg)("p",null,"You can do so by following this guide: ",(0,o.yg)("a",{parentName:"p",href:"https://docs.anthology.com/docs/rest-apis/learn/advanced/rest_apis-learn-advanced-bbml#uploaded-files"},"https://docs.anthology.com/docs/rest-apis/learn/advanced/rest_apis-learn-advanced-bbml#uploaded-files")," ",(0,o.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2322778/158894421-3eaf4125-ff17-4bff-8a1f-55d10101e30e.png",alt:"image"})))}u.isMDXComponent=!0}}]);