---
id: credential
title: "Credential"
scopeid: essifLab
type: concept
typeid: credential
stage: draft
hoverText: "Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party."
glossaryText: "data, representing a set of %%assertions^assertion%% (claims, statements), authored and signed by, or on behalf of, a specific %%party^party%%."
---

### Short Description
A **credential** is a set of (related) %%assertions|assertion%% (also referred to as claims, or statements), to which metadata is added (e.g. date of issuing), and a number of proofs, which typically include a  proof of provenance (i.e. proof that it was created on behalf of a specific %%party|party%%), and a proof of integrity (i.e. proof that the data hasn't changed since it was issued).

### Examples
In physical credentials, such as drivers licenses and passports, proofs of integrity usually apply to the physical document itself. They come in a variety of forms, such as the structure of the paper, holograms, watermarks, or (embedded) chips. The proof of provenance usually consists of the form-format of the credential and %%assertions|assertion%% about the document issuer.

In digital credentials, such as (digital) certificates or %%verifiable credentials|verifiable-credential%%, the basic proofs (of provenance and integrity) usually consist of a digital signature of some kind. It therefor only 'works' for as long as the associated private/secret key actually remains a secret of the issuing %%party|party%%.

Credentials whose %%assertions|assertion%% refer to some %%entity|entity%%, e.g. a person, an organization, an animal, a shipment, etc. In such cases, it must be possible for arbitrary %%parties|party%% to identify that %%entity|entity%%, and/or verify an %%assertion|assertion%% by some other %%party|party%% that identifies that %%entity|entity%%. To this end, credentials may contain %%assertions|assertion%% about characteristics of that %%entity|entity%%, the idea being that if a %%party|party%% establishes that some %%entity|entity%% has (a sufficient number of) these characteristics, that %%entity|entity%% is the one bound to the credential. Attributes typically include one or more names, various dates, a photograph, etc. Other attributes might include biometrics, RFID-codes, bar-codes, etc.

### Purpose
A **credential** serves to provide assurances regarding the provenance and integrity of data as it is being transferred between %%parties|party%%. Specializations of the generic credential concept may be created for the purpose of providing additional assurances.

### Criteria
A **credential** is the composition of
- a non-empty set of arbitrary statements (claims, %%assertions|assertion%%) that originate from a single %%party|party%%;
- a set of metadata (data about the credential itself);
- a set of proofs, which includes at least proofs of provenance and integrity.

### Notes
- The term 'subject' is often used in conjunction with a credential, as in 'the subject of the credential'. This phrase is ambiguous. It may refer to the %%party|party%% (or %%actor|actor%%) to which the credential was issued. It may also be used to indicate the %%entity|entity%% that every claim is made about, which needs not be the same. 
- Anyone can create credentials containing arbitrary statements about anyone or anything. The mere fact that a statement comes in the form of a credential (i.e. with a signature) doesn't imply that it is true.
- The signature on a credential may have other meanings as well. For example, a %%party|party%% may choose to only sign the credential data if it is convinced of the truth of the statements, in which case the credential 'payload' can be seen as an excerpt of the %%knowledge|knowledge%% of that %%party|party%%. %%Parties|party%% that sign credential data need to advertise what (other) meaning(s) their signature has, so that other %%parties|party%% may decide whether or not they want to use that data for specific purposes.
### Related Concepts
- %%verifiable credential|verifiable-credential%%
- %%verified data|verified-data%%
- %%validated data|validated-data%%

### References:
- W3C VC [definition of 'credential'](https://www.w3.org/TR/vc-data-model/#dfn-credential)
- [W3C Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/)

