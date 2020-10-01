---
id: terminology
title: "eSSIF-Lab: Concepts and Terminology"
scopeid: essifLab
---

:::info **UNDER CONSTRUCTION**
*This (initial version of the) terminology chapter is currently under construction. If you feel like making a contribution, please contact [the editor](mailto:rieks.joosten@tno.nl)*
:::

The purpose of the eSSIF-Lab Terminology is to provide mental models that all of its stakeholders interpret in sufficiently the same way, so as to be able to talk, think and discuss about what it is we try to achieve and ways to achieve this.

## Introduction

Contributors to and users of eSSIF-Lab come from various backgrounds. Their culture may not be Western. English may not be their native tongue. They may be experts in non-technological topics. Working with one another presumes a setting where participants have some level of shared understanding. Often, sharing one's understanding at a superficial level suffices. Other situations require that underlying concepts are shared in a more in-depth fashion. It's like cars: people buying, selling, or driving cars do not need in-depth shared knowledge about cars, whereas (maintenance or construction) engineers or liability lawyers need to share a deeper knowledge of how cars do (or do not) work.

This is far from trivial, and hence we expect to see situations of "language confusion", i.e. in which people use words or phrases, the intension ([not: intention](https://www.askdifference.com/intention-vs-intension/)) of which differs from the interpretation of some listeners/readers. Sometimes a casual glance at a dictionary or glossary is the solution. In other cases, deeper understanding matters, e.g. in when drafting specifications or contracts. Then [we need more than a set of definitions](https://www.sfu.ca/~swartz/definitions.htm).

This chapter reflects the learnings of eSSIf-Lab with respect to what such additional needs are, and provides the backgrounds of the methods, means and/or tools that may help to accommodate such needs. Here is a summary:

1. People that read a text may need help in understanding various words or phrases, particularly if they are not very familiar with the subject matter (they may be learning, and/or the text doesn't have an associated glossary), or come from another society. For such purposes, it helps to have an alphabetically sorted lists of words and phrases, each of which associated with one or more meanings or explanations that such words/phrases may have. We call this list a %%dictionary|dictionary%%. The eSSIF-Lab project intends to look into the possibility and necessity of generating a dictionary of SSI-related words and phrases based on the materials that are readily available; if it turns out this is beneficial, the eSSIF-Lab will contribute to the extent that is allowed by the project constraints.
2. Authors (e.g. of programming code, or articles of various kinds) that produce text on a particular topic, will want the words and phrases they use to be associated with a single meaning. This also holds for people that want to discuss a particular topic. For purposes such as these, it helps to have an alphabetically sorted lists of words and phrases, each of which associated with a single meaning or explanation that they can refer to. We call such lists %%glossaries|glossary%%. The eSSIF-Lab project intends to allow for the automated generation of such glossaries whenever a specific need for that exists.
3. People may find they need to better understand the ideas/concepts that terms refer to, e.g. because their thoughts keep running around in circles, they cannot get software to work in a generic fashion, etc. The eSSIF-Lab project intends to provide a (structured) repository where people can store texts that
    - describe what we call a %%pattern|pattern%% or %%mental model|pattern%%, i.e. a coherent set of %%concepts|concept%%, relations between these concepts, and rules/constraints that apply. A pattern also motivates its existence, and provides examples of when and how it can be used in a purposeful way;
    - specify individual %%concepts|concept%% in a precise and in-depth manner, beyond what is possible by the texts used in patterns;
    - specify how specific words or phrases (%%terms|term%%) are mapped onto such %%concepts|concept%% within specific scopes/contexts;
    - specify a %%scope (or context)|scope%%, i.e. the extent of the area or subject matter within which we define patterns, concepts, terms and glossaries, allowing patterns to be used in a limited scope, terms to be have different meanings in different scopes, etc.

## Context

People use %%words and phrases (terms)|term%% to (tangibly) refer to the (intangible) %%ideas and thoughts (concepts)|concept%% they have, e.g. about what exists in the world, judgements they have, etc.<sup>[semantics]</sup>  This mapping of terms and concepts, which we call '[semantics](wikipedia/semantics)', that is unique for each %%person or organization|party%%, enables them to reflect on their thoughts, and to convey such thoughts to others. Good communication however requires that the semantics of the communicating parties is sufficiently the same, so that the recipient of a communication will interpret it such that it means (sufficiently) the same to him as the communication means to its sender.

The Concepts and Terminology part of eSSIF-Lab aims helps eSSIF-Lab community participants understand one another at whatever level of precision they need. This chapter presents a number of aids we will develop/maintain to serve that purpose.

[semantics]: we use the term semantics|semantics%% to refer to the mapping between terms|term%% and %%concepts|concept%%. We use the term %%scope|scope%% ([OED](https://www.lexico.com/definition/scope)) to refer to the extent of the area or subject matter that a semantics is relevant and/or being used. From this definition, it seems obvious that every %%party|party%% has - and maintains - its own (subjective) semantics. The (erroneous) assumption that people (automatically) share a semantics is the cause of many misunderstandings. 

## Concepts, Terminologies, Glossaries, Dictionaries, etc.

Conveying one's thoughts is deciding which words or phrases to use for referring to the ideas or %%concepts|concept%% that one is thinking about. We will use the word %%Term|term%% to refer to a word or phrase, that is used in some %%context (or: scope)|scope%% to refer to a specific concept. Hence, a Term can mean different things in different contexts. Examples are "localhost", or "mommy". Also, different Terms that are used in different contexts may still refer to the same concept. For example, the person referred to as "Rieks" in some contexts is known as "Mr. Joosten" in other contexts.

Because of this, generally dealing with terminologies, i.e. sets of words or phrases with a presumed meaning, is a difficult topic, demonstrated e.g. by the work of Pfitzmann and Hansen who created a [terminology for talking about privacy by data minimization](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) (2010), the development of which took over a decade, and has seen over 30 revisions.

A commonly used tool for fostering common understanding are %%glossaries|glossary%%, i.e. an alphabetically sorted lists of words and phrases that relate to a specific subject (or text, dialect, ...) with explanations ([OED](https://www.lexico.com/definition/glossary)).

Glossaries come in two basic flavors. One flavor, which we will call %%dictionary|dictionary%%, is a glossary where each term is associated with multiple meanings. An example is the [NIST Glossary](https://csrc.nist.gov/glossary). It allows people that hear or read about something to search for a meaning that is appropriate for the context of that communication.

The other flavor (for which we do not yet have a term to distinguish it from dictionaries), is a glossary that is about one specific topic/subject, and lists a set of terms that have a single meaning, that together form a coherent and consistent terminology, and serves one or more specific purposes regarding this topic/subject. An example is the [Sovrin Glossary](https://sovrin.org/library/glossary/). Such glossaries allow people e.g. to write code, or an article about the topic.

The eSSIF-Lab project will develop glossaries (of the second kind) as needed, and for specific purposes<sup>[1]</sup>. The idea is to just develop the specification of a glossary (specifying its purpose(s), the set of terms that are to be included, and the way in which the descriptions can be obtained), and then 'simply' generate the glossary. Doing so allows the automated generation and updating of glossaries.

[1]: Too often have we observed that people seem to think that the mere fact of having a glossary makes (many or all) terminological issues go away, and that in practice that is not the case. We seek to define glossaries only if they are demonstrably fit-for-(some)-purpose.

## Mental Models

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

Here are some examples:

### Entity
**someone or something that is known/thought of**.

Basically, anything you (or anyone else) can think of qualifies. That includes people, organizations, documents, data, ideas, etc. Things that you do not know that exist, but others do, also qualify.
Since there is nothing that you, or someone else, can come up with that does not satisfy the criterion, everything qualifies as an Entity. We need the term as a basis for creating intensional definitions.

### Definition
**Entity that comprises at a minimum:

- a non-empty set of scopes in each of which specific objectives are being pursued;
- a criterion that specifies the necessary and sufficient conditions for being an instance of a named class;
- a set of arguments and/or use-cases (that SHOULD not be empty), and that show the relevance of making this distinction within the scope (and for its objectives);
- a name that is created and used within the scope that created the definition, for the purpose of referring to the class, or using it as a placeholder for its instances.

For the purposes of this document, the scope of every Definition is this Document (with its objectives that have been specified above).**

Note that this definition satisfies itself. Also note that a definition may be used in multiple scopes, where a scope that wants to use the definition that has been defined in another scope, may replace that name with one of its own choosing. This way the meaning expressed by the definition remains preserved.

### Concept
**A named set of entities that satisfy a criterion that specifies the necessary and sufficient conditions for being a member of that set**

### Relation
**A named set of entity-pairs (L,R), and a criterion C(SRC,TGT), where

- SRC and TGT are Concepts;
- L is an element of SRC and R is an element of TGT;
- the name of the relation combined with SRC and TGT identifies the set;
- C(L,R) is satisfied.**

For example, a relation could be defined by:

- name=‘is owner of’
- SRC=’Party’ and TGT=’Entity’ and
- C(SRC,TGT)=‘SRC is the owner of TGT’

This relation contains all pairs (X,Y) for which Party X is the owner of Y. The set of entity-pairs (L,R) is called the extension of the relation. The criterion C(L,R) is also referred to as the intension of the relation (as, together with this definition, it intensionally defines the relation)

### Rule (or Constraint)
**A Relation the intension of which consists of pairs that do not satisfy a specified expression that consists of concept (elements) and relations, and that can logically be evaluated.**

### Pattern
** A coherent set of Concepts, Relations between these Concepts, and Rules that are expressed in terms of these Concepts and Relations.**

We need Patterns as a mechanism for ‘chopping up’ mental models, in order to accommodate for the human disability to consciously oversee and think about more than 7 +/- 2 Concepts (including attributes, Relations, and Rules).
Patterns may be associated with texts e.g. for motivating its existence, explaining its purpose, etc.

## Notations
We shall use keywords such as “shall”, “should”, “may” etc. as defined by [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

Also, we capitalize words in mid-sentence whenever it is used in the meaning as provided by a corresponding Definition. This allows us to also use the more colloquial meanings of words (by not capitalizing them). We appreciate any feedback regarding our (im)proper use of this kind of capitalization of words.

Patterns will be visualized in this document using a UML-like notation, as follows:

- a rectangle represents a (named) concept. Concepts serve as entity-classes. Their (operational) extensions, i.e. the respective sets of (runtime) instances, are disjunct.
- a solid line with a closed arrowhead represent a (named) relation/association between the two concepts it connects. The concept at the arrowhead is called the ‘target concept’ (TGT) for that relation. The concept at the other end is called the ‘source concept’ (SRC) for that relation. Names are chosen such that `<SRC> <relation name> <TGT>` is a phrase that suggests the intension(al definition) of that relation.
- a dashed line signifies that its intension is created by combination the intensions of other relations (it is a ‘shorthand’ for a path of other relations).
- an open-ended arrow is an ‘ISA’ relation, which can be read as `<SRC> ISA <TGT>`. It means that SRC is a specialization of TGT (which is a generalization of SRC). Thus, SRC must satisfy all constraints that TGT must satisfy, and has all attributes (including properties) that TGT has.
- Multiplicities use the [n..m] notation. When a multiplicity is omitted, [0..n] is intended.
- A concept that is coloured red(dish) represents a notion that is commonly used ‘in the wild’ (and hence needs not be defined here), relates to one or more concepts we need for the pattern, yet is not the same. We include such ‘red concepts’ to help readers identify and subsequently bridge gaps between commonly held thoughts and the (sometimes subtly) different meanings we need in our model.
