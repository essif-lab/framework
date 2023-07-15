---
# TEv2 Curated Text Header
# Documented at: https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/tev2-profile-templates#ingestion-profile
term: {{term}} # (required) word/phrase that represents a concept.
termType: {{termType}} # (optional) kind of concept (e.g. `concept` (default), or `mental model`).
isa: {{isa}} # (optional) concept of which this is a specialization.
glossaryTerm:
glossaryText: {{glossaryText}} # (required) text that summarizes the meaning of the term.
synonyms: {{commaSeparatedSynonyms}} # (optional) other words/phrases that mean the same.
groupTags: {{commaSeparatedKeywords}} # (optional) list of tags/keywords to which the term belongs.
formPhrases: {{commaSeparatedFormPhrases}} # (optional) list of formPhrases (see https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/spec-syntax/form-phrase-syntax)
# Curation status
status: {{status}} # (optional) status/phase in the lifecycle of the term. Defaults to `proposed`.
created: {{created}} # (optional) date when the term was first conceived/documented. Defaults to today's date.
updated: {{updated}} # (optional) date when the term was last updated. Defaults to today's date.
# Origins/Acknowledgements
contributors: {{commaSeparatedContributors}} # (optional) list of texts, each of which somehow represents a contributor.
attribution: {{attribution}} # (optional) text that credits the original creation of the texts in the document.
originalLicense: {{originalLicense}} # (optional) reference to the license of the work from which the texts were derived.
---
