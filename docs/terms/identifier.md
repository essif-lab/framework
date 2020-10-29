---
id: identifier
title: "Identifier"
scopeid: essifLab
type: concept
typeid: identifier
stage: draft
hoverText: "Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used)."
glossaryText: "a character string that is being used for the identification of some %%entity^entity%% (yet may refer to 0, 1, or more %%entities^entity%%, depending on the context within which it is being used)."
---

### Short Description
An **Identifier** is a character string that is being used for identification purposes (by a specific %%party|party%%).[^1] This includes names and labels, as they are (obviously) used for such purposes.

Note that while an identifier is used for identification purposes, <u>this does not automatically imply that it actually identifies (singles out) anything</u>. It also depends on what [RFC 3986](https://tools.ietf.org/html/rfc3986) calls the 'scope of identification', or what [Pfitzmann and Hansen](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) refer to as an 'identifiability set', which are relevant for explaining whether or not (and if so: what) an identifier actually identifies (singles out) in a given context. See the [Discussion](./identifier#discussion---scope-of-identification) below.

### Purpose
%%Parties|party%% have a need to reason about %%things|entity%% they %%know|knowledge%% to exist, which requires them to have a conscious representation of such things, as well as the ability to identify (single) out individual entities. One way to do that is to tag an entity with a character string (label, name), that would then qualify as an identifier. 

Also, identifiers may serve identification purpose in communications between different %%parties|party%%, the idea being that when one %%party|party%% mentions an identifier (that identifies some %%entity|entity%% for this %%party|party%% ) to another %%party|party%%, the latter would be able to determine the %%entity|entity%% that the first is talking about. See the [Discussion](./identifier#discussion---scope-of-identification) below.

### Criterion
An **Identifier** is a character string that is being used for identification purposes by a specific %%party|party%%.

### Examples
The following strings are examples: 'localhost', 'https://localhost/', 'Trust over IP community', 'the mayor of New York', 'guardianship', 'my mother', 'did:sov:2wJPyULfLLnYTEFYzByfUR', 'did:sov:2wJ', 'issue #24', etc., etc.

### Discussion - Scope of Identification
[RFC 3986, Section 1.1.](https://tools.ietf.org/html/rfc3986#section-1.1) states _"an identifier embodies the information required to distinguish what is being identified from all other things within <u>its</u> **scope of identification"**_. This statement suggests that identifiers (URIs) have a single scope, supposedly specified by "_the URI schemes and naming authority (if any)_". However, there is no such requirement, and there is nothing in place to guarantee this (apart from IANA, many other (sometimes even very commonly used) URI schemes exist). [Pfitzmann and Hansen](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) (section 13.2) use the term 'identifiability sets' rather than 'scope of identification', and describe how 'attackers' - but that could equally well have been regular users - each have, or construct their own scope, and use contextual information to do so.

The criterion that makes a text string qualify as an identifier doesn't seem to cut it, as only _using_ a text for identification purposes doesn't make it have (what we will call) the 'identification property', i.e. the property that it _actually_ identifies something. It may only have that property in combination with an associated (single) scope of identification, which may depend on the context in which it is being used. [RFC 2986, page 6](https://tools.ietf.org/html/rfc3986#page-6) illustrates this using the identifier "http://lcoalhost/".

The lack of (identifying) scopes of identification becomes an issue when a %%party|party%% (say Alice) sends the identifier (e.g. `my car`) to another %%party|party%% (say Bob), expecting that Bob will then be able to identify the same %%entity|entity%% that she identifies with it (presumably some specific car).

If Bob had just met Alice for the first time, and hadn't seen her coming in a car, then Alice must acquaint Bob with the existence of the %%entity|entity%% that she refers to with `my car`, e.g. by pointing her finger to it, or describing the make, brand and license plate or some other characteristic that allows Bob to single out her car (in the context of their meeting one another). Then, Bob can 'register' the existence of that car in his %%knowledge|knowledge%% (optionally tagging it with an identifier of his own, e.g. `Alice's car`), and associate it with the attribute (party='Alice', identifier='`my car`'). It is important to have the "party='Alice'" part in there, because other parties, (e.g. Carol) may also use an identifier `my car`, which would and should then refer to another car. This shows that the scope of interpretation for an identifier has to do with the (%%knowledge|knowledge%% of) %%parties|party%% that use it, and that understanding the intended meaning requires a proper identification of that scope.

-----
[^1]: This is the definition of [RFC 3986, Section 1.1.](https://tools.ietf.org/html/rfc3986#section-1.1) but without the requirement of complying with URI syntax constraints. Note that there is consensus in the literature about this. For example, [(Allen, 2016)](http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html) defines 'Identifier' as “A name or other label that uniquely identifies an identity.”. [Pfitzmann and Hansen, 2010](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) say (in footnote 57): “A name or another bit string”. The [DID-core specification](https://www.w3.org/TR/did-core/) of W3C [defines 'decentralized identifiers' as specializations of URIs](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers). 

[^2]: While Pfitzmann and Hansen talk about 'attackers', it is trivial to also include 'non-attackers', i.e. your average user.

[^3]: 
