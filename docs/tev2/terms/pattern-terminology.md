---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: pattern-terminology
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: pattern
termid: terminology
formphrases: terminology
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-06-06
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `pattern`
term: terminology  # Text that is the name of the pattern in (human readable) texts.
tag:  # Tag by which this pattern can be identified within the scope in which it is specified
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Terminology Pattern"
hoverText: "The eSSIF-Lab Terminology Pattern describes the relations between Terminology Terms such as 'Concept', 'Term', 'Pattern', 'Mental Model', 'Glossary' etc."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

import useBaseUrl from '@docusaurus/useBaseUrl'

This pattern describes how [terms](@) are [scoped](@) (which software engineers call 'namespaces'), how parties govern such scopes/namespaces, and that if you use criteria to define/specify terms, people can test if they have the same understanding of a term by making sure that everyone reaches the same conclusions as they evaluate such criteria in various relevant use-cases.

## Purpose
The prime objective of working with a [terminology](@) is to enable individual members of a [community](@) to understand the [words and phrases](@) that are used by its members ***in the same, single meaning***. This is to say that ***the differences in the individual understandings of words or phrases by different members of the same [community](@) do not pose any problems in their collaborations***.

This suggests that (members of) a [community](@) need the ability and means to (a) establish and maintain (i.e.: [own](@)) their own [terminology](@), and (b) to ensure it is fit for the purpose of eliminating such misunderstandings.

