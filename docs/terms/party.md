---
id: party
title: "Party"
scopeid: essifLab
type: concept
typeid: party
stage: draft
hoverText: "Party: Entity that has knowledge about what exists, ways to reason with that knowledge, and ways for making decisions in a Self-Sovereign fashion."
---

### Short Description

### Purpose

### Criterion
Entity that has knowledge about what exists, ways to reason[^1] with that knowledge, and ways for making decisions in a Self-Sovereign[^2] fashion.

### Examples
People obviously qualify. Enterprises, governments, and other organizations also qualify as they can be seen as having their own knowledge (e.g. in their registrations, databases etc.), ways to reason with that knowledge (business rules, exercised by their employees or IT systems), and making decision.

Stones, pictures, ideas, etc. do not qualify. Also, electronic components do not qualify[^3].
to be elaborated

### Background
<!--Mention and link to the patterns in which this concept plays a (significant) role (possibly explaining the reason/purpose if appropriate), e.g.: -->
The concept we know as 'party' serves a central role, and therefore occurs in various patterns, suc as:
- The %%party-actor-action|pattern-party-actor-action%% provides an overview of how this concept fits in with related concepts.
- the %%jurisdiction pattern|pattern-jurisdiction%%, which shows that a party can operate the %%legal-system|legal-system%% of a %%jurisdiction|jurisdiction%%, enforcing the rules in some scopes to the %%(legal) entities|legal-entity%% that it knows to exist and to which these rules apply.

---
[^1]: Reasoning means: inferring conclusions from data, regardless of the kind of logic that is being used, or whether the reasoning is coherent, or consistent.

[^2]: This means that the party can do this all by itself. For humans, the rights for this are laid down e.g. in the [ECHR](https://www.echr.coe.int "European Convention of Human Rights") ([ECHR articles 9-11](https://www.echr.coe.int/Documents/Convention_ENG.pdf))

[^3]: While the case can be made that (some) electronic components can reason, they do not do so in a self-sovereign fashion as intended by this definition. We do not want to discuss AI-equipment here.
