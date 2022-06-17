---
id: tev2-toolbox-trrt
title: Term Reference Resolution Tool (TRRT)
sidebar_label: TRRT - Term Ref Resolution Tool
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

The **Term Ref(erence) Resolution Tool ([TRRT](@))** takes markdown files that contain so-called [term refs](@) (e.g. \[`terms community`\](`terms-community`@`ctwg`)) and creates a copy for each of these files in which all [term refs](@) are converted to regular [Markdown links](https://www.markdownguide.org/basic-syntax/#links), allowing such files to be further processed, e.g. by Github pages, Docusaurus or similar tools. Future versions of the [TRRT](@) may support conversion of [term refs](@) in other kinds of 'raw texts' (e.g. HTML, LaTeX, docx, odt).

In order to do so, [TRRT](@) expects the [SAF](@) and the [MRG](@) of the [scope](@) from within which it is being called, to be available. The [MRG](@) is used to resolve all links to [terms](@) that are part of the [terminology](@) of this [scope](@). The [SAF](@) is used to locate the [MRGs](@) of any (other) [scope](@) whose [scopetag](@) is used as part of a [reference](term-ref@) that needs to be resolved.

## Term Reference Specifications {#termref}

:::info Editors Note
Here, we would have liked to INCLUDE the text of [term references](tev2-spec-term-ref) rather than copy it.<br/>
We may want to explore introducing a syntax such as e.g. `[!INCLUDE [<title>](<filepath>)]`<br/>
(See also: "https://github.com/sethen/markdown-include", or "https://asciidoc.org/")
:::

<details>
  <summary>Term Ref Basic Syntax</summary>

A [term ref](@) is similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links), but rather than linking to some complicated URL or fragment, it refers/links to a specific descriptive text (e.g. a [definition](@), purpose, or example) that is associated with (a specific version of) a [(scoped) term](scoped-term@), which is [identified](@) by its [scope](@) and the [term](@) (label, text).

