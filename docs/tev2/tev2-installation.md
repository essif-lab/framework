---
id: tev2-installation
title: Installation
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

:::caution
This section on 'Installation' can really be written only after the rest is complete. The contents of this page is just a set of ideas that may well have been deprecated already.
:::

:::info Editor's note
This page should only document the generic stuff. Any installation details that are specific to a tool SHOULD be documented in the page(s) that document the particular tool. Obviously, this page could mention the tools for which that is the case, and link to the associated sections.
:::

TEv2 is a tool for [curating](@) [terminology](@)-related data from the perspective of a single [scope](@). Installation comprises
- setting up, or appointing an (online) directory that will serve as a [scope directory](@);
- creating a [Scope Administration File (SAF)](tev2-spec-saf), and providing the configuration of the [scope](@) and its [terminology](@);
- installing the [tev2-toolbox](tev2-toolbox);
- integrating the [tools](tev2-toolbox) with other tools, such as a CI/CD pipeline on github or gitlab, static site generators such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), etc. See also: [Using the Tools](tev2-toolbox-use).

### Structure of Scope Directories

Depending on the other tooling that is going to be used, a [scope directory](@) has to be specified that is part of the (online) directory in which the [terminology](@) has to be used. The [scope's](@) [scope administration file (SAF)](saf@) specifies whatever needs to be administered for that [scope](@); this file is maintained by the [curators](@) of the scope (using a regular text editor).

[Curators](@) must also specify a location (directory) within the [scope directory](@) where [glossaries](@) are being maintained. This location holds the [Glossary Definition Files (GDFs)](gdf@) that are used to generate [glossaries](@) for different purposes, as needed. Also, this directory will (by default) contain the [glossaries](@) that are generated.

### Integrating Scope Directories and the ToIP Terminology Toolbox

:::info Editor's Note
Content to be produced
:::

### Integrating Scope Directories and Third Party Rendering Tools

[Terminological artifacts](@) are intended to also be used by/within third party rendering tools, such as [github pages](https://pages.github.com/), [Docusaurus](https://docusaurus.io/docs/docs-introduction), or LaTex

:::info Editor's Note
Content to be produced
:::
