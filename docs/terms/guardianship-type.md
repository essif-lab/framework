---
id: guardianship-type
title: "Guardianship-type"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: concept
term: guardianship-type
formPhrases: guardianship-type{ss}, guardianship-arrangement-type{ss}
status: draft
grouptags:
hoverText: "Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them."
glossaryTerm: "Guardianship-type"
glossaryText: "a class of [guardianship arrangements](guardianship-arrangement@) within the [jurisdiction](@) that governs and manages them."
date: 20210601
---

:::info Editor's note
Additional content is needed here.
:::
### Short Description
A **Guardianship-type** is a class of [guardianship arrangements](guardianship-arrangement@) within the [jurisdiction](@) that governs and manages them. It comprises [duty and right types](pattern-duties-and-rights@) that can be used as a template for instantiating [duties and rights](pattern-duties-and-rights@) of [guardianship arrangements](guardianship-arrangement@) that instantiate the [guardianship-type](@).

A good way to think about a [guardianship-type](@) is to see it as a template from which instances - i.e. actual [guardianship arrangements](guardianship-arrangement@) can be derived.

The [Guardianship pattern](pattern-guardianship@) provides an overview of how this concept fits in with related concepts.
The [Jurisdiction pattern](pattern-jurisdiction@) provides backgrounds on jurisdictions and how they function.

### Purpose
A **Guardianship-type** serves as a template from which instances - i.e. actual [guardianship arrangements](guardianship-arrangement@) can be instantiated. It allows the [jurisdiction](@) within which it is defined to specify generic [duties and rights](pattern-duties-and-rights@), both for [guardians](@) and [dependents](@). When the need arises for a guardianship arrangement of that type, this set of roles, duties and rights can conveniently be used as a starting point.

### Criteria
An **guardianship-type** is a class of [guardianship arrangements](guardianship-arrangement@) that comprises a (non-empty) set of [duty/right types](pattern-duties-and-rights@) and a set of stakeholder roles of which there is precisely one role that dependents [dependent](@) get assigned to, and at least one other role for [guardians](@), and where the (process) rules for creating instances of that class (i.e. [guardianship arrangements](guardianship-arrangement@) instantiating  and/or the [dependent](@) (and perhaps other roles), the semantics of which are defined by the [jurisdiction](@).
