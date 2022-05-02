---
id: pattern-guardianship
title: "Guardianship"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: pattern
termid: guardianship
symphrase: guardianship
status: draft
grouptags:
hoverText: "The Guardianships pattern captures the Concepts and relations that explain what a generic Guardianship consists of, and how it relates to Guardians, Dependents, Jurisdictions, etc."
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Purpose
The **Guardianship pattern** captures the concepts and relations that explain how generic guardianships work, and can be constructed. It shows that %%guardianship arrangements|guardianship-arrangement%% are embedded in a %%jurisdiction|jurisdiction%% that govern such arrangements.

The contribution of this pattern is to establish a building block and terminology for constructing a consistent, coherent and sufficiently complete mental model that allows %%parties|party%% to convey guardianship-related ideas to other parties, without running the risk of being misunderstood, by expressing any guardianship-related use-case in terms of the model. This will enable us to draft requirements and specifications for infrastructural IT, and make a start with specifying standardizable data structures (schemas) for use in combination with VCs.

### Introduction
The term 'guardianship' has many definitions/descriptions, such as:
- “The position of protecting or defending something” or “The position of being legally responsible for the care of someone who is unable to manage their own affairs.” (both from the [Oxford dictionary](https://www.lexico.com/en/definition/guardianship)),
- “One who has the care of the person or property of another” or “One that guards” (both from [Merriam-Webster](https://www.merriam-webster.com/dictionary/guardianship)),
- “The state or duty of being a guardian”, where 'guardian' is defined as “A person who has the legal right and responsibility of taking care of someone who cannot take care of himself or herself” or “Someone who protects something” ([Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/)), or
- “The status of being a protector, advocate, or proxy for a person” ([Sovrin Guardianship Task Force whitepaper](https://sovrin.org/wp-content/uploads/Guardianship-Whitepaper.pdf)), which defines 'guardian' as “An organization or person protecting another person and possibly their property”.
- “The legal, social, or organizational responsibility of serving as a Guardian” ([Sovrin Glossary](https://docs.google.com/document/d/1gfIz5TT0cNp2kxGMLFXr19x1uoZsruUe_0glHst2fZ8/edit)), which also defines 'guardian' as  “An Identity Owner who administers identity Data, Wallets, and/or Agents on behalf of a dependent”.

So, it seems that most people will acknowledge that 'guardianship' is an arrangement between

- someone (or an organization, collectively referred to as a '%%party|party%%') or something that is 'under %%guardianship|guardianship-arrangement%%', i.e. being cared for, guarded, protected or defended - we call this the '%%dependent|dependent%%', and
- one or more %%parties|party%% that do this caring, guarding, protecting or defending - we call them '%%guardians|guardian%%'.

Note that '%%dependent|dependent%%' and '%%guardian|guardian%%' are roles in a specific %%guardianship arrangement|guardianship-arrangement%%. They do not have an independent existence (as e.g. a human being does). A 'dependent' or 'guardian' only exists for as long as the arrangement exists and the arrangement has assigned such roles.

The actual activities that a %%guardian|guardian%% performs as (s)he cares for, guards, or … its %%dependent|dependent%% (in a specific %%guardianship arrangement|guardianship-arrangement%%) differ from case to case, and from situation to situation. Still, in general we can say that a guardianship arrangement comes with %%rights and duties|pattern-duties-and-rights%% that enable (or force) a guardian to execute (or refrain from executing) specific actions - for the purpose of caring/guarding/… its dependent.

A guardianship arrangement may also impose rights and duties to the dependent. For example, a guardianship arrangement that exists for the purpose of taking care of the financial situation of the dependent may impose a duty on the dependent to not engage in acts that may have significant financial consequences, such as committing itself to a loan.

A guardianship arrangement is meaningful to the extent in which such rights and duties are actually upheld and/or enforced. Defining and enforcing rights and duties, as well as resolving conflicts that may arise, are the very essence of a %%jurisdiction|jurisdiction%% - for details see the %%Jurisdictions pattern|pattern-jurisdiction%%

The wealth in varieties in guardianship arrangements can now easily be explained by observing that the various %%Jurisdictions|jurisdiction%% all exercise their self-sovereignty as they operate their %%legal systems|legal-system%%.

For a guardianship arrangement to be meaningful and relevant, it must be associated to a (single) jurisdiction that creates, modifies and dissolves the relation, specifies who the guardian and dependent are, and assigns each of them a set of rights and duties (including 'negative' rights and duties, i.e. what they may/must NOT do). A jurisdiction is implicitly tasked to enforce such rights and duties, and provide for the resolution of conflicts, yet is (and remains) self-sovereign in determining the extent in which it does so.

### Formalized model
Here is a visual representation of this pattern, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'Guardianship' pattern"
  src={useBaseUrl('images/patterns/pattern-guardianship-arrangement.png')}
/>

In the figure, concepts are placed in one of three areas that are elaborated in subsections.

#### Guardianship Governance

%%Parties|party%% that pursue %%objectives|objective%% related to the caring for, defending of specific %%entities|entity%%, need to specify the kinds of entities that are to be cared for (which we call a %%dependent|dependent%%), establish the rules that specify what this care consists of and how it comes to pass, ensure that these rules are enforced, and provide a mechanism to resolve any disputes or unforeseen circumstances. In other words: such parties are %%jurisdictions|jurisdiction%% whose %%legal system|legal-system%% provides the rules, enforcement, and resolution mechanisms.

Different objectives lead to different kinds of guardianships. For example, the objective that children should be taken care of, get a good education etc. may lead to a guardianship type called 'Parenthood'. Others may lead to guardianship types such as 'Curatorship', 'Financial Administration', 'Legal Custody', etc.

Note that dependents need not always be
- people that are somehow very needy. The %%manager|management%% of a department in a company may be tasked to care for the wellbeing of the workers in his department, which doesn't require such workers to be incapable of doing that for themselves.
- people. Enterprises can have curators that care for an enterprise that has trouble to continue its existence. A historical heritage site might also become a dependent in a specific kind of guardianship type. Even some kinds of %%ownership|ownership%% may qualify as a guardianship, which is the case when the rights and duties that the %%owner|owner%% has to enjoy, dispose of, and control the (%%owned|owned%%) entity also serve to care for, or defend that entity.

Guardianship %%governance|governance%% is the acts/processes of governing/overseeing the control and direction of whatever relates to guardianships. It oversees and directs the establishment of %%guardianship types|guardianship-type%%, defining the various stakeholder roles and associating their rights and duties towards one another.

The %%legal system|legal-system%% of the %%jurisdiction|jurisdiction%% that governs a guardianship type would contain (and enforce) the (process) rules for defining and modifying guardianship types.

Similarly, that legal system would also specify the rules for creating, changing/updating, and destroying %%guardianship arrangements|guardianship-arrangement%% that instantiate such a guardianship type.

It seems obvious that the way in which the legal system enforces these rules, and settles any disputes, is a large part of the impact that guardianship arrangements will, or fail to have.

#### Define-time: Guardianship Types

The define-time aspect of guardianships is all about about the design of %%guardianships types|guardianship-type%%, i.e. the specification of a class of (runtime) %%guardianship arrangements|guardianship-arrangement%%, which would then serve one or more %%objectives|objective%% of the %%jurisdiction|jurisdiction%% that defines (and further governs) it. For example, a jurisdiction could define a guardianship type called "Financial Guardianship", that would serve the objective of ensuring that the adults that are physically or mentally (partially) incapable of managing their own finances are taken care of, by ensuring support aimed at keeping them out of financial trouble.

A guardianship type basically defines a set of duties and rights and a set of stakeholder roles that allow these duties and rights to be assigned to, or directed at. Note that one part of such rights and duties pertain to the realization of the objective(s) that the guardianship type was created for, while another part pertains to the management- and %%governance|governance%% processes.

Every guardianship type has one stakeholder role that is (also) referred to as its dependent (role). The other roles may be referred to as guardian roles. Different guardianship types may use different role(name)s to refer to their respective dependent roles.

In our example of a 'Financial Guardianship', we could have stakeholder roles such as "Financial Administrator", "Judge" and "Party placed under administration" (which is the dependent role), and associate rights and duties e.g. as follows:
1. "[Financial Administrator] must ensure that [Party placed under administration] has sufficient funds to pay for housing and food";
2. "[Party placed under administration] may not enter into financial %%obligations|obligation%%";
3. "[Financial Administrator] has a right to look into, and transfer money out of any bank account of [Party placed under administration]";
4. "[Judge] must establish the a compensation arrangement for [Financial Administrator]";
5. "Every year, [Financial Administrator] must submit a written report to [Judge] in which (s)he accounts for all actions taken under the guardianship arrangement";
6. "[Judge] must review the rights and duties of an arrangement each year and update them if such is needed to better realize the objectives for which the arrangement exists".

The example shows that
- there is no such thing as 'the dependent (role)'; in the define-time context, the phrase 'dependent' is specific for a guardianship type, and only serves as a placeholder for one of its stakeholder roles.
- names of stakeholder roles only serve as placeholders, that will be assigned %%parties|party%% when the guardianship type is instantiated;
- the various roles are implicitly defined by the rights and duties that have been assigned to them - there is no real need to explicitly describe them;
- multiple parties may be caring for a dependent in their own specific way (in the example, the Judge cares by ensuring that the Financial Administrator does not prey on the party that is placed under administration);
- 'caring for' extends to making sure that due process is being followed, the guardianship arrangement is being properly managed, and supervised - all this can be specified in terms of stakeholder roles, rights and duties;
- one role, that can have an arbitrary name as any other stakeholder role, must be available for the dependent to play. It is called the 'dependent-role'. The other roles are called 'guardian-roles'.

#### Run-time: Guardianship Arrangements

The run-time aspect of guardianships is all about about the establishing, using and management of actual %%guardianships arrangements|guardianship-arrangement%%. This includes the assignment of %%legal entities|legal-entity%% to the various stakeholder roles, and the management of such assignments. It also includes the management of the actual rights and duties or such legal entities.

Typically, the %%jurisdiction|jurisdiction%% that enforces (and governs) a %%guardianship type|guardianship-type%% has rules that specify the conditions that allow a guardianship arrangement of that type to be created, including the %%parties|party%% that must do this. When a guardianship arrangement is established, it starts as a copy of the guardianship type that it instantiates. Then, the dependent-role is assigned to the legal entity that will be fulfilling that role (or more legal entities if that is appropriate). Similarly, most, if not all guardianship-roles are assigned to a legal entity. Note that the the rules that govern the guardianship arrangements may specify that a specific guardian-role is reserved for the party that manages the guardianship arrangement itself.

Next, every duty/right type can now be converted into a duty/right instance, by replacing the role names by the names of the legal entities that fulfill the role. For example, assume that a guardianship arrangement is established in which Dick is assigned the role of 'person placed under administration', Alice the 'financial administrator' and Joe is the 'judge', whose role is to manage and supervise the guardianship arrangement. Then, the rights and duties would become:
1. "Alice must ensure that Dick has sufficient funds to pay for housing and food";
2. "Dick may not enter into financial %%obligations|obligation%%";
3. "Alice has a right to look into, and transfer money out of any bank account of Dick";
4. "Joe must establish the a compensation arrangement for Alice";
5. "Every year, Alice must submit a written report to Joe in which (s)he accounts for all actions taken under the guardianship arrangement;
6. "Joe must review the rights and duties of an arrangement each year and update them if such is needed to better realize the objectives for which the arrangement exists".

In the session where the guardianship arrangement is established, these rights and duties may be reviewed and amended as appropriate. In our example, after having established the role assignments (and implicitly the initially associated duties and rights), Joe may decide
- to modify rule 3 to read: "Alice has a right to look into, and transfer money out of any bank account of Dick, except for Dick's savings account"
- to add a rule that says: "Alice may only transfer funds out of Dick's savings account if that transfer has been explicitly approved by Dick.
This allows guardianship arrangements to be created and maintained in a way that is appropriate to the situation of all stakeholders.

Note that in general, rights and duties may refer to entities other than the %%guardian|guardian%% or %%dependent|dependent%%, e.g. a third party against whom a right or duty may or must be exercised. Still, such rights and duties can only be formulated for entities that are recognized to exist, i.e. are legal entities for, the governing jurisdiction.