More concretely, they need the ability and means to
- document their ways of thinking ([mental models](@)) that are crucial to their work and relevant for their collaboration;
- create and maintain [definitions](@) that enable them to demonstrably agree on the [concepts](@)/meanings that are relevant in such ways of thinking; a process for creating and maintaining such [definitions](@) is described in this [technical report](https://www.researchgate.net/publication/352560909_on_terminology_and_the_resolution_of_related_issues).
- decide on the [terms](@) they will use as their [terminology](@), the [definitions](@) they refer to, and thereby also the [concepts](@) that they represent; note that the [community](@) may decide to use [terms](@) that refer to [definitions](@) devised by other [communities](@), or copy such [definitions](@) and start to curate them in their own [community](@).

Once a [community](@) has its [terminology](@) in place, it may want to establish a [glossary](@) that 'renders' that [terminology](@) and serves as the authoritative reference for the (crucial) [terms](@) used by its members. This [glossary](@) is also a valuable reference document for a non-community member, as it helps him/her to (better) understand the (verbal or written) communications authored by that [community](@), i.e. it helps to 'map', or 'translate' the terms of that [community](@) to words or phrases that the person uses itself, which is prerequisite for effectively engaging with that [community](@).

The secondary objective of working with a [terminology](@) is to enable members of [ecosystems](@) (as opposed to [communities](@) that we have discussed above) to establish

- a set of [terms](@) that have a 'good definition' (as defined at the end of [this document](https://www.researchgate.net/publication/352560909_on_terminology_and_the_resolution_of_related_issues), which basically means that ***two arbitrary people that use that definition stand a very good chance of having the same individual understanding of what is meant***.
- a set of [mental models](@) that describe relations and constraints between sets of such terms, thus providing the bases for ***arbitrary sets of people to have the same understanding of specific ways of thinking about a set of concepts***.

Such [terminologies](@) and [mental models](@) differ from those created for/by [communities](@) in the sense that it is basically just a repository of words and phrases that [communities](@) may adopt within their own [scopes](@). They have no other authority than what they can derive from being used in/by [communities](@).

The benefit of creating and maintaining such [terminologies](@) and [mental models](@) lies in the fact that they can be developed with less of a bias of developers than if they were developed in a [community](@) (that is there to serve its own interests). As such, they may play an important role as different [communities](@) seek to establish a language for cooperating with one another.

### Introduction

This pattern has two basic parts:

1. the [management](@)-related part. This part consists of a [community](@) that [owns](@) its particular set of [objectives](@) which exist for establishing cooperation between its members, and for which it needs to establish and maintain, a [terminology](@). [Managing, or curating](@) a [terminology](@) consists of realizing the [objectives](@) that the terminology is intended to serve, i.e. to establish a set of [concepts](@), [definitions](@), [terms](@) and [mental models](@), the quality of which is such that
  - members of the [community](@) use them ***in the same, single meaning***, thereby preventing difficulties in their cooperation, caused by differences in the individual understandings of words or phrases, and
  - non non-members of the [community](@) can obtain a precise understanding of the communications within that community.
Also, this [management](@) may cause reference documents to be created and maintained, e.g. a [glossary](@) that lists the [terminology](@) of the [community](@), a [dictionary](@) that includes its [terminology](@) as well as [terminologies](@) from other, related [communities](@).

2. the terminology-related part. This is where [concepts](@), [definitions](@), [terms](@), [glossaries](@) etc. live. This part is what one needs to create tools/support for managing and maintaining a [terminology](@). Here, we have [concepts](@) with their [definitions](@) and [terms](@) as a means to refer to either. A [concept](@), its [definition](@) live in the same [scope](@), and within that [scope](@) there must be a [term](@) to refer to that [concept](@) and its [definition](@). Within a specific [scope](@), every [term](@) is associated with precisely one such [concept](@) and [definition](@). However, within a [scope](@), a [concept](@)/[definition](@) pair may be referred to by multiple [terms](@), which are then synonyms or aliases of each other.


### Formalized model
Here is a visual representation of this pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'terms-community' pattern"
  src={useBaseUrl('images/patterns/pattern-terms-community.png')}
/>

The figure shows three areas:
- the [white area](#white) has the [concepts](@) that deal with the organization of this.
- the [green area](#green) represents a [scope](@), in which at most one [terminology](@) lives, and that also includes [tags](@), [scoped terms](@) and [definitions](@). The (contents of the) [scope](@) is curated (developed, maintained) by a single so-called [terms-community](@).
- the [yellow area](#yellow) represents a [knowledge](@), in which intangible artifacts such as [objectives](@) and [concepts](@) reside.

#### White: Parties, Communities and Tags {#white}
Members of a [community](@) that want or need to collaborate with each other may feel the need for a [terminology](@) that helps to effectively prevent misunderstandings within the [community](@) as they may hamper collaboration. [Communities](@) typically express this need as a wish for creating a [glossary](@).

Our [model](@) expresses this idea by saying that a [community](@) can commit to use a [terminology](@), that can be represented/rendered as a [glossary](@) in different ways (e.g. as a PDF, HTML website, etc.). When a [community](@) is committed to use a [terminology](@), this means that whenever any of the [community](@) members uses a [term](@) in some communication that is contained in the [terminology](@), then the meaning of that [term](@) (i.e. the [definition](@) of the concept to which that [term](@) refers) is also specified by that [terminology](@). More details are in the section [Green: Scopes - Terminological Concepts](#green).

Note that this does not preclude [community](@) members to use [terms](@) [defined](@) in other [scopes](@). The combination of a [tag](@) that [identifies](@) (the [scope](@) of) a [terminology](@) (so called [scope tags](@)) and a [term](@) unambiguously [identify](@) the [concept](@) (and its [definition](@)) to which that [term](@) refers within (the [scope](@) of) that [terminology](@).

A [terms-community](@) is a [community](@) that
- has one or more [objectives](@) to serve/support itself and/or other [communities](@) by enabling them to
  - prevent misunderstandings amongst their members, and
  - author communications in such a way that the likelihood of non-members misunderstanding such communications is minimized.
- [manages](@) these [objectives](@) itself, producing results that include:
  - one or more [glossaries](@) that each render the [terminology](@) of the [scope](@) that it curates;
  - the specification of (any number of) [tags](@) that either
    - [identify](@) a [scope](@) (and thereby implicitly also its [terminology](@)) - the so-called [scope tags](@), or
    - can be associated with [definitions](@) as a means of grouping the [concepts](@) such [definitions](@) define - the so-called [group tags](@).
    - [identify](@) a specific version of the [terminology](@) - the so-called [version tags](@).

We refer the reader to the [governance and management pattern](pattern-governance-and-management@) to learn more about transferring such results between a [terms-community](@) and the [communities](@) that it serves.

Note that for a [terms-community](@) to serve itself, it may want to commit to a [terminology](@) such as the one we are developing here.

#### Green: Scopes - Terminological Concepts {#green}
Every [terminology](@) is scoped, i.e. part of a [scope](@). This [scope](@) also consists of [definitions](@), [scoped terms](@), and various kinds of [tags](@). These components of the [scope](@) exist for as long as the [scope](@) exists. Note that if a [scoped term](@) ceases to exist,[terms](@) with the same name typically continue to exist in the [scope(s)](@) of which they are still a part.

Apart from the multiplicity constrained that are showed in the figure, some additional rules apply:
- every [term](@) that is part of a [scope](@) is contained in the [terminology](@) of that [scope](@).
- every pair ([scope](@), [term](@)) refers to precisely one [definition](@).
- every [definition](@) that is part of a [scope](@) is referred to by a [term](@) that is also part of that [scope](@)

When we say that a [terms-community](@) curates a [scope](@), this means that the [terms-community](@)
- [manages](@) (creates/maintains) the set of [definitions](@) that define [concepts](@) that are relevant for realizing its [objectives](@);
- [manages](@) (creates/maintains) the (single) [terminology](@) of the [scope](@), i.e. the set of [terms](@) that members of the [terms-community](@) are expected to use in their communications. This set consists of:
  - at least one term for every [definition](@) that is part of the [scope](@), and
  - at least one term for any other [definition](@) (which is part of *another* [scope](@), i.e. curated by another [terms-community](@)) that defines a concept that is relevant for realizing one or more [objectives](@) of the [terms-community](@).
- [manages](@) (creates/maintains) the various [tags](@) in the scope, i.e. defines a [scopetag](@) for the [scope](@), [versiontags](@) (if necessary) for the different versions of the [terminology](@) of that [scope](@), and (optionally) any [grouptags](@) for grouping sets of [terms](@).

#### Yellow: Intangible Concepts {#yellow}
The intangible [concepts](@) are important because this is where the misunderstandings live. The [knowledge](@) of a [party](@) uses a subjective [conceptualization](@) of the world (that the [party](@) has perceived to be living in for as long as it exists) for its individual reasoning, arguing, communicating, decision making etc. Because of this, two [parties](@) that collaborate (i.e.: form a [community](@)) cannot be expected to have the same conceptualizations. However, it is a common belief that if one uses a [term](@) to refer to a [concept](@) in its [knowledge](@), the other will then relate it to 'the same' [concept](@) within its own knowledge, that we should not assume actually exists. For example, when one of them uses the [term](@) 'identity', it knows which [concept](@) that relates to within its own [knowledge](@). However, others need to hallucinate as to what that [concept](@) might be, and typically respond by thinking that the [concept](@) that the [term](@) refers to in their own [knowledge](@) would be its intended meaning. In many cases that doesn't pose a problem, because the [concepts](@) of both [knowledges](@) are 'sufficiently the same'. In other cases, the differences in meaning may be such that it disrupts the collaboration between the [parties](@). And that is when it helps to have 'good [definitions](@)', because they have the property that collaborators can assess whether or not the [concepts](@) in their [knowledge](@) (that a well-defined [term](@) refers to) are 'sufficiently the same'.

In order to keep the work of devising [definitions](@) to a minimum, it helps to know the [objectives](@) that the members of the [community](@) collaboratively seek to realize. Any [definition](@) should define a [concept](@) that is relevant for that collaboration. Other definitions are just useless work.
