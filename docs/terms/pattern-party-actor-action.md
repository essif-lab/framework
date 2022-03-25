---
id: pattern-party-actor-action
title: "Parties, Actors and Actions"
scopeid: essifLab
type: pattern
typeid: party-actor-action
symphrase: party-actor-action
stage: draft
hoverText: "The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'."
glossaryText: "'Who/what does things?', 'How are their %%actions^action%% being guided/%%controlled^controller%%?', 'Who %%controls^controller%% whom/what?', 'Who/what may be held accountable?'."
date: 20210602
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## Summary
This pattern captures the essence of how things are done. It answers questions such as: "Who/what does things?", "How are their %%actions|action%% being guided/%%controlled|controller%%?", "Who %%controls|controller%% whom/what?", "Who/what may be held accountable?". These questions need to have a precise answer if you want to design or implement systems where %%actors|actor%% can be anything, ranging from programs/apps running on computers as well as %%humans|human-being%%. This pattern provides a way of looking at %%organizations|organization%%, %%people|human-being%%, and non-human %%actors|actor%%. It shows how they interact with one another, and how they may or may not work for one another. The pattern descibes how %%parties|party%% are '%%(self) sovereign|self-sovereignty%%' as they construct their own world view, reason with that, and make their (subjective) decisions autonomously. It also shows how this %%knowledge|knowledge%% is used, where it is used, and also: where it is not used. The latter implies that %%parties|party%% have a limited %%scope of control|scope-of-control%%, which gives rise to their need to work together with other %%parties|party%%, that have their own sovereignty. Such interactions with others, however, are outside the scope of this pattern.

