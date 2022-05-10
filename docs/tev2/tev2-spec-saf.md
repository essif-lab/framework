---
id: tev2-spec-saf
title: Scope Administration File (SAF)
sidebar_label: SAF (Scope Admin File)
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

This document specifies the contents of the Scope Administration file.

:::info Editor's note
The scope administration file contains whatever needs to be administered in the scope. Before documenting this, we do some experiments with SAFs to gain experience about the ways we should go about this stuff.
:::

We have an experimental SAF:
- in [YAML format](saf.yaml) (which has comments that explaining the structure), and
- in [JSON format](saf.json) (which has no explanations because JSON doesn't support comments)

:::info Editor's note
The SAF contains a `dateformat` field, which is a regex that has named groups such as `year`, `month`, etc. This field specifies the *default* format for dates. The presented regex is for ISO dates and date/times. The regex can be used by tools to convert dates by applying it (or a regex that overrides this default), and using the contents of the named groups to reformat to any desired other format.
:::

~~~ yaml
---
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
  # `dateformat` is a (PCRE) regex that can be used to interpret (parse) dates and date-times
  # as they are used within this scope, the result of which shows up as named capturing groups.
  # As an example, we specify the regex for ISO 8601 date(time)s, which is explained at
  # https://www.debuggex.com/r/7AhSyBzuBvuzYn52.
  dateformat: "(?P<YYYY>\\d{4})-?(?P<MM>\\d{2})-?(?P<DD>\\d{2})(?:T?(?P<hh>\\d{2}):?(?P<mm>\\d{2}):?(?P<ss>\\d{2})(?:\\.(?P<fraction>\\d+))?)?(?P<tzone>Z|[+-]\\d{2}:\\d{2})?"
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
    glossarydir: docs/glossary # directory where all glossary files and GDFs are located. Full URL is `scopedir`/`glossarydir``
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
#
# The third section specifies the versions that are actively maintained by the curators.
# For each version, the set of terms is selected that constitute the terminology.
# See the Glossary Generation Tool (GGT) for details about the syntax and semantics.
#
versions:
  - versiontags: # definition of (version)tag(s) that are used within this scope to refer to a specific terminology.
      - latest
      - v0.9.4
    terms:
      - terminology@essif-lab # import all terms from the mrg of `essif-lab:latest` that have grouptag `terminology`.
      - "[party@essif-lab:0.9.4]" # import the term `party` from the mrg of `essif-lab:0.9.4`.
      - "[community@essif-lab:0.9.4]" # import the term `community` from the mrg of `essif-lab:0.9.4`.
      - tev2@tev2 # import all terms defined in the scope `tev2`
    status: proposed
    from: 202200312
  - versiontags: # definition of (version)tag(s) that are used within this scope to refer to a specific terminology.
      - v0.9.0
    terms:
      - terminology@essif-lab # import all essif-lab terms with grouptag `terminology`.
      - "[party@essif-lab]" # import the term `party` from the mrg of `essif-lab:latest`.
      - "[community@essif-lab]" # import the term `community` from the mrg of `essif-lab:latest`.
~~~