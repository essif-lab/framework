---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: term-attrs
# TEv2: generic front-matter for curated texts
scope: tev2
termattrs: concept
termid: term-attrs
grouptags:
synonyms:
formphrases: term-attr{ss}
status: proposed
created: 2022-06-06
updated: 2022-08-10
contributors: RieksJ
# TEv2: attrs-specific front-matter for attrs `concept`
isa: identifier
glossaryText: "a list of [attributes](term-attrs@) that enable one to distinguish between [knowledge artifacts](@) that have the same [term name](@) and are of the same [type](term-type@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Term Attr(ibute)s"
hoverText: "Term Attrs: a list of Attributes that enable one to distinguish between Knowledge Artifacts that have the same Term Name and are of the same Term Type."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Term Attrs** is a list of [attributes](term-attrs@) that enable one to distinguish between [knowledge artifacts](@) that have the same [term name](@) and are of the same [type](term-type@).

The ability to specify [term attrs](@) as part of a [term](@) allows us to distinguish, e.g. between [knowledge artifacts](@) that link different [concepts](@) in a similar manner. For example, a [knowledge artifact](@) about people owning real estate could have [term attrs](@) `[Src:Person, Tgt:RealEstate]`, whereas a similar [knowledge artifact](@) about organizations owning other organizations could then be distinguished through the [term attrs](@) `Src:Organization, Tgt:Organization`.

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.
The [term-ref](@) [syntax specification](/docs/tev2/spec-syntax/term-ref-syntax) specifies the syntax that [authors](@) should use as they want to use a specific [term](@) in their text.
