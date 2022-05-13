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

Every [scope](@) has (at least) one **Machine Readable Inventory**[^1] (that we call a **Machine Readable Glossary** or [MRG](@)), that renders the [terminology](@) of a specific [scope](@) into a specific, well-defined format that is described in this document. An [MRG](@) is meant to be used by the tools from the [toolbox](tev2-toolbox), e.g. for creating a [HRG](@), or to help resolve [term refs](@). A [scope](@) may have multiple [MRGs](@), enabling the support of multiple versions of its [terminology](@).

[^1]: The [MRG](@) is an Inventory rather than a [glossary](@), because it contains _all_ [terminological artifacts](@) that are [curated](@) within the [scope](@): apart from [terms](@), it also include e.g., [mental models](pattern@) and [use cases](@). We choose to maintain the [term](@) "Machine Readable Glossary" ([MRG](@)), because most of us would view it - initially, at least - as a list of [terms](@) and their [definitions](@).

## MRG structure

A Machine Readable Glossary (MRG) is a YAML (or JSON) file that has three sections:
- **`terminology`** specifies the characteristics of the [terminology](@) of the [scope](@). This includes the [scopetag](@) and [scopedir](@) of the [scope](@), as well as the license under which the contents of the [MRG](@) can be used.
- **`scopes`** specifies which (other) [scopes](@) are relevant to this [terminology](@). This includes the [scopetag](@) and [scopedir](@) of any such [scope](@).
- **`entries`** contains an (unsorted) list of [MRG entries](@).

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

:::info Editor's note
The section below deviates from the design choices made for [SAFs](@), where the `scopedir` of the [scope](@) in which the [MRG](@) is defined is made part of the `scopes` section. We need to determine whether or not change either the [SAF](@) spec or the [MRG](@) spec or leave it as it is.
:::

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `scopetag` | Y | | [Scopetag](@) of the [scope](@) in which the [MRG](@) is defined.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `scopedir` | Y | | the [scope directory](@) associated with that [scope](@). |
| `license`  | n | | File, located in the directory as specified in `scopedir`, that contains licensing data. |

The following fields are defined for the section `scopes`:

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `scopetag` | Y | | [Scopetag](@) of a third-party [scope](@), the [MRG](@) of which contains [MRG entries](@) that have been imported into the [MRG](@).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `scopedir` | Y | | the [scope directory](@) associated with that third-party [scope](@). |

## MRG Entries - Common Fields

An [MRG](@) consists of a list of [MRG entries](@), the purpose of which is that the various tools can find all data that is relevant for the purpose that such a tool serves.

[MRG entries](@) are typed, and each type has its own [MRG entry](@) structure. However, all [MRG entries](@) have a common set of fields, as follows:

