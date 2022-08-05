---
id: mrg
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
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

Every [scope](@) has (at least) one **Machine Readable Inventory**[^1] (that we call a **Machine Readable Glossary** or [MRG](@)), that renders the [terminology](@) of a specific [scope](@) into a specific, well-defined format that is described in this document. An [MRG](@) is meant to be used by the tools from the [toolbox](/docs/tev2/tev2-toolbox), e.g. for creating a [HRG](@), or to help resolve [term refs](@). A [scope](@) may have multiple [MRGs](@), each of which represents a specific version of its [terminology](@).

[^1]: The [MRG](@) is an Inventory rather than a [glossary](@), because it contains _all_ [knowledge artifacts](@) that are [curated](@) within the [scope](@): apart from [terms](@), it also include e.g., [mental models](pattern@) and [use cases](@). We choose to maintain the [term](@) "Machine Readable Glossary" ([MRG](@)), because most of us would view it - initially, at least - as a list of [terms](@) and their [definitions](@).

We use `mrg.<vsntag>.yaml` as the default name for [MRGs](@), where `<vsntag>` is the value of the `vsntag`-field in the `versions` section of the [SAF](@) that specifies the [MRG's](@) contents.

:::info Editor's note:
We may need to revise the [MRG](@)-file naming conventions.
:::

## MRG structure

A Machine Readable Glossary (MRG) is a YAML (or JSON) file that has three sections:
- **`terminology`** specifies the characteristics of the [terminology](@) of the [scope](@). This includes the [scopetag](@) and [scopedir](@) of the [scope](@), as well as the license under which the contents of the [MRG](@) can be used.
- **`scopes`** specifies which (other) [scopes](@) are relevant to this [terminology](@). This includes the [scopetag](@) and [scopedir](@) of any such [scope](@).
- **`entries`** contains an (unsorted) list of [MRG entries](@).

<details>
  <summary>Example of sections `terminology` and `scopes`</summary>

~~~ yaml
terminology: # the fields below must match the corresponding data in the SAF
  scopetag: tev2 # scope, the terminology of which is contained in this MRG
  scopedir: https://github.com/essif-lab/framework/tree/master/docs/tev2
  curatedir: terms
  vsntag: v0.9.4
  altvsntags: [ latest ]
  license: LICENSE.md
scopes: # mappings of scopetags that are used, and their scopedirs
  - scopetag: essiflab
    scopedir: https://github.com/essif-lab/framework/tree/master/docs
  - scopetag: ctwg
    scopedir: https://github.com/trustoverip/ctwg
entries: # here follows an (unsorted) list of MRG-entries
~~~

</details>

### MRG `Terminology` section {#mrg-terminology}

The following fields are defined for the sections `terminology`:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`, or `Y*`) or not (`n`, or `F`) the field is required to be present as a header field. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value. The `F` means that we reserve this field for Future Use.
3. **`Default`** If the field is NOT required, this specifies what [TEv2 tools](@) SHOULD assume that the value is. If the field IS required, you must provide it according to the specified value.
4. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name       | Req'd | Description |
| ---------- | :---: | :---------- |
| `scopetag`   | Y | [Scopetag](@) of the [scope](@) in which the [MRG](@) is defined. This is the [scopetag](@) that the [curators](@) of the [scope](@) have chosen for this [scope](@).<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `scopedir`   | Y | URL that locates the [scope directory](@) associated with that [scope](@). |
| `curatedir`  | Y | Path to the directory where all [curated files](@) are located. This directory may contain subdirectories to allow [curators](@) to organize the files in any way they see fit. Full URL is `<scopedir>`/`<curatedir>`.|
| `vsntag`     | Y | [versiontag](@) by which the [terminology](@) of this [MRG](@) can be distinguished from the other versions of the [terminology](@) (in other [MRGs](@)). Its value MUST match the `vsntag` field of the corresponding `versions` section in the [SAF](@) |
| `altvsntags` | n | List of alternative [versiontags](@) that can be used to [identify](@) this version. Each of the values MUST be in the list of [versiontags](@) in the `altvsntags` field of the the corresponding `versions` section in the [SAF](@). |
| `license`    | n | File that contains the (default) licensing conditions. Full URL is `scopedir`/`license`. Its value MUST match the `license` field of the corresponding `versions` section in the [SAF](@), or if that isn't specified, the `license` field of the `scope` section in the [SAF](@). |

### MRG `scopes` section {#mrg-scopes}

The following fields are defined for the section `scopes`:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`, or `Y*`) or not (`n`, or `F`) the field is required to be present as a header field. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value. The `F` means that we reserve this field for Future Use.
3. **`Default`** If the field is NOT required, this specifies what [TEv2 tools](@) SHOULD assume that the value is. If the field IS required, you must provide it according to the specified value.
4. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name       | Req'd | Description |
| ---------- | :---: | :---------- |
| `scopetag`   | Y | [Scopetag](@) of a third-party [scope](@), the [MRG](@) of which contains [MRG entries](@) that have been imported into the [MRG](@). This [scopetag](@) has been chosen by the [curators](@) of the [scope](@) of which the [MRG](@) is part, to refer to that particular third-party [scope](@). This [scopetag](@) may differ from the [scopetag](@) that the [curators](@) of that third-party [scope](@) have chosen for this [scope](@) <br/>Must satisfy regex `[a-z0-9_-]+`. |
| `scopedir`   | Y | URL that locates the [scope directory](@) associated with that third-party [scope](@). |

