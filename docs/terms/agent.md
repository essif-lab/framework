---
id: agent
title: "Agent"
scopeid: essifLab
displayed_sidebar: essifLabSideBar
type: concept
typeid: agent
symphrase: agent{ss}, digital-agent{ss}
stage: draft
hoverText: "Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor)."
glossaryText: "an %%actor^actor%% that is executing an %%action^action%% on behalf of a %%party^party%% (called the %%principal^principal%% of that %%actor^actor%%)."
date: 20210601
---

### Short Description
An **agent** (of a %%party|party%%) is an %%actor|actor%% that is executing an %%action|action%% on behalf of that %%party|party%%. As, and in the context where the %%actor|actor%% is doing this, we say that it fulfills the role of %%agent|agent%% for that %%party|party%%. We also say that the %%party|party%% fulfills the role of %%principal|principal%% (for that %%actor|actor%%).

Being an %%agent|agent%% (or %%principal|principal%% for that matter) is a %%role|role%% (characteristic/property) that an %%actor|actor%% (or a %%party|party%%, respectively) only has at a point in time where the %%actor|actor%% is _actually executing an %%action|action%%_ on behalf of that %%party|party%%.

During the time interval in which the action is executed, the actor may execute other actions in other execution-contexts, on behalf of the same or another %%party|party%%. However, for the execution of a single %%action|action%%, the %%actor|actor%% is an %%agent|agent%% for precisely one %%principal|principal%%.

%%Agents|agent%% are expected to access (and hence have access to) the %%policies|policy%% that their respective %%principals|principal%% provide in order for these %%agents|agent%% to execute %%actions|action%% in compliance therewith. This, and relations with other concepts are described in the %%Parties, Actors and Actions pattern|pattern-party-actor-action%%.

### Purpose
The purpose of the concept %%agent|agent%% is that it is an enabler for the capability of determining its %%principal|principal%%, because it is an %%actor|actor%% with the property that it is executing some %%action|action%% on behalf of a %%party|party%%) - its %%principal|principal%%. The relevance of this capability finds its origin in the fact that it is not the %%actor|actor%% that is held accountable for the %%actions|action%% it executes, but the %%party|party%% on whose behalf they are are executed.
### Criterion
**Agent** is a %%role name|role-name%% that generically refers to an %%actor|actor%% that is executing some %%action|action%% on behalf of a %%party|party%%.

### Examples

- When a %%person|human-being%% (as an %%actor|actor%%) is doing something on its own behalf (as a %%party|party%%), it is both its own %%agent|agent%% and its own %%principal|principal%%.
- A %%person|human-being%% that does things for his %%employer|employer%% acts as an %%agent|agent%% for that %%employer|employer%%.
- An ambassador, when (s)he is 'in function', acts as an %%agent|agent%% for the country for which (s)he is ambassador.
- A %%person|human-being%% that fills in the tax return form for another %%person|human-being%% or %%organization|organization%% acts as an %%agent|agent%% for that %%person|human-being%% or %%organization|organization%%.
- A company that makes cars may use robots that weld parts of a car together; whenever these robots are welding parts together, they acts as %%agents|agent%% for that company.
- A (running) webserver that accepts product orders for a retailer acts as a (digital) %%agent|agent%% for that retailer.
- A wallet app that runs on a phone and that is exclusively used by a single %%person|human-being%% acts as a (digital) %%agent|agent%% for that %%person|human-being%%, and the latter is its %%principal|principal%%.
- When an enterprise hires an accountancy-firm to produce an accountants-report, and the latter assigns an accountant the task to actually do this, and if the accountant does so as an %%employee|employee%% that `works for` the accountancy-firm (see the %%parties, actors and actions model|pattern-party-actor-action%%), then the accountant acts as an %%agent|agent%% and the accountancy-firm would be the %%principal|principal%%. However, the accountant could also be 'outsourced' to the enterprise (in which case the enterprise would have %%onboarded|onboarding%% the accountant) specifically for producing the accountants-report, then the accountant would be an %%agent|agent%% for the enterprise, and the latter would be its %%principal|principal%%.
