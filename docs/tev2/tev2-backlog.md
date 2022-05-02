---
id: tev2-backlog
title: TEv2 - Backlog
sidebar_label: Work-In-Progress
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

This backlog of the Terminology Engine v2 (TEv2) is a list of issues (concerns, topics) that still need to be addressed in the specifications of TEv2. Typically such issues are listed as editor's notes in the TEv2 specification files. This file will list any issues for which that would not be an appropriate solution.

1. a [curated file] that contains the specification of a [term] must allow for a [header] entry that allows the specification of aliases for that [term], i.e. [terms] that share the same [definition]. Aliases must be processed as if they were defined in their own [curated file] (that would have the same definition text). That means they must show up in glossaries, can be referenced from other [scopes|scope], etc.

2. a a [curated file] that contains the specification of a [term] must allow for a [header] entry that specifies
  - word forms, such as plurals, that, when encountered while processing a [curated text], will be treated as if the defined term itself were encountered. For example, a term `actor` could have word-forms added such as `actors`, `actor's`, `actor(s)`, etc., that would allow authors to write [actors], [actor's] or [actor(s)] without the need of having to add a `|` (as in [actors|actor]).
  - regexps that serve the same purpose, e.g. `actor(['']?s|\(s\))?`, or in the case of `party`, a regex such as `part(y|y['']s|ies)`
