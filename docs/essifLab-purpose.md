---
id: essifLab-purpose
title: eSSIF-Lab Purpose
sidebar_label: Purpose
scopeid: essifLab
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::info Editor's note
*This section is work in progress.*
:::

The European Self-Sovereign Identity Lab ([eSSIF-Lab](essifLab)) views itself as an %%ecosystem|ecosystem%% of %%parties|party%% that enable themselves and other %%parties|party%% to electronically support %%business transactions|transaction%% using %%Self-Sovereign Identity (SSI)|self-sovereign-identity%% technologies.

The main purpose of [eSSIF-Lab](essifLab) is to realize this [vision](essifLab-vision). This is quite a challenge, because of the different kinds of complexity involved. There is 'horizontal' complexity, e.g. interop issues at the technical, semantical, process and business levels. There is also a 'vertical' complexity, e.g. coherence and consistency between business policies, its processes, the data/information used therein, and the technology that makes it work. There is 'ecosystem' complexity, i.e. different groups of organizations and/or people need artifacts that work for them as a group, both 'horizontally' and 'vertically', but no further than the context of that group.

The eSSIF-Lab Framework aims to establish a varied set of articles/documents, %%terminology|terminology%%, and %%mental models|mental-model%% that individual %%parties|party%% from different backgrounds can use e.g. as they
- seek to use SSI, and want to learn about:
  - benefits they may reap when they start to adopt SSI technologies;
  - topics to consider for increasing levels of maturity;
  - prerequisites for using SSI as a person or in a business;
  - further benefits and ways of working together with other parties that use SSI.
- seek to contribute to technical developments in SSI, and want backgrounds about various functionalities
  - that exist in the context of SSI infrastructure;
  - that are needed to connect business applications to such infrastructure;
  - that facilitate %%communities|community%% and %%ecosystems|ecosystem%% of %%parties|party%% that use SSI.
- seek to contribute to the creation and management of %%communities|community%% and %%ecosystems|ecosystem%% of %%parties|party%% that use SSI that operate with decentralized authorities, i.e. authorities that respect the autonomy of other %%parties|party%% by refraining from imposing e.g. rules or duties on them that they then must comply with (or else...)).
- seek a deeper understanding about the %%concepts|concept%% and %%mental models|mental-model%% behind SSI, allowing them to contribute new ideas, applications and services for SSI.

This document provides an overview of
- what SSI is from the eSSIF-Lab framework perspective
- the context of the framework, i.e. a (conceptual) model of the world within which SSI functions and provides benefits;
- the scope of the framework, i.e. a description of what it is the framework covers;
- the focus of the framework, i.e. a model for describing (electronic) business transactions;
- the way that we use terminology as an important element for the construction of the framework.

## eSSIF-Lab Scope

In order to enable %%interactions|transaction%% between different %%parties|party%%, as described in the [eSSIF-Lab vision](vision-and-purpose), eSSIF-Lab focuses on the exchange and administration of relevant %%data|data%%, with a particular focus on the %%qualifications|qualified-data%% and other assurances that are provided and/or needed. This makes its results particularly relevant for administrative organizations such as governmental bodies, financial institutions and the like. However, *every* party will have use-cases in which it needs to (digitally) interact with other parties, so for them, the eSSIF-Lab work is relevant as well.

A party usually cannot realize its objectives on its own. To do this, the party needs to get itself organized, e.g. by defining the kinds of %%actions|action%% that might help to further the objectives, purchasing/hiring %%actors|actor%% to do the work, managing the %%policies|policy%% that specify how such actors should operate (making the policies appropriately accessible and interpretable). We use the term %%governance|governance%% to refer to the activities/process that gets a party organized. The governance activities that are in scope of eSSIF-Lab relate to specifying the work, and maintaining the associated artifacts, that is related to the needs of parties as they (digitally) interact with one another.

### 2.3 Business Transactions

In the eSSIF-Lab world view, %%actors|actor%% interact with each other (as %%agents|agent%% for their %%principals|principal%%) to negotiate and execute %%transactions|transaction%%. An agent uses the %%knowledge|knowledge%% of its principal as its main guidance for such negotiations and execution. An agent may also use knowledge of other %%parties|party%% to fill in any gaps, or to provide additional details, as necessary.

The participants of a transaction are %%parties|party%%, that employ %%actors|actor%% that do the associated work on their behalf. A party may employ different actors for executing different actions within a single transaction, each of which will use the knowledge of this party (its principal) to guide the execution of these actions, so that the entire transaction is performed according to how the party wants it to be done.

The [*DEMO*](https://en.wikipedia.org/wiki/Design_%26_Engineering_Methodology_for_Organizations) transactions pattern (which is what we use) divides transactions in three phases:
- a negotiation phase, in which one or more agents of each %%participant|participant%% exchange data for the purpose of establishing a %%contract|transaction-agreement%% that specifies what the %%transaction|transaction%% entails. This phase results either in a commitment decision of all participants, or the termination of the transaction because one of them quits.
- an execution phase, in which (perhaps other) agents of the same principals work (execute actions) to fulfill the obligations of the agreement. This phase results in them stating that they have completed that work (or that they gave up).
- the acceptance phase, in which one or more agents of each participant exchange data that leads to a decision to accept the results, or to escalate (e.g. start a law suit against the other participant)
