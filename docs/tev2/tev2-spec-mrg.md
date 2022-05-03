---
id: tev2-spec-mrg
title: Machine Readable Glossary (MRG)
sidebar_label: MRG (Machine Readable Glossary)
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

This document specifies the structure of a Machine Readable Glossary (MRG), and of entries therein.

## MRG structure

A Machine Readable Glossary (MRG) is a JSON (or YAML) file that is structured as follows:

~~~ json
{ "terminology": {
    "scopetag": "tev2",
    "scopedir": "https://github.com/essif-lab/framework/tree/master/docs/tev2"
  },
  "scopes": [
   { "scopetag": "essiflab",
     "scopedir": "https://github.com/essif-lab/framework/tree/master/docs"
   },
   { "scopetag": "ctwg",
     "scopedir": "https://github.com/trustoverip/ctwg"
   }
  ],
  "entries": [
  ]
}
~~~

WHERE:

- the `terminology` section specifies a [scopetag@] and the [scope directory@] for the [terminology@] that the MRG renders.
- the `scopes` section specifies similar [scopetag@] - [scope directory@] mappings, but for other [terminologies@]. This allows machines to trace any [term@] that is 'imported' from another [scope@] to its [curated@] source.

## Machine Readable Glossary Entries

MRG Entries consist of the following fields

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `scopetag` | Y | [Scopetag@] of the [scope@] in which the [glossary@] is defined | [Tag](@ctwg) of the [scope](@ctwg) in which the [term](@ctwg) is defined. We need this because a [glossary](@ctwg) not only contains [terms](term@ctwg) that are defined in the [scope](@ctwg) itself, but also [terms](term@ctwg) that are defined in other [scopes](@ctwg). The `scopes` section in the MRG SHOULD contain a mapping between the `scopetag` and its associated [scope directory@].<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `id` | n | `termtype`-`termid` | Text that [identifies](identify@essiflab) the [term](@ctwg) within the context of the [MRG@], and can also be used as an `id` in a [term ref](term-ref@ctwg). For [terms](term@ctwg) of other types than 'concept', the `id` would typically be of the form `<type>-<termid>`, e.g. as in `pattern-identify`.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `termtype` | n | `concept` | Text that identifies the kind of entity that the [term](@ctwg) refers to. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `termid` | Y | There is no default. Not specifying `termid` is an error. | Text that identifies the specific entity of the `termtype` field.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `grouptags` | n | (No default) | Comma-separated list of [grouptags](tag@ctwg), each of which identifies a group of [terms](term@ctwg) to which this [term](@ctwg) belongs.<br/>Must satisfy PCRE regex `([a-z0-9_-]+)(?:,\s*([a-z0-9_-]+))*`. |
| `date`| n | Date at which the glossary was generated | Date of the last update of the [term](@ctwg)-related data, in the format `<YYYY><MM><DD>`. Must satisfy PCRE regex `\d{8}`. |
| `termvsn` | n | (No default) | Text that identifies the version of the [term](@ctwg) itself (not to be confused with the version of a [terminology](@ctwg) that may contain that [term](@ctwg)).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `commit` | n | (No default) | The latest (git) commit hash of the [term's](term@ctwg) [definition](@ctwg). |
| `symphrase` | n | (No default) | Comma-separated list of texts that the [TRRT](#trrt) can use to convert the `show text` parts of [term refs@] into `id`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).<br/>Must satisfy PCRE regex `([a-z0-9_-{}]+)(?:,\s*([a-z0-9_-{}]+))*`. |
| `status` | n | `proposed` | Text that identifies the [status of the term](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). Allowed values are: `proposed`, `approved` or `deprecated`. |
| `termname` | Y | (No default) | Text that is used for rendering the [term](@ctwg) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field). |
| `synonyms` | n | (No default) | List of texts that that may alternatively be used for rendering the [term](@ctwg) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field). |
| `glossaryText` | Y | (No default) | Text that can be used as the (raw) contents for the entry of this [term](@ctwg) in a human readable [glossary](@ctwg). Note that this text SHOULD be allowed to contain [term refs](term-ref@ctwg). |
| `hoverText` | n | (No default) | Text that can be used as the contents of a popup that shows as the [term](@ctwg) is rendered in a web browser and the user hovers over the [term](@ctwg) with its mouse. |
| `url` | n | (No default) | URL of a web-page that contains human readable text that typically has further explanations of the [term](@ctwg), and has sections that can be addressed by `url#heading-id` where `heading-id` is as specified for [term refs](term-ref@ctwg). |