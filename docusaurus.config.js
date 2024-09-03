// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Anthology Developer Docs",
  tagline: "Developer Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  // url: 'https://blackboard.github.io',
  // url: 'https://anthologydevdocs.github.io',
  url: "https://docs.anthology.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',
  baseUrl: "/",
  projectName: "anthologydevdocs",
  organizationName: "Anthology",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'blackboard', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //sidebar: {
          sidebarCollapsed: true,
          sidebarCollapsible: true,
          // autoCollapseCategories: true,
          //},

          sidebarPath: require.resolve("./src/sidebar.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/OneComputerGuy/anthologydevdocs/tree/main",
        },
        blog: {
          showReadingTime: true,
          postsPerPage: "ALL",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/footer.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.png",
      navbar: {
        logo: {
          alt: "Anthology Logo",
          src: "/img/anthology-logo-light.svg",
          srcDark: "/img/anthology-logo-dark.svg",
        },
        items: [
          {
            to: "/",
            position: "right",
            label: "Home",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            type: "html",
            position: "right",
            value:
              '<a class="navbar-gh-link" href="https://github.com/blackboard/anthologydevdocs" target="_blank"><img class="navbar-gh-img-link" src="/img/github-logo.png"/></a>',
          },
          {
            type: "search",
            position: "left",
          },
        ],
      },
      sidebar: {
        sidebarCollapsed: true,
        sidebarCollapsible: true,
        hideable: true,
        autoCollapseCategories: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["en"],
        disableVersioning: true,
      },
    ],
  ],
};

module.exports = config;
