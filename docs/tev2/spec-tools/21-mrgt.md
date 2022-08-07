---
id: mrgt
title: Machine Readable Glossary Generation Tool
sidebar_label: MR Glossary Generation
displayed_sidebar: tev2SideBar
hide_table_of_contents: true
scopetag: tev2
date: 20220421
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Use 'Mark' as an HTML tag, e.g. <Mark>text to mark</Mark?-->
export const Mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

The **Machine Readable Glossary generation Tool ([MRGT](@))** generates a Machine Readable Inventory (that we call a Machine Readable Glossary or [MRG](@)) for (a specific version of) the [terminology](@) of a specific [scope](@) into a specific, well-defined [format]/tev2/spec-files/mrg. This Inventory is not a [glossary](@) because it contains so-called [MRG entries](@) for every [term](@) in that [scope](@), and such [terms](@) may represent [knowledge artifacts](@) of various kinds, such as [concepts](@), but also e.g., [mental models](pattern@) and [use cases](@). We choose to maintain the [term](@) "Machine Readable Glossary" ([MRG](@)), because most of us would view it - initially, at least - as a list of [terms](@) and their [definitions](@).

The (newly generated) [MRG](@) is meant to be processed by the other tools in the [toolbox](/docs/tev2/tev2-toolbox), regardless of whether such tools are called from within the context of another [scope](@). As it contains every [term](@) that is used in the [scope](@), and includes the relevant meta-data, it serves as the single, authoritative source of that [scope's](@) [terminology](@).

## Generating an MRG

As input, the [MRGT](@) is provided a [SAF](@), is pointed to the particular entry in its [`versions` section](/docs/tev2/spec-files/saf#terminology) that specifies (a specific version of) a [terminology](@). This section not only includes meta-data for that [terminology](@), but also a set of 'term selection criteria' instructions, that are used to [construct](/docs/tev2/manuals/terminology-construction) the [terminology](@).

The [MRG](@) is then created as follows (starting with an empty file):

1. The [MRG](@) `terminology` section is created, by copying relevant fields from the appropriate `versions` element in the [SAF](@).
2. Then the [terminology construction](/docs/tev2/manuals/terminology-construction) takes place, which can be thought of as constructing a set of tuples `{ [id, term, grouptags] }`, where `id` [identifies](@) the [curated text](@) that documents the particular [knowledge artifact](@) that is represented by the [term](@) `term`, and `grouptags` is a set of [grouptags](@) that the tuple is associated with.
3. For every tuple in this set, an [MRG entry](@) is created, and added to the [MRG](@) under construction. Note that the structure of each such [entry](mrg-entry@) depends on the type of the [knowledge artifact](@) that the [term](@) represents.
4. the result is put at the location as specified by the [SAF](@), and the [SAF](@) itself is updated as necessary.

### Creating an MRG Entry

An [MRG entry](@) is either
- a copy of an (existing) [MRG entry](@) that is found in an [MRG](@) that lives in another [scope](@), or
- it is constructed from a [curated text](@), which lives in a file in (one of the subdirectories of) the [curatedir](@) of the current [scope](@), as [specified](/docs/tev2/spec-files/saf#terminology) in the `curatedir` field of the [SAF](@).

#### Copying an MRG Entry from an existing MRG

In case the [MRG entry](@) is a copy, the `vsntag` [field](/docs/tev2/spec-files/mrg#mrg-entries) of that [MRG entry](@) should be given the value of the `vsntag` field that is found in the ['terminology' section](/docs/tev2/spec-files/mrg#mrg-terminology) of the [MRG](@) from which [MRG entry](@) contents was copied.

#### Constructing an MRG Entry from a Curated Text

Constructing an [MRG entry](@) from a [curated text](@) is done by copying the entire front matter of a [curated text](@), and then creating/adding the following fields (or overwriting them if they exist), as follows:

| Field          | Value(s) that are assigned to the fields |
| -------------- | :---------- |
| `scopetag`     | overwrite the `scopetag` field with the `scopetag` field as found in the `scope` section of the [SAF](@). |
| `locator`      | path, relative to `scopedir`/`curatedir`/, of the [curated text](@). |
| `navurl`       | path, relative to the URL as specified in the `website` field in the [`scope` section](/docs/tev2/spec-files/saf#terminology) of the [SAF](@), where the rendered version of the [curated text](@) is located. |
| `headingids`   | a list of the [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) and/or [heading ids](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids) that are found in the [curated text](@). |

## Exceptions, Warnings, and Logging

The general principle is that the [MRGT](@) helps its users to do their jobs. This means that errors that terminate the processing are limited to the max, that warnings (perhaps at different 'levels' of detail/severity) are given output whenever possible (yet may be limited by command-line options), and that texts are tailored for the envisaged users of the tool.

The [MRGT](@) logs conditions that prevent it from properly:

- obtaining the [scopedir](@) from a [scopetag](@);
- parsing a [curated text](@) (e.g. because it is not in the expected format);
- resolving `id`s, [scope tags](@), [group tags](@), or [version tags](@);
- writing the output (e.g. because it has no write-permission for the designated location);
- etc.;

Also, the [MRGT](@) provides suggestions that help tool-operators ([curators](@)) to not only identify, but also fix any problems.

The [MRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.
