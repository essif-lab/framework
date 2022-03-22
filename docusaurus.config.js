const path = require('path');
module.exports = {
  title: 'eSSIF-Lab',
  tagline: 'eSSIF-Lab Framework',
  url: 'https://essif-lab.github.io',
  baseUrl: process.env.STAGING && process.env.STAGING === 'true' ? '/framework/' : '/',
  favicon: 'images/favicon.ico',
  organizationName: 'essif-lab',
  projectName: 'framework',
  onBrokenLinks: 'log',
  scripts: [
    { src: '/framework/js/fix-location.js',
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    autoCollapseSidebarCategories: true,
    hideableSidebar: true,
    navbar: {
      // title: 'ESSIF-Lab',
      logo: { src: 'images/essif-lab-logo.png', },
      items: [
        { to: 'docs/essifLab',              label: 'eSSIF-Lab',     position: 'left'},
        { to: 'docs/essifLab-project',      label: 'EU Project',    position: 'left'},
        { to: 'docs/essifLab-pattern-list', label: 'Mental Models', position: 'left'},
        { to: 'docs/essifLab-glossary',     label: 'Glossary',      position: 'left'},
        { to: 'docs/ssi-standards',         label: 'Standards',     position: 'right'},
        { to: 'docs/tev1/terminology-engine-v1',    label: 'TEv1',          position: 'right'},
        { to: 'docs/tev2/tev2-overview',    label: 'TEv2',          position: 'right'},
        { href: 'https://github.com/essif-lab/framework', label: 'Github', position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'eSSIF-Lab',
          items: [
            { label: 'Community',  to: 'docs/essifLab' },
            { label: 'Vision',     to: 'docs/essifLab-vision' },
            { label: 'Objectives', to: 'docs/essifLab-objectives' },
            { label: 'Principles', to: 'docs/essifLab-principles' },
          ],
        },
        {
          title: 'EU Project',
          items: [
            { label: 'Project', to: 'docs/essifLab-project' },
            { label: 'Project website',  href: 'https://essif-lab.eu/' },
            { label: '*Project* gitlab', href: 'https://gitlab.grnet.gr/essif-lab/essif-lab', },
          ],
        },
        {
          title: 'eSSIF-lab Framework',
          items: [
            { label: 'Framework', to: 'docs/essifLab-fw' },
            { label: 'Governance', to: 'docs/essifLab-governance' },
            { label: 'Business-architecture', to: 'docs/essifLab-fw-bus-arch' },
            { label: 'Functional-architecture', to: 'docs/essifLab-fw-func-arch' },
          ],
        },
        {
          title: 'eSSIF-lab Terminology',
          items: [
            { label: 'Introduction',  to: 'docs/essifLab-understanding' },
            { label: 'Glossary',      to: 'docs/essifLab-glossary' },
            { label: 'Mental Models', to: 'docs/essifLab-pattern-list' },
            { label: 'Github', href: 'https://github.com/essif-lab/framework/tree/master/docs/terms' },
          ],
        },
      ],
      copyright: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
                    <span property="dct:title">The eSSIF-Lab Framework</span> is licensed under
                    <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">
                    CC BY-SA 4.0
                      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">
                      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">
                      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1">
                    </a>.&nbsp&nbsp(Copyright © 2019-${new Date().getFullYear()} by <span property="cc:attributionName">eSSIF-Lab</span>).</p>
                    Work mostly funded under EU H2020 Research and Innovation Programme
                     - Grant Agreement Nº <a href=https://cordis.europa.eu/project/id/871932>871932</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/essif-lab/framework/-/tree/master/',
          breadcrumbs: false,
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
      { termsDir: './docs/terms',
        glossaryFilepath: './docs/glossary.md',
        noParseFiles: ['./docs/tev1/terminology-engine-v1.md'],
        glossaryPatternSeparator: '^',
        glossaryTermPatterns: ['term', 'concept']
      }
    ]
  ]
};
