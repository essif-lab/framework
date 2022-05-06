---
id: tev2-spec-ctext
title: Curated Texts
sidebar_label: Curated Texts
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

**[Curated texts@]** are texts that document terminological artifacts within a specific [scope@], and hence are [curated@] by a particular [terms community@]. A [curated text@] typically documents characteristics of [terms@], such as its [definition@], the purpose(s) that it serves, etc. Also, it may provide examples, describe situations for which it is particularly relevant, etc.

A [curated text@] can be of various types: it can document a [concept@], a [mental model@] etc. The kinds of contents documented in the text may differ, depending on such types.

A [curated text@] resides in a file which we call a **[curated file@]**. All [curated files@] of a [scope@] are expected to live in its [scope directory@], as specified in the [scope's@] administration file [SAF@]. They are not only expected to be processable using the [toip terminology tools](toip-terminology-toolbox), but also by third party tools of the [curator's@] choice, such as [Docusaurus v2](https://docusaurus.io/docs), or [github pages](https://pages.github.com/). The third party tools that are used are also specified in the [scope's@] [SAF@].

A [curated text@] consists of two parts: a **[header@]**, and a **[body@]**. The [header@] is a set of key-value pairs that contain meta data about the [curated text@] and/or data that could also have been part of the [body@], but is so small that it doesn't warrant to have a dedicated section for it. Here is an example

~~~ yaml
---
id: "concept-curate"
title: "Curation of a Terminology"
termtype: "concept"
termid: "curate"
grouptags: "tev2", "management"
---

The header stats with three dashes `---` at the top of the file. Then, there is a sequence of key-value pairs, which is terminated again with three dashes. The body (this text) starts thereafter, and is regular markdown.
~~~

For further specifications, see
- [specifications for headers](tev2-spec-ctext-header), and
- [specifications for the body](tev2-spec-ctext-body)).