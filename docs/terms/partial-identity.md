---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: partial-identity
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: partial-identity
formphrases: partial-identit{yies}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-08-03
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Partial # Text that is the name of the concept in (human readable) texts.
fullterm: "Partial identity"
shorterm:
synonyms:
glossaryText: "all [knowledge](@) that a specific [party](@) (= the [owner](@) of the partial identity) has about that [entity](@) (= the '[subject](@)' of the partial identity)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Partial identity"
displayed_sidebar: essifLabSideBar
hoverText: "Partial identity (of an Entity): all Knowledge that a specific Party (= the Owner of the partial identity) has about that Entity (= the 'Subject' of the partial identity)."
---

### Short Description
A **Partial identity (of an [entity](@))** is all [knowledge](@) that a specific [party](@) has about that [entity](@). This [entity](@) is referred to as the *[subject](@)* of the partial identity. The [party](@) fulfills the role of [owner](@) of the partial entity, as the partial identity is part of the [knowledge](@) that this party owns (see the [party-actor pattern](pattern-party-actor-action@) for details).

A [party](@) that has [knowledge](@) about itself will thus have a [partial identity](@) that it is both the [subject](@) and the [owner](@) of. This is called the [Self-Identity](https://en.wikipedia.org/wiki/Self-concept) or [Self-concept](https://en.wikipedia.org/wiki/Self-concept) of that party.

A [party](@) does not control the partial identities of which it is the [subject](@), save the one that it owns itself (its [self-concept](https://en.wikipedia.org/wiki/Self-concept)). People that expect they can [own](@) all partial identities of which they are the [subject](@), are in for disappointment, as all (except one) such partial identities are outside their [scope of control](@).

Parties that issue [credentials](@) about an [entity](@) thus author and issue [claims](@) that are part of the [partial identity](@) that this party has about the entity. If that party is coherent and consistent in its knowledge, and does not lie, then we may assume that the set of claims in the credential of an issuer is also coherent and consistent, and that this party believes that the knowledge represented by such claims is true (which still may or may not be the case).

For further details, see the [identity pattern](pattern-identity@). Related topics can be found in the [identification pattern](pattern-identification@) and the [identifier pattern](pattern-identifier@).
