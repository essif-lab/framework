---
id: action
title: "Action"
scopeid: essifLab
type: concept
typeid: action
stage: draft
hoverText: "Action: something that is actually done (a unit of work that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."
glossaryText: "something that is actually done (a unit of work that is executed) by a single %%actor^actor%% (on behalf of a given %%party^party%%), as a single operation, in a specific context."
date: 20220324
---

### Short Description
An **Action** is something that is actually done (a unit of work that is executed) by a single %%actor|actor%% (on behalf of a given %%party|party%%), as a single operation, in a specific context. An %%action|action%%  is the smallest unit of work that an %%organization|organization%% considers. It is characteristic for an %%action|action%% that can be done either completely or not at all; it cannot be executed for (say) 50%. Decisions are specializations of %%action|action%% .

When an %%actor|actor%% is executing an %%action|action%% on behalf of a %%party|party%%, we say that the %%actor|actor%% acts as the %%agent|agent%% of that %%party|party%%, and the %%party|party%% fulfills the role of %%principal|principal%% for that %%actor|actor%%.

During the time interval in which the %%action|action%% is executed, the %%actor|actor%% may still execute other %%actions|action%% in other execution-contexts (multi-tasking).

Every %%action|action%% is executed on behalf of a specific %%party|party%%, which means that the primary guidance for executing the %%action|action%%, e.g. how to execute it, boundary conditions within which the execution must take place, etc., comes from a %%policy|policy%% that this %%party|party%% has established for %%actions|action%% of that kind. The %%actor|actor%% is assumed to have appropriate access to that %%policy|policy%%, as well as the capabilities, capacities etc. resources etc. to sucessfully complete the action in accordance with that %%policy|policy%% (see also: %%onboarding|onboarding%%). Note that while the way an %%action|action%% is executed is primarily guided by this %%policy|policy%%, the %%actor|actor%% that executes it may have additional %%knowledge|knowledge%% that it can tap into, and that serves for guidance where the %%policy|policy%% of the is not the only guidance that an %%actor|actor%% would typically use  The %%Parties, Actors and Actions pattern|pattern-party-actor-action%% provides an overview of how this concept fits in with related concepts.

The result of an action is typically something that contributes to the realization of an %%objective|objective%% of the %%party|party%% on whose behalf it was executed. As such, %%actions|action%% can be considered part of processes that %%manage|management%% that %%objective|objective%%. The %%governance and management pattern|pattern-governance-and-management%% has more on this.

Specific kinds of %%actions|action%% may be grouped together (at define/design time) in various ways to form what is called a workflow, a case-type, a procedure, or a process. The actual %%actions|action%% are the actual work that takes place (at run-time).

### Purpose
The ability to distinguish between (non)actions allows one to determine which (kinds of) %%actors|actor%% are capable of executing actions (e.g. by establishing that they have the competences required by the %%party|party%%, which is part of their %%onboarding|onboarding%%), and as a consequence may be permitted and/or required to execute them. Also, this ability enables %%parties|party%% to determine the execution-%%policy|policy%%, i.e. the set of rules, working-instructions, preferences and other guidance that %%actors|actor%% should obey or comply with when exeucting an %%action|action%% on its behalf.

### Criterion
An **Action** is something that is done by an %%actor|actor%%, can be considered a single operation, and is performed in a specific context, for or on behalf of a specific %%party|party%%, i.e. in accordance with the %%policy|policy%% that this %%party|party%% has established for such %%actions|action%%.

### Examples

You cannot tell up-front whether "Sending a confirmation letter" or "Filling in a form and submitting it" are %%actions|action%%. It really depends on whether the actual work that is understood to take place under such phrases is done by a single %%actor|actor%%, at a single moment, and at a single location. However, these conditions are not very precise. A 'single moment' may be taken to mean 'a time interval that is required to complete the work'. A 'single location'



### Notes

[^1]: This 'unity of time, place and action' is to be understood such that %%actions|action%% can be considered the smallest piece of 'work' that %%actors|actor%% would do in a process, procedure or workflow. This enables %%organizations|organization%% to define permissions (the right to execute such %%actions|action%%) and/or workpackages (the duty to execute such %%actions|action%%), and assign them to (%%roles|role%% that) individual %%actors|actor%% (are assigned to play). It also enables %%organizations|organization%% to create and maintain a %%policy|policy%% that such %%actors|actor%% should use as a guide for execution these %%actions|action%%.
