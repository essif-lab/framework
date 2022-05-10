---
id: tev2-overview
title: Terminology Engine v2 - Overview
sidebar_label: Terminology Engine v2
displayed_sidebar: tev2SideBar
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>Readers will need to see through some (currently unprocessed) notational conventions.
:::

The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. [curation@]) of [terminologies@], as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTex), as appropriate for different, individual [scopes@].

The purposes that TEv2 aims to serve include:
- to assist readers of such publications to understand the [terms@] that are used in the way that the authors have intended (rather than interpreting it in their own way)
- to facilitate authors to write and publish texts where terms can be referenced to their intended meaning, within, and across [scopes@].
- to enable authors and readers of such publications to create and further develop their own [terminologies@] (and with that: their insights in their subject matters);

The current eSSIF-Lab (i.e.: this) website already shows the first ideas of what that might look like (popups on terms showing their definition).

## Introduction

TEv2 not only facilitates individual authors or groups in dealing with their own [terminology](@), it specifically also caters for authors/groups using [terms@] that others have [defined@], without each author/group loosing their autonomy (control) over their own [terminologies@]. The following figure illustrates how that works:

<img
  alt="Curation of Terminology and its Tooling"
  src={useBaseUrl('images/tev2-overview.png')}
/><br/><br/>

We assume that any author/group will create and maintain texts that concern a particular topic and that, from a terminological perspective, belong together. These texts - specifically those that relate to terminology itself, are expected to reside in a single directory, which we call the [scope-directory@] or [scopedir@].

A [scopedir@] typically contains:
- [curated texts@], i.e. texts that the author/gropu

:::caution Caution! &nbsp&nbspxxxxxxxxxxxxxxxxxxxxxxxxxxx
From this point onward the text needs to be revised.<br/>
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
:::

However, in order to use each other's terminological artifacts, some common ground needs to be established and maintained. This means that xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
This figure shows a green and yellow group of people that author documents and use their own (preferred) tools for that. They may make documentation that is rendered by a (static) website, or create LaTeX manuscripts and turn them into PDF files. They may use Github to collaborate of control versions, etc.


TEv2 ensures that the [community@] of [terms communities@] that use it will be able to use each others [definitions@], [terms@] and other terminological artifacts without loosing their autonomy (control over the [terminologies@] they [own@] themselves).

TEv2 is a set of tools whose purpose is to facilitate the work of [curators@] of a [terms-community@] that seeks to create and maintain one or more [terminologies@] of their own, and use [terminologies@] that are maintained by other [parties@] that are members of the Trust over IP [community@].

TEv2 assumes that the [curated@] data resides in an existing [scope directory@], and that [curated files@] are expected to be processable by other tools, including, but not limited to [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a [scope directory@] must be [set up](tev2-installation) in advance.

Thus, whenever a [terms-community@] decided that some contribution is to be included in the part of the [corpus@] that is maintained by that [community@](terms-community), the [curators@] of that [community@](terms-community) are tasked to

1. create/maintain/update any [scope@]-related administration in the [scope directory@] that is needed for curation, as specified by a [Scope Administration File (SAF)](tev2-spec-saf);
2. convert that contribution to (a set of) [curated files@], that comply with the [specifications](tev2-spec-ctext) for such files;
3. store them at the location as designated in the [SAF](tev2-spec-saf);
4. generate/update any artifact that the [community@](terms-community) wants to automatically maintain, such as a [glossary@] for its [terminology@].

This document provides an overview of the knowledge that [curators@] may need to perform this task, which can be broken up in the following parts:

1. [Setup/installation](tev2-installation) of a [scope directory@] that is suitable for working with TEv2, and the creation of a [SAF](tev2-spec-saf).

2. [Curation@] of terminological contributions. This requires knowledge about the [file structure](tev2-spec-ctext) of [curated file@].

3. [generation](tev2-toolbox-use) of terminological artifacts. It is typical for a [terms community@] to want to have a [glossary@] of the terms they either have defined themselves, or are defined elsewhere but are to be used within that [community@]. However, other artifacts may be generated as well (a [dictionary@], white papers, etc.) - this is all up to the [community@].