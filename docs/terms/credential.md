---
id: credential
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termType: concept
term: credential
formPhrases: credential{ss}, verifiable-credential{ss}, attribute-based-credential{ss}
status: draft
grouptags:
hoverText: "Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party."
glossaryTerm: "Credential"
glossaryText: "data, representing a set of [assertion](@) (claims, statements), authored and signed by, or on behalf of, a specific [party](@)."
date: 20210601
---

# Credential


### Short Description

A **credential** is a set of (related) [assertions](@) (also referred to as claims, or statements), to which metadata is added (e.g. date of issuing), and a number of proofs, which typically include a  proof of provenance (i.e. proof that it was created on behalf of a specific [party](@)), and a proof of integrity (i.e. proof that the data hasn't changed since it was issued).

### Examples

In physical credentials, such as drivers licenses and passports, proofs of integrity usually apply to the physical document itself. They come in a variety of forms, such as the structure of the paper, holograms, watermarks, or (embedded) chips. The proof of provenance usually consists of the form-format of the credential and [assertions](@) about the document issuer.

In digital credentials, such as (digital) certificates or [verifiable credentials](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials), the basic proofs (of provenance and integrity) usually consist of a digital signature of some kind. It therefor only 'works' for as long as the associated private/secret key actually remains a secret of the issuing [party](@).

Credentials whose [assertions](@) refer to some [entity](@), e.g. a person, an organization, an animal, a shipment, etc. In such cases, it must be possible for arbitrary [parties](@) to identify that [entity](@), and/or [verify](@) an [assertion](@) by some other [party](@) that identifies that [entity](@). To this end, credentials may contain [assertions](@) about characteristics of that [entity](@), the idea being that if a [party](@) establishes that some [entity](@) has (a sufficient number of) these characteristics, that [entity](@) is the one bound to the credential. Attributes typically include one or more names, various dates, a photograph, etc. Other attributes might include biometrics, RFID-codes, bar-codes, etc.

### Purpose

A **credential** serves to provide assurances regarding the provenance and integrity of data as it is being transferred between [parties](@). Specializations of the generic credential concept may be created for the purpose of providing additional assurances.

### Criteria

A **credential** is the composition of
- a non-empty set of arbitrary statements (claims, [assertions](@)) that originate from a single [party](@);
- a set of metadata (data about the credential itself);
- a set of proofs, which includes at least proofs of provenance and integrity.

### Notes

- The term '[subject](@)' is often used in conjunction with a credential, as in 'the [subject](@) of the credential'. This phrase is ambiguous. It may refer to the [party](@) (or [actor](@)) to which the credential was issued. It may also be used to indicate the [entity](@) that every claim is made about, which needs not be the same.
- Anyone can create credentials containing arbitrary statements about anyone or anything. The mere fact that a statement comes in the form of a credential (i.e. with a signature) doesn't imply that it is true.
- The signature on a credential may have other meanings as well. For example, a [party](@) may choose to only sign the credential data if it is convinced of the truth of the statements, in which case the credential 'payload' can be seen as an excerpt of the [knowledge](@) of that [party](@). [Parties](@) that sign credential data need to advertise what (other) meaning(s) their signature has, so that other [parties](@) may decide whether or not they want to use that data for specific purposes.
### Related Concepts

- [verifiable credentials](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials)

### References:

- W3C VC [definition of 'credential'](https://www.w3.org/TR/vc-data-model/#dfn-credential)
- [W3C Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/)
