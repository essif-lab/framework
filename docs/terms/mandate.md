---
id: mandate
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termType: concept
term: mandate
formPhrases: [ "mandate{ss}", mandated, mandating, "mandator{ss}", "mandatee{ss}" ]
status: draft
grouptags:
hoverText: "Mandate: a right or duty that one Party (the Mandator) has granted to another Party or Employee (the Mandatee) for executing a specific (set of) Actions in the name of, and under responsibility/accountability of, this (first) Party."
glossaryTerm: "Mandate"
glossaryText: "a right or duty that one [party](@) (the [mandator](mandate@)) has granted to another [party](@) or [employee](@) (the [mandatee](mandate@)) for executing a specific (set of) [action](@) in the name of, and under responsibility/accountability of, this (first) [party](@)."
date: 20220220
---

# Mandate

### Short Description

A **mandate** a right or duty that one [party](@) (the [mandator](mandate@)) has granted to another [party](@) or [employee](@) (the [mandatee](mandate@)) for executing a specific (set of) [actions](@) in the name of, and under responsibility/accountability of, this (first) [party](@). Because of that, such [actions](@) must be executed according to the [policies](@) of the [mandator](mandate@), and this is what distinguishes it from a [delegate](@).

Note that [actors](@) are never [mandatees](mandate@); they can only be that in their capacity of being [employed](employee@) by a specific [party](@), which may be the [mandator](mandate@) itself, but also some other [party](@). The reason for that is that this ensures the [actor](@) is [onboarded](onboarding@) by that [party](@), which makes that [party](@) accountable in cases where the [actor](@) misbehaves by misusing, or exceeding the rights and duties that are granted by the [mandate](@).

[Mandates](@) come in various flavors, ranging from very informal to very formal, with little or much details, implict or explicit, and in a human and/or machine readable form.

Informal [mandates](@) typically do not come with assurances and are usually not registered. An example of this is a car owner granting permission to someone else to use the car for some period of time. When