The complete, generic structure[^1] of a [term ref](@) is: \[`show text`\](`id`#`trait`@`scopetag`:`vsntag`), where:
- `showtext` (required) is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters `@` or `]`.
- `id` (optional) is a text that [identifies](@) the [(scoped) term](scoped-term@) in the part of the [corpus](@) that contains the [terminology](@) of a specified [scope](@). If omitted, its value will be assigned the default, which is typically `showtext` in which every character in the range [A-Z] is converted to lower-case, and every sequence of characters, all of which are not in [A-Z], [a-z], `_` or `-`, are converted to `-`. `id` shall only contain characters in regex `[a-z0-9_-]`.
- `trait` (optional) is a text that [identifies](@) a particular kind of descriptive text that is associated with the [term](@). If omitted (in which case the preceding `#`-character may also be omitted), the [term ref](@) will by default dereference to the text of its [glossary](@) entry. While it is envisaged that `trait` must be a text from a predefined set of allowed/supported texts (e.g. `purpose`, `criteria`, `example-3`), the precise semantics remain to be specified. For now, `trait` shall be constrained to only contain characters in regex `[a-z0-9_-]`.
- `scopetag` (optional) is a [tag](@) that [identifies](@) the [scope](@) in the [terminology](@) of which the [(scoped) term](scoped-term@) is contained. If omitted, a default [scope](@) will be used, which is typically the [scope](@) within which the document containing the [term ref](@) is being maintained. Note that the preceding `@` sign may never be omitted because as it serves the purpose to distinguish [term refs](@) from other [Markdown links](https://www.markdownguide.org/basic-syntax/#links). `scopetag` shall only contain characters in regex `[a-z0-9_-]`.
- `vsntag` (optional) is a text that [identifies](@) the version of the [terminology](@) in the [scope](@). If omitted (in which case the preceding `:`-character may also be omitted), its value will be the default, which is `latest`, which means the [term ref](@) points to the most recently established/published version of the [term](@). With the exception of `latest`, the precise semantics remain to be specified. `vsntag` shall only contain characters in regex `[a-z0-9_-]`. We may need to discuss whether or not this should be changed to the version of the [glossary](@) rather than the version of the [term](@).

Regexes for this syntax are specified in the [TRRT](#regexes) section.

Here is an example: `[definitions](definition@)` is a reference to the default descriptive text associated with the latest version of the [term](@) that is identified in the [scope](@) by the label `definition`.

Tools MUST implement the typical default behaviors as specified above. However, they MAY have means, e.g. by configuration, to deviate from such behaviors. For example, a tool may have more sophisticated ways to derive a `id` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).[^2]

[^1]: We want to enable authors to use [term refs](@) pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. [Markdown links](https://www.markdownguide.org/basic-syntax/#links) are of the form \[`show text`\](`ref-text`), where `show text` is the text that is rendered and emphasized so that a [reader](@) knows it can be clicked, and `ref-text` is a (relative or absolute) URL, or a [heading ID](https://www.markdownguide.org/extended-syntax/#linking-to-traits), that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for [term refs](@) that is<br/>- sufficiently similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links),<br/>- 'humanly interpretable' when it isn't processed by the [TRRT](@),<br/>- easy to use for authors, and<br/>- sufficiently distinct from a Markdown link so that the [TRRT](@) will not process Markdown links yet will process the [term refs](@).

[^2]: Future versions of [TRRT](@) are expected to be able to recognize specific `show text`s, e.g. as plural forms (for nouns), or conjugate forms (for verbs) for a specific `id`, and use that `id` instead. This could e.g. be implemented as front matter of the resource document associated with `id`.

</details>

<details>
  <summary>Alternative Syntax for Term Refs</summary>

It is convenient for authors to be able to use the '@`scopetag`' part of a [term ref](@) immediately behind the `show text` within the square brackets (`[` and `]`), and leave out the parentheses and the text in between if all the other items are omitted.

This is particularly useful in the vast majority of cases, where the default processing of `showtext` results in `id` and `trait` is absent. Examples of this are `[definition](@)`, or `[term ref](@)`.

The usefulness becomes even greater as the [TRRT](@) also implements more sophisticated ways to derive a `id` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).[^2]

This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:

| Alternative syntax | Equivalent regular syntax |
| :----------------: | :-----------------------: |
| \[`show text`@\] | \[`show text`\](@) |
| \[`show text`@`scopetag`\] | \[`show text`\](`showtext`@`scopetag`) |
| \[`show text`@`scopetag`:`vsntag`\](`id`#`trait`) | \[`show text`\](`id`#`trait`@`scopetag`:`vsntag`) |

In the last row of the above table, `id` and `#trait` are optional. Thus, `[definition@]()` is equivalent with `[definition](@)` and with `[definition](@)`. Regexes for this alternative syntax are specified in the [TRRT](#regexes) section.

</details>

<details>
  <summary>Default values for omitted parts of Term Refs </summary>

When a [term ref](@) is located, and its parts are known, any parts that are omitted are provided with a default value if possible, as follows:
- the `scopetag` default refers to the [scope](@) from which the [TRRT](@) is called.
- the `vsntag` defaults to the version for the default [MRG](@) of the [scope](@).
- the `trait` defaults to the empty string.
- the `id` default is the `showtext` in which every character in the range [A-Z] is converted to lower-case, and every sequence of characters, all of which are not in [A-Z], [a-z], `_` or `-`, are converted to `-`.

The [TRRT](@) may provide an option to specify other defaults in a configuration file or as  command-line arguments.

</details>

## Calling the Tool

The behavior of the [TRRT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. Examples include specifications for:
- the default `scopedir`;
- the set of source file(s) to process;
- the location(s) of destination file(s);
- options, e.g. to change what a resolved reference looks like (allowing processing of LaTeX or other kinds of files, or to mark such references in ways that can be picked up by other processing tools that are subsequently called in CI-pipes).

The command-line syntax is as follows:

~~~
trrt [ <paramlist> ] [ <globpattern> ]
~~~

The (optional) `<paramlist>` is a list of key-value pairs
The (optional) [`globpattern`](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax) specifies a set of (input) files that are to be processed. If a configuration file is used, its contents may specify an additional set of input files to be processed.

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
| `config` | `<path>`        | n | Path (including the filename) of the tool's (YAML) configuration file. This file contains the default key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the configuration file. This parameter SHOULD NOT appear in the configuration file itself. |
| `input`  | `<globpattern>` | n | [Globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax) that specifies the set of (input) files that are to be processed. |
| `output` | `<dir>`         | Y | Directory where output files are to be written. This directory is specified as an absolute or relative path. |
| `saf`    | `<path>:<vsntag>`  | Y | `<path>` is the path (including the filename) of the [SAF](@) of the [scope](@) from which the tool is called. Note that the path without the filename is the [scopedir](@) of the [scope](@) from which the tool is said to be called.<br/>`<vsntag>` is a [versiontag](@) that specifies the version of the [terminology](@) (i.e.: [MRG](@)) that is to be used to resolve references to a [term](@) within the default [scope](@). It MUST match either the `vsntag` field, or an element of the `altvsntags` field of a [terminology](@)-version as specified in the `versions` section of the [SAF](@). When not specified, the latest version of the [MRG](@) is taken (as specified by the [SAF's](@) `scopes.mrgfile` field). |
| `method` | `<path>` | n | Path (including the filename) that contains additional instructions for the [TRRT](@) for resolving [term refs](@). When this parameter is omitted, [terms](@) are resolved as plain [markdown links](https://www.markdownguide.org/basic-syntax/#links). |

:::info Editor's Note:
Various `method`s are envisaged, yet remain to be properly specified. One example is where the [term ref](@) `[Actions](@)` would be replaced with a construct such as `<Term reference="action" popup="<popuptext>">actions</Term>`
where<br/>
- `<popuptext>` is the text provided in the `hoverText` field of the [MRG entry](@) whose `id` field is 'action', and
- `<Term ...>` and `</Term>` represent a React component that supports linking and tooltip functionality, so that users hovering over the link will see a popup/tooltip with the text `<popuptext>`, and will navigate to the location of the (human readable, i.e. rendered) file that contains details and further explanations, as specified in the `navurl` field of the [MRG entry](@).
:::

## Using Regexes to Find Term Refs {#regexes}

Finding a [term ref](@) in the file can be done by using a regular expressions (regexes).

- For the original syntax, you can use the PCRE regex
  - [``(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))``](https://www.debuggex.com/r/Resuq7vbjHUOUXSx) to find the `[` that starts a [term ref](@), and
  - [``(?P<showtext>.+?)\]\((?P<id>[a-z0-9_-]+?)(?:#(?P<trait>[a-z0-9_-]+?))?@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsntag>[a-z0-9_-]+?))?\)``](https://www.debuggex.com/r/OC3lxllHc9GleXES) to find the various parts of the [term ref](@) as (named) capturing groups.

- For the alternative syntax, you can use the PCRE regex
  - [``(?<=[^`\\])\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)``](https://www.debuggex.com/r/I_hsZPQ5DJRAjCNg) to find the `[` that starts a [term ref](@), and
  - [``(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsntag>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?:#(?P<trait>[a-z0-9_-]+?))?\))?``](https://www.debuggex.com/r/kuFFBhpWnB42WbDC) to subsequently obtain the various fields as (named) capturing groups from the PCRE regex.

- These regexps may need to be improved to cater for exceptional situations, so that they do not match e.g. pieces of code (such as the regex specifications we presented above). Alternatively, [TRRT](@) might specify specific syntax for pieces of text from within which a match with these regexps is ignored.

You can use [debuggex](https://www.debuggex.com/) to see what these regexps do (make sure you choose PCRE as the regex flavor to work with).

## Resolving a Term Ref {#term-ref-resolution}

Resolving a [term ref](@) consists of two parts.

1. First, the [term ref](@) itself is interpreted, which results in a set of variables (or named capturing groups) whose contents identify an [MRG entry](@) that is to be found in the [MRG](@) that corresponds with the version of a [terminology](@) in a specific [scope](@).
2. Then, using the contents of the identified [MRG entry](@), the [term ref](@) is replaced with a regular [markdown link](https://www.markdownguide.org/basic-syntax/#links) that, when clicked in a browser, sends the [reader](@) to (a specific heading in) a human readable version of the [curated text](@).

Any errors that occur during this process are logged using a message that helps the user of the [TRRT](@) resolve the issue, and that identifies the file that is being processed, and the line number and character position of the [term ref](@) that caused the error.

### Part 1 - Term Ref Interpretation

While the complete structure of a [term ref](@) is: \[`show text`\](`id`#`trait`@`scopetag`:`vsntag`), it is allowed to leave out one or more parts. This section specifies what the value of each of these parts is after the (possibly incomplete) [term ref](@) is processed, and any conditions they satisfy.

#### `showtext` (required) {#showtext}

`showtext` is a (non-empty) text that will be highlighed/enhanced, and will become clickable and/or receive other features when rendered. It MUST NOT be empty, and it MUST NOT contain the characters `@` or `]` (which we need to be able to distinguish between [term refs](@) and other links).

:::info Editor's note
The alternative notation assumes that the `showtext` part of a [term ref](@) won't contain the `@` character. However, it is likely that some authors will want to use an email address as the `showtext` part of a *regular* link, e.g. as in `[rieks.joosten@tno.nl](mailto:rieks.joosten@tno.nl)`. However, since [scopetags](@) should not contain `.`-characters, `[rieks.joosten@tno.nl]` does not qualify as a `showtext` in our syntax. Also, it would be detectable if such syntax is followed by `(mailto:`. Any detected problems must result in a proper warning, and the suggestion that email addresses can be used in a [link with angle brackets](https://www.markdownguide.org/basic-syntax/#urls-and-email-addresses), e.g. `<rieks.joosten@tno.nl>`.
:::

#### `scopetag` (optional) {#scopetag}

`scopetag` is a [scopetag](@) that [identifies](@) the [scope](@) within which the [term ref](@) is to be resolved.

If specified, it MUST appear in the [SAF](@) (of the [scope](@) from which the [TRRT](@) is called), as an element of the `scopetags` field of one of elements in the list of `scopes`. That element also contains a `scopedir` field, that can subsequently be used to obtain the [SAF](@) of that [scope](@).

If not specified, a default [scope](@) will be used, which is the [scope](@) from which the [TRRT](@) is being called, which SHOULD be the [scope](@) within which the document containing the [term ref](@) is being maintained. Note that the preceding `@` sign may never be omitted because as it serves the purpose to distinguish [term refs](@) from other [Markdown links](https://www.markdownguide.org/basic-syntax/#links). `scopetag` shall only contain characters in regex `[a-z0-9_-]`.

#### `vsntag` (optional) {#vsntag}

`vsntag` is a [versiontag](@) that [identifies](@) the version of the [terminology](@) in the [scope](@) (as [identified] by the `scopetag`). It MUST appear either in the `id` field, or as one of the elements in the `altvsntags` field of the [SAF](@) that contains the administration of that [scope](@).

When specified,

If omitted (in which case the preceding `:`-character may also be omitted from the syntax), its value will be the default, which is `latest`, which means the [term ref](@) points to the most recently established/published version of the [term](term). With the exception of `latest`, the precise semantics remain to be specified. `vsntag` shall only contain characters in regex `[a-z0-9_-]`. We may need to discuss whether or not this should be changed to the version of the [glossary](@) rather than the version of the [term](@).

#### `id` (optional) {#id}

`id` is a text that satisfies regex `[a-z0-9_-]+`, and [identifies](@) a [terminological artifact](@) in a specific version of the  [terminology](@) of a specific [scope](@). It will be matched against the `id` fields of [MRG entries](@) in the [MRG](@) that documents said [terminology](@).

If omitted, it is generated as follows (assuming the [MRG](@) to be used has already been [identified](@)):

- set `id`:=`showtext`
- convert every character in the (regex) range `[A-Z]` to lower-case
- convert every sequence of characters `[^A-Za-z_-]+` to (a single) `-` character.
- if the resulting `id` matches an element in the list of texts in the `formphrases` field of an [MRG entry](@), then replace `id` with the contents of the `id`-field of that same [MRG entry](@).[^3]

[^3]: It is convenient to allow elements of the `formphrases` list to contain 'macro's, i.e. shorthand syntax that represent regexes that allow for extended matching. Consider a 'macro' `{ss}` as shorthand for regex `(?:['']?s|\(s\))?` (or a macro `{yies}` as shorthand for regex `(y|y['']s|ies)`). An `id` is said to match such an element if and only if the regex that consists of the list element (with the macro replaced with the regex that it is shorthand for) matches that `id`. Here are a few examples:<br/>- the following `id`s match `actor{ss}`: "actor", "actors", "actor's", "actor's", and "actor(s)".<br/>- similarly, `part{yies}` matches: "party", "party's", "party's", and "parties".

It is an error if the resulting `id` does not [identify](@) an [MRG entry](@) in the selected [MRG](@). This may mean that the `showtext` has misspellings, the `id` field was not specified where it had to, or the list of `formphrases` in some [MRG entry](@) should have included more elements.

:::info Editor's note
[The Porter Stemming Algorithm](https://tartarus.org/martin/PorterStemmer/) is a process for removing the commoner morphological and inflexional endings from words in English. Its main use is as part of a term normalisation process that is usually done when setting up Information Retrieval systems. The mentioned site links to lots of freely useable code that the TRRT might want to consider using.

Perhaps the [TRRT](@) may use this tool as a means for generating the `id` field from the `showtext` if necessary. However, we would need to first experiment with that to see whether or not, c.q. to what extent this conversion does what it is expected to do.
:::

#### `trait` (optional) {#trait}

`trait` [identifies](@) a particular kind of descriptive text that is associated with the [term](@). If omitted (in which case the preceding `#`-character may also be omitted), the [term ref](@) will by default dereference to the text of its [glossary](@) entry. While it is envisaged that `trait` must be a text from a predefined set of allowed/supported texts (e.g. `purpose`, `criteria`, `example-3`), the precise semantics remain to be specified. For now, `trait` shall be constrained to only contain characters in regex `[a-z0-9_-]`.

### Part 2 - Term Ref Resolution

Once a [term ref](@) has been interpreted and the variables `showtext`, `scopetag`, `vsntag`, `id` and `trait` have been given values, the validiy of which we assume has been checked, the [term ref](@) has to be resolved, i.e. replaced with another text that will have the effect that when a [reader](@) encounters it in a rendered text (presented e.g. in a browser, pdf-reader, or something else), it enables the reader to find out its intended meaning.

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
- `curatedir` is the directory in that `scopedir` where [terminological artifacts](@) (c.q. [curated texts](@)) live; its value is found both in the [SAF](@) and in the [MRG](@) of the [scope](@);
- `locator` is the path (including filename), relative to `scopedir`/`curatedir`/, of the [curated file](@) that describes the [terminological artifact](@) that is being referred to.
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
