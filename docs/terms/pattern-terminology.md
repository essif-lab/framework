---
id: pattern-terminology
title: "Terminology Pattern"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: pattern
termid: terminology
term: terminology
formphrases: terminology
status: draft
grouptags:
hoverText: "The eSSIF-Lab Terminology Pattern describes the relations between Terminology Terms such as 'Concept', 'Term', 'Pattern', 'Mental Model', 'Glossary' etc."
date: 20211101
---

import useBaseUrl from '@docusaurus/useBaseUrl'

This pattern describes how %%terms|term%% are %%scoped|scope%% (which software engineers call 'namespaces'), how parties govern such scopes/namespaces, and that if you use criteria to define/specify terms, people can test if they have the same understanding of a term by making sure that everyone reaches the same conclusions as they evaluate such criteria in various relevant use-cases.

## Purpose
The prime objective of working with a %%terminology|terminology%% is to enable individual members of a %%community|community%% to understand the %%words and phrases|term%% that are used by its members ***in the same, single meaning***. This is to say that ***the differences in the individual understandings of words or phrases by different members of the same %%community|community%% do not pose any problems in their collaborations***.

This suggests that (members of) a %%community|community%% need the ability and means to (a) establish and maintain (i.e.: %%own|owner%%) their own %%terminology|terminology%%, and (b) to ensure it is fit for the purpose of eliminating such misunderstandings.

