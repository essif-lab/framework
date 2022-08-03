---
id: overview
title: Enabling a Common Understanding in a Community
sidebar_label: Manual for Contributors
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20220513
---

import useBaseUrl from '@docusaurus/useBaseUrl'
export const Mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

## Introduction

In order for a [community](@) (e.g. a workgroup, taskforce, project/product team, department, etc.) to realize its [objectives](@), it is beneficial that its members have a common set of the ideas, [concepts](@) and other [knowledge artifacts](@) that are relevant for realizing these [objectives](@). The ability to realize such a common understanding, and to demonstrate that this is actually the case, is a critical capability for success.

The Terminology Engine (v2) is a set of specifications and tools that (technically) facilitates such capabilities, by recognizing that each [community](@) wants (and needs):
- its own [terminology](@) that can develop over time (producing different versions);
- to autonomously [define](@) specific [terms](@), create its particular documentation for its [concepts](@) or other [knowledge artifacts](@);
- to 'import' (borrow, include, use) specific [terms](@) that are defined by other [communities](@);
- to make its own [terminologies](@) available for other [communities](@) to 'import';
- to generate tangible artifacts such as [glossaries](@), [dictionaries](@) and other documentation (specifications, white papers, etc.) that actually use the [terminology](@) as committed to by (each member of) the [community](@).

This technical support must, however, be complemented with methods that a [community](@) will actually use to produce and maintain its [terminology](@). <Mark>We need to decide whether or not to provide guidance for that as well.</Mark>

:::info Editor's note
([Agredo-Delgado, et. al., 2021](https://link.springer.com/article/10.1007/s10588-021-09326-z))[^1] have tested a process for constructing a shared understanding in computer-supported collaborative work, where the construction part consists of 4 steps:
1. each group member acquires an individual understanding of the subject
2. each group member exposes his/her ideas and the others actively listen to them
3. the group refines, builds or modifies the original ideas
4. the differences of interpretation between the group members are dealt with in a constructive fashion, through arguments and clarifications.
:::

[^1]: Agredo-Delgado, V., Ruiz, P.H., Mon, A. et al. Applying a process for the shared understanding construction in computer-supported collaborative work: an experiment. Comput Math Organ Theory (2021). https://doi.org/10.1007/s10588-021-09326-z

## Roles

Individual people may participate in the following roles:
1. **Contributors** provide inputs that are relevant for the construction, further development and maintenance of a [terminology](@). They participate in discussions and other ways in which a collaborative and common understanding within the [community](@) (e.g. a Work Group, Task Force, Project Team) is fostered. How such contributions are to be provided, and how the collaborative and common understanding is fostered, is up to the [community](@) leadership. The [Manual for Contributors](/docs/tev2/manuals/contributor) section documents how the [TEv2](@) supports this role.
2. **[Curators](@)** (i.e. the members of a so-called [terms community](@)) manage the (contents of the) [scope(s)](@) on behalf of the [community](@). [Curators](@) may serve (i.e.: [curate](@) the [scopes](@)) of multiple [communities](@). A [curator](@) is tasked with describing the [scope](@) particulars, [curating](@) its so-called [curated texts](@) (which are expected to contain a description of [concepts](@) and other [terminological artifacts](@) that are relevant for realizing the [objectives](@) of the [community](@) that )
2. [Authors](/docs/tev2/manuals/author) create and maintain documents (e.g. articles, specifications, [curated texts](@) and other documentation) that use [terms](@) from one or more [terminologies](@) in their (documented) meaning, and will use a specific kind of [markup-syntax](term-ref@) use (and/or refer to) [terms](@) from their [terminology](@) (or (or other [knowledge artifacts](@))), thereby using the mechanisms and conventions that the [curators](@) of (the [scope](@) of) the [terminology](@) have specified and made available.
3. They check/proofread the authored documents to ensure that references to [terms](@) and/or other [knowledge artifacts](@) are correct, i.e.: as intended by the author, and understandable by [readers](@).
4. They identify any specific needs or mechanisms that help them do the aforementioned tasks, and communicate these needs to their [curators](@), or otherwise contribute to the further development of TEv2 so that such needs and mechanisms may be supported.


:::info Editor's note
This section needs to be revised from here onward
:::

TEv2 assumes that the [curated](@) data resides in an existing [scope directory](@), and that [curated files](@) are expected to be processable by other tools, including, but not limited to [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a [scope directory](@) must be [set up](/docs/tev2/manuals/tev2-installation) in advance.

Thus, whenever a [terms-community](@) decided that some contribution is to be included in the part of the [corpus](@) that is maintained by that [community](terms-community@), the [curators](@) of that [community](terms-community@) are tasked to

1. create/maintain/update any [scope](@)-related administration in the [scope directory](@) that is needed for curation, as specified by a [Scope Administration File (SAF)]/tev2/spec-files/saf;
2. convert that contribution to (a set of) [curated files](@), that comply with the [specifications](/docs/tev2/ctext) for such files;
3. store them at the location as designated in the [SAF]/tev2/spec-files/saf;
4. generate/update any artifact that the [community](terms-community@) wants to automatically maintain, which in particular includes the [MRG](@) and associated [HRG](@).

This document provides an overview of the knowledge that [curators](@) may need to perform this task, which can be broken up in the following parts:

1. [Setup/installation](/docs/tev2/manuals/tev2-installation) of a [scope directory](@) that is suitable for working with TEv2, and the creation of a [SAF]/tev2/spec-files/saf.

2. [Curation](@) of terminological contributions. This requires knowledge about the [file structure](/docs/tev2/ctext) of [curated file](@).

3. [generation](/docs/tev2/spec-tools/using-toolbox-tools) of [knowledge artifacts](@). It is typical for a [terms community](@) to want to have a [glossary](@) of the terms they either have defined themselves, or are defined elsewhere but are to be used within that [community](@). However, other artifacts may be generated as well (a [dictionary](@), white papers, etc.) - this is all up to the [community](@).