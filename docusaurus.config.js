module.exports = {
  title: 'eSSIF-Lab',
  tagline: 'eSSIF-Lab Framework',
  url: 'https://essif-lab.pages.grnet.gr/framework',
  baseUrl: process.env.STAGING && process.env.STAGING === 'true' ? '/framework/' : '/',
  favicon: 'imgages/favicon.ico',
  organizationName: 'grnet',
  projectName: 'essif-lab',
  themeConfig: {
    navbar: {
      // title: 'ESSIF-Lab',
      logo: {
        src: 'images/eSSIF-Lab logo.png',
      },
      links: [
        {to: 'docs/essif-lab-vision-and-purpose', label: 'Vision', position: 'left'},
        {to: 'docs/introduction', label: 'Quick intro', position: 'left'},
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
        // {
        //   title: 'Framework',
        //   items: [
        //     {
        //       label: 'Introduction',
        //       to: 'docs/introduction'
        //     },
        //     {
        //       label: 'Architecture',
        //       to: 'docs/architecture'
        //     },
        //     {
        //       label: 'Open calls',
        //       to: 'docs/open_calls'
        //     },
        //   ],
        // },
        {
          title: 'Social',
          items: [
            {
              label: 'Gitlab',
              href: 'https://gitlab.grnet.gr/essif-lab/essif-lab',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
