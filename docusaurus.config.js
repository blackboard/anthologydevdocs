// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Anthology Developer Documentation',
  tagline: 'APIs are cool!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blackboard.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',
  baseUrl: '/',
  projectName: 'anthologydevdocs',
  organizationName: 'Anthology',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'blackboard', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          
          //sidebar: {
            sidebarCollapsed: true,
            sidebarCollapsible: true,
            // autoCollapseCategories: true,
          //},
          

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'anthology',
        logo: {
          alt: 'Anthology Logo',
          src: 'img/ANTHOLOGY-Logo-RGB.svg',
        },
        items: [
          {
            to: '/docs/site-intro',
            // type: 'docSidebar',
            // sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/search?q=org%3Ablackboard+blackboard%2FBBDN-',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'support_us',
        content:
          // 'We are revamping our docs, please <a href="mailto:developers@anthology.com?subject=New Developer Documentation Site: ">let us know what you think!</a> </br>Note:
          'The Developer Portal was updated June 8, 2023. See <a href="https://musical-adventure-wl1kq5k.pages.github.io/docs/Developer%20Portal/devportal-intro#release_notes" target="_top"> the Developer Portal release notes</a> for more detail.',
        backgroundColor: '#262626',
        textColor: '#d5d5d5',
        isCloseable: false,
      },
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'REST APIs',
                to: '/docs/REST\ APIs/apis-intro',
              },
              {
                label: 'LTI',
                to: '/docs/LTI/lti-intro',
              },
              {
                label: 'Standards',
                to: '/docs/Standards/standards-intro',
              },
              {
                label: 'Developer Portal',
                to: '/docs/Developer%20Portal/devportal-intro',
              },
              {
                label: 'Partners',
                to: '/docs/Partners/partners-become_a_partner',
              },
              {
                label: 'Community',
                to: '/docs/Community/community-intro',
              },
              {
                label: 'Blog',
                to: '/Blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack - Blackboard Techies',
                href: 'https://join.slack.com/t/blackboardtechies/shared_invite/zt-nheykjth-wLgONrE58MS53H~oySYk1g',
              },
              {
                label: 'Anthology Developer Support',
                href: 'mailto:developers@anthology.com'
              },
            ],
          },
          {
            title: 'More...',
            items: [
              {
                label: 'Developer AMI',
                href: 'https://aws.amazon.com/marketplace/seller-profile?id=f6f7de05-e6d2-47f8-96e8-51cc4b38182b'
              },
              {
                label: 'GitHub - These docs',
                href: 'https://github.com/blackboard/anthologydevdocs',
              },
              {
                label: 'GitHub - Example projects',
                href: 'https://github.com/search?q=org%3Ablackboard+blackboard%2FBBDN-',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anthology, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          // whether to index docs pages
          indexDocs: true,
          // Whether to also index the titles of the parent categories in the sidebar of a doc page.
          indexDocSidebarParentCategories: 0,
          // whether to index blog pages
          indexBlog: true,
          // whether to index static pages
          indexPages: false,
          // language of your documentation, see next section
          language: "en",
          // The maximum number of search results shown to the user. This does _not_ affect performance of
          // searches, but simply does not display additional search results that have been found.
          maxSearchResults: 50,
          style: undefined,
        }
      ],
    ]


};

module.exports = config;
