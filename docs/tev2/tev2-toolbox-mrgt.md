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

The **Machine Readable Glossary generation Tool ([MRGT](@))** generates a Machine Readable Inventory (that we call a Machine Readable Glossary or [MRG](@)), that renders the [terminology](@) of a specific [scope](@) into a specific, well-defined [format](tev2-spec-mrg). This Inventory is not a [glossary](@) because it contains all [terminological artifacts](@) that are [curated](@) within the [scope](@): apart from [terms](@), it would also include e.g., [mental models](pattern@) and [use cases](@). We choose to maintain the [term](@) "Machine Readable Glossary" ([MRG](@)), because most of us would view it - initially, at least - as a list of [terms](@) and their [definitions](@).

The [MRG](@) is meant to be processed by the other tools in the toolbox, regardless of whether such tools are called from within the context of another [scope](@). Therefore, the [MRG](@) contains meta-data for all of the [terminological artifacts](@) that exist in the [scope](@), so it can serve as the single, authoritative source of that [scope's](@) [terminology](@).

Typically, the [MRGT](@) uses the [Scope Administration File](SAF@) to learn what it is to generate, as follows. First, it selects the [terminological artifacts](@) that it needs to produce the [MRG](@) out of. Then, depending on the `termtype` of the artefact, a [MRG entry](@) is constructed, as detailed below. Next it adds the remaining meta-data. Finally, the result is put at the location as specified by the [SAF](@).

The [MRGT](@) logs conditions that prevent it from properly

- parsing a source document (e.g. because it is not in the expected format);
- resolving `id`s, [scope tags](@), [group tags](@), or [version tags](@);
- writing the output (e.g. because it has no write-permission for the designated location);
- etc.;

Also, the [MRGT](@) provides suggestions that help tool-operators ([curators](@)) to identify and fix any problems.

The [MRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

:::info Editor's note
content to be revised from this point onward.
:::

In order to do so, [MRGT](tev2-toolbox-mrgt) expects the [SAF](@) and the [MRG](@) of the [scope](@) from within which it is being called, to be available. The [MRG](@) is used to resolve all links to [terms](@) that are part of the [terminology](@) of this [scope](@). The [SAF](@) is used to locate the [MRG's](@) of any (other) [scope](@) whose [scopetag](@) is used as part of a [reference](term-ref@) that needs to be resolved.

The [MRGT](#mrgt) first creates an [MRG](#mrg) (which does the 'heavy lifting'), and from that, a [MRG](#hrg) will be created. Different [MRGs](#hrg), i.e. different human-readable renderings of the [terminology](@) may be created from the same [MRG](#mrg).+

### Creating an MRG

Creating an [MRG](#mrg) works as follows:
- Create an initial set of MRG entries, i.e. one for every [term](@) (from [scopes](scope@) other than the one we create the MRG for) that is selected per the specifications in the [GDF](#gdf). A MRG entry is constructed by interpreting the [term file](@essiflab) that defines the [term](@), and producing the MRG entry structure as defined for [MRGs](#mrg). Note that this can only be done for [term files](term-file@essiflab) that have a syntax that is supported by the [MRGT](#mrgt). If the created MRG entry has an `id` that is the same as the `id`-field of an existing glossary-entry, that MRG entry will be discarded (meaning that the newly created MRG entry  'overrides' the existing one).
- Add a MRG entry for every [term](@) that is defined in the [scope](@) from which the [MRGT](#mrgt) is called, again removing any existing glossary-entry that has an `id`-field that is the same as a newly added one.
- Perform completeness and consistency checks on the set of MRG entries, to ensure that
  - every MRG entry is [identifiable](identify@essiflab) by its `id`-field;
  - every element in the `formphrases`-list of a MRG entry does not occur as an element in the `formphrases`-list of another MRG entry;
- Sort the MRG entries according to their `id` field;
- Add header/meta data as needed as specified for [MRGs](#mrg).

For example, consider the [term](@) `curate` as defined in the [CTWG terms wiki](https://github.com/trustoverip/ctwg/wiki/curate). The wiki-page would be interpreted, which would lead to the following (machine readable) MRG entry:
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
A specification is needed for the creation of a (simple) MRG (from an existing MRG).
Any [term refs](@) need to be properly resolved.
Titles of term entries may want to link to the original resource from which it was derived.
Choice bars (e.g. `[ A B C D .... Z ]` may need to be inserted here and there).
Meta-data (group tags, the scopetag of the scope where it was defined, contributors, versions, dates, etc.) may need to be included.
There must be some license notification.
:::
