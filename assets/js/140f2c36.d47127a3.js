"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[3215],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),d=n,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||r;return o?a.createElement(m,i(i({ref:t},u),{},{components:o})):a.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2899:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=o(7462),n=(o(7294),o(4137));const r={layout:"post",title:"Migrate an LTI Tool to UEF","purple-text-title":"Migrate an LTI Tool to UEF",categories:"Learn UEF",author:"Scott Hurrey",id:"rest_apis-learn-uef_tutorial_lti"},i="Tutorial: Migrate a Python LTI Tool to Ultra Extension",l={unversionedId:"REST APIs/Premium APIs/UEF/Tutorials/rest_apis-learn-uef_tutorial_lti",id:"REST APIs/Premium APIs/UEF/Tutorials/rest_apis-learn-uef_tutorial_lti",title:"Migrate an LTI Tool to UEF",description:"In this tutorial, we will be taking a basic Hello World LTI tool, and through various steps, create an Ultra Extension Framework integration, that opens a panel when a particular content item is clicked, and provides a button that allows the user to communicate back to Ultra to request that the panel be closed.",source:"@site/docs/REST APIs/Premium APIs/UEF/Tutorials/lti-to-uef-tutorial.md",sourceDirName:"REST APIs/Premium APIs/UEF/Tutorials",slug:"/REST APIs/Premium APIs/UEF/Tutorials/rest_apis-learn-uef_tutorial_lti",permalink:"/docs/REST APIs/Premium APIs/UEF/Tutorials/rest_apis-learn-uef_tutorial_lti",draft:!1,tags:[],version:"current",frontMatter:{layout:"post",title:"Migrate an LTI Tool to UEF","purple-text-title":"Migrate an LTI Tool to UEF",categories:"Learn UEF",author:"Scott Hurrey",id:"rest_apis-learn-uef_tutorial_lti"},sidebar:"documentationSidebar",previous:{title:"Configuring Ultra Extension Framework in Learn",permalink:"/docs/REST APIs/Premium APIs/UEF/Tutorials/rest_apis-learn-uef-configure"},next:{title:"Security and Tokens",permalink:"/docs/REST APIs/Premium APIs/UEF/Tutorials/rest_apis-learn-uef-security-and-tokens"}},s={},p=[{value:"Preparing the development environment",id:"preparing-the-development-environment",level:2},{value:"Step 1: Install ngrok.io",id:"step-1-install-ngrokio",level:3},{value:"Step 2: Register your LTI Application in the Developer Portal",id:"step-2-register-your-lti-application-in-the-developer-portal",level:3},{value:"Step 3: Clone the repository",id:"step-3-clone-the-repository",level:3},{value:"Step 4: Configure your Learn environment",id:"step-4-configure-your-learn-environment",level:3},{value:"Step 5: Install Docker Desktop",id:"step-5-install-docker-desktop",level:3},{value:"Step 6: Test the application",id:"step-6-test-the-application",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Let&#39;s Code",id:"lets-code",level:2},{value:"Step 1: Build a UEF shell",id:"step-1-build-a-uef-shell",level:3},{value:"Step 2: Set up communication",id:"step-2-set-up-communication",level:3},{value:"Step 3: Create a peek panel",id:"step-3-create-a-peek-panel",level:3},{value:"Step 4: Implement localStorage",id:"step-4-implement-localstorage",level:3},{value:"Summary",id:"summary",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tutorial-migrate-a-python-lti-tool-to-ultra-extension"},"Tutorial: Migrate a Python LTI Tool to Ultra Extension"),(0,n.kt)("p",null,"In this tutorial, we will be taking a basic Hello World LTI tool, and through various steps, create an Ultra Extension Framework integration, that opens a panel when a particular content item is clicked, and provides a button that allows the user to communicate back to Ultra to request that the panel be closed."),(0,n.kt)("p",null,"We will be using Python 3 and Flask for this exercise, but most of the work is done in Javascript that can be used with any language."),(0,n.kt)("p",null,"To get started, you will need to have Python installed, and you will need to clone the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/blackboard/BBDN-UEF-Python"},"tutorial repository"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/blackboard/BBDN-UEF-Python.git\n")),(0,n.kt)("p",null,"There are 5 branches:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Master"),": The base LTI tool"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"1-LTI-TO-UEF"),": This is the installation of the plumbing that allows you to begin your UEF integration"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"2-UEF-MESSAGECHANNEL"),": In this branch, we implement all of the javascript we need to create a message channel for your application and Ultra to begin talking"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"3-UEF-PANEL"),": This code implements the panel functionality"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4-UEF-LOCALSTORAGE"),": Implement localStorage to allow your embedded Javascript to pass information from Ultra to the rest of your application and vice versa")),(0,n.kt)("p",null,"We will use ",(0,n.kt)("strong",{parentName:"p"},"Docker")," and ",(0,n.kt)("strong",{parentName:"p"},"ngrok")," for this demonstration. This allows us to run an LTI tool from our local desktop without the requirement of deploying to an internet-accessible service. This is also a great way to build and test your own applications."),(0,n.kt)("p",null,"If you prefer to watch videos, each step below has a video. You can also view the entire ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Mp9tFpultaQ&list=PLbewGw29xjRa2ZQ7gs3CgisvBVvyuKhsR"},"Ultra Extension Framework - YouTube Tutorial Series"),"."),(0,n.kt)("h2",{id:"preparing-the-development-environment"},"Preparing the development environment"),(0,n.kt)("p",null,"This section will help you set up your development environment and ensure that you are ready to participate in this tutorial."),(0,n.kt)("h3",{id:"step-1-install-ngrokio"},"Step 1: Install ngrok.io"),(0,n.kt)("p",null,"We will need a way to host our UEF integration on our desktop so we don't have to deploy to a third party server every time. Ngrok makes this extremely easy. You will need to follow these steps. Below is a video to help with the process."),(0,n.kt)("iframe",{width:"361",height:"268",src:"https://www.youtube.com/embed/Mp9tFpultaQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://ngrok.io"},"https://ngrok.io")),(0,n.kt)("li",{parentName:"ol"},"Sign up for a free account if you don't already have one and login"),(0,n.kt)("li",{parentName:"ol"},"Download the installer for your system ",(0,n.kt)("a",{parentName:"li",href:"https://ngrok.com/download"},"https://ngrok.com/download")),(0,n.kt)("li",{parentName:"ol"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"https://dashboard.ngrok.com/get-started/setup"},"https://dashboard.ngrok.com/get-started/setup")," and copy your authtoken"),(0,n.kt)("li",{parentName:"ol"},"If on Mac, expand ngrok into your applications folder and add the application folder to your path. If on Windows, expand, create a folder to put ngrok.exe in, and ",(0,n.kt)("a",{parentName:"li",href:"https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/"},"add that folder to your windows Path system variable"),"."),(0,n.kt)("li",{parentName:"ol"},"In a terminal cd to your ngrok directory and enter ",(0,n.kt)("inlineCode",{parentName:"li"},"$ ngrok authtoken <your authtoken>")),(0,n.kt)("li",{parentName:"ol"},"Start a tunnel on port (5000): ",(0,n.kt)("inlineCode",{parentName:"li"},"$ ./ngrok http 5000 --hostname uef.ngrok.io"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE"),": Do not close your terminal - it must stay open while you are using the TLS connection.")),(0,n.kt)("h3",{id:"step-2-register-your-lti-application-in-the-developer-portal"},"Step 2: Register your LTI Application in the Developer Portal"),(0,n.kt)("p",null,"The next step is to register our application. Notice that we don't have any code yet. But we do know what our endpoints will be, and the developer portal doesn't really care about your code. It is simply a centralized repository that allows you to register your application once and deploy to any Learn instance. We are the only LMS that provides this centralized registration process."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"At 2:07 of the video there is discussion of not entering a JWKS URL, leaving that field blank, and having Learn generate a private key for you. The developer portal will no longer allow that. You will need to enter a JWKS URL of ",(0,n.kt)("inlineCode",{parentName:"p"},"https:<yourfqdn>/jwks/")," You will need to generate your own public.key and private.key file for your tool's use.")),(0,n.kt)("iframe",{width:"361",height:"268",src:"https://www.youtube.com/embed/E4PDgQxE5Tg",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Browse to ",(0,n.kt)("a",{parentName:"li",href:"https://developer.anthology.com"},"the developer portal")),(0,n.kt)("li",{parentName:"ol"},"If you do not have an account, register for one. The password restrictions are crazy, so be sure to read them before creating your password to save yourself some time and frustration."),(0,n.kt)("li",{parentName:"ol"},"Login to your account"),(0,n.kt)("li",{parentName:"ol"},"Under My Apps, click the + icon to create a new application."),(0,n.kt)("li",{parentName:"ol"},"Give your application a name"),(0,n.kt)("li",{parentName:"ol"},"Give your application a description"),(0,n.kt)("li",{parentName:"ol"},"Under domain, simply add uef.ngrok.io. If you are using the shared system, we will provide shared credentials, as the system will not allow you to create multiple providers with the same domain."),(0,n.kt)("li",{parentName:"ol"},"Click the toggle to expand the LTI 1.3 fields"),(0,n.kt)("li",{parentName:"ol"},"Leave the group as is"),(0,n.kt)("li",{parentName:"ol"},"For the Login Initiation URL, enter ",(0,n.kt)("inlineCode",{parentName:"li"},"https://uef.ngrok.io/login/"),". Note the trailing slash. This is required by Flask."),(0,n.kt)("li",{parentName:"ol"},"For the Tool Redirect URL, enter ",(0,n.kt)("inlineCode",{parentName:"li"},"https://uef.ngrok.io/launch/"),". Note the trailing slash. This is required by Flask."),(0,n.kt)("li",{parentName:"ol"},"For the Tool JWKS URL, enter ",(0,n.kt)("inlineCode",{parentName:"li"},"https://uef.ngrok.io/jwks/"),". This is a required update from what is shown in the video."),(0,n.kt)("li",{parentName:"ol"},"Leave the signing algorithm as is"),(0,n.kt)("li",{parentName:"ol"},"Click 'Register application and generate API Key'")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE")," Leave this page open for the duration of this tutorial or save the information in a text file. Once you leave this screen, you will not be able to retrieve the private key or the application secret.")),(0,n.kt)("h3",{id:"step-3-clone-the-repository"},"Step 3: Clone the repository"),(0,n.kt)("p",null,"The next step is to clone the repository. You do not need a github account for this."),(0,n.kt)("iframe",{width:"361",height:"268",src:"https://www.youtube.com/embed/rpUuUpK8MtQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/blackboard/BBDN-UEF-Python"},"https://github.com/blackboard/BBDN-UEF-Python"),", click the green code button, and copy the URL."),(0,n.kt)("li",{parentName:"ol"},"Open a terminal and navigate to the directory you wish to place the project in."),(0,n.kt)("li",{parentName:"ol"},"At the command-line, type: ",(0,n.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/blackboard/BBDN-UEF-Python.git")),(0,n.kt)("li",{parentName:"ol"},"Open this project in your favorite IDE"),(0,n.kt)("li",{parentName:"ol"},"In the app directory, there is a file called ",(0,n.kt)("inlineCode",{parentName:"li"},"ConfigTemplate.py"),". Copy this file and paste it into the app directory. Rename it to ",(0,n.kt)("inlineCode",{parentName:"li"},"Config.py"),". This ",(0,n.kt)("strong",{parentName:"li"},"IS")," case-sensitive."),(0,n.kt)("li",{parentName:"ol"},"Replace learnURL with the URL to your Learn instance, without the ",(0,n.kt)("inlineCode",{parentName:"li"},"https://")," ",(0,n.kt)("strong",{parentName:"li"},"<-Common Gotcha")),(0,n.kt)("li",{parentName:"ol"},"Replace restKey with your REST application key."),(0,n.kt)("li",{parentName:"ol"},"Replace restSecret with your REST application secret."),(0,n.kt)("li",{parentName:"ol"},"Replace myUrl with the https ngrok link created in step 1. Include the ",(0,n.kt)("inlineCode",{parentName:"li"},"https://")," ",(0,n.kt)("strong",{parentName:"li"},"<-Common Gotcha")),(0,n.kt)("li",{parentName:"ol"},"Save the file"),(0,n.kt)("li",{parentName:"ol"},"In the app directory, there is a file called ",(0,n.kt)("inlineCode",{parentName:"li"},"lti-template.json"),". Copy this file and paste it into the app directory. Rename it to ",(0,n.kt)("inlineCode",{parentName:"li"},"lti.json"),". This ",(0,n.kt)("strong",{parentName:"li"},"IS")," case-sensitive."),(0,n.kt)("li",{parentName:"ol"},"Replace both instances of clientId with your application ID."),(0,n.kt)("li",{parentName:"ol"},"Save the file."),(0,n.kt)("li",{parentName:"ol"},"In the app directory, generate files called ",(0,n.kt)("inlineCode",{parentName:"li"},"private.key")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"public.key"),". These ",(0,n.kt)("strong",{parentName:"li"},"ARE")," case-sensitive.\nExample: On an ",(0,n.kt)("em",{parentName:"li"},"NIX")," system with openssl installed do the following.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"openssl genrsa -out private.key 2048\nopenssl rsa -in private.key -pubout -out public.key\n")),(0,n.kt)("ol",{start:16},(0,n.kt)("li",{parentName:"ol"},"Create a directory outside of your project, and copy these four files, Config.py, lti.json, public.key and private.key, and paste them there to prevent accidental loss of these files so you don't have to recreate them later.")),(0,n.kt)("h3",{id:"step-4-configure-your-learn-environment"},"Step 4: Configure your Learn environment"),(0,n.kt)("p",null,"Now that we have our registration complete, and our application mostly configured, we need to deploy our application to Learn. Again, if you are using the shared system, we will have already done this for you. That information will be displayed at the bottom of this document."),(0,n.kt)("iframe",{width:"361",height:"268",src:"https://www.youtube.com/embed/vdXw3sztpz8",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login to Learn with Admin credentials"),(0,n.kt)("li",{parentName:"ol"},"Open the Admin panel"),(0,n.kt)("li",{parentName:"ol"},"Click on LTI Tool Providers"),(0,n.kt)("li",{parentName:"ol"},"Click on Register LTI 1.3 Tool"),(0,n.kt)("li",{parentName:"ol"},"Paste your application ID and click submit"),(0,n.kt)("li",{parentName:"ol"},"From the resulting screen, change the radio button from Exclude to Approve."),(0,n.kt)("li",{parentName:"ol"},"Copy your deployment Id."),(0,n.kt)("li",{parentName:"ol"},"In your IDE, open the lti.json file, and replace deploymentId with this value and save the file"),(0,n.kt)("li",{parentName:"ol"},"Back in Learn, click submit."),(0,n.kt)("li",{parentName:"ol"},"From the context menu next to your application, select Manage Placements"),(0,n.kt)("li",{parentName:"ol"},"On the Manage Placements screen, click create placement"),(0,n.kt)("li",{parentName:"ol"},"Give the placement a label. This is how your tool will be referenced in the user interface."),(0,n.kt)("li",{parentName:"ol"},"Provide a handle. This must be unique across this Learn instance."),(0,n.kt)("li",{parentName:"ol"},"Ensure Availability is set to Yes"),(0,n.kt)("li",{parentName:"ol"},"If you wish, you can add an icon file. This should be 50x50 and a PNG or JPG."),(0,n.kt)("li",{parentName:"ol"},"In the Tool Provider URL field, enter ",(0,n.kt)("inlineCode",{parentName:"li"},"https://uef.ngrok.io/launch/"),". Be sure to include the trailing slash. This is required by Flask."),(0,n.kt)("li",{parentName:"ol"},"Click submit."),(0,n.kt)("li",{parentName:"ol"},"Return to the System Admin panel."),(0,n.kt)("li",{parentName:"ol"},"Click REST API Integrations"),(0,n.kt)("li",{parentName:"ol"},"Click Create Integration"),(0,n.kt)("li",{parentName:"ol"},"Paste your application ID in the application ID field"),(0,n.kt)("li",{parentName:"ol"},"Assign a user. Because we are using three-legged oauth, the user you assign does not have to have any specific entitlements."),(0,n.kt)("li",{parentName:"ol"},"Ensure End User Access is set to Yes. This allows the use of three-legged oauth"),(0,n.kt)("li",{parentName:"ol"},"Set Authorized to Act as User to Yes. In normal circumstances, we would leave this as Service Default. For UEF, the user won't be able to authorize the application, so we are preemptively disabling this requirement."),(0,n.kt)("li",{parentName:"ol"},"Click Submit.")),(0,n.kt)("h3",{id:"step-5-install-docker-desktop"},"Step 5: Install Docker Desktop"),(0,n.kt)("p",null,"For ease of use, we will be using Docker. This will create the environment for us the same way every time, allowing us to focus on the code. It is Python code, so you can use ngrok and run directly on your machine, or you can push the code to a cloud repository, but in this tutorial, we will assume that you are using Docker."),(0,n.kt)("iframe",{width:"361",height:"268",src:"https://www.youtube.com/embed/siGD6-FX2uw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": If you are installing Docker Desktop on Windows 10, you will need to be sure Virtualization is configured correctly. ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/troubleshoot/#virtualization"},"This article")," will help you get things configured correctly. Of note are that virtualization must be enabled in your bios, and with Windows Linux System 2, you must ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package"},"install the linux kernel manually"),"."),(0,n.kt)("h3",{id:"step-6-test-the-application"},"Step 6: Test the application"),(0,n.kt)("iframe",{width:"361",height:"268",src:"https://www.youtube.com/embed/NmFLNAYwFOw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Get the deployment ID from Learn"),(0,n.kt)("li",{parentName:"ol"},"Add the deployment id to the lti.json file in your project and save it."),(0,n.kt)("li",{parentName:"ol"},"Open a terminal, cd to the directory where you cloned the application, and type:\n",(0,n.kt)("inlineCode",{parentName:"li"},"docker build -t uef-tutorial:0.1 ."),". Note the period at the end."),(0,n.kt)("li",{parentName:"ol"},"This creates your image. Now let's run it. From the terminal, type:\n",(0,n.kt)("inlineCode",{parentName:"li"},"docker run -p 5000:5000 --name UEFTutorial uef-tutorial:0.1")),(0,n.kt)("li",{parentName:"ol"},"Open your Docker Desktop Dashboard to inspect that the UEFTutorial app is running"),(0,n.kt)("li",{parentName:"ol"},"Browse to https URL provided by ngrok and you should see a message that the application is running."),(0,n.kt)("li",{parentName:"ol"},"Now open Learn, navigate to a course."),(0,n.kt)("li",{parentName:"ol"},"In the course outline, click the + icon and select content market."),(0,n.kt)("li",{parentName:"ol"},"Find the placement we created, and click the + icon to add it to your course outline."),(0,n.kt)("li",{parentName:"ol"},"Click the new content item. You should see your hello world message.")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If for some reason you get an error loading the site there are a few things to check:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure the tool is properly installed in Learn"),(0,n.kt)("li",{parentName:"ul"},"If you see an error similar to the one below - check your Dockerfile syntax - especially those gnarly double and single quotes:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'ERROR: yaml.parser.ParserError: while parsing a block mapping\nin "./docker-compose.yaml", line 14, column 1\nexpected <block end>, but found \'<scalar>\'\nin "./Dockerfile", line 16, column 34\n')),(0,n.kt)("p",null,"If you need to re-deploy, open docker desktop's dashboard, and click the garbage bin icon to delete the image, and then run the build and run docker commands again."),(0,n.kt)("h2",{id:"lets-code"},"Let's Code"),(0,n.kt)("p",null,"Now that we have our development environment set up and configured, its time to get to work! A couple of notes to help you navigate this tutorial."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Each step has a branch. You can use git checkout -b ","<","branchname",">"," to get the code for that branch."),(0,n.kt)("li",{parentName:"ul"},"Don't forget to update the contentId in steps 3 and 4 to point to your content item.")),(0,n.kt)("h3",{id:"step-1-build-a-uef-shell"},"Step 1: Build a UEF shell"),(0,n.kt)("p",null,"In the first step, we will make a few minor changes to our LTI tool the create an Ultra Extension Framework shell running in our Learn instance!"),(0,n.kt)("iframe",{width:"361",height:"268",src:"https://www.youtube.com/embed/6AcBJkJkgYY",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h3",{id:"step-2-set-up-communication"},"Step 2: Set up communication"),(0,n.kt)("p",null,"Next we will add to our javascript file to set up a message channel between our iframe and the Ultra UI, authorize the application using our REST Bearer Token, and subscribe to the events we want Ultra to notify us of."),(0,n.kt)("iframe",{width:"361",height:"268",src:"https://www.youtube.com/embed/YFW-C_bJcjs",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h3",{id:"step-3-create-a-peek-panel"},"Step 3: Create a peek panel"),(0,n.kt)("p",null,"Now we have a functioning Ultra Extension running, so let's do something with it. In this case, we are going to create a content item, and then listen for a user to enter a course and click on that item. When the item loads, we will open a peek panel. Remember our Hello World that we started with in our LTI tool? Well now we are displaying that same hello world in a peek panel inside of Ultra!"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Don't forget to change the contentId in the code to point to your content item.")),(0,n.kt)("iframe",{width:"361",height:"268",src:"https://www.youtube.com/embed/VcSpyZBehJU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h3",{id:"step-4-implement-localstorage"},"Step 4: Implement localStorage"),(0,n.kt)("p",null,"Cool, right? But let's put the finishing touches on this thing. We might need data in the rest of our application that only our javascript file has. We also might need a way for the rest of our application to talk to Ultra. Enter localStorage. Local Storage is a way to store things in memory that is accessible in your browser. Since all of our components are running in the same browser, we can use this to pass information around. In our example, we will take data from the message that Ultra sends us, pass it to our app, and display it in our hello world app. In addition, we will add a button to our hello world page that sends a message to our javascript file, asking Ultra to close the panel for us."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Don't forget to change the contentId in the code to point to your content item.")),(0,n.kt)("iframe",{width:"361",height:"268",src:"https://www.youtube.com/embed/bvfD_Hnf2So",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"I hope you found that fun and enlightening. As always, if you have questions, comments, or concerns, reach out to us at ",(0,n.kt)("a",{parentName:"p",href:"mailto:developers@anthology.com"},"developers@anthology.com")," and let us know!"),(0,n.kt)("p",null,"-Happy Coding"))}h.isMDXComponent=!0}}]);