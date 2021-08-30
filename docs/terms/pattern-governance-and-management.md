---
id: pattern-governance-and-management
title: "Governance and Management"
scopeid: essifLab
type: pattern
typeid: manage-and-govern
stage: draft
hoverText: "The Governance and Management pattern explains how Parties organize that their Objectives are realized, either by doing the associated work themselves, or by arranging for other Parties to do that."
date: 20210830
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Purpose
The **Governance and Management pattern** captures the concepts and relations that explain how %%parties|party%% organize that %%their|owner%% %%objectives|objective%% are realized, either by doing the associated work themselves, or by arranging for other %%parties|party%% to do that. The contribution of this pattern is to show how this is done, based on the idea that every %%objective|objective%% has a single %%party|party%% that %%owns|owner%% the %%objective|objective%%.

### Introduction

Whether or not an %%objective|objective%% is realized can be seen by the status of the associated results, as is explained [there](objective). The following figure is a recap of the %%objective|objective%%-concept (using the usual [notations and conventions](../notations-and-conventions#pattern-diagram-notations)):

<img
  alt="A Party's Objectives"
  src={useBaseUrl('images/essif-lab-objective.png')}
/>

*Figure 1. Parties and their %%objectives|objective%%.*

Note that there are two 'sides' to each objective (and their results):

1. the _**production**_ side. Here, it is important that the budgets and other resources are planned, and made available _to produce the results_. This includes the specification of timelines (deadlines) for the production, as well as the properties and other characteristics (security, quality, sustainability, etc.) of what is actually being produced/maintained. It also deals with making the tools and %%policies|policy%% (e.g. working instructions) available for doing all this. We will use the term 'management' to refer to these %%activities|action%%, and the term '%%manager|management%%' to refer to the role of a %%party|party%% that performs such activities. Hence, developing performance indicators, i.e. gauges that measure how well the resources are spent in this production/maintenancd work are also part of this.

2. the _**consumption**_ side. Here, it is important that the budgets and other resources are planned, and made available _to (obtain and to) actually use the results_. This includes the specification of timelines (deadlines) for the results to become available, as well as the properties and other characteristics (security, quality, sustainability, etc.) that results must have in order to make them effective ('fit for purpose' - fit to be used as intended by the consuming %%party|party%%). We will use the term '%%governance|governance%%' to refer to these %%activities|action%%, and the term '%%governor|governance%%' to refer to the role of a %%party|party%% that performs such activities. Hence, developing effectiveness indicators, i.e. gauges that measure how 'fit' the results are to be used/consumed for the intended purposes, are also part of this %%governance|governance%%.

A %%party|party%% that %%owns|owner%% an %%objective|objective%% gets to decide whether he will do the production side, the consumption side, or both. The easiest is if the party chooses to do both, thus not only creating/maintaining specific results, but also actually using them. What makes this easy is that coordination between 'supply' (the production side) and 'demand' (the consumption side) is done within one %%knowledge|knowledge%%, i.e. the %%knowledge|knowledge%% of the %%party|party%% that %%owns|owner%% the %%objective|objective%%. Coordination between budgets, timelines, the characteristics of the results, etc., are much easier when all this gets to be decided by a single %%party|party%%.

### Managing and Governing

The following figure illustrates the situation where this is not the case (using the usual [notations and conventions](../notations-and-conventions#pattern-diagram-notations)):

<img
  alt="managing and governing"
  src={useBaseUrl('images/essif-lab-governance-and-management.png')}
/>

*Figure 1. Managing and governing objectives.*

When a %%party|party%% decides to outsource the production side, he must then find another %%party|party%% to do that for him. We say that the %%objective|objective%%, the results of which are to be realized by that other party, is an 'expectation' of the first %%party|party%%. So an 'expectation' is an %%objective|objective%% that is %%owned|owned%% by a %%party|party%% that does not itself realizes the associated results. Assuming that every %%objective|objective%% is to be meaningful to its %%owner|owner%%, we conclude that this %%party|party%% is (one of) the consumer(s) of these results, and hence will %%govern|governance%% this/its %%objective|objective%%, but not manage it. This %%party|party%% may find it useful to communicate its needs (e.g. the timelines/deadlines, the characteristics that makes the results 'fit-for-purpose', etc.) to the %%party|party%% that it requests to produce these results, as this makes it easier for that party to do so.

If such a %%party|party%% accepts the request (to realize some results), it will have created an %%objective|objective%% (that it %%owns|owner%% itself), that is associated with the results that it is going to produce, and the associated specification of timelines, characteristics etc. A %%party|party%% may also decide to realize some results without any explicit request - and even if it does not intend to use/consume them itself. We will refer to an %%objective|objective%%, the results of which are realized by its %%owner|owner%%, as an 'obligation' of that %%owner|owner%%.

The main contribution of this pattern lies in
- the observation that in any case where the consumer/user of a result (product/service) and the producer/maintainer thereof are different %%parties|party%%, each of them have their %%own|owner%% %%objective|objective%% that is associated with a result (specification), and
- the consequence thereof that, since such %%objectives|objective%% are part of a different %%knowledge|knowledge%%, one must not assume that they are the same.

As a consequence, %%parties|party%% that %%govern|governance%% an %%objective|objective%% of theirs but do not manage it, should ensure that the results that the producer is realizing are in fact fit for purpose. Conversely, %%parties|party%% that manage an %%objective|objective%% of theirs but do not %%govern|governance%% it, should ensure they know which other %%parties|party%% will use the results, and what makes them fit for (their) purposes.

The processes for governing and/or managing of objectives can be controlled by deploying a suitable %%control process|control-process%%.