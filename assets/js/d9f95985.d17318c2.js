"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[7026],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>m});var o=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=o.createContext({}),h=function(t){var e=o.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},l=function(t){var e=h(t.components);return o.createElement(c.Provider,{value:e},t.children)},d="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=h(a),u=n,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||i;return a?o.createElement(m,r(r({ref:e},l),{},{components:a})):o.createElement(m,r({ref:e},l))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:n,r[1]=s;for(var h=2;h<i;h++)r[h]=a[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9317:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var o=a(7462),n=(a(7294),a(3905));const i={id:"action",title:"Action",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",termType:"concept",term:"action",formPhrases:"action{ss}, acting, activit{yies}",status:"draft",grouptags:null,hoverText:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",glossaryTerm:"Action",glossaryText:"something that is actually done (a 'unit of work' that is executed) by a single [actor](@) (on behalf of a given [party](@)), as a single operation, in a specific context.",date:20220324},r=void 0,s={unversionedId:"terms/action",id:"terms/action",title:"Action",description:"Short Description",source:"@site/docs/terms/action.md",sourceDirName:"terms",slug:"/terms/action",permalink:"/framework/docs/terms/action",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/action.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1701419361,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{id:"action",title:"Action",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",termType:"concept",term:"action",formPhrases:"action{ss}, acting, activit{yies}",status:"draft",grouptags:null,hoverText:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",glossaryTerm:"Action",glossaryText:"something that is actually done (a 'unit of work' that is executed) by a single [actor](@) (on behalf of a given [party](@)), as a single operation, in a specific context.",date:20220324},sidebar:"essifLabSideBar"},c={},h=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criterion",id:"criterion",level:3},{value:"Notes",id:"notes",level:3}],l={toc:h},d="wrapper";function f(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,o.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"short-description"},"Short Description"),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"Action")," is something that is actually done (a 'unit of work' that is executed) by a single ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor")," (on behalf of a given ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),"), as a single operation, in a specific context. It is characteristic for an ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," that can be done either completely or not at all; it cannot be executed for (say) 50% (that's what 'unit of work' refers to)."),(0,n.kt)("p",null,"During the time interval in which the ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," is executed, the ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor")," may still execute other ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"actions")," in other execution-contexts; this is often referred to as 'multi-tasking'."),(0,n.kt)("p",null,"The fact that an ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," can only be completely executed or not at all, makes ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"actions")," the basic building blocks of (information) processes: it is the smallest unit of work that its ",(0,n.kt)("a",{href:"/framework/docs/terms/owner",hovertext:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity."},"owner"),", i.e. the ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," on whose behalf it will be run, has decided to consider. Consequently, the ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," can attribute characteristics to its ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"actions"),", such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"rights and/or duties for executing the ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," (that can be assigned to individual (or groups of) ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actors"),"),")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"preconditions, postconditions and boundary conditions, that can be used for starting, deferring and stopping its execution,")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/framework/docs/terms/policy",hovertext:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party."},"policies"),", that provide ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actors")," that execute the ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," the necessary guidance regarding how to do the actual work,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"etc."),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("a",{parentName:"p",href:"pattern-party-actor-action@"},"Parties, Actors and Actions pattern")," provides an overview of how this concept fits in with related concepts."))),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The ability to distinguish between (non)actions allows one to determine which (kinds of) ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actors")," are capable of executing actions (e.g. by establishing that they have the competences required by the ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", which is part of their ",(0,n.kt)("a",{href:"/framework/docs/terms/onboarding",hovertext:"Onboarding (of an Actor, by a Party): a process that is run for this Actor on behalf of the Party, that terminates successfully if and  only if the Party has (a) established the suitability of the Actor for executing certain kinds of Actions on its behalf, (b) ensured that their mutual rights and duties are properly specified and will be appropriately enforced, and (c) provided the circumstances/contexts within which the Actor is enabled to do so."},"onboarding"),"), and as a consequence may be permitted and/or required to execute them. Also, this ability enables ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"parties")," to determine the execution-",(0,n.kt)("a",{href:"/framework/docs/terms/policy",hovertext:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party."},"policy"),", i.e. the set of rules, working-instructions, preferences and other guidance that ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actors")," should obey or comply with when executing an ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," on its behalf."),(0,n.kt)("h3",{id:"criterion"},"Criterion"),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"Action")," is something"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"that is actually done (a unit of work that is executed) by a single ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor")," (on behalf of a given ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),"), as a single operation, in a specific context;"),(0,n.kt)("li",{parentName:"ul"},"that is designed to be done either done completely or not at all (it cannot be done partially, e.g. for 50%);"),(0,n.kt)("li",{parentName:"ul"},"whose execution is primarily guided by a ",(0,n.kt)("a",{href:"/framework/docs/terms/policy",hovertext:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party."},"policy")," of the ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," on whose behalf it is executed;"),(0,n.kt)("li",{parentName:"ul"},"that typically produces a result that contributes to the realization of one or more ",(0,n.kt)("a",{href:"/framework/docs/terms/objective",hovertext:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action)."},"objectives")," of the ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),".")),(0,n.kt)("h3",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The same work can constitute an ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," for one ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", while it would not for another ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),". Consider the work associated with (a) drafting the contents of a letter of confirmation, (b) dating it, (c) signing it, (d) putting it in an envelope, (e) writing the destination address on the envelope, (f) affixing a stamp to the envelope if appropriate, and (g) handing it over to an internal or external postal service. One ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," may consider all this an indivisible amount of work that is always done by a single ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor"),", thereby qualifying the work as an ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action"),". Another ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," may decide that (a)-(c) is one ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action"),", and (d)-(g) is another action, thus allowing different ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actors")," to write and dispatch the letter.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Decision typically qualify as an ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action"),", and hence can be seen as a specialization thereof.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Specific kinds of ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"actions")," may be grouped together (at define/design time) in various ways to form e.g., workflows, a case-types, procedures, processes, etc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When an ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor")," is executing an ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," on behalf of a ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", we say that the ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor")," acts as the ",(0,n.kt)("a",{href:"/framework/docs/terms/agent",hovertext:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor)."},"agent")," of that ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", and the ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," fulfills the role of ",(0,n.kt)("a",{href:"/framework/docs/terms/principal",hovertext:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party)."},"principal")," for that ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor"),". See the ",(0,n.kt)("a",{parentName:"p",href:"pattern-party-actor-action@"},"parties, actors and action pattern")," for details.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," will typically only assign an ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor")," the task to execute an ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," after having ",(0,n.kt)("a",{href:"/framework/docs/terms/onboarding",hovertext:"Onboarding (of an Actor, by a Party): a process that is run for this Actor on behalf of the Party, that terminates successfully if and  only if the Party has (a) established the suitability of the Actor for executing certain kinds of Actions on its behalf, (b) ensured that their mutual rights and duties are properly specified and will be appropriately enforced, and (c) provided the circumstances/contexts within which the Actor is enabled to do so."},"onboarded")," that ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor")," and having ensured the ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor")," has been provided the means to successfully do so.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"While the way an ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," is executed is primarily guided by a ",(0,n.kt)("a",{href:"/framework/docs/terms/policy",hovertext:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party."},"policy")," of its ",(0,n.kt)("a",{href:"/framework/docs/terms/owner",hovertext:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity."},"owner")," (i.e. the ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," on whose behalf the ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"action")," is executed), the ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor")," that executes it may have additional ",(0,n.kt)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party."},"knowledge")," that it can tap into, and use it where the ",(0,n.kt)("a",{href:"/framework/docs/terms/policy",hovertext:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party."},"policy")," of the ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," does not provide (sufficient) guidance. For example, a ",(0,n.kt)("a",{href:"/framework/docs/terms/policy",hovertext:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party."},"policy")," would typically prescribe the structure of a letter of confirmation, but leave it to (additional ",(0,n.kt)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party."},"knowledge")," that) the ",(0,n.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor")," (can tap into) to fill in the details.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The result of an action is typically something that contributes to the realization of an ",(0,n.kt)("a",{href:"/framework/docs/terms/objective",hovertext:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action)."},"objective")," of the ",(0,n.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," on whose behalf it was executed. As such, ",(0,n.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"actions")," can be considered part of processes that ",(0,n.kt)("a",{href:"/framework/docs/terms/management",hovertext:"Management: the act or process of managing or actually realizing of (the results associated with) a set of Objectives by the Owner of these Objectives."},"manage")," that ",(0,n.kt)("a",{href:"/framework/docs/terms/objective",hovertext:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action)."},"objective"),". The ",(0,n.kt)("a",{parentName:"p",href:"pattern-governance-and-management@"},"governance and management pattern")," has more on this."))))}f.isMDXComponent=!0}}]);