---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: grouptag
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: grouptag
formphrases: grouptag{ss}, group-tag{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-07-28
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa: tag
term: grouptag  # Text that is the name of the concept in (human readable) texts.
fullterm: Grouptag (of/within a Scope)
shorterm:
synonyms:
glossaryText: "a [tag](@) that is used to group [terms](@) within a specific [scope](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Grouptag"
hoverText: "Grouptag: a Tag (alphanumeric string) that is used to group Terms within a specific Scope."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Grouptag** is a [tag](@) that is used to group [terms](@) within a specific [scope](@).

Grouptags may be used within a [scope](@) to tag various sorts or [terms](@), thus representing the set of [terms](@) that are associated with that [tag](@). This may be used for different purposes. One example is to tag every [term](@) that is part of a [pattern](@) with a pattern-specific tag.

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.

### Criteria
A **Grouptag** (of/within a [scope](@)) is a [tag](@) that is used within that [scope](@) to group [terms](@). It satisfies the regex `[a-z0-9_-]+`.

### Examples
Examples of grouptags are `meta-terms`, `governance-terms`, `paa-pattern-terms`, `essiflab`, or `ctwg`
