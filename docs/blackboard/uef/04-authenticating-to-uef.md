---
title: 'Authenticating to UEF'
id: uef-authentication
sidebar_position: 4
edited: '2024-10-11'
---

Now that you have the knowledge of how UEF works, the first thing you need to do is authenticate to it. When you respond to the authentication request (after finishing the REST API block from the previous section) with an HTML file that contains the JS file, you will have to do the steps outlined below to authenticate and create the communication channel between Ultra and your file.

But first, let's review the scope of the integration and what information can be accessed from within the JavaScript file.

## Understanding the scope of the integration

As any file rendered by the browser, you will have a specific context that you can leverage to your advantage and, in some scenarios, get information from other sources. By definition, UEF loads your integration within an iFrame, not visible to the users, where it can send and receive messages. The initial handshake of the integration allows you to access certain parts of the parent window, but it's limited to a subset of them (usually those tied to the `window.parent` property) along with the ability to post browser-wide messages through the MessageChannel API. This last option is used to register the integration with Ultra.

## Saying hello 👋🏻

Now that we know that your integration will be scoped to your iFrame and only allowed to access certain properties from the parent, we can register and authenticate your integration. Ultra, by default, doesn't track any JavaScript file that is added to its window since they might or might not be an UEF integration, for this reason, we need to register the integration first.

To let Ultra know about your integration, you can post a browser-wide message (using the MessageChannel API), targeting the URL of the learn server and sending a specific payload to register as shown below, we recommend using a wildcard (\*) after the Learn domain to start the registration from any part of the system (useful when the user access to Learn through a specific URL other than the root page):

```javascript
window.parent.postMessage(
  {
    type: 'integration-hello',
  },
  `{learn-domain}/*`
);
```

You also need to register an Event Listener for messages, which will allow you to listen for the initial syncronization message from Ultra. The listener can be defined like this:

```javascript
addEventListener('message', (incomingMessage) => {
  // Your code here
});
```

Once Ultra is made aware of your integration, it will send a browser-wide message with the following payload:

```json
{
  "origin":"{learn_domain}",
  "data": {
	"type": "integration-hello",
  },
  "ports": [<MessageChannelPort>]
}
```

From here, you can save the `port` created through the MessageChannel constructor to continue the conversation with Ultra since it will only listen to any subsequent messages through that port.

## Authenticating our integration

Now that we have a dedicated message channel to communicate with Ultra, we can authenticate and register for specific events. The way we authenticate is through a message sent to learn including the 3-Legged oAuth token generated for the user as seen here:

```javascript
incomingMessage.ports[0].postMessage({
  type: 'authorization:authorize',
  token: 'token_received_from_3LO',
});
```

_(Building on top of the previous event listener added for messages)_

```javascript
addEventListener('message', (incomingMNessage) => {
  // Validates if the origin of the message is indeed the learn server you're expecting
  if (incomingMessage.origin !== '{learn_domain}') return;

  // Registers the integration
  if (incomingMessage.data.type === 'integration:hello') {
    // Sends the user oAuth token to be able to properly work with UEF and render information based on the user's roles
    incomingMessage.ports[0].postMessage({
      type: 'authorization:authorize',
      token: 'token_received_from_3LO',
    });
  }
});
```

If Ultra registers the application correctly, you will receive a message through that port with the following information:

```json
{
  "origin": "{learn_domain}",
  "data": {
    "type": "authorization:authorize"
  }
}
```

This message indicates that is registered and waiting for information regarding the events you want to subscribe to.

## Subscribing to events

UEF has different events that can be sent to your JavaScript file and react accordingly, from user hovers and clicks to route changes and help requests. The events available for subscription are the following:

| event            | Description                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `click`          | Triggered when a user clicks any part of the Ultra UI                                                                                 |
| `hover`          | Triggered when a user hovers any part of the Ultra UI                                                                                 |
| `portal:new`     | Triggered when the system opens a new panel (opening a course view, test settings, peek panel, etc.)                                  |
| `portal:remove`  | Triggered when a panel is closed                                                                                                      |
| `route`          | Triggered when the user finishes the navigation to another location (opening a course, changing to the Activity Stream section, etc.) |
| `route:changing` | Triggered when the user starts the navigation to another location (opposite to the `route` event)                                     |
| `lti:launch`     | Triggered when a user launches and LTI tool/placement/item                                                                            |

from here you can review what events you need and then, subscribe to them sending the following message:

```javascript
incomingMessage.ports[0].postMessage({
  type: 'event:subscribe',
  subscriptions: [
    'click',
    'hover',
    'route',
    'portal:new',
    'portal:remove',
    'lti:launch',
  ],
});
```

_(Building on top of the previous event listener added for messages)_

```javascript
addEventListener("message", (incomingMNessage) => {
  // Validates if the origin of the message is indeed the learn server you're expecting
  if (incomingMessage.origin !== "{learn_domain}") return;

  // Registers the integration
  if (incomingMessage.data.type === "integration:hello") {
	// Sends the user OAuth token to be able to properly work with UEF and render information based on the user's roles
	incomingMessage.ports[0].postMessage({
  	type: "authorization:authorize",
  	token: "token_received_from_3LO",
	});
  }

  // Received only when the registration is successful
  if (incomingMessage.data.type === "authorization:authorize") {
	// Subscribes to specific events from Ultra
	incomingMessage.ports[0].postMessage({
  	type: "event:subscribe",
  	subscriptions: [
    	"click",
    	"hover",
    	"route",
    	"portal:new",
    	"portal:remove",
    	"lti:launch",
  	],,
	});
  }
});
```

From here, any type any of the events is triggered, Ultra will send a message through the same port with a payload similar to the ones outlined below.

<details>
<summary>
Analytics events (click and hover)
</summary>

```json
{
  "analyticsId": "course.outline.detailsActionButton",
  "eventType": "click",
  "type": "event:event"
}
```

</details>

<details>
<summary>
Route Events
</summary>

```json
{
  "eventType": "route",
  "routeData": {
    "courseId": "_555_1"
  },
  "routeName": "base.courses.peek.course.outline",
  "type": "event:event"
}
```

</details>

<details>
<summary>
Portal Events
</summary>

```json
{
  "type": "event:event",
  "portalId": "some-portal-id",
  "selector": "anonymous-element",
  "selectorData": {
    "class": "pageTitle"
  },
  "eventType": "new"
}
```

</details>

## Reacting to events

Now that you're subscribed and know that events will arrive through the same MessageChannel port, you can use the same Event Listener to build your handler and react to specific events based on your needs. You can also interconnect your backend service (if needed) to this JavaScript file by performing `fetch` requests within the file.

:::caution loading times
Please be aware that fetch requests to backend services where heavy computational tasks or queries are executed are not recommended since it will severely impact the loading time of your integration and, by extent, the communication with Ultra.
:::

You can also review the entire specifications and documentation for UEF here [https://docs.anthology.com/uef-documentation/start.html](https://docs.anthology.com/uef-documentation/start.html) to know how to render information on the Ultra UI, register your help providers or create new panels/modals for your data.

We also have available some tutorials in the next section to help you understand and build your own UEF integration.
