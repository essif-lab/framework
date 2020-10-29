---
id: data-collector
title: "Data Collector"
scopeid: essifLab
type: concept
typeid: data-collector
stage: draft
hoverText: "Data Collector: a functional component that is capable of collecting data from various Parties in the context of some Business Transaction, and Validating this data for the purpose of making one (or more) decision(s)."
glossaryText: "a functional component that is capable of collecting data from various %%parties^party%% in the context of some %%business transaction^transaction%%, and %%validating^validated-data%% this data for the purpose of making one (or more) decision(s)."
---

### Short Description
A **Data Collector** is an (architectural) function (a functional component in the [eSSIF-Lab functional architecture](../functional-architecture)) that a %%party|party%% may use to collect sufficient and %%validated data|validated-data%% for deciding whether or not a request (typically for a product or a service) is to be serviced.

### Purpose
The purpose of a Data Collector is to collect sufficient and %%validated data|validated-data%% that eneables (an %%agent|agent%% of) its %%principal|principal%% to decide whether or not some request (typically for a product or a service) is to be serviced. 

### Functionality
A data collector typically starts to collect data when it receives a request (e.g. to provide a product or service). The reception of such a request triggers the creation of a new %%business transaction|transaction%%. The task of the data collector is to collect %%validated data|validated-data%% that is sufficient for making a commitment decision (or, as [DEMO](https://en.wikipedia.org/wiki/Design_%26_Engineering_Methodology_for_Organizations) calls it: a 'promise' or 'quit' decision.)

Starting the data collection for a transaction does NOT imply that the identity of the %%actors|actor%% from whom/which the request originated, is established (or authenticated). It also does NOT imply that the identity of the %%peer party|peer-party%% is established (or authenticated). The data collector simply proceeds to collect a sufficient amount of data such that the associated decision can be made, according to the rules, working-instructions and other guidance provided by its %%principal's|principal%% %%data collector policy|data-collector-policy%%. Such data may include identity data, but it also may not.

Starting the data collection for a transaction implies that the data collector informs the %%data discloser component|data-discloser%% about the %%transaction|transaction%% that has just started, and the kind of that transaction. This allows the %%data discloser component|data-discloser%% to process requests for data from %%peer agents|peer-agent%%[^1x]

All guidance that the data collector needs to collect the necessary and %%validated data|validated-data%% to make that decision is provided by the %%data collector policy|data-collector-policy%% that has been established by the data collector's %%principal|principal%%. Such a policy includes e.g. the kinds of data (and meta-data) required to make these kinds of decisions, criteria to distinguish between %%data that is valid|validated-data%% and data that is not, any data conversions that may be needed, etc.

A data collector may multi-task, i.e. simultaneously/asynchronously collect data for multiple %%transactions|transaction%%. To organize this, messages that are exchanged with %%peer agents|peer-agent%% must contain an identifier that allows the data collector and its peer agents to identify the transaction to which each message belongs.

During the time in which a data collector is collecting data for a specific %%transaction|transaction%%, it may choose to setup, accept, and tear down %%communication sessions|communication-session%% with any %%actors|actor%%, if that is appropriate. This allows requests for data to be sent to different kinds of %%peer party|peer-party%%-%%agents|agent%%, e.g. human or %%digital|digital-agent%% agents. However, the data collector then must ensure that every of these %%agents|agent%% are all %%colleagues|colleague%%, i.e. have the %%peer party|peer-party%% as their %%principal|principal%%.

A data collector benefits from generic APIs or (G)UIs that allow it to simply ask for the data that it requires. Specifically for SSI, the data collector uses the %%eSSIF-Glue|essif-glue%% interface to access the %%Verifier|verifier%% functionalities.

### Criteria
A **Data Collector** is a functional component in the [eSSIF-Lab functional architecture](../functional-architecture) that
- services requests by %%digital|digital-agent%% and non-digital %%agents|agent%%, for providing a product or service, thereby starting a %%transaction|transaction%%;
- can setup, accept and tear-down communication channels of various kinds, with %%digital|digital-colleague%% and/or non-digital %%colleagues|colleague%% of that %%requesting agent|agent%%,[^peer-agents] as appropriate for the data exchanges that are needed to conduct the transactions;
- can use any appropriate communication channel with a %%peer-agent|peer-agent%% to:
  - request for data that, according to the %%Data Collector Policy|data-collector-policy%% is needed to decide whether or not to commit to the transaction;
  - process the responses to such requests, in an orchestrated way, thereby complying with the rules of its  %%principal's|principal%% %%Data Collector Policy|data-collector-policy%%, the result of which (in the end) is a set of %%validated data|validated-data%% that can serve the purpose of deciding whether or not to commit to the transaction;
  - receive similar requests from its %%peer-party|peer-party%%, and respond to such requests in compliance with the rules of its  %%principal's|principal%% %%Data Collector Policy|data-collector-policy%%;
- has a mechanism to ensure that within a %%transaction|transaction%%, it uses the latest (most receent) %%Data Collector Policy|data-collector-policy%% of its %%principal|principal%%.

### Deprecated - TVE Functionality

:::info Editor's note
TNO to revise the text below.
This section is the old text of what was called the Transaction Validation Engine.
It will be deleted in the (near?) future.
:::

Typically, the Data Collector would start a transaction either

-   when it receives a request from some Agent of another Party for engaging in a transaction of a specific kind.
-   when it is instructed by, or on behalf of its Principal, to request a specific kind of transaction to some Agent of another Party.[^one]

In either case, a transaction form (object, context) has to be created that matches the kind of transaction, and a '**transaction-id**' must be generated that identifies this form/object/context. It will be used for binding incoming or outgoing messages to this transaction, enabling communications to remain congruent, not only with the Agent that requested the transaction, but also with other Agents from the same Principal and/or using different communication channels.

Handling/managing the various communication channels through which data can be exchanged is also a task of the Data Collector[^2]. One reason for this is that negotiating a transaction not only requires data to be acquired, but also to be provided to the peer participant. Another reason is that the peer participant may use multiple Agents to provide such data, e.g. human Agents (that might use web-browsers, social-media apps, phones, or physical visits), SSI Agents (that use the SSI infrastructure), or other electronic Agents (e.g. services that can provide data when appropriate permissions are submitted - e.g. user consent tokens).

Thus, the Data Collector is generally considered capable of obtaining data through different communication channels. However, the technical tracks of eSSIF-Lab will exclusively focus on the communication channel through which credentials can be requested and obtained. Any extensions or business productization of Data Collector designs may be considered in the business tracks of eSSIF-Lab. The latter is not considered any further in this section.

In order to acquire data through SSI mechanisms for filling in a form for a specific kind of transaction, the Data Collector needs to know what kinds of credentials it should ask for, which Parties its Principal trusts to issue such credentials, what kinds of verification proofs for such credentials must hold and which may be disregarded.[^3] Also, when the Data Collector gets a credential that satisfies the necessary verification proofs, it needs a way to map the contents of that credential to the structure of the transaction context that is used internally by (other systems of) its Principal.[^4] Also, as the Data Collector gets more and more data - which it may get through multiple, different channels - it needs to determine whether or not the resulting set is sufficiently consistent and coherent.[^5]

In order to make the Data Collector work, a Validation Policy (or Data Collector Policy) is created by, or on behalf of its Principal, which specifies at least:

-   the kinds of transactions the Principal is willing to (electronically) engage in, from both the requester and the provider perspectives;
-   for each such transaction type:

    -   the criteria (business rules) that should be used to determine that the form is 'clean', i.e. that the necessary and sufficient data have been obtained and that they are consistent, coherent, and suitable for making a transaction commitment decision.

    -   the kinds of credentials and issuers that the Principal is willing to accept as sources for valid data; (optionally?), the endpoint URI at which issuing Parties do the actual credential issuing may be specified[^6].

    -   for each kind of credential: the verification proofs that must hold to be accepted as a source for valid data.

    -   the mapping between fields in such credentials and fields in the form to be filled in.

The Policy must be designed in such a way that it is extendable as new features will be called for in the future.

The ability to create new transaction contexts and the availability of the Data Collector Policy enable the Data Collector to request the Verifier component of its Principal to obtain credentials of the types that it can use to fill in the transaction form when they satisfy the verification and validation requirements of its Principal.[^7]

When the Verifier returns such data (which comes with a list of proofs that the Verifier has checked), the Data Collector must then validate that data, i.e. determine whether or not it is valid for the specific transaction it is assembling the data for. The validation rules are Party-specific and hence come from the Data Collector policy. For simple cases, validation can simply consist of checking whether or not all verification proofs succeeded. At the other end of the validation spectrum, the Data Collector itself must make validation decisions, either electronically (according to the Data Collector policy) or by 'outsourcing' such decisions to human Agents of its Principal by providing an appropriate validation user interface.

As long as data is needed, the Data Collector can intermittently request the verifier to produce it (or it can use other communication channels, which is outside scope for now). It does so until it times out, or the form has become 'clean'.

-----
### Notes:

:::info Editor's note
TNO to revise the footnote markers
:::

[^1x]: In the same way that the data collector needs to collect data in order to be able to decide whether or not to commit, %%agents|agent%% of the %%peer party|peer-party%% need to collect data for making a similar commitment decision. Requests for such data are to be processed by the %%data discloser component|data-discloser%% under guidance of its %%data-discloser-policy|data-discloser-policy%%.

[^1a]: If the %%data collector policy|data-collector-policy%% specifies that data is to be collected for other purposes, the %%data collector|data-collector%% should then be provided a means to inform its %%peer party|peer-party%% of such purposes, and the policy should not specify that such data is required to make the commitment decision. 

[^1 (peer-agents)]: Note that such agents have then become so-called %%peer-agents|peer-agent%% (of the Data Collector) for that specific transaction. Also, the (single!) %%principal|principal%% of these %%peer-agents|peer-agent%% is the %%peer-party|peer-party%% of the %%principal|principal%% of the Data Collector (again, for that specific transaction).

[^1]: This feature ensures that the transaction is really two-way, and both Parties can request credentials from the other. For example, a web-shop can then ask for a (delivery) address credential, and the customer can ask for a credential issued e.g. by the chamber of commerce that the web-shop is a legitimate company (and not some maffia website).

[^2]: It may well be that this functionality can somehow be split off in the (near) future.

[^3]: For high-value transactions, verification proofs are more important than for low-value transactions. This is to be decided by the Principal of the Data Collector. An example from the physical world: in order to obtain a visa for China, it is required that your passport (credential) remains valid for 3 months after the end of your visit. But in order to identify yourself at the reception desk of a hotel, your passport may have expired several years.

[^4]: For example, a credential that contains an address uses a specific schema to specify addresses, e.g. the 'PostalAddress' as defined by schema.org. This schema differs quite a bit from that of Dutch addresses as [*defined*](https://bag.basisregistraties.overheid.nl/def/bag) by the official (authentic) Dutch Registration of Addresses and Buildings (BAG). It may also well differ from the structure of addresses that databases of the Principal have implemented. Mapping allows such cases to be accommodated for.

[^5]: Inconsistent or incoherent data is necessary for various purposes. First, it allows for correct further processing of the transaction. A non-existent postal code, or one that doesn't match the delivery address, may hinder a fluent transaction processing, resulting in additional costs and processing times. Another purpose is the early warning or detection of possible fraud/abuse. Remember that part of the data is being asked for reducing transaction risk, and checking consistency/coherence of such data is part of the risk mitigation process.

[^6]: This enables the Data Collector to pass the endpoint URI on to the Verifier when it requests for such a credential, which in turn can send it to the holder of other Parties enabling them to obtain the credential from that issuer endpoint if that other Party does not have that credential in its wallet. The endpoint URI can in fact be put in the policy, because the (human) Agent that creates/maintains the policy would need to know that the issuing Party is actually issuing such credentials, what their contents means, etc., and hence is capable of tracking down the URI where that Party issues the credentials.

[^7]: A reference to this specification will be added when it becomes available (draft or otherwise).
