---
id: mrgt
sidebar_label: MR Glossary Generation
displayed_sidebar: tev2SideBar
hide_table_of_contents: true
scopetag: tev2
date: 20221127
---

# Machine Readable Glossary Generation Tool

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

The **Machine Readable Glossary generation Tool ([MRGT](@))** generates a Machine Readable Glossary or [MRG](@)) for (a specific version of) the [terminology](@) of a specific [scope](@) into a specific, well-defined [format](/docs/tev2/spec-files/mrg). An [MRG](@) contains so-called [MRG entries](@) for every [term](@) in its [scope](@), which represent not only [concepts](@) but also other [knowledge artifacts](@) of other kinds, such as [mental models](@) and [use cases](@).

The (newly generated) [MRG](@) is meant to be processed by the other tools in the [toolbox](/docs/tev2/tev2-toolbox), regardless of whether such tools are called from within the context of another [scope](@). As it contains every [term](@) that is used in the [scope](@), and includes all the relevant meta-data, an [MRG](@) serves as the single, authoritative source of that (version of the) [scope's](@) [terminology](@).

There is currently one (JAVA) implementation of the tool:
- the repo is [here](https://github.com/trustoverip/ctwg-toolkit-mrg/)
- the documentation is [here](https://github.com/trustoverip/ctwg-toolkit-mrg#readme)
- the (deprecated) specifications for this tool are [here](https://essif-lab.github.io/framework/docs/tev2/spec-tools/mrgt)

A new implementation is envisaged (but not yet available), which will be built similar to the [TRRT](@) and [MRG Importer](@).
- the repo is [here](https://github.com/tno-terminology-design/mrgt).
- the documentation is [<mark>tbd</mark>].

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

~~~
npm install tno-terminology-design/mrgt -g
~~~

## Calling the Tool

The behavior of the [MRGT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
mrgt [ <paramlist> ]
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
| `vsntag`       | `<vsntag>`      | n | [versiontag](@) for which the [MRG](@) needs to be (re)generated. When omitted, an [MRG](@) will be generated for every version of the [terminology](@) that is specified in the [versions section](/docs/tev2/spec-files/saf#versions) of the [SAF](@) |
| `onNotExist`   | `<action>`      | n | specifies the action to take in case a `vsntag` was specified, but wasn't found in the [SAF](@). Default is `'throw'`. |

The `<action>` parameter can take the following values:

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |


## Generating an MRG

The [MRGT](@) starts by reading the [SAF](@) that exists in the [scopedir](@) that was provided as one of the calling parameters. If a `vsntag` argument is provided, it will search the [versions section](/docs/tev2/spec-files/saf#versions) of the [SAF](@) to find the corresponding entry. This corresponding entry will have the value of the `vsntag` parameter either in its `vsntag` field, or it is one of the elements in the `altvsntags` field. If the [SAF](@) does not have a corresponding entry, the action specified in the `onNotExist` parameter will determine whether or not (and how) to proceed.

The corresponding entry in the [SAF](@) specifies (a specific version of) a [terminology](@). It not only includes meta-data for that [terminology](@), but also the set of '[term selection criteria](@)' that specify how the [terminology](@) needs to be [constructed](/docs/tev2/spec-tools/terminology-construction), and the file to which the result needs to be written.

The [MRG](@) is then created as follows (starting with an empty file):

1. The [MRG](@) `terminology` section is created, by copying [relevant fields](/docs/tev2/spec-files/mrg#mrg-terminology) from the `terminology` section in the [SAF](@).
2. Then, [terminology construction](/docs/tev2/spec-tools/terminology-construction) takes place, which can be thought of as constructing a set of tuples `{ [term, grouptags] }`, where `term` [identifies](@) (the [curated text](@) that documents) the particular [knowledge artifact](@), and `grouptags` is a set of [grouptags](@) associated with that tuple.
3. For every tuple in this set, an [MRG entry](@) is created, and added to the [MRG](@) under construction. The structure of each such [entry](mrg-entry@) depends on the type of the [knowledge artifact](@) that the [term](@) represents, as the [header](@) of a [curated text](@) depends on that type.

After the [MRG](@) has been created, it is written to the file `mrg.<scopetag>.<vsntag>.yaml`, where:
- `<scopetag>` is the [scopetag](@) that is used within the [scope](@) to refer to itself. Its value can be found in the `scopetag`-field in the [scope section](docs/tev2/spec-files/saf#terminology) of the [SAF](@).
- `<vsntag>` is the [versiontag](@) that [identifies](@) the version of the [terminology](@) for which the [MRG](@) contains [entries](mrg-entry@). Its value must be equal to that found in the `vsntag`-field of the element in the [versions section](/docs/tev2/spec-files/saf#versions) of the [SAF](@) from which the [MRG](@) was generated. NOTE that [versiontags](@) that are listed in the `altvsntags`-field of such an element MUST NOT be used in the [MRG](@)-filename.

The [MRG](@) file must be written to the [glossarydir](@) of the [scope](@), which is located at `<scopedir>/<glossarydir>`, where
- `<scopedir>` is the home-directory of the [scope](@), and
- `<glossarydir>` is the path to the directorty where all [glossary](@)-related files are located. Its value can be found in the [scope section](/docs/tev2/spec-files/saf#terminology) of the [SAF](@).

After the [MRG](@) file has been written, the [MRGT](@) will create,  a [symbolic link](https://en.wikipedia.org/wiki/Symbolic_link) for every [versiontag](@) that it finds in the `altvsntags`-field of the element in the [versions section](/docs/tev2/spec-files/saf#versions) of the [SAF](@) from which the [MRG](@) was generated. The symbolic link will point to the file that has just been written and contains the [MRG](@) that has just been generated. The name of this symbolic link is `mrg.<scopetag>.<altvsntag>.yaml`, which is the same name as the [MRG](@) file, except that the `<vsntag>` part of that filename is replaced with the value of the [versiontag](@) found in the `altvsntags`-field.

### Creating an MRG Entry

An [MRG entry](@) is either
- a copy of an (existing) [MRG entry](@) that is found in an [MRG](@) that lives in another [scope](@), or
- it is constructed from a [curated text](@), which lives in a file in (one of the subdirectories of) the [curatedir](@) of the current [scope](@), as [specified](/docs/tev2/spec-files/saf#terminology) in the `curatedir` field of the [SAF](@).

#### Copying an MRG Entry from an existing MRG

:::info
A prerequisite for generating an [MRG](@) that includes [MRG entries](@) from [MRGs](@) that are maintained in other [scopes](@), is that such other [MRGs](@) must be available in the [glossarydir](@) of the [scope](@) within which the [MRGT](@) is run. This can be achieved by running the [MRG importer](@) [tool](/docs/tev2/spec-tools/mrg-importer). If the [MRG](@) that is to be generated doesn't include such [MRG entries](@), the [MRG importer](@) need not be invoked.
:::

:::info Editor's note
this section needs to be reviewed/revisded to ensure it fits with the [MRG importer](@) specs.
:::

In case the [MRG entry](@) is a copy, the `vsntag` [field](/docs/tev2/spec-files/mrg#mrg-entries) of that [MRG entry](@) should be given the value of the `vsntag` field that is found in the ['terminology' section](/docs/tev2/spec-files/mrg#mrg-terminology) of the [MRG](@) from which [MRG entry](@) contents was copied.

#### Constructing an MRG Entry from a Curated Text

Constructing an [MRG entry](@) from a [curated text](@) is done as follows:
1. create an empty/new [MRG entry](@);
2. if the `synonymOf` field contains a [term identifier](@) that [identifies](@)
   - a [curated text](@) in the [scope](@) in which the [MRG](@) is being created, then copy the entire front matter of that [curated text](@) into the [MRG entry](@);[^1]
   - an [MRG entry](@) in an [MRG](@) other than the [MRG](@) that is being created, then copy that [MRG entry](@) into the [MRG entry](@) that has just been created;
3. if the `synonymOf` field contains a text that is not a [term identifier](@), raise an [appropriate warning](#exceptions);
4. copy every field in the front-matter of the [curated text](@) into the [MRG entry](@); if the field already exists in the [MRG entry](@), it will be overwritten;
5. discard every field that has a field name that, when converted into lowercase, matches any of the field names in the table below;
6. add the fields in the below table with the specified contents, as follows:

| Field          | Value(s) that are assigned to the fields |
| -------------- | :---------- |
| `scopetag`     | overwrite the `scopetag` field with the `scopetag` field as found in the `scope` section of the [SAF](@). |
| `locator`      | path, relative to `scopedir`/`curatedir`/, of the [curated text](@). |
| `navurl`       | path, relative to the URL as specified in the `website` field in the [`scope` section](/docs/tev2/spec-files/saf#terminology) of the [SAF](@), where the rendered version of the [curated text](@) is located. |
| `headingids`   | a list of the [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) and/or [heading ids](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids) that are found in the [curated text](@). |

## Exceptions, Warnings, and Logging {#exceptions}

:::info Editor's note
This section needs to be reviewed/revised so as to enable a consistent way of error checking and logging, similar to what is done in the TRRT
:::

The general principle is that the [MRGT](@) helps its users to do their jobs. This means that errors that terminate the processing are limited to the max, that warnings (perhaps at different 'levels' of detail/severity) are given output whenever possible (yet may be limited by command-line options), and that texts are tailored for the envisaged users of the tool.

The [MRGT](@) logs conditions that prevent it from properly:

- obtaining the [scopedir](@) from a [scopetag](@);
- parsing a [curated text](@) (e.g. because it is not in the expected format);
- resolving [terms](@), [scope tags](@), [group tags](@), or [version tags](@);
- writing the output (e.g. because it has no write-permission for the designated location);
- etc.;

Also, the [MRGT](@) provides suggestions that help tool-operators ([curators](@)) to not only identify, but also fix any problems.

The [MRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

## Notes

[^1]: The algorithm ensures that an [MRG entry](@) for a [term](@) that is a [synonym](@) of another [term](@) identical to the [MRG entry](@) for that other [term](@), but if the [curated text](@) that specifies the [synonym](@) has additional front matter (e.g. a slightly modified `glossaryText` field), that front matter is retained in the [MRG entry](@). It is up to the [author](@) of the [curated text](@) to make sure this does not pose any problems, and up to the [ICTT](@) to do appropriate checks.