---
id: tev2-spec-term-ref
title: Term References
hide_table_of_contents: true
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

This document specifies how you can use a [term](@) in a [curated text](@) while at the same time referring to the [definition](@) that defines its meaning. i.e. the syntax that you need to use in such texts. The way in which the [term](@) (and its [definition](@)) may be rendered depends on the artifact that is being generated. For example, when a [term](@) is rendered in a web-site, it may be enhanced, showing a popup that contains its [definition](@) when a [reader](@) hovers the mouse over it, and that hyperlinks to the page in the website that explains the term in more detail when the [reader](@) clicks on it. When a [term](@) is rendered in a PDF file, its definition may appear as an entry in a [glossary](@) that is added somewhere in the PDF. It all depends on the rendering tools that are being used, and this is out of scope for this specification.

This file specifies the syntax of [Term refs](@). The [TRRT](@) describes [how they are processed (resolved)](tev2-toolbox-trrt#term-ref-resolution).

## Term References (Original/Default Syntax) {#termref}

A [term ref](@) can be thought of as a [Markdown link](https://www.markdownguide.org/basic-syntax/#links), but rather than linking to some URL or fragment, it refers/links to a specific descriptive text (e.g. a [definition](@), purpose, or example) that is associated with (a specific version of) a [(scoped) term](scoped-term@), which is [identified](@) by its [scope](@) and the [term](@) (label, text).

<details>
  <summary>Motivation for the chosen syntax</summary>

We want to enable authors to use [term refs](@) pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. [Markdown links](https://www.markdownguide.org/basic-syntax/#links) are of the form \[`show text`\](`ref-text`), where `show text` is the text that is rendered and emphasized so that a [reader](@) knows it can be clicked, and `ref-text` is a (relative or absolute) URL, or a [heading ID](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids), that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for [term refs](@) that is<br/>- sufficiently similar to a [Markdown link](https://www.markdownguide.org/basic-syntax/#links),<br/>- 'humanly interpretable' when it isn't processed by the [TRRT](@),<br/>- easy to use for authors, and<br/>- sufficiently distinct from a Markdown link so that the [TRRT](@) will not process Markdown links yet will process the [term refs](@).

</details>

Here is an example of a [term ref](@): `[definitions](definition@)`. When this text is rendered into a human readable form, it will show the text `definitions` (plural) enhanced, and it will link to the text that describes (or defines) the term `definition` (singular). If you would want to use this term as it is defined in the [scope](@) called `essif-lab`, you could do that by wrinting `[definitions](definition@essif-lab)` (provided that `essif-lab` is a defined [scopetag](@) within the [scope](@) that you operate in).

The complete, generic structure of a [term ref](@) is: **\[`show text`\](`id`#`trait`@`scopetag`:`vsntag`)**. However, all of its elements (except for `show text`) are optional, so as to limit the 'extra work' that authors need to do to a minimum.

### `showtext` {#showtext}

**`showtext`** is the text that will be highlighted/emphasized to indicate it is linked.
It must not contain the characters `@` or `]` (this is needed to distinguish [term refs](@) from regular [markdown links](https://www.markdownguide.org/basic-syntax/#links)).

### `id` {#id}

**`id`** is a text that [identifies](@) the [(scoped) term](scoped-term@) in the part of the [corpus](@) that contains the [terminology](@) of a specified [scope](@).<br/>It must satisfy the regex `[a-z0-9_-]+`.

If omitted, its value is assumed to be [derivable from `showtext`](tev2-toolbox-trrt#id).
At a minimum, this is the case if the `id` equals the result of processing `showtext` by first converting every character in the range `[A-Z]` to lower-case, and then replacing every sequence of characters specified by regex `[^A-Za-z_-]+` with (a single) `-` character.

### `trait` {#trait}

**`trait`** is a text that [identifies](@) a particular (kind of) characteristic (feature, attribute, particularity) that is associated with the [term](@), and to a description of which is to be referred.<br/>It must satisfy the regex `[a-z0-9_-]+`.

If omitted (in which case the preceding `#`-character may also be omitted), the [term ref](@) will by default resolve to the text of its [glossary](@) entry. While it is envisaged that `trait` must be a text from a predefined set of allowed/supported texts (e.g. `purpose`, `criteria`, `example-3`), the precise semantics remain to be specified.

:::info Editor's note
The semantics of `trait` need to be better specified.
:::
### `scopetag` {#scopetag}

**`scopetag`** is a [tag](@) that [identifies](@) the [scope](@) of the [terminology](@) that contains the [(scoped) term](scoped-term@) that is being referenced.<br/>It must satisfy the regex `[a-z0-9_-]+`. Also, it must appear as such in the `scopes` section of the [SAF](@) of the [scope](@) within which the document containing the [term ref](@) is being maintained, or it must be the [scopetag](@) of the [scope](@) itself.

If omitted, a default [scope](@) will be used, which is the [scope](@) from which the [TRRT](@) is being called, which SHOULD be the [scope](@) within which the document containing the [term ref](@) is being maintained. Note that the preceding `@` sign MUST NOT be omitted because as it serves the purpose to distinguish [term refs](@) from other [markdown links](https://www.markdownguide.org/basic-syntax/#links).

### `vsntag` {#vsntag}

**`vsntag`** is a [versiontag](@) that [identifies](@) the specific version of the [terminology](@) in the [scope](@) that contains the [(scoped) term](scoped-term@) that is being referenced.<br/>It must satisfy the regex `[a-z0-9_-\.]+`.

If omitted (in which case the preceding `:`-character may also be omitted), its value will be the default, which is determined by the [curators](@) of that [scope](@) (the [MRG](@) that has the [terminology](@) that contains the (scoped) term](scoped-term@) that is being referenced, is specified in the [SAF](@) of that [scope](@), in the appropriate `scopes.mrgfile`-field). A `vsntag` is only valid if it appears as the value of the `vsntag` field or an element of the `altvsntags` field in one of the list-elements of the `versions` field in the [SAF](@) of the [scope](@).

:::info Editor's note
It has been suggested to provide [term ref](@) syntax that allows one to refer to a [terminological artifact](@) from a [terminology] that was 'current'/'latest'/... at a particular date. The [SAF](@) [versioning specifications](tev2-spec-saf#versions) already cater for `from` and `to` dates, but everything else needs to be worked out.
:::

### Alternative notation {#termref-alt}

It is convenient for authors to be able to use the '@`scopetag`' part of a [term ref](@) immediately behind the `show text` within the square brackets (`[` and `]`), and leave out the parentheses and the text in between if all the other items are omitted.

This is particularly useful in the vast majority of cases, where the default processing of `showtext` results in `id` and `trait` is absent. Examples of this are `[definition](@)`, or `[term ref](@)`.

The usefulness becomes even greater as the [TRRT](@) also implements more sophisticated ways to derive a `id` from a `show text`, e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).

:::info Editor's note
This alternative notation will assume that the `showtext` part of a [term ref](@) won't contain the `@` character. However, it is likely that some authors will want to use an email address as the `showtext` part of a *regular* link, e.g. as in `[rieks.joosten@tno.nl](mailto:rieks.joosten@tno.nl)`. However, since [scopetags](@) should not contain `.`-characters, `[rieks.joosten@tno.nl]` does not qualify as a `showtext` in our syntax. Authors should [use angle brackets to link to email addresses](https://www.markdownguide.org/basic-syntax/#urls-and-email-addresses), as in `<rieks.joosten@tno.nl>`.
:::

This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:

| Alternative syntax | Equivalent regular syntax |
| :----------------: | :-----------------------: |
| \[`show text`@\] | \[`show text`\](@) |
| \[`show text`@`scopetag`\] | \[`show text`\](`showtext`@`scopetag`) |
| \[`show text`@`scopetag`:`vsntag`\](`id`#`trait`) | \[`show text`\](`id`#`trait`@`scopetag`:`vsntag`) |

In the last row of the above table, `id` and `#trait` are optional. Thus, `[definition@]()` is equivalent with `[definition](@)` and with `[definition](@)`.
