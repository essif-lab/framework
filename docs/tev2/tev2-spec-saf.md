---
id: tev2-spec-saf
title: Scope Administration File (SAF)
sidebar_label: SAF (Scope Admin File)
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

Every [scope](@) MUST have exactly one Scope Administration File or [SAF](@), i.e. a file contains whatever needs to be administered in the [scope](@), and that various tools need to find e.g. the [scope's](@) [MRG](@), [curated texts](@), [scopetags](@), etc.

This document specifies the structure of such [SAFs](@).

The [SAF](@) is to be created and maintained by the [curators](@) of the [scope](@).

:::info Editor's note:
We need a paragraph that specifies the [SAF](@)-file naming conventions.
:::

## Scope Administration File Field Descriptions

A [SAF](@) has three main parts:
1. **`terminology`** defines meta-data concerning the [scope](@) itself, ways in which people can contribute, raise issues, see what's going on, discuss, and what license is being used.
2. **`scopes`** is for technical use, meaning that tools can use this section to find the various locations (URLs) of directories (e.g. for storing [curated files](@)) and filenames (e.g. of [glossaries](@)), that belong to the [scope](@). Also, the locations (URLs) of the [scope directories](@) of other [scopes](@) can be found in this section enabling tools to e.g. use/import their data.
3. **`versions`** specifies the versions that are actively maintained by the [curators](@). For each version, the set of [terms](@) is selected that constitute the [terminology](@).

The following sections specify the fields for each of these parts.

### SAF Terminology - Defining the Scope itself

<details>
  <summary>Example of a `terminology` section</summary>

~~~ yaml
#
# This is a Scope Administration File that can be used in conjunction with TEv2.
#
# The first section is for human use. It defines meta-data concerning the scope itself,
# ways in which people can contribute, raise issues, see what's going on, discuss,
# and what license is being used.
#
terminology:
  scopetag: tev2 # identifier that curators have determined for this terminology
  # `scopedir` is specified in the section `scopes`.
  license: LICENSE.md # file in the root of the scopedir that contains licensing data
  issues: https://github.com/essif-lab/framework/issues # issues reporting and handling
  website: https://essif-lab.github.io/framework/docs/tev2/tev2-overview # home page of the terminology
  slack: https://trustoverip.slack.com/archives/C01BBNGRPUH # slack channel for discussions
  curator: # contacting individual curators
  - name: RieksJ
    email: # we split up the email address to reduce the likelihood of the address being harvested for spamming
      id: rieks.joosten
      at: tno.nl
  dateformat: "(?P<YYYY>\\d{4})-?(?P<MM>\\d{2})-?(?P<DD>\\d{2})(?P<tzone>Z|[+-]\\d{2}:\\d{2})?"
~~~

</details>

The following fields are defined for the `terminology` section of a [SAF](@):

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `scopetag` | Y | | [Scopetag](@) that [curators](@) of this scope have determined for this [terminology](@). The associated [scopedir](@) is specified in the section `scopes`. |
| `license` | n | | File in the root of the [scopedir](@) that contains licensing data. |
| `issues` | n | | URL where issues can be reported and handled.|
| `website` | n | | URL for the home page of the [terminology](@). |
| `slack` | n | | URL for the slack channel for discussions. |
| `curator` | n | | Data that can be used to contact individual [curators](@). |
| `dateformat` | n |  | Regex (PCRE) that has named capturing groups for YYYY, MM and DD, and that can be used to parse the date fields used in this [scope](@) ) (provided another regex doesn't override it). When not provided, tools should use the regex "**(?P<YYYY\>\d{4})-?(?P<MM\>\d{2})-?(?P<DD\>\d{2})(?P<tzone\>Z&#124[+-]\d{2}:\d{2})?**" for this (noting that in certain contexts, `\` characters may need to be escaped). |

### SAF Scopes - Mapping Scopetags and Scopedirs {#saf-scope-maps}

The `scopetags` section is a list that specifies a mapping between [scopetags](@) as they are used in this [scope](@), the associated [scopedir]((@)) and if necessary, other paths and filenames for [terminological artifacts](@) within the [scope](@). The latter is only required when specifying the [scope](@) for which the [SAF](@) is created/maintained, as for other [scopes](@), such other paths and filenames can readily be found by inspecting the [SAF](@) that is located in the root of the [scopedir](@) of such [scopes](@).

<details>
  <summary>Example of a `scopes` section</summary>

~~~ yaml
#
# The second section is for technical/tool use, so they can find data:
# - of the scope itself, and
# - of scopes that contain data that needs to be used/imported.
#   For such 'third party scopes', only the URL of their scope-directories is needed
#   as any other data can be found from the SOF that is located there.
#
scopes:  # The first scopetag should be about the terminology administrated by this file
  - scopetags: # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology
      - tev2
    scopedir: https://github.com/essif-lab/framework/tree/master/docs/tev2  # URL of the scope-directory
    curatedir: docs # directory where all curated files are located. Full URL is `scopedir`/`curatedir`
    glossarydir: docs/glossary # directory where all glossary files and GDFs are located. Full URL is `scopedir`/`glossarydir`
    mrgfile: mrg.json # file that contains the machine readable glossary. Full URL is `scopedir`/`mrgfile``
    hrgfile: glossary # file that contains the human readable glossary. Full URL is `scopedir`/`hrgfile`
  - scopetags: # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology
      - essiflab
      - essif-lab
    scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory
  - scopetags: # definition of (scope)tag(s) that are used within this scope to refer to a specific terminology
      - ctwg
      - toip-ctwg
    scopedir: https://github.com/trustoverip/ctwg # URL of the scope-directory
~~~

</details>

The following fields are defined for the `scopes` section of a [SAF](@):

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `scopetags` | Y | | List of at least one [scopetag](@), that the [curator(s)](@) of this [scope](@) have determined for the [terminology](@) of a specific [scope](@). The associated [scopedir](@) is specified in the section `scopes`.|
| `scopedir` | Y | | URL of the location of the [scopedir](@) associated with the [scopetags](@) listed in the `scopetags` field. |
| `curatedir` | n | | Path to the directory where all [curated files](@) are located. Full URL is `scopedir`/`curatedir`.|
| `glossarydir` | n | | Path to the directory where all [glossary](@) files and [GDFs](@) are located. Full URL is `scopedir`/`glossarydir`. |
| `mrgfile` | n | | Name of the file that contains the latest version of the [MRG](@). Full URL is `scopedir`/`mrgfile`. |
| `hrgfile` | n | | Name of the file that contains the latest version of the [HRG](@). Full URL is `scopedir`/`hrgfile` |

### SAF Versions - Enabling changes and updates in a scope's Terminology {#saf-terminology-specs}

The third section in the [SAF](@) specifies the [terminology](@) of the [scope](@), in multiple versions that are actively maintained by the [curators](@). For each version, the set of [terms](@) is selected that constitute that version's [terminology](@). Also, additional data is provided regarding the state/validity of the [terminology](@) over time, which may of interest for the [curators](@) of other scopes as they need to decide whether or not to import [terms](@) from such a [terminology](@).

<details>
  <summary>Example of a `versions` section</summary>

~~~ yaml
#
# The third section specifies the versions that are actively maintained by the curators.
# For each version, the set of terms is selected that constitute the terminology.
# See the Glossary Generation Tool (GGT) for details about the syntax and semantics.
#
versions:
  - id: 0x921456 # an arbitrary text that identifies this version from all other versions in the SAF
  - versiontags: # definition of (version)tag(s) that are used within this scope to refer to a specific terminology.
      - latest
      - v0.9.4
    terms:
      - [terminology]@essif-lab # import all terms from the mrg of `essif-lab:latest` that have grouptag `terminology`.
      - "[party](@essif-lab:0.9.4)" # import the term `party` from the mrg of `essif-lab:0.9.4`.
      - "[community](@essif-lab:0.9.4)" # import the term `community` from the mrg of `essif-lab:0.9.4`.
      - [tev2]@tev2 # import all terms defined in the scope `tev2`
    status: proposed
    from: 20220312
    to:
  - versiontags: # definition of (version)tag(s) that are used within this scope to refer to a specific terminology.
      - v0.9.0
    terms:
      - [terminology]@essif-lab # import all essif-lab terms with grouptag `terminology`.
      - "[party@essif-lab]" # import the term `party` from the mrg of `essif-lab:latest`.
      - "[community@essif-lab]" # import the term `community` from the mrg of `essif-lab:latest`.
~~~

</details>

The following fields are defined for the `versions` section of a [SAF](@):

| Name | Req'd | Default | Description |
| ---- | :---: | ------- | ----------- |
| `id` | Y | | [Versiontag](@) that that is used to [identify](@) this version within the set of all other versions that are maintained within this [scope](@). in this [SAF](@). It MUST NOT be changed during the lifetime of this version.<br/>Must satisfy regex `[a-z0-9_-]+`. |
| `versiontags` | n | | List of alternative [versiontags](@) that may be used to refer to this version of the [scope's](@) [terminology](@). A typical use of this field would be to tag a version as the 'latest' version. |
| `terms` | Y | | List of [term selection criteria](@) that are used to generate (this version of) the [scope's](@) [terminology](@). See [Term Selection](term-selection-criteria) for details. |
| `status` | n | proposed  | Text that [identifies](@) the status of the [term](@). ([Communities](@) of) [scopes](@) may specify values for this field. An example is the [status tags used by ToIP](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). |
| `from` | n | | Date at which of the version related data was decided on. |
| `to` | n | | Date at which the version was overridden with another one. |
