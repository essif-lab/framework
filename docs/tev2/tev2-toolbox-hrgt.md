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

Typically, the [HRGT](@) operates on the [MRG](@) of a [scope](@), as follows. First, it selects (and alphabetically sorts) the [mrg entries](@) that it needs to produce the [HRG](@) out of. Then it converts each entry into its rendered version. Next it adds header and footer material and optionally inserts other artifacts that will help [readers](@) navigate through the [HRG](@) when it is published. Finally, the result is put at a location that is suitable for further processing or final publication.

After having successfully created a [HRG](@), the [SAF](@) is updated as necessary.

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
