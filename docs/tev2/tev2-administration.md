---
id: tev2-administration
title: TEv2 - Administration
sidebar_label: Administration
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

The Terminology Engine v2 (TEv2) ensures that the [community] of [terms communities|terms-community] that use it will be able to use each others [definitions|definition], [terms|term] and other terminological artifacts without loosing their autonomy (control over the [terminologies|terminology] they [own] themselves).

The autonomy/control over a [terminology] is ensured by having different repositories, each of which is controlled by (the [curators|curator] of) a specific [terms community]. In order to enable them to use each others [definitions|definition], [terms|term] and other terminological artifacts, [terms communities|terms-community] must be able to establish links between them in such a way that TEv2, when run in the context of a certain repo, will be able to find the artifacts that it needs to use or refer to, and that are located in the repo of another [terms community].

Administration is about the establishing and maintaining of links with other repo's, such that TEv2
- can use and/or refer to terminological artifacts from these repos and
- is signaled when changes in such repos have occur that may/should trigger the [generation of updates of terminological artifacts](tev2-artifact-generation).

:::info Editor's note:
This section needs texts that define the contents of the required administrative artifaces, as well as where both curators and TEv2 can find them.
:::