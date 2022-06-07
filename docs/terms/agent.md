---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: agent
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: agent
formphrases: agent{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: Agent # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "an [actor](@) that is executing an [action](@) on behalf of a [party](@) (called the [principal](@) of that [actor](@))."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Agent"
displayed_sidebar: essifLabSideBar
hoverText: "Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor)."
---

### Short Description
An **agent** (of a [party](@)) is an [actor](@) that is executing an [action](@) on behalf of that [party](@). As, and in the context where the [actor](@) is doing this, we say that it fulfills the role of [agent](@) for that [party](@). We also say that the [party](@) fulfills the role of [principal](@) (for that [actor](@)).

Being an [agent](@) (or [principal](@) for that matter) is a [role](@) (characteristic/property) that an [actor](@) (or a [party](@), respectively) only has at a point in time where the [actor](@) is _actually executing an [action](@)_ on behalf of that [party](@).

During the time interval in which the action is executed, the actor may execute other actions in other execution-contexts, on behalf of the same or another [party](@). However, for the execution of a single [action](@), the [actor](@) is an [agent](@) for precisely one [principal](@).

[Agents](@) are expected to access (and hence have access to) the [policies](@) that their respective [principals](@) provide in order for these [agents](@) to execute [actions](@) in compliance therewith. This, and relations with other concepts are described in the [Parties, Actors and Actions pattern](pattern-party-actor-action@).

### Purpose
The purpose of the concept [agent](@) is that it is an enabler for the capability of determining its [principal](@), because it is an [actor](@) with the property that it is executing some [action](@) on behalf of a [party](@)) - its [principal](@). The relevance of this capability finds its origin in the fact that it is not the [actor](@) that is held accountable for the [actions](@) it executes, but the [party](@) on whose behalf they are are executed.
### Criterion
**Agent** is a [role name](@) that generically refers to an [actor](@) that is executing some [action](@) on behalf of a [party](@).

### Examples

- When a [person](@) (as an [actor](@)) is doing something on its own behalf (as a [party](@)), it is both its own [agent](@) and its own [principal](@).
- A [person](@) that does things for his [employer](@) acts as an [agent](@) for that [employer](@).
- An ambassador, when (s)he is 'in function', acts as an [agent](@) for the country for which (s)he is ambassador.
- A [person](@) that fills in the tax return form for another [person](@) or [organization](@) acts as an [agent](@) for that [person](@) or [organization](@).
- A company that makes cars may use robots that weld parts of a car together; whenever these robots are welding parts together, they acts as [agents](@) for that company.
- A (running) webserver that accepts product orders for a retailer acts as a (digital) [agent](@) for that retailer.
- A wallet app that runs on a phone and that is exclusively used by a single [person](@) acts as a (digital) [agent](@) for that [person](@), and the latter is its [principal](@).
- When an enterprise hires an accountancy-firm to produce an accountants-report, and the latter assigns an accountant the task to actually do this, and if the accountant does so as an [employee](@) that `works for` the accountancy-firm (see the [parties, actors and actions model](@)), then the accountant acts as an [agent](@) and the accountancy-firm would be the [principal](@). However, the accountant could also be 'outsourced' to the enterprise (in which case the enterprise would have [onboarded](@) the accountant) specifically for producing the accountants-report, then the accountant would be an [agent](@) for the enterprise, and the latter would be its [principal](@).
