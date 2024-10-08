// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aspire AI Tools Wiki',
  tagline: 'AI tools useful for developing and maintaining projects in our organization',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://aspireai-tools.github.io', // GitHub Pages URL for your organization

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wiki/', // This should match your repository name if not using root

  // GitHub pages deployment config.
  organizationName: 'aspireai-tools', // Your GitHub organization/user name
  projectName: 'wiki', // Your repository name
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          editUrl: 'https://github.com/aspireai-tools/wiki/tree/main/',
        },
        // Remove or comment out the blog configuration
        // blog: { ... },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Aspire AI Tools Wiki',
        logo: {
          alt: 'Aspire AI Logo',
          src: 'img/aspire.png',
        },
        items: [
          {
            to: '/docs/overview',  // Update this line
            label: 'Docs',
            position: 'left',
          },
          {
            href: 'https://github.com/aspireai-tools/wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Aspire AI Documentation',
                to: '/docs/overview', // Change this line from '/docs/' to '/docs/overview'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aspireai-tools/wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aspire AI. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;