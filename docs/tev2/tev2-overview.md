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

The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. [curation](@)) of [terminologies](@), as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTex), as appropriate for different, individual [scopes](@).

The purposes that TEv2 aims to serve include:
- to assist readers of such publications to understand the [terms](@) that are used in the way that the authors have intended (rather than interpreting it in their own way)
- to facilitate authors to write and publish texts where terms can be referenced to their intended meaning, within, and across [scopes](@).
- to enable authors and readers of such publications to create and further develop their own [terminologies](@) (and with that: their insights in their subject matters);

The current eSSIF-Lab (i.e.: this) website already shows the first ideas of what that might look like (popups on terms showing their definition).

## Introduction

TEv2 not only facilitates individual authors or groups in dealing with their own [terminology](@), it specifically also caters for authors/groups using [terms](@) that others have [defined](@), without each author/group loosing their autonomy (control) over their own [terminologies](@).

We assume that any author/group will create and maintain texts that concern a particular topic and that, from a terminological perspective, belong together. We also assume that such texts are 'raw', i.e. in a very simple format such as plain ASCII text, markdown, LaTex, etc., and somehow require a rendering step that turns them into 'formatted' texts, such as PDF, ODT, DOCX, or Google doc format. The reason for that is that the more complex a text format is, the more difficult it is to process them.

This is illustrated in the figure below. The figure also shows the TEv2 'toolbox', which contains tools that can process raw texts prior to them being processed by the regular rendering tools that an author/group uses.

<img
  alt="Converting raw texts into formatted texts"
  src={useBaseUrl('images/tev2-overview-without-toolbox.png')}
/><br/><br/>

One of the most useful tools in the toolbox is the Terminology Reference Resolver Tool ([TRRT](@)). This tool can process a raw text that contains so-called [Term Refs](term-ref@), and resolve them to a syntax that one or more specific 3rd party rendering tools can pick up and use to create enhanced formatted texts. The figure below shows a raw (markdown) text (in markdown), and the corresponding  formatted (web page, HTML) text that is the result of processing by the [TRRT](@) and subsequently by the Docusaurus rendering tools.

<img
  alt="The effect of the Terminology Reference Resolver Tool"
  src={useBaseUrl('images/tev2-overview-enhanced-term.png')}
/><br/><br/>

If you are familiar with [markdown](https://www.markdownguide.org/basic-syntax/), you will notice that the raw text contains syntax that resembles [markdown links](https://www.markdownguide.org/basic-syntax/#links), but it's not quite conformant: it contains the `@` character, which signals (within TEv2) that this is not an ordinary link, but a link that will be resolved by the [TRRT](@). The [TRRT](@) will convert these links (which we call [term refs](term-ref@)) such that they are rendered as shown in the right of the figure: that is: in purple boldface, and when you hover your mouse over the term, it will show the definition of that term.

## TEv2 Architecture

TEv2 is designed to support an ever increasing variety of raw text formats, and its toolbox will - over time - be filled with an increasing number of tools that will support an increasing number of 3rd party rendering tools. This section shows the architecture that allows this to become reality.

The architecture is based on the ToIP/eSSIF-Lab [Terminology Model](/docs/terms/pattern-terminology), which assumes that every author/group constitutes a so-called [terms-community](@) that [curates](@) one (or more) [scope(s)](@), that contains e.g. [definitions](@), [terms](@), [tags](@) etc. that constitute the author/group's [terminology](@). An overview is given in the figure below:

<img
  alt="Curation of Terminology and its Tooling"
  src={useBaseUrl('images/tev2-overview.png')}
/><br/><br/>

The figure not only shows the raw texts, the their processing by the [TRRT](@) tool and the subsequent rendering to produce formatted texts, but also other files that exist within the [scope](@), and that are being [curated](@) by its [terms-community](@) (the author/group). TEv2 expects all files that are under [curation](@), and/or are generated to serve a purpose within a [scope](@), to live in a specific directory, which we call the [scope directory](@). The rounded rectangles in the figure represent such directories and (parts of) their contents.

To the left of the figure, you can see that some raw texts are 'ingressed' into the [scope directory](@), and thereby have become so-called [curated texts](@). These texts typically contain descriptions of [terms](@), [definitions](@), examples, etc., that help interested [parties](@) to formulate and understand the [concepts](@) that they need. Such [curated texts](@) are then fed to the [MRGT](@) tool, that generates a Machine Readable [Glossary](@) ([MRG](@)) of the [scope's](@) [terminology](@).

The [MRG](@) is also considered a 'raw text', and hence it can also be subjected to the [TRRT](@) to resolve any [term refs](@) that it may hold, and subsequently be rendered to result in a formatted text that we call a Human Readable Glossary or [HRG](@); we will use the term [HRGT](@) to refer to the rendering tool that produces the [HRG](@).

Since the [terminology](@) of a [scope](@) may also include [terms](@) that are [defined](@) in other [scopes](@), the [MRGT](@) will need to know where to get the associated data. It can do so because every [scope directory](@) has a so-called Scope Administration File or [SAF](@), which contains:
- meta-data concerning the [scope](@) itself, ways in which people can contribute, raise issues, see what's going on, discuss,  what license is being used, and how to contact [curators](@);
- meta-data about the [scopes](@) that contain data that needs to be used/imported, which includes the URL of their respective [scope directories](@);
- the specification (of various versions that are being maintained) of the [scope's](@) [terminology](@), which includes the set of [terms](@) the [definitions](@) of which come either from the [scope](@) itelf, or from one of the [scopes](@) that is listed in the [SAF](@).

Thus, by inspecting the contents of the [SAF](@), the [MRGT](@) learns which [MRGs](@) of other [scopes](@) it needs to obtain, and where they are located. Also, the [MRGT](@) learns which [terms](@) and [definitions](@) of the [scope](@) itself are to be included in the [terminology](@) that is will be creating an [MRG](@) for.

## Curation

:::info Editor's note
This section may need to be revised
:::

TEv2 assumes that the [curated](@) data resides in an existing [scope directory](@), and that [curated files](@) are expected to be processable by other tools, including, but not limited to [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a [scope directory](@) must be [set up](tev2-installation) in advance.

Thus, whenever a [terms-community](@) decided that some contribution is to be included in the part of the [corpus](@) that is maintained by that [community](terms-community@), the [curators](@) of that [community](terms-community@) are tasked to

1. create/maintain/update any [scope](@)-related administration in the [scope directory](@) that is needed for curation, as specified by a [Scope Administration File (SAF)](tev2-spec-saf);
2. convert that contribution to (a set of) [curated files](@), that comply with the [specifications](tev2-spec-ctext) for such files;
3. store them at the location as designated in the [SAF](tev2-spec-saf);
4. generate/update any artifact that the [community](terms-community@) wants to automatically maintain, which in particular includes the [MRG](@) and associated [HRG](@).

This document provides an overview of the knowledge that [curators](@) may need to perform this task, which can be broken up in the following parts:

1. [Setup/installation](tev2-installation) of a [scope directory](@) that is suitable for working with TEv2, and the creation of a [SAF](tev2-spec-saf).

2. [Curation](@) of terminological contributions. This requires knowledge about the [file structure](tev2-spec-ctext) of [curated file](@).

3. [generation](tev2-toolbox-use) of terminological artifacts. It is typical for a [terms community](@) to want to have a [glossary](@) of the terms they either have defined themselves, or are defined elsewhere but are to be used within that [community](@). However, other artifacts may be generated as well (a [dictionary](@), white papers, etc.) - this is all up to the [community](@).