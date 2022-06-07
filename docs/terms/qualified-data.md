---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: qualified-data
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: qualified-data
formphrases: qualified-data{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: Qualified # Text that is the name of the concept in (human readable) texts.
fullterm: "Qualified Data"
shorterm:
synonyms:
glossaryText: "[data](@) that comes with assurances, at least regarding its provenance and integrity (immutability), that make this data valid to be used for specific purposes of individual [parties](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Qualified Data"
displayed_sidebar: essifLabSideBar
hoverText: "Qualified Data: data that comes with assurances, at least regarding its provenance and integrity (immutability), that make this data valid to be used for specific purposes of individual Parties."
---

### Short Description
**Qualified data** is [data](@) that comes with assurances, at least regarding its provenance and integrity (immutability), that make this data valid to be used for specific purposes of individual [parties](@).

Qualified data has two perspectives:
1. The usage (or [validation](@)) perspective. Whether or not data qualifies for use depends on the [party](@) using it, and also the purpose (context) for which it is used. From this perspective, qualified data *is* data that if it were validated, would qualify as actually being [valid](@).
2. The provisioning perspective. Strictly speaking, [parties](@) cannot provision qualified data as they have no clue what it takes for that data to be [valid](@). A party that creates qualified data would not not all specific purposes for which the data is actually going to be used.

For verifiers

Qualified data comes in two flavors:
- as data that satisfies the requirements of the [party](@) that will be using it, e.g. for decision making. Since parties are autonomous (self-sovereign), such requirements must be expected to be subjective: every party will have its

### Purpose
The ability to distinguish between (non)qualified-data is relevant in many situations, including:
- electronic communication: the qualified-data

### Criterion
The **qualified-data** (of an [actor](@)) is the [party](@) for whom the actor is an [agent](@), i.e. on whose behalf the actor is (in the process of) executing some [action](@).


### Backgrounds

Qualified data can be looked at from different perspectives: the 'issuer perspective', the 'validator perspective' and the 'holder perspective'.

#### Issuer perspective

In its [issuer](@) role, a [party](@) is interested in creating value from sharing the [knowledge](@) it has about (other) [entities](@). Various business models exist for different organizations. For example, a government may decide to create credentials with citizen data (not just name and address, but also marital status and children, data concerning taxes, various permits, [ownerships](@), [guardianships](@), [mandates](@), [delegates](@), etc.). This may result in savings on bureaucracy that outweigh the costs of implementing credential issuing.

In order to reap the benefits expected by the business model, issuers should provide data that others will actually use, and do so with proofs of provenance, integrity and perhaps other assurances. This means that the issuer must communicate (advertise) the existence of such data in such a way that others can not only find it, but also decide whether or not that data is beneficial (for them) to use. An 'advertisement' not only needs to say 'what' the data is about, but also what its characteristics are (e.g. that this issued data is guaranteed to be 1-1 equal to the registrations of the issuer, unless the credential in which it is contained has expired or has been revoked), the liability (if any) that the issuer is prepared to take, conditions of use, etc.

From the issuer perspective, it isn't all that important what the 'envelope' is in which the data is conveyed, as long as the assurances for provenance and integrity (and perhaps some others) for the data are in place. Verifiable credentials are good, but so are X.509 attribute certificates, Attribute-Based Credentials ([ABCs](https://www.springer.com/gp/book/9783319144382)), etc. Parties may want the ability to specify which of these (not) to use, but that's a secondary concern.

In short, as an issuer, a party is interested in creating value from sharing knowledge about other entities. A party's “issuer” [governance](@) process is concerned with making (and continually reviewing and updating) decisions about e.g.:
- the kinds of qualified data it is willing to provide (what they consist of, what characteristics are to be ensured, liability to take, etc.;
- the kinds of credentials ('envelopes') it is willing to use for providing that data;
- under which conditions such credentials may be issued (e.g. only to a party that is mentioned in the qualified data);
- how all this is communicated: published, advertised and marketed (both in machine-readable and human readable form, for different purposes/audiences).

#### Validator perspective

In its role as a [validator](@), a [party](@) is seeking to create value by efficiently obtaining data that is valid for further processing for specific purposes. Such processing includes doing computations with the data, or using it as a value for a variable/placeholder in a rule that needs to be evaluated for the purpose of making some decision. One may think of this as that the party has various 'formulae' that it needs to be processed or evaluated for specific purposes, and doing so requires the 'variables' (fields) of these formulae to be assigned a value.

The validator perspective is about obtaining such data, determining whether or not evaluation of the formula would be valid if the data were assigned to specific variables ([validation](@)), and if so, assign the obtained data to such variables.

Obtaining data through the SSI infrastructure requires that the party first needs to track down which issuers exist and what kinds of credentials they issue, i.e. the kinds of data that they contain, and further characteristics. It is needed to create and maintain a mapping between (fields) from credentials from specific issuers and 'variables' in the formulae that it uses in its business processes. Such a mapping would also include 'validation criteria', i.e. formulae whose variables can be populated by the meta-data of credentials, such the expiration date, and that are used to decide whether or not data from a credential can serve as the value of a variable in the formula. We will refer to such mappings (and their validation criteria) as a 'validation policy'.

Machine-readable validation policies enable generic IT to collect data for populating a formula using the SSI infrastructure, with the guarantee that such data is valid for the purpose in which the formula is used. Human-readable validation policies enable the designated employees of the organization to do the same, using other kinds of infrastructure (e.g. Internet, phone, mail, …).

In short, as a [validator](@), a [party](@) creates value by obtaining data that is valid for processing in specific cases. A party's “validator” [governance](@) process is concerned with making (and continually reviewing and updating) qualified decisions about e.g.:
- the mapping between variables in formulae, and fields from credentials of specific issuers;
- validation criteria for each of these mappings;
- what [risks](@) it runs in case the claims made within the credential are not true, and what assurances may be called for in order to reduce such [risks](@) to an acceptable level

#### Holder perspective

In its role as a [holder](@), a [party](@) is seeking to create value by collecting and managing (qualified) data for later use, by itself, or by presenting it to others e.g. within the context of a [business transaction](@). The value comes mainly from the fact that handling such data is done electronically, using the SSI infrastructure, thereby avoiding most of the (costly, time consuming and annoying) problems that people face if they had to do this by hand (as explained earlier).

In the holder role, a party is predominantly concerned with how to respond to [presentation requests](@) that it receives from other parties that collect data (for populating a formula) and making qualified decisions. Such requests would state which fields of specific kinds of (possibly multiple) credentials are needed, and might also state the validation criteria. Collecting the requested (meta-)data, wrapping it into a presentation format and 'issuing' it to the requester suggests that the party is actually performing in an issuer role. Note that collecting and presenting data in the requested format does not mean that the data needs to be changed.

However, in this (holder) role a party may also want to know more about the party that it receives [presentation requests](@) from, e.g. who it is, whether it is registered as an enterprise with the national Chamber of Commerce, etc, and it may also need assurances. That would mean that it would simultaneously/intermittently also have to perform the verifier role.

In this sense, a holder seems to combine both issuer and verifier/validator perspectives. The holder takes the issuer mindset when presenting the asked qualified data, possibly from multiple sources. The verifier viewpoint is taken when a holder checks whether it trusts the validator enough to share the qualified data with.
