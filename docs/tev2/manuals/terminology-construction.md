---
id: terminology-construction
title: Terminology Construction
hide_table_of_contents: true
scopetag: tev2
date: 20220801
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

[Curators](@) need the ability to construct (different versions of) the [terminology](@) for any [scope](@) they [curate](@).

Constructing a [terminology](@) consists of specifying the set of [terms](scoped-term@) that the [terminology](@) consists of, and making sure there is an [MRG entry](@) that holds all associated (meta) data that other (e.g. third party) tools may need. In other words, it consists of constructing the set of [MRG entries](@) for the [terms](scoped-term@) of the [terminology](@).

An [MRG entry](@) contains (meta) data about (the [(scoped) term](@) that represents/[identifies](@)) a specific [knowledge artifact](@) (an illustration can be found in the [terminology pattern](/docs/tev2/terms/patterns/pattern-terminology#formalized-model)). For constructing a [terminology](@), the following such data is relevant (as it enables one to [identify](@) (groups of) [terms](scoped-term@) that are to become part of that [terminology](@)):
- the (preferred) [(scoped) term](@) for representing the [knowledge artifact](@), and its synonymous [terms](scoped-term@);
- an [identifier](@) that enables one to find the [curated text](@) that documents this [artifact](knowledge-artifact@).
- various [tags](@), amongst which are the [grouptags](@) that indicate the groups of [terms](scoped-term@) that the [term](scoped-term@) is a member of.

The process for creating a [terminology](@) is as follows:
1. start with an empty set of [MRG entries](@) - we use the term "terminology-under-construction" to refer to this set.
2. sequentially process a list of so-called 'term selection criteria' instructions, where processing one of them adds, removes, or otherwise manipulates [MRG entries](@) in the terminology-under-construction (e.g. for renaming [terms](scoped-term@)). This is detailed [below](#crit-processing).

[Curators](@) create and maintain the list of 'term selection criteria' instructions for every specific (version of a) [terminology](@) they decide to manage. Each such (versioned) [terminology](@) has an entry in the [`versions` section](/docs/tev2/spec-files/saf#versions) of the [SAF](@) (of the designated [scope](@)), and the term selection criteria reside in the `termselcrit` field of that section.

## Processing a Term Selection Criterion {#crit-processing}

We have defined a number of manipulations that can be done to contribute to construct a [terminology](@):
1. Add [MRG entries](@) to the terminology-under-construction;
2. Remove [MRG entries](@) from the terminology-under-construction;
3. Rename/rewrite specific parts of [MRG entries](@), which enables [curators](@) e.g. to rename [terms](@).

:::info Editor's note
The below text must remain in sync with the first post of [issue #3 of the mrgt-repo](https://github.com/trustoverip/ctwg-toolkit-mrg/issues/3).
:::

### Adding MRG Entries to the terminology-under-construction {#syntax-add}

A [curator](@) can add [MRG entries](@) to the terminology-under-construction from different sources, i.e.
- [terms](@) that are defined in a [curated text](@) that exists in the current [scope](@), and
- [terms](@) that are defined by an [MRG entry](@) in an existing [MRG](@) (from another [scope](@), or another version of the current [scope](@)).

Note that any reference to (an [MRG entry](@) in) (the specific version of) the [terminology](@) that is being constructed, MUST be interpreted as a reference to the [curated text](@) from which the [MRG entry](@) would have been constructed.

The following syntaxes can be used for adding terms (whitespace is disregarded):
- `terms [ <termslist> ] @<scopetag>:<vsntag>`
- `ids [ <idslist> ] @<scopetag>:<vsntag>`
- `tags [ <grouptagslist> ] @<scopetag>:<vsntag>`
- `* @<scopetag>:<vsntag>`

<details>
<summary>Examples</summary>

| Instruction | What it does when processed |
| :---------- | :---------- |
| `terms[party]@essiflab:v3.1` | selects the [term](scoped-term@) `party@essiflab:v3.1`, and adds an [MRG entry](@) for the [knowledge artifact](@) that it represents. |
| `ids[pattern-party-actor-action]@essiflab` | selects the [curated text](@) [identified](@) by `pattern-party-actor-action`, and adds an [MRG entry](@) for the [knowledge artifact](@) that it documents. |
| `tags[management,governance]@essiflab` | selects all [terms](@) that are part of the default [terminology](@) of [scope](@) `essiflab`, that have the [grouptag](@) `management` or `governance`, and adds an [MRG entry](@) for each of them. |
| `* @ctwg` | selects all [terms](@) that are part of the default [terminology](@) of the [scope(@) `ctwg`, and adds an [MRG entry](@) for each of them. |
| `* @` | selects all [curated texts](@) from the current [scope](@), and for each of them, adds an [MRG entry](@) for the [knowledge artifact](@) that it documents.  |

</details>

  where:

| symbol            | description |
| ----------------- | :---------- |
| `<vsntag>`        | (optional) [versiontag](@) that [identifies](@) the version of the [terminology](@) from which [terms](@) are to be selected. |
| `<scopetag>`      | (optional) [scopetag](@) that [identifies](@) the [scope](@) from which [terms](@) are to be selected. |
| `<grouptagslist>` | a (non-empty) comma-separated list of [grouptags](@). |
| `<termslist>`     | a (non-empty) comma-separated list of [terms](@). |

This syntax is processed as follows:
1. **Select the source** from which to obtain the [terms](@), as follows:
  - If both `<scopetag>` and `<vsntag>` are omitted, the set of [curated texts](@) of the current [scope](@) is selected as the source.
  - If `<scopetag>` is specified, then one of the [MRGs](@) that exist in that [scope](@) is selected as the source. If it is not specified, then the current [scope](@) will provide the source.
  - If `<vsntag>` is specified, then the [MRG](@) of the selected [scope](@) that has the specified `<vsntag>` is selected as the source. If it is not specified, then the default version of that [scope's](@) [MRG](@) (as specified in that [scope's](@) [SAF](@)) is selected as the source.
2. **Select the [terms](@)** from the selected source that are to be added, as follows:
  - In case the instruction starts with the keyword `tags`, every [term](@) is selected of which its specification (i.e. either a [curated text](@), or an [MRG entry](@), depending on the selected source), mentions any of the [grouptags](@) in its `grouptags`-field.
  - In case the instruction starts with the keyword `termnames`, every [term](@) is selected of which its specification (i.e. either a [curated text](@), or an [MRG entry](@)) mentions one of the specified [termnames](@) in its `id`-field.
  - In case the instruction starts with the `*`-character, every [term](@) is selected that is contained within the selected source.
3. **Add the [terms](@)** to the tuple set, as follows:
  - A tuple is created, consisting of the [termname](@) and [term](@) as selected, and all [grouptags](@) that are associated with the selected [term](@) (from the `grouptags` field of the [curated text](@) or [MRG entry](@), depending on the kind of source)
  - If the [termname](@) of a selected [term](@) already exists in a tuple in the tuple set, that tuple is removed from the tuple set.
  - The tuple is added to the tuple set.[^1]

[^1]: In practice, tuples would typically also contain all other attributes that are associated with terms, similar, if not exactly the same as an [MRG entry](@).

### Removing MRG Entries from a terminology-under-construction {#syntax-remove}

A [curator](@) can remove [terms](@) from the tuple set, using the following syntax (whitespace is disregarded):
- `-tags [ <grouptagslist> ]`
- `-termnames [ <termnamelist> ]`

<details>
<summary>Examples</summary>

| Instruction | What it does when processed |
| :---------- | :---------- |
| `-tags[management,governance]` | removes all tuples for [terms](@) that are associated with the [grouptag](@) `management` or `governance`.  |
| `-termnames[party]` | removes the tuple for the [term](@) `party`. |

</details>

  where:

| symbol            | description |
| ----------------- | :---------- |
| `<grouptagslist>` | a (non-empty) comma-separated list of [grouptags](@). |
| `<termnamelist>`    | a (non-empty) comma-separated list of [termnames](@). |

This syntax is processed as follows:
- In case the instruction starts with `-tags`, every tuple in the tuple set that is associated with at least one of the listed [grouptags](@) is removed from that set.
- In case the instruction starts with `-termnames`, every tuple that is associated with any of the specified [termnames](@) is removed from the tuple set.

### Rename/rewrite specific parts of an MRG entry {#syntax-rename}

In analogy with [namespaces](https://en.wikipedia.org/wiki/Namespace), we accommodate for the renaming of [terms](@) as they are 'imported' from [terminologies](@) other than the one that we are constructing. However, the analogy breaks down in the sense that it is not only a [term](@) that should be renameable (which is sufficient for [namespaces](https://en.wikipedia.org/wiki/Namespace)), but also certain attributes may need to be changed.

- `rename <termname> [ <fieldmodifierlist> ]`.

<details>
<summary>Syntax examples</summary>

| Instruction | What it does when it is processed |
| :---------- | :---------- |
| `rename party partij` | renames the [term](@) that is currently associated with the [termname](@) `party` into `partij`. |

</details>

where:

| symbol                | description |
| --------------------- | :---------- |
| `<termname>`            | the [termname](@) of the tuple that will be selected for renaming. |
| `<fieldmodifierlist>` | a (non-empty) comma-separated list of `<fieldmodifier>`s. |
| `<fieldmodifier>`     | a `<key>: <value>` (or `{ <key>: <value> }` pair - to be decided. |
| `<key>`               | a text that identifies a field in an [MRG entry], the value of which is to be changed, e.g. `formphrases`, `grouptags`, etc.   |
| `<value>`             | a text that will replace the existing text of the field identified by `<key>`.  |

This syntax is processed by first selecting the tuple (in the tuple set that is being constructed) that has the specified `<termname>` as its `termname`-field, and then sequentially processing the `<fieldmodifier>`s in the `<fieldmodifierlist>`, which means that the existing text of the field that is identified by the `<key>` element of the `<fieldmodifier>` is replaced by the text specified by the `<value>` element of that `<fieldmodifier>`.

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `termname`, `formphrases`, `term`, `fullterm`, `shorterm`, `synonyms`, `glossaryText`s and `hoverText`s. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::
