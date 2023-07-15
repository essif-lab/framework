---
# TEv2 Curated Text Header
term: ingestion-profile
termType: concept
isa:
glossaryTerm:
glossaryText: the specification of a method by which files that are in a particular place and format (e.g., wiki files) are turned into a [curated text](@).
synonymOf:
grouptags:
formPhrases: ingestion-profile{ss}
# Curation status
status: proposed
created: 2022-08-17
updated: 2022-08-17
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Ingestion Profile

## Summary

An **[ingestion profile](@)** is the specification of a method by which files that are in a particular place and format (e.g., wiki files) are turned into a [curated text](@).

[Ingestion profiles](@)

The (technical) structure and syntax for [curated texts](@) is specified [here](/docs/tev2/spec-files/ctext).

The manuals for [contributors](/docs/tev2/manuals/contributor), [authors](/docs/tev2/manuals/author) and [curators](/docs/tev2/manuals/curator) will provide guidance for people that act in these respective roles as they work with [curated texts](@).

:::info Editor's Note
Text needs to be revised from here onward. Here are some ideas to mention:
- contributors can suggest contents as per the curators instructions;
- [authors](@) can write the body of ctexts;
- curators update the header of ctexts (conforming to the ctext specs);
- curators specify the process by which ctexts progress/mature, and get statuses assigned;
- curators generate artifacts from 'decided on' ctexts, so that
  - rendering tools or generation tools used in other scopes can generate artifacts and
  - people can subsequently access nicely rendered, human readable versions
:::

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.

## Purpose

[Curated texts](@) are intended to be processable by a variety of tools, that are chosen by the [curators](@). Together, these tools not only enable the [curation](@) of the [scope's](@) [terminology](@), but also the generation of [glossaries](@), and a better handling of [terms] in documentation, whitepapers and the like.

The precise conditions that [headers](@) and [bodies](@) of [curated texts](@) must satisfy will differ across [scopes](@) as [curators](@) are autonomous in chosing their tools and ways of working. To support other participants of their [terms community](@) in making contributions, they will define an [ingestion process](@) for the [scope(s)](@) they [curate](@), enabling such participants to contribute in ways that are easy for them.

## Notes

The intention of [curated texts](@) is to document a [knowledge artifact](@), which is something that has a place in the way of thinking within a [scope](@). Ways of working (e.g. installation procedures), reports on research to be published in papers, etc., are NOT thought of as part of the [scope's](@) [terminology](@), and hence should not be documented as a [curated text](@). Having said that, this is not a closed discussion; we can think of arguments to the opposite, so who knows...