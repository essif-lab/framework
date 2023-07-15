---
# TEv2 Curated Text Header
term: terminology
termType: concept
grouptags:
synonymOf:
formPhrases: terminolog{yies}
# Curation status
status: proposed
created: 2022-06-06
updated: 2022-08-11
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
glossaryTerm:
glossaryText: "a set of [terms](scoped-term@) that are used within a single [scope](@) to refer to [concepts](@) and other [knowledge artifacts](@) of a single [party](@) (e.g. a [community](@)), enabling [parties](@) to reason and communicate ideas they have about one or more specific topics."
---

# Terminology

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **terminology** is a set of [terms](scoped-term@) that are used within a single [scope](@) to refer to [concepts](@) and other [knowledge artifacts](@) of a single [party](@) (e.g. a [community](@)), enabling [parties](@) to reason and communicate ideas they have about one or more specific topics. It may be viewed as a topic-specific subset of that [party's](@) [vocabulary](@).

As each [term](@) in the [terminology](@) comes with all sorts of related data, such as a [definition](@), [documentation](curated-text@) about the [knowledge artifact](@) that it represents, [terms](@) that can be used as synonyms, etc., and since (pointers to) all that data is gathered in a single [MRG entry](@), we can also say that a [terminology](@) consists of the set of [MRG entries](@) that hold such data of the [terms](@) that the [terminology](@) consists of.

As a consequence, it is easy [to generate](/docs/tev2/spec-tools/mrgt) an [MRG](@) for a [terminology](@), as this is basically the collection of the [MRG entries](@) that constitute the [terminology](@) (apart from [some meta-data](/docs/tev2/spec-files/mrg#mrg-structure), of course). And from there, [human readable glossaries](hrg@) can be [derived](/docs/tev2/spec-tools/hrgt).

A [terminology](@) may be versioned, i.e. associated with a [versiontag](@). This allows multiple [terminologies](@) to exist within a single [scope](@), enabling the [scope](@) to have one for specific purposes (e.g. for the further development of its [terms](@), or for use within a whitepaper).

A [terminology](@) can be documented by (at most) one [machine-readable glossary](mrg@), from which [human readable glossaries](hrg@) can be derived. Selecting the [(scoped) terms](@) that are part of a [terminology](@) and generating the various [glossaries](@) is done by the [curator(s)](@) of its [scope](@).

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.

The [terminology construction section](/docs/tev2/spec-tools/terminology-construction) describes how to construct a [terminology](@) by selecting (groups of) [terms](scoped-term@), and manipulating such selections.

### Purpose
In order for [parties](@) to properly reason and/or communicate ideas ([concepts](@) and other [knowledge artifacts](@)) about some topic - in particular when it is a specialist topic - they have to establish a set of [terms](@), the meaning of which should be [defined](@) (or otherwise documented) in such a way that the likelihood of misunderstandings between them is minimized. This set of terms is called a `**terminology**`
