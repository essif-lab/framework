---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: assertion
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: assertion
formphrases: assertion{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Assertion # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "a declaration/statement, made by a specific [party](@), that something is the case."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Assertion"
displayed_sidebar: essifLabSideBar
hoverText: "Assertion: a declaration/statement, made by a specific Party, that something is the case."
---

### Short Description
An **Assertion** is a declaration/statement that is made by one specific [party](@) (which we refer to as its [owner](@))[^1]. Such a statement may or may not reflect what that [party](@) holds or [knows](@) to be true - [parties](@) may lie.

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
[^1]: we postulate that 'Nature' is the [jurisdiction](@) in which the associated [ownership relation](@) exists; so one might also call this 'natural ownership'.