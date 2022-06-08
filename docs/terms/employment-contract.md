---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: employment-contract
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: employment-contract
formphrases: employment-contract{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Employment # Text that is the name of the concept in (human readable) texts.
fullterm: "Employment Contract"
shorterm:
synonyms:
glossaryText: "an agreement/contract between two [parties](@), one of which controls a set of [actors](@) (the [subjects](@) of the contract), that states (or refers to) all (sets of) rights and duties under which these [actors](@) can and/or must work for the other [party](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Employment Contract"
displayed_sidebar: essifLabSideBar
hoverText: "Employment Contract (between two Parties, concerning a set of Actors): an agreement/contract between these Parties that states (or refers to) all (sets of) rights and duties under which the Actors (the Subjects of the contract), that are controlled by one Party, can and/or must work for the other Party."
---

### Short Description

An **employment contract** is an agreement/contract between two [parties](@), one of which controls a set of [actors](@) (the [subjects](@) of the contract), that states (or refers to) all (sets of) rights and duties under which these [actors](@) can and/or must work for the other [party](@). This includes rights and duties of both [parties](@), as well as rights and duties of the [actor(s)](@) that are the [subject](@) of the contract.

Rights and duties pertain to e.g., (groups of) [actions](@) that the [actor(s)](@) are expected (not) to execute, which [policies](@) they would be expected (not) to follow, the conditions under which the [actor(s)](@) should work (e.g. times, locations, ...), the provisioning of any means needed to perform, etc. And of course, the contract would also state how the [party](@) that controls these [actors](@) will be remunerated.

The creation of [employment contracts](@) are part of what is called [onboarding](@) (of an [actor](@), that is a [subject](@) of the [employment contract](@), by the [party](@) that wants to deploy the [actor](@) as one of its [agents](@). More details are given in the [party actor action pattern](pattern-party-actor-action@).

### Examples

An [individual](@) may sign a labor contract, that allows it to work for an [organization](@) in a designated function, for which it receives a salary. The [individual](@) and the [organization](@), which both qualify as [parties](@), sign the contract, which states the conditions under which the [individual](@) (as an [actor](@)) works for the [organization](@). The function represents the kinds of [actions](@) that it would be executing, and there would be a section on working hours/locations, etc.

An [individual](@) that is an [employee](@) for an employment agency would have a similar contract with that agency that provides it with a measure of control over the [individual](@) that enables it to negotiate employment contracts with other [organizations](@). The [actor](@) (subject) of such an employment contract is the [individual](@), and the other [organization](@) and the employment agency are the [parties](@) that sign the [employment contract](@).

Accountants that are [employed](@) by an accountancy firm have a contract with the accountancy firm stating the conditions (rights and duties of either) under which they work for that firm. When the firm receives an order from some [organization](@) for an accountancy job, it can then assign the accountant to that job. However, while this accountant may work at the premises of the [organization](@), the latter will not have [onboarded](@)

The [Parties, Actors and Actions pattern](pattern-party-actor-action@) describes how this concept fits in with related concepts.

### Purpose
The purpose of having [employment contracts](@) is to ensure that [expectations](@) that [parties](@) have towards one another, and towards [actors](@) that work for them, are matched by corresponding [obligations](@) of the reciprocal [party](@) (for details on matching, see the section **[Matching](pattern-governance-and-management#matching)** of the [Governance and Management pattern](pattern-governance-and-management@)). An [employment contract](@) that is made explicit, and electronically available, may also serve as part of the chain of assets that are needed to determine the right (or duty) of an [actor](@) to execute an [action](@) on behalf of some [party](@).
### Criteria
An [employment contract](@) is an agreement/contract
- between two [parties](@), one of which controls a set of [actors](@) (the [subjects](@) of the contract);
- that states (or refers to) all (sets of) rights and duties under which these [actors](@) can and/or must work for the other [party](@);
- that includes rights and duties of both [parties](@), as well as rights and duties of the [actor(s)](@) that are the [subject](@) of the contract.