---
title: Proctoring Tutorial
sidebar_position: 2
id: proctoring-service-tutorials
edited: ""
---

import ReactPlayer from 'react-player'

#### Overview

This series explains how to set up the UEF and LTI Proctoring Learn. We use the Blackboard GitHub repos BBDN-UEF-Python and BBDN-LTI-Tool-Provider-Node to demonstrate. Our modified BBDN-UEF-Python code is the portion of the integration that displays the proctoring settings to the instructor. The BBDN-LTI-Tool-Provider-Node code contains stubs for the LTI Proctoring Service.

#### Part 1

In this part, we get you through the configuration of the two tools. You will learn how to get a proctoring managed placement from Blackboard. At the end of this video, you will not have yet set up the UEF registration for the proctoring managed placement. Hence, when you click the "Configure proctoring settings" link in the assessment settings you will see an error in the JavaScript console.

<ReactPlayer playback={false} controls url="https://youtu.be/66bxP8Hm4kk"/>

#### Part 2

In this part, we show how to add code to the UEF Python tutorial-integration.js to register the proctoring placement, after which the "Configure proctoring settings" link will work to show the proctoring managed placement.

<ReactPlayer playback={false} controls url="https://youtu.be/bTSGkqcH9oU"/>

#### Part 3

In this part, we show how to display your proctoring configuration.

<ReactPlayer playback={false} controls url="https://youtu.be/DciK1YoaE6E"/>

#### Recap and Review

In this part, we review the fundamentals of the setup and demonstrate it working on the cookieless solution provided with Learn(tm) build 3900.13.rel31. Also shown is that the solution works great with the student preview feature.

<ReactPlayer playback={false} controls url="https://youtu.be/MRkJ3PHYoJo"/>
