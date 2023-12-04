---
id: pattern-party-representation
title: "Party Representation"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termType: pattern
term: party-representation
formPhrases: party-representation
status: draft
grouptags:
hoverText: "The Party Representation pattern captures the foundational concepts and relations that we need for thinking about how Parties can be represented in various circumstances."
glossaryTerm: "Party Representation"
glossaryText: "the Party Representation pattern captures the foundational concepts and relations that we need for thinking about how [parties](@) can be represented in various circumstances."
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::info Editor's note
This pattern is still under development
:::

### Summary

This pattern captures the essence of how [parties](@) can be represented in various circumstances, thereby extending the [parties, actors, actions pattern](pattern-party-actor-action@).

### Purpose

Within the context of [SSI](self-sovereign-identity@), we are interested in coming to grips with (answering) questions such as 'in what ways can [parties](@) be represented?', 'what kind(s) of [entities](@) can represent [parties](@)', 'how can we deal with representation constraints, i.e. provide guarantees that the represented [party](@) isn't completely at the mercy of the one representing it?'.

This model attempts to provide answers to such questions.
### Introduction

There are very many different forms of representation. [Claims](assertion@), for example, represent characteristics attributed to [entities](@), [Terms](@) represent (intangible) [concepts](@), [legal entities](legal-entity@) are represented in the [knowledge](@) of a [jurisdiction](@), [agents](@) represent [parties](@) as they execute [actions](@), and so on. We specifically focus on

[Merriam-Webster](https://www.merriam-webster.com/dictionary/representation) considers both 'the action of representing', i.e. the action or fact of one [party](@) standing for another so as to have the rights and duties of the [party](@) represented, or the substitution of one [party](@) in place of another, e.g. a child taking the place of a deceased parent), and 'the fact of being represented', which is its passive counterpart.








Representation can take an active and a more passive form.

In the active form, a [party](@) is represented by an [actor](@) that executes an [action](@) on behalf of that [party](@), as described in the [parties, actors, action pattern](pattern-party-actor-action@). In that pattern, the [actor](@) is said to be an [agent](@) of the [party](@) that it represents as it is executing the [action](@). This kind of representation is short-lived: it exists for the time that the [action](@) is being executed.

In the more passive form, a [party](@) can be represented by an [actor](@) in an employment, or 'works for' relation, which is also described in the [parties, actors, action pattern](pattern-party-actor-action@). In that pattern, the [actor](@) is said to be an [employee](@) of that [party](@), which (in our context) only means that it is realistic to expect that the [actor](@) will be executing [actions](@) on behalf of that [party](@).

[Actors](@) typically do not represent a [party](@) for everything. [Employees](@) for example are typically assigned a *function* that requires them to do certain kinds of [actions](@), yet at the same time limits them thereto. An ([actor](@) in its role of) [employee](@) can, or should therefore limit its [agency](agent@) to [actions](@) of the type that its [employer](@) has assigned as the tasks for the functions it is [employed](employee@) to fulfill.




This pattern also describes how [parties](@) can be said to perform an [action](@), which is shorthand parlance for saying that there is an [actor](@) that executes this [action](@) on behalf of that [party](@). In that sense, [parties](@) can be said to perform an [action](@) on behalf of other [parties](@), effectively representing such [parties](@).





In this model, we do not consider [actors](@) representing [parties](@), as this is already elaborated on in the [parties, actors, action model](pattern-party-actor-action@), which defines notions such as [agents](@) (and [principals](@))

### Formalized model

Here is a visual representation of this pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'Representation' pattern"
  src={useBaseUrl('images/patterns/pattern-party-representation.png')}
/>

### Miscellaneous

The seemingly simple notion of 'representation' turns out to be quite elusive in various circumstances. The painter [Rene Magritte was heavily reproached](https://en.wikipedia.org/wiki/The_Treachery_of_Images) for writing "Ceci n'est pas une pipe" (this is not a pipe) under a painting that showed a pipe. But he was right: you cannot stuff the image of a pipe in the same way you stuff the pipe that it represents.

In general, representation is quite complex, as can be readily experienced when diving into [Semiotics](https://en.wikipedia.org/wiki/Semiotics), that studies the workings of [signs](https://en.wikipedia.org/wiki/Sign_(semiotics)) (i.e. anything that communicates a meaning that is not the sign itself). Our [terminology model](pattern-terminology@) specifies that a [term](@) (within a specific [scope](@)/context) refers to (the [definition](@) of) a [concept](@), which is one way of representing (intangible) ideas.

'Representation' is a notion that seems simple enough to grasp, but turns out to be more elusive when trying to formalize it. [Merriam-Webster](https://www.merriam-webster.com/dictionary/representation) has several definitions
