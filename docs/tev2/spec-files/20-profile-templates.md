---
id: profile-templates
sidebar_label: Profile Templates
hide_table_of_contents: true
scopetag: tev2
date: 20220816
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Profile Templates

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

This ingestion profile specifies the set of 'moustache'-variables that [interpreters](@) for [ingestible content](@) is expected to  populate, and pass on to the [transformer](@) that will create a copy of that [ingestible content](@) and transform it into a (syntactically) correct [curated text](@). There is a [template](docs/tev2/spec-files/ingestion.profile) file that can be used.

:::info Editor's note
The [transformer](@) that outputs a [curated text](@) still needs to be specified. Specifically, the specification should document what needs to be done in case a [curated text](@) exists whose `term` field matches the `term` field of the newly ingested file. Answers should be given for questions like:
- is the entire front matter going to be constructed from scratch, or is the front matter of the existing [curated text](@) going to be reused, and if so:
- what if a field is specified with a value that differs from the field in the existing [curated text](@) - this has to be answered for each field individually.
- etc.
:::

This template allows [interpreters](@) for [ingestible content](@) to be created, e.g., for ingesting wiki-pages, regular markdown files, etc.

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Moustache`** specifies the name of the variable, in so-called [moustache](https://mustache.github.io/mustache.5.html) format
3. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
4/ **`Default`** specifies the value that the interpreter must use as a default value for the variable in case the interpreted text does not specify a value. If no default is specified, the default value is "empty" or "void".
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Name              | Moustache            | Req'd? | Default  | Description |
| :---------------- | :------------------- | :----: | :------: | :---------- |
| `term`            | {{`term`}}             | Y  |            | word/phrase that represents a concept. |
| `termType`        | {{`termType`}}         | n  | `concept`  | kind of concept (e.g. `concept` (default), or `mental model`). |
| `isa`             | {{`isa`}}              | n  |            | knowledge artifact of which this is a specialization. |
| `glossaryText`    | {{`glossaryText`}}     | Y  |            | text that summarizes the meaning of the term. |
| `synonyms`        | {{`synonymsList`}}     | n  |            | other words/phrases that mean the same. |
| `grouptags`       | {{`grouptagsList`}}    | n  |            | comma-separated list of tags/keywords to which the term belongs. |
| `formPhrases`     | {{`formPhrasesList`}}  | n  |            | comma-separated list of [formPhrases](https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/spec-syntax/form-phrase-syntax) |
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