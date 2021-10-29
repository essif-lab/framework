(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{234:function(e,t,a){"use strict";var n=a(0),o=a(20);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},235:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a(234),o=a(237);function r(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,i=r.forcePrependBaseUrl,s=void 0!==i&&i,c=r.absolute,p=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(o.b)(a))return a;if(s)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+m:m}(r,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},237:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}))},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return l}));var n=a(2),o=a(6),r=(a(0),a(231)),i=a(232),s=a.n(i),c=a(235),p={id:"pattern-party-actor-action",title:"Parties, Actors and Actions",scopeid:"essifLab",type:"pattern",typeid:"Party-actor-action",stage:"draft",hoverText:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",glossaryText:"'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",date:20210601},m={unversionedId:"terms/pattern-party-actor-action",id:"terms/pattern-party-actor-action",isDocsHomePage:!1,title:"Parties, Actors and Actions",description:"Summary",source:"@site/docs/terms/pattern-party-actor-action.md",slug:"/terms/pattern-party-actor-action",permalink:"/framework/docs/terms/pattern-party-actor-action",editUrl:"https://gitlab.grnet.gr/essif-lab/framework/-/tree/master/docs/terms/pattern-party-actor-action.md",version:"current",sidebar:"sidebar_for_essifLab",previous:{title:"Overview of eSSIF-Lab Mental Models",permalink:"/framework/docs/essifLab-pattern-list"},next:{title:"Jurisdictions",permalink:"/framework/docs/terms/pattern-jurisdiction"}},h=[{value:"Summary",id:"summary",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Formalized model",id:"formalized-model",children:[]},{value:"Footnotes",id:"footnotes",children:[]}],d={rightToc:h};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"summary"},"Summary"),Object(r.b)("p",null,'This pattern captures the essence of how things are done. It answers questions such as: "Who/what does things?", "How are their actions being guided/controlled?", "Who controls whom/what?", "Who/what may be held accountable?". These questions need to have a precise answer if you want to design or implement systems where actors can be anything, ranging from programs/apps running on computers as well as humans. This pattern provides a way of looking at organizations, people (human beings), and non-human actors. It shows how they interact with one another, and how they may or may not work for one another. The pattern descibes how parties are \'sovereign\' as they construct their own world view, reason with that, and make their (sovereign, subjective) decisions. It also shows how this \'knowledge is used, where it is used, and also: where it is not used. The latter implies that parties have a limited scope of control, which gives rise to their need to work together with other parties, that have their own sovereignty. Such interactions with others, however, are outside the scope of this pattern.'),Object(r.b)("h3",{id:"purpose"},"Purpose"),Object(r.b)("p",null,"In order for people or organizations to decide what to do (themselves), what to ask others to do (for which these others generally require some form of compensation, how to know that the associated risks are worth taking, this pattern provides a simple mental model that provides the basis for thinking/reasoning about such questions. The pattern is expected to be helpful to those that think about designing complex systems (systems of systems) that are owned by different parties, and in which both human and non-human actors take part."),Object(r.b)("h3",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"One may readily observe that in some way, people (humans) and organizations are similar. This is indicated e.g. by the notion of 'personality' that many ",Object(r.b)(s.a,{popup:"Legal Jurisdiction: a Jurisdiction that is governed/operated by a governmental body.",reference:"/framework/docs/terms/legal-jurisdiction",mdxType:"Term"},"legal jurisdictions")," assign to (specific kinds of) organizations. It allows rights and duties to be assigned to people and organizations alike. It also means that people and organizations can be held accountable, and be subjected to prosecution."),Object(r.b)("p",null,"The main characteristic that people and ",Object(r.b)(s.a,{popup:"Organization: a Party that is associated with a group of Actors that work to realize its Objectives.",reference:"/framework/docs/terms/organization",mdxType:"Term"},"organizations")," share, is that each of them autonomously sets its own (subjective) ",Object(r.b)(s.a,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives"),", maintains its own (subjective) ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge"),", and uses that to pursue these objectives. This characteristic qualifies them as ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),"."),Object(r.b)("p",null,"One may also readily observe that in other ways, people and ",Object(r.b)(s.a,{popup:"Organization: a Party that is associated with a group of Actors that work to realize its Objectives.",reference:"/framework/docs/terms/organization",mdxType:"Term"},"organizations")," differ. For example, people eat and drink, whereas organizations do not. People can sit behind a computer keyboard, type texts, hit the 'Enter' button, e.g. to send an email. Organizations cannot do that. In short: people can act (do things), and hence qualify as ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors"),". Organizations cannot do things (act) and hence do not qualify as an actor. This is what sets people and organizations apart."),Object(r.b)("h4",{id:"parties-and-actors"},Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties")," and ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"Actors")),Object(r.b)("p",null,"Notwithstanding that ",Object(r.b)(s.a,{popup:"Organization: a Party that is associated with a group of Actors that work to realize its Objectives.",reference:"/framework/docs/terms/organization",mdxType:"Term"},"organizations")," cannot act, it is quite common to hear statements that seem to imply that they can. If ACME is an organization and someone says: \"I just received mail from ACME\", this cannot be literally true as organizations cannot send messages. It is either a person or a computer system that has actually sent it. Statements such as these must therefor be interpreted in a figurative way, as a 'shorthand' for 'I just received mail that was sent by some ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that was acting on behalf of ACME'."),Object(r.b)("p",null,"When an ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," ",Object(r.b)("inlineCode",{parentName:"p"},"is acting on behalf of")," some ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", we mean to say that it is actually in the process of executing a (single) ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action"),", which it executes on that (single) party's behalf. These constraints (a ",Object(r.b)("em",{parentName:"p"},"single")," action and a ",Object(r.b)("em",{parentName:"p"},"single")," party) allow for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"assigning accountability for the execution of that action to a ",Object(r.b)("em",{parentName:"li"},"single")," party;"),Object(r.b)("li",{parentName:"ul"},"an actor to execute different actions for different parties (i.e.: to multi-task for different parties).")),Object(r.b)("p",null,"In this relation ",Object(r.b)("inlineCode",{parentName:"p"},"is acting on behalf of"),", the actor plays the role of ",Object(r.b)(s.a,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent")," (of that ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"), and the ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," plays the role of  ",Object(r.b)(s.a,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal")," (of that ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor"),"). Note that for every agent-principle pair, an ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action")," must exist that the agent is executing on behalf of its principal."),Object(r.b)("p",null,"We also need to talk about actors for which it is realistic that they might do something for some party at some point in time. We will use the term ",Object(r.b)("inlineCode",{parentName:"p"},"work for")," for actor-party pairs that qualify. We see two basic ways for such a relationship to exist:"),Object(r.b)("p",null,"One way is where the ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," has a ",Object(r.b)(s.a,{popup:"Owner (of an Entity): the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"legal or rightful title to control (own)")," the actor.",Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," This would e.g. be the case if the actor were a computer program (a running mail client or mail server, or an app running on a mobile device). We use the term ",Object(r.b)("inlineCode",{parentName:"p"},"owns")," to relate a party with an actor for which this is the case. In this relation ",Object(r.b)("inlineCode",{parentName:"p"},"owns"),", the ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," plays the role of the ",Object(r.b)(s.a,{popup:"Owned (by an Owner, in some Jurisdiction): an Entity over which another Entity (its Owner) has the power (duty, right) to enjoy it, dispose of it and control it; that power is limited to (the scope of) that Jurisdiction, and by its rules.",reference:"/framework/docs/terms/owned",mdxType:"Term"},"owned"),", and the ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," plays the role of the ",Object(r.b)(s.a,{popup:"Owner (of an Entity): the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owner"),"."),Object(r.b)("p",null,"The second way is where an ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," ",Object(r.b)("inlineCode",{parentName:"p"},"works for")," a ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", based e.g. on some kind of agreement or contract. A party can hire an actor that it doesn't own, i.e. create arrangements with other parties that enable the actor to work for that party. How such ",Object(r.b)("inlineCode",{parentName:"p"},"works for")," relationships may start or cease to exist, and be modified, is the topic of the pattern ",Object(r.b)(s.a,{popup:"The Mandates, Delegation and Hiring pattern (which remains to be documented) captures the ideas behind Mandating, Delegating, Hiring and their relations. This is a work-in-progress.",reference:"/framework/docs/terms/pattern-mandates-delegation-hiring",mdxType:"Term"},"mandates, Delegation and Hiring"),"."),Object(r.b)("h4",{id:"action-execution"},Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"Action")," Execution"),Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"Actions")," are executed in a specific context, i.e. a specific place and time, and a specific ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," on whose behalf the action is executed. The ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of that party provides the ",Object(r.b)(s.a,{popup:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party.",reference:"/framework/docs/terms/policy",mdxType:"Term"},"policy"),", i.e. the rules, working-instructions, preferences and other guidance that the ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," needs to execute the action. For example, sending a mail on behalf of some ",Object(r.b)(s.a,{popup:"Organization: a Party that is associated with a group of Actors that work to realize its Objectives.",reference:"/framework/docs/terms/organization",mdxType:"Term"},"organization")," may require that the mail template and logo of that organization be used. Or accepting an order usually requires a check to see the order is 'clean', i.e. can be processed by others in the organization. What a 'clean-order check' comprises is part of the knowledge of that organization.",Object(r.b)("p",null,"The ",Object(r.b)(s.a,{popup:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party.",reference:"/framework/docs/terms/policy",mdxType:"Term"},"policies")," that govern the execution of an ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action")," are part of the ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of the ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," on whose behalf the action is being executed. As a concequence, an ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that executes the action must be able to access (the knowledge that) the policy (is part of). Also, the actor must use that policy as its primary guidance for executing the action."),Object(r.b)("p",null,"Note that this does not imply that the actor cannot use knowledge from other sources (parties) as well. In particular, human actors are typically responsible (not necessarily accountable) for their doings and may hence use their own knowledge. They may also look for complementary, third party knowledge, e.g. on the Internet or in a library. However, using the ",Object(r.b)(s.a,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal's")," knowledge as the primary guidance is important if that principal is to be held accountable."),Object(r.b)("h4",{id:"realizing-objectives"},"Realizing ",Object(r.b)(s.a,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"Objectives")),Object(r.b)("p",null,"Every ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," has its own mission (calling, vocation), and realizing that is often perceived as the reason for its existence (raison d'etre). This is what drives them. It causes the party to set its (other, derived) objectives, and determine how to realize them, e.g. by finding (and subsequently owning, or employing) ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," that can do the associated work, by establishing and maintaining the policies for the ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," they will be tasked to execute, etc."),Object(r.b)("p",null,"Setting objectives, managing the associated ",Object(r.b)(s.a,{popup:"Risk (of a Party's Objective): the effects that uncertainty (i.e. a lack of information, understanding or knowledge of events, their consequences or likelihoods) can have on the intended realization of that Party's Objective.",reference:"/framework/docs/terms/risk",mdxType:"Term"},"risks")," (i.e. 'effect of uncertainty on objectives'), deciding about laws/regulations to comply with, etc., is the topic of Governance, Risk Management and Compliance (GRC), which is outside the scope of this model."),Object(r.b)("h3",{id:"formalized-model"},"Formalized model"),Object(r.b)("p",null,"Here is a visual representation of this pattern, using the following ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../notations-and-conventions#pattern-diagram-notations"}),"notations and conventions"),":"),Object(r.b)("img",{alt:"Conceptual model of the 'Party-Actor-Action' pattern",src:Object(c.a)("images/patterns/pattern-party-actor-action.png")}),Object(r.b)("p",null,"It shows that ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," (humans, organizations) perform ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," for the purpose of realizing their ",Object(r.b)(s.a,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives"),". ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties")," are not considered to actually execute such ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions"),"; they have (human and non-human) ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," that work for them, execute such ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions"),", using the ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"'s ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," as the (authoritative) guidance for executing the ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," (as well as any other relevant ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," they can access)."),Object(r.b)("p",null,"The essential characteristic of ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," is their 1-1 link with ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge"),", which they continually update and use e.g. for reasoning, decision making, and determining e.g. what to do, when, and with whom. ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"Knowledge")," not only includes (observable) facts, but also opinions, e.g. regarding the ",Object(r.b)(s.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," it knows to exist, relations between them, and rules (constraints, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Logic"}),"logic"),Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-2"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2")),") that can be used to classify and reasoning about them, and for making decisions."),Object(r.b)("p",null,"Perhaps the most important idea in this pattern is that our ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," concept is not considered to (be able to) act, and they need ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," (i.e. ",Object(r.b)(s.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"Entities")," that ",Object(r.b)("em",{parentName:"p"},"can")," act) to act on their behalf and thus make them perform. This does, however,  not preclude having ",Object(r.b)(s.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," that are both ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," and ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," - e.g. humans - and that such ",Object(r.b)(s.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," can act on their 'own' behalf. And we can continue to use the commonly used form of speech in which a ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," performs some Action  by realizing that this means that there is (at least) one ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that is actually executing that ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action"),"."),Object(r.b)("p",null,"In this pattern, ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," takes center stage. ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"Knowledge")," contains ",Object(r.b)(s.a,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives")," to be realized and managed. This not only triggers all sorts of ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," to be performed, but also guides their execution in terms of when an Action should start, when it terminates, which ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," qualify for executing it, etc. Everything that is specific for a ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," is reflected in its ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge"),"."),Object(r.b)("p",null,"This works well for human beings, which are both a ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," and an ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor"),". So a human being can act, implying itself as an ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor"),", and using its personal ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," as guidance. The model also works when a human being (as a ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),") may hire someone else (as an ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor"),"), e.g. to fill in his tax return form. This other is guided by the ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of the human being that hired him, and uses its own ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," for the details of filling in the tax form."),Object(r.b)("p",null,"It also works well for organizations, which are typically companies, enterprises, governments or parts thereof, i.e. groups of human beings and possibly other ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," that, as a group, fit the criteria for being a ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),". This group of ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," would typically work to realize the organization's ",Object(r.b)(s.a,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives"),", being guided by the organization's ",Object(r.b)(s.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," (registrations, policies, etc.). Like human beings, an organization may (have an appropriate ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor"),") decide to hire or fire ",Object(r.b)(s.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," for longer or shorter periods."),Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties")," set ",Object(r.b)(s.a,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives")," that they seek to achieve, the most basic of which perhaps is its mission, or its 'raison d'\xeatre', to the realization of which all of its ",Object(r.b)(s.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," are (ultimately) aimed. Every Objective is owned by a single ",Object(r.b)(s.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," (we do not consider 'shared objectives'[^3]).",Object(r.b)("hr",null),Object(r.b)("h3",{id:"footnotes"},"Footnotes"),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"Noting that this also covers slavery merely serves as proof that the model is very generic, not that we support slavery.",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-2"}),"I.e. \u201clogic is the analysis and appraisal of arguments (Gensler, Harry J. (2017) ","[2002]",'. "Chapter 1: Introduction". Introduction to logic (3rd ed.). New York: Routledge. p. 1. ',Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://doi.org/10.4324%2F9781315693361"}),"doi:10.4324/9781315693361"),". ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Special:BookSources/9781138910591"}),"ISBN 9781138910591"),". OCLC ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.worldcat.org/oclc/957680480"}),"957680480"),".)",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")))))}l.isMDXComponent=!0}}]);