---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: mrg-entry
# TEv2: generic front-matter for curated texts
scope: tev2
termname: mrg-entry
termtype: concept
termattrs:
grouptags:
synonyms:
formphrases: mrg-entr{yies}
status: proposed
created: 2022-08-11
updated: 2022-08-11
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
glossaryText: "A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  [knowledge artifact](@), such as the associated [term(s)](@), its [definition](@), etc., to make it easy for IT-tools to create, e.g. documentation, [glossaries](@), [dictionaries](@), whitepapers, etc. that uses such [terms](@) ([definitions](@), etc.)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "MRG Entry"
hoverText: "A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated term(s), its definition, etc., to make it easy for IT-tools to create, e.g. documentation, glossaries, dictionaries, whitepapers, etc. that uses such term(s) (definitions, etc.)."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary

A **MRG Entry** is a machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  [knowledge artifact](@), such as the associated [term(s)](@), its [definition](@), etc., to make it easy for IT-tools to create, e.g. documentation, [glossaries](@), [dictionaries](@), whitepapers, etc. that uses such [terms](@) ([definitions](@), etc.).

A [terminology](@) can be seen as the collection of [MRG entries](@) that hold all data related to the [terms](scoped-term@) that the [terminology](@) consists of.

The contents of an [MRG entry](@) may vary, depending on the type of [knowledge artifact](@) that it documents. The kinds of data that are common for all [knowledge artifacts](@) are documented [here](http://localhost:3000/docs/tev2/spec-files/mrg#mrg-entries).

The [terminology pattern](pattern-terminology-support@) provides an overview of how this concept fits in with related concepts.

The [terminology construction section](/docs/tev2/manuals/terminology-construction) describes how [MRG entries](@) are selected (and manipulated) for the construction of a particular [terminology](@).

### Purpose

[MRG entries](@) provide all (meta) data about a particular [knowledge artifact](@) that IT-tools might need for their own purposes.

As an example, consider a [terms-community](@) that would like to have an overview of all [terms](@) that it uses in a human readable way, and decides it needs a ([human readable](hrg@)) [glossary](@) of these [terms](@). Thus, they need a [tool](hrgt@) that knows how to find all these [terms](@) and their [definitions](@), and (after sorting them) render them into some human readable form. This [tool](hrgt@) would look for the [MRG](@) for that [terminology](@), which contains the [MRG entries](@) that contain all data that  the [tool](hrgt@) needs.

As the number of tools that need (meta) data about [terms](@) grows, [MRG entries](@) will be expected to cater for such needs.
