"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6466],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||n;return a?i.createElement(m,s(s({ref:t},h),{},{components:a})):i.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var i=a(7462),r=(a(7294),a(3905)),n=a(4996);const s={id:"pattern-jurisdiction",title:"Jurisdictions",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",termType:"pattern",term:"jurisdiction",formPhrases:"jurisdiction",status:"draft",grouptags:null,hoverText:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities.",date:20210601},o=void 0,l={unversionedId:"terms/pattern-jurisdiction",id:"terms/pattern-jurisdiction",title:"Jurisdictions",description:"Purpose",source:"@site/docs/terms/pattern-jurisdiction.md",sourceDirName:"terms",slug:"/terms/pattern-jurisdiction",permalink:"/framework/docs/terms/pattern-jurisdiction",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/pattern-jurisdiction.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1701419361,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{id:"pattern-jurisdiction",title:"Jurisdictions",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",termType:"pattern",term:"jurisdiction",formPhrases:"jurisdiction",status:"draft",grouptags:null,hoverText:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities.",date:20210601},sidebar:"essifLabSideBar",previous:{title:"Parties, Actors and Actions",permalink:"/framework/docs/terms/pattern-party-actor-action"},next:{title:"Guardianship",permalink:"/framework/docs/terms/pattern-guardianship"}},c={},h=[{value:"Purpose",id:"purpose",level:3},{value:"Introduction",id:"introduction",level:3},{value:"Formalized model",id:"formalized-model",level:3}],d={toc:h},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Jurisdiction pattern")," captures the concepts and relations that explain how one can perceive a generic ",(0,r.kt)("a",{href:"/framework/docs/terms/pattern-jurisdiction",hovertext:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities."},"jurisdiction"),", how it works, and how it can be put to use in ",(0,r.kt)("a",{href:"/framework/docs/terms/self-sovereign-identity",hovertext:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another."},"SSI contexts"),"."),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Many people are familiar with what we call ",(0,r.kt)("a",{href:"/framework/docs/terms/legal-jurisdiction",hovertext:"Legal Jurisdiction: a Jurisdiction that is governed/operated by a governmental body."},"legal jurisdictions"),", e.g. a government that has a ",(0,r.kt)("a",{href:"/framework/docs/terms/legal-system",hovertext:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified."},"legal system")," in place which it applies to ",(0,r.kt)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist."},"entities")," that it knows to exist in its ",(0,r.kt)("a",{href:"/framework/docs/terms/scope-of-control",hovertext:"Scope of Control (of a Party): the extent of the area or subject matter that the Party controls."},"scope of control"),"."),(0,r.kt)("p",null,"While differences exist, a legal jurisdiction typically has a ",(0,r.kt)("a",{href:"/framework/docs/terms/legal-system",hovertext:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified."},"legal system"),", i.e. a set of rules (laws, regulations, etc.) that it enforces (within the scope of control of the legal jurisdiction), and a mechanism for resolving conflicts. The rules typically apply to entities whose existence is known within the legal jurisdiction. For example: a refugee that asks for asylum would typically first need to be registered (which is: legally establishing its existence) before the application can even be considered. Such entities are generically known as ",(0,r.kt)("a",{href:"/framework/docs/terms/legal-entity",hovertext:"Legal Entity (of a Jurisdiction): an Entity that is known by, recognized to exist, and registered in that Jurisdiction."},"legal entities"),"."),(0,r.kt)("p",null,"If we leave out the adjective 'legal', we can still say that anything that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"has a ",(0,r.kt)("a",{href:"/framework/docs/terms/legal-system",hovertext:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified."},"legal system"),", i.e. set of rules, an enforcement mechanism and a conflict resolving mechanism,"),(0,r.kt)("li",{parentName:"ul"},"operates that legal system in a scope that it ",(0,r.kt)("a",{href:"/framework/docs/terms/controller",hovertext:"Controller (of an Entity): the role that an Actor performs as it is executing actions on that Entity for the purpose of ensuring that the Entity will act/behave, or be used, in a particular way."},"controls"),", and"),(0,r.kt)("li",{parentName:"ul"},"applies these rules to ",(0,r.kt)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist."},"entities")," that it knows to exist (i.e. that are 'registered' in its ",(0,r.kt)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party."},"knowledge"),")\nwould also qualify as a ",(0,r.kt)("a",{href:"/framework/docs/terms/pattern-jurisdiction",hovertext:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities."},"jurisdiction"),", albeit not a legal jurisdiction.")),(0,r.kt)("p",null,"Note that every jurisdiction is also a ",(0,r.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", because it has its own ",(0,r.kt)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party."},"knowledge")," that it autonomously ",(0,r.kt)("a",{href:"/framework/docs/terms/management",hovertext:"Management: the act or process of managing or actually realizing of (the results associated with) a set of Objectives by the Owner of these Objectives."},"manages"),". This knowledge contains the rules it seeks to enforce, the rules and other guidance for maintaining and actually enforcing these rules, and for resolving conflicts. It also comprises a registration also of the ",(0,r.kt)("a",{href:"/framework/docs/terms/legal-entity",hovertext:"Legal Entity (of a Jurisdiction): an Entity that is known by, recognized to exist, and registered in that Jurisdiction."},"(legal) entities")," that the rules apply to."),(0,r.kt)("p",null,"And indeed, when we apply this criterion we can see that jurisdictions are abundant:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/framework/docs/terms/organization",hovertext:"Organization: a Party that is capable of setting Objectives and making sure these are realized by Actors that it has Onboarded and/or by (vetted) Parties that are committed to contribute to these Objectives."},"organizations")," habitually will have rules (business policies) in place, enforce them (to some extent), and have ways of resolving conflicts, and therefore would habitually qualify. Specifically, multi-nationals are known to operate multiple jurisdictions, aligning the rules and scopes with those of other (often legal) jurisdictions for the purpose of preventing situations in which conflicting rules apply, which would lead to many effort-intensive conflict-resolution cases."),(0,r.kt)("li",{parentName:"ul"},"NGOs, that may run aid-projects, refugee-camps etc., ensure that a set of rules apply within the scopes of such projects and camps, and arrange for (internal) conflicts to be resolved. Hence they qualify"),(0,r.kt)("li",{parentName:"ul"},"All sorts of clubs (sports, leisure, ...) have rules, means to enforce them, and a conflict resolution means which they operate within the scope of the locations they control and/or their activities."),(0,r.kt)("li",{parentName:"ul"},"Families qualify as well: the parents make the rules, enforce them, and resolve conflicts."),(0,r.kt)("li",{parentName:"ul"},"Even individual persons (which qualify as ",(0,r.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"parties"),"), have their own 'scope of control', within which they work according to their own rules (e.g. morals, ethics, preferred ways of working), enforce them (pretty much automatically), and resolve any conflicts (e.g. personal problems that may arise when their rules/habits conflict with what their spouse, employer, any else requires them to do). Saying that an individual operates a (personal) 'legal system' within its scope of control is aligned with the ideas human rights that say humans are 'self sovereign'.")),(0,r.kt)("p",null,"From the above, one might even be inclined to think that ",(0,r.kt)("em",{parentName:"p"},"every")," ",(0,r.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," qualifies as a ",(0,r.kt)("a",{href:"/framework/docs/terms/pattern-jurisdiction",hovertext:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities."},"jurisdiction"),". While we think that the vast majority of them are (we have no examples to the contrary), we see no relevance in actually stating this."),(0,r.kt)("p",null,"Note that while a ",(0,r.kt)("a",{href:"/framework/docs/terms/pattern-jurisdiction",hovertext:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities."},"jurisdiction")," is a ",(0,r.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", a jurisdiction may also be owned by a (different) party, and it makes sense to distinguish between them. For example, a multinational organization may own subsidiaries in different countries, each of which could be a jurisdiction in their own right, for the purpose of aligning their rules of operation with the local legal jurisdiction. e.g. for organizations."),(0,r.kt)("h3",{id:"formalized-model"},"Formalized model"),(0,r.kt)("p",null,"Here is a visual representation of this pattern, using the following ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../notations-and-conventions#pattern-diagram-notations"},"notations and conventions")),":"),(0,r.kt)("img",{alt:"Conceptual model of the 'Jurisdiction' pattern",src:(0,n.Z)("images/patterns/pattern-jurisdiction.png")}),(0,r.kt)("p",null,"The figure shows that a ",(0,r.kt)("a",{href:"/framework/docs/terms/pattern-jurisdiction",hovertext:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities."},"jurisdiction")," is ",(0,r.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", and is also owned by a ",(0,r.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," (that may be the jurisdiction itself, or another party). This implies that a jurisdiction has ",(0,r.kt)("a",{href:"/framework/docs/terms/objective",hovertext:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action)."},"objectives")," to pursue, and ",(0,r.kt)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party."},"knowledge")," to govern."),(0,r.kt)("p",null,"While the figure does not make this explicit, the knowledge contains the rules that apply to the legal entities - the entities that the jurisdiction knows to exist (i.e. has registered in its knowledge), as well as the rules and ",(0,r.kt)("a",{href:"/framework/docs/terms/policy",hovertext:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party."},"policies")," for maintaining the rule set, enforcing the rules, and resolving conflicts. The latter three are the constituents of the ",(0,r.kt)("a",{href:"/framework/docs/terms/legal-system",hovertext:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified."},"legal system")," that the jurisdiction operates within its ",(0,r.kt)("a",{href:"/framework/docs/terms/scope-of-control",hovertext:"Scope of Control (of a Party): the extent of the area or subject matter that the Party controls."},"scope of control"),"."))}p.isMDXComponent=!0}}]);