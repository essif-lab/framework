---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: semantics
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: semantics
formphrases: semantics
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-06-06
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: semantics  # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "a mapping between the (tangible/textual) [terms](@) and (intangible) ideas/[concepts](@) - their meaning."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Semantics"
hoverText: "Semantics: a mapping between the (tangible/textual) Terms and (intangible) ideas/Concepts - their meaning."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
We use the term **semantics** to refer to the mapping between (tangible) [terms](@) and (intangible) [concepts](@) (their meaning, the ideas behind it). Semantics are scoped, i.e. every [scope](@) has its own semantic mapping. This implies that every [party](@) has - and maintains - its own (subjective) semantics, which is its subjective mapping of a set of terms onto the concepts/ideas in its [knowledge](@). The (erroneous) assumption that [parties](@) would (automagically) share a semantics is the cause of many misunderstandings, and hence should be identified and deleted as soon as possible.

In the [terminology pattern](pattern-terminology@), the relation `refers to` from [scoped term](@) to [concept](@) represents the semantics of [scoped terms](@).

### Purpose
The ability to distinguish between (non)semantics helps us to better understand one another, because it makes one aware of the fact that semantics is subjective, and its owner can update it. This allows such an owner to (temporarily) use terms in the same meaning as another [party](@), specifically if they agree to use [good definitions](@).

### Criteria
A semantics is a mapping, in a specific [scope](@), between (tangible) [terms](@) and (intangible) [concepts](@) (their meaning, the ideas behind it).
