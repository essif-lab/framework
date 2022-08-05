---
id: ctext-spec
title: Curated Texts
sidebar_label: Curated Texts
hide_table_of_contents: true
scopetag: tev2
date: 20220713
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

A **[curated text](@)** is a text that documents a [knowledge artifact](@) within a specific [scope](@). This page specifies the syntax that [curators](@) must ensure that all [curated texts](@) comply with, and that [authors](@) are expected to follow.

The documentation of a [knowledge artifact](@) includes, e.g.:
- the [term(s)](@) that are used within its [scope](@) to represent that [knowledge artifact](@);
- a [definition](@) by which [readers](@) should be able to distinguish between instances and non-instances of that [knowledge artifact](@)
- administrative attributes, e.g., various [tags](@), dates, status, etc.
- processing attributes, e.g., formphrases, etc.,
- rendering attributes, e.g., texts to use for generating [glossaries](@), document titles, pop-ups, etc.

Within the constraints for [curated texts](@) as specified in this document, there is still lots of freedom regarding what [authors](@) (of such [texts](curated-text@)) could do, or not do. The [curators](@) of the [scope](@) are expected to provide guidance to these [authors](@) about additional constraints they require them to follow.

## Context

A [curated text](@) resides in a file which we call a **[curated file](@)**. All [curated files](@) of a [scope](@) are expected to live in (a subdirectory of) its [scope directory](@), as specified in the [scope's](@) administration file [SAF](@). [Curated files](@) are expected to be processable using the [terminology tools](/docs/tev2/tev2-toolbox). However, [curators](@) may decide that they are also to be processable by other, third party tools, e.g., for the purpose of making rendered versions of such files available to some public. Examples of such tools include [Docusaurus v2](https://docusaurus.io/docs), or [github pages](https://pages.github.com/).

## Structure

Every [curated text](@) consists of two parts: a ([YAML](https://yaml.org/spec/1.2.2/)) **[header](@)**, which is also called the 'frontmatter', and a ([markdown](https://www.markdownguide.org/basic-syntax/)) **[body](@)**. The [header](@) is a set of key-value pairs that contain meta data about the [curated text](@) and/or data that could also have been part of the [body](@), but is so small that it doesn't warrant to have a dedicated section for it.

<details>
  <summary>Example</summary>
  <div>

~~~ yaml
---
id: curated-text
scope: tev2
termtype: concept
termid: curated-text
formphrases: curated-text{ss}, ctext{ss}
grouptags: [ terminology, contributing, curation ]
status: proposed
created: 2022-06-06
glossaryText: a text that documents a [concept](@) or other [knowledge artifact](@).
hoverText: a text that documents a Concept or other Knowledge Artifact of a specific Community.
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

While part of the structure of a [curated text](@) is common for all of them, another part of it depends on the kind of [knowledge artifact](@) that it describes. That is because a [curated text](@) that defines a [concept](@) is quite different from one that describes a [mental model](@), or a [use-case](@).

TEv2 assumes that the [header](@) of a [curated text](@) contains a **generic part** that is always there, regardless of the kind of [knowledge artifact](@) that the [text](curated-text@) documents, and a **type specific part** that contains header fields that are specific for the kind of [knowledge artifact](@) that the [text](curated-text@) documents.

## Generic Header Fields {#generic-header-fields}

This section describes the **generic header fields** of a [curated text](@), i.e. the fields that must, or may appear in the [header](@) of every [curated text](@). The header fields that are specific for a particular kind of [knowledge artifact](@) are specified in the document of that particular artifact (e.g. for [concepts](/docs/tev2/spec-ctexts/ctext-concept#header)).

The following table specifies the **generic header fields**:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`, or `Y*`) or not (`n`, or `F`) the field is required to be present as a header field. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name         | Req'd | Description |
| ------------ | :---: | ----------- |
| `id`           | Y*| Text that [identifies](@) this [curated text](@) within the context of the [scope](@). The value of this field can be used as the `id`-field of a [term ref](@) that refers to the [knowledge artifact](@) described by this [curated text](@). It is RECOMMENDED that its value is constructed such that [authors](@) would use it in a natural way, e.g. by making it equal to `termname` or `<termtype>-<termname>`.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `scope`        | n | [Scopetag](@) that [identifies](@) the [scope](@) within which this document is being [curated](@). The purpose of specifying this field is that it enables tools to check that resolving any [term refs](@) within this document will use this to [identify](@) the default [scope](@).<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termname`     | Y | Name ([Identifier](@)) that is used to represent a [knowledge artifact](@). Actual, i.e. successful [identification](@) of the [knowledge artifact](@) may also depend on other characteristics, such as the `termtype`, as names are known to be [semantically overloaded](https://en.wikipedia.org/wiki/Semantic_overload). See [TEv2 identification](/docs/tev2/various-identifiers) for more details.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termtype`     | n | Text that [identifies](@) the kind of [knowledge artifact](@) that this [curated text](@) describes. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`), or `usecase`.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termattrs`    | n | List of [attributes](term-attrs@) that enable one to distinguish between [knowledge artifacts](@) that have the same [term name](@) and are of the same [type](term-type@). |
| `glossaryText` | n | Text that is used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). Note that this text SHOULD be allowed to contain [term refs](@). |
| `hoverText`    | n | Text that can be used as the contents of a popup that shows as the [term](@) is rendered in a web browser and the [reader](@) hovers over the [term](@) with its mouse. |
| `termreftext`  | n | [reftext](@) that [identifies](@) the [curated text](@) that documents the [knowledge artifact](@) that this term represents. |
| `synonyms`     | n | List of (optionally quoted) [terms](@), that are considered to also represent the [knowledge artifact](@) that is documented by the [curated text](@). |
| `formphrases`  | n | List of [texts](formphrase@) that are [used to convert](/docs/tev2/spec-tools/trrt#id) the `show text` parts of [term refs](@) into `id`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).<br/>Must satisfy regex [`(?:\[\s*([a-z0-9_-{}]+)\s*(?:,\s*([a-z0-9_-{}]+))*\s*\])?`](https://www.debuggex.com/r/TZe27fzbJskMcjl8). |
| `grouptags`    | n | List of [grouptags](@), each of which signifies that the [(scoped) term](@) that this [curated text](@) documents, is part of the group of [terms](@) that it represents.<br/>Example: `[tev2, management]`.<br/>Must satisfy regex [`(?:\[\s*([a-z0-9_-]+)\s*(?:,\s*([a-z0-9_-]+))*\s*\])?`](https://www.debuggex.com/r/a51CXl1NzR3kwihT). |
| `status`       | n | Text that identifies the status of the term. ([Communities](@) of) [scopes](@) may specify values for this field. An example is the [status tags used by ToIP](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). |
| `created`      | n | Date at which of the [curated text](@) was created, in the date format as used within this [scope](@). |
| `updated`      | n | Date at which of the [curated text](@) was last modified, in the date format as used within this [scope](@). |
| `vsntag`       | n | Text that identifies the version of the [knowledge artifact](@) that this [curated text](@) describes.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `contributors` | n | Text that shows (or refers to) the people that have contributed to this [curated text](@). |

:::info Editor's notes
1. The field `termreftext` isn't properly defined yet, and therefore every use should be documented and fed back to the developers of TEv2.
2. There is currently no generic syntax for [terms](@) - see [this issue](https://github.com/trustoverip/ctwg-toolkit-mrg/issues/15). Any use of this field should be mentioned and discussed there, until the syntax is defined.
:::

## Type-specific Header Fields {#type-specific-header-fields}

Every [curated text](@) documents a [knowledge artifact](@) of a specific type, as specified by the `termtype` field of the generic TEv2 front-matter. Depending on the value of that `termtype` field, additional front-matter may be specified. This is the case for the following `termtype`s:

- [`termtype` = `concept`](/docs/tev2/spec-ctexts/ctext-concept#header)
- [`termtype` = `pattern`](/docs/tev2/spec-ctexts/ctext-pattern#header)
