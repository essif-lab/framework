---
id: principal
displayed_sidebar: essifLabSideBar
termType: concept
term: principal
formPhrases: [ "principal{ss}" ]
status: draft
grouptags:
hoverText: "Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party)."
glossaryTerm: "Principal"
glossaryText: "the [party](@) for whom, or on behalf of whom, the [actor](@) is executing an [action](@) (this [actor](@) is then called an [agent](@) of that [party](@))."
date: 20210601
---

# Principal

### Short Description

A **principal** (of an [actor](@)) is a [party](@) on whose behalf the [actor](@) is executing an [action](@). As, and in the context where the [actor](@) is doing this, we say that the [party](@) fulfills the role of [principal](@) for that [actor](@). We also say that the [actor](@) fulfills the role of [agent](@) for that [party](@).

Being a [principal](@) (or [agent](@) for that matter) is a [role](@) (characteristic/property) that a [party](@) (or an [actor](@), respectively) only has at a point in time where the [actor](@) is _actually executing an [action](@)_ on behalf of that [party](@). At any point in time, a [party](@) can fulfill the [role](@) of [principal](@) for many [actors](@), depending on the amount of [actions](@) that are being executed on its behalf.

[Principals](@) are expected to provide its [agents](@) with the [policies](@) that provide the [agents](@) with the rules, working-instructions, preferences and other guidance that they need to comply with when executing the action. This, and relations with other concepts are described in the [Parties, Actors and Actions pattern](party-actor-action@).

### Purpose

The purpose of being able to distinguish between [parties](@) that are, and that are not fulfilling the [role](@) of [principal](@) (of the [actor](@) that is executing some [action](@)), is that it is instrumental in discussions about who is (not) responsible/accountable for that [action](@) - including the way in which the [action](@) is executed, as well as the results produced by that [action](@).

### Criterion

The **principal** (of an [actor](@)) is the [party](@) for whom the [actor](@) is an [agent](@), i.e. on whose behalf the [actor](@) is (in the process of) executing some [action](@).

### Examples

- When a [person](human-being@) (as an [actor](@)) is doing something on its own behalf (as a [party](@)), it is both its own [agent](@) and its own [principal](@).
- When a [person](human-being@) does things for his [employer](@) the [employer](@) is that [person's](human-being@) [principal](@).
- when an ambassador acts in its capacity as ambassador, the country for which (s)he is ambassador is his/her [principal](@).
- When the tax return form for a [person](human-being@) or [organization](@) is filled in by some other [person](human-being@), the latter acts as an [agent](@) for that [person](human-being@) or [organization](@), which is then the [principal](@).
- A company that makes cars is the [principal](@) of the robots that it uses to weld parts of a car together - but only when these robots are actually welding parts together.
- A retailer ([organization](@)) is the [principal](@) of a (running) webserver that accepts product orders.
- A wallet app that runs on a phone and that is exclusively used by a single [person](human-being@) acts as a (digital) [agent](@) for that [person](human-being@), and the latter is its [principal](@).
- When an enterprise hires an accountancy-firm to produce an accountants-report, and the latter assigns an accountant the task to actually do this, and if the accountant does so as an [employee](@) that `works for` the accountancy-firm (see the [parties, actors and actions model](party-actor-action@)), then the accountant acts as an [agent](@) and the accountancy-firm would be the [principal](@). However, the accountant could also be 'outsourced' to the enterprise (in which case the enterprise would have [onboarded](onboarding@) the accountant) specifically for producing the accountants-report, then the accountant would be an [agent](@) for the enterprise, and the latter would be its [principal](@).
