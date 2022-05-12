---
id: tev2-spec-ctext-header
title: Curated Text - Header
sidebar_label: Header Contents
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

A [curated text](@) is a text that consists of a text called a [header](@), which is then followed by another text called the [body](@). The [header](@), also called 'front matter', is a set of so-called 'header fields', i.e. key-value pairs that contain meta data about the [curated text](@).[^1]

[^1]: Key-value pairs may also be used to contain data that *could* have been part of the [body](@), but for which it is more convenient to make it part of the 'front matter'.

Headers are typically used for specifying data that various tools can pick up for their further processing. So, if a [curated file](@) needs to be processed by TEv2 tools and some other tooling (e.g. Docusaurus, a LaTeX renderer)

The ([yaml](https://yaml.org/spec/1.2.2/)) header starts at the very top of the [curated text](@) with three dashes ("`---`") to signal it is followed by directives. This is followed by a collection of key-value mappings. The end of the header is again three dashes ("`---`") to signal the change back to document content (the [body](@)).

Header fields can serve different purposes:
- 'multi-purpose fields' are header fields that do not only serve TEv2, but also other tools, such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction). It is a design objective to limit such fields to the bare minimum. The (required) `id` field and the (optional) `date` field are the most prominent ones in this category
- third-party tool specific fields. These are fields that the other tools need, e.g. for [Docusaurus content docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter), [jekyll](https://jekyllrb.com/docs/front-matter/).
- TEv2-specific fields, that are common for all `term-types` (e.g. [concept](@), [mental model](@), etc.). They are defined below
- type-specific

Here is an example:

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
Right behind the header, you can start with they [body](@) of the [curated text](@).

For TEv2 purposes, the following fields are defined. The `Req'd` column specifies whether (`Y`, or `Y*`) or not (`n`) the field is required to be present in the header. The `Y*` signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value.

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `id` | Y* | `<termtype>`-`<termid>` | Text that [identifies](identify@essiflab) the [term](@) within the context of the [MRG](@), and can also be used as an `id` in a [term ref](@). If the `termtype` part is specified, it MUST match the value of the `termtype` field. If the `termtype` part is not specified, it defaults to `concept-`. If the `termid` part is specified, it MUST match teh value of the `termid` field. If the `termid` part is not specified it defaults to the value of the `termid` field.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `date`| n | (No default) | Date of the last update of the file that contains this header, in the ISO 8601 date (or datetime) format.[^2] |
| `termtype` | Y* | `concept` | Text that identifies the kind of entity that the [term](@) refers to. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `termid` | Y | There is no default. Not specifying `termid` is an error. | Text that identifies the specific entity of the `termtype` field.<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `grouptags` | n | (No default) | Comma-separated list of [grouptags](tag@) (not being [scopetags](@)), each of which identifies a group of [terms](term@) to which this [term](@) belongs.<br/>Must satisfy PCRE regex `([a-z0-9_-]+)(?:,\s*([a-z0-9_-]+))*`. |
| `versiontag` | n | (No default) | [Tag](@) that identifies the version of the [term](@) itself (not to be confused with the version of a [terminology](@) that may contain that [term](@)).<br/>Must satisfy PCRE regex `[a-z0-9_-]+`. |
| `commit` | n | (No default) | The latest (git) commit hash of the [term's](term@) [definition](@). |
| `formphrases` | n | (No default) | Comma-separated list of [texts](formphrase@) that the [TRRT](tev2-toolbox-trrt) can interpret as an instruction to convert a 'matching `show text`' part of [term refs](@) into the `id`. One use of this is converting plural forms (for nouns) or conjugate forms (for verbs) to the associated `id`. ***reference to precise syntax is needed (is it in [TRRT](@), or in [formphrase](@)?***.<br/>Must satisfy PCRE regex `([a-z0-9_-{}]+)(?:,\s*([a-z0-9_-{}]+))*`. |
| `status` | n | `proposed` | Text that identifies the [status of the term](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). Allowed values are: `proposed`, `approved` or `deprecated`. |
| `termname` | Y | (No default) | Text that is used for rendering the [term](@) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field). |
| `hoverText` | n | (No default) | Text that can be used as the contents of a popup that shows as the [term](@) is rendered in a web browser and the user hovers over the [term](@) with its mouse. |
| `url` | n | (No default) | URL of a web-page that contains human readable text that typically has further explanations of the [term](@), and has sections that can be addressed by `url#heading-id` where `heading-id` is as specified for [term refs](term-ref@). |

[^2]: ISO 8601 date(time) format satisfies [(PCRE) regex](https://www.debuggex.com/r/7AhSyBzuBvuzYn52) `(?P<year>\d{4})-?(?P<month>\d{2})-?(?P<day>\d{2})(?:T?(?P<hour>\d{2}):?(?P<minute>\d{2}):?(?P<second>\d{2})(?:\.(?P<fraction>\d+))?(?P<tzone>[+-]\d{2}:\d{2})?)?`.

## Header fields for different `termtype`s:

<Tabs
    defaultValue="concept"
    values={[
        {label: 'Term', value: 'term'},
        {label: 'Concept', value: 'concept'},
        {label: 'Relation', value: 'relation'},
        {label: 'Mental Model', value: 'pattern'},
        {label: 'Example', value: 'example'},
    ]}>
<TabItem value="concept">

## Header fields for `termtype: concept`

[Concepts](@) are the ideas/thoughts behind a classification of [entities](@) (what makes [entities](@) in that class 'the same').
A good description - which would include a good [definition](@) - allows us to reason about everything in the class as if it were one thing. [Curated texts](@) of type `concept` intend to provide such descriptions. Also, they specify a default name ([term](@)) by which the class, as well as unidentified instances thereof, can be refered to.

The header fields that are specific for `concept`-type descriptions are as follows:

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `synonyms` | n | (No default) | List of phrases that that may alternatively be used for rendering the [term](@) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field). Every synonym SHOULD be listed in a [HRG](@) that renders the [glossary entry]. |
| `see-phrase` | n | (No default) | list of phrases that will be listed in a [HRG](@) that renders this [glossary entry], where the (human readable) rendering is of the form "see: `termname`", or equivalent. |
| `glossaryText` | Y | (No default) | Text that can be used as the (raw) contents for the entry of this [term](@) in a human readable [glossary](@). Note that this text SHOULD be allowed to contain [term refs](term-ref@). |

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
grouptags: terminology, management
date: 20220222
status: proposed
#
# Termtype-specific TEv2 heading entries
termname: curate
glossaryText: "To evolve [concept](@) and [term](@) data in the direction of greater quality and richer content within a specific [scope](@)."
hoverText: "Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope."
---
~~~

</TabItem>
<TabItem value="term">

## Header fields for `termtype: term`

A [term](@) is a word or phrase that is used in a [scope](@) in a specific meaning, typically referring to a specific [concept](@), or a [relation](@) between [concepts](@). This meaning may deviate from the meanings that this word or phrase has in other [scopes](@), and in everyday language.

[Terms](@) do not generally need to be documented as a [curated text](@) when they are already specified as the default name in the [curated text](@) that describes the [concept](@), [relation](@), or other terminological artifact. In specific cases, however, words or phrases need to be assigned to existing [curated texts](@), for example, a [scopetag](@) is a specialization of a [grouptag](@), and can hence be documented as (a specialization of) a [grouptag](@) that has the (additional) property of grouping all [terms](@) defined in the [scope](@) that it [identifies](@).

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |


</TabItem>
<TabItem value="relation">

## Header fields for `termtype: relation`

:::info Editor's note
This section needs to be discussed as `relation` is introduced as a new termtype.
:::

[Relations](@) are what associates [concepts](@) with one another. For example, the [concept](@) [terms community](@) and the [concept](@) [scope](@) are linked by the [relation](@) [curate](@), that signifies that instances (i.e. [entities](@) in the class) of [curators](@) may [curate](@) (instances of the class) [scope](@). Relations are typically modelled as (`subject`, `predicate`, `object`) triples. A [relation](@) typically has constraints, such as [multiplicities](@),[^3] but other constraints exist as well.

[^3]: The terms 'multiplicity' and 'cardinality' are often confused. In short: 'multiplicity' is at the (conceptual) class-level what 'cardinality' is at the instance level, and both use notations such as `0..1`, `1`, `0..*`, `*`, `1..*`, and `n..m`). Consider the relation [curates](@) (specified as [terms community](@) [0..1] --- [1..n] [scope](@)). The `[0..1]` and `[1..n]` are multiplicities. They signify that every [terms community](@) [curates](@) 1 or more [scopes](@), and every [scope](@) is curated by at most one [terms community](@) respectively. This sets constraints on the (operational) cardinalities, i.e. the number of elements that a particular [terms community](@) (e.g. `CTWG`) [curates] (that cardinality is `2`, becausse `CTWG` curates the [scopes](@) `ctwg` and `toip`).

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