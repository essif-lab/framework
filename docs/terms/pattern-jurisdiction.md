---
id: pattern-jurisdiction
title: "Jurisdictions"
scopeid: essifLab
type: pattern
typeid: jurisdiction
stage: draft
hoverText: "The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities."
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Purpose
The **Jurisdiction pattern** captures the concepts and relations that explain how one can perceive a generic %%jurisdiction|jurisdiction%%, how it works, and how it can be put to use in %%SSI contexts|self-sovereign-identity%%.

### Introduction
Many people are familiar with what we call %%legal jurisdictions|legal-jurisdiction%%, e.g. a government that has a %%legal system|legal-system%% in place which it applies to %%entities|entity%% that it knows to exist in its %%scope of control|scope-of-control%%.

While differences exist, a legal jurisdiction typically has a %%legal system|legal-system%%, i.e. a set of rules (laws, regulations, etc.) that it enforces (within the scope of control of the legal jurisdiction), and a mechanism for resolving conflicts. The rules typically apply to entities whose existence is known within the legal jurisdiction. For example: a refugee that asks for asylum would typically first need to be registered (which is: legally establishing its existence) before the application can even be considered. Such entities are generically known as %%legal entities|legal-entity%%.

If we leave out the adjective 'legal', we can still say that anything that
- has a %%legal system|legal-system%%, i.e. set of rules, an enforcement mechanism and a conflict resolving mechanism,
- operates that legal system in a scope that it controls,
- applying the rules to entities that it knows to exist (in its %%knowledge|knowledge%%)
would also qualify as a %%jurisdiction|jurisdiction%%, albeit perhaps not a legal jurisdiction. Note that every jurisdiction is also a %%party|party%%, because it has its own %%knowledge|knowledge%% that it autonomously manages. This %%knowledge|knowledge%% contains e.g. the rule to enforce, the rules and other guidance for maintaining the rules themselves (legislature), for enforcing them and for resolving conflicts. It also encompasses knowledge of the %%legal entities|legal-entity%% that the rules apply to.

And indeed, when we apply this criterion we can see that jurisdictions are abundant:
- %%organizations|organization%% habitually will have rules (business policies) in place, enforce them (to some extent), and have ways of resolving conflicts, and therefore qualify. Specifically, multi-nationals are known to operate multiple jurisdictions, aliging the rules and scopes with those of other (often legal) jurisdictions for the purpose of preventing situations in which conflicting rules apply, which would lead to many effort-intensive conflict-resolution cases.
- NGO's, that may run aid-projects, refugee-camps etc., ensure that a set of rules apply within the scopes of such projects and camps, and arrange for (internal) conflicts to be resolved. Hence they qualify
- All sorts of clubs (sports, leisure, ...) have rules, means to enforce them, and a conflict resolution means which they operate within the scope of the locations they control and/or their activities.
- Families qualify as well: the parents make the rules, enforce them, and resolve conflicts.
- Even individual persons (which qualify as %%parties|party%%), have their own 'scope of control', within which they work according to their own rules (e.g. morals, ethics, preferred ways of working), enforce them (pretty much automatically), and resolve any conflicts (e.g. personal problems that may arise when their rules/habits conflict with what their spouse, employer, any else requires them to do). Saying that an individual operates a (personal) 'legal system' within its scope of control is aligned with the ideas human rights that say humans are 'self sovereign'.

Note that while a %%jurisdiction|jurisdiction%% is a %%party|party%%, a jurisdiction may also be owned by a (different) party, and it makes sense to distinguish between them. For example, a multinational organization may own subsidiaries in different countries, each of which could be a jurisdiction in their own right, for the purpose of aligning their rules of operation with the local legal jurisdiction. e.g. for organizations.

### Formalized model
Here is a visual representation of this pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'Jurisdiction' pattern"
  src={useBaseUrl('images/patterns/pattern-jurisdiction.png')}
/>

The figure shows that a %%jurisdiction|jurisdiction%% is %%party|party%%, and is also owned by a %%party|party%% (that may be the jurisdiction itself, or another party). This implies that a jurisdiction has %%objectives|objective%% to pursue, and %%knowledge|knowledge%% to govern.

While the figure does not make this explicit, the knowledge contains the rules that apply to the legal entities - the entities that the jurisdiction knows to exist (i.e. has registered in its knowledge), as well as the rules and %%policies|policy%% for maintaining the rule set, enforcing the rules, and resolving conflicts. The latter three are the constituents of the %%legal system|legal-system%% that the jurisdiction operates within its %%scope of control|scope-of-control%%.