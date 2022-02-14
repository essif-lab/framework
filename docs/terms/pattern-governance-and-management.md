---
id: pattern-governance-and-management
title: "Governance and Management"
scopeid: essifLab
type: pattern
typeid: governance-and-management
stage: draft
hoverText: "The Governance and Management pattern explains how Parties organize that their Objectives are realized, either by doing the associated work themselves, or by arranging for other Parties to do that."
date: 20210830
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Purpose
The **Governance and Management pattern** captures the concepts and relations that explain how %%parties|party%% organize that %%their|owner%% %%objectives|objective%% are realized, either by doing the associated work themselves (%%management|management%%), or by arranging for other %%parties|party%% to do that (%%governance|governance%%). The contribution of this pattern is to show how this is done, based on the idea that every %%objective|objective%% is %%owned|owned%% by a single %%party|party%%.

### Introduction

Whether or not an %%objective|objective%% is realized can be seen by the status of the associated results, as is explained [there](../terms/objective). The following figure is a recap of the %%objective|objective%%-concept (using the usual **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**):

<img
  alt="A Party's Objectives"
  src={useBaseUrl('images/essif-lab-objective.png')}
/>

*Figure 1. Parties and their %%objectives|objective%%.*

The core property of this model is that every %%objective|objective%% has precisely one %%owner|owner%%, which is the %%party|party%% that pursues the realization of the assocated results, from one (or both) of the two following perspectives:

1. the _**production**_, _**supply**_, or _**%%management|management%%**_ perspective. This is the perspective in which the %%owner|owner%% of the %%objective|objective%% will itself be %%managing|management%% the creation (or maintenance) of the results associated with the %%objective|objective%%. This entails the creation of (product) specifictions and %%working instructions|policy%%, organizing that budgets and other production resources become available and are planned, and everything else to ensure the results will be ready to be provided to parties that will actually use them. This may include developing performance indicators, i.e. gauges that measure how well the resources are spent in this production/maintenance work, which may help managers to do their work. We will use the term '%%management|management%%' to refer to these %%activities|action%%, and the term '%%manager|management%%' to refer to the role of a %%party|party%% that performs such activities.

2. the _**consumption**_, _**demand**_, or _**%%governance|governance%%**_ perspective. This is the perspective in which the %%owner|owner%% of the %%objective|objective%% wants to actually use the results associated with the %%objective|objective%%. This entails specifying the kinds of results as well as criteria that such results must satisfy (or are nice to have satisfied) in order to be fit for the purpose(s) that the %%owner|owner%% wants to use them for. Such criteria may pertain to timelines (deadlines), security, quality, sustainability, etc. This may include developing 'effectiveness indicators', i.e. gauges that measure how 'fit' the results are to be used/consumed for the intended purposes, are also part of this %%governance|governance%%. We will use the term '%%governance|governance%%' to refer to these %%activities|action%%, and the term '%%governor|governance%%' to refer to the role of a %%party|party%% that performs such activities.

### Governance and Management

When a %%party|party%% both %%manages|management%% and %%governs|governance%% an %%objective|objective%%, it is in full control of the production and the usability of the associated results. This is easy to do when compared to the situation in which a %%party|party%% either %%manages|management%% or %%governs|governance%% its %%objective|objective%%, but not both. This governance and management pattern focuses on the latter situation. The following figure illustrates this situation:

<img
  alt="governance and management"
  src={useBaseUrl('images/essif-lab-governance-and-management.png')}
/>

*Figure 1. Governing and Managing objectives.*

The figure shows four %%parties|party%%, distinguished by color - let's call them Red, Yellow, Blue and Green. We assume that each party %%owns|owner%% multiple %%objectives|objective%%, but in the figure we only show a single one, each of which with a description that %%identifies|identify%% that %%objective|objective%% from the set of %%objectives|objective%% of each %%party|party%%. The figure also shows one of the results associated with each of these %%objectives|objective%%, again phrased such that the %%objective|objective%% %%owner|owner%% knows what this really %%means|semantics%%. So, Red %%governs|governance%% an %%objective|objective%% that it describes as "Get a transportation means for work-travel". The associated result "transportation means" then doesn't come as a surprise.

Red, who %%governs|governance%% its %%objective|objective%% can realize the result by 'scouring the market' to find a %%party|party%% that is capable and willing to provide things that Red qualifies as "transportation means" and that hence constitute the result it wants. Note that Yellow also needs to realize a result "transportation means", in order to realize her objective "Ability to move trash from A to B". Both Blue and Green produce results, i.e. a "car + lease contract" and a "sharing deal" respectively.

The essence of this figure is to show that %%parties|party%% that consume a result and %%parties|party%% that produce a result have a matching issue.

From the perspective of the consuming party, the result produced by a producing party must qualify as a result that it needs. %%Governing|governance%% an %%objective|objective%% is basically specifying a result in such a way that it is fit for purpose, i.e. realizes the objective, AND finding a result that is produced byt some %%party|party%% that qualifies as such, and that it can obtain. For Red (and Yellow) this means that they need to determine whether or not the results that Blue and Green produce qualify, and engage with either if that is the case. If not, they must either find other producers whose results do match, or they have to find an alternative result for realizing their objectives.

From the perspective of the producing party, producing a result is only meaningful if it is actually used. %%Managing|management%% an %%objective|objective%% is basically producing a result in such a way that there is (at least) one party that needs it. This is not only about producing things, but also about finding out what makes the produced result fit for the (various) purposes of (potential) consuming parties.

### Matching

Matching (of (the results of) %%objectives|objective%%) is the process in which a producer and consumer interact to establish whether or not a produced result (of the producing party) qualifies as a consumeable result (of the consuming party).

This matching process can take many different forms. One is that a producing party advertises the kinds of results it produces in an attempt to attract consuming parties that qualify them as something they can use/consume. Another one is that a consuming party can tender for a result it needs, in an attempt to attract producing parties to produce such a result. And then there is the ad-hoc way, where two parties meet and find out by chance that one produces results that the other needs.

The matching process can be a one-off, which is the case e.g. when buying a product. However, it can also be a continous process, e.g., in the case where a service is purchased. In the latter case, matching may include monitoring the service levels that the service provider realizes to ensure the service still qualifies as a result that realizes the consumers' objective.

Matching is a process that can be readily observed in practice.