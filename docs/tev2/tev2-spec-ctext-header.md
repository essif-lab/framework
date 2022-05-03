---
id: tev2-spec-ctext-header
title: Curated Text - Header
sidebar_label: Header Contents
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

This document specifies what the [header@] of a [curated text@] looks like. The [header@] is a set of key-value pairs that contain meta data about the [curated text@] and/or data that *could* also have been part of the [body@], but is so small that it doesn't warrant to have a dedicated section for it.

The ([yaml](https://yaml.org/spec/1.2.2/)) header starts at the top of the [curated text@] with three dashes ("`---`") to signal it is followed by directives. This is followed by a collection of key-value mappings. The end of the header is again three dashes ("`---`") to signal the change back to document content (the [body@]). Here is an example:

~~~
---
# Multi-purpose heading entries (serve both TEv2 and e.g. Docusaurus)
id: concept-curate
# Docusaurus specific heading entries (see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter for an overview)
title: "Curators (of a Scope)"
sidebar_label: "Scope Curators"
# TEv2 specific heading entries, e.g.:
termtype: concept
termid: curate
grouptags: "terminology, management"
date: 20220222
symphrase: curate, curates, curated, curation, curating
status: proposed
termname: curate
glossaryText: To evolve [concept](@ctwg) and [term](@ctwg) data in the direction of greater quality and richer content within a specific [scope](@ctwg).
hoverText: Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope.
---

## Description <!-- this is where the body starts -->
Curation is to evolve [concept@] and [term@] data in the direction of ... (etc.)
~~~

Note that header fields may serve multiple purposes. One such purpose is that it provides data to the TEv2 tools. However, since [curated texts@] may also need to be processable by other tools, such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), such tools may also use such header fields. The example above shows a header that has fields that serve both TEv2 and Docusaurus. Comments (text that starts with the `#`-character) in the example indicate the purpose(s) for which the subsequent fields are being used.

For TEv2 purposes, the following fields are defined. The `Req'd` column specifies whether (`Y`, or `Y*`) or not (`n`) the field is required to be present in the header. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value.

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `id` | Y* | `termtype`-`termid` | Text that [identifies](identify@essiflab) the [term](@ctwg) within the context of the [MRG@], and can also be used as an `id` in a [term ref](term-ref@ctwg). If the `termtype` part is specified, it MUST match the value of the `termtype` field. If the `termtype` part is not specified, it defaults to `concept-`. If the `termid` part is specified, it MUST match teh value of the `termid` field. If the `termid` part is not specified it defaults to the value of the `termid` field.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `termtype` | Y* | `concept` | Text that identifies the kind of entity that the [term](@ctwg) refers to. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `termid` | Y | There is no default. Not specifying `termid` is an error. | Text that identifies the specific entity of the `termtype` field.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `grouptags` | n | (No default) | Comma-separated list of [grouptags](tag@ctwg), each of which identifies a group of [terms](term@ctwg) to which this [term](@ctwg) belongs.<br/>Must satisfy PCRE regex `([a-z0-9_-]+)(?:,\s*([a-z0-9_-]+))*`. |
| `date`| n | (No default) | Date of the last update of the file that contains this header, in the format `<YYYY><MM><DD>`. Must satisfy PCRE regex `\d{8}`. |
| `termvsn` | n | (No default) | Text that identifies the version of the [term](@ctwg) itself (not to be confused with the version of a [terminology](@ctwg) that may contain that [term](@ctwg)).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `commit` | n | (No default) | The latest (git) commit hash of the [term's](term@ctwg) [definition](@ctwg). |
| `symphrase` | n | (No default) | Comma-separated list of texts that the [TRRT](toip-toolbox-trrt) can use to convert the `show text` parts of [term refs@] into `id`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).<br/>Must satisfy PCRE regex `([a-z0-9_-{}]+)(?:,\s*([a-z0-9_-{}]+))*`. |
| `status` | n | `proposed` | Text that identifies the [status of the term](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). Allowed values are: `proposed`, `approved` or `deprecated`. |
| `termname` | Y | (No default) | Text that is used for rendering the [term](@ctwg) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field). |
| `synonyms` | n | (No default) | List of texts that that may alternatively be used for rendering the [term](@ctwg) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field). |
| `glossaryText` | Y | (No default) | Text that can be used as the (raw) contents for the entry of this [term](@ctwg) in a human readable [glossary](@ctwg). Note that this text SHOULD be allowed to contain [term refs](term-ref@ctwg). |
| `hoverText` | n | (No default) | Text that can be used as the contents of a popup that shows as the [term](@ctwg) is rendered in a web browser and the user hovers over the [term](@ctwg) with its mouse. |
| `url` | n | (No default) | URL of a web-page that contains human readable text that typically has further explanations of the [term](@ctwg), and has sections that can be addressed by `url#heading-id` where `heading-id` is as specified for [term refs](term-ref@ctwg). |
