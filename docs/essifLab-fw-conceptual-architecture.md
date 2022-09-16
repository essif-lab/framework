---
id: essifLab-fw-conceptual-architecture
title: eSSIF-Lab Conceptual Architecture
sidebar_label: Conceptual Architecture
scopetag: essifLab
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

<!-- Use 'Mark' as an HTML tag, e.g. <Mark>text to mark</Mark?-->
export const Mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::info Editor's note
*This page needs to be revised/updated.*
:::

:::info Editor's note
footnote numbering has to be checked once this page is sufficiently matured
:::

## 1. Purpose

[According to ISO 42010](http://www.iso-architecture.org/ieee-1471/cm/#:~:text=The%20Core%20of%20Architecture%20Description), the core of any architecture description (of a "System of Interest") consists of a specification of (%%identified|identify%%) stakeholders and their concerns, and a set of '(architecture) views' (that are governed by '(architecture) viewpoints') that address these concerns. A high quality architecture description will be complete in its list of stakeholders (or stakeholder %%roles|role%%) and their concerns. Also, it will have addressed each of them in one or more of its views.

This conceptual architecture is intended to contribute to architectural descriptions for systems that employ %%SSI|self-sovereign-identity%%, by providing high-level overviews and explaining them to (non-tech) readers, enabling them to create high quality architecture descriptions for '%%SSI|self-sovereign-identity%%-aware' systems.

This document assumes the reader is familiar with the [eSSIF-Lab mental models](/docs/essifLab-pattern-list), in particular the one about [Parties, Actors and Actions](/docs/terms/pattern-party-actor-action).

## 2. Context

%%SSI|self-sovereign-identity%% is all about the exchange of data, typically in the form of %%credentials|credential%% (data that represents a set of claims, each of which is a statement about a particular %%entity|entity%% (the %%subject|subject%% of the claim)).

The context within which %%SSI|self-sovereign-identity%% is used consists of various %%parties|party%%, each of which has set its own %%objectives|objective%% (its %%mission|mission%% being the most prominent one). They have processes that seek to achieve the realization of these objectives. We only focus on the information processes (production processes are out of scope), i.e. processes in which various kinds of data are manipluated. Specifically, data can be
- requested, obtained and %%validated|validate%% for further processing. We use the phrase 'usage capability' to refer to the capability of a %%party|party%% to do this.
- provided (and advertised) - the 'provisioning capability';
- stored - the 'storage capability'.

## 3. Capabilities

%%Parties|party%% may have any or all of these capabilities, as illustrated in the following figure. The figure also shows that such capabilities are expected to be able to communicate with capabilities of other %%parties|party%%.

<p align="center">
<img
  alt="Information processes and Capabilities"
  src={useBaseUrl('images/essif-lab-funcarch-ssi-basic-capabilities.png')}
/><i>Figure 1. Context - Information processes and Capabilities.</i>
</p>

### 2.1. Information Processes

Figure 1 shows that every %%party|party%% has information processes. Each such process exists to serve one or more specific purposes (%%objectives|objective%%) of the %%party|party%%. It typically needs some information, process it in a certain way, and produce a result, which is the creation, updating or deletion of parts of that %%party's|party%% %%knowledge|knowledge%%.[^other-processes]  In practice, this means that the %%actors|actor%% that execute (parts of) an information process will create, update, store, (un)suspend, revoke, and disseminate data that represents the information.

[^other-processes]: <sup>[other-processes]</sup> A %%party|party%% may also run other kinds of processes, e.g. for producing tangible products. Insofar as such processes use (data that represents) specific information, they may be considered information processes. The actual production of tangible products, however, is outside the scope of this document.

Note that every %%party|party%% is autonomous (sovereign) when it comes to the specification of its information processes. This means it can decide how/what data represents what information (syntax, semantics), how and when data is created, modified, etc. Specifically, each %%party|party%% gets to decide what (kinds of) information it will be sharing, how this will be done, with whom/under what conditions, etc. Also, it gets to decide what data it needs in its information processes, where it gets the data from (e.g. itself, or another %%party|party%%), what makes data %%valid|validate%% for specific purposes and how to determine this. A %%party|party%% will need to establish %%management|management%%- and %%governance|governance%% processes to decide such things.

### 2.2. Usage Capability

The purpose of the usage capability is to ensure that whenever a %%party|party%% intends to proces data for some purpose:
- it can find %%parties|party%% that can provide such data;
- it can formulate criteria (that are specific for each purpose) to distinguish between data that is %%valid|validate%% and data that is not;
- it can provide the circumstances and/or satisfy the conditions for its (designated) %%employees|employee%% so that they can request such data, obtain and %%verify|verify%% data from responses to such requests, to %%validate|validate%% the data for the purpose(s) the data was requested, and to process the (%%validated|validate%%) data in the appropriate information processes.

This capability consists of
- runtime/operational parts, where %%agents|agent%% request, %%verify|verify%%, and %%validate|validate%%  such data (the further processing is done using capabilities of the information processes);
- a design-time part, in which the %%party|party%% determines for every information process when data is needed, what kinds of data that would be, what the %%verification critieria|verify%% are, what the %%validation criteria|validate%% are, and how this data is to be subsequently processed.
- a mapping part, in which such criteria are converted into %%policies|policy%% that %%actors|actor%% (that are tasked to do the operational work on the %%party's|party%% behalf) can read and understand, and use to perform the %%verification|verify%%, %%validation|validate%% and other, related kinds of %%actions|action%% in the way as intended by the %%party|party%% on whose behalf they %%act|action%%.

### 2.3. Storage Capability

The purpose of the storage capability is to ensure that a %%party|party%% can cache data (typically: %%credentials|credential%%) in such a way that the confidentiality (privacy) and integrity of the stored data is guaranteed, and that only designated %%employees|employee%% (either of that %%party|party%% itself, but also of other %%parties|party%%) are provided with rights and/or duties to access (read, write) that cache.

This capability consists of
- runtime/operational parts, such as
  - a %%Wallet|wallet%% (the actual store/cache), that is capable of servicing requests for storing, retrieving, modifying and/or deleting %%credentials|credential%% (perhaps also other data) from the store/cache, according to the access control %%policy|policy%% of its %%owner|owner%%;
  - (at least) one %%Holder|holder%% (i.e. an %%employee|employee%% that is capable of communicating with other %%employees|employee%% for the purpose of
    - requesting and obtaining %%credentials|credential%% that it subsequently stores), and
    - receiving %%presentation requests|presentation-request%%, processing such requests, and responding with either a %%presentation|presentation%% or an error.[^permissions]
- a design-time part, in which the %%party|party%% %%manages|management%% the %%mandates|mandate%% (including consents) for its own %%employees|employee%%, as well as for %%employees|employee%% of other %%parties|party%%.

[^permissions]: <sup>permissions</sup> every such %%holder|holder%% needs to be appropriately %%mandated|mandate%%; this would typically be part of the %%onboarding|onboarding%% process of that %%holder|holder%%.

### 2.4. Provisioning Capability

The purpose of the provisioning capability is to ensure that a %%party|party%% can
- create and subsequently issue %%credential|credential%% of specific kinds upon request, and
- %%advertise|advertisement%% the kinds of %%credentials|credential%% that it is capable and willing to issue, in such a way that other %%parties|party%% can find these advertisements and use their contents to determine whether or not such %%credentials|credential%% contain data that are %%valid|validate%% for being processed by (or on behalf of) tht %%party|party%% for some specific purpose.

This capability consists of
- runtime/operational parts, where %%agents|agent%% receive requests for supplying/issuing %%credentials|credential%%, decide whether or not to service such requests (based on a %%policy|policy%% of their %%principal|principal%%), and depending on the decision either construct the requested %%credentials|credential%% or an appropriate error message, which are returned in response to that request;
- a design-time part, in which the %%party|party%%
  - constructs the %%advertisements|advertisement%% for the kinds of %%credentials|credential%% it will be issuing;
  - establishes the criteria that its %%agents|agent%% must use to determine whether or not to service issuing requests;
- a mapping part, in which
  - such criteria are converted into %%policies|policy%% that %%employees|employee%% (that are tasked to do the operational work on the %%party's|party%% behalf) can read and understand, and use to decide whether or not to service issuing requests in the way as intended by the %%party|party%% on whose behalf they %%act|action%%.
  - it is determined at what endpoint(s) requests for supplying such %%credentials|credential%% will be serviced;

Provisioning also includes the issuing of %%credentials|credential%% that contain claims that %%mandate|mandate%%[^mandate] specific %%agents|agent%% (the claim's %%subjects|subject%%) for specific kinds of access (read, update, write, ...) to functions that are provided by designated %%agents|agent%% of the %%party|party%% with that provisioning capability.

[^mandate]: <sup>mandate</sup> A mandate for acces to the %%party's|party%% Credential Store can also be seen as a consent of that %%party|party%% to the mandatee (%%agent|agent%%)

## 4. Functional Components

While %%parties|party%% typically have all these capabilities, they each will have their own, subjective %%expectations|expectation%% regarding the particular ways in which such capabilities should operate. Such %%expectations|expectation%% must be made explicit, e.g. by means of %%policies|policy%% that %%employees|employee%% that are %%mandated|mandate%% to perform associated %%actions|action%% can read and interpret such that they execute these %%actions|action%% according to the intentions of the %%party|party%% on whose behalf they do so.

The following figure shows how parties can furnish the aforementioned capabilities in terms of some generic functional components.

<p align="center">
<img
  alt="Information processes and Capabilities"
  src={useBaseUrl('/images/essif-lab-funcarch-ssi-aware.png')}
/><i>Figure 1. Context - Information processes and Capabilities.</i>
</p>

You can see e.g. that a capability may be constructed by one or more functional components. The 'storage capability', for example, has
- a %%wallet|wallet%% component, that holds %%credentials|credential%% (and perhaps other data), has a simple interface for doing [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations (the basic operations on data stores), and a mechanism to ensure that requests will only be serviced if the requesting component presents a proper %%mandate|mandate%% (permission, consent, …) for the requested operation.
- a %%Holder|holder%% component, that can interact with %%issuer|issuer%% and %%validator|validator%% components for exchanging credentials)

Note that every component in the figure has two parts:
- the IT that is running on some computer. Note that this IT may be controlled by a %%party|party%% (typically called 'service provider') that is not the %%party|party%% on whose behalf the IT will be functioning.
- a %%policy|policy%%, authored by the %%party|party%% on whose behalf the component functions, where the %%policy|policy%% specifies the %%party|party%%-specific ways of its functioning. In the Wallet example, it would contain e.g., the access control criteria for deciding whether or not to service the various requests.

What the figure does not show is that a mapping or translation %%activity|action%% may be called for to translate the 'business speak' that states the contents of the %%policies|policy%% into '%%employee|employee%%-specific speak', i.e. data/texts that %%employees|employee%% (that are tasked to execute the associated operational %%actions|action%%), can read and interpret such that when they use them to execute such %%actions|action%% on behalf of the %%party|party%% that authored the (business) %%policies|policy%%, they will do so in accordance with the intensions of that %%party|party%%. Since %%employees|employee%% can be human, non-human, and typically have different capabilities for understanding %%policy|policy%%-data, a single business-%%policy|policy%% might need to be translated into multiple operational %%policies|policy%%.

### 4.1. Validator Component

The purpose of the "validator component" is to request and obtain data (typically: %%presentations|presentation%%) that an information process can subsequently use for further processing. This implies that such data must be %%valid|validate%% for the kind of processing that it is requested and obtained.

It also implies that such components need a %%policy|validator-policy%% that states the kinds of processing for which data is to be gathered, and for each kind of processing:
- a specification (syntax, semantics) of the data set that can be used in that further processing (which can be visualized as a form that can be filled in);
- a list of criteria that can be used to determine whether the data set is %%valid|validate%% or not. The data that the validation component itself needs to evaluate such criteria may be obtained from different sources, e.g.

Such %%policies|policy%% may also provided further guidance, so that %%agents|agent%% can learn e.g.
- what protocols/technologies to use,
- where requests should be sent to (endpoints, addresses, etc.),
- other data that is particular to a %%communication channel|communication-channel%% that the %%agent|agent%% uses;
- how to %%verify|verify%% (parts of) the data that is being obtained;
- etc.

A validator component must be associated with
- a %%governance|governance%% process that provides the %%business policy|policy%%, and
- a mechanism that translates the %%business policy|policy%% in appropriate %%operational policies|policy%%.

### 4.2. Issuer Component

### 4.3. Revocator Component

### 4.4. Wallet  Component

### 4.5. Holder Component


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
