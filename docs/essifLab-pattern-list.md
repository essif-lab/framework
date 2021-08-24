---
id: essifLab-pattern-list
title: "Overview of eSSIF-Lab Mental Models"
sidebar_label: Overview
scopeid: essifLab
date: 20210816
---

Within eSSIF-Lab, we maintain a set of %%mental models|pattern%% or %%patterns|pattern%%, which are descriptions, both casual and formal, of sets of %%concepts|concept%% (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic. They have been crafted so that they may serve as a basis for architecting, desiging, and implementing IT components and their governance processes.

## Stable Models

These are models that are mature (stable). They have been applied during several years in various circumstances, and have shown to be valid (when consistently and consequently applied). Therefore, they are proposed for widespread use (and further evaluation/validation).

### [Parties, Actors and Actions](./terms/pattern-party-actor-action)
The [Parties, Actors and Actions pattern](./terms/pattern-party-actor-action) captures the foundational %%concepts|concept%% and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.

### [Jurisdictions](./terms/pattern-jurisdiction)
The [Jurisdictions pattern](./terms/pattern-jurisdiction) captures the %%concepts|concept%% and relations that explain what a generic %%jurisdiction|jurisdiction%% consists of, and relates it to %%parties|party%% and %%legal entities|legal-entity%%.

### [Guardianships](./terms/pattern-guardianship)
The [Guardianship pattern](./terms/pattern-guardianship) captures the %%concepts|concept%% and relations that explain what a generic guardianship consists of, and how it relates to %%guardians|guardian%%, %%dependents|dependent%%, %%jurisdictions|jurisdiction%%, etc.

## Models under review

These are models that we think go a long way to being mature, but may contain flaws we haven't detected yet.
### [Identity](./terms/pattern-identity)
The [eSSIF-Lab Identity Pattern](./terms/pattern-identity)
- discusses difficulties that exist with the various/numerous meanings of the term 'identity',
- postulates a %%definition for identity|identity%% that relates to what a person or another entity actually _is_,
- shows that it is comprised of %%partial identities|partial-identity%% that are the actual artifacts we need to focus on in %%SSI contexts|self-sovereign-identity%%, and
- shows how this relates to (attributes in) %%credentials|credential%%.

## Envisaged Models

These are placeholders for models that we think we could document, but haven't come around to doing.

### [Terminology](./terms/pattern-terminology)
The envisaged [eSSIF-Lab Terminology Pattern](./terms/pattern-terminology) will describe the relations between %%terminology|terminology%% artifacts such as '%%concept|concept%%', '%%term|term%%', '%%pattern|pattern%%', '%%mental model|pattern%%', '%%glossary|glossary%%' etc.

### [Identification](./terms/pattern-identification)
The envisaged [eSSIF-Lab Identity Pattern](./terms/pattern-identification) will describe the concepts and relations that help to explain the mechanisms that a %%party|party%% uses to %%identify|identify%% %%entities|entity%%, and mechanisms for communicating with another party such that both parties can identify an entity and know whether or not they identify the same entity.

### [Identifiers](./terms/pattern-identifier)
The envisaged [eSSIF-Lab Identity Pattern](./terms/pattern-identifier) will describe the conceptual nature of %%identifiers|identifier%%. Note that %%identifiers|identifier%% are very different from %%identities|identity%%.

### [Decentralized Governance, Risk Management and Compliance (GRC)](./terms/pattern-decentralized-GRC)
The envisaged [Decentralized GRC pattern](./terms/pattern-decentralized-GRC) will describe how %%parties|party%% can set objectives, and pursue them to be succesful. The latter means that the party must be capable of assessing and managing the risks associated with not realizing them. In a decentralized world, this means that it needs to depend on other parties, that may or may not be too reliable. Also, it means that the party must be able to set and realize objectives to satisfy requirements of other parties (compliance).

### [Mandates, Delegation and Hiring](./terms/pattern-mandates-delegation-hiring)
The envisaged [Mandates, Delegation and Hiring pattern](./terms/pattern-mandates-delegation-hiring) will capture the ideas behind Mandating, Delegating, Hiring and their relations. It will extend the [Parties, Actors and Actions pattern](./terms/pattern-party-actor-action) with concepts that describe how the %%ownership|ownership%% and `works for` relations between %%parties|party%% and %%actors|actor%% are to be (de)populated, and how to determine for %%party|party%% the %%actor|actor%% is working as it executes an %%action|action%%.

### [Duties and Rights](./terms/pattern-duties-and-rights)
The envisaged [Duties and Rights pattern](./terms/pattern-duties-and-rights) will describe the relations between %%jurisdictions|jurisdiction%%, %%legal entities|legal-entity%% and the duties and rights they have within them. This pattern will be based on the [theory of Hohfeld](https://plato.stanford.edu/entries/rights/#FormRighHohfAnalSyst).

### [Decision Making](./terms/pattern-decision-making)
The envisaged [Decision Making pattern](./terms/pattern-decision-making) will describe how %%parties|party%% would, could, or should reason in order to reach good conclusions and make good decisions. This can be used as a basis for understanding the information needs of  %%parties|party%% as they need to decide e.g. whether or not to commit to a %%transaction|transaction%% proposal, or whether or not data is %%valid|validate%% for some purpose. The pattern is based on [Toulmin's model for reaonsing](https://www.cambridge.org/core/books/uses-of-argument/26CF801BC12004587B66778297D5567C) (of which a pragmatical text can be found [here](https://owl.purdue.edu/owl/general_writing/academic_writing/historical_perspectives_on_argumentation/toulmin_argument.html)).
