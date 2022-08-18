---
id: form-phrase-syntax
sidebar_label: Form Phrases
hide_table_of_contents: true
scopetag: tev2
date: 20220808
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Form Phrases - Syntax

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

This document specifies the syntax of [form phrases](@), i.e. texts that are
- specified in the header field `formphrases` in [curated texts](@);
- conformant to the (PCRE) regex `(?:\[\s*([a-z0-9_-{}]+)\s*(?:,\s*([a-z0-9_-{}]+))*\s*\])?` (see [Debuggex](https://www.debuggex.com/r/C0IZ2ZN-qnQzGB2B) for a visualization).
- present in [MRG entries](@);
- [used to convert](/docs/tev2/spec-tools/trrt#id) the `show text` parts of [term refs](@) into `term`s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).

Note that the [syntax of `formphrases`](/docs/tev2/spec-syntax/form-phrase-syntax) enables the use use of 'macro's, i.e. shorthand syntax that represent regexes that allow for extended matching.

A formphrase 'macro' is a set of characters between braces `{` and `}` that are shorthand for a matcher regex, and can be used by authors to conventiently specify a set of phrases that, when matched, would refer to the [curated text](@) in which they are specified.

<details>
   <summary>Example and explanation of how it works</summary>

Suppose we have a [curated text](@) for the term `actor`, and in its front matter, we specify:

~~~ yaml
formPhrases: actor{ss}
~~~

The part `{ss}` is a macro, that suppose it is associated with the regex `(?:'?s|\(s\))?`.

When the [trrt](@) converts a [ref text](@), one of the things it needs to do is to [convert a so-called `show-text` into a `term`](/docs/tev2/spec-tools/trrt#term) that exists in some [curated text](@). If the `show-text` does not match the `term` of any of the [curated texts](@), the [trrt](@) will try to match it against every form phrase in every [curated text](@), including the formphrase `actor{ss}`.

This is done as follows:
1. all macros in the formphrase are replaced with their respective regexes, thereby transforming the formphrase into a regex itself;
2. a regex engine is called that determines whether or not `show-text` satisfies that regex. If (and only if) it does, there is a match.

</details>

An `term` is said to match such an element if and only if the regex that consists of the list element (with the macro replaced with the regex that it is shorthand for) matches that `term`.

:::info Editor's note
As the [trrt](@) has not yet been fully specified, nor implemented, the table below must currently be seen as a set of macro's that we intend to implement, but may not yet be there. The workaround is to replace a formphrase that is an element in the list of formphrases in a [curated text](@) with the set of words that it stands for. If you maintain [curated texts](@) with a good editor, e.g. VSCode, that should not be an issue as these macros are easily found and replaced by their expansions.
:::

| macro    |           regex                       |     example     | texts that the example matches |
| -------- | :-----------------------------------: | :-------------: | :----------------------------- |
| `{ss}`   | <code>('?s\|(s\))?</code>             | `actor{ss}`     | matches: "actor", "actors", "actor's", and "actor(s)" |
| `{yies}` | <code>(y\|y's\|ies)</code>            | `part{yies}`    | matches: "party", "party's", and "parties" |
| `{ying}` | <code>(y\|ier\|ying\|ies\|ied)</code> | `identif{ying}` | matches: "identify", "identifier", "identifying", "identifies", and "identified" |
