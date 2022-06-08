---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: identify
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: identify
formphrases: identif{yies}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-08-12
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Identify # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "an [act](@), by or on behalf of a [party](@), that results in the selection of either\n- a single [partial identity](@) that the party [owns](@), given some (observed or received) data, or\n- a single [entity](@) from a given set of entities that is the [subject](@) of a specified [partial identity](@) that the party [owns](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Identify"
displayed_sidebar: essifLabSideBar
hoverText: "Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns."
---

### Short Description
**Identification** is an [act](@), by or on behalf of a [party](@), that results in either the selection of
1. a single [partial identity](@) that the party [owns](@), given some (observed or received) data, or
2. a single [entity](@) from a given set of entities that is the [subject](@) of a specified [partial identity](@) that the party [owns](@).

An example of the first clause is where you answer the door for a person. The first thing you do is to observe characteristics of that person, and see if there is a match with the characteristics in one of the [partial identities](@) that you have in your [knowledge](@). In case you have trouble finding one (e.g. when you suspect it might be an acquaintance that you haven't seen for a long time) you may ask questions, eliciting further observations that allow you to select a specific [partial identity](@). A sigh of relief may signal that the act of identification has successfully terminated. If you didn't find a [partial identity](@), you would typically (and automatically) start to construct one, which would enable you to identify this person in future situations.

An example of the second clause is where you need to see or talk to a specific [entity](@), i.e. an entity that - since you know it exists - you have a (single) [partial identity](@) for. Here, you acquire characteristics for the various entities that you encounter until you find a match with that partial identity. Then, you proceed to interact with that entity as you intended.

Issues/misunderstandings related to identification can easily arise, because if an entity is known to exist by different parties, they would each have different partial identities for it, which may cause misunderstandings in communications if parties are unaware of these differences.

One of various well-known problems related to identification is the transfer of files/dossiers, e.g. in the health and education domains. Since (the contents of) such files represent knowledge about their [subject](@), and the [partial identity](@) of that [subject](@) that is [owned](@) by the [owner](@) of such files includes all [knowledge](@) about that [subject](@), the knowledge represented in the file are a part of this [partial identity](@). Now when such files are transferred to another party, the receiving party has to make sure that these files are associated with that party's [partial identity](@) of that same [subject](@).

Non-human [actors](@) can also perform identification. However, since they cannot access the [partial identities](@) of their [employer](@) (because these reside in the information domain - see the [identity pattern](pattern-identity@)), they have to do with may be referred to as a user/account registration. Such registrations contain 'user records' or 'accounts', each of which represents an excerpt of a specific [partial identity](@), that contains all necessary data for the non-human [actor](@) to execute the [actions](@) that it is tasked with. Typically, a user record would contain a username, i.e. an [identifier](@) that the [actor](@) can use to identify the user record. Also, it typically contains authentication data, e.g. a password, that the [actor](@) can use to ensure that the user is the actual [subject](@) of the user record (account) that it has selected. However, it would also contain additional data to facilitate further interactions between this [actor](@) and the user, e.g. role assignments or other attributes.
