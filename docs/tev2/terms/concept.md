---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: concept
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: concept
formphrases: concept{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-06-06
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: concept # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "the ideas/thoughts behind a classification of [entities](@) (what makes [entities](@) in that class 'the same')."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Concept"
hoverText: "Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A Concept tries to capture the idea behind a classification of entities[^1], allowing us to reason about everything in the class as if it were one thing. For example, the ideas ([mental representations](https://en.wikipedia.org/wiki/Mental_representation)) you have when processing the sentences "I can drink beer from a beer glass' and 'I can drink beer from a coffee mug' shows that the concepts that are behind 'beer glass' and 'coffee mug' differ. Note that in order to communicate about this idea, we also need a word or phrase (i.e.: a term that we can use to refer to (instances of) this idea.

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.

### Purpose
Working together is easier when you and your peers share the same ideas. We need a way to test and ensure, that you and your peers _actually_ have the same understanding, for the purpose of making cooperation easier. Doing so is expected to not only reduce the number of terminological discussions, but also improve the efficiency and effectiveness of the remaining discussions.

### Criteria
A (description/specification of a) Concept MUST be [intensionally defined](https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions), i.e. associated with a criterion that can be used to determine whether or not someone or something qualifies as (an instance of) that Concept, and that has the property that it has been shown that the vast majority of contributors and other users apply it in the same manner in different situations (i.e. they arrive at the same conclusion as to whether or not someone or something qualifies under that criterion in any given situation).

### Notes
There is an important [distinction between concepts and the (multitude of) terms](https://simple.wikipedia.org/wiki/Concept) (names, labels) that we need to be able to talk and reason (argue) about them. Please consider that

* different terms are used in different contexts for the same concept
* in different contexts, a single term may refer to different concepts
* to resolve terminological disputes, which usually are about the 'correct' meaning of a term, try to establish the criteria that the different participants use for the concept behind the term. That helps participants understand each others (different) positions, and provides a better basis for resolving the conflict.

---
### Footnotes

[^1]: WikiPedia has a concise [explanation of concepts](https://en.wikipedia.org/wiki/Concept). We use the term 'concept' as a [mental representation](https://en.wikipedia.org/wiki/Mental_representation).

[^2]: For the difference between 'Concept' and 'Term', see https://simple.wikipedia.org/wiki/Concept.
