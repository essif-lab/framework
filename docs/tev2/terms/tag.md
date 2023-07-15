---
# TEv2 Curated Text Header
term: tag
termType: concept
isa: identifier
glossaryTerm:
glossaryText: "an alphanumeric string that is used to identify [scopes](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@)."
synonymOf:
grouptags:
formPhrases: tag{ss}
# Curation status
status: proposed
created: 2022-06-06
updated: 2022-06-06
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Tag

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Tag** is an alphanumeric string that satisfies the regex `[a-z0-9_-]+`, and that is used to identify [scopes](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@).

Scopetags [identify](@) a [scope](@) (from within a given [scope](@)), and hence can be used (within that given [scope](@)) to disambiguate [terms](@). For example, `essiflab:term` is an [identifier](@) for the [concept](@) that within the [scope](@) [identified](@) by the scopetag `essiflab` is referred to by the [term](@) 'term'.

Grouptags may be used within a [scope](@) to tag various sorts or [knowledge artifacts](@) such as [terms](@), [concepts](@), [patterns](@) and the like. One can then say that this grouptag represents the group of [knowledge artifacts](@) that are associated with that tag. This may be used for different purposes. One example is to tag every term that is part of a [pattern](@) with a pattern-specific tag.

Versiontags are used to identify a specific version of the [terminology](@) of the [scope](@) within which the versiontag lives. It may have various forms, and would typically be chosen such that it comes in handy with the tools that the [terms community](@) has decided to use to curate that [scope](@).

### Criteria
is an alphanumeric string that is used within a specific [scope](@) to identify [scopes](@) and/or group [knowledge artifacts](@), and/or identify a version of its [terminology](@). The alphanumeric string satisfies the regex `[a-z0-9_-]+`.

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.

### Examples
Examples of scopetags are `essif-lab`, `essiflab`, `toip`, or `ctwg`

### Notes
Discussions about which regex a tag should satisfy must be held with care. For example, one might argue that allowing the `.` character for [versiontags](@) might be beneficial. However, allowing a `.` character in a [scopetag](@) may cause problems with (the alternative syntax) of [term refs](@), as email address in square brackets might then qualify as a [term ref](@) while that is very likely not the [author](@)'s intention.