const sidebars = {
  essifLabSideBar: [
    { label: 'eSSIF-Lab',
      type: 'category',
      link: {type: 'doc', id: 'essifLab'},
      collapsed: false,
      items: [
        'essifLab-vision',
        'essifLab-objectives',
        'essifLab-principles',
        'essifLab-project',
        'essifLab-understanding',
        { label: 'Mental Models',
          type: 'category',
          link: {type: 'doc', id: 'essifLab-pattern-list'},
          collapsed: true,
          items: [
            { label: 'Stable models',
              type: 'category',
              collapsed: false,
              items:
              [ 'terms/pattern-party-actor-action',
                'terms/pattern-jurisdiction',
                'terms/pattern-guardianship',
              ]
            },
            { label: 'Reviewable models',
              type: 'category',
              collapsed: true,
              items:
              [ 'terms/pattern-terminology',
                'terms/pattern-identity',
                'terms/pattern-governance-and-management',
            ]
            },
            { label: 'Envisaged models',
              type: 'category',
              collapsed: true,
              items:
              [ 'terms/pattern-world-model',
                'terms/pattern-identification',
                'terms/pattern-identifier',
                'terms/pattern-trust',
                'terms/pattern-decision-making',
                'terms/pattern-decentralized-grc',
                'terms/pattern-party-representation',
                'terms/pattern-mandates-delegation-hiring',
                'terms/pattern-duties-and-rights',
              ]
            },
          ],
        },
        'essifLab-glossary',
      ],
    },
    { label: 'Framework',
      type: 'category',
      link: {type: 'doc', id: 'essifLab-fw'},
      collapsed: true,
      items: [
        'essifLab-governance',
        'essifLab-fw-bus-arch',
        'essifLab-fw-func-arch',
      ],
    },
  'essifLab-fw-backlog',
  ],
  tev2SideBar: [
    'tev2/toip-terminology-toolbox',
    'tev2/tev2-overview' ,
    'tev2/tev2-installation',
    { type: 'category',
      label: 'Specifications',
      items:
      [ 'tev2/tev2-spec-saf',
        'tev2/tev2-spec-mrg',
        'tev2/tev2-spec-gdf',
        'tev2/tev2-spec-term-ref',
      ],
    },
    { type: 'category',
      label: 'Curated Texts',
      link: {type: 'doc', id: 'tev2/tev2-spec-ctext'},
      items:
      [ 'tev2/tev2-spec-ctext-header',
        'tev2/tev2-spec-ctext-body',
        'tev2/tev2-spec-term-ref',
        'tev2/tev2-spec-mrg',
      ],
    },
    { type: 'category',
      label: 'TT-Toolbox',
      link: {type: 'doc', id: 'tev2/tev2-toolbox'},
      items:
      [ 'tev2/tev2-toolbox-use',
        'tev2/tev2-toolbox-trrt',
        'tev2/tev2-toolbox-mrgt',
      ],
    },
    'tev2/tev2-backlog',
  ],
};

module.exports = sidebars;