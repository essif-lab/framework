---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: policy
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: policy
formphrases: polic{yies}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-09-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: Policy # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of [actions](@), that [agents](@) of the [party](@) that [governs](@) the policy have access to and can interpret such that this results in these [actions](@) being executed as intended by that [party](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Policy"
displayed_sidebar: essifLabSideBar
hoverText: "Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party."
---

### Short Description
A **policy** is a (set of) rules, working instructions and/or other guidance for the execution of one or more kinds of [actions](@) that [agents](@) of the [party](@) that [governs](@) the policy have access to and can interpret such that this results in these [actions](@) being executed as intended by that [party](@).

A bit more elaborate: as per the [party-actor-action pattern](pattern-party-actor-action@), an [agent](@) executes [actions](@) on behalf of its [principal](@). Policies are sets of rules that express, amongst other things, how this [party](@) wants [actions](@) of specific kinds to be executed. That is why [agents](@) need to be able to not only access such guidance, but also interpret its contents such that it leads to the execution of such actions as intended by said [party](@). This requires that the policy be readable by the agent, and that the agent is capable of interpreting it as intended by its principal.

Note that the policy is [governed](@) by the [party](@), which does not preclude it from also [managing](@) (writing, maintaining) the policy, but it does allow this to be outsourced.

It should be part of the [principal's](@) [governance](@) processes
- to establish, maintain and evaluate policies for every kind of action that its agents may execute,
- to derive artifacts from such policies that are useable by the various [agents](@) (digital, human, or otherwise) that have a right or duty to execute actions for the [principal](@) to which such policies apply. So, machine-readable policies should be derived for [digital agents](@), and human-readable policies (in different languages if that is appropriate) for non-digital agents.
- to publish such artifacts such that at least every of its [agents](@) that may need to access them, can find and access them as needed.
- to inform its [agents](@) whenever updates have been made that they need to be aware of (specifically if agents are allowed to keep local copies of such artifacts).

The [Parties, Actors and Actions pattern](pattern-party-actor-action@) provides an overview of how this concept fits in with related concepts.

### Purpose
The purpose of **policies** is to enable [parties](@) to provide its [agents](@) with the rules and other guidance that they need to execute [actions](@) that comply with such rules.

### Criterion
A **policy** is
- a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of [actions](@), possibly using different representations so as to be readable/interpretable by different kinds of [actors](@);
- [managed](@) by a single [party](@) that decides what goes in the policy and what does not;
- [governed](@) (and [owned](@)) by a single [party](@);
- is accessible to, and must be complied with by any [agent](@) of the [party](@) that [governs](@) the policy when it executes an action of the kind to which the policy applies.
