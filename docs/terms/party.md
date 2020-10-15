---
id: party
title: "Party"
scopeid: essifLab
type: concept
typeid: party
stage: draft
hoverText: "Party: an Entity that has Objectives, Knowledge about what exists, rules that (should) apply, and some capability that allows it to reason, make decisions, generate and maintain Knowledge etc. in a Self-Sovereign fashion."
---

### Short Description
A **party** is an %%entity|entity%% that pursues %%objectives|objective%%, and has his own, subjective, 'Self-Sovereign' %%knowledge|knowledge%% to help it realize these objectives. Perhaps one might also say: that have a mind of their own. Typical examples are individual people and %%organizations|organization%%. Their minds (subjective knowledge) are what distinguishes one party from another, so every party is 1-1 related to its knowledge (mind).

### Purpose
It is in one's mind - with one's knowledge - that objectives are being set, strategies are being devised, decisions are being made and so on. Specifically, conducting %%business transactions|business-transaction%% requires making numerous decisions, each of which is based on a subjective argument. The evaluation of such an argument requires the acquisition and processing of data, which implies additional decisions (that provide assurances that evaluation will arrive at the right conclusion), such as establishing:
- which data is required,
- what conditions such data should satisfy in order to be %%valid|validated-data%% for performing in the evaluation,
- what sources may be trusted to provide data that is (sufficiently) true,
etcetera. For all of this, it is beneficial to introduce a concept that captures this idea of %%knowledge|knowledge%% or mind in terms of _the_ entity that has it at its disposition, governs it, and has it used to realize its %%objectoves|objective%%. 

### Criterion
%%Entity|entity%% that has %%knowledge|knowledge%% about what exists, ways to reason[^1] with that knowledge, and ways for making decisions in a Self-Sovereign[^2] fashion.

### Examples
People obviously qualify. Enterprises, governments, and other organizations also qualify as they can be seen as having their own knowledge (e.g. in their registrations, databases etc.), ways to reason with that knowledge (business rules, exercised by their employees or IT systems), and making decision.

Stones, pictures, ideas, etc. do not qualify. Also, electronic components do not qualify[^3].
to be elaborated

### Background
<!--Mention and link to the patterns in which this concept plays a (significant) role (possibly explaining the reason/purpose if appropriate), e.g.: -->
The concept we know as 'party' serves a central role, and therefore occurs in various patterns, such as:
- The %%Parties, Actors and Actions pattern|pattern-party-actor-action%%, which provides an overview of how this concept fits in with related concepts.
- the %%Jurisdictions pattern|pattern-jurisdiction%%, which shows that a party can operate the %%legal-system|legal-system%% of a %%jurisdiction|jurisdiction%%, enforcing the rules in some scopes to the %%(legal) entities|legal-entity%% that it knows to exist and to which these rules apply.

---
[^1]: Reasoning means: inferring conclusions from data, regardless of the kind of logic that is being used, or whether the reasoning is coherent, or consistent.

[^2]: This means that the party can do this all by itself. For humans, the rights for this are laid down e.g. in the [ECHR](https://www.echr.coe.int "European Convention of Human Rights") ([ECHR articles 9-11](https://www.echr.coe.int/Documents/Convention_ENG.pdf))

[^3]: While the case can be made that (some) electronic components can reason, they do not do so in a self-sovereign fashion as intended by this definition. We do not want to discuss AI-equipment here.
