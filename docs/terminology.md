---
id: terminology
title: "eSSIF-Lab Concepts and Terminology"
sidebar_label: Terminology
scopeid: essifLab
---

:::info **UNDER CONSTRUCTION**
*This (initial version of the) terminology chapter is currently under construction. If you feel like making a contribution, please contact [the editor](mailto:rieks.joosten@tno.nl)*
:::

The eSSIF-Lab Terminology and Concepts effort is directed at providing tools, terminologies and (mental/conceptual) models, the purpose of which is to enable/facilitate its stakeholders in understanding one another as they communicate about topics that concern eSSIF-Lab (specifically: its arechitecture and components), and also to write document(ation)s in such a way that the other stakeholders have less trouble with understanding.

## Motivation

Contributors to and users of eSSIF-Lab come from various backgrounds. Their culture may not be Western. English may not be their native tongue. They may be experts in non-technological topics. Working with one another presumes a setting where participants have some level of shared understanding. Often, sharing one's understanding at a superficial level suffices. Other situations require that underlying concepts are shared in a more in-depth fashion. It's like cars: people buying, selling, or driving cars do not need in-depth shared knowledge about cars, whereas (maintenance or construction) engineers or liability lawyers need to share a deeper knowledge of how cars do (or do not) work.

We expect to see situations of "language confusion", i.e. in which people use words or phrases, the intension (not: intention) of which differs from the interpretation of some listeners/readers. Sometimes a casual glance at a dictionary or glossary is the solution. In other cases, deeper understanding matters, e.g. in when drafting specifications or contracts. Then [we need more than a set of definitions](https://www.sfu.ca/~swartz/definitions.htm).

The Concepts and Terminology part of eSSIF-Lab aims helps eSSIF-Lab community participants understand one another at whatever level of precision they need.

## Terminological Artifacts

the eSSIF-Lab Concepts and Terminology effort aims to produce artifacts that help stakeholders for the purposes mentioned above. Currently, this comprises:

- A set of (documented/defined) terms that can be easily referred to by document authors, according to [these instructions](./terminology-plugin-instructions).
- A [Glossary](./essifLab-glossary) that lists these terms, and is automagically updated as contributions to the eSSIF-Lab Terminology Corpus are being made.
- A set of %%mental models|mental model%% that provide backgrounds about how specific %%concepts|concept%% relate to one another.

Depending on the needs of stakeholders, additional artifacts may be created/generated.

## Glossaries are useful, but do not solve all problems

The traditional tool for fostering common understanding is using glossaries, i.e. alphabetical lists of words relating to a specific subject, text, or dialect, with explanations; a brief dictionary ([OED](https://www.lexico.com/definition/glossary)). Examples include the [Sovrin Glossary](https://sovrin.org/library/glossary/) and the [NIST Glossary](https://csrc.nist.gov/glossary). Other initiatives attempt to provide more background, e.g. the [terminology for talking about privacy by data minimization](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) by Pfitzmann and Hansen (2010), or the [EBSI Terminology (login required)](https://ec.europa.eu/cefdigital/wiki/display/EBP/EBSI+Terminology).


A Mental Model, or Conceptual Model, is a set of of concepts (i.e. entity classes), relations between such concepts (i.e. sets of pairs of members of classes that a relation connects), and rules/constraints expressed in terms of these relations and concepts.

The first purpose of a Mental Model is to help us think and reason about a certain topic or issue.
One signal that indicates the need of such a model is when we’re running circles in our thoughts, and we have this feeling of not understanding, of the topic being (too) complex. Often, we are thinking in terms of concepts that are not fit for the objectives we pursue.

So a mental model requires careful construction, that allows the choices for its elements to be validated against many use-cases. Such validation instills trust that our model elements (concepts, relations, rules) are well-chosen. It also provides us with the experience (usually after some time) that it has made our thinking easier, and we are better equipped to resolve issues.

The careful construction is comparable to a quest: it takes time, multiple versions, and careful reflection. And it needs continuous validation of its parts, by throwing use-cases at it and verifying that the model can describe such cases, and do some reasoning with them.

This careful construction must ensure that the mental model gets different properties. For starters, the model must be able to reason in (all) static situations, where things do not change, and the so-called ‘invariant’ rules/constraints must  hold. Also, the model must be able to cope with time-dependencies and changes, for which other kinds of rules apply.

In the end, the mental model needs to be expressed in several, different ways, depending on whom we want to convey the ideas behind it to. Business people generally need simple models that allow them to (roughly) grasp its gist. Software architects need models with precise definitions that allow them to use its elements in (formal) reasonings. Software engineers (programmers) need all the details that allow them to create applications and databases that work according to the model’s intent. So the level of detail that an expression of the model provides, makes it useful or useless to different audiences.

## Terminology and Definitions

We attempt to create definitions that are both acceptable for business people yet are precise enough to serve as a basis for formal reasoning. We do this by using [intensional definitions](https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions), i.e. by defining criteria that specify the  necessary and sufficient conditions for when a term should be used. We have tried to craft these definitions such that

- readers are likely to make the same judgements when using them, and
- these distinctions are relevant for our purposes. That’s the important stuff.

The actual texts we choose as the name for a concept is of secondary importance; if in a particular context other names are more suitable, you can rename them there without loss of meaning or consistency.

Together with these criteria, we provide a limited set of examples to help the reader to visualize the defined concepts, and to point out possibly unexpected consequences of the criteria. Also, we may motivate the need for having a concept by showing its relevance for the model.
