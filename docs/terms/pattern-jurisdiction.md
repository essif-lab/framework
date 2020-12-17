---
id: pattern-jurisdiction
title: "Jurisdictions"
scopeid: essifLab
type: pattern
typeid: jurisdiction
stage: draft
hoverText: "The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities."
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Purpose
<!-- Concisely describe what can you do with the pattern that is (at least) harder if you didn't have it. -->
The **Jurisdiction pattern** captures the concepts and relations that explain how generic %%jurisdictions|jurisdiction%%  work, and can be constructed. It shows that it can be seen as the composition of one %%scope|scope%%, one %%legal system|legal-system%% and one %%party|party%% that operates the legal system within that scope.

### Introduction
<!-- Gently introduce the pattern, by referring to real-world situations and using colloquial terms, so that when someone has read the text, (s)he knows what it is about, and is ready to delve into the specifics of the pattern. -->
While most people are familiar with what we call %%legal jurisdictions|legal-jurisdiction%%, one readily observes that the characteristics of a jurisdiction - i.e. a %%scope|scope%% within which some %%party|party%% organizes that rules/laws/policies are being made, enforced and conflicts resolved - can be found outside of jurisdictions in numerous other contexts. For example,

- %%organizations|organization%% habitually will have rules (business policies) in place, enforce them (to some extent), and have ways of resolving conflicts, and therefore qualify. Specifically, multi-nationals are known to operate multiple jurisdictions, aliging the rules and scopes with those of other (often legal) jurisdictions for the purpose of preventing situations in which conflicting rules apply, which would lead to many effort-intensive conflict-resolution cases.
- NGO's, that may run aid-projects, refugee-camps etc., ensure that a set of rules apply within the scopes of such projects and camps, and arrange for (internal) conflicts to be resolved. Hence they qualify
- All sorts of clubs (sports, leisure, ...) have rules, means to enforce them, and a conflict resolution means which they operate within the scope of the locations they control and/or their activities. 
- Families qualify as well: the parents make the rules, enforce them, and resolve conflicts.
- Even individual persons (which qualify as %%parties|party%%), have their own 'scope of control', within which they work according to their own rules (e.g. morals, ethics, preferred ways of working), enforce them (pretty much automatically), and resolve any conflicts (e.g. personal problems that may arise when their rules/habits conflict with what their spouse, employer, any else requires them to do). Saying that an individual operates a (personal) 'legal system' within its scope of control is aligned with the ideas human rights that say humans are 'self sovereign'.

Still, jurisdictions have a lot of variety. The obvious (and self-evident) variety is in the %%parties|party%% that operate its legal system. However, there are also differences in scopes. %%Legal jurisdictions|legal-jurisdiction%% for example may align their scopes with different territories. %%Organizations|organization%% may align their scopes with physical locations as well, possibly aligning them (also) with scopes from legal jurisdictions. Smaller clubs, e.g. a bingo club that weekly hires a cafe for a few hours to do its things, will have its scope determined by location and time. Families and individuals have scopes that are limited by their ability to control (enforce rules).

Jurisdictions also in terms of the legal system they apply. Different jurisdictions have different (kinds of) rules, which are there to ensure and facilitate that its %%party|party%% realizes the %%objectives|objective%% it has set (for that scope). Often, such rules include specifications of the processes for maintaining the rules themselves, for enforcing them, and for resolving conflicts. Depending on the specific jurisdiction, the specification and maintentance of rules can be anywhere from being very informal to very formal, enforcement ranges from being almost absent to very strict, and resolution of conflicts is anywhere between ad-hoc and tedious litigation.

Note that all the rules, processes and decisions must be part of the %%knowledge|knowledge%% of the %%party|party%% that runs the jurisdiction.

### Formalized model
Here is a visual representation of this pattern, using the following [notations and conventions](../notations-and-conventions#pattern-diagram-notations):

<img
  alt="Conceptual model of the 'Jurisdiction' pattern"
  src={useBaseUrl('images/patterns/pattern-jurisdiction.png')}
/>

The figure shows that a %%jurisdiction|jurisdiction%% comprises a single %%scope|scope%%, a (single) %%legal system|legal-system%% system and a %%party|party%% that operates this Legal System within the Scope (which it controls). The Legal System applies to %%Entities|entity%% that are known in the jurisdiction (e.g. registered with the %%party|party%% as per the rules of the legal system, leading to their being registered/represented in the %%knowledge|knowledge%% of that %%party|party%%). These are what, specifically for %%legal jurisdictions|legal-jurisdiction%% are called %%legal entities|legal-entity%%.