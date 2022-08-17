---
id: tev2-profile-templates
sidebar_label: Profile Templates
hide_table_of_contents: true
scopetag: tev2
date: 20220816
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# TEv2 - Profile Templates

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/><br/><br/>

We use a generic pattern for the profile-based transformation of texts from one form into another. The idea is
- to specify a profile, i.e. a  set of so-called 'moustache'-variables;
- to create various text interpreters, each of which can read and process a particular kind of file, and populate the 'moustache'-variables;
- to create various text transformers, each of which can write a new file based on the contents of the input file and the value of the variables.

This pattern allows us, e.g.
- to write various text interpreters for ingestable files, and have one text transformer make sure they are all converted into a valid [curated text](@).
- to write various text transformers that produce different flavours of [HRGs](@) from an existing [MRG](@).
- to produce code snippets that can be used in CI/CD-streets for all sorts of conversions that may be needed as [communities](@) seek to produce rendered artifacts (e.g. static websites, PDFs, etc.)

## Ingestion Profile {#ingestion-profile}

This ingestion profile specifies a set of 'moustache'-variables the contents of the header for [curated texts](@). Any tool that wants to ingest some text, MUST provide a value for each of the required 'moustache'-variables, and SHOULD provide a value for each of the others, insofar that is appropriate or possible. Then, a generic ingestion tool can be called that takes the file, adds a header, and puts it in the [curatedir](@) of the scope.

| fieldname         | moustache            | Req'd? | Default  | Description |
| ----------------- | -------------------- | :----: | :------: | :---------- |
| `term`            | {{`term`}}             | Y  |            | word/phrase that represents a concept. |
| `termType`        | {{`termType`}}         | n  | `concept`  | kind of concept (e.g. `concept` (default), or `mental model`). |
| `isa`             | {{`isa`}}              | n  |            | concept of which this is a specialization. |
| `glossaryText`    | {{`glossaryText`}}     | Y  |            | text that summarizes the meaning of the term. |
| `synonyms`        | {{`synonymsList`}}     | n  |            | other words/phrases that mean the same. |
| `groupTags`       | {{`groupTagsList`}}    | n  |            | comma-separated list of tags/keywords to which the term belongs. |
| `formPhrases`     | {{`formPhrasesList`}}  | n  |            | comma-separated list of [formPhrases](https://essif-lab.github.io/framework/docs/tev2/spec-syntax/form-phrase-syntax) |
| `status`          | {{`status`}}           | n  | `proposed` | status/phase in the lifecycle of the term. |
| `created`         | {{`created`}}          | n  | today      | date when the term was first conceived/documented. |
| `updated`         | {{`updated`}}          | n  | today      | date when the term was last updated. |
| `contributors`    | {{`ContributorsList`}} | n  |            | comma-separated list of texts, each of which somehow represents a contributor. |
| `attribution`     | {{`attribution`}}      | n  |            | text that credits the original creation of the texts in the document. |
| `originalLicense` | {{`originalLicense`}}  | n  |            | reference to the license of the work from which the texts were derived. |

## Transformation profile {#transformation-profile}

:::info Editor's note
Content for this section is needed.
:::