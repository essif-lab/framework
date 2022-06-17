---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: tag
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: tag
formphrases: tag{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-06-06
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa: identifier
term: tag  # Text that is the name of the concept in (human readable) texts.
fullterm: Tag (of/within a Scope)
shorterm:
synonyms:
glossaryText: "an alphanumeric string that is used to identify [scopes](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Tag"
hoverText: "Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Tag** is an alphanumeric string that satisfies the regex `[a-z0-9_-]+`, and that is used to identify [scopes](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@).

Scopetags [identify](@) a [scope](@) (from within a given [scope](@)), and hence can be used (within that given [scope](@)) to disambiguate [terms](@). For example, `essiflab:term` is an [identifier](@) for the [concept](@) that within the [scope](@) [identified](@) by the scopetag `essiflab` is referred to by the [term](@) 'term'.

Grouptags may be used within a [scope](@) to tag various sorts or [terminological artifacts](@) such as [terms](@), [concepts](@), [patterns](@) and the like. One can then say that this grouptag represents the group of [terminological artifacts](@) that are associated with that tag. This may be used for different purposes. One example is to tag every term that is part of a [pattern](@) with a pattern-specific tag.

Versiontags are used to identify a specific version of the [terminology](@) of the [scope](@) within which the versiontag lives. It may have various forms, and would typically be chosen such that it comes in handy with the tools that the [terms community](@) has decided to use to curate that [scope](@).

### Criteria
is an alphanumeric string that is used within a specific [scope](@) to identify [scopes](@) and/or group [terminological artifacts](@), and/or identify a version of its [terminology](@). The alphanumeric string satisfies the regex `[a-z0-9_-]+`.

### Examples
Examples of scopetags are `essif-lab`, `essiflab`, `toip`, or `ctwg`

### Notes
Discussions about which regex a tag should satisfy must be held with care. For example, one might argue that allowing the `.` character for [versiontags](@) might be beneficial. However, allowing a `.` character in a [scopetag](@) may cause problems with (the alternative syntax) of [term refs](@), as email address in square brackets might then qualify as a [term ref](@) while that is very likely not the author's intention.