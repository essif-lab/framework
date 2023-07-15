---
id: ctext
sidebar_label: Curated Texts
hide_table_of_contents: true
scopetag: tev2
date: 20220713
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Curated Texts

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
# TEv2 Curated Text Header
term: curated-text
termType: concept
isa:
glossaryTerm:
glossaryText: a text that documents a [concept](@) or other [knowledge artifact](@) of a specific [community](@) or other [party](@), and is located within a [scope](@) that is owned by that [community](@)/[party](@).
synonymOf:
grouptags:
formPhrases: curated-text{ss}, ctext{ss}
# Curation status
status: proposed
created: 2022-06-02
updated: 2022-08-04
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Curated Text
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

This section describes the **generic header fields** of a [curated text](@), i.e. the fields that must, or may appear in the [header](@) of every [curated text](@). Currently, no header fields that are specific for a particular kind of [knowledge artifact](@) have been specified.

The following table specifies the **generic header fields**:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name            | Req'd | Description |
| --------------- | :---: | ----------- |
| `term`            | Y | [term](@) that is used to represent ([identify](@)) a specific [knowledge artifact](@).<br/>The `term`-field of a [term identifier](@) that refers to this [curated text](@) must (be resolved to) match this value.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termType`        | n | [Text](term-type@) that [identifies](@) the kind of [knowledge artifact](@) that this [curated text](@) describes. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`), or `usecase`.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `isa`             | n | [knowledge artifact](@) of which this is a specialization. |
| `glossaryTerm`    | n | Text that is used for the [term](@) in a human readable [glossary](@). For example, for a [term](@) called `member`, you may want to specify a glossaryTerm `member (of a [ommunity](@))`. |
| `glossaryText`    | n | Text that is used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). This text MUST be expected to contain [term refs](@). |
| `synonymOf`       | n | [term identifier](@) that [identifies](@) the [term](@) of which this is a [synonym](@). |
| `grouptags`       | n | List of [grouptags](@), each of which signifies that the [(scoped) term](@) that this [curated text](@) documents, is part of the group of [terms](@) that it represents.<br/>Example: `[tev2, management]`.<br/>Must satisfy regex [`(?:\[\s*([a-z0-9_-]+)\s*(?:,\s*([a-z0-9_-]+))*\s*\])?`](https://www.debuggex.com/r/a51CXl1NzR3kwihT). |
| `formPhrases`     | n | List of [texts](formphrase@) that are [used to convert](/docs/tev2/spec-tools/trrt#id) the `show text` parts of [term refs](@) into `term`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs). For details, see ['Syntax Specs - Form Phrases](/docs/tev2/spec-syntax/form-phrase-syntax). |
| `status`          | n | Text that identifies the status of the term. ([Communities](@) of) [scopes](@) may specify values for this field. An example is the [status tags used by ToIP](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). |
| `created`         | n | Date at which of the [curated text](@) was created, in the date format as used within this [scope](@). |
| `updated`         | n | Date at which of the [curated text](@) was last modified, in the date format as used within this [scope](@). |
| `contributors`    | n | Text that shows (or refers to) the people that have contributed to this [curated text](@). |
| `attribution`     | n | Text that credits the original creation of the texts in the document. |
| `originalLicense` | n | Reference to the license of the work from which the texts were derived. |
