---
id: man-users
title: User Manual - Overview
sidebar_label: User Manual
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20220513
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. [curation](@)) of [terminologies](@), as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTex), as appropriate for different, individual [scopes](@).[^1]

[^1]: This document/website practices what it preaches in that it uses a [terminology](@) that is specific for dealing with [terminologies](@) in general. Details on how this is done can be found in the [terminology pattern](pattern-terminology@) (and the references it contains).

[Users](@) participate in the following tasks:
1. They contribute to the creation and maintenance of [terminological artifacts](@), specifically in the [definitions](@) of [concepts](@), [use-cases](@), etc.
2. They author documents that use (and/or refer to) [terms](@) from their [terminology](@) (or (or other [terminological artifacts](@))), thereby using the mechanisms and conventions that the [curators](@) of (the [scope](@) of) the [terminology](@) have specified and made available.
3. They check/proofread the authored documents to ensure that references to [terms](@) and/or other [terminological artifacts](@) are correct, i.e.: as intended by the author, and understandable by [readers](@).
4. They identify any specific needs or mechanisms that help them do the aforementioned tasks, and communicate these needs to their [curators](@), or otherwise contribute to the further development of TEv2 so that such needs and mechanisms may be supported.


:::info Editor's note
This section needs to be revised from here onward
:::

TEv2 assumes that the [curated](@) data resides in an existing [scope directory](@), and that [curated files](@) are expected to be processable by other tools, including, but not limited to [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a [scope directory](@) must be [set up](tev2-installation) in advance.

Thus, whenever a [terms-community](@) decided that some contribution is to be included in the part of the [corpus](@) that is maintained by that [community](terms-community@), the [curators](@) of that [community](terms-community@) are tasked to

1. create/maintain/update any [scope](@)-related administration in the [scope directory](@) that is needed for curation, as specified by a [Scope Administration File (SAF)](tev2-spec-saf);
2. convert that contribution to (a set of) [curated files](@), that comply with the [specifications](ctext) for such files;
3. store them at the location as designated in the [SAF](tev2-spec-saf);
4. generate/update any artifact that the [community](terms-community@) wants to automatically maintain, which in particular includes the [MRG](@) and associated [HRG](@).

This document provides an overview of the knowledge that [curators](@) may need to perform this task, which can be broken up in the following parts:

1. [Setup/installation](tev2-installation) of a [scope directory](@) that is suitable for working with TEv2, and the creation of a [SAF](tev2-spec-saf).

2. [Curation](@) of terminological contributions. This requires knowledge about the [file structure](ctext) of [curated file](@).

3. [generation](tev2-toolbox-use) of [terminological artifacts](@). It is typical for a [terms community](@) to want to have a [glossary](@) of the terms they either have defined themselves, or are defined elsewhere but are to be used within that [community](@). However, other artifacts may be generated as well (a [dictionary](@), white papers, etc.) - this is all up to the [community](@).