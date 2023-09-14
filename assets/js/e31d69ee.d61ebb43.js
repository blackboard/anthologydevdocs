"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[9374],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,m=d["".concat(i,".").concat(c)]||d[c]||h[c]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const s={title:"Demo using Python",id:"python-demo",categories:"Learn Rest",published:"",edited:"",author:"Mark O'Neil"},o=void 0,l={unversionedId:"rest-apis/learn/examples/python-demo",id:"rest-apis/learn/examples/python-demo",title:"Demo using Python",description:"The rest demo script demonstrates authenticating a REST application,",source:"@site/docs/rest-apis/learn/examples/python-demo.md",sourceDirName:"rest-apis/learn/examples",slug:"/rest-apis/learn/examples/python-demo",permalink:"/docs/rest-apis/learn/examples/python-demo",draft:!1,tags:[],version:"current",frontMatter:{title:"Demo using Python",id:"python-demo",categories:"Learn Rest",published:"",edited:"",author:"Mark O'Neil"},sidebar:"documentationSidebar",previous:{title:"Demo using PHP",permalink:"/docs/rest-apis/learn/examples/php-demo"},next:{title:"Demo using Ruby",permalink:"/docs/rest-apis/learn/examples/ruby-demo"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Assumptions",id:"assumptions",level:3},{value:"Code Walkthrough",id:"code-walkthrough",level:3},{value:"Authorization and Authentication",id:"authorization-and-authentication",level:3},{value:"Calling Services",id:"calling-services",level:3},{value:"Datasources",id:"datasources",level:3},{value:"Terms",id:"terms",level:3},{value:"Courses",id:"courses",level:3},{value:"Users",id:"users",level:3},{value:"Memberships",id:"memberships",level:3},{value:"Conclusion",id:"conclusion",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=u("VersioningTracker"),h=u("AuthorBox"),c={toc:p},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{frontMatter:s,mdxType:"VersioningTracker"}),(0,r.kt)("p",null,"The rest demo script demonstrates authenticating a REST application,\nmanagement and use of the authorization token, and creating, updating,\ndiscovering, and deleting supported Learn objects."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must ","[register a developer account and application]","(/rest-apis/learn/Getting Started/registry) in the Developer Portal"),(0,r.kt)("li",{parentName:"ul"},"You must\n","[register your application]","(/rest-apis/learn/Getting Started/registry) in Learn"),(0,r.kt)("li",{parentName:"ul"},"You must also configure the script as outlined in the README for the project")),(0,r.kt)("p",null,"This webapp allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authenticate"),(0,r.kt)("li",{parentName:"ul"},"Create, Read, and Update a Data Source"),(0,r.kt)("li",{parentName:"ul"},"Create, Read, and Update a Term"),(0,r.kt)("li",{parentName:"ul"},"Create, Read, and Update a Course"),(0,r.kt)("li",{parentName:"ul"},"Create, Read, and Update a User"),(0,r.kt)("li",{parentName:"ul"},"Create, Read, and Update a Membership"),(0,r.kt)("li",{parentName:"ul"},"Delete created objects in reverse order of create - membership, user, course, term, datasource.")),(0,r.kt)("p",null,"All generated output is sent to the terminal console."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is not meant to be a Python tutorial. It will not teach you to write code\nin Python. It will, however, give a Developer familiar with Python the\nknowledge necessary to build a REST-based Web Services integration.")),(0,r.kt)("h3",{id:"assumptions"},"Assumptions"),(0,r.kt)("p",null,"This help topic assumes the Developer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is familiar with Python"),(0,r.kt)("li",{parentName:"ul"},"Has obtained a copy of the",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blackboard/BBDN-REST-DEMO_Python"}," source code")," and run as noted in the project ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blackboard/BBDN-REST-DEMO_Python/blob/master/README.md"},"README.md")," file."),(0,r.kt)("li",{parentName:"ul"},"Has a REST-enabled Learn instance.")),(0,r.kt)("h3",{id:"code-walkthrough"},"Code Walkthrough"),(0,r.kt)("p",null,"To build an integration with the Learn REST Web Services, regardless of\nthe programming language of choice, can really be summed up in two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use the Application Key and Secret to obtain an OAuth 2.0 access token, as described in the ","[Basic Authentication]","(/rest-apis/learn/Getting Started/basic-authentication) document."),(0,r.kt)("li",{parentName:"ol"},"Call the appropriate REST endpoint with the appropriate data to perform the appropriate action.")),(0,r.kt)("h3",{id:"authorization-and-authentication"},"Authorization and Authentication"),(0,r.kt)("p",null,"The REST Services rely on OAuth 2.0 Bearer Tokens for authentication. A\nrequest is made to the token endpoint with a Basic Authorization header\ncontaining the base64-encoded key:secret string as its key. The token service\nreturns a JSON object containing the Access Token, the Token Type, and the\nnumber of seconds until the token expires. The token is set to expire after\none hour, and subsequent calls to retrieve the token will return the same\ntoken with an updated expiry time until such time that the token has expired.\nThere is no refresh token and currently no revoke token method."),(0,r.kt)("p",null,"The Python code handles authentication and token management in the auth class\nin auth.py:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    \xa0\xa0\xa0 def __init__(self, URL):\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 self.SECRET = \"insert_your_application_key_here\"\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 self.KEY = \"insert_your_application_secret_here\"\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 self.CREDENTIALS = 'client_credentials'\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 self.PAYLOAD = {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 'grant_type':'client_credentials'\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 self.TOKEN = None\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 self.target_url = URL\n    \xa0 ...\n    \xa0\xa0 def setToken(self):\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 oauth_path = '/learn/api/public/v1/oauth2/token'\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 OAUTH_URL = 'https://' + self.target_url + oauth_path\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 if self.TOKEN is None:\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 session = requests.session()\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 session.mount('https://', Tls1Adapter()) # remove for production\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 # Authenticate\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 r = session.post(OAUTH_URL, data=self.PAYLOAD, auth=(self.KEY, self.SECRET), verify=False)\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print(\"[auth:setToken()] STATUS CODE: \" + str(r.status_code) )\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print(\"[auth:setToken()] RESPONSE: \" + r.text)\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if r.status_code == 200:\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 parsed_json = json.loads(r.text)\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 self.TOKEN = parsed_json['access_token']\n    ...\n")),(0,r.kt)("p",null,"The JSON response is parsed to retrieve the Token which is stored and\nretrieved for subsequent calls by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.getToken()"),". Note that the\nretrieving the stored token invokes a sanity check on token expiration,\nrequesting a fresh token if nearly expired - see ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.getToken()")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"auth.isExpired()"),"."),(0,r.kt)("h3",{id:"calling-services"},"Calling Services"),(0,r.kt)("p",null,"The individual service calls are handled by Python in service specific class\nfiles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"datasource.py"),(0,r.kt)("li",{parentName:"ul"},"term.py"),(0,r.kt)("li",{parentName:"ul"},"course.py"),(0,r.kt)("li",{parentName:"ul"},"user.py"),(0,r.kt)("li",{parentName:"ul"},"membership.py")),(0,r.kt)("p",null,"A sixth file ",(0,r.kt)("inlineCode",{parentName:"p"},"constants.py")," contains a set of constants used by the application."),(0,r.kt)("p",null,"Each of these classes creates the JSON body when appropriate and then calls\nthe appropriate HTTP Request, and return the JSON response as a String to be\ndisplayed in the terminal console window."),(0,r.kt)("p",null,"In the demo restdemo.py, each of the above objects are called using POST to\ncreate, PATCH to update, GET to read, and DELETE to delete the target object.\nNote that memberships use PUT to create a membership."),(0,r.kt)("p",null,"End points are generally defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"/learn/api/public/v1/<objecttype>/<objectId>"),". Object ID can be either the pk1, like ",(0,r.kt)("inlineCode",{parentName:"p"},"_1_1"),", or as the batch_uid. This value should be prepended by externalId:, like ",(0,r.kt)("inlineCode",{parentName:"p"},"externalId:test101"),"."),(0,r.kt)("p",null,"For example, to retrieve a course by the pk1 ",(0,r.kt)("inlineCode",{parentName:"p"},"_1_1"),", you would call ",(0,r.kt)("strong",{parentName:"p"},"GET\n/learn/api/public/v1/courses/","_","1_1"),". To retrieve by the batch_uid ",(0,r.kt)("inlineCode",{parentName:"p"},"test101"),",\nyou would call ",(0,r.kt)("strong",{parentName:"p"},"GET /learn/api/public/v1/courses/externalId:test101.")),(0,r.kt)("p",null,"Create is sent to Learn as a HTTP POST message with a JSON body that defines\nthe object. The endpoint should omit the objectId, as this will be generated\non creation."),(0,r.kt)("p",null,"Read is sent to Learn as a HTTP GET message with an empty body. The endpoint\nshould include the objectId being retrieved."),(0,r.kt)("p",null,"Update is sent to Learn as a HTTP PATCH message with a JSON body that defines\nthe object. The endpoint should include the objectId being updated."),(0,r.kt)("p",null,"Delete is sent to Learn as a HTTP DELETE message with empty body. The endpoint\nshould include the objectId being deleted."),(0,r.kt)("p",null,"The following shows the key components of the Python code for making REST\nrequests against each of the supported objects. In each case detailed messages\nare printed to the terminal screen for you to follow the process."),(0,r.kt)("h3",{id:"datasources"},"Datasources"),(0,r.kt)("p",null,"Datasources are handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"datasource.py"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Variables and Create Payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"     self.DATASOURCES_PATH = '/learn/api/public/v1/dataSources' #create(POST)/get(GET)\n     self.DATASOURCE_PATH = '/learn/api/public/v1/dataSources/externalId:'\n     authStr = 'Bearer ' + token\n    ...\n     self.PAYLOAD = {\n    \xa0\xa0\xa0\xa0 \"externalId\":DSKEXTERNALID,\n    \xa0\xa0\xa0\xa0 \"description\":\"Data Source used for REST demo\"\n     }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.post(\"https://\" + self.target_url + self.DATASOURCES_PATH, data=json.dumps(self.PAYLOAD), headers={'Authorization':authStr, 'Content-Type':'application/json'}, verify=False)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.get(\"https://\" + self.target_url + self.DATASOURCE_PATH+DSKEXTERNALID, headers={'Authorization':authStr, 'Content-Type':'application/json'}, verify=False)\n    ...\n    print(\"[DataSource:getDataSource()] RESPONSE: \" + r.text)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.patch(\"https://\" + self.target_url + self.DATASOURCE_PATH+DSKEXTERNALID, data=json.dumps(self.PAYLOAD), headers={'Authorization':authStr, 'Content-Type':'application/json'}, verify=False)\n    ...\n    print(\"[DataSource:updateDataSource()] RESPONSE: \" + r.text)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.delete(\"https://\" + self.target_url + self.DATASOURCE_PATH+DSKEXTERNALID, headers={'Authorization':authStr, 'Content-Type':'application/json'}, verify=False)\n")),(0,r.kt)("h3",{id:"terms"},"Terms"),(0,r.kt)("p",null,"Terms are handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"term.py"),". This Class contains the methods for creating,\nreading, updating and deleting Term objects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Variables and Create Payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    self.terms_Path = \'/learn/api/public/v1/terms\' #create(POST)/get(GET)\n    self.term_Path = \'/learn/api/public/v1/terms/externalId:\'\n    self.termExternalId = TERMEXTERNALID #\'BBDN-PYTHON-REST-DEMO-TERM\'\n    authStr = \'Bearer \' + token\n    self.PAYLOAD = {\n    \xa0\xa0\xa0\xa0 "externalId":self.termExternalId,\n    \xa0\xa0\xa0\xa0 "dataSourceId": dsk, #self.dskExternalId, Supported soon.\n    \xa0\xa0\xa0\xa0 "name":"REST Demo Term",\n    \xa0\xa0\xa0\xa0 "description": "Term used for REST demo",\n    \xa0\xa0\xa0\xa0 "availability": {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "duration":"Continuous"\n    \xa0\xa0\xa0\xa0\xa0 }\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.post(\"https://\" + self.target_url + self.terms_Path, data=json.dumps(self.PAYLOAD), headers={'Authorization':authStr, 'Content-Type':'application/json'}, verify=False)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    r = session.get("https://" + self.target_url + self.term_Path+self.termExternalId, headers={\'Authorization\':authStr},\xa0 verify=False)\n    ...\n    print("[Term:updateTerm()] RESPONSE: " + r.text)\n    Update\n    self.PAYLOAD = {\n    \xa0\xa0\xa0\xa0\xa0\xa0 "externalId":self.termExternalId,\n\n# Python Demo\n    \xa0\xa0\xa0\xa0\xa0\xa0 "description": "Term used for REST Python demo",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "availability": {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "duration":"continuous"\n    \xa0\xa0\xa0\xa0\xa0\xa0 }\n    }\n    ...\n    r = session.patch("https://" + self.target_url + self.term_Path+self.termExternalId, data=json.dumps(self.PAYLOAD), headers={\'Authorization\':authStr, \'Content-Type\':\'application/json\'}, verify=False)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.delete(\"https://\" + self.target_url + self.term_Path+self.termExternalId, headers={'Authorization':authStr}, verify=False)\n")),(0,r.kt)("h3",{id:"courses"},"Courses"),(0,r.kt)("p",null,"Courses are handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"course.py"),". This class contains the methods for\ncreating, reading, updating and deleting course objects ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Variables and Create Payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    self.courses_Path = \'/learn/api/public/v1/courses\' #create(POST)/get(GET)\n    self.course_Path = \'/learn/api/public/v1/courses/externalId:\'\n    self.termId = None\n    self.PAYLOAD = {\n    \xa0\xa0\xa0\xa0\xa0\xa0 "externalId":constants.COURSEEXTERNALID,\n    \xa0\xa0\xa0\xa0\xa0\xa0 "dataSourceId": dsk, #self.dskExternalId, Supported soon.\n    \xa0\xa0\xa0\xa0\xa0\xa0 "courseId":constants.COURSEEXTERNALID,\n    \xa0\xa0\xa0\xa0\xa0\xa0 "name":"Course used for REST demo",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "description":"Course used for REST demo",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "allowGuests":"true",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "readOnly": "false",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "availability": {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "duration":"continuous"\n    \xa0\xa0\xa0\xa0\xa0\xa0 }\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.post(\"https://\" + self.target_url + self.courses_Path, data=json.dumps(self.PAYLOAD), headers={'Authorization':authStr, 'Content-Type':'application/json'}, verify=False)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    r = session.get("https://" + self.target_url + self.course_Path+constants.COURSEEXTERNALID, headers={\'Authorization\':authStr},\xa0 verify=False)\n    ...\n    print("[Course:getCourse()] RESPONSE: " + r.text)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    self.PAYLOAD = {\n    \xa0\xa0\xa0\xa0\xa0\xa0 "externalId":constants.COURSEEXTERNALID,\n    \xa0\xa0\xa0\xa0\xa0\xa0 "dataSourceId": dsk, #self.dskExternalId, Supported soon.\n    \xa0\xa0\xa0\xa0\xa0\xa0 "courseId":constants.COURSEEXTERNALID,\n    \xa0\xa0\xa0\xa0\xa0\xa0 "name":"Course used for REST Python demo",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "description":"Course used for REST Python demo",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "allowGuests":"true",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "readOnly": "false",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "availability": {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "available":"Yes",\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "duration":"continuous"\n    \xa0\xa0\xa0\xa0\xa0\xa0 }\n    }\n    r = session.patch("https://" + self.target_url + self.course_Path+constants.COURSEEXTERNALID, data=json.dumps(self.PAYLOAD), headers={\'Authorization\':authStr, \'Content-Type\':\'application/json\'}, verify=False)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.delete(\"https://\" + self.target_url + self.course_Path+constants.COURSEEXTERNALID, headers={'Authorization':authStr}, verify=False)\n")),(0,r.kt)("h3",{id:"users"},"Users"),(0,r.kt)("p",null,"Users are handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"user.py"),". This class contains the methods for creating,\nreading, updating and deleting user objects ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Variables and Create Payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    self.users_Path = \'/learn/api/public/v1/users\' #create(POST)/get(GET)\n    self.user_Path = \'/learn/api/public/v1/users/externalId:\'\n    self.PAYLOAD = {\n    \xa0\xa0\xa0\xa0\xa0\xa0 "externalId":USEREXTERNALID,\n    \xa0\xa0\xa0\xa0\xa0\xa0 "dataSourceId": dsk, #self.dskExternalId, Supported soon.\n    \xa0\xa0\xa0\xa0\xa0\xa0 "userName":"python_demo",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "password":"python61",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "availability": {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "available": "Yes"\n    \xa0\xa0\xa0\xa0\xa0\xa0 },\n    \xa0\xa0\xa0\xa0\xa0\xa0 "name": {\n    \xa0\xa0\xa0\xa0\xa0\xa0 "given": "Python",\n    \xa0\xa0\xa0\xa0\xa0\xa0 "family": "Demo",\n    \xa0\xa0\xa0\xa0\xa0\xa0 },\n    \xa0\xa0\xa0\xa0\xa0\xa0 "contact": {\n    \xa0\xa0\xa0\xa0\xa0\xa0 "email": "no.one@ereh.won",\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.post(\"https://\" + self.target_url + self.users_Path, data=json.dumps(self.PAYLOAD), headers={'Authorization':authStr, 'Content-Type':'application/json'}, verify=False)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    r = session.get("https://" + self.target_url + self.user_Path+USEREXTERNALID, headers={\'Authorization\':authStr},\xa0 verify=False)\n    ...\n    print("[User:getUser()] RESPONSE: " + r.text)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    self.PAYLOAD = {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "externalId": USEREXTERNALID,\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "dataSourceId": dsk, #self.dskExternalId, Supported soon.\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "userName":"python_demo",\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "password": "python16",\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "availability": {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "available": "Yes"\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "name": {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "given": "Python",\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "family": "BbDN",\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "middle": "Demo",\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "contact": {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "email": "no.one@ereh.won",\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n    ...\n    r = session.patch("https://" + self.target_url + self.user_Path+USEREXTERNALID, data=json.dumps(self.PAYLOAD), headers={\'Authorization\':authStr, \'Content-Type\':\'application/json\'}, verify=False)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.delete(\"https://\" + self.target_url + self.user_Path+USEREXTERNALID, headers={'Authorization':authStr}, verify=False)\n")),(0,r.kt)("h3",{id:"memberships"},"Memberships"),(0,r.kt)("p",null,"Memberships (enrollment/staff) are handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"membership.py"),". This class\ncontains the methods for creating, reading, updating and deleting membership\nobjects ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Variables and Create Payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    self.PAYLOAD = {\n    \xa0\xa0\xa0\xa0\xa0\xa0 "dataSourceId":dsk, #self.dskExternalId, supported soon.\n    \xa0\xa0\xa0\xa0\xa0\xa0 "availability": {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "available":"Yes"\n    \xa0\xa0\xa0\xa0\xa0\xa0 },\n    \xa0\xa0\xa0\xa0\xa0\xa0 "courseRoleId":"Instructor"\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.put(\"https://\" + self.target_url + membership_Path, data=json.dumps(self.PAYLOAD), headers={'Authorization':authStr, 'Content-Type':'application/json'}, verify=False)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    r = session.get("https://" + self.target_url + memberships_Path, headers={\'Authorization\':authStr}, verify=False)\n    ...\n    print("[Membership:getMemberships()] RESPONSE: " + r.text)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    self.PAYLOAD = {\n    \xa0\xa0\xa0\xa0\xa0\xa0 "dataSourceId":dsk,\n    \xa0\xa0\xa0\xa0\xa0\xa0 "availability": {\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "available":"No"\n    \xa0\xa0\xa0\xa0\xa0\xa0 },\n    \xa0\xa0\xa0\xa0\xa0\xa0 "courseRoleId":"Student"\n    }\n    ...\n    r = session.patch("https://" + self.target_url + membership_Path, data=json.dumps(self.PAYLOAD), headers={\'Authorization\':authStr, \'Content-Type\':\'application/json\'}, verify=False)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    r = session.delete(\"https://\" + self.target_url + membership_Path, headers={'Authorization':authStr}, verify=False)\n")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"All of the code snippets included in this document are included in a sample\nREST Demo Python command line application available on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blackboard/BBDN-REST-DEMO_Python"},"GitHub"),".\nThere is a README.html included that talks more specifically running the code.\nFeel free to review the code and run it against a test or development Learn\ninstance to see how it works."),(0,r.kt)(h,{frontMatter:s,mdxType:"AuthorBox"}))}k.isMDXComponent=!0}}]);