## MRG Entries - Common Fields {#mrg-entries}

An [MRG](@) consists of a list of [MRG entries](@), the purpose of which is that the various tools can find all data that is relevant for the purpose that such a tool serves.

[MRG entries](@) are typed, and each type has its own [MRG entry](@) structure. However, all [MRG entries](@) have a common set of fields, as follows:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`, or `Y*`) or not (`n`, or `F`) the field is required to be present as a header field. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value. The `F` means that we reserve this field for Future Use.
3. **`Default`** If the field is NOT required, this specifies what [TEv2 tools](@) SHOULD assume that the value is. If the field IS required, you must provide it according to the specified value.
4. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name         | Req'd | Description |
| ------------ | :---: | :---------- |
| `scopetag`     | Y | [Scopetag](@) that [identifies](@) the [scope](@) (within the scope in which the [MRG](@) is constructed) from within which the contents of the [MRG entry](@) is [curated](@), and obtained. The [`scopes` section](#mrg-scopes) in the [MRG](@) SHOULD contain a mapping between the `scopetag` and its associated [scope directory](@).<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `vsntag`       | Y | [Versiontag](@) that [identifies](@) the version of the [terminology](@) from which the contents of the [MRG entry](@) is obtained. Thus, `scopetag`:`versiontag` [identifies](@) that [terminology](@).<br/>Must satisfy regex `[a-z0-9_-.]+`.  |
| `id`           | Y | Text that [identifies](@) the [curated text](@) from which the content of this [MRG entry](@) is obtained; it has the same value as the `id`-field in the header of a [curated text](@). In case the contents of the [MRG entry](@) was obtained from another [MRG](@), this field has the same value as the `id` field of the [MRG entry](@) from which the contents was obtained.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termid`     | Y | Name ([Identifier](@)) that is used to represent a [knowledge artifact](@). Actual, i.e. successful [identification](@) of the [knowledge artifact](@) may also depend on other characteristics, such as the `termtype`, as names are known to be [semantically overloaded](https://en.wikipedia.org/wiki/Semantic_overload). See [TEv2 identification](/docs/tev2/various-identifiers) for more details.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termtype`     | Y | Text that [identifies](@) the kind of [knowledge artifact](@) that this [MRG entry](@) refers to. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`), or `usecase`.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termattrs`    | n | List of [attributes](term-attrs@) that enable one to distinguish between [knowledge artifacts](@) that have the same [term name](@) and are of the same [type](term-type@). |
| `glossaryText` | n | Text that is used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). Note that this text SHOULD be allowed to contain [term refs](@). |
| `hoverText`    | n | Text that can be used as the contents of a popup that shows as the [term](@) is rendered in a web browser and the [reader](@) hovers over the [term](@) with its mouse. |
| `termreftext`  | n | `id` | [reftext](@) that [identifies](@) the [curated text](@) that documents the [knowledge artifact](@) that this term represents. |
| `synonyms`     | n | | List of (optionally quoted) [terms](@), that are considered to also represent the [knowledge artifact](@) that is documented by the [curated text](@). |
| `formphrases`  | n | List of [texts](formphrase@) that are [used to convert](/docs/tev2/spec-tools/trrt#id) the `show text` parts of [term refs](@) into `id`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).<br/>Must satisfy regex [`(?:\[\s*([a-z0-9_-{}]+)\s*(?:,\s*([a-z0-9_-{}]+))*\s*\])?`](https://www.debuggex.com/r/TZe27fzbJskMcjl8). |
| `grouptags`    | n | List of [grouptags](@), each of which signifies that the [(scoped) term](@) that this [MRG entry](@) documents, is part of the group of [terms](@) that it represents.<br/>Each grouptag must satisfy regex `[a-z0-9_-]+`. |
| `status`       | n | Text that identifies the status of the term. ([Communities](@) of) [scopes](@) may specify values for this field. An example is the [status tags used by ToIP](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). |
| `created`      | n | Date at which of the [term](@)-related data was created, in the date format as used within this [scope](@). |
| `updated`      | n | Date at which of the [term](@)-related data was last modified, in the date format as used within this [scope](@). |
| `vsntag`       | n | [Versiontag](@) that identifies the version of the [knowledge artifact](@) that this [MRG entry](@) documents (not to be confused with the version of a [terminology](@) of which this [knowledge artifact](@) is a part).<br/>Must satisfy regex `[a-z0-9_-\.]+`. |
| `commit`       | n | [Versiontag](@) that is a (git/gitlab) commit hash of the latest update of the [knowledge artifact](@). |
| `contributors` | n | Text that shows (or refers to) the people that have contributed to the texts related to this term. |
| `locator`      | n | Text that identifies the file that holds the [curated text](@) of the [knowledge artifact](@) that this [MRG entry](@) describes. The full URL of the [curated text](@) is `scopedir`/`curatedir`/`locator`, where `scopedir` and `curatedir` can be found in the [SAF](@) (which is in the root of `scopedir`). Note that `locator` may contain a path. |
| `navurl`       | n | URL that locates a human readable, rendered version of the [curated text](@) of the [knowledge artifact](@) that this [MRG entry](@) describes. This URL is used to resolve [term refs](@) that refer to this [knowledge artifact](@). |
| `headingids`   | n | List of texts that can be used as a [markdown 'heading-ids' field](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids). |

## MRG Entries - Type-specific fields

The [MRG](@) can hold [MRG entries](@) of different types, each of which has its particular set of fields to describe the [MRG entry](@).

<Tabs
  defaultValue="concept"
  values={[
    {label: 'Terms', value: 'term'},
    {label: 'Concepts', value: 'concept'},
    {label: 'Relations', value: 'relation'},
    {label: 'Mental Models', value: 'pattern'},
  ]}>

<TabItem value="concept"><br/>

### Header fields for `termtype: concept`

[Concepts](@) are the ideas/thoughts behind a classification of [entities](@) (what makes [entities](@) in that class 'the same').
A good description - which would include a good [definition](@) - allows us to reason about everything in the class as if it were one thing. [Curated texts](@) of type `concept` intend to provide such descriptions. Also, they specify a default name ([term](@)) by which the class, as well as unidentified instances thereof, can be refered to.

The header fields that are specific for `concept`-type descriptions are as follows:

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`, or `Y*`) or not (`n`, or `F`) the field is required to be present as a header field. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value. The `F` means that we reserve this field for Future Use.
3. **`Default`** If the field is NOT required, this specifies what [TEv2 tools](@) SHOULD assume that the value is. If the field IS required, you must provide it according to the specified value.
4. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name       | Req'd | Description |
| ---------- | :---: | :---------- |
| `isa`        | n | `id` of the [curated text](@) that documents, or a [term](@) that represents the [knowledge artifact](@) (of type `concept`) for which this [curated text](@) describes a specialization. |

</TabItem>
<TabItem value="relation"><br/>

### Header fields for `termtype: relation`

:::info Editor's note
This section needs to be discussed as `relation` is introduced as a new termtype.
:::

[Relations](@) are what associates [concepts](@) with one another. For example, the [concept](@) [terms community](@) and the [concept](@) [scope](@) are linked by the [relation](@) [curate](@), that signifies that instances (i.e. [entities](@) in the class) of [curators](@) may [curate](@) (instances of the class) [scope](@). Relations are typically modelled as (`subject`, `predicate`, `object`) triples. A [relation](@) typically has constraints, such as [multiplicities](@),[^2] but other constraints exist as well.

[^2]: The terms 'multiplicity' and 'cardinality' are often confused. In short: 'multiplicity' is at the (conceptual) class-level what 'cardinality' is at the instance level, and both use notations such as `0..1`, `1`, `0..*`, `*`, `1..*`, and `n..m`). Consider the relation [curates](@) (specified as "[terms community](@) - [0..1] --- [1..n] - [scope](@)"). The `[0..1]` and `[1..n]` are multiplicities. They signify that every [terms community](@) [curates](@) one or more [scopes](@), and every [scope](@) is curated by at most one [terms community](@) respectively. This sets constraints on the (operational) cardinalities, i.e. the number of elements that a particular [terms community](@) (e.g. `CTWG`) [curates](@) (that cardinality is `2`, becausse `CTWG` curates the [scopes](@) `ctwg` and `toip`).

A good description - which would include a good [definition](@) of the [relation](@) - allows us to reason about everything related to the [relation](@). [Curated texts](@) of type `relation` intend to provide such descriptions. Also, they specify a default name ([term](@)) by which the [relation](@), as well as unidentified instances thereof, can be refered to.

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`, or `Y*`) or not (`n`, or `F`) the field is required to be present as a header field. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value. The `F` means that we reserve this field for Future Use.
3. **`Default`** If the field is NOT required, this specifies what [TEv2 tools](@) SHOULD assume that the value is. If the field IS required, you must provide it according to the specified value.
4. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name         | Req'd | Description |
| ------------ | :---: | :---------- |
| `subject`      | y | [concept](@) that the relation relates with the [concept](@) specified by `object`. If the relation is a so-called triple (i.e. a (`subject`, `predicate`, `object`)-relation, it is the `subject`. |
| `object`       | n | A [concept](@), or a data-variable, that the `subject` of the relation relates to.[^3] |
| `pragma`       | n | text, with placeholders for `subject` (and `object` if appropriate), that can be used to construct example sentences.[^4] |
| `smult`        | n | multiplicity associated with the `subject` [concept](@). If not specified, its value is `[0..n]`. |
| `omult`        | n | multiplicity associated with the `object`. If not specified, its value is `[0..n]`. |
| `endo`         | n | For [homogeneous relations](https://en.wikipedia.org/wiki/Homogeneous_relation), i.e. relations where `subject` and `object` are the same, e.g. as in (_Person_, _is a parent of_, _Person_), [constraints](https://en.wikipedia.org/wiki/Homogeneous_relation#Properties) may hold that are typical for endo relations, such as `reflexive`, `irreflexive`, `symmetric`, `asymmetric`, `antisymmetric`, `transitive`. |
| `constraints`  | n | Comma separated list of texts, each of which specifies a constraint that the relation must always satisfy. |

[^3]: In a [relation](@) such as (_Person_, _loves_, _Person_), _Person_ is a ([concept](@)) class. However, in a [relation](@) such as (_Person_, _has lived_, _years_), _years_ is not a [concept](@) (idea), but a data-variable, that has a specific value, in this case a number (of years).

[^4]: For a [relation](@) (_[terms community](@)_, _[curates](@)_,  _[scope](@)_), a pragma could be "Terms community `subject` curates the scope '`object`'.", allowing the construction of phrases such as "Terms community CTWG curates scope 'ctwg'."

</TabItem>
<TabItem value="pattern"><br/>

### Header fields for `termtype: pattern`

A [pattern](@) (also called [mental model](https://en.wikipedia.org/wiki/Mental_model) or [conceptual model](https://en.wikipedia.org/wiki/Conceptual_model)) captures a limited set of [concepts](@) (ideas), [relations](@) between them, and constraints, such that together they form a coherent and consistent whole. They have been crafted so that they may serve as a basis for architecting, designing, and implementing IT processes, It components and their [governance](@)- and [management](@) processes.

A good description - which would include a formalized model - allows us to explain to others how [concepts](@) and [relations](@) work together and can be used in practice, in such a way that such others can demonstrate that they understand all that. [Curated texts](@) of type `pattern` intend to provide such descriptions. Also, they specify a default name ([term](@)) by which the [pattern](@) can be refered to.

:::info Editor's note
header fields for `pattern` termtypes need to be discussed.
:::

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`, or `Y*`) or not (`n`, or `F`) the field is required to be present as a header field. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value. The `F` means that we reserve this field for Future Use.
3. **`Default`** If the field is NOT required, this specifies what [TEv2 tools](@) SHOULD assume that the value is. If the field IS required, you must provide it according to the specified value.
4. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name | Req'd | Description |
| ---- | :---: | :---------- |

</TabItem>
</Tabs>

<hr/>

# Footnotes
