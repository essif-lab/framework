---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: curated-text
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: curated-text
formphrases: curated-text{ss}, ctext{ss}
grouptags: ctext
status: proposed
created: 2022-06-02
updated: 2022-08-04
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Curated Text
fullterm: curated text (in a [scope](@))
shorterm: ctext
synonyms:
glossaryText: a text that documents a [concept](@) or other [knowledge artifact](@) of a specific [community](@) or other [party](@), and is located within a [scope](@) that is owned by that [community](@)/[party](@).
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: Curated Text
hoverText: a text that documents a Concept or other Knowledge Artifact of a specific Community (or other Party), and is located within a Scope tha tis owned by that Community/Party.
sidebar_label: Curated Texts (CTexts)
hide_table_of_contents: true
---

## Summary

A **[curated text](@)** is a text that documents a [concept](@) or other [knowledge artifact](@) of a specific [community](@) or other [party](@), and is located within a [scope](@) that is owned by that [community](@)/[party](@). A large variety of traits can be documented, such as the [(scoped) term](@) that is used within the [scope](@) to represent the [artifact](knowledge-artifact@), a [definition](@), explanatory texts, examples, etc., etc.; anything that helps others understand the intricacy of these [artifacts](@).

The (technical) structure and syntax for [curated texts](@) is specified [here](/docs/tev2/spec-ctexts/00-ctext-spec).

The manuals for [contributors](/docs/tev2/manuals/contributor), [authors](/docs/tev2/manuals/author) and [curators](/docs/tev2/manuals/curator) will provide guidance for people that act in these respective roles as they work with [curated texts](@).

:::info Editor's Note
Text needs to be revised from here onward. Here are some ideas to mention:
- contributors can suggest contents as per the curators instructions;
- authors can write the body of ctexts;
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