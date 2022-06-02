---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: ctext-pattern #
# Docusaurus (see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter):
title: Curated Texts of type `Pattern`
sidebar_label: Patterns
# hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Use 'Mark' as an HTML tag, e.g. <Mark>text to mark</Mark?-->
export const Mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

This document specifies what specifics of [curated texts](@) that describe [terminological artifacts](@) of type `pattern`. The reader is assumed to be familiar with the [generic structure of a curated text](ctext).

## Introduction

A [Pattern](@) is a description, both casual and formal, of a set of [concepts](@) (ideas), [relations](@) between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.

Typically, people may find such a 'way of thinking' not very easy to understand; it is very likely to require (some of) them to -literally- 'change their minds'.

A good description helps [readers](@) to 'change their minds', at least within the [scope](@) within the [pattern](@) is defined. It is particularly helpful when such a description is supported with good descriptions and [definitions](@) of the [concepts](@) and [relations](@) that it uses.

## Header {#header}

 In this section, we describe the header fields that are specific for [terminological artifacts](@) of type `pattern`:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present as a header field.
4. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name | Req'd | Description |
| ---- | :---: | ----------- |
| `term`         | Y | Text that is the name of the [pattern](@) in (human readable) texts. It is typically used to represent the [pattern](@) itself, but also to represent arbitrary/unspecified instances thereof. This text will show as an entry in the [HRG](@).<br/>Examples: "Party, Actor, Action pattern" |
| `tag`          | n | [Tag](@) by which this pattern can be [identified](@) within the [scope](@) in which it is specified |

<details>
  <summary>Example of a complete Pattern Header</summary>

<Mark>Revise the YAML code below</Mark>

~~~ yaml
---
~~~

</details>

## Body {#body}

A [markdown](https://www.markdownguide.org/basic-syntax/) body consists of one or more sections that each have a [heading](https://www.markdownguide.org/basic-syntax/#headings), optionally followed by a [heading id](https://www.markdownguide.org/extended-syntax/#heading-ids). We provide suggestions for a variety of sections, that we think help [readers](@) get a good understanding of the [concept](@) that is described.

We have placed the suggestions in an order that we think makes for good reading. However, if you think otherwise, you are free to change this order, leave out sections, and/or add your own.

<details>
  <summary>Legend (and suggestions for using your own headings)</summary>

The body is expected to consist of sections of text, for which we provide suggestions for the [section headings](https://www.markdownguide.org/basic-syntax/#headings). A section consists of a header and further text, as follows:

~~~ markdown
## <Heading> {#<trait>}

further text goes here.
~~~

The `trait` is important, as authors can use it in a [term ref](@) to refer to this particular section. Therefore, you SHOULD stick to the suggestions for the `trait` if you write such a section.

The table that contains the suggestions has the following columns:

1. **Heading** shows a name we suggest for a particular section. If you use this suggestion, you do not need to also provide the `Heading ID` (because it is automatically arranged for).
2. **trait** specifies the text to be used as a [heading id](https://www.markdownguide.org/extended-syntax/#heading-id) in the case that the author of the section decides to use a different heading as the one that is suggested.
3. **Description** describes the kinds of content you may want to put in the section, and what [readers](@) expect that they would know, or could do after having read the text.

</details>

| Heading    | trait | Description |
| ---------- | ---------- | ----------- |
| Purpose    | purpose    | Text that describes why the [pattern](@) is needed. What purposes does it serve? What can you do with it that you cannot do (as well) without it? What [objectives](@essif-lab) does it help realize? Why is this [pattern](@) relevant within its scope of definition? |
| Introduction | introduction | Text that gently introduces the [pattern](@) and its context to the [reader](@) - preferably in casual terms. You can state whatever you think your audience needs to keep on reading and, ultimately, change their minds. |
| Informal Description | informal-description | Text that describes the [pattern](@) in a colloquial way, meant to ensure the [reader](@) will not face any surprises if she continues to read to the more formal parts. |
| Formal Description | formal-description | Text that describes the [pattern](@) in a formal way, possibly with a figure and formal notations. This text would enable people to create formal models, e.g. in RDFS, OWL or other semantic languages. |
| Notes      | notes      | Text that may be of importance to [readers](@), but that doesn't fit anywhere else. |
| References | references | List references to other texts, standards, (scientific) articles, applicable legislation, git repo's, etc., as appropriate. |
