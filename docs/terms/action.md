---
id: action
title: "Action"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: concept
term: action
formPhrases: action{ss}, acting, activit{yies} 
status: draft
grouptags:
hoverText: "Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."
glossaryText: "something that is actually done (a 'unit of work' that is executed) by a single [actor](@) (on behalf of a given [party](@)), as a single operation, in a specific context."
date: 20220324
---

### Short Description
An **Action** is something that is actually done (a 'unit of work' that is executed) by a single [actor](@) (on behalf of a given [party](@)), as a single operation, in a specific context. It is characteristic for an [action](@) that can be done either completely or not at all; it cannot be executed for (say) 50% (that's what 'unit of work' refers to).

During the time interval in which the [action](@) is executed, the [actor](@) may still execute other [actions](@) in other execution-contexts; this is often referred to as 'multi-tasking'.

The fact that an [action](@) can only be completely executed or not at all, makes [actions](@) the basic building blocks of (information) processes: it is the smallest unit of work that its [owner](@), i.e. the [party](@) on whose behalf it will be run, has decided to consider. Consequently, the [party](@) can attribute characteristics to its [actions](@), such as:
- rights and/or duties for executing the [action](@) (that can be assigned to individual (or groups of) [actors](@)),
- preconditions, postconditions and boundary conditions, that can be used for starting, deferring and stopping its execution,
- [policies](@), that provide [actors](@) that execute the [action](@) the necessary guidance regarding how to do the actual work,
- etc.

 The [Parties, Actors and Actions pattern](pattern-party-actor-action@) provides an overview of how this concept fits in with related concepts.

### Purpose
The ability to distinguish between (non)actions allows one to determine which (kinds of) [actors](@) are capable of executing actions (e.g. by establishing that they have the competences required by the [party](@), which is part of their [onboarding](@)), and as a consequence may be permitted and/or required to execute them. Also, this ability enables [parties](@) to determine the execution-[policy](@), i.e. the set of rules, working-instructions, preferences and other guidance that [actors](@) should obey or comply with when executing an [action](@) on its behalf.

### Criterion
An **Action** is something
- that is actually done (a unit of work that is executed) by a single [actor](@) (on behalf of a given [party](@)), as a single operation, in a specific context;
- that is designed to be done either done completely or not at all (it cannot be done partially, e.g. for 50%);
- whose execution is primarily guided by a [policy](@) of the [party](@) on whose behalf it is executed;
- that typically produces a result that contributes to the realization of one or more [objectives](@) of the [party](@).

### Notes

- The same work can constitute an [action](@) for one [party](@), while it would not for another [party](@). Consider the work associated with (a) drafting the contents of a letter of confirmation, (b) dating it, (c) signing it, (d) putting it in an envelope, (e) writing the destination address on the envelope, (f) affixing a stamp to the envelope if appropriate, and (g) handing it over to an internal or external postal service. One [party](@) may consider all this an indivisible amount of work that is always done by a single [actor](@), thereby qualifying the work as an [action](@). Another [party](@) may decide that (a)-(c) is one [action](@), and (d)-(g) is another action, thus allowing different [actors](@) to write and dispatch the letter.

- Decision typically qualify as an [action](@), and hence can be seen as a specialization thereof.

- Specific kinds of [actions](@) may be grouped together (at define/design time) in various ways to form e.g., workflows, a case-types, procedures, processes, etc.

- When an [actor](@) is executing an [action](@) on behalf of a [party](@), we say that the [actor](@) acts as the [agent](@) of that [party](@), and the [party](@) fulfills the role of [principal](@) for that [actor](@). See the [parties, actors and action pattern](pattern-party-actor-action@) for details.

- A [party](@) will typically only assign an [actor](@) the task to execute an [action](@) after having [onboarded](onboarding@) that [actor](@) and having ensured the [actor](@) has been provided the means to successfully do so.

- While the way an [action](@) is executed is primarily guided by a [policy](@) of its [owner](@) (i.e. the [party](@) on whose behalf the [action](@) is executed), the [actor](@) that executes it may have additional [knowledge](@) that it can tap into, and use it where the [policy](@) of the [party](@) does not provide (sufficient) guidance. For example, a [policy](@) would typically prescribe the structure of a letter of confirmation, but leave it to (additional [knowledge](@) that) the [actor](@) (can tap into) to fill in the details.

- The result of an action is typically something that contributes to the realization of an [objective](@) of the [party](@) on whose behalf it was executed. As such, [actions](@) can be considered part of processes that [manage](management@) that [objective](@). The [governance and management pattern](pattern-governance-and-management@) has more on this.
