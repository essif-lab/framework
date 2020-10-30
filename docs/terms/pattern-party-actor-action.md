---
id: pattern-party-actor-action
title: "Parties, Actors and Actions"
scopeid: essifLab
type: pattern
typeid: Party-actor-action
stage: draft
hoverText: "The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'."
glossaryText: "'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'."
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Summary
This pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: "Who/what does things?", "How are their actions being guided/controlled?", "Who controls whom/what?", "Who/what may be held accountable?". It provides a way of looking at people (human beings), organizations, and how they interact with one another in a decentralized, self-sovereign way - which means that each of them decides for itself whether or not to interact with others, how to conduct such interactions, etc., thereby only taking external influences into account if they want, or have some need to do so.

### Purpose
<!--Concisely describe what can you do with the pattern that is (at least) harder if you didn't have it.-->
In order for people or organizations to decide what to do (themselves), what to ask others to do (for which these others generally require some form of compensation, how to know that the associated risks are worth taking, this pattern provides a simple mental model that provides the basis for thinking/reasoning about such questions. 

### Introduction
<!--Gently introduce the pattern, by referring to real-world situations and using colloquial terms, so that when someone has read the text, (s)he knows what it is about, and is ready to delve into the specifics of the pattern-->
One may readily observe that in some way, people (humans) and %%organizations|organization%% are similar. This is indicated e.g. by the notion of 'personality' that many %%legal jurisdictions|legal-jurisdiction%% assign to (specific kinds of) organizations. It allows rights and duties to be assigned to people and organizations alike. It also means that people and organizations can be held accountable, and be subjected to prosecution.

The main characteristic that people and organizations share, is everyone of them maintains (a body of) %%knowledge|knowledge%%. They acquire knowledge by observing the world around them, processing such observations, storing all that (using specific (tangible) representations of these (intangible) things, and sharing/disseminating it with others (here again, (tangible) representations must be used). We introduce the term %%party|party%% to refer to %%entities|entity%% that share this characteristic of maintaining (a body of) knowledge. Both people and organizations qualify as such.

#### Coherence between %%parties|party%% and Actors

One may also readily observe that in other ways, people and organizations differ. For example, people eat and drink, whereas organizations do not. People can sit behind a computer keyboard, type texts, hit the 'Enter' button, e.g. to send an email. Organizations cannot do that. In short: people can act (do things), whereas organizations cannot. The characteristic that sets people and organizations apart is the ability to act. 

We will use the term %%actor|actor%% to refer to %%entities|entity%% that are capable of acting (doing things); people will qualify, whereas organizations do not.

Notwithstanding that organizations cannot act, it is quite common to hear statements that seem to imply that they can. If ACME is an organization and someone says: "I just received mail from ACME", this cannot be literally true as organizations cannot send messages. It is either a person or a computer system that has actually sent it. Statements such as these must therefor be interpreted in a figurative way, as a 'shorthand' for 'I just received mail that was sent by some %%actor|actor%% that was `acting on behalf of` ACME'.

When an %%actor|actor%% is `acting on behalf of` some %%party|party%%, it is executing a single %%action|action%%. This constraint is necessary as we must allow actors to multi-taks, i.e. execute different actions more or less simultaneously, where it might execute each such action on behalf of a different %%party|party%%.

In this relation is `acting on behalf of`, actor plays the role of %%agent|agent%% (of that %%party|party%%), and the %%party|party%% performs the role of %%principal|principal%% (of that actor).

Thus, being an agent implies that an action is being executed on behalf of some %%party|party%%. However, we also like to talk about actors for which it is realistic that they might do something for some %%party|party%%. It seems obvious that an actor, for which the %%party|party%% has the %%legal or rightful title to control|owner%% it, would qualify as such. But a %%party|party%% may also get actors that it doesn't %%own|owner%% to `work for` it. may have various meanings:

1. ACME may be the %%owner|owner%% of that actor. For example, this would be the case if the mail was sent by one of ACME's running business applications.
2. ACME may employ, or otherwise hire that actor. For example, this would be the case if one of its %%employees|employee%% sent the mail, or a business application that is owned by another %%party|party%% sent the mail on behalf of ACME. How this works is the subject of the pattern %%Mandates, Delegation and Hiring|pattern-mandates-delegation-hiring%%.

Note that owning, employing (or hiring) an actor is a condition that usually exists for a considerable time, at least in the order of days (weeks, months). However, some actors (e.g. humans) are capable of multi-tasking, i.e. they can do several actions (pretty much) simultaneously. For example, a person that is working for some organization may make a personal phone call, or send a personal email during working hours. This shows that the `working for` (some %%party|party%%) condition can mean two things: either it is the status/condition 
- that allows/enables the actor to act on behalf of some %%party|party%%. We refer to that as `working for`, e.g. "actor A works for %%party|party%% P". In this relation `works for`, the %%party|party%% performs the role of %%employer|employer%% (of that actor), and the actor plays the role of %%employee|employee%% of that %%party|party%%. 
- the status/condition that an actor is executing a specific %%action|action%% on behalf of that %%party|party%% at some given point in time. We refer to that condition as `is acting on behalf of` or `is executing an action on behalf of`. We expect that whenever an actor is acting on behalf of some %%party|party%%, it must also work for that %%party|party%%.

%%Actions|action%% can usually be executed in different ways. For example, sending a mail on behalf of some organization may require that the mail template and logo of that organization be used. Or accepting an order usually requires a check to see the order is 'clean', i.e. can be processed by others in the organization. What a 'clean-order check' comprises is to be determined by the organization.

In general, the execution of an action is (primarily) guided by the policies, working instructions etc. (i.e.: the %%knowledge|knowledge%%) of the %%party|party%% on whose behalf that action is executed. The actor can still use other, additional knowledge (of other %%parties|party%%) that it has access to, but the primary guidance that it *must* use originates from the %%party|party%% on whose behalf it executes the action. In the previous example, a person that would send mail on behalf of the organization would use its official paper, format the mail according to the organization's templates, comply with any other applicable requirements, and then use the knowledge of itself (as a person is a %%party|party%%) to provide the content, phrase sentences, etc.

Finally, we note that a %%party|party%% `owns` %%objectives|objective%% that it seeks to fulfill or realize, and these are part of its knowledge. The relevance of this is that a large number of the decisions that %%parties|party%% make have to do with their managing their %%risks|risk%% (which [ISO 27000](https://www.iso.org/obp/ui#iso:std:iso-iec:27000:ed-4:v1:en)) defines as 'effect of uncertainty on objectives'), each of which is related to one or more of its objectives.

### Formalized model
Here is a visual representation of this pattern, using the following [notations and conventions](../notations-and-conventions#pattern-diagram-notations):

<img
  alt="Conceptual model of the 'Party-Actor-Action' pattern"
  src={useBaseUrl('images/patterns/pattern-party-actor-action.png')}
/>

It shows that %%Parties|party%% (humans, organizations) perform %%Actions|action%% for the purpose of realizing their %%Objectives|objective%%. %%Parties|party%% are not considered to actually execute such %%Actions|action%%; they have (human and non-human) %%Actors|actor%% that work for them, execute such %%Actions|action%%, using the %%party|party%%'s %%Knowledge|knowledge%% as the (authoritative) guidance for executing the %%Actions|action%% (as well as any other relevant %%Knowledge|knowledge%% they can access).

The essential characteristic of %%Parties|party%% is their 1-1 link with %%Knowledge|knowledge%%, which they continually update and use e.g. for reasoning, decision making, and determining e.g. what to do, when, and with whom. %%Knowledge|knowledge%% not only includes (observable) facts, but also opinions, e.g. regarding the %%Entities|entity%% it knows to exist, relations between them, and rules (constraints, [logic](https://en.wikipedia.org/wiki/Logic)[^1]) that can be used to classify and reasoning about them, and for making decisions. 

Perhaps the most important idea in this pattern is that our %%party|party%% concept is not considered to (be able to) act, and they need %%Actors|actor%% (i.e. %%Entities|entity%% that _can_ act) to act on their behalf and thus make them perform. This does, however,  not preclude having %%Entities|entity%% that are both %%party|party%% and %%Actor|actor%% - e.g. humans - and that such %%Entities|entity%% can act on their 'own' behalf. And we can continue to use the commonly used form of speech in which a %%party|party%% performs some Action  by realizing that this means that there is (at least) one %%Actor|actor%% that is actually executing that %%Action|action%%.

In this pattern, %%Knowledge|knowledge%% takes center stage. %%Knowledge|knowledge%% contains %%Objectives|objective%% to be realized and managed. This not only triggers all sorts of %%Actions|action%% to be performed, but also guides their execution in terms of when an Action should start, when it terminates, which %%Actors|actor%% qualify for executing it, etc. Everything that is specific for a %%party|party%% is reflected in its %%Knowledge|knowledge%%.

This works well for human beings, which are both a %%party|party%% and an %%Actor|actor%%. So a human being can act, implying itself as an %%Actor|actor%%, and using its personal %%Knowledge|knowledge%% as guidance. The model also works when a human being (as a %%party|party%%) may hire someone else (as an %%Actor|actor%%), e.g. to fill in his tax return form. This other is guided by the %%Knowledge|knowledge%% of the human being that hired him, and uses its own %%Knowledge|knowledge%% for the details of filling in the tax form.

It also works well for organizations, which are typically companies, enterprises, governments or parts thereof, i.e. groups of human beings and possibly other %%Actors|actor%% that, as a group, fit the criteria for being a %%party|party%%. This group of %%Actors|actor%% would typically work to realize the organization's %%Objectives|objective%%, being guided by the organization's %%Knowledge|knowledge%% (registrations, policies, etc.). Like human beings, an organization may (have an appropriate %%Actor|actor%%) decide to hire or fire %%Actors|actor%% for longer or shorter periods.

%%Parties|party%% set %%Objectives|objective%% that they seek to achieve, the most basic of which perhaps is its mission, or its 'raison d'être', to the realization of which all of its %%Actions|action%% are (ultimately) aimed. Every Objective is owned by a single %%party|party%% (we do not consider 'shared objectives'[^2]).

---
### Footnotes
<!--This (optional) section contains any footnotes that may have been specified in the text above.-->

[^1]: I.e. “logic is the analysis and appraisal of arguments (Gensler, Harry J. (2017) [2002]. "Chapter 1: Introduction". Introduction to logic (3rd ed.). New York: Routledge. p. 1. [doi:10.4324/9781315693361](https://doi.org/10.4324%2F9781315693361). [ISBN 9781138910591](https://en.wikipedia.org/wiki/Special:BookSources/9781138910591). OCLC [957680480](https://www.worldcat.org/oclc/957680480).)

[^2]: The Networked Risk Management (NRM) pattern deals with the setting and realizing of %%Objectives|objective%%, the associated risk management etc., and explains the reasoning for not having shared %%Objectives|objective%%.