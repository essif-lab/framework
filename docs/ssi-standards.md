---
id: ssi-standards
title: SSI Standards
date: 20210601
---

The purpose of this document is to provide an overview of standards activities for self-sovereign identity (SSI) and their relevance to eSSIF-Lab.

## 1.  Introduction

Self-sovereign identity (SSI) is work in progress, which includes the work on standards for SSI. Such standards include frameworks, schemas, data models, protocols, APIs, open-source code and more. The present document provides an overview on those standards and work-in-progress. Most pieces of text have been directly copied from the referenced websites.

## 2.  W3C CCG: Credentials Community Group

The [W3C Credentials Community Group](https://www.w3.org/community/credentials/) explores the creation, storage, presentation, verification, and user control of credentials. It focuses on a verifiable credential (a set of claims) created by an issuer about a subject—a person, group, or thing—and seek solutions inclusive of approaches such as: self-sovereign identity; presentation of proofs by the bearer; data minimization; and centralized, federated, and decentralized registry and identity systems. Its tasks include drafting and incubating Internet specifications for further standardization and prototyping and testing reference implementations.

W3C CCG has published a first version of [Verifiable Claims Data Model and Representations 1.0](https://www.w3.org/2017/05/vc-data-model/CGFR/2017-05-01/) in May 2017. That specification introduces verifiable claims as follows.

A self-sovereign architecture for verifiable claims is one where the holder of a verifiable claim is in complete control of their identifier, where their verifiable claims are stored, and how they are used. There is currently no widely used self-sovereign, privacy-enhancing standard for expressing and transacting verifiable claims (aka: credentials, attestations) via the Web.  This specification describes a data model for a digital [identity profile](https://www.w3.org/2017/05/vc-data-model/CGFR/2017-05-01/#dfn-identity-profile) and a collection of digital [entity credentials](https://www.w3.org/2017/05/vc-data-model/CGFR/2017-05-01/#dfn-entity-credential) that assert verifiable [claims](https://www.w3.org/2017/05/vc-data-model/CGFR/2017-05-01/#dfn-claim) about that [identity profile](https://www.w3.org/2017/05/vc-data-model/CGFR/2017-05-01/#dfn-identity-profile). It also describes how to express that data model in JSON, JSON-LD, and WebIDL.

## 3.  W3C DID: Decentralized Identifier

The [W3C DID Working Group](https://www.w3.org/2019/did-wg/) standardizes the DID URI scheme, the data model and syntax of DID Documents, which contain information related to DIDs that enable the aforementioned initial use cases, and the requirements for DID Method specifications.

W3C DID is working on [Decentralized Identifiers (DIDs) v1.0](https://www.w3.org/TR/did-core/). The June 2020 version of the working document introduces DIDs as follows.

<a>Decentralized identifiers</a> (DIDs) are a new type of identifier that enables verifiable, decentralized digital identity. A <a>DID</a> identifies any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) that the controller of the <a>DID</a> decides that it identifies. These new identifiers are designed to enable the controller of a <a>DID</a> to prove control over it and to be implemented independently of any centralized registry, identity provider, or certificate authority. <a>DID</a>s are URLs that associate a <a>DID subject</a> with a <a>DID document</a> allowing trustable interactions associated with that subject. Each <a>DID document</a> can express cryptographic material, verification methods, or <a>service endpoints</a>, which provide a set of mechanisms enabling a <a>DID controller</a> to prove control of the <a>DID</a>. <a>Service endpoints</a> enable trusted interactions associated with the <a>DID subject</a>. A <a>DID document</a> might contain semantics about the subject that it identifies. A <a>DID document</a> might contain the <a>DID
subject</a> itself (e.g. a data model).

## 4.  Hyperledger Indy: distributed ledger software

[Hyperledger Indy](https://www.hyperledger.org/use/hyperledger-indy) provides tools, libraries, and reusable components for providing digital identities rooted on blockchains or other distributed ledgers so that they are interoperable across administrative domains, applications, and any other silo. Indy is interoperable with other blockchains or can be used standalone powering the decentralization of identity. The Indy repository can be found [here](https://wiki.hyperledger.org/display/indy/Hyperledger+Indy).

## 5.  Hyperledger Aries: protocols for communication of VC and DID

[Hyperledger Aries](https://www.hyperledger.org/use/aries) provides a shared, reusable, interoperable tool kit designed for initiatives and solutions focused on creating, transmitting and storing digital verifiable credentials (VCs). It is infrastructure for blockchain-rooted, peer-to-peer interactions. The project consumes the cryptographic support provided by Hyperledger Ursa, to provide secure secret management and decentralized key management functionality.

Hyperledger Aries allows trusted online peer-to-peer interactions based on decentralized identities and verifiable credentials. Aries includes a protocol definition, tools, and reference implementations. The Aries protocol supports identities rooted in a variety of distributed ledgers or blockchains. This approach to identity is often called Self Sovereign Identity (SSI).

Key components of an [Aries solution](https://github.com/hyperledger/aries) are:

- [agents](https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0004-agents/README.md),
- [DID communications](https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0005-didcomm/README.md),
- [protocols](https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0003-protocols/README.md),
- and [key management](https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0051-dkms/README.md).

Moreover, Hyperledger Aries develops a set of Request for Comment (RFCs) that describe important topics standardize across the Aries ecosystem. There are 2 types of Aries RFCs:

- RFCs that describe individual features (in the [features](https://github.com/hyperledger/aries-rfcs/blob/master/features) folder)
- RFCs that explain concepts underpinning many features (in the [concepts](https://github.com/hyperledger/aries-rfcs/blob/master/concepts) folder)

RFCs are for developers *building on* Aries. They don't provide guidance on how Aries components implement features internally; individual Aries repos have design docs for that. Each Aries RFC includes an "implementations" section and all RFCs with a status greater than Proposed should have at least one listed implementation.


## 6.  Hyperledger Ursa: cryptographic library

[Hyperledger Ursa](https://www.hyperledger.org/use/ursa) is a shared cryptographic library, it enables implementations to avoid duplicating other cryptographic work and hopefully increase security in the process. The library is an opt-in repository (for Hyperledger and non Hyperledger projects) to place and use crypto. Hyperledger Ursa consists of sub-projects, which are cohesive implementations of cryptographic code or interfaces to cryptographic code. The Ursa repository can be found [here](https://github.com/hyperledger/ursa).


## 7.  DIF: Decentralized identity Foundation

[Decentralized Identity Foundation](https://identity.foundation/) (DIF) is an engineering-driven organization focused on developing the foundational elements necessary to establish an open ecosystem for decentralized identity and ensure interop between all participants.

DIF builds on W3C and Hyperledger work referenced above. Some of its work originates from Hyperledger Aries and has been moved to DIF for more effective management of IPR. DIF has among others the following working groups.

* [Identifiers and Discovery](https://identity.foundation/working-groups/identifiers-discovery.html): A key piece of the decentralized identity equation is how people, organizations, and devices can be identified and located without centralized systems of identifiers (e.g. email addresses). DIF members are actively working on protocols and implementations that enable creation, resolution, and discovery of decentralized identifiers and names across decentralized systems, like blockchains and distributed ledgers.
* [Storage and Compute](https://identity.foundation/working-groups/storage-compute.html): Secure, encrypted, privacy-preserving storage and computation of data is a critical component of decentralized identity systems. As with identifiers and names must be self-sovereign to the owning entity, a user's identity data must remain private, only accessible to the entities they allow. DIF members are actively developing specs and reference implementations for provider-agnostic, run-anywhere solutions that provides these features.
* [Authentication](https://identity.foundation/working-groups/authentication.html): Designing and implementing DID-based authentication specs, standards, and libraries used in authenticating DIDs across a wide variety of exchanges and use cases.
* [Claims and Credentials](https://identity.foundation/working-groups/claims-credentials.html): The ability to verify the claims and assertions of identities is key in establishing trust among entities on a decentralized system that lacks a centralized hierarchy. The DIF Foundation has recently begun work on defining the specs, protocols, and tools it can provide to the ecosystem to help ecosystem participants and their customers easily integrate DID-signed claims into their apps and services.
* [DID Communication](https://identity.foundation/working-groups/did-comm.html): Produce one or more high-quality specs that embody a method (“DIDComm”) for secure, private and (where applicable) authenticated message-based communication, where trust is rooted in DIDs and depends on the messages themselves, not on the external properties of the transport(s) used.
* [Secure Data Storage](https://identity.foundation/working-groups/secure-data-storage.html): Create one or more specifications to establish a foundational layer for secure data storage (including personal data), specifically data models for storage and transport, syntax, data at rest protection, CRUD API, access control, synchronization, and at least a minimum viable HTTP-based interface compatible with W3C DIDs/VCs.

## 7.  Sovrin: SSI blockchain

The [Sovrin Foundation](https://sovrin.org/) is a private-sector, international non-profit that was established to govern the world's first self-sovereign identity (SSI) network. The Sovrin blockchain network is based on Hyperledger Indy. Sovrin is governed by the [Sovrin Governance Framework](https://sovrin.org/library/sovrin-governance-framework/), which is a set of official documents that include legal agreements between participants in Sovrin. The services of Sovrin are registrations on the Sovrin blockchain: DIDs and DID Documents, VC schemas (generic), VC definitions (issuer-specific) and VC revocations. From 2017-2020, Sovrin has been funded via donations (Sovrin Alliance) and sale of future SOV tokens. In 2020, Sovrin started a transition process, revising its financing and structure.

## 8.  Trust-over-IP: full-stack governance

The [Trust-over-IP foundation](https://trustoverip.org/) was founded mid 2020. It is defining a complete architecture for Internet-scale digital trust that combines both cryptographic trust at the machine layer and human trust at the business, legal, and social layers. It is has the following working group, as well as a few more that are still being started.

* [Governance Stack](https://trustoverip.org/working-groups/governance-stack/): The scope of the Governance Stack Working Group is to define models and interoperability standards for governance frameworks that enable business, legal, and social trust between entities implementing the Trust over IP architecture stack as defined in [Hyperledger Aries RFC 0289](https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0289-toip-stack) (or its successor as identified in the RFC document itself).
* [Technical Stack](https://trustoverip.org/working-groups/technical-stack/): The scope of the Technical Stack Working Group is to define (directly or by reference) the technical standards, test suites, and interoperability certification standards for the Trust over IP architecture stack as defined in [Hyperledger Aries RFC 0289](https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0289-toip-stack) (or its successor as identified in the RFC document itself).
* [Utility Foundry](https://trustoverip.org/working-groups/utility-foundry/): The scope of the Utility Foundry Working Group is to facilitate a community of practice among governance authorities, implementers, operators, and service providers for Trust over IP Layer One utilities. The WG will provide process guidance for the establishment and monitoring of new ToIP Layer One utility projects, whether hosted at the Linux Foundation or external to it. Other WG activities will include creating template RFPs for service providers, maintaining a list of affiliated Foundry Service Providers, identifying areas of collaboration and alignment between associated and/or disparate Utilities, and where possible serving as a center of competence for the education and promotion of the role of ToIP Layer One utilities.
* [Ecosystem Foundry](https://trustoverip.org/working-groups/ecosystem-foundry/): The scope of the Ecosystem Foundry Working Group is to facilitate a community of practice among governance authorities, implementers, operators, and service providers of Trust over IP Layer Four ecosystems. The WG will provide process guidance for the establishment and monitoring of new ToIP Layer Four ecosystem projects, whether hosted at the Linux Foundation or external to it. Other WG activities will include creating template RFPs for service providers, maintaining a list of affiliated Foundry Service Providers, identifying areas of collaboration and alignment between associated and/or disparate ecosystems, and where possible serving as a center of competence for the education and promotion of the role of ToIP Layer Four ecosystems.

## 9.  Relevance to eSSIF-Lab

The above-mentioned standards, open source and governance are relevant to eSSIF-Lab in multiple ways.

* Using: Subgrantees of eSSIF-Lab will implement some of these standards, and fork existing open-source code.
* Testing: Subgrantees of eSSIF-Lab will perform interoperability tests of their implementations against other within eSSIF-Lab and outside, likely including the European [EBSI-ESSIF](https://www.eesc.europa.eu/sites/default/files/files/1._panel_-_daniel_du_seuil.pdf), the American [DHS-SVIP](https://www.dhs.gov/science-and-technology/svip).
* Contributing: Subgrantees of eSSIF-Lab will also be required to contribute to standards development where relevant.