---
id: tev2-struct-ctext
title: TEv2 - Structure of Curated Texts
sidebar_label: Curated Text
scopeid: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

This document specifies the requirements that a file has to satisfy for it to be processed by Terminology Engine v2 (TEv2). We use the term
- **[curated file]** to refer to these files, and
- **[curated text]** to refer to the contents of such files.

[curated file] are expected to live in a github repository, in directories as specified in the [directory structure spec](tev2-struct-directory). This specification is written such that (compliant) [curated files|curated file] will be processeable by [Docusaurus v2](https://docusaurus.io/docs), which basically means that the repo can be set up as a website that has facilities for hosting its own [curated] [terminology].

A [curated text] consists of two parts: a **[header]**, and a **[body]**. The [header] is a set of key-value pairs that contain meta data about the [curated text] and/or data that could also have been part of the [body], but is so small that it doesn't warrant to have a dedicated section for it.

## The Header of a Curated Text.

The ([yaml](https://yaml.org/spec/1.2.2/)) header starts at the top of the [curated text] with three dashes ("`---`") to signal it is followed by directives. This is followed by a collection of key-value mappings. The end of the header is again three dashes ("`---`") to signal the change back to document content (the [body]). Here is an example:

~~~ yaml
---
id: <idtext>
title: <Title Text>
scopeid: <scopeid>
type: <type>
termid: <typeid>
status: <stage>
hoverText: "<hovertext>"
glossaryText: "<glossarytext>"
date: yyyymmdd
vsn: <major#>.<minor#>.<maintenance#>
---

The/this text after the three dashes constitutes the [body] of the [curated text].
~~~

Key-value pairs consist of a sequence of `<key>`, `:`, `<value>` on a single line. Sequence elements may be separated by whitespace. Keys consist of characters, digits, underscore or hyphen (regex: `[\w\d-]+`). Values consist of all text behind the `:` separator, which is stripped of leading and trailing spaces, and then (if present) also of a leading and trailing `"` (double quote) character (so that double quotes in the middle of the text do not need to be escaped, and providing authors with the possibility to specify a string that starts and/or ends with whitespace and or double quotes as a value).

The following regex finds `<key>`-`<value>` pairs in a header line: `^(?<key>[\w\d-]+)\s*:\s*("?)(?<value>.*?)(\2)\s*$`

Keys can be


## The Payload of a Curated Text.
