---
id: header
title: Header (of Curated Text)
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

:::info Editor's note
This text should describe the general ideas behind a header, e.g. as 'front-matter'.
It should also describe how different tools (Docusaurus, Jekyll, etc.) have different fields, and talk a bit how the choice of curators for third-party tooling may affect the headers. Note that such choices are free, because other scopes will typically not access rendered stuff (give or take a `header-id`), but restrict themselves to stuff that is in the MRG.
:::

A [curated text](@) is a text that consists of a text called a [header](@), which is then followed by another text called the [body](@). The [header](@), also called 'front matter', is a set of so-called 'header fields', i.e. key-value pairs that contain meta data about the [curated text](@).[^1] Headers are typically used for specifying data that various tools can pick up for their further processing.

[^1]: Key-value pairs may also be used to contain data that *could* have been part of the [body](@), but for which it is more convenient to make it part of the 'front matter'.

The ([yaml](https://yaml.org/spec/1.2.2/)) header starts at the very top of the [curated text](@) with three dashes ("`---`") to signal it is followed by directives. This is followed by a collection of key-value mappings. The end of the header is again three dashes ("`---`") to signal the change back to document content (the [body](@)).

Header fields can serve different purposes:
- 'multi-purpose fields' are header fields that do not only serve TEv2, but also other tools, such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction). It is a design objective to limit such fields to the bare minimum. The (required) `id` field and the (optional) `date` field are the most prominent ones in this category
- third-party tool specific fields. These are fields that the other tools need, e.g. for [Docusaurus content docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter), [jekyll](https://jekyllrb.com/docs/front-matter/).
- TEv2-specific fields, that are common for all [curated texts](@)
- TEv2-specific fields, that are specific for the different kinds of [terminological artifacts](@), e.g. [concepts](@), [mental models](@), [use-cases](@), etc.).

Here is an example of the [header](@) of a [curated text](@) for the [concept](@) '[curate](@)':

~~~ yaml
---
#
# Heading entries that serve multiple purposes (i.e. both TEv2 and e.g. Docusaurus):
#
id: concept-curate
date: 20220222
#
# Header entries that are specific to third-party tools, e.g. Docusaurus - as specified in:
# https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
#
title: "Curators (of a Scope)"
sidebar_label: "Scope Curators"
hide_table_of_contents: "true"
#
# Generic TEv2 heading entries (i.e. valid for all `termtype`s):
tev2-termtype: concept
tev2-termid: curate
tev2-grouptags: terminology, management
tev2-status: proposed
#
# MRG-specific TEv2 heading entries
mrg-entry-name: curate (a scope)
mrg-entry-text: To evolve [concept](@) and [term](@) data in the direction of greater quality and richer content within a specific [scope](@).
#
# HRG specific heading entries
hoverText: "Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope."
---
~~~
Right behind the [header](@), you can start with the [body](@) of the [curated text](@).

For TEv2 purposes, we specify fields in tables that have four columns, as follows:

1. the `Name` column contains the field name;
2. the `Req'd` column specifies whether (`Y`, or `Y*`) or not (`n`) the field is required to be present in the header. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value.
3. the `Default` column specifies that [TEv2 tools](@) SHOULD assume that the value is in case no value is specified.
4. the `Description` column specifies the meaning of the field, and sometimes also why it is needed, or the required syntax.

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `id`           | Y* | `<termtype>`-`<termid>` | Text that [identifies](@) this [curated text](@) within the context of the [scope](@). The value of this field can be used as the `id`-field of a [term ref](@) that refers to the [terminological artifact](@) described by this [curated text](@).<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termtype`     | Y  | `concept` | Text that [identifies](@) the kind of [terminological artifact](@) that this [curated text](@) describes. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`), or `usecase`.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `termid`       | Y  | | Text that, together with the value of the `termtype` field, [identifies](@) this [curated text](@) within the context of this [scope](@).<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `grouptags`    | n  | | List of [grouptags](tag@), each of which [identifies](@) a group of [terminological artifacts](@) of which the [terminological artifact](@) that this [curated text](@) describes, is a member.<br/>Must satisfy regex [`(?:\[\s*([a-z0-9_-]+)\s*(?:,\s*([a-z0-9_-]+))*\s*\])?`](https://www.debuggex.com/r/a51CXl1NzR3kwihT). |
| `created`      | n  | | Date at which of the [curated text](@) was created, in the date format as used within this [scope](@). |
| `updated`      | n  | | Date at which of the [curated text](@) was last modified, in the date format as used within this [scope](@). |
| `versiontag`   | n  | | Text that identifies the version of the [terminological artifact](@) that this [curated text](@) describes.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `contributors` | n  | | Text that shows (or refers to) the people that have contributed to this [curated text](@). |
| `formphrases`  | n  | | List of [texts](formphrase@) that the [TRRT](#trrt) can use to convert the `show text` parts of [term refs](@) into `id`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).<br/>Must satisfy regex [`(?:\[\s*([a-z0-9_-{}]+)\s*(?:,\s*([a-z0-9_-{}]+))*\s*\])?`](https://www.debuggex.com/r/TZe27fzbJskMcjl8). |
| `status`       | n  | `proposed` | Text that identifies the status of the term. ([Communities](@) of) [scopes](@) may specify values for this field. An example is the [status tags used by ToIP](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). |

## Header fields for different `termtype`s:

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

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `term`         | Y | `<termid>` | Text that is used to [identify](@) the [concept](@) (in the context of the [MRG](@), and also to represent arbitrary instances of that [concept](@) in human readable documents, such as a [HRG](@).<br/>Example: 'terminological artifact'. |
| `fullterm`     | n | | Text that can be used as the complete form of the text mentioned in the `term` field.<br/>Example: 'terminological artifact (of a scope)', or '(scoped) terminological artifact'. |
| `shorterm`     | n | | Text that can be used as an abbreviated form of the text mentioned in the `term` field.<br/>Example: 'artifact'. |
| `synonyms`     | n | | Comma-separated list of (optionally quoted) words and/or (quoted) phrases, that are considered to have the same meaning as the text specified in the `term` field. |
| `glossaryText` | Y | | Text that can be used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). Note that this text SHOULD be allowed to contain [term refs](term-ref@). |
| `hoverText`    | n | | Text that can be used as the contents of a popup that shows as the [term](@) is rendered in a web browser and the user hovers over the [term](@) with its mouse. |

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
hide_table_of_contents: "true"
#
# Generic TEv2 heading entries (i.e. valid for all `termtype`s):
#
termtype: concept
termid: curate
grouptags: [ terminology, management ]
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

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |


</TabItem>
<TabItem value="relation">

## Header fields for `termtype: relation`

:::info Editor's note
This section needs to be discussed as `relation` is introduced as a new termtype.
:::

[Relations](@) are what associates [concepts](@) with one another. For example, the [concept](@) [terms community](@) and the [concept](@) [scope](@) are linked by the [relation](@) [curate](@), that signifies that instances (i.e. [entities](@) in the class) of [curators](@) may [curate](@) (instances of the class) [scope](@). Relations are typically modelled as (`subject`, `predicate`, `object`) triples. A [relation](@) typically has constraints, such as [multiplicities](@),[^2] but other constraints exist as well.

[^2]: The terms 'multiplicity' and 'cardinality' are often confused. In short: 'multiplicity' is at the (conceptual) class-level what 'cardinality' is at the instance level, and both use notations such as `0..1`, `1`, `0..*`, `*`, `1..*`, and `n..m`). Consider the relation [curates](@) (specified as [terms community](@) [0..1] --- [1..n] [scope](@)). The `[0..1]` and `[1..n]` are multiplicities. They signify that every [terms community](@) [curates](@) 1 or more [scopes](@), and every [scope](@) is curated by at most one [terms community](@) respectively. This sets constraints on the (operational) cardinalities, i.e. the number of elements that a particular [terms community](@) (e.g. `CTWG`) [curates](@) (that cardinality is `2`, becausse `CTWG` curates the [scopes](@) `ctwg` and `toip`).

A good description - which would include a good [definition](@) of the [relation](@) - allows us to reason about everything related to the [relation](@). [Curated texts](@) of type `relation` intend to provide such descriptions. Also, they specify a default name ([term](@)) by which the [relation](@), as well as unidentified instances thereof, can be refered to.

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| subject | y | | [concept](@) that the relation relates with the [concept](@) specified by `object`. If the relation is a so-called triple (i.e. a (`subject`, `predicate`, `object`)-relation, it is the `subject`. |
| object | n | | A [concept](@), or a data-variable, that the `subject` of the relation relates to.[^3] |
| pragma | n | | text, with placeholders for `subject` (and `object` if appropriate), that can be used to construct example sentences.[^4] |
| smult | n | `[0..n]` | multiplicity associated with the `subject` [concept](@). |
| omult | n | `[0..n]` | multiplicity associated with the `object` |
| endo | n | | For [homogeneous relations](https://en.wikipedia.org/wiki/Homogeneous_relation), i.e. relations where `subject` and `object` are the same, e.g. as in (_Person_, _is a parent of_, _Person_), [constraints](https://en.wikipedia.org/wiki/Homogeneous_relation#Properties) may hold that are typical for endo relations, such as `reflexive`, `irreflexive`, `symmetric`, `asymmetric`, `antisymmetric`, `transitive`. |
| constraints | n | | Comma separated list of texts, each of which specifies a constraint that the relation must always satisfy. |

[^3]: In a [relation](@) such as (_Person_, _loves_, _Person_), _Person_ is a ([concept](@)) class. However, in a [relation](@) such as (_Person_, _has lived_, _years_), _years_ is not a [concept](@) (idea), but a data-variable, that has a specific value, in this case a number (of years).

[^4]: For a [relation](@) (_[terms community](@)_, _[curates](@)_,  _[scope](@)_), a pragma could be "Terms community `subject` curates the scope '`object`'.", allowing the construction of phrases such as "Terms community CTWG curates scope 'ctwg'."

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