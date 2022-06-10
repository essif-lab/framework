---
id: tev2-toolbox-hrgt
title: HRG Generation Tool (HRGT)
sidebar_label: HRGT - HRG Generation Tool
displayed_sidebar: tev2SideBar
hide_table_of_contents: true
scopetag: tev2
date: 20220421
---

import useBaseUrl from '@docusaurus/useBaseUrl'
export const Mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

The **Human Readable Glossary generation Tool ([HRGT](@))** generates a Human Readable [Glossary](@) ([HRG](@)), that renders the [terminology](@) of a specific [scope](@) into one of several formats, e.g. HTML, or PDF. This rendering may be subject to further processing by third-party rendering tools, such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), etc. (see also: [Using the Tools](tev2-toolbox-use)).

:::info Editor's note
The envisaged versatility of the [HRGT](@) is likely to imply requirements regarding, e.g.:
- the kinds of [terminological artifacts](@) that should be listed;
- whether or not to include/exclude specific (groups of) [artifacts](terminological-artifact@);
- the format (e.g. HTML, PDF, LaTeX) to generate towards, and the structure of each [HRG entry](@);
- the beginning (header) and ending (footer) of the [HRG](@) file
and possibly some other stuff.

Before this can really be properly specified, we seek to do some experiments to see what is really needed in order to keep it as simple as possible. Therefore, the text that follows must be interpreted as Work in Progress.
:::

The [HRGT](@) operates on a single [MRG](@) of a [scope](@), which contains (data and/or pointers to) _all_ [terminological artifacts](@) of that [scope](@).

The construction of a [HRG](@) can be envisaged as
- selecting the [mrg entries](@) that must appear in the [HRG](@). Selection may depend on the specification of the kinds of [terminological artifacts](@) that should be included, and/or specifying [tags](@) for the (groups of) [artifacts](terminological-artifact@), or specific `id`s;
- alphabetically sorting these entries;
- converting each entry into its 'rendered' format, thereby resolving any [term refs](@), adding hyperlinks to the [curated text](@) that the entry relates to, 'meta-data' (e.g. the associated [grouptags](@), contributors, etc.), and anything else, as required for the particular kind of [HRG](@) that is being generated;
- concatenating these rendered entries, optionally including/inserting some navigation bars (e.g. before a new letter starts);
- constructing the [HRG](@) by adding (rendered) header- and footer-material and (optionally) licensing information.

When a [HRG](@) is generated that should become the default one for that scope, the [SAF](@) must be updated accordingly. Note though that this is not always necessary. For example, a user may want to create a [HRG](@) for a selected subset of the terminology, e.g. to include as an annex in a paper.

The [HRGT](@) logs conditions that prevent it from properly

- parsing a source document (e.g. because it is not in the expected format);
- resolving `id`s, [scope tags](@), [group tags](@), or [version tags](@);
- writing the output (e.g. because it has no write-permission for the designated location);
- etc.;

Also, the [HRGT](@) provides suggestions that help tool-operators ([curators](@)) to identify and fix any problems.

The [HRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

:::info Editor's note
A specification is needed for the creation of a (simple) [HRG](@) (from an existing [HRG](@)).
Any [term refs](@) need to be properly resolved.
Titles of term entries may want to link to the original resource from which it was derived.
Choice bars (e.g. `[ A B C D .... Z ]` may need to be inserted here and there).
Meta-data (group tags, the scopetag of the scope where it was defined, contributors, versions, dates, etc.) may need to be included.
There must be some license notification.
:::
