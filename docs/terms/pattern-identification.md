---
id: pattern-identification
title: "Identification Pattern"
scopeid: essifLab
type: pattern
typeid: identification
stage: draft
hoverText: "The eSSIF-Lab Identification Pattern describes the mechanisms that Parties use in order to identify things they know to exist"
date: 20210803
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## Purpose
The **Identification pattern** captures the concepts and relations that help to explain the mechanisms that %%parties|party%% use in order to %%identify|identifier%% things they know to exist, and how they can be put to use in %%SSI contexts|self-sovereign-identity%%.

### Introduction
The term 'identity' is [used in many ways](https://en.wikipedia.org/wiki/Identity) in different contexts, and is often related to intangibles, such as feelings, emotions, ideas of belonging, and the like. However, %%SSI contexts|self-sovereign-identity%%, we need to work with tangible things - specifically: data that can be issued, stored, processed, transferred, requested and obtained.

When limiting ourselves to data, then 'identity' can still have various interpretations. We have heard people use the term to refer to
- documents that contain data about someone, e.g. a passport,
- data about someone, e.g. a set of %%claims|assertion%%, or
- a string of alphanumeric characters, e.g. an %%identifier|identifier%%.

Since 'identity' is mostly related to indiviual people, it seems reasonable to define it in terms that are closely related to the [GDPR definition of personal data](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e1489-1-1), e.g. as "any information relating to an identified or identifiable natural person ('data subject'); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person."

More or less congruent with this (but more specific) is the set of notions that [Pfitzmann and Hansen (2010)](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) developed, namely
- *attribute*: a quality or characteristic of an entity or an action; some attributes make take several values.
- *identity*: any subset of attribute values of an individual person which sufficiently identifies this individual person within any set of persons. This means there usually is no such thing as “the identity”, but several of them.
- *complete identity*: the union of all attribute values of all identities of this person. Usually however, nobody, including the person concerned, will know “all” attribute values or “all” identities.
- *partial identity*: a subset of attribute values of a complete identity.
The authors assume that any identity of a person suffices to %%identify|identifier%% that person, wheras a partial identity may or may not suffice.

In order to operationalize these ideas in %%SSI contexts|self-sovereign-identity%%, we need to be able to express this in terms of data (attributes, %%credentials|credential%%) that can be issued, processed, stored, presented, requested and obtained. Letting ourselves be inspired by the above, and generalizing these ideas to arbitrary %%entities|entity%% (rather than only individual people), we define
- [attribute](https://en.wikipedia.org/wiki/Attribute_(computing)): the combination of a predicate and a value (a 'key-value' pair) that is attributed/assigned by a specific %%party|party%% to an %%entity|entity%% it knows to exist. The %%entity|entity%% is referred to as the *subject* of that attribute. The %%party|party%% is also referred to as the author of the attribute. Also, this party is the %%owner|owner%% of that attribute, as it typically represents a part of the %%knowledge|knowledge%% that this %%party|party%% has about the %%entity|entity%%.
- %%partial identity|partial-identity%%: all %%knowledge|knowledge%% that a specific %%party|party%% has about that %%entity|entity%%. This %%entity|entity%% is referred to as the *subject* of the partial identity. The %%party|party%% fulfills the role of %%owner|owner%% of the partial entity, as the partial identity is part of the %%knowledge|knowledge%% that this party owns.
- %%identity|identity%% (of an %%entity|entity%%): the union of all %%partial identities|partial-identity%% of which that %%entity|entity%% is the subject. This is saying with different words what [Pfitzmann and Hansen (2010)](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) call the "complete identity".

### Formalized model
Here is a visual representation of this pattern, using the following [notations and conventions](../notations-and-conventions#pattern-diagram-notations):

<img
  alt="Conceptual model of the 'Identity' pattern"
  src={useBaseUrl('images/patterns/pattern-identity.png')}
/>

The figure shows that an %%entity|entity%% that is known by any number of %%parties|party%%. This implies that the party has %%knowledge|knowledge%% about this entity, which can be expressed in terms of characteristics that are defined in that knowledge. Obviously, the exact nature of such characteristics is determined by that party (i.e.: defined in its knowledge). For example, a characteristic such as 'trustworthiness' is something that every party has its own ideas about.

The party can author attributes, i.e. combinations of predicates and values ('key-value' pairs) that it assigns to (the %%partial identity|partial-identity%% that this party %%owns|owner%% and that this party maintains for) that entity, which is referred to as the 'subject' of that attribute (and that partial identity).

Note that every %%party|party%% is also an entity. This means that any number of parties, including itself, may have knowledge about that party, and create and maintain (i.e. %%own|owner%% and author) any number of attributes that together form a %%partial identity|partial-identity%% for which this first party is the subject. Specifically, a party may have a partial identity for which it is the subject itself (the 'self-image').

The relevance of all this is whenever a %%party|party%% issues a %%credential|credential%%, then all %%claims|assertion%% that have the same subject must originate from the single %%partial identity|partial-identity%% that is owned by said %%party|party%%, and it is that party that must have signed the credential.

### References

Earlier ideas for this can be found in "[Putting Identifiers in the Context of eHealth](https://link.springer.com/content/pdf/10.1007/978-0-387-79026-8_27.pdf)"
