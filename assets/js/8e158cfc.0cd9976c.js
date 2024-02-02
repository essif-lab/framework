"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[8616],{4268:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>h,toc:()=>c});var i=a(7624),s=a(2172),n=a(964);const r={id:"pattern-identity",displayed_sidebar:"essifLabSideBar",termType:"pattern",term:"identity",formPhrases:["identity-pattern"],status:"reviewable",grouptags:null,glossaryTerm:"Identity Pattern",glossaryText:"a set of [concepts](@) and other [semantic units](@) that can be used to explain how [digital identities](identity@) work, how this relates to (attributes in) [credentials](@), and how all this can be made to work in [SSI](@) contexts.",hoverText:"The eSSIF-Lab Identity Pattern shows how digital identities work, how this relates to (attributes in) credentials, and how all this can be made to work in SSI contexts.",date:20210803},o="Identity Pattern",h={id:"terms/pattern-identity",title:"Identity Pattern",description:"This is work in progress, and needs to be reviewed.  If you want to comment, please raise an issue.",source:"@site/docs/terms/pattern-identity.md",sourceDirName:"terms",slug:"/terms/pattern-identity",permalink:"/framework/docs/terms/pattern-identity",draft:!1,unlisted:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/pattern-identity.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1706094108,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{id:"pattern-identity",displayed_sidebar:"essifLabSideBar",termType:"pattern",term:"identity",formPhrases:["identity-pattern"],status:"reviewable",grouptags:null,glossaryTerm:"Identity Pattern",glossaryText:"a set of [concepts](@) and other [semantic units](@) that can be used to explain how [digital identities](identity@) work, how this relates to (attributes in) [credentials](@), and how all this can be made to work in [SSI](@) contexts.",hoverText:"The eSSIF-Lab Identity Pattern shows how digital identities work, how this relates to (attributes in) credentials, and how all this can be made to work in SSI contexts.",date:20210803},sidebar:"essifLabSideBar",previous:{title:"Terminology Pattern",permalink:"/framework/docs/terms/pattern-terminology"},next:{title:"Identification Pattern",permalink:"/framework/docs/terms/pattern-identification"}},d={},c=[{value:"Purpose",id:"purpose",level:3},{value:"Introduction",id:"introduction",level:3},{value:"Formalized model",id:"formalized-model",level:3},{value:"Identity - Information Realm",id:"identity---information-realm",level:3},{value:"Identity - Data Realm",id:"identity---data-realm",level:3}];function l(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"identity-pattern",children:"Identity Pattern"}),"\n",(0,i.jsx)(t.admonition,{title:"Editor's note",type:"info",children:(0,i.jsxs)(t.p,{children:["This is work in progress, and needs to be reviewed.  If you want to comment, please ",(0,i.jsx)(t.a,{href:"https://github.com/essif-lab/framework/issues/new",children:"raise an issue"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Identity pattern"})," captures the concepts and relations that explain how digital identities work, how this relates to (attributes in) ",(0,i.jsx)("a",{href:"/framework/docs/terms/credential",hovertext:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",children:"credentials"}),", and how all this can be made to work in ",(0,i.jsx)("a",{href:"/framework/docs/terms/self-sovereign-identity",hovertext:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",children:"SSI contexts"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["The term 'identity' is ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Identity",children:"used in many ways"})," in different contexts, and is often related to intangibles, such as feelings, emotions, ideas of belonging, and the like. However, in ",(0,i.jsx)("a",{href:"/framework/docs/terms/self-sovereign-identity",hovertext:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",children:"SSI contexts"}),", we need to work with tangible things - specifically: data that can be issued, stored, processed, transferred, requested and obtained. Still, in such contexts, we have observed that people use the term 'identity' to refer to various concepts/ideas, e.g.:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["a string of alphanumeric characters that can be used to ",(0,i.jsx)("a",{href:"/framework/docs/terms/identifier",hovertext:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",children:"identify"})," someone, e.g. a name or an identification number (in general: an ",(0,i.jsx)("a",{href:"/framework/docs/terms/identifier",hovertext:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",children:"identifier"}),"),"]}),"\n",(0,i.jsxs)(t.li,{children:["a (coherent) set of ",(0,i.jsx)("a",{href:"/framework/docs/terms/assertion",hovertext:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",children:"assertions"})," (statements, claims) about someone, represented as data, e.g. digital, or in print, usually including an ",(0,i.jsx)("a",{href:"/framework/docs/terms/identifier",hovertext:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",children:"identifier"})," of some kind;"]}),"\n",(0,i.jsx)(t.li,{children:"an artifact that contains such data, e.g. a passport, a (digitally signed) credential."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["(Digital) identities, or personal data, are often associated with the ability to ",(0,i.jsx)("a",{href:"/framework/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns.",children:"identify"})," a person. ",(0,i.jsx)(t.a,{href:"https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf",children:"Pfitzmann and Hansen, 2010"}),", who tried to come up with a consolidated set of terms for identity and privacy, say that 'identity' is ",(0,i.jsx)(t.em,{children:"a subset of attribute values of a person which sufficiently identifies this person within any set of persons"}),". The ",(0,i.jsx)(t.a,{href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e1489-1-1",children:"GDPR definition of personal data"}),' is "',(0,i.jsxs)(t.em,{children:["any information relating to an identified or identifiable natural person ('data ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),"'); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person"]}),'".']}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)("a",{href:"/framework/docs/terms/definition",hovertext:"Definition: a text that helps Parties to have the same understanding about the meaning of (and Concept behind) a Term, ideally in such a way that these Parties can determine whether or not they make the same distinction.",children:"Definitions"})," such as these have various difficulties, perhaps the most prominent of which is that they do not provide a criterion that different people can use for determining whether or not something qualifies as an 'identity', and be in agreement on that. As a consequence, the relevance of having an identity, particularly in an ",(0,i.jsx)("a",{href:"/framework/docs/terms/self-sovereign-identity",hovertext:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",children:"SSI context"}),", is not clear. Therefore, rather than searching for an answer to the question what an identity is, or should be, this ",(0,i.jsx)("a",{href:"/framework/docs/terms/pattern",hovertext:"Pattern (also: Mental Model): A description, both casual and formal, of a set of Concepts (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.",children:"pattern"})," seeks to identify the ",(0,i.jsx)("a",{href:"/framework/docs/terms/concept",hovertext:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",children:"concepts"})," (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about who or what an ",(0,i.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," actually ",(0,i.jsx)(t.em,{children:"is"}),". Readers that are interested in ",(0,i.jsx)("a",{href:"/framework/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns.",children:"identification"})," aspects are kindly referred to the ",(0,i.jsx)("a",{href:"/framework/docs/terms/pattern-identification",hovertext:"The eSSIF-Lab Identification Pattern describes mechanisms that a Party uses to Identify Entities, and mechanisms for communicating with another Party such that both Parties can identify an entity and know whether or not they identify the same entity.",children:"identification pattern"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The figure below illustrates the concept of/idea that the ",(0,i.jsx)(t.em,{children:"being"})," of a person, i.e. who the person is, is determined by everyone that has ideas, or knows about this person. This seems to be very much in line with the paradigm of ",(0,i.jsx)(t.a,{href:"https://aeon.co/essays/the-self-is-not-singular-but-a-fluid-network-of-identities",children:"identity as a network"}),', as worked out by Kathleen Wallace: "',(0,i.jsx)(t.a,{href:"https://www.routledge.com/The-Network-Self-Relation-Process-and-Personal-Identity-1st-Edition/Wallace/p/book/9780367077488",children:"The Network Self"}),'".']}),"\n",(0,i.jsxs)(t.p,{children:["In our model, we postulate that ",(0,i.jsx)("a",{href:"/framework/docs/terms/identity",hovertext:"Identity (of an Entity): the combined Knowledge about that Entity of all Parties, i.e. the union of all Partial Identities of which that Entity is the Subject.",children:"identity"})," is related to who or what an ",(0,i.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," actually ",(0,i.jsx)(t.em,{children:"is"}),", and that this is the combined perception (",(0,i.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"}),") of all ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"})," that know about that entity's existence."]}),"\n",(0,i.jsx)("img",{alt:"Various partial identities for subject Piet van der Kluns, including a self-identity",src:(0,n.c)("images/essif-lab-partial-identities.png")}),"\n",(0,i.jsxs)(t.p,{children:["The figure has a person in its center (the 'protagonist' of the example) calls himself Piet van der Kluns, and perceives himself as being 28 years old, humorous and sporty. The other figures (a judge, a photographer, a colleague, and a mechanic) represent ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"}),", each of which has its own view on the protagonist. The photographer finds him expressionless and dull, his colleague considers Piet to be reliable and helpful. They all have their own, subjective view on the protagonist, which can be expressed in terms of judgements and characteristics that they attribute to the protagonist. The number of parties that know about the protagonist will initially be very small, but will become larger over time. Also, the judgements and characteristics that parties attribute to the protagonist will develop and change over time."]}),"\n",(0,i.jsxs)(t.p,{children:["It seems reasonable to say that the set of all judgements and characteristics that parties have attributed to the protagonist at some point in time represent who or what that protagonist actually ",(0,i.jsx)(t.em,{children:"is"})," (at that time), and we might call that its ",(0,i.jsx)("a",{href:"/framework/docs/terms/identity",hovertext:"Identity (of an Entity): the combined Knowledge about that Entity of all Parties, i.e. the union of all Partial Identities of which that Entity is the Subject.",children:"identity"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["However, this term has little practical relevance. First, the ",(0,i.jsx)("a",{href:"/framework/docs/terms/semantics",hovertext:"Semantics: a mapping between the (tangible/textual) Terms and (intangible) ideas/Concepts - their meaning.",children:"semantics"})," of any attribution is (autonomously) decided by the attributing ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),", implying that attributes of different parties cannot be readily compared. The figure illustrates this by having the mechanic judge the protagonist to be unreliable, whereas the colleague finds him reliable. But even if parties agree, e.g. the photographer and mechanic both characterize the protagonist as a customer, but it does mean different things. While for a photographer, a customer is a person that it can instruct to sit down, perhaps do some make-up on, and take a picture of, this is not the case for a mechanic."]}),"\n",(0,i.jsxs)(t.p,{children:["More importantly, in interactions between the protagonist and an arbitrary ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),", the latter will act, and make decisions using only its own, subjective ",(0,i.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"}),". Any information about the protagonist that is used for that must therefore come from the part of the protagonist's identity that is also part of that ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party's"})," ",(0,i.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"}),". We will use the term ",(0,i.jsx)("a",{href:"/framework/docs/terms/partial-identity",hovertext:"Partial identity (of an Entity): all Knowledge that a specific Party (= the Owner of the partial identity) has about that Entity (= the 'Subject' of the partial identity).",children:"partial identity"})," of some ",(0,i.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," as the ",(0,i.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"})," that a specific ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," has about that ",(0,i.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"}),". It implies that the identity of such an entity is the union of all of its partial identities."]}),"\n",(0,i.jsxs)(t.p,{children:["This use of attributions is particularly relevant for ",(0,i.jsx)("a",{href:"/framework/docs/terms/self-sovereign-identity",hovertext:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",children:"SSI contexts"})," in which the focus is on supporting (electronic) ",(0,i.jsx)("a",{href:"/framework/docs/terms/transaction",hovertext:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",children:"transactions"}),". That support consists, amongst other things, of enabling a participating ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," to request for, and obtain data that are statements about ",(0,i.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entities"})," (in particular about other participating parties) that this party determines to be ",(0,i.jsx)("a",{href:"/framework/docs/terms/validate",hovertext:"Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party.",children:"valid"})," for making the decision of whether or not to commit. Knowing the ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," that authored (issued) such data helps to determine not only the meaning of that data, but also to determine its (un)trustworthiness. Knowing that a set of data originates from a single partial identity is a prerequisite for doing this."]}),"\n",(0,i.jsx)(t.h3,{id:"formalized-model",children:"Formalized model"}),"\n",(0,i.jsxs)(t.p,{children:["Here is a visual representation of this pattern, using the following ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"../notations-and-conventions#pattern-diagram-notations",children:"notations and conventions"})}),":"]}),"\n",(0,i.jsx)("img",{alt:"Conceptual model of the 'Identity' pattern",src:(0,n.c)("images/patterns/pattern-identity.png")}),"\n",(0,i.jsxs)(t.p,{children:["The figure makes a strict distinction between (intangible) information concepts, which are presented in the purple area called 'information realm', and (tangible) data concepts, presented in the green 'data realm'. This enables us to link (tangible) data items that can be created, stored, processed, requested and obtained between (",(0,i.jsx)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",children:"actors"})," of) various ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"})," with the (",(0,i.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"})," of) these parties, where actual decisions are being made. For details about ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"}),", ",(0,i.jsx)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",children:"actors"})," and ",(0,i.jsx)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",children:"actions"})," and their relations, please refer to the ",(0,i.jsx)("a",{href:"/framework/docs/terms/pattern-party-actor-action",hovertext:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",children:"party-actor-action pattern"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"identity---information-realm",children:"Identity - Information Realm"}),"\n",(0,i.jsxs)(t.p,{children:["The figure expresses that an ",(0,i.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," that is known to a ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," can be attributed characteristics, the precise nature of which is defined and determined in the ",(0,i.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"})," of that party. The ",(0,i.jsx)("a",{href:"/framework/docs/terms/partial-identity",hovertext:"Partial identity (of an Entity): all Knowledge that a specific Party (= the Owner of the partial identity) has about that Entity (= the 'Subject' of the partial identity).",children:"partial identity"})," of which that entity is the ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),", is comprised of every characteristic that the party has attributed to. We also hold that parties will associate each such attribution with a level of certainty, i.e. a measure of the strength of their belief that the attribution is correct. Such a level of certainty helps parties to determine whether or not the characteristic can be used for making certain decisions (i.e. is ",(0,i.jsx)("a",{href:"/framework/docs/terms/validate",hovertext:"Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party.",children:"valid"})," in arguments leading to such decisions)."]}),"\n",(0,i.jsxs)(t.p,{children:["Hence, the partial identity is part of the knowledge of that party, which implies that the party ",(0,i.jsx)("a",{href:"/framework/docs/terms/owner",hovertext:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",children:"owns"})," the partial identity, and governs it."]}),"\n",(0,i.jsxs)(t.p,{children:["By saying that a ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," is also an ",(0,i.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"}),", it follows that if it knows itself to exist, it can attribute characteristics to itself, and hence have a partial identity for which it is the ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For completeness sake, the figure shows that the ",(0,i.jsx)("a",{href:"/framework/docs/terms/identity",hovertext:"Identity (of an Entity): the combined Knowledge about that Entity of all Parties, i.e. the union of all Partial Identities of which that Entity is the Subject.",children:"identity"})," of which the entity is the ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"})," is comprised of all partial identities of which that entity is the ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),", including the partial identity for which it is the ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),". The figure thus (correctly) suggests that this term, while it can be properly defined, has no further relevance - at least not for our purposes."]}),"\n",(0,i.jsxs)(t.p,{children:["The last item in the information realm is the ",(0,i.jsx)("a",{href:"/framework/docs/terms/identifier",hovertext:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",children:"identifier"})," concept, which is better explained in the ",(0,i.jsx)("a",{href:"/framework/docs/terms/pattern-identification",hovertext:"The eSSIF-Lab Identification Pattern describes mechanisms that a Party uses to Identify Entities, and mechanisms for communicating with another Party such that both Parties can identify an entity and know whether or not they identify the same entity.",children:"identification pattern"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Notice that the ",(0,i.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"})," of a ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," defines (specifies, contains) whatever there is to know. This includes a specification of characteristics, the meaning and allowed values for the levels of certainty, the kinds of identifiers to use in various circumstances, etc. Also, this knowledge contains the set of (all) ",(0,i.jsx)("a",{href:"/framework/docs/terms/identifier",hovertext:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",children:"identifiers"})," that the party has defined/created itself for ",(0,i.jsx)("a",{href:"/framework/docs/terms/identifier",hovertext:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",children:"identifying"})," ",(0,i.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entities"})," in various circumstances."]}),"\n",(0,i.jsxs)(t.p,{children:["Finally, the ",(0,i.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"})," of a ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," also holds the ",(0,i.jsx)("a",{href:"/framework/docs/terms/policy",hovertext:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party.",children:"policies"})," by which its ",(0,i.jsx)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",children:"actors"})," determine which values and which (predicate and ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),") identifiers to use for the creation of claims (attributes) and how to construct credentials from such attributes. While in general we would like to believe that an attribute that an ",(0,i.jsx)("a",{href:"/framework/docs/terms/agent",hovertext:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",children:"agent"})," of a ",(0,i.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," creates is a truthful representation of a characteristic in that party's knowledge (which is everything the party believes to be true), there is no guarantee for that. Parties may lie."]}),"\n",(0,i.jsx)(t.h3,{id:"identity---data-realm",children:"Identity - Data Realm"}),"\n",(0,i.jsxs)(t.p,{children:["In the data realm, the figure also shows that a ",(0,i.jsx)("a",{href:"/framework/docs/terms/credential",hovertext:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",children:"credential"})," consists of various claims, each of which represents a (possibly complex) statement about an ",(0,i.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," that is referred to as its ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),". To this end, the claim consists of a ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"})," identifier (which in practice may be implied - hence the 0..1 multiplicity), a(n identifier for the) predicate, which refers to the characteristic that is attributed to the ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),", and 0..n values that provide the details of the characteristic. For example, if the characteristic is 'level of trustworthiness', there would be one value that represents the level of trustworthiness. If the characteristic is 'is over 18 years old', then no value is required. If the characteristic is 'children', the value may be a list of data objects, each of which would represent a person that allegedly is a child of the ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["As said before, it is not self-evident that when a party creates attributes for some ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),", such attributes actually reflect the characteristics that the party believes to be true for that ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),". Parties may lie."]}),"\n",(0,i.jsxs)(t.p,{children:["Sets of claims can be aggregated, meta data can be added to that (e.g. signatures and other proofs) to form credentials of various kinds. While ideally a ",(0,i.jsx)("a",{href:"/framework/docs/terms/credential",hovertext:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",children:"credential"})," would represent a subset of the ",(0,i.jsx)("a",{href:"/framework/docs/terms/partial-identity",hovertext:"Partial identity (of an Entity): all Knowledge that a specific Party (= the Owner of the partial identity) has about that Entity (= the 'Subject' of the partial identity).",children:"partial identity"})," of its ",(0,i.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),", this can also not be guaranteed."]}),"\n",(0,i.jsx)(t.p,{children:"Digital signatures and other cryptographic proofs do not relate in any way to the truth of the information that the signed/proved data represents. However, they do serve other purposes. Under the assumption that there is no doubt that the private key that is used to digitally sign some data is under the exclusive control of a single party, the signature algorithm is secure and well-implemented, and the corresponding public key can reliably be dereferenced to that party, then that signature provides a proof of provenance of that data, as well a proof of immutability."})]})}function f(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2172:(e,t,a)=>{a.d(t,{I:()=>o,M:()=>r});var i=a(1504);const s={},n=i.createContext(s);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);