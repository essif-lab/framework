---
id: trrt
title: Term Reference Resolution Tool
sidebar_label: Term Ref Resolution
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20220421
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

The **Term Ref(erence) Resolution Tool ([TRRT](@))** takes markdown files that contain so-called [term refs](@) (e.g. \[`terms community`\](`terms-community`@`ctwg`)) and creates a copy for each of these files in which all [term refs](@) are converted to so-called [renderable refs](@), i.e. texts that can be further processed by tools such as Github pages, Docusaurus (plugins), etc., the result of which is that the rendered document contains markups that help [readers](@) to quickly find more explanations of the [concept](@) or other [knowledge artifact](@) that is being referenced.

For example a [term ref](@) can be converted into a regular [Markdown link](https://www.markdownguide.org/basic-syntax/#links) that points to the (rendered version of) the [curated text](@) that explains the [knowledge artifact](@) to which the [term ref](@) refers. This markdown link may be enhanced with code that, when presented in a webbrowser, produces a popup window that shows the [definition](@) (or some other trait) of the [knowledge artifact](@).

Conceptually, [term ref](@) conversion is a very simple two-step process:
1. The [term ref](@) is interpreted, the result of which is a set of variables (or if regexes are used: named capturing groups) whose contents [identify](@) an [MRG entry](@) from a specific [MRG](@).
2. Then, using the contents of the [identified](@) [MRG entry](@), the [term ref](@) is replaced with a [renderable ref](@), as specified by one of the TRRTs command line arguments (or configuration).

This two-step process enables the [TRRT](@) to be easily extended with new kinds of [renderable refs](@), and if necessary, new [term ref](@) [syntax](/doc/tev2/spec-syntax/term-ref#basic-syntax). We expect to see future versions of the [TRRT](@) to support [renderable refs](@) that support rendering in e.g. LaTeX, PDF, docx, odt and other formats.

In order to convert such [term refs](@) into links that can be further processed by other tools, [TRRT](@) expects the [SAF](@) and the [MRG](@) of the [scope](@) from within which it is being called, to be available. The [MRG](@) is used to resolve all links to [terms](@) that are part of the [terminology](@) of this [scope](@). The [SAF](@) is used to locate the [MRGs](@) of any (other) [scope](@) whose [scopetag](@) is used as part of a [term ref](@) that needs to be resolved.

## Calling the Tool

The behavior of the [TRRT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
trrt [ <paramlist> ] [ <globpattern> ]
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

| Key      | Value         | Req'd | Description |
| :--      | :----         | :---: | :---------- |
| `config` | `<path>`        | n | Path (including the filename) of the tool's (YAML) configuration file. This file contains the default key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the configuration file. This parameter MUST NOT appear in the configuration file itself. |
| `input`  | `<globpattern>` | n | [Globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax) that specifies the set of (input) files that are to be processed. |
| `output` | `<dir>`         | Y | Directory where output files are to be written. This directory is specified as an absolute or relative path. |
| `saf`    | `<path>:<vsntag>`  | Y | `<path>` is the path (including the filename) of the [SAF](@) of the [scope](@) from which the tool is called. Note that the path without the filename is the [scopedir](@) of the [scope](@) from which the tool is said to be called.<br/>`<vsntag>` is a [versiontag](@) that specifies the version of the [terminology](@) that is to be used to resolve references to a [term](@) within the default [scope](@). It MUST match either the `vsntag` field, or an element of the `altvsntags` field of a [terminology](@)-version as specified in the [`versions` section](/docs/tev2/spec-files/saf#versions) of the [SAF](@). When not specified, the default version of the [MRG](@) is taken (as specified by the [SAF's](@) [`scopes.mrgfile` field](/docs/tev2/spec-files/saf#terminology)). |
| `method` | `<path>` | n | Path (including the filename) that contains additional instructions for the [TRRT](@) for resolving [term refs](@). When this parameter is omitted, [terms](@) are resolved as plain [markdown links](https://www.markdownguide.org/basic-syntax/#links). |

:::info Editor's Note:
Various `method`s are envisaged, yet remain to be properly specified. One example is where the [term ref](@) `[Actions](@)` would be replaced with a construct such as `<Term reference="action" popup="<popuptext>">actions</Term>`
where<br/>
- `<popuptext>` is the text provided in the `hoverText` field of the [MRG entry](@) whose `id` field is 'action', and
- `<Term ...>` and `</Term>` represent a React component that supports linking and tooltip functionality, so that users hovering over the link will see a popup/tooltip with the text `<popuptext>`, and will navigate to the location of the (human readable, i.e. rendered) file that contains details and further explanations, as specified in the `navurl` field of the [MRG entry](@).
:::

## Term Ref Resolution

The [term ref](@) resolution process has three steps:
1. Interpretation of the [term ref](@) into variables that can be used to [identify](@) an [MRG entry](@);
2. Locating the [identified](@) [MRG Entry](@);
3. Rewriting the [term ref](@) with a [renderable ref](@).

### Interpretation of the Term Ref

The following kinds of [term ref](@) syntaxes are (to be) supported:
- the [basic syntax](/doc/tev2/spec-syntax/term-ref#basic-syntax), i.e. \[`show text`\](`id`#`trait`@`scopetag`:`vsntag`);
- the [terms syntax](/doc/tev2/spec-syntax/term-ref#terms-syntax), i.e. \[`show text`\](`term`#`trait`@`scopetag`:`vsntag`), the difference being that `term` represents a [terminological artifact](@), whereas `id` (in the basic syntax) [identifies](@) the [curated text](@) that documents such [artifact](terminologica-artifact@);
- the [alternative syntax](/doc/tev2/spec-syntax/term-ref#alternative-syntax), e.g. \[`show text`@\], which basically moves the `@`-character from the basic syntax within the square brackets, which in many (if not most) cases is more convenient for [authors](@).

:::info Editor's note
The [terms syntax](/doc/tev2/spec-syntax/term-ref#terms-syntax) has currently not been properly defined.
:::

Interpretation of a Term Ref leads to the population of the following variables (or, in case regexes are used, named capturing groups):

<details>
<summary>Using regexes to find the values for the variables</summary>

Finding a [term ref](@) in the file can be done by using a regular expressions (regexes - you can use [debuggex](https://www.debuggex.com/) to see what these regexps do (make sure you choose PCRE as the regex flavor to work with)).[^1]

[^1]: These regexps may need to be improved to cater for exceptional situations, so that they do not match e.g. pieces of code (such as the regex specifications we presented above). Alternatively, [TRRT](@) might specify specific syntax for pieces of text from within which a match with these regexps is ignored.

- For the [basic syntax](/doc/tev2/spec-syntax/term-ref#basic-syntax), you can use the PCRE regex
  - [``(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))``](https://www.debuggex.com/r/Resuq7vbjHUOUXSx) to find the `[` that starts a [term ref](@), and
  - [``(?P<showtext>.+?)\]\((?P<id>[a-z0-9_-]+?)(?:#(?P<trait>[a-z0-9_-]+?))?@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsntag>[a-z0-9_-]+?))?\)``](https://www.debuggex.com/r/OC3lxllHc9GleXES) to find the various parts of the [term ref](@) as (named) capturing groups.

:::info Editor's note
There is no regex for the [terms syntax](/doc/tev2/spec-syntax/term-ref#terms-syntax), because it has not yet been defined.
:::

- For the [alternative syntax](/doc/tev2/spec-syntax/term-ref#alternative-syntax), you can use the PCRE regex
  - [``(?<=[^`\\])\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)``](https://www.debuggex.com/r/I_hsZPQ5DJRAjCNg) to find the `[` that starts a [term ref](@), and
  - [``(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsntag>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?:#(?P<trait>[a-z0-9_-]+?))?\))?``](https://www.debuggex.com/r/kuFFBhpWnB42WbDC) to subsequently obtain the various fields as (named) capturing groups from the PCRE regex.

Note that when any of the named capturing groups is empty, it must be filled with its default value, as specified below.
</details>

#### `showtext` (required) {#showtext}

`showtext` is a (non-empty) text that will be highlighed/enhanced, and will become clickable and/or receive other features when rendered. It MUST NOT be empty, and it MUST NOT contain the characters `@` or `]` (which we need to be able to distinguish between [term refs](@) and other links).

:::info Editor's note
The alternative notation assumes that the `showtext` part of a [term ref](@) won't contain the `@` character. However, it is likely that some authors will want to use an email address as the `showtext` part of a *regular* link, e.g. as in `[rieks.joosten@tno.nl](mailto:rieks.joosten@tno.nl)`. However, since [scopetags](@) should not contain `.`-characters, `[rieks.joosten@tno.nl]` does not qualify as a `showtext` in our syntax. Also, it would be detectable if such syntax is followed by `(mailto:`. Any detected problems must result in a proper warning, and the suggestion that email addresses can be used in a [link with angle brackets](https://www.markdownguide.org/basic-syntax/#urls-and-email-addresses), e.g. `<rieks.joosten@tno.nl>`.
:::

#### `scopetag` (optional) {#scopetag}

`scopetag` is a [scopetag](@) that [identifies](@) the [scope](@) within which the [term ref](@) is to be resolved.

If specified, it MUST appear in the [SAF](@) (of the [scope](@) from which the [TRRT](@) is called), as an element of the `scopetags` field of one of elements in the list of `scopes`. That element also contains a `scopedir` field, that can subsequently be used to obtain the [SAF](@) of that [scope](@).

If not specified, the [scope](@) from which the [TRRT](@) is being called will be used. This SHOULD be the [scope](@) within which the document containing the [term ref](@) is being maintained. Note that the preceding `@` sign may never be omitted because as it serves the purpose to distinguish [term refs](@) from other [Markdown links](https://www.markdownguide.org/basic-syntax/#links). A `scopetag` shall only contain characters in regex `[a-z0-9_-]`.

#### `vsntag` (optional) {#vsntag}

`vsntag` is a [versiontag](@) that [identifies](@) the version of the [terminology](@) in the [scope](@) (as [identified] by the `scopetag`). It MUST appear either in the `vsntag` field, or as one of the elements in the `altvsntags` field of the [SAF](@) that contains the administration of that [scope](@).

If omitted (in which case the preceding `:`-character may also be omitted from the syntax), its value will [identify](@) the default [MRG](@) of the [scope](@) (as [specified](/docs/tev2/specs-file/saf#terminology) in the `mrgfile` field os the [SAF](@)).

#### `id` (optional) {#id}

`id` is a text that [identifies](@) a [curated text](@) (that documents a specific [knowledge artifact](@)) in a specific version of the  [terminology](@) of a specific [scope](@). It will be matched against the `id` fields of [MRG entries](@) in the [MRG](@) that documents said [terminology](@).

If omitted, <!-- and the `term` field is empty as well, --> it is generated as follows (assuming the [MRG](@) to be used has already been [identified](@)):

- set `id`:=`showtext`;
- convert every character in the (regex) range `[A-Z]` to lower-case;
- convert every sequence of characters `[^A-Za-z_-]+` to (a single) `-` character;
- if the resulting `id` [matches an element in the list of texts](/docs/tev2/spec-syntax/form-phrase) in the `formphrases` field of an [MRG entry](@), then replace `id` with the contents of the `id`-field of that same [MRG entry](@).

:::info Editor's note
We should clarify the extent to which this `matching` supports formphrase macro's, Currently, this is documented as part of the [form-phrase syntax](/docs/tev2/spec-syntax/form-phrase) which doesn't seem right.
:::

It is an error if the resulting `id` does not [identify](@) an [MRG entry](@) in the selected [MRG](@). This may mean that the `showtext` has misspellings, the `id` field was not specified where it had to, or the list of `formphrases` in some [MRG entry](@) should have included more elements.

:::info Editor's note
[The Porter Stemming Algorithm](https://tartarus.org/martin/PorterStemmer/) is a process for removing the commoner morphological and inflexional endings from words in English. Its main use is as part of a term normalisation process that is usually done when setting up Information Retrieval systems. The mentioned site links to lots of freely useable code that the TRRT might want to consider using.

Perhaps the [TRRT](@) may use this tool as a means for generating the `id` field from the `showtext` if necessary. However, we would need to first experiment with that to see whether or not, c.q. to what extent this conversion does what it is expected to do.
:::

<!--
#### `term` (optional) {#term}

`term` [identifies](@) a [knowledge artifact](@)) in a specific version of the [terminology](@) of a specific [scope](@). It consists of a `termname`, `termtype`, and `termattrs` part, that can be matched against the corresponding fields of [MRG entries](@) in the [MRG](@) that documents said [terminology](@).

`term` can only be omitted if the (generated) `id` field is not empty; doing so constitutes an error.
-->
#### `trait` (optional) {#trait}

`trait` [identifies](@) a particular kind of descriptive text that is associated with the [knowledge artifact](@). If specified, it must be one of the elements in the list of headingid's as specified in [the `headingids` field](/docs/tev2/spec-files/mrg#mrg-entries) of the [MRG entry](@). If omitted, the preceding `#`-character should also be omitted.

### Locating the identified MRG Entry

As soon as the variables have been provided with a value, the [MRG](@) can be found as follows:
1. the `scopetag` enables selecting the proper [curatedir](@), and the related [SAF](@);
2. the `vsntag` enables selecting the terminology from that [SAF](@), and from there the location of the [MRG](@) to be used;
3. the `id` enables selecting of the [MRG entry](@), or if a `term` was specified, the values for `termname`, `termtype` and `termattrs` will [identify](@) that [MRG entry](@)

:::info Editor's note
do we need to elaborate a bit more on finding the [MRG](@) from the [SAF](@)? Do we want to add a `mrgurl` field to a `SAF/versions`-section to facilitate finding such [MRGs](@)?
:::

### Rewriting the Term Ref with a Renderable Ref

The [term ref](@) will by default dereference to a human readable, rendered version of the [curated text](@) associated with the [identified](@) [MRG entry](@), which can be obtained through the URL located in the `navurl` field of the [MRG entry](@), which the text `#<trait>` is appended if a `trait` was specified.

:::info Editor's note
We should think about how to document [renderable refs](@) in such a way that they can easily be found and used for different roles (authors, curators, developers) and purposes (writing a trrt-config file, adding a new type of [renderable ref](@), etc.).
:::

The text with which the [term ref](@) is to be replaced can have various formats. This enables the [TRRT](@) to be used in different contexts, and its results to be further processed by a variety of third-party rendering tools.

<details>
  <summary>Examples of term-ref replacements</summary>

<Tabs
  defaultValue="simple"
  values={[
    {label: 'ToIP Style', value: 'simple'},
    {label: 'eSSIF-Lab Style', value: 'complex'},
  ]}>

<TabItem value="simple">

The simplest example is where a [term ref](@) is replaced with a regular [markdown link](https://www.markdownguide.org/basic-syntax/#links)

In this case, the [term ref](@) `[Actions](@)` is replaced with ``[Actions](/<hrgfile>#action)``
where:

- `hrgfile` is the contents of the field [SAF](@).`scope.hrgfile`.

</TabItem>
<TabItem value="complex">

A more complex example is what is done within eSSIF-Lab, where the [curators](@) not only want [terms](@) to be linked to their (rendered) [curated texts](@), but also want them to be provided with a tooltip that states their [definitions](@).

In this [scope](@), the [term ref](@) `[Actions](@)` is replaced with `<Term reference="action" popup="<popuptext>">Actions</Term>`
where:

- `<popuptext>` is the text provided in the `hoverText` field of the [MRG entry](@) whose `id` field is `action`, and
- `<Term ...>` and `</Term>` represent a React component that supports linking and tooltip functionality, so that users hovering over the link will see a popup/tooltip with the text `<popuptext>`, and will navigate to the location of the (human readable, i.e. rendered) file that contains details and further explanations, as specified in the `navurl` field of the [MRG entry](@).

:::info Editor's note
The implementation of the `<Term ...>` ... `</Term>` construct will differ from that which is used by eSSIF-Lab, because a [term](@) that is defined in this, or another [scope](@), lives in the [curated file](@) at `scopedir`/`curatedir`/`locator`, where
- `scopedir` is the URL that locates the [scope directory](@) of that [scope](@);
- `curatedir` is the directory in that `scopedir` where [knowledge artifacts](@) (c.q. [curated texts](@)) live; its value is found both in the [SAF](@) and in the [MRG](@) of the [scope](@);
- `locator` is the path (including filename), relative to `scopedir`/`curatedir`/, of the [curated file](@) that describes the [knowledge artifact](@) that is being referred to.
:::

</TabItem>
</Tabs>

</details>

The essentials of the rewriting start with the [scopedir](@) of the [scope](@) from which the [TRRT](@) is called, and proceed as follows:
- access the [SAF](@), and in case the `scopetag` is not of this [scope](@), look up the [scopedir](@) associated with that `scopetag` and obtain its [SAF](@);
- using the `vsntag`, locate the [MRG](@) (or if `vsntag` isn't specified, use the [scope's](@) default [MRG](@)-file as specified in the [scope's](@) [SAF](@));
- Find the [MRG entry](@) that has an `id`-field that is the same as `id`;

At this point, all data is available for constructing the replacement text. As we have seen, it depends on the situation that need to be supported how the actual construction needs to be done.

## Processing, Errors and Warnings

The [TRRT](@) starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalidities include non-existing directories or files, lack of write-permissions where needed, etc.

Then, the [TRRT](@) reads the specified input files (in arbitrary order), and for each of them, produces an output file that is the same as the input file except for the fact that all [term refs](@) have been replaced with regular [markdown links](https://www.markdownguide.org/basic-syntax/#links), and (optionally) with additional texts that are to be used by third-party rendering tools for enhanced rendering of such links. An example of this would be text that can be used to enhance a link with a popup that contains the definition, or a description of the [term](@) that is being referenced.

The [TRRT](@) logs every error- and/or warning condition that it comes across while processing its configuration file, commandline parameters, and input files, in a way that helps tool-operators and document authors to identify and fix such conditions.

## Deploying the Tool

The [TRRT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

## Discussion Notes

This section contains some notes of a discussion between Daniel and Rieks on these matters of some time ago.

- A ToIP [glossary](@) will be put by default at `http://trustoverip.github.io/<terms-community>/glossary`, where `<terms-community>` is the name of the [terms-community](@). This allows every  [terms-community](@) to have its own [glossary](@). However, the above specifications allow [terms-communities](terms-community@) to [curate](@) multiple [scopes](scope@).
- Storing [glossaries](glossary@) elsewhere was seen to break the (basic workings of the postprocessing tool, but the above specifications would fix that.
- Entries, e.g. 'foo' can be referenced as `http://trustoverip.github.io/<community>/[glossary](@)#foo` (in case of a standalone glossary), and `http://trustoverip.github.io/<community>/document-that-includes-glossary-fragment#foo` (in case of a fragmented glossary).
- There will be a new convention for content authors who want to reference [terms](term@) (let's call it the 'short form'). This topic is fully addressed above, and extended to be a bit more generic.
- do we expect [glossaries](glossary@) that are generated by a [terms-community](@) to live at a fixed place (how do people find it, refer to its contents)? This topic is addressed
- once [glossaries](glossary@) are generated, the idea is that all artifacts produced in a [terms-community](@) can use references to the [terms](term@) in the generated [glossaries](glossary@), e.g.:
  - confluence pages: we need to see how such pages can be processed. Authors can remove links like they do now, they could use [term refs](@) as they see fit and then run TRRT.
  - github pages (e.g. https://github.com/trustoverip/ctwg-terms). Check (it's a github repo).
  - github wiki pages (e.g. https://github.com/trustoverip/ctwg-terms/wiki). Check (it's a github repo).
  - github wiki home pages (e.g. https://github.com/trustoverip/ctwg-terms/wiki/Home). Check (it's a github repo).
  - github-pages pages (e.g. https://github.com/trustoverip/ctwg-terms/docs
- We could also see GGT and TRRT to be extended, e.g. to work in conjunction with LaTeX or word-processor documents. This needs some looking into, but [pandoc](https://pandoc.org/) may be useful here.
