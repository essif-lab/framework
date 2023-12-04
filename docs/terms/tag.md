---
id: tag
title: "Tag"
displayed_sidebar: essifLabSideBar
scopetag: essifLabTerminology
termType: concept
term: tag
formPhrases: tag{ss}
status: draft
grouptags:
hoverText: "Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."
glossaryTerm: "Tag"
glossaryText: "an alphanumeric string that is used to identify [scope](@) (so called 'scopetags'), group [term](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@)."
date: 20210601
---

### Short Description

A **Tag** is an alphanumeric string that is used to identify [scope](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@).

Scopetags [identify](@) a [scope](@) (from within a given [scope](@)), and hence can be used (within that given [scope](@)) to disambiguate [terms](@). For example, `#essif-lab:term` is an [identifier](@) for the [concept](@) that within the [scope](@) [identified](identify@) by the scopetag `essif-lab` is referred to by the [term](@) 'term'. Scopetags typically satisfy the regex `#[a-z0-9_-]+` and is often preceded by the `#` character to designate that it is a tag.

Grouptags may be used within a [scope](@) to tag various sorts or [knowledge artifacts such as [terms](@), [concepts](@) and the like. One can then say that this tag represents the group of artifacts that are associated with that tag. This may be used for different purposes. One example is to tag every term that is part of a [pattern](@) with a pattern-specific tag. Grouptags typically satisfy the regex `#[a-z0-9_-]+` and is often preceded by the `#` character to designate that it is a tag.

Versiontags are used to identify a specific version of the [terminology](@) of the [scope](@) within which the versiontag lives. It may have various forms, and would typically be chosen such that it comes in handy with the tools that the [terms community](@) has decided to use to curate that [scope](@).

### Criteria

is an alphanumeric string that is used to identify [scope](@) and/or group [terms](@), and that satisfies the regex `#[a-z0-9_-]+`.

### Examples

Examples of scopetags are `essif-lab`, `essiflab`, `toip`, or `ctwg`
