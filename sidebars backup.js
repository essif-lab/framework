module.exports = {
  sidebar_for_essifLab: {
    'eSSIF-Lab':
    [
      { type: 'category',
        label: 'General',
        collapsed: false,
        items:
        [
          { type: 'doc', id: 'essifLab' },
          { type: 'doc', id: 'essifLab-vision' },
          { type: 'doc', id: 'essifLab-objectives' },
          { type: 'doc', id: 'essifLab-principles' },
          { type: 'doc', id: 'essifLab-project' },
        ],
      },
      { type: 'category',
        label: 'Framework',
        items:
        [
          { type: 'doc', id: 'essifLab-fw' },
          { type: 'doc', id: 'essifLab-terminology' },
          { type: 'doc', id: 'essifLab-governance' },
          { type: 'doc', id: 'essifLab-fw-bus-arch' },
          { type: 'doc', id: 'essifLab-fw-func-arch' },
        ]
      },
      { type: 'doc', id: 'essifLab-glossary' },
      { type: 'category',
        label: 'Mental Models',
        items:
        [
          { type: 'doc', id: 'essifLab-pattern-list' },
          { type: 'category',
            label: 'Stable models',
            items:
            [ { type: 'doc', id: 'terms/pattern-party-actor-action' },
              { type: 'doc', id: 'terms/pattern-jurisdiction' },
              { type: 'doc', id: 'terms/pattern-guardianship' },
            ]
          },
          { type: 'category',
            label: 'Reviewable models',
            items:
            [ { type: 'doc', id: 'terms/pattern-terminology' },
              { type: 'doc', id: 'terms/pattern-identity' },
              { type: 'doc', id: 'terms/pattern-governance-and-management' },
          ]
          },
          { type: 'category',
            label: 'Envisaged models',
            items:
            [ { type: 'doc', id: 'terms/pattern-world-model' },
              { type: 'doc', id: 'terms/pattern-identification' },
              { type: 'doc', id: 'terms/pattern-identifier' },
              { type: 'doc', id: 'terms/pattern-trust' },
              { type: 'doc', id: 'terms/pattern-decision-making' },
              { type: 'doc', id: 'terms/pattern-decentralized-grc' },
              { type: 'doc', id: 'terms/pattern-party-representation' },
              { type: 'doc', id: 'terms/pattern-mandates-delegation-hiring' },
              { type: 'doc', id: 'terms/pattern-duties-and-rights' },
            ]
          },
        ]
      },
      { type: 'doc', id: 'essifLab-fw-backlog' },
      { type: 'doc', id: 'tev2-specs/tev2-overview' },
    ],
  },
  sidebar_for_terminology: {
    'Terminology':
    [
      { type: 'doc', id: 'essifLab-terminology' },
      { type: 'doc', id: 'essifLab-glossary' },
      { type: 'category',
        label: 'Mental Models',
        items:
        [
          { type: 'doc', id: 'essifLab-pattern-list' },
          { type: 'category',
            label: 'Stable models',
            items:
            [ { type: 'doc', id: 'terms/pattern-party-actor-action' },
              { type: 'doc', id: 'terms/pattern-jurisdiction' },
              { type: 'doc', id: 'terms/pattern-guardianship' },
            ]
          },
          { type: 'category',
            label: 'Reviewable models',
            items:
            [ { type: 'doc', id: 'terms/pattern-terminology' },
              { type: 'doc', id: 'terms/pattern-identity' },
              { type: 'doc', id: 'terms/pattern-governance-and-management' },
          ]
          },
          { type: 'category',
            label: 'Envisaged models',
            items:
            [ { type: 'doc', id: 'terms/pattern-world-model' },
              { type: 'doc', id: 'terms/pattern-identification' },
              { type: 'doc', id: 'terms/pattern-identifier' },
              { type: 'doc', id: 'terms/pattern-trust' },
              { type: 'doc', id: 'terms/pattern-decision-making' },
              { type: 'doc', id: 'terms/pattern-decentralized-grc' },
              { type: 'doc', id: 'terms/pattern-party-representation' },
              { type: 'doc', id: 'terms/pattern-mandates-delegation-hiring' },
              { type: 'doc', id: 'terms/pattern-duties-and-rights' },
            ]
          },
        ]
      },
      { type: 'doc', id: 'notations-and-conventions' },
      { type: 'doc', id: 'essifLab-fw-backlog' },
      { type: 'doc', id: 'tev2-specs/tev2-overview' },
    ],
  },
  sidebar_for_tev2: {
    'TEv2':
    [
      { type: 'doc', id: 'tev2-specs/tev2-overview' },
      { type: 'doc', id: 'tev2-specs/tev2-installation' },
      { type: 'doc', id: 'tev2-specs/tev2-administration' },
      { type: 'doc', id: 'tev2-specs/tev2-struct-directory' },
      { type: 'category',
        label: 'Curated Text structure',
        items:
        [ { type: 'doc', id: 'tev2-specs/tev2-struct-ctext' },
          { type: 'doc', id: 'tev2-specs/tev2-struct-ctext-header' },
          { type: 'doc', id: 'tev2-specs/tev2-struct-ctext-body' },
        ]
      },
      { type: 'doc', id: 'tev2-specs/tev2-artifact-generation' },
      { type: 'doc', id: 'tev2-specs/tev2-backlog' },
    ],
  },
};
