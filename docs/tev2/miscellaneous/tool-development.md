---
id: tool-development
// hide_table_of_contents: true
scopetag: tev2
date: 20221111
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Tool Development

This page intends to provide (lots of pointers to) information that people may need in order to decide whether or not to contribute to the construction of the Terminology Engine v2 ([TEv2](@)) toolbox, and if so, determine where to help out.

## What it is about

At the core of [TEv2](@) is [text conversion](/docs/tev2/overview/tev2-design-principles): every [tool in the toolbox](/docs/tev2/tev2-toolbox) takes one or more input files, does some textual processing, and produces outputs. The basic [conversion pattern](/docs/tev2/overview/tev2-design-principles#text-conversion-steps) that individual [tools](/docs/tev2/tev2-toolbox) are expected to follow ensures that they can be easily extended, e.g., to operate on different input formats, or to produce alternative output formats.

There are various things that make the further development of [TEv2](@) challenging:

1. the interop between individual tools: outputs of one tool must be fit for processing by another tool (which may include existing third party tools, such as static website generators), as described in the [TEv2 Architecture](/docs/tev2/overview/tev2-architecture).
2. designing actual tools such that they can be easily extended (also by others) to accept different input formats, and/or produce different output formats, as described in the [text conversion steps pattern](/docs/tev2/overview/tev2-design-principles#text-conversion-steps)
3. designing tools such that they can be easily used in different contexts (e.g. whether or not to dockerize a tool)
4. collaborating with other people that work on the tools such that the coherence and consistent working of tools that different people develop is guaranteed. We may need to better organize this.
5. making the tools automatically testable, e.g. by running test suites as part of the CI/CD street we envisage that tools would have.
6. making the tools easy to integrate in CI/CD streets or other strategies that projects or working groups use to publish their documentation and whitepapers.
7. for certain tools: making them easy to use in authoring processes, e.g. by enabling them to be used in real-time authoring processes (authors that type texts can immediately see, e.g. in a browser, what the effects are of what they have typed).
8. Specifications may not exist, or need modification, which may impact other tools as well.
9. Tools should not use unnecessary resources (processing time, memory).

10. ... (there are likely to be other challenges)

### Pointers to what you need to know


:::info In order to appreciate and come to grips with these challenges, it will definitely help if you read up on some more backgrounds of what we try to do. Here are some pointers:
- The [TEv2 Overview](/docs/tev2/tev2-overview) (and its sub-documents) will provide you with with such backgrounds.
- Other documented topics include:
  - [file structure spec](/docs/tev2/tev2-spec-files)
  - [syntax specifications](/docs/tev2/tev2-syntax)
  - [specifications of individual tools](/docs/tev2/tev2-toolbox) - not all specifications hare already been drafted/checked.
:::

## Tooling status as of ...

For the date of the tooling status, see the "<i>last updated on</i>" text at the bottom right on this page

### Under development

- [MRGT](/docs/tev2/spec-tools/mrgt), which is in [this toip repo](https://github.com/trustoverip/ctwg-toolkit-mrg). The tool works, but still has some [bugs/issues](https://github.com/trustoverip/ctwg-toolkit-mrg/issues) that need to be fixed.
- [TRRT](/docs/tev2/spec-tools/trrt), which is currently actively developed by TNO in [this repo](https://github.com/tno-terminology-design/trrt).

### High priority
- ingress tools that convert wiki-files (and perhaps some other formats) into [curated texts](/docs/tev2/spec-files/00-ctext.md);
- [HRGT](/docs/tev2/spec-tools/hrgt), so that we can actually generate human-readable glossaries. For this tool, specifications need to be further drafted (and agreed on).

### Medium priority:
- [ICT](/docs/tev2/spec-tools/ict), which allows for integrity checking. The current specifications are outdated and first need to be revised.

### Lower priority:
- extensions for the [TRRT](@), and perhaps other tools, so that they can be used in [ReSpec](https://dev.w3.org/2008/video/mediaann/ReSpec.js/documentation.html) environments, such as often used for W3C standards.
- [MRDT](/docs/tev2/spec-tools/mrdt) and [HRDT](/docs/tev2/spec-tools/hrdt)


## Starting to contribute

If you are eager to contribute, then ping `rieks` `.` `joosten` `<at>` `tno` `.` `nl`, or attend a [ToIP CTWG meeting](https://wiki.trustoverip.org/display/HOME/CTWG+Meeting+Pages), where you express your interest and/or questions, and we'll take it from there.