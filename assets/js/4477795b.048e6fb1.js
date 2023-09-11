"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[2806],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const i={layout:"post",title:"Java 11 for Learn: FAQ",categories:"Learn b2",id:"archive-b2-resources-java_11",author:"Scott Hurrey",displayed_sidebar:"documentationSidebar"},o=void 0,l={unversionedId:"archive/b2/resources/archive-b2-resources-java_11",id:"archive/b2/resources/archive-b2-resources-java_11",title:"Java 11 for Learn: FAQ",description:"This document is deprecated!",source:"@site/docs/archive/b2/resources/java11-faq.md",sourceDirName:"archive/b2/resources",slug:"/archive/b2/resources/archive-b2-resources-java_11",permalink:"/docs/archive/b2/resources/archive-b2-resources-java_11",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Java 11 for Learn: FAQ",categories:"Learn b2",id:"archive-b2-resources-java_11",author:"Scott Hurrey",displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar"},s={},c=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=p("VersioningTracker"),u=p("AuthorBox"),m={toc:c},h="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(d,{frontMatter:i,mdxType:"VersioningTracker"}),(0,n.kt)("p",null,"\u26a0\ufe0f This document is deprecated!"),(0,n.kt)("h1",{id:"java-11-for-learn-faq"},"Java 11 for Learn: FAQ"),(0,n.kt)("p",null,"To address recent changes in Oracle\u2019s Java support model, Blackboard Learn is transitioning to adopt a more recent version of Java, Java 11 Corretto JDK. To find details regarding the targeted versions and release dates please review the ",(0,n.kt)("a",{parentName:"p",href:"/docs/archive/b2/resources/archive-b2-resources-prepare_for_java_11"},"latest announcement details")),(0,n.kt)("p",null,"As with prior Java version changes, it is generally expected that Building Blocks will continue to work as-is. However, Java 9 onwards has significant changes to library management and class reflection which has required\u202fnumerous changes to the\u202fLearn application. To assist developers in updates to existing Building Blocks we are provided guidance through these frequently asked questions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Will EVERY Building Block (B2) be required to be recompiled with Java 11?")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"No, not every B2 will need to be recompiled. However, most B2s are highly likely to use one or more libraries that will require an upgrade with Java 11 (Ex. Spring). In that case, a recompile is unavoidable.",(0,n.kt)("br",{parentName:"li"}),"In scenarios where the libraries are both Java 8 and Java 11 compatible, a B2 compiled with Java 8 will continue to work with Java 11."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Aren't JDK/runtime backward compatible? Why the need to recompile?")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"There is no need to recompile solely for the sake of runtime compatibility. The class files created by Java 8 are still executable in Java 11; however, there have been other changes in the Java runtime (library changes, etc.) that might require modification of the code. These modifications may be made in Java 8 and compiled with Java 8 making it compatible with the Java 11 runtime."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Will I have to upgrade any of the jars or libraries bundled with my B2 for Java 11?")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All jars and libraries will require an upgrade. If the B2 libraries and jars are not compatible with the Java 11 runtime used by Blackboard Learn, an upgrade is required. For example, some parts of Spring 4.5 are not compatible with Java 11. If the B2 is dependent on Spring 4.5, an update will be required to ensure compatibility with Java 11 (Spring 5.1.x)."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Can I reference the 3rd party libraries or jars that are bundled with the Blackboard Learn for my B2?")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Blackboard strongly recommends NOT referencing 3rd party libraries and jars, because Blackboard may be required to upgrade libraries or jars bundled within Learn for various reasons including security updates. These upgrades may deprecate or eliminate certain methods or classes breaking B2 dependencies. To prevent this, Blackboard recommends that a B2 includes its own copies of dependent jars."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Does installer detect JDK version (i.e. did Blackboard update to detect/require Java 11)?")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Yes, the Blackboard installer is updated with logic to detect the minimum version of the JDK11 runtime supported by the Blackboard Learn build place."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Will B2 developers or Self Hosted system administrators need to make environment changes?")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Only integrations involving command line invocation will need to make environmental changes. Scenarios invoking Java from a script would need to include the argument "--add-modules=ALL-SYSTEM" to prevent potential module related errors.'),(0,n.kt)("li",{parentName:"ul"},'Depending on the client installation, there could be risk of StackOverflow due to the size of the callstack resolving class files. Tomcat can be modified via bb-config.properties setting "bbconfig.max.stacksize.tomcat". Default minimum is 1M'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"What is the impact of switching to Corretto 11 distribution of OpenJDK?")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"With our AWS partnership, we have a path to ongoing support for Java that isn\u2019t limited by the OpenJDK support timeframe and is simpler than prior support contract processes."),(0,n.kt)("li",{parentName:"ul"},"It will be fully supported by Amazon including distribution of security patches until at least August 2024 whereas the open source OpenJDK will stop receiving security patches after the 6-month release windows from the next major JDK release."),(0,n.kt)("li",{parentName:"ul"},"It has been fully tested by AWS to ensure compatibility with the Oracle Java platform."),(0,n.kt)("li",{parentName:"ul"},"It has been designed as a full drop-in replacement for all Java SE distributions."),(0,n.kt)("li",{parentName:"ul"},"There should be very minimal impact in switching to Corretto distribution beyond installing the Corretto binaries on the server platform and making sure all applications are updated to include the path to the correct binary in their startup or launch scripts."),(0,n.kt)("li",{parentName:"ul"},"Amazon uses Corretto internally which means added benefits from testing on thousands of Amazon services.\u202f Issues found internally at Amazon should be fixed and released within days."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"How can I avoid having to do frequent testing and recompiling of Building Blocks?")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"As noted above, including copies of dependent libraries in the Building Block rather than referencing them in the Learn application will help. To avoid the overhead of maintaining Building Blocks through these frequent library changes, we encourage you to also consider our ever-expanding support for LTI and REST APIs to determine when it would appropriate for you to transition your solution to these integration frameworks that aren\u2019t impacted by library changes. The LTI/REST framework has the added benefit of being supported across all Learn deployments and UX options enabling your integration to also be Ultra ready.",(0,n.kt)(u,{frontMatter:i,mdxType:"AuthorBox"}))))))}b.isMDXComponent=!0}}]);