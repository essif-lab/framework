---
id: tev2-architecture
sidebar_label: Architecture
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# TEv2 - Architecture

:::caution
This page is deprecated. The current version can be found at https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/tev2-architecture
:::

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

TEv2 is designed to support an ever increasing variety of raw text formats, and its toolbox will - over time - be filled with an increasing number of tools that will support an increasing number of 3rd party rendering tools. This section shows the architecture that allows this to become reality.

:::info Editor's note
The architecture is not yet fully aligned with the (momentarily developing) ideas as explained in the section [Text Conversion Steps](#text-conversion-steps). This is still work that needs to be done.
:::

The architecture is based on the ToIP/eSSIF-Lab [Terminology Model](/docs/tev2/terms/patterns/pattern-terminology), which assumes that every [author](@)/group constitutes a so-called [terms-community](@) that [curates](@) one (or more) [scope(s)](@), that contains e.g. [definitions](@), [terms](@), [tags](@) etc. that constitute the [author](@)/group's [terminology](@). An overview is given in the figure below:

<img
  alt="TEv2 Overview"
  src={useBaseUrl('images/tev2-overview.png')}
/><br/><br/>

### TRRT
The figure not only shows the raw texts, their processing by the [TRRT](@) tool and the subsequent rendering to produce formatted texts, but also other files that exist within the [scope](@), that are being [curated](@) by its [terms-community](@). [TEv2](@) expects all files that are under [curation](@), and/or are generated to serve a purpose within a [scope](@), to live in a specific directory, which we call the [scope directory](@). The rounded rectangles in the figure represent such directories and (parts of) their contents. Further details are in the [TRRT specs](/docs/tev2/spec-tools/trrt).

### Curated Texts
To the left of the figure, you can see that some raw texts are 'ingressed' into the [scope directory](@), and thereby have become so-called [curated texts](@) (a specification of which is provided in the [Curated Texts description](/docs/tev2/spec-files/ctext)). These texts typically contain descriptions of [terms](@), [definitions](@), examples, etc., that help interested [parties](@) to formulate and understand the [concepts](@) that they need.

### Scope Ingress Process
[Curated texts](@) are the result of subjecting raw texts to one or more [text conversions](#text-conversion-steps). This is the Scope Ingress Process. It is run by the [curators](@) of the [scope](@). The [curators](@) define the kinds of raw texts that can be ingressed, and they make sure the [ingress tools](#ingress-tools) exist that can interpret such texts, and that the result of their interpretation is fed into the converter-tool that produces [curated texts](@). [Curators](@) should communicate with [contributors](@) and [authors](@) concerning the kinds of raw texts that can be ingressed.

### Ingress Tools
The set of ingress tools consists of the set of interpreters (see the section on [text conversions](#text-conversion-steps)) that will be able to populate the set of "moustache"-variables as defined by the [ctext moustache profile](@). Each such tool is specific for a kind of (raw) source text. The set of ingress tools is expected to expand, as [terms communities](@) indicate the need (and priority) for them. One such tool is the interpreter for [Terms Wiki pages](https://wiki.trustoverip.org/display/HOME/Terms+Wikis), as used by several working groups and task forces within ToIP.

### SAF
The [curators](@) of a [scope](@) create and maintain the [scope's](@) administration file ([SAF](@)), which is called `saf.yaml` and is located in (the root of) the [scope directory](@). This file contains meta-data concerning the [scope](@) itself, the locations (URLs) of its directories (and glossary files), the locations (URLs) of the [scope directories](@) of (selected) other [scopes](@), and a specification of the [terms](@) ([MRG entries](@)) that are part of the various versions of its [terminology](@) that are actively maintained. Further details are in the [SAF specs](/docs/tev2/spec-files/saf).

### MRG
The [curators](@) also organize when and how the [scope's](@) Machine Readable Glossary ([MRG](@)) is created. This file is not a [glossary](@), but rather a (machine readable) inventory of all [terms](@) that are part of (a specific version of) the [scope's](@) [terminology](@), and related (meta)data. [TEv2] hails the principle that tools that need to learn about [terms](@), the [knowledge artifacts](@) that these [terms](@) represent, and the [curated texts](@) that document them, from a particular [scope](@), should only need to inspect the [MRG](@) of that [scope](@) to find what they need. Further details are in the [MRG specs](/docs/tev2/spec-files/mrg).

### MRGT
The [MRG](@) is created by the [MRGT](@) tool. This tool takes the [scope's](@) [curated texts](@) as input, as well as [MRGs](@) from other scopes, e.g. to 'import' [terms](@) that are needed in, but not [curated](@) by, that [scope](@). The [SAF](@) of the [scope](@) tells the [MRGT](@) where to find these (third party) [MRGs](@). Further details are in the [MRGT specs](/docs/tev2/spec-tools/mrgt).

### HRG
The Human Readable Glossary or [HRG](@) is a (real) [glossary](@) that humans are expected to read/use. It is a formatted text, which means that it might appear in one of a plethora of formats. Within a [scope](@), we assume a specific format is chosen that is appropriate for its users, and that will serve as the default [HRG](@) for that [scope](@). The [HRG](@) is not a formatted/rendered version of the entire [MRG](@): it typically only lists the [terms](@) that are assocated with specific kinds of [knowledge artifacts](@), specifically the type [`concept`](concept@). Further details are in the [HRG specs](/docs/tev2/spec-files/hrg).

### HRGT
We will use the term [HRGT](@) to generically refer to any tool that either produces a [HRG](@) directly, or that produces inputs for other, third party rendering tools that will then generate the [HRG](@). Typically, a [HRGT](@) will extract a subset of the [terms](@) (better: [MRG entries](@)) from the [MRG](@), sort them, resolve [term refs](@) where appropriate, and do whatever else is necessary to generate (the files that third party tools pick up to) generate the [HRG](@). We expect to see various flavours of this tool, or a single tool that can create [HRGs](@) in different formats, allowing [curators](@) to get the kind of [HRG](@) that is the most appropriate for their purposes. Further details are in the [HRGT specs](/docs/tev2/spec-tools/hrgt).

### Rendering tool plugins/addons
We envisage that existing 3rd party rendering tools may benefit from extensions (plugins, add-ons) that provide features that help [readers](@) to better understand rendered texts. One example is the [Docusaurus Terminology plugin](https://gitlab.grnet.gr/terminology/docusaurus-terminology) of GRNET that was used in TEv1 (the predecessor of TEv2), which enables the 'sticking out' of terms in the rendered text, providing a popup with a short explanation of the term, and providing a link to the page that documents the concept. While the development of such plugins is outside the scope of TEv2, using them (e.g. by the [HRGT](@)) may be within scope.

### ICT
People that develop these tools, as well as people that contribute to the [curation](@) of [curated texts](@), the [SAF](@), etc., are only human, and sooner or later make a mistake that is hard to find and correct without any help. To facilitate the detection, identification and recovery from such mistakes, there is an [Integrity Checker Tool](/docs/tev2/spec-tools/ict) (or [ICT](@)). This [ICT](@) tests the integrity of (a selection of) the files that are [curated](@) within a particular [scope](@), i.e. the [SAF](@), the [MRGs](@), and [curated files](@). The integrity checking of other files, e.g. [formatted files](@), such as [HRGs](@), is outside the scope of the [ICT](@). Further details are in the [ICT specs](/docs/tev2/spec-tools/ict).
