---
id: tev2-overview
title: Terminology Engine v2 - Overview
sidebar_label: TEv2 Overview
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. [curation](@)) of [terminologies](@), as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTex), as appropriate for different, individual [scopes](@).

The objectives that TEv2 contributes to include:
1. assisting [readers](@) of such publications to understand the [terms](@) that are used in the way that the authors have intended (rather than interpreting it in their own way);
2. facilitating authors to write and publish texts where terms can be referenced to their intended meaning, within, and across [scopes](@);
3. supporting authors, [readers](@) and other stakeholders to such publications as they seek to create and further develop a [terminology](@) that they can commit to (within a specific [scope](@)), which we expect to also help develop insights in their subject matter of that [scope](@)).

These contributions are what so-called [curators](@) of the [scope](@) seek to deliver. They are the ones that make sure that there is a [location](scopedir@) where people can contribute to the development of the [terminology](@) of a [scope](@), and tools are installed and operational that enable authors to use them as they publish their documents. [Curators](@) have their own [manual](man-curators).

The [eSSIF-Lab website](/docs/essifLab) already shows the first ideas of what that might look like (popups on [terms](@) showing their [definition](@)).

## Introduction

TEv2 not only contributes to dealing with (authors/groups that have their) individual [scoped](@) [terminologies](@), it specifically also contributes to the re-use of [terms](@) (or other [terminological artifacts](@)). This means that [terms](@) (or other [terminological artifacts](@)) that are [curated](@) in one [scope](@) can also be used (re-used) within other [scopes](@), while ensuring the autonomy of each such [scope](@).

From the TEv2 perspective, we assume that any author/group will create and maintain texts that concern a particular topic and that, from a terminological perspective, belong together. We also assume that such texts are 'raw', i.e. in a very simple format such as plain ASCII text, markdown, LaTex, etc., and somehow require a rendering step that turns them into 'formatted' texts, such as PDF, ODT, DOCX, or Google doc format. The reason for that is that the more complex a text format is, the more difficult it is to process them.

This is illustrated in the figure below. The figure also shows the TEv2 'toolbox', which contains tools that can process raw texts prior to them being processed by the regular rendering tools that an author/group uses.

<img
  alt="Converting raw texts into formatted texts"
  src={useBaseUrl('images/tev2-overview-without-toolbox.png')}
/><br/><br/>

One of the most useful tools in the toolbox is perhaps the Terminology Reference Resolver Tool ([TRRT](@)). This tool can process a raw text that contains so-called [Term Refs](@), and resolve them to a syntax that one or more specific 3rd party rendering tools can pick up and use to create enhanced formatted texts. The left side of the figure below shows a raw (markdown) text (in markdown), and (at the right side) the corresponding formatted (web page, HTML) text that is the result of processing by the [TRRT](@) and subsequently by the Docusaurus rendering tools.

<img
  alt="The effect of the Terminology Reference Resolver Tool"
  src={useBaseUrl('images/tev2-overview-enhanced-term.png')}
/><br/><br/>

