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

### 3.2. Storage Capability

The purpose of the storage %%capability|capability%% is to ensure that a %%party|party%% can cache data (typically: %%credentials|credential%%) in such a way that the confidentiality (privacy) and integrity of the stored data is guaranteed, and that only designated %%employees|employee%% (either of that %%party|party%% itself, but also of other %%parties|party%%) are provided with rights and/or duties to access (read, write) that cache.

This %%capability|capability%% consists of
- runtime/operational parts, such as
  - a %%wallet|wallet%% (the actual store/cache), that is capable of servicing requests for storing, retrieving, modifying and/or deleting %%credentials|credential%% (perhaps also other data) from the store/cache, according to the access control %%policy|policy%% of its %%owner|owner%%;
  - (at least) one %%holder|holder%% (i.e. an %%employee|employee%% that is capable of communicating with other %%employees|employee%% for the purpose of
    - requesting and obtaining %%credentials|credential%% that it subsequently stores), and
    - receiving %%presentation requests|presentation-request%%, processing such requests, and responding with either a %%presentation|presentation%% or an error.[^2]
- a design-time part, in which the %%party|party%% %%manages|management%% the %%mandates|mandate%% (including consents) for its own %%employees|employee%%, as well as for %%employees|employee%% of other %%parties|party%%.

[^2]: every such %%holder|holder%% needs to be appropriately %%mandated|mandate%%; this would typically be part of the %%onboarding|onboarding%% process of that %%holder|holder%%.

### 3.3. Provisioning Capability

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
  - decides what related services to use (such as services for revocation[^3]), and
- a mapping part, in which
  - the service request criteria are converted into %%policies|policy%% that %%employees|employee%% (that are tasked to do the operational work on the %%party's|party%% behalf) can read and understand, and use to decide whether or not to service issuing requests in the way as intended by the %%party|party%% on whose behalf they %%act|action%%.
  - additional (provisioning-related) services are
  - it is determined at what endpoint(s) requests for supplying such %%credentials|credential%% will be serviced;

[^3]: The %%party|party%% may want to also implement additional services that are related to the provisioning of %%credentials|credential%%, such as services for

Provisioning also includes the issuing of %%credentials|credential%% that contain claims that %%mandate|mandate%%[^4] specific %%agents|agent%% (the claim's %%subjects|subject%%) for specific kinds of access (read, update, write, ...) to functions that are provided by designated %%agents|agent%% of the %%party|party%% with that provisioning %%capability|capability%%.

[^4]: A mandate for acces to the %%party's|party%% Credential Store can also be seen as a consent of that %%party|party%% to the mandatee (%%agent|agent%%)

### 4.4. Revocation Capability

The purpose of the %%revocation|revoke%% %%capability|capability%% is
- to ensure that that %%credentials|credential%% that have been issued on behalf of the %%party|party%% that runs this component, are revoked whenever a situation is detected (in some %%information process|information-process%%) that shows that one or more of the claims in the %%credential|credential%% are no longer true (in the %%knowledge|knowledge%% of that %%party|party%%)
- %%parties|party%% that intend to use (data from) a %%credential|credential%% that has been issued by the %%party|party%% that has the %%revocation|revoke%% %%capability|capability%%, are enabled to learn whether or not that (data from) that %%credential|credential%% has been %%revoked|revoke%%.

This %%capability|capability%% consists of
- runtime/operational parts,
  - for signalling %%credentials|credential%% that need to be %%revoked|revoke%%;
  - that implement one or more %%revocation|revoke%% mechanisms, that can be used to revoke such %%credentials|credential%%.
- a design-time part, in which the %%party|party%% maintains criteria for signalling %%credentials|credential%% to be %%revoked|revoke%%, and determines which kind(s) of %%revocation|revoke%% mechanisms should be used for which kind(s) of %%credentials|credential%%.
- a mapping part, in which the %%party|party%% maintains the set of %%policies|policy%% that %%employees|employee%% (that are tasked to do the operational work on the %%party's|party%% behalf) can read and understand, and use to decide whether or not to %%revoke|revoke%% %%credentials|credential%%, and do the actual %%revocation|revoke%% thereof.
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
- a %%holder|holder%% component, that can interact with %%issuer|issuer%% and %%validator|validator%% components for exchanging %%credentials|credential%%)

Note that every component in the figure has two parts:
- the IT that is running on some computer. Note that this IT may be controlled by a %%party|party%% (typically called 'service provider') that is not the %%party|party%% on whose behalf the IT will be functioning.
- a %%policy|policy%%, authored by the %%party|party%% on whose behalf the component functions, where the %%policy|policy%% specifies the %%party|party%%-specific ways of its functioning. In the Wallet example, it would contain e.g., the access control criteria for deciding whether or not to service the various requests.

What the figure does not show is that a mapping or translation %%activity|action%% may be called for to translate the 'business speak' that states the contents of the %%policies|policy%% into '%%employee|employee%%-specific speak', i.e. data/texts that %%employees|employee%% (that are tasked to execute the associated operational %%actions|action%%), can read and interpret such that when they use them to execute such %%actions|action%% on behalf of the %%party|party%% that authored the (business) %%policies|policy%%, they will do so in accordance with the intensions of that %%party|party%%. Since %%employees|employee%% can be human, non-human, and typically have different %%capabilities|capability-of-an-actor%% for understanding %%policy|policy%%-data, a single business-%%policy|policy%% might need to be translated into multiple operational %%policies|policy%%.
