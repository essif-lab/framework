---
id: tev2-student-assignment
sidebar_label: Student Assignment
hide_table_of_contents: true
scopetag: tev2
date: 20220929
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Student Assignment

This page explains what a group of students can do to create and contribute one or more tools to the toolbox of the  Terminology Engine v2 ([TEv2](@)), that caters for
- the creation and maintenance (i.e. [curation](@)) of [terminologies](@), and
- the subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX).

## Context, Background

The first part in understanding the assignment is to understand its context, what the needs are, how they are being adressed, and what the role of  [TEv2](@) in all this is.

Here are some pointers:
- The mission we try to realize (or at least contribute to), is **[Understanding One Another](/docs/tev2/overview/tev2-common-understanding)**.
- The **[Purpose](/docs/tev2/overview/tev2-purpose)** states the objectives that [TEv2](@) seeks to realize.
- The **[Design Principles](/docs/tev2/overview/tev2-design-principles)** are the main ideas behind the design of [TEv2](@).
- The **[Architecture](/docs/tev2/overview/tev2-architecture)** provides an overview of the data and the files that [TEv2](@) works with, as well as of the tools and how they interrelate.
- A more or less description of our way of thinking is provided as **[Terminology Support](/docs/tev2/terms/patterns/terminology-support)**.

## Current status

:::warning
Obviously, this section may be outdatet...
:::

Currently (October 3, 2022), one tool is available, i.e. the [MRGT](/docs/tev2/spec-tools/21-mrgt.md), and it may be possible that one instance of the (currently not well-defined) [HRGT](/docs/tev2/spec-tools/22-hrgt.md) will be created.

## Priorty tools

Tools that we would like to see developed first include:

- [TRRT](/docs/tev2/spec-tools/12-trrt.md), which converts [term-ref syntax](/docs/tev2/spec-syntax/11-term-ref-syntax.md) into one (out of multiple choices of) renderable syntax(es).
- ingress tools that convert wiki-files (and perhaps some other formats) into [curated texts](/docs/tev2/spec-files/00-ctext.md);
- rendering tools that are needed to accommodated terminology support for [ReSpec](https://dev.w3.org/2008/video/mediaann/ReSpec.js/documentation.html) environments, such as often used for W3C standards.