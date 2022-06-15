---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: curated-text-body
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: curated-text-body
formphrases: curated-text-bod{yies}, ctext-bod{yies}, bod{yies}
grouptags: ctext
status: proposed
created: 2022-06-02
updated: 2022-06-02
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Curated Text Body
fullterm: body (of a [curated text](@))
shorterm: body
synonyms:
glossaryText: the (raw) text that follows the [header](@) of a [curated text](@)
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: Body (of a Curated Text)
hoverText: the (raw) text that follows the header of a curated text.
sidebar_label: CText Body
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

## Summary

A [curated text](@) is a text that consists of a ([yaml](https://yaml.org/spec/1.2.2/)) text called a [header](@), which is then followed by another text called the [body](@). The [body](@) is 'raw' (ASCII) text that may employ a conventions for structuring it, e.g. those of [markdown](https://www.markdownguide.org/basic-syntax/), or [LaTeX](https://www.latex-project.org/help/documentation/usrguide.pdf).

[Bodies](@) are processable by the particular tools that have been chosen by the [curators](@) for rendering their contents. For example, a [body](@) that contains [markdown](https://www.markdownguide.org/basic-syntax/) is not going to be processable by LaTeX tools, and [LaTeX](https://www.latex-project.org/help/documentation/usrguide.pdf) are not proceed by tools that expect Markdown.

[Bodies](@) may have different structures, depending on the kind of [terminological artifact](@) that is being documented. For [markdown](https://www.markdownguide.org/basic-syntax/) [bodies](@), there is some guidance for [`concept`-type](ctext-concept#header) and[`pattern`-type](ctext-pattern#header) texts.

## Purpose

[Bodies](@) contain a variety of texts that are intended to help people fulfill their particular needs in understanding what the [terminological artifact](@) that it describes.

## Criteria

A [body](@) contains various sections, each of which intends to explain one (or more related) facet(s) of the [terminological artifact](@) that is described by the [curated text](@) of which the [body](@) is a part. At a minimum, there should be a summary (that gives readers a rough idea what it is about, and what it isn't about), and a purpose (that describes the benefits of having it around). For specific kinds of [terminological artifacts](@), specific sections may be required.

## Example

Many examples (of varying quality) can be found in the [curated files](@) of the various [scopes](@) that are around.