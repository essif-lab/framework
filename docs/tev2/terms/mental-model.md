---
# TEv2 Curated Text Header
term: mental-model
termType: concept
isa: knowledge-artifact
glossaryTerm:
glossaryText: "A [knowledge artifact](@) that relates a set of [concepts](@) (ideas), relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."
synonymOf:
grouptags:
formPhrases: mental-model{ss}, pattern{ss}, conceptual-model{ss}
# Curation status
status: proposed
created: 2022-06-06
updated: 2022-06-07
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Mental Model

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary

A **Pattern**, **[mental model](https://en.wikipedia.org/wiki/Mental_model)** or **[conceptual model](https://en.wikipedia.org/wiki/Conceptual_model)**) is [knowledge artifact](@) that relates a set of [concepts](@) (ideas), relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking'). Typically, the number of [concepts](@) is limited, e.g. to [the magical number 7, plus or minus 2](http://psychclassics.yorku.ca/Miller/), so that individuals can grasp it without making too many mistakes. The quality of a [pattern](@) is directly proportional to its fitness for serving its intended purpose(s), e.g., as a basis for architecting, designing, and implementing IT components and their [governance](@) processes.

Since every [pattern](@) is a [knowledge artifact](@), it will need to be documented in such a way that the different people that work with it have a (provably) common understanding of what it entails. Typically, such documentation is a [curated text](@) that would consist of an introductory text that explains the ideas behind the [pattern](@) and the purposes for which it was designed, as well as a more formal specification of the [concepts](@), [relations](@) and [constraints](@) that it consists of. In order to be consistent, the description of a [mental model](@) must reside in the [scope](@) that also includes defines these [concepts](@) and [relations](@). A [mental model](@) may also 'connect' [concepts](@) of different [scopes](@) (preferably no more than two), which you might call an 'interconnection pattern' between these [scopes](@).

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts (as a specialization of a [knowledge artifact](@)).

### Purpose

A (good) mental model can be used
- to facilitate one's thinking and reasoning about a specific topic, and/or deepen one's understanding of it.
- to effectively explain backgrounds of one's reasoning/understanding of the mental model's topic.
- to efficiently discuss and improve [definitions](@) of the [concepts](@) and relations in the mental model.
- to write texts using precisely defined language.

### Criteria

A limited set of [concepts](@) (preferably not exceeding 7+/-2)[^1], relations between such concepts, and constraints, such that together they form a coherent and consistent whole that can be used to explain one's thinking about a specific topic within a specific [scope](@).

### Notes

The first purpose of a mental model is to help us think and reason about a certain topic or issue.
One signal that indicates the need of such a model is when we're running circles in our thoughts, and we have this feeling of not understanding, of the topic being (too) complex. Often, we are thinking in terms of concepts that are not fit for the objectives we pursue.

### On Using (existing) Mental models

A notorious [quotation of George Box](https://en.wikipedia.org/wiki/All_models_are_wrong#Quotations_of_George_Box) is that "all models are wrong", to which he later added "but some are useful". While he was talking about statistical models, his reasoning applies equally well to mental models. Paraphrasing this argument: *The real world is never ***exactly*** represented by any model. However, cunningly chosen simple models often do provide remarkably useful approximations. We should not ask "Is the model true?". If "truth" is to be the "whole truth" the answer must be "No". The only question of interest is "Is the model illuminating and useful?"*. That's what we have tried to craft our models to.

In other words: your choice of mental model isn't going to change the world for a bit. It only provides you with a particular perspective on reality. If you like the perspective, keep using the model. If not, use another one.

Having said that, the crux of using a mental model is that you commit to it for as long as you use it. This means you take whatever the model says to be the case, and you do not allow (parts of) other models or ways of thinking interfere, because it will make you inconsistent and incoherent.

For some people this is really easy:
- Mathematicians have loads of models, a notorious set are the three geometries ([Euclidian](https://en.wikipedia.org/wiki/Euclidean_geometry), [Elliptic](https://en.wikipedia.org/wiki/Non-Euclidean_geometry#Elliptic_geometry) and [Hyperbolic](https://en.wikipedia.org/wiki/Non-Euclidean_geometry#Hyperbolic_geometry)). Depending on what they are doing, they choose one of the three, i.e. the one that fits their purpose best.
- Physicists have them too, e.g. in the [duality principle of light](https://en.wikipedia.org/wiki/Wave%E2%80%93particle_duality)
- Historians and astronomers are aware of the [geocentric world model](https://en.wikipedia.org/wiki/Geocentric_model) that was used to prepare astrological and astronomical charts for over 1500 years. Copernic, Galileo and Kepler came with the [heliocentric model of the universe](https://en.wikipedia.org/wiki/Heliocentrism), which is only taking another perspective on reality (making it easier to prepare such charts).

For other people, it is very difficult. The introduction of the heliocentric model encountered lots of opposition, for various reasons that did not have anything to do with the model's merits. We, too, find that some of our models (specifically: the [party-actor-action model](@)) is sometimes opposed, where the arguments do not come from within the model itself (in attempts to falsify the model), but have other roots, setting the stage for incoherent and inconsistent argumentations.

Perhaps this is comparable with optical illusions, such as that of the [old and young women](https://www.google.com/search?source=univ&tbm=isch&q=optical+illusions+old+young+woman&fir=YIllsD9jihWxTM%252C1sZUL2jWNPvfxM%252C_%253BhsIzlU__RDe_nM%252Cyfw5Hii3UEmJHM%252C_%253Bk64g32oWxpYe8M%252CkqkPUja_z9NllM%252C_%253BFKMuqWLTX2wGtM%252CnTNCHp33apIpSM%252C_%253BEFfy6TSa8qgljM%252CPC_q2aBWJ95QfM%252C_%253BkFbAhDyYIR5MVM%252CWj0wk8hGQLHjWM%252C_%253BAX8XJjwDWQtyUM%252CiGJDEv3hShV9hM%252C_%253BeTsHDY5hHaPs9M%252CGOdBzeJDaJHS-M%252C_%253ByLBf8y95TCv1EM%252C0ZRLesUL5FW6sM%252C_%253Bg99V52yd0J1rOM%252CcYAag1F1qB6TaM%252C_%253BZHfvJXZFxHA4ZM%252CSqZ2N1ZFJLtPbM%252C_%253BXRMAn-j0tsUCvM%252C6vFweEnwB6_V1M%252C_%253BAoZByG4INAwYSM%252Cjhtnii31U6mWzM%252C_%253BCLrz5N2Kp8uAHM%252CmyjTMkeibmtg0M%252C_%253BpWT4mSz6-j-KOM%252CI0eh7eHVJVtHJM%252C_%253BPXcirTX8iQKiJM%252CP20yLZuYAjqV4M%252C_&usg=AI4_-kSPSjX9ixQFqsKa-4GnaDABoPxuKQ&sa=X&ved=2ahUKEwjr1tLOxZH4AhXfwAIHHSnuCXMQjJkEegQIAhAC&biw=1396&bih=665&dpr=1.38) let you experience first hand what difficulties you may have in relinquishing ideas you hold (about whether the picture represents one or the other). Only if you can do that, you can see from both perspectives, and at any point in time choose which is the most beneficial for you.

Most people may be between these extremes. The bottom line is that you should be decisive: you either use the model, or you don't. There is no in-between. Also, you should be attentive, and watch for any thoughts that may come up that might interfere, and cause you to become incoherent/inconsistent.

When assessing a model, start simple. Read the text, try to picture (or hear) what it says: try to follow (understand) the [author](@). Try to figure out how the model would work in situations that the [author](@) did not describe (not: how the model is flawed because you cannot think of how it would work). Then find increasingly complex situations, and figure out how the model would work there. If you get stuck (anywhere during this process), then don't jump to conclusions, but rather find others that have used the model, and ask them how it might work.

### On the Construction of Mental Models

If you're acquianted with using mental models, you may want to construct your own. That is a task that needs to be taken on with care. You must allow the choices for its elements to be validated against many use-cases. Such validation instills trust that our model elements (concepts, relations, rules) are well-chosen. It also provides us with the experience (usually after some time) that it has made our thinking easier, and we are better equipped to resolve issues.

The careful construction is comparable to a quest: it takes time, multiple versions, and careful reflection. And it needs continuous validation of its parts, by throwing use-cases at it and verifying that the model can describe such cases, and do some reasoning with them.

This careful construction must ensure that the mental model gets different properties. For starters, the mental model must be able to reason in (all) static situations, where things do not change, and the so-called 'invariant' rules/constraints must  hold. Also, the model must be able to cope with time-dependencies and changes, for which other kinds of rules apply.

In the end, the mental model needs to be expressed in several, different ways, depending on whom we want to convey the ideas behind it to. Business people generally need simple models that allow them to (roughly) grasp its gist. Software architects need models with precise definitions that allow them to use its elements in a (formal) reasoning. Software engineers (programmers) need all the details that allow them to create applications and databases that work according to the model's intent. So the level of detail that an expression of the model provides, makes it useful or useless to different audiences.
