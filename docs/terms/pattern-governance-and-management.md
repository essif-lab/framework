---
id: pattern-governance-and-management
title: "Governance and Management"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: pattern
termid: governance-and-management
formphrases: governance-and-management
status: draft
grouptags:
hoverText: "The Governance and Management pattern explains how Parties organize that their Objectives are realized, either by doing the associated work themselves, or by arranging for other Parties to do that."
date: 20210830
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Purpose
The **Governance and Management pattern** captures the concepts and relations that explain how %%parties|party%% organize that %%their|owner%% %%objectives|objective%% are realized, either by doing the associated work themselves (%%management|management%%), or by arranging for other %%parties|party%% to do that (%%governance|governance%%). The contribution of this pattern is to show how this is done, based on the idea that every %%objective|objective%% is %%owned|owned%% by a single %%party|party%%.

### Introduction

Whether or not an %%objective|objective%% is realized can be seen by the status of the associated results, as is explained [there](../terms/objective). The following figure is a recap of the %%objective|objective%%-concept (using the usual **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**):

<p align="center">
<img
  alt="A Party's Objectives"
  src={useBaseUrl('images/essif-lab-objective.png')}
/><i>Figure 1. Parties and their objectives.</i>
</p>

The core property of this model is that every %%objective|objective%% has precisely one %%owner|owner%%, which is the %%party|party%% that pursues the realization of the associated results, from one (or both) of the two following perspectives:

1. the _**production**_, _**supply**_, or _**%%management|management%%**_ perspective. This is the perspective in which the %%owner|owner%% of the %%objective|objective%% will itself be %%managing|management%% the creation (or maintenance) of the results associated with the %%objective|objective%%. This entails the creation of (product) specifications and %%working instructions|policy%%, organizing that budgets and other production resources become available and are planned, and everything else to ensure the results will be ready to be provided to parties that will actually use them. This may include developing performance indicators, i.e. gauges that measure how well the resources are spent in this production/maintenance work, which may help managers to do their work. We will use the term '%%management|management%%' to refer to these %%activities|action%%, and the term '%%manager|management%%' to refer to the role of a %%party|party%% that performs such activities.

2. the _**consumption**_, _**demand**_, or _**%%governance|governance%%**_ perspective. This is the perspective in which the %%owner|owner%% of the %%objective|objective%% wants to actually use the results associated with the %%objective|objective%%. This entails specifying the kinds of results as well as criteria that such results must satisfy (or are nice to have satisfied) in order to be fit for the purpose(s) that the %%owner|owner%% wants to use them for. Such criteria may pertain to timelines (deadlines), security, quality, sustainability, etc. This may include developing 'effectiveness indicators', i.e. gauges that measure how 'fit' the results are to be used/consumed for the intended purposes, are also part of this %%governance|governance%%. We will use the term '%%governance|governance%%' to refer to these %%activities|action%%, and the term '%%governor|governance%%' to refer to the role of a %%party|party%% that performs such activities.

### Governance and Management

When a %%party|party%% both %%manages|management%% and %%governs|governance%% an %%objective|objective%%, it is in full control of the production and the usability of the associated results. This is easy to do when compared to the situation in which a %%party|party%% either %%manages|management%% or %%governs|governance%% its %%objective|objective%%, but not both. This governance and management pattern focuses on the latter situation. The following figure illustrates this situation:

<p align="center">
<img
  alt="governance and management"
  src={useBaseUrl('images/essif-lab-governance-and-management.png')}
/><i>Figure 1. Governing and Managing objectives.</i>
</p>

The figure shows four %%parties|party%%, distinguished by color - let's call them Red, Yellow, Blue and Green. We assume that each party %%owns|owner%% multiple %%objectives|objective%%, but in the figure we only show a single one, each of which with a description that %%identifies|identify%% that %%objective|objective%% from the set of %%objectives|objective%% of each %%party|party%%. The figure also shows one of the results associated with each of these %%objectives|objective%%, again phrased such that the %%objective|objective%% %%owner|owner%% knows what this really %%means|semantics%%. So, Red %%governs|governance%% an %%objective|objective%% that it describes as "Get a transportation means for work-travel". The associated result "transportation means" then doesn't come as a surprise.

