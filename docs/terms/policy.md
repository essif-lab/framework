---
id: policy
title: "Policy"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: concept
termid: policy
term: policy
formPhrases: polic{yies}, business-polic{yies}, operational-polic{yies}
status: draft
grouptags:
hoverText: "Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party."
glossaryText: "a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of %%actions^action%%, that %%agents^agent%% of the %%party^party%% that %%governs^governance%% the policy have access to and can interpret such that this results in these %%actions^action%% being executed as intended by that %%party^party%%."
date: 20210901
---

### Short Description
A **policy** is a (set of) rules, working instructions and/or other guidance for the execution of one or more kinds of %%actions|action%% that %%agents|agent%% of the %%party|party%% that %%governs|governance%% the policy have access to and can interpret such that this results in these %%actions|action%% being executed as intended by that %%party|party%%.

A bit more elaborate: as per the %%party-actor-action pattern|pattern-party-actor-action%%, an %%agent|agent%% executes %%actions|action%% on behalf of its %%principal|principal%%. Policies are sets of rules that express, amongst other things, how this %%party|party%% wants %%actions|action%% of specific kinds to be executed. That is why %%agents|agent%% need to be able to not only access such guidance, but also be able to interpret its contents such that it leads to the execution of such actions as intended by said %%party|party%%. This requires that the policy be readable by the agent, and that the agent is capable of interpreting it as intended by its principal.

There are situations in which the %%party|party%% that %%governs|governance%% a policy is incapable of expressing it in such a way that its %%agents|agent%% can interpret it. This is, for example, the case when the %%party|party%% is a %%person|human-being%% that wants to use an IT component for some complex computations. Then, this %%party|party%% can create and maintain a so-called %%business policy|policy%%, i.e. a policy that states its guidance in 'business speak', and assign some %%employee(s)|employee%% the task of translating (or mapping) it onto some artifact that the %%agents|agent%% can interpret (which we call an %%operational policy|policy%%). That could, e.g., be a configuration file, or the setting of preferences.

Note that the policy is %%governed|governance%% by the %%party|party%%, which does not preclude it from also %%managing|management%% (writing, maintaining) the policy, but it does allow this to be outsourced.

It should be part of the %%principal's|principal%% %%governance|governance%% processes
- to establish, maintain and evaluate policies for every kind of action that its agents may execute,
- to derive artifacts from such policies that are useable by the various %%agents|agent%% (digital, human, or otherwise) that have a right or duty to execute actions for the %%principal|principal%% to which such policies apply. So, machine-readable policies should be derived for %%digital agents|agent%%, and human-readable policies (in different languages if that is appropriate) for non-digital agents.
- to publish such artifacts such that at least every of its %%agents|agent%% that may need to access them, can find and access them as needed.
- to inform its %%agents|agent%% whenever updates have been made that they need to be aware of (specifically if agents are allowed to keep local copies of such artifacts).

The %%Parties, Actors and Actions pattern|pattern-party-actor-action%% provides an overview of how this concept fits in with related concepts.

### Purpose
The purpose of **policies** is to enable %%parties|party%% to provide its %%agents|agent%% with the rules and other guidance that they need to execute %%actions|action%% that comply with such rules.

### Criterion
A **policy** is
- a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of %%actions|action%%, possibly using different representations so as to be readable/interpretable by different kinds of %%actors|actor%%;
- %%managed|management%% by a single %%party|party%% that decides what goes in the policy and what does not;
- %%governed|governance%% (and %%owned|owned%%) by a single %%party|party%% that states the %%expectations|expectation%% that the %%policy|policy%% must fulfill;
- is accessible to, and must be complied with by any %%agent|agent%% of the %%party|party%% that %%governs|governance%% the policy when it executes an action of the kind to which the policy applies.
