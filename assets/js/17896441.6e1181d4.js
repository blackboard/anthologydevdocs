"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[8401],{92445:(e,t,a)=>{a.r(t),a.d(t,{default:()=>de});var n=a(96540),l=a(1003),r=a(89532);const s=n.createContext(null);function o(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(s.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(s);if(null===e)throw new r.dV("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.be,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(20053),m=a(24581),u=a(58168),p=a(21312),v=a(39022);function h(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(v.A,(0,u.A)({},t,{subLabel:n.createElement(p.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(v.A,(0,u.A)({},a,{subLabel:n.createElement(p.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=c();return n.createElement(h,{previous:e.previous,next:e.next})}var f=a(44586),E=a(75489),g=a(48295),A=a(17559),N=a(55597),w=a(32252);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(p.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(p.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){const t=C[e.versionMetadata.banner];return n.createElement(t,e)}function _(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(p.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(E.A,{to:a,onClick:l},n.createElement(p.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function k(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,f.A)(),{pluginId:r}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:s}=(0,N.g1)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,g.HW)(r),i=o??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.A)(t,A.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(L,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(_,{versionLabel:c.label,to:i.path,onClick:()=>s(c.name)})))}function y(e){let{className:t}=e;const a=(0,w.r)();return a.banner?n.createElement(k,{className:t,versionMetadata:a}):null}function T(e){let{className:t}=e;const a=(0,w.r)();return a.badge?n.createElement("span",{className:(0,d.A)(t,A.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(p.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function x(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(p.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function U(e){let{lastUpdatedBy:t}=e;return n.createElement(p.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function H(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:A.G.common.lastUpdated},n.createElement(p.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(U,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var M=a(61943),I=a(62053);const B={lastUpdated:"lastUpdated_vwxv"};function S(e){return n.createElement("div",{className:(0,d.A)(A.G.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(I.A,e)))}function q(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.A)(A.G.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(M.A,{editUrl:t})),n.createElement("div",{className:(0,d.A)("col",B.lastUpdated)},(a||l)&&n.createElement(H,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function D(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,o=s.length>0,i=!!(t||a||r);return o||i?n.createElement("footer",{className:(0,d.A)(A.G.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(S,{tags:s}),i&&n.createElement(q,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var O=a(41422),P=a(65195);const V={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function G(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,u.A)({type:"button"},a,{className:(0,d.A)("clean-btn",V.tocCollapsibleButton,!t&&V.tocCollapsibleButtonExpanded,a.className)}),n.createElement(p.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const R={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function F(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:o}=(0,O.u)({initialState:!0});return n.createElement("div",{className:(0,d.A)(R.tocCollapsible,!s&&R.tocCollapsibleExpanded,a)},n.createElement(G,{collapsed:s,onClick:o}),n.createElement(O.N,{lazy:!0,className:R.tocCollapsibleContent,collapsed:s},n.createElement(P.A,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const $={tocMobile:"tocMobile_ITEo"};function z(){const{toc:e,frontMatter:t}=c();return n.createElement(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.A)(A.G.docs.docTocMobile,$.tocMobile)})}var j=a(67763);function W(){const{toc:e,frontMatter:t}=c();return n.createElement(j.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:A.G.docs.docTocDesktop})}var Z=a(51107),J=a(77910),Q=a(6282);function X(e){let{children:t}=e;const{frontMatter:a}=c(),l=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.A)(A.G.docs.docMarkdown,"markdown")},l&&n.createElement("header",null,n.createElement(Z.A,{as:"h1"},l),"site-intro"!==a.id?n.createElement(Q.A,{frontMatter:a}):""),n.createElement(J.A,null,t))}var Y=a(84142),K=a(99169),ee=a(86025);function te(e){return n.createElement("svg",(0,u.A)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ne(){const e=(0,ee.A)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(E.A,{"aria-label":(0,p.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(te,{className:ae.breadcrumbHomeIcon})))}const le={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function re(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(E.A,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function se(e){let{children:t,active:a,index:l,addMicrodata:r}=e;return n.createElement("li",(0,u.A)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function oe(){const e=(0,Y.OF)(),t=(0,K.Dt)();return e?n.createElement("nav",{className:(0,d.A)(A.G.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,p.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ne,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(se,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(re,{href:t.href,isLast:l},t.label))})))):null}const ce={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ie(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.l)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(z,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(W,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.A)("col",!a.hidden&&ce.docItemCol)},n.createElement(y,null),n.createElement("div",{className:ce.docItemContainer},n.createElement("article",null,n.createElement(oe,null),n.createElement(T,null),a.mobile,n.createElement(X,null,t),n.createElement(D,null)),n.createElement(b,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function de(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(o,{content:e.content},n.createElement(l.e3,{className:t},n.createElement(i,null),n.createElement(ie,null,n.createElement(a,null))))}},67763:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(58168),l=a(96540),r=a(20053),s=a(65195);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function d(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.A)(o.tableOfContents,"thin-scrollbar",t)},l.createElement(s.A,(0,n.A)({},a,{linkClassName:c,linkActiveClassName:i})))}},65195:(e,t,a)=>{a.d(t,{A:()=>v});var n=a(58168),l=a(96540),r=a(6342);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function o(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>c(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=i(o,{anchorTopOffset:a.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const p=l.memo(u);function v(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const h=(0,r.p)(),b=d??h.tableOfContents.minHeadingLevel,f=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>o({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:b,maxHeadingLevel:f});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:b,maxHeadingLevel:f}}),[c,i,b,f])),l.createElement(p,(0,n.A)({toc:E,className:a,linkClassName:c},v))}},32252:(e,t,a)=>{a.d(t,{n:()=>s,r:()=>o});var n=a(96540),l=a(89532);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.dV("DocsVersionProvider");return e}},6282:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540);const l="tracker_container_Gxex",r="date_Xr9N",s=e=>n.createElement("div",{className:l},n.createElement("p",{className:r},"Published:\xa0",e.frontMatter.published?(e=>{const t=e.split("-");return Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(t[0],t[1]-1,t[2]))})(e.frontMatter.published):"Not Available"),n.createElement("p",{className:r},"Last Update:"," ",e.frontMatter.edited?(e=>{const t=e.split("-");return Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(t[0],t[1]-1,t[2]))})(e.frontMatter.edited):"Not Available"),n.createElement("p",null,"\xa0"))},12879:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(96540),l=a(86981),r=a(6282);const s={"password-checker-container":"password-checker-container_be6G","password-message":"password-message_cM5R","password-input-container":"password-input-container_Jyfb","password-input-inner":"password-input-inner_klQW","password-checker-btn":"password-checker-btn_Wk_r","password-requirement-fail":"password-requirement-fail_NRGC","password-requirement-pass":"password-requirement-pass_xlPc"},o=()=>{const[e,t]=(0,n.useState)(!0),[a,l]=(0,n.useState)(""),[r,o]=(0,n.useState)(!1),[c,i]=(0,n.useState)(!1),[d,m]=(0,n.useState)(!1),[u,p]=(0,n.useState)(!1),[v,h]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{console.log("Running use Effect"),a.match("(?=.*[A-Z])")?i(!0):i(!1),a.match("(?=.*[a-z])")?m(!0):m(!1),a.match("(?=.*[0-9])")?p(!0):p(!1),a.match("(?=.*[-+_!@#$%^&*.,?])")?h(!0):h(!1),a.length>11&&a.length<33?o(!0):o(!1)}),[a]),n.createElement("div",{className:s["password-checker-container"]},n.createElement("h2",null,"Check your password strength"),n.createElement("p",{className:s["password-message"]},"This widget will allow you to check if your password is strong enough. This widget doesn't save any information, everything runs locally"),n.createElement("section",{className:s["password-checker-section"]},n.createElement("div",{className:s["password-input-container"]},n.createElement("label",{for:"password-field"},"Enter your tentative password:"),n.createElement("div",{className:s["password-input-inner"]},n.createElement("input",{id:"password-field",type:e?"text":"password",onChange:e=>{l(e.target.value)},value:a}),n.createElement("button",{className:s["password-checker-btn"],onClick:a=>{a.preventDefault(),t((e=>!e)),console.log(e)}},n.createElement("img",{src:e?"/img/eye-slash.svg":"/img/eye.svg",alt:"Button to show and hide the tentative password"})))),n.createElement("ul",{className:s["password-criteria-list"]},n.createElement("li",{className:`${r?s["password-requirement-pass"]:s["password-requirement-fail"]}`},"Password is between 12 and 32 characters"),n.createElement("li",{className:`${c?s["password-requirement-pass"]:s["password-requirement-fail"]}`},"Contains at least 1 uppercase letter"),n.createElement("li",{className:`${d?s["password-requirement-pass"]:s["password-requirement-fail"]}`},"Contains at least 1 lowercase letter"),n.createElement("li",{className:`${u?s["password-requirement-pass"]:s["password-requirement-fail"]}`},"Contains at least 1 number"),n.createElement("li",{className:`${v?s["password-requirement-pass"]:s["password-requirement-fail"]}`},"Contains at least 1 special character"))))},c={...l.A,VersioningTracker:r.A,PasswordChecker:o}}}]);