---
id: ctext
title: Curated Texts
sidebar_label: Curated Texts
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

A **[curated text](@)** is a text that documents a [terminological artifact](@) within a specific [scope](@), the most common kind of which is the [concept](@) (sometimes also called 'term'). However, other kinds of such [artifacts](terminological-artifact@) can also be documented, such as [mental models](@), [use-cases](@), and more.

People that actively contribute to the creation and maintenance of [curated texts](@) within a specific [scope](@), including those that do the actual [curation](@) of such [texts](curated-text@) - the [curators](@) - form what we call the [terms community](@) of that [scope](@).

Every [terminological artifact](@) is associated with a [term](@) that [identifies](@) the [artifact](terminological-artifact@) within its [scope](@), and that hence can be used to refer[^1] to the [artifact](terminological-artifact@) or specific attributes thereof, such as its [definition](@), the purpose(s) that it serves, etc.

[^1]: While this is true in most cases, it may happen that two [artifacts](terminological-artifact@) that are [curated](@) in the same [scope](@), yet are of different kinds, are associated with the same [term](@). For example, 'ownership' can be described as a [relation](@) and/or a [concept](@) (and/or a [mental model](@)). From the perspective of human readability, this is not expected to produce difficult problems, as humans can typically disambiguate such terms from the context in which they appear, or the (human readable) texts can  readily be adapted. However, from the machine readable perspective, such ambiguities can only be resolved by ensuring that every [artifacts](terminological-artifact@) is associated with an `id` that the TEv2 tools can use to [identify](@) the (single) [artifact](terminological-artifact@) as it is intended, and requiring that authors use that `id` whenever needed. This `id` must be specified in the `id`-field of the [header](@) of a [curated text](@).
## Context

A [curated text](@) resides in a file which we call a **[curated file](@)**. All [curated files](@) of a [scope](@) are expected to live in (a subdirectory of) its [scope directory](@), as specified in the [scope's](@) administration file [SAF](@). [Curated files](@) are expected to be processable using the [terminology tools](tev2-toolbox). However, [curators](@) may decide that they are also to be processable by other, third party tools, e.g., for the purpose of making rendered versions of such files available to some public. Examples of such tools include [Docusaurus v2](https://docusaurus.io/docs), or [github pages](https://pages.github.com/).

## Structure

Every [curated text](@) consists of two parts: a ([YAML](https://yaml.org/spec/1.2.2/)) **[header](@)**, and a ([markdown](https://www.markdownguide.org/basic-syntax/)) **[body](@)**. The [header](@) is a set of key-value pairs that contain meta data about the [curated text](@) and/or data that could also have been part of the [body](@), but is so small that it doesn't warrant to have a dedicated section for it. Here is an example

<details>
  <summary>Compact example</summary>
  <div>

~~~ yaml
---
id: "concept-curated-text"
title: "Curated Texts"
termtype: "concept"
termid: "curated-text"
grouptags: [ tev2, management ]
---

A curated text starts with three dashes `---`.
This indicates the start of its (YAML) header.
Typically, the header consists of a sequence of key-value pairs.
The header is terminated with onother three dashes and a new line.

The body of the curated text starts behind the header block.
It is typically markdown, but other constructs may be inserted
that contribute to the rendering of these texts in a (static) website.
An example of this is [MDX](https://mdxjs.com/).
A discussion on these other constructs is outside the scope of this document.
~~~

  </div>
</details>

While part of the structure of a [curated text](@) is common for all of them, another part of it depends on the kind of [terminological artifact](@) that it describes: obviously, a [curated text](@) that defines a [concept](@) is quite different from one that describes a [mental model](@), or a [use-case](@).

TEv2 assumes that the [header](@) of a [curated text](@) contains a **generic part** that is always there, regardless of the kind of [terminological artifact](@) that the [text](curated-text@) documents, and a **type specific part** that contains header fields that are specific for the kind of [terminological artifact](@) that the [text](curated-text@) documents.

## Generic Header Fields {#generic-header-fields}

This section describes the **generic header fields** of a [curated text](@), i.e. the fields that must, or may appear in the [header](@) of every [curated text](@). The header fields that are specific for a particular kind of [terminological artifact](@) are specified in the document of that particular artifact (e.g. for [concepts](ctext-concept#header)).

The following table specifies the **generic header fields**:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`, or `Y*`) or not (`n`) the field is required to be present as a header field. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value.
3. **`Default`** If the field is NOT required, this specifies what [TEv2 tools](@) SHOULD assume that the value is. If the field IS required, you must provide it according to the specified value.
4. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `id`           | Y* | `<termtype>`-`<termid>` | Text that [identifies](@) this [curated text](@) within the context of the [scope](@). The value of this field can be used as the `id`-field of a [term ref](@) that refers to the [terminological artifact](@) described by this [curated text](@).<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `scope`        | n  | | [Scopetag](@) that [identifies](@) the [scope](@) within which this document is being [curated](@). The purpose of specifying this field is that it enables tools to check that resolving any [term refs](@) within this document will use this to [identify](@) the default [scope](@).<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termtype`     | n  | `concept` | Text that [identifies](@) the kind of [terminological artifact](@) that this [curated text](@) describes. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`), or `usecase`.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termid`       | Y  | | Text that, together with the value of the `termtype` field, [identifies](@) this [curated text](@) within the context of this [scope](@).<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `formphrases`  | n  | | List of [texts](formphrase@) that are [used to convert](tev2-toolbox-trrt#id) the `show text` parts of [term refs](@) into `id`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).<br/>Must satisfy regex [`(?:\[\s*([a-z0-9_-{}]+)\s*(?:,\s*([a-z0-9_-{}]+))*\s*\])?`](https://www.debuggex.com/r/TZe27fzbJskMcjl8). |
| `grouptags`    | n  | | List of [grouptags](@), each of which [identifies](@) a group of [terminological artifacts](@) of which the [terminological artifact](@) that this [curated text](@) describes, is a member.<br/>Example: `[tev2, management]`.<br/>Must satisfy regex [`(?:\[\s*([a-z0-9_-]+)\s*(?:,\s*([a-z0-9_-]+))*\s*\])?`](https://www.debuggex.com/r/a51CXl1NzR3kwihT). |
| `status`       | n  | `proposed` | Text that identifies the status of the term. ([Communities](@) of) [scopes](@) may specify values for this field. An example is the [status tags used by ToIP](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). |
| `created`      | n  | | Date at which of the [curated text](@) was created, in the date format as used within this [scope](@). |
| `updated`      | n  | | Date at which of the [curated text](@) was last modified, in the date format as used within this [scope](@). |
| `vsntag`       | n  | | Text that identifies the version of the [terminological artifact](@) that this [curated text](@) describes.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `contributors` | n  | | Text that shows (or refers to) the people that have contributed to this [curated text](@). |

## Type-specific Header Fields {#type-specific-header-fields}

Every [curated text](@) documents a [terminological artifact](@) of a specific type, as specified by the `termtype` field of the generic TEv2 front-matter. Depending on the value of that `termtype` field, additional front-matter may be specified. This is the case for the following `termtype`s:

- [`termtype` = `concept`](ctext-concept#header)
- [`termtype` = `pattern`](ctext-pattern#header)
