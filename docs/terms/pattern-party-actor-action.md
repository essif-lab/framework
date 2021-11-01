---
id: pattern-party-actor-action
title: "Parties, Actors and Actions"
scopeid: essifLab
type: pattern
typeid: Party-actor-action
stage: draft
hoverText: "The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'."
glossaryText: "'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'."
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Summary
This pattern captures the essence of how things are done. It answers questions such as: "Who/what does things?", "How are their actions being guided/controlled?", "Who controls whom/what?", "Who/what may be held accountable?". These questions need to have a precise answer if you want to design or implement systems where actors can be anything, ranging from programs/apps running on computers as well as humans. This pattern provides a way of looking at organizations, people (human beings), and non-human actors. It shows how they interact with one another, and how they may or may not work for one another. The pattern descibes how parties are 'sovereign' as they construct their own world view, reason with that, and make their (sovereign, subjective) decisions. It also shows how this 'knowledge is used, where it is used, and also: where it is not used. The latter implies that parties have a limited scope of control, which gives rise to their need to work together with other parties, that have their own sovereignty. Such interactions with others, however, are outside the scope of this pattern.

### Purpose
In order for people or organizations to decide what to do (themselves), what to ask others to do (for which these others generally require some form of compensation, how to know that the associated risks are worth taking, this pattern provides a simple mental model that provides the basis for thinking/reasoning about such questions. The pattern is expected to be helpful to those that think about designing complex systems (systems of systems) that are owned by different parties, and in which both human and non-human actors take part.

### Introduction
One may readily observe that in some way, people (humans) and organizations are similar. This is indicated e.g. by the notion of 'personality' that many %%legal jurisdictions|legal-jurisdiction%% assign to (specific kinds of) organizations. It allows rights and duties to be assigned to people and organizations alike. It also means that people and organizations can be held accountable, and be subjected to prosecution.

The main characteristic that people and %%organizations|organization%% share, is that each of them autonomously sets its own (subjective) %%objectives|objective%%, maintains its own (subjective) %%knowledge|knowledge%%, and uses that to pursue these objectives. This characteristic qualifies them as %%parties|party%%.

One may also readily observe that in other ways, people and %%organizations|organization%% differ. For example, people eat and drink, whereas organizations do not. People can sit behind a computer keyboard, type texts, hit the 'Enter' button, e.g. to send an email. Organizations cannot do that. In short: people can act (do things), and hence qualify as %%actors|actor%%. Organizations cannot do things (act) and hence do not qualify as an actor. This is what sets people and organizations apart.

#### %%Parties|party%% and %%Actors|actor%%

Notwithstanding that %%organizations|organization%% cannot act, it is quite common to hear statements that seem to imply that they can. If ACME is an organization and someone says: "I just received mail from ACME", this cannot be literally true as organizations cannot send messages. It is either a person or a computer system that has actually sent it. Statements such as these must therefor be interpreted in a figurative way, as a 'shorthand' for 'I just received mail that was sent by some %%actor|actor%% that was acting on behalf of ACME'.

When an %%actor|actor%% `is acting on behalf of` some %%party|party%%, we mean to say that it is actually in the process of executing a (single) %%action|action%%, which it executes on that (single) party's behalf. These constraints (a *single* action and a *single* party) allow for:
- assigning accountability for the execution of that action to a *single* party;
- an actor to execute different actions for different parties (i.e.: to multi-task for different parties).

In this relation `is acting on behalf of`, the actor plays the role of %%agent|agent%% (of that %%party|party%%), and the %%party|party%% plays the role of  %%principal|principal%% (of that %%actor|actor%%). Note that for every agent-principle pair, an %%action|action%% must exist that the agent is executing on behalf of its principal.

We also need to talk about actors for which it is realistic that they might do something for some party at some point in time. We will use the term `work for` for actor-party pairs that qualify. We see two basic ways for such a relationship to exist:

One way is where the %%party|party%% has a %%legal or rightful title to control (own)|owner%% the actor.[^1] This would e.g. be the case if the actor were a computer program (a running mail client or mail server, or an app running on a mobile device). We use the term `owns` to relate a party with an actor for which this is the case. In this relation `owns`, the %%actor|actor%% plays the role of the %%owned|owned%%, and the %%party|party%% plays the role of the %%owner|owner%%.

The second way is where an %%actor|actor%% `works for` a %%party|party%%, based e.g. on some kind of agreement or contract. A party can hire an actor that it doesn't own, i.e. create arrangements with other parties that enable the actor to work for that party. How such `works for` relationships may start or cease to exist, and be modified, is the topic of the pattern %%mandates, Delegation and Hiring|pattern-mandates-delegation-hiring%%.

#### %%Action|action%% Execution

%%Actions|action%% are executed in a specific context, i.e. a specific place and time, and a specific %%party|party%% on whose behalf the action is executed. The %%knowledge|knowledge%% of that party provides the %%policy|policy%%, i.e. the rules, working-instructions, preferences and other guidance that the %%actor|actor%% needs to execute the action. For example, sending a mail on behalf of some %%organization|organization%% may require that the mail template and logo of that organization be used. Or accepting an order usually requires a check to see the order is 'clean', i.e. can be processed by others in the organization. What a 'clean-order check' comprises is part of the knowledge of that organization.

The %%policies|policy%% that govern the execution of an %%action|action%% are part of the %%knowledge|knowledge%% of the %%party|party%% on whose behalf the action is being executed. As a concequence, an %%actor|actor%% that executes the action must be able to access (the knowledge that) the policy (is part of). Also, the actor must use that policy as its primary guidance for executing the action.

Note that this does not imply that the actor cannot use knowledge from other sources (parties) as well. In particular, human actors are typically responsible (not necessarily accountable) for their doings and may hence use their own knowledge. They may also look for complementary, third party knowledge, e.g. on the Internet or in a library. However, using the %%principal's|principal%% knowledge as the primary guidance is important if that principal is to be held accountable.

#### Realizing %%Objectives|objective%%

Every %%party|party%% has its own mission (calling, vocation), and realizing that is often perceived as the reason for its existence (raison d'etre). This is what drives them. It causes the party to set its (other, derived) objectives, and determine how to realize them, e.g. by finding (and subsequently owning, or employing) %%actors|actor%% that can do the associated work, by establishing and maintaining the policies for the %%actions|action%% they will be tasked to execute, etc.

Setting objectives, managing the associated %%risks|risk%% (i.e. 'effect of uncertainty on objectives'), deciding about laws/regulations to comply with, etc., is the topic of Governance, Risk Management and Compliance (GRC), which is outside the scope of this model.

### Formalized model
Here is a visual representation of this pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'Party-Actor-Action' pattern"
  src={useBaseUrl('images/patterns/pattern-party-actor-action.png')}
/>

It shows that %%parties|party%% (humans, organizations) perform %%actions|action%% for the purpose of realizing their %%objectives|objective%%. %%Parties|party%% are not considered to actually execute such %%actions|action%%; they have (human and non-human) %%actors|actor%% that work for them, execute such %%actions|action%%, using the %%party|party%%'s %%knowledge|knowledge%% as the (authoritative) guidance for executing the %%actions|action%% (as well as any other relevant %%knowledge|knowledge%% they can access).

The essential characteristic of %%parties|party%% is their 1-1 link with %%knowledge|knowledge%%, which they continually update and use e.g. for reasoning, decision making, and determining e.g. what to do, when, and with whom. %%Knowledge|knowledge%% not only includes (observable) facts, but also opinions, e.g. regarding the %%entities|entity%% it knows to exist, relations between them, and rules (constraints, [logic](https://en.wikipedia.org/wiki/Logic)[^2]) that can be used to classify and reasoning about them, and for making decisions.

Perhaps the most important idea in this pattern is that our %%party|party%% concept is not considered to (be able to) act, and they need %%actors|actor%% (i.e. %%Entities|entity%% that _can_ act) to act on their behalf and thus make them perform. This does, however,  not preclude having %%entities|entity%% that are both %%party|party%% and %%actor|actor%% - e.g. humans - and that such %%entities|entity%% can act on their 'own' behalf. And we can continue to use the commonly used form of speech in which a %%party|party%% performs some Action  by realizing that this means that there is (at least) one %%actor|actor%% that is actually executing that %%action|action%%.

In this pattern, %%knowledge|knowledge%% takes center stage. %%Knowledge|knowledge%% contains %%objectives|objective%% to be realized and managed. This not only triggers all sorts of %%actions|action%% to be performed, but also guides their execution in terms of when an Action should start, when it terminates, which %%actors|actor%% qualify for executing it, etc. Everything that is specific for a %%party|party%% is reflected in its %%knowledge|knowledge%%.

This works well for human beings, which are both a %%party|party%% and an %%actor|actor%%. So a human being can act, implying itself as an %%actor|actor%%, and using its personal %%knowledge|knowledge%% as guidance. The model also works when a human being (as a %%party|party%%) may hire someone else (as an %%actor|actor%%), e.g. to fill in his tax return form. This other is guided by the %%knowledge|knowledge%% of the human being that hired him, and uses its own %%knowledge|knowledge%% for the details of filling in the tax form.

It also works well for organizations, which are typically companies, enterprises, governments or parts thereof, i.e. groups of human beings and possibly other %%actors|actor%% that, as a group, fit the criteria for being a %%party|party%%. This group of %%actors|actor%% would typically work to realize the organization's %%objectives|objective%%, being guided by the organization's %%knowledge|knowledge%% (registrations, policies, etc.). Like human beings, an organization may (have an appropriate %%actor|actor%%) decide to hire or fire %%actors|actor%% for longer or shorter periods.

%%Parties|party%% set %%objectives|objective%% that they seek to achieve, the most basic of which perhaps is its mission, or its 'raison d'être', to the realization of which all of its %%actions|action%% are (ultimately) aimed. Every Objective is owned by a single %%party|party%% (we do not consider 'shared objectives'[^3]).

---
### Footnotes
<!--This (optional) section contains any footnotes that may have been specified in the text above.-->

[^1]: Noting that this also covers slavery merely serves as proof that the model is very generic, not that we support slavery.

[^2]: I.e. “logic is the analysis and appraisal of arguments (Gensler, Harry J. (2017) [2002]. "Chapter 1: Introduction". Introduction to logic (3rd ed.). New York: Routledge. p. 1. [doi:10.4324/9781315693361](https://doi.org/10.4324%2F9781315693361). [ISBN 9781138910591](https://en.wikipedia.org/wiki/Special:BookSources/9781138910591). OCLC [957680480](https://www.worldcat.org/oclc/957680480).)

[^3]: The Networked Risk Management (NRM) pattern deals with the setting and realizing of %%objectives|objective%%, the associated risk management etc., and explains the reasoning for not having shared %%objectives|objective%%.