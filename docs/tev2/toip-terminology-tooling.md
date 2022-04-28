# ToIP Terminology Tooling

This document is meant as a specification of results that the ToIP CTWG aims to realize, that can serve as the basis for the specification of terminology tooling.

The intended audience is expected to be familiar with the [mental model on terminology](https://essif-lab.github.io/framework/docs/terms/pattern-terminology#formalized-model) and the current way(s) of working of the CTWG.

The document assumes that within ToIP multiple [scopes](scope@ctwg) are created and maintained, each of which having (at least) one [tag](@ctwg) that [identifies](identify@essiflab) the [scope](@ctwg) withtin the context of ToIP. Also, the document assumes that anyone that has some dealing with terminology, is doing so within the context of a single such [scope](@ctwg).

This document specifies the (initial) tt-toolbox, i.e. a set of 'tools' that can be used within a [scope](@ctwg) to help maintain its [terminology](@ctwg), create [glossaries](glossary@ctwg) and perhaps other useful stuff.

The initial/prototype versions of tools may not have implemented everything (e.g. versioning or header-id support may be something that tools could add later).

## Result Summary

1. We will have the following 'tools' in the tt-toolbox, each of which can be run 'manually' (i.e. from the commandline), and also made part of a github CI street. Each tool is always called from the context of exactly one [scope](@ctwg):

    - the **Term Ref(erence) Resolution Tool (TRRT)** takes markdown files that contain so-called [term refs](term-ref@ctwg) (e.g. \[`terms community`\](`terms-community`@`ctwg`)) and creates a copy for each of these files in which all [term refs](term-ref@ctwg) are converted to regular [Markdown links](https://www.markdownguide.org/basic-syntax/#links), allowing such files to be further processed, e.g. by Github pages, Docusaurus or similar tools.

    - the **Glossary Generation Tool (GGT)** takes a glossary definition file as input (that specifies e.g. [terms](term@ctwg) to be included from other [terminologies](terminology@ctwg), ways in which [terms](term@ctwg) are to be rendered, etc.), and generates a [glossary](@ctwg) that renders the [terminology](@ctwg) of the [scope](@ctwg) from which the GGT is called.

    - the **Meta Data Update Tool (MDUT)** (re)creates/updates/maintains meta-data for the [scope@]from which it is called, and that the tools in the tt-toolbox rely on for their proper functioning, and that needs to remain synchronized with the other [scopes@] that maintain/curate such data. An example could be a JSON glossary of another [scope's@] [terminology@], which may contain [terms@] of which the [definition@] is inherited from yet another [scope@].

2. setup a CI pipe for generating [glossaries](glossary@ctwg) for the `#toip` and `@ctwg` [scopes](scope@ctwg), that will (initially) generate a [glossary](@ctwg) upon any succesful commit to the master-branch of the associated repo/wiki, so we can see how that works and what (else) we need.

3. convert this very document with the reference resolution tool and publish it to see if/how it all works. We may also author a few other documents, for the purpose of exposing needs we want to address in future.

## Terminology references

A [term ref](@ctwg) is similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links), but rather than linking to some complicated URL or fragment, it refers/links to a specific descriptive text (e.g. a [definition](definition@ctwg), purpose, or example) that is associated with (a specific version of) a [(scoped) term](scoped-term@ctwg), which is [identified](identify@essiflab) by its [scope](@ctwg) and the [term](@ctwg) (label, text).

The complete, generic structure[^1] of a [term ref](@ctwg) is: \[`show text`\](`id`#`heading-id`@`scopetag`:`vsn`), where:
- `show-text` (required) is the text that will be highlighed/emphasized to indicate it is linked. It must not contain the characters `@` or `]`.
- `id` (optional) is a text that [identifies](identify@essiflab) the [(scoped) term](scoped-term@ctwg) in the part of the [corpus](@ctwg) that contains the [terminology](@ctwg) of a specified [scope](@ctwg). If omitted, its value will be assigned the default, which is typically `show-text` in which every character in the range [A-Z] is converted to lower-case, and every sequence of characters, all of which are not in [A-Z], [a-z], `_` or `-`, are converted to `-`. `id` shall only contain characters in regex `[a-z0-9_-]`.
- `heading-id` (optional) is a text that [identifies](identify@essiflab) a particular kind of descriptive text that is associated with the [term](term@ctwg). If omitted (in which case the preceeding `#`-character may also be omitted), the [term ref](@ctwg) will by default dereference to the text of its [glossary](@ctwg) entry. While it is envisaged that `heading-id` must be a text from a predefined set of allowed/supported texts (e.g. `purpose`, `criteria`, `example-3`), the precise semantics remain to be specified. For now, `heading-id` shall be constrained to only contain characters in regex `[a-z0-9_-]`.
- `scopetag` (optional) is a [tag](@ctwg) that [identifies](identify@essiflab) the [scope](@ctwg) in the [terminology](@ctwg) of which the [(scoped) term](scoped-term@ctwg) is contained. If omitted, a default [scope](@ctwg) will be used, which is typically the [scope](@ctwg) within which the document containing the [term ref](@ctwg) is being maintained. Note that the preceeding `@` sign may never be ommitted because as it serves the purpose to distinguish [term refs](@ctwg) from other [Markdown links](https://www.markdownguide.org/basic-syntax/#links). `scopetag` shall only contain characters in regex `[a-z0-9_-]`.
- `vsn` (optional) is a text that [identifies](identify@essiflab) the version of the [terminology](@ctwg) in the [scope](@ctwg). If omitted (in which case the preceeding `:`-character may also be omitted), its value will be the default, which is `latest`, which means the [term ref](@ctwg) points to the most recently established/published version of the [term](term). With the exception of `latest`, the precise semantics remain to be specified. `vsn` shall only contain characters in regex `[a-z0-9_-]`. We may need to discuss whether or not this should be changed to the version of the [glossary](@ctwg) rather than the version of the [term](@ctwg).

Here is an example: `[definitions](definition@ctwg)` is a reference to the default descriptive text associated with the latest version of the [term](@ctwg) that is identified in the [scope](@ctwg) by the label `definition`.

Tools MUST implement the typical default behaviours as specified above. However, they MAY have means, e.g. by configuration, to deviate from such behaviours. For example, a tool may have more sophisticated ways to derive a `id` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).[^3]

-------
NOTE: THE EXACT CONSTRAINTS (I.E.: REGEXES) FOR `show-text`, `id`, `vsn` AND `scopetag` MAY NEED TO BE FURTHER DISCUSSED AND CHOICES DOCUMENTED.

-------

### Alternative notation (for author's convenience)

It is convenient for authors to be able to use the '@`scopetag`' part of a [term ref](@ctwg) immediately behind the `show text` within the square brackets (`[` and `]`), and leave out the parentheses and the text in between if all the other items are omitted. This is particularly useful in the most common cases, where `show-text` is , rather than as the last part of that [term ref](@ctwg) immediately before the last closing parenthesis (`)`). This leads to an alternative notation that can be used in addition to the previously specified notation, as follows:

- \[`show text`@\] is equivalent with \[`show text`\](@),
- \[`show text`@`scopetag`\] is equivalent with \[`show text`\](`show-text`@`scopetag`), and
- \[`show text`@`scopetag`:`vsn`\](`id`#`heading-id`) is equivalent with \[`show text`\](`id`#`heading-id`@`scopetag`:`vsn`) (where `id`, `#heading-id` and `:vsn` are optional),

So, `[definition@ctwg]()` is equivalent with [definition](definition@ctwg)

## Scope Directories and their contents

This document assumes that anyone that has some dealing with [terminology](@ctwg), is doing so within the context of a single [scope](@ctwg), and that all related documents (specifications, white papers, terminological artifacts, etc.) are organized in a single directory that can be (read) accessed by tools that are called from within other [scopes](scope@ctwg). We use the [term](term@ctwg) **[scope](definition@ctwg) directory** to refer to this directory of a specific [scope](@ctwg). Thus, documents that belong to a [scope](@ctwg) are expected to reside (or have a reference/link file) in its scope directory.

Every [scope](@ctwg) has an **administration-object-file** that is located in the root of the scope directory. This file is manually maintained by the [curator(s)](curator@ctwg) of the [scope](@ctwg)). It contains at least:
- a set of [tags](tags@ctwg) that are used within the [scope](@ctwg) to [identify](@essiflab) other [scopes], where each such [tag](@ctwg) is associated with the URL of the scope directory of the [scope](@ctwg) that it identifies;
- the URL where the Machine Readable [Glossaries](glossary@ctwg) of the [scope](@ctwg), and the associated glossary definition files, are located.
- the name of the file (located at that URL), that contains the definition of the machine readable glossary that will be generated whenever an update of the [scope's](scope@ctwg) of the [corpus](@ctwg) is done. We will refer to this file as the **Machine Readable DEFinition** or **MRGDEF** file.
- the name of the file (located at that URL), that contains the definition of the human readable glossary that will be generated whenever an update of the [scope's](scope@ctwg) of the [corpus](@ctwg) is done. We will refer to this file as the **Human Readable DEFinition** or **HRGDEF** file.
- a mail address, github account or other text that enables people to contact (one of) the [curators](curator@ctwg).

Every [scope](@ctwg) has a set of **Machine Readable [Glossaries](glossary@ctwg)** or **MRGs**, that are located in (a subdirectory of) the [scope's](scope@ctwg) scope directory, the URL of which is found in the [scope's](scope@ctwg) administration-object-file. MRGs have the following file names:
- `glossary.latest` is the latest/most recently generated machine readable [glossary](@ctwg) of the [scope](@ctwg).
- `glossary.<vsn>`, where `<vsn>` [identifies](identify@essiflab) the version of the [terminology](@ctwg) that the MRG renders; it can be used as a `vsn`-text in a [term ref](@ctwg).

Every [scope](@ctwg) has a set of **[Glossary](@ctwg) Definition Files** or **GDFs**, that are located in the same directory as the MRGs. A GDF specifies the version, the format (machine or human readable, etc.), the contents (glossary entries) and anything else that the GGT may need or can use to generate a [glossary](@ctwg) from. The MRGDEF and HRGDEF files are the GDFs that contains the definition (specification) of the MRG and HRG respectively, and that is (re)created whenever terminology changes need to be effectuated. As we expect HRGs to be produced in combination with other tooling, such as github pages, docusaurus, etc., we leave it open where it will reside, and what it might look like when rendered.

## Machine Readable Glossaries (MRGs) {#mrgs}

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
- `symphrase` (optional): a list of texts that the TRRT can use to convert `show texts` into `id`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs). The `symphrase` elements (texts) shall only contain characters in regex `[a-z0-9_-{}]`.
- `status` (optional): a text that identifies the [status of the term](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). Allowed values are: 'proposed', 'approved' or 'deprecated'.
- `termname` (required): the text that is used for rendering the [term](@ctwg) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field).
- `synonyms` (optional): a list of texts that that may alternatively be used for rendering the [term](@ctwg) in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the `termid` field).
- `glossaryText` (required): a text that can be used as the (raw) contents for the entry of this [term](@ctwg) in a human readable [glossary](@ctwg). Note that this text SHOULD be allowed to contain [term refs](term-ref@ctwg).
- `hoverText` (optional): a text that can be used as the contents of a popup that shows as the [term](@ctwg) is rendered in a web browser and the user hovers over the [term](@ctwg) with its mouse.
- `url` (optional): the URL of a web-page that contains human readable text that typically has further explanations of the [term](@ctwg), and has sections that can be addressed by `url#heading-id` where `heading-id` is as specified for [term refs](term-ref@ctwg).

Other fields may be added to a glossary entry as needed. Note how this resembles/differs from the CTWG [Eported Data Model](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/exported-data-model.md).

## Glossary Definition Files (GDFs)

A GDF specifies the version, the format (machine or human readable, etc.), the contents (glossary entries) and anything else that the GGT may need or can use to generate a [glossary](@ctwg) from, e.g. the HTML code for the header and footer, or the location of a template to be used, etc.

Every [glossary](@ctwg) is said to 'render' the [terminology](@ctwg) of a particular [scope](@ctwg), i.e. the (alphabetically) sorted list of [terms](term@ctwg) that are [defined](definition@ctwg) within that scope. Note that the [definition](@ctwg) associated with a [term](@ctwg) may, but need not be, part of the same [scope](@ctwg) as that of the [terminology](@ctwg) that includes the [term](@ctwg).

Because [terminologies](terminology@ctwg) tend to change over time, they (and a [glossary](@ctwg) that renders it) may be versioned.

The contents of a [glossary](@ctwg) consists of one entry (which we call **glossary entries**) for every [term](@ctwg) that is
- [defined](definition@ctwg) in the [scope](@ctwg) iself;
- (explicitly or implicitly) selected by the [curators](curator@ctwg) of the [scope](*@ctwg) and that is part of the contents of a [glossary](@ctwg) of another [scope](@ctwg).

The syntax that is used for selecting [terms](term@ctwg) of another [scope](@ctwg) is:
- by means of a [term ref](@ctwg), where the `show text` specifies the name of the [term](@ctwg) as it will be used in the [scope](@ctwg), and the [definition](@ctwg) (and other terminological artifacts of that [term](@ctwg), such as purpose, examples, etc.) are 'inherited' from the [term](@ctwg) that is being referenced.
- by means of the so-called 'tagslist-syntax', which is `tagslist`@`scopetag`:`vsn` (e.g. `paa,terminology@essiflab:latest`) where:
  - @`scopetag` (required) identifies a [scope](@ctwg) in the administration-object-file, thus allowing tools to obtain (the specified version, or if ommitted, the latest version of) the MRG of that [scope](@ctwg) from which to extract the selected entries. In the example, this is `essiflab`.
  - `vsn` (optional) is the specific version of the MRG from which the [terms](@ctwg) are selected. If omitted (in which case the preceeding `:` may also be omitted), the latest version is specified. The example specifies the `latest` version of the essiflab [glossary](@ctwg)
  - `tagslist` (optional) is a comma-separated list of [(group)tags](tag@ctwg) (e.g. `paa,terminology`) where each grouptag (`paa` and `terminology`) specifies that every [term](@ctwg) in the MRG of the specified [scope](@ctwg) that has any of these [(group)tags](tag@ctwg) in its `grouptags` field, must be selected.

A GDF contains a sequence of such selection syntaxes that will be processed in the order they are specified (see the [Glossary Generation Tool](#ggt) for details on how processing takes place). Thus, in order to 'rename' a [term](@ctwg) that was imported using the taglist-syntax, it suffices to use the [term ref](@ctwg) that import that [term](@ctwg) again.

Optionally, syntax can be added to remove previously selected [terms](@ctwg) , e.g. by allowing the `-` character to precede one of the selection syntaxes. The idea is then that a list of such (de)selection syntaxes is incrementally processed, and when a `-`-syntax is encountered, the [terms](@ctwg) that would have otherwise been selected will then be removed from the selection.

We leave the specification of additional syntax for GDFs, e.g. for the inclusion of headers, footers etc., as work to be done.
## Glossary Generation Tool (GGT) {#ggt}

The **Glossary Generation tool** takes a glossary definition file (GDF) as input (that specifies e.g. [terms](term@ctwg) to be included from other [terminologies](terminology@ctwg), ways in which [terms](term@ctwg) are to be rendered, etc.), and generates a [glossary](@ctwg) that renders the [terminology](@ctwg) of the [scope](@ctwg) from which the GGT is called.

The GGT starts by crating an MRG, which is subsequently converted to a HRG if so specified.

Creating an MRG works as follows:
- Create an initial set of glossary entries, i.e. one for every [term](@ctwg) (from [scopes](scope@ctwg) other than the one we create the MRG for) that is selected per the specifications in the GDF. Whenever a (newly) selected [term](@ctwg) has an `id` that already exists as the `id`-field of a glossary-entry, that glossary entry will be discarded (meaning that the newly selected [term](@ctwg) 'overrides' the existing one).
- Add a glossary entry for every [term](@ctwg) that is defined in the [scope](@ctwg) from which the GGT is called, again removing eny existing glossary-entry that has an `id`-field that is the same as a newly added glossary entry.
- Perform completeness and consistency checks on the set of glossary entries, to ensure that
  - every glossary entry is [identifiable](identify@essiflab) by its `id`-field;
  - every element in the `symphrase`-list of a glossary entry does not occur as an element in the `symphrase`-list of another glossary entry;
  - ... (tbd).
- Sort the glossary entries according to their `id` field;
- Add header/meta data as needed as specified for [MRGs](#mrgs).

If the GDF specifies that a HRG is expected as a result, the GGT then runs the TRRT to resolve all [term refs](term-ref@ctwg) that may exist in the glossary entries (e.g. in the `glossaryText` fields), and performs any other conversions that are specified by the GDF, the specification of which is currently out of scope for this document.

The creation of a glossary entry for a [term](@ctwg) that is defined in the [scope](@ctwg) from which it is called is done by examining the contents of a terms-file and filling in the glossary entry structure as defined by [MRGs](#mrgs).

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

## Reference Resolution Tool (TRRT)

the **Term Ref(erence) Resolution Tool (TRRT)** takes markdown files that contain so-called [term refs](term-ref@ctwg) (e.g. \[`terms community`\](`terms-community`@`ctwg`)) and creates a copy for each of these files in which all [term refs](term-ref@ctwg) are converted to regular [Markdown links](https://www.markdownguide.org/basic-syntax/#links), allowing such files to be further processed, e.g. by Github pages, Docusaurus or similar tools. Future versions of the TRRT may support conversion of [term refs](term-ref@ctwg) in other file types (e.g. HTML, LaTeX, docx, odt).

### Basic TRRT functions

Finding a [term ref](@ctwg) in the file can be done by using a regular expression (regex).
- For the original syntax, you can use the PCRE regex
  - ``(?<=[^`\\])\[(?=[^@\]]+\]\([^\)]*@[^@\)]*\))`` to find the `[` that starts a [term ref](@ctwg).- ``(?P<showtext>.+?)\]\((?P<id>[a-z0-9_-]+?)(?:#(?P<headingid>[a-z0-9_-]+?))?@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsn>[a-z0-9_-]+?))?\)`` to find the various parts of the [term ref](@ctwg) as (named) capturing groups.
- For the alternative syntax, you can use the PCRE regex
  - ``(?<=[^`])\[(?=[^@\]]+@[^@\]]*\](?:\([^@\)]+\))?)`` to find the `[` that starts a [term ref](@ctwg).
  - ``(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsn>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?::(?P<headingid>[a-z0-9_-]+?))?\))?`` to subsequently obtain the various fields as (named) capturing groups from the PCRE regex.

Notes:
- You can use [debuggex](https://www.debuggex.com/) to see what these regexes do (don't forget to choose PCRE as the regex flavor to work with).
- These regexes should be improved to cater for exceptional situations, so that they do not match e.g. pieces of code (such as the regex specifications we presented above). Alternatively, TRRT might specify specific syntax for pieces of text from within which a match with these regexes is ignored.

When a [term ref](term-ref@ctwg) is located, and its parts are known, any parts that are omitted (empty capturing groups) should be provided with their default value, as follows:
- the `scopetag` default refers to the [scope](@ctwg) from which the TRRT is called.
- the `vsn` defaults to `latest`.
- the `headingid` defaults to the empty string.
- the `id` default is the `show-text` in which every character in the range [A-Z] is converted to lower-case, and every sequence of characters, all of which are not in [A-Z], [a-z], `_` or `-`, are converted to `-`.

The TRRT may provide an option to specify other defaults in a configuration file or as  command-line arguments.

The conversion of a [term ref](term-ref@ctwg) into a regular [Markdown link](https://www.markdownguide.org/basic-syntax/#links) can be done as follows, where any errors that occur are logged with a specific message, the file that is being processed, and the line number and character position of the [term ref](@ctwg) that caused the error:
- Get the administration-object-file of the [scope](@ctwg) from which the TRRT is called;
- Using its contents, dereference `scopetag` to its associated scope directory;
- Get the administration-object-file of that scope directory;
- Using its contents, locate the directory that contains its MRGs;
- Using `vsn`, get the associated MRG;
- If `id` is a list element of a `symphrase` field of some glossary entry, replace it with the `id`-field of that glossary entry;
- Find the glossary entry that has an `id`-field that is the same as `id`;
- Set `link` to the contents of the `url` field of that glossary entry;
- Test that `link` points to an existing resource;
- If `heading-id` is not empty, append `#<heading-id>` to the contents of `link`;
- Output `\[`, `showtext`, `\](`, the contents of `link`, and `)`.

===[revision required from here downward]===

Also, the TRRT needs data that is specific to a call, and may be made available e.g. by a configuration file and/or command-line parameters, such as
- the default `scopetag`;
- the locations of source file(s);
- the locations of destination file(s);
- options, specifying e.g. the specific way in which a reference is to be resolved (which could accommodate e.g. for further processing by specific documentation-tools that are subsequently called in CI-pipes).

The TRRT should log conditions that prevent it from properly

- parsing a source document (e.g. because it is not markdown, or the file has incomprehensible front matter);
- resolving references (e.g. if an unsupported referencing convention is encoutered, the `scopetag` cannot be understood, the `id` does not map to a defined [term](term@ctwg), etc.);
- writing the output (e.g. because it has no write-permission for the designated location);

and provide suggestions that help tool-operators and/or document authors to identify and fix any problems.

The TRRT should come with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

## Meta Data Update Tool (MDUT)

the **Meta Data Update Tool (MDUT)** (re)creates/updates/maintains meta-data for the [scope@]from which it is called, and that the tools in the tt-toolbox rely on for their proper functioning, and that needs to remain synchronized with the other [scopes@] that maintain/curate such data. An example could be a JSON glossary of another [scope's@] [terminology@], which may contain [terms@] of which the [definition@] is inherited from yet another [scope@].



## Discussion



* Authors of texts may use the url `http://trustoverip.github.io/terms-community/[glossary](@ctwg)#foo` to refer to the [glossary](@ctwg) entry of the [term](@ctwg) `foo`, as defined by `terms-community`, which starts with the name of the [term](@ctwg) that hyperlinks to the authoritative description.

-
- The actual generation (running the code) is currently a manual process. However, there's a recipe for making it a github action. This enables [curators](curator@ctwg) that maintain their [terms](term@ctwg) in github to automatically generate their [glossary](@ctwg).
  The resulting [glossary](@ctwg) will be put by default at `http://trustoverip.github.io/<terms-community>/glossary`, where `<terms-community>` is the name of the [terms-community](@ctwg). A [glossary](@ctwg) can also be stored elsewhere, but that breaks the basic workings of the postprocessing tool (see below) that converts 'smart links' to actual links. This can be solved, but that's for later.
  - Entries, e.g. 'foo' can be referenced as `http://trustoverip.github.io/<community>/[glossary](@ctwg)#foo` (in case of a standalone glossary), and `http://trustoverip.github.io/<community>/document-that-includes-glossary-fragment#foo` (in case of a fragmented glossary).
- There will be a new convention for content authors who want to reference [terms](term@ctwg) (let's call it the 'short form'). Linking to a [term](@ctwg) `<[term](@ctwg)>` in [scope](@ctwg) <[scope](@ctwg)> is done as follows `[term](term)` in case the document is also in [scope](@ctwg) <[scope](@ctwg)>, and otherwise `[term](@scope)`. Authors can choose wehther or not to postprocess their documents, where postprocessing means that this short form (and other referencing conventions we have adopted) are converted into actuals URLs. Authors that
  - do not postprocess, are on their own, but they *can* refer to any [term](@ctwg)
  - do postprocess, will need to author their markdown document in the community repo http://github.com/<community>/document.md , and postprocessing will then create a new document at  http://trustoverip.github.io/<community>/ convert referencing conventions
- do we expect [glossaries](glossary@ctwg) that are generated by a [terms-community](@ctwg) to live at a fixed place (how do people find it, refer to its contents)?
- once [glossaries](glossary@ctwg) are generated, the idea is that all artifacts produced in a [terms-community](@ctwg) can use references to the [terms](term@ctwg) in the generated [glossaries](glossary@ctwg)? Should that work for
  - confluence pages
  - github pages (e.g. https://github.com/trustoverip/ctwg-terms)
  - github wiki pages (e.g. https://github.com/trustoverip/ctwg-terms/wiki)
  - github wiki home pages (e.g. https://github.com/trustoverip/ctwg-terms/wiki/Home)
  - github-pages pages (e.g. https://github.com/trustoverip/ctwg-terms/docs
  - ...
- in wiki definitions, e.g. on a [terms community](@ctwg), the first sentence refers to the [term](@ctwg) `parties` in the meaning as we (provisionally) defined in the [toip-[terms](term@ctwg) wiki](https://github.com/trustoverip/toip-terms/wiki). Rather than having to refer to https://github.com/trustoverip/toip-terms/wiki/party, I would like to say something like `[parties](party@toip)`. That should be workable as [tags](https://github.com/trustoverip/ctwg-terms/wiki/tags) are (going to be) currently defined as small alphnumeric strings that identify a [terms-community](https://github.com/trustoverip/ctwg-terms/wiki/terms-community).
- can you guide me regarding the use of git for the wiki - specifically how to get stuff I do locally pushed to the repo (I've only very basic experience that doesn't seem to work for wiki repos). What I can't see working:
  - pushing updates from a cloned repo - I don't seem to have appropriate rights;
  - forking e.g. toip-[terms](term@ctwg) to my own github stuff works, but it comes with a wiki that is empty
  - I cannot seem to fork the toip-terms-wiki repo when I already have the toip-[terms](term@ctwg) repo forked - how do I get them both?
- what's [your PR](https://github.com/trustoverip/ctwg-terms/pulls) doing in trustoverip/ctwg-[terms](term@ctwg)?
- That's it for now - I might later add some topics if I come to it.

-----
## Notes

[^1]: We want to enable authors to use [term refs](id@ctwg) pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. [Markdown links](https://www.markdownguide.org/basic-syntax/#links) are of the form \[`show text`\](`ref-text`), where `show text` is the text that is rendered and emphasized so that a user knows it can be clicked, and `ref-text` is a (relative or absolute) URL, or a [heading ID](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids), that identifies the resource (e.g. web page, or place therin) that is being referenced.

So, we need a syntax for [term refs](id@ctwg) that is
- sufficiently similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links),
- 'humanly interpretable' when it isn't processed by the TRRT,
- easy to use for authors, and
- sufficiently distinct from a Markdown link so that the TRRT will not process Markdown links yet will process the [term refs](id@ctwg).

[^3]: Future versions of TRRT are expected to be able to recognize specific `show text`s, e.g. as plural forms (for nouns), or conjugate forms (for verbs) for a specific `id`, and use that `id` instead. This could e.g. be implemented as front matter of the resource document associated with `id`.

[^4]: This mapping may initially be empty (so no conversions take place). There SHOULD be a governance process that is run by the [terms community@ctwg] of the [scope@ctwg]