---
# TEv2 Curated Text Header
term: grouptag
termType: concept
groupTags:
synonyms:
formPhrases: grouptag{ss}, group-tag{ss}
status: proposed
created: 2022-06-06
updated: 2022-07-28
contributors: RieksJ
isa: tag
glossaryText: "a [tag](@) that is used to group [terms](@) within a specific [scope](@)."
---

# Grouptag

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Grouptag** is a [tag](@) that is used to group [terms](@) within a specific [scope](@).

Grouptags may be used within a [scope](@) to tag various sorts or [terms](@), thus representing the set of [terms](@) that are associated with that [tag](@). This may be used for different purposes. One example is to tag every [term](@) that is part of a [pattern](@) with a pattern-specific tag.

The [terminology pattern](pattern-terminology-support@) provides an overview of how this concept fits in with related concepts.

### Criteria
A **Grouptag** (of/within a [scope](@)) is a [tag](@) that is used within that [scope](@) to group [terms](@). It satisfies the regex `[a-z0-9_-]+`.

### Examples
Examples of grouptags are `meta-terms`, `governance-terms`, `paa-pattern-terms`, `essiflab`, or `ctwg`
