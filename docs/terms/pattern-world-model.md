---
id: pattern-world-model
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termType: pattern
term: world-model
formPhrases: world-model
status: draft
grouptags:
glossaryTerm: eSSIF-Lab World Model Pattern
glossaryText: "a set of [concepts](@) and other [semantic units](@) that can be used to explain the principles that are the starting point for eSSIF-Lab's thinking."
hoverText: "The eSSF-Lab World Model is the set of Concepts, relations between them (Patterns), and principles (that are the starting point for eSSIF-Lab's thinking)."
glossaryTerm: "eSSIF-Lab World Model"
glossaryText: "the set of [concept](@), relations between them ([pattern](@)), and [Principles](essifLab-principles) (that are the starting point for eSSIF-Lab's thinking)."
date: 20211101
---

# eSSIF-Lab World Model

import useBaseUrl from '@docusaurus/useBaseUrl'

## eSSIF-Lab World Model

The **eSSIF-Lab World Model** consists of
- the set of [concepts](@), as listed in the [Glossary](../essifLab-Glossary),
- relations between these concepts, as explained in the various concept-descriptions, and in the various [patterns](@), as listed in the [Patterns List](../essifLab-pattern-list), and
- a set of [Principles](../essifLab-principles) that we take as starting points for our thinking.

<img
  alt="George E.P. Box: All models are wrong, but some are useful"
  src={useBaseUrl('images/essif-lab-all-models-are-wrong.png')}
/>

We emphasize that the world model we propose is also 'wrong' (in the sense of G. Box). However, we did make a serious effort for it to be useful: it is meant to serve as a sound basis for designing, implementing and deploying architectures, processes and technologies that aim to support (autonomous, [self-sovereign](self-sovereignty@)) [parties](@) as they negotiate and execute electronic [transactions](@) with one another.

Our model contains several ways of thinking that may seem somewhat 'alien', in the sense that they do not appear to follow common thought patterns. Where you notice that, you will need to choose which way of thinking you want to follow. We suggest you temporarily suspend the common ways of thinking (you can always go back to your own ways of thinking), and give this 'alien' eSSIF-Lab way of thinking a serious try. By 'serious' we mean that you make an effort to actually understand what we're trying to say and do. We certainly made an effort to make this as easy as we could, e.g. by being very precise in our definitions, and changing texts according to what we have heard people say.

Here, we only introduce/summarize the most fundamental concepts (and their properties) of the eSSIF-Lab world model. You are encouraged to browse on, clicking on the [terms](@) you want to know more about, or reading up on the [mental models](pattern@) that provide the coherence between them.

### The Universe consists of Entities

eSSIF-Lab sees the world (universe) as being filled with [entities](@), i.e. things (people and animals included) that exist. Our world view is shaped by the distinctions that eSSIF-Lab makes as it classifies such entities into well-defined categories, each of which having specific characteristics.

### Parties: Entities that manage and use a Knowledge autonomously

One of the most fundamental of such categories is called [party](@). A party is defined as an [entity](@) that manages and uses its own [knowledge](@) autonomously. It is its own sovereign, i.e. within its [scope of control](@), everything is guided by its own, subjective [knowledge](@). This includes all decision making, execution of [actions](@), [risks](@), [governance](@), etc., etc. Typical examples include [organizations](@) (governments, enterprises) and individual human beings. Note that while [parties](@) cannot be assumed to be capable of doing things (e.g. [organizations](@)). However, they, as any other [party](@), can [employ](employer@) [actors](@) to work for them, i.e. execute [actions](@) on their behalf.

We postulate that every party has [objectives](@) that it pursues. A large part of its [knowledge](@) revolves about [governing](governance@) and/or [managing](management@) these [objectives](@) (which includes [risk management](@)) and making sure they get realized.

While [parties](@) are their own (self-)sovereigns and in principle can do as they please, they live in a universe with many other parties, that are also 'self-sovereigns'. This means that they need to come to terms with one another as they have interactions with one another that may influence the [knowledge](@) of the participating parties, and have other consequences as well. Such [transactions](@) between parties is not only one of the focal points of this framework: it is the reason we created it.

