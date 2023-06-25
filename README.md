# Working With The New Developer Documentation

While we will continue to deliver the Anthology Developer Documentation via this GitHub repo, we are dropping the use of Jekykll for generating the static files delivered through GitHub Pages. Instead we will be using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

With this move to Docusaurus we are adding full site search capability and looking forward to using the rich features of Docusaurus and React to improve our Developer documentation experience.
## Getting Started

:warning: Do not push, pull, fetch, or otherwise "manage" the gh-pages branch. This branch is auto maintained by main PRs and merge actions.

1. Clone this repo
2. `$ cd` to the project directory
3. `$ npm install` to install project dependencies
4. `$ npm run start` to run the Docusaurus site locally - it will open in your browser
5. Edit your pages and the site will update automatically on save
6. When you think you are done before you do a pull request ***test the build***...
7. `$ npm run build` to build the site locally. The great thing here is *everything* gets tested and if the build fails you will know... if it fails - fix it and rinse/repeat step 7 until it succeeds, then move onto step 8.
8. `$ npm run serve` to locally serve the static build of the site - if your changes look good carry on to step 9, otherwise back to step 4 (that is faster than doing a full build for each possible test cycle), make your changes, and run through steps 5-8.
9. Do a PR with your changes...
   1.  When you submit your PR an automated test is run. If the test fails it shows as failed on the PR. If it is successful, and we approve the changes requested then we will merge. The test takes about 2.5 minutes. If you have merge privileges please wait until a successful test completes before attempting the merge. Allow for the merge test to complete before deleting your branch.
   2.  When merged an auto-build takes place generating the static files for the docs.anthology.com pages site. The auto-build takes about 2 minutes.
   3.  After step 9.ii is complete, the pages-build-deploy action is run which copies the static pages file to github pages. The build-deploy takes about 2 minutes.
   4.  in 1-5 minutes the site is refreshed and delivering your new content.
10. TEST the site before claiming your ribbon!

## UEF Documentation
Due to the static nature of the UEF Documentation and that Docusaurus cannot display this via the SPA, we must place the UEF Documentation in the static `uef-documentation` directory.

> It will now open in a separate tab.

Additionally, the uef-documentation may require some additional changes in order for Docusaurus to properly display the html.
1. anchor links
   1. These are currently `<a href="<filename.html>#<anchor>">` and need to be changed to `<a href="#<anchor>">`
      1. Fix this using VSCode regular expression search\replace `.*`:
         1. find:  `"([a-zA-Z\.]*)html#`
         2. replace: `"#`
   2. Also there is no back to the Getting Started page (uef-documentation/index.html)
      1. Fix this using VSCode search\replace:
         1. find: 
         ```
         <nav class="tsd-navigation primary">
				<ul>
					<li class="label"><span>Pages</span>
         ```
         2. replace:
         ```
         <nav class="tsd-navigation primary">
            <ul>
					<li class="globals ">
						   <span><a href="../start.html" >Getting Started</a></span>
					   </li >
				   </ul >
			   </nav >
			<nav class="tsd-navigation primary">
				<ul>
					<li class="label"><span>Pages</span>
         ```
         Now all pages will have a link back to the documentation index page.
## Tips
### 404 after PR
Problem: For some reason _sometimes_ on a PR build Pages resets the site URL from docs.anthology.com back to blackboard.io/anthologydevdocs - no idea why.
Solution: 
1. Go to settings>pages and unpublish 
2. then re-run the pages-build-deployment action
3. test by going to https://docs.anthology.com
### URLs
Generally markdown links work fine in Docusaurus with the following exceptions:

1. **Blog to Docs or Docs to Blog links**: There is an 'issue' where md is not translated cross plugins (blogs and docs are delivered via plugins)
2. **Links containing Anchors**:  

For both 1 and 2 use HTML href tags. For 1 use the full URL and add `target="_top"` to open the link in the same browser tab. e.g.: `<a href="https://docs.anthology.com/docs/path-to-file" target="_top">open doc from blog</a>`

In cases where you are using anchor tags with your links - these *will not* render correctly in developer mode. You have to `$ npm run clear; npm run build; npm run serve` to test.

Docusaurus provides a complete reference for using [links in markdown](https://docusaurus.io/docs/markdown-features/links) in Docusaurus.

**important**: Please remember to change any http://localhost:3000 local developer/build links to production links https://docs.anthology.com before your PR.

### Tables
Docusaurus is not as forgiving re table markdown - fiddle with spacing at the header level or ride the HTML wave.
    