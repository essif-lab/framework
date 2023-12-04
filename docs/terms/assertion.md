---
id: assertion
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termType: concept
term: assertion
formPhrases: assertion{ss}, claim{ss}, statement{ss}
status: draft
grouptags:
hoverText: "Assertion: a declaration/statement, made by a specific Party, that something is the case."
glossaryTerm: "Assertion"
glossaryText: "a declaration/statement, made by a specific [party](@), that something is the case."
date: 20210601
---

# Assertion


### Short Description

An **Assertion** is a declaration/statement that is made by one specific [party](@) (which we refer to as its [owner](@))[^1]. Such a statement may or may not reflect what that [party](@) holds or [knows](knowledge@) to be true - [parties](@) may lie.

The simplest kind of assertions come in the form ('[subject](@)', 'predicate', 'object'). For example, the triple ('John', 'is married to', 'Jill') says 'John is married to Jill'. Note that '[subject](@)', 'predicate' and 'object' are all [identifiers](@) or other representations of the [knowledge](@) to the assertion's [owner](@), and may not be dereferenceable in other contexts.

### Purpose

The ability to distinguish between assertions and non-assertions, and particularly to know its [owner](@), is prerequisite for properly interpreting it (to establish its meaning), determining its trustworthiness, deciding whether or not to (re)act, and if so, what that reaction would be.

### Criterion

An **Assertion** is any declaration/statement that is made by one specific [party](@).

### Notes

- Assertions may be ambiguous (multi-interpretable), which may result in misunderstandings. The authoritative meaning of an [assertion](@) is determined by (the [semantics](@) that was applied by) the [party](@) that has uttered/authored it.
- Assertions may or may not be true. That is not only because 'truth' is subjective (every [party](@) may decide whether or not something is true), but also because the [party](@) that uttered/authored the [assertion](@) cannot substantiate the assertion, or lie outright.
- Assertions may contain [identifiers](@); the assertion's [owner](@) is the authoritative [party](@) for dereferencing such identifiers.
- The [entity](@) about which the assertion/claim is made, is often referred to as the '[subject](@)' of the assertion. However, the word '[subject](@)' is also used in conjunction with the term [credential](@), in which case it is ambiguous because a credential may contain multiple assertions about different entities (subjects).

-----
[^1]: we postulate that 'Nature' is the [jurisdiction](@) in which the associated [ownership relation](ownership@) exists; so one might also call this 'natural ownership'.