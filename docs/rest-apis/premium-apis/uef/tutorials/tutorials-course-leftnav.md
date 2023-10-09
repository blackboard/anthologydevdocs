---
title: "UEF Tutorials - LTI Launch From Ultra Course Leftnav"
categories: Learn UEF
author: Mark Kauffman
id: tutorials-course-leftnav
published: ""
edited: ""
---
<VersioningTracker frontMatter={frontMatter}/>

### Overview 
We've had a lot of requests asking about how to add an LTI launch to an Ultra course's left navigation (Details & Actions). If you have that question, this page is for you.

### Prerequisites
1. The Group your application is in must be UEF enabled. If it's not, file a Behind the Blackboard Support ticket. Provide the developer email address and the Group you UEF application will be in, NOT the application ID. The applicion ID is usless informaiton for this. If you are a vendor, you must have a Partnership level that is Bronze or higher. See See [Become a Blackboard Partner](../../../../partners/become-a-partner.md).

2. Complete the [Ultra Extension Framework](/docs/rest-apis/premium-apis/uef/tutorials/tutorials.md) tutorial.

### How To Ultra Extension Framework - Create A Link to Launch An LTI Managed Placement

[This video](https://www.youtube.com/watch?v=1SNQXsaPLKg&ab_channel=AnthologyDevelopers) demonstrates creating a link in the Ultra course Details & Actions section that does an LTI launch.

### Sample Code

You may find the related code used on the video here: [GitHub BBDN-UEF-Python](https://github.com/blackboard/BBDN-UEF-Python) Switch to the 102-UEF-COURSE-LEFTNAV branch.

### Explanation of the Video
1. We clear the browser cache often when making changes to integration file. Your browser will cache it so when you make changes if you don't clear the browser cache you won't see your work.

2. Registration for a course panel opening message. In our onAuthorizedWithUltra function we add the following:
 ``` 
 messageChannel.postMessage({
    type: "course:detail:register",
    registrationName: 'UEF course:detail Test',
});  
 ```

 
### Notice

Before releasing a UEF integration, that uses the UEF Premium APIs, to production you will be required to meet a certain level of Blackboard Partnership. See [Become a Blackboard Partner](../../../../partners/become-a-partner.md).
<AuthorBox frontMatter={frontMatter}/>
