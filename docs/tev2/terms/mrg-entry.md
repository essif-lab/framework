---
# TEv2 Curated Text Header
term: mrg-entry
termType: concept
isa:
glossaryTerm:
glossaryText: "A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  [knowledge artifact](@), such as the associated [term(s)](@), its [definition](@), etc., to make it easy for IT-tools to create, e.g. documentation, [glossaries](@), [dictionaries](@), whitepapers, etc. that uses such [terms](@) ([definitions](@), etc.)."
synonymOf:
grouptags:
formPhrases: mrg-entr{yies}
# Curation status
status: proposed
created: 2022-08-11
updated: 2022-08-11
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# MRG Entry

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary

An **MRG Entry** is a machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  [knowledge artifact](@), such as the associated [term(s)](@), its [definition](@), etc., to make it easy for IT-tools to create, e.g. documentation, [glossaries](@), [dictionaries](@), whitepapers, etc. that uses such [terms](@) ([definitions](@), etc.).

A [terminology](@) can be seen as the collection of [MRG entries](@) that hold all data related to the [terms](scoped-term@) that the [terminology](@) consists of.

The contents of an [MRG entry](@) may vary, depending on the type of [knowledge artifact](@) that it documents. The kinds of data that are common for all [knowledge artifacts](@) are documented [here](http://localhost:3000/docs/tev2/spec-files/mrg#mrg-entries).

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.

The [terminology construction section](/docs/tev2/spec-tools/terminology-construction) describes how [MRG entries](@) are selected (and manipulated) for the construction of a particular [terminology](@).

### Purpose

[MRG entries](@) provide all (meta) data about a particular [knowledge artifact](@) that IT-tools might need for their own purposes.

As an example, consider a [terms-community](@) that would like to have an overview of all [terms](@) that it uses in a human readable way, and decides it needs a ([human readable](hrg@)) [glossary](@) of these [terms](@). Thus, they need a [tool](hrgt@) that knows how to find all these [terms](@) and their [definitions](@), and (after sorting them) render them into some human readable form. This [tool](hrgt@) would look for the [MRG](@) for that [terminology](@), which contains the [MRG entries](@) that contain all data that  the [tool](hrgt@) needs.

As the number of tools that need (meta) data about [terms](@) grows, [MRG entries](@) will be expected to cater for such needs.
