"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[5443],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),c=i,m=p["".concat(d,".").concat(c)]||p[c]||h[c]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(58168),i=(a(96540),a(15680));const o={title:"Student query model metadata",id:"studentapi-querymodel-metadata",sidebar_position:4,author:"Jim Burns",published:"2024-06-26",edited:"2024-06-26"},r=void 0,s={unversionedId:"student/best-practices/studentapi-querymodel-metadata",id:"student/best-practices/studentapi-querymodel-metadata",title:"Student query model metadata",description:"The student data model is comprised of hundreds and hundreds of entities. One of the fundamental requirements for integration partners is to be able to retrieve data out of the query model. There are numerous OData controller methods implemented that can be used to retrieve data. However, the purpose of these methods is to supply the needed data for the web client UI pages. Thus, the design and function of these methods are extremely prescribed. In most cases, when there is a need to retrieve data from Anthology Student, the solution will be to write a custom OData query using the ds/odata endpoint. To maximize the power of this capability, it is important to understand the query data model and specifically, the navigation properties available on each entity in the model. The Data Views feature in the Anthology Student web client is a very powerful tool and can be very helpful in gaining an increased understanding of the query data model. However, one of the limitations in this tool is that many navigation properties for entities are not visible. The only navigation properties that are exposed in the Data Views UI are ones that have a one to one multiplicity with the base entity. Navigation properties that have a one to many multiplicity are hidden from the UI. In order to see a complete inventory of all navigation properties available in the query model, you can use an endpoint that returns the complete metadata for the query model.",source:"@site/docs/student/best-practices/StudentQueryModelMetadata.md",sourceDirName:"student/best-practices",slug:"/student/best-practices/studentapi-querymodel-metadata",permalink:"/docs/student/best-practices/studentapi-querymodel-metadata",draft:!1,editUrl:"https://github.com/blackboard/anthologydevdocs/tree/main/docs/student/best-practices/StudentQueryModelMetadata.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Student query model metadata",id:"studentapi-querymodel-metadata",sidebar_position:4,author:"Jim Burns",published:"2024-06-26",edited:"2024-06-26"},sidebar:"documentationSidebar",previous:{title:"Tips for using the Create and SaveNew API operations",permalink:"/docs/student/best-practices/create-savenew-bestpractices"},next:{title:"Anthology Student Service Catalog",permalink:"/docs/student/service-catalog/service-catalog"}},d={},l=[{value:"Metadata endpoint",id:"metadata-endpoint",level:2},{value:"Metadata sample output",id:"metadata-sample-output",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,n.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The student data model is comprised of hundreds and hundreds of entities. One of the fundamental requirements for integration partners is to be able to retrieve data out of the query model. There are numerous OData controller methods implemented that can be used to retrieve data. However, the purpose of these methods is to supply the needed data for the web client UI pages. Thus, the design and function of these methods are extremely prescribed. In most cases, when there is a need to retrieve data from Anthology Student, the solution will be to write a custom OData query using the ds/odata endpoint. To maximize the power of this capability, it is important to understand the query data model and specifically, the navigation properties available on each entity in the model. The Data Views feature in the Anthology Student web client is a very powerful tool and can be very helpful in gaining an increased understanding of the query data model. However, one of the limitations in this tool is that many navigation properties for entities are not visible. The only navigation properties that are exposed in the Data Views UI are ones that have a one to one multiplicity with the base entity. Navigation properties that have a one to many multiplicity are hidden from the UI. In order to see a complete inventory of all navigation properties available in the query model, you can use an endpoint that returns the complete metadata for the query model."),(0,i.yg)("h2",{id:"metadata-endpoint"},"Metadata endpoint"),(0,i.yg)("p",null,"In order to retrieve the metadata for the query model, append 'ds/odata/$metadata' to the base URL that is used to load the web client application. The output from this will be the metadata for the entire query model. Since a large amount of data is being returned, the execution time for returning the metadata output can be lengthy. Occasionally, you may get a timeout error. If this occurs, then just try issuing the URL again."),(0,i.yg)("p",null,"Example URL: ",(0,i.yg)("a",{parentName:"p",href:"https://sisclientweb-900065.campusnexus.cloud/ds/odata/$metadata"},"https://sisclientweb-900065.campusnexus.cloud/ds/odata/$metadata")),(0,i.yg)("h2",{id:"metadata-sample-output"},"Metadata sample output"),(0,i.yg)("p",null,"The first page of the metadata endpoint response is below."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Query Model Metadata",src:a(93085).A,width:"1920",height:"1030"})),(0,i.yg)("p",null,'To locate the metadata for a given entity in the model, use the Find operation (Ctrl+F) and then enter "EntityType Name=#####" in the search box replacing ##### with the name of the entity you are searching for.'),(0,i.yg)("p",null,"The screen shots below show the metadata for the StudentEnrollmentPeriod entity. This is one of the larger entities in the data model. Notice that there is a section that lists the name and type of every property defined for the entity."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Query Model Metadata",src:a(25670).A,width:"1152",height:"668"})),(0,i.yg)("p",null,"The next area of the output lists all of the navigation properties defined for the entity. There are dozens of navigation properties defined for the StudentEnrollmentPeriod entity. The Name attribute is the navigation property name. This is the name that would be specified for the $expand argument in the OData query. The Type attribute on each Navigation Property element defines the entity in the model that this navigation property will expand to when it is referenced within the odata query being written. If the multiplicity is one to many, the type will be specified as Collection(entity name). Otherwise the multiplicity is one to one."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Query Model Metadata",src:a(94415).A,width:"1152",height:"672"})),(0,i.yg)("p",null,"In conclusion, the Data Views feature in the web client UI can be utilized as a starting point for building custom odata queries and visually seeing available properties and relationships between entities. However, it is important to always review the output from the $metadata endpoint to ensure you are seeing the complete model metadata including ALL available navigation properties for a given entity."))}h.isMDXComponent=!0},93085:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/StudentQueryModelMetadata1-af0c8a2bcbe76ca7bbb6712b84cd1657.png"},25670:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/StudentQueryModelMetadata2-75d46b676d9273e56db69c0c9592555a.png"},94415:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/StudentQueryModelMetadata3-f82541660adaa15b960c6239b2305f77.png"}}]);