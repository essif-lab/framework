---
id: objective
title: "Objective"
scopeid: essifLab
type: concept
typeid: objective
stage: draft
hoverText: "Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action)."
glossaryText: "Something toward which a %%party^party%% (its %%owner^owner%%) directs effort (an aim, goal, or end of action)."
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Short Description
An **Objective** is something toward which a %%party|party%% (its %%owner|owner%%) directs effort (an aim, goal, or end of action). Typically, the realization of an objective can be observed in terms of results, e.g. products that have been produced, services that are being provided, a situation or state (e.g. happiness) that has been continued etc.

%%Ownership|ownership%% of the objective is implied, as it is part of that party's %%knowledge|knowledge%% (which is %%owned|owned%% by that party). Consequently, a single objective cannot be shared, as it would imply it had multiple %%owners|owner%%.

In order to communicate its objectives a %%party|party%% typically uses a text - a description of its intention, the aim, the goal, etc. In practice, people are known to confuse this description with the objective itself, which may cause them to think that two parties shared the same objective becasue these parties happen to use the same descriptive text. As mentioned before, that's not possible. However, it may be the case that two parties each have an objective that is similar to a very high degree. However, as each party can autonomously change the descriptive text, (the specification of) the results and any other attributes, it is obvious that what might seem to be the same objective is actually a set of (very) similar objectives.

We refer you to the %%Governance and Management pattern|pattern-governance-and-management%% for a description of how to think about objectives in contexts where there are multiple %%parties|party%%.

### Purpose
The ability to distinguish between (non)objectives is relevant as objectives are the drivers behind the reasoning and decisions that %%parties|party%% make, the %%policies|policy%% and working instructions that they specify so that its %%agents|agent%% know what to do, when to do it, and how to do it. Moreover, objectives are 1-1 associated with %%risks|risk%%. Finally, objectives must be known in order to obtain (personal) data according to the [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj).

### Criterion
An **objective** is something
- that is %%owned|owned%% by a single %party;
- toward which its %%owner|owner%% directs its efforts: an aim, goal, or end of action;
- that can be realized, and this realization can be seen in terms as the coming into existence of results (e.g. products that have been produced, services that are being provided, a situation or state (e.g. happiness) that has been continued etc.);
- that may have a description (text, that represents and identifies the objective within the %%knowledge|knowledge%% of its %%owner|owner%%)

### Examples
- generically: anything that, according to a %%party|party%% c.q. its way of thinking, is important to be realized or maintained, qualifies as an Objective (and identifies its owner as that %%party|party%%).
- most people have an objective that could be described as "to stay alive".
- the equivalent in %%organizations|organization%% is 'continuation of its existence' (many operate 'business-continuity processes' to realize this, and to identify and mitigate any associated risks).

### Formalization

Here is a visual representation of the formalization of this concept, using the following [notations and conventions](../notations-and-conventions#pattern-diagram-notations):

<img
  alt="A Party's Objectives"
  src={useBaseUrl('images/essif-lab-objective.png')}
/>

*Figure 1. Parties and their objectives.*

The figure shows that every objective has a single %%owner|owner%%, which is the %%party|party%% that uses it to direct its efforts to.

This %%party|party%% may describe the objective, typically in terms of a text (or speech). This description, while meaningful to this party (as it is party of its %%knowledge|knowledge%%), may not be meaningful to, or be misinterpreted by other parties.

Whether or not an objective is realised can be determined, also by other %%parties|party%%, by the results that must (continue to) exist. Such results can be products that have been produced, services that are (continuously) being provided, a situation or state (e.g. happiness) that has been continued etc. Results are typically auditable, and depending on the kind of result an auditor might establish their existence (and as the case may be: their (proper) design and/or operation).

A %%party|party%% can manage the objective, which means that it actually organizes (and executes) the work that needs to be done to produce the result. The party does so in its role of 'producer'. There can only be one such party. If there were more than one, they would necessarily produce different (albeit perhaps similar, or the same-in-kind) results, or they may end up having arguments about who is (really) 'in charge', i.e. who is the sole %%manager|management%%/producer.

The %%owner|owner%% of an objective is not necessarily its %%manager|management%%. It might outsource this work, e.g. order the product from another party, or delegate the work to another party.

In this case, we say that the %%owner|owner%% %%governs|governance%% the objective, which means that it specifies the results, and determines which %%party|party%% it wants to produce these results. It also implies that the owner will be using the results (in the role of 'consumer' of (the results of) the objective). After all, there is no point in setting an objective that one doesn't produce the results of, and also doesn't use these results for one or another purpose. So the %%owner|owner%% of an objective fulfills the producer and/or the consumer role for this objective, meaning that it will produce and/or consume the associated results.

As the producer, a party can add attributes to the objective that help it to produce the results. One may think of performance indicators (e.g. budgets and other resources, timelines, etc.), specifications of these results, attributes related to the quality, security, sustainance etc. of the results, and so on. This helps to keep tabs on the production, instruct the %%agents|agent%% it uses for doing the actual production, and communicate with consuming parties.

As a consumer, a party can add attributes to the objective that help it consume the results. Typically, this may include a list of purpose(s) and/or activities in which it wants/needs to use the results, and characteristics results must have (e.g. what one can actully do with them). This helps to make sure the results are available when they are actually needed, to inform the %%agents|agent%% of the consumer about this, and communicate with the producing party, specifically about the characteristics of the results that are required to make them fit for (the) purpose (for which the consumer wants to use them).

For more information, e.g. about how different %%parties|party%% interact in their roles of producer and consumer, we refer you to the %%Governance and Management pattern|pattern-governance-and-management%%.