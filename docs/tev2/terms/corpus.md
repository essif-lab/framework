---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: corpus
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: corpus
formphrases: corpus, corpus-of-terminology
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-06-06
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: corpus  # Text that is the name of the concept in (human readable) texts.
fullterm: "Corpus of Terminology"
shorterm:
synonyms:
glossaryText: "the documentation that describes the [knowledge](@) around a set of [terms](@) and [concepts](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Corpus of Terminology"
hoverText: "Corpus (of Terminology): the documentation that describes the Knowledge around a set of Terms and Concepts."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

## Short Description
The **Corpus** or **Corpus of Terminology** is the documentation that describes the [knowledge](@) around a set of [terms](@) and [concepts](@). It is typically [governed](@) by conventions that are specified by a group of [terms communities](@), such as [TOIP's Concepts and Terminology Working Group](https://wiki.trustoverip.org/pages/viewpage.action?pageId=65700).

The [terminology pattern](pattern-terminology@) relates this concept with other terminological [concepts](@).

## Purpose
The purpose of having a [corpus](@) is that it allows for the development of tools that support authors and groups of people to better communicate, by enabling them to refer to the [definition](@) of a [term](@) whenever that [term](@) is used. This is particularly beneficial when a specific [term](@) can be interpreted in different ways (according to different [definitions](@)).

Tools that we envisage will query for [terms](@) from the [corpus](@), and use that e.g. to create a custom [glossary](@) document, a [terminology](@) appendix in a paper you write, or as a resource from which you generate pop-up balloons in a website you create.

## Acknowledgements

Part of the description is taken from [TOIP CTWG](https://github.com/trustoverip/ctwg/wiki//corpus)