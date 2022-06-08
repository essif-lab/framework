---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: guardianship-type
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: guardianship-type
formphrases: guardianship-type{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Guardianship # Text that is the name of the concept in (human readable) texts.
fullterm: "Guardianship-type"
shorterm:
synonyms:
glossaryText: "a class of [guardianship arrangements](@) within the [jurisdiction](@) that governs and manages them."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Guardianship-type"
displayed_sidebar: essifLabSideBar
hoverText: "Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them."
---

:::info Editor's note
Additional content is needed here.
:::
### Short Description
A **Guardianship-type** is a class of [guardianship arrangements](@) within the [jurisdiction](@) that governs and manages them. It comprises [duty and right types](@) that can be used as a template for instantiating [duties and rights](@) of [guardianship arrangements](@) that instantiate the [guardianship-type](@).

A good way to think about a [guardianship-type](@) is to see it as a template from which instances - i.e. actual [guardianship arrangements](@) can be derived.

The [Guardianship pattern](pattern-guardianship@) provides an overview of how this concept fits in with related concepts.
The [Jurisdiction pattern](pattern-jurisdiction@) provides backgrounds on jurisdictions and how they function.

### Purpose
A **Guardianship-type** serves as a template from which instances - i.e. actual [guardianship arrangements](@) can be instantiated. It allows the [jurisdiction](@) within which it is defined to specify generic [duties and rights](@), both for [guardians](@) and [dependents](@). When the need arises for a guardianship arrangement of that type, this set of roles, duties and rights can conveniently be used as a starting point.

### Criteria
An **guardianship-type** is a class of [guardianship arrangements](@) that comprises a (non-empty) set of [duty/right types](@) and a set of stakeholder roles of which there is precisely one role that dependents [dependent](@) get assigned to, and at least one other role for [guardians](@), and where the (process) rules for creating instances of that class (i.e. [guardianship arrangements](@) instantiating  and/or the [dependent](@) (and perhaps other roles), the semantics of which are defined by the [jurisdiction](@).
