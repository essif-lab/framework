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

The [SAF](@) MUST be located in the (root of the) [scopedir](@), and is called `saf.yaml`. It is to be created and maintained by the [curators](@) of the [scope](@).

This document specifies the structure of such [SAFs](@).

## Scope Administration File Field Descriptions

A [SAF](@) has three main parts:
1. The **`scope`** (singular) section defines meta-data concerning the [scope](@) itself, both for technical use and human use. It shows where directories and files live that ar part of the [scope](@), and also ways in which people can contribute, raise issues, see what's going on, discuss, etc.
2. The **`scopes`** (plural) section contains a mapping between [scopetags](@) that are used within the [scope](@), and the associated [scopedirs](@). This enables tools to find the [SAF](@) of these [scopes](@), and from there all other directories, files etc. that live within them, e.g. to use/import their data.
3. The **`versions`** section specifies all versions of the [terminology](@) that are actively maintained by the [curators](@) of the [scope](@), and for each of them, the set of [terms](@) that constitute this [terminology](@).

The following sections specify the fields for each of these parts.

### SAF Terminology - Defining the Scope itself {#terminology}

<details>
  <summary>Example of a `scope` section</summary>

~~~ yaml
#
# This is a Scope Administration File that can be used in conjunction with TEv2.
#
# The first section defines meta-data concerning the scope itself, both for technical use and human use.
# It shows where directories and files live that ar part of the scope, and also
# ways in which people can contribute, raise issues, see what's going on, discuss, etc.
#
scope:
  scopetag: tev2 # identifier that curators have determined for this terminology
  scopedir: https://github.com/essif-lab/framework/tree/master/docs/tev2  # URL of the scope-directory
  curatedir: docs # directory where all curated files are located. Full URL is `scopedir`/`curatedir`
  glossarydir: glossaries # directory where all glossary files and GDFs are located. Full URL is `scopedir`/`glossarydir`
  mrgfile: glossaries/mrg.json # file that contains the (default/current) machine readable glossary. Full URL is `scopedir`/`mrgfile`
  hrgfile: glossaries/glossary # file that contains the (default/current) human readable glossary. Full URL is `scopedir`/`hrgfile`
  license: LICENSE.md # file that contains the (default/current) licensing conditions. Full URL is `scopedir`/`license`
  statuses: [ proposed, approved, deprecated ] # list of status tags that are defined for terminological artifacts in this scope
  issues: https://github.com/essif-lab/framework/issues # URL where issues can be raised and handled
  website: https://essif-lab.github.io/framework/docs/tev2/tev2-overview # home page of the terminology
  slack: https://trustoverip.slack.com/archives/C01BBNGRPUH # slack channel for discussions
  curators: # contacting individual curators
  - name: RieksJ
    email: # we split up the email address to reduce the likelihood of the address being harvested for spamming
      id: rieks.joosten
      at: tno.nl
~~~

</details>

The following fields are defined for the `scope` section of a [SAF](@):

