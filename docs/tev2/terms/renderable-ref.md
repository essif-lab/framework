---
# TEv2 Curated Text Header
term: renderable-ref
termType: concept
isa:
glossaryTerm:
glossaryText: "a text with which the [TRRT](@) replaces a [term ref](@), that can be processed by specific third party rendering tools, the result of which is a rendering of the original [term ref](@) that has additional characteristics that help [readers](@) to (better) understand the intention of its [author](@)."
synonymOf:
grouptags:
formPhrases: renderable-ref{ss}, renderable-reference{ss}
# Curation status
status: proposed
created: 2022-06-06
updated: 2022-08-04
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Renderable Ref

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