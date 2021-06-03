---
id: identity
title: "Identity"
scopeid: essifLab
type: concept
typeid: identity
stage: draft
hoverText: "Identity (of an Entity): the union of all Partial Identities of which the Entity is the subject."
glossaryText: "the union of all %%partial identities^partial-identity%% of which the %%entity^entity%% is the subject."
date: 20210601
---

### Short Description
**Identity** is a term that is heavily debated. For our purposes, it is useful to see the identity of a person as the union of all characteristics, judgements and other %%knowledge|knowledge%% that %%parties|party%% have about that person. Generalizing this idea, we say that the identity of any %%entity|entity%% consists of the combined %%knowledge|knowledge%% (that is: of all %%parties|party%% that know) about this entity.

Inspired by [Pfitzmann and Hansen (2010)](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf), we define a %%partial identity|partial-identity%% (of an %%entity|entity%%) as all the %%knowledge|knowledge%% that a single, specific %%party|party%% has about that entity (= the 'subject' of the %%partial identity|partial-identity%%). The identity of an entity is then the union/collection of all of its %%partial identities|partial-identity%%.

The [Self-Identity](https://en.wikipedia.org/wiki/Self-concept) or [Self-concept](https://en.wikipedia.org/wiki/Self-concept) of a %%party|party%% is the %%partial identity|partial-identity%% of which it is both the subject and the %%owner|owner%%.

### Purpose
The purpose of defining the term **Identity** is to make people aware that within the context of [our framework](../essifLab-fw) SSI as we see it

### Criterion
An **Identity** is a character string that is being used for identification purposes by a specific %%party|party%%.

### Examples
The following strings are examples: 'localhost', 'https://localhost/', 'Trust over IP community', 'the mayor of New York', 'guardianship', 'my mother', 'did:sov:2wJPyULfLLnYTEFYzByfUR', 'did:sov:2wJ', 'issue #24', etc., etc.

### Discussion - Scope of Identification
[RFC 3986, Section 1.1.](https://tools.ietf.org/html/rfc3986#section-1.1) states _"an identity embodies the information required to distinguish what is being identified from all other things within <u>its</u> **scope of identification"**_. This statement suggests that identitys (URIs) have a single scope, supposedly specified by "_the URI schemes and naming authority (if any)_". However, there is no such requirement, and there is nothing in place to guarantee this (apart from IANA, many other (sometimes even very commonly used) URI schemes exist). [Pfitzmann and Hansen (2010)](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) (section 13.2) use the term 'identifiability sets' rather than 'scope of identification', and describe how 'attackers' - but that could equally well have been regular users - each have, or construct their own scope, and use contextual information to do so.

The criterion that makes a text string qualify as an identity doesn't seem to cut it, as only _using_ a text for identification purposes doesn't make it have (what we will call) the 'identification property', i.e. the property that it _actually_ identifies something. It may only have that property in combination with an associated (single) scope of identification, which may depend on the context in which it is being used. [RFC 2986, page 6](https://tools.ietf.org/html/rfc3986#page-6) illustrates this using the identity "http://lcoalhost/".

The lack of (identifying) scopes of identification becomes an issue when a %%party|party%% (say Alice) sends the identity (e.g. `my car`) to another %%party|party%% (say Bob), expecting that Bob will then be able to identify the same %%entity|entity%% that she identifies with it (presumably some specific car).

If Bob had just met Alice for the first time, and hadn't seen her coming in a car, then Alice must acquaint Bob with the existence of the %%entity|entity%% that she refers to with `my car`, e.g. by pointing her finger to it, or describing the make, brand and license plate or some other characteristic that allows Bob to single out her car (in the context of their meeting one another). Then, Bob can 'register' the existence of that car in his %%knowledge|knowledge%% (optionally tagging it with an identity of his own, e.g. `Alice's car`), and associate it with the attribute (party='Alice', identity='`my car`'). It is important to have the "party='Alice'" part in there, because other parties, (e.g. Carol) may also use an identity `my car`, which would and should then refer to another car. This shows that the scope of interpretation for an identity has to do with the (%%knowledge|knowledge%% of) %%parties|party%% that use it, and that understanding the intended meaning requires a proper identification of that scope.

-----
[^1]: This is the definition of [RFC 3986, Section 1.1.](https://tools.ietf.org/html/rfc3986#section-1.1) but without the requirement of complying with URI syntax constraints. Note that there is consensus in the literature about this. For example, [(Allen, 2016)](http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html) defines 'Identity' as “A name or other label that uniquely identifies an identity.”. [Pfitzmann and Hansen, 2010](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) say (in footnote 57): “A name or another bit string”. The [DID-core specification](https://www.w3.org/TR/did-core/) of W3C [defines 'decentralized identitys' as specializations of URIs](https://www.w3.org/TR/did-core/#dfn-decentralized-identitys).
