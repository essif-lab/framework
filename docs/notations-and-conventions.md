---
id: notations-and-conventions
title: Notations and Conventions
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

This document provides an overview of the notations and conventions being used within eSSIF-Lab.

### RFC 2119
We shall use keywords such as “shall”, “should”, “may” etc. as defined by [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

### Capitalization of words in mid-sentence
A word in mid-sentence that is capitalized is a %%term|term%% that has a %%definition|definition%% in the %%Corpus of Terminology|corpus%%. This allows readers to distinguish between the more colloquial meanings of words (by not capitalizing them) and those that are actually defined. We appreciate any feedback regarding our (im)proper use of this kind of capitalization of words.

:::note
We are working towards deprecating this convention, as we now have better ways of referring to words that are defined in the eSSIF-Lab Corpus.
:::

### Pattern diagram notations

%%Pattern|pattern%% diagrams will be visualized in this document using a UML-like notation. The following diagram shows the various notations we use:

<img
  alt="Notations and conventions"
  src={useBaseUrl('images/essif-lab-notations-and-conventions.png')}
/>

- Objects (lines, rectgangles, etc.) can be colored
  - in **blue**, in which case they are properly defined (in a meaning that may deviate from what casual readers might expect).
  - in **red**, in which case their meaning is expected to be part of 'common knowledge'. Their meaning may not be defined, yet if it is, the definition is an attempt to make this 'common knowledge' explicit. Red objects are used to bridge possible gaps between 'common understanding' and the eSSIF-Lab ways of thinking, that deviates in various respects.
- Lines can be drawn
  - **solid**, in which case they are part of the %%model|pattern%% that is shown in a figure, or
  - **dashed**, in which case they are (better) explained in other %%models|pattern%%.
- A **rectangle** represents a (named) %%concept|concept%%, examples of which include %%entity|entity%%, %%legal entity|legal-entity%% and %%party|party%%. %%Concepts|concept%% serve as entity-classes. Their (operational) extensions, i.e. the respective sets of (runtime) instances, are disjunct, unless there is an 'ISA' relation between them (see below).
- A **line with a closed arrowhead** represents a (named) relation/association between the two %%concepts|concept%% it connects. We may refer to the concept at the arrowhead as the 'target %%concept|concept%%' (TGT) for that relation. Similarly, the %%concept|concept%% at the other end will be referred to as the 'source %%concept|concept%%' (SRC) for that relation. Names are chosen such that `<SRC> <relation name> <TGT>` is a phrase that suggests the intension(al definition) of that relation. For example, `operates` is a relation that has `Jurisdiction` as its `<SRC>`, and `Legal System` as its `<TGT>`. It may be read as `Jurisdiction operates Legal System`.
- A **line with an open arrowhead** represents an 'ISA' (pronounce as 'is a') relation, which can be read as `<SRC> is a <TGT>`. It means that SRC *is a* specialization of TGT (which in turn is a generalization of SRC). It means that SRC satisfies all constraints that TGT satisfies, and also that it has all attributes (properties, characgteristics) that TGT has. An example from the figure is: 'Jurisdiction is a Party'.
- A **line with a solid diamand** at one end is a composition; the element at the 'non-diamond-end' of the line is 'part of' the element at the 'diamond-end' of the line (the 'whole'); if the 'whole' ceases to exist, then its 'parts' also cease to exist. In the figure, we see that %%knowledge|knowledge%% is 'part of' a %%party|party%% (the fact that it can also be part of a %%jurisdiction|jurisdiction%% follows from the fact that a %%jurisdiction|jurisdiction%% ISA %%party|party%%). Note that if the %%party|party%% ceases to exist, then so does the associated %%knowledge|knowledge%%. We say that %%party|party%% is 'the whole' in the relation, and %%knowledge|knowledge%% is a 'part' in the relation.
- A **line with a hollow diamand** at one end is an aggregation; the element at the 'non-diamond-end' of the line is 'part of' the element at the 'diamond-end' of the line (the 'whole'); if the 'whole' ceases to exist, then its 'parts' do not necessarily cease to exist, but may 'live on'. In the figure, we see that 'legislation', 'enforcement' and 'juridicary' are all parts of a %%legal system|legal-system%%. If the %%legal system|legal-system%% ceases to exist, then it is possible that the 'legislation', 'enforcement' and 'juridicary' may continue their existence.
- A **green name** at either end of a relation/association is what UML calls 'role'; this name may be used to refer to (an instance of) the %%concept|concept%% at which the name is placed as it performs its/this role in this relation. In the figure, `governor` is the role that a %%party|party%% (or %%jurisdiction|jurisdiction%%) is said to be in as it governs its %%knowledge|knowledge%%.
- A **dashed line** with a pointed arrow (`>`) represents a dependency, where  the SRC concept somehow depends on the TGT concept. The kind of dependency is specified by `<<text>>`, where `text` specifies the kind of dependency. Example: `<<instance>>` says that SRC is an instance (or: instantiates) TGT. This isn't shown in the figure.
- **Multiplicities** (or: **cardinalities**) use the [n..m] notation. When a multiplicity is omitted, [0..n] is intended. A [multiplicity](https://www.uml-diagrams.org/multiplicity.html) specifies the minimum (*n*) and maximum (*m*) of possible instances of the concept where it is specified in a relation. Here are a few examples from the figure:
  - the [1..1] multiplicity in the relation 'controls' must be read as "Every jurisdiction controls exactly one Scope of Control"
  - the [1..n] multiplicity in the relation 'owns' reads: "Every party owns one or more (or: at least one) objectives".
  - a multiplicity at the SRC of a relation can be read by first reversing the relation. For example, the [1..1] multiplicity at the SRC of relation 'owns' results in "Every objective *is owned by* precisely one party".
