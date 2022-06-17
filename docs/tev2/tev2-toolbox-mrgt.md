---
id: tev2-toolbox-mrgt
title: MRG Generation Tool (MRGT)
sidebar_label: MRGT - MRG Generation Tool
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

The **Machine Readable Glossary generation Tool ([MRGT](@))** generates a Machine Readable Inventory (that we call a Machine Readable Glossary or [MRG](@)), that renders the [terminology](@) of a specific [scope](@) into a specific, well-defined [format](tev2-spec-mrg). This Inventory is not a [glossary](@) because it contains all [terminological artifacts](@) that are [curated](@) within the [scope](@): apart from [terms](@), it would also include e.g., [mental models](pattern@) and [use cases](@). We choose to maintain the [term](@) "Machine Readable Glossary" ([MRG](@)), because most of us would view it - initially, at least - as a list of [terms](@) and their [definitions](@).

The (newly generated) [MRG](@) is meant to be processed by the other tools in the toolbox, regardless of whether such tools are called from within the context of another [scope](@). Therefore, the [MRG](@) contains meta-data for all of the [terminological artifacts](@) that exist in the [scope](@), so it can serve as the single, authoritative source of that [scope's](@) [terminology](@).

## Generating an MRG

Typically, the [MRGT](@) uses the [Scope Administration File](SAF@) to learn what it has to generate, by executing the following steps in the provided sequence:

1. it creates the [MRG](@) `terminology` section, which consists of copying relevant fields from the appropriate `versions` element in the [SAF](@).
2. it processes the list of [term selection criteria](@) from the `termselcrit` field from the `versions` element of the [SAF](@), so as to create the set of [terminological artifacts](@) for each of which an [MRG entry](@) needs to be created. Then, the [MRG](@) creates the set of [scopetags](@) that identify the [scopes](@) in which these [terminological artifacts](@) are [curated](@), and for each of them, obtains the corresponding [scopedir](@) (from the `scopes` section of the [SAF](@)). Using the set of [scopetags](@) and associated [scopedirs](@), it creates the `scopes` section (of the [MRG](@)).
3. the `entries` section of the [MRG](@) is created, and one [MRG entry](@) is created for each of the elements from the set of [terminological artifacts](@). The structure of each such [entry](mrg-entry@) depends on the type of the [terminological artifact](@), as specified below.
4. the result is put at the location as specified by the [SAF](@), and the [SAF](@) itself is updated as necessary.

The [MRGT](@) logs conditions that prevent it from properly:

- obtaining the [scopedir](@) from a [scopetag](@);
- parsing a [curated file](@) (e.g. because it is not in the expected format);
- resolving `id`s, [scope tags](@), [group tags](@), or [version tags](@);
- writing the output (e.g. because it has no write-permission for the designated location);
- etc.;

Also, the [MRGT](@) provides suggestions that help tool-operators ([curators](@)) to not only identify, but also fix any problems.

The [MRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

### Creating an MRG Entry

An [MRG entry](@) is either a literal copy of an (existing) [MRG entry](@) that is found in an [MRG](@) that lives in another [scope](@), or it is constructed from a [curated file](@). [Curated files](@) live in (one of the subdirectories of) the directory specified in the `curatedir` field of hte [SAF](@).

Constructing an [MRG entry](@) from a [curated file](@) is done by first creating the fields that are common for all [MRG entries](@), and then adding fields that are specific for the type of [terminological artifact](@) that the [MRG entry](@) describes.

The common fields get their values according to the following table:

| Field          | Value(s) that are assigned to the fields |
| -------------- | :---------- |
| `scopetag`     | `scopetag` field in the `scope` section of the [SAF](@). |
| `id`           | `id` field of the [curated file](@). |
| `termtype`     | `termtype` field of the [curated file](@). |
| `termid`       | `termid` field of the [curated file](@). |
| `formphrases`  | `formphrases` field of the [curated file](@). |
| `grouptags`    | `grouptags` field of the [curated file](@). |
| `status`       | `status` field of the [curated file](@). If that value is not present, and the [SAF](@) has a non-empty `statuses` field in its `scope` section, then the value of the first element of that `statuses` field is used. |
| `created`      | `created` field of the [curated file](@). |
| `updated`      | `updated` field of the [curated file](@). |
| `vsntag`       | `vsntag` field of the [curated file](@). |
| `commit`       | `commit` field of the [curated file](@). |
| `contributors` | `contributors` field of the [curated file](@). |
| `locator`      | path, relative to `scopedir`/`curatedir`/, of the [curated file](@). |
| `navurl`       | <Mark>TBD</Mark>. |
| `headingids`   | The [curated file](@) is scanned for [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) (using the syntax with `#`-signs rather than the [alternate syntax](https://www.markdownguide.org/basic-syntax/#alternate-syntax)) and/or [heading ids](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids), and each heading or heading-id that is found is added to the list of headingids in this field. |

:::info Editor's note
content to be revised from this point onward.
:::

Creating an [MRG](#mrg) works as follows:
- Create an initial set of [MRG](@) entries, i.e. one for every [term](@) (from [scopes](scope@) other than the one we create the [MRG](@) for) that is selected per the specifications in the [GDF](#gdf). A [MRG entry](@) is constructed by interpreting the [term file](@essiflab) that defines the [term](@), and producing the [MRG entry](@) structure as defined for [MRGs](#mrg). Note that this can only be done for [term files](term-file@essiflab) that have a syntax that is supported by the [MRGT](#mrgt). If the created [MRG entry](@) has an `id` that is the same as the `id`-field of an existing glossary-entry, that [MRG entry](@) will be discarded (meaning that the newly created [MRG entry](@)  'overrides' the existing one).
- Add a [MRG entry](@) for every [term](@) that is defined in the [scope](@) from which the [MRGT](#mrgt) is called, again removing any existing glossary-entry that has an `id`-field that is the same as a newly added one.
- Perform completeness and consistency checks on the set of [MRG](@) entries, to ensure that
  - every [MRG entry](@) is [identifiable](@) by its `id`-field;
  - every element in the `formphrases`-list of a [MRG entry](@) does not occur as an element in the `formphrases`-list of another [MRG](@) entry;
- Sort the [MRG entries](@) according to their `id` field;
- Add header/meta data as needed as specified for [MRGs](#mrg).

For example, consider the [term](@) `curate` as defined in the [CTWG terms wiki](https://github.com/trustoverip/ctwg/wiki/curate). The wiki-page would be interpreted, which would lead to the following (machine readable) [MRG](@) entry:
~~~
  id: concept-curate
  scopetag: ctwg
  termtype: concept
  termid: curate
  grouptags:
  date: 20211123
  versiontag: 9
  commit:
  formphrases: [ curate, curates, curated, curation ]
  status: proposed
  term: curate
  synonyms: curation
  glossaryText: To evolve [concept](@) and [term](@) data in the direction of greater quality and richer content within a specific [scope](@).
  hoverText: Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope.
  url: https://github.com/trustoverip/ctwg/wiki/curate
~~~

Glossaries are generated at a default location, which for ToIP is `http://trustoverip.github.io/<terms-community>/glossary`, where `<terms-community>` is the name of the [terms-community](@) that [curates](curate) the [terms](term@) in the [glossary](@).

The [MRGT](#mrgt) should log conditions that prevent it from properly

- parsing a source document (e.g. because it is not in the expected format);
- resolving `id`s, [scope tags](@), [group tags](@), or [version tags](@);
- writing the output (e.g. because it has no write-permission for the designated location);
- etc.;

and provide suggestions that help tool-operators to identify and fix any problems.

The [MRGT](#mrgt) should come with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

### Creating a MRG

:::info Editor's note
A specification is needed for the creation of a (simple) [MRG](@) (from an existing MRG).
Any [term refs](@) need to be properly resolved.
Titles of term entries may want to link to the original resource from which it was derived.
Choice bars (e.g. `[ A B C D .... Z ]` may need to be inserted here and there).
Meta-data (group tags, the scopetag of the scope where it was defined, contributors, versions, dates, etc.) may need to be included.
There must be some license notification.
:::
