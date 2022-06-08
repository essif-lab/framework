---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: issuer
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: issuer
formphrases: issuer{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Issuer # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "the capability to construct [credentials](@) from data objects, according to the content of its [principal](@)'s [issuer](@)-Policy (specifically regarding the way in which the [credential](@) is to be digitally signed), and pass it to the [wallet](@)-component of its [principal](@) allowing it to be issued."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Issuer"
displayed_sidebar: essifLabSideBar
hoverText: "Issuer (functional component): the capability to construct Credentials from data objects, according to the content of its Principal's Issuer-Policy (specifically regarding the way in which the Credential is to be digitally signed), and pass it to the Wallet-component of its Principal allowing it to be issued."
---

:::info Editor's note
In other SSI contexts, this term has a different meaning. We intend to rework the framework in such a way that we can use this term in various ways (e.g. as a [party](@), a [role name](@), or an [actor](@) that performs the [role](@) associated with the [role name](@)
:::

### Short Description
An **issuer** is an (architectural) function (a functional component in the [eSSIF-Lab functional architecture](../essifLab-fw-func-arch)) that structures sets of (related) statements/claims (e.g. as produced by the [Transaction Data Discloser](@)) in a package, adds metadata which includes e.g. a timestamp at which this was done, ensures that it is digitally signed on behalf of its [owner](@) (so that third [parties](@) can prove its provenance and integrity). Another function of the issuer is to handle revocation (and (un)suspension) of credentials that it has issued. For such tasks, it relies on functions that are made available by the SSI Protocols and Crypto Layer.

### Purpose
The purpose of the Issuer function is.

### Criteria
A **Issuer** is a component in the [eSSIF-Lab functional architecture](../essifLab-fw-func-arch) whose function is to ... (tbd).

### Functionality

The purpose of the Issuer component is to issue 'credentials', i.e. digital constructs that contain

-   sets of (related) statements or claims (e.g. as produced by the Transaction Data Discloser)
-   metadata (e.g. type of credential, date of issuing and expiration, endpoints, e.g. for revocation checking, credential definition, credential advertisements, credential enforcement policy, etc.)
-   proofs (e.g. a digital signature by which third [parties](@) can prove its provenance and integrity.

Another purpose that an Issuer might serve is to provide a means that allows any other Agent that somehow has obtained a copy or presentation of a credential, to verify whether or not the data therein is conformant to the business administration of its Principal. We will use the term 'revocation service' to refer to such means. Whether or not an Issuer provides such a service, and what kind of revocation service is provided (e.g. a revocation list, an online revocation status protocol, etc.), is a decision that its Principal should make, and specify in the Issuer Policies/Preferences.

An Issuer component may issue credentials in various formats, e.g. as a Verifiable Credential (VC), an Attribute-Based Credential (ABC), an OpenID Connect/JWT token, etc. The issuing [party](@) must specify credential-types in such a way that if the same credential is issued in different formats, it is possible for an arbitrary [verifier](@) to determine whether or not two credentials that have different formats, are in fact the same. One way of doing this is that the Issuer generates an identifier for every credential that it constructs (before expressing it in a specific format).

After the issuer has created a credential (in one or more formats), it checks the wallet to see if it contains a credential of the same type for the same [subject](@). If (one or more formats) are there, and their contents are the same as the newly created credential, the existing ones are revoked, deleted and/or archived/tombstoned.<sup>[Issuer.1]</sup> Then, the newly created credential is added to the wallet (in one or more formats). Thus, at any point in time, the wallet will contain an actual set of all credentials that have been issued.<sup>[Issuer.2]</sup>

-----

[Issuer.1] Tombstoning is a mechanism that is used e.g. in (distributed) ledgers that do not allow for actual deletion, such as blockchains, by marking entries in the ledger as 'being deleted' (i.e. adding a 'tombstone' to such entries).

[Issuer.2] This allows e.g. individuals, that have an Issuer component in their SSI app, to issue self-signed credentials and provide them to verifiers that request them as usual for non-self-signed credentials.
