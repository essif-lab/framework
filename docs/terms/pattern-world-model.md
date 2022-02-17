---
id: pattern-world-model
title: "eSSIF-Lab World Model"
scopeid: essifLab
type: pattern
typeid: world-model
stage: draft
hoverText: "The eSSF-Lab World Model is the set of Concepts, relations between them (Patterns), and principles (that are the starting point for eSSIF-Lab's thinking)."
glossaryText: "The set of %%concepts^concept%%, relations between them (%%patterns^pattern%%), and [Principles](essifLab-principles) (that are the starting point for eSSIF-Lab's thinking)."
date: 20211101
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## eSSIF-Lab World Model

The **eSSIF-Lab World Model** consists of
- the set of %%concepts|concept%%, as listed in the [Glossary](../essifLab-Glossary),
- relations between these concepts, as explained in the various concept-descriptions, and in the various %%patterns|pattern%%, as listed in the [Patterns List](../essifLab-pattern-list), and
- a set of [Principles](../essifLab-principles) that we take as starting points for our thinking.

<img
  alt="George E.P. Box: All models are wrong, but some are useful"
  src={useBaseUrl('images/essif-lab-all-models-are-wrong.png')}
/>

We emphasize that the world model we propose is also 'wrong' (in the sense of G. Box). However, we did make a serious effort for it to be useful: it is meant to serve as a sound basis for designing, implementing and deploying architectures, processes and technologies that aim to support (autonomous, %%self-sovereign|self-sovereignty%%) %%parties|party%% as they negotiate and execute electronic %%transactions|transaction%% with one another.

Our model contains several ways of thinking that may seem somewhat 'alien', in the sense that they do not appear to follow common thought patterns. Where you notice that, you will need to choose which way of thinking you want to follow. We suggest you temporarily suspend the common ways of thinking (you can always go back to your own ways of thinking), and give this 'alien' eSSIF-Lab way of thinking a serious try. By 'serious' we mean that you make an effort to actually understand what we're trying to say and do. We certainly made an effort to make this as easy as we could, e.g. by being very precise in our definitions, and changing texts according to what we have heard people say.

Here, we only introduce/summarize the most fundamental concepts (and their properties) of the eSSIF-Lab world model. You are encouraged to browse on, clicking on the %%terms|term%% you want to know more about, or reading up on the %%mental models|pattern%% that provide the coherence between them.

### The Universe consists of Entities

eSSIF-Lab sees the world (universe) as being filled with %%entities|entity%%, i.e. things (people and animals included) that exist. Our world view is shaped by the distinctions that eSSIF-Lab makes as it classifies such entities into well-defined categories, each of which having specific characteristics.

### Parties: Entities that manage and use a Knowledge autonomously

One of the most fundamental of such categories is called %%party|party%%. A party is defined as an %%entity|entity%% that manages and uses its own %%knowledge|knowledge%% autonomously. It is its own sovereign, i.e. within its %%scope of control|scope-of-control%%, everything is guided by its own, subjective %%knowledge|knowledge%%. This includes all decision making, execution of %%actions|action%%, %%risks|risk%%, %%governance|governance%%, etc., etc. Typical examples include %%organizations|organization%% (governments, enterprises) and individual human beings. Note that while %%parties|party%% cannot be assumed to be capable of doing things (e.g. %%organizations|organization%%). However, they, as any other %%party|party%%, can %%employ|employer%% %%actors|actor%% to work for them, i.e. execute %%actions|action%% on their behalf.

We postulate that every party has %%objectives|objective%% that it pursues. A large part of its %%knowledge|knowledge%% revolves about %%governing|governance%% and/or %%managing|management%% these %%objectives|objective%% (which includes %%risk management|risk-management%%) and making sure they get realized.

While %%parties|party%% are their own (self-)sovereigns and in principle can do as they please, they live in a universe with many other parties, that are also 'self-sovereigns'. This means that they need to come to terms with one another as they have interactions with one another that may influence the %%knowledge|knowledge%% of the participating parties, and have other consequences as well. Such %%transactions|transaction%% between parties is not only one of the focal points of this framework: it is the reason we created it.

