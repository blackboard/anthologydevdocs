"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[1836],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),y=d(a),o=l,m=y["".concat(s,".").concat(o)]||y[o]||p[o]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=o;var g={};for(var s in t)hasOwnProperty.call(t,s)&&(g[s]=t[s]);g.originalType=e,g[y]="string"==typeof e?e:l,i[1]=g;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},60765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>g,toc:()=>d});var n=a(58168),l=(a(96540),a(15680));const r={title:"Feedback parameter definitions",id:"feedback-parameter-definitions",categories:"Ally",published:"",edited:"",author:"Scott Hurrey"},i="Feedback parameter definitions",g={unversionedId:"ally/feedback-parameter-definitions",id:"ally/feedback-parameter-definitions",title:"Feedback parameter definitions",description:"Here are the feedback parameters returned when the feedback endpoint is called. The full and meta columns defines which fields are included based on the feedback query parameter. If it is set to true, you get the full response, and the full column will have a check. If it is set to false or omitted, you receive just the meta data, and Meta column will have an check",source:"@site/docs/ally/feedback-definitions.md",sourceDirName:"ally",slug:"/ally/feedback-parameter-definitions",permalink:"/docs/ally/feedback-parameter-definitions",draft:!1,editUrl:"https://github.com/blackboard/anthologydevdocs/tree/main/docs/ally/feedback-definitions.md",tags:[],version:"current",frontMatter:{title:"Feedback parameter definitions",id:"feedback-parameter-definitions",categories:"Ally",published:"",edited:"",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"Check the processing status of a file",permalink:"/docs/ally/check-status"},next:{title:"Retrieve the feedback for multiple files",permalink:"/docs/ally/getting-batched-feedback"}},s={},d=[],c={toc:d},y="wrapper";function p(e){let{components:t,...a}=e;return(0,l.yg)(y,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"feedback-parameter-definitions"},"Feedback parameter definitions"),(0,l.yg)("p",null,"Here are the feedback parameters returned when the feedback endpoint is called. The full and meta columns defines which fields are included based on the feedback query parameter. If it is set to true, you get the full response, and the full column will have a ",(0,l.yg)("i",{class:"material-icons"},"check"),". If it is set to false or omitted, you receive just the meta data, and Meta column will have an ",(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,l.yg)("th",{parentName:"tr",align:null},"Definition"),(0,l.yg)("th",{parentName:"tr",align:null},"Full"),(0,l.yg)("th",{parentName:"tr",align:null},"Meta"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hash"),(0,l.yg)("td",{parentName:"tr",align:null},"the content hash used to reference the file by Ally as a Service"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback"),(0,l.yg)("td",{parentName:"tr",align:null},"the feedback from processing the document, or ",(0,l.yg)("inlineCode",{parentName:"td"},"null")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.score"),(0,l.yg)("td",{parentName:"tr",align:null},"score between 0 (low) and 1 (high) indicating the documents accessibility"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.visibility"),(0,l.yg)("td",{parentName:"tr",align:null},"visibility is the overall accessibility of your document: ",(0,l.yg)("em",{parentName:"td"},"low"),", ",(0,l.yg)("em",{parentName:"td"},"medium"),", ",(0,l.yg)("em",{parentName:"td"},"high")," or ",(0,l.yg)("em",{parentName:"td"},"perfect")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report"),(0,l.yg)("td",{parentName:"tr",align:null},"the contents of the feedback report"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results"),(0,l.yg)("td",{parentName:"tr",align:null},"the results of the feedback report"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Scanned"),(0,l.yg)("td",{parentName:"tr",align:null},"was the document scanned?"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Scanned.score"),(0,l.yg)("td",{parentName:"tr",align:null},"0 = scanned, 1 = not scanned"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Tagged"),(0,l.yg)("td",{parentName:"tr",align:null},"is the document tagged?"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Tagged.score"),(0,l.yg)("td",{parentName:"tr",align:null},"0 = untagged, 1 = tagged"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Ocred"),(0,l.yg)("td",{parentName:"tr",align:null},"was the document ",(0,l.yg)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Optical_character_recognition"},"OCR"),"ed?"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Ocred.score"),(0,l.yg)("td",{parentName:"tr",align:null},"0 = no, 1 = yes"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText"),(0,l.yg)("td",{parentName:"tr",align:null},"report on alternative text for images"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets"),(0,l.yg)("td",{parentName:"tr",align:null},"an array containing locations of detected issues"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets","[ ]",".page"),(0,l.yg)("td",{parentName:"tr",align:null},"the page number containing the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets","[ ]",".y0"),(0,l.yg)("td",{parentName:"tr",align:null},"the starting y axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets","[ ]",".x0"),(0,l.yg)("td",{parentName:"tr",align:null},"the starting x axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets","[ ]",".y1"),(0,l.yg)("td",{parentName:"tr",align:null},"the ending y axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.snippets","[ ]",".x1"),(0,l.yg)("td",{parentName:"tr",align:null},"the ending x axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.AlternativeText.score"),(0,l.yg)("td",{parentName:"tr",align:null},"alternative text score between 0 (low) and 1 (high)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast"),(0,l.yg)("td",{parentName:"tr",align:null},"report on color contrast"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets"),(0,l.yg)("td",{parentName:"tr",align:null},"an array containing locations of detected issues"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets","[ ]",".page"),(0,l.yg)("td",{parentName:"tr",align:null},"the page number containing the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets","[ ]",".y0"),(0,l.yg)("td",{parentName:"tr",align:null},"the starting y axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets","[ ]",".x0"),(0,l.yg)("td",{parentName:"tr",align:null},"the starting x axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets","[ ]",".y1"),(0,l.yg)("td",{parentName:"tr",align:null},"the ending y axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.snippets","[ ]",".x1"),(0,l.yg)("td",{parentName:"tr",align:null},"the ending x axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Contrast.score"),(0,l.yg)("td",{parentName:"tr",align:null},"contrast score between 0 (low) and 1 (high)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential"),(0,l.yg)("td",{parentName:"tr",align:null},"report on sequential headings"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets"),(0,l.yg)("td",{parentName:"tr",align:null},"an array containing locations of detected issues"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets","[ ]",".page"),(0,l.yg)("td",{parentName:"tr",align:null},"the page number containing the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets","[ ]",".y0"),(0,l.yg)("td",{parentName:"tr",align:null},"the starting y axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets","[ ]",".x0"),(0,l.yg)("td",{parentName:"tr",align:null},"the starting x axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets","[ ]",".y1"),(0,l.yg)("td",{parentName:"tr",align:null},"the ending y axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.snippets","[ ]",".x1"),(0,l.yg)("td",{parentName:"tr",align:null},"the ending x axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsSequential.score"),(0,l.yg)("td",{parentName:"tr",align:null},"sequential headings score between 0 (low) and 1 (high)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsHigherLevel.snippets"),(0,l.yg)("td",{parentName:"tr",align:null},"report on PDF heading levels"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsHigherLevel.score"),(0,l.yg)("td",{parentName:"tr",align:null},"higher-level headings score between 0 (low) and 1 (high)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Title"),(0,l.yg)("td",{parentName:"tr",align:null},"does the document have a title?"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.Title.score"),(0,l.yg)("td",{parentName:"tr",align:null},"0 = No, 1 = Yes"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders"),(0,l.yg)("td",{parentName:"tr",align:null},"report on the existence of headers in tables"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets"),(0,l.yg)("td",{parentName:"tr",align:null},"an array containing locations of detected issues"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets","[ ]",".page"),(0,l.yg)("td",{parentName:"tr",align:null},"the page number containing the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets","[ ]",".y0"),(0,l.yg)("td",{parentName:"tr",align:null},"the starting y axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets","[ ]",".x0"),(0,l.yg)("td",{parentName:"tr",align:null},"the starting x axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets","[ ]",".y1"),(0,l.yg)("td",{parentName:"tr",align:null},"the ending y axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.snippets","[ ]",".x1"),(0,l.yg)("td",{parentName:"tr",align:null},"the ending x axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.TableHeaders.score"),(0,l.yg)("td",{parentName:"tr",align:null},"table headers score between 0 (low) and 1 (high)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.LanguagePresence"),(0,l.yg)("td",{parentName:"tr",align:null},"does the document contain language information"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.LanguagePresence.score"),(0,l.yg)("td",{parentName:"tr",align:null},"language presence score: 0 = No, 1 = Yes"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsPresence"),(0,l.yg)("td",{parentName:"tr",align:null},"does the document contain headings?"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsPresence.score"),(0,l.yg)("td",{parentName:"tr",align:null},"headings present score, 0 = No, 1 = Yes"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.LanguageCorrect"),(0,l.yg)("td",{parentName:"tr",align:null},"does the document language declaration match the language used?"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.LanguageCorrect.detectedLanguage"),(0,l.yg)("td",{parentName:"tr",align:null},"language code declared, i.e. 'en' for English"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.LanguageCorrect.score"),(0,l.yg)("td",{parentName:"tr",align:null},"language correct score, 0 = No, 1 = Yes"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne"),(0,l.yg)("td",{parentName:"tr",align:null},"report on headings and whether they start at one"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets"),(0,l.yg)("td",{parentName:"tr",align:null},"an array containing locations of detected issues"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets","[ ]",".page"),(0,l.yg)("td",{parentName:"tr",align:null},"the page number containing the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets","[ ]",".y0"),(0,l.yg)("td",{parentName:"tr",align:null},"the starting y axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets","[ ]",".x0"),(0,l.yg)("td",{parentName:"tr",align:null},"the starting x axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets","[ ]",".y1"),(0,l.yg)("td",{parentName:"tr",align:null},"the ending y axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.snippets","[ ]",".x1"),(0,l.yg)("td",{parentName:"tr",align:null},"the ending x axis location on the page of the issue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.HeadingsStartAtOne.score"),(0,l.yg)("td",{parentName:"tr",align:null},"score between 0 (low) and 1 (high)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.LibraryReference"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.results.LibraryReference.score"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.suggestions"),(0,l.yg)("td",{parentName:"tr",align:null},"the portion of the report that displays improvement suggestions"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.suggestions.HeadingsSequential"),(0,l.yg)("td",{parentName:"tr",align:null},"the document's total score if all headings are made sequential"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.suggestions.Title"),(0,l.yg)("td",{parentName:"tr",align:null},"the document's total score if the title is added"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.suggestions.TableHeaders"),(0,l.yg)("td",{parentName:"tr",align:null},"the document's total score if all tables include headers"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.suggestions.HeadingsStartAtOne"),(0,l.yg)("td",{parentName:"tr",align:null},"the document's total score if all headings hierarchy starts at one"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.suggestions.AlternativeText"),(0,l.yg)("td",{parentName:"tr",align:null},"the document's total score if all images contain alternative text"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.suggestions.Contrast"),(0,l.yg)("td",{parentName:"tr",align:null},"the document's total score if all color contrast issues are corrected"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"feedback.report.suggestions.LibraryReference"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"formats"),(0,l.yg)("td",{parentName:"tr",align:null},"not currently used, will always be null"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metadata"),(0,l.yg)("td",{parentName:"tr",align:null},"document metadata"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metadata.name"),(0,l.yg)("td",{parentName:"tr",align:null},"the name of the processed file"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metadata.decorative"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metadata.description"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metadata.fileType"),(0,l.yg)("td",{parentName:"tr",align:null},"the file type of the processed file"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metadata.mimeType"),(0,l.yg)("td",{parentName:"tr",align:null},"the mime type of the processed file"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metadata.isVersioned"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metadata.isSeizureInducing"),(0,l.yg)("td",{parentName:"tr",align:null},"will the processed file cause seizures?"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metadata.libraryReference"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"Deprecated")," Not used. This will always be null and will be removed in a future release"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("i",{class:"material-icons"},"check"))))),(0,l.yg)("p",null,"For more information about the Ally accessibility tests, visit the ",(0,l.yg)("a",{parentName:"p",href:"https://help.blackboard.com/ally/Ally_for_LMS/Administrator/Institution_Report/Accessibility_Checklist"},"Accessibility Checklist")," page on help.blackboard.com."))}p.isMDXComponent=!0}}]);