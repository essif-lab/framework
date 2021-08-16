---
id: pattern-identification
title: "Identification Pattern"
scopeid: essifLab
type: pattern
typeid: identification
stage: draft
hoverText: "The eSSIF-Lab Identification Pattern describes mechanisms that Parties use to identify Entities, and mechanisms for communicating with another Party such that both Parties can identify an entity and know whether or not they identify the same entity."
date: 20210803
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::info Editor's note
This is work that is being envisaged.
:::

### Purpose
The **Identification pattern** captures the concepts and relations that help to explain the mechanisms that %%parties|party%% use in order to %%identify|identify%% things they know to exist, and mechanisms for communicating with another party such that both parties can identify an entity and know whether or not they identify the same entity.

### Introduction
Identification can be an act, executed by or on behalf of a %%party|party%%, the result of which is that one %%entity|entity%% is selected from a set of (known) %%entities|entity%%. It happens, for example, if you open the door for someone, and you recognize which of the persons that you know to exist this is, then you have identified that person. Having identified this person allows you to subsequently access everything you know about him/her, i.e. the %%partial identity|partial-identity%% of him/her that is in your %%knowledge|knowledge%%, and of which the person is said to be the '%%subject|subject%%'.

Identification (of an %%entity|entity%% that is known to the %%party|party%% that performs this identification) is the communication of one or more messages by this party, the intent of which is enable parties that receive and interpret such messages to select  some message   is also sometimes taken to be a communication by a %%party|party%% (which we say has authored that communication) the purpose of which is that the party that receives and interprets this communication gets to identify the  recipient (interpreter) of that communication  to another party of which the purpose is that this second party will (learn to) identify the %%entity|entity%%   of which is that this other party identifies y to  is the author, with another %%party|party%% that one %%entity|entity%% is selected from a set of (known) %%entities|entity%%.

If you do not have a recollection of that person, i.e. your knowledge has no partial identity of that person, then you obviously cannot identify him/her.

However, you can start to create a %%partial identity|partial-identity%% for that person, i.e. attribute the person with characteristics that are meaningful to you (see als the %%identity pattern|pattern-identity%%), of which you would accumulate more and more over time, and change them as you gain experience with him/her. Note that such a %%partial identity|partial-identity%% is distinct from its %%subject|subject%%, i.e. the person to which the characteristics (that make up the %%partial identity|partial-identity%%) are attributed. In order to identify this %%partial identity|partial-identity%%, a knowledge usually has an %%identifier|identifier%% that allows it to distinguish between this partial identity and all others it contains. As this identifier can also be seen as a characteristic that is attributed to the person, it is also part of that person's partial identity. It is customary to refer to this identifier as the '%%subject|subject%% identifier' of the partial identity.

[REVISE FURTHER FROM HERE]
- idea: there needs to be a way to identify a person, i.e. recall its partial identity. An often used way is to use the %%subject|subject%% identifier, but one may also use other subsets of attributed characteristics.


For example, in a court of law, a witness can be asked to identify the person that caused the mischief, i.e. select that person from the set of people that are present. As another example, when a user logs into a computer system, this system needs to identify the the user's account, i.e. select that account from all other accounts.

