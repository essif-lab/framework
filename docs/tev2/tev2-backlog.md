---
id: tev2-backlog
title: TEv2 - Backlog
sidebar_label: Work-In-Progress
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

This backlog of the Terminology Engine v2 (TEv2) is a list of issues (concerns, topics) that still need to be addressed in the specifications of TEv2. Typically such issues are listed as editor's notes in the TEv2 specification files. This file will list any issues for which that would not be an appropriate solution.

1. a [curated file](@) that contains the specification of a [term](@) must allow for a [header](@) entry that specifies
  - word forms, such as plurals, that, when encountered while processing a [curated text](@), will be treated as if the defined term itself were encountered. For example, a term `actor` could have word-forms added such as `actors`, `actor's`, `actor(s)`, etc., that would allow authors to write [actors](@), [actor's](@), [actors'](@) or [actor(s)](@) without the need of having to add the link part (as in [actors](actor@)).
  - regexps, e.g. `actor(['']?s|\(s\))?`, or in the case of `party`, a regex such as `part(y|y['']s|ies)`
  - combinations thereof, where the regex-part can be specified is `\{\w+\}`in a configuration file is substituted by a macro-form, e.g. `actor{ss}` or `part{yies}` (where `{ss}` is interpreted as a regex, e.g. `(['']?s|\(s\))?`, and {yies} as `(y|y['']s|ies)`)

2. Currently, every MRG/HRG is to be accompanied by a specific GDF that specifies their contents. Is seems more practical to say that one such specification - i.e. for the default MRG/HRG, would be part of the SAF, and any other such specifications (which we might then perhaps limit to just HRG-specifications) might then require their specific GDF.

3. A Machine Readable Glossary is not really a [glossary](@), as it also contains entries for other [terminological artifacts](@), such as [patterns](@), and it is likely that other kinds of such artifacts will need to be referred to in future, e.g. [use-cases](@). What we currently call an [MRG](@) is really a machine readable inventory of the [terminological artifacts](@) within a [scope](@).  We need to consider whether we continue using `MRG` as the [term](@) for this inventory, or introduce another one. Also, we need to revise all texts and where necessary clarify this point, or make texts congruent with this vision.

4. We use the [header](@)-field `synonym` (see: [synonym](@)) to specify human readable texts that have the same meaning as another term. They differ from [formphrases](@) in the sense that we would like to have them become part of the [glossary](@) - specifically: a [hrg](@). Similarly, we may want to have a `hrg-phrase` header-item, that we can use to refer readers to some other resource for further reading.

5. Check if we can also make this work for [scopes] such as 'Merriam-Webster', or 'OED', such that we could resolve [term refs](@) such as `[Organization](@OED)`
