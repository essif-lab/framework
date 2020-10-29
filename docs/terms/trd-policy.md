---
id: trd-policy
title: "TRD Policy"
scopeid: essifLab
type: concept
typeid: trd-policy
stage: draft
hoverText: "TRD Policy: a Digital Policy that enables an operational TRD component to function according to the rules of its Policy Governor."
---

## Short Description
A **Transaction (Validation) Engine** or **TRD** is a functional component that provides business applications with forms that users have filled in, and where the content of such forms is valid for making decision(s) by this application. The TRD uses a machine readable TRD-policy 

## Purpose
The purpose of the Transaction (Validation) Engine (TRD) is to produce (transaction-type specific) data structures or forms, each of which contains the necessary and sufficient data that allows (an %%agent|agent%% of) its %%owner|owner%% to decide whether or not to engage in a (new) transaction of the specified type.

## Criteria
A **Transaction (Validation) Engine** or **TRD** is a component in the [eSSIF-Lab functional architecture](../functional-architecture) whos function is to produce (transaction-type specific) data structures or forms, each of which contains the necessary and sufficient data that allows (an %%agent|agent%% of) its %%owner|owner%% to decide whether or not to engage in a (new) transaction of the specified type.

## Functionality

Typically, the TRD would start a transaction either

-   when it receives a request from some Agent of another Party for engaging in a transaction of a specific kind.
-   when it is instructed by, or on behalf of its Owner, to request a specific kind of transaction to some Agent of another Party.[^1]

In either case, a transaction form (object, context) has to be created that matches the kind of transaction, and a '**transaction-id**' must be generated that identifies this form/object/context. It will be used for binding incoming or outgoing messages to this transaction, enabling communications to remain congruent, not only with the Agent that requested the transaction, but also with other Agents from the same Owner and/or using different communications channels.

Handling/managing the various communications channels through which data can be exchanged is also a task of the TRD[^2]. One reason for this is that negotiating a transaction not only requires data to be acquired, but also to be provided to the peer participant. Another reason is that the peer participant may use multiple Agents to provide such data, e.g. human Agents (that might use web-browsers, social-media apps, phones, or physical visits), SSI Agents (that use the SSI infrastructure), or other electronic Agents (e.g. services that can provide data when appropriate permissions are submitted - e.g. user consent tokens).

Thus, the TRD is generally considered capable of obtaining data through different communications channels. However, the technical tracks of eSSIF-Lab will exclusively focus on the communications channel through which credentials can be requested and obtained. Any extensions or business productization of TRD designs may be considered in the business tracks of eSSIF-Lab. The latter is not considered any further in this section.

In order to acquire data through SSI mechanisms for filling in a form for a specific kind of transaction, the TRD needs to know what kinds of credentials it should ask for, which Parties its Owner trusts to issue such credentials, what kinds of verification proofs for such credentials must hold and which may be disregarded.[^3] Also, when the TRD gets a credential that satisfies the necessary verification proofs, it needs a way to map the contents of that credential to the structure of the transaction context that is used internally by (other systems of) its Owner.[^4] Also, as the TRD gets more and more data - which it may get through multiple, different channels - it needs to determine whether or not the resulting set is sufficiently consistent and coherent.[^5]

In order to make the TRD work, a Validation Policy (or TRD Policy) is created by, or on behalf of the Owner, which specifies at least:

-   the kinds of transactions the Owner is willing to (electronically) engage in, from both the requester and the provider perspectives;
-   for each such transaction type:

    -   the criteria (business rules) that should be used to determine that the form is 'clean', i.e. that the necessary and sufficient data have been obtained and that they are consistent, coherent, and suitable for making a transaction commitment decision.

    -   the kinds of credentials and issuers that the Owner is willing to accept as sources for valid data; (optionally?), the endpoint URI at which issuing Parties do the actual credential issuing may be specified[^6].

    -   for each kind of credential: the verification proofs that must hold to be accepted as a source for valid data.

    -   the mapping between fields in such credentials and fields in the form to be filled in.

The Policy must be designed in such a way that it is extendable as new features will be called for in the future.

The ability to create new transaction contexts and the availability of the TRD Policy enable the TRD to request the Verifier component of its Owner to obtain credentials of the types that it can use to fill in the transaction form when they satisfy the verification and validation requirements of its Owner.[^7]

When the Verifier returns such data (which comes with a list of proofs that the Verifier has checked), the TRD must then validate that data, i.e. determine whether or not it is valid for the specific transaction it is assembling the data for. The validation rules are Party-specific and hence come from the TRD policy. For simple cases, validation can simply consist of checking whether or not all verification proofs succeeded. At the other end of the validation spectrum, the TRD itself must make validation decisions, either electronically (according to the TRD policy) or by 'outsourcing' such decisions to human Agents of its Owner by providing an appropriate validation user interface.

As long as data is needed, the TRD can intermittently request the verifier to produce it (or it can use other communications channels, which is outside scope for now). It does so until it times out, or the form has become 'clean'.

-----

[^1]: This feature ensures that the transaction is really two-way, and both Parties can request credentials from the other. For example, a web-shop can then ask for a (delivery) address credential, and the customer can ask for a credential issued e.g. by the chamber of commerce that the web-shop is a legitimate company (and not some maffia website).

[^2]: It may well be that this functionality can somehow be split off in the (near) future.

[^3]: For high-value transactions, verification proofs are more important than for low-value transactions. This is to be decided by the Owner of the TRD. An example from the physical world: in order to obtain a visa for China, it is required that your passport (credential) remains valid for 3 months after the end of your visit. But in order to identify yourself at the reception desk of a hotel, your passport may have expired several years.

[^4]: For example, a credential that contains an address uses a specific schema to specify addresses, e.g. the 'PostalAddress' as defined by schema.org. This schema differs quite a bit from that of Dutch addresses as [*defined*](https://bag.basisregistraties.overheid.nl/def/bag) by the official (authentic) Dutch Registration of Addresses and Buildings (BAG). It may also well differ from the structure of addresses that databases of the Owner have implemented. Mapping allows such cases to be accommodated for.

[^5]: Inconsistent or incoherent data is necessary for various purposes. First, it allows for correct further processing of the transaction. A non-existent postal code, or one that doesn't match the delivery address, may hinder a fluent transaction processing, resulting in additional costs and processing times. Another purpose is the early warning or detection of possible fraud/abuse. Remember that part of the data is being asked for reducing transaction risk, and checking consistency/coherence of such data is part of the risk mitigation process.

[^6]: This enables the TRD to pass the endpoint URI on to the Verifier when it requests for such a credential, which in turn can send it to the holder of other Parties enabling them to obtain the credential from that issuer endpoint if that other Party does not have that credential in its wallet. The endpoint URI can in fact be put in the policy, because the (human) Agent that creates/maintains the policy would need to know that the issuing Party is actually issuing such credentials, what their contents means, etc., and hence is capable of tracking down the URI where that Party issues the credentials.

[^7]: A reference to this specification will be added when it becomes available (draft or otherwise).
