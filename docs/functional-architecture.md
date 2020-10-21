---
id: functional-architecture
title: eSSIF-Lab Functional Architecture
sidebar_label: Functional Architecture
scopeid: essifLab
---

## Purpose

It is the intention of the eSSIF-Lab project to develop this functional architecture into a generic, and common basis that parties from different backgrounds can use e.g. for:
- thinking and arguing about SSI-related topics and how it contributes to business transactions;
- creating technological components that provide functionalities that fit into the architecture and hence have a great chance to be, or quickly become, interoperable with tech components that other parties have developed;
- discussing and resolving issues related to interfaces and protocols for tech components that provide such functionalities;
- designing and developing technical applications that support businesses, not only as they conduct business transactions, but also as the govern the %%policies|policy%% that are needed to make the technology work as intended by such businesses.

To this end, this document provides an overview of 
- the functions (capabilities) that individual %%parties|party%% need in order to electronically support %%busines transactions|business-transaction%%;
- the interactions between these functions that make such business transactions happen;
- the various %%policies|policy%% that parties have to govern, and put in place in order for the technical components that provide these capabilities to function in accordance with their (subjective) %%rules, working-instructions and other guidance|policy%%.

## 2.  Functional Architecture Overview

Figure 1 shows the initial *functional* eSSIF-Lab architecture, and its scope, context and *functional* components each of which is a (*functional*) %%agent|agent%% for the same %%party|party%% (meaning that they are all part of the same %%organization|organization%% as defined above, and they are all %%(digital) ‘Colleagues’|digital-colleague%% of one another).

Please be aware that *functional* capabilities, components, Agents, etc. do not necessarily coincide with *technical* capabilities, components, Agents, etc. The technical components can be deployed (downloaded, installed, run), whereas a functional component is a provider of a specified set of capabilities/functionalities an implementation of which can be made part of a technical component. So it is conceivable that a technical component contains an implementation of wallet, holder and verifier functional components as well as other functionalities that are not described here, e.g. related to UX, setting preferences, and more. In this functional architecture, the default type of components, Agents etc. are *functional*.

Since the participants of a business transaction are different Parties, the negotiation, commitment and execution of that transaction will be done by Agents of these different Parties. Assuming that a single transaction has two such Parties, we will use the term ‘%%Peer Party (of a specific Party, in the context of a single transaction)|peer-party%%’ to refer to the participating Party in that transaction that is not the specific Party itself.

