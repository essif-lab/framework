---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: jurisdiction
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: jurisdiction
formphrases: jurisdiction{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: Jurisdiction # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "the composition of a [legal system](@) (legislation, enforcement thereof, and conflict resolution), a [party](@) that governs that [legal system](@), a scope within which that [legal system](@) is operational, and one or more [objectives](@) for the purpose of which the [legal system](@) is operated. See also the [Jurisdictions pattern](pattern-jurisdiction@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Jurisdiction"
displayed_sidebar: essifLabSideBar
hoverText: "Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated."
---

### Short Description
A **Jurisdiction** is the composition of a (non-empty) set of [objectives](@), one [scope](@), one [legal system](@) and one [party](@) (called the [Governor](@) of the Jurisdiction) that operates the legal system within that scope. While most people are familiar with what we call [legal jurisdictions](@), please observe that [organizations](@) habitually will have rules (business policies) in place, enforce them (to some extent), and have ways of resolving conflicts, and therefore qualify as a jurisdiction. Specifically, multi-national organizations are known to govern multiple jurisdictions, aligning the scopes with the scopes of other (often legal) jurisdictions for the purpose of preventing situations in which conflicting rules apply, which would lead to many effort-intensive conflict-resolution cases.

The [Jurisdictions pattern](pattern-jurisdiction@) provides an overview of how this concept fits in with related concepts.

Within the context of [Self-Sovereign Identity (SSI)](@), jurisdictions are relevant because it is typical for (business) [transactions](@) to be governed by (at least) one jurisdiction, whose [legal system](@) may contain rules of various kinds, e.g. in the areas of
- escalation - i.e. what can be done if a [transaction](@) goes sour;
- privacy - e.g. whether or not the [GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) or related legislation applies;
- representation - e.g. rules about how old one must be in order to be entitled to do something, rules on how one may represent an [organization](@) or a [person](@), [guardianships](@), etc.
### Purpose
The ability to distinguish between (non)jurisdictions is a very generic enabler for us to tell which rules (laws, policies, guidelines, etc.) will apply in which situations, which [party](@) governs and enforces these rules, and where we should look to resolve any conflicts.

### Criteria
the composition of one [scope](@), one [legal system](@) and one [party](@) that operates the legal system within that scope.

### Notes
The case can be made for Nature to qualify as a jurisdiction, postulating that this jurisdiction has a universal scope, its [party](@) would be 'Nature' itself (which can be argued to qualify as a [party](@)), and the [legal system](@) that Nature operates are the 'laws of nature' (which Nature defines, enforces and settles disputes in). If one adopts this view, then people become (natural) [owners](@) of e.g. [assertions](@), their [knowledge](@) etc. Also, natural resources (e.g. rivers) would be [legal entities](@) in that jurisdiction, since they are 'known, and recognized to exist' by Nature.