module.exports = {
  sidebar_1: {
    'Framework':
    [
        // 'introduction',
        // 'business-architecture',
        // 'functional-architecture',
        // 'open_calls'
    ],
    'Business Architecture':
    [
        // 'motive',
        // 'terminology',
        // 'overview'
    ],
    'Functional Architecture':
    [
        // 'motive',
        // 'terminology',
        // 'overview',
        // 'infrastructure',
        // 'network_architecture',
        // 'high_level_transaction_flows',
        // 'detailed_transaction_flows'
    ],
  },
  sidebar_for_terminology: {
    'Terminology':
    [
      { type: 'doc', id: 'terminology' },
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
              { type: 'doc', id: 'terms/pattern-identifier' },
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
