"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[7485],{3466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=n(4345),r=["components"],c={id:"concept",title:"Concept",scopeid:"essifLabTerminology",type:"concept",typeid:"concept",stage:"draft",hoverText:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",glossaryText:"the ideas/thoughts behind a classification of %%entities^entity%% (what makes %%entities^entity%% in that class 'the same').",date:20210601},l=void 0,p={unversionedId:"terms/concept",id:"terms/concept",title:"Concept",description:"Short Description",source:"@site/docs/terms/concept.md",sourceDirName:"terms",slug:"/terms/concept",permalink:"/framework/docs/terms/concept",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/concept.md",tags:[],version:"current",frontMatter:{id:"concept",title:"Concept",scopeid:"essifLabTerminology",type:"concept",typeid:"concept",stage:"draft",hoverText:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",glossaryText:"the ideas/thoughts behind a classification of %%entities^entity%% (what makes %%entities^entity%% in that class 'the same').",date:20210601}},h={},d=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Examples",id:"examples",level:3},{value:"Related Concepts",id:"related-concepts",level:3},{value:"Domains",id:"domains",level:3},{value:"Tags",id:"tags",level:3},{value:"Use-cases",id:"use-cases",level:3},{value:"Notes",id:"notes",level:3},{value:"Footnotes",id:"footnotes",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"short-description"},"Short Description"),(0,o.kt)("p",null,"A Concept tries to capture the idea behind a classification of entities",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", allowing us to reason about everything in the class as if it were one thing. For example, the ideas (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mental_representation"},"mental representations"),") you have when processing the sentences \"I can drink beer from a beer glass' and 'I can drink beer from a coffee mug' shows that the concepts that are behind 'beer glass' and 'coffee mug' differ. Note that in order to communicate about this idea, we also need a word or phrase (i.e.: a termat we can use to refer to (instances of) this idea."),(0,o.kt)("p",null,"The ",(0,o.kt)(s.Z,{popup:"The eSSIF-Lab Terminology Pattern describes the relations between Terminology Terms such as 'Concept', 'Term', 'Pattern', 'Mental Model', 'Glossary' etc.",reference:"/framework/docs/terms/pattern-terminology",mdxType:"Term"},"terminology pattern")," provides an overview of how this concept fits in with related concepts."),(0,o.kt)("h3",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"Working together is easier when you and your peers share the same ideas. We need a way to test and ensure, that you and your peers ",(0,o.kt)("em",{parentName:"p"},"actually")," have the same understanding, for the purpose of making cooperation easier. Doing so is expected to not only reduce the number of terminological discussions, but also improve the efficiency and effectiveness of the remaining discussions."),(0,o.kt)("h3",{id:"criteria"},"Criteria"),(0,o.kt)("p",null,"A (description/specification of a) Concept MUST be ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions"},"intensionally defined"),", i.e. associated with a criterion that can be used to determine whether or not someone or something qualifies as (an instance of) that Concept, and that has the property that it has been shown that the vast majority of contributors and other users apply it in the same manner in different situations (i.e. they arrive at the same conclusion as to whether or not someone or something qualifies under that criterion in any given situation)."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"related-concepts"},"Related Concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(s.Z,{popup:"Term: a word or phrase that is used in at least one Scope/context to represent a specific Concept (and referring to its Definition).",reference:"/framework/docs/terms/term",mdxType:"Term"},"Term")," is a label that is used in some context to refer to a ",(0,o.kt)(s.Z,{popup:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",reference:"/framework/docs/terms/concept",mdxType:"Term"},"Concept"),"[^2], the set of entities that satisfy the concept's criteria, or an arbitrary element of that set. Different contexts may use different terms to refer to a single concept. In a single context, a single term should be used to refer to an individual concept."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(s.Z,{popup:"Scope: the extent of the area or subject matter (which we use to define Patterns, Concepts, Terms and Glossaries in).",reference:"/framework/docs/terms/scope",mdxType:"Term"},"Scope")," is related in several ways. First, there is (precisely, or at most one) Scope that governs the definition/specification of the Concept. Second, there may be (any number of) Scopes that use the Concept, i.e. within which Terms are defined that refer to the Concept"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(s.Z,{popup:"Pattern (also: Mental Model): A description, both casual and formal, of a set of Concepts (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.",reference:"/framework/docs/terms/pattern",mdxType:"Term"},"Mental(or Conceptual) Model")," is a collection of concepts, relations between such concepts, and constraint rules that (elements of) such concepts and relations must satisfy. Such [models](https://en.wikipedia.org/wiki/Conceptual_model) are used to help people know, understand, or simulate a topic that the model represents.")),(0,o.kt)("h3",{id:"domains"},"Domains"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"essifLab"),(0,o.kt)("li",{parentName:"ul"},"ToIP"),(0,o.kt)("li",{parentName:"ul"},"Sovrin"),(0,o.kt)("li",{parentName:"ul"},"DIF"),(0,o.kt)("li",{parentName:"ul"},"NIST"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("h3",{id:"tags"},"Tags"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Terminology")),(0,o.kt)("h3",{id:"use-cases"},"Use-cases"),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("p",null,"There is an important ",(0,o.kt)("a",{parentName:"p",href:"https://simple.wikipedia.org/wiki/Concept"},"distinction between concepts and the (multitude of) terms")," (names, labels) that we need to be able to talk and reason (argue) about them. Please consider that"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"different terms are used in different contexts for the same concept"),(0,o.kt)("li",{parentName:"ul"},"in different contexts, a single term may refer to different concepts"),(0,o.kt)("li",{parentName:"ul"},"to resolve terminological disputes, which usually are about the 'correct' meaning of a term, try to establish the criteria that the different participants use for the concept behind the term. That helps participants understand each others (different) positions, and provides a better basis for resolving the conflict.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"footnotes"},"Footnotes"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"WikiPedia has a concise ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Concept"},"explanation of concepts"),". We use the term 'concept' as a ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mental_representation"},"mental representation"),".",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);