Particularly in governmental, policing and judicial settings, [mandates](@) will be formal because the ability to establish their existence is necessary as part of chains of evidence. Such [mandates](@) may also (need to) be registered so that third parties can check their  existence, the extent of rights and/or duties that the [mandatee](mandate@) has been granted (i.e. what it can and cannot do under the [mandate](@)), and obtain assurances to its rightful issuance (the issuer of the [mandate](@) must have the same right or duty as is [mandated](mandate@), as well as the right to [mandate](@) that right or duty.

[Mandates](@) can also be very specific and explicit. For example [OAuth access tokens](https://www.oauth.com/oauth2-servers/access-tokens/), or other kinds of permissions are [mandates](@) for designated IT components (that act on behalf of some [party](@)) to access particular resources that are [owned](@) by the [mandator](mandate@), and/or have such resources processed.

A particular kind of [mandate](@) is called 'consent'. Basically, this means that an [employee](@) (of an arbitrary [party](@)) can request that a [party](@) grants a pecific set of rights/duties to that [employee](@); if the [party](@) consents, then that is equivalent as if it had granted the [employee](@) these rights/duties as a [mandate](@).

Rights and duties are assigned to [parties](@) - not [actors](@). However, executing [actions](@) that exercise such rights can only be done by [actors](@) - not [parties](@) (see the [party, actor, and actions pattern](pattern-party-actor-action@)). In its simplest form, a [mandate](@) can be seen as a (set of) task(s) that a [party](@) assigns to one or more of its [employees](@). In a more complex form a [mandate](@) can be seen as the permission (right) or tasking (duty) that is assigned to (and agreed upon with the [employer(s)](@) of) [employee(s)](@) of other [parties](@).

A [mandate](@) is only valid if the [mandated](mandate@) right or duty is one that the [mandator](mandate@) actually has. If, for example, a [party](@) is the holder of a bank account, it has the right to transfer funds out of that account. If the bank supports [mandates](@), the holder can [mandate](@) this right to other people, or even services in the bank (e.g. for making automatic payments). A [party](@) that has no right to transfer funds out of a bank account should not be enabled to create valid [mandates](@) so that other [actors](@) could start depleting it.

A special kind of [mandate](@) is that where the right to [mandate](@) certain rights or duties (or: the execution of certain [actions](@)) is [mandated](mandate@). Particularly if a [party](@) is a [mandatee](mandate@) for a certain right or duty (or: task), it may not have a [mandate](@) that would enable it to create [mandates](@) for other so do that task.

[Mandates](@) are subject to the [legal system](@) of a [jurisdiction](@), which has the rules and constraints that specify what can(not) be done with them. Thus, [mandates](@) are enforced using the means that its [jurisdiction](@) applies for that. The same goes in case of conflicts that concern [mandates](@). Also, [jurisdictions](@) may themselves specify [mandates](@), or templates for [mandates](@) that e.g. only require the [mandator](mandate@) and [mandatee(s)](mandate@) to be filled in.

As explained (see the [duties and rights pattern](pattern-duties-and-rights@)), rights and duties are relations between [legal entities](legal-entity@): [parties](@) have rights/duties *towards* others. For example, a [party](@) that is holder of a bank account has a right (that it can exercise) towards the bank to transfer money out of the account, which implies that the bank has a corresponding duty to enable that [party](@) to exercise that right. This makes that it is not trivial to operationalize [mandates](@): simply creating a [mandate](@) by the [mandator](mandate@) does not mean that the [party](@) that has the corresponding duties and/or rights can recognize them as being authentic, or can handle them. This is particularly an issue when verifying the authenticity and subsequent handling are to be done electronically.

### Purpose

The purpose of (formal and/or explicit) [mandates](@) is that it enables [parties](@) to establish whether or not [actors](@) that execute (a) specific [action(s)](@) are entitled to do so.
### Criterion

A mandate is ([data](@), that expresses) a [volition](https://www.merriam-webster.com/dictionary/volition) of a [party](@) (in the role of [mandator](mandate@)) that pertains to:
- a set of rights and/or duties that the [mandator](mandate@) disposes of, and that are the subject of the [mandate](@);
- at least one other [party](@) and/or [agent](@) (in the role of [mandatee](mandate@));
- at least one (kind of) [action](@) (activity, task), the execution of [actions](@) (of such kinds) exercise one or more of the specific rights and/or duties;
- a (possibly empty) [policy](@) that specifies the rules, working-instructions, preferences and other guidance for [mandatees](mandate@) as they execute such [actions](@);
- a commitment of the [mandator](mandate@) that expresses its intention to have the [mandatee(s)](mandate@) execute such (kinds of) [action(s)](@) in its name and under its responsibility/accountability;

### Examples

- In the law of a nation, it may say that the Mayor of a municipality has the duty to register every person that takes residence in that municipality. The Mayor may [mandate](@) a selected set of civil servants that the municipality employs to do the actual registration.
- The police (as an [organization](@)) has the right to fine drivers for driving through a red (traffic)light. The job description of traffic officers states that they can do the actual work - take the streets, look at traffic, and fine trespassers. However, (appropriately certified) photographic equipment may also be [mandated](mandate@) to do this (electronically).
- A [person](human-being@) or [organization](@) that is the holder of a bank account may [mandate](@) other people to (also) transfer funds out of that bank account.

### Notes

In regular language, the word 'mandate' has multiple meanings, that differ e.g. in whether or not accountability is transferred, whether or not the [mandatee](mandate@) has the liberty to choose the way in which (s)he exercises the rights, or whether or not the [mandate](@) must be accepted by the [mandatee](mandate@) - implicitly or explicitly by the [mandatee](mandate@), or because of a rule or ruling within the context of the [jurisdiction](@) that governs the [mandate](@).

A Dutch explanation of the differences between 'mandate' and 'delegate' can be found [here](https://www.vijverbergadvocaten.nl/bestuursrecht/algemeen-bestuursrecht/mandaat-delegatie-en-volmacht).