## Purpose
In order for %%people|human-being%% or %%organizations|organization%% to decide what to do (themselves), what to ask others to do (for which these others generally require some form of compensation, how to know that the associated %%risks|risk%% are worth taking, this pattern provides a simple %%mental model|pattern%% that provides the basis for thinking/reasoning about such questions. The %%pattern|pattern%% is expected to be helpful to those that think about designing complex systems (systems of systems) that are owned by different parties, and in which both %%human|human-being%% and non-human %%actors|actor%% take part.

## Introduction
One may readily observe that in some way, %%people|human-being%% and %%organizations|organization%% are similar. This is indicated e.g. by the notion of 'personality' that many %%legal jurisdictions|legal-jurisdiction%% assign to (specific kinds of) %%organizations|organization%%. They can both be assigned rights and duties, be held accountable, and subjected to prosecution: they can sue and be sued.

%%People|human-being%% and %%organizations|organization%% are also different. %%People|human-being%% qualify as %%actors|actor%%, meaning that they can actually do things. %%People|human-being%% can drink beer or sign contracts, which %%organizations|organization%% cannot. %%Organizations|organization%% need %%actors|actor%% to do things on their behalf. Still, it is a common and accepted practice to say something like "[TNO](https://www.tno.nl/en/) has signed a contract", as if [TNO](https://www.tno.nl/en/) were an %%actor|actor%%. There is no problem with that, as long as we interpret such phrases to mean that the %%organization|organization%% that is said to act is actually using an %%actor|actor%% that acts on its behalf. So, "TNO has signed a contract" means that some %%actor|actor%% exists that has signed the contract on TNO's behalf.

So what is the characteristic that %%people|human-being%% and %%organizations|organization%% actually share? It is the fact that each has its own, subjective %%knowledge|knowledge%%, which it maintains in an %%autonomous, sovereign fashion|self-sovereignty%%, and the  means and ways to maintain that %%knowledge|knowledge%%, i.e. to acquire, generate or change its %%knowledge|knowledge%%, reason with it, make decisions (e.g. as to what constitutes a valid logic (= way of reasoning), what is (not) true, what (not) to %%trust|trust%%, etc.). Of course, %%organizations|organization%% will need %%actors|actor%% to do the actual work, but the resulting %%knowledge|knowledge%% is that of the %%organization|organization%%.

We use the term %%party|party%% to refer to entities that autonomously maintain a specific %%knowledge|knowledge%%, the typical examples of which are then %%people|human-being%% and %%organizations|organization%%. The relevance of this is that all decision making, information processing and the like, which is inherent to a %%knowledge|knowledge%%, must *therefore* be linked to the entity that maintains it (i.e.: a %%party|party%%).

This mental model is about how %%parties|party%% and %%actors|actor%% relate to one another, and how %%actions|action%% are executed by an %%actor|actor%% on behalf of, and using the %%knowledge|knowledge%% of, a %%party|party%%. The relevance of modeling this somewhat formally is that it will make it easier to build IT systems, where IT (that is running) qualifies as %%actors|actor%%, and %%people|human-being%% and %%organizations|organization%% (businesses, enterprises, governments) qualify as %%parties|party%%. We like to think this mental model contributes to bridging the gap between business and IT.

## Formalized model
Here is a visual representation of this pattern, using the usual **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**. Please not that in this pattern, the relation '**`is acting on behalf of`**' has synonyms in other patterns, including '*`acts on behalf of`*', '*`is executing on behalf of`*', '*`executes on behalf of`*', that should not be confused with the '**`works for`**' relation (as further explained below).

<img
 alt="Conceptual model of the 'Party-Actor-Action' pattern"
 src={useBaseUrl('images/patterns/pattern-party-actor-action.png')}
/>

### Organizations, human beings, and non-human actors

The model shows how we propose a change in perspective, one in which we no longer distinguish between %%people|human-being%% and %%organizations|organization%%, but rather between %%parties|party%% and %%actors|actor%%. The figure shows that %%organizations|organization%% and %%humans|human-being%% both qualify as %%parties|party%%, and that %%actors|actor%% consist of %%humans|human-being%% and non-human %%actors|actor%%.

We already mentioned that %%organizations|organization%% are not considered to be able to act: they need an %%actor|actor%% (human or non-human) to execute %%actions|action%% on their behalf. For a %%human|human-being%%, this means that we can say that it `is acting on behalf of` itself, which is readily verifiable. However, this model explicitly allows %%humans|human-being%% to also act on behalf of some other %%party|party%%: another %%human being|human-being%% or an %%organization|organization%%. Finally, for non-human actors (e.g. robots), this means that any %%action|action%% they may execute must have some %%party|party%% on whose behalf the %%action|action%% is executed.

### Parties, actors and ways they relate

When an %%actor|actor%% `is acting on behalf of` some %%party|party%%, we mean to say that it is actually in the process of executing a (single) %%action|action%%, which it executes on that (single) %%party's|party%% behalf. These constraints (a *single* %%action|action%% and a *single* %%party|party%%) allow for:
- assigning accountability for the execution of that %%action|action%% to a *single* %%party|party%%;
- that %%party|party%% to devise a %%policy|policy%% that specifies how that %%action|action%% is to be executed;
- an %%actor|actor%% to execute different %%actions|action%% on behalf of %%parties|party%% (i.e.: to multi-task for different %%parties|party%%), executing every %%action|action%% in the way that the respective %%parties|party%% expects.

In this mental model, we specify three ways in which %%parties|party%% and %%actors|actor%% can relate to each other:

1. The relation `is acting on behalf of` says which %%actor|actor%% is executing some %%action|action%% on behalf of what %%party|party%%. It is not relevant what the %%action|action%% is, as long as there is one. In this relation, the %%actor|actor%% plays the role of %%agent|agent%% (of that %%party|party%%), and the %%party|party%% plays the role of %%principal|principal%% (of that %%actor|actor%%). So, for every %%agent|agent%%-%%principal|principal%% pair, an %%action|action%% must exist that the %%agent|agent%% is executing on behalf of its %%principal|principal%%. Thus, this relation models what one might call 'operational representation' (see the %%party-representation pattern|pattern-party-representation%% for further details).

2. The relation `owns` says which %%party|party%% has a %%legal or rightful title to control (own)|owner%% the %%actor|actor%%. This would e.g. be the case if the %%actor|actor%% were a computer program (a running mail client or mail server, or an app running on a mobile device). We use the term '%%owns|owner%%' to relate a %%party|party%% with an %%actor|actor%% for which this is the case. In this relation '%%owns|owner%%', the %%actor|actor%% plays the role of the %%owned|owned%%, and the %%party|party%% plays the role of the %%owner|owner%%.

  Note that there are also other relations called `owns`, which always has a %%party|party%% that plays the role of %%owner|owner%%, but there are various %%entities|entity%% that can be %%owned|owned%%.

3. The relation `works for` relates the %%actors|actor%% and %%parties|party%% for which it is realistic that the %%actor|actor%% might act on behalf of what %%party|party%%. In this relation, the %%actor|actor%% plays the role of %%employee|employee%% (of that %%party|party%%), and the %%party|party%% plays the role of %%employer|employer%% (for the %%actor|actor%%). An obvious example is where a %%person|human-being%% is employed by some %%organization|organization%%. However, we also use this relation for non-human %%actors|actor%% (e.g. robots, computers) that might act on behalf of some %%party|party%%. We use the term %%onboarding|onboarding%% for the process by which an %%actor|actor%% gets to `work for` a %%party|party%%. This process produces an %%employment contract|employment-contract%% that specifies the rights and duties between the %%party|party%% that controls or %%owns|owner%% an %%actor|actor%% and the %%party|party%% that needs the %%actor|actor%% as one of its 'employees'.

### Actions, policies and objectives

Every %%party|party%% has its own mission (calling, vocation), and realizing that is often perceived as the reason for its existence (its "raison d'etre"). This is what drives them. It causes the %%party|party%% to set its (other, derived) %%objectives|objective%%, and determine how to realize them, e.g. by specifying the (units of) work, (i.e. %%actions|action%%) that produce the associated results, and by %%employing|onboarding%% %%actors|actor%% that are capable and suitable to do that work.

%%Actions|action%% are executed by a specific %%employee|employee%% in a specific context, i.e. a specific place and time, on behalf of a specific %%party|party%%. The fact that %%parties|party%% are autonomous suggests that each of them will have its own idea about how an %%action|action%% needs to be executed. Thus, we say that a %%party|party%% can devise %%policies|policy%% (as part of its %%knowledge|knowledge%%) that provide the rules, working-instructions, preferences and other guidance that enable its %%employees|employee%% to execute %%actions|action%% on its behalf in the ways it expects them to.

This does not imply that %%employees|employee%% cannot use %%knowledge|knowledge%% from other sources (%%parties|party%%) as well. In particular, %%human|human-being%% %%employees|employee%% can be relied on to have %%knowledge|knowledge%% to which artifacts such as certificates and diploma's testify. Non-human %%employees|employee%% may also be certified, or come with documentation stating their capabilities and capacities. %%Policy|policy%% authoring is thus a balancing act between the kinds of %%knowledge|knowledge%% that a %%party|party%% can rely on its %%employees|employee%% to have, and the additional guidance they would need if they are tasked with executing specific %%actions|action%%, so that the results thereof are 'fit for purpose', i.e. contribute to the realization of %%objectives|objective%% as the %%party|party%% expected.

The design of %%actions|action%%, the %%onboarding|onboarding%% of suitable %%actors|actor%%, their task assignments and results they produce are all subject to uncertainty that contribute to %%risks|risk%%. %%Risks|risk%% and the %%management|management%% thereof is discussed in the %%Governance, Risk Management and Compliance (GRC)|pattern-decentralized-grc%%.
