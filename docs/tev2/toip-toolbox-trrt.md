---
id: toip-toolbox-trrt
title: Term Reference Resolution Tool (TRRT)
sidebar_label: TRRT - Term Ref Resolution Tool
displayed_sidebar: tev2SideBar
hide_table_of_contents: true
scopetag: tev2
date: 20220421
---

import useBaseUrl from '@docusaurus/useBaseUrl'

The **Term Ref(erence) Resolution Tool ([TRRT](toip-toolbox-trrt#trrt))** takes markdown files that contain so-called [term refs](term-ref@ctwg) (e.g. \[`terms community`\](`terms-community`@`ctwg`)) and creates a copy for each of these files in which all [term refs](term-ref@ctwg) are converted to regular [Markdown links](https://www.markdownguide.org/basic-syntax/#links), allowing such files to be further processed, e.g. by Github pages, Docusaurus or similar tools. Future versions of the [TRRT](#trrt) may support conversion of [term refs](term-ref@ctwg) in other file types (e.g. HTML, LaTeX, docx, odt).

## Term References {#termref}

A [term ref](@ctwg) is similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links), but rather than linking to some complicated URL or fragment, it refers/links to a specific descriptive text (e.g. a [definition](@ctwg), purpose, or example) that is associated with (a specific version of) a [(scoped) term](scoped-term@ctwg), which is [identified](identify@essiflab) by its [scope](@ctwg) and the [term](@ctwg) (label, text).

The complete, generic structure[^1] of a [term ref](@ctwg) is: \[`show text`\](`id`#`heading-id`@`scopetag`:`vsn`), where:
- `show-text` (required) is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters `@` or `]`.
- `id` (optional) is a text that [identifies](identify@essiflab) the [(scoped) term](scoped-term@ctwg) in the part of the [corpus](@ctwg) that contains the [terminology](@ctwg) of a specified [scope](@ctwg). If omitted, its value will be assigned the default, which is typically `show-text` in which every character in the range [A-Z] is converted to lower-case, and every sequence of characters, all of which are not in [A-Z], [a-z], `_` or `-`, are converted to `-`. `id` shall only contain characters in regex `[a-z0-9_-]`.
- `heading-id` (optional) is a text that [identifies](identify@essiflab) a particular kind of descriptive text that is associated with the [term](@ctwg). If omitted (in which case the preceding `#`-character may also be omitted), the [term ref](@ctwg) will by default dereference to the text of its [glossary](@ctwg) entry. While it is envisaged that `heading-id` must be a text from a predefined set of allowed/supported texts (e.g. `purpose`, `criteria`, `example-3`), the precise semantics remain to be specified. For now, `heading-id` shall be constrained to only contain characters in regex `[a-z0-9_-]`.
- `scopetag` (optional) is a [tag](@ctwg) that [identifies](identify@essiflab) the [scope](@ctwg) in the [terminology](@ctwg) of which the [(scoped) term](scoped-term@ctwg) is contained. If omitted, a default [scope](@ctwg) will be used, which is typically the [scope](@ctwg) within which the document containing the [term ref](@ctwg) is being maintained. Note that the preceding `@` sign may never be omitted because as it serves the purpose to distinguish [term refs](@ctwg) from other [Markdown links](https://www.markdownguide.org/basic-syntax/#links). `scopetag` shall only contain characters in regex `[a-z0-9_-]`.
- `vsn` (optional) is a text that [identifies](identify@essiflab) the version of the [terminology](@ctwg) in the [scope](@ctwg). If omitted (in which case the preceding `:`-character may also be omitted), its value will be the default, which is `latest`, which means the [term ref](@ctwg) points to the most recently established/published version of the [term](term). With the exception of `latest`, the precise semantics remain to be specified. `vsn` shall only contain characters in regex `[a-z0-9_-]`. We may need to discuss whether or not this should be changed to the version of the [glossary](@ctwg) rather than the version of the [term](@ctwg).

Regexes for this syntax are specified in the [TRRT](#trrt) section.

Here is an example: `[definitions](definition@ctwg)` is a reference to the default descriptive text associated with the latest version of the [term](@ctwg) that is identified in the [scope](@ctwg) by the label `definition`.

Tools MUST implement the typical default behaviors as specified above. However, they MAY have means, e.g. by configuration, to deviate from such behaviors. For example, a tool may have more sophisticated ways to derive a `id` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).[^2]

[^1]: We want to enable authors to use [term refs](id@ctwg) pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. [Markdown links](https://www.markdownguide.org/basic-syntax/#links) are of the form \[`show text`\](`ref-text`), where `show text` is the text that is rendered and emphasized so that a user knows it can be clicked, and `ref-text` is a (relative or absolute) URL, or a [heading ID](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids), that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for [term refs](id@ctwg) that is<br/>- sufficiently similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links),<br/>- 'humanly interpretable' when it isn't processed by the [TRRT](#trrt),<br/>- easy to use for authors, and<br/>- sufficiently distinct from a Markdown link so that the [TRRT](#trrt) will not process Markdown links yet will process the [term refs](id@ctwg).

[^2]: Future versions of [TRRT](#trrt) are expected to be able to recognize specific `show text`s, e.g. as plural forms (for nouns), or conjugate forms (for verbs) for a specific `id`, and use that `id` instead. This could e.g. be implemented as front matter of the resource document associated with `id`.

### Alternative notation {#termref-alt}

It is convenient for authors to be able to use the '@`scopetag`' part of a [term ref](@ctwg) immediately behind the `show text` within the square brackets (`[` and `]`), and leave out the parentheses and the text in between if all the other items are omitted.

This is particularly useful in the vast majority of cases, where the default processing of `show-text` results in `id` and `heading-id` is absent. Examples of this are `[definition](@ctwg)`, or `[term ref](term-ref@ctwg)`.

The usefulness becomes even greater as the [TRRT](#trrt) also implements more sophisticated ways to derive a `id` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).[^2]

This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:

| Alternative syntax | Equivalent regular syntax |
| :----------------: | :-----------------------: |
| \[`show text`@\] | \[`show text`\](@) |
| \[`show text`@`scopetag`\] | \[`show text`\](`show-text`@`scopetag`) |
| \[`show text`@`scopetag`:`vsn`\](`id`#`heading-id`) | \[`show text`\](`id`#`heading-id`@`scopetag`:`vsn`) |

In the last row of the above table, `id` and `#heading-id` are optional. Thus, `[definition@ctwg]()` is equivalent with `[definition@ctwg]` and with `[definition](@ctwg)`. Regexes for this alternative syntax are specified in the [TRRT](#trrt) section.

## Basic TRRT functions {#trrt}

Finding a [term ref](@ctwg) in the file can be done by using a regular expression (regex).
- For the original syntax, you can use the PCRE regex
  - ``(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))`` to find the `[` that starts a [term ref](@ctwg), and
  - ``(?P<showtext>.+?)\]\((?P<id>[a-z0-9_-]+?)(?:#(?P<headingid>[a-z0-9_-]+?))?@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsn>[a-z0-9_-]+?))?\)`` to find the various parts of the [term ref](@ctwg) as (named) capturing groups.
- For the alternative syntax, you can use the PCRE regex
  - ``(?<=[^`\\])\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)`` to find the `[` that starts a [term ref](@ctwg), and
  - ``(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsn>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?:#(?P<headingid>[a-z0-9_-]+?))?\))?`` to subsequently obtain the various fields as (named) capturing groups from the PCRE regex.
- These regexps should be improved to cater for exceptional situations, so that they do not match e.g. pieces of code (such as the regex specifications we presented above). Alternatively, [TRRT](#trrt) might specify specific syntax for pieces of text from within which a match with these regexps is ignored.

You can use [debuggex](https://www.debuggex.com/) to see what these regexps do (make sure you choose PCRE as the regex flavor to work with).

When a [term ref](term-ref@ctwg) is located, and its parts are known, any parts that are omitted (empty capturing groups) should be provided with their default value, as follows:
- the `scopetag` default refers to the [scope](@ctwg) from which the [TRRT](#trrt) is called.
- the `vsn` defaults to `latest`.
- the `headingid` defaults to the empty string.
- the `id` default is the `show-text` in which every character in the range [A-Z] is converted to lower-case, and every sequence of characters, all of which are not in [A-Z], [a-z], `_` or `-`, are converted to `-`.

To resolve a link, TRRT uses a (PCRE) regex that uses the names of the capturing groups, as well as `url`, which is the URL of the glossary that needs to be referenced. The default regex for this is `[$<showtext>]($<url>/glossary.$<vsn>/#$<id>)`.

The [TRRT](#trrt) may provide an option to specify other defaults in a configuration file or as  command-line arguments.

The conversion of a [term ref](term-ref@ctwg) into a regular [Markdown link](https://www.markdownguide.org/basic-syntax/#links) can be done as follows, where any errors that occur are logged with a specific message, the file that is being processed, and the line number and character position of the [term ref](@ctwg) that caused the error:
- Get the SAF of the [scope](@ctwg) from which the [TRRT](#trrt) is called;
- Using its contents, dereference `scopetag` to its associated [scope directory@];
- Get the SAF of that [scope directory@];
- Using its contents, locate the directory that contains its MRGs;
- Using `vsn`, get the associated MRG;
- If `id` is a list element of a `symphrase` field of some glossary entry, replace it with the `id`-field of that glossary entry;
- Find the glossary entry that has an `id`-field that is the same as `id`;
- Set `link` to the contents of the `url` field of that glossary entry;
- Test that `link` points to an existing resource;
- If `heading-id` is not empty, append `#<heading-id>` to the contents of `link`;
- Output `\[`, `showtext`, `\](`, the contents of `link`, and `)`.

The behavior of the [TRRT](#trrt) can be configured per call e.g. by a configuration file and/or command-line parameters. Examples include specifications for:
- the default `scopetag`;
- the set of source file(s) to process;
- the location(s) of destination file(s);
- options, e.g. to change what a resolved reference looks like (allowing processing of LaTeX or other kinds of files, or to mark such references in ways that can be picked up by other processing tools that are subsequently called in CI-pipes).

The [TRRT](#trrt) should log conditions that prevent it from properly

- parsing a source document (e.g. because it is not markdown, or the file has incomprehensible front matter);
- resolving references (e.g. if an unsupported referencing convention is encountered, the `scopetag` cannot be understood, the `id` does not map to a defined [term](@ctwg), etc.);
- writing the output (e.g. because it has no write-permission for the designated location);

and provide suggestions that help tool-operators and/or document authors to identify and fix any problems.

The [TRRT](#trrt) should come with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

## Discussion Notes

This section contains some notes of a discussion between Daniel and Rieks on these matters of some time ago.

- A ToIP [glossary](@ctwg) will be put by default at `http://trustoverip.github.io/<terms-community>/glossary`, where `<terms-community>` is the name of the [terms-community](@ctwg). This allows every  [terms-community](@ctwg) to have its own [glossary](@ctwg). However, the above specifications allow [terms-communities](terms-community@ctwg) to [curate](@ctwg) multiple [scopes](scope@ctwg).
- Storing [glossaries](glossary@ctwg) elsewhere was seen to break the (basic workings of the postprocessing tool, but the above specifications would fix that.
- Entries, e.g. 'foo' can be referenced as `http://trustoverip.github.io/<community>/[glossary](@ctwg)#foo` (in case of a standalone glossary), and `http://trustoverip.github.io/<community>/document-that-includes-glossary-fragment#foo` (in case of a fragmented glossary).
- There will be a new convention for content authors who want to reference [terms](term@ctwg) (let's call it the 'short form'). This topic is fully addressed above, and extended to be a bit more generic.
- do we expect [glossaries](glossary@ctwg) that are generated by a [terms-community](@ctwg) to live at a fixed place (how do people find it, refer to its contents)? This topic is addressed
- once [glossaries](glossary@ctwg) are generated, the idea is that all artifacts produced in a [terms-community](@ctwg) can use references to the [terms](term@ctwg) in the generated [glossaries](glossary@ctwg), e.g.:
  - confluence pages: we need to see how such pages can be processed. Authors can remove links like they do now, they could use [term refs](@ctwg) as they see fit and then run TRRT.
  - github pages (e.g. https://github.com/trustoverip/ctwg-terms). Check (it's a github repo).
  - github wiki pages (e.g. https://github.com/trustoverip/ctwg-terms/wiki). Check (it's a github repo).
  - github wiki home pages (e.g. https://github.com/trustoverip/ctwg-terms/wiki/Home). Check (it's a github repo).
  - github-pages pages (e.g. https://github.com/trustoverip/ctwg-terms/docs
- We could also see GGT and TRRT to be extended, e.g. to work in conjunction with LaTeX or word-processor documents. This needs some looking into, but [pandoc](https://pandoc.org/) may be useful here.