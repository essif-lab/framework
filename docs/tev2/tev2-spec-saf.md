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
- in [JSON format](saf.json)
- in [YAML format](saf.yaml)

:::info Editor's note
The SAF contains a `dateformat` field, which is a regex that has named groups such as `year`, `month`, etc. This field specifies the *default* format for dates. The presented regex is for ISO dates and date/times. The regex can be used by tools to convert dates by applying it (or a regex that overrides this default), and using the contents of the named groups to reformat to any desired other format.
:::