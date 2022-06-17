---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: scopetag
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: scopetag
formphrases: scopetag{ss}, scope-tag{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-06-06
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa: grouptag
term: scopetag  # Text that is the name of the concept in (human readable) texts.
fullterm: Scopetag (of/within a Scope)
shorterm:
synonyms:
glossaryText: "a [tag](@) that is used to [identify](@) [scopes](@) from within a specific [scope](@)"
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Scopetag"
hoverText: "Scopetag: a Tag (alphanumeric string) that is used to identify Scopes from within a specific Scope"
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Scopetag** is a [tag](@) that is used to [identify](@) [scopes](@), e.g. in [term refs](@).

Scopetags [identify](@) a [scope](@) (from within a given [scope](@)), and hence can be used (within that given [scope](@)) to disambiguate [terms](@).

Within its [scope](@) a scopetag may also be used as a [grouptag], in which case it represents all [terminological artifacts](@) within that [scope](@).

### Criteria
A **Scopetag** (of/within a [scope](@)) is a [tag](@) that is used within that [scope](@) to [identify](@) itself or other [scopes](@). It satisfies the regex `[a-z0-9_-]+`.

### Examples
Examples of scopetags are `essif-lab`, `essiflab`, `toip`, or `ctwg`.

### Notes
Discussions about which regex a tag should satisfy must be held with care. For example, one might argue that allowing the `.` character for [versiontags](@) might be beneficial. However, allowing a `.` character in a [scopetag](@) may cause problems with (the alternative syntax) of [term refs](@), as email address in square brackets might then qualify as a [term ref](@) while that is very likely not the author's intention.