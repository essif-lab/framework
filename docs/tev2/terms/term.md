---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: term
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: term
formphrases: term{ss}, word{ss}, phrase{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-06-06
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa: identifier
term: term  # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "a word or phrase (i.e.: text) that is used in at least one [scope](@)/context to represent a specific [concept](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Term"
hoverText: "Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A Term is a word or phrase (i.e.: text) that is used in at least one [scope](@)/context to represent a specific [concept](@). As a consequence:
- a single term may (and typically does) have different meanings ([semantics](@)) in different [scopes](@)/contexts. For example, in the context of a beauty-salon, the term 'nail' has a different meaning than in the context of constructing buildings.
- different terms (in the same, or different [scopes](@)/contexts) may have the same meaning (i.e. represent the same [concept](@) ([synonymity](https://en.wikipedia.org/wiki/Synonym), [alias](https://www.merriam-webster.com/dictionary/alias)).

The precise meaning of a term thus depends on the [scope](@)/context in which it is used. We use the phrase [scoped term](@) to refer to a term in a particular [scope](@)/context, and hence is part of the [terminology](@) of that [scope](@), and means whatever [concept](@) it represents in that [scope](@)

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.

### Purpose
Understanding words or phrases uttered by others requires that we are able to 'translate' them terms into terms that we habitually use. While this is mostly an automatism, and it often is not necessary to be all that precise, this may be different when they relate to stuff we find important. The ability to represent a specific [concept](@) with a specific text or phrase, where this 'representation' is limited to a specific (or several) context(s), helps us to better interpret these words, which is: to properly understand what others actually try to convey in spoken or written language.

### Criteria
A term MUST be a word or phrase (i.e.: text) that is part of at least one [scope](@)/context, and for all [scopes](@)/contexts of which it is a part, a [scoped term](@) must exist that
- instantiates that term,
- represents a specific [concept](@), and
- refers to the [definition](@) that defines this [concept](@).

### Notes
There is an important [distinction](https://simple.wikipedia.org/wiki/Concept) between concepts and the (multitude of) terms (names, labels) that we need to be able to talk and reason (argue) about them. Please consider that

* different terms are used in different contexts for representing a single concept;
* in different contexts, a single term may represent different concepts
* to resolve terminological disputes, which usually are about the 'correct' meaning of a term, try to establish the criteria that the different participants use for the concept behind the term. That helps participants understand each others (different) positions, and provides a better basis for resolving the conflict.

---
### Footnotes

[^1]: WikiPedia has a concise [explanation of concepts](https://en.wikipedia.org/wiki/Concept). We use the term 'concept' as a [mental representation](https://en.wikipedia.org/wiki/Mental_representation).

[^2]: For the difference between 'Concept' and 'Term', see https://simple.wikipedia.org/wiki/Concept.
