"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[7557],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},77598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const s={slug:"changes-to-assignments-blackboard-3900.98",title:"Changes to Assignments With Blackboard 3900.98",published:"2024-11-01",edited:"2024-11-01",author:"Mark Kauffman",tags:["Assignments","Tests","Integrations","Partners","Developers","Community"],hide_table_of_contents:!1},o=void 0,i={permalink:"/blog/changes-to-assignments-blackboard-3900.98",source:"@site/blog/2024/2024-11-01-changes-to-assignments-blackboard-3900.98.md",title:"Changes to Assignments With Blackboard 3900.98",description:"We are writing this blog post to document a change to how REST APIs work with Ultra Assignments and Tests. Previously, before Blackboard version 3900.98, you could use the createAssignment REST API and treat the resulting object like a Test. You could add more than one question of differing types, using the user interface. You could use the REST API and add more than one presentation-type question type using POST request to /learn/api/public/v1/courses//assessments/{assessmentId}/questions/{questionId}.",date:"2024-11-01T00:00:00.000Z",formattedDate:"November 1, 2024",tags:[{label:"Assignments",permalink:"/blog/tags/assignments"},{label:"Tests",permalink:"/blog/tags/tests"},{label:"Integrations",permalink:"/blog/tags/integrations"},{label:"Partners",permalink:"/blog/tags/partners"},{label:"Developers",permalink:"/blog/tags/developers"},{label:"Community",permalink:"/blog/tags/community"}],readingTime:.755,hasTruncateMarker:!1,authors:[{name:"Mark Kauffman"}],frontMatter:{slug:"changes-to-assignments-blackboard-3900.98",title:"Changes to Assignments With Blackboard 3900.98",published:"2024-11-01",edited:"2024-11-01",author:"Mark Kauffman",tags:["Assignments","Tests","Integrations","Partners","Developers","Community"],hide_table_of_contents:!1},nextItem:{title:"Public Rest API and devportal roadmap April 2024",permalink:"/blog/public-rest-api-and-dev-portal-roadmap-april-2024"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"We are writing this blog post to document a change to how REST APIs work with Ultra Assignments and Tests. Previously, before Blackboard version 3900.98, you could use the createAssignment REST API and treat the resulting object like a Test. You could add more than one question of differing types, using the user interface. You could use the REST API and add more than one presentation-type question type using POST request to /learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId}."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://help.blackboard.com/Learn/Administrator/SaaS/Release_Notes/Archived_Release_Notes#3900.98.0-6"},"Blackboard introduced a new Assignment tool with version 3900.98.")," It is no longer the same as a Test. With the new Assignment tool, when you use createAssignment the assignment body is still created, but you only see the instructions, with no option to add questions, and you cannot add questions using the assessments endpoint. To create a Test you must now use the createContent endpoint. You can find more information here: ",(0,a.yg)("a",{parentName:"p",href:"/docs/blackboard/rest-apis/hands-on/creating-content-with-rest-apis"},"Creating and Updating Content with REST APIs"),"."))}d.isMDXComponent=!0}}]);