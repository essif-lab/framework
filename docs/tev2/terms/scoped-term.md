---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: scoped-term
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: scoped-term
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-06-06
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa: term
term: scoped term  # Text that is the name of the concept in (human readable) texts.
fullterm: "Term (Scoped)"
shorterm:
synonyms:
glossaryText: "a [term](@) that represents a specific [knowledge artifact](@) of a particular [scope](@)/context."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Term (Scoped)"
hoverText: "Scoped Term: a Term that represents a specific Knowledge Artifact of a specific Scope/context."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **scoped term** is a [term](@) that represents a specific [knowledge artifact](@) of a particular [scope](@)/context. It may refer to a (single) [definition](@), which helps people to distinguish between [entities](@) that are, and that are not instances of the [knowledge artifact](@). Also, a [scoped term](@) may be associated with a (single) [curated text](@) that (authoritatively) documents the [knowledge artifact](@) that it represents, and hence provides a description of the meaning of that [term](scoped-term@).

Within its [scope](@), [scoped terms](@) may be grouped by associating each of them with a [grouptag](@). Also, they may be selected (by the [curators](@) of the [scope](@)) to become part of (specific versions of) the [terminology](@) of that [scope](@).

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.

### Purpose
A [term](@) can have many different meanings, depending on the [scope](@)/context within which it is being used. It is useful to be able to distinguish between words/phrases without taking [scope](@)/context into account (for which we use the word [term](@)), and words/phrases that are part of a specific [scope](@)/context (for which we use the phrase [scoped term](@)), e.g. to create, and properly link descriptions, [definitions](@), [curated texts](@) etc. to such [scoped terms](@).
