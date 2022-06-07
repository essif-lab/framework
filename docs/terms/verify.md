---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: verify
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: verify
formphrases: verif{yies}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-08-02
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: Verify # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "The act, by or on behalf of a [party](@), of determining whether that data is authentic (i.e. originates from the [party](@) that authored it), timely (i.e. has not expired), and conforms to other specifications that apply to its structure."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Verify"
displayed_sidebar: essifLabSideBar
hoverText: "Verify/verification of data: the act, by or on behalf of a Party, of determining whether that data is authentic (i.e. originates from the Party that authored it), timely (i.e. has not expired), and conforms to other specifications that apply to its structure."
---

### Short Description
**Verification** (of data) is the act, by or on behalf of a [party](@), of determining whether that data is authentic (i.e. originates from the [party](@) that authored it), timely (i.e. has not expired), and conforms to other specifications that apply to its structure. It does NOT imply that whatever the data represents is actually true, accurate, real or justified (as per the definitions of [Merriam-Webster](https://www.merriam-webster.com/dictionary/verify) or [Lexico (Oxford dictionary)](https://www.merriam-webster.com/dictionary/verify)).

This definition generalizes the definition by [W3C VC](https://www.w3.org/TR/vc-data-model/#dfn-verify): "The evaluation of whether a [verifiable credential](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials) or [verifiable presentation](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-presentations) is an authentic and timely statement of the [issuer](https://www.w3.org/TR/vc-data-model/#dfn-issuers) or presenter, respectively. This includes checking that: the credential (or presentation) conforms to the specification; the proof method is satisfied; and, if present, the status check succeeds."

Also note that verification is distinct from [validation](@), as verification is a test on the structure of data, whereas [validation](@) tests the validity of such data for a particular (set of) purpose(s), which also has to do with meaning. Specifically, data that fails particular verification tests can still be valid for some purpose. For example, a passport that has recently expired may still be valid to identify its bearer. The converse may also be true: data that satisfies timeliness tests, e.g. hasn't expired yet, may still not be valid for specific purposes. For example, in order to apply for a [Chinese (tourist) visa](http://www.china-embassy.org/eng/hzqz/zgqz/t84246.htm), the passport must not expire within 6 months of arrival in China.
