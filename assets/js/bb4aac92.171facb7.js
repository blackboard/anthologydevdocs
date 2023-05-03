"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[4086],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=s.createContext({}),u=function(e){var n=s.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return s.createElement(i.Provider,{value:n},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},$=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),$=r,m=d["".concat(i,".").concat($)]||d[$]||l[$]||a;return t?s.createElement(m,o(o({ref:n},c),{},{components:t})):s.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=$;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var u=2;u<a;u++)o[u]=t[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}$.displayName="MDXCreateElement"},3787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var s=t(7462),r=(t(7294),t(4137));const a={layout:"post",title:"PHP Demo",id:"rest_apis-learn-examples-php-demo",categories:"Learn Rest",author:"Scott Hurrey",doctitle:"Demo using PHP"},o="Demo using PHP",p={unversionedId:"REST APIs/Learn/Examples/rest_apis-learn-examples-php-demo",id:"REST APIs/Learn/Examples/rest_apis-learn-examples-php-demo",title:"PHP Demo",description:"The rest demo script demonstrates authenticating a REST application,",source:"@site/docs/REST APIs/Learn/Examples/php-demo.md",sourceDirName:"REST APIs/Learn/Examples",slug:"/REST APIs/Learn/Examples/rest_apis-learn-examples-php-demo",permalink:"/docs/REST APIs/Learn/Examples/rest_apis-learn-examples-php-demo",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"PHP Demo",id:"rest_apis-learn-examples-php-demo",categories:"Learn Rest",author:"Scott Hurrey",doctitle:"Demo using PHP"},sidebar:"documentationSidebar",previous:{title:"Java Demo",permalink:"/docs/REST APIs/Learn/Examples/rest_apis-learn-examples-java-demo"},next:{title:"Python Demo",permalink:"/docs/REST APIs/Learn/Examples/rest_apis-learn-examples-python-demo"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Assumptions",id:"assumptions",level:3},{value:"Code Walkthrough",id:"code-walkthrough",level:3},{value:"Authorization and Authentication",id:"authorization-and-authentication",level:3},{value:"Calling Services",id:"calling-services",level:3},{value:"Datasources",id:"datasources",level:3},{value:"Terms",id:"terms",level:3},{value:"Course",id:"course",level:3},{value:"Users",id:"users",level:3},{value:"Memberships",id:"memberships",level:3},{value:"Conclusion",id:"conclusion",level:3}],c={toc:u},d="wrapper";function l(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"demo-using-php"},"Demo using PHP"),(0,r.kt)("p",null,"The rest demo script demonstrates authenticating a REST application,\nmanagement and use of the authorization token, and creating, updating,\ndiscovering, and deleting supported Learn objects."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must ","[register a developer account and application]","(/REST APIs/Learn/Getting Started/registry) in the Developer Portal"),(0,r.kt)("li",{parentName:"ul"},"You must\n","[register your application]","(/REST APIs/Learn/Getting Started/registry) in Learn"),(0,r.kt)("li",{parentName:"ul"},"You must also configure the script as outlined in the README for the project")),(0,r.kt)("p",null,"This PHP command line Application allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authenticate"),(0,r.kt)("li",{parentName:"ul"},"Create, Read, and Update a Data Source"),(0,r.kt)("li",{parentName:"ul"},"Create, Read, and Update a Term"),(0,r.kt)("li",{parentName:"ul"},"Create, Read, and Update a Course"),(0,r.kt)("li",{parentName:"ul"},"Create, Read, and Update a User"),(0,r.kt)("li",{parentName:"ul"},"Create, Read, and Update a Membership"),(0,r.kt)("li",{parentName:"ul"},"Delete created objects in reverse order of create - membership, user, course, term, datasource.")),(0,r.kt)("p",null,"All generated output is sent to the terminal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is not meant to be a PHP tutorial. It will not teach you to write code in\nPHP. It will, however, give a Developer familiar with PHP the knowledge\nnecessary to build a Web Services integration.")),(0,r.kt)("h3",{id:"assumptions"},"Assumptions"),(0,r.kt)("p",null,"This help topic assumes the Developer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is familiar with PHP"),(0,r.kt)("li",{parentName:"ul"},"has installed PHP and the HTTP_Request2 PHP Library"),(0,r.kt)("li",{parentName:"ul"},"has obtained a copy of the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blackboard/BBDN-REST-Demo-PHP"},"source code")," and built it in conjunction with the project ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blackboard/BBDN-REST-Demo-PHP/blob/master/README.md"},"README.md")," file."),(0,r.kt)("li",{parentName:"ul"},"has a REST-enabled Learn instance.")),(0,r.kt)("h3",{id:"code-walkthrough"},"Code Walkthrough"),(0,r.kt)("p",null,"To build an integration with the Learn REST Web Services, regardless of\nthe programming language of choice, can really be summed up in two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use the Application Key and Secret to obtain an OAuth 2.0 access token, as described in the ","[Basic Authentication]","(/REST APIs/Learn/Getting Started/basic-authentication) document."),(0,r.kt)("li",{parentName:"ol"},"Call the appropriate REST endpoint with the appropriate data to perform the appropriate action.")),(0,r.kt)("h3",{id:"authorization-and-authentication"},"Authorization and Authentication"),(0,r.kt)("p",null,"The REST Services rely on OAuth 2.0 Bearer Tokens for authentication. A\nrequest is made to the token endpoint with a Basic Authorization header\ncontaining the base64-encoded key:secret string as its key. The token service\nreturns a JSON object containing the Access Token, the Token Type, and the\nnumber of seconds until the token expires. The token is set to expire after\none hour, and subsequent calls to retrieve the token will return the same\ntoken with an updated expiry time until such time that the token has expired.\nThere is no refresh token and currently no revoke token method."),(0,r.kt)("p",null,"The PHP code handles this in ",(0,r.kt)("inlineCode",{parentName:"p"},"classes/Rest.class.php"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function authorize() {\n    \xa0\xa0\xa0\xa0\xa0\xa0 $constants = new Constants();\n    \xa0\xa0\xa0\xa0\xa0\xa0 $token = new Token();\n    \xa0\xa0\xa0\xa0\xa0\xa0 $request = new HTTP_Request2($constants->HOSTNAME . $constants->AUTH_PATH, HTTP_Request2::METHOD_POST);\n    \xa0\xa0\xa0\xa0\xa0\xa0 $request->setAuth($constants->KEY, $constants->SECRET, HTTP_Request2::AUTH_BASIC);\n    \xa0\xa0\xa0\xa0\xa0\xa0 $request->setBody('grant_type=client_credentials');\n    \xa0\xa0\xa0\xa0\xa0\xa0 $request->setHeader('Content-Type', 'application/x-www-form-urlencoded');\n    \xa0\xa0\xa0\xa0\xa0\xa0 try {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 $response = $request->send();\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if (200 == $response->getStatus()) {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print \" Authorize Application...\\n\";\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 $token = json_decode($response->getBody());\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } else {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 $response->getReasonPhrase();\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 $BbRestException = json_decode($response->getBody());\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 var_dump($BbRestException);\xa0\xa0\xa0\xa0\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0\xa0\xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print 'Error: ' . $e->getMessage();\n    \xa0\xa0\xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0\xa0\xa0 return $token;\n    \xa0 }\n")),(0,r.kt)("p",null,"The JSON response is serialized into the Token object, and you may then\nretrieve those values from that object."),(0,r.kt)("h3",{id:"calling-services"},"Calling Services"),(0,r.kt)("p",null,"The individual service calls are handled by the classes/Rest.class.php file.\nEach operation and object combination has its own method. Each of these\nmethods creates the JSON body by instantiating the appropriate model from the\nclasses directory when necessary, and then generates the appropriate HTTP\nRequest, ships it to Learn, and serializes the JSON response back into the\nappropriate model."),(0,r.kt)("p",null,"End points are generally defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/<objecttype>/<objectId>"),". Object ID can be either the pk1, like ",(0,r.kt)("inlineCode",{parentName:"p"},"_1_1"),", or as the batchuid. This value should be prepended by externalId:, like ",(0,r.kt)("inlineCode",{parentName:"p"},"externalId:test101"),"."),(0,r.kt)("p",null,"For example, to retrieve a course by the pk1 ",(0,r.kt)("inlineCode",{parentName:"p"},"_1_1"),", you would call ",(0,r.kt)("strong",{parentName:"p"},"GET\n/learn/api/public/v1/courses/","_","1_1"),". To retrieve by the batchuid ",(0,r.kt)("inlineCode",{parentName:"p"},"test101"),", you\nwould call ",(0,r.kt)("strong",{parentName:"p"},"GET /learn/api/public/v1/courses/externalId:test101.")),(0,r.kt)("p",null,"Create is sent to Learn as a HTTP POST message with a JSON body that defines\nthe object. The endpoint should omit the objectId, as this will be generated\non creation."),(0,r.kt)("p",null,"Read is sent to Learn as a HTTP GET message with an empty body. The endpoint\nshould include the objectId being retrieved."),(0,r.kt)("p",null,"Update is sent to Learn as a HTTP PATCH message with a JSON body that defines\nthe object. The endpoint should include the objectId being updated."),(0,r.kt)("p",null,"Delete is sent to Learn as a HTTP DELETE message with empty body. The endpoint\nshould include the objectId being deleted."),(0,r.kt)("h3",{id:"datasources"},"Datasources"),(0,r.kt)("p",null,"Datasources are handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"classes/Rest.class.php"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function createDatasource($access_token) {\n    \xa0 $constants = new Constants();\n    \xa0 $datasource = new Datasource();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->DSK_PATH, HTTP_Request2::METHOD_POST);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0 $request->setBody(json_encode($datasource));\n    \xa0\n      try {\n    \xa0     $response = $request->send();\n    \xa0\n          if (201 == $response->getStatus()) {\n    \xa0         print \"\\n Create Datasource...\\n\";\n    \xa0         $datasource = json_decode($response->getBody());\n    \xa0     } else {\n    \xa0         print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' . $response->getReasonPhrase();\n    \xa0         $BbRestException = json_decode($response->getBody());\n    \xa0         var_dump($BbRestException);\n    \xa0     }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0     print 'Error: ' . $e->getMessage();\n    \xa0 }\n    \xa0\n      return $datasource;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function readDatasource($access_token, $dsk_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $datasource = new Datasource();\n\n    \xa0 $request = new HTTP_Request2($constants->HOSTNAME . $constants->DSK_PATH . '/' . $dsk_id, HTTP_Request2::METHOD_GET);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (200 == $response->getStatus()) {\n    \xa0     print \"\\n Read Datasource...\\n\";\n    \xa0     $datasource = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException)\n        }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n    \xa0\n      return $datasource;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function updateDatasource($access_token, $dsk_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $datasource = new Datasource();\n    \xa0\n      $datasource->id = $dsk_id;\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->DSK_PATH . '/' . $dsk_id, 'PATCH');\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0 $request->setBody(json_encode($datasource));\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (200 == $response->getStatus()) {\n    \xa0     print \"\\n Update Datasource...\\n\";\n    \xa0     $datasource = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' . $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n    \xa0\n      return $datasource;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function deleteDatasource($access_token, $dsk_id) {\n    \xa0 $constants = new Constants();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->DSK_PATH . '/' . $dsk_id, HTTP_Request2::METHOD_DELETE);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (204 == $response->getStatus()) {\n    \xa0     print \"Datasource Deleted\";\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' . $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0     return FALSE;\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0   return FALSE;\n    \xa0 }\n    \xa0\n      return TRUE;\n    }\n")),(0,r.kt)("h3",{id:"terms"},"Terms"),(0,r.kt)("p",null,"Terms are handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"classes/Rest.class.php"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function createTerm($access_token, $dsk_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $term = new Term();\n    \xa0\n      $term->dataSourceId = $dsk_id;\n    \xa0 $term->availability = new Availability();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->TERM_PATH, HTTP_Request2::METHOD_POST);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0 $request->setBody(json_encode($term));\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (201 == $response->getStatus()) {\n    \xa0     print \"\\n Create Term...\\n\";\n    \xa0     $term = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n\n    \xa0 return $term;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function readTerm($access_token, $term_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $term = new Term();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->TERM_PATH . '/' . $term_id, HTTP_Request2::METHOD_GET);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (200 == $response->getStatus()) {\n    \xa0     print \"\\n Read Term...\\n\";\n    \xa0     $datasource = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n    \xa0\n      return $term;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function updateTerm($access_token, $dsk_id, $term_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $term = new Term();\n    \xa0\n      $term->id = $term_id;\n    \xa0 $term->dataSourceId = $dsk_id;\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->TERM_PATH . '/' . $term_id, 'PATCH');\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0 $request->setBody(json_encode($term));\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (200 == $response->getStatus()) {\n    \xa0     print \"\\n Update Term...\\n\";\n    \xa0     $datasource = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n    \xa0\n      return $term;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function deleteTerm($access_token, $term_id) {\n    \xa0 $constants = new Constants();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->TERM_PATH . '/' . $term_id, HTTP_Request2::METHOD_DELETE);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (204 == $response->getStatus()) {\n    \xa0     print \"Term Deleted\";\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0     return FALSE;\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0   return FALSE;\n    \xa0 }\n    \xa0\n      return TRUE;\n    }\n")),(0,r.kt)("h3",{id:"course"},"Course"),(0,r.kt)("p",null,"Courses are handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"classes/Rest.class.php"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function createCourse($access_token, $dsk_id, $term_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $course = new Course();\n    \xa0\n      $course->dataSourceId = $dsk_id;\n    \xa0 $course->termId = $term_id;\n    \xa0 $course->availability = new Availability();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->COURSE_PATH, HTTP_Request2::METHOD_POST);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0 $request->setBody(json_encode($course));\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (201 == $response->getStatus()) {\n    \xa0     print \"\\n Create Course...\\n\";\n    \xa0     $course = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n\n    \xa0 return $course;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function readCourse($access_token, $course_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $course = new Course();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->COURSE_PATH . '/' . $course_id, HTTP_Request2::METHOD_GET);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (200 == $response->getStatus()) {\n    \xa0     print \"\\n Read Course...\\n\";\n    \xa0     $course = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n\n    \xa0 return $course;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function updateCourse($access_token, $dsk_id, $course_id, $course_uuid, $course_created) {\n    \xa0 $constants = new Constants();\n    \xa0 $course = new Course();\n    \xa0\n      $course->id = $course_id;\n    \xa0 $course->uuid = $course_uuid;\n    \xa0 $course->created = $course_created;\n    \xa0 $course->dataSourceId = $dsk_id;\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->COURSE_PATH . '/' . $course_id, 'PATCH');\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0 $request->setBody(json_encode($course));\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (200 == $response->getStatus()) {\n    \xa0     print \"\\n Update Course...\\n\";\n    \xa0     $course = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n\n    \xa0 return $course;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function deleteCourse($access_token, $course_id) {\n    \xa0 $constants = new Constants();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->COURSE_PATH . '/' . $course_id, HTTP_Request2::METHOD_DELETE);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (204 == $response->getStatus()) {\n    \xa0     print \"Course Deleted\";\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0     return FALSE;\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0   return FALSE;\n    \xa0 }\n\n    \xa0 return TRUE;\n    }\n")),(0,r.kt)("h3",{id:"users"},"Users"),(0,r.kt)("p",null,"Users are handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"classes/Rest.class.php"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function createUser($access_token, $dsk_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $user = new User();\n    \xa0\n      $user->dataSourceId = $dsk_id;\n    \xa0 $user->availability = new Availability();\n    \xa0 $user->name = new Name();\n    \xa0 $user->contact = new Contact();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->USER_PATH, HTTP_Request2::METHOD_POST);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0 $request->setBody(json_encode($user));\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (201 == $response->getStatus()) {\n    \xa0     print \"\\n Create User...\\n\";\n    \xa0     $user = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n\n    \xa0 return $user;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function readUser($access_token, $user_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $user = new User();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->USER_PATH . '/' . $user_id, HTTP_Request2::METHOD_GET);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (200 == $response->getStatus()) {\n    \xa0     print \"\\n Read User...\\n\";\n    \xa0     $user = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n\n    \xa0 return $user;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function updateUser($access_token, $dsk_id, $user_id, $user_uuid, $user_created) {\n    \xa0 $constants = new Constants();\n    \xa0 $user = new User();\n    \xa0\n      $user->id = $user_id;\n    \xa0 $user->uuid = $user_uuid;\n    \xa0 $user->created = $user_created;\n    \xa0 $user->dataSourceId = $dsk_id;\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->USER_PATH . '/' . $user_id, 'PATCH');\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0 $request->setBody(json_encode($user));\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (200 == $response->getStatus()) {\n    \xa0     print \"\\n Update User...\\n\";\n    \xa0     $user = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n\n    \xa0 return $user;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function deleteUser($access_token, $user_id) {\n    \xa0 $constants = new Constants();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->USER_PATH . '/' . $user_id, HTTP_Request2::METHOD_DELETE);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (204 == $response->getStatus()) {\n    \xa0     print \"User Deleted\";\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0     return FALSE;\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0   return FALSE;\n    \xa0 }\n\n    \xa0 return TRUE;\n    }\n")),(0,r.kt)("h3",{id:"memberships"},"Memberships"),(0,r.kt)("p",null,"Memberships are handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"classes/Rest.class.php"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function createMembership($access_token, $dsk_id, $course_id, $user_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $membership = new Membership();\n    \xa0\n      $membership->dataSourceId = $dsk_id;\n    \xa0 $membership->availability = new Availability();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->COURSE_PATH . '/' . $course_id . '/users/' . $user_id, HTTP_Request2::METHOD_PUT);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0 $request->setBody(json_encode($membership));\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (201 == $response->getStatus()) {\n    \xa0     print \"\\n Create Membership...\\n\";\n    \xa0     $membership = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n\n    \xa0 return $membership;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function readMembership($access_token, $course_id, $user_id) {\n    \xa0 $constants = new Constants();\n    \xa0 $membership = new Membership();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->COURSE_PATH . '/' . $course_id . '/users/' . $user_id,\xa0 HTTP_Request2::METHOD_GET);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (200 == $response->getStatus()) {\n    \xa0     print \"\\n Read Membership...\\n\";\n    \xa0     $membership = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n\n    \xa0 return $membership;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function updateMembership($access_token, $dsk_id, $course_id, $user_id, $membership_created) {\n    \xa0 $constants = new Constants();\n    \xa0 $membership = new Membership();\n    \xa0\n      $membership->dataSourceId = $dsk_id;\n    \xa0 $membership->userId = $user_id;\n    \xa0 $membership->courseId = $course_id;\n    \xa0 $membership->created = $membership_created;\n    \xa0 $membership->availability = new Availability();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->COURSE_PATH . '/' . $course_id . '/users/' . $user_id, 'PATCH');\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0 $request->setBody(json_encode($membership));\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (200 == $response->getStatus()) {\n    \xa0     print \"\\n Update Membership...\\n\";\n    \xa0     $membership = json_decode($response->getBody());\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0 }\n\n    \xa0 return $membership;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function deleteMembership($access_token, $course_id, $user_id) {\n    \xa0 $constants = new Constants();\n    \xa0\n      $request = new HTTP_Request2($constants->HOSTNAME . $constants->COURSE_PATH . '/' . $course_id . '/users/' . $user_id, HTTP_Request2::METHOD_DELETE);\n    \xa0 $request->setHeader('Authorization', 'Bearer ' . $access_token);\n    \xa0 $request->setHeader('Content-Type', 'application/json');\n    \xa0\n      try {\n    \xa0   $response = $request->send();\n    \xa0\n        if (204 == $response->getStatus()) {\n    \xa0     print \"Membership Deleted\";\n    \xa0   } else {\n    \xa0     print 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .\xa0 $response->getReasonPhrase();\n    \xa0     $BbRestException = json_decode($response->getBody());\n    \xa0     var_dump($BbRestException);\n    \xa0     return FALSE;\n    \xa0   }\n    \xa0 } catch (HTTP_Request2_Exception $e) {\n    \xa0   print 'Error: ' . $e->getMessage();\n    \xa0   return FALSE;\n    \xa0 }\n\n    \xa0 return TRUE;\n    }\n")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"All of the code snippets included in this document at included in a sample\nREST Demo PHP application available on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blackboard/BBDN-REST-Demo-PHP"},"GitHub"),".\nThere is a README.html included that talks more specifically about building and\nrunning the code. Feel free to review the code and run it against a test or\ndevelopment Learn instance to see how it works."))}l.isMDXComponent=!0}}]);