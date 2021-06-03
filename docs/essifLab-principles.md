---
id: essifLab-principles
title: eSSIF-Lab Principles
sidebar_label: Principles
scopeid: essifLab
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

The dialogue about what Self-Sovereign Identity (SSI) really is, that was started in the blog "[The Path to Self-Sovereign Identity](http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html)" by Christopher Allen in 2016, has not resulted in a consensus today. While some see the ten principles of SSI that Allen proposed as the definition of SSI, they have been formulated as "a departure point to provoke a discussion about what's truly important".

From the [perspective of eSSIF-Lab](essifLab-vision) this "what's truly important" relates to electronically supporting %%parties|party%% as they negotiate and execute %%(business) transactions|transaction%%. From this perspective, it seems reasonable to have the term %%SSI|self-sovereign-identity%% refer to all concepts/ideas, architectures, processes and technologies that aim to support (autonomous) %%parties|party%% as they negotiate and execute electronic %%(business) transactions|transaction%% with one another.

We are aware that others have different ideas about what SSI is. That's ok - it is consistent with our ideas that others are also autonomous, self-sovereign parties. However, it does suggest that it may be worthwhile to postulate the principles that eSSIF-Lab uses to underpin its vision, framework, etc.

The purpose of this section is to provide the eSSIF-Lab principles on which our [eSSIF-Lab Framework](essifLab-fw) is based. We have written them down to allow readers for some of whom they may seem a bit controversial, to better understand the framework, enabling them to follow the lines of reasoning that we use, the choices (e.g. for terminology) that we have made, and enable them to decide whether or not to adopt (parts of) the framework.

## Freedom of Information (Knowledge)

According to (articles 8-10 of) the [*European Convention on Human Rights (ECHR)*](https://www.echr.coe.int/Pages/home.aspx?p=basictexts/convention), people are free to collect, process, store, and express information (about any %%entity|entity%%) in any way the like (making a few exceptions for cases when e.g. security of society is put at risk). This made us realize that
  - these rights refer to fundamental, biological capabilities that people ar born with, and the ECHR is limiting these capabilities for exceptional cases.
  - %%organizations|organization%% (governments, enterprises), too, have these capabilities.
We generalize this by defining the term %%party|party%% such that it encompasses every %%entity|entity%% that has these capabilities. Consequently, this term is a very basic one in our world model.

## Parties are autonomous (Self-Sovereign)

%%Parties|party%% will use their capabilities as they see fit, as they are autonomous (or: self-sovereign, i.e. sovereign over their own %%knowledge|knowledge%%). While they are free to choose whether or not to comply with laws, rules and regulations, they cannot choose the consequences that other parties will attach to their behaviour, as these other parties are autonomous as well. We see that in practice: a person that drives a car on a highway with a speed limit of 55 mph in the desert of Arizona may well decide to go faster than that, depending on his assessment of the consequences it may have (of being caught and fined). In particular, every %%party|party%% is autonomous in the data it collects about other %%entities|entity%%, the judgements it makes, the characteristics it attributes, etc.

## Identities are not owned - Individuals do not control their identity

'Identity' is a word that is difficult to define. Looking into the world we live in, it seems reasonable to say - and so do we - that 'who I am' is not only defined by how I think about myself (my self image), but also how others think about me, judge me, attribute me characteristics, etc. We take this position not because it has more truth than any other position, but because it is a greater help to us as we try to realize the eSSIF-Lab vision than any other position that we have contemplatede.

We use the term %%partial identity|partial-identity%% (of an %%entity|entity%%), as coined by [Pfitzmann and Hansen (2010)](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf), to refer to all %%knowledge|knowledge%% that a single %%party|party%% has about that entity (which we also call the 'subject' of that partial identity). Thus, the %%identity|identity%% (of some %%entity|entity%%, called the subject of the identity) is the union (composition) of all partial identities of that subject.

Since everything that some party thinks about a specific entity belongs to its %%knowledge|knowledge%%, it follows that this partial identity is a subset of the knowledge of that party. And since every party %%owns|owner%% its own knowledge, it follows that the partial identity of a subject is %%owned|owner%%, and hence controlled, by the party that owns the knowledge of which it is part. Also, when a party issues credentials about some entity, it will use the partial identity that is about that entity and that it owns, to produce the data in that credential (provided that the party won't lie, which of course is not a given since parties are autonomous).

From this, it follows that:
- identities are not %%owned|owner%%, because they are composed of %%partial identities|partial-identity%% each of which is owned by another %%party|party%%;
- a subject does not control its %%identity|identity%%, because it doesn't %%own|owner%% it;
- a credential that is (exclusively) about a subject contains a subset of the %%partial identity|partial-identity%% that is owned by the issuing party and that has the same subject as the credential - provided that the issuing party doesn't lie.
- for our purposes, the notion of %%identity|identity%% is not needed (so its definition is irrelevant for us); all we need is the concept of %%partial identity|partial-identity%%.

## Identifiers are properties - not things

[RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986#section-1.1) (p5) says "An identifier embodies the information required to distinguish what is being identified from all other things within its scope of identification". One can easily see that this implies that an identifier is not something that that embodies information, but a property of something that embodies information. This 'something' will or won't have the identification property depending on the context. Still, we use the term %%identifier|identifier%% to refer to a character string that is being used for identification purposes. For details, see the %%identifier-pattern|pattern-identifier%%.

## You do not know what others mean

What a piece of %%data|data%% means to a %%party|party%% is what it decides that it means, simply because this mapping between data and meaning (called %%semantics|semantics%%) is part of a party's %%knowledge|knowledge%%. This poses a communications problem: a party that wants to understand what another party means by data that the latter authors, must have the prerequisite knowledge that allows it to interpret that data using a sufficiently similar mapping as the author used. For digital data, so-called [schema's](https://en.wiktionary.org/wiki/schema) are said to provide such knowledge, but that is not enough. For example, if a party receives a piece of data that includes a "Alice is a friend of Bob", then even if we know the meaning of being a friend, and that friends must be humans, that doesn't say which real-world person corresponds with 'Alice' or 'Bob'. It is a hard problem for authors of data to provide %%identifiers|identifier%% that other parties can properly dereference, i.e. use to determine which real world entity the authore was actually referring to.

## Trust is subjective

%%Trust|trust%% is not something that is given, but something that %%parties|party%% (un)consciously assess, and decide about, and changes over time. Since parties are autonomous, their trust is highly subjective. As a consequence, the idea of having 'trusted registries', 'trusted issuers' that do not take this subjectivity into account basically act as %%(centralized) authorities|authority%%, denying that parties are autonomous. While we acknowledge that such ideas (have a right to) exist, we do not follow them.