| Name | Req'd | Description |
| ---- | :---: | ----------- |
| `scopetag`     | Y | [Tag](@) of the [scope](@) from which the [MRG entry](@) and its description are obtained. We need this because an [MRG](@) not only contains [terminological artifacts](@) that are defined in the [scope](@) itself, but also [terminological artifacts](@) that are defined in other [scopes](@). The `scopes` section in the [MRG](@) SHOULD contain a mapping between the `scopetag` and its associated [scope directory](@).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `id`           | Y | Text that [identifies](@) the [MRG entry](@) within the context of the [MRG](@). Resolution of a [term ref](@) is done by matching the `id`-field of that [term ref](@) with the `id` fields of [MRG entries](@), and selecting the (single) [MRG entry](@) if a match is found. It is typical (but not required) that [terminological artifacts](@) of the type `concept`, `term` and `relation` have this `id` field identical to the `termid` field of the [MRG entry](@) if that does not result in ambiguities. For other `termtype`s, or in case of ambiguities, this field would typically be of the form `<termtype>-<termid>`, which would be `pattern-terminology` for the terminology-pattern.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `termtype`     | Y | Text that [identifies](@) the kind of [terminological artifact](@) that this [MRG entry](@) refers to. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`), or `usecase`.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `termid`       | Y | Text that [identifies](@) an instance of the [terminological artifacts](@) of the type specified in the `termtype` field of this [MRG entry](@).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `grouptags`    | n | Comma-separated list of [grouptags](tag@), each of which [identifies](@) a group of [terminological artifacts](@) of which this [MRG entry](@) describes a member.<br/>Must satisfy PCRE regex `([a-z0-9_-]+)(?:,\s*([a-z0-9_-]+))*`. |
| `created`      | n | Date at which of the [term](@)-related data was created, in the date format as used within this [scope](@). |
| `updated`      | n | Date at which of the [term](@)-related data was last modified, in the date format as used within this [scope](@). |
| `versiontag`   | n | Text that identifies the version of the [terminological artifact](@) that this [MRG entry](@) documents (not to be confused with the version of a [terminology](@) of which this [terminological artifact](@) is a part).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `commit`       | n | The (git/gitlab) commit hash of the latest update of the [terminological artifact's](@). |
| `contributors` | n | Text that shows (or refers to) the people that have contributed to the texts related to this term. |
| `formphrases`  | n | Comma-separated list of [texts](formphrase@) that the [TRRT](#trrt) can use to convert the `show text` parts of [term refs](@) into `id`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).<br/>Must satisfy PCRE regex `([a-z0-9_-{}]+)(?:,\s*([a-z0-9_-{}]+))*`. |
| `status`       | n | Text that identifies the [status of the term](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). Allowed values are: `proposed`, `approved` or `deprecated`. |
| `locator`      | n | Text that identifies the file that holds the [curated text](@) of the [terminological artifact](@) that this [MRG entry](@) describes, relative to the [scopedir](@) that holds the [curated text](@). The full URL of the [curated text](@) is `scopedir`/`curatedir`/`locator`, where `scopedir` and `curatedir` can be found in the [SAF](@) (which is in the root of `scopedir`). |

## MRG Entries - Type-specific fields

The [MRG](@) can hold [MRG entries](@) of different types, each of which has its particular set of fields to describe the [MRG entry](@), as follows:

<Tabs
    defaultValue="concept"
    values={[
        {label: 'Term', value: 'term'},
        {label: 'Concept', value: 'concept'},
        {label: 'Relation', value: 'relation'},
        {label: 'Mental Model', value: 'pattern'},
        {label: 'Use Case', value: 'usecase'},
        {label: 'Example', value: 'example'},
    ]}>
<TabItem value="concept">

## Header fields for `termtype: concept`

[Concepts](@) are the ideas/thoughts behind a classification of [entities](@) (what makes [entities](@) in that class 'the same').
A good description - which would include a good [definition](@) - allows us to reason about everything in the class as if it were one thing. [Curated texts](@) of type `concept` intend to provide such descriptions. Also, they specify a default name ([term](@)) by which the class, as well as unidentified instances thereof, can be refered to.

The header fields that are specific for `concept`-type descriptions are as follows:

| Name | Req'd | Description |
| ---- | :---: | ----------- |
| `term`         | Y | Text that is used to [identify](@) the [concept](@) (in the context of the [MRG](@), and also to represent arbitrary instances of that [concept](@) in human readable documents, such as a [HRG](@).<br/>Example: 'terminological artifact'. |
| `fullterm`     | n | Text that can be used as the complete form of the text mentioned in the `term` field.<br/>Example: 'terminological artifact (of a scope)', or '(scoped) terminological artifact'. |
| `shorterm`     | n | Text that can be used as an abbreviated form of the text mentioned in the `term` field.<br/>Example: 'artifact'. |
| `synonyms`     | n | Comma-separated list of (optionally quoted) words and/or (quoted) phrases, that are considered to have the same meaning as the text specified in the `term` field. |
| `glossaryText` | Y | Text that can be used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). Note that this text SHOULD be allowed to contain [term refs](term-ref@). |
| `hoverText`    | n | Text that can be used as the contents of a popup that shows as the [term](@) is rendered in a web browser and the user hovers over the [term](@) with its mouse. |

### Example of a complete Concept header

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
grouptags: terminology, management
date: 20220222
status: proposed
#
# Termtype-specific TEv2 heading entries
term: curate
glossaryText: "To evolve [concept](@) and [term](@) data in the direction of greater quality and richer content within a specific [scope](@)."
hoverText: "Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope."
---
~~~

</TabItem>
<TabItem value="term">

## Header fields for `termtype: term`

A [term](@) is a word or phrase that is used in a [scope](@) in a specific meaning, typically referring to a specific [concept](@), or a [relation](@) between [concepts](@). This meaning may deviate from the meanings that this word or phrase has in other [scopes](@), and in everyday language.

[Terms](@) do not generally need to be documented as a [curated text](@) when they are already specified as the default name in the [curated text](@) that describes the [concept](@), [relation](@), or other [terminological artifact](@). In specific cases, however, words or phrases need to be assigned to existing [curated texts](@), for example, a [scopetag](@) is a specialization of a [grouptag](@), and can hence be documented as (a specialization of) a [grouptag](@) that has the (additional) property of grouping all [terms](@) defined in the [scope](@) that it [identifies](@).

:::info Editor's note
header fields for `term` termtypes need to be discussed.
:::

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |


</TabItem>
<TabItem value="relation">

## Header fields for `termtype: relation`

:::info Editor's note
This section needs to be discussed as `relation` is introduced as a new termtype.
:::

[Relations](@) are what associates [concepts](@) with one another. For example, the [concept](@) [terms community](@) and the [concept](@) [scope](@) are linked by the [relation](@) [curate](@), that signifies that instances (i.e. [entities](@) in the class) of [curators](@) may [curate](@) (instances of the class) [scope](@). Relations are typically modelled as (`subject`, `predicate`, `object`) triples. A [relation](@) typically has constraints, such as [multiplicities](@),[^3] but other constraints exist as well.

[^3]: The terms 'multiplicity' and 'cardinality' are often confused. In short: 'multiplicity' is at the (conceptual) class-level what 'cardinality' is at the instance level, and both use notations such as `0..1`, `1`, `0..*`, `*`, `1..*`, and `n..m`). Consider the relation [curates](@) (specified as [terms community](@) [0..1] --- [1..n] [scope](@)). The `[0..1]` and `[1..n]` are multiplicities. They signify that every [terms community](@) [curates](@) 1 or more [scopes](@), and every [scope](@) is curated by at most one [terms community](@) respectively. This sets constraints on the (operational) cardinalities, i.e. the number of elements that a particular [terms community](@) (e.g. `CTWG`) [curates](@) (that cardinality is `2`, becausse `CTWG` curates the [scopes](@) `ctwg` and `toip`).

A good description - which would include a good [definition](@) of the [relation](@) - allows us to reason about everything related to the [relation](@). [Curated texts](@) of type `relation` intend to provide such descriptions. Also, they specify a default name ([term](@)) by which the [relation](@), as well as unidentified instances thereof, can be refered to.

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| subject | y | (No default) | [concept](@) that the relation relates with the [concept](@) specified by `object`. If the relation is a so-called triple (i.e. a (`subject`, `predicate`, `object`)-relation, it is the `subject`. |
| object | n | (No default) | A [concept](@), or a data-variable, that the `subject` of the relation relates to.[^4] |
| pragma | n | (No default) | text, with placeholders for `subject` (and `object` if appropriate), that can be used to construct example sentences.[^5] |
| smult | n | `[0..n]` | multiplicity associated with the `subject` [concept](@). |
| omult | n | `[0..n]` | multiplicity associated with the `object` |
| endo | n | (No default) | For [homogeneous relations](https://en.wikipedia.org/wiki/Homogeneous_relation), i.e. relations where `subject` and `object` are the same, e.g. as in (_Person_, _is a parent of_, _Person_), [constraints](https://en.wikipedia.org/wiki/Homogeneous_relation#Properties) may hold that are typical for endo relations, such as `reflexive`, `irreflexive`, `symmetric`, `asymmetric`, `antisymmetric`, `transitive`. |
| constraints | n | (No default) | Comma separated list of texts, each of which specifies a constraint that the relation must always satisfy. |

[^4]: In a [relation](@) such as (_Person_, _loves_, _Person_), _Person_ is a ([concept](@)) class. However, in a [relation](@) such as (_Person_, _has lived_, _years_), _years_ is not a [concept](@) (idea), but a data-variable, that has a specific value, in this case a number (of years).

[^5]: For a [relation](@) (_[terms community](@)_, _[curates](@)_,  _[scope](@)_), a pragma could be "Terms community `subject` curates the scope '`object`'.", allowing the construction of phrases such as "Terms community CTWG curates scope 'ctwg'."

</TabItem>
<TabItem value="pattern">

## Header fields for `termtype: pattern`

A [pattern](@) (also called [mental model](https://en.wikipedia.org/wiki/Mental_model) or [conceptual model](https://en.wikipedia.org/wiki/Conceptual_model)) captures a limited set of [concepts](@) (ideas), [relations](@) between them, and constraints, such that together they form a coherent and consistent whole. They have been crafted so that they may serve as a basis for architecting, designing, and implementing IT processes, It components and their [governance](@)- and [management](@) processes.

A good description - which would include a formalized model - allows us to explain to others how [concepts](@) and [relations](@) work together and can be used in practice, in such a way that such others can demonstrate that they understand all that. [Curated texts](@) of type `pattern` intend to provide such descriptions. Also, they specify a default name ([term](@)) by which the [pattern](@) can be refered to.

:::info Editor's note
header fields for `pattern` termtypes need to be discussed.
:::

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |

</TabItem>
<TabItem value="usecase">

## Header fields for `termtype: usecase`

:::info Editor's note
header fields for `usecase` termtypes need to be discussed.
:::

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |

</TabItem>
<TabItem value="example">

## Header fields for `termtype: example`

:::info Editor's note
header fields for `example` termtypes need to be discussed.
:::

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |

</TabItem>
</Tabs>

<!--
## Alternative - Header fields for different `termtype`s:

<details>
  <summary>Concepts</summary>
  <div>
   This is the contents for `Concepts`
  </div>
</details>

<details>
   <summary>Patterns (mental models)</summary>
   <div>
   😲😲😲😲😲
   </div>
</details>
-->

<hr/>

# Footnotes