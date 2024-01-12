"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2202],{1430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>h,toc:()=>c});var n=a(5893),i=a(1151),r=a(4996);const s={id:"pattern-guardianship",displayed_sidebar:"essifLabSideBar",termType:"pattern",term:"guardianship",formPhrases:["guardianship{ss}","guardianship{ss}-pattern"],status:"stable",grouptags:null,glossaryTerm:"Guardianship Pattern",glossaryText:"a set of [concepts](@) and other [semantic units](@) that can be used to explain what a generic [guardianship](@) consists of, and how it relates to [guardians](@), [dependents](@), [jurisdictions](@), etc.",hoverText:"The Guardianships pattern captures the Concepts and relations that explain what a generic Guardianship consists of, and how it relates to Guardians, Dependents, Jurisdictions, etc.",date:20210601},o="Guardianship",h={id:"terms/pattern-guardianship",title:"Guardianship",description:"The Guardianship pattern captures the concepts and relations that explain how generic guardianships work, and can be constructed. It shows that guardianship arrangements are embedded in a jurisdiction that govern such arrangements.",source:"@site/docs/terms/pattern-guardianship.md",sourceDirName:"terms",slug:"/terms/pattern-guardianship",permalink:"/framework/docs/terms/pattern-guardianship",draft:!1,unlisted:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/pattern-guardianship.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1705057701,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{id:"pattern-guardianship",displayed_sidebar:"essifLabSideBar",termType:"pattern",term:"guardianship",formPhrases:["guardianship{ss}","guardianship{ss}-pattern"],status:"stable",grouptags:null,glossaryTerm:"Guardianship Pattern",glossaryText:"a set of [concepts](@) and other [semantic units](@) that can be used to explain what a generic [guardianship](@) consists of, and how it relates to [guardians](@), [dependents](@), [jurisdictions](@), etc.",hoverText:"The Guardianships pattern captures the Concepts and relations that explain what a generic Guardianship consists of, and how it relates to Guardians, Dependents, Jurisdictions, etc.",date:20210601},sidebar:"essifLabSideBar",previous:{title:"Jurisdictions",permalink:"/framework/docs/terms/pattern-jurisdiction"},next:{title:"Terminology Pattern",permalink:"/framework/docs/terms/pattern-terminology"}},d={},c=[{value:"Introduction",id:"introduction",level:3},{value:"Formalized model",id:"formalized-model",level:3},{value:"Guardianship Governance",id:"guardianship-governance",level:4},{value:"Define-time: Guardianship Types",id:"define-time-guardianship-types",level:4},{value:"Run-time: Guardianship Arrangements",id:"run-time-guardianship-arrangements",level:4}];function l(e){const t={a:"a",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"guardianship",children:"Guardianship"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Guardianship pattern"})," captures the concepts and relations that explain how generic guardianships work, and can be constructed. It shows that ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardianship-arrangement",hovertext:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",children:"guardianship arrangements"})," are embedded in a ",(0,n.jsx)("a",{href:"/framework/docs/terms/jurisdiction",hovertext:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",children:"jurisdiction"})," that govern such arrangements."]}),"\n",(0,n.jsxs)(t.p,{children:["The contribution of this pattern is to establish a building block and terminology for constructing a consistent, coherent and sufficiently complete mental model that allows ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"})," to convey guardianship-related ideas to other parties, without running the risk of being misunderstood, by expressing any guardianship-related use-case in terms of the model. This will enable us to draft requirements and specifications for infrastructural IT, and make a start with specifying standardizable data structures (schemas) for use in combination with VCs."]}),"\n",(0,n.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"The term 'guardianship' has many definitions/descriptions, such as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u201cThe position of protecting or defending something\u201d or \u201cThe position of being legally responsible for the care of someone who is unable to manage their own affairs.\u201d (both from the ",(0,n.jsx)(t.a,{href:"https://www.lexico.com/en/definition/guardianship",children:"Oxford dictionary"}),"),"]}),"\n",(0,n.jsxs)(t.li,{children:["\u201cOne who has the care of the person or property of another\u201d or \u201cOne that guards\u201d (both from ",(0,n.jsx)(t.a,{href:"https://www.merriam-webster.com/dictionary/guardianship",children:"Merriam-Webster"}),"),"]}),"\n",(0,n.jsxs)(t.li,{children:["\u201cThe state or duty of being a guardian\u201d, where 'guardian' is defined as \u201cA person who has the legal right and responsibility of taking care of someone who cannot take care of himself or herself\u201d or \u201cSomeone who protects something\u201d (",(0,n.jsx)(t.a,{href:"https://dictionary.cambridge.org/dictionary/english/",children:"Cambridge Dictionary"}),"), or"]}),"\n",(0,n.jsxs)(t.li,{children:["\u201cThe status of being a protector, advocate, or proxy for a person\u201d (",(0,n.jsx)(t.a,{href:"https://sovrin.org/wp-content/uploads/Guardianship-Whitepaper.pdf",children:"Sovrin Guardianship Task Force whitepaper"}),"), which defines 'guardian' as \u201cAn organization or person protecting another person and possibly their property\u201d."]}),"\n",(0,n.jsxs)(t.li,{children:["\u201cThe legal, social, or organizational responsibility of serving as a Guardian\u201d (",(0,n.jsx)(t.a,{href:"https://docs.google.com/document/d/1gfIz5TT0cNp2kxGMLFXr19x1uoZsruUe_0glHst2fZ8/edit",children:"Sovrin Glossary"}),"), which also defines 'guardian' as  \u201cAn Identity Owner who administers identity Data, Wallets, and/or Agents on behalf of a dependent\u201d."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"So, it seems that most people will acknowledge that 'guardianship' is an arrangement between"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["someone (or an organization, collectively referred to as a '",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),"') or something that is 'under ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardianship-arrangement",hovertext:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",children:"guardianship"}),"', i.e. being cared for, guarded, protected or defended - we call this the '",(0,n.jsx)("a",{href:"/framework/docs/terms/dependent",hovertext:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",children:"dependent"}),"', and"]}),"\n",(0,n.jsxs)(t.li,{children:["one or more ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"})," that do this caring, guarding, protecting or defending - we call them '",(0,n.jsx)("a",{href:"/framework/docs/terms/guardian",hovertext:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",children:"guardians"}),"'."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Note that '",(0,n.jsx)("a",{href:"/framework/docs/terms/dependent",hovertext:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",children:"dependent"}),"' and '",(0,n.jsx)("a",{href:"/framework/docs/terms/guardian",hovertext:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",children:"guardian"}),"' are roles in a specific ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardianship-arrangement",hovertext:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",children:"guardianship arrangement"}),". They do not have an independent existence (as e.g. a human being does). A 'dependent' or 'guardian' only exists for as long as the arrangement exists and the arrangement has assigned such roles."]}),"\n",(0,n.jsxs)(t.p,{children:["The actual activities that a ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardian",hovertext:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",children:"guardian"})," performs as (s)he cares for, guards, or \u2026 its ",(0,n.jsx)("a",{href:"/framework/docs/terms/dependent",hovertext:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",children:"dependent"})," (in a specific ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardianship-arrangement",hovertext:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",children:"guardianship arrangement"}),") differ from case to case, and from situation to situation. Still, in general we can say that a guardianship arrangement comes with ",(0,n.jsx)("a",{href:"/framework/docs/terms/pattern-duties-and-rights",hovertext:"The Duties and Rights pattern captures the Concepts and relations that explain what a generic duties and rights consists of (based on Hofeld's theories), and relates it to Jurisdictions, Parties and Legal Entities.",children:"rights and duties"})," that enable (or force) a guardian to execute (or refrain from executing) specific actions - for the purpose of caring/guarding/\u2026 its dependent."]}),"\n",(0,n.jsx)(t.p,{children:"A guardianship arrangement may also impose rights and duties to the dependent. For example, a guardianship arrangement that exists for the purpose of taking care of the financial situation of the dependent may impose a duty on the dependent to not engage in acts that may have significant financial consequences, such as committing itself to a loan."}),"\n",(0,n.jsxs)(t.p,{children:["A guardianship arrangement is meaningful to the extent in which such rights and duties are actually upheld and/or enforced. Defining and enforcing rights and duties, as well as resolving conflicts that may arise, are the very essence of a ",(0,n.jsx)("a",{href:"/framework/docs/terms/jurisdiction",hovertext:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",children:"jurisdiction"})," - for details see the ",(0,n.jsx)("a",{href:"/framework/docs/terms/pattern-jurisdiction",hovertext:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities.",children:"Jurisdictions pattern"})]}),"\n",(0,n.jsxs)(t.p,{children:["The wealth in varieties in guardianship arrangements can now easily be explained by observing that the various ",(0,n.jsx)("a",{href:"/framework/docs/terms/jurisdiction",hovertext:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",children:"Jurisdictions"})," all exercise their self-sovereignty as they operate their ",(0,n.jsx)("a",{href:"/framework/docs/terms/legal-system",hovertext:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",children:"legal systems"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"For a guardianship arrangement to be meaningful and relevant, it must be associated to a (single) jurisdiction that creates, modifies and dissolves the relation, specifies who the guardian and dependent are, and assigns each of them a set of rights and duties (including 'negative' rights and duties, i.e. what they may/must NOT do). A jurisdiction is implicitly tasked to enforce such rights and duties, and provide for the resolution of conflicts, yet is (and remains) self-sovereign in determining the extent in which it does so."}),"\n",(0,n.jsx)(t.h3,{id:"formalized-model",children:"Formalized model"}),"\n",(0,n.jsxs)(t.p,{children:["Here is a visual representation of this pattern, using the following ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"../notations-and-conventions#pattern-diagram-notations",children:"notations and conventions"})}),":"]}),"\n",(0,n.jsx)("img",{alt:"Conceptual model of the 'Guardianship' pattern",src:(0,r.Z)("images/patterns/pattern-guardianship-arrangement.png")}),"\n",(0,n.jsx)(t.p,{children:"In the figure, concepts are placed in one of three areas that are elaborated in subsections."}),"\n",(0,n.jsx)(t.h4,{id:"guardianship-governance",children:"Guardianship Governance"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"Parties"})," that pursue ",(0,n.jsx)("a",{href:"/framework/docs/terms/objective",hovertext:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",children:"objectives"})," related to the caring for, defending of specific ",(0,n.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entities"}),", need to specify the kinds of entities that are to be cared for (which we call a ",(0,n.jsx)("a",{href:"/framework/docs/terms/dependent",hovertext:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",children:"dependent"}),"), establish the rules that specify what this care consists of and how it comes to pass, ensure that these rules are enforced, and provide a mechanism to resolve any disputes or unforeseen circumstances. In other words: such parties are ",(0,n.jsx)("a",{href:"/framework/docs/terms/jurisdiction",hovertext:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",children:"jurisdictions"})," whose ",(0,n.jsx)("a",{href:"/framework/docs/terms/legal-system",hovertext:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",children:"legal system"})," provides the rules, enforcement, and resolution mechanisms."]}),"\n",(0,n.jsx)(t.p,{children:"Different objectives lead to different kinds of guardianships. For example, the objective that children should be taken care of, get a good education etc. may lead to a guardianship type called 'Parenthood'. Others may lead to guardianship types such as 'Curatorship', 'Financial Administration', 'Legal Custody', etc."}),"\n",(0,n.jsx)(t.p,{children:"Note that dependents need not always be"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["people that are somehow very needy. The ",(0,n.jsx)("a",{href:"/framework/docs/terms/management",hovertext:"Management: the act or process of managing or actually realizing of (the results associated with) a set of Objectives by the Owner of these Objectives.",children:"manager"})," of a department in a company may be tasked to care for the wellbeing of the workers in his department, which doesn't require such workers to be incapable of doing that for themselves."]}),"\n",(0,n.jsxs)(t.li,{children:["people. Enterprises can have curators that care for an enterprise that has trouble to continue its existence. A historical heritage site might also become a dependent in a specific kind of guardianship type. Even some kinds of ",(0,n.jsx)("a",{href:"/framework/docs/terms/ownership",hovertext:"Ownership (of an Entity over another in a Jurisdiction): a relationship between two Entities in which one of them (called the Owner) has legal, rightful or natural rights and/or duties to enjoy, dispose of, and control the other (called the Owned).",children:"ownership"})," may qualify as a guardianship, which is the case when the rights and duties that the ",(0,n.jsx)("a",{href:"/framework/docs/terms/owner",hovertext:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",children:"owner"})," has to enjoy, dispose of, and control the (",(0,n.jsx)("a",{href:"/framework/docs/terms/owned",hovertext:"Owned (by an Owner, in some Jurisdiction): an Entity over which another Entity (its Owner) has the power (duty, right) to enjoy it, dispose of it and control it; that power is limited to (the scope of) that Jurisdiction, and by its rules.",children:"owned"}),") entity also serve to care for, or defend that entity."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Guardianship ",(0,n.jsx)("a",{href:"/framework/docs/terms/governance",hovertext:"Governance: the act or process of governing or overseeing the realization of (the results associated with) a set of Objectives by the Owner of these Objectives, in order to ensure they will be fit for the purposes that this Owner intends to use them for.",children:"governance"})," is the acts/processes of governing/overseeing the control and direction of whatever relates to guardianships. It oversees and directs the establishment of ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardianship-type",hovertext:"Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them.",children:"guardianship types"}),", defining the various stakeholder roles and associating their rights and duties towards one another."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)("a",{href:"/framework/docs/terms/legal-system",hovertext:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",children:"legal system"})," of the ",(0,n.jsx)("a",{href:"/framework/docs/terms/jurisdiction",hovertext:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",children:"jurisdiction"})," that governs a guardianship type would contain (and enforce) the (process) rules for defining and modifying guardianship types."]}),"\n",(0,n.jsxs)(t.p,{children:["Similarly, that legal system would also specify the rules for creating, changing/updating, and destroying ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardianship-arrangement",hovertext:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",children:"guardianship arrangements"})," that instantiate such a guardianship type."]}),"\n",(0,n.jsx)(t.p,{children:"It seems obvious that the way in which the legal system enforces these rules, and settles any disputes, is a large part of the impact that guardianship arrangements will, or fail to have."}),"\n",(0,n.jsx)(t.h4,{id:"define-time-guardianship-types",children:"Define-time: Guardianship Types"}),"\n",(0,n.jsxs)(t.p,{children:["The define-time aspect of guardianships is all about about the design of ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardianship-type",hovertext:"Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them.",children:"guardianships types"}),", i.e. the specification of a class of (runtime) ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardianship-arrangement",hovertext:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",children:"guardianship arrangements"}),", which would then serve one or more ",(0,n.jsx)("a",{href:"/framework/docs/terms/objective",hovertext:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",children:"objectives"})," of the ",(0,n.jsx)("a",{href:"/framework/docs/terms/jurisdiction",hovertext:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",children:"jurisdiction"}),' that defines (and further governs) it. For example, a jurisdiction could define a guardianship type called "Financial Guardianship", that would serve the objective of ensuring that the adults that are physically or mentally (partially) incapable of managing their own finances are taken care of, by ensuring support aimed at keeping them out of financial trouble.']}),"\n",(0,n.jsxs)(t.p,{children:["A guardianship type basically defines a set of duties and rights and a set of stakeholder roles that allow these duties and rights to be assigned to, or directed at. Note that one part of such rights and duties pertain to the realization of the objective(s) that the guardianship type was created for, while another part pertains to the management- and ",(0,n.jsx)("a",{href:"/framework/docs/terms/governance",hovertext:"Governance: the act or process of governing or overseeing the realization of (the results associated with) a set of Objectives by the Owner of these Objectives, in order to ensure they will be fit for the purposes that this Owner intends to use them for.",children:"governance"})," processes."]}),"\n",(0,n.jsx)(t.p,{children:"Every guardianship type has one stakeholder role that is (also) referred to as its dependent (role). The other roles may be referred to as guardian roles. Different guardianship types may use different role(name)s to refer to their respective dependent roles."}),"\n",(0,n.jsx)(t.p,{children:'In our example of a \'Financial Guardianship\', we could have stakeholder roles such as "Financial Administrator", "Judge" and "Party placed under administration" (which is the dependent role), and associate rights and duties e.g. as follows:'}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'"[Financial Administrator] must ensure that [Party placed under administration] has sufficient funds to pay for housing and food";'}),"\n",(0,n.jsxs)(t.li,{children:['"[Party placed under administration] may not enter into financial ',(0,n.jsx)("a",{href:"/framework/docs/terms/obligation",hovertext:"Obligation (of a Party): an Objective that is Owned by that Party for producing a specific (set of) result(s) that are to be used (consumed) by that Party and/or other Parties.",children:"obligations"}),'";']}),"\n",(0,n.jsx)(t.li,{children:'"[Financial Administrator] has a right to look into, and transfer money out of any bank account of [Party placed under administration]";'}),"\n",(0,n.jsx)(t.li,{children:'"[Judge] must establish the a compensation arrangement for [Financial Administrator]";'}),"\n",(0,n.jsx)(t.li,{children:'"Every year, [Financial Administrator] must submit a written report to [Judge] in which (s)he accounts for all actions taken under the guardianship arrangement";'}),"\n",(0,n.jsx)(t.li,{children:'"[Judge] must review the rights and duties of an arrangement each year and update them if such is needed to better realize the objectives for which the arrangement exists".'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The example shows that"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"there is no such thing as 'the dependent (role)'; in the define-time context, the phrase 'dependent' is specific for a guardianship type, and only serves as a placeholder for one of its stakeholder roles."}),"\n",(0,n.jsxs)(t.li,{children:["names of stakeholder roles only serve as placeholders, that will be assigned ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"})," when the guardianship type is instantiated;"]}),"\n",(0,n.jsx)(t.li,{children:"the various roles are implicitly defined by the rights and duties that have been assigned to them - there is no real need to explicitly describe them;"}),"\n",(0,n.jsx)(t.li,{children:"multiple parties may be caring for a dependent in their own specific way (in the example, the Judge cares by ensuring that the Financial Administrator does not prey on the party that is placed under administration);"}),"\n",(0,n.jsx)(t.li,{children:"'caring for' extends to making sure that due process is being followed, the guardianship arrangement is being properly managed, and supervised - all this can be specified in terms of stakeholder roles, rights and duties;"}),"\n",(0,n.jsx)(t.li,{children:"one role, that can have an arbitrary name as any other stakeholder role, must be available for the dependent to play. It is called the 'dependent-role'. The other roles are called 'guardian-roles'."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"run-time-guardianship-arrangements",children:"Run-time: Guardianship Arrangements"}),"\n",(0,n.jsxs)(t.p,{children:["The run-time aspect of guardianships is all about about the establishing, using and management of actual ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardianship-arrangement",hovertext:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",children:"guardianships arrangements"}),". This includes the assignment of ",(0,n.jsx)("a",{href:"/framework/docs/terms/legal-entity",hovertext:"Legal Entity (of a Jurisdiction): an Entity that is known by, recognized to exist, and registered in that Jurisdiction.",children:"legal entities"})," to the various stakeholder roles, and the management of such assignments. It also includes the management of the actual rights and duties or such legal entities."]}),"\n",(0,n.jsxs)(t.p,{children:["Typically, the ",(0,n.jsx)("a",{href:"/framework/docs/terms/jurisdiction",hovertext:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",children:"jurisdiction"})," that enforces (and governs) a ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardianship-type",hovertext:"Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them.",children:"guardianship type"})," has rules that specify the conditions that allow a guardianship arrangement of that type to be created, including the ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"})," that must do this. When a guardianship arrangement is established, it starts as a copy of the guardianship type that it instantiates. Then, the dependent-role is assigned to the legal entity that will be fulfilling that role (or more legal entities if that is appropriate). Similarly, most, if not all guardianship-roles are assigned to a legal entity. Note that the the rules that govern the guardianship arrangements may specify that a specific guardian-role is reserved for the party that manages the guardianship arrangement itself."]}),"\n",(0,n.jsx)(t.p,{children:"Next, every duty/right type can now be converted into a duty/right instance, by replacing the role names by the names of the legal entities that fulfill the role. For example, assume that a guardianship arrangement is established in which Dick is assigned the role of 'person placed under administration', Alice the 'financial administrator' and Joe is the 'judge', whose role is to manage and supervise the guardianship arrangement. Then, the rights and duties would become:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'"Alice must ensure that Dick has sufficient funds to pay for housing and food";'}),"\n",(0,n.jsxs)(t.li,{children:['"Dick may not enter into financial ',(0,n.jsx)("a",{href:"/framework/docs/terms/obligation",hovertext:"Obligation (of a Party): an Objective that is Owned by that Party for producing a specific (set of) result(s) that are to be used (consumed) by that Party and/or other Parties.",children:"obligations"}),'";']}),"\n",(0,n.jsx)(t.li,{children:'"Alice has a right to look into, and transfer money out of any bank account of Dick";'}),"\n",(0,n.jsx)(t.li,{children:'"Joe must establish the a compensation arrangement for Alice";'}),"\n",(0,n.jsx)(t.li,{children:'"Every year, Alice must submit a written report to Joe in which (s)he accounts for all actions taken under the guardianship arrangement;'}),"\n",(0,n.jsx)(t.li,{children:'"Joe must review the rights and duties of an arrangement each year and update them if such is needed to better realize the objectives for which the arrangement exists".'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the session where the guardianship arrangement is established, these rights and duties may be reviewed and amended as appropriate. In our example, after having established the role assignments (and implicitly the initially associated duties and rights), Joe may decide"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'to modify rule 3 to read: "Alice has a right to look into, and transfer money out of any bank account of Dick, except for Dick\'s savings account"'}),"\n",(0,n.jsx)(t.li,{children:"to add a rule that says: \"Alice may only transfer funds out of Dick's savings account if that transfer has been explicitly approved by Dick.\nThis allows guardianship arrangements to be created and maintained in a way that is appropriate to the situation of all stakeholders."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Note that in general, rights and duties may refer to entities other than the ",(0,n.jsx)("a",{href:"/framework/docs/terms/guardian",hovertext:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",children:"guardian"})," or ",(0,n.jsx)("a",{href:"/framework/docs/terms/dependent",hovertext:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",children:"dependent"}),", e.g. a third party against whom a right or duty may or must be exercised. Still, such rights and duties can only be formulated for entities that are recognized to exist, i.e. are legal entities for, the governing jurisdiction."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var n=a(7294);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);