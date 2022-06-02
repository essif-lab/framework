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
term: Curated Text Body
fullterm: body (of a [curated text](@))
shorterm: body
synonyms:
glossaryText: the (raw) text that follows the [header](@) of a [curated text](@)
hoverText: the (raw) text that follows the header of a curated text.
# Docusaurus (see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter):
title: Body (of a Curated Text)
sidebar_label: CText Body
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

## Summary

A [curated text](@) is a text that consists of a ([yaml](https://yaml.org/spec/1.2.2/)) text called a [header](@), which is then followed by another text called the [body](@). The [body](@) is 'raw' (ASCII) text that may employ a conventions for structuring it, e.g. those of [markdown](https://www.markdownguide.org/basic-syntax/), or [LaTeX](https://www.latex-project.org/help/documentation/usrguide.pdf).

[Bodies](@) are processable by the particular tools that have been chosen by the [curators](@) for rendering their contents. For example, a [body](@) that contains [markdown](https://www.markdownguide.org/basic-syntax/) is not going to be processable by LaTeX tools, and [LaTeX](https://www.latex-project.org/help/documentation/usrguide.pdf) are not proceed by tools that expect Markdown.

[Curators](@) should have defined an [ingestion process](@) for every [scope](@) they [curate](@).

## Purpose

Headers are typically used for specifying data that various tools can pick up for their further processing. The bodys of [curated texts](@) are typically used to generate [glossaries](@) out of, and for further processing by rendering tools such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), so they can be rendered into useful documentation websites.

## Criteria

Every ([yaml](https://yaml.org/spec/1.2.2/)) body starts at the very top of the [curated text](@) with three dashes ("`---`") to signal it is followed by directives. This is followed by a collection of key-value mappings. The end of the body is again three dashes ("`---`") to signal the change back to document content (the [body](@)).

## Example

It is a best practice to use comments to dinstinguish between the various uses of front matter, and to document any multi-use. Here is an example of the [body](@) of a [curated text](@) for the [concept](@) '[curate](@)':

~~~ yaml
---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: ctext-body
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: ctext-body
formphrases: ctext-body{ss}, body{ss}
grouptags: ctext
status: proposed
created: 2022-06-02
updated: 2022-06-02
vsntag: v0.1
contributors: RieksJ
term: ctext-body
# TEv2: type-specific front-matter for type `concept`
fullterm: body (of a [curated text](@))
shorterm: body
synonyms:
glossaryText: the (YAML) text at the beginning of a [curated text](@) (also called the 'front-matter').
hoverText: the (YAML) text at the beginning of a curated text (also called the 'front-matter').
# Docusaurus (see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter):
title: Header (of Curated Text)
sidebar_label: CText Header
hide_table_of_contents: true
---
~~~
