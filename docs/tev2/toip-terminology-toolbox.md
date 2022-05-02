---
id: toip-terminology-toolbox
title: ToIP Terminology Toolbox
sidebar_label: ToIP TT-Tools
displayed_sidebar: tev2SideBar
scopetag: tev2
date: 20220421
---

import useBaseUrl from '@docusaurus/useBaseUrl'

This document is meant as a specification of results that the ToIP CTWG aims to realize, that can serve as the basis for the specification of terminology tooling.

The intended audience is expected to be familiar with the [mental model on terminology](https://essif-lab.github.io/framework/docs/terms/pattern-terminology#formalized-model) and the current way(s) of working of the CTWG.

The document assumes that within ToIP multiple [scopes](scope@ctwg) are created and maintained, each of which having (at least) one [tag](@ctwg) that [identifies](identify@essiflab) the [scope](@ctwg) within the context of ToIP. Also, the document assumes that anyone that has some dealing with terminology, is doing so within the context of a single such [scope](@ctwg).

This document specifies the (initial) tt-toolbox, i.e. a set of 'tools' that can be called from within a specific [scope](@ctwg), to help maintain its [terminology](@ctwg), create [glossaries](glossary@ctwg) and provide other support for its [curation](curate@ctwg).

The initial/prototype versions of tools may not have implemented everything (e.g. versioning or header-id support may be something that tools could add later).

## Result Summary

1. We will have the following 'tools' in the tt-toolbox, each of which can be run 'manually' (i.e. from the commandline), and also made part of a github CI street. Each tool is always called from the context of exactly one [scope](@ctwg):

    - the **Term Ref(erence) Resolution Tool ([TRRT](#trrt))** takes markdown files that contain so-called [term refs](term-ref@ctwg) (e.g. \[`terms community`\](`terms-community`@`ctwg`)) and creates a copy for each of these files in which all [term refs](term-ref@ctwg) are converted to regular [Markdown links](https://www.markdownguide.org/basic-syntax/#links), allowing such files to be further processed, e.g. by Github pages, Docusaurus or similar tools.

    - the **Glossary Generation Tool ([GGT](#ggt))** takes a [Glossary Definition File (GDF)](#gdf) as input, and generates both a **Machine Readable [Glossary](glossary@ctwg) ([MRG](#mrg))** and a **Human Readable [Glossary](glossary@ctwg)**, both of which render the [terminology](@ctwg) of the [scope](@ctwg) from which the [GGT](#ggt) is called. The[(GDF)](#gdf) specifies the set of [terms](term@ctwg) to be included, and for the HRG also how they are to be rendered.

2. setup a CI pipe for generating [glossaries](glossary@ctwg) for the `#toip` and `@ctwg` [scopes](scope@ctwg), that will (initially) generate a [glossary](@ctwg) upon any successful commit to the master-branch of the associated repo/wiki, so we can see how that works and what (else) we need.

3. convert this very document with the reference resolution tool and publish it to see if/how it all works. We may also author a few other documents, for the purpose of exposing needs we want to address in future.

4. create documentation, including templates (not just for e.g. [term files](term-file@essiflab), but also for complete repo's), that enable a [terms community](@ctwg) to create and maintain their [scope(s)](scope@ctwg).

## Term References {#termref}

A [term ref](@ctwg) is similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links), but rather than linking to some complicated URL or fragment, it refers/links to a specific descriptive text (e.g. a [definition](definition@ctwg), purpose, or example) that is associated with (a specific version of) a [(scoped) term](scoped-term@ctwg), which is [identified](identify@essiflab) by its [scope](@ctwg) and the [term](@ctwg) (label, text).

The complete, generic structure[^1] of a [term ref](@ctwg) is: \[`show text`\](`id`#`heading-id`@`scopetag`:`vsn`), where:
- `show-text` (required) is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters `@` or `]`.
- `id` (optional) is a text that [identifies](identify@essiflab) the [(scoped) term](scoped-term@ctwg) in the part of the [corpus](@ctwg) that contains the [terminology](@ctwg) of a specified [scope](@ctwg). If omitted, its value will be assigned the default, which is typically `show-text` in which every character in the range [A-Z] is converted to lower-case, and every sequence of characters, all of which are not in [A-Z], [a-z], `_` or `-`, are converted to `-`. `id` shall only contain characters in regex `[a-z0-9_-]`.
- `heading-id` (optional) is a text that [identifies](identify@essiflab) a particular kind of descriptive text that is associated with the [term](term@ctwg). If omitted (in which case the preceding `#`-character may also be omitted), the [term ref](@ctwg) will by default dereference to the text of its [glossary](@ctwg) entry. While it is envisaged that `heading-id` must be a text from a predefined set of allowed/supported texts (e.g. `purpose`, `criteria`, `example-3`), the precise semantics remain to be specified. For now, `heading-id` shall be constrained to only contain characters in regex `[a-z0-9_-]`.
- `scopetag` (optional) is a [tag](@ctwg) that [identifies](identify@essiflab) the [scope](@ctwg) in the [terminology](@ctwg) of which the [(scoped) term](scoped-term@ctwg) is contained. If omitted, a default [scope](@ctwg) will be used, which is typically the [scope](@ctwg) within which the document containing the [term ref](@ctwg) is being maintained. Note that the preceding `@` sign may never be omitted because as it serves the purpose to distinguish [term refs](@ctwg) from other [Markdown links](https://www.markdownguide.org/basic-syntax/#links). `scopetag` shall only contain characters in regex `[a-z0-9_-]`.
- `vsn` (optional) is a text that [identifies](identify@essiflab) the version of the [terminology](@ctwg) in the [scope](@ctwg). If omitted (in which case the preceding `:`-character may also be omitted), its value will be the default, which is `latest`, which means the [term ref](@ctwg) points to the most recently established/published version of the [term](term). With the exception of `latest`, the precise semantics remain to be specified. `vsn` shall only contain characters in regex `[a-z0-9_-]`. We may need to discuss whether or not this should be changed to the version of the [glossary](@ctwg) rather than the version of the [term](@ctwg).

Here is an example: `[definitions](definition@ctwg)` is a reference to the default descriptive text associated with the latest version of the [term](@ctwg) that is identified in the [scope](@ctwg) by the label `definition`.

Tools MUST implement the typical default behaviors as specified above. However, they MAY have means, e.g. by configuration, to deviate from such behaviors. For example, a tool may have more sophisticated ways to derive a `id` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).[^2]

-------
NOTE: THE EXACT CONSTRAINTS (I.E.: REGEXES) FOR `show-text`, `id`, `vsn` AND `scopetag` MAY NEED TO BE FURTHER DISCUSSED AND CHOICES DOCUMENTED.

-------

### Alternative notation {#termref-alt}

It is convenient for authors to be able to use the '@`scopetag`' part of a [term ref](@ctwg) immediately behind the `show text` within the square brackets (`[` and `]`), and leave out the parentheses and the text in between if all the other items are omitted.

This is particularly useful in the vast majority of cases, where the default processing of `show-text` results in `id` and `heading-id` is absent. Examples of this are `[definition](definition@ctwg)`, or `[term ref](term-ref@ctwg)`.

The usefulness becomes even greater as the [TRRT](#trrt)

This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:

| Alternative syntax | Equivalent regular syntax |
| :----------------: | :-----------------------: |
| \[`show text`@\] | \[`show text`\](@) |
| \[`show text`@`scopetag`\] | \[`show text`\](`show-text`@`scopetag`) |
| \[`show text`@`scopetag`:`vsn`\](`id`#`heading-id`) | \[`show text`\](`id`#`heading-id`@`scopetag`:`vsn`) |

In the last row of the above table, `id` and `#heading-id` are optional. Thus, `[definition@ctwg]()` is equivalent with `[definition@ctwg]` and with `[definition](definition@ctwg)`.

## Scope Directories and their contents

This document assumes that anyone that has some dealing with [terminology](@ctwg), is doing so within the context of a single [scope](@ctwg), and that all related documents (specifications, white papers, terminological artifacts, etc.) are organized in a single directory that can be (read) accessed by tools that are called from within other [scopes](scope@ctwg). We use the [term](term@ctwg) **[scope](definition@ctwg) directory** to refer to this directory of a specific [scope](@ctwg). Thus, documents that belong to a [scope](@ctwg) are expected to reside (or have a reference/link file) in its scope directory.

Every [scope](@ctwg) has an **administration-object-file (AOF)** that is located in the root of the scope directory. This file is manually maintained by the [curator(s)](curator@ctwg) of the [scope](@ctwg)). It contains at least:
- the set of [scope tags](tag@ctwg) that [identify](@essiflab) the [scopes](scope@ctwg) from which [terms](term@ctwg) may be used (imported), and for each of them the URL of its associated scope directory; this set SHOULD include the [scope tag](tag@ctwg) (and associated URL) that the [curator(s)](curator@ctwg) of the [scope](@ctwg) have chosen for the [scope](@ctwg) itself.
- the URL of the directory in which the [glossaries](glossary@ctwg) of the [scope](@ctwg), and the associated [GDFs](#gdf), are located.
- the name of the [GDFs](#gdf) that specifies the particulars for generating both the [MRG](#mrg) and [HRG](#hrg) that are to be generated whenever an update of the [scope's](scope@ctwg) part of the [corpus](@ctwg) is done.
- a mail address, github account or other text that enables people to contact (one of) the [curators](curator@ctwg).

Every [scope](@ctwg) has a set of (generated) [MRGs](#mrg) and [HRGs](#hrg) that are located in (a subdirectory of) the [scope's](scope@ctwg) scope directory, the URL of which is found in the [scope's](scope@ctwg) AOF. MRGs have the following file names:
- `glossary` is the latest/most recently generated HRG of the [scope](@ctwg).
- `glossary.latest` is the latest/most recently generated MRG of the [scope](@ctwg).
- `hrg.<vsn>` and `mrg.<vsn>`, are specific versions of a HRG and MRG respectively, where `<vsn>` is the [versiontag](tag@ctwg) that [identifies](identify@essiflab) the version of the [terminology](@ctwg) that they render.

Every [scope](@ctwg) has a set of [GDFs](#gdf), that are located in the same directory as the [MRGs](#mrg). A [GDF](#gdf) specifies the contents (i.e. the set of [terms](term@ctwg) to be included) of a particular [MRG](#mrg) and [HRG](#hrg), and for the [HRG](#hrg) also how it is to be rendered. As we expect [HRGs](#hrg) to be produced in combination with other tooling, such as github pages, docusaurus, etc., the final URL of where it resides may differ from the directory in which a [HRG](#hrg) is created.

## Machine Readable Glossaries (MRGs) {#mrg}

A Machine Readable Glossary (MRG) is the single source for *all* terminology-related data that is available from its [scope](@ctwg), for a specific version. Thus, the MRGs of all ToIP [scopes](@ctwg) constitute the ToIP [corpus](@ctwg).

Every MRG:
- specifies the version of the [glossary](@ctwg) itself;
- contains a (sorted) list of (glossary) entries, where each entry contains all data related to a single [term](@ctwg), and can be identified by its `id` (that typically, but not necessarily, is the same as the [term](@ctwg) - for example, a [term](@ctwg) that contains whitespace would have a `id` where the whitespace is replaced by a `-` character).

A glossary entry for an MRG SHOULD accommodate for (at least) the following fields:
- `scopetag` (required): the [tag](@ctwg) of the [scope](@ctwg) in which the [term](term@ctwg) is defined (as a [glossary](@ctwg) not only contains [terms](term@ctwg) that are defined in the [scope](@ctwg) itself, but also [terms](term@ctwg) that are defined in other [scopes](@ctwg).
- `id` (required): the text that [identifies](identify@essiflab) the [term](@ctwg) within the context of the MRG, and can also be used as an `id` in a [term ref](term-ref@ctwg). The `id` shall only contain characters in regex `[a-z0-9_-]`. For [terms](term@ctwg) of other types than 'concept', the `id` would typically be of the form `<type>-<termid>`, e.g. as in `pattern-identify`.
- `termtype` (optional): a text that identifies the kind of entity that the [term](@ctwg) refers to. The `termtype` shall only contain characters in regex `[a-z0-9_-]`. Typical values would be `concept`, `relation`, `pattern` (or `mental-model`), `term` (or `alias`). When omitted, it defaults to `concept`.
- `termid`: a text that identifies the specific entity of the `termtype` (as specified above). The `termid` shall only contain characters in regex `[a-z0-9_-]`. When omitted, its value is derived from the field `id` by matching that with the (CPRE) regex `(?P=<type>)-(?P<termid>.+?)`; if there is a match, the value is the named group `<termid>`. If there is no match, the value is `id` itself.
- `grouptags`: a list of [tags](tag@ctwg), each of which identifies a group of [terms](term@ctwg) to which this [term](@ctwg) belongs. Tags must satisfy the (PCRE) regex `#[a-z0-9_-]+`.
- `date`: date of the last update of the [term](@ctwg)-related data, in the form yyyymmdd.
- `termvsn` (optional): a text that identifies the version of the [term](@ctwg) itself. It is not to be confused with the version of a [terminology](@ctwg) that may contain that [term](@ctwg). The `termvsn` shall only contain characters in regex `[a-z0-9_-]`.
- `commit` (optional): the latest (git) commit hash of the [term's](term@ctwg) [definition](definition@ctwg).
- `symphrase` (optional): a list of texts that the [TRRT](#trrt) can use to convert `show texts` into `id`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs). The `symphrase` elements (texts) shall only contain characters in regex `[a-z0-9_-{}]`.
- `status` (optional): a text that identifies the [status of the term](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). Allowed values are: 'proposed', 'approved' or 'deprecated'.
- `termname` (required): the text that is used for rendering the [term](@ctwg) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field).
- `synonyms` (optional): a list of texts that that may alternatively be used for rendering the [term](@ctwg) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field).
- `glossaryText` (required): a text that can be used as the (raw) contents for the entry of this [term](@ctwg) in a human readable [glossary](@ctwg). Note that this text SHOULD be allowed to contain [term refs](term-ref@ctwg).
- `hoverText` (optional): a text that can be used as the contents of a popup that shows as the [term](@ctwg) is rendered in a web browser and the user hovers over the [term](@ctwg) with its mouse.
- `url` (optional): the URL of a web-page that contains human readable text that typically has further explanations of the [term](@ctwg), and has sections that can be addressed by `url#heading-id` where `heading-id` is as specified for [term refs](term-ref@ctwg).

Other fields may be added to a glossary entry as needed. Note how this resembles/differs from the CTWG [Eported Data Model](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/exported-data-model.md).

## Human Readable Glossaries (HRGs) {#hrg}

A Human Readable Glossary (HRG) is a rendering of an [MRG](#mrg) in a format that, possibly after having been processed by tools that are outside the scope of this document (e.g. github pages, docusaurus, etc.), can be read by people.

The typical rendering would be suitable for being browsed, similar to the [ToIP CTWG Glossary](https://trustoverip.github.io/ctwg/glossary) or the [ToIP eSSIF-Lab Glossary](https://trustoverip.github.io/essiflab/glossary).

However, a HRG may also be created for the purpose of being included in e.g. a LaTeX document, which not only requires a different layout, but also requires [term refs](term-ref@ctwg) to be rendered in other than the default ways.

The particulars of creating HRGs are currently outside the scope of this document.

## Glossary Definition Files (GDFs) {#gdf}

specifies the contents (i.e. the set of [terms](term@ctwg) to be included) of a particular [MRG](#mrg) and [HRG](#hrg), and for the [HRG](#hrg) also how it is to be rendered, e.g. the HTML code for the header and footer, or the location of a template to be used, etc. As we expect [HRGs](#hrg) to be produced in combination with other tooling, such as github pages, docusaurus, etc., the final URL of where it resides may differ from the directory in which a [HRG](#hrg) is created.

Every [glossary](@ctwg) is said to 'render' the [terminology](@ctwg) of a particular [scope](@ctwg), i.e. the (alphabetically) sorted list of [terms](term@ctwg) that are [defined](definition@ctwg) within that scope. Note that the [definition](@ctwg) associated with a [term](@ctwg) may, but need not be, part of the same [scope](@ctwg) as that of the [terminology](@ctwg) that includes the [term](@ctwg).

Because [terminologies](terminology@ctwg) tend to change over time, they (and a [glossary](@ctwg) that renders it) may be versioned.

The contents of a [glossary](@ctwg) consists of one entry (which we call **glossary entries**) for every [term](@ctwg) that is
- [defined](definition@ctwg) in the [scope](@ctwg) iself;
- (explicitly or implicitly) selected by the [curators](curator@ctwg) of the [scope](*@ctwg) and that is part of the contents of a [glossary](@ctwg) of another [scope](@ctwg).

The syntax that is used for selecting [terms](term@ctwg) of another [scope](@ctwg) is:
- by means of a [term ref](@ctwg), where the `show text` specifies the name of the [term](@ctwg) as it will be used in the [scope](@ctwg), and the [definition](@ctwg) (and other terminological artifacts of that [term](@ctwg), such as purpose, examples, etc.) are 'inherited' from the [term](@ctwg) that is being referenced.
- by means of the so-called 'tagslist-syntax', which is `tagslist`@`scopetag`:`vsn` (e.g. `paa,terminology@essiflab:latest`) where:
  - @`scopetag` (required) identifies a [scope](@ctwg) in the AOF, thus allowing tools to obtain (the specified version, or if omitted, the latest version of) the MRG of that [scope](@ctwg) from which to extract the selected entries. In the example, this is `essiflab`.
  - `vsn` (optional) is the specific version of the MRG from which the [terms](@ctwg) are selected. If omitted (in which case the preceding `:` may also be omitted), the latest version is specified. The example specifies the `latest` version of the essiflab [glossary](@ctwg)
  - `tagslist` (optional) is a comma-separated list of [(group)tags](tag@ctwg) (e.g. `paa,terminology`) where each grouptag (`paa` and `terminology`) specifies that every [term](@ctwg) in the MRG of the specified [scope](@ctwg) that has any of these [(group)tags](tag@ctwg) in its `grouptags` field, must be selected.

A GDF contains a sequence of such selection syntaxes that will be processed in the order they are specified (see the [GGT](#ggt) for details on how processing takes place). Thus, in order to 'rename' a [term](@ctwg) that was imported using the tagslist-syntax, it suffices to use the [term ref](@ctwg) that import that [term](@ctwg) again.

Optionally, syntax can be added to remove previously selected [terms](@ctwg) , e.g. by allowing the `-` character to precede one of the selection syntaxes. The idea is then that a list of such (de)selection syntaxes is incrementally processed, and when a `-`-syntax is encountered, the [terms](@ctwg) that would have otherwise been selected will then be removed from the selection.

We leave the specification of additional syntax for GDFs, e.g. for the inclusion of headers, footers and other stuff that is specific for the generation of [HRGs](#hrg), as work to be done.
## Glossary Generation Tool (GGT) {#ggt}

The **Glossary Generation tool** takes a glossary definition file (GDF) as input (that specifies e.g. [terms](term@ctwg) to be included from other [terminologies](terminology@ctwg), ways in which [terms](term@ctwg) are to be rendered, etc.), and generates a (machine readable, and optionally also a human readable) [glossary](@ctwg) that renders the [terminology](@ctwg) of the [scope](@ctwg) from which the [GGT](#ggt) is called.

The [GGT](#ggt) first creates an [MRG](#mrg) (which does the 'heavy lifting'), and from that, a [HRG](#hrg) will be created. Different [HRGs](#hrg), i.e. different human-readable renderings of the [terminology](@ctwg) may be created from the same [MRG](#mrg).
### Creating an MRG

Creating an [MRG](#mrg) works as follows:
- Create an initial set of glossary entries, i.e. one for every [term](@ctwg) (from [scopes](scope@ctwg) other than the one we create the MRG for) that is selected per the specifications in the [GDF](#gdf). A glossary entry is constructed by interpreting the [term file](@essiflab) that defines the [term](@ctwg), and producing the glossary entry structure as defined for [MRGs](#mrg). Note that this can only be done for [term files](term-file@essiflab) that have a syntax that is supported by the [GGT](#ggt). If the created glossary entry has an `id` that is the same as the `id`-field of an existing glossary-entry, that glossary entry will be discarded (meaning that the newly created glossary entry  'overrides' the existing one).
- Add a glossary entry for every [term](@ctwg) that is defined in the [scope](@ctwg) from which the [GGT](#ggt) is called, again removing any existing glossary-entry that has an `id`-field that is the same as a newly added one.
- Perform completeness and consistency checks on the set of glossary entries, to ensure that
  - every glossary entry is [identifiable](identify@essiflab) by its `id`-field;
  - every element in the `symphrase`-list of a glossary entry does not occur as an element in the `symphrase`-list of another glossary entry;
- Sort the glossary entries according to their `id` field;
- Add header/meta data as needed as specified for [MRGs](#mrg).

For example, consider the [term](@ctwg) `curate` as defined in the [CTWG terms wiki](https://github.com/trustoverip/ctwg/wiki/curate). The wiki-page would be interpreted, which would lead to the following (machine readable) glossary entry:
~~~
  id: concept-curate
  scopetag: ctwg
  termtype: concept
  termid: curate
  grouptags:
  date: 20211123
  termvsn: 9
  commit:
  symphrase: curate, curates, curated, curation
  status: proposed
  termname: curate
  synonyms: curation
  glossaryText: To evolve [concept](@ctwg) and [term](@ctwg) data in the direction of greater quality and richer content within a specific [scope](@ctwg).
  hoverText: Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope.
  url: https://github.com/trustoverip/ctwg/wiki/curate
~~~

Glossaries are generated at a default location, which for ToIP is `http://trustoverip.github.io/<terms-community>/glossary`, where `<terms-community>` is the name of the [terms-community](@ctwg) that [curates](curate) the [terms](term@ctwg) in the [glossary](@ctwg).

The [GGT](#ggt) should log conditions that prevent it from properly

- parsing a source document (e.g. because it is not in the expected format);
- resolving `id`s, [scope tags](tag@ctwg), [group tags](tag@ctwg), or [version tags](tag@ctwg);
- writing the output (e.g. because it has no write-permission for the designated location);
- etc.;

and provide suggestions that help tool-operators to identify and fix any problems.

The [GGT](#ggt) should come with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

### Creating a HRG

:::info Editor's note
A specification is needed for the creation of a (simple) HRG (from an existing MRG).
Any [term refs](term-ref@ctwg) need to be properly resolved.
Titles of term entries may want to link to the original resource from which it was derived.
Choice bars (e.g. `[ A B C D .... Z ]` may need to be inserted here and there).
Meta-data (group tags, the scopetag of the scope where it was defined, contributors, versions, dates, etc.) may need to be included.
There must be some license notification.
:::
## Reference Resolution Tool (TRRT) {#trrt}

the **Term Ref(erence) Resolution Tool ([TRRT](#trrt))** takes markdown files that contain so-called [term refs](term-ref@ctwg) (e.g. \[`terms community`\](`terms-community`@`ctwg`)) and creates a copy for each of these files in which all [term refs](term-ref@ctwg) are converted to regular [Markdown links](https://www.markdownguide.org/basic-syntax/#links), allowing such files to be further processed, e.g. by Github pages, Docusaurus or similar tools. Future versions of the [TRRT](#trrt) may support conversion of [term refs](term-ref@ctwg) in other file types (e.g. HTML, LaTeX, docx, odt).

### Basic TRRT functions

Finding a [term ref](@ctwg) in the file can be done by using a regular expression (regex).
- For the original syntax, you can use the PCRE regex
  - ``(?<=[^`\\])\[(?=[^@\]]+\]\([^\)]*@[^@\)]*\))`` to find the `[` that starts a [term ref](@ctwg).- ``(?P<showtext>.+?)\]\((?P<id>[a-z0-9_-]+?)(?:#(?P<headingid>[a-z0-9_-]+?))?@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsn>[a-z0-9_-]+?))?\)`` to find the various parts of the [term ref](@ctwg) as (named) capturing groups.
- For the alternative syntax, you can use the PCRE regex
  - ``(?<=[^`])\[(?=[^@\]]+@[^@\]]*\](?:\([^@\)]+\))?)`` to find the `[` that starts a [term ref](@ctwg).
  - ``(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsn>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?::(?P<headingid>[a-z0-9_-]+?))?\))?`` to subsequently obtain the various fields as (named) capturing groups from the PCRE regex.

Notes:
- You can use [debuggex](https://www.debuggex.com/) to see what these regexps do (don't forget to choose PCRE as the regex flavor to work with).
- These regexps should be improved to cater for exceptional situations, so that they do not match e.g. pieces of code (such as the regex specifications we presented above). Alternatively, [TRRT](#trrt) might specify specific syntax for pieces of text from within which a match with these regexps is ignored.

When a [term ref](term-ref@ctwg) is located, and its parts are known, any parts that are omitted (empty capturing groups) should be provided with their default value, as follows:
- the `scopetag` default refers to the [scope](@ctwg) from which the [TRRT](#trrt) is called.
- the `vsn` defaults to `latest`.
- the `headingid` defaults to the empty string.
- the `id` default is the `show-text` in which every character in the range [A-Z] is converted to lower-case, and every sequence of characters, all of which are not in [A-Z], [a-z], `_` or `-`, are converted to `-`.

To resolve a link, TRRT uses a (PCRE) regex that uses the names of the capturing groups, as well as `url`, which is the URL of the glossary that needs to be referenced. The default regex for this is `[$<showtext>]($<url>/glossary.$<vsn>/#$<id>)`.

The [TRRT](#trrt) may provide an option to specify other defaults in a configuration file or as  command-line arguments.

The conversion of a [term ref](term-ref@ctwg) into a regular [Markdown link](https://www.markdownguide.org/basic-syntax/#links) can be done as follows, where any errors that occur are logged with a specific message, the file that is being processed, and the line number and character position of the [term ref](@ctwg) that caused the error:
- Get the AOF of the [scope](@ctwg) from which the [TRRT](#trrt) is called;
- Using its contents, dereference `scopetag` to its associated scope directory;
- Get the AOF of that scope directory;
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
- resolving references (e.g. if an unsupported referencing convention is encountered, the `scopetag` cannot be understood, the `id` does not map to a defined [term](term@ctwg), etc.);
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

-----
## Notes

[^1]: We want to enable authors to use [term refs](id@ctwg) pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. [Markdown links](https://www.markdownguide.org/basic-syntax/#links) are of the form \[`show text`\](`ref-text`), where `show text` is the text that is rendered and emphasized so that a user knows it can be clicked, and `ref-text` is a (relative or absolute) URL, or a [heading ID](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids), that identifies the resource (e.g. web page, or place therein) that is being referenced.

So, we need a syntax for [term refs](id@ctwg) that is
- sufficiently similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links),
- 'humanly interpretable' when it isn't processed by the [TRRT](#trrt),
- easy to use for authors, and
- sufficiently distinct from a Markdown link so that the [TRRT](#trrt) will not process Markdown links yet will process the [term refs](id@ctwg).

[^2]: Future versions of [TRRT](#trrt) are expected to be able to recognize specific `show text`s, e.g. as plural forms (for nouns), or conjugate forms (for verbs) for a specific `id`, and use that `id` instead. This could e.g. be implemented as front matter of the resource document associated with `id`.