"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=m(a),l=s,f=h["".concat(c,".").concat(l)]||h[l]||d[l]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=l;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:s,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}l.displayName="MDXCreateElement"},5525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(7462),s=(a(7294),a(3905));const r={id:"semantics",displayed_sidebar:"essifLabSideBar",scopetag:"essifLabTerminology",termType:"concept",term:"semantics",formPhrases:["semantics"],status:"draft",grouptags:null,hoverText:"Semantics: a mapping between the (tangible/textual) Terms and (intangible) ideas/Concepts - their meaning.",glossaryTerm:"Semantics",glossaryText:"a mapping between the (tangible/textual) [term](@) and (intangible) ideas/[concept](@) - their meaning.",date:20210601},i="Semantics",o={unversionedId:"terms/semantics",id:"terms/semantics",title:"Semantics",description:"Short Description",source:"@site/docs/terms/semantics.md",sourceDirName:"terms",slug:"/terms/semantics",permalink:"/framework/docs/terms/semantics",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/semantics.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1704368533,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"semantics",displayed_sidebar:"essifLabSideBar",scopetag:"essifLabTerminology",termType:"concept",term:"semantics",formPhrases:["semantics"],status:"draft",grouptags:null,hoverText:"Semantics: a mapping between the (tangible/textual) Terms and (intangible) ideas/Concepts - their meaning.",glossaryTerm:"Semantics",glossaryText:"a mapping between the (tangible/textual) [term](@) and (intangible) ideas/[concept](@) - their meaning.",date:20210601},sidebar:"essifLabSideBar"},c={},m=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3}],p={toc:m},h="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"semantics"},"Semantics"),(0,s.kt)("h3",{id:"short-description"},"Short Description"),(0,s.kt)("p",null,"We use the term ",(0,s.kt)("strong",{parentName:"p"},"semantics")," to refer to the mapping between (tangible) ",(0,s.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"terms")," and (intangible) ",(0,s.kt)("a",{href:"/framework/docs/terms/concept",hovertext:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," (their meaning, the ideas behind it). Semantics are scoped, i.e. every ",(0,s.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope")," has its own semantic mapping. This implies that every ",(0,s.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," has - and maintains - its own (subjective) semantics, which is its subjective mapping of a set of terms onto the concepts/ideas in its ",(0,s.kt)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party."},"knowledge"),". The (erroneous) assumption that ",(0,s.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"parties")," would (automagically) share a semantics is the cause of many misunderstandings, and hence should be identified and deleted as soon as possible."),(0,s.kt)("p",null,"In the ",(0,s.kt)("a",{parentName:"p",href:"pattern:terminology@"},"terminology pattern"),", the relation ",(0,s.kt)("inlineCode",{parentName:"p"},"refers to")," from ",(0,s.kt)("a",{href:"/framework/docs/terms/scoped-term",hovertext:"Scoped Term: a Term, the meaning of which is determined by the Definition to which it refers in a specific Scope/context."},"scoped term")," to ",(0,s.kt)("a",{href:"/framework/docs/terms/concept",hovertext:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," represents the semantics of ",(0,s.kt)("a",{href:"/framework/docs/terms/scoped-term",hovertext:"Scoped Term: a Term, the meaning of which is determined by the Definition to which it refers in a specific Scope/context."},"scoped terms"),"."),(0,s.kt)("h3",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,"The ability to distinguish between (non)semantics helps us to better understand one another, because it makes one aware of the fact that semantics is subjective, and its owner can update it. This allows such an owner to (temporarily) use terms in the same meaning as another ",(0,s.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", specifically if they agree to use ",(0,s.kt)("a",{href:"/framework/docs/terms/definition",hovertext:"Definition: a text that helps Parties to have the same understanding about the meaning of (and Concept behind) a Term, ideally in such a way that these Parties can determine whether or not they make the same distinction."},"good definitions"),"."),(0,s.kt)("h3",{id:"criteria"},"Criteria"),(0,s.kt)("p",null,"A semantics is a mapping, in a specific ",(0,s.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope"),", between (tangible) ",(0,s.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"terms")," and (intangible) ",(0,s.kt)("a",{href:"/framework/docs/terms/concept",hovertext:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," (their meaning, the ideas behind it)."))}d.isMDXComponent=!0}}]);