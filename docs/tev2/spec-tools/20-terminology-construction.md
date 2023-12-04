---
id: terminology-construction
# displayed_sidebar: tev2SideBar

// hide_table_of_contents: true
scopetag: tev2
date: 20220801
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Terminology Construction

:::danger This page is deprecated.
The current TEv2 website is located at https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2
:::

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

[Curators](@) need the ability to construct (different versions of) the [terminology](@) for any [scope](@) they [curate](@).

Constructing a [terminology](@) consists of specifying the set of [terms](scoped-term@) that the [terminology](@) consists of, and making sure there is an [MRG entry](@) that holds all associated (meta) data that other (e.g. third party) tools may need. In other words, it consists of constructing the set of [MRG entries](@) for the [terms](scoped-term@) of the [terminology](@).

An [MRG entry](@) contains (meta) data about (the [(scoped) term](@) that represents/[identifies](@)) a specific [knowledge artifact](@) (an illustration can be found in the [terminology support pattern](/docs/tev2/terms/patterns/pattern-terminology#formalized-model)). For constructing a [terminology](@), the following such data is relevant (as it enables one to [identify](@) (groups of) [terms](scoped-term@) that are to become part of that [terminology](@)):

- the (preferred) [(scoped) term](@) that represents the [knowledge artifact](@), and its synonymous [terms](scoped-term@);
- various [tags](@), amongst which are the [grouptags](@) that indicate the groups of [terms](scoped-term@) that the [term](scoped-term@) is a member of.

The process for creating a [terminology](@) is as follows:

1. start with an empty set of [MRG entries](@) - we use the term "[terminology under construction](@)" to refer to this set.
2. sequentially process a list of so-called '[term selection criteria](@)' (i.e. instructions), which allow for

- [adding](#syntax-add) [MRG entries](@) to the [terminology under construction](@); these can either be [entries](mrg-entry@) that have been created from [curated texts](@), or [entries](mrg-entry@) whose contents is obtained from an [MRG](@) other than the one that is being created.
- [removing](#syntax-remove) [MRG entries](@) from the [terminology under construction](@);
- [modifying attributes](#syntax-rename) of a specific [MRG entry](@) in the [terminology under construction](@), e.g. for renaming a term that originated from another [scope](@).

[Curators](@) create and maintain the list of '[term selection criteria](@)', i.e. instructions for constructing a specific (version of a) [terminology](@). Each such (versioned) [terminology](@) has an entry in the [`versions` section](/docs/tev2/spec-files/saf#versions) of the [SAF](@) (of the designated [scope](@)), and the [term selection criteria](@) reside in the `termselcrit` field of that section.

## Adding MRG Entries to the [terminology under construction](@) {#syntax-add}

A [curator](@) can add [MRG entries](@) to the [terminology under construction](@) from different sources, i.e.

- [terms](@) that are defined in a [curated text](@) that exists in the current [scope](@), and
- [terms](@) that are defined by an [MRG entry](@) in an existing [MRG](@) (from another [scope](@), or another version of the current [scope](@)).

Note that any reference to (an [MRG entry](@) in) (the specific version of) the [terminology](@) that is being constructed, MUST be interpreted as a reference to the [curated text](@) from which the [MRG entry](@) would have been constructed.

The following instructions can be used for adding [MRG entries](@) (whitespace in the syntax is disregarded):

| Instruction<sup>\*)</sup>  | The instruction creates, and subsequently adds an [MRG entry](@) for every [curated text](@) ...                 |
| :------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| `terms [ <termslist> ]`    | that documents the [knowledge artifact](@) that is represented by a [term](@) that appears in the `<termslist>`. |
| `tags [ <grouptagslist> ]` | that has an element in the list of [grouptags](@) that also appears in the `<grouptagslist>`.                    |
| `*`                        | that exists within the current [scope](@).                                                                       |

`<termslist>` and `<grouptagslist>` are comma-separated lists of [terms](@) and [grouptags](@) respectively.

\*) It is allowed to add `@<scopetag>` or `@<scopetag>:<vsntag>` to the instruction syntax, the effect of which is that the [MRG entries](@) are not created from [curated texts](@), but rather selected from the [MRG](@) that holds (the specified version of) the [terminology] of the specified [scope](@). If `:<vsntag>` isn't used, the default [MRG](@) from the specified [scope](@) will be used.

<details>
<summary>Examples</summary>

| Instruction                        | What it does when processed                                                                                                                                                                                                                        |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `terms[party]@essiflab:v3.1`       | gets version `v3.1` of the [MRG](@) from the scope `essiflab`, finds the [MRG entry](@) associated with the [term](@) `party`, and adds a copy to the [terminology under construction](@).                                                         |
| `tags[management,governance]@toip` | gets the default version of the [MRG](@) from the scope `toip`, finds the [MRG entries](@) that have `management` and/or `governance` as one of their [grouptags](@), and adds a copy for each of them to the [terminology under construction](@). |
| `* @essif-lab`                     | gets the default version of the [MRG](@) from the scope `essif-lab`, and adds a copy of all of its [MRG entries](@) to the [terminology under construction](@).                                                                                    |
| `* @`                              | creates an [MRG entry](@) for every [curated text](@) in the current [scope](@), and adds them to the [terminology under construction](@).                                                                                                         |

</details>

## Removing MRG Entries from a [terminology under construction](@) {#syntax-remove}

A [curator](@) can remove [MRG entries](@) from the tuple set, using the following syntax (whitespace in the syntax is disregarded):

- `-tags [ <grouptagslist> ]`
- `-terms [ <termslist> ]`

A [curator](@) can remove [MRG entries](@) from the [terminology under construction](@) in different ways, using the following instructions (whitespace is disregarded):

| Instruction<sup>\*)</sup>   | The instruction removes an [MRG entry](@) from the [terminology under construction](@) if ... |
| :-------------------------- | :-------------------------------------------------------------------------------------------- |
| `-tags [ <grouptagslist> ]` | one of its [grouptags](@) appears in the `<groutagslist>`.                                    |
| `-terms [ <termslist> ]`    | the [term](@) that it specifies is an element of `<termslist>`.                               |

`<termslist>` and `<grouptagslist>` are comma-separated lists of [terms](@), and [grouptags](@) respectively.

<details>
<summary>Examples</summary>

| Instruction            | What it does when processed                                                      |
| :--------------------- | :------------------------------------------------------------------------------- |
| `-terms[party, actor]` | removes the [MRG entries](@) that specifies `party` or `actor` as its [term](@). |
| `-tags[management]`    | removes all [MRG entries](@) that have a [grouptag](@) `management`.             |

</details>

## Rename/rewrite specific parts of an MRG entry {#syntax-rename}

<img
alt="From this point onward, texts are under construction"
src={useBaseUrl('images/wip/wip-under-construction-from-here-onward.png')}
/><br/><br/>

In analogy with [namespaces](https://en.wikipedia.org/wiki/Namespace), we accommodate for the renaming of [terms](@) as they are 'imported' from [terminologies](@) other than the one that we are constructing. However, the analogy breaks down in the sense that it is not only a [term](@) that should be renameable (which is sufficient for [namespaces](https://en.wikipedia.org/wiki/Namespace)), but also certain attributes may need to be changed.

- `rename <term> [ <fieldmodifierlist> ]`.

<details>
<summary>Syntax examples</summary>

| Instruction           | What it does when it is processed                                                            |
| :-------------------- | :------------------------------------------------------------------------------------------- |
| `rename party partij` | renames the [term](@) that is currently associated with the [term](@) `party` into `partij`. |

</details>

where:

| symbol                | description                                                                                                                  |
| --------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `<term>`              | the [term](@) of the tuple that will be selected for renaming.                                                               |
| `<fieldmodifierlist>` | a (non-empty) comma-separated list of `<fieldmodifier>`s.                                                                    |
| `<fieldmodifier>`     | a `<key>: <value>` (or `{ <key>: <value> }` pair - to be decided.                                                            |
| `<key>`               | a text that identifies a field in an [MRG entry], the value of which is to be changed, e.g. `formphrases`, `grouptags`, etc. |
| `<value>`             | a text that will replace the existing text of the field identified by `<key>`.                                               |

This syntax is processed by first selecting the tuple (in the tuple set that is being constructed) that has the specified `<term>` as its `term`-field, and then sequentially processing the `<fieldmodifier>`s in the `<fieldmodifierlist>`, which means that the existing text of the field that is identified by the `<key>` element of the `<fieldmodifier>` is replaced by the text specified by the `<value>` element of that `<fieldmodifier>`.

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `term`, `formphrases`, `synonyms`, `glossaryText`s and possibly some others. Perhaps this syntax should therefore be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::
