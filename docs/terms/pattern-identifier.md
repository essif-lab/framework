---
id: pattern-identifier
title: "Identifier Pattern"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: pattern
termid: identifier
symphrase: identifier
status: draft
grouptags:
hoverText: "The eSSIF-Lab Identifier Pattern describes how Identifiers are defined and used for Identification purposes."
date: 20210830
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::info Editor's note
This is work in progress and needs discussion.
:::

### Purpose
The **Identifier pattern** captures the concepts and relations that help to explain how %%identifiers|identifier%% are defined and used for %%identification|identify%% purposes.

Related topics can be found in the %%identity pattern|pattern-identity%% and the %%identification pattern|pattern-identification%%.

### Introduction


### Formalized model
Here is a visual representation of this pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'Identifier' pattern"
  src={useBaseUrl('images/patterns/pattern-identifier.png')}
/>

The figure shows a context, in which an %%agent|agent%% of a %%party|party%% that perceives the context (and its contents) uses %%identifiers|identifier%% for the purpose of %%identifying|identify%% %%entities|entity%% within that context. Typical contexts are those in which a computer system/application acts as such an %%agent|agent%%, but any other situation where (an %%agent|agent%% of) a %%party|party%% is %%acting|action%% has its own particular context. The context is significant, because within that context, not every %%entity|entity%% that a %%party|party%% knows to exist will be (expected to be) present, or needed to be %%identified|identify%%.

It is assumed that %%identifiers|identifier%% are associated with specific classes of %%entities|entity%%. Such associations may differ between contexts. For example, in the context of discussing war planes, the %%identifier|identifier%% `B52` refers to a class of bomber planes, whereas in the context of Schiphol Amsterdam airport, `B52` would refer to a (boarding) gate, and in the context of drinks, it would refer to a specific [cocktail](https://en.wikipedia.org/wiki/B-52_(cocktail)). Examples in the IT include %%identifiers|identifier%% in the syntax of e-mail addresses, which may be used as an email address, as a username for logging in, as a SIP address (for making calls over the Internet), etc.

Typically, %%identifications|identify%% for which %%identifiers|identifier%% are used are limited to specific contexts where the %%actor|actor%% that executes the %%identification-act|identify%% knows the kind of %%entity|entity%% that needs to be %%identified|identify%%, and when using some %%identifier|identifier%%, it would expect it to be useable for instances of such a kind.

The figure introduces the concept `ID`, the idea of which is that it is a composition of whatever it takes in terms of %%identifiers|identifier%% to be able to identify an %%entity|entity%% of a specific type in a specific context. In the simplest case (in a small context, without many %%entities|entity%% to choose from), a single %%identifier|identifier%% may suffice - specifying the entity type may not even be necessary. In other cases, a single identifier m ay not suffice, and multiple identifiers are necessary

:::info Editor's note
Text to be added from here on. Thoughts revolve around changing 'entity type' to 'attribute type' or such. That might result in a mapping (Entity, Attribute Type, Identifier) in the current figure to (subject, predicate, object) or perhaps better: (subject, key, value), i.e. (key, value) pairs for an implied subject. That could form the basis of doing identification in the data realm (which is currently still lacking)
:::


### References

Earlier ideas for this can be found in "[Putting Identifiers in the Context of eHealth](https://link.springer.com/content/pdf/10.1007/978-0-387-79026-8_27.pdf)"
