---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: artifact-id-placeholder #
# TEv2: generic front-matter for curated texts
scope: tev2 # must be the same as [SAF](@).scope.scopetag
termtype:
termid:
formphrases:
grouptags:
status:
created:
updated:
vsntag:
contributors:
# TEv2: type-specific front-matter
### here you put the front-matter for the specific type of artifact
# Docusaurus (see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter):
title: Title that shows on the Docusaurus page
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

This document specifies what specifics of [curated texts](@) that describe [terminological artifacts](@) of type <Mark>`Artifact`</Mark>. The reader is assumed to be familiar with the [generic structure of a curated text](ctext).

## Introduction

A [Artifact](@) is a <Mark>[describe what the specific Artifact is]</Mark>.

A good description allows [readers](@) to <Mark>[describe what a good description does]</Mark>.

## Header {#header}

 In this section, we describe the header fields that are specific for [terminological artifacts](@) of type <Mark>`Artifact`</Mark>:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present as a header field.
4. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name | Req'd | Description |
| ---- | :---: | ----------- |
| `term`         | Y | Text that is the name of the [<Mark>Artifact</Mark>](@) in (human readable) texts. It is typically used to represent the [<Mark>Artifact</Mark>](@) itself, but also to represent arbitrary/unspecified instances thereof. This text will show as an entry in the [HRG](@).<br/>Examples: <Mark>[Provide examples]</Mark> |

<details>
  <summary>Example of a complete <Mark>Artifact</Mark> Header</summary>

:::info Editor's note
content for the YAML header needed here below
:::

~~~ yaml
---
#
# Heading entries that serve multiple purposes (i.e. both TEv2 and e.g. Docusaurus):
#
id: <Mark>Artifact</Mark>-example

---
~~~

</details>

## Body {#body}

A [markdown](https://www.markdownguide.org/basic-syntax/) body consists of one or more sections that each have a [heading](https://www.markdownguide.org/basic-syntax/#headings), optionally followed by a [heading id](https://www.markdownguide.org/extended-syntax/#heading-ids). We provide suggestions for a variety of sections, that we think help [readers](@) get a good understanding of the [<Mark>Artifact</Mark>](@) that is described.

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
| Summary    | summary    | A short description of the [<Mark>Artifact</Mark>](@) that explains it to a layperson with reasonable accuracy, so that [readers](@) stand a good chance of determining what qualifies, and what does not qualify as in instance (example) of that [<Mark>Artifact</Mark>](@). The first complete sentence in the description SHOULD be able to serve as an informal [definition](@). The first complete paragraph SHOULD be a text that is usable to describe the [<Mark>Artifact</Mark>](@) as an entry in a [HRG](@). Additional sentences and paragraphs might expand or clarify. |
| Purpose    | purpose    | Text that describes why the <Mark>Artifact</Mark> is needed. What purposes does it serve? What can you do with it that you cannot do (as well) without it? What [objectives](@essif-lab) does it help realize? Why is this <Mark>Artifact</Mark> relevant within its scope of definition? |
| Patterns   | patterns   | Text that uses [term refs](@) to refer the interested [reader](@) to [mental models](@) for this this [<Mark>Artifact</Mark>](@) is relevant, or that provide more context for the proper use of this [<Mark>Artifact</Mark>](@). |
| Criteria   | criteria   | Text that enables a [reader](@) to make the precise same distinction as you (the author of this text) do, as to what is, and what is not an instance (example) of this <Mark>Artifact</Mark>. This text SHOULD serve as the [intensional definition](https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions) of the [<Mark>Artifact</Mark>](@), i.e. the necessary and sufficient conditions for when the [term](@) associated with this [<Mark>Artifact</Mark>](@) should be used. Writing such a text is not easy when it is done meticulously. However, if done properly, it makes that the [<Mark>Artifact</Mark>](@) becomes crystal clear, not only for the [readers](@), but for you (the author) as well.<br/> In the case a [<Mark>Artifact</Mark>](@) is referred to with a noun, writing this section becomes equivalent to specifying the properties that an object needs to have in order to be counted as a referent of the [term](@). |
| Examples   | examples   | Text in which in which you give examples that obviously qualify as instances of the [<Mark>Artifact</Mark>](@), as well as examples that do NOT obviously qualify. Also, provide examples that are not (so) obvious, but help [readers](@) to better understand its [intension](https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions). You may also provide texts in which you use [term refs](@) to refer to [use-cases](@) that are provided in this (or any other) [scope](@) |
| Background | background | Text that (refers to text that) contains background information about the term, insofar that is relevant for the purposes that are to be served by the [scope](@) in which the [<Mark>Artifact</Mark>](@) has been defined. |
| Notes      | notes      | Text that may be of importance to [readers](@), but that doesn't fit anywhere else. |
| References | references | List references to other texts, standards, (scientific) articles, applicable legislation, git repo's, etc., as appropriate. |
