const path = require('path');
module.exports = {
  title: 'eSSIF-Lab',
  tagline: 'eSSIF-Lab Framework',
  url: 'https://essif-lab.pages.grnet.gr/framework',
  baseUrl: process.env.STAGING && process.env.STAGING === 'true' ? '/framework/' : '/',
  favicon: 'images/favicon.ico',
  organizationName: 'grnet',
  projectName: 'essif-lab',
  onBrokenLinks: 'log',
  scripts: [
    {
      src: '/framework/js/fix-location.js',
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    navbar: {
      // title: 'ESSIF-Lab',
      logo: {
        src: 'images/eSSIF-Lab logo.png',
      },
      items: [
        {to: 'docs/project', label: 'Project', position: 'left'},
        {to: 'docs/vision-and-purpose', label: 'Vision', position: 'left'},
        {to: 'docs/business-architecture', label: 'Business Architecture', position: 'left'},
        {to: 'docs/functional-architecture', label: 'Functional Architecture', position: 'left'},
        {to: 'docs/governance', label: 'Governance', position: 'left'},
        {to: 'docs/terminology', label: 'Terminology', position: 'left'},
        {to: 'docs/ssi-standards', label: 'SSI Standardization', position: 'right'},
        {
          href: 'https://gitlab.grnet.gr/essif-lab/framework',
          label: 'Gitlab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Project',
          items: [
            {
              label: 'Project site',
              href: 'https://essif-lab.eu/'
            },
            // {
            //   label: 'Apply for Infrastructure open call',
            //   href: 'https://essif-lab-infrastructure-oriented.fundingbox.com/'
            // },
            {
              label: 'Open Calls',
              href: 'https://essif-lab.eu/open-calls/'
            },
            // {
            //   label: 'News and Events',
            //   href: 'https://essif-lab.eu/news-and-events/'
            // },
            {
              label: 'Gitlab',
              href: 'https://gitlab.grnet.gr/essif-lab/essif-lab',
            },
          ],
        },
        {
          title: 'eSSIF-lab Framework',
          items: [
            {
              label: 'Project',
              to: 'docs/project'
            },
            {
              label: 'Functional Architecture',
              to: 'docs/functional-architecture'
            },
            {
              label: 'SSI standardization',
              to: 'docs/ssi-standards'
            },
          ],
        },
        {
          title: 'eSSIF-lab Terminology',
          items: [
            {
              label: 'Introduction',
              to: 'docs/terminology'
            },
            {
              label: 'Glossary',
              to: 'docs/essifLab-glossary'
            },
            {
              label: 'Mental Models',
              to: 'docs/essifLab-pattern-list'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} eSSIF-Lab - EU H2020 Research and Innovation Programme - Grant Agreement Nº 871932 - Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
     editUrl:
     'https://gitlab.grnet.gr/essif-lab/framework/-/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, './plugins/terminology-parser')
  ]
};
