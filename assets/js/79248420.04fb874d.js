"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2456],{2244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>h,toc:()=>c});var a=n(7624),s=n(2172),i=n(964);const o={id:"notations-and-conventions",title:"Notations and Conventions",date:20210601},r=void 0,h={id:"notations-and-conventions",title:"Notations and Conventions",description:"This document provides an overview of the notations and conventions being used within eSSIF-Lab.",source:"@site/docs/notations-and-conventions.md",sourceDirName:".",slug:"/notations-and-conventions",permalink:"/framework/docs/notations-and-conventions",draft:!1,unlisted:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/notations-and-conventions.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1704368533,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"notations-and-conventions",title:"Notations and Conventions",date:20210601}},l={},c=[{value:"RFC 2119",id:"rfc-2119",level:3},{value:"Capitalization of words in mid-sentence",id:"capitalization-of-words-in-mid-sentence",level:3},{value:"Pattern diagram notations",id:"pattern-diagram-notations",level:3},{value:"Notational Exceptions",id:"notational-exceptions",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This document provides an overview of the notations and conventions being used within eSSIF-Lab."}),"\n",(0,a.jsx)(t.h3,{id:"rfc-2119",children:"RFC 2119"}),"\n",(0,a.jsxs)(t.p,{children:["We use keywords such as \u201cshall\u201d, \u201cshould\u201d, \u201cmay\u201d etc. as defined by ",(0,a.jsx)(t.a,{href:"https://www.ietf.org/rfc/rfc2119.txt",children:"RFC 2119"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"capitalization-of-words-in-mid-sentence",children:"Capitalization of words in mid-sentence"}),"\n",(0,a.jsxs)(t.p,{children:["A word in mid-sentence that is capitalized is a ",(0,a.jsx)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept.",children:"term"})," that has a ",(0,a.jsx)("a",{href:"/framework/docs/terms/definition",hovertext:"Definition: a text that helps Parties to have the same understanding about the meaning of (and Concept behind) a Term, ideally in such a way that these Parties can determine whether or not they make the same distinction.",children:"definition"})," in the ",(0,a.jsx)("a",{href:"/framework/docs/terms/corpus",hovertext:"Corpus (of Terminology): the documentation that describes the Knowledge around a set of Terms and Concepts.",children:"Corpus of Terminology"}),". This allows readers to distinguish between the more colloquial meanings of words (by not capitalizing them) and those that are actually defined. We appreciate any feedback regarding our (im)proper use of this kind of capitalization of words."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"We are working towards deprecating this convention, as we now have better ways of referring to words that are defined in the eSSIF-Lab Corpus."})}),"\n",(0,a.jsx)(t.h3,{id:"pattern-diagram-notations",children:"Pattern diagram notations"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)("a",{href:"/framework/docs/terms/pattern",hovertext:"Pattern (also: Mental Model): A description, both casual and formal, of a set of Concepts (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.",children:"Pattern"})," diagrams will be visualized in this document using a notation that is very similar to that used by ",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/",children:"UML"}),". The following diagram shows the various notations that we will be using that are basically taken from ",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/",children:"UML"}),". There are a few exceptions, that are not shown in the figure; they are explained at the end."]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("img",{alt:"Notations and conventions",src:(0,i.c)("images/essif-lab-notations-and-conventions.png")}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"rectangle"}),", e.g. 'Person', represents a (named) ",(0,a.jsx)("a",{href:"/framework/docs/terms/concept",hovertext:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",children:"concept"}),", or ",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/class.html",children:"entity-class"}),". The (operational) extension of a ",(0,a.jsx)("a",{href:"/framework/docs/terms/concept",hovertext:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",children:"concept"})," is the sets of its instances (for 'Person', the extension consists of the set of actual people of flesh and blood tha are in the scope of the model). The extensions of different concepts are disjunct (do not overlap), unless there is an 'ISA' relation between them (see below). When a rectangle is in a ",(0,a.jsx)(t.strong,{children:"coloured area that has a name"}),", it is a child (or part) of the concept with that name (see below)"]}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"solid line with a closed arrowhead"}),", e.g. 'owns', represents a (named) relation/",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/association.html",children:"association"})," between the two ",(0,a.jsx)("a",{href:"/framework/docs/terms/concept",hovertext:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",children:"concepts"})," it connects. The concept at the arrowhead ('House') is called the 'target ",(0,a.jsx)("a",{href:"/framework/docs/terms/concept",hovertext:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",children:"concept"}),"' (TGT) for that relation; the other ('Person') is called the 'source ",(0,a.jsx)("a",{href:"/framework/docs/terms/concept",hovertext:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",children:"concept"}),"' (SRC). The relation is labeled such that ",(0,a.jsx)(t.code,{children:"<SRC> <relation label> <TGT>"})," (Person owns House) suggests the phrase that describes the intension(al definition) of that relation. The (operational) extension of a relation embraces all pairs (SRC,TGT) for which the relation holds. In the example, it consists of all pairs (P,H), where P is a Person and H is a House, such that the phrase 'P owns H' is true."]}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"green name"})," at either ",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/association.html#association-end",children:"end of a relation/association"})," is what UML calls 'role'; this name may be used to refer to (an instance of) the ",(0,a.jsx)("a",{href:"/framework/docs/terms/concept",hovertext:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",children:"concept"})," at which the name is placed as it performs its/this role in this relation. In the figure, ",(0,a.jsx)(t.code,{children:"owner"})," is the role that a Person fulfills in the relation 'owns'. If we assert that a Person (P) is the owner of a specific House (H), or that House H is owned by Person P, this means that (P,H) is an element of the extension of the relation 'owns'."]}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"solid line with an open arrowhead"}),", represents a ",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/generalization.html",children:"generalization relation"}),". It can be read as ",(0,a.jsx)(t.code,{children:"<SRC> is a <TGT>"}),", and is therefore also referred to as an ISA-relation. The SRC of the relation is the specialization (subclass) of the TGT (which in turn is a generalization of SRC). This means that SRC satisfies all constraints that TGT satisfies, and also that SRC has all attributes (properties, characteristics) that TGT has. The figure shows 'Self Employed Retailer is a Person' as an example."]}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"line with a solid diamond"})," at one end represents a ",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/composition.html",children:"composition"})," relation. The element at the 'diamond-end' is called the 'parent', or the 'whole'. The other element is called the 'child' or the 'part'. A 'part' in a composition relation cannot be part of more than one 'whole'. Normally, if a 'whole' in a composition relation ceases to exist, then so do all of its composite parts. In the figure, at least one Bedroom and precisely one Living Room are parts of a (every) House. Obviously, if a House ceases to exist, then so do these rooms."]}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"line with a hollow diamond"})," at one end represents an ",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/aggregation.html",children:"aggregation"})," relation. The element at the 'diamond-end' is called the 'parent', or the 'whole'. The other element is called the 'child' or the 'part'. A 'part' can be a part in multiple aggregation relations, and hence be part of multiple 'wholes'. If a 'whole' in an aggregation relation ceases to exist, the parts typically continue their existence. In the figure, 'Documentation' (about a Building Type) is an aggregation of a 'User Manual' and at least one 'Technical Document'. Obviously, if the Documentation ceases to exist, then the 'User Manual' and 'Technical Documents' typically continue to exist."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"dashed line"})," with a pointed arrow (",(0,a.jsx)(t.code,{children:">"}),") represents a ",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/dependency.html",children:"dependency"}),", where  the SRC concept somehow depends on the TGT concept. The kind of dependency is specified by a ",(0,a.jsx)(t.code,{children:"<<text>>"}),". In the figure, we see a dependency relation relation ",(0,a.jsx)(t.code,{children:"<<instance>>"}),", indicating that 'House' is a specific instance of 'Building Type'."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"[n..m]"})," structure represents a ",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/multiplicity.html",children:"multiplicity"}),". When it appears"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"at the TGT end of a relation"}),", it means that for every SRC element there must be at least ",(0,a.jsx)(t.em,{children:"n"})," and at most ",(0,a.jsx)(t.em,{children:"m"})," TGT elements in the relation. For example, the [0..n] multiplicity in the 'owns' relation in the figure means that for every 'Person' element, there must be at least 0 and at most ",(0,a.jsx)(t.em,{children:"n"})," (i.e. any number) 'House' elements. Effectively, this says that every Person can own any number of Houses."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"at the SRC end of a relation"}),", it means that for every TGT element there must be at least ",(0,a.jsx)(t.em,{children:"n"})," and at most ",(0,a.jsx)(t.em,{children:"m"})," SRC elements in the relation. For example, the [0..1] multiplicity in the 'owns' relation in the figure means that for every 'House' element, there must be at least 0 and at most 1 'Person' elements. Effectively, this means that every House can be owned by at most 1 Person."]}),"\n",(0,a.jsxs)(t.li,{children:["is typically of any of the following forms (although there may be others, e.g. [1..2]):\n[0..1]: at most one;\n[1..1]: precisely one;\n[0..n]: any number - as this is not a constraint, this is the default multiplicity and may be omitted;\n[1..n]: at least one.\nNote that the term ",(0,a.jsx)(t.em,{children:"multiplicity"})," is distinct from ",(0,a.jsx)(t.em,{children:"cardinality"}),", the difference being that a cardinality states the ",(0,a.jsx)(t.em,{children:"actual"})," number of SRC/TGT elements that a specific TGT/SRC element has in a relation, whereas a multiplicity states the ",(0,a.jsx)(t.em,{children:"possible"})," number of such elements. In short, the multiplicity is the set of all possible cardinalities in a relation. We note this becaus it is common practice for people to use the term 'cardinality' where 'multiplicity' is intended."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["a ",(0,a.jsx)(t.strong,{children:"named and coloured area"}),", e.g. the green area named ",(0,a.jsx)(t.code,{children:"House Ownership"})," is the aggregate (Parent/Whole) of all concepts (rectangular elements) therein, which are its children/parts. This aggregate can be linked/associated with any other concept, including its children/parts."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"notational-exceptions",children:"Notational Exceptions"}),"\n",(0,a.jsxs)(t.p,{children:["The following notational conventions are not used by ",(0,a.jsx)(t.a,{href:"https://www.uml-diagrams.org/",children:"UML"}),", but are specific to our use."]}),"\n",(0,a.jsxs)(t.p,{children:["We use a ",(0,a.jsx)(t.strong,{children:"coloring convention"})," to distinguish between what is 'officially' part of the eSSIF-Lab models, and parts that are not."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"blue"})," is used to color the lines and other symbols that are part of the 'official' models. Typically, they are explicitly defined or otherwise explained, e.g. in a ",(0,a.jsx)("a",{href:"/framework/docs/terms/pattern",hovertext:"Pattern (also: Mental Model): A description, both casual and formal, of a set of Concepts (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.",children:"mental model"}),". Their definitions/meanings may differ from 'common knowledge'."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"red"})," is used to color the lines and other symbols that are part of our 'common knowledge', and hence need not be explicitly defined. They appear to explain where eSSIF-Lab models link to these commonly known/used concepts. We think of them as necessary in order to bridge possible gaps between 'common understanding' and the eSSIF-Lab ways of thinking. Whenever a 'red concept' is nevertheless defined, this is for the purpose of conveying what we conceive the 'common knowledge' to be."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["We use a ",(0,a.jsx)(t.strong,{children:"line typing convention"})," within a diagram, as follows:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"solid lines"})," are used for lines and other symbols that are part of the ",(0,a.jsx)("a",{href:"/framework/docs/terms/pattern",hovertext:"Pattern (also: Mental Model): A description, both casual and formal, of a set of Concepts (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.",children:"model"})," that is represented by the diagram;"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"dashed lines"})," are used for lines and other symbols that are (authoritatively) defined elsewhere.\nFor example, the concept ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," is authoritatively defined in the ",(0,a.jsx)("a",{href:"/framework/docs/terms/pattern-party-actor-action",hovertext:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",children:"party, actor and action pattern"}),", so the diagram there shows a solid (blue) line for that concept. It also appears in other diagrams, e.g. in the ",(0,a.jsx)("a",{href:"/framework/docs/terms/pattern-jurisdiction",hovertext:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities.",children:"jurisdiction pattern"}),", where the concept is represented with a (blue) dashed line."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>o});var a=n(1504);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);