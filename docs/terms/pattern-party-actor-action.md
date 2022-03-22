---
id: pattern-party-actor-action
title: "Parties, Actors and Actions"
scopeid: essifLab
type: pattern
typeid: Party-actor-action
stage: draft
hoverText: "The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'."
glossaryText: "'Who/what does things?', 'How are their %%actions^action%% being guided/%%controlled^controller%%?', 'Who %%controls^controller%% whom/what?', 'Who/what may be held accountable?'."
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Summary
This pattern captures the essence of how things are done. It answers questions such as: "Who/what does things?", "How are their %%actions|action%% being guided/%%controlled|controller%%?", "Who %%controls|controller%% whom/what?", "Who/what may be held accountable?". These questions need to have a precise answer if you want to design or implement systems where %%actors|actor%% can be anything, ranging from programs/apps running on computers as well as %%humans|human-being%%. This pattern provides a way of looking at %%organizations|organization%%, %%people|human-being%%, and non-human %%actors|actor%%. It shows how they interact with one another, and how they may or may not work for one another. The pattern descibes how %%parties|party%% are '%%(self) sovereign|self-sovereignty%%' as they construct their own world view, reason with that, and make their (subjective) decisions autonomously. It also shows how this %%knowledge|knowledge%% is used, where it is used, and also: where it is not used. The latter implies that %%parties|party%% have a limited %%scope of control|scope-of-control%%, which gives rise to their need to work together with other %%parties|party%%, that have their own sovereignty. Such interactions with others, however, are outside the scope of this pattern.

