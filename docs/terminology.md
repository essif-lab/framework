---
id: terminology
title: eSSIF-Lab Concepts and Terminology
---

:::tip **UNDER CONSTRUCTION**
This initial version of the eSSIF-Lab Terminology is currently under construction.
:::

The purpose of the eSSIF-Lab Terminology is to provide mental models that all of its stakeholders interpret in sufficiently the same way, so as to be able to talk, think and discuss about what it is we try to achieve and ways to achieve this.

## Introduction

Contributors to and users of eSSIF-Lab come from various backgrounds. Their culture may not be Western. English may not be their native tongue. They may be experts in non-technological topics. Working with one another presumes a setting where participants have some level of shared understanding. Often, sharing one's understanding at a superficial level suffices. Other situations require that underlying concepts are shared in a more in-depth fashion. It's like cars: people buying, selling, or driving cars do not need in-depth shared knowledge about cars, whereas (maintenance or construction) engineers or liability lawyers need to share a deeper knowledge of how cars do (or do not) work.

We expect to see situations of "language confusion", i.e. in which people use words or phrases, the intension (not: intention) of which differs from the interpretation of some listeners/readers. Sometimes a casual glance at a dictionary or glossary is the solution. In other cases, deeper understanding matters, e.g. in when drafting specifications or contracts. Then [we need more than a set of definitions](https://www.sfu.ca/~swartz/definitions.htm). 

The Concepts and Terminology part of eSSIF-Lab aims helps eSSIF-Lab community participants understand one another at whatever level of precision they need.

## Glossaries

The traditional tool for fostering common understanding is using glossaries, i.e. alphabetical lists of words relating to a specific subject, text, or dialect, with explanations; a brief dictionary ([OED](https://www.lexico.com/definition/glossary)). Examples include the [Sovrin Glossary](https://sovrin.org/library/glossary/) and the [NIST Glossary](https://csrc.nist.gov/glossary). Other initiatives attempt to provide more background, e.g. the [terminology for talking about privacy by data minimization](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) by Pfitzmann and Hansen (2010), or the [EBSI Terminology (login required)](https://ec.europa.eu/cefdigital/wiki/display/EBP/EBSI+Terminology).

The eSSIF-Lab project will also develop a [Glossary](essif-lab-glossary).

However, since the use of such glossaries is limited to short explanations, we will also provide (a) mental model(s) that provide a more in-depth explanation of the concepts that underly the words listed in the [eSSIF-Lab Glossary](essif-lab-glossary). 

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

:::tip 
**The following definitions will be moved to a separate eSSIF-Lab Terminology section**
:::

### Definition
**Entity that comprises at a minimum**:

- **a non-empty set of scopes in each of which specific objectives are being pursued;**
- **a criterion that specifies the necessary and sufficient conditions for being an instance of a named class;**
- **a set of arguments and/or use-cases (that SHOULD not be empty), and that show the relevance of making this distinction within the scope (and for its objectives);**
- **a name that is created and used within the scope that created the definition, for the purpose of referring to the class, or using it as a placeholder for its instances.**

**For the purposes of this document, the scope of every Definition is this Document (with its objectives that have been specified above).**

Note that this definition satisfies itself. Also note that a definition may be used in multiple scopes, where a scope that wants to use the definition that has been defined in another scope, may replace that name with one of its own choosing. This way the meaning expressed by the definition remains preserved.

### Concept
**A named set of entities that satisfy a criterion that specifies the necessary and sufficient conditions for being a member of that set** 

### Relation
**A named set of entity-pairs (L,R), and a criterion C(SRC,TGT), where:** 

- **SRC and TGT are Concepts;**
- **L is an element of SRC and R is an element of TGT;**
- **the name of the relation combined with SRC and TGT identifies the set;**
- **C(L,R) is satisfied.**

For example, a relation could be defined by:

- name=‘is owner of’
- SRC=’Party’ and TGT=’Entity’ and 
- C(SRC,TGT)=‘SRC is the owner of TGT’

This relation contains all pairs (X,Y) for which Party X is the owner of Y. The set of entity-pairs (L,R) is called the extension of the relation. The criterion C(L,R) is also referred to as the intension of the relation (as, together with this definition, it intensionally defines the relation)

### Rule (or Constraint)
**A Relation the intension of which consists of pairs that do not satisfy a specified expression that consists of concept (elements) and relations, and that can logically be evaluated.**

### Pattern
**A coherent set of Concepts, Relations between these Concepts, and Rules that are expressed in terms of these Concepts and Relations.** 

We need Patterns as a mechanism for ‘chopping up’ mental models, in order to accommodate for the human disability to consciously oversee and think about more than 7 +/- 2 Concepts (including attributes, Relations, and Rules). 
Patterns may be associated with texts e.g. for motivating its existence, explaining its purpose, etc.

## Notations
We shall use keywords such as “shall”, “should”, “may” etc. as defined by [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

Also, we capitalize words in mid-sentence whenever it is used in the meaning as provided by a corresponding Definition. This allows us to also use the more colloquial meanings of words (by not capitalizing them). We appreciate any feedback regarding our (im)proper use of this kind of capitalization of words.

Patterns will be visualized in this document using a UML-like notation, as follows:

- a **rectangle** represents a (named) concept. Concepts serve as entity-classes. Their (operational) extensions, i.e. the respective sets of (runtime) instances, are disjunct. 
- a **solid line with a closed arrowhead** represent a (named) relation/association between the two concepts it connects. The concept at the arrowhead is called the ‘target concept’ (TGT) for that relation. The concept at the other end is called the ‘source concept’ (SRC) for that relation. Names are chosen such that `<SRC> <relation name> <TGT>` is a phrase that suggests the intension(al definition) of that relation.
- a **dashed line** signifies that its intension is created by combination the intensions of other relations (it is a ‘shorthand’ for a path of other relations).
- an **open-ended arrow** is an ‘ISA’ relation, which can be read as `<SRC> ISA <TGT>`. It means that SRC is a specialization of TGT (which is a generalization of SRC). Thus, SRC must satisfy all constraints that TGT must satisfy, and has all attributes (including properties) that TGT has.
- **Multiplicities** use the [n..m] notation. When a multiplicity is omitted, [0..n] is intended.
- A **concept that is coloured red(dish)** represents a notion that is commonly used ‘in the wild’ (and hence needs not be defined here), relates to one or more concepts we need for the pattern, yet is not the same. We include such ‘red concepts’ to help readers identify and subsequently bridge gaps between commonly held thoughts and the (sometimes subtly) different meanings we need in our model.