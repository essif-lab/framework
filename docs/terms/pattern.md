---
id: pattern
title: "Pattern"
scopeid: essifLab
type: concept
typeid: pattern
stage: draft
hoverText: "Pattern (also: Mental Model): A description, both casual and formal, of a set of Concepts (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic."
glossaryText: "A description, both casual and formal, of a set of %%concepts^concept%% (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic."
date: 20210804
---

### Short Description
A **pattern** (also called **[mental model](https://en.wikipedia.org/wiki/Mental_model)** or **[conceptual model](https://en.wikipedia.org/wiki/Conceptual_model)**) captures a limited set of %%concepts|concept%% (ideas), relations between them, and constraints, such that together they form a coherent and consistent whole. They have been crafted so that they may serve as a basis for architecting, desiging, and implementing IT components and their governance processes.

Patterns use (tangible) %%terms|term%% to refer to these (intangible) concepts and relations, so in order to be consistent, a pattern must reside in the scope that defines these concepts and relations. A pattern may also 'connect' concepts of different scopes (preferably no more than two), which you might call an 'interconnection pattern' between these scopes.

The %%terminology pattern|pattern-terminology%% provides an overview of how this concept fits in with related concepts.

### Purpose
A (good) pattern can be used
- to facilitate one's thinking and reasoning about a specific topic, and/or deepen one's understanding of it.
- to effectively explain backgrounds of one's reasoning/understanding of the pattern's topic.
- to efficiently discuss and improve %%definitions|definition%% of the %%concepts|concept%% and relations in the pattern.
- to write texts using precisely defined language.

### Criteria
a limited set of %%concepts|concept%% (preferably not exceeding 7+/-2)[^1], relations between such concepts, and constraints, such that together they form a coherent and consistent whole that can be used to explain one's thinking about a specific topic within a specific %%scope|scope%%.

### Notes
The first purpose of a pattern is to help us think and reason about a certain topic or issue.
One signal that indicates the need of such a model is when we're running circles in our thoughts, and we have this feeling of not understanding, of the topic being (too) complex. Often, we are thinking in terms of concepts that are not fit for the objectives we pursue.

So a pattern requires careful construction, that allows the choices for its elements to be validated against many use-cases. Such validation instills trust that our model elements (concepts, relations, rules) are well-chosen. It also provides us with the experience (usually after some time) that it has made our thinking easier, and we are better equipped to resolve issues.

The careful construction is comparable to a quest: it takes time, multiple versions, and careful reflection. And it needs continuous validation of its parts, by throwing use-cases at it and verifying that the model can describe such cases, and do some reasoning with them.

This careful construction must ensure that the mental model gets different properties. For starters, the pattern must be able to reason in (all) static situations, where things do not change, and the so-called 'invariant' rules/constraints must  hold. Also, the model must be able to cope with time-dependencies and changes, for which other kinds of rules apply.

In the end, the pattern needs to be expressed in several, different ways, depending on whom we want to convey the ideas behind it to. Business people generally need simple models that allow them to (roughly) grasp its gist. Software architects need models with precise definitions that allow them to use its elements in (formal) reasonings. Software engineers (programmers) need all the details that allow them to create applications and databases that work according to the model's intent. So the level of detail that an expression of the model provides, makes it useful or useless to different audiences.

A notorious [quotation of George Box](https://en.wikipedia.org/wiki/All_models_are_wrong#Quotations_of_George_Box) is that "all models are wrong", to which he later added "but some are useful". While he was talking about statistical models, his reasoning applies equally well to mental models. Paraphrasing this argument: *The real world is never ***exactly*** represented by any model. However, cunningly chosen simple models often do provide remarkably useful approximations. We should not ask "Is the model true?". If "truth" is to be the "whole truth" the answer must be "No". The only question of interest is "Is the model illuminating and useful?"*. That's what we have tried to craft our models to.
