"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[925],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(58168),a=n(96540),o=n(20053),i=n(23104),l=n(56347),s=n(57485),u=n(31682),c=n(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:r}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var y=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(d(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:h},i,{className:(0,o.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=m(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(g,(0,r.A)({},e,t)),a.createElement(v,(0,r.A)({},e,t)))}function w(e){const t=(0,y.A)();return a.createElement(k,(0,r.A)({key:String(t)},e))}},56825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),o=n(11470),i=n(19365);const l={title:"Receiving the id_token",id:"idtoken-verification",sidebar_position:3,published:"",edited:""},s=void 0,u={unversionedId:"blackboard/lti/1.3/core/idtoken-verification",id:"blackboard/lti/1.3/core/idtoken-verification",title:"Receiving the id_token",description:"From the initial workflow used in previous sections, we can now work on the next part of the flow, which is handling the POST request, including the id_token.",source:"@site/docs/blackboard/lti/1.3/core/03-lti-post.md",sourceDirName:"blackboard/lti/1.3/core",slug:"/blackboard/lti/1.3/core/idtoken-verification",permalink:"/docs/blackboard/lti/1.3/core/idtoken-verification",draft:!1,editUrl:"https://github.com/blackboard/anthologydevdocs/tree/main/docs/blackboard/lti/1.3/core/03-lti-post.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Receiving the id_token",id:"idtoken-verification",sidebar_position:3,published:"",edited:""},sidebar:"documentationSidebar",previous:{title:"Authenticating using OIDC",permalink:"/docs/blackboard/lti/1.3/core/oidc-auth"},next:{title:"Optional authentication for additional services",permalink:"/docs/blackboard/lti/1.3/core/optional-requests"}},c={},d=[{value:"The flow",id:"the-flow",level:2},{value:"Steps needed to validate the token",id:"steps-needed-to-validate-the-token",level:2},{value:"Sample code",id:"sample-code",level:2}],h={toc:d},p="wrapper";function f(e){let{components:t,...l}=e;return(0,a.yg)(p,(0,r.A)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"From the initial workflow used in previous sections, we can now work on the next part of the flow, which is handling the POST request, including the id_token."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image of the LTI workflow outlining the LTI POST to the tool",src:n(85596).A,width:"1177",height:"494"})),(0,a.yg)("h2",{id:"the-flow"},"The flow"),(0,a.yg)("p",null,"Continuing after the OIDC redirect from the last section, the Developer Portal receives the OIDC authentication request from the tool and validates that the redirect URI is registered. It then redirects to Learn with a command to authenticate the LTI launch, which builds the id_token (JWT) that contains the LTI payload (user, course, resource, etc.) and signs it with its private key. Learn then auto-submits a form with the POST method to the redirect URI specified with two form parameters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"id_token")," - This is the JSON Web Token (JWT) that contains all the launch information. See ",(0,a.yg)("a",{parentName:"li",href:"https://jwt.io"},"jwt.io")," for more information on JWTs. You can also use that site to inspect any JWTs you receive or create."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"state")," - If you send a state value back in the OIDC auth response, you will receive this as a URL parameter. You can (and should) use it to ensure the user who initiated the OIDC login is the same user issuing the launch.")),(0,a.yg)("p",null,"When your tool receives this form POST from the browser, the first thing it should do is validate the state stored in the cookie. If it doesn't match, the tool should reject the request, since it could have been altered in flight."),(0,a.yg)("p",null,"The next step is to unpack the JWT and validate the signature. JWTs are comprised of three Base64-encoded strings separated by a period (.). The first part is the header, which contains the key ID (kid) and signing algorithm. The second part is the payload in JSON format, and it contains the issuer (iss), client ID (aud), user ID (sub) and other information about the launch. Your tool must look up the platform configuration for that issuer/client ID/deployment ID combination and get the platform's public key from the Developer Portal public keyset URL, using the kid in the JWT header for selecting the particular key the platform used to sign the token. The third part is the signature, which normally your code won't work with directly."),(0,a.yg)("p",null,"Your tool then uses a library of their choosing to validate the signature of the JWT. If the signature is valid, then the tool can proceed to process the rest of the JWT information and render its UI with the information it has about the LTI message."),(0,a.yg)("h2",{id:"steps-needed-to-validate-the-token"},"Steps needed to validate the token"),(0,a.yg)("p",null,"These are the steps you can follow upon receiving the id_token JWT. Keep in mind that this is not the only way to validate tokens, and any other process can be used:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Verify the token",(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},"Get the header, body, and signature from the JWT (these parts are separated by a period ",(0,a.yg)("inlineCode",{parentName:"li"},"."),")"),(0,a.yg)("li",{parentName:"ol"},"Verify the signing algorithm is what you expect. This can be found by parsing the header portion of the id_token"),(0,a.yg)("li",{parentName:"ol"},"Verify if the launch is for the proper Client ID (Application ID) by checking the ",(0,a.yg)("inlineCode",{parentName:"li"},"aud")," property of the body portion. It should match the Client ID of your tool"),(0,a.yg)("li",{parentName:"ol"},'Get the JWKS key used by Learn to sign the JWT token. This can be found by performing a GET request to the JWKS endpoint given by the Developer Portal when registering the application (field called "Public keyset URL"). From there, you can select the proper key by checking the ',(0,a.yg)("inlineCode",{parentName:"li"},"kid")," value included in the header of the JWT token against the values received from the Developer Portal"),(0,a.yg)("li",{parentName:"ol"},"Validate the signature using a JWT library, using the id_token and the key selected from the Developer Portal using the ",(0,a.yg)("inlineCode",{parentName:"li"},"kid")," value"))),(0,a.yg)("li",{parentName:"ol"},"If the validation passes, parse the body into JSON. You now have all the information you need to handle the launch of your tool")),(0,a.yg)("admonition",{title:"Verify the token with a proper library",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"To prevent any issues while verifying the token, use a JWT library that has a ",(0,a.yg)("inlineCode",{parentName:"p"},"verify")," function or something similar, since this will cryptographically validate the token.")),(0,a.yg)("h2",{id:"sample-code"},"Sample code"),(0,a.yg)("p",null,"Below, you can find a sample code that outlines how the validation of the id_token can be performed"),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(i.A,{value:"node",label:"NodeJS/ExpressJS",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="handle_post.js"',title:'"handle_post.js"'},'const jwt = require("jsonwebtoken");\nconst jwk2pem = require("pem-jwk");\n\nexports.handleIdToken = function (id_token) {\n  let parts = id_token.split(".");\n\n  let header = JSON.parse(Buffer.from(parts[0], "base64").toString());\n  let body = JSON.parse(Buffer.from(parts[1], "base64").toString());\n\n  // Verify launch is from correct party\n  // aud could be an array or a single entry\n  let clientId;\n  if (jwtPayload.body.aud instanceof Array) {\n    clientId = jwtPayload.body.aud[0];\n  } else {\n    clientId = jwtPayload.body.aud;\n  }\n\n  let publicKey = // Get public key from the configured JWKS URL using the kid in the header of the JWT\n    jwt.verify(id_token, jwk2pem(publicKey));\n\n  // All is good so run with the JWT body\n};\n')))))}f.isMDXComponent=!0},85596:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/lti_message_flow_idtoken-85d1b9bd76cb27ce3283b5e570d91a94.png"}}]);