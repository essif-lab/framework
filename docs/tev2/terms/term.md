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
updated: 2022-08-09
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa: identifier
term: term # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "a word or phrase (i.e.: text) that is used in at least one [scope](@)/context to represent specific [knowledge artifacts](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Term"
hoverText: "Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent specific Knowledge Artifacts, e.g. Concepts, Relations or Mental Models."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Term** is a word or phrase (i.e.: text) that is used in at least one [scope](@)/context to represent specific [knowledge artifacts](@), e.g. [concepts](@), [relations](@) or [mental models](@). We use the phrase '[scoped term](@)' to refer to a term when it is used in one specific [scope](@).

While a [term](@) is often thought of as a single word (or phrase), it is better conceived as a construct that consists of multiple parts, that enables us to use a word or phrase in different kinds for different kinds of [knowledge artifacts](@), as we often see that people do in practice. This construct is visualized in the [formalized terminology model](/docs/tev2/terms/patterns/pattern-terminology#formalized-model)), and consists of the following components:

1. a [term name](@) (required), i.e. an [identifier](@) that is used to represent a [knowledge artifact](@). Note that different [knowledge artifacts](@) can have the same [term name](@) (which is known as [semantically overloading](https://en.wikipedia.org/wiki/Semantic_overload)).
2. a [term type](@) (optional), i.e. an [identifier](@) that is used to [identify](@) the particular *kind* of [knowledge artifact](@) that the [term name](@) represents, such as `concept`, `relation`, `pattern` (or `mental-model`).
3. a [term attrs](@) (optional), i.e. a list of [attributes](term-attrs@) that enable one to distinguish between [knowledge artifacts](@) that have the same [term name](@) and are of the same [type](term-type@).

Thus:
- a single term may (and typically does) have different meanings ([semantics](@)) in different [scopes](@)/contexts. For example, in the context of a beauty-salon, the term 'nail' has a different meaning than in the context of constructing buildings.
- different terms (in the same, or different [scopes](@)/contexts) may have the same meaning (i.e. represent the same [concept](@) ([synonymity](https://en.wikipedia.org/wiki/Synonym), [alias](https://www.merriam-webster.com/dictionary/alias)).

The precise meaning of a term thus depends on the [scope](@)/context in which it is used. We use the phrase [scoped term](@) to refer to a term that is part of one particular [scope](@)/context, and refers to a single [concept](@) (or other [knowledge artifact](@)), and hence is unambiguous.

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.
The [term-ref](@) [syntax specification](/docs/tev2/spec-syntax/term-ref-syntax) specifies the syntax that [authors](@) should use as they want to use a specific [term](@) in their text.

### Purpose
Understanding words or phrases uttered by others requires that we are able to 'translate' them into terms that we habitually use, i.e. with the meaning of which we are familiar. While this is mostly an (unconscious) automatism, and it is often also not necessary to be very precise, this may be different when they relate to stuff we find important. The ability to represent a specific [concept](@) (or other [knowledge artifact](@)) with a specific text or phrase, where this 'representation' is limited to a specific (or several) context(s), helps us to better interpret these words, which is: to properly understand what others actually try to convey in spoken or written language.

### Criteria
A term MUST be a word or phrase (i.e.: text) that
- is used in at least one [scope](@)/context, where it represents (and [identifies](@))) one specific [knowledge artifact](@) that is part of the [knowledge](@) of the [community](@) that [owns](@) that [scope](@);
- can be mapped on a tuple consisting of:
   - precisely one name (the [term name](@));
   - at most one type (the [term type](@), i.e. a text that identifies the kind of [knowledge artifact](@));
   - any number of attributes (the [term attrs](@)), as needed.

### Notes
There is an important [distinction](https://simple.wikipedia.org/wiki/Concept) between [concepts](@) (and other [knowledge artifacts](@)) and the (multitude of) terms (names, labels) that we need to be able to talk and reason (argue) about them. Please consider that

* different [terms](@) are used in different contexts for representing a single [concept](@);
* in different contexts, a single [term](@) may represent different [concepts](@);
* [to resolve terminological disputes](http://resolver.tudelft.nl/uuid:964a90da-da81-4d38-9f45-84f3f5fa96b3), which usually are about the 'correct' meaning of a [term](@), try to establish the criteria that the different participants use for the concept behind the term. That helps participants understand each others (different) positions, and provides a better basis for resolving the conflict.

---
### Footnotes

[^1]: WikiPedia has a concise [explanation of concepts](https://en.wikipedia.org/wiki/Concept). We use the term 'concept' as a [mental representation](https://en.wikipedia.org/wiki/Mental_representation).

[^2]: For the difference between 'Concept' and 'Term', see https://simple.wikipedia.org/wiki/Concept.
