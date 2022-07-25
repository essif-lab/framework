---
id: terminology-construction
title: Terminology Construction
hide_table_of_contents: true
scopetag: tev2
date: 20220722
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

[Curators](@) need the ability to construct (different versions of) the [terminology](@) for any [scope](@) they [curate]. Conceptually, such a construction is equivalent with constructing a set of tuples `{ [termid, term, grouptags] }`, where `termid` [identifies](@) the meaning of the [term](@), `term` is the (humanly recognizable) [word or phrase](term@) that represents this meaning, and `grouptags` is a set of [grouptags](@) that the tuple is associated with; and all this is within the context of a specific version of the [terminology](@) of a specific [scope](@).

The process by which such a tuple-set is constructed is very simple: starting with an empty set, a list of so-called 'term selection criteria' instructions is sequentially processed, where the processing of each such instruction adds or removes tuples to/from the set, or changes the value of the `term` part of a specific tuple (renaming).

[Curators](@) create and maintain the list of 'term selection criteria' instructions for a specific (version of a) [terminology](@) in the [`versions` section](tev2-spec-saf#terminology) of the [SAF](@) of the [scope](@).

## Term Selection Instruction Syntax {#syntax}

We have distinct syntaxes to manipulate the set of tuples, each of which is specified in a subsequent section, that also describes how it will affect the tuple set under construction.

### Adding terms to the tuple set {#syntax-add}

A [curator](@) can add [terms](@) to the tuple set from different sources, i.e.
- [terms](@) that are defined in a [curated text](@) that exists in the current [scope](@), and
- [terms](@) that are defined by an entry in some [MRG](@).

The following syntaxes can be used for adding terms (whitespace is disregarded):
- `tags [ <grouptagslist> ] @<scopetag>:<vsntag>`
- `termids [ <termidlist> ] @<scopetag>:<vsntag>`
- `* @<scopetag>:<vsntag>`

<details>
<summary>Examples</summary>

| Instruction | What it does when processed |
| :---------- | :---------- |
| `tags[management,governance]@essiflab` | adds all [terms](@) that are part of the currently used [terminology](@) of the [scope](@) `essiflab`, that have the [grouptag](@) `management` or `governance`, to the type set.  |
| `termids[party]@essiflab:v3.1` | adds the term `party` from version `v3.1` of the [terminology](@) of [scope](@) `essiflab`. |

</details>

  where:

| symbol            | description |
| ----------------- | :---------- |
| `<vsntag>`        | the (optional) [versiontag](@) that [identifies](@) the version of the [terminology](@) from which [terms](@) are to be selected.|
| `<scopetag>`      | the (optional) [scopetag](@) that [identifies](@) the [scope](@) from which [terms](@) are to be selected.|
| `<grouptagslist>` | a (non-empty) comma-separated list of [grouptags](@). |
| `<termidlist>`    | a (non-empty) comma-separated list of [termids](@). |

This syntax is processed as follows:
1. **Select the source** from which to obtain the [terms](@), as follows:
  - If both `<scopetag>` and `<vsntag>` are omitted, the set of [curated texts](@) of the current [scope](@) is selected as the source.
  - If `<scopetag>` is specified, then one of the [MRGs](@) that exist in that [scope](@) is selected as the source. If it is not specified, then the current [scope](@) will provide the source.
  - If `<vsntag>` is specified, then the [MRG](@) of the selected [scope](@) that has the specified `<vsntag>` is selected as the source. If it is not specified, then the default version of that [scope's](@) [MRG](@) (as specified in that [scope's](@) [SAF](@)) is selected as the source.
2. **Select the [terms](@)** from the selected source that are to be added, as follows:
  - In case the instruction starts with the keyword `tags`, every [term](@) is selected of which its specification (i.e. either a [curated text](@), or an [MRG entry](@), depending on the selected source), mentions any of the [grouptags](@) in its `grouptags`-field.
  - In case the instruction starts with the keyword `termids`, every [term](@) is selected of which its specification (i.e. either a [curated text](@), or an [MRG entry](@)) mentions one of the specified [termids](@) in its `id`-field.
  - In case the instruction starts with the `*`-character, every [term](@) is selected that is contained within the selected source.
3. **Add the [terms](@)** to the tuple set, as follows:
  - A tuple is created, consisting of the [termid](@) and [term](@) as selected, and all [grouptags](@) that are associated with the selected [term](@) (from the `grouptags` field of the [curated text](@) or [MRG entry](@), depending on the kind of source)
  - If the [termid](@) of a selected [term](@) already exists in a tuple in the tuple set, that tuple is removed from the tuple set.
  - The tuple is added to the tuple set.[^1]

[^1]: In practice, tuples would typically also contain all other attributes that are associated with terms, similar, if not exactly the same as an [MRG entry](@).

### Removing terms from the tuple set {#syntax-remove}

A [curator](@) can remove [terms](@) from the tuple set, using the following syntax (whitespace is disregarded):
- `-tags [ <grouptagslist> ]`
- `-termids [ <termidlist> ]`

<details>
<summary>Examples</summary>

| Instruction | What it does when processed |
| :---------- | :---------- |
| `-tags[management,governance]` | removes all tuples for [terms](@) that are associated with the [grouptag](@) `management` or `governance`.  |
| `-termids[party]` | removes the tuple for the [term](@) `party`. |

</details>

  where:

| symbol            | description |
| ----------------- | :---------- |
| `<grouptagslist>` | a (non-empty) comma-separated list of [grouptags](@). |
| `<termidlist>`    | a (non-empty) comma-separated list of [termids](@). |

This syntax is processed as follows:
- In case the instruction starts with `-tags`, every tuple in the tuple set that is associated with at least one of the listed [grouptags](@) is removed from that set.
- In case the instruction starts with `-termids`, every tuple that is associated with any of the specified [termids](@) is removed from the tuple set.

### Renaming a term in the tuple set {#syntax-rename}

A [curator](@) can rename a [term](@) in the tuple set, using the following syntax (whitespace is disregarded):
- `rename <termid> <term>`.

<details>
<summary>Syntax examples</summary>

| Instruction | What it does when it is processed |
| :---------- | :---------- |
| `rename party partij` | renames the [term](@) that is currently associated with the [termid](@) `party` into `partij`. |

</details>

where:

| symbol     | description |
| ---------- | :---------- |
| `<termid>` | the [termid](@) of the tuple that will be selected for renaming. |
| `<term>`   | the new value for the `term` element in the tuple; it will effectively overwrite the existing value }

This syntax is processed by first selecting the tuple (in the tuple set that is being constructed) that has the specified `<termid>` as its `termid`-field, and then replacing the value of the `term` field with the value of `<term>` as specified.

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `termid`, `formphrases`, and perhaps others. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::
