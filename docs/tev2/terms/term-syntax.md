---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: term-syntax
# TEv2: generic front-matter for curated texts
scope: tev2
termname: term-syntax
termtype: concept
termattrs:
grouptags: syntax
synonyms:
formphrases: term-syntaxes
status: proposed
created: 2022-08-17
updated: 2022-08-17
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
glossaryText: "the criterion that specifies which texts can serve as a [term](@), which is that the text must match with (PCRE) regex [`[A-Za-z0-9\\s_]+`](https://www.debuggex.com/r/YQppbqxps5jI0t0P)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Term Syntax"
hoverText: "Every Term must satisfy the (PCRE) regex `[A-Za-z0-9\\s_]+`"
# sidebar_label:
# hide_table_of_contents: true
---

<!--
            **IF THE PCRE REGEX FOR THE TERM SYNTAX MUST BE CHANGED
                  MAKE SURE YOU ALSO UPDATE THE DEBUGGEX URL**
-->

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
**Term Syntax** is is the set of rules that defines the combinations of symbols (characters, texts) that are considered to be correctly structured terms (definition adapted from [Wikipedia](https://en.wikipedia.org/wiki/Syntax_(programming_languages))).

### Purpose
The Term Syntax specifications serve to instruct (and help) [authors](@) how to correctly write (the `term` field part of) a [Term Ref](@). Also, it enables developers to create tools, e.g. the [TRRT](@), which need to be able to detect and convert this term-syntax - the exact nature of which would depend on the actual tool.

### Criterion
The Term Syntax used within [TEv2] is the PCRE regex [`[A-Za-z0-9\s_]+`](https://www.debuggex.com/r/YQppbqxps5jI0t0P).