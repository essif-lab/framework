---
id: pattern-terminology
title: "Terminology Pattern"
scopeid: essifLab
type: pattern
typeid: terminology
stage: draft
hoverText: "The eSSIF-Lab Terminology Pattern describes the relations between Terminology Terms such as 'Concept', 'Term', 'Pattern', 'Mental Model', 'Glossary' etc."
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## Purpose
The idea here is to describe how terms are scoped ('namespaces' is the term used by SW-engineers), how parties govern such scopes/namespaces, and that if you use criteria to define/specify terms, people can test if they have the same understanding of a term by making sure that everyone reaches the same conclusions as they evaluate such criteria in various relevant use-cases.

The prime objective of working with a %%terminology|terminology%% is to enable individual members of a %%community|community%% to understand the words and phrases that are used by its members ***in the same, single meaning***. This is to say that ***the differences in the individual understandings of words or phrases by different members of the same %%community|community%% do not pose any problems as they collaborate to serve their shared interests***.

This suggests that (members of) a %%community|community%% need the ability and means to (a) establish and maintain (i.e.: %%own|owner%%) their own %%terminology|terminology%%, and (b) to ensure it is fit for the purpose of eliminating such misunderstandings. More concretely, they need the ability and means to create, maintain and improve the %%definitions|definition%% that link %%terms|term%% with the %%concepts|concept%%/meanings that they agree are relevant for their collaboration, and perhaps also to document the ways of thinking (%%mental models|pattern%%) that are crucial to their work.

Once a %%community|community%% has its %%terminology|terminology%% in place, may want to establish an associated  %%glossary|glossary%% that serves as the authoritive reference for the (crucial) %%terms|term%% used by its members. This %%glossary|glossary%% is also a valuable reference document for a non-community member, as it helps him/her to (better) understand the (verbal or written) communications authored by that %%community|community%%, i.e. it helps to 'map', or 'translate' the terms of that %%community|community%% to words or phrases that the person uses itself, which is prerequisite for effectively engaging with that %%community|community%%.

The secondary objective of working with a %%terminology|terminology%% is to enable members of %%ecosystems|ecosystem%% to establish

- a set of %%terms|term%% that have a 'good definition' (as defined at the end of [this document](https://www.researchgate.net/publication/352560909_on_terminology_and_the_resolution_of_related_issues), which basically means that ***two arbitrary people that use that definition stand a very good chance of having the same individual understanding of what is meant***.
- a set of %%mental models|pattern%% that describe relations and constraints between sets of such terms, thus providing the bases for ***arbitrary sets of people to have the same understanding of specific ways of thinking about a set of concepts***.

Such %%terminologies|terminology%% and %%mental models|pattern%% differ from those created for/by %%communities|community%% in the sense that it is basically just a repository of words and phrases that %%communities|community%% may adopt within their own %%scopes|scope%%. They have no other authority than what they can derive from being used in/by %%communities|community%%.

The benefit of creating and maintaining such %%terminologies|terminology%% and %%mental models|pattern%% lies in the fact that they can be developed with less of a bias of developers than if they were developed in a %%community|community%% (that is there to serve its own interests). As such, they may play an important role as different %%communities|community%% seek to establish a languate for cooperating with one another.

### Introduction

This pattern has two basic parts:

1. the %%management|management%%-related part. This part consists of a %%community|community%% that %%owns|owner%% its particular set of %%objectives|objective%% which exist for establishing cooperation between its members, and for which it needs to establish and maintain a %%terminology|terminology%%. 

2. the terminology-related part. This is where %%concepts|concept%%, %%definitions|definition%%, %%terms|term%%, %%glossaries|glossary%% etc. live. This part is what one needs to create tools/support for managing and maintaining a %%terminology|terminology%%.


### Formalized model
Here is a visual representation of this pattern, using the following [notations and conventions](../notations-and-conventions#pattern-diagram-notations):

<img
  alt="Conceptual model of the 'Duties-and-rights' pattern"
  src={useBaseUrl('images/patterns/pattern-duties-and-rights.png')}
/>

:::info Editor's note
TNO to provide further introductorty texts
:::
