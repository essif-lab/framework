---
id: hrg-termselcrit
# displayed_sidebar: tev2SideBar

// hide_table_of_contents: true
scopetag: tev2
date: 20230103
---

# HRG Selection Criteria

:::danger This page is deprecated.
The current TEv2 website is located at https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2
:::

import useBaseUrl from '@docusaurus/useBaseUrl'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Use 'Mark' as an HTML tag, e.g. <mark>text to mark</Mark?-->

export const mark = ({children}) => (
<span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
{children}
</span> );

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

When [curators](@) generate an [HRG](@) from a particular [MRG](@), they may want to specify the [terms](@) to be included in the [HRG](@) (or preventing specific [MRG entries](@) from being included).

This can be done by using the same mechanism for [terminology construction](/docs/tev2/spec-tools/terminology-construction) as is used for generating [MRGs](@). The differences are that there is only one source, i.e. the particular [MRG](@) from which the [HRG](@) is generated. Thus, references to [terms](@) that have no corresponding [MRG entry](@) in that [MRG](@) are invalid. Also, there is no need for renaming syntax.

If generating an [HRG](@) requires the selection of terms, the instructions are to be specified in the `termselcrit` field of the configuration file specified as an argument on the command-line when calling the [HRGT](@).

## Adding terms {#syntax-add}

The following instructions can be used for adding [terms](@) (whitespace in the syntax is disregarded):

| Instruction                 | The instruction adds every [MRG entry](@) from the [MRG](@) to the [terminology under construction](@) ... |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `terms [ <termslist> ]`     | whose `term`-field is an element of `<termslist>`.                                                         |
| `tags  [ <grouptagslist> ]` | whose `grouptags` field contains an element that is also an element of `<grouptagslist>`.                  |
| `*`                         | that exists within the [MRG](@) from which the [HRG](@) is generated.                                      |

Notes:

- `<termslist>` and `<grouptagslist>` are comma-separated lists of [terms](@) and [grouptags](@) respectively.
- An [MRG entry](@) will only be added to the [terminology under construction](@) if it does not already exist.

<details>
<summary>Examples</summary>

| Instruction                   | What it does when processed                                                                                                               |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| `terms[party]`                | finds the [MRG entry](@) associated with the [term](@) `party`, and adds it to the selected set of [terms](@).                            |
| `tags[management,governance]` | finds the [MRG entries](@) associated with the [terms](@) `management` and `governance`, and adds them to the selected set of [terms](@). |
| `*`                           | selects all [terms](@) from the [MRG](@), and adds them to the selected set of [terms](@).                                                |

</details>

## Removing terms {#syntax-remove}

The following instructions can be used for removing [terms](@) from the set of selected [terms](@) (whitespace in the syntax is disregarded):

| Instruction                  | The instruction removes every [MRG entry](@) from the [terminology under construction](@) ... |
| :--------------------------- | :-------------------------------------------------------------------------------------------- |
| `-terms [ <termslist> ]`     | whose `term`-field is an element of `<termslist>`.                                            |
| `-tags  [ <grouptagslist> ]` | whose `grouptags` field contains an element that is also an element of `<groutagslist>`.      |

Notes:

- `<termslist>` and `<grouptagslist>` are comma-separated lists of [terms](@), and [grouptags](@) respectively.
- Elements of the `<termslist>` or `<grouptagslist>` that do not lead to the removal of an [MRG entry](@) may be logged.

<details>
<summary>Examples</summary>

| Instruction            | What it does when processed                                                           |
| :--------------------- | :------------------------------------------------------------------------------------ |
| `-terms[party, actor]` | removes the [MRG entries](@) that have either `party` or `actor` in its `term` field. |
| `-tags[management]`    | removes all [MRG entries](@) that have a [grouptag](@) `management`.                  |

</details>
