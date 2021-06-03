---
id: pattern-identity
title: "Identity Pattern"
scopeid: essifLab
type: pattern
typeid: identity
stage: draft
hoverText: "The eSSIF-Lab Identity Pattern describes one of many ways one can think about 'Identity'."
date: 20210601
---

:::info Editor's note
This is work in progress
:::

The idea here is to define 'identity' as the set of all attributes that pertain to some entity (insipred by the work of [Pfitzmann and Hansen (2010)](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf)).

Since:
- an attribute of an entity is an expression of a characteristic that a Party has attributed to that entity;
- different Parties may attribute different characteristics to the same entity (even conflicting ones);
- Parties are entities, and hence can attribute characteristics to themselves;
it follows that
- we may need to introduce a notion such as 'partial identity (of an entity)', which is the set of all characteristics that have been attributed by a single Party to said entity. Thus, a partial identity is conceieved of by a single Party, and is hence part of its Knowledge, and coherent to the point that coherence is an attribute of that Knowledge.
- an identity consists of all partial identities that are conceived by parties that know of that entities existence.
- Parties must be expected to have a 'self-identity', i.e. a partial identity that they have conceived of about themselves.

Typically, when a party issues a credential about some entity, that credential should contain a subset of the characteristics of the partial identity that the party has conceived of for that entity (that is under the assumption that this party doesn't lie, which is hardly self-evident).
