---
id: tev2-purpose
title: "Purpose: Enabling a Common Understanding in a Community"
sidebar_label: Purpose
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

The Terminology Engine (v2) is a set of specifications and tools that (technically) facilitate such capabilities, by recognizing that each [community](@) wants (and needs):
- its own [terminology](@) that can develop over time (producing different versions);
- to autonomously [define](@) specific [terms](@), create its particular documentation for its [concepts](@) or other [knowledge artifacts](@);
- to 'import' (borrow, include, use) specific [terms](@) that are defined by other [communities](@);
- to make its own [terminologies](@) available for other [communities](@) to 'import';
- to generate tangible artifacts such as [glossaries](@), [dictionaries](@) and other documentation (specifications, white papers, etc.) that actually use the [terminology](@) as committed to by (each member of) the [community](@).

This technical support must, however, be complemented with methods that a [community](@) will actually use to produce and maintain its [terminology](@). <Mark>We need to decide whether or not to provide guidance for that as well.</Mark>

:::info Editor's note
([Agredo-Delgado, et. al., 2021](https://link.springer.com/article/10.1007/s10588-021-09326-z))[^1] have tested a process for constructing a shared understanding in computer-supported collaborative work, where the construction part consists of 4 steps:
1. each group member acquires an individual understanding of the subject;
2. each group member exposes his/her ideas and the others actively listen to them;
3. the group refines, builds or modifies the original ideas;
4. the differences of interpretation between the group members are dealt with in a constructive fashion, through arguments and clarifications.
:::

[^1]: Agredo-Delgado, V., Ruiz, P.H., Mon, A. et al. Applying a process for the shared understanding construction in computer-supported collaborative work: an experiment. Comput Math Organ Theory (2021). https://doi.org/10.1007/s10588-021-09326-z

## Roles

Individual people may participate in a variety of roles, each of which requires specific capabilities. They are summarized in the following sections:

### Contributors {#contributor}

Contributors provide inputs that are relevant for the construction, further development and maintenance of a [terminology](@). They participate in discussions and other ways in which a collaborative and common understanding within the [community](@) (e.g. a Work Group, Task Force, Project Team) is fostered. How such contributions are to be provided, and how the collaborative and common understanding is fostered, is up to the [community](@) leadership.

Contributors can also be tasked to check/proofread authored documents to ensure that references to [terms](@) and/or other [knowledge artifacts](@) are correct, i.e.: as intended by the author, and understandable by [readers](@).

Finally, contributors may identify any specific needs or mechanisms that help them do the aforementioned tasks, and communicate these needs to their [curators](@), or otherwise contribute to the further development of [TEv2](@) so that such needs and mechanisms may be supported.

The [Manual for Contributors](/docs/tev2/manuals/contributor) documents how the [TEv2](@) supports this role.

### Curators {#curator}

[Curators](@) (i.e. the members of a so-called [terms community](@)) manage the (contents of the) [scope(s)](@) on behalf of the [community](@) (whose [knowledge artifacts](@) are being documented within that [scope](@)). [Curators](@) may serve (i.e.: [curate](@) the [scopes](@)) of multiple [communities](@).

A [curator](@) is tasked with describing the [scope](@) particulars, [curating](@) its [curated texts](@), generating the various [glossaries](@) ([MRGs](@) and [HRGs](@)), [dictionaries](@) (if and when necessary and possible), and other tangible, 'rendered artifacts' (e.g. static websites, PDFs, whitepapers) as agreed with the [community](@).

Also, [curators](@) are expected to specify the processes that enable contributors and authors to contribute to the contents of the [scope](@) (e.g. by providing suggestions for texts, discussing them, etc.), specifically any conditions/requriements that they have to be aware of and take into account, and that are needed to enable the [curators](@) to do their job.

The [Manual for Curators](/docs/tev2/manuals/curator) documents how the [TEv2](@) supports this role.

### Authors {#author}

Authors create and maintain documents (e.g. articles, specifications, [curated texts](@) and other documentation). Their primary task/responsibility with a [community](@) is to provide actual content for these documents, without having to bother about the 'details' like layout, how it is all rendered (processed to produce human readable artifacts such as static websites, PDFs, whitepapers etc. Authors are provided the means to mark-up [terms](@) in their texts with a easy to type reference to its meaning/definition, the effect of which becomes apparent in the rendered artifacts created from that text. These effects, such as popups (in a static website) that show the definition of the [term](@) used, or an automatically generated [glossary](@) that can be used as an appendix in a paper, makes it easier for [readers](@) to understand what the author means to convey with the texts (s)he has written.

Authors may also identify any specific needs or mechanisms that help them do the aforementioned tasks, and communicate these needs to their [curators](@), or otherwise contribute to the further development of [TEv2](@) so that such needs and mechanisms may be supported.

The [Manual for Authors](/docs/tev2/manuals/author) documents how the [TEv2](@) supports this role.
