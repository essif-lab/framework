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
        {to: 'docs/essifLab', label: 'eSSIF-Lab', position: 'left'},
        {to: 'docs/essifLab-project', label: 'EU Project', position: 'left'},
        {to: 'docs/essifLab-glossary', label: 'Glossary', position: 'left'},
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
          title: 'eSSIF-Lab',
          items: [
            {
              label: 'Community',
              to: 'docs/essifLab'
            },
            {
              label: 'Vision',
              to: 'docs/essifLab-vision'
            },
            {
              label: 'Objectives',
              to: 'docs/essifLab-objectives'
            },
            {
              label: 'Principles',
              to: 'docs/essifLab-principles'
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Project',
              to: 'docs/essifLab-project'
            },
            {
              label: 'Project website',
              href: 'https://essif-lab.eu/'
            },
            {
              label: 'Project gitlab',
              href: 'https://gitlab.grnet.gr/essif-lab/essif-lab',
            },
          ],
        },
        {
          title: 'eSSIF-lab Framework',
          items: [
            {
              label: 'Framework',
              to: 'docs/essifLab-fw'
            },
            {
              label: 'Governance',
              to: 'docs/essifLab-governance'
            },
            {
              label: 'Business-architecture',
              to: 'docs/essifLab-fw-bus-arch'
            },
            {
              label: 'Functional-architecture',
              to: 'docs/essifLab-fw-func-arch'
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
    [
      '@docusaurus-terminology/parser',
      {
        termsDir: './docs/terms',
        glossaryFilepath: './docs/glossary.md',
        noParseFiles: ['./docs/terminology-plugin-instructions.md'],
	glossaryPatternSeparator: '^'
      }
    ]
  ]
};
