---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: mandate
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: mandate
formphrases: mandate{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-02-20
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Mandate # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "a right or duty that one [party](@) (the [mandator](@)) has granted to another [party](@) or [actor](@) (the [mandatee](@)) for executing a specific (set of) [actions](@) in the name of, and under responsibility/accountability of, this (first) [party](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Mandate"
displayed_sidebar: essifLabSideBar
hoverText: "Mandate: a right or duty that one Party (the Mandator) has granted to another Party or Actor (the Mandatee) for executing a specific (set of) Actions in the name of, and under responsibility/accountability of, this (first) Party."
---

### Short Description
A **mandate** a right or duty that one [party](@) (the [mandator](@)) has granted to another [party](@) or [actor](@) (the [mandatee](@)) for executing a specific (set of) [actions](@) in the name of, and under responsibility/accountability of, this (first) [party](@). Because of that, such [actions](@) must be executed according to the [policies](@) of the [mandator](@), and this is what distinguishes it from a [delegate](@).

[Mandates](@) can be very informal, implicit even, all the way to very formal and explicit. Particularly in governmental, policing and judicial settings, [mandates](@) will be formal because their existence is necessary as part of chains of evidence.

Rights and duties are assigned to [parties](@) - not [actors](@). However, executing [actions](@) that exercise such rights can only be done by [actors](@) - not [parties](@) (see the [party, actor, and actions pattern](pattern-party-actor-action@)). In its simplest form, a [mandate](@) can be seen as a (set of) task(s) that a [party](@) assigns to one or more [employees](@).

A [mandate](@) is only valid if the [mandated](@) right or duty is one that the [mandator](@) actually has. If, for example, a [party](@) is the holder of a bank account, it has the right to transfer funds out of that account. If the bank supports [mandates](@), the holder can [mandate](@) this right to other people, or even services in the bank (e.g. for making automatic payments). A [party](@) that has no right to transfer funds out of a bank account should not be enabled to create valid [mandates](@) so that other [actors](@) could start depleting it.

A special kind of [mandate](@) is that where the right to [mandate](@) certain rights or duties (or: the execution of certain [actions](@)) is [mandated](@). Particularly if a [party](@) is a [mandatee](@) for a certain right or duty (or: task), it may not have a [mandate](@) that would enable it to create [mandates](@) for other so do that task.

[Mandates](@) are subject to the [legal system](@) of a [jurisdiction](@), which has the rules and constraints that specify what can(not) be done with them. Thus, [mandates](@) are enforced using the means that its [jurisdiction](@) applies for that. The same goes in case of conflicts that concern [mandates](@). Also, [jurisdictions](@) may themselves specify [mandates](@), or templates for [mandates](@) that e.g. only require the [mandator](@) and [mandatee(s)](@) to be filled in.

As explained (see the [duties and rights pattern](pattern-duties-and-rights@)), rights and duties are relations between [legal entities](@): [parties](@) have rights/duties *towards* others. For example, a [party](@) that is holder of a bank account has a right (that it can exercise) towards the bank to transfer money out of the account, which implies that the bank has a corresponding duty to enable that [party](@) to exercise that right. This makes that it is not trivial to operationalize [mandates](@): simply creating a [mandate](@) by the [mandator](@) does not mean that the [party](@) that has the corresponding duties and/or rights can recognize them as being authentic, or can handle them. This is particularly an issue when verifying the authenticity and subsequent handling are to be done electronically.

### Purpose
The purpose of (formal and/or explicit) [mandates](@) is that it enables [parties](@) to establish whether or not [actors](@) that execute (a) specific [action(s)](@) are entitled to do so.
### Criterion
A mandate is ([data](@), that expresses) a [volition](https://www.merriam-webster.com/dictionary/volition) of a [party](@) (in the role of [mandator](@)) that pertains to:
- a set of rights and/or duties that the [mandator](@) disposes of, and that are the subject of the [mandate](@);
- at least one other [party](@) and/or [actor](@) (in the role of [mandatee](@));
- at least one (kind of) [action](@) (activity, task), the execution of [actions](@) (of such kinds) exercise one or more of the specific rights and/or duties;
- a (possibly empty) [policy](@) that specifies the rules, working-instructions, preferences and other guidance for [mandatees](@) as they execute such [actions](@);
- a commitment of the [mandator](@) that expresses its intention to have the [mandatee(s)](@) execute such (kinds of) [action(s)](@) in its name and under its responsibility/accountability;

### Examples

- In the law of a nation, it may say that the Mayor of a municipality has the duty to register every person that takes residence in that municipality. The Mayor may [mandate](@) a selected set of civil servants that the municipality employs to do the actual registration.
- The police (as an [organization](@)) has the right to fine drivers for driving through a red (traffic)light. The job description of traffic officers states that they can do the actual work - take the streets, look at traffic, and fine trespassers. However, (appropriately certified) photographic equipment may also be [mandated](@) to do this (electronically).
- A [person](@) or [organization](@) that is the holder of a bank account may [mandate](@) other people to (also) transfer funds out of that bank account.

### Notes

In regular language, the word 'mandate' has multiple meanings, that differ e.g. in whether or not accountability is transferred, whether or not the [mandatee](@) has the liberty to choose the way in which (s)he exercises the rights, or whether or not the [mandate](@) must be accepted by the [mandatee](@) - implicitly or explicitly by the [mandatee](@), or because of a rule or ruling within the context of the [jurisdiction](@) that governs the [mandate](@).

A Dutch explanation of the differences between 'mandate' and 'delegate' can be found [here](https://www.vijverbergadvocaten.nl/bestuursrecht/algemeen-bestuursrecht/mandaat-delegatie-en-volmacht).