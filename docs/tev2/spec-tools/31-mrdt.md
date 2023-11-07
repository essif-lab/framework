---
id: mrdt
sidebar_label: MR Dictionary Generation
displayed_sidebar: tev2SideBar
hide_table_of_contents: true
scopetag: tev2
date: 20220801
---

# Machine Readable Dictionary Generation Tool

:::danger This page is deprecated.
The current TEv2 webiste is located at https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2
:::

import useBaseUrl from '@docusaurus/useBaseUrl'

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/><br/><br/>

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

The **Machine Readable Dictionary generation Tool ([MRDT](@))** generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or [MRD](@)) of [terms](@) that originate from different (versions of) [terminologies](@), from various [scopes](@). The inventory has a specific, well-defined [format](/docs/tev2/spec-files/mrd). Like [MRGs](@), the contents of [MRDs](@) is determined by a list of [term selection criteria](@), which specify the (sets of) terms that are to be included.

[MRDs](@) are meant to be processed by the other tools in the [toolbox](/docs/tev2/tev2-toolbox), specifically by one of the [HRDTs](@), which would then create a [Human Readable Dictionary](@) (or [HRD](@)).

[MRDs](@) can typically used to enable the creation of [HRDs](@) that are fit for specific purposes, e.g. for comparing [terminologies](@) between different [scopes](@), which helps e.g. when aligning [terminologies](@) between them. Also they can be used to provide an overview of what various [scopes](@) utilize specific terms for (education). And there's certainly going to be more such purposes.

:::info Editor's note
The specifications of this tool need to be authored.
It is suggested to look at the MRGT-specs, and adapt that text.
:::