---
id: tev2-spec-files
hide_table_of_contents: false
scopetag: tev2
date: 20220819
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# TEv2 - Files (Structure, Specs)

:::danger This page is deprecated.
The current TEv2 website is located at https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2
:::

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

[TEv2](@) expects [communities](@) to have directory that is easily accessible by IT tools, and in which - apart from other stuff it may keep there - is designated to contain all sorts of curated documentation. Thus, this directory (or one or more of its subdirectories) can be designated as [scope directories](@) for the [scopes](@) that the [community](@) owns.

The [scopedir](@) may contain may contain lots of directories and files that are of no relevance for [TEv2](@), but it also contains files that are, such as:

- the **[Curated Texts](/docs/tev2/spec-files/ctext)**, which contain documentation on [knowledge artifacts](@) ([concepts](@), [mental models](@), etc.);
- the **[Scope Administration File (SAF)](/docs/tev2/spec-files/saf)**, which contains data about the [scope](@) itself, pointers to (the [scopedirs](@) of) other [scopes](@) that it relates to, and specifications of various versions of managed [glossaries](@);
- the **[Profile Templates](/docs/tev2/spec-files/profile-templates)**, i.e. templates that play a role in [text conversion steps](/docs/tev2/overview/tev2-design-principles#text-conversion-steps);
- the **[Machine Readable Glossary (MRG)](/docs/tev2/spec-files/mrg)**, which contains (machine readable) [MRG entries](@) that contain the various [terms](@) of a [scope](@) and pointers to the documentation of the [knowledge artifacts](@) that they refer to;
- the **[Human Readable Glossary (HRG)](/docs/tev2/spec-files/hrg)**, i.e. human readable equivalents of the [MRGs](@);
