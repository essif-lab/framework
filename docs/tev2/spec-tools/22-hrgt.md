---
id: hrgt
sidebar_label: HR Glossary Generation
displayed_sidebar: tev2SideBar
// hide_table_of_contents: true
scopetag: tev2
date: 20230103
---

# Human Readable Glossary Generation Tool

import useBaseUrl from '@docusaurus/useBaseUrl'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Use 'Mark' as an HTML tag, e.g. <mark>text to mark</Mark?-->
export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

The **Human Readable Glossary generation Tool ([HRGT](@))** generates a Human Readable [Glossary](@) ([HRG](@)) that consists of (a selection of) the [terms](@) that are part of the [terminology](@) of a specific [scope](@). 

The [HRGT](@) takes one specific [MRG](@) as its input, and converts (a selection of) its [MRG entries](@) into one of the supported output formats, e.g. HTML, or PDF. The file that contains the [MRG](@) is named `mrg.<scopetag>.<vsntag>.yaml`, where the combination of `<scopetag>` and `<vsntag>` identify a particular [terminology](@). See the [MRG file naming conventions](/docs/tev2/spec-files/mrg#mrg-file-naming) for details.

The selection of the [MRG entries](@) that are to be included in the [HRG](@), as well as the specification of the output format, headers, footers, etc., can be configured as well as customized. Thus, the [HRGT](@) provides a flexible means for creating all sorts of outputs that are either already human readable or can be processed further by third-party rendering tools, such as [github pages](https://pages.github.com/) or [Docusaurus](https://docusaurus.io/docs/docs-introduction), etc. (see also: [Using the Tools](/docs/tev2/tev2-toolbox)).

There is currently one implementation of the tool underway:
- the repo in which the tool is being developed is [<mark>tbd</mark>].
- the documentation is [<mark>tbd</mark>].

## Calling the Tool

The behavior of the [HRGT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
hrgt [ <paramlist> ] [ <globpattern> ]
~~~

where:
- `<paramlist>` (optional) is a list of key-value pairs
- [`globpattern`](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax) (optional) specifies a set of (input) files that are to be processed. If a configuration file is used, its contents may specify an additional set of input files to be processed.

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Key`** is the text to be used as a key.
2. **`Value`** represents the kind of value to be used.
3. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter.
4. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Key         | Req'd | Description |
| :-----------| :---: | :---------- |
| `config`      | n | Path (including the filename) of the tool's (YAML) configuration file. This file contains the default key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the configuration file. This parameter MUST NOT appear in the configuration file itself. |
| `scopedir`    | n | Path of the [scope directory](@) from which the tool is called. It MUST contain the [SAF](@) for that [scope](@), which we will refer to as the 'current scope' for the [HRGT](@). If omitted, the current directory is assumed to tbe the [scope directory](@). |
| `input`       | n | [Globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax) that specifies the set of (input) files ([MRGs](@)) that are to be processed. If omitted, the [HRG](@) is generated for the default [MRG](@) of the current scope (as specified in the `mrgfile` field of the `scope` section in its [SAF](@). |
| `output`      | n | text that is used as the last part of the name of the file(s) that contain(s) the generated [HRG(s)](@). This text must specify an appropriate extension, such as HTML or PDF. The filename(s) will be of the form `hrg.<scopetag>.<vsntag>.<output>`, where `<scopetag>` is the [scopetag](@) of the [scope](@) within which the [HRG](@) is generated, and `<vsntag>` [identifies](@) the version of the [terminology](@) in that [scope](@). From this, it follows that an [MRG](@)-file exists named `mrg.<scopetag>.<vsntag>.yaml`, which is used as the source for the entries in the [HRG](@). |
| `termselcrit` | n | List of [term selection criteria](@) that are used to generate (this version of) the [scope's](@) [terminology](@). If omitted, all [MRG entries](@) from the source [MRG](@) will be selected. See [Terminology Construction](/docs/tev2/spec-tools/terminology-construction) for details. |
| `method`      | n | <mark>Text, the syntax and semantics of which remain to be specified (see also the Editor's note below).</mark> When this parameter is omitted, the [HRG](@) is generated as an HTML file. |
| `license`     | n | File that contains the (default) licensing conditions. Full URL is `scopedir`/`license`. If not specified, its value defaults to the value of the `license` field in the `scope` section (of the [SAF](@) of the current scope). The purpose of this field is to enable different [HRGs](@) to have different licenses. |

:::info Editor's Note:
We may want to consider:
- changing the `input` parameter from a globpattern to a list of versiontags for which the HRG is to be generated.
- revising the spec of the `output` parameter, depending on the kind of control that [curators](@) need.
- add a `version` parameter, the value of which is a [versiontag](@), and the meaning of which is that (a) the input file is the [MRG](@) associated with that [versiontag](@), and (b) the output file will be registered in the `hrgfile` entry of the appropriate element of the `versions` section of the [SAF](@), and also, if appropriate, in the `scope` section of the [SAF](@). Doing this requires additional texts in subsequent sections.
:::

:::info Editor's Note:
Various `method`s are envisaged, yet remain to be properly specified. A method may specify:
- what a single entry contains
- that the contents of particular files are to be used as header or footer;
- that a particular kind of navigation bar is to be inserted at specific places (e.g. between two subsequent entries that start with a different character);
- ...
:::

## Processing, Errors and Warnings

The [HRGT](@) starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalidities include non-existing directories or files, lack of write-permissions where needed, etc.

Then, the [HRGT](@) reads the specified input files (in arbitrary order), and processes each of them, as follows:
- select the actual [MRG](@) that is to be used as an input;
- select the (subset of) [MRG entries](@) from that [MRG](@) that must appear in the [HRG](@) - see [HRG Term Selection](/docs/tev2/spec-syntax/hrg-termselcrit) for details. Conceptually, this will result in an [MRG](@) that only contains [MRG entries](@) that need to appear in the [HRG](@) as well;
- (alphabetically) sort these entries;
- convert each entry into a specific 'rendered' format (as specified by the user), thereby resolving any [term refs](@) (by appropriately calling the [TRRT](@))[^1], adding hyperlinks to the [curated text](@) that the entry relates to, 'meta-data' (e.g. the associated [grouptags](@), contributors, etc.), and anything else, as required for the particular kind of [HRG](@) that is being generated;
:::info Editor's note
The [TRRT](https://github.com/tno-terminology-design/trrt) has a nice setup for implementing [text conversion steps](/docs/tev2/overview/tev2-design-principles#text-conversion-steps). We should check that out and adapt the specifications text in this section so that this stuff can be reused as much as possible.
:::
- construct the [HRG](@) by adding (rendered) header- and footer-material and (optionally) licensing information;
- write the [HRG](@) to the designated output file.

[^1]: if the rendered output is such that [term refs](@) can still be recognized by the [TRRT](@), it may be more efficient to defer the resolution of [term refs](@) until after the [HRG](@) is completely generated.

:::info Editor's Note:
A special case of [HRG](@) generation is when the default [HRG](@) is created for a particular [MRG](@), which typically consists of all [MRG entries](@) of that [MRG](@). In that case, the contents of the `hrgfile` field in `versions` section of the [SAF](@) whose `mrgfile` field [identifies](@) the [MRG](@) should become the name of the file that contains the generated [HRG](@). Additionally, if the [MRG](@) happens to be the default one for the scope (as can be seen by comparing its filename with the contents of the `mrgfile` field in the `scope` section of the [SAF](@)), then the contents of the `hrgfile` field in `scope` section of the [SAF](@) must also become the name of the file that contains the generated [HRG](@). Whether or not the [HRGT](@) is expected to operate in this mode is an option that can be provided at the commandline or in the configuration file.
:::

The [HRGT](@) logs every error- and/or warning condition that it comes across while processing its configuration file, commandline parameters, and input files, in a way that helps tool-operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [HRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

## Discussion Notes

This section contains some notes of a discussion between Daniel and Rieks on these matters of some time ago, which pertains to glossaries in the context of ToIP.

- A ToIP [glossary](@) will be put by default at `http://trustoverip.github.io/<terms-community>/glossary`, where `<terms-community>` is the name of the [terms-community](@). This allows every  [terms-community](@) to have its own [glossary](@). However, the above specifications allow [terms-communities](terms-community@) to [curate](@) multiple [scopes](scope@).
- Storing [glossaries](glossary@) elsewhere was seen to break the (basic workings of the postprocessing tool, but the above specifications would fix that.
- Entries, e.g. 'foo' can be referenced as `http://trustoverip.github.io/<community>/[glossary](@)#foo` (in case of a standalone glossary), and `http://trustoverip.github.io/<community>/document-that-includes-glossary-fragment#foo` (in case of a fragmented glossary).
- We could also see GGT and TRRT to be extended, e.g. to work in conjunction with LaTeX or word-processor documents. This needs some looking into, but [pandoc](https://pandoc.org/) may be useful here.
