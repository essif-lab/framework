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
        'essifLab-collaborative-understanding',
        'ssi-standards',
        'essifLab-project',
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
                'terms/pattern-identification',
                'terms/pattern-identifier',
                'terms/pattern-party-representation',
                'terms/pattern-governance-and-management',
                'terms/pattern-decentralized-grc',
            ]
            },
            { label: 'Envisaged models',
              type: 'category',
              collapsed: true,
              items:
              [ 'terms/pattern-world-model',
                'terms/pattern-semantics',
                'terms/pattern-trust',
                'terms/pattern-decision-making',
                'terms/pattern-mandates-delegation-hiring',
                'terms/pattern-duties-and-rights',
              ]
            },
          ],
        },
        'essifLab-glossary',
      ],
    },
    { label: 'Miscellaneous',
      type: 'category',
      link: {type: 'doc', id: 'miscellaneous'},
      collapsed: true,
      items: [
        'essifLab-fw-governance',
        'essifLab-fw-bus-arch',
        'essifLab-fw-func-arch',
        'essifLab-fw-backlog',
      ],
    },
  ],
  tev2SideBar: [
    'tev2/tev2-overview' ,
    { type: 'category',
      label: 'Purpose',
      link: {type: 'doc', id: 'tev2/manuals/purpose'},
      items:
      [ { type: 'category',
          label: 'Contributor Manuals',
          link: {type: 'doc', id: 'tev2/manuals/contributor'},
          items:
          [ 'tev2/manuals/contributors-wiki',
          , 'tev2/manuals/contributors-repo',
          , 'tev2/manuals/contributors-latex',
          ],
        },
        { type: 'category',
          label: 'Curator Manuals',
          link: {type: 'doc', id: 'tev2/manuals/curator'},
          items:
          [ 'tev2/manuals/tev2-installation',
            'tev2/manuals/terminology-construction',
          ],
        },
        { type: 'doc', id: 'tev2/manuals/author'},
      ],
    },
    { type: 'category',
      label: 'File Specs (for Curators)',
      items:
      [ 'tev2/spec-ctexts/ctext-spec',
        'tev2/spec-ctexts/ctext-concept',
        'tev2/spec-ctexts/ctext-pattern',
      ],
    },
    { type: 'category',
      label: 'File Specs (for Developers)',
      items:
      [ { type: 'autogenerated', dirName: 'tev2/spec-files' } ]
    },
    { type: 'category',
      label: 'Syntax Specs',
      items: [ { type: 'autogenerated', dirName: 'tev2/spec-syntax' } ]
    },
    { type: 'category',
      label: 'TEv2 Glossary',
      items: [ { type: 'autogenerated', dirName: 'tev2/terms' } ]
    },
    { type: 'category',
      label: 'Miscellaneous',
      items:
      [ 'tev2/tev2-backlog',
        'tev2/various-identifiers',
        'tev2/toip-terminology-toolbox',
      ],
    },
  ],
};

module.exports = sidebars;
