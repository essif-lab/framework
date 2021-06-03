---
id: notations-and-conventions
title: Notations and Conventions
date: 20210601
---

This document provides an overview of the notations and conventions being used within eSSIF-Lab.

### RFC 2119
We shall use keywords such as “shall”, “should”, “may” etc. as defined by [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

### Capitalization of words in mid-sentence
A word in mid-sentence that is capitalized is a %%term|term%% that has a %%definition|definition%% in the %%Corpus of Terminology|corpus%%. This allows readers to distinguish between the more colloquial meanings of words (by not capitalizing them) and those that are actually defined. We appreciate any feedback regarding our (im)proper use of this kind of capitalization of words.

:::note
We are working towards deprecating this convention, as we now have better ways of referring to words that are defined in the eSSIF-Lab Corpus.
:::

### Pattern diagram notations

%%Pattern|pattern%% diagrams will be visualized in this document using a UML-like notation, as follows:

- A **rectangle** represents a (named) concept that is explicitly defined. Concepts serve as entity-classes. Their (operational) extensions, i.e. the respective sets of (runtime) instances, are disjunct.
- A **rectangle that is coloured red(dish)** represents a (named) concept that is commonly used 'in the wild' (and hence needs not be defined here), relates to one or more concepts that are explicitly defined yet is not the same. We include such 'red concepts' to help readers identify and subsequently bridge gaps between commonly held thoughts and the (sometimes subtly) different meanings we need in our model.
- A **solid line with a closed arrowhead** represent a (named) relation/association between the two concepts it connects. We may refer to the concept at the arrowhead as the 'target concept' (TGT) for that relation. Similarly, the concept at the other end will be referred to as the 'source concept' (SRC) for that relation. Names are chosen such that `<SRC> <relation name> <TGT>` is a phrase that suggests the intension(al definition) of that relation.
- A **solid line with an open arrowhead** represents an 'ISA' relation, which can be read as `<SRC> ISA <TGT>`. It means that SRC is a specialization of TGT (which in turn is a generalization of SRC). It means that SRC must satisfy all constraints that TGT must satisfy, and also that it has all attributes (including properties) that TGT has.
- A **solid line with a solid diamand** at one end is a composition; the element at the 'non-diamond-end' of the line is 'part of' (the 'part') the element at the 'diamond-end' of the line (the 'whole'); if the 'whole' ceases to exist, then its 'parts' also cease to exist.
- A **solid line with a hollow diamand** at one end is an aggregation; the element at the 'non-diamond-end' of the line is 'part of' (the 'part') the element at the 'diamond-end' of the line (the 'whole'); if the 'whole' ceases to exist, then its 'parts' usually do not cease to exist, but 'live on'.
- A **green name** at either end of a relation/association is what UML calls 'role'; this name may be used to refer to (an instance of) the concept at which the name is placed as it performs its/this role in this relation.
- A **dashed line** with a closed arrow (solid triangle) signifies that its intension is created by combination the intensions of other relations (it is a 'shorthand' for a path of other relations).
- A **dashed line** with a pointed arrow (`>`) represents a dependency, where  the SRC concept somehow depends on the TGT concept. The kind of dependency is specified by `<<text>>`, where `text` specifies the kind of dependency. Example: `<<instance>>` says that SRC is an instance (or: instantiates) TGT.
- **Multiplicities** (or: **cardinalities**) use the [n..m] notation. When a multiplicity is omitted, [0..n] is intended.
