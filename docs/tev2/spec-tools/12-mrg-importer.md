---
id: mrg-importer
sidebar_label: MRG Importer
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20230731
---

# MRG Import Tool

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

The **[MRG](@) Import Tool ([MRG importer](@))** ensures that the [scope](@) within which it is run, obtains a local copy of all [MRGs](@) that are available in the [scopes](@) that are mentioned in the [scopes section](/docs/tev2/spec-files/saf#scopes) of its [SAF](@). This makes life easy for various tools, e.g., the [MRGT](@) and the [TRRT](@), that can now assume that all [MRGs](@) that they may need to consult in order to do their job, are readily available. 

There will shortly be an implementation of the tool:
- the repo for the code of the tool is [here](https://github.com/tno-terminology-design/mrg-import).
- the documentation is [<mark>tbd</mark>].

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

~~~
npm install tno-terminology-design/mrg-import -g
~~~

## Calling the Tool

The behavior of the [MRG importer](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
mrg-import [ <paramlist> ]
~~~

where:
- `<paramlist>` (optional) is a list of key-value pairs

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Key`** is the text to be used as a key.
2. **`Value`** represents the kind of value to be used.
3. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter.
4. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Key            | Value         | Req'd | Description |
| :------------- | :------------ | :---: | :---------- |
| `config`       | `<path>`        | n | Path (including the filename) of the tool's (YAML) configuration file. This file contains the default key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the configuration file. This parameter MUST NOT appear in the configuration file itself. |
| `scopedir`     | `<path>`        | Y | Path of the [scope directory](@) from which the tool is called. It MUST contain the [SAF](@) for that [scope](@), which we will refer to as the 'current scope' for the [MRG importer](@). |
| `onNotExist`   | `<action>`      | n | specifies the action to take in case an MRG file that was expected to exist, does not exist. Default is `'throw'`. |

The `<action>` parameter can take the following values:

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

## Processing, Errors and Warnings

The [MRG importer](@) starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalidities include non-existing directories or files, lack of write-permissions where needed, etc.

Then, the [MRG importer](@) reads the [SAF](@) of the [scope](@) from which the [MRG importer](@) is called. For every element in the [scopes section](/tev2-specifications/docs/tev2/spec-files/saf#scopes), it will import the [MRG](@)-files of the versions that are actively maintained by (the [curators](@) of) that [scope](@) that the current [scope](@) specified a relation with, by 
- getting the [scopetag](@) from the [SAF](@) that is used within that [scope](@) to refer to itself. This scopetag is found in the `scopetag`-field of the [scope section](/tev2-specifications/docs/tev2/spec-files/saf#terminology) of the [SAF](@). In the below step, we will use `<scopetag>` to refer to its value.
- collecting all [versiontags](@) that are defined in the [SAF](@) of that [scope](@). This is the set of all [versiontags](@) that are either found in a `vsntag` or in an `altvsntags` field of an element in the [versions section](/tev2-specifications/docs/tev2/spec-files/saf#versions) of the [SAF](@)
- For every such [versiontag](@) `<vsntag>`:
  - it is checked whether or not the file `mrg.<scopetag>.<vsntag>.yaml` exists in the [glossarydir](@) of that [scope](@). If it doesn't exist, this results in the bahaviour as specified by the `<action>` value of the `onNotExist` parameter. Default is `throw`.
  - 



the specified input files (in arbitrary order), and for each of them, produces an output file that is the same as the input file except for the fact that all [term refs](@) have been replaced with regular [markdown links](https://www.markdownguide.org/basic-syntax/#links), and (optionally) with additional texts that are to be used by third-party rendering tools for enhanced rendering of such links. An example of this would be text that can be used to enhance a link with a popup that contains the definition, or a description of the [term](@) that is being referenced.

The [MRG importer](@) logs every error- and/or warning condition that it comes across while processing its configuration file, commandline parameters, and input files, in a way that helps tool-operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [MRG importer](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

## Discussion Notes

This section contains some notes of a discussion between Daniel and Rieks on these matters of some time ago.

- A ToIP [glossary](@) will be put by default at `http://trustoverip.github.io/<terms-community>/glossary`, where `<terms-community>` is the name of the [terms-community](@). This allows every  [terms-community](@) to have its own [glossary](@). However, the above specifications allow [terms-communities](terms-community@) to [curate](@) multiple [scopes](scope@).
- Storing [glossaries](glossary@) elsewhere was seen to break the (basic workings of the postprocessing tool, but the above specifications would fix that.
- Entries, e.g. 'foo' can be referenced as `http://trustoverip.github.io/<community>/[glossary](@)#foo` (in case of a standalone glossary), and `http://trustoverip.github.io/<community>/document-that-includes-glossary-fragment#foo` (in case of a fragmented glossary).
- There will be a new convention for content [authors](@) who want to reference [terms](term@) (let's call it the 'short form'). This topic is fully addressed above, and extended to be a bit more generic.
- do we expect [glossaries](glossary@) that are generated by a [terms-community](@) to live at a fixed place (how do people find it, refer to its contents)? This topic is addressed
- once [glossaries](glossary@) are generated, the idea is that all artifacts produced in a [terms-community](@) can use references to the [terms](term@) in the generated [glossaries](glossary@), e.g.:
  - confluence pages: we need to see how such pages can be processed. [Authors](@) can remove links like they do now, they could use [term refs](@) as they see fit and then run TRRT.
  - github pages (e.g. https://github.com/trustoverip/ctwg-terms). Check (it's a github repo).
  - github wiki pages (e.g. https://github.com/trustoverip/ctwg-terms/wiki). Check (it's a github repo).
  - github wiki home pages (e.g. https://github.com/trustoverip/ctwg-terms/wiki/Home). Check (it's a github repo).
  - github-pages pages (e.g. https://github.com/trustoverip/ctwg-terms/docs
- We could also see GGT and TRRT to be extended, e.g. to work in conjunction with LaTeX or word-processor documents. This needs some looking into, but [pandoc](https://pandoc.org/) may be useful here.
