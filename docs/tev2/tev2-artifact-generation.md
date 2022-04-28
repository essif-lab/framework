---
id: tev2-artifact-generation
title: TEv2 - Artifact Generation
sidebar_label: Artifact Generation
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

A [terms-community] will need to generate terminological artifacts, such as a [glossary], that can be used by its members as well as other [parties|party], as an aid in helping them understand utterances or written texts that originate from within that [community|terms-community].

TEv2 has a 'generators toolbox', i.e. pieces of code that can be plugged into a TEv2-compliant repository, and that can then be called whenever the contents of the repo has been updated and checked for errors. This way, the terminological artifacts can be kept up-to-date.

:::info Editor's note:
This section needs texts that defines how
- the glossary is to be generated;
- updates from linked repos are to be accommodated;
- new plugins can be written and installed.
:::