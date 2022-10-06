---
id: essifLab-fw-conceptual-architecture-framework
title: Conceptual Architecture Framework
sidebar_label: Conceptual Architecture FW
scopetag: essifLab
date: 20220919
---

import useBaseUrl from '@docusaurus/useBaseUrl'

<!-- Use 'Mark' as an HTML tag, e.g. <Mark>text to mark</Mark?-->
export const Mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::info Editor's note
footnote numbering has to be checked once this page is sufficiently matured
:::

## 1. Purpose

[According to ISO 42010](http://www.iso-architecture.org/ieee-1471/cm/#:~:text=The%20Core%20of%20Architecture%20Description), the core of any architecture description (of a "System of Interest") consists of a specification of (%%identified|identify%%) stakeholders and their concerns, and a set of '(architecture) views' (that are governed by '(architecture) viewpoints') that address these concerns. A high quality architecture description will be complete in its list of stakeholders (or stakeholder %%roles|role%%) and their concerns. Also, it will have addressed each of them in one or more of its views.

In an %%SSI|self-sovereign-identity%% context, there typically is no single "System of Interest". Instead there are many such systems, run by different %%parties|party%%, that work together - i.e. exchange data (typically: %%(verifiable) credentials|credential%%). In such contexts, individual %%parties|party%% can and will perform a variety of functions in various %%roles|role%%, the most prominent of which are %%issuer|issuer%%, %%holder|holder%%, and %%validator|validator%%[^verifier].

[^verifier]: The %%SSI|self-sovereign-identity%% community typically talks about [verification](https://www.w3.org/TR/vc-data-model/#dfn-verify) (and the associated role of [verifier](https://www.w3.org/TR/vc-data-model/#dfn-verifier)), and [ignores validation](https://www.w3.org/TR/vc-data-model/#dfn-credential-validation:~:text=Validating%20verifiable%20credentials%20or%20verifiable%20presentations%20is%20outside%20the%20scope%20of%20this%20specification). However, since data is exchanged so that the %%party|party%% that receives %%presentations|presentation%% can actually use that data for the specific purpose(s) that the presentations are requested. This not only means that such data must be %%verifiable|verify%% (and %%verified|verify%%), but particularly that it must also be %%validatable|validate%%, and only used when it turns out to be %%valid|validate%% for further processing.

The purpose of this document is
- to provide a (conceptual) framework that shows how individual "Systems of Interest" that various %%parties|party%% run can be conceived to work together, i.e. exchange data (typically: %%(verifiable) credentials|credential%%) between them;
- to derive what this means in terms of %%capabilities|capability%% that such systems need, and to highlight for each of them what this means in terms of
  - design/define time: %%governance|governance%% (and %%governance|governance%% processes);
  - operational/runtime: kinds of %%actions|action%% that (designated) %%employees|employee%% of the %%parties|party%% will need to be capable of performing on their behalf;
  - the creation and maintenance of the various %%policies|policy%% for an individual %%capability|capability%%, so that such %%employees|employee%% will know how to operate; that is: when they actually execute such %%actions|action%%, they will do so in accordance with the intention of the %%party|party%% on whose behalf they do so.

Thus, this document can be used as a mental model that can help create and maintain coherence and consistence between governance architectures and technical architectures.

This document assumes the reader is familiar with the [eSSIF-Lab mental models](/docs/essifLab-pattern-list), in particular the one about [Parties, Actors and Actions](/docs/terms/pattern-party-actor-action).

## 2. Context

%%SSI|self-sovereign-identity%% is all about the exchange of data, typically in the form of %%(verifiable) credentials|credential%% (data that represents a set of claims, each of which is a statement about a particular %%entity|entity%% (the %%subject|subject%% of the claim)).

The context within which %%SSI|self-sovereign-identity%% is used consists of various %%parties|party%%, each of which has set its own %%objectives|objective%% (its %%mission|mission%% being the most prominent one). They have processes that seek to achieve the realization of these objectives. We only focus on the %%information processes|information-process%% (production processes are out of scope), i.e. processes in which various kinds of data are manipluated. In order to exchange data, %%information processes|information-process%% need a number of %%capabilities|capability%% that enable them to:
- formulate requests (to other %%parties|party%%) for sending data, and receiving responses and obtaining such data that can easily be %%validated|validate%%, i.e.: that it an %%agent|agent%% that receives/obtains such data can easily determine whether or not it is %%valid|validate%% (in the eyes of its %%principal|principal%%) to be used for further processing and the purposes that such processing serves. We provisionally call  this the 'usage %%capability|capability%%'.
- offer data that it has to other %%parties|party%%, i.e. create and publish %%advertisements|advertisement%% for such offerings, and means by which such other %%parties|party%% can request for such data and obtain it (all, of course, %%compliant|compliance%% with the %%policies|policy%% that this party has specified). We provisionally call this the 'provisioning %%capability|capability%%';
- store data, for later use. We provisionally call this the 'storage %%capability|capability%%'.

%%Parties|party%% may have any or all of these %%capabilities|capability%%, as illustrated in the following figure. The figure also shows that (implementations of) such %%capabilities|capability-of-an-actor%% must have the ability to communicate with (implementations of) %%capabilities|capability-of-an-actor%% of other %%parties|party%%.

<p align="center">
<img
  alt="Information processes and Capabilities"
  src={useBaseUrl('images/essif-lab-funcarch-ssi-basic-capabilities.png')}
/><i>Figure 1. Context - Information processes and Capabilities.</i>
</p>

Disclaimer: the figure is meant to introduce the idea of %%capabilities|capability%% that support information processes. It only shows the most prominent ones that are needed for %%SSI|self-sovereign-identity%%.

## 3. Capabilities

A %%party|party%% is said to have a %%capability|capability%% if it can (operationally, i.e. at runtime) have particular things done according to the %%policies|policy%% that specify the %%party|party%%-specific details of how that should be done, constraints that should be adhered to, etc. This implies that the %%party|party%% has (digital and/or human) %%employees|employee%% that have been assigned tasks to do the associated work, and/or %%outsource|outsourcing%% such tasks.

The following subsections provide a draft description of the %%capabilities|capability%% mentioned in the figure above.
### 3.1. Usage Capability

The purpose of the usage %%capability|capability%% is to ensure that whenever a %%party|party%% intends to process data for some purpose, it can:
- find %%parties|party%% that can provide such data;
- formulate criteria (that are specific for each purpose) to distinguish between data that is (not) %%valid|validate%% for the purpose(s) that the data will be processed for;
- provide the circumstances and/or satisfy the conditions for its (designated) %%employees|employee%% so that they can request such data, obtain and %%verify|verify%% data from responses to such requests, to %%validate|validate%% the data for the purpose(s) the data was requested, and to process the (%%validated|validate%%) data in the appropriate %%information processes|information-process%%.

This %%capability|capability%% consists of
- runtime/operational parts, where %%agents|agent%% request, %%verify|verify%%, and %%validate|validate%% such data (the further processing is done using %%capabilities|capability%% of the %%information processes|information-process%%);
- a design-time part, in which the %%party|party%% determines for every information process when data is needed, what kinds of data that would be, what the %%verification criteria|verify%% are, what the %%validation criteria|validate%% are, and how this data is to be subsequently processed.
- a mapping part, in which such criteria are converted into %%policies|policy%% for %%employees|employee%% (that are tasked to do the operational work) can read and understand, and use to perform the %%verification|verify%%, %%validation|validate%% and other, related kinds of %%actions|action%% in the way as intended by the %%party|party%% on whose behalf they will be %%acting|action%%.

### 2.3. Storage Capability

The purpose of the storage %%capability|capability%% is to ensure that a %%party|party%% can cache data (typically: %%credentials|credential%%) in such a way that the confidentiality (privacy) and integrity of the stored data is guaranteed, and that only designated %%employees|employee%% (either of that %%party|party%% itself, but also of other %%parties|party%%) are provided with rights and/or duties to access (read, write) that cache.

This %%capability|capability%% consists of
- runtime/operational parts, such as
  - a %%wallet|wallet%% (the actual store/cache), that is capable of servicing requests for storing, retrieving, modifying and/or deleting %%credentials|credential%% (perhaps also other data) from the store/cache, according to the access control %%policy|policy%% of its %%owner|owner%%;
  - (at least) one %%holder|holder%% (i.e. an %%employee|employee%% that is capable of communicating with other %%employees|employee%% for the purpose of
    - requesting and obtaining %%credentials|credential%% that it subsequently stores), and
    - receiving %%presentation requests|presentation-request%%, processing such requests, and responding with either a %%presentation|presentation%% or an error.[^permissions]
- a design-time part, in which the %%party|party%% %%manages|management%% the %%mandates|mandate%% (including consents) for its own %%employees|employee%%, as well as for %%employees|employee%% of other %%parties|party%%.

[^permissions]: <sup>permissions</sup> every such %%holder|holder%% needs to be appropriately %%mandated|mandate%%; this would typically be part of the %%onboarding|onboarding%% process of that %%holder|holder%%.

### 2.4. Provisioning Capability

The purpose of the provisioning %%capability|capability%% is to ensure that a %%party|party%% can
- create and subsequently issue %%credential|credential%% of specific kinds upon request, and
- %%advertise|advertisement%% the kinds of %%credentials|credential%% that it is capable and willing to issue, in such a way that other %%parties|party%% can find these advertisements and use their contents to determine whether or not such %%credentials|credential%% contain data that are %%valid|validate%% for being processed by (or on behalf of) tht %%party|party%% for some specific purpose.

A %%party|party%% that has this %%capability|capability%% will have '%%employees|employee%%' that
- deploy and run components, or outsource the deployment and running of such components this to other %%parties|party%% (which we call service providers), and provide them with the %%policies|policy%% that enable them to fulfill their task, so that they - in our parlance - are %%onboarded|onboarding%% and hence qualify as %%employees|employee%% of the %%party|party%%. These services will then, as %%agents|agent%% of this %%party|party%%, provide services such as (but not limited to):
  - supplying %%credentials|credential%% upon request;
  - revoking %%credentials|credential%% whenever (parts of) their contents is no longer considered to be true in the %%knowledge|knowledge%% of the %%party|party%%;
  - signing %%credentials|credential%% on behalf of the %%party|party%%;
  - presenting the %%party's|party%% %%offerings|advertisement%% for the kinds of %%credentials|credential%% that it is willing and able to issue (such that other %%parties|party%% can decide whether or not the contents of such credentials are %%valid|validate%% for one or more of its purposes);
  - etc.
- deploy and run (design-time) processes, in which it
  - constructs the %%advertisements|advertisement%% for the kinds of %%credentials|credential%% it will be issuing;
  - establishes the criteria that the components that it has running (and %%act|action%% on its behalf), must use to determine whether or not to service requests that they receive;
  - decides what related services to use (such as services for revocation[^additional-provisioning-services]), and
- a mapping part, in which
  - the service request criteria are converted into %%policies|policy%% that %%employees|employee%% (that are tasked to do the operational work on the %%party's|party%% behalf) can read and understand, and use to decide whether or not to service issuing requests in the way as intended by the %%party|party%% on whose behalf they %%act|action%%.
  - additional (provisioning-related) services are
  - it is determined at what endpoint(s) requests for supplying such %%credentials|credential%% will be serviced;

[^additional-provisioning-services]: The %%party|party%% may want to also implement additional servicesthat are related to the provisioning of %%credentials|credential%%, such as services for

Provisioning also includes the issuing of %%credentials|credential%% that contain claims that %%mandate|mandate%%[^mandate] specific %%agents|agent%% (the claim's %%subjects|subject%%) for specific kinds of access (read, update, write, ...) to functions that are provided by designated %%agents|agent%% of the %%party|party%% with that provisioning %%capability|capability%%.

[^mandate]: <sup>mandate</sup> A mandate for acces to the %%party's|party%% Credential Store can also be seen as a consent of that %%party|party%% to the mandatee (%%agent|agent%%)

## 4. Functional Components

While %%parties|party%% typically have all these %%capabilities|capability%%, they each will have their own, subjective %%expectations|expectation%% regarding the particular ways in which such %%capabilities|capability%% should operate. Such %%expectations|expectation%% must be made explicit, e.g. by means of %%policies|policy%% that %%employees|employee%% that are %%mandated|mandate%% to perform associated %%actions|action%% can read and interpret such that they execute these %%actions|action%% according to the intentions of the %%party|party%% on whose behalf they do so.

The following figure shows how parties can furnish the aforementioned %%capabilities|capability%% in terms of some generic functional components.

<p align="center">
<img
  alt="Information processes and Capabilities"
  src={useBaseUrl('/images/essif-lab-funcarch-ssi-aware.png')}
/><i>Figure 1. Context - Information processes and Capabilities.</i>
</p>

You can see e.g. that a %%capability|capability%% may be constructed by one or more functional components. The 'storage %%capability|capability%%', for example, has
- a %%wallet|wallet%% component, that holds %%credentials|credential%% (and perhaps other data), has a simple interface for doing [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations (the basic operations on data stores), and a mechanism to ensure that requests will only be serviced if the requesting component presents a proper %%mandate|mandate%% (permission, consent, …) for the requested operation.
- a %%holder|holder%% component, that can interact with %%issuer|issuer%%and %%validator|validator%% components for exchanging %%credentials|credential%%)

Note that every component in the figure has two parts:
- the IT that is running on some computer. Note that this IT may be controlled by a %%party|party%% (typically called 'service provider') that is not the %%party|party%% on whose behalf the IT will be functioning.
- a %%policy|policy%%, authored by the %%party|party%% on whose behalf the component functions, where the %%policy|policy%% specifies the %%party|party%%-specific ways of its functioning. In the Wallet example, it would contain e.g., the access control criteria for deciding whether or not to service the various requests.

What the figure does not show is that a mapping or translation %%activity|action%% may be called for to translate the 'business speak' that states the contents of the %%policies|policy%% into '%%employee|employee%%-specific speak', i.e. data/texts that %%employees|employee%% (that are tasked to execute the associated operational %%actions|action%%), can read and interpret such that when they use them to execute such %%actions|action%% on behalf of the %%party|party%% that authored the (business) %%policies|policy%%, they will do so in accordance with the intensions of that %%party|party%%. Since %%employees|employee%% can be human, non-human, and typically have different %%capabilities|capability-of-an-actor%% for understanding %%policy|policy%%-data, a single business-%%policy|policy%% might need to be translated into multiple operational %%policies|policy%%.

### 4.1. Validator Component {#validator-component}

The purpose of the "%%validator|validator%% component" is to request and obtain data (typically: %%presentations|presentation%%) that an information process can subsequently use for further processing. This implies that such data must be %%valid|validate%% for the kind of processing that it is requested and obtained.

It also implies that such components need a %%policy|validator-policy%% that states the kinds of processing for which data is to be gathered, and for each kind of processing:
- a specification (syntax, semantics) of the data set that can be used in that further processing (which can be visualized as a form that can be filled in);
- a list of criteria that can be used to determine whether the data set is %%valid|validate%% or not. The data that the %%validator|validator%% component itself needs to evaluate such criteria may be obtained from different sources, e.g.

Such %%policies|policy%% may also provided further guidance, so that %%agents|agent%% can learn e.g.
- what protocols/technologies to use,
- where requests should be sent to (endpoints, addresses, etc.),
- other data that is particular to a %%communication channel|communication-channel%% that the %%agent|agent%% uses;
- how to %%verify|verify%% (parts of) the data that is being obtained;
- etc.

A validator component must be associated with
- a %%governance|governance%% process that provides the %%business policy|policy%%, and
- a mechanism that translates the %%business policy|policy%% in appropriate %%operational policies|policy%%.

### 4.2. Issuer Component {#issuer-component}

The purpose of the %%Issuer|issuer%% Component is to ensure that requests for data (typically in the form of %%(verifiable) credentials|credential%%) can be received and treated. Treatment consists of either accepting the request, and subsequently supplying the data/%%credentials|credential%% to the requesting component, or rejecting the request, and (optionally) informing the requesting component thereof.

The Issuer Component typically requires an %%Issuer Policy|issuer-policy%% that provide guidance to %%agents|agent%% that execute %%actions|action%% on behalf of the %%party|party%% that runs the component. This %%policy|policy%% would state, e.g.:
- the kinds of data/%%credentials|credential%% that may be provided;
- %%communication channels|communication-channel%% through which such data may be provided, and for every such %%channel|communication-channel%%:
  - the criteria that must hold to accept or reject a request;
  - guidance for requesting data (e.g.: %%presentations|presentation%%), for the purpose of evaluating such criteria;
  - guidance for (%%verifying|verify%% and) %%validating|validate%% data that comes from responses to such requests;
  - guidance for the construction of %%credentials|credential%% (e.g. with respect to the kinds of proofs/signatures to use, expiry, status, terms of use, the use of a refresh service, revocation service, etc.)

An Issuer Component must be associated with:
- a %%governance|governance%% process that provides the %%business policy|policy%% for issuer components, and
- a mechanism that translates the %%business policy|policy%% in appropriate %%operational policies|policy%%.

### 4.3. Revocation Component {#revocation-component}

The purpose of the %%Revocation component|revocation-component%% is:
- to determine the kind(s) of revocation mechanisms that the %%party|party%% that runs the
- to ensure that %%credentials|credential%% that have been issued on behalf of the %%party|party%% that runs this component, are revoked whenever a situation is detected (in some %%information process|information-process%%) that shows that one or more of the claims in the %%credential|credential%% are no longer true (in the %%knowledge|knowledge%% of that %%party|party%%);
-

The Revocation Component typically requires an %%Revocation Policy|revocation-policy%% that provide guidance to %%agents|agent%% that execute %%actions|action%% on behalf of the %%party|party%% that runs the component. This %%policy|policy%% would state, e.g.:
-

A Revocation Component must be associated with:
- a %%governance|governance%% process that provides the %%business policy|policy%% for revocation components, and
- a mechanism that translates the %%business policy|policy%% in appropriate %%operational policies|policy%%.

### 4.4. Wallet  Component {#wallet-component}

The purpose of the %%Wallet|wallet%%  Component is to

The Wallet  Component typically requires an %%Wallet Policy|wallet-policy%% that provide guidance to %%agents|agent%% that execute %%actions|action%% on behalf of the %%party|party%% that runs the component. This %%policy|policy%% would state, e.g.:
-

A Wallet  Component must be associated with:
- a %%governance|governance%% process that provides the %%business policy|policy%% for wallet components, and
- a mechanism that translates the %%business policy|policy%% in appropriate %%operational policies|policy%%.

### 4.5. Holder Component {#holder-component}

The purpose of the %%Holder|holder%% Component is to

The Holder Component typically requires an %%Holder Policy|holder-policy%% that provide guidance to %%agents|agent%% that execute %%actions|action%% on behalf of the %%party|party%% that runs the component. This %%policy|policy%% would state, e.g.:
-

A Holder Component must be associated with:
- a %%governance|governance%% process that provides the %%business policy|policy%% for holder components, and
- a mechanism that translates the %%business policy|policy%% in appropriate %%operational policies|policy%%.

### 3.3.   Holder Component, and its Policy/Preferences

The purpose of the %%holder|holder%% component is to handle %%presentation requests|presentation-request%% that it receives from %%verifier|verifier%% components (both of its own %%principal|principal%%, and of other %%parties|party%%), and responding to such requests.

Typically, a %%holder|holder%% component would access its %%principal's|principal%% %%wallet|wallet%% to check if it has a %%credential|credential%% that it can use to construct a %%presentation|presentation%% (i.e. response) that satisfies the received request.

It may happen that the %%wallet|wallet%% does not have such a %%credential|credential%%. However, for every (%%credential|credential%%, %%issuer|issuer%%) pair, the request should specify the URI that is capable of issuing such a %%credential|credential%%. If or when the %%holder policy|holder-policy%% permit this, the %%holder|holder%% then requests its %%principal's|principal%% data collector to initiate a new %%transaction|transaction%% that will get the %%credential|credential%% from that %%issuer|issuer%%, for which a clean %%transaction form|transaction-form%% would then consist of one that contains said %%credential|credential%%. The %%holder|holder%% would then store it in its %%principal's|principal%% %%wallet|wallet%%, and then proceed to service the %%presentation|presentation%% request as if it had obtained that %%credential|credential%% from its %%principal's|principal%% %%wallet|wallet%%.

It may also happen that the %%wallet|wallet%% has multiple %%credentials|credential%% that satisfy the request, in which case the %%holder|holder%% must choose the one to use for constructing the %%presentation|presentation%%. Again, the %%holder policy|holder-policy%% will specify how this choice needs to be made, and whether or not this can be done automatically by the %%holder|holder%%. If not, the %%holder|holder%% will need to provide for an interaction with a human Colleague that will make such decisions.

In order to make the %%holder|holder%% component work, a %%holder policy|holder-policy%% object is created by, or on behalf of the %%principal|principal%%, which specifies e.g.:

-   whether or not %%credentials|credential%% may be collected 'on the fly';
-   how to choose between %%credentials|credential%% that all satisfy a %%presentation request|presentation-request%% (and whether the %%holder|holder%% can make such choices by itself, or whether or not human interaction is required);
-   the kinds of events and data to write to a %%holder|holder%%-audit-log.

### 3.5.  Issuer Component, and its Policy/Preferences

The purpose of the %%issuer|issuer%% component is to issue '%%credentials|credential%%', i.e. digital constructs that contain

-   sets of (related) %%statements/claims|assertion%% (e.g. as produced by the data discloser)
-   metadata (e.g. type of %%credential|credential%%, date of issuing and expiration, endpoints, e.g. for revocation checking, %%credential type|credential-type%%, credential advertisements, credential enforcement %%policy|policy%%, etc.)
-   proofs (e.g. a digital signature by which third %%parties|party%% can prove its provenance and integrity.

Another purpose that an %%issuer|issuer%% might serve is to provide a means that allows any other %%agent|agent%% that somehow has obtained a copy or %%presentation|presentation%% of a %%credential|credential%%, to verify whether or not the data therein is conformant to the business administration of its %%principal|principal%%. We will use the term 'revocation service' to refer to such means. Whether or not an %%issuer|issuer%% provides such a service, and what kind of revocation service is provided (e.g. a revocation list, an online revocation status protocol, etc.), is a decision that its %%principal|principal%% should make, and specify in the %%issuer  policy|issuer-policy%%.

An %%issuer|issuer%% component may issue %%credentials|credential%% in various formats, e.g. as a Verifiable Credential (VC), an Attribute-Based Credential (ABC), an OpenID Connect/JWT token, etc. The issuing %%party|party%% must specify %%credential types|credential-type%% in such a way that if the same %%credential|credential%% is issued in different formats, it is possible for an arbitrary %%verifier|verifier%% to determine whether or not two %%credentials|credential%% that have different formats, are in fact the same. One way of doing this is that the %%issuer|issuer%% generates an %%identifier|identifier%% for every %%credential|credential%% that it constructs (before expressing it in a specific format).

After the %%issuer|issuer%% has created a %%credential|credential%% (in one or more formats), it checks the %%wallet|wallet%% to see if it contains a %%credential|credential%% of the same type for the same %%subject|subject%%. If (one or more formats) are there, and their contents are the same as the newly created %%credential|credential%%, the existing ones are revoked, deleted and/or archived/tombstoned.<sup>[Issuer.1]</sup> Then, the newly created %%credential|credential%% is added to the %%wallet|wallet%% (in one or more formats). Thus, at any point in time, the %%wallet|wallet%% will contain an actual set of all %%credentials|credential%% that have been issued.<sup>[Issuer.2]</sup>

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

-   remains available until a request is received from an %%digital colleague|colleague%% that is entitled to request deletion of such data;
-   remains unchanged during the time in which it is stored;

-   can only become available to %%digital colleagues|colleague%% that implement a functionality that requires such access (e.g. a %%colleague|colleague%% %%holder|holder%% component);
-   can only be stored by %%digital colleagues|colleague%% that implement a functionality that require such data to be stored (e.g. a %%colleague|colleague%% %%holder|holder%% or %%issuer|issuer%% component).

It is expected that components other than the %%holder|holder%% and %%issuer|issuer%% will (arise and) need access. One example could be a component that is capable of securely signing data on behalf of the %%principal|principal%%. Another example could be a component that implements some kind of credential revocation functionality.

Human beings cannot directly access any %%wallet|wallet%% component, not even the ones they own. They need an %%electronic agent|agent%% that is capable of authenticating them as (an %%agent|agent%% of) the %%party|party%% that owns the %%wallet|wallet%% component, and upon successful authentication provides a User Interface through which the Human Being can instruct this %%electronic agent|agent%% to manage the %%wallet's|wallet%% contents.

In order to make the %%wallet|wallet%% component work, a %%wallet policy|wallet-policy%% object is created by, or on behalf of the %%principal|principal%%, the contents of which remains to be specified.