You can learn more about parties from the %%parties, actors and action pattern|pattern-party-actor-action%%.


### Actors: Entities that can act (do things)

Another fundamental category is called %%actor|actor%%, which is defined as an %%entity|entity%% that can act (do things). It is important to note that while some entity classes (e.g. human beings) qualify as both %%actors|actor%% and %%parties|party%%, other entity classes do not (e.g. %%organizations|organization%%, or robots). As an actor does something (executing an %%action|action%%), it uses the %%knowledge|knowledge%% of one specific %%party|party%% as the main/dominant guidance for executing that action, yet it may also use %%knowledge|knowledge%% of other %%parties|party%% when such is necessary to properly execute the action. We say that the %%actor|actor%% is executing that %%action|action%% on behalf of that %%party|party%%. %%Actors|actor%% may execute different %%actions|action%% on behalf of different %%parties|party%%. It is a particular contribution of this framework that using it allows one to determine which %%actor|actor%% executes what %%action|action%% on behalf of what %%party|party%%. This is particularly relevant in the context of two interacting/transacting parties.

You can learn more about actors from the %%parties, actors and action pattern|pattern-party-actor-action%%.

### Jurisdiction: Authority with mechanisms for defining rules, enforcing them, and resolving disputes

A third fundamental category is called %%jurisdiction|jurisdiction%%, which is a foundational concept for organizing collaborations between %%parties|party%%, e.g. in %%communities|community%% or %%ecosystems|ecosystem%%. Basically, a jurisdiction is an %%authority|authority%% that has mechanisms for defining and maintaining rules, enforcement thereof, and a mechanism for resolving conflicts within its %%scope of control|scope-of-control%%.

You can learn more about jurisdictions from the %%jurisdictions pattern|pattern-jurisdiction%%.

### Transactions: the exchange of goods, services, funds, or data between parties

The last fundamental category is the %%transaction|transaction%%, i.e. the exchange of goods, services, funds, or data between %%parties|party%%.

We follow the [*DEMO*](https://en.wikipedia.org/wiki/Design_%26_Engineering_Methodology_for_Organizations) transactions pattern, which divides %%transactions|transaction%% in three phases:
- a **negotiation phase**, in which one or more (%%agents|agent%% of each) %%participant|participant%% exchange data for the purpose of establishing a %%contract|transaction-agreement%% that specifies what the %%transaction|transaction%% entails. This phase results either in a commitment decision of all %%participants|participant%%, or the termination of the %%transaction|transaction%% because one of them quits.
- an **execution phase**, in which (%%agents|agent%% of) the same principals work (execute actions) to fulfill the %%obligations|obligation%% of the agreement. This phase results in them stating that they have completed that work (or that they gave up).
- the **acceptance phase**, in which one or more (%%agents|agent%% of the) %%participants|participant%% exchange data that leads to a decision to accept the results, or to escalate (e.g. start a lawsuit against the other %%participant|participant%%).

The relevance of %%SSI|self-sovereign-identity%% shows e.g. in the negotiation phase, where %%participants|participant%% request and collect data that they need in order to make the commitment decision. In the eSSIF-Lab way of thinking, each %%participant|participant%% will collect data to serve any of the following purposes:
- to know what each of the participants (including itself) will commit itself to produce/deliver/...;
- to ensure that the value of what the participant gets exceeds the value of what it produces/delivers/...;
- to ensure that the magnitude of the %%risks|risk%% it perceives to run upon committing to the transaction, remain at an acceptable level.

Every participant is assumed to be autonomous, which means that the assessment of the value of what it gets/produces is subjective, and so is the perception of %%risks|risk%%, and the assessment of their magnitude. Hence, the need for specific kinds of data and associated assurances, all of which can be provided through %%SSI|self-sovereign-identity%% technologies, are quite subjective. It is part of the %%governance|governance%% of %%parties|party%% to define their information needs for specific kinds of %%transactions|transaction%%, which is expected to lead to the %%policies|policy%% that provide the primary guidance that %%actors|actor%% (people as well as systems) need to conduct such %%transactions|transaction%% on their behalf. Such policies would state the kinds of data needed, the %%parties|party%% that it trusts for truthfully issuing credentials that hold such data, etc.
