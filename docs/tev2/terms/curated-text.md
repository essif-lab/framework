---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: curated-text
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: ctext
formphrases: curated-text{ss}
grouptags: ctext
status: proposed
created: 2022-06-02
updated: 2022-06-02
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Curated Text
fullterm: curated text (in a [scope](@))
shorterm: ctext
synonyms:
glossaryText: a text that describes a [terminological artifact](@) of a specific [scope](@) in a format that is [governed](@) by the [curators](@) of that [scope](@)
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: Curated Text
hoverText: a text that describes a Terminological Artifact a specific Scope in a format that is Governed by the Curators of that Scope.
sidebar_label: Curated Texts (CTexts)
hide_table_of_contents: true
---

## Summary

A **[curated text](@)** is a text that documents a [terminological artifact](@) (e.g., a [concept](@), [pattern](@), or such) of a specific [scope](@) in a format that is [governed](@) by the [curators](@) of that [scope](@). Every [curated text](@) is associated with an `id` that [identifies](@) the [file](curated-file@) that contains the [curated text](@), and by implication, the [curated text](@) itself.

Note that the `id` of a [curated text](@) is not a [term](@) (that represents a [terminological artifact](@)). We want to accommodate for [terms](@) that represents [terminological artifacts](@), e.g. [roles](@), or [tags](@) the documentation of which is better positioned in (a specific part of) a [curated text](@) that documents another [terminological artifact](@).

A [curated text](@) consists of a ([yaml](https://yaml.org/spec/1.2.2/)) text called a [header](@), which is then followed by another text called the [body](@). The [header](@) which is also called the 'front matter' of the [curated text](@) contains meta data about the [curated text](@).[^1]

[^1]: This 'front matter' may also be used to contain data that *could* have been part of the [body](@), but for which it is more convenient to make it part of the 'front matter'.

The [body](@) is a 'raw' (ASCII) text that may employ a conventions for structuring it, e.g. those of [markdown](https://www.markdownguide.org/basic-syntax/), or [LaTeX](https://www.latex-project.org/help/documentation/usrguide.pdf).

## Purpose

[Curated texts](@) are intended to be processable by a variety of tools, that are chosen by the [curators](@). Together, these tools not only enable the [curation](@) of the [scope's](@) [terminology](@), but also the generation of [glossaries](@), and a better handling of [terms] in documentation, whitepapers and the like.

The precise conditions that [headers](@) and [bodies](@) of [curated texts](@) must satisfy will differ across [scopes](@) as [curators](@) are autonomous in chosing their tools and ways of working. To support other participants of their [terms community](@) in making contributions, they will define an [ingestion process](@) for the [scope(s)](@) they [curate](@), enabling such participants to contribute in ways that are easy for them

## Criteria

A [curated text](@) is a text that consists of a ([yaml](https://yaml.org/spec/1.2.2/)) [header](@) and a ('raw text') [body](@), that documents a [terminological artifact](@) of a specific [scope](@) in a format that is defined by the [curators](@) of that [scope](@). It resides in a [curated file](@), which lives in (a subdirectory of) its [scope directory](@), as specified in the [scope's](@) [SAF](@).

## Notes

The intention of [curated texts](@) is to document a [terminological artifact](@), which is something that has a place in the way of thinking within a [scope](@). Ways of working (e.g. installation procedures), reports on research to be published in papers, etc., are NOT thought of as part of the [scope's](@) [terminology](@), and hence should not be documented as a [curated text](@). Having said that, this is not a closed discussion; we can think of arguments to the opposite, so who knows...