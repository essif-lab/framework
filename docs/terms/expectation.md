---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: expectation
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: expectation
formphrases: expectation{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: Expectation # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "an [objective](@) that is [owned](@) by a [party](@), and that does not itself produce the associated results."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Expectation"
displayed_sidebar: essifLabSideBar
hoverText: "Expectation (of a Party): an Objective that is Owned by that Party, and that does not itself produce the associated results."
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Short Description
An **Expectation** is an [objective](@) that is [owned](@) by a [party](@), and that does not itself produce the associated results.

In the figure below, [objectives](@) Obj-1b.1 and Obj-1b.3 are [expectations](@) of Red towards Blue and Green respectively. Also, [objective](@) Obj-Yel-m is an [expectation](@) of Yellow towards Red.

<img
  alt="Chaining Objectives"
  src={useBaseUrl('images/essif-lab-objective-symbolnotation.png')}
/>

*Figure 1: Chained Objectives - results produced in one objective are consumed in another*

The figure shows four [parties](@) (Red, Yellow, Blue and Green) and their associated [scopes of control](@). Within these, they [own](@) the [objectives](@) (the figure shows 6 [objectives](@) owned by red and one for each of the other [parties](@)). The figure in the top right hand corner of the rectangle that represents an [objective](@), is the [party](@) that the [owner](@) of the [objective](@) expects to produce the [objective's](@) results. It is not necessary that such a [party](@) is known all the time (e.g. [objective](@) Obj-1a).

The arrows indicate that results produced to realize a certain [objective](@) (at the source of the arrow) are (to be) used to produce the results of another [objective](@) (at the end/tip of the arrow).

For more information, e.g. about how different [parties](@) interact in their roles of producer and consumer, we refer you to the [Governance and Management pattern](pattern-governance-and-management@).