| Name        | Req'd | Description |
| :---------- | :---: | :---------- |
| `scopetag`    | Y | [Scopetag](@) that [curators](@) of this scope have determined for this [terminology](@). The associated [scopedir](@) is specified in the section `scopes`. |
| `scopedir`    | Y | URL of the location of the [scopedir](@) associated with the [scopetags](@) listed in the `scopetags` field. |
| `curatedir`   | Y | Path to the directory where all [curated files](@) are located. This directory may contain subdirectories to allow [curators](@) to organize the files in any way they see fit. Full URL is `<scopedir>`/`<curatedir>`.|
| `glossarydir` | Y | Path to the directory where all [glossary](@)-related files are located. Full URL is `<scopedir>`/`<glossarydir>`. This directory SHOULD contain one [MRG](@) for every element in the version-section in the [SAF](@), and one or multiple [HRGs](@). It MAY contain other files, e.g. containing instructions, headers, footers or other things that are necessary for generating specific [glossaries](@). |
| `mrgfile`     | Y | Name of the file that contains the (default/current) [MRG](@) for this [scope](@). Full URL is `<scopedir>`/`<glossarydir>`/`<mrgfile>`. |
| `hrgfile`     | Y | Name of the file that contains the (default/current) [HRG](@) for this [scope](@). Full URL is `<scopedir>`/`<glossarydir>`/`<hrgfile>`. |
| `license`     | Y | File in the root of the [scopedir](@) that contains the (default) licensing data. |
| `statuses`    | n | Ordered list of [tags](@) that are defined in this [scope](@) for specifying stages in the life-cycle of [terminological artifacts](@). The first element in the list represents the first stage, and the last element the last stage in the life-cycle. |
| `issues`      | n | URL where issues can be reported and handled.|
| `website`     | n | URL for the home page of the [terminology](@). |
| `slack`       | n | URL for the slack channel for discussions. |
| `curators`    | n | Data that can be used to contact individual [curators](@). |
<!--
| `dateformat`  | n | Regex (PCRE) that has named capturing groups for YYYY, MM and DD, and that can be used to parse the date fields used in this [scope](@) ) (provided another regex doesn't override it). When not provided, tools should use the regex "**(?P<YYYY\>\d{4})-?(?P<MM\>\d{2})-?(?P<DD\>\d{2})(?P<tzone\>Z&#124[+-]\d{2}:\d{2})?**" for this (noting that in certain contexts, `\` characters may need to be escaped). |
-->

:::info Editor's note
It might be more practical to move all of the stuff that is particular to this scope, but that is currently documented in the `scopes` section, to this section. We do then need to check throughout the documentation where that section is referenced, and correct such references.
:::

### SAF Scopes - Mapping Scopetags and Scopedirs {#scopes}

The `scopetags` section is a list that specifies a mapping between [scopetags](@) as they are used in this [scope](@), the associated [scopedir]((@)) and if necessary, other paths and filenames for [terminological artifacts](@) within the [scope](@). The latter is only required when specifying the [scope](@) for which the [SAF](@) is created/maintained, as for other [scopes](@), such other paths and filenames can readily be found by inspecting the [SAF](@) that is located in the root of the [scopedir](@) of such [scopes](@).

<details>
  <summary>Example of a `scopes` section</summary>

~~~ yaml
#
# The second section contains a mapping between scopetags that are used within the scope, and the associated scopedirs.
# This enables tools to find the [SAF](@) of these [scopes](@), and from there all other directories, files etc.
# that live within them, e.g. to use/import their data.
#
scopes:  #
- scopetags: [ essiflab, essif-lab ] # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology
  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory
- scopetags: [ ctwg, toip-ctwg ] # definition of (scope)tag(s) that are used within this scope to refer to a specific terminology
  scopedir: https://github.com/trustoverip/ctwg # URL of the scope-directory
~~~

</details>

The following fields are defined for the `scopes` section of a [SAF](@):

| Name        | Req'd | Description |
| ----------- | :---: | ----------- |
| `scopetags`   | Y | List of at least one [scopetag](@), that the [curator(s)](@) of this [scope](@) have determined for the [terminology](@) of a specific [scope](@). The associated [scopedir](@) is specified in the section `scopes`.|
| `scopedir`    | Y | URL of the location of the [scopedir](@) associated with the [scopetags](@) listed in the `scopetags` field. |

### SAF Versions - Enabling changes and updates in a scope's Terminology {#versions}

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
  - vsntag: 0x921456 # a versiontag that identifies this version from all other versions in the SAF
    altvsntags: # alternative verstiontags
      - latest
      - v0.9.4
    termselcrit:
      - "[management]@essif-lab" # import all terms from the mrg of `essif-lab:latest` that have grouptag `management`.
      - "[party](@essif-lab:0.9.4)" # import the term `party` from the mrg of `essif-lab:0.9.4`.
      - "[community](@essif-lab:0.9.4)" # import the term `community` from the mrg of `essif-lab:0.9.4`.
      - "[tev2]@tev2" # import all terms defined in the scope `tev2`
    status: proposed
    from: 20220312
    to:
  - vsntag: 0x654129 # a versiontag that identifies this version from all other versions in the SAF
    altvsntags: # alternative verstiontags
      - v0.9.0
    termselcrit:
      - "[management]@essif-lab" # import all essif-lab terms with grouptag `management`.
      - "[party@essif-lab]" # import the term `party` from the mrg of `essif-lab:latest`.
      - "[community@essif-lab]" # import the term `community` from the mrg of `essif-lab:latest`.
~~~

</details>

The following fields are defined for the `versions` section of a [SAF](@):

| Name       | Req'd | Description |
| ---------- | :---: | ----------- |
| `vsntag`     | Y | [Versiontag](@) that that is used to [identify](@) this version within the set of all other versions that are maintained within this [scope](@). in this [SAF](@). It MUST NOT be changed during the lifetime of this version.<br/>Must satisfy regex `[a-z0-9_-\.]+`. |
| `altvsntags` | n | List of alternative [versiontags](@) that may be used to refer to this version of the [scope's](@) [terminology](@). A typical use of this field would be to tag a version as the 'latest' version.<br/>Must satisfy regex `[a-z0-9_-\.]+`. |
| `license`    | n | File that contains the (default) licensing conditions. Full URL is `scopedir`/`license`. If not specified, its value defaults to the value of the `license` field in the `scope` section (of this [SAF](@)). The purpose of this field is to allow different versions of the [scope's](@) [terminology](@) to have different licenses. |
| `termselcrit` | Y | List of [term selection criteria](@) that are used to generate (this version of) the [scope's](@) [terminology](@). See [Term Selection](term-selection-criteria) for details. |
| `status`     | n | Text that [identifies](@) the status of the [term](@). ([Communities](@) of) [scopes](@) may specify values for this field. If not specified, the status SHOULD be assumed to be 'concept', 'draft', 'proposed', or similar. An example is the [status tags used by ToIP](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). |
| `from`       | n | Date at which it was decided to establish this version. |
| `to`         | n | Date at which this version will expire (or has expired). |

:::info Editor's note
The `from` and `to` dates have been included to (in future) enable one to refer to a specific version of the terminology that was valid at a particular date. This feature needs to be worked out, and will impact [term selection criteria](term-selection-criteria), [term ref specs](tev2-spec-term-ref), and various tools.
:::
