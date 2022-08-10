---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: term-ref
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: term-ref
formphrases: term-ref{ss}, term-reference{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-08-04
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: term ref # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "a word or phrase that is [marked up (in a specific way)](/docs/tev2/spec-syntax/term-ref-syntax) so that it links to a particular [concept](@) (or other [knowledge artifact](@)), enabling it to be rendered in a variety of ways for the purpose of helping [readers](@) to (better) understand the intention of its [author](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Term Ref(erence)"
hoverText: "Term Ref: a word or phrase that is marked up in a specific way so that it links to a particular Concept (or other Knowledge Artifact), enabling it to be rendered in a variety of ways for the purpose of helping Rreaders understand the intention of its Author."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Term Ref** is a word or phrase that is [marked up (in a specific way)](/docs/tev2/spec-syntax/term-ref-syntax) so that it links to a particular [concept](@) (or other [knowledge artifact](@)), enabling it to be rendered in a variety of ways for the purpose of helping [readers](@) to (better) understand the intention of its [author](@).

[Authors](@) need to know the [term ref syntax](/docs/tev2/spec-syntax/term-ref-syntax) that they are expected to use.

[Curators](@), which are expected to control the ways in which authored texts are further processed (into rendered texts), will need to know the options provided by the [TRRT tool](/docs/tev2/spec-tools/trrt) in order to ensure that the [term refs](@) that are used in in authored text are rendered in the way(s) that are envisaged.

### Purpose
[Term refs](@) make it easy for [authors](@) to associate some word(s) or phrase(s) with a specific [knowledge artifact](@), c.q. the [curated text](@) that (authoritatively) documents it. Also, [term refs](@) enable authored texts to be rendered in various ways, each of which is capable of converting such [term refs](@) into effects that help [readers](@) to (better) understand what the [author(s)](@) of the text intended when using a [term](@) or phrase.