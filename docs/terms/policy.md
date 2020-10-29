---
id: policy
title: "Policy"
scopeid: essifLab
type: concept
typeid: policy
stage: draft
hoverText: "Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents (a) have access to, (b) can interpret as intended by their Principal (i.e. policy Owner) and (c) must use when executing such Actions."
glossaryText: "a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of %%actions^action%%, that %%agents^agent%% (a) have access to, (b) can interpret as intended by their %%principal^principal%% (i.e. policy %%owner^owner%%) and (c) must use when executing such %%actions^action%%."
---

### Short Description
A **policy** is a (set of) rules, working instructions and/or other guidance for the execution of one or more kinds of %%actions|action%%.  that agents (a) have access to, (b) can interpret as intended by their principal (i.e. policy owner) and (c) must use when executing such actions.

An %%agent|agent%% must have access to the policy that its %%principal|principal%% has established for the kind of action(s) that the agent is executing for its principal. This requires that the policy be readable by the agent, and that the agent is capable of interpreting it as intended by its principal.

It should be part of the %%principal's|principal%% governance processes 

- to establish, maintain and evaluate policies for every kind of action that its agents may execute, 
- to derive artifacts from such policies that are useable by the various %%agents|agent%% (digital, human, or otherwise) that have a right or duty to execute actions for the %%principal|principal%% to which such policies apply. So, machine-readable policies should be derived for %%digital agents|digital-agent%%, and human-readable policies (in different languages if that is appropriate) for non-digital agents. 
- to publish such artifacts such that at least every of its %%agents|agent%% that may need to access them, can find and access them as needed.
- to inform its %%agents|agent%% whenever updates have been made that they need to be aware of (specifically if agents are allowed to keep local copies of such artifacts).

The %%Parties, Actors and Actions pattern|pattern-party-actor-action%% provides an overview of how this concept fits in with related concepts.

### Purpose
The purpose of **policies** is to enable %%parties|party%% to provide its %%agents|agent%% with the rules and other guidance that they need to execute %%actions|action%% that comply with such rules. 

### Criterion
A **policy** is 
- a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of %%actions|action%%;
- governed by a single %%party|party%% (the %%Governor|policy-governor%% of the policy) that decides what goes in the policy and what does not;
- may have multiple representations of the rules, working-instructions, preferences and other guidance, which are derived from the policy itself, in such a way that that any %%actor|actor%% that has a right or duty to execute an %%action|action%% on behalf of the  %%policy's governor|policy-governor%% can do so according to its intentions; 
- is accessable to, and must be complied with by an %%agent|agent%% of that %%policy's governor|policy-governor%% when it executes an action of the kind to which the policy applies.

### Related Concepts
- %%Governance|governance%%
- %%Governor|policy-governor%%
- %%Policy|policy%%
- %%Digital Policy|digital-policy%%
- %%Transaction Data Discloser Policy|transaction-data-collector-policy%%
- %%Transaction Data Collector Policy|transaction-data-collector-policy%%
- %%Verifier Policy|verifier-policy%%
- %%Issuer Policy|issuer-policy%%
- %%Holder Policy|holder-policy%%
- %%Wallet Policy|wallet-policy%%