---
id: essifLab-fw-func-arch
title: eSSIF-Lab Functional Architecture
sidebar_label: Functional Architecture
scopeid: essifLab
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::info Editor's note
*This section is work in progress.*
:::

## 1. Purpose

Realizing the [eSSIF-Lab vision](essifLab-vision) is a very challenging endeavour, because of the different kinds of complexity involved. There is 'horizontal' complexity, e.g. interop issues at the technical, semantical, process and business levels. There is also a 'vertical' complexity, e.g. coherence and consistency between business policies, its processes, the data/information used therein, and the technology that makes it work. There is 'ecosystem' complexity, i.e. different groups of organizations and/or people need artifacts that work for them as a group, both 'horizontally' and 'vertically', but no further than the context of that group.

The eSSIF-Lab Functional Architecture aims to establish a %%terminology|terminology%%, %%mental models|mental-model%% and (generic) functionality that are intended to serve as a common basis that %%parties|party%% from different backgrounds can use e.g. for:
- thinking and arguing about SSI-related topics and how that contributes to realizing the [eSSIF-Lab vision](essifLab-vision);
- creating technological components that provide functionalities that fit into the architecture and hence have a great chance to be, or quickly become, interoperable with tech components that other %%parties|party%% have developed;
- discussing and resolving issues related to interfaces and protocols for tech components that provide such functionalities;
- designing and developing technical applications that support individual businesses or business ecosystems, not only as they conduct %%business transactions|transaction%%, but also in order to govern the %%policies|policy%% they need to make the technology work as they intend.

To this end, this document provides an overview of
- the functions (capabilities) that individual %%parties|party%% need in order to electronically support %%business transactions|transaction%%;
- the interactions between these functions that make such %%business transactions|transaction%% happen;
- the various %%policies|policy%% that %%parties|party%% have to govern, and put in place in order for the technical components that provide these capabilities to function in accordance with their (subjective) rules, working-instructions and other guidance.

## 2. Functional Architecture Overview

Figure 1 shows the initial *functional* eSSIF-Lab architecture, and its scope, context and *functional* components each of which is a (*functional*) %%agent|agent%% for the same party (meaning that they are all part of the same organization as defined above, and they are all (digital) 'Colleagues' of one another).

Please be aware that *functional* capabilities, components, %%agents|agent%%, etc. do not necessarily coincide with *technical* capabilities, components, %%agents|agent%%, etc. The technical components can be deployed (downloaded, installed, run), whereas a functional component is a provider of a specified set of capabilities/functionalities an implementation of which can be made part of a technical component. So it is conceivable that a technical component contains an implementation of %%issuer|issuer%%, %%wallet|wallet%%, %%holder|holder%% and %%verifier|verifier%% functional components as well as other functionalities that are not described here, e.g. related to UX, setting %%preferences|policy%%, and more. In this functional architecture, the default type of components, %%agents|agent%% etc. are *functional*.

Since the %%participants|participant%% of a %%(business) transaction|transaction%% are different %%parties|party%%, the negotiation, commitment and execution of that %%transaction|transaction%% will be done by %%agents|agent%% of these %%parties|party%%. Assuming that a single %%transaction|transaction%% has two such %%parties|party%%, we will use the term '%%Peer Party|peer-party%% (of a specific %%party|party%%, in the context of a single %%transaction|transaction%%)' to refer to the participating %%party|party%% in that %%transaction|transaction%% that is not the specific %%party|party%% itself.

