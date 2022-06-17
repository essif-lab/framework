---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: controller
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: controller
formphrases: controller{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-12-22
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Controller # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "the role that an [actor](@) performs as it is executing actions on that [entity](@) for the purpose of ensuring that the [entity](@) will act/behave, or be used, in a particular way."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Controller"
displayed_sidebar: essifLabSideBar
hoverText: "Controller (of an Entity): the role that an Actor performs as it is executing actions on that Entity for the purpose of ensuring that the Entity will act/behave, or be used, in a particular way."
---

### Short Description
A **Controller** of an [entity](@) is the role that an [actor](@) performs as it is executing actions on that [entity](@) for the purpose of ensuring that the [entity](@) will act/behave, or be used, in a particular way. Thus, a controller controls the behavior and/or use of the [entity](@) it controls.

Being a controller of an [entity](@) does *not* imply
- [ownership](@) of that [entity](@),
- having a (legitimate) right, duty or authorization for executing actions that control the [entity](@).

### Purpose
The ability to distinguish between (non)controllers of an [entity](@) enables us to [identify](@) the [actors](@) that can make sure that the [entity](@) acts/behaves, or will be used, in a particular way. It also helps [owners](@) of that [entity](@) to manage rights (or duties) to execute controller-actions to [actors](@).

### Criteria
An [actor](@) is said to be a **controller** of some [entity](@) if and only if it is executing an action on that [entity](@) for the purpose of ensuring that the [entity](@) will act/behave, or be used, in a particular way.

### Notes
- The [*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) (Article 4(7)) defines 'controller' as the party that determines the purposes and means of the processing of personal data, which is different from how we defined it. The GDPR 'processor' (Article 4(8)), i.e. that processes personal data on behalf of a (GDPR-)controller, would (in our terms) control that personal data and hence qualify as controller.
- In the [DID spec](https://www.w3.org/TR/did-core/) (of December 2021), the word 'controller' is used for the entity that controls (i.e., has the capability to change) the contents of a DID Document. However, as it is also used in the contest of [Verification Relationships](https://www.w3.org/TR/did-core/#verification-relationships), it is better understood as the [party](@) or [actor](@) that is capable of wielding the private key material associated with a specific [verification method](https://www.w3.org/TR/did-core/#dfn-verification-method).
