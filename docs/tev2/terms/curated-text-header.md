---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: curated-text-header
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: curated-text-header
formphrases: curated-text-header{ss}, ctext-header{ss}, header{ss}
grouptags: ctext
status: proposed
created: 2022-06-02
updated: 2022-06-02
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Curated Text Header
fullterm: header (of a [curated text](@))
shorterm: header
synonyms:
glossaryText: the (YAML) text at the beginning of a [curated text](@) (also called the 'front-matter').
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: Header (of a Curated Text)
hoverText: the (YAML) text at the beginning of a curated text (also called the 'front-matter').
sidebar_label: CText Header
hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

## Summary

A [curated text](@) is a text that consists of a ([yaml](https://yaml.org/spec/1.2.2/)) text called a [header](@), which is then followed by another text called the [body](@). The [header](@), also called 'front matter', is a set of so-called 'header fields', i.e. key-value pairs that contain meta data about the [curated text](@).[^1]

[^1]: Key-value pairs may also be used to contain data that *could* have been part of the [body](@), but for which it is more convenient to make it part of the 'front matter'.

[Headers](@) are intended to be processed by different tools, such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), and/or extensions to such tools. Each tool has its own set of 'fields' (the 'keys' in the YAML key-value pairs) that it assumes must, or may be present.[^2] Some fields, e.g. `id`, or `date`, are known to be used by several, different tools.

[^2]: Conversely, a 'field' in a [header](@) will be processable by every tool that recognizes that field, which may become a risk if different tools use the same 'field' for different purposes. We are not aware of any such risks actually having materialized, possibly because such tools are maintained and will respond to people raising issues about that.

The tools contained in the [TEv2 toolbox](@) use [front-matter](curated-text-header-tev2@) that is designed such that there is as little overlap with other tools that it may be used in conjunction with, such as [Docusaurus](https://docusaurus.io/docs/docs-introduction)).

TEv2 has specified:
- [generic TEv2 front-matter](../ctext#generic-header-fields) that every [curated text](@) must have (unless it is optional), and
- [type-specific front-matter](../ctext#type-specific-header-fields) for [curated texts](@) that document a particular kind of [terminological artifact](@).

## Purpose

Headers are typically used for specifying data that various tools can pick up for their further processing. The headers of [curated texts](@) are typically used to generate [glossaries](@) out of, and for further processing by rendering tools such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), so they can be rendered into useful documentation websites.

## Criteria

Every ([yaml](https://yaml.org/spec/1.2.2/)) header starts at the very top of the [curated text](@) with three dashes ("`---`") to signal it is followed by directives. This is followed by a collection of key-value mappings. The end of the header is again three dashes ("`---`") to signal the change back to document content (the [body](@)).

## Example

It is a best practice to use comments to dinstinguish between the various uses of front matter, and to document any multi-use. Here is an example of the [header](@) of a [curated text](@) for the [concept](@) '[curate](@)':

~~~ yaml
---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: curated-text-header
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: curated-text-header
formphrases: curated-text-header{ss}, ctext-header{ss}, header{ss}
grouptags: ctext
status: proposed
created: 2022-06-02
updated: 2022-06-02
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Curated Text Header
fullterm: header (of a [curated text](@))
shorterm: header
synonyms:
glossaryText: the (YAML) text at the beginning of a [curated text](@) (also called the 'front-matter').
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: Header (of a Curated Text)
hoverText: the (YAML) text at the beginning of a curated text (also called the 'front-matter').
sidebar_label: CText Header
hide_table_of_contents: true
---
~~~

## Notes

:::info Editor's note
We may want to think a bit more about TEv2 front matter. While our experience has shown that it is a good practice to use comments to dinstinguish between the various uses of front matter (basically creating 'header sections'), it isn't always clear what should go in which section. Consider the field `glossaryText`. It was decided to put it in because practice showed that while automated generation may work in many (if not most) cases, it does not work in all cases as we'd like it to. So where does it belong? One might argue that it belongs in the generic TEv2 header, so that every [terminological artifact](@) might have one. But do we really want all such artifacts to be able to appear in a [HRG](@)? Or would we want to put it in a (not yet defined) TEv2-HRG header section, freeing the way for all sorts of 'added-value' [HRG](@) generation features?
:::