Red, who %%governs|governance%% its %%objective|objective%% can realize the result by 'scouring the market' to find a %%party|party%% that is capable and willing to provide things that Red qualifies as "transportation means" and that hence constitute the result it wants. Note that Yellow also needs to realize a result "transportation means", in order to realize her objective "Ability to move trash from A to B". Both Blue and Green produce results, i.e. a "car + lease contract" and a "sharing deal" respectively.

The essence of this figure is to show that %%parties|party%% that consume a result and %%parties|party%% that produce a result have a matching issue.

From the perspective of the consuming party, the result produced by a producing party must qualify as a result that it needs. %%Governing|governance%% an %%objective|objective%% is basically specifying a result in such a way that it is fit for purpose, i.e. realizes the objective, AND finding a result that is produced by some %%party|party%% that qualifies as such, and that it can obtain. For Red (and Yellow) this means that they need to determine whether or not the results that Blue and Green produce qualify, and engage with either if that is the case. If not, they must either find other producers whose results do match, or they have to find an alternative result for realizing their objectives.

From the perspective of the producing party, producing a result is only meaningful if it is actually used. %%Managing|management%% an %%objective|objective%% is basically producing a result in such a way that there is (at least) one party that needs it. This is not only about producing things, but also about finding out what makes the produced result fit for the (various) purposes of (potential) consuming parties.

### Matching

Matching (of (the results of) %%objectives|objective%%) is the process in which a producer and consumer interact to establish whether or not a produced result (of the producing party) qualifies as a consumable result (of the consuming party). In other words, matching is the process in which an %%expectation|expectation%% of one %%party|party%% (the consumer) and an %%obligation|obligation%% of another %%party|party%% (the producer) are aligned, such that the produced results are fit to serve the purposes of the consumer. We say that there is a mismatch associated with an %%expectation|expectation%% or %%obligation|obligation%% of one %%party|party%% if there is no corresponding %%obligation|obligation%% or %%expectation|expectation%% of another %%party|party%% that is aligned with the first.

