---
id: pattern-guardianship
title: "Guardianship"
scopeid: essifLab
type: pattern
typeid: guardianship
stage: draft
hoverText: "The Guardianships pattern captures the Concepts and relations that explain what a generic Guardianshipconsists of, and how it relates to Guardians, Dependents, Jurisdictions, etc."
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::info Editor's Note
TNO to revise all below texts.
:::

### Purpose
The **Guardianship pattern** captures the concepts and relations that explain how generic %%guardianship relationships|guardianship%% work, and can be constructed. It shows that %%guardianships|guardianship%% are embedded in a %%jurisdiction|jurisdiction%% that govern such relationships.

The contribution of this pattern is to establish a building block and terminology for constructing a consistent, coherent and sufficiently complete mental model that allows %%parties|party%% to convey %%guardianship|guardianship%%-related ideas to other %%parties|party%%, without running the risk of being misunderstood, by expressing any %%guardianship|guardianship%%-related use-case in terms of the model. This will enable us to draft requirements and specifications for infrastructural IT, and make a start with specifying standardizable data structures (schemas) for use in combination with VCs.

### Introduction
The term '%%guardianship|guardianship%%' has many definitions/descriptions. Examples are 
- “The position of protecting or defending something” or “The position of being legally responsible for the care of someone who is unable to manage their own affairs.” (both from the [Oxford dictionary](https://www.lexico.com/en/definition/%%guardianship|guardianship%%)), 
- “One who has the care of the person or property of another” or “One that guards” (both from [Merriam-Webster](https://www.merriam-webster.com/dictionary/%%guardianship|guardianship%%)),
- “The state or duty of being a guardian”, where 'guardian' is defined as “A person who has the legal right and responsibility of taking care of someone who cannot take care of himself or herself” or “Someone who protects something” ([Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/)), or
- “The status of being a protector, advocate, or proxy for a person” ([Sovrin %%Guardianship|guardianship%% Task Force whitepaper](https://sovrin.org/wp-content/uploads/%%Guardianship|guardianship%%-Whitepaper.pdf)), which defines 'guardian' as “An organization or person protecting another person and possibly their property”.
- “The legal, social, or organizational responsibility of serving as a Guardian” ([Sovrin Glossary](https://docs.google.com/document/d/1gfIz5TT0cNp2kxGMLFXr19x1uoZsruUe_0glHst2fZ8/edit)), which also defines 'guardian' as  “An Identity Owner who administers identity Data, Wallets, and/or Agents on behalf of a %%Dependent|dependent%%”.

So, it seems that most people will acknowledge that '%%guardianship|guardianship%%' is a relation between

- someone (or an organization, collectively referred to as a '%%party|party%%') or something that is 'under %%guardianship|guardianship%%', i.e. being cared for, guarded, protected or defended - we call this the '%%dependent|dependent%%', and
- a %%party|party%% that does this caring, guarding, protecting or defending - we call this the '%%guardian|guardian%%'.

Note that '%%dependent|dependent%%' and '%%guardian|guardian%%' are roles in a %%guardianship relationship|guardianship%%; they do not have an independent existence (as e.g. a human being does). A '%%dependent|dependent%%' (or '%%guardian|guardian%%') only exists if someone fulfills this role in a %%guardianship relationship|guardianship%%, which in turn can only exist if both the '%%guardian|guardian%%' and '%%dependent|dependent%%' roles are being assigned.

_Example: in the [Mya](https://drive.google.com/file/d/10sfYKp6Ohi_rLsNqb1GBrhuE0IuoBX2k/view) use-case, a %%guardianship relationship|guardianship%% exists between Mya (as the %%dependent|dependent%%) and her grandmother Zo (as %%guardian|guardian%%). There is also a %%guardianship relationship|guardianship%% between Mya (%%dependent|dependent%%) and UNICEF (camp staff - as %%guardian|guardian%%)._

<!--_Example: In the [Jamie](https://drive.google.com/file/d/1bxE1DNxN80gkQrCbkJzBRzUsOf7KcjH2/view) use-case, … (text to be provided by @JohnPhillips)_-->

The actual activities that a %%guardian|guardian%% performs as (s)he cares for, guards, or … its %%dependent|dependent%% (in a specific %%guardianship relationship|guardianship%%) differ from case to case, and from situation to situation. Still, in general we can say that a %%guardianship relationship|guardianship%% comes with rights and duties that enable (or force) a %%guardian|guardian%% to execute specific actions - for the purpose of caring/guarding/… its %%dependent|dependent%%.

_Example: in the Mya use-case, the camp staff and Zo have the right to a daily food ration from the camp shop. Zo has the right to accompany Mya outside the camp. Etcetera._

A %%guardianship relationship|guardianship%% is meaningful to the extent in which such rights and duties are actually upheld and/or enforced.

_Example: if in the Mya use-case %%guardianship|guardianship%% is not properly enforced, human traffickers may pose as Mya's %%guardian|guardian%% to get her out of the camp so that she can be sold as a slave._

Defining and enforcing rights and duties, as well as resolving conflicts that may arise, are the very essence of a %%jurisdiction|jurisdiction%% - for details see the %%Jurisdictions pattern|pattern-jurisdiction%%

The wealth in varieties in %%guardianship relationships|guardianship%% can now easily be explained by observing that the various %%Jurisdictions|jurisdiction%% all exercise their self-sovereignty as they operate their %%legal systems|legal-system%%.

Example: in the Mya use-case, UNICEF sets the rules, enforces them and resolves related conflicts within its refugee camps, in its own, self-sovereign ways. This qualifies UNICEF as a %%jurisdiction|jurisdiction%%.

For a %%guardianship relationship|guardianship%% to be meaningful and relevant, it must be associated to a (single) %%jurisdiction|jurisdiction%% that creates, modifies and dissolves the relation, specifies who the %%guardian|guardian%% and %%dependent|dependent%% are, and assigns each of them a set of rights and duties (including 'negative' rights and duties, i.e. what they may/must NOT do). A %%jurisdiction|jurisdiction%% is implicitly tasked to enforce such rights and duties, and provide for the resolution of conflicts, yet is (and remains) self-sovereign in determining the extent in which it does so.

_Example: in the Mya use-case, UNICEF camp staff Sofia (is mandated to) determine whether or not a %%guardianship relationship|guardianship%% may be established between Mya and Zo, according to the rules that UNICEF has established for the camp. This kind of %%guardianship relationship|guardianship%% comes with some default rights and duties for Mya and Zo. For example, the %%guardian|guardian%% gets the right to daily obtain one additional food ration from the camp store for the %%dependent|dependent%%. Also, the %%guardian|guardian%% is allowed to take the %%dependent|dependent%% for a walk outside the camp. Depending on the rules UNICEF has put in place, Sofia might not issue all default rights/duties, or issue additional ones. If Zo dies, or Mya and Zo leave the camp, this %%guardianship relationship|guardianship%% becomes ineffective. In the meantime though, the rights/duties associated with the %%guardianship relationship|guardianship%% may change, to be determined by (qualified) UNICEF (personel)._

### Formalized model
Here is a visual representation of this pattern, using the following [notations and conventions](../notations-and-conventions#pattern-diagram-notations):

<img
  alt="Conceptual model of the 'Guardianship' pattern"
  src={useBaseUrl('images/patterns/pattern-guardianship-relationship.png')}
/>

In the figure, concepts are placed in one of three areas:
- **Goverenance** is about the %%governance|governance%% of %%guardianships|guardianship%%. It shows that %%guardianship-types|guardianship-type%% are defined by a %%jurisdiction|jurisdiction%%, and that instances of %%guardianship types|guardianship-type%%, i.e. %%guardianship relationships|guardianship%%, are governed by the %%jurisdiction|jurisdiction%%, and that both the %%guardian|guardian%% and %%dependent|dependent%% are %%legal entities|legal-entity%% within that %%jurisdiction|jurisdiction%%. For the Mya use-case, let's call the %%jurisdiction|jurisdiction%% `UNICEF refugee camp`.
- **Define-time** is about the design of guardianships, or guardianship templates if you will. In the Mya use-case, `UNICEF refugee camp` (perhaps itself abiding by more general UNICEF rules) would have defined a guardianship type (template) for cases where both the guardian and dependendent are refugees. For the use-case, let's call it `Refugee-Refugee-guardianship`. Then `UNICEF refugee camp` defines it to have duty/right types, e.g. "`guardian` has the right to obtain 1 food ration per day on behalf of `dependent`".
- **Run-time** is about the actual guardianship relationships, the actual duties and rights, and the actual entities involved in such relationships. In the Mya use-case, a guardianship relationship would exist that 
  - is governed by `UNICEF refugee camp`;
  - instantiates guardianship type `Refugee-Refugee-guardianship`;
  - comprises the duty/right "`Zo` has the right to obtain 1 food ration per day on behalf of `Mya`";
  - specifies `Zo` as the guardian in the relationship;
  - specifies `Mya` as the dependent in the relationship; 
  (note that Zo and Mya can only become guardian/dependent after having been registered within `UNICEF refugee camp`, or else they would not have been legal entities.)


An instance of such duty/right types are the actual duties and rights, e.g. 


### Building Block: %%Guardianship Relationship|guardianship%% Pattern

:::info Editor's note
TNO to revise this section
:::

The figure shows that all (operational, or 'runtime') %%Guardianship Relationship|guardianship%% live within the context of a specific %%Jurisdiction|jurisdiction%%. A %%Guardianship Relationship|guardianship%% links two %%Legal Entities|legal-entity%% (LE's) within that %%Jurisdiction|jurisdiction%%, one which we will call the '%%guardian|guardian%%', the other the '%%Dependent|dependent%%'. The %%Guardianship Relationship|guardianship%% specifies rights and duties to each of them.

Note that such rights and duties may refer to LE's other than the %%guardian|guardian%% or %%Dependent|dependent%%, e.g. a third party against whom a right or duty may or must be exercised. We emphasize that such references must identify these %%entities|entity%% within the scope of the Knowledge of the %%party|party%% of the %%Jurisdiction|jurisdiction%%, because however obvious this may seem, in practice people often do not realize that this must be the case for the %%Legal System|legal-system%% of the %%Jurisdiction|jurisdiction%% to work.

The %%Legal System|legal-system%% of a %%Jurisdiction|jurisdiction%% may define (named) types of %%Guardianship Relationships|guardianship%%, e.g. 'Parenthood' or 'Curatorship', before any actual %%Guardianship Relationship|guardianship%% exists. Legal %%Jurisdictions|jurisdiction%% do that in their laws, while other %%Jurisdictions|jurisdiction%% may have other, perhaps more informal ways of defining them. A %%Guardianship Relationship|guardianship%% type definition will specify a set of generic rights and duties (which we call Duty/Right Types) for the %%entities|entity%% that will be assigned the roles of %%guardian|guardian%%, %%dependent|dependent%%, and perhaps others.

It is typical of a Duty/Right Type to NOT refer to individual %%entities|entity%%, but rather use placeholders that are to be filled in when a Duty/Right is created that is an instance of the Duty/Right Type.

So typically, a %%Jurisdiction|jurisdiction%% will define the set of %%Guardianship|guardianship%% Types that its %%Legal System|legal-system%% supports. For each of them, the %%Jurisdiction|jurisdiction%%:

- specifies the rules/laws that govern the creation and management of their instances,
- ptionally specifying processes (and possibly providing some or all means) to monitor/police compliance, and
- providing a mechanism for resolving disputes related to them.

Typically, the Task of creating a %%Guardianship Relationship|guardianship%% (GR) consists of:

- associating the GR with LE's for the positions of '%%guardian|guardian%%' and '%%dependent|dependent%%';
- associating the GR with an initial/default set of Hohfeldian Duties/Rights, the types of which are specified by the %%Guardianship|guardianship%% Type that the GR instantiates.
- assigning values for the placeholders that occur in the specifications of such Duties/Rights

The Task of managing a GR consists of adding, (un)suspending, revoking/removing instances of Duty/Right types that are meaningful in the %%Jurisdiction|jurisdiction%% as appropriate, and assigning values for any placeholders therein. Also, (un)suspending and/or revoking/invalidating the GR itself is part of that Task.

Note that an artefact that contains the specification of a GR may need to take various forms. For every kind of Actor that is envisaged to read and process such a specification, it must be represented in a language (syntax and semantics) that such an Actor knows how to read and process. This could mean that the artefact is only, or both human readable (in one or more languages) or machine readable (in one or more schemas).

### Notes

Having defined a mental model for %%guardianship|guardianship%%, and having applied it to the Mya use-case, we can make some generic observations.

1. %%guardianships|guardianship%% are typed in the same way that roles can be typed. The rights and duties that are associated with Roles that are assigned to e.g. a %%party|party%% (e.g. a department) will be quite different from those that are associated with Roles that are assigned to employees, or customers. We see this also happening with %%guardianships|guardianship%%: the rights and duties that are associated with a %%guardianship relationship|guardianship%% where the %%guardian|guardian%% is the %%party|party%% that operates the %%legal system|legal-system%% of a %%Jurisdiction|jurisdiction%% and the %%dependent|dependent%% is a refugee is quite different from a %%guardianship relationship|guardianship%% where the %%guardian|guardian%% and %%dependent|dependent%% are both refugees. One such difference is that in the first case, certain rights and duties can be delegated whereas in the latter case that is prohibited.
2. the meaning of %%guardianship relationships|guardianship%% is defined by a %%Jurisdiction|jurisdiction%% in the same way as the meaning of roles are defined by a %%Jurisdiction|jurisdiction%%. This meaning is given by the set of rights and duties that are assigned to the role/%%guardianship|guardianship%%, which in turn depend on the %%objectives|objective%% that the %%Jurisdiction|jurisdiction%% aims to contribute to by assigning them, and the Transaction Types and Transaction Type Roles it specifies in relation to this.
3. perhaps %%guardianship|guardianship%% is not all that special: at a functional level, they work quite the same as roles do, the difference only lying in the fact that roles are an assignment of rights, duties etc. to a (semantically properly defined) single %%legal entity|legal-entity%% (e.g. a Refugee, an Employee, etc.), whereas a %%guardianship|guardianship%% is an assignment of rights, duties etc. to a (semantically properly defined) ordered pair of %%Legal Entities|legal-entity%% (the first of which is called '%%guardian|guardian%%' and the other is called '%%dependent|dependent%%').
4. in a way, %%ownership|ownership%% may be considered a specialization of %%guardianship|guardianship%%. This is supported by the various definitions we find in different dictionaries - which all have a striking resemblance with definitions of '%%guardianship|guardianship%%'. Also, it is supported by the fact that:

- a %%party|party%% that owns something (an %%entity|entity%%) is entitled to do transactions (with that %%entity|entity%%) that other Parties are not entitled to, e.g. selling it.
- a %%party|party%% that owns an %%entity|entity%% typically protects or defends such %%entities|entity%% (their property); the %%party|party%% may also take care of it.
- like %%guardianships|guardianship%%, duties, rights, privileges etc. are being assigned to %%ownership|ownership%% by a %%Jurisdiction|jurisdiction%%.
- in the same way that a %%Jurisdiction|jurisdiction%% may have different kinds of %%guardianship|guardianship%%, they may have different kinds of %%ownership|ownership%% - a property that is well-known e.g. for corporations - and each kind of %%ownership|ownership%% may serve its own purposes.

One might argue that because of these similarities, '%%ownership|ownership%%' and '%%guardianship|guardianship%%' are the same. However, there is a difference, which is can be found in the kind of %%objectives|objective%% that (the %%party|party%% that governs) the %%jurisdiction|jurisdiction%%) pursues:
- %%ownership|ownership%% is about recognizing one's right to enjoy and (given some limitations) absolutely control something;
- %%guardianship|guardianship%% is more about a duty to care, defend and protect someone or something.

Since the %%Jurisdiction|jurisdiction%% model claims that %%Jurisdictions|jurisdiction%% own %%Objectives|objective%%, %%Guardianship|guardianship%% Types, and other things, this means that there is recursion, implying that %%Jurisdictions|jurisdiction%% are guardians of these things they own. Indeed, %%Jurisdictions|jurisdiction%% do have (implicit or explicit) rules that govern their %%Objectives|objective%%, %%Guardianship|guardianship%% Types, and whatever else they may have (by the very definition of %%Jurisdiction|jurisdiction%%).
