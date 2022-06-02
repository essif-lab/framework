---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: curated-text-header-tev2
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: curated-text-header-tev2
formphrases: ctext-header-tev2, ctext-tev2-header{ss}, tev2-header{ss}
grouptags: ctext
status: proposed
created: 2022-06-02
updated: 2022-06-02
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: TEv2 Header
fullterm: TEv2 Header (for Curated Texts)
shorterm:
synonyms:
glossaryText: the part of the [header](@) of a [curated text](@) that is relevant for [TEv2](@), i.e. used by one or more tools from its [toolbox](@).
hoverText: the part of the Header of a Curated Text that is relevant for TEv2 tools, i.e. used by one or more tools from its Toolbox.
# Docusaurus (see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter):
title: TEv2 CText Header
sidebar_label: CText Header
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

## Summary

A **TEv2 Header** is the part of the [header](@) of a [curated text](@) that is relevant for [TEv2](@), i.e. used by one or more tools from its [toolbox](@). As different tools will be processing [curated texts](@), the header fields that TEv2 uses have been designed to be distinct from what other tools use. That is, with the exception of the `id` field that pretty much all tools use.

We consider it a best practice for [curators](@) or others (including tools) that create [curated texts](@), to add comments to the [header](@) that enable (human) readers to [curate](@) to distinguish between TEv2 fields and fields that are used by other tools, and therefore are outside the scope of (strict) [curation](@).

[TEv2 header](@) fields are specified [here](ctext#generic-header-fields).

## Purpose

[TEv2 headers](@) are used by tools from the [TEv2 toolbox](@), such as the [MRGT](@), or the [TRRT](@), which facilitate the generation of rendered texts such as [HRGs](@), and produce files that third party tools such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction) can use to produce static websites, or other renderings.

## Example

It is a best practice to use comments to dinstinguish between the various uses of front matter, and to document any multi-use. Here is an example of the [header](@) of a [curated text](@) for the [concept](@) '[TEv2 header](@)', where all front-matter that other tools need is left out:

~~~ yaml
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: curated-text-header-tev2
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: curated-text-header-tev2
formphrases: ctext-header-tev2, ctext-tev2-header{ss}, tev2-header{ss}
grouptags: ctext
status: proposed
created: 2022-06-02
updated: 2022-06-02
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: TEv2 Header
fullterm: TEv2 Header (for Curated Texts)
shorterm:
synonyms:
glossaryText: the part of the [header](@) of a [curated text](@) that is relevant for [TEv2](@), i.e. used by one or more tools from its [toolbox](@).
hoverText: the part of the Header of a Curated Text that is relevant for TEv2 tools, i.e. used by one or more tools from its Toolbox.
~~~

## Notes

Please refer to