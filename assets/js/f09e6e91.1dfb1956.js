"use strict";(self.webpackChunkanthology_dev_docs=self.webpackChunkanthology_dev_docs||[]).push([[6348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},39307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={title:"Using the pyLTI1p3 Library with Learn",id:"pylti13",categories:"Standards",published:"",edited:"",author:"Scott Hurrey"},r=void 0,l={unversionedId:"blackboard/lti/tutorials/pylti13",id:"blackboard/lti/tutorials/pylti13",title:"Using the pyLTI1p3 Library with Learn",description:"LTI 1.3 is a much better, much more secure option for integrating one application with another in a standard way. Python is an industry-standard language and is in use by many Blackboard institutions for building integrations.",source:"@site/docs/blackboard/lti/tutorials/py-lti-1p3.md",sourceDirName:"blackboard/lti/tutorials",slug:"/blackboard/lti/tutorials/pylti13",permalink:"/docs/blackboard/lti/tutorials/pylti13",draft:!1,editUrl:"https://github.com/OneComputerGuy/anthologydevdocs/tree/main/docs/blackboard/lti/tutorials/py-lti-1p3.md",tags:[],version:"current",frontMatter:{title:"Using the pyLTI1p3 Library with Learn",id:"pylti13",categories:"Standards",published:"",edited:"",author:"Scott Hurrey"},sidebar:"documentationSidebar",previous:{title:"LTI Advantage - Names and Roles",permalink:"/docs/blackboard/lti/tutorials/names-and-roles"},next:{title:"LTI 1.3/Advantage - 4-Part Webinar",permalink:"/docs/blackboard/lti/tutorials/migrating-testing-tool"}},p={},s=[{value:"About The Project",id:"about-the-project",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Setting Up Learn",id:"setting-up-learn",level:3},{value:"Developer Portal",id:"developer-portal",level:4},{value:"Learn System Admin",id:"learn-system-admin",level:4},{value:"Setting Up The Tool",id:"setting-up-the-tool",level:3},{value:"game.json",id:"gamejson",level:4},{value:"Private/public key pair",id:"privatepublic-key-pair",level:4},{value:"Using Heroku",id:"using-heroku",level:3},{value:"Running The Game From Learn",id:"running-the-game-from-learn",level:2},{value:"Click it to play!",id:"click-it-to-play",level:4}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LTI 1.3 is a much better, much more secure option for integrating one application with another in a standard way. Python is an industry-standard language and is in use by many Blackboard institutions for building integrations.\nThe purpose of this document is to demonstrate how to use the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/PyLTI1p3"},"pyLTI1p3")," library, built by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dmitry-viskov"},"Dmitry Viskov")," to easily integrate a Python\napplication with Learn's Ultra Experience. For the purposes of this demonstration, we will use Dmitry's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dmitry-viskov/pylti1.3-flask-example"},"pylti1.3 flask example"),"."),(0,o.kt)("h3",{id:"about-the-project"},"About The Project"),(0,o.kt)("p",null,"The Flask sample is a simple way to test all the LTI Advantage capabilities of any platform that supports it. Essentially, the application is a brick breaker type game. It uses a basic launch to load the game.\nIt uses the Names and Roles Provisioning Service to load a leaderboard, it uses the Assignments and Grades Service to save your score, and you can use Deep Linking to create links to the game with varying degrees of difficulty.\nBest of all, with a few minor configuration changes, this project works with Learn out of the box!"),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"As with any project, the first step is to clone the project to your local desktop. To do this, simply open a terminal, navigate to the directory you wish to clone the application to,\nand type ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/dmitry-viskov/pylti1.3-flask-example.git"),". If you are interested in making changes, you should fork the repo to your own account, and clone from there."),(0,o.kt)("h3",{id:"setting-up-learn"},"Setting Up Learn"),(0,o.kt)("h4",{id:"developer-portal"},"Developer Portal"),(0,o.kt)("p",null,"Now that we have the project cloned locally, we need to register the application for use with Learn. We do this via the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.anthology.com"},"developer portal"),".\nFor more information on this process, check out this ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer-portal/start-here"},"document"),". Once you have an account set up, you can simply register a new application.\nYou will be prompted to enter several pieces of information. For this project, here is what we need to enter:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Application Name"),(0,o.kt)("td",{parentName:"tr",align:null},"You can enter anything you like, but this name will display in Learn"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Py LTI 1.3 Game"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Description"),(0,o.kt)("td",{parentName:"tr",align:null},"This is a free-form field. You can enter anything you like."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"A brick-breaker-style game written by Dmitry Viskov to demonstrate LTI Advantage in Python"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Domain(s)"),(0,o.kt)("td",{parentName:"tr",align:null},"This should be the domain you plan to host the tool from. We use ",(0,o.kt)("a",{parentName:"td",href:"https://www.heroku.com"},"Heroku"),", in our example. This requires some additional code changes, documented ",(0,o.kt)("a",{parentName:"td",href:"#using-heroku"},"here")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pylti1p3-game.herokuapp.com"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Login Initiation URL"),(0,o.kt)("td",{parentName:"tr",align:null},"This is the URL that Learn will use to launch into your application to begin the OIDCLogin process"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https:pylti1p3-game.herokuapp.com/login/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tool Redirect URL(s)"),(0,o.kt)("td",{parentName:"tr",align:null},"The URL to redirect to upon successful completion of the OIDC Login"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https:pylti1p3-game.herokuapp.com/launch/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tool JWKS URL"),(0,o.kt)("td",{parentName:"tr",align:null},"The publicly accessible URL to the tool's public key. We do not use this in this project, so we will leave it blank and let the portal generate our private key"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Signing Algorithm"),(0,o.kt)("td",{parentName:"tr",align:null},"The cryptographic algorithm used to sign the JWT. Leave this as RS256"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group"),(0,o.kt)("td",{parentName:"tr",align:null},"The developer group to associate with the integration. Here is more information on ",(0,o.kt)("a",{parentName:"td",href:"/docs/developer-portal/production-groups-rest-api-and-site-registration-limits"},"groups")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"Once you fill out this form, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Register application and generate API key")," button, and you will be prompted with several pieces of information. You will only see this once, so make sure you save the data somewhere.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Done")," to take you back to the applications page."),(0,o.kt)("p",null,"We have one more step to go. Next to the name of your game, click the ellipsis ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," icon to launch the context menu and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage Placements"),". Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Register")," button.\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"Name")," field, give the placement a name that you want to display to the instructor.\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"Desciption")," field, type anything you like. Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Type"),", select ",(0,o.kt)("inlineCode",{parentName:"p"},"Deep Linking content tool"),".\nUnder ",(0,o.kt)("inlineCode",{parentName:"p"},"Target link URI"),", enter the launch URL to your tool. In our case it is ",(0,o.kt)("inlineCode",{parentName:"p"},"https://pylti1p3-game.herokuapp.com/launch/"),".\nNow click ",(0,o.kt)("inlineCode",{parentName:"p"},"Register placement"),", and we are ready to deploy the tool in Learn."),(0,o.kt)("h4",{id:"learn-system-admin"},"Learn System Admin"),(0,o.kt)("p",null,"Now that we have our application registered, we have to tell our Learn instance that we have an application we want to integrate. To do this, you will need administrator privileges.\nNavigate to your Learn server in your browser and login as an appropriate user. Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin")," link in the Ultra Base Navigation to access the System Administrator panel.\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"Integrations")," module, click the link for ",(0,o.kt)("inlineCode",{parentName:"p"},"LTI Tool Providers"),". Then in the menu bar, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Register LTI 1.3 Tool"),". You are prompted for a Client ID.\nIn the data you received from the developer portal, there was an Application ID. In LTI, this is your Client ID, and we will need it here. Paste in your Client ID and click submit.\nLearn will reach out to the Developer Portal, verify your Client ID and then display a form with all the settings available. Many of these settings are read-only.\nWe need to save the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment ID"),", make sure the tool is marked as 'Approved', and be sure to enable memberships and posting of grades. Then click submit."),(0,o.kt)("p",null,"Our game is now installed in Learn!"),(0,o.kt)("h3",{id:"setting-up-the-tool"},"Setting Up The Tool"),(0,o.kt)("p",null,"There are four files we need to modify in our tool in order to run it. In the repository you cloned to your desktop, you will see a configs directory."),(0,o.kt)("h4",{id:"gamejson"},"game.json"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"game.json"),", you will already see a section for Blackboard. It will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"https://blackboard.com": {\n    "client_id": "your client id",\n    "auth_login_url": "https://developer.anthology.com/api/v1/gateway/oidcauth",\n    "auth_token_url": "https://developer.anthology.com/api/v1/gateway/oauth2/jwttoken",\n    "key_set_url": "https://developer.anthology.com/api/v1/management/applications/<your client id>/jwks.json",\n    "key_set": null,\n    "private_key_file": "private.key",\n    "deployment_ids": ["your deployment id"]\n}\n')),(0,o.kt)("p",null,"The Blackboard URL is the ",(0,o.kt)("em",{parentName:"p"},"Issuer")," sent in the LTI launch JWT. This is always the value in Learn. The value for ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id")," should be set to your client ID (application ID from the Developer Portal).\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"auth_login_url")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"auth_token_url")," settings are always the same, and do not need to be changed. The ",(0,o.kt)("inlineCode",{parentName:"p"},"key_set_url")," is always the same, as well,\nthough it contains your client ID, so you will need to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<your client id>")," with, you guessed it, your client ID. The ",(0,o.kt)("em",{parentName:"p"},"deployment ID")," that you received when you registered your tool in learn\ngoes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment_ids")," setting. Save this file."),(0,o.kt)("h4",{id:"privatepublic-key-pair"},"Private/public key pair"),(0,o.kt)("p",null,"You need to generate your own private/public key pair in RSA format. There are many online tools or command-line tools to do this.\nThe next file we need to modify is the ",(0,o.kt)("inlineCode",{parentName:"p"},"private.key")," file, also in the configs directory. Delete the current contents, and paste the private key you generated.\nYou should put your public keyi in the ",(0,o.kt)("inlineCode",{parentName:"p"},"public.key")," file.\nLast, you'll need to convert your public key to the JWK format and put that in the public.jwk.json file."),(0,o.kt)("p",null,"We are now ready to run our code! The final step is to deploy the Game application to the server it will run on and run ",(0,o.kt)("inlineCode",{parentName:"p"},"python game/app.py"),"."),(0,o.kt)("h3",{id:"using-heroku"},"Using Heroku"),(0,o.kt)("p",null,"If you are planning to run this on Heroku, there are a few additional changes that need to be made before you deploy your code. First, Heroku needs to know what to do when your code is committed. Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"Procfile"),".\nSimply create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"Procfile")," at the root level of the game, and in it place:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"web: python game/app.py\n")),(0,o.kt)("p",null,"Now save this file."),(0,o.kt)("p",null,"Next, open up game/app.py. At the very bottom of the page, you will see an entry that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == '__main__':\n    app.run(host='0.0.0.0', port=9017)\n")),(0,o.kt)("p",null,"Heroku controls the ports that your application runs on, and setting it incorrectly renders your application useless. Furthermore, it can change from deploy-to-deploy.\nAs such, we need to pull the port number from environment variables. To do so, replace the code above with the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == '__main__':\n    port = int(os.environ.get('PORT', 33507))\n    app.run(host='0.0.0.0', port=port)\n")),(0,o.kt)("p",null,"Lastly, app.py is in the game directory rather than the root directory, so we need to make a few small adjustments. Towards the top (around line 27), you will see the Flask app being initialized:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"app = Flask('pylti1p3-game-example', template_folder='templates', static_folder='static')\n")),(0,o.kt)("p",null,"We need to account for the directory we are running in, and add the path to this declaration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"app = Flask('pylti1p3-game-example', template_folder='game/templates', static_folder='game/static')\n")),(0,o.kt)("p",null,"And finally, we need to make sure our application can find the LTI configuration file. Around line 65, you will see a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"get_lti_config_path")," and it will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_lti_config_path():\n    return os.path.join(app.root_path, '..', 'configs', 'game.json')\n")),(0,o.kt)("p",null,"Make it look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_lti_config_path():\n    return os.path.join(app.root_path, 'configs', 'game.json')\n")),(0,o.kt)("p",null,"And that's it. You can now check in your code to your Heroku dyno - ",(0,o.kt)("inlineCode",{parentName:"p"},"git push -u heroku master")," - and Heroku will build and run your application. Once its complete, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"heroku logs --tail"),"\nto see the communication between Learn and our game."),(0,o.kt)("h2",{id:"running-the-game-from-learn"},"Running The Game From Learn"),(0,o.kt)("p",null,"Now that all the setup is done, we are ready to play our game. As a user in a course with Instructor privileges, login to Blackboard and navigate to your Ultra course.\nIn the left-hand navigation, you will see a link to ",(0,o.kt)("inlineCode",{parentName:"p"},"View course & institution tools"),". Click this link. In teh corresponding peek panel, click the link to ",(0,o.kt)("inlineCode",{parentName:"p"},"Browse all course tools"),".\nUnder the ",(0,o.kt)("em",{parentName:"p"},"Institution Tools")," header, you will find the placement we created. It will be listed under the ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," you defined when creating the placement.\nClick this link, and you will be launched via LTI to a simple form that allows you to select the difficulty of the game you wish to play.\nClick the button for your selected difficulty, and the tool will automatically create a link to the game with the selected difficulty in your course outline."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": If you selected 'Launch in a new window' when you created the placement, you will have to refresh the course outline before you will see the content item.")),(0,o.kt)("p",null,"You should now have a content item called ",(0,o.kt)("inlineCode",{parentName:"p"},"Breakout <your selected difficulty> mode!"),"."),(0,o.kt)("h4",{id:"click-it-to-play"},"Click it to play!"),(0,o.kt)("p",null,"In the background, the tool uses the Names and Roles Provisioning service to create a leaderboard with the course members.\nFurther, it uses the Assignments and Grades Service to store your latest score. Pretty fancy, right?"))}c.isMDXComponent=!0}}]);