When an %%agent|agent%% is involved in such a %%transaction|transaction%%, it will be communicating with a component that it assumes to be an %%agent|agent%% of the %%peer party|peer-party%% of its %%principal|principal%% (the %%agent|agent%% may obtain further assurances for that, but that's outside the scope for now). We will use the term '%%peer agent|peer-agent%% (of a specific %%agent|agent%%, in the context of a single %%transaction|transaction%%)' to refer to an %%actor|actor%% with which the specific %%agent|agent%% has a communication session. Note that establishing whether or not an %%actor|actor%% is a %%Peer Agent|peer-agent%% does not necessarily require knowing who the %%peer party|peer-party%% actually is.

The figure below is an overview of the most important *functional* components that any %%party|party%% needs to conduct electronic %%(business) transactions|transaction%%.

<img
  alt="eSSIF-Lab Single Party Functional Architecture Overview"
  src={useBaseUrl('images/essif-lab-functional-architecture.png')}
/>

*Figure 1. eSSIF-Lab Single Party Functional Architecture Overview.*

We use the following coloring conventions in this figure: red is business related, which means that we do not consider this to be part of the SSI Infrastructure. Brown is used for policies, which are defined by (or on behalf) of the principal of the component that uses them to configure themselves, and/or act according to the %%principal's|principal%% preferences and %%policies|policy%%. Green is used for generic SSI infrastructure related functions, and blue represents functions that may be implemented as 'plug-ins' for specific SSI-related technologies.

The remainder of this chapter describes the layers and their components at a high abstraction level. <!--Further details on components, such as design decisions, can be found in \[reference\].-->

### 2.1.  Business Transaction Layers

At the top of the figure are two business-related layers. Both are within the scope of the eSSIF-Lab project/architecture, yet they are outside the scope of the eSSIF-Lab infrastructure/architecture - that is because they are too business-specific.

The top layer (in the red rounded rectangle) has the functions of actual %%transactions|transaction%%: it starts with a %%transaction form|transaction-form%%, the data of which is valid, consistent and complete, from which the (business) decision can be made whether or not to engage in a %%transaction|transaction%%, and that has everything necessary to actually execute that %%transaction|transaction%%. The (administrative) results of such a %%transaction|transaction%% are then stored in business data stores. We have put this layer in the eSSIF-Lab architecture for the single purpose of showing how the components of the bottom layer contribute to conduct %%transactions|transaction%%.

The lower business layer contains two functional components, one for initiating %%transactions|transaction%% and the other for stating %%transaction|transaction%% results (as per the [*DEMO*](https://en.wikipedia.org/wiki/Design_%26_Engineering_Methodology_for_Organizations) method), each of which with an associated business %%policy|policy%% that contains business-specific %%policies|policy%%.

The task of the Data Collector (or Data Collector) is to handle and initiate requests from/to %%peer agents|peer-agent%% to engage in some kind of %%transaction|transaction%%, by negotiating and exchanging data (through one or more, physical or electronic communication channels), and to produce a %%transaction|transaction%% form whose contents are complete and valid, enabling an appropriate Colleague to decide whether or not to engage in the %%transaction|transaction%%. Note that negotiating a %%transaction|transaction%% has two parts: requesting a %%peer agent|peer-agent%% to provide data that its %%principal|principal%% needs, and providing data on behalf of its %%principal|principal%% that a %%peer agent|peer-agent%% requests. After all, a %%business transaction|transaction%% can only start after all %%parties|party%% have decided to commit, which they can only do after each of them has obtained the information it (subjectively) needs to do so. Also note that data that the data collector must ensure that the %%transaction|transaction%% context is properly maintained if it chooses to exchange data through different communication channels.

The task of the data discloser (or data discloser) is to state the (various, sometimes intermediary) results of %%transactions|transaction%%, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other %%parties|party%%. Since such state-data may change, issuing data that supersedes an earlier state implies the revocation of such a state.

Note that both components are within scope of eSSIF-Lab architecture, but NOT in scope of the eSSIF-Lab infrastructure, as they are too business-specific.

### 2.2.  SSI Roles Layer (Issuer, Verifier, Holder and Wallet)

The SSI Roles Layer contains functional components that provide the functionality associated with the well-known roles of issuer, holder, wallet and verifier. Technical components that provide such functionalities are part of the eSSIF-Lab (technical) infrastructure.

Apart from each having a specific task, as described below, implementations that are being deployed by one party should be aligned in that they support the same (sub)set(s) of SSI Protocols and Crypto features, as described in the following section.

The **issuer** functionality includes the issuing of what we will generically call 'credentials', i.e. sets of (related) statements/claims (e.g. as produced by the data discloser) that have metadata (e.g. date of issuing) and a digital signature by which third %%parties|party%% can prove its provenance and integrity. Another function of the issuer is to handle revocation (and (un)suspension) of credentials that it has issued. For such tasks, it relies on functions that are made available by the SSI Protocols and Crypto Layer.

The **wallet** functionality includes the (secure) storage of credentials - both those that have been issued by the issuer (i.e. self-signed credentials) and those that have been obtained from issuers of other %%parties|party%%. Another task of the wallet is to (securely) store (private) keys that can be used to sign or seal data on behalf of its %%principal|principal%%. Perhaps the most important task of the wallet is to ensure that credentials and keys can only become available to another component if they have the same (single) %%principal|principal%%, and will become available if such other component implements a functionality that needs it.

The **verifier** functionality is to support the data collector as it tries to acquire credentials from some other party for the purpose of negotiating a %%business transaction|transaction%%. It does so by creating %%presentation requests|presentation-request%% (or Presentation Definition as it is called in the [draft DIF specfication for Presentation Exchange](https://identity.foundation/presentation-exchange)) that ask for such credentials, sending them to a holder component of another party, receiving a response to such a request (which we call a '%%presentation|presentation%%'), verifying the %%presentation|presentation%%, i.e. checking the signature and other proofs of the veracity of both the construction of the %%presentation|presentation%% as well as its contents, thus providing the Data Collector with verified data.

The task of the **holder** is to handle %%presentation requests|presentation-request%% that it receives from verifier components (both of its %%principal|principal%%, and of other %%parties|party%%). Typically, this means looking for the requested data in the %%principal's|principal%% wallet, and using it to construct a %%presentation|presentation%% (=response). However, if the wallet doesn't have it, the holder may negotiate a %%transaction|transaction%% with a component of the designated issuer for the purpose of obtaining the needed credential, which - when obtained - it can subsequently store in the wallet and use in the %%presentation|presentation%%.

### 2.3.  SSI Protocols and Crypto Layer

While represented as a layer, the SSI Protocols and Crypto Layer can be seen more as a set of libraries that can be used by wallet, holder, issuer and %%verifier|verifier%% (WHIV) components for the purpose of actually implementing some/all of the functionality that they need to provide. Each 'Component' in this layer implements a specific technology, and any implementation of any of the WHIV components may choose which of these to use. Of course, if one of the WHIV components implements a technology, it would seem that the others would need to do so, too.

Technologies may come as a (proprietary or open source) library, as a service (offered by one or more %%parties|party%%), or both. There are way too many to mention here, but to give you an idea, here is a classification of such underlying/supporting technologies that seems to be useful. While we do mention some technologies explicitly, this should in no way be interpreted as that this would be necessary to support, or that others are not to be considered.

First, we have **credential-related technologies**, most often in the form of libraries, basically for the creation, (storing,) and verification of specific kinds of %%credentials|credential%% such as [*Verifiable Credentials*](https://www.w3.org/TR/vc-data-model/) (VCs), [*Attribute Based Credentials*](https://abc4trust.eu/index.php/pub)<sup>[ABC]</sup> (ABCs), [*X.509 Attribute Certificates*](https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-X.509-201210-S!!PDF-E), [*OIDC*](https://openid.net/developers/specs/) tokens, etc. Various projects/implementations can already be used here, such as [*Hyperledger Aries*](https://www.hyperledger.org/projects/aries), [*IRMA*](https://privacybydesign.foundation/irma-en/), [*OpenCerts*](https://opencerts.io/), [*BlockCerts*](https://www.blockcerts.org/), and more.

Then, there are **secure communications technologies**, for the purposes of (a) ensuring that a technical component owned by a specific %%party|party%% can recognize that another component as one that it has had previous communications with and/or is owned by an identified %%party|party%%, and (b) setting up a secure %%communication channel|communication-channel%%, i.e. one that guarantees message confidentiality (encryption) and integrity/authentication. A well-known way to do this is SSL, but new ones are being developed, such as [*DID Comm(unication)*](https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0005-didcomm), that uses [*peer DIDs*](https://github.com/WebOfTrustInfo/rwot8-barcelona/blob/master/draft-documents/peer-DID-method-spec-report.md) (work in progress).

Another important category is that of **crypto (related) technologies**, which are used for various purposes, such as creating/verifying digital signatures, zero-knowledge-proofs, etc. Such technologies may come as a library (e.g. [*Hyperledger/Ursa*](https://www.hyperledger.org/projects/hyperledger-ursa)), or as a service, e.g. an [*eIDAS*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32014R0910&from=EN)<sup>[eIDAS]</sup> trust service.

We conclude for now by mentioning **blockchain/distributed ledger technologies**, for secure logging of (e.g. registration) events, where such logs have the property that it is virtually impossible to change the order and/or contents of the logged events, and that the logs are highly available to those that are authorized. Both public and private blockchains are known to be used, and different SSI-solutions may use them for different purposes, e.g. the registration of schema's, %%credential types|credential-type%%, DIDs and associated DID documents, revocation accumulators, etc. Examples include [*EBSI*](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/ebsi) ([*European Blockchain Partnership*](https://ec.europa.eu/digital-single-market/en/blockchain-technologies)), [*Hyperledger Indy*](https://www.hyperledger.org/projects/hyperledger-indy) (Alastria, Findy, Sovrin), Ethereum ([*OpenCerts*](https://opencerts.io/), [*BlockCerts*](https://www.blockcerts.org/)), bitcoin ([*BlockCerts*](https://www.blockcerts.org/)) and many more.

It is expected that there are already some interfaces out there that may turn out to be useful here (e.g. (unverified) [*FIWARE*](https://fiware-idm.readthedocs.io/en/7.4.0/eidas/), CEF)

------

[ABC] Its origins lie with the [*ABC4Trust project*](https://abc4trust.eu/). Extensive [*documentation*](https://abc4trust.eu/index.php/pub) is available, e.g. an [*Architecture for Attribute-based Credential Technologies*](https://abc4trust.eu/download/Deliverable_D2.2.pdf) (also one [*for developers*](https://abc4trust.eu/download/ABC4Trust-H2.2_ABC4Trust_Architecture_for_Developers.pdf)).

[eIDAS5] [*"Regulation (EU) No 910/2014 of the European Parliament and of the Council of 23 July 2014 on electronic identification and trust services for electronic %%transactions|transaction%% in the internal market and repealing Directive 1999/93/EC"*](http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2014.257.01.0073.01.ENG). *EUR-Lex*. The European Parliament and the Council of the European Union.

------

### 2.4.  API Layers ('ESSIF Glue' and 'SSI Tech APIs')

There are two interface layers in this architecture

The '**ESSIF Glue**' interface layer consists of a [documented set of APIs](https://gitlab.grnet.gr/essif-lab/tno-ssi-service/developer-docs) between the %%data collector|data-collector%% and %%data discloser|data-discloser%% on the one hand, and the WHIV components on the other hand. The purpose of these APIs is to make calling the WHIV functions as simple as possible, given the functions of the %%data discloser|data-discloser%% and %%data collector|data-collector%%. Ultimately, we would like to see these APIs standardized. Having such APIs allows different %%parties|party%% to create their own version of the WHIV components, supporting the SSI technologies as they see fit, and shrinking or expanding functionalities as they feel appropriate. %%Parties|party%% can then select such WHIV components as they see fit.

The **SSI Tech APIs** interface layer is the union of the interfaces of the components within it. Any standardization in there is outside the scope of eSSIF-Lab.

-------

## 3. eSSIF-Lab Infrastructure Functional Components

This section details the functional specifications of the components that are in scope of the eSSIF-Lab infrastructure, i.e. in the green (rounded) rectangle as shown in the figure below:

<img
  alt="eSSIF-Lab infrastructural (functional) components"
  src={useBaseUrl('images/essif-lab-functional-architecture-infra.png')}
/>

*Figure 2: eSSIF-Lab infrastructural (functional) components.*

### 3.1.  Data Collector and Validation Policy

The purpose of the %%data collector|data-collector%% is to produce (transaction-type specific) data structures or forms, each of which contains the necessary and sufficient data that allows (an %%agent|agent%% of) its %%principal|principal%% to decide whether or not to engage in a (new) %%transaction|transaction%% of the specified type.

Typically, the %%data collector|data-collector%% would start a %%transaction|transaction%% either

-   when it receives a request from some %%agent|agent%% of another %%party|party%% for engaging in a %%transaction|transaction%% of a specific kind.
-   when it is instructed by, or on behalf of its %%principal|principal%%, to request a specific kind of %%transaction|transaction%% to some %%agent|agent%% of another %%party|party%%.[^DC.1]

In either case, a %%transaction|transaction%% form (object, context) has to be created that matches the kind of %%transaction|transaction%%, and a '**transaction-id**' must be generated that identifies this form/object/context. It will be used for binding incoming or outgoing messages to this %%transaction|transaction%%, enabling communications to remain congruent, not only with the %%agent|agent%% that requested the %%transaction|transaction%%, but also with other %%agents|agent%% from the same %%principal|principal%% and/or using different %%communication channels|communication-channel%%.

Handling/managing the various %%communication channels|communication-channel%% through which data can be exchanged is also a task of the Data Collector[^DC.2]. One reason for this is that negotiating a %%transaction|transaction%% not only requires data to be acquired, but also to be provided to the %%peer party|peer-party%%. Another reason is that the %%peer party|peer-party%% may use multiple %%agents|agent%% to provide such data, e.g. human %%agents|agent%% (that might use web-browsers, social-media apps, phones, or physical visits), %%SSI-agents|ssi-agent%% (that use the SSI infrastructure), or other %%electronic agents|digital-agent%% (e.g. services that can provide data when appropriate permissions are submitted - e.g. user consent tokens).

Thus, the %%data collector|data-collector%% is generally considered capable of obtaining data through different %%communication channels|communication-channel%%. However, the technical tracks of eSSIF-Lab will exclusively focus on the %%communication channel|communication-channel%% through which %%credentials|credential%% can be requested and obtained. Any extensions or business productization of %%data collector|data-collector%% designs may be considered in the business tracks of eSSIF-Lab. The latter is not considered any further in this section.

In order to acquire data through SSI mechanisms for filling in a form for a specific kind of %%transaction|transaction%%, the %%data collector|data-collector%% needs to know what kinds of %%credentials|credential%% it should ask for, which %%parties|party%% its %%principal|principal%% trusts to issue such %%credentials|credential%%, what kinds of verification proofs for such %%credentials|credential%% must hold and which may be disregarded.[^DC.3] Also, when the %%data collector|data-collector%% gets a %%credential|credential%% that satisfies the necessary verification proofs, it needs a way to map the contents of that %%credential|credential%% to the structure of the %%transaction|transaction%% context that is used internally by (other systems of) its %%principal|principal%%.[^DC.4] Also, as the %%data collector|data-collector%% gets more and more data - which it may get through multiple, different channels - it needs to determine whether or not the resulting set is sufficiently consistent and coherent.[^DC.5]

In order to make the %%data collector|data-collector%% work, a %%validation policy|validation-policy%% (or %%data collector policy|data-collector-policy%%) is created by, or on behalf of the %%principal|principal%%, which specifies at least:

-   the kinds of %%transactions|transaction%% the %%principal|principal%% is willing to (electronically) engage in, from both the requester and the provider perspectives;
-   for each such %%transaction type|transaction-type%%:

    -   the criteria (business rules) that should be used to determine that the form is 'clean', i.e. that the necessary and sufficient data have been obtained and that they are consistent, coherent, and suitable for making a %%transaction|transaction%% commitment decision.

    -   the kinds of %%credentials|credential%% and %%issuers|issuer%% that the %%principal|principal%% is willing to accept as sources for valid data; (optionally?), the endpoint URI at which issuing %%parties|party%% do the actual %%credential|credential%% issuing may be specified[^DC.6].

    -   for each kind of %%credential|credential%%: the verification proofs that must hold to be accepted as a source for valid data.

    -   the mapping between fields in such %%credentials|credential%% and fields in the form to be filled in.

The %%policy|policy%% must be designed in such a way that it is extendable as new features will be called for in the future.

The ability to create new %%transaction|transaction%% contexts and the availability of the %%data collector policy|data-collector-policy%% enable the %%data collector|data-collector%% to request the %%verifier|verifier%% component of its %%principal|principal%% to obtain %%credentials|credential%% of the types that it can use to fill in the %%transaction form|transaction-form%% when they satisfy the verification and validation requirements of its %%principal|principal%%.[^DC.7]

When the %%verifier|verifier%% returns such data (which comes with a list of proofs that the %%verifier|verifier%% has checked), the %%data collector|data-collector%% must then validate that data, i.e. determine whether or not it is valid for the specific %%transaction|transaction%% it is assembling the data for. The validation rules are %%party|party%%-specific and hence come from the %%data collector policy|data-collector-policy%%. For simple cases, validation can simply consist of checking whether or not all verification proofs succeeded. At the other end of the validation spectrum, the %%data collector|data-collector%% itself must make validation decisions, either electronically (according to the %%data collector policy|data-collector-policy%%) or by 'outsourcing' such decisions to human %%agents|agent%% of its %%principal|principal%% by providing an appropriate validation user interface.

As long as data is needed, the %%data collector|data-collector%% can intermittently request the %%verifier|verifier%% to produce it (or it can use other %%communication channels|communication-channel%%, which is outside scope for now). It does so until it times out, or the form has become 'clean'.

-----

[^DC.1]: This feature ensures that the %%transaction|transaction%% is really two-way, and both %%parties|party%% can request %%credentials|credential%% from the other. For example, a web-shop can then ask for a (delivery) address %%credential|credential%%, and the customer can ask for a %%credential|credential%% issued e.g. by the chamber of commerce that the web-shop is a legitimate company (and not some maffia website).

[^DC.2]: It may well be that this functionality can somehow be split off in the (near) future.

[^DC.3]: For high-value %%transactions|transaction%%, verification proofs are more important than for low-value %%transactions|transaction%%. This is to be decided by the %%principal|principal%% of the %%data collector|data-collector%%. An example from the physical world: in order to obtain a visa for China, it is required that your passport (%%credential|credential%%) remains valid for 3 months after the end of your visit. But in order to identify yourself at the reception desk of a hotel, your passport may have expired several years.

[^DC.4]: For example, a %%credential|credential%% that contains an address uses a specific schema to specify addresses, e.g. the 'PostalAddress' as defined by schema.org. This schema differs quite a bit from that of Dutch addresses as [*defined*](https://bag.basisregistraties.overheid.nl/def/bag) by the official (authentic) Dutch Registration of Addresses and Buildings (BAG). It may also well differ from the structure of addresses that databases of the %%principal|principal%% have implemented. Mapping allows such cases to be accommodated for.

[^DC.5]: Inconsistent or incoherent data is necessary for various purposes. First, it allows for correct further processing of the %%transaction|transaction%%. A non-existent postal code, or one that doesn't match the delivery address, may hinder a fluent %%transaction|transaction%% processing, resulting in additional costs and processing times. Another purpose is the early warning or detection of possible fraud/abuse. Remember that part of the data is being asked for reducing %%transaction|transaction%% %%risk|risk%%, and checking consistency/coherence of such data is part of the risk mitigation process.

[^DC.6]: This enables the %%data collector|data-collector%% to pass the endpoint URI on to the %%verifier|verifier%% when it requests for such a %%credential|credential%%, which in turn can send it to the %%holder|holder%% of other %%parties|party%% enabling them to obtain the %%credential|credential%% from that %%issuer|issuer%% endpoint if that other %%party|party%% does not have that %%credential|credential%% in its %%wallet|wallet%%. The endpoint URI can in fact be put in the %%policy|policy%%, because the (human) %%agent|agent%% that creates/maintains the %%policy|policy%% would need to know that the issuing %%party|party%% is actually issuing such %%credentials|credential%%, what their contents means, etc., and hence is capable of tracking down the URI where that %%party|party%% issues the %%credentials|credential%%.

[^DC.7]: A reference to this specification will be added when it becomes available (draft or otherwise).

-----

### 3.2.   Verifier Component, and its Policy/Preferences

The purpose of the %%verifier|verifier%% component is to support the %%data collector|data-collector%% by providing it with a single, simple API that it can use to request and obtain data that it needs to produce a clean %%transaction form|transaction-form%%, as well as the results of checking verification proofs (this is also why it is called the '%%verifier|verifier%%' component).

Typically, the %%data collector|data-collector%% would ask the %%verifier|verifier%% to provide a %%credential|credential%% that it can use to fill in a (coherent set of) field(s) in the %%transaction form|transaction-form%%. It is realistic to think that %%credentials|credential%% from different %%issuers|issuer%% - trusted by the %%verifier's|verifier%% %%principal|principal%% - can be used for this purpose. However, it is also realistic that such %%credentials|credential%% will not use the same %%credential type|credential-type%% - they might well use different schemes to provide such data. Therefore, the %%data collector|data-collector%% should specify a list of pairs (%%credential-type|credential-type%%, %%issuer|issuer%%) instances of which could all be used to provide the data it needs - which it can obtain from the %%data collector policy|data-collector-policy%%.

Then, the %%verifier|verifier%% needs to know the address and protocol that it can use to reach a %%holder|holder%% component owned by the %%party|party%% that its %%principal|principal%% is trying to negotiate the %%transaction|transaction%% with. The %%data collector|data-collector%% specifies this as part of the request - and it can do so because it has received the original request, and does all %%communication channel|communication-channel%% handling.

%%verifiers|verifier%% are not expected to handle every kind of %%credential|credential%% (e.g. VC's, ABC's, etc.) that exists, but rather a specific subset. For (at least one of) the %%credential types|credential-type%%, the %%verifier|verifier%% can construct a so-called %%presentation request|presentation-request%%, i.e. a message that is specific for the %%credential type|credential-type%% and/or associated protocol, which it can then send to the %%holder's|holder%% address.

This request message should contain at least

-   the %%transaction-id|transaction-id%%, so that when it is copied into the associated response message, the latter can be associated to the %%transaction|transaction%% it belongs to. Also, it should contain the
-   the (%%credential type|credential-type%%, %%issuer|issuer%%) pairs that may satisfy the request, and to each of these additional data, e.g. the URI of the endpoint where the %%issuer|issuer%% issues such %%credentials|credential%%, the maximum age of the %%credential|credential%%, etc.
-   meta-data that may be useful for the %%holder|holder%% (or its %%principal|principal%%), e.g. texts stating the purpose(s) for which the data will be used ([*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) Art. 5.1.b), or requesting consent ([*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) Art. 7.2) “in an intelligible and easily accessible form, using clear and plain language”.
-   a signature of the %%verifiers|verifier%% %%principal|principal%%, for the purpose of showing compliance with the [*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) (e.g. Art 28.3.h), and enabling the %%holder's|holder%% %%principal|principal%% to obtain proof that the %%verifiers|verifier%% %%principal|principal%% has violated the [*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN)'s minimization principle asked for data for a particular purpose, which can be used in an argument in disputes about data minimization ([*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) Art. 5.1.c).

The request message must be designed in such a way that it is extendable as new features will be called for in the future.

In order to make the %%verifier|verifier%% component work, a %%verifier policy|verifier-policy%% object is created by, or on behalf of the %%principal|principal%%, which specifies at least: \[to be elaborated\]

A response to this request (called a %%presentation|presentation%%) will be obtained from a %%holder|holder%% component of the %%peer party|peer-party%%. This response will contain a reference to the request, allowing the %%verifier|verifier%% to combine them. The %%verifier|verifier%% will then check that the data in the response is a %%credential|credential%% that it has asked for (correct type/%%issuer|issuer%%), verify the proofs that are provided (predominantly the digital signature), and do some additional checks (e.g. whether or not the %%credential|credential%% has expired, is revoked, and such).

Then, the %%verifier|verifier%% will send a message to the %%data collector|data-collector%%, containing the %%transaction-id|transaction-id%%, the data it has received, and the results of the various checks.

### 3.3.   Holder Component, and its Policy/Preferences

The purpose of the %%holder|holder%% component is to handle %%presentation requests|presentation-request%% that it receives from %%verifier|verifier%% components (both of its own %%principal|principal%%, and of other %%parties|party%%), and responding to such requests.

Typically, a %%holder|holder%% component would access its %%principal's|principal%% %%wallet|wallet%% to check if it has a %%credential|credential%% that it can use to construct a %%presentation|presentation%% (i.e. response) that satisfies the received request.

It may happen that the %%wallet|wallet%% does not have such a %%credential|credential%%. However, for every (%%credential|credential%%, %%issuer|issuer%%) pair, the request should specify the URI that is capable of issuing such a %%credential|credential%%. If or when the %%holder policy|holder-policy%% permit this, the %%holder|holder%% then requests its %%principal's|principal%% %%data collector|data-collector%% to initiate a new %%transaction|transaction%% that will get the %%credential|credential%% from that %%issuer|issuer%%, for which a clean %%transaction form|transaction-form%% would then consist of one that contains said %%credential|credential%%. The %%holder|holder%% would then store it in its %%principal's|principal%% %%wallet|wallet%%, and then proceed to service the %%presentation|presentation%% request as if it had obtained that %%credential|credential%% from its %%principal's|principal%% %%wallet|wallet%%.

It may also happen that the %%wallet|wallet%% has multiple %%credentials|credential%% that satisfy the request, in which case the %%holder|holder%% must choose the one to use for constructing the %%presentation|presentation%%. Again, the %%holder policy|holder-policy%% will specify how this choice needs to be made, and whether or not this can be done automatically by the %%holder|holder%%. If not, the %%holder|holder%% will need to provide for an interaction with a human Colleague that will make such decisions.

In order to make the %%holder|holder%% component work, a %%holder policy|holder-policy%% object is created by, or on behalf of the %%principal|principal%%, which specifies e.g.:

-   whether or not %%credentials|credential%% may be collected 'on the fly';
-   how to choose between %%credentials|credential%% that all satisfy a %%presentation request|presentation-request%% (and whether the %%holder|holder%% can make such choices by itself, or whether or not human interaction is required);
-   the kinds of events and data to write to a %%holder|holder%%-audit-log.

### 3.4.  Data Discloser and Issuing Policy

The purpose of the %%data discloser|data-discloser%% component is to state the (various, sometimes intermediary) results of %%transactions|transaction%%, by collecting data from the Business Data Stores, and creating a set of (related) %%statements/claims|assertion%% that can subsequently be issued to other %%parties|party%%. A special kind of result is the (provisioning of) a %%credential|credential%% that its %%principal|principal%% already has created.

Typically, and at any point in time, %%parties|party%% are capable of expressing %%statements|assertion%% about %%entities|entity%% that they know to exist. They could express %%statements|assertion%% about individuals, about themselves, the state of %%transactions|transaction%%, and so on. We will use the term '**subject (of a %%statement|assertion%% of a %%party|party%%)**' to refer to the %%entity|entity%% that this %%party|party%% knows to exist, and about whom/which the %%statement|assertion%% has been made.

We will use the term '**subject-id (of a %%statement|assertion%% of a %%party|party%%)**' to refer to the representation that this %%party|party%% has chosen to use for referring to the subject in said %%statement|assertion%%. A subject-id must have the property of being an %%identifier|identifier%% within every administrative context that this %%party|party%% uses. It need not be humanly interpretable (and preferably is not).

%%parties|party%% need to specify the kinds of %%credentials|credential%% they are willing to issue, the class of %%entities|entity%% (e.g. people, cars, %%organizations|organization%%) for which it will issue them, and the information schema (structure) that it will use in %%credentials|credential%% of such kinds.<sup>[Data Discloser.1]</sup> This allows the %%data discloser|data-discloser%% to construct data objects that conform to this information schema, and present it to the %%issuer|issuer%% component for actual issuing.

The %%data discloser policy|data-discloser-policy%% specifies the kinds of (linked-)data-objects that %%credentials|credential%% may be created for. This allows the %%data discloser|data-discloser%% to construct such a (linked-)data-objects for every subject-id that identifies a subject of the class for which a %%credential|credential%% can be issued, which can subsequently be sent to the %%issuer|issuer%% component that can turn it into a %%credential|credential%% of a specific sort.

You can think of the %%data discloser|data-discloser%% as the component that pulls all data together that can be put in a %%credential|credential%% (e.g. in a passport), and the %%issuer|issuer%% as the component that puts the data in an (empty) passport, and signing it so as to create the actual %%credential|credential%%.

The %%data discloser|data-discloser%% may either push %%credential|credential%% data to the %%issuer|issuer%% component, so that the %%issuer|issuer%% always has up-to-date %%credentials|credential%%, or it can wait until the %%issuer|issuer%% requests %%credential|credential%% data for the creation of a %%credential|credential%% of a specific type for a specific subject.

-----

[Data Discloser.1] We assume/stipulate that the %%party|party%% maintains a %%credential-catalogue|credential-catalogue%% that contains this, and other information about every kind of %%credential|credential%% that it issues, and that such catalogues are available to other %%parties|party%% that want or need to use such %%credentials|credential%%.

-----


### 3.5.  Issuer Component, and its Policy/Preferences

The purpose of the %%issuer|issuer%% component is to issue '%%credentials|credential%%', i.e. digital constructs that contain

-   sets of (related) %%statements/claims|assertion%% (e.g. as produced by the %%data discloser|data-discloser%%)
-   metadata (e.g. type of %%credential|credential%%, date of issuing and expiration, endpoints, e.g. for revocation checking, %%credential type|credential-type%%, credential advertisements, credential enforcement %%policy|policy%%, etc.)
-   proofs (e.g. a digital signature by which third %%parties|party%% can prove its provenance and integrity.

Another purpose that an %%issuer|issuer%% might serve is to provide a means that allows any other %%agent|agent%% that somehow has obtained a copy or %%presentation|presentation%% of a %%credential|credential%%, to verify whether or not the data therein is conformant to the business administration of its %%principal|principal%%. We will use the term 'revocation service' to refer to such means. Whether or not an %%issuer|issuer%% provides such a service, and what kind of revocation service is provided (e.g. a revocation list, an online revocation status protocol, etc.), is a decision that its %%principal|principal%% should make, and specify in the %%issuer  policy|issuer-policy%%.

An %%issuer|issuer%% component may issue %%credentials|credential%% in various formats, e.g. as a Verifiable Credential (VC), an Attribute-Based Credential (ABC), an OpenID Connect/JWT token, etc. The issuing %%party|party%% must specify %%credential types|credential-type%% in such a way that if the same %%credential|credential%% is issued in different formats, it is possible for an arbitrary %%verifier|verifier%% to determine whether or not two %%credentials|credential%% that have different formats, are in fact the same. One way of doing this is that the %%issuer|issuer%% generates an %%identifier|identifier%% for every %%credential|credential%% that it constructs (before expressing it in a specific format).

After the %%issuer|issuer%% has created a %%credential|credential%% (in one or more formats), it checks the %%wallet|wallet%% to see if it contains a %%credential|credential%% of the same type for the same subject. If (one or more formats) are there, and their contents are the same as the newly created %%credential|credential%%, the existing ones are revoked, deleted and/or archived/tombstoned.<sup>[Issuer.1]</sup> Then, the newly created %%credential|credential%% is added to the %%wallet|wallet%% (in one or more formats). Thus, at any point in time, the %%wallet|wallet%% will contain an actual set of all %%credentials|credential%% that have been issued.<sup>[Issuer.2]</sup>

-----

[Issuer.1] Tombstoning is a mechanism that is used e.g. in (distributed) ledgers that do not allow for actual deletion, such as blockchains, by marking entries in the ledger as 'being deleted' (i.e. adding a 'tombstone' to such entries).

[Issuer.2] This allows e.g. individuals, that have an %%issuer|issuer%% component in their SSI app, to issue self-signed %%credentials|credential%% and provide them to %%verifiers|verifier%% that request them as usual for non-self-signed %%credentials|credential%%.

-----


### 3.6.  Wallet Component, and its Policy/Preferences

The primary purpose of the %%wallet|wallet%% Component is to (securely) store data, and in particular:

-   %%credentials|credential%% - both those that have been issued by the %%issuer|issuer%% (i.e. self-signed %%credentials|credential%%) and those that have been obtained from %%issuers|issuer%% of other %%parties|party%%, and
-   (private) keys e.g. for signing/sealing data on behalf of its %%principal|principal%%.

Other kinds of data may be stored by a %%wallet|wallet%% as well - we will have to see what is practical and makes sense.

By 'securely storing data' we mean that such data

-   remains available until a request is received from an %%digital colleague|digital-colleague%% that is entitled to request deletion of such data;
-   remains unchanged during the time in which it is stored;

-   can only become available to %%digital colleagues|digital-colleague%% that implement a functionality that requires such access (e.g. a %%colleague|colleague%% %%holder|holder%% component);
-   can only be stored by %%digital colleagues|digital-colleague%% that implement a functionality that require such data to be stored (e.g. a %%colleague|colleague%% %%holder|holder%% or %%issuer|issuer%% component).

It is expected that components other than the %%holder|holder%% and %%issuer|issuer%% will (arise and) need access. One example could be a component that is capable of securely signing data on behalf of the %%principal|principal%%. Another example could be a component that implements some kind of credential revocation functionality.

Human beings cannot directly access any %%wallet|wallet%% component, not even the ones they own. They need an %%electronic agent|digital-agent%% that is capable of authenticating them as (an %%agent|agent%% of) the %%party|party%% that owns the %%wallet|wallet%% component, and upon successful authentication provides a User Interface through which the Human Being can instruct this %%electronic agent|digital-agent%% to manage the %%wallet's|wallet%% contents.

In order to make the %%wallet|wallet%% component work, a %%wallet policy|wallet-policy%% object is created by, or on behalf of the %%principal|principal%%, the contents of which remains to be specified.

## 4. Initial SSI-Agent Network Architecture

:::info Editor's note
*The eSSIF-Lab functional architecture is not final. This chapter is an example of how work that is currently being done may already be documented for the purpose of furthering discussions and providing inspiration to readers.*
:::

%%parties|party%% need to deploy (technical) components that act as their %%agents|agent%%. Individuals would typically have a mobile app whose user interface allows them to fulfill any or all of the roles of %%holder|holder%%, %%verifier|verifier%% and %%issuer|issuer%%. Wallet functionality may be included in this app, but it might equally well live in the cloud, as a second %%(digital) agent|digital-agent%%. An individual might also have (cloud) servers that %%agents|agent%% of other %%parties|party%% may contact for conducting %%transactions|transaction%% without the need for the individual itself to do something. All of this holds equally well for larger %%organizations|organization%%.

It is conceivable that the set of SSI functions is spread over multiple %%(digital) agents|digital-agent%%, in which case there is going to be a need for such %%agents|agent%% to contact one another, and conduct %%transactions|transaction%% in a way that may differ from doing that with %%agents|agent%% of other %%parties|party%%. Basically, this can be seen as %%colleagues|colleague%% interacting with one another to get things done within one %%organization|organization%%. Seen from the outside, it looks like every %%organization|organization%% has a (smaller or larger) network of %%agents|agent%%. This chapter provides more details on this topic.

The SSI-Agent Network Architecture has two viewpoints:

1.  the **intra-party or single-party SSI viewpoint**, which focuses on the set of (human and/or electronic) %%agents|agent%% of a single, specific %%party|party%%.
2.  the **inter-party or multi-party SSI viewpoint**, which is about specific functional components (e.g. %%verifier|verifier%%, %%holder|holder%%, etc.) that typically belong to different %%parties|party%%.

An individual %%party|party%% may use the single-%%party|party%% SSI viewpoint to come to grips with concerns related to the creation and maintenance of its network of its %%electronic agent|digital-agent%%. The set of concerns would include:

-   How can electronic components be onboarded as an %%agents|agent%% of this %%party|party%%?
-   How can the integrity of such %%electronic agent|digital-agent%% be stated in a trustworthy manner (do such components need some kind of accreditation certificate, do we need to come up with a service that can remotely test the integrity of a component and have it issue ephemeral integrity-certificates/%%credentials|credential%%, …)?
-   How can the %%party|party%% specify which of its %%agents|agent%% may talk with which other %%agents|agent%%, and for what purposes?
-   How should a %%party|party%% specify the %%policies|policy%% for the various SSI functionalities - what kind of support would be useful here?
-   …

%%parties|party%% that want (their %%agents|agent%%) to interact with one another may use the multi-%%party|party%% SSI viewpoint to come to grips with concerns related to the interoperability of the functionalities that their components implement. The set of concerns would include:

-   How can %%parties|party%% interact with one another at the information level (this includes decentralized semantic interoperability issues, advertising %%credentials|credential%%, how a %%party|party%% can find other %%parties|party%% that issue %%credentials|credential%% that are useful to him, etc.)
-   What kinds of underlying technologies must %%agents|agent%% of a %%party|party%% support so as to be(come) interoperable with %%parties|party%% that it wants to interact with?
-   …

## 5. High Level Transaction Flows

This chapter explains at a high level how electronic %%business transactions|transaction%% are being conducted. This is prerequisite to the explanations in chapter 4, that describe how the eSSIF-Lab architectural components are used in such %%transactions|transaction%%. For illustrative purposes, we stick to the example of getting a parking permit that we introduced in section 1.1.

### 5.1.  Overview

<br/>

<img
  alt="High-level transaction overview"
  src={useBaseUrl('images/essif-lab-high-level-trx-overview.png')}
/>

*Figure 3: High-level transaction overview.*

The adjacent figure shows how a %%transaction|transaction%% is conducted at the highest abstraction level. One %%party|party%%, called the 'Requester', sends a request for a product or service to another %%party|party%% (that we will call the 'Provider'). Then, they start to negotiate a 'transaction agreement', which means that they exchange data through various channels for the purpose of establishing the details of the product/service to be provided and the compensation, data needed to mitigate %%transaction|transaction%% %%risks|risk%%, etc., all of which is necessary for the %%parties|party%% to (individually/subjectively) decide whether or not to commit to the %%transaction|transaction%%. Section 3.2 provides more detail about this phase.

After commitment, the producer works to provide the product or service, and the requester arranges the compensation. This phase is entirely up to the business, and hence out of scope of this document.

When all is done, %%parties|party%% may issue a (signed) %%statement|assertion%% that specifies the results. Section 3.3. provides some more details about this phase.

In the example of the parking permit, a citizen (requester) sends a request to its municipality (provider) for obtaining a parking permit (the product/service). Then, the citizen fills in an online form (and uploads necessary PDFs) to enable the municipality to decide whether or not to produce the requested permit. The eSSIF-Lab architecture adds a secondary, %%electronic communication channel|digital-communication-channel%% that allows citizens to fill in the forms by using e.g. an SSI app on their phone. When the form is complete, the municipality decides whether or not to produce and issue the permit, which it can do as usual. It can also issue a %%credential|credential%% that states the result of the %%transaction|transaction%%, i.e. contains the details of the parking permit.

Please note that while %%transactions|transaction%% are symmetrical in nature (i.e. both requester and provider need data from the other so as to decide whether or not to commit to the %%transaction|transaction%%), there is an implicit asymmetry in that activities that %%parties|party%% perform are ordered in time, which implies e.g. that the commitment decisions of both %%parties|party%% cannot be done at the same time. Also, in practice, it often happens that a %%party|party%% requires the other %%party|party%% to have executed (and stated) its part of the %%transaction|transaction%% before it actually commits to the %%transaction|transaction%%. For example, a provider may require the requester to have paid for the product before it is being shipped out. Consequently, the protocols for exchanging data/%%credentials|credential%% will need to support such 'asynchronous' ways of working.

### 5.2.  Transaction Negotiation Phase

This phase starts by the requester sending a %%transaction request|transaction-request%% to the provider, and ends whenever either one of the %%parties|party%% quits, or both %%parties|party%% commit.

<img
  alt="High-level transaction negotiation"
  src={useBaseUrl('images/essif-lab-high-level-trx-negotiation.png')}
/>

*Figure 4: High-level transaction negotiation.*

This figure shows the high-level interactions during this phase. It starts by the requester sending a request for a product or service to the provider. Typically, this would lead to the provider presenting a (web) form the requester must fill in. In the eSSIF-Lab context, the form will also provide a means for setting up a SSI %%communication channel|communication-channel%%, i.e. a secure %%communication channel|communication-channel%% through which provider and requester can both request and obtain (%%presentations|presentation%% of) %%credentials|credential%%, the contents of which they can use to fill in the form. Then, after the form is 'clean', i.e. contains sufficient information for deciding whether or not to commit to the %%transaction|transaction%%, this phase ends.

Note that forms may contain fields that are required only in specific circumstances. It may only be possible to assess whether or not such circumstances apply after some (other) fields have been filled in. This means that the phase for requesting %%presentations|presentation%% and responding to such requests may very well consist of multiple requests and associated responses.

In the example of the parking permit, the municipality might ask for a %%credential|credential%% that proves the requester is a citizen that is a registered inhabitant of said municipality, a %%credential|credential%% stating its residential address, a %%credential|credential%% stating the make and license plate of the vehicle for which a parking permit is requested, etc. All this is subject to the %%policy|policy%% that the municipality has established for issuing such permits, and hence, it must be expected to differ between municipalities.

An example of conditionally required fields would be when the requester wants the municipality to customize the parking lot, e.g. because the requester has disabilities. Assessing such circumstances depends on the (optional) field where the requester must state any disabilities they have, and when that is the case, the requester may be asked to fill in fields such as whether or not a parking lot has to be customized (painted blue, with a sign stating that it is reserved for the provided license-place, or the kind of charging device if they have an electric vehicle).

Conversely, the citizen might request the (alleged) municipality to provide %%credentials|credential%%, e.g. to prove that it is actually an official municipality of the country it is part of. This would provide assurance to the citizen that it would actually be paying the fees to that municipality rather than to e.g. a rogue %%organization|organization%% that might have spoofed the website of the municipality.

### 5.3.  Stating Transactions - Issuing Credentials

In the eSSIF-Lab context, we take '%%credential|credential%%' to mean any (set of coherent) %%statement(s)|assertion%% about any (one or more) subject(s) that a single %%party|party%% has issued with proof of provenance (i.e. anyone else can determine the identity of that %%issuer|issuer%%) and a proof of integrity (i.e. anyone can determine whether or not the content of the %%credential|credential%% has been changed/tampered with since it was issued). From this, it follows that any %%party|party%% can issue any kind of %%credential|credential%% for any %%entity|entity%% that it knows to exist. A %%credential|credential%% does not need to be about a person or an %%organization|organization%%, but it can also refer to an order, a delivery, a seat-reservation, a prescription, etc.

We foresee two ways in which %%credentials|credential%% can be issued:

1.  both the requester and provider may issue %%credentials|credential%% to the other %%party|party%% in the process flow that they are in. They can do so for the purpose of stating any (lack of) progress and/or results of the administrative process flow they are in.
    In the example of the parking permit, the municipality may need some time to do some manual checks before it can issue the permit; in this case, it could issue a %%credential|credential%% that states that the citizen has requested the parking permit and any other details that might be appropriate. Also, if it can issue the parking permit straight away, it can issue a %%credential|credential%% that contains the details of that permit. The requester may issue a %%credential|credential%% to the municipality stating the date/time and kind of %%transaction|transaction%%, judgements or comments about the service that the municipality has provided.
2.  any %%party|party%% may issue a %%credential|credential%% upon request. Basically, this means that a %%party|party%% (in the role of requester) issues a request to that other %%party|party%% (in the role of provider) asking for the particular %%credential|credential%%. This is just another case of doing %%transactions|transaction%%, that can be handled just as any other kind of %%transaction|transaction%%.
    In the example of the parking permit, when a citizen requests a permit, the provider might look for an existing permit prior to issuing a new one (it would have to do such a check during the process anyway), and depending on its business logic it would be providing the %%credential|credential%% without further ado, or start the process of issuing a new one.

## 6. Detailed Transaction Flows

:::info Editor's note
*The eSSIF-Lab functional architecture is not final. This chapter is an example of how work that is currently being done may already be documented for the purpose of furthering discussions and providing inspiration to readers.*
:::

This chapter explains the details of how electronic %%business transactions|transaction%% are being conducted using the eSSIF-Lab architectural components as described in chapter 2. We keep on using the parking permit example that we introduced in section 1.1. for illustrative purposes.

Note that both %%parties|party%%, requester and provider, each have components as described in chapter 2. Also note that whenever we introduce another %%party|party%%, it too has such components. Thus, every %%party|party%% can play any of the traditional SSI roles '%%verifier|verifier%%', '%%holder|holder%%' and '%%issuer|issuer%%', and each has its own '%%wallet|wallet%%' functionality. Also, they all have %%data collector|data-collector%% and %%data discloser|data-discloser%% functionality that connect these aforementioned infrastructural components with the business applications.

When reading the next sections, please be aware that when a component of one of these %%parties|party%% communicates with another component, this other component may be of the same %%party|party%%, as well as of the other %%party|party%%. Figure 2 only shows components that belong to a single %%party|party%%.

### 6.1.  Starting a Transaction

:::info Editor's note
*The eSSIF-Lab functional architecture is not final. This section is an example of how work that is currently being done may already be documented for the purpose of furthering discussions and providing inspiration to readers.*
:::

The requester starts the %%transaction|transaction%% by pointing his web-browser to a web-page of the provider that (a) explains how to get a parking permit, and (b) provides a parking-permit application form that needs to be filled in. Technically, this means that the browser does a GET request to an endpoint that is serviced by the providers %%data collector|data-collector%% component.

The %%data collector|data-collector%% services this request by creating an empty form of a type appropriate for the request. Then, it continues with requesting data to fill in the form (and providing data as requested by the other Party). It starts this by providing a web page that includes the form to be filled in, as well as a deep-link, QR-code or something similar that allows the requester's browser (plug-in) or SSI-app to contact the provider-endpoint and set up a secure %%communication channel|communication-channel%% through which both can communicate electronically. From then on there are two channels between the requester and the provider: one is a traditional (manual) web-browser - web-server channel, the other is one within which the %%SSI-Agents|ssi-agent%% of various %%parties|party%% will be communicating.

It is a task of the %%data collector|data-collector%% to orchestrate the inputs: different parts of the form may be filled in and subsequently changed in different ways. Some parts

-   are required only after a certain condition is met (which is to be evaluated whenever the data that is entered into the form is changed)
-   must or may initially be filled in manually (i.e.: through the browser);
-   must or may initially be filled in with data from a %%credential|credential%%;
-   may be changed manually;
-   may be changed with data from a newly supplied %%credential|credential%%.

Because of this orchestration, the interface to the %%verifier|verifier%% component can be quite simple; it is shown in the image below:

<img
  alt="Generic Verification with SSI service"
  src={useBaseUrl('images/generic-verification-with-ssi-service.png')}
/>

*Figure 5: Generic Verification with SSI service.*

The request %%identifier|identifier%% is included in messages between the %%data collector|data-collector%% and %%verifier|verifier%% so as to allow them to handle different %%transactions|transaction%% at the same time.

We assume that the provider has specified the form and the associated validation- and issuing %%policies|policy%% that make the following description work. We refer the reader to section \[tbd\] for an explanation of how the provider can do this.

### 6.2.  Stating a Transaction

:::info Editor's note
*The eSSIF-Lab functional architecture is not final. This section is an example of how work that is currently being done may already be documented for the purpose of furthering discussions and providing inspiration to readers.*
:::

<img
  alt="Generic Issuing with SSI service"
  src={useBaseUrl('images/generic-issuing-with-ssi-service.png')}
/>

*Figure 6: Generic Issuing with SSI service.*
