---
id: tev2-spec-term-ref
title: Term References
sidebar_label: Referencing Terms
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

This document specifies how you can use a [term](@) in a [curated text](@) while at the same time referring to the [definition](@) that defines its meaning. i.e. the syntax that you need to use in such texts. The way in which the [term](@) (and its [definition](@)) may be rendered depends on the artifact that is being generated. For example, when a [term](@) is rendered in a web-site, it may be enhanced, showing a popup that contains its [definition](@) when a [reader](@) hovers the mouse over it, and that hyperlinks to the page in the website that explains the term in more detail when the [reader](@) clicks on it. When a [term](@) is rendered in a PDF file, its definition may appear as an entry in a [glossary](@) that is added somewhere in the PDF. It all depends on the rendering tools that are being used, and this is out of scope for this specification.

This file specifies the syntax of [Term refs](@). The [TRRT](tev2-toolbox-trrt) describes how they are processed (resolved).

## Term References {#termref}

A [term ref](@) is similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links), but rather than linking to some complicated URL or fragment, it refers/links to a specific descriptive text (e.g. a [definition](@), purpose, or example) that is associated with (a specific version of) a [(scoped) term](scoped-term@), which is [identified](identify@essiflab) by its [scope](@) and the [term](@) (label, text).

The complete, generic structure[^1] of a [term ref](@) is: \[`show text`\](`id`#`heading-id`@`scopetag`:`vsn`), where:
- `show-text` (required) is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters `@` or `]`.
- `id` (optional) is a text that [identifies](identify@essiflab) the [(scoped) term](scoped-term@) in the part of the [corpus](@) that contains the [terminology](@) of a specified [scope](@). If omitted, its value will be assigned the default, which is typically `show-text` in which every character in the range [A-Z] is converted to lower-case, and every sequence of characters, all of which are not in [A-Z], [a-z], `_` or `-`, are converted to `-`. `id` shall only contain characters in regex `[a-z0-9_-]`.
- `heading-id` (optional) is a text that [identifies](identify@essiflab) a particular kind of descriptive text that is associated with the [term](@). If omitted (in which case the preceding `#`-character may also be omitted), the [term ref](@) will by default dereference to the text of its [glossary](@) entry. While it is envisaged that `heading-id` must be a text from a predefined set of allowed/supported texts (e.g. `purpose`, `criteria`, `example-3`), the precise semantics remain to be specified. For now, `heading-id` shall be constrained to only contain characters in regex `[a-z0-9_-]`.
- `scopetag` (optional) is a [tag](@) that [identifies](identify@essiflab) the [scope](@) in the [terminology](@) of which the [(scoped) term](scoped-term@) is contained. If omitted, a default [scope](@) will be used, which is typically the [scope](@) within which the document containing the [term ref](@) is being maintained. Note that the preceding `@` sign may never be omitted because as it serves the purpose to distinguish [term refs](@) from other [Markdown links](https://www.markdownguide.org/basic-syntax/#links). `scopetag` shall only contain characters in regex `[a-z0-9_-]`.
- `vsn` (optional) is a text that [identifies](identify@essiflab) the version of the [terminology](@) in the [scope](@). If omitted (in which case the preceding `:`-character may also be omitted), its value will be the default, which is `latest`, which means the [term ref](@) points to the most recently established/published version of the [term](term). With the exception of `latest`, the precise semantics remain to be specified. `vsn` shall only contain characters in regex `[a-z0-9_-]`. We may need to discuss whether or not this should be changed to the version of the [glossary](@) rather than the version of the [term](@).

Regexes for this syntax are specified in the [TRRT](#trrt) section.

Here is an example: `[definitions](definition@)` is a reference to the default descriptive text associated with the latest version of the [term](@) that is identified in the [scope](@) by the label `definition`.

Tools MUST implement the typical default behaviors as specified above. However, they MAY have means, e.g. by configuration, to deviate from such behaviors. For example, a tool may have more sophisticated ways to derive a `id` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).[^2]

[^1]: We want to enable authors to use [term refs](id@) pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. [Markdown links](https://www.markdownguide.org/basic-syntax/#links) are of the form \[`show text`\](`ref-text`), where `show text` is the text that is rendered and emphasized so that a [reader](@) knows it can be clicked, and `ref-text` is a (relative or absolute) URL, or a [heading ID](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids), that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for [term refs](id@) that is<br/>- sufficiently similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links),<br/>- 'humanly interpretable' when it isn't processed by the [TRRT](#trrt),<br/>- easy to use for authors, and<br/>- sufficiently distinct from a Markdown link so that the [TRRT](#trrt) will not process Markdown links yet will process the [term refs](id@).

[^2]: Future versions of [TRRT](#trrt) are expected to be able to recognize specific `show text`s, e.g. as plural forms (for nouns), or conjugate forms (for verbs) for a specific `id`, and use that `id` instead. This could e.g. be implemented as front matter of the resource document associated with `id`.

### Alternative notation {#termref-alt}

It is convenient for authors to be able to use the '@`scopetag`' part of a [term ref](@) immediately behind the `show text` within the square brackets (`[` and `]`), and leave out the parentheses and the text in between if all the other items are omitted.

This is particularly useful in the vast majority of cases, where the default processing of `show-text` results in `id` and `heading-id` is absent. Examples of this are `[definition](@)`, or `[term ref](@)`.

The usefulness becomes even greater as the [TRRT](#trrt) also implements more sophisticated ways to derive a `id` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).[^2]

This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:

| Alternative syntax | Equivalent regular syntax |
| :----------------: | :-----------------------: |
| \[`show text`@\] | \[`show text`\](@) |
| \[`show text`@`scopetag`\] | \[`show text`\](`show-text`@`scopetag`) |
| \[`show text`@`scopetag`:`vsn`\](`id`#`heading-id`) | \[`show text`\](`id`#`heading-id`@`scopetag`:`vsn`) |

In the last row of the above table, `id` and `#heading-id` are optional. Thus, `[definition@]()` is equivalent with `[definition](@)` and with `[definition](@)`. Regexes for this alternative syntax are specified in the [TRRT](#trrt) section.
