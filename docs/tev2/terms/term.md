---
# TEv2 Curated Text Header
term: term
termType: concept
isa: identifier
glossaryTerm:
glossaryText: "a word or phrase (i.e.: text) that is used to represent ([identify](@)) a specific [knowledge artifact](@) (in some [scope](@))."
synonymOf:
grouptags:
formPhrases: term{ss}, word{ss}, phrase{ss}
# Curation status
status: proposed
created: 2022-06-06
updated: 2022-08-09
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Term

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Term** is a word or phrase (i.e.: text) that is used to represent ([identify](@)) a specific [knowledge artifact](@), e.g. a [concept](@), [relation](@) or [mental model](@), in a particular [scope](@):

- a single [term](@) may (and typically does) have different meanings ([semantics](@)) in different [scopes](@)/contexts. For example, in the context of a beauty-salon, the term 'nail' has a different meaning than in the context of constructing buildings.
- different [terms](@) (in the same, or different [scopes](@)/contexts) may have the same meaning (i.e. represent the same [concept](@) ([synonymity](https://en.wikipedia.org/wiki/Synonym), [alias](https://www.merriam-webster.com/dictionary/alias)).

The precise meaning of a [term](@) thus depends on the [scope](@)/context in which it is used. We use the phrase [scoped term](@) to refer to a term that is part of one particular [scope](@)/context, and refers to a single [concept](@) (or other [knowledge artifact](@)), and hence is unambiguous.

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.
The [term-ref](@) [syntax specification](/docs/tev2/spec-syntax/term-ref-syntax) specifies the syntax that [authors](@) should use as they want to use a specific [term](@) in their text.

### Purpose
Understanding words or phrases uttered by others requires that we are able to 'translate' them into terms that we habitually use, i.e. with the meaning of which we are familiar. While this is mostly an (unconscious) automatism, and it is often also not necessary to be very precise, this may be different when they relate to stuff we find important. The ability to represent a specific [concept](@) (or other [knowledge artifact](@)) with a specific text or phrase, where this 'representation' is limited to a specific (or several) context(s), helps us to better interpret these words, which is: to properly understand what others actually try to convey in spoken or written language.

### Criteria
A term is a word or phrase (i.e.: text) that is used in at least one [scope](@)/context, in each of which it represents (and [identifies](@))) one specific [knowledge artifact](@) that is part of the [knowledge](@) of the [community](@) that [owns](@) that [scope](@).

### Notes
There is an important [distinction](https://simple.wikipedia.org/wiki/Concept) between [concepts](@) (and other [knowledge artifacts](@)) and the (multitude of) terms (names, labels) that we need to be able to talk and reason (argue) about them. Please consider that

* different [terms](@) are used in different contexts for representing a single [concept](@);
* in different contexts, a single [term](@) may represent different [concepts](@);
* [to resolve terminological disputes](http://resolver.tudelft.nl/uuid:964a90da-da81-4d38-9f45-84f3f5fa96b3), which usually are about the 'correct' meaning of a [term](@), try to establish the criteria that the different participants use for the concept behind the term. That helps participants understand each others (different) positions, and provides a better basis for resolving the conflict.

---
### Footnotes

[^1]: WikiPedia has a concise [explanation of concepts](https://en.wikipedia.org/wiki/Concept). We use the term 'concept' as a [mental representation](https://en.wikipedia.org/wiki/Mental_representation).

[^2]: For the difference between 'Concept' and 'Term', see https://simple.wikipedia.org/wiki/Concept.
