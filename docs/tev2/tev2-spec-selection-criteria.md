---
id: tev2-spec-selection-criteria
title: Term Selection Criteria
sidebar_label: Selection Criteria
hide_table_of_contents: true
scopetag: tev2
date: 20220512
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

This document specifies how to write the [term selection criteria](@) that you need for the purpose of specifying (the contents) of a [scope's](@) [terminology](@), and that you need to insert in the `versions`.`terms` elements in a [SAF](@).

:::info Editor's note
below text needs to be revised
:::

## Syntax for selecting terms

- by means of a [term ref](@), where the `show text` specifies the name of the [term](@) as it will be used in the [scope](@), and the [definition](@) (and other [terminological artifacts](@) of that [term](@), such as purpose, examples, etc.) are 'inherited' from the [term](@) that is being referenced.
- by means of the so-called 'tagslist-syntax', which is `tagslist`@`scopetag`:`vsn` (e.g. `paa,terminology@essiflab:latest`) where:
  - @`scopetag` (required) identifies a [scope](@) in the SAF, thus allowing tools to obtain (the specified version, or if omitted, the latest version of) the MRG of that [scope](@) from which to extract the selected entries. In the example, this is `essiflab`.
  - `vsn` (optional) is the specific version of the MRG from which the [terms](@) are selected. If omitted (in which case the preceding `:` may also be omitted), the latest version is specified. The example specifies the `latest` version of the essiflab [glossary](@).
  - `tagslist` (optional) is a comma-separated list of[tags](tag@) (e.g. `paa,terminology,ctwg`). If the tag is a [scopetag](tag@), every [term](@) in the MRG of the specified [scope](@) are selected. If the tag is a [grouptag](tag@), then every [term](@) in the MRG of the specified [scope](@) that is associated with that [grouptag](tag@) is selected.

## Using the order of selection criteria

As the criteria will be processed in the order in which they are specified, you can 'rename' a [term](@) you import from that was imported using the tagslist-syntax, it suffices to use the [term ref](@) that import that [term](@) again.

A GDF contains a sequence of such [selection criteria](tev2-spec-selection-criteria) that will be processed in the order they are specified (see the [MRGT](#mrgt) for details on how processing takes place). Thus, in order to 'rename' a [term](@) that was imported using the tagslist-syntax, it suffices to use the [term ref](@) that import that [term](@) again.

Optionally, syntax can be added to remove previously selected [terms](@) , e.g. by allowing the `-` character to precede one of the selection syntaxes. The idea is then that a list of such (de)selection syntaxes is incrementally processed, and when a `-`-syntax is encountered, the [terms](@) that would have otherwise been selected will then be removed from the selection.