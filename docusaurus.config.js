// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
const math = require('remark-math');
const katex = require('rehype-katex');
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // This is the key part!
        // We disable the default docs instance and create our own.
        docs: false, // Important: disable the default instance
        // ✅ ADD THIS BLOCK
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        // AI Module Instance
        id: 'ai', // A unique ID for this instance
        path: 'docs/ai', // Path to the documents for this instance
        routeBasePath: 'ai', // The URL slug for this instance
        sidebarPath: './sidebarsAi.js', // Path to the sidebar file for this instance
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        // DSA Module Instance
        id: 'dsa', // A unique ID for this instance
        path: 'docs/dsa', // Path to the documents for this instance
        routeBasePath: 'dsa', // The URL slug for this instance
        sidebarPath: './sidebarsDsa.js', // Path to the sidebar file for this instance
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        // BRM Module Instance
        id: 'brm', // A unique ID for this instance
        path: 'docs/brm', // Path to the documents for this instance
        routeBasePath: 'brm', // The URL slug for this instance
        sidebarPath: './sidebarsBrm.js', // Path to the sidebar file for this instance
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        // BusM Module Instance
        id: 'busm', // A unique ID for this instance
        path: 'docs/busm', // Path to the documents for this instance
        routeBasePath: 'busm', // The URL slug for this instance
        sidebarPath: './sidebarsBusm.js', // Path to the sidebar file for this instance
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        // ART Module Instance
        id: 'art', // A unique ID for this instance
        path: 'docs/art', // Path to the documents for this instance
        routeBasePath: 'art', // The URL slug for this instance
        sidebarPath: './sidebarsArt.js', // Path to the sidebar file for this instance
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,700;1,400&display=swap',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css',

      type: 'text/css',
      integrity:
        'sha384-vZTG03m9tG6X5F35A1Tz30N7f1dA8kgOEjvLFIyIWee0M7F1aFMAGafhve2eFxC3',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      title: 'WBS',
      // ...
      items: [
        {
          type: 'doc',
          docId: 'module-description', // ID of the starting AI doc (e.g., ai/02-numbers/intro.md)
          position: 'left',
          label: 'AI',
          docsPluginId: 'ai', // Specify the plugin ID
        },
        {
          type: 'doc',
          docId: 'module-description', // ID of the starting DSA doc (e.g., dsa/02-numbers/intro.md)
          position: 'left',
          label: 'DSA',
          docsPluginId: 'dsa', // Specify the plugin ID
        },
        {
          type: 'doc',
          docId: 'module-description', // ID of the starting BRM doc (e.g., brm/02-numbers/intro.md)
          position: 'left',
          label: 'BRM',
          docsPluginId: 'brm', // Specify the plugin ID
        },
        {
          type: 'doc',
          docId: 'module-description', // ID of the starting BRM doc (e.g., brm/02-numbers/intro.md)
          position: 'left',
          label: 'BusM',
          docsPluginId: 'busm', // Specify the plugin ID
        },
        {
          type: 'doc',
          docId: 'module-description', // ID of the starting BRM doc (e.g., brm/02-numbers/intro.md)
          position: 'left',
          label: 'ART',
          docsPluginId: 'art', // Specify the plugin ID
        },
        // ... other navbar items like a GitHub link
      ],
    },
    docs: {
      sidebar: {
        // This enables the accordion-style, collapsed-by-default behavior
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    plugins: ['@datalayer/jupyter-docusaurus-plugin'],
    //other items go here for theme
  },
};

export default config;
