---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: ctext-concept #
# Docusaurus (see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter):
title: Curated Texts of type `Concept`
sidebar_label: Concepts
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

This document specifies what specifics of [curated texts](@) that describe [terminological artifacts](@) of type <Mark>`concept`</Mark>. The reader is assumed to be familiar with the [generic structure of a curated text](ctext).

## Introduction

[Concepts](@) are the ideas/thoughts behind a classification of [entities](@), i.e. what makes [entities](@) in that class 'the same'.

A good description allows [readers](@) to learn how the authors of the description distinguish between the [entities](@) that do, and the ones that do not qualify as members of such a class. If a good [definition](@) is provided, [readers](@) may learn to make exactly the same destinction as well.

## Header {#header}

 In this section, we describe the header fields that are specific for [terminological artifacts](@) of type <Mark>`concept`</Mark>:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present as a header field.
4. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name         | Req'd | Description |
| ------------ | :---: | ----------- |
| `isa`          | n | `id` of the [terminological artifact](@) of type `concept` for which this is a specialization. |
| `term`         | Y | Text that is the name of the [concept](@) in (human readable) texts. It is typically used to represent the [concept](@) itself, but also to represent arbitrary/unspecified instances thereof. This text will show as an entry in the [HRG](@).<br/>Examples: 'concept', or 'terminological artifact'. |
| `fullterm`     | n | Text that can be used as the complete form of the text mentioned in the `term` field.<br/>Example: 'terminological artifact (of a scope)', or '(scoped) terminological artifact'. |
| `shorterm`     | n | Text that can be used as an abbreviated form of the text mentioned in the `term` field.<br/>Example: 'artifact'. |
| `synonyms`     | n | List of (optionally quoted) words and/or (quoted) phrases, that are considered to have the same meaning as the text specified in the `term` field. |
| `glossaryText` | Y | Text that can be used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). This text MAY contain [term refs](@). |
| `hoverText`    | n | Text that can be used as the contents of a popup that shows as the [term](@) is rendered in a web browser and the [reader](@) hovers over the [term](@) with its mouse. |

<details>
  <summary>Example of a complete Concept Header</summary>

~~~ yaml
---
#
# Heading entries that serve multiple purposes (i.e. both TEv2 and e.g. Docusaurus):
#
id: concept-curate
#
# Header entries that are specific to third-party tools, e.g. Docusaurus - as specified in:
# https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
#
title: "Curators (of a Scope)"
sidebar_label: "Scope Curators"
#
# Generic TEv2 heading entries (i.e. valid for all `termtype`s):
#
termtype: concept
termid: curate
grouptags: [ terminology, management ]
date: 20220222
status: proposed
#
# Termtype-specific TEv2 heading entries
term: curate
glossaryText: "To evolve [concept](@) and [term](@) data in the direction of greater quality and richer content within a specific [scope](@)."
hoverText: "Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope."
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
| Summary    | summary    | A short description of the [concept](@) that explains the [concept](@) to a layperson with reasonable accuracy, so that [readers](@) stand a good chance of determining what qualifies, and what does not qualify as in instance (example) of that [concept](@). The first complete sentence in the description SHOULD be able to serve as an informal [definition](@). The first complete paragraph SHOULD be a text that is usable to describe the [concept](@) as an entry in a [HRG](@). Additional sentences and paragraphs might expand or clarify. |
| Purpose    | purpose    | Text that describes why the [concept](@) is needed. What purposes does it serve? What can you do with it that you cannot do (as well) without it? What [objectives](@essif-lab) does it help realize? Why is this [concept](@) relevant within its [scope](@)? |
| Patterns   | patterns   | Text that uses [term refs](@) to refer the interested [reader](@) to [mental models](@) for this this [concept](@) is relevant, or that provide more context for the proper use of this [concept](@). |
| Criteria   | criteria   | Text that enables a [reader](@) to make the precise same distinction as you (the author of this text) do, as to what is, and what is not an instance (example) of this [concept](@). This text SHOULD serve as the [intensional definition](https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions) of the [concept](@), i.e. the necessary and sufficient conditions for when the [term](@) associated with this [concept](@) should be used. Writing such a text is not easy when it is done meticulously. However, if done properly, it makes that the [concept](@) becomes crystal clear, not only for the [readers](@), but for you (the author) as well.<br/> In the case a [concept](@) is referred to with a noun, writing this section becomes equivalent to specifying the properties that an object needs to have in order to be counted as a referent of the [term](@). |
| Examples   | examples   | Text in which in which you give examples that obviously qualify as instances of the [concept](@), as well as examples that do NOT obviously qualify. Also, provide examples that are not (so) obvious, but help [readers](@) to better understand its [intension](https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions). You may also provide texts in which you use [term refs](@) to refer to [use-cases](@) that are provided in this (or any other) [scope](@) |
| Background | background | Text that (refers to text that) contains background information about the term, insofar that is relevant for the purposes that are to be served by the [scope](@) in which the [concept](@) has been defined. |
| Notes      | notes      | Text that may be of importance to [readers](@), but that doesn't fit anywhere else. |
| References | references | List references to other texts, standards, (scientific) articles, applicable legislation, git repo's, etc., as appropriate. |