More concretely, they need the ability and means to
- document their ways of thinking (%%mental models|pattern%%) that are crucial to their work and relevant for their collaboration;
- create and maintain %%definitions|definition%% that enable them to demonstrably agree on the %%concepts|concept%%/meanings that are relevant in such ways of thinking; a process for creating and maintaining such %%definitions|definition%% is described in this [technical report](https://www.researchgate.net/publication/352560909_on_terminology_and_the_resolution_of_related_issues).
- decide on the %%terms|term%% they will use as their %%terminology|terminology%%, the %%definitions|definition%% they refer to, and thereby also the %%concepts|concept%% that they represent; note that the %%community|community%% may decide to use %%terms|term%% that refer to %%definitions|definition%% devised by other %%communities|community%%, or copy such %%definitions|definition%% and start to curate them in their own %%community|community%%.

Once a %%community|community%% has its %%terminology|terminology%% in place, it may want to establish a %%glossary|glossary%% that 'renders' that %%terminology|terminology%% and serves as the authoritative reference for the (crucial) %%terms|term%% used by its members. This %%glossary|glossary%% is also a valuable reference document for a non-community member, as it helps him/her to (better) understand the (verbal or written) communications authored by that %%community|community%%, i.e. it helps to 'map', or 'translate' the terms of that %%community|community%% to words or phrases that the person uses itself, which is prerequisite for effectively engaging with that %%community|community%%.

The secondary objective of working with a %%terminology|terminology%% is to enable members of %%ecosystems|ecosystem%% (as opposed to %%communities|community%% that we have discussed above) to establish

- a set of %%terms|term%% that have a 'good definition' (as defined at the end of [this document](https://www.researchgate.net/publication/352560909_on_terminology_and_the_resolution_of_related_issues), which basically means that ***two arbitrary people that use that definition stand a very good chance of having the same individual understanding of what is meant***.
- a set of %%mental models|pattern%% that describe relations and constraints between sets of such terms, thus providing the bases for ***arbitrary sets of people to have the same understanding of specific ways of thinking about a set of concepts***.

Such %%terminologies|terminology%% and %%mental models|pattern%% differ from those created for/by %%communities|community%% in the sense that it is basically just a repository of words and phrases that %%communities|community%% may adopt within their own %%scopes|scope%%. They have no other authority than what they can derive from being used in/by %%communities|community%%.

The benefit of creating and maintaining such %%terminologies|terminology%% and %%mental models|pattern%% lies in the fact that they can be developed with less of a bias of developers than if they were developed in a %%community|community%% (that is there to serve its own interests). As such, they may play an important role as different %%communities|community%% seek to establish a language for cooperating with one another.

### Introduction

This pattern has two basic parts:

1. the %%management|management%%-related part. This part consists of a %%community|community%% that %%owns|owner%% its particular set of %%objectives|objective%% which exist for establishing cooperation between its members, and for which it needs to establish and maintain, a %%terminology|terminology%%. %%Managing, or curating|management%% a %%terminology|terminology%% consists of realizing the %%objectives|objective%% that the terminology is intended to serve, i.e. to establish a set of %%concepts|concept%%, %%definitions|definition%%, %%terms|term%% and %%mental models|pattern%%, the quality of which is such that
  - members of the %%community|community%% use them ***in the same, single meaning***, thereby preventing difficulties in their cooperation, caused by differences in the individual understandings of words or phrases, and
  - non non-members of the %%community|community%% can obtain a precise understanding of the communications within that community.
Also, this %%management|management%% may cause reference documents to be created and maintained, e.g. a %%glossary|glossary%% that lists the %%terminology|terminology%% of the %%community|community%%, a %%dictionary|dictionary%% that includes its %%terminology|terminology%% as well as %%terminologies|terminology%% from other, related %%communities|community%%.

2. the terminology-related part. This is where %%concepts|concept%%, %%definitions|definition%%, %%terms|term%%, %%glossaries|glossary%% etc. live. This part is what one needs to create tools/support for managing and maintaining a %%terminology|terminology%%. Here, we have %%concepts|concept%% with their %%definitions|definition%% and %%terms|term%% as a means to refer to either. A %%concept|concept%%, its %%definition|definition%% live in the same %%scope|scope%%, and within that %%scope|scope%% there must be a %%term|term%% to refer to that %%concept|concept%% and its %%definition|definition%%. Within a specific %%scope|scope%%, every %%term|term%% is associated with precisely one such %%concept|concept%% and %%definition|definition%%. However, within a %%scope|scope%%, a %%concept|concept%%/%%definition|definition%% pair may be referred to by multiple %%terms|term%%, which are then synonyms or aliases of each other.


### Formalized model
Here is a visual representation of this pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'terms-community' pattern"
  src={useBaseUrl('images/patterns/pattern-terms-community.png')}
/>

The figure shows three areas:
- the [white area](#white) has the %%concepts|concept%% that deal with the organization of this.
- the [green area](#green) represents a %%scope|scope%%, in which at most one %%terminology|terminology%% lives, and that also includes %%tags|tag%%, %%scoped terms|scoped-term%% and %%definitions|definition%%. The (contents of the) %%scope|scope%% is curated (developed, maintained) by a single so-called %%terms-community|terms-community%%.
- the [yellow area](#yellow) represents a %%knowledge|knowledge%%, in which intangible artifacts such as %%objectives|objective%% and %%concepts|concept%% reside.

#### Wit: Parties, Communities and Tags {#white}
Members of a %%community|community%% that want or need to collaborate with each other may feel the need for a %%terminology|terminology%% that helps to effectively prevent misunderstandings within the %%community|community%% as they may hamper collaboration. %%Communities|community%% typically express this need as a wish for creating a %%glossary|glossary%%.

Our %%model|pattern%% expresses this idea by saying that a %%community|community%% can commit to use a %%terminology|terminology%%, that can be represented/rendered as a %%glossary|glossary%% in different ways (e.g. as a PDF, HTML website, etc.). When a %%community|community%% is committed to use a %%terminology|terminology%%, this means that whenever any of the %%community|community%% members uses a %%term|term%% in some communication that is contained in the %%terminology|terminology%%, then the meaning of that %%term|term%% (i.e. the %%definition|definition%% of the concept to which that %%term|term%% refers) is also specified by that %%terminology|terminology%%. More details are in the section [Green: Scopes - Terminological Concepts](#green).

Note that this does not preclude %%community|community%% members to use %%terms|term%% %%defined|definition%% in other %%scopes|scope%%. The combination of a %%tag|tag%% that %%identifies|identify%% (the %%scope|scope%% of) a %%terminology|terminology%% (so called %%scope tags|tag%%) and a %%term|term%% unambiguously %%identify|identify%% the %%concept|concept%% (and its %%definition|definition%%) to which that %%term|term%% refers within (the %%scope|scope%% of) that %%terminology|terminology%%.

A %%terms-community|terms-community%% is a %%community|community%% that
- has one or more %%objectives|objective%% to serve/support itself and/or other %%communities|community%% by enabling them to
  - prevent misunderstandings amongst their members, and
  - author communications in such a way that the likelihood of non-members misunderstanding such communications is minimized.
- %%manages|management%% these %%objectives|objective%% itself, producing results that include:
  - one or more %%glossaries|glossary%% that each render the %%terminology|terminology%% of the %%scope|scope%% that it curates;
  - the specification of (any number of) %%tags|tag%% that either
    - %%identify|identify%% a %%scope|scope%% (and thereby implicitly also its %%terminology|terminology%%) - the so-called %%scope tags|tag%%, or
    - can be associated with %%definitions|definition%% as a means of grouping the %%concepts|concept%% such %%definitions|definition%% define - the so-called %%group tags|tag%%.
    - %%identify|identify%% a specific version of the %%terminology|terminology%% - the so-called %%version tags|tag%%.

We refer the reader to the %%governance and management pattern|pattern-governance-and-management%% to learn more about transferring such results between a %%terms-community|terms-community%% and the %%communities|community%% that it serves.

Note that for a %%terms-community|terms-community%% to serve itself, it may want to commit to a %%terminology|terminology%% such as the one we are developing here.

#### Groen: Scopes - Terminological Concepts {#green}
Every %%terminology|terminology%% is scoped, i.e. part of a %%scope|scope%%. This %%scope|scope%% also consists of %%definitions|definition%%, %%scoped terms|scoped-term%%, and various kinds of %%tags|tag%%. These components of the %%scope|scope%% exist for as long as the %%scope|scope%% exists. Note that if a %%scoped term|scoped-term%% ceases to exist,%%terms|term%% with the same name typically continue to exist in the %%scope(s)|scope%% of which they are still a part.

Apart from the multiplicity constrained that are showed in the figure, some additional rules apply:
- every %%term|term%% that is part of a %%scope|scope%% is contained in the %%terminology|terminology%% of that %%scope|scope%%.
- every pair (%%scope|scope%%, %%term|term%%) refers to precisely one %%definition|definition%%.
- every %%definition|definition%% that is part of a %%scope|scope%% is referred to by a %%term|term%% that is also part of that %%scope|scope%%

When we say that a %%terms-community|terms-community%% curates a %%scope|scope%%, this means that the %%terms-community|terms-community%%
- %%manages|management%% (creates/maintains) the set of %%definitions|definition%% that define %%concepts|concept%% that are relevant for realizing its %%objectives|objective%%;
- %%manages|management%% (creates/maintains) the (single) %%terminology|terminology%% of the %%scope|scope%%, i.e. the set of %%terms|term%% that members of the %%terms-community|terms-community%% are expected to use in their communications. This set consists of:
  - at least one term for every %%definition|definition%% that is part of the %%scope|scope%%, and
  - at least one term for any other %%definition|definition%% (which is part of *another* %%scope|scope%%, i.e. curated by another %%terms-community|terms-community%%) that defines a concept that is relevant for realizing one or more %%objectives|objective%% of the %%terms-community|terms-community%%.
- %%manages|management%% (creates/maintains) the various %%tags|tag%% in the scope, i.e. defines a %%scopetag|tag%% for the %%scope|scope%%, %%versiontags|tag%% (if necessary) for the different versions of the %%terminology|terminology%% of that %%scope|scope%%, and (optionally) any %%grouptags|tag%% for grouping sets of %%terms|scoped-term%%.

#### Geel: Intangible Concepts {#yellow}
The intangible %%concepts|concept%% are important because this is where the misunderstandings live. The %%knowledge|knowledge%% of a %%party|party%% uses a subjective %%conceptualization|concept%% of the world (that the %%party|party%% has perceived to be living in for as long as it exists) for its individual reasoning, arguing, communicating, decision making etc. Because of this, two %%parties|party%% that collaborate (i.e.: form a %%community|community%%) cannot be expected to have the same conceptualizations. However, it is a common belief that if one uses a %%term|term%% to refer to a %%concept|concept%% in its %%knowledge|knowledge%%, the other will then relate it to 'the same' %%concept|concept%% within its own knowledge, that we should not assume actually exists. For example, when one of them uses the %%term|term%% 'identity', it knows which %%concept|concept%% that relates to within its own %%knowledge|knowledge%%. However, others need to hallucinate as to what that %%concept|concept%% might be, and typically respond by thinking that the %%concept|concept%% that the %%term|term%% refers to in their own %%knowledge|knowledge%% would be its intended meaning. In many cases that doesn't pose a problem, because the %%concepts|concept%% of both %%knowledges|knowledge%% are 'sufficiently the same'. In other cases, the differences in meaning may be such that it disrupts the collaboration between the %%parties|party%%. And that is when it helps to have 'good %%definitions|definition%%', because they have the property that collaborators can assess whether or not the %%concepts|concept%% in their %%knowledge|knowledge%% (that a well-defined %%term|term%% refers to) are 'sufficiently the same'.

In order to keep the work of devising %%definitions|definition%% to a minimum, it helps to know the %%objectives|objective%% that the members of the %%community|community%% collaboratively seek to realize. Any %%definition|definition%% should define a %%concept|concept%% that is relevant for that collaboration. Other definitions are just useless work.
