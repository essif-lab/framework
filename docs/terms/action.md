---
id: action
title: "Action"
scopeid: essifLab
type: concept
typeid: action
stage: draft
hoverText: "Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context."
glossaryText: "something that is actually done/executed - by a single %%actor^actor%% (on behalf of a given %%party^party%%), as a single operation in a specific context."
---

### Short Description
An **Action** is something that is actually done/executed by a %%actor|actor%% in some context (i.e. in a specific place, at a specific time). During the time interval in which the action is executed, the actor may still execute other actions in other execution-contexts (multi-tasking). An action is executed on behalf of a specific %%party|party%%, which means that the primary guidance for executing the action, e.g. how to execute it, boundary conditions within which the execution must take place, etc., comes from a %%policy|policy%% that this %%party|party%% has established for actions of that kind. The actor is assumed to have appropriate access to that policy.

The %%Parties, Actors and Actions pattern|pattern-party-actor-action%% provides an overview of how this concept fits in with related concepts.

### Purpose
The ability to distinguish between (non)actions allows one to determine which (kinds of) %%actors|actor%% are capable of executing actions (e.g. by establishing that they have the competences required by the %%party|party%%), and as a consequence may be permitted and/or required to execute them. Also, this ability enables %%parties|party%% to determine the execution-policy, i.e. the set of rules, working-instructions, preferences and other guidance that actors should obey or comply with when exeucting an action on its behalf.

### Criterion
An **Action** is something that is done by an actor, can be considered a single operation, and is performed in a specific context, for or on behalf of a specific %%party|party%%, i.e. in accordance with the policy rules that this %%party|party%% has established for such actions.

### Examples
- filling in a form and submitting it.
- cleaning a car.

### Related Concepts
<!--Link to any concepts that are similar but distinct, with a note about the relationship.-->
- OED defines Action as the fact or process of doing something, typically to achieve an aim ([OED](https://www.lexico.com/definition/action)), which is too generic for our purposes.
- %%actor|actor%%
- %%agent|agent%%