It is a common practice to use %%identifiers|identifier%% for identification purposes. For example, a username typically serves to identify a user account. However, %%identifiers|identifier%% do not necessarily have the property of (always) identifying some entity. For example, the identifier 'localhost' would identify a web server on your laptop computer, but in the context of other computers it would identify other web servers. Also, in the context of war planes, 'B52' would identify a specific kind of [bomber plane](https://en.wikipedia.org/wiki/The_B-52%27s), while in the context of some airports (e.g. [Amsterdam Schiphol Airport](https://foursquare.com/v/position-b52/4e270f7818380c0d4dfd15b7/photos)), it identifies a gate. In other contexts, it would represent some [kind of cocktail](https://en.wikipedia.org/wiki/B-52_(cocktail)).

Tacit or explicit agreements may exist, sometimes in the form of standards, that enable specific kinds of identifiers to function as 'coherence carriers' between different contexts.



Identification can also be a process in which a %%party|party%% collects characteristics (attributes) of an entity to the extent that there is only one entity (in the set of all entities that it knows to exist) that has all of them. For example, if you phone your insurance company to file a claim, you need to provide characteristics that enable the the company's employee to find the policy (if it exists at all) under which the claim must be serviced. It may suffice to provide the name of the insured person, e.g. if it is a not too common name, and the person has a single insurance policy with the company. If it is a common name, another attribute such as date of birth may be required. If the person has multiple policies, the kind of policy must be provided.


### Formalized model
Here is a visual representation of this pattern, using the following [notations and conventions](../notations-and-conventions#pattern-diagram-notations):

<img
  alt="Conceptual model of the 'Identification' pattern"
  src={useBaseUrl('images/patterns/pattern-identification.png')}
/>

The figure shows that an %%entity|entity%% that is known by any number of %%parties|party%%. This implies that the party has %%knowledge|knowledge%% about this entity, which can be expressed in terms of characteristics that are defined in that knowledge. Obviously, the exact nature of such characteristics is determined by that party (i.e.: defined in its knowledge). For example, a characteristic such as 'trustworthiness' is something that every party has its own ideas about.

The party can author attributes, i.e. combinations of predicates and values ('key-value' pairs) that it assigns to (the %%partial identity|partial-identity%% that this party %%owns|owner%% and that this party maintains for) that entity, which is referred to as the '%%subject|subject%%' of that attribute (and that partial identity).

Note that every %%party|party%% is also an entity. This means that any number of parties, including itself, may have knowledge about that party, and create and maintain (i.e. %%own|owner%% and author) any number of attributes that together form a %%partial identity|partial-identity%% for which this first party is the %%subject|subject%%. Specifically, a party may have a partial identity for which it is the %%subject|subject%% itself (the 'self-image').

The relevance of all this is whenever a %%party|party%% issues a %%credential|credential%%, then all %%claims|assertion%% that have the same %%subject|subject%% must originate from the single %%partial identity|partial-identity%% that is owned by said %%party|party%%, and it is that party that must have signed the credential.

### References

Earlier ideas for this can be found in "[Putting Identifiers in the Context of eHealth](https://link.springer.com/content/pdf/10.1007/978-0-387-79026-8_27.pdf)"


### Discussion - Scope of Identification
[RFC 3986, Section 1.1.](https://tools.ietf.org/html/rfc3986#section-1.1) states _"an identifier embodies the information required to distinguish what is being identified from all other things within <u>its</u> **scope of identification"**_. This statement suggests that identifiers (URIs) have a single scope, supposedly specified by "_the URI schemes and naming authority (if any)_". However, there is no such requirement, and there is nothing in place to guarantee this (apart from IANA, many other (sometimes even very commonly used) URI schemes exist). [Pfitzmann and Hansen (2010)](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) (section 13.2) use the term 'identifiability sets' rather than 'scope of identification', and describe how 'attackers' - but that could equally well have been regular users - each have, or construct their own scope, and use contextual information to do so.

The criterion that makes a text string qualify as an identifier doesn't seem to cut it, as only _using_ a text for identification purposes doesn't make it have (what we will call) the 'identification property', i.e. the property that it _actually_ identifies something. It may only have that property in combination with an associated (single) scope of identification, which may depend on the context in which it is being used. [RFC 2986, page 6](https://tools.ietf.org/html/rfc3986#page-6) illustrates this using the identifier "http://lcoalhost/".

The lack of (identifying) scopes of identification becomes an issue when a %%party|party%% (say Alice) sends the identifier (e.g. `my car`) to another %%party|party%% (say Bob), expecting that Bob will then be able to identify the same %%entity|entity%% that she identifies with it (presumably some specific car).

If Bob had just met Alice for the first time, and hadn't seen her coming in a car, then Alice must acquaint Bob with the existence of the %%entity|entity%% that she refers to with `my car`, e.g. by pointing her finger to it, or describing the make, brand and license plate or some other characteristic that allows Bob to single out her car (in the context of their meeting one another). Then, Bob can 'register' the existence of that car in his %%knowledge|knowledge%% (optionally tagging it with an identifier of his own, e.g. `Alice's car`), and associate it with the attribute (party='Alice', identifier='`my car`'). It is important to have the "party='Alice'" part in there, because other parties, (e.g. Carol) may also use an identifier `my car`, which would and should then refer to another car. This shows that the scope of interpretation for an identifier has to do with the (%%knowledge|knowledge%% of) %%parties|party%% that use it, and that understanding the intended meaning requires a proper identification of that scope.
