---
id: essifLab-pattern-list
sidebar_label: Mental Models
date: 20210908
---

# Overview of eSSIF-Lab Mental Models

import useBaseUrl from '@docusaurus/useBaseUrl'

Within eSSIF-Lab, we maintain a set of [mental models](https://en.wikipedia.org/wiki/Mental_model), which we also call [patterns](@), which are descriptions, both casual and formal, of sets of [concepts](@) (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.[^1]  They have been crafted so that they may serve as a basis for architecting, designing, and implementing IT components and their [governance](@) processes.
We stress that while they represent a specific way of looking at things, there are many more, and in the end, all that matters is the extent in which they are successfully used.

[^1]: Others also call this 'ontologies'. Here are some [lecture notes](http://www.cs.ru.nl/~tvdw/DM/LectureNotesA.pdf) on the systematic constructions of an ontology by Th. P. van der Weide (2007).

<img
  alt="George E.P. Box: All models are wrong, but some are useful"
  src={useBaseUrl('images/essif-lab-all-models-are-wrong.png')}
/>

One might think that everyone has their own mental models, and uses them to make decisions, make sense of the world, etc. Any mental model that helps a person cope in the world is ok. For example, the ancient Greeks had a mental model that said [the earth is at the center of the universe](https://oxfordre.com/planetaryscience/view/10.1093/acrefore/9780190647926.001.0001/acrefore-9780190647926-e-46#acrefore-9780190647926-e-46-div2-2), and the sun and planets somehow revolve around it. Further development of the model allowed them to compute planetary positions, which played a role in fortune telling and therefore was considered important. Doing this is [very complex](https://www.nature.com/articles/s41598-021-84310-w). In the 16th century, [Copernic revolutionized science](https://www.britannica.com/topic/Copernican-Revolution) by stating that the sun, rather than the earth, was at the centre of the universe. It wasn't like he changed the universe itself - he only changed the frame of reference, the perspective, i.e. the mental model that he used to look at, reason with, and explain the universe. Copernic showed in a dramatic way that changing one's perspective can have very profound consequences.

Most changes of perspective do not have such large effects. If he had proposed to put Jupiter at the centre of the universe, or the moon, he would have ended up with different mental models, but the complexity of computing planetary positions would have remained equally complex. Changing ones point of reference to the sun, however, made things much easier: planetary trajectories could now be seen as simple ellipses, with the sun positioned at one of the focal points.

'Mental modeling' is the art (yes, as far as we know it's not a science) of creating models that make things easy. It's like 'searching for the sun'. We have been mental modeling artisans for several years now, and we have come up with models that are stable, in the sense that we have been using them and have found them to be quite helpful. Also, we have slightly less mature models, that need to be used in practice to see how well they work. And we have some models that we are in the process of describing, which we present here as ongoing work.


## Stable Models

These are models that are mature (stable). They have been applied during several years in various circumstances, and have shown to be valid (when consistently and consequently applied). Therefore, they are proposed for widespread use (and further evaluation/validation).

### [Parties, Actors and Actions](party-actor-action@)

The [Parties, Actors and Actions pattern](party-actor-action@) captures the foundational [concepts](@) and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who [controls](controller@) whom/what?', 'Who/what may be held accountable?'.

### [Jurisdictions](pattern:jurisdiction@)

The [Jurisdictions pattern](pattern:jurisdiction@) captures the [concepts](@) and relations that explain what a generic [jurisdiction](@) consists of, and relates it to [parties](@) and [legal entities](legal-entity@).

### [Guardianships](pattern:guardianship@)

The [Guardianship pattern](pattern:guardianship@) captures the [concepts](@) and relations that explain what a generic guardianship consists of, and how it relates to [guardians](@), [dependents](@), [jurisdictions](@), etc.

## Models under review

These are models that we think go a long way to being mature, but may contain flaws we haven't detected yet.
### [Terminology](pattern:terminology@)

The [eSSIF-Lab Terminology Pattern](pattern:terminology@) will describe the relations between [terminology](@) artifacts such as '[concept](@)', '[term](@)', '[pattern](@)', '[mental model](pattern@)', '[glossary](@)' etc.

### [Identity](pattern:identity@)

The [eSSIF-Lab Identity Pattern](pattern:identity@)
- discusses difficulties that exist with the various/numerous meanings of the term 'identity',
- postulates a [definition for identity](identity@) that relates to what a person or another entity actually _is_,
- shows that it is comprised of [partial identities](partial-identity@) that are the actual artifacts we need to focus on in [SSI contexts](self-sovereign-identity@), and
- shows how this relates to (attributes in) [credentials](@).

### [Identification](pattern:identification@)

The [eSSIF-Lab Identity Pattern](pattern:identification@) will describe the concepts and relations that help to explain the mechanisms that a [party](@) uses to [identify](@) [entities](@), and mechanisms for communicating with another party such that both parties can identify an entity and know whether or not they identify the same entity.

### [Identifiers](pattern:identifier@)

The [eSSIF-Lab Identity Pattern](pattern:identifier@) will describe the conceptual nature of [identifiers](@). Note that [identifiers](@) are very different from [identities](@).

### [Party Representation](party-representation@)

The [Party Representation pattern](party-representation@) will capture the foundational concepts and relations that we need for thinking about how [parties](@) can represent one another in various circumstances, and answering questions such as 'in what ways can [parties](@) be represented?', 'what kind(s) of [entities](@) can represent [parties](@)', 'how can we deal with representation constraints, i.e. provide guarantees that the represented [party](@) isn't completely at the mercy of the one representing it?'.

### [Governance and Management](pattern:governance-and-management@)

The [Governance and Management Pattern](pattern:governance-and-management@) will explain how [parties](@) organize that [their](owner@) [objectives](@) are realized, either by doing the associated work themselves, or by arranging for other [parties](@) to do that. The contribution of this pattern is to show how this is done, based on the idea that every [objective](@) has a single [party](@) that [owns](@) the [objective](@).

### [Decentralized Governance, Risk Management and Compliance (GRC)](pattern:decentralized-grc@)

The [Decentralized GRC pattern](pattern:decentralized-grc@) will describe how [parties](@) can set objectives, and pursue them to be successful. The latter means that the party must be capable of assessing and managing the risks associated with not realizing them. In a decentralized world, this means that it needs to depend on other parties, that may or may not be too reliable. Also, it means that the party must be able to set and realize objectives to satisfy requirements of other parties ([compliance](@)).

## Envisaged Models

These are placeholders for models that we think we could document, but haven't come around to doing.

### [eSSIF-Lab World Model](pattern:world-model@)

The [eSSIF-Lab World Model](pattern:world-model@) will describe the basic [concepts](@), relations between them ([patterns](@)), and principles (that are the starting point for eSSIF-Lab's thinking) that eSSIF-Lab proposes as a basis for designing, implementing and deploying architectures, processes and technologies that aim to support (autonomous, [self-sovereign](self-sovereignty@)) [parties](@) as they negotiate and execute electronic [transactions](@) with one another.

### [Trust](pattern:trust@)

The [eSSIF-Lab Trust Pattern](pattern:trust@) will describe the conceptual nature of [trust](@) - limited to SSI contexts
### [Mandates, Delegation and Hiring](pattern:mandates-delegation-hiring@)

The envisaged [Mandates, Delegation and Hiring pattern](pattern:mandates-delegation-hiring@) will capture the ideas behind Mandating, Delegating, Hiring and their relations. It will extend the [Parties, Actors and Actions pattern](party-actor-action@) with concepts that describe how the [ownership](@) and `works for` relations between [parties](@) and [actors](@) are to be (de)populated, and how to determine for [party](@) the [actor](@) is working as it executes an [action](@).

### [Duties and Rights](pattern:duties-and-rights@)

The [Duties and Rights pattern](pattern:duties-and-rights@) will describe the relations between [jurisdictions](@), [legal entities](legal-entity@) and the duties and rights they have within them. This pattern will be based on the [theory of Hohfeld](https://plato.stanford.edu/entries/rights/#FormRighHohfAnalSyst).

### [Decision Making](pattern:decision-making@)

The [Decision Making pattern](pattern:decision-making@) will describe how [parties](@) would, could, or should reason in order to reach good conclusions and make good decisions. This can be used as a basis for understanding the information needs of  [parties](@) as they need to decide e.g. whether or not to commit to a [transaction](@) proposal, or whether or not data is [valid](validate@) for some purpose. The pattern is based on [Toulmin's model for reasoning](https://www.cambridge.org/core/books/uses-of-argument/26CF801BC12004587B66778297D5567C) (of which a pragmatical text can be found [here](https://owl.purdue.edu/owl/general_writing/academic_writing/historical_perspectives_on_argumentation/toulmin_argument.html)).

### [Semantics](pattern:semantics@)

The [Semantics pattern](pattern:semantics@) describes the relations between (intangible) concepts that are part of a Party's Knowledge, and how they are (tangibly) represented. This mapping between what is known (yet is intangible) and what can actually be obtained, stored, processed and transmitted (because it is tangible) is otherwise known as a [semantics](@).
