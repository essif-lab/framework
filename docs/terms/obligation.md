---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: obligation
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: obligation
formphrases: obligation{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: Obligation # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "an [objective](@) that is [owned](@) by the [party](@) that produces the associated results, and that has a commitment to another [party](@) that consumes these results."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Obligation"
displayed_sidebar: essifLabSideBar
hoverText: "Obligation (of a Party): an Objective that is Owned by that Party for which it produces the associated results, and has a commitment to another Party that consumes these results."
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Short Description
An **Obligation** is an [objective](@) that is [owned](@) by the [party](@) that produces the associated results, and that has a commitment to another [party](@) that consumes these results.

In the figure below, [objectives](@) Obj-1 is an [obligations](@) of Red towards Yellow. Also, [objective](@) Obj-Grn-k is an [obligation](@) of Green towards Red.

<img
  alt="Chaining Objectives"
  src={useBaseUrl('images/essif-lab-objective-symbolnotation.png')}
/>

*Figure 1: Chained Objectives - results produced in one objective are consumed in another*

The figure shows four [parties](@) (Red, Yellow, Blue and Green) and their associated [scopes of control](@). Within these, they [own](@) the [objectives](@) (the figure shows 6 [objectives](@) owned by red and one for each of the other [parties](@)). The figure in the top right hand corner of the rectangle that represents an [objective](@), is the [party](@) that the [owner](@) of the [objective](@) expects to produce the [objective's](@) results. It is not necessary that such a [party](@) is known all the time (e.g. [objective](@) Obj-1a).

The arrows indicate that results produced to realize a certain [objective](@) (at the source of the arrow) are (to be) used to produce the results of another [objective](@) (at the end/tip of the arrow).

For more information, e.g. about how different [parties](@) interact in their roles of producer and consumer, we refer you to the [Governance and Management pattern](pattern-governance-and-management@).