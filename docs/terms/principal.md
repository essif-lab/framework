---
id: principal
title: "Principal"
scopeid: essifLab
displayed_sidebar: essifLabSideBar
type: concept
typeid: principal
symphrase: principal{ss}
stage: draft
hoverText: "Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party)."
glossaryText: "the %%party^party%% for whom, or on behalf of whom, the %%actor^actor%% is executing an %%action^action%% (this %%actor^actor%% is then called an %%agent^agent%% of that %%party^party%%)."
date: 20210601
---

### Short Description
A **principal** (of an %%actor|actor%%) is a %%party|party%% on whose behalf the %%actor|actor%% is executing an %%action|action%%. As, and in the context where the %%actor|actor%% is doing this, we say that the %%party|party%% fulfills the role of %%principal|principal%% for that %%actor|actor%%. We also say that the %%actor|actor%% fulfills the role of %%agent|agent%% for that %%party|party%%.

Being a %%principal|principal%% (or %%agent|agent%% for that matter) is a %%role|role%% (characteristic/property) that a %%party|party%% (or an %%actor|actor%%, respectively) only has at a point in time where the %%actor|actor%% is _actually executing an %%action|action%%_ on behalf of that %%party|party%%. At any point in time, a %%party|party%% can fulfill the %%role|role%% of %%principal|principal%% for many %%actors|actor%%, depending on the amount of %%actions|action%% that are being executed on its behalf.

%%Principals|principal%% are expected to provide its %%agents|agent%% with the %%policies|policy%% that provide the %%agents|agent%% with the rules, working-instructions, preferences and other guidance that they need to comply with when exeucting the action. This, and relations with other concepts are described in the %%Parties, Actors and Actions pattern|pattern-party-actor-action%%.

### Purpose
The purpose of being able to distinguish between %%parties|party%% that are, and that are not fulfilling the %%role|role%% of %%principal|principal%% (of the %%actor|actor%% that is exeucting some %%action|action%%), is that it is instrumental in discussions about who is (not) responsible/accountable for that %%action|action%% - including the way in which the %%action|action%% is executed, as well as the results produced by that %%action|action%%.

### Criterion
The **principal** (of an %%actor|actor%%) is the %%party|party%% for whom the %%actor|actor%% is an %%agent|agent%%, i.e. on whose behalf the %%actor|actor%% is (in the process of) executing some %%action|action%%.

### Examples

- When a %%person|human-being%% (as an %%actor|actor%%) is doing something on its own behalf (as a %%party|party%%), it is both its own %%agent|agent%% and its own %%principal|principal%%.
- When a %%person|human-being%% does things for his %%employer|employer%% the %%employer|employer%% is that %%person's|human-being%% %%principal|principal%%.
- when an ambassador acts in its capacity as ambassador, the country for which (s)he is ambassador is his/her %%principal|principal%%.
- When the tax return form for a %%person|human-being%% or %%organization|organization%% is filled in by some other %%person|human-being%%, the latter acts as an %%agent|agent%% for that %%person|human-being%% or %%organization|organization%%, which is then the %%principal|principal%%.
- A company that makes cars is the %%principal|principal%% of the robots that it uses to weld parts of a car together - but only when these robots are actually welding parts together.
- A retailer (%%organization|organization%%) is the %%principal|principal%% of a (running) webserver that accepts product orders.
- A wallet app that runs on a phone and that is exclusively used by a single %%person|human-being%% acts as a (digital) %%agent|agent%% for that %%person|human-being%%, and the latter is its %%principal|principal%%.
- When an enterprise hires an accountancy-firm to produce an accountants-report, and the latter assigns an accountant the task to actually do this, and if the accountant does so as an %%employee|employee%% that `works for` the accountancy-firm (see the %%parties, actors and actions model|pattern-party-actor-action%%), then the accountant acts as an %%agent|agent%% and the accountancy-firm would be the %%principal|principal%%. However, the accountant could also be 'outsourced' to the enterprise (in which case the enterprise would have %%onboarded|onboarding%% the accountant) specifically for producing the accountants-report, then the accountant would be an %%agent|agent%% for the enterprise, and the latter would be its %%principal|principal%%.
