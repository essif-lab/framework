---
id: pattern-party-actor-action
title: "Pattern: Party-Action (Scope: eSSIF-Lab)"
scopeid: essifLab
type: pattern
typeid: party-action
stage: draft
hoverText: "This pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Summary
This pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: "Who/what does things?", "How are their actions being guided/controlled?", "Who controls whom/what?", "Who/what may be held accountable?". It provides a way of looking at people (human beings), organizations, and how they interact with one another in a decentralized, self-sovereign way - which means that each of them decides for itself whether or not to interact with others, how to conduct such interactions, etc., thereby only taking external influences into account if they want, or have some need to do so.

## Purpose
<!--Concisely describe what can you do with the pattern that is (at least) harder if you didn't have it.-->
In order for people or organizations to decide what to do (themselves), what to ask others to do (for which these others generally require some form of compensation, how to know that the associated risks are worth taking, this pattern provides a simple mental model that provides the basis for thinking/reasoning about such questions. 

## Introduction
<!--Gently introduce the pattern, by referring to real-world situations and using colloquial terms, so that when someone has read the text, (s)he knows what it is about, and is ready to delve into the specifics of the pattern-->
One may readily observe that in some way, people (humans) and %%organizations|organization%% are similar. This is indicated e.g. by the notion of 'personality' that many %%legal jurisdictions%% assign to (specific kinds of) organizations. It allows rights and duties to be assigned to people and organizations alike. It also means that people and organizations can be held accountable, and be subjected to prosecution.

One may also readily observe that in other ways, people and organizations differ. For example, people eat and drink, whereas organizations do not. People can sit behind a computer keyboard, type texts, hit the `Enter` button, e.g. to send an email. Organizations cannot do that. In short: people can act (do things), whereas organizations cannot.

Our language allows us to say things that are untrue if taken literally, yet can become true when interpreted figuratively - but in a specific sense. If ACME is an organization and someone says: "I just received an email from ACME", this cannot be literally true as organizations cannot send emails. It is either a person or a computer system that has actually sent it. There is a broad consensus that the appropriate (figurative) way to interpret the sentence is to assume that there is a person or something else that can send mails, that has sent it while 'working for ACME'. 



This pattern models that %%Parties|party%% (humans, organizations) perform %%Actions|action%% for the purpose of realizing their %%Objectives|objective%%. %%Parties|party%% are not considered to actually execute such %%Actions|action%%; they have (human and non-human) %%Actors|actor%% that work for them, execute such %%Actions|action%%, using the %%Party|party%%’s %%Knowledge|knowledge%% as the (authoritative) guidance for executing the %%Actions|action%% (as well as any other relevant %%Knowledge|knowledge%% they can access).

<img
  alt="Conceptual model of the 'Party-Actor-Action' pattern"
  src={useBaseUrl('images/patterns/pattern-party-actor-action.png')}
/>;


The essential characteristic of %%Parties|party%% is their 1-1 link with %%Knowledge|knowledge%%, which they continually update and use e.g. for reasoning, decision making, and determining e.g. what to do, when, and with whom. %%Knowledge|knowledge%% not only includes (observable) facts, but also opinions, e.g. regarding the %%Entities|entity%% it knows to exist, relations between them, and rules (constraints, [logic](https://en.wikipedia.org/wiki/Logic)[^1]) that can be used to classify and reasoning about them, and for making decisions.

Perhaps the most important idea in this pattern is that our %%Party|party%% concept is not considered to (be able to) act, and they need %%Actors|actor%% (i.e. %%Entities|entity%% that _can_ act) to act on their behalf and thus make them perform. This does, however,  not preclude having %%Entities|entity%% that are both %%Party|party%% and %%Actor|actor%% - e.g. humans - and that such %%Entities|entity%% can act on their ‘own’ behalf. And we can continue to use the commonly used form of speech in which a %%Party|party%% performs some Action  by realizing that this means that there is (at least) one %%Actor|actor%% that is actually executing that %%Action|action%%.

In this pattern, %%Knowledge|knowledge%% takes center stage. %%Knowledge|knowledge%% contains %%Objectives|objective%% to be realized and managed. This not only triggers all sorts of %%Actions|action%% to be performed, but also guides their execution in terms of when an Action should start, when it terminates, which %%Actors|actor%% qualify for executing it, etc. Everything that is specific for a %%Party|party%% is reflected in its %%Knowledge|knowledge%%.

This works well for human beings, which are both a %%Party|party%% and an %%Actor|actor%%. So a human being can act, implying itself as an %%Actor|actor%%, and using its personal %%Knowledge|knowledge%% as guidance. The model also works when a human being (as a %%Party|party%%) may hire someone else (as an %%Actor|actor%%), e.g. to fill in his tax return form. This other is guided by the %%Knowledge|knowledge%% of the human being that hired him, and uses its own %%Knowledge|knowledge%% for the details of filling in the tax form.

It also works well for organizations, which are typically companies, enterprises, governments or parts thereof, i.e. groups of human beings and possibly other %%Actors|actor%% that, as a group, fit the criteria for being a %%Party|party%%. This group of %%Actors|actor%% would typically work to realize the organization’s %%Objectives|objective%%, being guided by the organization’s %%Knowledge|knowledge%% (registrations, policies, etc.). Like human beings, an organization may (have an appropriate %%Actor|actor%%) decide to hire or fire %%Actors|actor%% for longer or shorter periods.

%%Parties|party%% set %%Objectives|objective%% that they seek to achieve, the most basic of which perhaps is its mission, or its ‘raison d'être’, to the realization of which all of its %%Actions|action%% are (ultimately) aimed. Every Objective is owned by a single %%Party|party%% (we do not consider ‘shared objectives’[^2]).

## Formalized model
Here is a visual representation of this pattern, using the following [notations and conventions](/docs/notations-and-conventions#pattern-diagram-notations):

<img
  alt="Conceptual model of the 'Party-Actor-Action' pattern"
  src={useBaseUrl('images/patterns/pattern-party-actor-action.png')}
/>;

The essential characteristic of %%Parties|party%% is their 1-1 link with %%Knowledge|knowledge%%, which they continually update and use e.g. for reasoning, decision making, and determining e.g. what to do, when, and with whom. %%Knowledge|knowledge%% not only includes (observable) facts, but also opinions, e.g. regarding the %%Entities|entity%% it knows to exist, relations between them, and rules (constraints, [logic](https://en.wikipedia.org/wiki/Logic)[^1]) that can be used to classify and reasoning about them, and for making decisions. 

Perhaps the most important idea in this pattern is that our %%Party|party%% concept is not considered to (be able to) act, and they need %%Actors|actor%% (i.e. %%Entities|entity%% that _can_ act) to act on their behalf and thus make them perform. This does, however,  not preclude having %%Entities|entity%% that are both %%Party|party%% and %%Actor|actor%% - e.g. humans - and that such %%Entities|entity%% can act on their ‘own’ behalf. And we can continue to use the commonly used form of speech in which a %%Party|party%% performs some Action  by realizing that this means that there is (at least) one %%Actor|actor%% that is actually executing that %%Action|action%%.

In this pattern, %%Knowledge|knowledge%% takes center stage. %%Knowledge|knowledge%% contains %%Objectives|objective%% to be realized and managed. This not only triggers all sorts of %%Actions|action%% to be performed, but also guides their execution in terms of when an Action should start, when it terminates, which %%Actors|actor%% qualify for executing it, etc. Everything that is specific for a %%Party|party%% is reflected in its %%Knowledge|knowledge%%.

This works well for human beings, which are both a %%Party|party%% and an %%Actor|actor%%. So a human being can act, implying itself as an %%Actor|actor%%, and using its personal %%Knowledge|knowledge%% as guidance. The model also works when a human being (as a %%Party|party%%) may hire someone else (as an %%Actor|actor%%), e.g. to fill in his tax return form. This other is guided by the %%Knowledge|knowledge%% of the human being that hired him, and uses its own %%Knowledge|knowledge%% for the details of filling in the tax form.

It also works well for organizations, which are typically companies, enterprises, governments or parts thereof, i.e. groups of human beings and possibly other %%Actors|actor%% that, as a group, fit the criteria for being a %%Party|party%%. This group of %%Actors|actor%% would typically work to realize the organization’s %%Objectives|objective%%, being guided by the organization’s %%Knowledge|knowledge%% (registrations, policies, etc.). Like human beings, an organization may (have an appropriate %%Actor|actor%%) decide to hire or fire %%Actors|actor%% for longer or shorter periods.

%%Parties|party%% set %%Objectives|objective%% that they seek to achieve, the most basic of which perhaps is its mission, or its ‘raison d'être’, to the realization of which all of its %%Actions|action%% are (ultimately) aimed. Every Objective is owned by a single %%Party|party%% (we do not consider ‘shared objectives’[^2]).

---
## Footnotes
<!--This (optional) section contains any footnotes that may have been specified in the text above.-->

[^1]: I.e. “logic is the analysis and appraisal of arguments (Gensler, Harry J. (2017) [2002]. "Chapter 1: Introduction". Introduction to logic (3rd ed.). New York: Routledge. p. 1. [doi:10.4324/9781315693361](https://doi.org/10.4324%2F9781315693361). [ISBN 9781138910591](https://en.wikipedia.org/wiki/Special:BookSources/9781138910591). OCLC [957680480](https://www.worldcat.org/oclc/957680480).)

[^2]: The Networked Risk Management (NRM) pattern deals with the setting and realizing of %%Objectives|objective%%, the associated risk management etc., and explains the reasoning for not having shared %%Objectives|objective%%.
