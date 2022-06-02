---
id: tev2-spec-gdf
title: Glossary Definition File (GDF)
sidebar_label: GDF (Glossary Definition File)
hide_table_of_contents: true
scopetag: tev2
date: 20220503
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

This document specifies the contents of the Glossary Definition File (GDF).

:::info Editor's note
The glossary definition file contains whatever the [HRGT](@) needs to generate a (human readable) [glossary](@) or [HRG](@) from the [scope's](@) [MRG](@). The idea is to have a [HRGT](@) that is capable of generation [glossaries](@) of various types, each of which has its own requirements regarding
- the kinds of [terminological artifacts](@) that should be listed;
- whether or not to include/exclude specific (groups of) [artifacts](terminological-artifact@);
- the format (e.g. HTML, PDF, LaTeX) to generate towards, and the structure of each [HRG entry](@);
- the beginning (header) and ending (footer) of the [HRG](@) file
and possibly some other stuff.

Before this can all be specified, we seek to do some experiments to see what is really needed in order to keep it as simple as possible.
:::

:::info Editor's note:
We need a paragraph that specifies the [GDF](@)-file naming conventions.
:::
