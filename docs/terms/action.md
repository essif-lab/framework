---
id: action
title: "Action"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: concept
termid: action
term: action
formPhrases: action{ss}, acting, activit(yies)
status: draft
grouptags:
hoverText: "Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."
glossaryText: "something that is actually done (a 'unit of work' that is executed) by a single %%actor^actor%% (on behalf of a given %%party^party%%), as a single operation, in a specific context."
date: 20220324
---

### Short Description
An **Action** is something that is actually done (a 'unit of work' that is executed) by a single %%actor|actor%% (on behalf of a given %%party|party%%), as a single operation, in a specific context. It is characteristic for an %%action|action%% that can be done either completely or not at all; it cannot be executed for (say) 50% (that's what 'unit of work' refers to).

During the time interval in which the %%action|action%% is executed, the %%actor|actor%% may still execute other %%actions|action%% in other execution-contexts; this is often referred to as 'multi-tasking'.

The fact that an %%action|action%% can only be completely executed or not at all, makes %%actions|action%% the basic building blocks of (information) processes: it is the smallest unit of work that its %%owner|owner%%, i.e. the %%party|party%% on whose behalf it will be run, has decided to consider. Consequently, the %%party|party%% can attribute characteristics to its %%actions|action%%, such as:
- rights and/or duties for executing the %%action|action%% (that can be assigned to individual (or groups of) %%actors|actor%%),
- preconditions, postconditions and boundary conditions, that can be used for starting, deferring and stopping its execution,
- %%policies|policy%%, that provide %%actors|actor%% that execute the %%action|action%% the necessary guidance regarding how to do the actual work,
- etc.

 The %%Parties, Actors and Actions pattern|pattern-party-actor-action%% provides an overview of how this concept fits in with related concepts.

### Purpose
The ability to distinguish between (non)actions allows one to determine which (kinds of) %%actors|actor%% are capable of executing actions (e.g. by establishing that they have the competences required by the %%party|party%%, which is part of their %%onboarding|onboarding%%), and as a consequence may be permitted and/or required to execute them. Also, this ability enables %%parties|party%% to determine the execution-%%policy|policy%%, i.e. the set of rules, working-instructions, preferences and other guidance that %%actors|actor%% should obey or comply with when executing an %%action|action%% on its behalf.

### Criterion
An **Action** is something
- that is actually done (a unit of work that is executed) by a single %%actor|actor%% (on behalf of a given %%party|party%%), as a single operation, in a specific context;
- that is designed to be done either done completely or not at all (it cannot be done partially, e.g. for 50%);
- whose execution is primarily guided by a %%policy|policy%% of the %%party|party%% on whose behalf it is executed;
- that typically produces a result that contributes to the realization of one or more %%objectives|objective%% of the %%party|party%%.

### Notes

- The same work can constitute an %%action|action%% for one %%party|party%%, while it would not for another %%party|party%%. Consider the work associated with (a) drafting the contents of a letter of confirmation, (b) dating it, (c) signing it, (d) putting it in an envelope, (e) writing the destination address on the envelope, (f) affixing a stamp to the envelope if appropriate, and (g) handing it over to an internal or external postal service. One %%party|party%% may consider all this an indivisible amount of work that is always done by a single %%actor|actor%%, thereby qualifying the work as an %%action|action%%. Another %%party|party%% may decide that (a)-(c) is one %%action|action%%, and (d)-(g) is another action, thus allowing different %%actors|actor%% to write and dispatch the letter.

- Decision typically qualify as an %%action|action%%, and hence can be seen as a specialization thereof.

- Specific kinds of %%actions|action%% may be grouped together (at define/design time) in various ways to form e.g., workflows, a case-types, procedures, processes, etc.

- When an %%actor|actor%% is executing an %%action|action%% on behalf of a %%party|party%%, we say that the %%actor|actor%% acts as the %%agent|agent%% of that %%party|party%%, and the %%party|party%% fulfills the role of %%principal|principal%% for that %%actor|actor%%. See the %%parties, actors and action pattern|pattern-party-actor-action%% for details.

- A %%party|party%% will typically only assign an %%actor|actor%% the task to execute an %%action|action%% after having %%onboarded|onboarding%% that %%actor|actor%% and having ensured the %%actor|actor%% has been provided the means to successfully do so.

- While the way an %%action|action%% is executed is primarily guided by a %%policy|policy%% of its %%owner|owner%% (i.e. the %%party|party%% on whose behalf the %%action|action%% is executed), the %%actor|actor%% that executes it may have additional %%knowledge|knowledge%% that it can tap into, and use it where the %%policy|policy%% of the %%party|party%% does not provide (sufficient) guidance. For example, a %%policy|policy%% would typically prescribe the structure of a letter of confirmation, but leave it to (additional %%knowledge|knowledge%% that) the %%actor|actor%% (can tap into) to fill in the details.

- The result of an action is typically something that contributes to the realization of an %%objective|objective%% of the %%party|party%% on whose behalf it was executed. As such, %%actions|action%% can be considered part of processes that %%manage|management%% that %%objective|objective%%. The %%governance and management pattern|pattern-governance-and-management%% has more on this.
