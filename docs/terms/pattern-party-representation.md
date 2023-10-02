---
id: pattern-party-representation
title: "Party Representation"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: pattern
termid: party-representation
term: party-representation
formphrases: party-representation
status: draft
grouptags:
hoverText: "The Party Representation pattern captures the foundational concepts and relations that we need for thinking about how Parties can be represented in various circumstances."
glossaryText: "The Party Representation pattern captures the foundational concepts and relations that we need for thinking about how %%parties^party%% can be represented in various circumstances."
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::info Editor's note
This pattern is still under development
:::

### Summary
This pattern captures the essence of how %%parties|party%% can be represented in various circumstances, thereby extending the %%parties, actors, actions pattern|pattern-party-actor-action%%.

### Purpose
Within the context of %%SSI|self-sovereign-identity%%, we are interested in coming to grips with (answering) questions such as 'in what ways can %%parties|party%% be represented?', 'what kind(s) of %%entities|entity%% can represent %%parties|party%%', 'how can we deal with representation constraints, i.e. provide guarantees that the represented %%party|party%% isn't completely at the mercy of the one representing it?'.

This model attempts to provide answers to such questions.
### Introduction
There are very many different forms of representation. %%Claims|assertion%%, for example, represent characteristics attributed to %%entities|entity%%, %%Terms|term%% represent (intangible) %%concepts|concept%%, %%legal entities|legal-entity%% are represented in the %%knowledge|knowledge%% of a %%jurisdiction|jurisdiction%%, %%agents|agent%% represent %%parties|party%% as they execute %%actions|action%%, and so on. We specifically focus on

[Merriam-Webster](https://www.merriam-webster.com/dictionary/representation) considers both 'the action of representing', i.e. the action or fact of one %%party|party%% standing for another so as to have the rights and duties of the %%party|party%% represented, or the substitution of one %%party|party%% in place of another, e.g. a child taking the place of a deceased parent), and 'the fact of being represented', which is its passive counterpart.








Representation can take an active and a more passive form.

In the active form, a %%party|party%% is represented by an %%actor|actor%% that executes an %%action|action%% on behalf of that %%party|party%%, as described in the %%parties, actors, action pattern|pattern-party-actor-action%%. In that pattern, the %%actor|actor%% is said to be an %%agent|agent%% of the %%party|party%% that it represents as it is executing the %%action|action%%. This kind of representation is short-lived: it exists for the time that the %%action|action%% is being executed.

In the more passive form, a %%party|party%% can be represented by an %%actor|actor%% in an employment, or 'works for' relation, which is also described in the %%parties, actors, action pattern|pattern-party-actor-action%%. In that pattern, the %%actor|actor%% is said to be an %%employee|employee%% of that %%party|party%%, which (in our context) only means that it is realistic to expect that the %%actor|actor%% will be executing %%actions|action%% on behalf of that %%party|party%%.

%%Actors|actor%% typically do not represent a %%party|party%% for everything. %%Employees|employee%% for example are typically assigned a *function* that requires them to do certain kinds of %%actions|action%%, yet at the same time limits them thereto. An (%%actor|actor%% in its role of) %%employee|employee%% can, or should therefore limit its %%agency|agent%% to %%actions|action%% of the type that its %%employer|employer%% has assigned as the tasks for the functions it is %%employed|employee%% to fulfill.




This pattern also describes how %%parties|party%% can be said to perform an %%action|action%%, which is shorthand parlance for saying that there is an %%actor|actor%% that executes this %%action|action%% on behalf of that %%party|party%%. In that sense, %%parties|party%% can be said to perform an %%action|action%% on behalf of other %%parties|party%%, effectively representing such %%parties|party%%.





In this model, we do not consider %%actors|actor%% representing %%parties|party%%, as this is already elaborated on in the %%parties, actors, action model|pattern-party-actor-action%%, which defines notions such as %%agents|agent%% (and %%principals|principal%%)

### Formalized model
Here is a visual representation of this pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'Representation' pattern"
  src={useBaseUrl('images/patterns/pattern-party-representation.png')}
/>

### Miscellaneous
The seemingly simple notion of 'representation' turns out to be quite elusive in various circumstances. The painter [Rene Magritte was heavily reproached](https://en.wikipedia.org/wiki/The_Treachery_of_Images) for writing "Ceci n'est pas une pipe" (this is not a pipe) under a painting that showed a pipe. But he was right: you cannot stuff the image of a pipe in the same way you stuff the pipe that it represents.

In general, representation is quite complex, as can be readily experienced when diving into [Semiotics](https://en.wikipedia.org/wiki/Semiotics), that studies the workings of [signs](https://en.wikipedia.org/wiki/Sign_(semiotics)) (i.e. anything that communicates a meaning that is not the sign itself). Our %%terminology model|pattern-terminology%% specifies that a %%term|term%% (within a specific %%scope|scope%%/context) refers to (the %%definition|definition%% of) a %%concept|concept%%, which is one way of representing (intangible) ideas.

'Representation' is a notion that seems simple enough to grasp, but turns out to be more elusive when trying to formalize it. [Merriam-Webster](https://www.merriam-webster.com/dictionary/representation) has several definitions
