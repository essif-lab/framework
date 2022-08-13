---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: glossarydir
# TEv2: generic front-matter for curated texts
scope: tev2
termname: glossarydir
termtype: concept
termattrs:
grouptags:
synonyms:
formphrases: glossary-director{yies}, glossarydir{ss}
status: proposed
created: 2022-07-29
updated: 2022-07-29
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa: scopedir
glossaryText: "a directory within a [scopedir](@) within which the different versions of its ([machine readable](mrg@) and [human readable](hrg@)) [glossaries](@) are created and maintained."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Glossary Directory (Glossarydir)"
hoverText: "Glossarydir: a directory within a Scopedir within which the different versions of its (machine readable and human readable) Glossaries are created and maintained."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **Glossarydir** is a directory within a [scopedir](@) within which the different versions of its ([machine readable](mrg@) and [human readable](hrg@)) [glossaries](@) are created and maintained.

Typically a [glossarydir](@) would contain an [MRG](@) for every version of a [terminology](@) as specified in the [scope's](@) [SAF](@). Also, it would contain one or more [HRGs](@) that are derived from any of these [MRGs](@), and perhaps the instructions for creating them as well.

The location of the [glossarydir](@) of a [scope](@) is specified in the [SAF](@) of that [scope](@) (which is located in the root of the [scopedir](@)).