You can learn more about parties from the [parties, actors and action pattern](pattern-party-actor-action@).


### Actors: Entities that can act (do things)

Another fundamental category is called [actor](@), which is defined as an [entity](@) that can act (do things). It is important to note that while some entity classes (e.g. human beings) qualify as both [actors](@) and [parties](@), other entity classes do not (e.g. [organizations](@), or robots). As an actor does something (executing an [action](@)), it uses the [knowledge](@) of one specific [party](@) as the main/dominant guidance for executing that action, yet it may also use [knowledge](@) of other [parties](@) when such is necessary to properly execute the action. We say that the [actor](@) is executing that [action](@) on behalf of that [party](@). [Actors](@) may execute different [actions](@) on behalf of different [parties](@). It is a particular contribution of this [framework](@) that using it allows one to determine which [actor](@) executes what [action](@) on behalf of what [party](@). This is particularly relevant in the context of two interacting/transacting parties.

You can learn more about actors from the [parties, actors and action pattern](pattern-party-actor-action@).

### Jurisdiction: Authority with mechanisms for defining rules, enforcing them, and resolving disputes

A third fundamental category is called [jurisdiction](@), which is a foundational concept for organizing collaborations between [parties](@), e.g. in [communities](@) or [ecosystems](@). Basically, a jurisdiction is an [authority](@) that has mechanisms for defining and maintaining rules, enforcement thereof, and a mechanism for resolving conflicts within its [scope of control](@).

You can learn more about jurisdictions from the [jurisdictions pattern](pattern-jurisdiction@).

### Transactions: the exchange of goods, services, funds, or data between parties

The last fundamental category is the [transaction](@), i.e. the exchange of goods, services, funds, or data between [parties](@).

We follow the [*DEMO*](https://en.wikipedia.org/wiki/Design_%26_Engineering_Methodology_for_Organizations) transactions pattern, which divides [transactions](@) in three phases:
- a **negotiation phase**, in which one or more ([agents](@) of each) [participant](@) exchange data for the purpose of establishing a [contract](transaction-agreement@) that specifies what the [transaction](@) entails. This phase results either in a commitment decision of all [participants](@), or the termination of the [transaction](@) because one of them quits.
- an **execution phase**, in which ([agents](@) of) the same principals work (execute actions) to fulfill the [obligations](@) of the agreement. This phase results in them stating that they have completed that work (or that they gave up).
- the **acceptance phase**, in which one or more ([agents](@) of the) [participants](@) exchange data that leads to a decision to accept the results, or to escalate (e.g. start a lawsuit against the other [participant](@)).

The relevance of [SSI](self-sovereign-identity@) shows e.g. in the negotiation phase, where [participants](@) request and collect data that they need in order to make the commitment decision. In the eSSIF-Lab way of thinking, each [participant](@) will collect data to serve any of the following purposes:
- to know what each of the participants (including itself) will commit itself to produce/deliver/...;
- to ensure that the value of what the participant gets exceeds the value of what it produces/delivers/...;
- to ensure that the magnitude of the [risks](@) it perceives to run upon committing to the transaction, remain at an acceptable level.

Every participant is assumed to be autonomous, which means that the assessment of the value of what it gets/produces is subjective, and so is the perception of [risks](@), and the assessment of their magnitude. Hence, the need for specific kinds of data and associated assurances, all of which can be provided through [SSI](self-sovereign-identity@) technologies, are quite subjective. It is part of the [governance](@) of [parties](@) to define their information needs for specific kinds of [transactions](@), which is expected to lead to the [policies](@) that provide the primary guidance that [actors](@) (people as well as systems) need to conduct such [transactions](@) on their behalf. Such policies would state the kinds of data needed, the [parties](@) that it trusts for truthfully issuing credentials that hold such data, etc.
