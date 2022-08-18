---
# TEv2 Curated Text Header
term: scoped-term
termType: concept
isa: term
glossaryText: "a [term](@) that represents (and [identifies](@)) a specific [knowledge artifact](@) of a particular [community](@) (or other [party](@))."
groupTags:
# Curation status
status: proposed
created: 2022-06-06
updated: 2022-08-04
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Scoped-term

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **scoped term** is a [term](@) that represents (and [identifies](@)) a specific [knowledge artifact](@) of a particular [community](@) (or other [party](@)).

A [scoped term](@) consists of
- a [name](term-name@);
- optionally, a [type identifier](term-type@), that is used when the [name](term-name@) is also used in [terms](@) that are part of the same [scope](@), but that represent ([identify](@)) different [knowledge artifacts](@). For example, the text 'terminology' can be the [name](term-name@) associated with a [concept](@) (as in 'a set of terms'), but it could also be the [name](term-name@) that is associated with a [knowledge artifact](@) of type [mental model](@) (or [pattern](@)).
- optionally, and currently not used, additional [term attributes](@), that may also be used to disambiguate the [term-name](@) and/or the {[term-name](@), [term-type](@)} pair.

:::info Editors note
The examples that show the need for having [term attributes](@) can be found in [knowledge artifacts](@) of type [relation](@), where we foresee the need to distinguish between relations that are conceptually identical, but can differ depending on the [concepts](@) that they relate. For example the relation "*owns(party,knowledge)*" would need to be distinguished from "*owns(party,physical-object)*", for which we would need to be able to include the [concept](@)-classes as part of the term.
:::

A [scoped term](@) can refer to a (single) [definition](@), which SHOULD be designed such that it helps people to distinguish between [entities](@) that are, and that are not instances of the [knowledge artifact](@) that the [term](scoped-term@) represents.

A [scoped term](@) can also be associated with a (single) [curated text](@) that (authoritatively) documents the [knowledge artifact](@) that it represents, and hence provides a description of the meaning of that [term](scoped-term@).

Within its [scope](@), [scoped terms](@) may be grouped by associating each of them with a [grouptag](@). Also, they may be selected (by the [curators](@) of the [scope](@)) to become part of (specific versions of) the [terminology](@) of that [scope](@).

The [terminology pattern](pattern-terminology-support@) provides an overview of how this concept fits in with related concepts.

### Purpose
A [term](@) can have many different meanings, depending on the [scope](@)/context within which it is being used. It is useful to be able to distinguish between words/phrases without taking [scope](@)/context into account (for which we use the word [term](@)), and words/phrases that are part of a specific [scope](@)/context (for which we use the phrase [scoped term](@)), e.g. to create, and properly link descriptions, [definitions](@), [curated texts](@) etc. to such [scoped terms](@).
