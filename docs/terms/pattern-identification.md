---
id: pattern-identification
title: "Identification Pattern"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termType: pattern
term: identification
formPhrases: identification
status: draft
grouptags:
hoverText: "The eSSIF-Lab Identification Pattern describes mechanisms that a Party uses to Identify Entities, and mechanisms for communicating with another Party such that both Parties can identify an entity and know whether or not they identify the same entity."
date: 20210803
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::info Editor's note
This is work in progress and needs discussion.
:::

### Purpose
The **Identification pattern** captures the concepts and relations that help to explain the mechanisms that a [party](@) uses to [identify](@) [entities](@), and mechanisms for communicating with another party such that both parties can identify an entity and know whether or not they identify the same entity.

Related topics can be found in the [identity pattern](pattern-identity@) and the [identifier pattern](pattern-identifier@).

### Introduction
In 'the wild', terms such as [identify](https://www.merriam-webster.com/dictionary/identify), [identification](https://www.merriam-webster.com/dictionary/identification), [identity](https://www.merriam-webster.com/dictionary/identity) are defined such that the can be used without all too many problems in everyday discussions. However, if we want to use these terms for our [purposes](../essifLab-objectives), their definition must be much more precise, particularly because we want to use them in IT-contexts. Lets show this by example.

Here, we discuss [identification](identify@) in a way that we expect to be useful in IT-contexts (or non-IT, but still administrative contexts). Basically, two things are needed:

First, identification of an [entity](@) is similar to recognizing that [entity](@). A bit more formal: given an [entity](@) (or digital or non-digital [data](@) about that [entity](@) that comes from outside the [knowledge](@) of a [party](@)), identification is determining whether or not the [party](@) [owns](@) a [partial identity](@) of which that [entity](@) is the [subject](@). When the entity isn't recognized (identified), then a [partial identity](@) may be created that has this [entity](@) as its [subject](@).

Second, identification of an [entity](@) is similar to pointing/singling out the [entity](@). More formal: given a [partial identity](@) that is [owned](@) by a [party](@) and a specific context where a set of [entities](@) are present, identification is determining whether or not the [subject](@) of that [partial identity](@) is in that set, and if so, which of them it is.

We will elaborate on both.

#### 1. Identification: selecting a [partial identity](@)

Suppose you are at home and the doorbell rings. When you open the door you see a person of which you will gather further characteristics (properties), e.g. by observing their looks, by characterizing that person's voice (pitch, intonation), and interpreting what the person says, etc. You may even elicit further observations, e.g. by asking things. All of this serves the purpose of 'establishing the identity of' ([Merriam-Webster, identify, 1a](https://www.merriam-webster.com/dictionary/identify)) that person, where 'identity' would be 'the distinguishing character(istics) or personality of an individual' ([Merriam-Webster, identity, 1a](https://www.merriam-webster.com/dictionary/identity)).

You could also phrase this as recognizing the person, i.e. tapping into your own [knowledge](@) to see what you already know about this person, which - in terms of our [identity pattern](identity@) would be: determining which of the [partial identities](partial-identity@) you [owns](@) have the person at the door as its [subject](@). The purpose of all this is that as you remember what you know about the person, that helps you to decide whether or not, and if so, how to further engage with him/her. This would mean that you gather characteristics of that person (the fact that it actually is a person being the first of such characteristics), and continue to do so until there is only one [partial identity](@) that has all these characteristics.

Continuing the example, it could be that you have no recollection of that person, i.e. there is no [partial identity](@) in your [knowledge](@) that has all these characteristics. In this case you would already have started to create a new [partial identity](@) for which that person is the [subject](@), and you would have started to attribute characteristics (with some level of certainty) to this person, which all are part of this new [partial identity](@). Doing this enables you to identify/recognize this person the next time (s)he comes to your house.

The identification process is said to fail if a user record or [partial identity](@) has been selected, but its actual [subject](@) is not the [entity](@) that supposedly is identified. This is the case when someone/something (successfully) masquerades as, or impersonates that [entity](@). The process of obtaining assurances that the [entity](@) that is identified is "who (s)he says that (s)he is" is commonly called 'authentication'. We would say that authentication is the process of providing a set of assurances such that the [risk](@) of having selected a [partial identity](@) or user record whose [subject](@) is not the [entity](@) that was identified, is acceptable to the [owner](@) of that [partial identity](@) or user record.

#### 2. Identification: selecting an [entity](@) from a set

Suppose you want to have a drink with your friend in a cafe. When you open the door of the cafe, you visually and auditorily 'examine' the set of people that are present, perhaps calling out to your friend, until you recognize one of these people as your friend. Having 'identified' your friend enables you to interact with him/her as you planned.

A bit more formally, we would say that what you actually do is acquire [data](@) (observations about the various people that are present), compare this with what you know about your friend (i.e. the [partial identity](@) about your friend that you [owns](@)), and when you find a match, you will have identified your friend. Note that this is the converse of what we described in the previous subsection.

Similar to before, this identification process is (also) said to fail if an [entity](@) is selected that is not the [subject](@) of the [partial identity](@) that you were looking for. And again, to reduce the [risk](@) of such failure to an acceptable level (for the identifying [party](@)), assurances may be obtained as necessary (authentication).

### Identification in IT and/or administrative contexts

In the above examples, we tacitly assumed that the [party](@) is also an [actor](@) (see that [party-actor-action pattern](pattern-party-actor-action@) for details), which implies that the [actor](@) has access to all [knowledge](@) of the [party](@), which includes all [partial identities](partial-identity@).

In many contexts, this assumption does not hold. Examples include IT-contexts, or [organizational](organization@) administrative contexts, the difference being that the [agent](@) that is doing the identification is not the same [entity](@) as the [party](@) that owns the [partial identities](partial-identity@) that are being used in the process. In IT-contexts, an [agent](@) could be a web server, or a mobile app. In administrative contexts of an [organization](@) (which could also be IT-contexts with web server and other [agents](@)), you could also encounter human [agents](@) that are tasked with identification.

In any such cases, an [agent](@) that performs identification, must have access to the relevant subset of its [principal's](@) [knowledge](@), that is: to a representation thereof that it is able to interpret as intended by its [principal](@).

Such representations can come in many forms. In a human administrative context, such representations can be stored in e.g. customer and/or supplier relation management systems, employee registrations, etc., which may be paper-based (in a file cabinet), or electronic (in a database). Typically for IT-contexts, this would also include user registrations, that hold accounts for the users. The subset of [attributes](@) that one can find a such a registration should have been chosen such that the various records therein are fit for purpose, which means that any [action](@) that an [agent](@) of the [owner](@) of that [data](@) must execute, can find the [data](@) it needs for that task in one of its registrations.

This is particularly true for the [action](@) that is commonly referred to as 'logging in'. The [actor](@) that is 'logging in' some user onto a system (or provide the user access to some other physical or electronic location), will identity (and subsequently authenticate) the user, i.e. search for the account to associate the user with, from where it can find all other data that is needed about the user in that particular context.

### Formalized model - information realm
Here is a visual representation of this pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'Identification' pattern - information realm"
  src={useBaseUrl('images/patterns/pattern-identification.png')}
/>

The figure shows that a [party](@) can know (about the existence of) any number of [entities](@), one of which is that [party](@) itself. As explained in the [party-actor-action pattern](pattern-party-actor-action@), this [party](@) has ([owns](@), [governs](governance@)) its own [knowledge](@). Also, as explained in the [identity pattern](pattern-identity@), [partial identities](partial-identity@) are a part of that [knowledge](@).

As mentioned above, [identification](identify@) is an [act](action@), by (an [agent](@) of) a [party](@) that results in the establishment of a 1-1 relation between an [entity](@) (that exists in the real world) and a [partial identity](@) (that exists in the [knowledge](@) of that [party](@)). This [act](action@) takes place in a specific context/situation, in which a set of [entities](@) is present.

Then, this act accumulates a set of characteristics (the 'uses' relation in the figure) that it either
- observes from the [entity](@) to be identified, then finds all [partial identities](partial-identity@) that have all of these characteristics, or
- takes from the [partial identity](@) whose [subject](@) needs to be identified, then finds all [entities](@) that have all of these characteristics

There are quite a few commonly used characteristics. One example are entity-types, i.e. classifications of [entities](@) that [parties](@) use to make sense of the world. Examples of which include 'person', 'organization', 'animal', 'friend', etc. The [partial identity](@) that a [party](@) [owns](@) about some [entity](@) would include the entity-types that this [party](@) has attributed to that [entity](@). Another example are [identifiers](@), i.e. texts or words that are used to refer to an [entity](@) in specific contexts.

This process of accumulation of characteristics (and selecting the [entities](@) or [partial identities](partial-identity@) that keep fitting all of these characteristics) continues until
- there is no [entity](@) or no [partial identity](@) that matches all accumulated characteristics, in which identification failed.
- there is a single [partial identity](@) and a single [entity](@) that both match all such characteristics, in which case identification is successful and the [subject](@)-relation between the [entity](@) and [partial identity](@) has been established.

### Formalized model - data realm
Here is a visual representation of a similar pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'Identification' pattern - data realm"
  src={useBaseUrl('images/patterns/pattern-identification.png')}
/>

:::info Editor's note
This section needs a figure and an explanation of how identification works in the data realm, i.e. the realm where identification is performed by an [actor](@) that is not the [party](@) on whose behalf the [identification](identify@) is being made. This requires that the [actor](@) can access [data](@)-records ([owned](@) by its [principal](@)) that represent (excerpts of) [partial identities](partial-identity@) of the [entities](@) to be [identified](identify@). Such [data](@)-records would contain [attributes](@) that represent the characteristics.
:::
