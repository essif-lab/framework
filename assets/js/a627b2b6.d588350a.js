"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[276],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>m});var r=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,c=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),d=l(a),u=o,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||n;return a?r.createElement(m,i(i({ref:e},h),{},{components:a})):r.createElement(m,i({ref:e},h))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6773:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const n={id:"actor",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",termType:"concept",term:"actor",formPhrases:["actor{ss}","digital-actor{ss}"],status:"draft",grouptags:null,hoverText:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",glossaryTerm:"Actor",glossaryText:"entity that can act (do things/execute [action](@)), e.g. people, machines, but not [organization](@).",date:20210601},i="Actor",s={unversionedId:"terms/actor",id:"terms/actor",title:"Actor",description:"Short Description",source:"@site/docs/terms/actor.md",sourceDirName:"terms",slug:"/terms/actor",permalink:"/framework/docs/terms/actor",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/actor.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1704211770,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{id:"actor",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",termType:"concept",term:"actor",formPhrases:["actor{ss}","digital-actor{ss}"],status:"draft",grouptags:null,hoverText:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",glossaryTerm:"Actor",glossaryText:"entity that can act (do things/execute [action](@)), e.g. people, machines, but not [organization](@).",date:20210601},sidebar:"essifLabSideBar"},c={},l=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criterion",id:"criterion",level:3},{value:"Examples",id:"examples",level:3},{value:"Related concepts",id:"related-concepts",level:3}],h={toc:l},d="wrapper";function p(t){let{components:e,...a}=t;return(0,o.kt)(d,(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actor"},"Actor"),(0,o.kt)("h3",{id:"short-description"},"Short Description"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"Actor")," is someone or something that can act, i.e. actually do things, execute ",(0,o.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"actions"),", such as people or machines. Actors will generally execute ",(0,o.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"actions")," in different ways, depending on the context, or the ",(0,o.kt)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," on whose behalf they act."),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{href:"/framework/docs/terms/organization",hovertext:"Organization: a Party that is capable of setting Objectives and making sure these are realized by Actors that it has Onboarded and/or by (vetted) Parties that are committed to contribute to these Objectives."},"organization")," is not considered to be an ",(0,o.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actor"),". ",(0,o.kt)("a",{href:"/framework/docs/terms/organization",hovertext:"Organization: a Party that is capable of setting Objectives and making sure these are realized by Actors that it has Onboarded and/or by (vetted) Parties that are committed to contribute to these Objectives."},"Organizations")," cannot drink beer, (digitally or manually) sign and/or encrypt documents, hire ",(0,o.kt)("a",{href:"/framework/docs/terms/human-being",hovertext:"Human Being: a person of flesh and blood (homo sapiens), that we classify both as a Party, an Actor, and a Jurisdiction."},"people"),", buy computers, etc. They need ",(0,o.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"actors")," (",(0,o.kt)("a",{href:"/framework/docs/terms/human-being",hovertext:"Human Being: a person of flesh and blood (homo sapiens), that we classify both as a Party, an Actor, and a Jurisdiction."},"people"),", machines, etc) to act on their behalf. This is elaborated further on in the ",(0,o.kt)("a",{parentName:"p",href:"pattern-party-actor-action@"},"Parties, Actors and Actions pattern"),"."),(0,o.kt)("h3",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"The ability to distinguish between (non)actors allows one to determine which (kinds of) actors are capable of executing which (kinds of) ",(0,o.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"actions"),", specifically since ",(0,o.kt)("a",{href:"/framework/docs/terms/organization",hovertext:"Organization: a Party that is capable of setting Objectives and making sure these are realized by Actors that it has Onboarded and/or by (vetted) Parties that are committed to contribute to these Objectives."},"organizations")," do not qualify as an actor (they need actors to get things done)."),(0,o.kt)("h3",{id:"criterion"},"Criterion"),(0,o.kt)("p",null,"Entity that is capable of actually executing ",(0,o.kt)("a",{href:"/framework/docs/terms/action",hovertext:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context."},"actions")," (acting, doing things)."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"People (human beings) obviously qualify, as do robots and other machines."),(0,o.kt)("li",{parentName:"ul"},"Stones, pictures, ideas, etc. do not qualify."),(0,o.kt)("li",{parentName:"ul"},"Software applications qualify, provided they are actually running on hardware. An app that is just sitting e.g. on a mobile phone but isn't executed does not qualify."),(0,o.kt)("li",{parentName:"ul"},"Enterprises, governments, and other ",(0,o.kt)("a",{href:"/framework/docs/terms/organization",hovertext:"Organization: a Party that is capable of setting Objectives and making sure these are realized by Actors that it has Onboarded and/or by (vetted) Parties that are committed to contribute to these Objectives."},"organizations")," do not qualify.")),(0,o.kt)("h3",{id:"related-concepts"},"Related concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."},"digital actor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"/framework/docs/terms/peer-actor",hovertext:"Peer Actor (of some other Actor in a Communication Session): the Actor with whom/which this other Actor is communicating in that Communication Session."},"peer actor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"/framework/docs/terms/agent",hovertext:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor)."},"agent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"/framework/docs/terms/principal",hovertext:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party)."},"principal"))))}p.isMDXComponent=!0}}]);