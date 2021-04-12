---
id: assertion
title: "Assertion"
scopeid: essifLab
type: concept
typeid: assertion
stage: draft
hoverText: "Assertion: a declaration/statement, made by a specific Party, that something is the case."
glossaryText: "a declaration/statement, made by a specific %%party^party%%, that something is the case."
---

### Short Description
An **Assertion** is a declaration/statement that is made by one specific %%party|party%% (which we refer to as its %%owner|owner%%)[^1]. Such a statement may or may not reflect what that %%party|party%% holds or %%knows|knowledge%% to be true - %%parties|party%% may lie.

The simplest kind of assertions come in the form ('subject', 'predicate', 'object'). For example, the triple ('John', 'is married to', 'Jill') says 'John is married to Jill'. Note that 'subject', 'predicate' and 'object' are all %%identifiers|identifier%% or other representations of the %%knowledge|knowledge%% to the assertion's %%owner|owner%%, and may not be dereferenceable in other contexts.

### Purpose
The ability to distinguish between assertions and non-assertions, and particularly to know its %%owner|owner%%, is prerequisite for properly interpreting it (to establish its meaning), determining its trustworthiness, deciding whether or not to (re)act, and if so, what that reaction would be.

### Criterion
An **Assertion** is any declaration/statement that is made by one specific %%party|party%%.

### Notes
- Assertions may be ambiguous (multi-interpretable), which may result in misundertandings. The authoritative meaning of an %%assertion|assertion%% is determined by (the %%semantics|semantics%% that was applied by) the %%party|party%% that has uttered/authored it.
- Assertions may or may not be true. That is not only because 'truth' is subjective (every %%party|party%% may decide whether or not something is true), but also because the %%party|party%% that uttered/authored the %%assertion|assertion%% cannot substantiate the assertion, or lie outright.
- Assertions may contain %%identifiers|identifier%%; the assertion's %%owner|owner%% is the authoritative %%party|party%% for dereferencing such identitiers.
- The %%entity|entity%% about which the assertion/claim is made, is often referred to as the 'subject' of the assertion. However, the word 'subject' is also used in conjunction with the term %%credential|credential%%, in which case it is ambiguous because a credential may contain multiple assertions about different entities (subjects).

-----
[^1]: we postulate that 'Nature' is the %%jurisdiction|jurisdiction%% in which the associated %%ownership relation|ownership%% exists; so one might also call this 'natural ownership'.