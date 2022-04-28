---
id: tev2-overview
title: Terminology Engine v2 - Overview
sidebar_label: Terminology Engine v2
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

:::info
The Terminology Engine section is about the design of a generically usable tool that caters for the maintenance of terminology as well as the creation of publications (in different formats, e.g. websites, whitepapers, etc.), with the propoerty that readers of such publications are assisted in understanding (the terms etc. used in) such publications. The current eSSIF-Lab website already shows the first ideas of what that might look like (popups on terms showing their definition).
:::

:::info
As TEv2 is not available, the texts that specify the tool are still 'raw', i.e. not yet processed. Readers will need to see through some (currently unoprocessed) notational conventions.
:::

The Terminology Engine v2 (TEv2) ensures that the [community] of [terms communities|terms-community] that use it will be able to use each others [definitions], [terms] and other terminological artifacts without loosing their autonomy (control over the [terminologies] they [own] themselves).

TEv2 is a set of tools whose purpose is to facilitate the work of [curators] of a [terms-community] that seeks to create and maintain one or more [terminologies] of their own, and use [terminologies] that are maintained by other [members] of the Trust over IP [community].

TEv2 assumes that the [curated] data resides in an existing github repository (repo), and that [curated file] should be processeable by [Docusaurus v2](https://docusaurus.io/docs/docs-introduction), which is a static site generator for web sites that document all sorts of guidance, specifications, etc. Such a repo must be [set up](tev2-installation) in advance.

Thus, whenever a [terms-community] decided that some contribution is to be included in the part of the [corpus] that is maintained by that [community|terms-community], the [curators] of that [community|terms-community] are tasked to

1. create/maintain/update any [administration](tev2-administration) in the github repo that is needed for curation;
2. convert that contribution to (a set of) [curated file], that comply with the [specifications](tev2-struct-ctext) for such files;
3. store them at an appropriate location in an appropriate github repository that is managed by (or on behalf of) that [community|terms-community], as defined in the [directory structure](tev2-struct-directory);
4. generate/update any artifact that the [community|terms-community] wants to autmatically maintain, such as a [glossary] for its [terminology].

This document provides an overview of the knowledge that [curators] may need to perform this task, which can be broken up in the following parts:

1. [Setup/installation](tev2-installation) of a github repository that is suitable for working with TEv2.

2. [Administration](tev2-administration). This task is about the constructs that a [curator] must maintain in order to enable TEv2 to find the repos that contain TEv2-compatible terminological artifacts of other [terms communities|terms-community] that are being used and/or referenced from [curated files].

3. [Curation] of terminological contributions. This requires knowledge about
   - the [directory structure](tev2-struct-directory) that is used, i.e. where to put which files, and
   - the [file structure](tev2-struct-ctext) of [curated file]

4. [generation](tev2-artifact-generation) of terminological artifacts. It is typical for a [terms community] to want to have a [glossary] of the terms they either have defined themselves, or are defined elsewhere but are to be used within that [community|terms community]. However, other artifacts may be generated as well (a [dictionary], white papers, etc.) - this is all up to the [community|terms community].