---
# TEv2 Curated Text Header
term: versiontag
termType: concept
isa: tag
glossaryText: "a [tag](@) that is used to [identify](@) a specific version of a [terminology](@) from within a specific [scope](@)."
synonyms:
groupTags:
formPhrases: versiontag{ss}, version-tag{ss}
# Curation status
status: proposed
created: 2022-06-06
updated: 2022-07-28
# Origins/Acknowledgements
contributors: RieksJ
attribution:
originalLicense:
---

# Versiontag

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Versiontag** is a [tag](@) that is used to [identify](@) a specific version of a [terminology](@) from within a specific [scope](@). It may have various forms, and would typically be chosen such that it comes in handy with the tools that the [terms community](@) has decided to use to curate that [scope](@).

The [terminology pattern](pattern-terminology-support@) provides an overview of how this concept fits in with related concepts.

### Criteria
A **Versiontag** (of/within a [scope](@)) is a [tag](@) that is used within that [scope](@) to [identify](@) a specific version of that [scope's](@) [terminology](@). The alphanumeric string satisfies the regex `[a-z0-9_-]+`.

### Examples
Examples of versiontags are `v0.1`, `latest`, `afa65fe9` (a (git) commit-hash), etc.

### Notes
Discussions about which regex a tag should satisfy must be held with care. For example, one might argue that allowing the `.` character for [versiontags](@) might be beneficial. However, allowing a `.` character in a [scopetag](@) may cause problems with (the alternative syntax) of [term refs](@), as email address in square brackets might then qualify as a [term ref](@) while that is very likely not the author's intention.