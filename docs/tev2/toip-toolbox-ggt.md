---
id: toip-toolbox-ggt
title: Glossary Generation Tool (GGT)
sidebar_label: GGT - Glossary Generation Tool
displayed_sidebar: tev2SideBar
hide_table_of_contents: true
scopetag: tev2
date: 20220421
---

import useBaseUrl from '@docusaurus/useBaseUrl'
export const Mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

The **Glossary Generation tool ([GGT](toip-toolbox-ggt))** generates a (machine readable, and optionally also a human readable) [glossary@], that contains/renders the [terminology@] of a specific [scope@].

In order to do so, [GGT](toip-toolbox-ggt) expects the [SAF@] of the [scope@] from within which it is being called, to be available. This [SAF@]
- specifies the [terminology@] of that [scope@], i.e. the set of [terms@] that it comprises;
- the location of the . A

a [Glossary Definition File (GDF)@](tev2-spec-gdf) to be (implicitly or explicitly) specified, that contains a specification of the [terminology@] of a specific [scope@], and further instructions regarding the rendering of its [terms@] (<Mark>this part needs to be worked out some more</Mark>).

In order to do so, [GGT](toip-toolbox-ggt) expects the [SAF@] and the [MRG@] of the [scope@] from within which it is being called, to be available. The [MRG@] is used to resolve all links to [terms@] that are part of the [terminology@] of this [scope@]. The [SAF@] is used to locate the [MRG's@] of any (other) [scope@] whose [scopetag@] is used as part of a [reference@](term-ref) that needs to be resolved.

The [GGT](#ggt) first creates an [MRG](#mrg) (which does the 'heavy lifting'), and from that, a [HRG](#hrg) will be created. Different [HRGs](#hrg), i.e. different human-readable renderings of the [terminology@] may be created from the same [MRG](#mrg).

### Creating an MRG

Creating an [MRG](#mrg) works as follows:
- Create an initial set of glossary entries, i.e. one for every [term@] (from [scopes](scope@) other than the one we create the MRG for) that is selected per the specifications in the [GDF](#gdf). A glossary entry is constructed by interpreting the [term file](@essiflab) that defines the [term@], and producing the glossary entry structure as defined for [MRGs](#mrg). Note that this can only be done for [term files](term-file@essiflab) that have a syntax that is supported by the [GGT](#ggt). If the created glossary entry has an `id` that is the same as the `id`-field of an existing glossary-entry, that glossary entry will be discarded (meaning that the newly created glossary entry  'overrides' the existing one).
- Add a glossary entry for every [term@] that is defined in the [scope@] from which the [GGT](#ggt) is called, again removing any existing glossary-entry that has an `id`-field that is the same as a newly added one.
- Perform completeness and consistency checks on the set of glossary entries, to ensure that
  - every glossary entry is [identifiable](identify@essiflab) by its `id`-field;
  - every element in the `formphrases`-list of a glossary entry does not occur as an element in the `formphrases`-list of another glossary entry;
- Sort the glossary entries according to their `id` field;
- Add header/meta data as needed as specified for [MRGs](#mrg).

For example, consider the [term@] `curate` as defined in the [CTWG terms wiki](https://github.com/trustoverip/ctwg/wiki/curate). The wiki-page would be interpreted, which would lead to the following (machine readable) glossary entry:
~~~
  id: concept-curate
  scopetag: ctwg
  termtype: concept
  termid: curate
  grouptags:
  date: 20211123
  versiontag: 9
  commit:
  formphrases: curate, curates, curated, curation
  status: proposed
  termname: curate
  synonyms: curation
  glossaryText: To evolve [concept@] and [term@] data in the direction of greater quality and richer content within a specific [scope@].
  hoverText: Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope.
  url: https://github.com/trustoverip/ctwg/wiki/curate
~~~

Glossaries are generated at a default location, which for ToIP is `http://trustoverip.github.io/<terms-community>/glossary`, where `<terms-community>` is the name of the [terms-community@] that [curates](curate) the [terms](term@) in the [glossary@].

The [GGT](#ggt) should log conditions that prevent it from properly

- parsing a source document (e.g. because it is not in the expected format);
- resolving `id`s, [scope tags](tag@), [group tags](tag@), or [version tags](tag@);
- writing the output (e.g. because it has no write-permission for the designated location);
- etc.;

and provide suggestions that help tool-operators to identify and fix any problems.

The [GGT](#ggt) should come with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

### Creating a HRG

:::info Editor's note
A specification is needed for the creation of a (simple) HRG (from an existing MRG).
Any [term refs](term-ref@) need to be properly resolved.
Titles of term entries may want to link to the original resource from which it was derived.
Choice bars (e.g. `[ A B C D .... Z ]` may need to be inserted here and there).
Meta-data (group tags, the scopetag of the scope where it was defined, contributors, versions, dates, etc.) may need to be included.
There must be some license notification.
:::
