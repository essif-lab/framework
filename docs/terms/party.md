---
id: Party
title: "Party"
scopeid: essifLab
type: concept
typeid: Party
stage: draft
hoverText: "Party: an Entity that has Objectives, Knowledge about what exists, rules that (should) apply, and some capability that allows it to reason, make decisions, generate and maintain Knowledge etc. in a Self-Sovereign fashion; Humans and Organizations ar the typical examples."
glossaryText: "an %%entity^entity%% that has %%objectives^objective%%, %%knowledge^knowledge%% about what exists, rules that (should) apply, and some capability that allows it to reason, make decisions, generate and maintain %%knowledge^knowledge%% etc. in a self-Sovereign fashion; humans and %%organizations^organization%% ar the typical examples."
---

### Short Description
A **party** is an %%entity|entity%% that pursues %%objectives|objective%%, and has his own, subjective, 'Self-Sovereign' %%knowledge|knowledge%% to help it realize these objectives. Perhaps one might also say: that have a mind of their own. Typical examples are individual people and %%organizations|organization%%. Their minds (subjective knowledge) are what distinguishes one %%party|party%% from another, so every %%party|party%% is 1-1 related to its knowledge (mind).

The concept we know as 'party' serves a central role, and therefore occurs in various patterns, such as:
- The %%Parties, Actors and Actions pattern|pattern-party-actor-action%%, which provides an overview of how this concept fits in with related concepts.
- the %%Jurisdictions pattern|pattern-jurisdiction%%, which shows that a %%party|party%% can operate the %%legal system|legal-system%% of a %%jurisdiction|jurisdiction%%, enforcing the rules in some scopes to the %%(legal) entities|legal-entity%% that it knows to exist and to which these rules apply.

### Purpose
It is in one's mind - with one's knowledge - that objectives are being set, strategies are being devised, decisions are being made and so on. Specifically, conducting %%business transactions|transaction%% requires making numerous decisions, each of which is based on a subjective argument. The evaluation of such an argument requires the acquisition and processing of data, which implies additional decisions (that provide assurances that evaluation will arrive at the right conclusion), such as establishing:
- which data is required,
- what conditions such data should satisfy in order to be %%valid|validated-data%% for performing in the evaluation,
- what sources may be trusted to provide data that is (sufficiently) true,
etcetera. For all of this, it is beneficial to introduce a concept that captures this idea of %%knowledge|knowledge%% or mind in terms of _the_ entity that has it at its disposition, governs it, and has it used to realize its %%objectoves|objective%%. 

### Criterion
%%Entity|entity%% that has %%knowledge|knowledge%% about what exists, ways to reason[^1] with that knowledge, and ways for making decisions in a Self-Sovereign[^2] fashion.

### Examples
People obviously qualify. Enterprises, governments, and other organizations also qualify as they can be seen as having their own knowledge (e.g. in their registrations, databases etc.), ways to reason with that knowledge (business rules, exercised by their employees or IT systems), and making decision.

Stones, pictures, ideas, etc. do not qualify. Also, electronic components do not qualify[^3].

### Related Terms
The term '[Identity Owner](https://docs.google.com/document/d/1gfIz5TT0cNp2kxGMLFXr19x1uoZsruUe_0glHst2fZ8/edit#heading=h.2e5lma3u6c9g)' (from the [Sovrin Glossary](https://sovrin.org/library/glossary/)) is quite similar for this term, as becomes apparent from its [Taxonomy of Entities](https://docs.google.com/document/d/1gfIz5TT0cNp2kxGMLFXr19x1uoZsruUe_0glHst2fZ8/edit#heading=h.mq7pzglc1j96). However, there it is defined as "_the subclassifications of Sovrin Entity that may be held legally accountable_", which does not fit in our model because:
- it is a subclass of Sovrin Entity, and Parties need not necessarily be Sovrin Entities;
- legal accountability can only be meaningful for %%legal entities|legal-entity%% within a %%jurisdiction|jurisdiction%% that has established criteria for determining which of their %%legal entities|legal-entity%% can be accountable for what.
- The Sovrin definition does not associate an Identity Owner with %%knowledge|knowledge%%. 

---
[^1]: Reasoning means: inferring conclusions from data, regardless of the kind of logic that is being used, or whether the reasoning is coherent, or consistent.

[^2]: This means that the %%party|party%% can do this all by itself. For humans, the rights for this are laid down e.g. in the [ECHR](https://www.echr.coe.int "European Convention of Human Rights") ([ECHR articles 9-11](https://www.echr.coe.int/Documents/Convention_ENG.pdf))

[^3]: While the case can be made that (some) electronic components can reason, they do not do so in a self-sovereign fashion as intended by this definition. We do not want to discuss AI-equipment here.
