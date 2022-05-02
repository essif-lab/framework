---
id: tev2-struct-ctext-term-refs
title: TEv2 - Using terms, and referencing their definitions in a Curated Text
sidebar_label: Term references
scopetag: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

This document specifies how you can use a [term@] in a [curated text@] while at the same time referring to the [definition@] that defines its meaning. i.e. the syntax that you need to use in such texts. The way in which the [term@] (and its [definition@]) may be rendered depends on the artifact that is being generated. For example, when a [term@] is rendered in a web-site, it may be enhanced, showing a popup that contains its [definition@] when a user hovers the mouse over it, and that hyperlinks to the page in the website that explains the term in more detail when the user clicks on it. When a [term@] is rendered in a PDF file, its definition may appear as an entry in a [glossary@] that is added somewhere in the PDF. It all depends on the rendering tools that are being used, and this is out of scope for this specification.

## Terms and Scopes

To understand what we are doing here, the reader is expected to be familiar with the (formalized model of) the [terminology and terms-community pattern](/docs/terms/pattern-terminology#formalized-model). A person that acts as a [curator@] for a specific [terms community@] may have various [scopes@].
