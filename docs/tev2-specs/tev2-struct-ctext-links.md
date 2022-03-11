---
id: tev2-struct-ctext-links
title: TEv2 - (Hyper)linking in a Curated Text
sidebar_label: (Hyper)links
scopeid: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

This document specifies how (hyper)linking works in [curated texts], i.e. the syntax of [hyperlink] as we use them in such texts, and the artifact that is hyperlinked to using such syntax.

The hyperlink-syntax is valid (i.e.: will be processed) when it appears:
- in the `<value>` of a key-value pair in the [header] of a [curated text], but only for a limited set of `<key>`s. The  `<key>`s whose `<value>` may contain hyperlinks will say so in their [documentation](tev2-struct-ctext-header).
- practically anywhere in the [body] of a [curated text].

:::info Editor's note
The text here below may be a reviewed/revised version of of [docs/hyperlinks.md](https://github.com/trustoverip/concepts-and-terminology-wg/edit/master/docs/hyperlinks.md) in the [Trust over IP CTWG repo](https://github.com/trustoverip/concepts-and-terminology-wg)
:::
