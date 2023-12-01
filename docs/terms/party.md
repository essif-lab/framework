---
id: party
title: "Party"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termType: concept
term: party
formPhrases: part{yies}
status: draft
grouptags:
hoverText: "Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."
glossaryTerm: "Party"
glossaryText: "an [entity](@) that sets its [objective](@), maintains its [knowledge](@), and uses that [knowledge](@) to pursue its [objective](@) in an autonomous (sovereign) manner. Humans and [organization](@) are the typical examples."
date: 20210601
---

### Short Description
A **party** is an [entity](@) that sets its [objectives](@), maintains its [knowledge](@), and uses that [knowledge](@) to pursue its [objectives](@) in an autonomous (sovereign) manner. One might say that they have a mind of their own. Typical examples are individual people and [organizations](@). Their minds (subjective knowledge) are what distinguishes one [party](@) from another, so every [party](@) is 1-1 related to its knowledge (mind).

Specifically, every party autonomously manages its
- [knowledge (information)](knowledge@). It means that every [party](@) gets to decide for itself what it believes to be true, what to trust (and what not), what objectives it wants to pursue, how much [risks](@) it wants to run, what are valid ways of reasoning (not necessarily logical), how to reach conclusions and make decisions. The knowledge of a party changes continuously as information is added, modified, or deleted - no reasons needed.
- [semantics](@), i.e. the mapping between parts of its knowledge and the [data](@) he uses to represent such parts, as well as the mapping between [data](@) that it receives and the meaning he interprets such data to be associated with.
- [data](@), i.e. the tangible representation of a subset of its intangible [knowledge](@) that it uses to communicate with others, to remember (store), or process.

It is important to note that:
- parties do not have the ability to [act](actor@). This, however, does not preclude that specializations of parties exist that do have this ability) (e.g. [human beings](human-being@)). The relation between parties, actors and acting is explained in the [Parties, Actors and Actions pattern](pattern-party-actor-action@).
- parties can own, or be, [jurisdictions](@); this is further explained in the [Jurisdictions pattern](pattern-jurisdiction@).

### Purpose
It is in one's mind - with one's knowledge - that objectives are being set, strategies are being devised, decisions are being made and so on. Specifically, interacting with others, e.g. to conduct [business transactions](transaction@), requires making numerous decisions, each of which is based on a subjective argument. The evaluation of such an argument requires the acquisition and processing of data, which implies additional decisions (that provide assurances that evaluation will arrive at the right conclusion), such as establishing:
- which data is required,
- what conditions such data should satisfy in order to be [valid](validate@) for performing in the evaluation,
- what sources may be trusted to provide data that is (sufficiently) true,
etcetera. For all of this, it is beneficial to introduce a concept that captures this idea of [knowledge](@) or mind in terms of _the_ entity that has it at its disposition, governs it, and has it used to realize its [objectives](@).

### Criterion
[Entity](@) that is the 'sovereign' over a [body of knowledge (information)](knowledge@), which means that it decides about, and can be asked to account for:
- the [body of knowledge](knowledge@) itself, and the (continuous) changes in it, e.g. concerning
  - the interpretation of [data](@) that it has received
  - judgements it makes about such data, e.g. about what to (not) trust, what is (not) true, what is (not) valuable,
  - (other) decisions that it makes based on its knowledge, e.g. regarding (in)valid ways of reasoning[^1], what objectives (not) to pursue, what [risks](@) it runs and opportunities it has, what rules to (not) comply with etc.
- its [semantics](@), i.e.
  - the mappings that it uses to convert [data](@) to knowledge and
  - the mappings it uses to convert its knowledge into data,
  - the criteria for determining which of these mappings to use in different contexts;
- its [data](@), i.e. the tangible representations of a subset[^2] of its knowledge that it uses, e.g. to communicate with others (e.g. in messages), to remember (store it somewhere), or to further process.

### Examples
People obviously qualify. Enterprises, governments, and other organizations also qualify as they can be seen as having their own knowledge (e.g. in their registrations, databases etc.), ways to reason with that knowledge (business rules, exercised by their employees or IT systems), and making decision.

Human beings are specifically attributed the rights to be sovereign over their own knowledge, in the freedoms of information gathering, forming an opinion, and the freedom of speech, e.g. in the [ECHR](https://www.echr.coe.int "European Convention of Human Rights") ([ECHR articles 9-11](https://www.echr.coe.int/Documents/Convention_ENG.pdf))

Stones, pictures, ideas, etc. do not qualify. Also, electronic components do not qualify[^3].

### Related Terms
The term '[Identity Owner](https://docs.google.com/document/d/1gfIz5TT0cNp2kxGMLFXr19x1uoZsruUe_0glHst2fZ8/edit#heading=h.2e5lma3u6c9g)' (from the [Sovrin Glossary](https://sovrin.org/library/glossary/)) is quite similar for this term, as becomes apparent from its [Taxonomy of Entities](https://docs.google.com/document/d/1gfIz5TT0cNp2kxGMLFXr19x1uoZsruUe_0glHst2fZ8/edit#heading=h.mq7pzglc1j96). However, there it is defined as "_the subclassifications of Sovrin Entity that may be held legally accountable_", which does not fit in our model because:
- it is a subclass of Sovrin Entity, and Parties need not necessarily be Sovrin Entities;
- legal accountability can only be meaningful for [legal entities](legal-entity@) within a [jurisdiction](@) that has established criteria for determining which of their [legal entities](legal-entity@) can be accountable for what.
- The Sovrin definition does not associate an Identity Owner with [knowledge](@).


[^1]: Reasoning means: inferring conclusions from data, regardless of the kind of logic that is being used, or whether the reasoning is coherent, or consistent.

[^2]: Parties need not make all their knowledge tangible; specifically, people are known to know much more than they can ever express (convert into [data](@))

[^3]: While the case can be made that (some) electronic components can reason, they do not do so in a self-sovereign fashion as intended by this definition. We do not want to discuss AI-equipment here.
