---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: term-name
# TEv2: generic front-matter for curated texts
scope: tev2
termname: term-name
termtype: concept
termattrs:
grouptags:
synonyms:
formphrases: term-name{ss}
status: proposed
created: 2022-06-06
updated: 2022-08-10
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa: identifier
glossaryText: "an [identifier](@) that is used to represent a [knowledge artifact](@). Note that different [knowledge artifacts](@) can have the same [term name](@) (which is known as [semantically overloading](https://en.wikipedia.org/wiki/Semantic_overload))."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Term Name"
hoverText: "Term Name: an Identifier that is used to represent a Knowledge Artifact. Note that different Knowledge Artifacts can have the same Term Name (which is known as semantically overloading)."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Term Name** is an [identifier](@) that is used to represent a [knowledge artifact](@). Note that different [knowledge artifacts](@) can have the same [term name](@) (which is known as [semantically overloading](https://en.wikipedia.org/wiki/Semantic_overload)).

While a [term](@) is often thought of as a single word (or phrase), which is what we refer to as a [term name](@). However [terms](@) are better conceived as a construct that consists of multiple parts, enabling us to use the same [term name](@) for different kinds of [knowledge artifacts](@), as we often see that people do in practice.

The [terminology pattern](pattern-terminology-support@) provides an overview of how this concept fits in with related concepts.
The [term-ref](@) [syntax specification](/docs/tev2/spec-syntax/term-ref-syntax) specifies the syntax that [authors](@) should use as they want to use a specific [term](@) in their text.