If you are familiar with [markdown](https://www.markdownguide.org/basic-syntax/), you will notice that the raw text contains syntax that resembles [markdown links](https://www.markdownguide.org/basic-syntax/#links), but it's not quite conformant: it contains the `@` character, which signals (within TEv2) that this is not an ordinary link, but a link that will be resolved by the [TRRT](@). The [TRRT](@) will convert these links (which we call [term refs](@)) such that they are rendered as shown in the right of the figure: that is: in purple boldface, and when you hover your mouse over the term, it will show the definition of that term.

## Architecture

TEv2 is designed to support an ever increasing variety of raw text formats, and its toolbox will - over time - be filled with an increasing number of tools that will support an increasing number of 3rd party rendering tools. This section shows the architecture that allows this to become reality.

The architecture is based on the ToIP/eSSIF-Lab [Terminology Model](/docs/terms/pattern-terminology), which assumes that every author/group constitutes a so-called [terms-community](@) that [curates](@) one (or more) [scope(s)](@), that contains e.g. [definitions](@), [terms](@), [tags](@) etc. that constitute the author/group's [terminology](@). An overview is given in the figure below:

<img
  alt="TEv2 Overview"
  src={useBaseUrl('images/tev2-overview.png')}
/><br/><br/>

<!-- TRRT -->
The figure not only shows the raw texts, the their processing by the [TRRT](@) tool and the subsequent rendering to produce formatted texts, but also other files that exist within the [scope](@), and that are being [curated](@) by its [terms-community](@) (the author/group). TEv2 expects all files that are under [curation](@), and/or are generated to serve a purpose within a [scope](@), to live in a specific directory, which we call the [scope directory](@). The rounded rectangles in the figure represent such directories and (parts of) their contents. Further details are in the [TRRT specs](tev2-toolbox-trrt).

<!-- curated texts -->
To the left of the figure, you can see that some raw texts are 'ingressed' into the [scope directory](@), and thereby have become so-called [curated texts](@). These texts typically contain descriptions of [terms](@), [definitions](@), examples, etc., that help interested [parties](@) to formulate and understand the [concepts](@) that they need. The [curators](@) of the [scope](@) are tasked to run the ingression process, and specify the details of what this means for that [scope](@). Further details are in the [Curated Texts description](ctext).

<!-- ingress tools -->
While the [curated texts](@) have specific requirements for their structure, the raw texts may not. For example, within the context of the Trust over IP foundation, so-called [Terms Wikis](https://wiki.trustoverip.org/display/HOME/Terms+Wikis) are used to facilitate people of various backgrounds as they contribute to the creation of a [terminology](@). The raw text is then in 'wiki format', and needs to be converted to the structure required for [curated texts](@). We expect to see tools being created that facilitate this transition.

<!-- SAF -->
These [curators](@) also create and maintain the [scope's](@) administration file ([SAF](@)), which is called `saf.yaml` and is located in (the root of) the [scope directory](@). This file contains meta-data concerning the [scope](@) itself, the locations (URLs) of its directories (and glossary files), the locations (URLs) of the [scope directories](@) of (selected) other [scopes](@), and a specification of the [terminological artifacts](@) that are part of the various versions of its [terminology](@) that are actively maintained. Further details are in the [SAF specs](tev2-spec-saf).

<!-- MRG -->
The [curators](@) also organize when and how the [scope's](@) Machine Readable Glossary ([MRG](@)) is created. This file is not a [glossary](@), but rather a (machine readable) inventory of all [terminological artifacts](@) that are part of (a specific version of) the [scope's](@) [terminology](@). Ideally, tools would only need to inspect the [MRG](@) of a [scope](@) if they want to use data that is [curated](@) in that [scope](@). Further details are in the [MRG specs](tev2-spec-mrg).

<!-- MRGT -->
The [MRG](@) is created by the [MRGT](@) tool. This tool takes the [scope's](@) [curated texts](@) as input, as well as [MRGs](@) from other scopes, e.g. to 'import' [terms](@) or other [artifacts](terminological-artifact)(@) that are needed in, but not [curated](@) by, the [scope](@). The [SAF](@) of the [scope](@) tells the [MRGT](@) where to find these (third party) [MRGs](@). Further details are in the [MRGT specs](tev2-toolbox-mrgt).

<!-- HRG -->
The Human Readable Glossary or [HRG](@) is a (real) [glossary](@) that humans are expected to read/use. It is a formatted text, which means that it might appear in one of a plethora of formats. Within a [scope](@), we assume a specific format is chosen that is appropriate for its users. The [HRG](@) is not a formatted/rendered version of the entire [MRG](@): it typically only lists the [terms](@) that are assocated with specific kinds of [terminological artifacts](@), specifically the type [`concept`](concept@). Further details are in the [HRG specs](tev2-spec-hrg).

<!-- HRGT -->
We will use the term [HRGT](@) to generically refer to any tool that either produces a [HRG](@) directly, or that produces inputs for other, third party rendering tools that will then generate the [HRG](@). Typically, a [HRGT](@) will extract a subset of the [terminological artifacts](@) from the [MRG](@), sort them, resolve [term refs](@) where appropriate, and do whatever else is necessary to generate (the files that third party tools pick up to) generate the [HRG](@). We expect to see various flavours of this tool, or a single tool that can create [HRGs](@) in different formats, allowing [curators](@) to get the kind of [HRG](@) that is the most appropriate for their purposes. Further details are in the [HRGT specs](tev2-toolbox-hrgt).

<!-- Rendering tool plugins/addons -->
We envisage that existing 3rd party rendering tools may benefit from extensions (plugins, add-ons) that provide features that help [readers](@) to better understand rendered texts. One example is the [Docusaurus Terminology plugin](https://gitlab.grnet.gr/terminology/docusaurus-terminology) of GRNET that was used in TEv1 (the predecessor of TEv2), which enables the 'sticking out' of terms in the rendered text, providing a popup with a short explanation of the term, and providing a link to the page that documents the concept. While the development of such plugins is outside the scope of TEv2, using them (e.g. by the [HRGT](@)) may be within scope.

<!-- ICT -->
People that develop these tools, as well as people that contribute to the [curation](@) of [curated texts](@), the [SAF](@), etc., are only human, and sooner or later make a mistake that is hard to find and correct without any help. To facilitate the detection, identification and recovery from such mistakes, there is an [Integrity Checker Tool](tev2-toolbox-ict) (or [ICT](@)). This [ICT](@) tests the integrity of (a selection of) the files that are [curated](@) within a particular [scope](@), i.e. the [SAF](@), the [MRGs](@), and [curated files](@). The integrity checking of other files, e.g. [formatted files](@), such as [HRGs](@), is outside the scope of the [ICT](@). Further details are in the [ICT specs](tev2-toolbox-ict).

## Terminology Curation

:::info Editor's note
This section may need to be revised, and/or moved to the [Curators Manual](man-curators).
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
