---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: validate
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: validate
formphrases: validate{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-08-02
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Validate # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "the act, by or on behalf of a [party](@), of determining whether or not that data is valid to be used for some specific purpose(s) of that [party](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Validate"
displayed_sidebar: essifLabSideBar
hoverText: "Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party."
---

### Short Description
**Validation** (of data) is the act, by or on behalf of a [party](@), of determining whether or not that data is valid to be used for some specific purpose(s) of that [party](@). This determination can only be made after it has been determined that data has the correct structure (syntax), and conforms to other specifications that apply to its structure ([verification](@)).

Data that has been validated is considered to be sufficiently true, accurate, real or justified (i.e.: 'verified' as defined by [Merriam-Webster](https://www.merriam-webster.com/dictionary/verify) or [Lexico (Oxford dictionary)](https://www.merriam-webster.com/dictionary/verify)) so that it can be used for the purpose(s) that it has been validated for.

This definition generalizes the definition of 'validation' as provided by [W3C VC](https://www.w3.org/TR/vc-data-model/#dfn-credential-validation): "The assurance that a [verifiable credential](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials) or a [verifiable presentation](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-presentations) meets the needs of a [verifier](https://www.w3.org/TR/vc-data-model/#dfn-verifier) and other dependent stakeholders." The W3C VC specification considers validating verifiable credentials or verifiable presentations outside of its scope.

Note that validation is distinct from [verification](@). [Verification](@) is a test on the structure of data, whereas validation tests the validity of such data for a particular (set of) purpose(s), which also has to do with meaning. Specifically, data that fails particular verification tests can still be valid for some purpose. For example, a passport that has recently expired may still be valid to identify its bearer. The converse may also be true: data that satisfies timeliness tests, e.g. hasn't expired yet, may still not be valid for specific purposes. For example, in order to apply for a [Chinese (tourist) visa](http://www.china-embassy.org/eng/hzqz/zgqz/t84246.htm), the passport must not expire within 6 months of arrival in China.
