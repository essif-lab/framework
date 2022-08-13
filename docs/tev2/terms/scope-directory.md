---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: scope-directory
# TEv2: generic front-matter for curated texts
scope: tev2
termname: scope-directory
termtype: concept
termattrs:
grouptags:
synonyms:
formphrases: scope-director{yies}, scopedir{ss}
status: proposed
created: 2022-07-29
updated: 2022-07-29
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa: scopedir
glossaryText: "a directory in a computer file system that contains all files that are either being [curated](@) within a particular [scope](@), or generated to serve some purpose within that [scope](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Scope Directory"
hoverText: "Scope Directory: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **scope directory** is a directory in a computer file system that contains all files that are either being [curated](@) within a particular [scope](@), or generated to serve some purpose within that [scope](@).

Specifically, every [scope directory](@) contains at least:
- a [Scope Administration File](saf@) or [SAF](@), that specifies details about the [scope](@) itself, identifies other [scopes](@) that it will be using, and the various [terminologies](@) that are maintained within the [scope](@);
- a so-called [curatedir](@), i.e. some subdirectory within the [scopedir](@) where all [curated texts](@) live;
- a so-called [glossarydir](@), i.e. some subdirectory within the [scopedir](@) where all ([machine-readable](mrg@) and [human readable](hrg@)) [glossaries](@) live.

Typically, a [scopedir](@) might also contain other files, e.g. for generating e.g. a statical website, whitepapers, and other kinds of documentation.

From the perspective of a group of people that want to do something together, and that have agreed to put their files in one place, e.g. a github or gitlab repository, it may be convenient to add documentation for their [terminologies](@) in (a subdirectory of) that directory, and organize it as a [scopedir](@), by adding a [SAF](@), a [curatedir](@) and a [glossarydir](@) in it.

### Purpose
The purpose of [scopedirs](@) is to have all artifacts related to a particular [scope](@) in a single location, so that they can be easily used by [tools](@), and there is a basis for sharing terminological work between [scopes](@)

### Criteria
A **scope directory** is a directory in a computer file system that contains all files that are either being [curated](@) within a particular [scope](@), or generated to serve some purpose within that [scope](@).
