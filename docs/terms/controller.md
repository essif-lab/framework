---
id: controller
title: "Controller"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termtype: concept
termid: controller
symphrase: controller{ss}
status: draft
grouptags:
hoverText: "Controller (of an Entity): the role that an Actor performs as it is executing actions on that Entity for the purpose of ensuring that the Entity will act/behave, or be used, in a particular way."
glossaryText: "the role that an %%actor^actor%% performs as it is executing actions on that %%entity^entity%% for the purpose of ensuring that the %%entity^entity%% will act/behave, or be used, in a particular way."
date: 20211222
---

### Short Description
A **Controller** of an %%entity|entity%% is the role that an %%actor|actor%% performs as it is executing actions on that %%entity|entity%% for the purpose of ensuring that the %%entity|entity%% will act/behave, or be used, in a particular way. Thus, a controller controls the behavior and/or use of the %%entity|entity%% it controls.

Being a controller of an %%entity|entity%% does *not* imply
- %%ownership|ownership%% of that %%entity|entity%%,
- having a (legitimate) right, duty or authorization for executing actions that control the %%entity|entity%%.

### Purpose
The ability to distinguish between (non)controllers of an %%entity|entity%% enables us to %%identify|identify%% the %%actors|actor%% that can make sure that the %%entity|entity%% acts/behaves, or will be used, in a particular way. It also helps %%owners|owner%% of that %%entity|entity%% to manage rights (or duties) to execute controller-actions to %%actors|actor%%.

### Criteria
An %%actor|actor%% is said to be a **controller** of some %%entity|entity%% if and only if it is executing an action on that %%entity|entity%% for the purpose of ensuring that the %%entity|entity%% will act/behave, or be used, in a particular way.

### Notes
- The [*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) (Article 4(7)) defines 'controller' as the party that determines the purposes and means of the processing of personal data, which is different from how we defined it. The GDPR 'processor' (Article 4(8)), i.e. that processes personal data on behalf of a (GDPR-)controller, would (in our terms) control that personal data and hence qualify as controller.
- In the [DID spec](https://www.w3.org/TR/did-core/) (of December 2021), the word 'controller' is used for the entity that controls (i.e., has the capability to change) the contents of a DID Document. However, as it is also used in the contest of [Verification Relationships](https://www.w3.org/TR/did-core/#verification-relationships), it is better understood as the %%party|party%% or %%actor|actor%% that is capable of wielding the private key material associated with a specific [verification method](https://www.w3.org/TR/did-core/#dfn-verification-method).

### Related Concepts
- %%Controllership|controllership%%
- %%Owner|owner%%, %%Ownership|ownership%%
