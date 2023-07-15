---
# TEv2 Curated Text Header
term: scope-directory
termType: concept
isa: scopedir
glossaryTerm:
glossaryText: "a directory in a computer file system that contains all files that are either being [curated](@) within a particular [scope](@), or generated to serve some purpose within that [scope](@)."
synonymOf:
grouptags:
formPhrases: scope-director{yies}, scopedir{ss}
# Curation status
status: proposed
created: 2022-07-29
updated: 2022-07-29
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Scope Directory

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
