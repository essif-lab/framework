---
id: tev2-spec-mrg
title: Machine Readable Glossary (MRG)
sidebar_label: MRG (Machine Readable Glossary)
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

Every [scope](@) has (at least) one [MRG](@), i.e. a machine readable/processable [glossary](@) that contains entries for all [terms](@) and other terminological artifacts that are used by any [community](@) that has decided to adopt that [terminology](@). An [MRG](@) is meant to be used by tools, e.g. for creating a [HRG](@), or to help resolve [term refs](@).

:::danger Editor's note
Actually, an [MRG](@) does not only contain entries for the [terms](@) - i.e. phrases that have a [definition](@). It is more like a compendium of all terminological artifacts that exist within a particular [scope](@); this not only includes [terms](@), but also artifacts such as [patterns](@), and other things that are currently specified as `termtype`s.

This documentation should be revised in its entirety to accommodate for this; and the (YAML) fields `termtype` and `termid` should be given a more appropriate name to reflect this.
:::

This document specifies the structure of such [MRGs](@).

A [scope](@) may have multiple [MRGs](@), enabling the support of multiple versions of its [terminology](@).

## MRG structure

A Machine Readable Glossary (MRG) is a YAML (or JSON) file that has three sections:
- **`terminology`** specifies the [scopetag](@) and [scopedir](@) of the [scope](@), the [terminology](@) of which is listed in the [MRG](@), as well as the license under which it can be used.
- **`scopes`** specifies the [scopetag](@) and [scopedir](@) of any other [scope](@) of which the [terminology](@) is somehow relevant to this [scope](@).
- **`entries`** contains the (alphabetically) sorted list of [scope entries](@). Sorting was done on the `termid` field of the [scope entries](@) - not on the `id` field.

Here is an example showing the first two sections:

<Tabs
    defaultValue="yaml"
    values={[
        {label: 'Yaml', value: 'yaml'},
        {label: 'JSON', value: 'json'},
    ]}>
<TabItem value="yaml">

~~~ yaml
terminology:
  scopetag: tev2 # scope, the terminology of which is contained in this MRG
  scopedir: https://github.com/essif-lab/framework/tree/master/docs/tev2
  license: LICENCE.md
scopes: # mappings of scopetags that are used, and their scopedirs
  - scopetag: essiflab
    scopedir: https://github.com/essif-lab/framework/tree/master/docs
  - scopetag: ctwg
    scopedir: https://github.com/trustoverip/ctwg
~~~
</TabItem>
<TabItem value="json">

:::info Editor's note
As we're still developing the structure of the MRG, and we do not want to continually update the JSON equivalent of the YAML, we leave this section as `TO BE DONE` when things get finalized.
:::
~~~ json
TBD
~~~

</TabItem>
</Tabs>

The following fields are defined for the sections `terminology`:

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `scopetag` | Y | | [Scopetag](@) of the [scope](@) in which the [glossary](@) is defined | [Tag](@) of the [scope](@) from which the [term](@) and its description are obtained. We need this because a [glossary](@) not only contains [terms](term@) that are defined in the [scope](@) itself, but also [terms](term@) that are defined in other [scopes](@). The `scopes` section in the MRG SHOULD contain a mapping between the `scopetag` and its associated [scope directory](@).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `scopedir` | Y | | the [scope directory](@) associated with that [scope](@). |
| `license` | n | | File, located in the directory as specified in `scopedir`, that contains licensing data. |

The following fields are defined for the section `scopes`:

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `scopetag` | Y | | [Scopetag](@) of a third-party [scope](@), the [MRG](@) of which contains [glossary entries](@) that have been imported into the [MRG](@). |
| `scopedir` | Y | | the [scope directory](@) associated with that third-party [scope](@). |

## Machine Readable Glossary Entries

An [MRG](@) consists of a list of (machine readable) [glossary entries](@), the purpose of which is that the various tools can find all data that is relevant for the purpose that such a tool serves. Here is an example of what one element of such a list would look like:

<Tabs
    defaultValue="yaml"
    values={[
        {label: 'Yaml', value: 'yaml'},
        {label: 'JSON', value: 'json'},
    ]}>
<TabItem value="yaml">

