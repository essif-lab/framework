"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2202],{1600:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return h},metadata:function(){return l},toc:function(){return u}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),s=a(4345),o=a(4996),d=["components"],h={id:"pattern-guardianship",title:"Guardianship",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"pattern",termid:"guardianship",term:"guardianship",formphrases:"guardianship",status:"draft",grouptags:null,hoverText:"The Guardianships pattern captures the Concepts and relations that explain what a generic Guardianship consists of, and how it relates to Guardians, Dependents, Jurisdictions, etc.",date:20210601},p=void 0,l={unversionedId:"terms/pattern-guardianship",id:"terms/pattern-guardianship",title:"Guardianship",description:"Purpose",source:"@site/docs/terms/pattern-guardianship.md",sourceDirName:"terms",slug:"/terms/pattern-guardianship",permalink:"/framework/docs/terms/pattern-guardianship",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/pattern-guardianship.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1696252654,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"pattern-guardianship",title:"Guardianship",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"pattern",termid:"guardianship",term:"guardianship",formphrases:"guardianship",status:"draft",grouptags:null,hoverText:"The Guardianships pattern captures the Concepts and relations that explain what a generic Guardianship consists of, and how it relates to Guardians, Dependents, Jurisdictions, etc.",date:20210601},sidebar:"essifLabSideBar",previous:{title:"Jurisdictions",permalink:"/framework/docs/terms/pattern-jurisdiction"},next:{title:"Terminology Pattern",permalink:"/framework/docs/terms/pattern-terminology"}},c={},u=[{value:"Purpose",id:"purpose",level:3},{value:"Introduction",id:"introduction",level:3},{value:"Formalized model",id:"formalized-model",level:3},{value:"Guardianship Governance",id:"guardianship-governance",level:4},{value:"Define-time: Guardianship Types",id:"define-time-guardianship-types",level:4},{value:"Run-time: Guardianship Arrangements",id:"run-time-guardianship-arrangements",level:4}],m={toc:u};function g(e){var t=e.components,a=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Guardianship pattern")," captures the concepts and relations that explain how generic guardianships work, and can be constructed. It shows that ",(0,r.kt)(s.Z,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship arrangements")," are embedded in a ",(0,r.kt)(s.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction")," that govern such arrangements."),(0,r.kt)("p",null,"The contribution of this pattern is to establish a building block and terminology for constructing a consistent, coherent and sufficiently complete mental model that allows ",(0,r.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," to convey guardianship-related ideas to other parties, without running the risk of being misunderstood, by expressing any guardianship-related use-case in terms of the model. This will enable us to draft requirements and specifications for infrastructural IT, and make a start with specifying standardizable data structures (schemas) for use in combination with VCs."),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The term 'guardianship' has many definitions/descriptions, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u201cThe position of protecting or defending something\u201d or \u201cThe position of being legally responsible for the care of someone who is unable to manage their own affairs.\u201d (both from the ",(0,r.kt)("a",{parentName:"li",href:"https://www.lexico.com/en/definition/guardianship"},"Oxford dictionary"),"),"),(0,r.kt)("li",{parentName:"ul"},"\u201cOne who has the care of the person or property of another\u201d or \u201cOne that guards\u201d (both from ",(0,r.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/guardianship"},"Merriam-Webster"),"),"),(0,r.kt)("li",{parentName:"ul"},"\u201cThe state or duty of being a guardian\u201d, where 'guardian' is defined as \u201cA person who has the legal right and responsibility of taking care of someone who cannot take care of himself or herself\u201d or \u201cSomeone who protects something\u201d (",(0,r.kt)("a",{parentName:"li",href:"https://dictionary.cambridge.org/dictionary/english/"},"Cambridge Dictionary"),"), or"),(0,r.kt)("li",{parentName:"ul"},"\u201cThe status of being a protector, advocate, or proxy for a person\u201d (",(0,r.kt)("a",{parentName:"li",href:"https://sovrin.org/wp-content/uploads/Guardianship-Whitepaper.pdf"},"Sovrin Guardianship Task Force whitepaper"),"), which defines 'guardian' as \u201cAn organization or person protecting another person and possibly their property\u201d."),(0,r.kt)("li",{parentName:"ul"},"\u201cThe legal, social, or organizational responsibility of serving as a Guardian\u201d (",(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1gfIz5TT0cNp2kxGMLFXr19x1uoZsruUe_0glHst2fZ8/edit"},"Sovrin Glossary"),"), which also defines 'guardian' as  \u201cAn Identity Owner who administers identity Data, Wallets, and/or Agents on behalf of a dependent\u201d.")),(0,r.kt)("p",null,"So, it seems that most people will acknowledge that 'guardianship' is an arrangement between"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"someone (or an organization, collectively referred to as a '",(0,r.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"') or something that is 'under ",(0,r.kt)(s.Z,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship"),"', i.e. being cared for, guarded, protected or defended - we call this the '",(0,r.kt)(s.Z,{popup:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",reference:"/framework/docs/terms/dependent",mdxType:"Term"},"dependent"),"', and"),(0,r.kt)("li",{parentName:"ul"},"one or more ",(0,r.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," that do this caring, guarding, protecting or defending - we call them '",(0,r.kt)(s.Z,{popup:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",reference:"/framework/docs/terms/guardian",mdxType:"Term"},"guardians"),"'.")),(0,r.kt)("p",null,"Note that '",(0,r.kt)(s.Z,{popup:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",reference:"/framework/docs/terms/dependent",mdxType:"Term"},"dependent"),"' and '",(0,r.kt)(s.Z,{popup:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",reference:"/framework/docs/terms/guardian",mdxType:"Term"},"guardian"),"' are roles in a specific ",(0,r.kt)(s.Z,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship arrangement"),". They do not have an independent existence (as e.g. a human being does). A 'dependent' or 'guardian' only exists for as long as the arrangement exists and the arrangement has assigned such roles."),(0,r.kt)("p",null,"The actual activities that a ",(0,r.kt)(s.Z,{popup:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",reference:"/framework/docs/terms/guardian",mdxType:"Term"},"guardian")," performs as (s)he cares for, guards, or \u2026 its ",(0,r.kt)(s.Z,{popup:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",reference:"/framework/docs/terms/dependent",mdxType:"Term"},"dependent")," (in a specific ",(0,r.kt)(s.Z,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship arrangement"),") differ from case to case, and from situation to situation. Still, in general we can say that a guardianship arrangement comes with ",(0,r.kt)(s.Z,{popup:"The Duties and Rights pattern captures the Concepts and relations that explain what a generic duties and rights consists of (based on Hofeld's theories), and relates it to Jurisdictions, Parties and Legal Entities.",reference:"/framework/docs/terms/pattern-duties-and-rights",mdxType:"Term"},"rights and duties")," that enable (or force) a guardian to execute (or refrain from executing) specific actions - for the purpose of caring/guarding/\u2026 its dependent."),(0,r.kt)("p",null,"A guardianship arrangement may also impose rights and duties to the dependent. For example, a guardianship arrangement that exists for the purpose of taking care of the financial situation of the dependent may impose a duty on the dependent to not engage in acts that may have significant financial consequences, such as committing itself to a loan."),(0,r.kt)("p",null,"A guardianship arrangement is meaningful to the extent in which such rights and duties are actually upheld and/or enforced. Defining and enforcing rights and duties, as well as resolving conflicts that may arise, are the very essence of a ",(0,r.kt)(s.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction")," - for details see the ",(0,r.kt)(s.Z,{popup:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities.",reference:"/framework/docs/terms/pattern-jurisdiction",mdxType:"Term"},"Jurisdictions pattern")),(0,r.kt)("p",null,"The wealth in varieties in guardianship arrangements can now easily be explained by observing that the various ",(0,r.kt)(s.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"Jurisdictions")," all exercise their self-sovereignty as they operate their ",(0,r.kt)(s.Z,{popup:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",reference:"/framework/docs/terms/legal-system",mdxType:"Term"},"legal systems"),"."),(0,r.kt)("p",null,"For a guardianship arrangement to be meaningful and relevant, it must be associated to a (single) jurisdiction that creates, modifies and dissolves the relation, specifies who the guardian and dependent are, and assigns each of them a set of rights and duties (including 'negative' rights and duties, i.e. what they may/must NOT do). A jurisdiction is implicitly tasked to enforce such rights and duties, and provide for the resolution of conflicts, yet is (and remains) self-sovereign in determining the extent in which it does so."),(0,r.kt)("h3",{id:"formalized-model"},"Formalized model"),(0,r.kt)("p",null,"Here is a visual representation of this pattern, using the following ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../notations-and-conventions#pattern-diagram-notations"},"notations and conventions")),":"),(0,r.kt)("img",{alt:"Conceptual model of the 'Guardianship' pattern",src:(0,o.Z)("images/patterns/pattern-guardianship-arrangement.png")}),(0,r.kt)("p",null,"In the figure, concepts are placed in one of three areas that are elaborated in subsections."),(0,r.kt)("h4",{id:"guardianship-governance"},"Guardianship Governance"),(0,r.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties")," that pursue ",(0,r.kt)(s.Z,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives")," related to the caring for, defending of specific ",(0,r.kt)(s.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities"),", need to specify the kinds of entities that are to be cared for (which we call a ",(0,r.kt)(s.Z,{popup:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",reference:"/framework/docs/terms/dependent",mdxType:"Term"},"dependent"),"), establish the rules that specify what this care consists of and how it comes to pass, ensure that these rules are enforced, and provide a mechanism to resolve any disputes or unforeseen circumstances. In other words: such parties are ",(0,r.kt)(s.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdictions")," whose ",(0,r.kt)(s.Z,{popup:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",reference:"/framework/docs/terms/legal-system",mdxType:"Term"},"legal system")," provides the rules, enforcement, and resolution mechanisms.",(0,r.kt)("p",null,"Different objectives lead to different kinds of guardianships. For example, the objective that children should be taken care of, get a good education etc. may lead to a guardianship type called 'Parenthood'. Others may lead to guardianship types such as 'Curatorship', 'Financial Administration', 'Legal Custody', etc."),(0,r.kt)("p",null,"Note that dependents need not always be"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"people that are somehow very needy. The ",(0,r.kt)(s.Z,{popup:"Management: the act or process of managing or actually realizing of (the results associated with) a set of Objectives by the Owner of these Objectives.",reference:"/framework/docs/terms/management",mdxType:"Term"},"manager")," of a department in a company may be tasked to care for the wellbeing of the workers in his department, which doesn't require such workers to be incapable of doing that for themselves."),(0,r.kt)("li",{parentName:"ul"},"people. Enterprises can have curators that care for an enterprise that has trouble to continue its existence. A historical heritage site might also become a dependent in a specific kind of guardianship type. Even some kinds of ",(0,r.kt)(s.Z,{popup:"Ownership (of an Entity over another in a Jurisdiction): a relationship between two Entities in which one of them (called the Owner) has legal, rightful or natural rights and/or duties to enjoy, dispose of, and control the other (called the Owned).",reference:"/framework/docs/terms/ownership",mdxType:"Term"},"ownership")," may qualify as a guardianship, which is the case when the rights and duties that the ",(0,r.kt)(s.Z,{popup:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owner")," has to enjoy, dispose of, and control the (",(0,r.kt)(s.Z,{popup:"Owned (by an Owner, in some Jurisdiction): an Entity over which another Entity (its Owner) has the power (duty, right) to enjoy it, dispose of it and control it; that power is limited to (the scope of) that Jurisdiction, and by its rules.",reference:"/framework/docs/terms/owned",mdxType:"Term"},"owned"),") entity also serve to care for, or defend that entity.")),(0,r.kt)("p",null,"Guardianship ",(0,r.kt)(s.Z,{popup:"Governance: the act or process of governing or overseeing the realization of (the results associated with) a set of Objectives by the Owner of these Objectives, in order to ensure they will be fit for the purposes that this Owner intends to use them for.",reference:"/framework/docs/terms/governance",mdxType:"Term"},"governance")," is the acts/processes of governing/overseeing the control and direction of whatever relates to guardianships. It oversees and directs the establishment of ",(0,r.kt)(s.Z,{popup:"Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them.",reference:"/framework/docs/terms/guardianship-type",mdxType:"Term"},"guardianship types"),", defining the various stakeholder roles and associating their rights and duties towards one another."),(0,r.kt)("p",null,"The ",(0,r.kt)(s.Z,{popup:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",reference:"/framework/docs/terms/legal-system",mdxType:"Term"},"legal system")," of the ",(0,r.kt)(s.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction")," that governs a guardianship type would contain (and enforce) the (process) rules for defining and modifying guardianship types."),(0,r.kt)("p",null,"Similarly, that legal system would also specify the rules for creating, changing/updating, and destroying ",(0,r.kt)(s.Z,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship arrangements")," that instantiate such a guardianship type."),(0,r.kt)("p",null,"It seems obvious that the way in which the legal system enforces these rules, and settles any disputes, is a large part of the impact that guardianship arrangements will, or fail to have."),(0,r.kt)("h4",{id:"define-time-guardianship-types"},"Define-time: Guardianship Types"),(0,r.kt)("p",null,"The define-time aspect of guardianships is all about about the design of ",(0,r.kt)(s.Z,{popup:"Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them.",reference:"/framework/docs/terms/guardianship-type",mdxType:"Term"},"guardianships types"),", i.e. the specification of a class of (runtime) ",(0,r.kt)(s.Z,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship arrangements"),", which would then serve one or more ",(0,r.kt)(s.Z,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives")," of the ",(0,r.kt)(s.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction"),' that defines (and further governs) it. For example, a jurisdiction could define a guardianship type called "Financial Guardianship", that would serve the objective of ensuring that the adults that are physically or mentally (partially) incapable of managing their own finances are taken care of, by ensuring support aimed at keeping them out of financial trouble.'),(0,r.kt)("p",null,"A guardianship type basically defines a set of duties and rights and a set of stakeholder roles that allow these duties and rights to be assigned to, or directed at. Note that one part of such rights and duties pertain to the realization of the objective(s) that the guardianship type was created for, while another part pertains to the management- and ",(0,r.kt)(s.Z,{popup:"Governance: the act or process of governing or overseeing the realization of (the results associated with) a set of Objectives by the Owner of these Objectives, in order to ensure they will be fit for the purposes that this Owner intends to use them for.",reference:"/framework/docs/terms/governance",mdxType:"Term"},"governance")," processes."),(0,r.kt)("p",null,"Every guardianship type has one stakeholder role that is (also) referred to as its dependent (role). The other roles may be referred to as guardian roles. Different guardianship types may use different role(name)s to refer to their respective dependent roles."),(0,r.kt)("p",null,'In our example of a \'Financial Guardianship\', we could have stakeholder roles such as "Financial Administrator", "Judge" and "Party placed under administration" (which is the dependent role), and associate rights and duties e.g. as follows:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'"',"[Financial Administrator]"," must ensure that ","[Party placed under administration]",' has sufficient funds to pay for housing and food";'),(0,r.kt)("li",{parentName:"ol"},'"',"[Party placed under administration]"," may not enter into financial ",(0,r.kt)(s.Z,{popup:"Obligation (of a Party): an Objective that is Owned by that Party for producing a specific (set of) result(s) that are to be used (consumed) by that Party and/or other Parties.",reference:"/framework/docs/terms/obligation",mdxType:"Term"},"obligations"),'";'),(0,r.kt)("li",{parentName:"ol"},'"',"[Financial Administrator]"," has a right to look into, and transfer money out of any bank account of ","[Party placed under administration]",'";'),(0,r.kt)("li",{parentName:"ol"},'"',"[Judge]"," must establish the a compensation arrangement for ","[Financial Administrator]",'";'),(0,r.kt)("li",{parentName:"ol"},'"Every year, ',"[Financial Administrator]"," must submit a written report to ","[Judge]",' in which (s)he accounts for all actions taken under the guardianship arrangement";'),(0,r.kt)("li",{parentName:"ol"},'"',"[Judge]",' must review the rights and duties of an arrangement each year and update them if such is needed to better realize the objectives for which the arrangement exists".')),(0,r.kt)("p",null,"The example shows that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"there is no such thing as 'the dependent (role)'; in the define-time context, the phrase 'dependent' is specific for a guardianship type, and only serves as a placeholder for one of its stakeholder roles."),(0,r.kt)("li",{parentName:"ul"},"names of stakeholder roles only serve as placeholders, that will be assigned ",(0,r.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," when the guardianship type is instantiated;"),(0,r.kt)("li",{parentName:"ul"},"the various roles are implicitly defined by the rights and duties that have been assigned to them - there is no real need to explicitly describe them;"),(0,r.kt)("li",{parentName:"ul"},"multiple parties may be caring for a dependent in their own specific way (in the example, the Judge cares by ensuring that the Financial Administrator does not prey on the party that is placed under administration);"),(0,r.kt)("li",{parentName:"ul"},"'caring for' extends to making sure that due process is being followed, the guardianship arrangement is being properly managed, and supervised - all this can be specified in terms of stakeholder roles, rights and duties;"),(0,r.kt)("li",{parentName:"ul"},"one role, that can have an arbitrary name as any other stakeholder role, must be available for the dependent to play. It is called the 'dependent-role'. The other roles are called 'guardian-roles'.")),(0,r.kt)("h4",{id:"run-time-guardianship-arrangements"},"Run-time: Guardianship Arrangements"),(0,r.kt)("p",null,"The run-time aspect of guardianships is all about about the establishing, using and management of actual ",(0,r.kt)(s.Z,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianships arrangements"),". This includes the assignment of ",(0,r.kt)(s.Z,{popup:"Legal Entity (of a Jurisdiction): an Entity that is known by, recognized to exist, and registered in that Jurisdiction.",reference:"/framework/docs/terms/legal-entity",mdxType:"Term"},"legal entities")," to the various stakeholder roles, and the management of such assignments. It also includes the management of the actual rights and duties or such legal entities."),(0,r.kt)("p",null,"Typically, the ",(0,r.kt)(s.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction")," that enforces (and governs) a ",(0,r.kt)(s.Z,{popup:"Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them.",reference:"/framework/docs/terms/guardianship-type",mdxType:"Term"},"guardianship type")," has rules that specify the conditions that allow a guardianship arrangement of that type to be created, including the ",(0,r.kt)(s.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," that must do this. When a guardianship arrangement is established, it starts as a copy of the guardianship type that it instantiates. Then, the dependent-role is assigned to the legal entity that will be fulfilling that role (or more legal entities if that is appropriate). Similarly, most, if not all guardianship-roles are assigned to a legal entity. Note that the the rules that govern the guardianship arrangements may specify that a specific guardian-role is reserved for the party that manages the guardianship arrangement itself."),(0,r.kt)("p",null,"Next, every duty/right type can now be converted into a duty/right instance, by replacing the role names by the names of the legal entities that fulfill the role. For example, assume that a guardianship arrangement is established in which Dick is assigned the role of 'person placed under administration', Alice the 'financial administrator' and Joe is the 'judge', whose role is to manage and supervise the guardianship arrangement. Then, the rights and duties would become:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'"Alice must ensure that Dick has sufficient funds to pay for housing and food";'),(0,r.kt)("li",{parentName:"ol"},'"Dick may not enter into financial ',(0,r.kt)(s.Z,{popup:"Obligation (of a Party): an Objective that is Owned by that Party for producing a specific (set of) result(s) that are to be used (consumed) by that Party and/or other Parties.",reference:"/framework/docs/terms/obligation",mdxType:"Term"},"obligations"),'";'),(0,r.kt)("li",{parentName:"ol"},'"Alice has a right to look into, and transfer money out of any bank account of Dick";'),(0,r.kt)("li",{parentName:"ol"},'"Joe must establish the a compensation arrangement for Alice";'),(0,r.kt)("li",{parentName:"ol"},'"Every year, Alice must submit a written report to Joe in which (s)he accounts for all actions taken under the guardianship arrangement;'),(0,r.kt)("li",{parentName:"ol"},'"Joe must review the rights and duties of an arrangement each year and update them if such is needed to better realize the objectives for which the arrangement exists".')),(0,r.kt)("p",null,"In the session where the guardianship arrangement is established, these rights and duties may be reviewed and amended as appropriate. In our example, after having established the role assignments (and implicitly the initially associated duties and rights), Joe may decide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'to modify rule 3 to read: "Alice has a right to look into, and transfer money out of any bank account of Dick, except for Dick\'s savings account"'),(0,r.kt)("li",{parentName:"ul"},"to add a rule that says: \"Alice may only transfer funds out of Dick's savings account if that transfer has been explicitly approved by Dick.\nThis allows guardianship arrangements to be created and maintained in a way that is appropriate to the situation of all stakeholders.")),(0,r.kt)("p",null,"Note that in general, rights and duties may refer to entities other than the ",(0,r.kt)(s.Z,{popup:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",reference:"/framework/docs/terms/guardian",mdxType:"Term"},"guardian")," or ",(0,r.kt)(s.Z,{popup:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",reference:"/framework/docs/terms/dependent",mdxType:"Term"},"dependent"),", e.g. a third party against whom a right or duty may or must be exercised. Still, such rights and duties can only be formulated for entities that are recognized to exist, i.e. are legal entities for, the governing jurisdiction."))}g.isMDXComponent=!0}}]);