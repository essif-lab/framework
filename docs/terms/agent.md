---
id: agent
title: "Agent"
scopeid: essifLab
type: concept
typeid: agent
stage: draft
hoverText: "Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor)."
glossaryText: "an %%actor^actor%% that is executing an %%action^action%% on behalf of a %%party^party%% (called the %%principal^principal%% of that %%actor^actor%%)."
---

### Short Description
An **Agent** is an %%actor|actor%% that is executing an action %%action|action%% on behalf of some %%party|party%% (which we call the %%principal|principal%% of that agent). During the time interval in which the action is executed, the actor may execute other actions in other execution-contexts, on behalf of the same or another %%party|party%%. However, for the execution of a single %%action|action%%, the actor is an agent for precisely one principal. It is assumed that the principal provides its agents with the %%policies|policy%% that provide the agents with the rules, working-instructions, preferences and other guidance that they need to comply with when exeucting the action.

The %%Parties, Actors and Actions pattern|pattern-party-actor-action%% provides an overview of how this concept fits in with related concepts.

### Purpose
The ability to distinguish between (non)agents is relevant in many situations, including:
- electronic communication: the agent 

### Criterion
An **Agent** is a role that an %%actor|actor%% fulfills with respect to some %%party|party%% when that actor is executing some %%action|action%% on behalf of that %%party|party%%.

### Examples

- A person that is 'doing its own things' acts as an Agent for himself.
- A person that does things for his employer acts as an Agent for that employer.
- An ambassador, when (s)he is 'in function', acts as an Agent for the country for which (s)he is ambassador.
- A person that fills in the tax return form for someone else acts as an Agent for this someone else.
- A company that makes cars may use robots that weld parts of a car together; these robots acts as Agents for that company.
- A (running) webserver that accepts product orders for a retailer acts as a (digital) Agent for that retailer.
- A wallet app that runs on a phone and that is exclusively used by a single person acts as a (digital) Agent for that person.