This matching process can take many different forms, which can readily be observed in practice. A very simple example is where a %%party|party%% (the consumer) has an %%objective|objective%% to get a loaf of bread, which he decides to obtain from a baker. Thus, he needs to find a baker that he %%expects|expectation%% to produce the bread, and communicate this %%expectation|expectation%% (preferably with the fit-for-purpose criteria), so that the baker can determine whether or not 'oblige', which can either be the creation of a new %%obligation|obligation%% (e.g. in case it is very special bread that he doesn't normally produce) that matches the consumer's %%expectation|expectation%%, or it can be the choosing of an existing %%obligation|obligation%% that they both agree aligns sufficiently well with that %%expectation|expectation%%. Either way, the consumer and the baker now have an aligned pair of %%objectives|objective%%, one being an %%expectation|expectation%% (of the consumer towards the baker) and another being an %%obligation|obligation%% (of the baker towards the consumer).

This mechanism of
- communicating an %%expectation|expectation%% or %%obligation|obligation%% to another %%party|party%%;
- this other %%party|party%% either creating a possibly matching %%obligation|obligation%% or %%expectation|expectation%%;
- both %%parties|party%% discussing, and changing their %%expectation|expectation%% and %%obligation|obligation%% until they either agree that there's a match, or one of them quitting the process,
is the essence of the matching process. As an aside, note that this matching process constitutes a confluence of governance (changing one's %%expectations|expectation%%) and management (changing one's %%obligations|obligation%%); that may explain the difficulty that people may have in distinguishing between %%governance|governance%% and %%management|management%%.

In practice, %%parties|party%% that communicate in the context of a matching process will typically have multiple and interrelating %%expectations|expectation%% and %%obligations|obligation%% towards each another. In the previous example, the baker will not only have an %%obligation|obligation%% towards the consumer to deliver bread, but he will also have an %%expectation|expectation%% towards the consumer that the latter will pay him some amount of money. So there are two pairs (%%expectation|expectation%%, %%obligation|obligation%%), going in opposite directions, and both pairs need to be sufficiently aligned for their respective %%owners|owner%% to commit to them.

### Relation management

One might say that a relation between two such %%parties|party%% is determined by the pairs of (%%expectation|expectation%%, %%obligation|obligation%%) that they have towards each other, and the judgements about, and characteristics they attribute to one another (i.e. their mutual %%partial identities|partial-identity%%). In the example, the consumer and baker may find that they regularly have the same %%expectations|expectation%% and %%obligations|obligation%% towards one another and that they are always fulfilled. Based on that, they may characterize each other as being trustworthy, or being a good baker/consumer.

%%Partial identities|partial-identity%% that are %%owned|owned%% by a %%party|party%% and the %%risk management|risk-management%% processes it runs, are related. A major influencer of how this %%party|party%% behaves is the assessment of the %%risk levels|risk-level%% associated with the %%expectations|expectation%% and %%obligations|obligation%% that it has towards another, or - perhaps equivalently - by its judgements about the trustworthiness of the other, i.e. the %%levels of trust|trust-level%% that it has in the other %%party|party%% fulfilling its corresponding %%obligations|obligation%% and %%expectations|expectation%%. And typically, the %%partial identity|partial-identity%% that the %%party|party%% %%owns|owner%% about the other, is going to be revised based on the experiences this %%party|party%% has as it interacts with the other. Perhaps one may say that relation management is the %%management|management%% of the %%partial identities|partial-identity%% of %%parties|party%% that a %%party|party%% interacts with as it sets %%expectations|expectation%% and %%obligations|obligation%% towards such %%parties|party%% and experiences the extent to which such other %%parties|party%% fulfill them.

A %%party|party%% may decide to set %%objectives|objective%% for the purpose of 'optimizing' the set of relationships that it has with others, the result of which would be that it would seek to preferably (if not exclusively) interact only with %%parties|party%% that it can %%trust|trust%% to fullfil its %%obligations|obligation%% and %%expectations|expectation%%. Realization of such objectives would be called 'relation management', and is obviously tightly linked to the %%management|management%% of the %%partial identities|partial-identity%%.

### Resilience

Resilience is the [capability](capability@) of adapting one's %%objectives|objective%% (and associated behavior) as one's context changes, in such a way that its %%mission|mission%%, i.e. its most important and valued %%objective(s)|objective%% (which typically include one's "raison d'être" - the reason for one's existence), can continue to be realized. The %%objectives|objective%% a %%party|party%% will adapt are the %%expectations|expectation%%, %%obligations|obligation%% and %%control objectives|control-objective%% that serve to realize its %%mission|mission%%.

While small changes in one's %%objectives|objective%% (%%control objectives|control-objective%%, %%expectations|expectation%% and %%obligations|obligation%%) are typically considered part of %%risk management|risk-management%%, resilience is about making major changes. For example, consider a baker whose %%mission|mission%% is to have fun and to ensure he has no more money (and worries) than strictly necessary to have that fun. At first, he decided that this meant the creation and maintenance of a bakery with a shop (a %%control objective|control-objective%% for its %%mission|mission%%), which in turn has other %%control objectives|control-objective%%, and %%expectations|expectation%% (e.g. towards suppliers of flour, yeast, etc.), and %%obligations|obligation%% (e.g. towards its customers to provide them with bread, cake, etc.). If for some reason his customers no longer show up, he may decide to start baking pottery, or become a fisherman, which constitutes a significant overhaul of a (very) large part of its %%objectives|objective%%.