---
id: identifier
title: "Identifier"
scopeid: essifLab
type: concept
typeid: identifier
stage: draft
hoverText: "Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used)."
glossaryText: "a character string that is being used for the identification of some %%entity^entity%% (yet may refer to 0, 1, or more %%entities^entity%%, depending on the context within which it is being used)."
date: 20210601
---

### Short Description
An **Identifier** is a character string that is being used for identification purposes (by a specific %%party|party%%).[^1] This includes names and labels, as they are (obviously) used for such purposes.

Note that while an identifier is used for identification purposes, <u>this does not automatically imply that it actually identifies (singles out) anything</u>. It also depends on what [RFC 3986](https://tools.ietf.org/html/rfc3986) calls the 'scope of identification', or what [Pfitzmann and Hansen (2010)](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) refer to as an 'identifiability set', which are relevant for explaining whether or not (and if so: what) an identifier actually identifies (singles out) in a given context. See the [Discussion](./identifier#discussion---scope-of-identification) below.

### Purpose
%%Parties|party%% have a need to reason about %%things|entity%% they %%know|knowledge%% to exist, which requires them to have a conscious representation of such things, as well as the ability to identify (single) out individual entities. One way to do that is to tag an entity with a character string (label, name), that would then qualify as an identifier.

Also, identifiers may serve identification purpose in communications between different %%parties|party%%, the idea being that when one %%party|party%% mentions an identifier (that identifies some %%entity|entity%% for this %%party|party%% ) to another %%party|party%%, the latter would be able to determine the %%entity|entity%% that the first is talking about. See the [Discussion](./identifier#discussion---scope-of-identification) below.

### Criterion
An **Identifier** is a character string that is being used for identification purposes by a specific %%party|party%%.

### Examples
The following strings are examples: 'localhost', 'https://localhost/', 'Trust over IP community', 'the mayor of New York', 'guardianship', 'my mother', 'did:sov:2wJPyULfLLnYTEFYzByfUR', 'did:sov:2wJ', 'issue #24', etc., etc.

-----
### Notes
[^1]: This is the definition of [RFC 3986, Section 1.1.](https://tools.ietf.org/html/rfc3986#section-1.1) but without the requirement of complying with URI syntax constraints. Note that there is consensus in the literature about this. For example, [(Allen, 2016)](http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html) defines 'Identifier' as “A name or other label that uniquely identifies an identity.”. [Pfitzmann and Hansen, 2010](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) say (in footnote 57): “A name or another bit string”. The [DID-core specification](https://www.w3.org/TR/did-core/) of W3C [defines 'decentralized identifiers' as specializations of URIs](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers).