### Purpose
In order for %%people|human-being%% or %%organizations|organization%% to decide what to do (themselves), what to ask others to do (for which these others generally require some form of compensation, how to know that the associated %%risks|risk%% are worth taking, this pattern provides a simple %%mental model|pattern%% that provides the basis for thinking/reasoning about such questions. The %%pattern|pattern%% is expected to be helpful to those that think about designing complex systems (systems of systems) that are owned by different parties, and in which both %%human|human-being%% and non-human %%actors|actor%% take part.

### Introduction
One may readily observe that in some way, %%people|human-being%% and %%organizations|organization%% are similar. This is indicated e.g. by the notion of 'personality' that many %%legal jurisdictions|legal-jurisdiction%% assign to (specific kinds of) %%organizations|organization%%. It allows rights and duties to be assigned to people and %%organizations|organization%% alike. It also means that %%people|human-being%% and %%organizations|organization%% can be held accountable, and be subjected to prosecution: they can sue and be sued.

The main characteristic that %%people|human-being%% and %%organizations|organization%% share, is that they autonomously set (subjective) %%objectives|objective%%, maintain their own (subjective) %%knowledge|knowledge%%, and use that to pursue their %%objectives|objective%%. These characteristics make them qualify as %%parties|party%%.

One may also readily observe that in other ways, %%people|human-being%% and %%organizations|organization%% differ. For example, %%people|human-being%% eat and drink, whereas %%organizations|organization%% do not. %%People|human-being%% can sit behind a computer keyboard, type texts, hit the 'Enter' button, e.g. to send an email. %%Organizations|organization%% cannot do that. In short: %%people|human-being%% can act (do things), and hence qualify as %%actors|actor%%. %%Organizations|organization%% cannot do things (act) and hence do not qualify as an %%actor|actor%%. This is what sets %%people|human-being%% and %%organizations|organization%% apart.

#### %%Parties|party%% and %%Actors|actor%%

Notwithstanding that %%organizations|organization%% cannot act, it is quite common to hear statements that seem to imply that they can. If ACME is an %%organization|organization%% and someone says: "I just received mail from ACME", this cannot be literally true as %%organizations|organization%% cannot send messages. It is either a %%person|human-being%% or a computer system that has actually sent it. Statements such as these must therefor be interpreted in a figurative way, as a 'shorthand' for 'I just received mail that was sent by some %%actor|actor%% that was acting on behalf of ACME'.

When an %%actor|actor%% `is acting on behalf of` some %%party|party%%, we mean to say that it is actually in the process of executing a (single) %%action|action%%, which it executes on that (single) %%party's|party%% behalf. These constraints (a *single* %%action|action%% and a *single* %%party|party%%) allow for:
- assigning accountability for the execution of that %%action|action%% to a *single* %%party|party%%;
- an %%actor|actor%% to execute different %%actions|action%% for different %%parties|party%% (i.e.: to multi-task for different %%parties|party%%).

In this relation `is acting on behalf of`, the %%actor|actor%% plays the role of %%agent|agent%% (of that %%party|party%%), and the %%party|party%% plays the role of %%principal|principal%% (of that %%actor|actor%%). Note that for every %%agent|agent%%-%%principal|principal%% pair, an %%action|action%% must exist that the %%agent|agent%% is executing on behalf of its %%principal|principal%%.

This relation `is acting on behalf of` can also be phrased as `represents`, as the %%agent|agent%% is in fact representing its %%principal|principal%% when executing that %%action|action%%. The notion of representation is further elaborated on in the %%party-representation pattern|pattern-party-representation%%.

We also need to talk about %%actors|actor%% for which it is realistic that they might do something for some %%party|party%% at some point in time. We will use the term `work for` for %%actor|actor%%-%%party|party%% pairs that qualify. We see two basic ways for such a relationship to exist:

1. One way is where the %%party|party%% has a %%legal or rightful title to control (own)|owner%% the %%actor|actor%%.[^1] This would e.g. be the case if the %%actor|actor%% were a computer program (a running mail client or mail server, or an app running on a mobile device). We use the term '%%owns|owner%%' to relate a %%party|party%% with an %%actor|actor%% for which this is the case. In this relation '%%owns|owner%%', the %%actor|actor%% plays the role of the %%owned|owned%%, and the %%party|party%% plays the role of the %%owner|owner%%.

2. The second way is where an %%actor|actor%% `works for` a %%party|party%%, based e.g. on some kind of agreement or contract. A %%party|party%% can hire an %%actor|actor%% that it doesn't own, i.e. create arrangements with other %%parties|party%% that enable the %%actor|actor%% to work for that %%party|party%%. How such `works for` relationships may start or cease to exist, and be modified, is the topic of the (currently still envisaged) patterns on %%party representation|pattern-party-representation%%, and %%mandates, delegation and hiring|pattern-mandates-delegation-hiring%%.

#### Action Execution

%%Actions|action%% are executed in a specific context, i.e. a specific place and time, and a specific %%party|party%% on whose behalf the %%action|action%% is executed. The %%knowledge|knowledge%% of that %%party|party%% provides the %%policy|policy%%, i.e. the rules, working-instructions, preferences and other guidance that the %%actor|actor%% needs to execute the %%action|action%%. For example, sending a mail on behalf of some %%organization|organization%% may require that the mail template and logo of that %%organization|organization%% be used. Or accepting an order usually requires a check to see the order is 'clean', i.e. can be processed by others in the %%organization|organization%%. What a 'clean-order check' comprises is part of the knowledge of that organization.

The %%policies|policy%% that govern the execution of an %%action|action%% are part of the %%knowledge|knowledge%% of the %%party|party%% on whose behalf the %%action|action%% is being executed. As a concequence, an %%actor|actor%% that executes the %%action|action%% must be able to access (the knowledge that) the policy (is part of). Also, the %%actor|actor%% must use that policy as its primary guidance for executing the action.

Note that this does not imply that the %%actor|actor%% cannot use knowledge from other sources (parties) as well. In particular, %%human|human-being%% %%actors|actor%% are typically responsible (not necessarily accountable) for their doings and may hence use their own knowledge. They may also look for complementary, third %%party|party%% knowledge, e.g. on the Internet or in a library. However, using the %%principal's|principal%% knowledge as the primary guidance is important if that principal is to be held accountable.

#### Realizing %%Objectives|objective%%

Every %%party|party%% has its own mission (calling, vocation), and realizing that is often perceived as the reason for its existence (its "raison d'etre"). This is what drives them. It causes the %%party|party%% to set its (other, derived) %%objectives|objective%%, and determine how to realize them, e.g. by finding (and subsequently owning, or employing) %%actors|actor%% that can do the associated work, by establishing and maintaining the policies for the %%actions|action%% they will be tasked to execute, etc.

Setting %%objectives|objective%%, managing the associated %%risks|risk%% (i.e. 'effect of uncertainty on %%objectives|objective%%'), deciding about laws/regulations to comply with, etc., is the topic of %%Governance, Risk Management and Compliance (GRC)|pattern-decentralized-grc%%, which is outside the scope of this model.

### Formalized model
Here is a visual representation of this pattern, using the usual **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**. Please not that in this pattern, the relation '***is acting on behalf of***' has synonyms in other patterns, including '*acts on behalf of*', '*is executing on behalf of*', '*executes on behalf of*', that should not be confused with the '**works for**' relation (as further explained below).

<img
 alt="Conceptual model of the 'Party-Actor-Action' pattern"
 src={useBaseUrl('images/patterns/pattern-party-actor-action.png')}
/>

It shows that %%parties|party%% (%%humans|human-being%%, %%organizations|organization%%) perform %%actions|action%% for the purpose of realizing their %%objectives|objective%%. %%Parties|party%% are not considered to actually execute such %%actions|action%%; they have (%%human|human-being%% and non-human) %%actors|actor%% that work for them, execute such %%actions|action%%, using the %%party|party%%'s %%knowledge|knowledge%% as the (authoritative) guidance for executing the %%actions|action%% (as well as any other relevant %%knowledge|knowledge%% they can access).

The essential characteristic of %%parties|party%% is their 1-1 link with %%knowledge|knowledge%%, which they continually update and use e.g. for reasoning, decision making, and determining e.g. what to do, when, and with whom. %%Knowledge|knowledge%% not only includes (observable) facts, but also opinions, e.g. regarding the %%entities|entity%% it knows to exist, relations between them, and rules (constraints, [logic](https://en.wikipedia.org/wiki/Logic)[^2]) that can be used to classify and reason about them, and for making decisions.

One of the fundamental ideas in this pattern is that our %%party|party%% concept is not considered to (be able to) act. They need %%actors|actor%% (i.e. %%Entities|entity%% that _can_ act) to act on their behalf. We can nevertheless continue to use the commonly used form of speech in which a %%party|party%% is said to perform some %%action|action%%, by realizing that this is to be interpreted as that there is (at least) one %%actor|actor%% that is actually executing that %%action|action%% on behalf of this %%party|party%%.

Postulating that a %%party|party%% cannot act does, however, not preclude the existence of %%entities|entity%% that are both %%party|party%% and %%actor|actor%%. %%Humans|human-being%% are the canonical example of this. Note that the model thus allows %%humans|human-being%% (as an %%actor|actor%%) to act on its %%own|owner%% behalf (as a %%party|party%%), but also, like any other %%actor|actor%%, on behalf of other %%parties|party%%.

#### Actual representation of parties: agents and principals

The `is acting on behalf of` relation links an %%actor|actor%% to a %%party|party%% if and only if the %%actor|actor%% is executing an %%action|action%% on behalf of that %%party|party%%. This is very much time dependent: as soon as the %%actor|actor%% stops (or interrupts) the execution of that %%action|action%%, it is no longer acting on behalf of that %%party|party%%, and as soon as it starts (or resumes) the execution of an %%action|action%% on behalf of that %%party|party%%, it is then (again) acting on behalf of that %%party|party%%. This allows us to come to grips with multitasking, where an %%actor|actor%% intermittently executes %%actions|action%% on behalf of different %%parties|party%%. And, according to this model, any time an %%action|action%% is being executed% (that is: by an %%actor|actor%%), there MUST be a %%party|party%% on whose behalf that execution takes place.

Whenever an %%actor|actor%% is acting on behalf of a %%party|party%%, it is said to fulfill the role of %%agent|agent%% (or representative) of that %%party|party%%, as the %%actor|actor%% effectively represents that %%party|party%% (at that point in time). Conversely, the %%party|party%% is said to fulfill the role of %%principal|principal%% for that %%actor|actor%% (at that point in time), which aligns with [Merriam-Webster's definition (under 1-c)](https://www.merriam-webster.com/dictionary/principal#h2) as the %%party|party%% from whom an agent's authority derives. Thus, being an %%agent|agent%% (for a specific %%party|party%%), or a %%principal|principal%% (for a specific %%actor|actor%%), is equally time-dependent as the relation `is acting on behalf of` is.

#### Guiding the execution of actions: policies

The relevance of the %%agent|agent%%-%%principal|principal%% relationship is that not only must there be at least one %%action|action%% that the %%agent|agent%% is in the process of executing on behalf of the %%principal|principal%%, but also there must be a %%policy|policy%% that is part of its %%principal's|principal%% %%knowledge|knowledge%%, and that provides the %agent% with the rules, working instructions and/or other guidance for the execution of that %action%.

This %policy% (of the %principal%) may provide a limited guidance, particularly in situation where the %agent% can be assumed to have access to other %knowledge%. For example, a robot can do things with limited instructions, as the detailed instructions (e.g., for moving, rotating, etc.) would come from an internal program (that represents %knowledge% of others about how to move, rotate, etc.). Also, %humans% only need limited guidance when they execute an %action% for some other %party%, because they have their own %knowledge% that is typically relied on for the details of such execution. For example, a %human% that is tasked by the NGO it works for to register refugees will need guidance regarding the registration process itself and the data to register, and it will use it's own %knowledge% to work the computer (e.g., typing, operating the mouse).

#### Selecting agents: onboarding

This idea of %actors% and %parties% that can engage in an %agent%-%principal% relationship, where the %agents% accesses and uses a %policy% (of its %principal%) for executing a specific %action%, implies that %parties% need to onboard the %actors% before they can enter into an %agent%-%principal% relationship, where 'onboarding of an %actor%' means:
- to establish the suitability of that %actor% for executing %actions% of certain types on its (i.e.: the %party's%) behalf;
- to provide for any circumstances and/or satisfy any condition that is required so as to enable that %actor% to execute %actions% of such types.

#### Parties and their ownership of actors




#### Potential representation of parties: employees and employers

Before an %%actor|actor%% can start executing an %%action|action%% on behalf of a %%party|party%%, the conditions and circumstances under which such execution is enabled *and* allowed must be established (specified, clarified). One might say that before an %%actor|actor%% can become an %%agent|agent%% for a %%party|party%%, it must be 'onboarded' as such.

%%Actors|actor%% can typically be %%owned|owned%% by a %%party|party%%. %%Human|human-being%% %%actors|actor%%, that are also %%parties|party%%, are postulated to %%own|owner%% themselves, as they are typically endowed with, and exercize their legal, rightful or natural title to control themselves.[^1] Non-human %%actors|actor%%, such as robots, animals, apps on mobile phones, etc. may or may not be %%owned|owned%%. %%Owning|ownership%% an %%actor|actor%%, i.e. (entirely) controlling it, enables the %%owner|owner%% to direct the %%actor|actor%% to execute %%actions|action%%, which the %%actor|actor%% can then exeucte (within the limitations of its capabilities) as that %%party's|party%% %%agent|agent%%.

However, a %%party|party%% may also 'onboard' %%actors|actor%% that it does not %%own|owner%% as representatives under specific conditions and circumstances. [TOT HIER GEKOMEN](niet-bestaande-link-zodat-ik-foutmeldingen-krijg)





In this pattern, %%knowledge|knowledge%% takes center stage. %%Knowledge|knowledge%% contains %%objectives|objective%% to be realized and managed. This not only triggers all sorts of %%actions|action%% to be performed, but also guides their execution in terms of when an %%action|action%% should start, when it terminates, which %%actors|actor%% qualify for executing it, etc. Everything that is specific for a %%party|party%% is reflected in its %%knowledge|knowledge%%.

This works well for %%human beings|human-being%% , which are both a %%party|party%% and an %%actor|actor%%. So a %%human being|human-being%% can act, implying itself as an %%actor|actor%%, and using its personal %%knowledge|knowledge%% as guidance. The model also works when a %%human being|human-being%% (as a %%party|party%%) may hire someone else (as an %%actor|actor%%), e.g. to fill in his tax return form. This other is guided by the %%knowledge|knowledge%% of the %%human being|human-being%% that hired him, and uses its own %%knowledge|knowledge%% for the details of filling in the tax form.

It also works well for %%organizations|organization%%, which are typically companies, enterprises, governments or parts thereof, i.e. groups of %%human beings|human-being%% and possibly other %%actors|actor%% that, as a group, fit the criteria for being a %%party|party%%. This group of %%actors|actor%% would typically work to realize the organization's %%objectives|objective%%, being guided by the organization's %%knowledge|knowledge%% (registrations, policies, etc.). Like %%human beings|human-being%% , an %%organization|organization%% may (have an appropriate %%actor|actor%%) decide to hire or fire %%actors|actor%% for longer or shorter periods.

%%Parties|party%% set %%objectives|objective%% that they seek to achieve, the most basic of which perhaps is its mission, or its 'raison d'être', to the realization of which all of its %%actions|action%% are (ultimately) aimed. Every %%Objective|objective%% is owned by a single %%party|party%% (we do not consider 'shared objectives'[^3]).

---
### Footnotes

[^1]: Noting that this also covers slavery merely serves as proof that the model is very generic, not that we support slavery.

[^2]: I.e. “logic is the analysis and appraisal of arguments (Gensler, Harry J. (2017) [2002]. "Chapter 1: Introduction". Introduction to logic (3rd ed.). New York: Routledge. p. 1. [doi:10.4324/9781315693361](https://doi.org/10.4324%2F9781315693361). [ISBN 9781138910591](https://en.wikipedia.org/wiki/Special:BookSources/9781138910591). OCLC [957680480](https://www.worldcat.org/oclc/957680480).)

[^3]: The %%Networked Risk Management (NRM) pattern|pattern-decentralized-grc%% deals with the setting and realizing of %%objectives|objective%%, the associated %%risk management|risk-management%% etc., and explains the reasoning for not having shared %%objectives|objective%%.