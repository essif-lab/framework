---
id: tev2-struct-directory
title: TEv2 - Directory Structure for Curated Files
sidebar_label: Directory structure
scopeid: tev2
date: 20220303
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction
:::

This document specifies the directory structure of a github repository that contains, apart from data (code, documentation, etc.) as usual, also contains [curated file] (that contain descriptions of terminological artifacts such as [terms] or [patterns]), and that can be used for processing by Terminology Engine v2 (TEv2). It is assumed that the github repo may contain a [Docusaurus v2](https://docusaurus.io/docs) installation for the purpose of creating a static website from the [curated file].

:::info Editor's note
we use YAML for administrative and similar files (e.g. glossaries). If appropriate, other formats may be used instead (or in addition), e.g. JSON.
:::

The github repository MUST be owned by a [terms community], and may contain multiple [scopes] that are all [curated] by that [terms community].

The root of repo contains the directory `tev2`, which contains the following files:
- `administration.yaml`, which contains the [administration](tev2-administration) that the TEv2 (and other tools may) need for processing [curated files|curated file]. Any directory within the repo serves as a [scope] when it is registered as such in the `administration.yaml` of that repo. There, it is assigned a [tag] that serves to identify the [scope], e.g. in [term references|term-reference].
- for every [tag] `<tag>` in the administration file, there is a `<tag>-glossary.html` file that contains the [glossary] that renders the [terminology] of the associated [scope]. A glossary-file must be able to serve as the authoritative destination for hyperlinks that refer to a term defined in its [scope]. As an example, `https::<repo-uri>/tev2/<tag>-glossary<version>.html#<term>` would result in a browser returning the [definition] of the [term] `<term>` as defined within version `<version>` of the [scope] that is identified by `<tag>` in the github repo at `<repo-uri>`.
Example: `https://trustoverip.github.io/essiflab/tev2/terminology-glossary-latest.html#terminology` results in the definition of the [term] `terminology` as defined in the [scope] `terminology` that is curated by the [terms community] that owns the repo `trustoverip.github.io/essiflab`.
- for every [tag] `<tag>` in the administration file, there is a `<tag>-glossary.yaml` file that contains all (meta) data associated with the terms in the [scope] identified by `<tag>`. This enables for easy writing of tools that work across scopes.

The structure of a directory that contains a [scope] is free, except for the following:
- the file `tev2-admin.yaml` contains a [specification](tev2-spec-scope-admin) of every [term] that is part of the [scope], but refers to a [definition] in another [scope] (and possibly other stuff).
- the directory `terms` is reserved for [curated files|curated file] that contain [definitions] of [terms], and associated meta-data;
- the directory `patterns` is reserved for [curated files|curated file] that contain descriptions of [patterns] (or: [mental models|pattern]), and associated meta-data;
