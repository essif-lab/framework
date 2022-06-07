---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: pattern-jurisdiction
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: pattern
termid: jurisdiction
formphrases:
grouptags: pattern
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Jurisdictions"
displayed_sidebar: essifLabSideBar
hoverText: "The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities."
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Purpose
The **Jurisdiction pattern** captures the concepts and relations that explain how one can perceive a generic [jurisdiction](@), how it works, and how it can be put to use in [SSI contexts](@).

### Introduction
Many people are familiar with what we call [legal jurisdictions](@), e.g. a government that has a [legal system](@) in place which it applies to [entities](@) that it knows to exist in its [scope of control](@).

While differences exist, a legal jurisdiction typically has a [legal system](@), i.e. a set of rules (laws, regulations, etc.) that it enforces (within the scope of control of the legal jurisdiction), and a mechanism for resolving conflicts. The rules typically apply to entities whose existence is known within the legal jurisdiction. For example: a refugee that asks for asylum would typically first need to be registered (which is: legally establishing its existence) before the application can even be considered. Such entities are generically known as [legal entities](@).

If we leave out the adjective 'legal', we can still say that anything that
- has a [legal system](@), i.e. set of rules, an enforcement mechanism and a conflict resolving mechanism,
- operates that legal system in a scope that it [controls](@), and
- applies these rules to [entities](@) that it knows to exist (i.e. that are 'registered' in its [knowledge](@))
would also qualify as a [jurisdiction](@), albeit not a legal jurisdiction.

Note that every jurisdiction is also a [party](@), because it has its own [knowledge](@) that it autonomously [manages](@). This knowledge contains the rules it seeks to enforce, the rules and other guidance for maintaining and actually enforcing these rules, and for resolving conflicts. It also comprises a registration also of the [(legal) entities](@) that the rules apply to.

And indeed, when we apply this criterion we can see that jurisdictions are abundant:
- [organizations](@) habitually will have rules (business policies) in place, enforce them (to some extent), and have ways of resolving conflicts, and therefore would habitually qualify. Specifically, multi-nationals are known to operate multiple jurisdictions, aligning the rules and scopes with those of other (often legal) jurisdictions for the purpose of preventing situations in which conflicting rules apply, which would lead to many effort-intensive conflict-resolution cases.
- NGOs, that may run aid-projects, refugee-camps etc., ensure that a set of rules apply within the scopes of such projects and camps, and arrange for (internal) conflicts to be resolved. Hence they qualify
- All sorts of clubs (sports, leisure, ...) have rules, means to enforce them, and a conflict resolution means which they operate within the scope of the locations they control and/or their activities.
- Families qualify as well: the parents make the rules, enforce them, and resolve conflicts.
- Even individual persons (which qualify as [parties](@)), have their own 'scope of control', within which they work according to their own rules (e.g. morals, ethics, preferred ways of working), enforce them (pretty much automatically), and resolve any conflicts (e.g. personal problems that may arise when their rules/habits conflict with what their spouse, employer, any else requires them to do). Saying that an individual operates a (personal) 'legal system' within its scope of control is aligned with the ideas human rights that say humans are 'self sovereign'.

From the above, one might even be inclined to think that *every* [party](@) qualifies as a [jurisdiction](@). While we think that the vast majority of them are (we have no examples to the contrary), we see no relevance in actually stating this.

Note that while a [jurisdiction](@) is a [party](@), a jurisdiction may also be owned by a (different) party, and it makes sense to distinguish between them. For example, a multinational organization may own subsidiaries in different countries, each of which could be a jurisdiction in their own right, for the purpose of aligning their rules of operation with the local legal jurisdiction. e.g. for organizations.

### Formalized model
Here is a visual representation of this pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'Jurisdiction' pattern"
  src={useBaseUrl('images/patterns/pattern-jurisdiction.png')}
/>

The figure shows that a [jurisdiction](@) is [party](@), and is also owned by a [party](@) (that may be the jurisdiction itself, or another party). This implies that a jurisdiction has [objectives](@) to pursue, and [knowledge](@) to govern.

While the figure does not make this explicit, the knowledge contains the rules that apply to the legal entities - the entities that the jurisdiction knows to exist (i.e. has registered in its knowledge), as well as the rules and [policies](@) for maintaining the rule set, enforcing the rules, and resolving conflicts. The latter three are the constituents of the [legal system](@) that the jurisdiction operates within its [scope of control](@).