When an Agent is involved in such a transaction, it will be communicating with a component that it assumes to be an Agent of the Peer Party of its Owner (the Agent may obtain further assurances for that, but that's outside the scope for now). We will use the term ‘%%Peer Agent (of a specific Agent, in the context of a single transaction)|peer-agent%%’ to refer to an Actor with which the specific Agent has a communication session. Note that establishing whether or not an Actor is a Peer Agent does not necessarily require knowing who the Peer Party actually is.

The figure below is an overview of the most important *functional* components that any Party needs to conduct electronic business transactions.

<img
  alt="eSSIF-Lab Single Party Functional Architecture Overview"
  src={useBaseUrl('images/eSSIF-Lab-functional-architecture.png')}
/>

*Figure 1. eSSIF-Lab Single Party Functional Architecture Overview.*

We use the following coloring conventions in this figure: red is business related, which means that we do not consider this to be part of the SSI Infrastructure. Brown is used for policies, which are defined by (or on behalf) of the Owner of the component that uses them to configure themselves, and/or act according to the Owner’s preferences and policies. Green is used for generic SSI infrastructure related functions, and blue represents functions that may be implemented as ‘plug-ins’ for specific SSI-related technologies.

The remainder of this chapter describes the layers and their components at a high abstraction level. <!--Further details on components, such as design decisions, can be found in \[reference\].-->

### 2.1.  Business Transaction Layers

At the top of the figure are two business-related layers. Both are within the scope of the eSSIF-Lab project/architecture, yet they are outside the scope of the eSSIF-Lab infrastructure/architecture - that is because they are too business-specific.

The top layer (in the red rounded rectangle) has the functions of actual business transactions: it starts with a transaction form, the data of which is valid, consistent and complete, from which the (business) decision can be made whether or not to engage in a business transaction, and that has everything necessary to actually execute that business transaction. The (administrative) results of such a business transaction are then stored in business data stores. We have put this layer in the eSSIF-Lab architecture for the single purpose of showing how the components of the bottom layer contribute to conduct business transactions.

The lower business layer contains two functional components, one for initiating transactions and the other for stating transaction results (as per the [*DEMO*](https://en.wikipedia.org/wiki/Design_%26_Engineering_Methodology_for_Organizations) method), each of which with an associated business policy that contains business-specific policies/preferences.

The task of the %%Data Collector|data-collector%% (or %%Data Collectordata-collector%%) is to handle and initiate requests from/to Peer Agents to engage in some kind of transaction, by negotiating and exchanging data (through one or more, physical or electronic communication channels), and to produce a transaction form whose contents are complete and valid, enabling an appropriate Colleague to decide whether or not to engage in the transaction. Note that negotiating a transaction has two parts: requesting a Peer Agent to provide data that its Owner needs, and providing data on behalf of its Owner that a Peer Agent requests. After all, a business transaction can only start after all Parties have decided to commit, which they can only do after each of them has obtained the information it (subjectively) needs to do so. Also note that data that the Data Collector must ensure that the transaction context is properly maintained if it chooses to exchange data through different communication channels.

The task of the %%Data Discloser|data-discloser%% (or %%Data Discloser|data-discloser%%) is to state the (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other Parties. Since such state-data may change, issuing data that supersedes an earlier state implies the revocation of such a state.

Note that both components are within scope of eSSIF-Lab architecture, but NOT in scope of the eSSIF-Lab infrastructure, as they are too business-specific.

### 2.2.  SSI Roles Layer (Issuer, Verifier, Holder and Wallet)

The SSI Roles Layer contains functional components that provide the functionality associated with the well-known roles of issuer, holder, wallet and verifier. Technical components that provide such functionalities are part of the eSSIF-Lab (technical) infrastructure.

Apart from each having a specific task, as described below, implementations that are being deployed by one Party should be aligned in that they support the same (sub)set(s) of SSI Protocols and Crypto features, as described in the following section.

The **issuer** functionality includes the issuing of what we will generically call ‘credentials’, i.e. sets of (related) statements/claims (e.g. as produced by the Data Discloser) that have metadata (e.g. date of issuing) and a digital signature by which third Parties can prove its provenance and integrity. Another function of the issuer is to handle revocation (and (un)suspension) of credentials that it has issued. For such tasks, it relies on functions that are made available by the SSI Protocols and Crypto Layer.

The **wallet** functionality includes the (secure) storage of credentials - both those that have been issued by the issuer (i.e. self-signed credentials) and those that have been obtained from issuers of other Parties. Another task of the wallet is to (securely) store (private) keys that can be used to sign or seal data on behalf of its Owner. Perhaps the most important task of the Wallet is to ensure that credentials and keys can only become available to another component if they have the same (single) Owner, and will become available if such other component implements a functionality that needs it.

The **verifier** functionality is to support the Data Collector as it tries to acquire credentials from some other Party for the purpose of negotiating a business transaction. It does so by creating Presentation Requests (or Presentation Definition as it is called in the [draft DIF specfication for Presentation Exchange](https://identity.foundation/presentation-exchange)) that ask for such credentials, sending them to a holder component of another Party, receiving a response to such a request (which we call a ‘Presentation’), verifying the Presentation, i.e. checking the signature and other proofs of the veracity of both the construction of the Presentation as well as its contents, thus providing the Data Collector with verified data.

The task of the **holder** is to handle Presentation Requests that it receives from Verifier components (both of its Owner, and of other Parties). Typically, this means looking for the requested data in the Owner’s wallet, and using it to construct a Presentation (=response). However, if the wallet doesn’t have it, the holder may negotiate a transaction with a component of the designated issuer for the purpose of obtaining the needed credential, which - when obtained - it can subsequently store in the wallet and use in the Presentation.

### 2.3.  SSI Protocols and Crypto Layer

While represented as a layer, the SSI Protocols and Crypto Layer can be seen more as a set of libraries that can be used by Wallet, Holder, Issuer and Verifier (WHIV) components for the purpose of actually implementing some/all of the functionality that they need to provide. Each ‘Component’ in this layer implements a specific technology, and any implementation of any of the WHIV components may choose which of these to use. Of course, if one of the WHIV components implements a technology, it would seem that the others would need to do so, too.

Technologies may come as a (proprietary or open source) library, as a service (offered by one or more Parties), or both. There are way too many to mention here, but to give you an idea, here is a classification of such underlying/supporting technologies that seems to be useful. While we do mention some technologies explicitly, this should in no way be interpreted as that this would be necessary to support, or that others are not to be considered.

First, we have **credential-related technologies**, most often in the form of libraries, basically for the creation, (storing,) and verification of specific kinds of credentials such as [*Verifiable Credentials*](https://www.w3.org/TR/vc-data-model/) (VCs), [*Attribute Based Credentials*](https://abc4trust.eu/index.php/pub)<sup>[ABC]</sup> (ABCs), [*X.509 Attribute Certificates*](https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-X.509-201210-S!!PDF-E), [*OIDC*](https://openid.net/developers/specs/) tokens, etc. Various projects/implementations can already be used here, such as [*Hyperledger Aries*](https://www.hyperledger.org/projects/aries), [*IRMA*](https://privacybydesign.foundation/irma-en/), [*OpenCerts*](https://opencerts.io/), [*BlockCerts*](https://www.blockcerts.org/), and more.

Then, there are **secure communications technologies**, for the purposes of (a) ensuring that a technical component owned by a specific Party can recognize that another component as one that it has had previous communications with and/or is owned by an identified Party, and (b) setting up a secure communication channel, i.e. one that guarantees message confidentiality (encryption) and integrity/authentication. A well-known way to do this is SSL, but new ones are being developed, such as [*DID Comm(unication)*](https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0005-didcomm), that uses [*peer DIDs*](https://github.com/WebOfTrustInfo/rwot8-barcelona/blob/master/draft-documents/peer-DID-method-spec-report.md) (work in progress).

Another important category is that of **crypto (related) technologies**, which are used for various purposes, such as creating/verifying digital signatures, zero-knowledge-proofs, etc. Such technologies may come as a library (e.g. [*Hyperledger/Ursa*](https://www.hyperledger.org/projects/hyperledger-ursa)), or as a service, e.g. an [*eIDAS*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32014R0910&from=EN)<sup>[eIDAS]</sup> trust service.

We conclude for now by mentioning **blockchain/distributed ledger technologies**, for secure logging of (e.g. registration) events, where such logs have the property that it is virtually impossible to change the order and/or contents of the logged events, and that the logs are highly available to those that are authorized. Both public and private blockchains are known to be used, and different SSI-solutions may use them for different purposes, e.g. the registration of schema’s, credential definitions, DIDs and associated DID documents, revocation accumulators, etc. Examples include [*EBSI*](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/ebsi) ([*European Blockchain Partnership*](https://ec.europa.eu/digital-single-market/en/blockchain-technologies)), [*Hyperledger Indy*](https://www.hyperledger.org/projects/hyperledger-indy) (Alastria, Findy, Sovrin), Ethereum ([*OpenCerts*](https://opencerts.io/), [*BlockCerts*](https://www.blockcerts.org/)), bitcoin ([*BlockCerts*](https://www.blockcerts.org/)) and many more.

It is expected that there are already some interfaces out there that may turn out to be useful here (e.g. (unverified) [*FIWARE*](https://fiware-idm.readthedocs.io/en/7.4.0/eidas/), CEF)

------

[ABC] Its origins lie with the [*ABC4Trust project*](https://abc4trust.eu/). Extensive [*documentation*](https://abc4trust.eu/index.php/pub) is available, e.g. an [*Architecture for Attribute-based Credential Technologies*](https://abc4trust.eu/download/Deliverable_D2.2.pdf) (also one [*for developers*](https://abc4trust.eu/download/ABC4Trust-H2.2_ABC4Trust_Architecture_for_Developers.pdf)).

[eIDAS5] [*"Regulation (EU) No 910/2014 of the European Parliament and of the Council of 23 July 2014 on electronic identification and trust services for electronic transactions in the internal market and repealing Directive 1999/93/EC"*](http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2014.257.01.0073.01.ENG). *EUR-Lex*. The European Parliament and the Council of the European Union.

------

### 2.4.  API Layers (‘ESSIF Glue’ and ‘SSI Tech APIs’)

There are two interface layers in this architecture

The '**ESSIF Glue**' interface layer consists of a [documented set of APIs](https://gitlab.grnet.gr/essif-lab/tno-ssi-service/developer-docs) between the Data Collector and Data Discloser on the one hand, and the WHIV components on the other hand. The purpose of these APIs is to make calling the WHIV functions as simple as possible, given the functions of the Data Discloser and Data Collector. Ultimately, we would like to see these APIs standardized. Having such APIs allows different Parties to create their own version of the WHIV components, supporting the SSI technologies as they see fit, and shrinking or expanding functionalities as they feel appropriate. Parties can then select such WHIV components as they see fit.

The **SSI Tech APIs** interface layer is the union of the interfaces of the components within it. Any standardization in there is outside the scope of eSSIF-Lab.

-------

## 3.  eSSIF-Lab Infrastructure Functional Components

This section details the functional specifications of the components that are in scope of the eSSIF-Lab infrastructure, i.e. in the green (rounded) rectangle as shown in the figure below:

<img
  alt="eSSIF-Lab infrastructural (functional) components"
  src={useBaseUrl('images/eSSIF-Lab-functional-architecture-infra.png')}
/>

*Figure 2: eSSIF-Lab infrastructural (functional) components.*

### 3.1.  Data Collector and Validation Policy

The purpose of the Data Collector (Data Collector) is to produce (transaction-type specific) data structures or forms, each of which contains the necessary and sufficient data that allows (an Agent of) its Owner to decide whether or not to engage in a (new) transaction of the specified type.

Typically, the Data Collector would start a transaction either

-   when it receives a request from some Agent of another Party for engaging in a transaction of a specific kind.
-   when it is instructed by, or on behalf of its Owner, to request a specific kind of transaction to some Agent of another Party.[^DC.1]

In either case, a transaction form (object, context) has to be created that matches the kind of transaction, and a ‘**transaction-id**’ must be generated that identifies this form/object/context. It will be used for binding incoming or outgoing messages to this transaction, enabling communications to remain congruent, not only with the Agent that requested the transaction, but also with other Agents from the same Owner and/or using different communication channels.

Handling/managing the various communication channels through which data can be exchanged is also a task of the Data Collector[^DC.2]. One reason for this is that negotiating a transaction not only requires data to be acquired, but also to be provided to the peer participant. Another reason is that the peer participant may use multiple Agents to provide such data, e.g. human Agents (that might use web-browsers, social-media apps, phones, or physical visits), SSI Agents (that use the SSI infrastructure), or other electronic Agents (e.g. services that can provide data when appropriate permissions are submitted - e.g. user consent tokens).

Thus, the Data Collector is generally considered capable of obtaining data through different communication channels. However, the technical tracks of eSSIF-Lab will exclusively focus on the communication channel through which credentials can be requested and obtained. Any extensions or business productization of Data Collector designs may be considered in the business tracks of eSSIF-Lab. The latter is not considered any further in this section.

In order to acquire data through SSI mechanisms for filling in a form for a specific kind of transaction, the Data Collector needs to know what kinds of credentials it should ask for, which Parties its Owner trusts to issue such credentials, what kinds of verification proofs for such credentials must hold and which may be disregarded.[^DC.3] Also, when the Data Collector gets a credential that satisfies the necessary verification proofs, it needs a way to map the contents of that credential to the structure of the transaction context that is used internally by (other systems of) its Owner.[^DC.4] Also, as the Data Collector gets more and more data - which it may get through multiple, different channels - it needs to determine whether or not the resulting set is sufficiently consistent and coherent.[^DC.5]

In order to make the Data Collector work, a Validation Policy (or Data Collector Policy) is created by, or on behalf of the Owner, which specifies at least:

-   the kinds of transactions the Owner is willing to (electronically) engage in, from both the requester and the provider perspectives;
-   for each such transaction type:

    -   the criteria (business rules) that should be used to determine that the form is ‘clean’, i.e. that the necessary and sufficient data have been obtained and that they are consistent, coherent, and suitable for making a transaction commitment decision.

    -   the kinds of credentials and issuers that the Owner is willing to accept as sources for valid data; (optionally?), the endpoint URI at which issuing Parties do the actual credential issuing may be specified[^DC.6].

    -   for each kind of credential: the verification proofs that must hold to be accepted as a source for valid data.

    -   the mapping between fields in such credentials and fields in the form to be filled in.

The Policy must be designed in such a way that it is extendable as new features will be called for in the future.

The ability to create new transaction contexts and the availability of the Data Collector Policy enable the Data Collector to request the Verifier component of its Owner to obtain credentials of the types that it can use to fill in the transaction form when they satisfy the verification and validation requirements of its Owner.[^DC.7]

When the Verifier returns such data (which comes with a list of proofs that the Verifier has checked), the Data Collector must then validate that data, i.e. determine whether or not it is valid for the specific transaction it is assembling the data for. The validation rules are Party-specific and hence come from the Data Collector policy. For simple cases, validation can simply consist of checking whether or not all verification proofs succeeded. At the other end of the validation spectrum, the Data Collector itself must make validation decisions, either electronically (according to the Data Collector policy) or by ‘outsourcing’ such decisions to human Agents of its Owner by providing an appropriate validation user interface.

As long as data is needed, the Data Collector can intermittently request the verifier to produce it (or it can use other communication channels, which is outside scope for now). It does so until it times out, or the form has become ‘clean’.

-----

[^DC.1]: This feature ensures that the transaction is really two-way, and both Parties can request credentials from the other. For example, a web-shop can then ask for a (delivery) address credential, and the customer can ask for a credential issued e.g. by the chamber of commerce that the web-shop is a legitimate company (and not some maffia website).

[^DC.2]: It may well be that this functionality can somehow be split off in the (near) future.

[^DC.3]: For high-value transactions, verification proofs are more important than for low-value transactions. This is to be decided by the Owner of the Data Collector. An example from the physical world: in order to obtain a visa for China, it is required that your passport (credential) remains valid for 3 months after the end of your visit. But in order to identify yourself at the reception desk of a hotel, your passport may have expired several years.

[^DC.4]: For example, a credential that contains an address uses a specific schema to specify addresses, e.g. the ‘PostalAddress’ as defined by schema.org. This schema differs quite a bit from that of Dutch addresses as [*defined*](https://bag.basisregistraties.overheid.nl/def/bag) by the official (authentic) Dutch Registration of Addresses and Buildings (BAG). It may also well differ from the structure of addresses that databases of the Owner have implemented. Mapping allows such cases to be accommodated for.

[^DC.5]: Inconsistent or incoherent data is necessary for various purposes. First, it allows for correct further processing of the transaction. A non-existent postal code, or one that doesn’t match the delivery address, may hinder a fluent transaction processing, resulting in additional costs and processing times. Another purpose is the early warning or detection of possible fraud/abuse. Remember that part of the data is being asked for reducing transaction risk, and checking consistency/coherence of such data is part of the risk mitigation process.

[^DC.6]: This enables the Data Collector to pass the endpoint URI on to the Verifier when it requests for such a credential, which in turn can send it to the holder of other Parties enabling them to obtain the credential from that issuer endpoint if that other Party does not have that credential in its wallet. The endpoint URI can in fact be put in the policy, because the (human) Agent that creates/maintains the policy would need to know that the issuing Party is actually issuing such credentials, what their contents means, etc., and hence is capable of tracking down the URI where that Party issues the credentials.

[^DC.7]: A reference to this specification will be added when it becomes available (draft or otherwise).

-----

### 3.2.   Verifier Component, and its Policy/Preferences

The purpose of the Verifier component is to support the Data Collector by providing it with a single, simple API that it can use to request and obtain data that it needs to produce a clean transaction form, as well as the results of checking verification proofs (this is also why it is called the ‘verifier’ component).

Typically, the Data Collector would ask the Verifier to provide a credential that it can use to fill in a (coherent set of) field(s) in the transaction form. It is realistic to think that credentials from different issuers - trusted by the Verifier’s Owner - can be used for this purpose. However, it is also realistic that such credentials will not use the same credential definition - they might well use different schemes to provide such data. Therefore, the Data Collector should specify a list of pairs (credential-type, issuer) instances of which could all be used to provide the data it needs - which it can obtain from the Data Collector policy.

Then, the Verifier needs to know the address and protocol that it can use to reach a Holder component owned by the Party that its Owner is trying to negotiate the transaction with. The Data Collector specifies this as part of the request - and it can do so because it has received the original request, and does all communication channel handling.

Verifiers are not expected to handle every kind of credential (e.g. VC’s, ABC’s, etc.) that exists, but rather a specific subset. For (at least one of) the credential types, the Verifier can construct a so-called presentation request, i.e. a message that is specific for the credential type and/or associated protocol, which it can then send to the Holder’s address.

This request message should contain at least

-   the transaction-id, so that when it is copied into the associated response message, the latter can be associated to the transaction it belongs to. Also, it should contain the
-   the (credential type, issuer) pairs that may satisfy the request, and to each of these additional data, e.g. the URI of the endpoint where the issuer issues such credentials, the maximum age of the credential, etc.
-   meta-data that may be useful for the holder (or its Owner), e.g. texts stating the purpose(s) for which the data will be used ([*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) Art. 5.1.b), or requesting consent ([*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) Art. 7.2) “in an intelligible and easily accessible form, using clear and plain language”.
-   a signature of the Verifiers Owner, for the purpose of showing compliance with the [*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) (e.g. Art 28.3.h), and enabling the Holder’s Owner to obtain proof that the Verifiers Owner has violated the [*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN)’s minimization principle asked for data for a particular purpose, which can be used in an argument in disputes about data minimization ([*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) Art. 5.1.c).

The request message must be designed in such a way that it is extendable as new features will be called for in the future.

In order to make the Verifier component work, a Verifier Policy/Preferences object is created by, or on behalf of the Owner, which specifies at least: \[to be elaborated\]

A response to this request (called a Presentation) will be obtained from a Holder component of the Peer Party. This response will contain a reference to the request, allowing the Verifier to combine them. The Verifier will then check that the data in the response is a credential that it has asked for (correct type/issuer), verify the proofs that are provided (predominantly the digital signature), and do some additional checks (e.g. whether or not the credential has expired, is revoked, and such).

Then, the verifier will send a message to the Data Collector, containing the transaction-id, the data it has received, and the results of the various checks.

### 3.3.   Holder Component, and its Policy/Preferences

The purpose of the Holder component is to handle Presentation Requests that it receives from Verifier components (both of its own Owner, and of other Parties), and responding to such requests.

Typically, a Holder component would access its Owner's Wallet to check if it has a credential that it can use to construct a Presentation (i.e. response) that satisfies the received request.

It may happen that the Wallet does not have such a credential. However, for every (credential, issuer) pair, the request should specify the URI that is capable of issuing such a credential. If or when the Holder Policy/Preferences permit this, the Holder then requests its Owner’s Data Collector to initiate a new transaction that will get the credential from that issuer, for which a clean transaction form would then consist of one that contains said credential. The Holder would then store it in its Owner’s Wallet, and then proceed to service the presentation request as if it had obtained that credential from its Owner’s Wallet.

It may also happen that the Wallet has multiple credentials that satisfy the request, in which case the Holder must choose the one to use for constructing the presentation. Again, the Holder Policy/Preferences will specify how this choice needs to be made, and whether or not this can be done automatically by the Holder. If not, the Holder will need to provide for an interaction with a human Colleague that will make such decisions.

In order to make the Holder component work, a Holder Policy/Preferences object is created by, or on behalf of the Owner, which specifies e.g.:

-   whether or not credentials may be collected ‘on the fly’;
-   how to choose between credentials that all satisfy a presentation request (and whether the Holder can make such choices by itself, or whether or not human interaction is required);
-   the kinds of events and data to write to a holder-audit-log.

### 3.4.  Data Discloser and Issuing Policy

The purpose of the Data Discloser component is to state the (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other Parties. A special kind of result is the (provisioning of) a credential that its Owner already has created.

Typically, and at any point in time, Parties are capable of expressing statements about entities that they know to exist. They could express statements about individuals, about themselves, the state of transactions, and so on. We will use the term ‘**subject (of a statement of a Party)**’ to refer to the entity that this Party knows to exist, and about whom/which the statement has been made.

We will use the term ‘**subject-id (of a statement of a Party)**’ to refer to the representation that this Party has chosen to use for referring to the subject in said statement. A subject-id must have the property of being an identifier within every administrative context that this Party uses. It need not be humanly interpretable (and preferably is not).

Parties need to specify the kinds of credentials they are willing to issue, the class of entities (e.g. people, cars, Organizations) for which it will issue them, and the information schema (structure) that it will use in credentials of such kinds.<sup>[Data Discloser.1]</sup> This allows the Data Discloser to construct data objects that conform to this information schema, and present it to the Issuer component for actual issuing.

The Data Discloser Issuing Policy specifies the kinds of (linked-)data-objects that credentials may be created for. This allows the Data Discloser to construct such a (linked-)data-objects for every subject-id that identifies a subject of the class for which a credential can be issued, which can subsequently be sent to the Issuer component that can turn it into a credential of a specific sort.

You can think of the Data Discloser as the component that pulls all data together that can be put in a credential (e.g. in a passport), and the Issuer as the component that puts the data in an (empty) passport, and signing it so as to create the actual credential.

The Data Discloser may either push credential data to the Issuer component, so that the Issuer always has up-to-date credentials, or it can wait until the Issuer requests credential data for the creation of a credential of a specific type for a specific subject.

-----

[Data Discloser.1] We assume/stipulate that the Party maintains a credential catalogue that contains this, and other information about every kind of credential that it issues, and that such catalogues are available to other Parties that want or need to use such credentials.

-----



### 3.5.  Issuer Component, and its Policy/Preferences

The purpose of the Issuer component is to issue ‘credentials’, i.e. digital constructs that contain

-   sets of (related) statements or claims (e.g. as produced by the Data Discloser)
-   metadata (e.g. type of credential, date of issuing and expiration, endpoints, e.g. for revocation checking, credential definition, credential advertisements, credential enforcement policy, etc.)
-   proofs (e.g. a digital signature by which third Parties can prove its provenance and integrity.

Another purpose that an Issuer might serve is to provide a means that allows any other Agent that somehow has obtained a copy or presentation of a credential, to verify whether or not the data therein is conformant to the business administration of its Owner. We will use the term ‘revocation service’ to refer to such means. Whether or not an Issuer provides such a service, and what kind of revocation service is provided (e.g. a revocation list, an online revocation status protocol, etc.), is a decision that its Owner should make, and specify in the Issuer Policies/Preferences.

An Issuer component may issue credentials in various formats, e.g. as a Verifiable Credential (VC), an Attribute-Based Credential (ABC), an OpenID Connect/JWT token, etc. The issuing Party must specify credential-types in such a way that if the same credential is issued in different formats, it is possible for an arbitrary Verifier to determine whether or not two credentials that have different formats, are in fact the same. One way of doing this is that the Issuer generates an identifier for every credential that it constructs (before expressing it in a specific format).

After the issuer has created a credential (in one or more formats), it checks the wallet to see if it contains a credential of the same type for the same subject. If (one or more formats) are there, and their contents are the same as the newly created credential, the existing ones are revoked, deleted and/or archived/tombstoned.<sup>[Issuer.1]</sup> Then, the newly created credential is added to the wallet (in one or more formats). Thus, at any point in time, the wallet will contain an actual set of all credentials that have been issued.<sup>[Issuer.2]</sup>

-----

[Issuer.1] Tombstoning is a mechanism that is used e.g. in (distributed) ledgers that do not allow for actual deletion, such as blockchains, by marking entries in the ledger as ‘being deleted’ (i.e. adding a ‘tombstone’ to such entries).

[Issuer.2] This allows e.g. individuals, that have an Issuer component in their SSI app, to issue self-signed credentials and provide them to verifiers that request them as usual for non-self-signed credentials.

-----


### 3.6.  Wallet Component, and its Policy/Preferences

The primary purpose of the Wallet Component is to (securely) store data, and in particular:

-   credentials - both those that have been issued by the issuer (i.e. self-signed credentials) and those that have been obtained from issuers of other Parties, and
-   (private) keys e.g. for signing/sealing data on behalf of its Owner.

Other kinds of data may be stored by a wallet as well - we will have to see what is practical and makes sense.

By ‘securely storing data’ we mean that such data

-   remains available until a request is received from an electronic Colleague that is entitled to request deletion of such data;
-   remains unchanged during the time in which it is stored;

-   can only become available to electronic Colleagues that implement a functionality that requires such access (e.g. a Colleague Holder component);
-   can only be stored by electronic Colleagues that implement a functionality that require such data to be stored (e.g. a Colleague Holder or Issuer component).

It is expected that components other than the Holder and Issuer will (arise and) need access. One example could be a component that is capable of securely signing data on behalf of the Owner. Another example could be a component that implements some kind of credential revocation functionality.

Human beings cannot directly access any Wallet component, not even the ones they own. They need an electronic Agent that is capable of authenticating them as (an Agent of) the Party that owns the Wallet component, and upon successful authentication provides a User Interface through which the Human Being can instruct this electronic Agent to manage the Wallet’s contents.

In order to make the Wallet component work, a Wallet Policy/Preferences object is created by, or on behalf of the Owner, the contents of which remains to be specified.

## 4.  Initial SSI-Agent Network Architecture

:::info Editor's note
*The eSSIF-Lab functional architecture is not final. This chapter is an example of how work that is currently being done may already be documented for the purpose of furthering discussions and providing inspiration to readers.*
:::

Parties need to deploy (technical) components that act as their Agents. Individuals would typically have a mobile app whose user interface allows them to fulfill any or all of the roles of holder, verifier and issuer. Wallet functionality may be included in this app, but it might equally well live in the cloud, as a second (technical) Agent. An individual might also have (cloud) servers that Agents of other parties may contact for conducting transactions without the need for the individual itself to do something. All of this holds equally well for larger Organizations.

It is conceivable that the set of SSI functions is spread over multiple (technical) Agents, in which case there is going to be a need for such Agents to contact one another, and conduct transactions in a way that may differ from doing that with Agents of other Parties. Basically, this can be seen as Colleagues interacting with one another to get things done within one Organization. Seen from the outside, it looks like every Organization has a (smaller or larger) network of Agents. This chapter provides more details on this topic.

The SSI-Agent Network Architecture has two viewpoints:

1.  the **intra-Party or single-Party SSI viewpoint**, which focuses on the set of (human and/or electronic) Agents of a single, specific Party.
2.  the **inter-Party or multi-Party SSI viewpoint**, which is about specific functional components (e.g. Verifier, Holder, etc.) that typically belong to different Parties.

An individual Party may use the single-Party SSI viewpoint to come to grips with concerns related to the creation and maintenance of its network of its electronic Agents. The set of concerns would include:

-   How can electronic components be onboarded as an Agents of this Party?
-   How can the integrity of such electronic Agents be stated in a trustworthy manner (do such components need some kind of accreditation certificate, do we need to come up with a service that can remotely test the integrity of a component and have it issue ephemeral integrity-certificates/credentials, …)?
-   How can the Party specify which of its Agents may talk with which other Agents, and for what purposes?
-   How should a Party specify the policies for the various SSI functionalities - what kind of support would be useful here?
-   …

Parties that want (their Agents) to interact with one another may use the multi-Party SSI viewpoint to come to grips with concerns related to the interoperability of the functionalities that their components implement. The set of concerns would include:

-   How can Parties interact with one another at the information level (this includes decentralized semantic interoperability issues, advertising credentials, how a Party can find other Parties that issue credentials that are useful to him, etc.)
-   What kinds of underlying technologies must Agents of a Party support so as to be(come) interoperable with Parties that it wants to interact with?
-   …

## 5.  High Level Transaction Flows

This chapter explains at a high level how electronic business transactions are being conducted. This is prerequisite to the explanations in chapter 4, that describe how the eSSIF-Lab architectural components are used in such transactions. For illustrative purposes, we stick to the example of getting a parking permit that we introduced in section 1.1.

### 5.1.  Overview

<br/>

<img
  alt="High-level transaction overview"
  src={useBaseUrl('images/high-level-trx-overview.png')}
/>

*Figure 3: High-level transaction overview.*

The adjacent figure shows how a transaction is conducted at the highest abstraction level. One Party, called the ‘Requester’, sends a request for a product or service to another Party (that we will call the ‘Provider’). Then, they start to negotiate a ‘transaction agreement’, which means that they exchange data through various channels for the purpose of establishing the details of the product/service to be provided and the compensation, data needed to mitigate transaction risks, etc., all of which is necessary for the Parties to (individually/subjectively) decide whether or not to commit to the transaction. Section 3.2 provides more detail about this phase.

After commitment, the producer works to provide the product or service, and the requester arranges the compensation. This phase is entirely up to the business, and hence out of scope of this document.

When all is done, Parties may issue a (signed) statement that specifies the results. Section 3.3. provides some more details about this phase.

In the example of the parking permit, a citizen (requester) sends a request to its municipality (provider) for obtaining a parking permit (the product/service). Then, the citizen fills in an online form (and uploads necessary PDFs) to enable the municipality to decide whether or not to produce the requested permit. The eSSIF-lab architecture adds a secondary, electronic channel that allows citizens to fill in the forms by using e.g. an SSI app on their phone. When the form is complete, the municipality decides whether or not to produce and issue the permit, which it can do as usual. It can also issue a credential that states the result of the transaction, i.e. contains the details of the parking permit.

Please note that while transactions are symmetrical in nature (i.e. both requester and provider need data from the other so as to decide whether or not to commit to the transaction), there is an implicit asymmetry in that activities that Parties perform are ordered in time, which implies e.g. that the commitment decisions of both Parties cannot be done at the same time. Also, in practice, it often happens that a Party requires the other Party to have executed (and stated) its part of the transaction before it actually commits to the transaction. For example, a provider may require the requester to have paid for the product before it is being shipped out. Consequently, the protocols for exchanging data/credentials will need to support such ‘asynchronous’ ways of working.

### 5.2.  Transaction Negotiation Phase

This phase starts by the requester sending a transaction request to the provider, and ends whenever either one of the Parties quits, or both Parties commit.

<img
  alt="High-level transaction negotiation"
  src={useBaseUrl('images/high-level-trx-negotiation.png')}
/>

*Figure 4: High-level transaction negotiation.*

This figure shows the high-level interactions during this phase. It starts by the requester sending a request for a product or service to the provider. Typically, this would lead to the provider presenting a (web) form the requester must fill in. In the eSSIF-Lab context, the form will also provide a means for setting up a SSI communication channel, i.e. a secure communication channel through which provider and requester can both request and obtain (presentations of) credentials, the contents of which they can use to fill in the form. Then, after the form is ‘clean’, i.e. contains sufficient information for deciding whether or not to commit to the transaction, this phase ends.

Note that forms may contain fields that are required only in specific circumstances. It may only be possible to assess whether or not such circumstances apply after some (other) fields have been filled in. This means that the phase for requesting credential presentations and responding to such requests may very well consist of multiple requests and associated responses.

In the example of the parking permit, the municipality might ask for a credential that proves the requester is a citizen that is a registered inhabitant of said municipality, a credential stating its residential address, a credential stating the make and license plate of the vehicle for which a parking permit is requested, etc. All this is subject to the policy that the municipality has established for issuing such permits, and hence, it must be expected to differ between municipalities.

An example of conditionally required fields would be when the requester wants the municipality to customize the parking lot, e.g. because the requester has disabilities. Assessing such circumstances depends on the (optional) field where the requester must state any disabilities they have, and when that is the case, the requester may be asked to fill in fields such as whether or not a parking lot has to be customized (painted blue, with a sign stating that it is reserved for the provided license-place, or the kind of charging device if they have an electric vehicle).

Conversely, the citizen might request the (alleged) municipality to provide credentials, e.g. to prove that it is actually an official municipality of the country it is part of. This would provide assurance to the citizen that it would actually be paying the fees to that municipality rather than to e.g. a rogue Organization that might have spoofed the website of the municipality.

### 5.3.  Stating Transactions - Issuing Credentials

In the eSSIF-Lab context, we take ‘credential’ to mean any (set of coherent) statement(s) about any (one or more) subject(s) that a single Party has issued with proof of provenance (i.e. anyone else can determine the identity of that issuer) and a proof of integrity (i.e. anyone can determine whether or not the content of the credential has been changed/tampered with since it was issued). From this, it follows that any Party can issue any kind of credential for any entity that it knows to exist. A credential does not need to be about a person or an Organization, but it can also refer to an order, a delivery, a seat-reservation, a prescription, etc.

We foresee two ways in which credentials can be issued:

1.  both the requester and provider may issue credentials to the other Party in the process flow that they are in. They can do so for the purpose of stating any (lack of) progress and/or results of the administrative process flow they are in.
    In the example of the parking permit, the municipality may need some time to do some manual checks before it can issue the permit; in this case, it could issue a credential that states that the citizen has requested the parking permit and any other details that might be appropriate. Also, if it can issue the parking permit straight away, it can issue a credential that contains the details of that permit. The requester may issue a credential to the municipality stating the date/time and kind of transaction, judgements or comments about the service that the municipality has provided.
2.  any Party may issue a credential upon request. Basically, this means that a Party (in the role of requester) issues a request to that other Party (in the role of provider) asking for the particular credential. This is just another case of doing transactions, that can be handled just as any other kind of transaction.
    In the example of the parking permit, when a citizen requests a permit, the provider might look for an existing permit prior to issuing a new one (it would have to do such a check during the process anyway), and depending on its business logic it would be providing the credential without further ado, or start the process of issuing a new one.

## 6.  Detailed Transaction Flows

:::info Editor's note
*The eSSIF-Lab functional architecture is not final. This chapter is an example of how work that is currently being done may already be documented for the purpose of furthering discussions and providing inspiration to readers.*
:::

This chapter explains the details of how electronic business transactions are being conducted using the eSSIF-Lab architectural components as described in chapter 2. We keep on using the parking permit example that we introduced in section 1.1. for illustrative purposes.

Note that both Parties, requester and provider, each have components as described in chapter 2. Also note that whenever we introduce another Party, it too has such components. Thus, every Party can play any of the traditional SSI roles ‘verifier’, ‘holder’ and ‘issuer’, and each has its own ‘wallet’ functionality. Also, they all have Data Collector and Data Discloser functionality that connect these aforementioned infrastructural components with the business applications.

When reading the next sections, please be aware that when a component of one of these Parties communicates with another component, this other component may be of the same Party, as well as of the other Party. Figure 2 only shows components that belong to a single Party.

### 6.1.  Starting a Transaction

:::info Editor's note
*The eSSIF-Lab functional architecture is not final. This section is an example of how work that is currently being done may already be documented for the purpose of furthering discussions and providing inspiration to readers.*
:::

The requester starts the transaction by pointing his web-browser to a web-page of the provider that (a) explains how to get a parking permit, and (b) provides a parking-permit application form that needs to be filled in. Technically, this means that the browser does a GET request to an endpoint that is serviced by the providers Data Collector component.

The Data Collector services this request by creating an empty form of a type appropriate for the request. Then, it continues with requesting data to fill in the form (and providing data as requested by the other Party). It starts this by providing a web page that includes the form to be filled in, as well as a deep-link, QR-code or something similar that allows the requester’s browser (plug-in) or SSI-app to contact the provider-endpoint and set up a secure communication channel through which both can communicate electronically. From then on there are two channels between the requester and the provider: one is a traditional (manual) web-browser - web-server channel, the other is one within which the SSI-Agents of various Parties will be communicating.

It is a task of the Data Collector to orchestrate the inputs: different parts of the form may be filled in and subsequently changed in different ways. Some parts

-   are required only after a certain condition is met (which is to be evaluated whenever the data that is entered into the form is changed)
-   must or may initially be filled in manually (i.e.: through the browser);
-   must or may initially be filled in with data from a credential;
-   may be changed manually;
-   may be changed with data from a newly supplied credential.

Because of this orchestration, the interface to the verifier component can be quite simple; it is shown in the image below:

<img
  alt="Generic Verification with SSI service"
  src={useBaseUrl('images/generic-verification-with-ssi-service.png')}
/>

*Figure 5: Generic Verification with SSI service.*

The request identifier is included in messages between the Data Collector and verifier so as to allow them to handle different transactions at the same time.

We assume that the provider has specified the form and the associated validation- and issuing policies that make the following description work. We refer the reader to section \[tbd\] for an explanation of how the provider can do this.

### 6.2.  Stating a Transaction

:::info Editor's note
*The eSSIF-Lab functional architecture is not final. This section is an example of how work that is currently being done may already be documented for the purpose of furthering discussions and providing inspiration to readers.*
:::

<img
  alt="Generic Issuing with SSI service"
  src={useBaseUrl('images/generic-issuing-with-ssi-service.png')}
/>

*Figure 6: Generic Issuing with SSI service.*
