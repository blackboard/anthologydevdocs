// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blackboard Developer Docs",
  tagline: "Developer Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  // url: 'https://blackboard.github.io',
  // url: 'https://anthologydevdocs.github.io',
  url: "https://docs.blackboard.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',
  baseUrl: "/",
  projectName: "BlackboardDevDocs",
  organizationName: "Blackboard",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'blackboard', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  // This replaces the "onBrokenMarkdownLinks: throw" flag which will be deprecated on Docusaurus v4
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  onBrokenLinks: "throw",

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

          sidebarPath: require.resolve("./sidebar.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/blackboard/anthologydevdocs/tree/main",
        },
        blog: {
          showReadingTime: true,
          postsPerPage: "ALL",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          feedOptions: {
            type: "all",
            title: "Latest from Blackboard Devs",
            description:
              "Get the latest blogs and news from the Blackboard Developer Docs!",
            language: "en_US",
            copyright: `Copyright © ${new Date().getFullYear()} Blackboard T&L Inc.`,
          },
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
          alt: "Blackboard Logo",
          src: "/img/Blackboard_horizontal_dark.png",
          srcDark: "/img/Blackboard_horizontal_light.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "right" },
          {
            type: "html",
            position: "right",
            value:
              '<a class="navbar-rss-link" href="/blog/rss.xml"><img class="navbar-rss-img-link" src="/img/rss.svg"/></a>',
          },
          {
            type: "html",
            position: "right",
            value:
              '<a class="navbar-gh-link" href="https://github.com/blackboard/anthologydevdocs" target="_blank"><img class="navbar-gh-img-link" src="/img/github-logo.png"/></a>',
          },
          {
            type: "html",
            position: "left",
            value:
              '<a class="navbar-home-link" href="/"><img class="navbar-home-img-link" src="/img/home.svg"/></a>',
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
        additionalLanguages: [
          "bash",
          "diff",
          "json",
          "java",
          "javascript",
          "jsx",
          "typescript",
          "tsx",
          "python",
          "php",
          "sql",
          "yaml",
        ],
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
