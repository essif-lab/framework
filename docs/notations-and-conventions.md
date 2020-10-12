---
id: notations-and-conventions
title: Notations and Conventions
---

This document provides an overview of the notations and conventions being used within eSSIF-Lab.


### RFC 2119
We shall use keywords such as “shall”, “should”, “may” etc. as defined by [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

### Capitalization of words in mid-sentence
A word in mid-sentence that is capitalized is a %%term|term%% that has a %%definition|definition%% in the %%Corpus of Terminology|corpus%%. This allows readers to distinguish between the more colloquial meanings of words (by not capitalizing them) and those that are actually defined. We appreciate any feedback regarding our (im)proper use of this kind of capitalization of words.

:::note
We are working towards deprecating this convention, as we now have better ways of referring to words that are defined in the eSSIF-Lab Corpus..
:::

### Pattern diagram notations

%%Pattern|pattern%% diagrams will be visualized in this document using a UML-like notation, as follows:

- a **rectangle** represents a (named) concept. Concepts serve as entity-classes. Their (operational) extensions, i.e. the respective sets of (runtime) instances, are disjunct. 
- a **solid line with a closed arrowhead** represent a (named) relation/association between the two concepts it connects. We may refer to the concept at the arrowhead as the ‘target concept’ (TGT) for that relation. Similarly, the concept at the other end will be referred to as the ‘source concept’ (SRC) for that relation. Names are chosen such that `<SRC> <relation name> <TGT>` is a phrase that suggests the intension(al definition) of that relation.
- a **green name** at either end of a relation/association is what UML calls 'role'; this name may be used to refer to (an instance of) the concept at which the name is placed as it performs its/this role in this relation.
- a **dashed line** signifies that its intension is created by combination the intensions of other relations (it is a ‘shorthand’ for a path of other relations).
- an **open-ended arrow** is an ‘ISA’ relation, which can be read as `<SRC> ISA <TGT>`. It means that SRC is a specialization of TGT (which is a generalization of SRC). Thus, SRC must satisfy all constraints that TGT must satisfy, and has all attributes (including properties) that TGT has.
- **Multiplicities** use the [n..m] notation. When a multiplicity is omitted, [0..n] is intended.
- A **concept that is coloured red(dish)** represents a notion that is commonly used ‘in the wild’ (and hence needs not be defined here), relates to one or more concepts we need for the pattern, yet is not the same. We include such ‘red concepts’ to help readers identify and subsequently bridge gaps between commonly held thoughts and the (sometimes subtly) different meanings we need in our model.