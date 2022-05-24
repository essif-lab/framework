---
id: tev2-toolbox
title: TEv2 Terminology Toolbox
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20220421
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

This document is meant as a specification of results that the ToIP CTWG aims to realize, that can serve as the basis for the specification of terminology tooling.

The intended audience is expected to be familiar with the [mental model on terminology](https://essif-lab.github.io/framework/docs/terms/pattern-terminology#formalized-model) and the current way(s) of working of the CTWG.

As mentioned in the [TEv2 overview](tev2-overview), the toolbox is envisaged to have a variety of tools, including:

- the **Term Ref(erence) Resolution Tool ([TRRT](@))**. This tool takes markdown files that contain so-called [term refs](@) (e.g. \[`terms community`\](`terms-community`@`ctwg`)) and creates a copy for each of these files in which all [term refs](@) are converted to regular [Markdown links](https://www.markdownguide.org/basic-syntax/#links), allowing such files to be further processed, e.g. by Github pages, Docusaurus or similar tools. In later versions, the [TRRT](@) may be extended to include options for other kinds of conversions, e.g. to produce LaTex instructions.

- the **Machine Readable Glossary generation Tool ([MRGT](@))**. This tool reads the [SAF](@) of a [scope](@) to find the instructions by which it creates an [MRG](@) for each of the versions of the [terminology](@) that are maintained within that [scope](@).

- the **Human Readable Glossary generation Tool ([HRGT](@)**. This tool reads the [MRG](@) of a [scope](@), resolves any [term refs](@) as necessary, and creates a rendering that results in a [HRG](@).

Additionally, a collection of code snippets is envisaged that can be used to automatically generate [MRGs](@) and [HRGs](@) upon  successful commits to the master-branch of an associated repo/wiki, enabling [curators](@) to establish CI/CD pipelines.
