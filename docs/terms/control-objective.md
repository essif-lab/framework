---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: control-objective
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: control-objective
formphrases: control-objective{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-02-03
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Control # Text that is the name of the concept in (human readable) texts.
fullterm: "Control Objective"
shorterm:
synonyms:
glossaryText: "an [objective](@), owned by a [party](@), that aims to contribute to the realization of another (set of) [objective(s)](@) of that [party](@), by producing results that this [party](@) needs to realize these other [objective(s)](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Control Objective"
displayed_sidebar: essifLabSideBar
hoverText: "Control objective (of a Party): an Objective, owned by that Party, that aims to contribute to the realization of another (set of) Objective(s) of that Party, by producing results that this Party needs to realize these other Objective(s)."
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Short Description
A **control objective** is an [objective](@), owned by a [party](@), that aims to contribute to the realization of another (set of) [objective(s)](@) of that [party](@), by producing results that this [party](@) needs to realize these other [objective(s)](@). A control objective has the property that it is both [managed](@) (as it produces specific results) and also [governed](@) (as it uses these results - as a contribution to the realization of other objectives of that [party](@)) by (or on behalf of) its [owner](@).

The [governance](@) aspect entails the specification of the results that are needed, and the characteristics that they should have in order to be a useful and relevant contribution for the [objective](@) for which it is a control.  as a realization

Typical contributions for a control objective is the production of an intermediate result, the mitigation of a specific risk, or results that contribute to the realization of [compliance objectives](@).

There are various ways for [parties](@) to come to grips with specifying and [managing](@) their [control objectives](@). Here are some examples:

- [Organizations](@) (specifically those with a rather large [scope of control](@)) are known to classify their (regular) [objectives](@) according to (business) topics such as finance, (information) security, safety, quality, legal, human resources etc. This allows them to specify [control objectives](@) that are particular to such topics, and define equally specific control [management](@) processes for that.
- [Organizations](@) that realize that their departments (and sub-departments) are actually [parties](@) that each have their [own](@) set of [objectives](@), may require such departments to specify their own [control objectives](@) and associated control [management](@) process(es). This enables such [organizations](@) to specify [control objectives](@) that (only) seek assurances that their departments are properly specifying their own [objectives](@), and [manage](@) the associated [controls](@).
- [Organizations](@) are also known to create [control objectives](@) that fit traditional control [management](@) processes, e.g. as defined in ISO standards.
- [Organizations](@) may classify their [objectives](@) using the [formalization of objectives](./objective#formalization) (and the [governance and management pattern](pattern-governance-and-management@)), e.g.
  - [expectations](@), i.e. [objectives](@) the result of which is consumed, but not produced by the [organization](@). Such [objectives](@) are not [managed](@) but [governed](@), and hence require a corresponding control [management](@) process;
  - [obligations](@), i.e. [objectives](@) the result of which is produced by the [organization](@) and consumed by (at least) one other [party](@). Such [objectives](@) are [managed](@), and also require communication with the consuming [parties](@);
  - controls, i.e. [objectives](@) the result of which is produced and (only) consumed by the [organization](@) itself. These [objectives](@) must be [managed](@) and [governed](@) by the [party](@) that [owns](@) them.

We have observed that (the [management](@) of) the [controls](@) associated with the [objectives](@) that control [management](@) processes pursue themselves, are often 'forgotten', i.e. these [objectives](@) are not in the scope of any control [management](@) process. [Parties](@) should set [control objectives](@) that aim to mitigate the [controls](@) associated with (the [objectives](@) pursued by) their control [management](@) processes.

Control objectives should also be associated with [assessment frameworks](@) that auditors will use for determining the [control-levels](@) for each of these objectives.

### Purpose
The purpose of control-objectives is help [parties](@) determine and prioritize the work they need to do in order to ensure that the [controls](@) they run become, and/or remain, acceptable.

### Criteria
A [control-objective](@) is an [objective](@) that
- is associated with one or more (classes of) [objectives](@) that are controlled by the [owner](@) of the [control-objective](@);
- is associated with one or more [normative frameworks](@) that these (classes of) [objectives](@) are to comply with;
- may be associated with appropriate [assessment frameworks](@) that auditors must use to determine the [level of control](@).

### Notes

In the figure below, [objectives](@) Obj-1a, Obj-1b and Obj-1b.2 are [control objectives](@) of Red. Obj-1b.2 is a [control objective](@) for Obj-1b, which in turn is a [control objective](@) for Obj-1. Note that [objectives](@) such as Obj-1a, which haven't been explicitly assigned a producer [party](@), will default to the [objective's](@) [owner](@) being the producer. And therefor, Obj-1a is also a [control objective](@).

<img
  alt="Chaining Objectives"
  src={useBaseUrl('images/essif-lab-objective-symbolnotation.png')}
/>

*Figure 1: Chained Objectives - results produced in one objective are consumed in another*

The figure shows four [parties](@) (Red, Yellow, Blue and Green) and their associated [scopes of control](@). Within these, they [own](@) the [objectives](@) (the figure shows 6 [objectives](@) owned by red and one for each of the other [parties](@)). The figure in the top right hand corner of the rectangle that represents an [objective](@), is the [party](@) that the [owner](@) of the [objective](@) expects to produce the [objective's](@) results. It is not necessary that such a [party](@) is known all the time (e.g. [objective](@) Obj-1a).

The arrows indicate that results produced to realize a certain [objective](@) (at the source of the arrow) are (to be) used to produce the results of another [objective](@) (at the end/tip of the arrow).

For more information, e.g. about how different [parties](@) interact in their roles of producer and consumer, we refer you to the [Governance and Management pattern](pattern-governance-and-management@).