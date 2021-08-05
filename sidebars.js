module.exports = {
  sidebar_for_essifLab: {
    'eSSIF-Lab':
    [
      { type: 'doc', id: 'essifLab' },
      { type: 'doc', id: 'essifLab-vision' },
      { type: 'doc', id: 'essifLab-objectives' },
      { type: 'doc', id: 'essifLab-principles' },
      { type: 'doc', id: 'essifLab-project' },
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
      { type: 'doc', id: 'essifLab-pattern-list' },
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
            label: 'Proposed models',
            items:
            [ { type: 'doc', id: 'terms/pattern-party-actor-action' },
              { type: 'doc', id: 'terms/pattern-jurisdiction' },
              { type: 'doc', id: 'terms/pattern-guardianship' },
            ]
          },
          { type: 'category',
            label: 'Envisaged models',
            items:
            [ { type: 'doc', id: 'terms/pattern-terminology' },
              { type: 'doc', id: 'terms/pattern-identity' },
              { type: 'doc', id: 'terms/pattern-identification' },
              { type: 'doc', id: 'terms/pattern-duties-and-rights' },
              { type: 'doc', id: 'terms/pattern-mandates-delegation-hiring' },
              { type: 'doc', id: 'terms/pattern-decentralized-GRC' },
            ]
          },
        ]
      },
      { type: 'doc', id: 'notations-and-conventions' },
    ],
  },
};
