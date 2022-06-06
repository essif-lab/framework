---
id: term-selection-criteria
title: Term Selection Criteria
sidebar_label: Terminology Construction
hide_table_of_contents: true
scopetag: tev2
date: 20220512
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

This document specifies the [term selection criteria](@) that [curators](@) need to construct a [terminology](@) for a particular [scope](@). These [criteria](term-selection-criteria@) are [used](tev2-spec-saf#versions) in that [scope's](@) [SAFs](@) to define (the different versions of) the [terminology](@) of that [scope](@).

## Specifying and Creating a Terminology

The specification of a [terminology](@) (i.e. the set of [terms](@) that it consists of), comprises the sequential processing of a sequence of [term selection criteria](@). The [terminology](@) is created by starting out with an empty set, and then modifying the contents of the set (adding/removing [terms](@)) by sequentially interpreting each of the elements of the [term selection criteria](@).

The [terminology](@) is created by the [MRGT tool](mrgt@), which uses it to produce the [MRG](@) that contains a machine-readable rendering of that [terminology](@).

Typically, a sequence of [term selection criteria](@) will start with an element that adds [terms](@) from [terminologies](@) of other [scopes](@), which is conventiently done by adding [(tagged) groups](grouptag@) of [terms](@), and removing individual [terms](@) that had inadvertently be added, and adding any [terms](@) that are missing. Then, adding all [terms](@) that are [defined](@) in the [scope](@) itself completes the construction of its [terminology](@).

### Adding/Removing groups of Terms

:::info Editor's note
the below syntax may not be optimal for YAML and needs to be discussed/revised
:::

:::info Editor's note
It has been suggested to provide [term ref](@) syntax that allows one to refer to a [terminological artifact](@) from a [terminology](@) that was 'current'/'latest'/... at a particular date. When such is worked out, we should also decide whether or not to use that syntax for selecting groups of terms.
:::

Syntax: `tagslist`@`scopetag`:`vsntag` where:
- @`scopetag` (required) identifies a [scope](@) (the associated [scopedir](@) can be found in the `scopes` section of the [SAF](@)). This enables tools to obtain the [MRG](@) of that [scope](@) from which to extract the selected entries.
- `vsntag` (optional) is the specific version of the [MRG](@) from which the [terminological artifacts](@) are selected. If omitted (in which case the preceding `:` may also be omitted), the default version of the [MRG](@) is used (as specified in the `mrgfile` field in the `scope` section of the [SAF](@)).
- `tagslist` (optional) is a list of [tags](@). If the tag is a [scopetag](@), every [term](@) in the [MRG](@) of the specified [scope](@) are selected. If the tag is a [grouptag](@), then every [term](@) in the [MRG](@) of the specified [scope](@) that is associated with that [grouptag](@) is selected.

Prefixing the `tagslist`@`scopetag`:`vsntag` syntax with a `-` sign will remove the identified [terms](@) from the [terminology](@) under construction.

Examples:
- `[paa, ctwg, management]@essiflab:v0.9.4` will import all [terms](@) from version `v0.9.4` of the [terminology](@) of the [scope](@) `essiflab`, that have been tagged with the [grouptag](@) `paa` and/or `ctwg` and/or `management`.
- `-[curate]@essiflab:latest` will remove all [terms](@) from the [terminology](@) that is under construction, that come from the (latest) `essiflab` [terminology](@), and have been tagged with the [grouptag](@) `curate`.

### Adding/Removing Single Terms

A single [term](@) can be added to the [terminology](@) that is being constructed, by using the [term ref](@)-syntax. Interpreting a [term ref](@) will result in a new [term](@) being added, using the name as specified by the `show text` part of the [term ref](@). All other characteristics are 'inherited' from the [term](@) that is being referenced.

Prefixing the [term ref](@) with a `-` sign will remove the identified [term](@) from the [terminology](@) under construction.

Examples:
- `-[manage](curate@toip:v0.9.4)` adds a new [term](@) `manage`, that has the identical meaning as the term `curate` has in [terminology](@) version `v0.9.4` of [scope](@) `toip`.
- `[curate](@toip)` removes the [term](@) `curate` from the [terminology](@), i.e. the one that was imported from the (latest version of) the `toip`-[scope](@).