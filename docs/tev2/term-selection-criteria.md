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

The specification of a [terminology](@) (i.e. the set of [terminological artifacts](@) that it consists of), comprises the sequential processing of a sequence of [term selection criteria](@).

The [terminology](@) is created by starting out with an empty set of [terminological artifacts](@), and then modifying the contents of the set (i.e. adding, overwriting, or removing [terminological artifacts](@)) by sequentially interpreting each of the elements of the [term selection criteria](@).

Note that when a [terminological artifact](@) with a specific `id` already exists in the set, and a [term selection criteria](@) is being processed that specifies another [terminological artifact](@) with the same `id` (e.g. as an import from another [scope](@)), then the existing [terminological artifact](@) will be overwritten with the new one. This enables [curators](@) to use large parts of a [terminology](@) of some third party [scope](@), and to 'supersede' (overwrite) specific parts with its own work.

The [terminology](@) is created by the [MRGT tool](mrgt@), which uses it to produce the [MRG](@) that contains a machine-readable rendering of that [terminology](@).

Typically, a sequence of [term selection criteria](@) will start with an element that adds [terminological artifacts](@) from [terminologies](@) of other [scopes](@), which is conventiently done by adding [(tagged) groups](grouptag@) of [terminological artifacts](@), and removing individual [terminological artifacts](@) that had inadvertently be added, and adding any [terminological artifacts](@) that are missing. Then, adding all [terminological artifacts](@) that are [defined](@) in the [scope](@) itself completes the construction of its [terminology](@).

### Adding/Removing groups of Terms ("tagslist selection syntax")

:::info Editor's note
the below syntax may not be optimal for YAML and needs to be discussed/revised
:::

The "tagslist syntax" is: [`tagslist`]@`scopetag`:`vsntag` where:
- @`scopetag` (required) identifies a [scope](@) (the associated [scopedir](@) can be found in the `scopes` section of the [SAF](@)). This enables tools to obtain the [MRG](@) of that [scope](@) from which to extract the selected entries.
- `vsntag` (optional) is the specific version of the [MRG](@) from which the [terminological artifacts](@) are selected. If omitted (in which case the preceding `:` may also be omitted), the default version of the [MRG](@) is used (as specified in the `mrgfile` field in the `scope` section of the [SAF](@)).
- `tagslist` (optional) is a list of [tags](@). If the tag is a [scopetag](@), all [terminological artifacts](@) in the [MRG](@) of the specified [scope](@) are selected. If the tag is a [grouptag](@), then every [terminological artifact](@) in the [MRG](@) of the specified [scope](@) that is associated with that [grouptag](@) is selected.

Prefixing the `tagslist`@`scopetag`:`vsntag` syntax with a `-` sign will remove the identified [terminological artifacts](@) from the [terminology](@) under construction.

<details>
  <summary>Example of 'tagslist selection syntax'</summary>

~~~ yaml
termselcrit:
- "[management]@essif-lab" # import all terminological artifacts from the default/current mrg of `essif-lab` that have grouptag `management` and/or `governance.
- "[paa, ctwg, governance]@essiflab:v0.9.4" # import all terminological artifacts of version `v0.9.4` of `essiflab`, that have grouptag `paa` and/or `ctwg` and/or `governance`.
- "[management](@essif-lab:0.9.4)" # remove the terminological artifacts as contained in the mrg of `essif-lab:0.9.4`, that have grouptag `management`.
- "[tev2]@tev2" # import all terminological artifacts defined in the scope `tev2`
~~~

</details>

### Adding/Removing Single Terms ("Term ref selection syntax")

A single [terminological artifact](@) can be added to the [terminology](@) that is being constructed, by using the [term ref](@)-syntax. Interpreting a [term ref](@) will result in a new [terminological artifact](@) being added, using the name as specified by the `show text` part of the [term ref](@)as the new `id` for the [terminological artifact](@). All other characteristics are 'inherited' from the [terminological artifact](@) that is being referenced.

:::info Editor's note
The ability to rename terms as they are imported may introduce some issues related to other field-names, such as `termid`, `formphrases`, and perhaps others. Perhaps this syntax should be extended, enabling [curators](@) to simultaneously change these (and other) fields in the [MRG entry](@).
:::

Prefixing the [term ref](@) with a `-` sign will remove the identified [terminological artifact](@)from the [terminology](@) under construction.

<details>
  <summary>Example of 'term-ref selection syntax'</summary>

~~~ yaml
termselcrit:
- "[manage](curate@toip:v0.9.4)" # take the mrg-entry with `id`=`curate` from mrg version v0.9.4 of scope `toip`, change the `id` into `manage`, and add the mrg-entry to the new terminology.
- "-[curate](@toip)" # remove the the mrg-entry with `id`=`curate` and `scopetag`=`toip` from the [terminology](@).
~~~

</details>
