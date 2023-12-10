const sidebars = {
  essifLabSideBar: [
    {
      label: "eSSIF-Lab",
      type: "category",
      link: { type: "doc", id: "essifLab" },
      collapsed: false,
      items: [
        "essifLab-vision",
        "essifLab-objectives",
        "essifLab-principles",
        "essifLab-collaborative-understanding",
        {
          label: "SSI Standards",
          type: "link",
          href: "https://tno-ssi-lab.github.io/standardisation-overview/",
        },
        {
          label: "Mental Models",
          type: "category",
          link: { type: "doc", id: "essifLab-pattern-list" },
          collapsed: true,
          items: [
            {
              label: "Stable models",
              type: "category",
              collapsed: false,
              items: [
                "terms/pattern-party-actor-action",
                "terms/pattern-jurisdiction",
                "terms/pattern-guardianship",
              ],
            },
            {
              label: "Reviewable models",
              type: "category",
              collapsed: true,
              items: [
                "terms/pattern-terminology",
                "terms/pattern-identity",
                "terms/pattern-identification",
                "terms/pattern-identifier",
                "terms/pattern-party-representation",
                "terms/pattern-governance-and-management",
                "terms/pattern-decentralized-grc",
              ],
            },
            {
              label: "Envisaged models",
              type: "category",
              collapsed: true,
              items: [
                "terms/pattern-world-model",
                "terms/pattern-semantics",
                "terms/pattern-trust",
                "terms/pattern-decision-making",
                "terms/pattern-mandates-delegation-hiring",
                "terms/pattern-duties-and-rights",
              ],
            },
          ],
        },
        "essifLab-glossary",
        "essifLab-project",
      ],
    },
    {
      label: "Miscellaneous",
      type: "category",
      link: { type: "doc", id: "miscellaneous" },
      collapsed: true,
      items: [
        "generic-governance-process",
        // 'essifLab-fw-bus-arch',
        "essifLab-fw-conceptual-architecture-framework",
        "essifLab-fw-backlog",
      ],
    },
  ],
};

module.exports = sidebars;
