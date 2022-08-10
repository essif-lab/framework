---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: renderable-ref
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: renderable-ref
formphrases: renderable-ref{ss}, renderable-reference{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-08-04
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: renderable ref # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "a text with which the [TRRT](@) replaces a [term ref](@), that can be processed by specific third party rendering tools, the result of which is a rendering of the original [term ref](@) that has additional characteristics that help [readers](@) to (better) understand the intention of its [author](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Renderable Ref(erence)"
hoverText: "Renderable Ref(erence): a text with which the TRRT replaces a Term Ref, that can be processed by specific third party rendering tools, the result of which is a rendering of the original Term Ref that has additional characteristics that help Readers to (better) understand the intention of its Author."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Renderable Ref(erence)** is a text with which the [TRRT](@) replaces a [term ref](@), that can be processed by specific third party rendering tools, the result of which is a rendering of the original [term ref](@) that has additional characteristics that help [readers](@) to (better) understand the intention of its [author](@).

For example, when rendering a [term ref](@)
- for a static website, the [renderable ref](@) might contain texts that would produce the effect that, when a [reader](@) browses to that website and hovers its mouse over a [renderable ref](@), this will produce a popup that contains its [definition](@).
- for a PDF, the [renderable ref](@) might contain texts that would enable generator tools to produce a [glossary](@) of all [terms](@) that were referenced within the paper, which could then automatically be inserted as an appendix to the PDF.

[Curators](@), which are expected to control the ways in which authored texts are further processed (into rendered texts), will need to know the options provided by the [TRRT tool](/docs/tev2/spec-tools/trrt) in order to ensure that the [term refs](@) that are used in an authored text are rendered with the kind of [renderable refs](@) that produce the envisaged rendering effects.

### Purpose
[Renderable refs](@) enable authored texts to be rendered in various ways, depending on the kind of target towards which is rendered.