~~~ yaml
entries: # list of (alphabetically sorted) glossary-entries
  - scopetag: ctwg # scope in which the entry is curated
    id: concept-curate
    termtype: concept
    termid: curate
    grouptags: terminology, management
    created: 20190817 # date at which the curated text of this entry was created
    updated: 20220222 # date at which the curated text of this entry was updated
    versiontag: v0.2
    commit:
    contributors:
    formphrases: curates, curated, curating, curation
    status: proposed
    termname: Curate (a scope) # human readable text, to be used in HRG as a title
    synonyms:
    glossaryText: To evolve [concept](@) and [term](@) data in the direction of greater quality and richer content within a specific [scope](@).
    hoverText: "Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope."
    url: terms # path, relative to `scopedir`/`curatedir`, where curated text of this entry is located
~~~
</TabItem>
<TabItem value="json">

:::info Editor's note
As we're still developing the structure of the MRG, and we do not want to continually update the JSON equivalent of the YAML, we leave this section as `TO BE DONE` when things get finalized.
:::
~~~ json
TBD
~~~

</TabItem>
</Tabs>

The following fields are defined for [MRG Entries](@):

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `scopetag` | Y | [Scopetag](@) of the [scope](@) in which the [glossary](@) is defined | [Tag](@) of the [scope](@) from which the [term](@) and its description are obtained. We need this because a [glossary](@) not only contains [terms](term@) that are defined in the [scope](@) itself, but also [terms](term@) that are defined in other [scopes](@). The `scopes` section in the MRG SHOULD contain a mapping between the `scopetag` and its associated [scope directory](@).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `id` | n | `termid`[^1] | Text that [identifies](identify@essiflab) the [glossary entry](@) within the context of the [MRG](@). Thus, the `id`-field in a [term ref](@) maps to a single [glossary entry](@). For [terms](term@) of other types than 'concept', the `id` would typically be of the form `<type>-<termid>`, e.g. as in `pattern-identification`.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `termtype` | n | `concept` | Text that identifies the kind of entity that the [term](@) refers to. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `termid` | Y | | Text that identifies the specific entity of the `termtype` field. Not specifying `termid` is an error.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `grouptags` | n | | Comma-separated list of [grouptags](tag@), each of which identifies a group of [terms](term@) to which this [term](@) belongs.<br/>Must satisfy PCRE regex `([a-z0-9_-]+)(?:,\s*([a-z0-9_-]+))*`. |
| `created`| n | | Date at which of the [term](@)-related data was created, in the format `<YYYY><MM><DD>`. Must satisfy PCRE regex `\d{8}`. |
| `updated`| n | | Date at which of the [term](@)-related data was last modified, in the format `<YYYY><MM><DD>`. Must satisfy PCRE regex `\d{8}`. |
| `versiontag` | n | | Text that identifies the version of the [term](@) itself (not to be confused with the version of a [terminology](@) that may contain that [term](@)).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `commit` | n | | The latest (git) commit hash of the [term's]dd(term@) [definition](@). |
| `contributors` | n | | Text that shows (or refers to) the people that have contributed to the texts related to this term |
| `formphrases` | n | | Comma-separated list of texts that the [TRRT](#trrt) can use to convert the `show text` parts of [term refs](@) into `id`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).<br/>Must satisfy PCRE regex `([a-z0-9_-{}]+)(?:,\s*([a-z0-9_-{}]+))*`. |
| `status` | n | `proposed` | Text that identifies the [status of the term](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). Allowed values are: `proposed`, `approved` or `deprecated`. |
| `termname` | Y | | Text that is used for rendering the [term](@) in a human readable document, typically a [HRG](@). It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field). |
| `synonyms` | n | | List of texts that that may alternatively be used for rendering the [term](@) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field). |
| `glossaryText` | Y | | Text that can be used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). Note that this text SHOULD be allowed to contain [term refs](term-ref@). |
| `hoverText` | n | | Text that can be used as the contents of a popup that shows as the [term](@) is rendered in a web browser and the user hovers over the [term](@) with its mouse. |
| `locator` | n | `curatedir`/`id` | Path where the [curated text](@) that is the source of this [glossary entry](@) can be found. The path is relative to the [scopedir](@) that holds the [curated text](@). The full URL of the [curated text](@) is `scopedir`/`curatedir`/`locator`, where `scopedir` and `curatedir` can be found in the [SAF](@) (which is in the root of `scopedir`). Typically, this [curated text](@) contains (human readable) text that has further explanations of the [term](@), and has sections that can be addressed by `scopedir`/`curatedir`/`locator`#`heading-id` where `heading-id` is as specified for [term refs](term-ref@). |

[1]: When `termtype` is explicitly defined, and is NOT `concept`, then the default value will be `termtype`-`termid`. So, if a mental model with `termid`=`terminology` is included in a glossary, the default would be `pattern-terminology`.
