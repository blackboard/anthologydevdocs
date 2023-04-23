# Working With The New Developer Documentation

While we will continue to deliver the Anthology Developer Documentation via this GitHub repo, we are dropping the use of Jekykll for generating the static files delivered through GitHub Pages. Instead we will be using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

With this move to Docusaurus we are adding full site search capability and looking forward to using the rich features of Docusaurus and React to improve our Developer documentation experience.
## Getting Started

1. Clone this repo
2. `$ cd` to the project directory
3. `$ npm install` to install project dependencies
4. `$ npm run start` to run the Docusaurus site locally - it will open in your browser
5. Edit your pages and the site will update automatically on save
6. When you think you are done before you do a pull request ***test the build***...
7. `$ npm run build` to build the site. The great thing here is *everything* gets tested and if the build fails you will know... if it fails - fix it and rinse/repeat step 7 until it succeeds, then move onto step 8.
8. `$ npm run serve` to serve the static build of the site - if your changes look good carry on to step 9 otherwise back to step 4 (that is faster than doing a full build for each possible test cycle) and make your changes.
9. Do a PR with your changes and we'll do the rest...