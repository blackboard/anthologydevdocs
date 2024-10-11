---
title: "LTI Launch From Ultra Course Leftnav"
author: Mark Kauffman
id: tutorials-course-leftnav
published: "2023-10-10"
---

import ReactPlayer from 'react-player'

### Overview

We've had a lot of requests asking about how to add an LTI launch to an Ultra course's left navigation (Details & Actions). If you have that question, this page is for you.

### Prerequisites

1. The Group your application is in must be UEF enabled. If it's not, file a Behind the Blackboard Support ticket. Provide the developer email address and the Group your UEF application will be in, NOT the application ID. The application ID is useless information for this. If you are a vendor, you must have a Partnership level that is Bronze or higher.

2. Complete the [Ultra Extension Framework](./01-lti-to-uef-tutorial.md) tutorial.

3. You know the handle of the managed placement for your LTI tool that you want, then click on the link in the left nav to launch. You can find this by going to the Learn admin page, opening the LTI tools, looking at your tool's managed placements, click edit on the one you want, and copy the handle. Furthermore, you'll see where this is used in the code in number six of the explanation below.

### How To Ultra Extension Framework - Create A Link to Launch An LTI Managed Placement

This video demonstrates creating a link in the Ultra course Details & Actions section that does an LTI launch.

<ReactPlayer playback={false} controls url="https://www.youtube.com/watch?v=1SNQXsaPLKg&ab_channel=AnthologyDevelopers" />

### Sample Code

You may find the related code used on the video here: [GitHub BBDN-UEF-Python](https://github.com/blackboard/BBDN-UEF-Python/tree/102-UEF-COURSE-LEFTNAV)

### Explanation of the Video and Associated Code

1. We clear the browser cache often when making changes to the integration file. Your browser will cache it, so when you make changes if you don't clear the browser cache you won't see your work.

2. Registration for a course detail message. In our onAuthorizedWithUltra function, we add the following:

```js
messageChannel.postMessage({
  type: "course:detail:register",
  registrationName: "UEF course:detail Test",
});
```

3. Add our link to the course details section. Do this as follows.

```js
if (message.data.eventType === 'portal:new' && message.data.selector === 'course.outline.details') {
	showCourseDetails(message.data.portalId, 'UEF cod Test', 'Click Here');
}

function showCourseDetails (portalId, titleName, linkName) {
	messageChannel.postMessage({
    	type: 'portal:render',
    	portalId: portalId,
    	contents: {
        	tag: 'div',
        	props: {
            	className: 'uef--course-details--container',
        	},
        	children: [
            	{
                	tag: 'button',
                	props: {
                    	className: 'uef--button--course-details',
                    	onClick: {
                        	callbackId: 'course-details-test',
                        	mode: 'sync',
                    	}
                	},

... for brevity. Read the rest of the code. Of interest here is the callbackId: 'course-details-test'
```

4. In our onMessageFromUltra function we add code to watch for the user clicking the link, the callback. It will call the openPanelCD function to open the panel that causes the LTI launch and displays its contents.

```js
// Our link was clicked. We get a callback and tell Ultra to open our course details panel
if (message.data.type === "portal:callback") {
  switch (message.data.callbackId) {
    case "course-details-test":
      openPanelCD("full", localStorage.getItem("context"));
      break;
  }
}
```

5. Our openPanelCD fuction posts a message to Ultra to open a new panel. We'll have this panel opening make the LTI launch and display the response.

```js
// COURSE-LEFTNAV tell Ultra to open our panel. It will send us a message back after
// it does. Then we render some content there in panel-3
function openPanelCD(panelSize, data) {
  localStorage.setItem("context", data);
  localStorage.setItem("action", "SHOW_PANEL");

  messageChannel.postMessage({
    type: "portal:panel",
    correlationId: "panel-3",
    panelType: panelSize,
    panelTitle: "UEF Courses Details Demo",
    attributes: {
      onClose: {
        callbackId: "panel-3-close",
      },
    },
  });
}
```

6. We add code to our renderPanelContents function. renderPanelContents gets called when Ultra responds to any of our requests to open a new panel. Remember that the handle in the code will be unique to your tool's managed placement.

```js
function renderPanelContents(message) {
	... for brevity
	// You MUST change the handle: value to match that of your LTI managed placment handle.
	// In summary the panel got opened so we put the contents of an LTI launch within.
	if (message.data.correlationId === 'panel-3') {

    	panelId = message.data.portalId;

    	const contentsToSendLti = {
        	tag: 'LtiLaunch',
        	props: {
          	handle: 'ce9718549a1d4151b62e9fdfeff15dff',
          	customParameters: JSON.stringify({
            	'keya': 'foo',
            	'keyb': 'bar',
            	'keyc': 'baz'
          	}),
          	style: {
            	width: '75%',
            	height: '75%',
          	},
        	}
    	}

    	messageChannel.postMessage({
        	type: 'portal:render',
        	portalId: message.data.portalId,
        	contents: contentsToSendLti
    	});

	}
```
