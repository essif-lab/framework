"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[8962],{9808:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var a=r(3117),o=r(102),n=(r(7294),r(3905)),i=r(4345),s=["components"],c={id:"holder",title:"Holder",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",termid:"holder",term:"holder",formphrases:"holder{ss}",status:"draft",grouptags:null,hoverText:"Holder (functional component): a component that implements the Capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",glossaryText:"a component that implements the %%capability^capability%% to handle %%presentation requests^presentation-request%% from a %%peer agent^peer-agent%%, produce the requested data (a presentation) according to its %%principal^principal%%'s %%holder-policy^holder-policy%%, and send that in response to the request.",date:20210601},p=void 0,l={unversionedId:"terms/holder",id:"terms/holder",title:"Holder",description:"In other SSI contexts, this term has a different meaning. We intend to rework the framework in such a way that we can use this term in various ways (e.g. as a party, a role name, or an actor that performs the role associated with the role name",source:"@site/docs/terms/holder.md",sourceDirName:"terms",slug:"/terms/holder",permalink:"/framework/docs/terms/holder",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/holder.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1696252654,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"holder",title:"Holder",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",termid:"holder",term:"holder",formphrases:"holder{ss}",status:"draft",grouptags:null,hoverText:"Holder (functional component): a component that implements the Capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",glossaryText:"a component that implements the %%capability^capability%% to handle %%presentation requests^presentation-request%% from a %%peer agent^peer-agent%%, produce the requested data (a presentation) according to its %%principal^principal%%'s %%holder-policy^holder-policy%%, and send that in response to the request.",date:20210601},sidebar:"essifLabSideBar"},d={},m=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Functionality",id:"functionality",level:3}],h={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In other SSI contexts, this term has a different meaning. We intend to rework the framework in such a way that we can use this term in various ways (e.g. as a ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", a ",(0,n.kt)(i.Z,{popup:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",reference:"/framework/docs/terms/role-name",mdxType:"Term"},"role name"),", or an ",(0,n.kt)(i.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that performs the ",(0,n.kt)(i.Z,{popup:"Role (of an Entity in some context): a defined set of characteristics that the Entity has in some context, such as responsibilities (Obligations) it may have, Actions (behaviors) it may execute, or pieces of Knowledge that it is expected to have in that context, which are referenced to by a specific (Role-)name.",reference:"/framework/docs/terms/role",mdxType:"Term"},"role")," associated with the ",(0,n.kt)(i.Z,{popup:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",reference:"/framework/docs/terms/role-name",mdxType:"Term"},"role name"))),(0,n.kt)("h3",{id:"short-description"},"Short Description"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Holder")," is an (architectural) function (a functional component in the ",(0,n.kt)("a",{parentName:"p",href:"../essifLab-fw-conceptual-architecture-framework"},"eSSIF-Lab functional architecture"),") that handles ",(0,n.kt)(i.Z,{popup:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",reference:"/framework/docs/terms/presentation-request",mdxType:"Term"},"presentation requests")," that it receives from ",(0,n.kt)(i.Z,{popup:"Verifier (functional component): a component that implements the Capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/framework/docs/terms/verifier",mdxType:"Term"},"verifier")," components (of other ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),", but also of its own ",(0,n.kt)(i.Z,{popup:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owner"),"). Typically, this means looking for the requested data in the ",(0,n.kt)(i.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal's")," ",(0,n.kt)(i.Z,{popup:"Wallet (functional component): a component that implements the Capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",reference:"/framework/docs/terms/wallet",mdxType:"Term"},"wallet"),", and using it to construct a ",(0,n.kt)(i.Z,{popup:"Presentation: a (signed) digital message that a Holder component may send to a Verifier component that contains data derived from one or more Verifiable Credentials (that (a Colleague component of) the Holder component has received from Issuer components of one or more Parties), as a response to a specific Presentation Request of a Verifier component.",reference:"/framework/docs/terms/presentation",mdxType:"Term"},"presentation")," (=response). However, if the ",(0,n.kt)(i.Z,{popup:"Wallet (functional component): a component that implements the Capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",reference:"/framework/docs/terms/wallet",mdxType:"Term"},"wallet")," doesn't have it, the ",(0,n.kt)(i.Z,{popup:"Holder (functional component): a component that implements the Capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",reference:"/framework/docs/terms/holder",mdxType:"Term"},"holder")," may negotiate a ",(0,n.kt)(i.Z,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"transaction")," with a component of the designated ",(0,n.kt)(i.Z,{popup:"Issuer (functional component): a component that implements the Capability to construct Credentials from data objects, according to the content of its Principal's Issuer-Policy (specifically regarding the way in which the Credential is to be digitally signed), and pass it to the Wallet-component of its Principal allowing it to be issued.",reference:"/framework/docs/terms/issuer",mdxType:"Term"},"issuer")," for the purpose of obtaining the needed credential, which - when obtained - it can subsequently store in the ",(0,n.kt)(i.Z,{popup:"Wallet (functional component): a component that implements the Capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",reference:"/framework/docs/terms/wallet",mdxType:"Term"},"wallet")," and use in the ",(0,n.kt)(i.Z,{popup:"Presentation: a (signed) digital message that a Holder component may send to a Verifier component that contains data derived from one or more Verifiable Credentials (that (a Colleague component of) the Holder component has received from Issuer components of one or more Parties), as a response to a specific Presentation Request of a Verifier component.",reference:"/framework/docs/terms/presentation",mdxType:"Term"},"presentation"),"."),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The purpose of the Holder component is to handle ",(0,n.kt)(i.Z,{popup:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",reference:"/framework/docs/terms/presentation-request",mdxType:"Term"},"presentation requests")," that it receives from ",(0,n.kt)(i.Z,{popup:"Verifier (functional component): a component that implements the Capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/framework/docs/terms/verifier",mdxType:"Term"},"verifier")," components (both of its own ",(0,n.kt)(i.Z,{popup:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owner"),", and of other ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),"), and responding to such requests."),(0,n.kt)("h3",{id:"criteria"},"Criteria"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Holder")," is a component in the ",(0,n.kt)("a",{parentName:"p",href:"../essifLab-fw-conceptual-architecture-framework"},"eSSIF-Lab functional architecture")," whose function is to handle ",(0,n.kt)(i.Z,{popup:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",reference:"/framework/docs/terms/presentation-request",mdxType:"Term"},"presentation requests")," that it receives from ",(0,n.kt)(i.Z,{popup:"Verifier (functional component): a component that implements the Capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/framework/docs/terms/verifier",mdxType:"Term"},"verifier")," components (both of its ",(0,n.kt)(i.Z,{popup:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owner"),", and of other ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties"),")."),(0,n.kt)("h3",{id:"functionality"},"Functionality"),(0,n.kt)("p",null,"Typically, a Holder component would access its ",(0,n.kt)(i.Z,{popup:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owner"),"'s Wallet to check if it has a credential that it can use to construct a Presentation (i.e. response) that satisfies the received request."),(0,n.kt)("p",null,"It may happen that the Wallet does not have such a credential. However, for every (credential, issuer) pair, the request should specify the URI that is capable of issuing such a credential. If or when the Holder Policy/Preferences permit this, the Holder then requests its Principal's Transaction Data Collector to initiate a new transaction that will get the credential from that issuer, for which a clean transaction form would then consist of one that contains said credential. The Holder would then store it in its Principal's Wallet, and then proceed to service the ",(0,n.kt)(i.Z,{popup:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",reference:"/framework/docs/terms/presentation-request",mdxType:"Term"},"presentation request")," as if it had obtained that credential from its Principal's Wallet."),(0,n.kt)("p",null,"It may also happen that the Wallet has multiple credentials that satisfy the request, in which case the Holder must choose the one to use for constructing the presentation. Again, the Holder Policy/Preferences will specify how this choice needs to be made, and whether or not this can be done automatically by the Holder. If not, the Holder will need to provide for an interaction with a human Colleague that will make such decisions."),(0,n.kt)("p",null,"In order to make the Holder component work, a Holder Policy/Preferences object is created by, or on behalf of its Principal, which specifies e.g.:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"whether or not credentials may be collected 'on the fly';"),(0,n.kt)("li",{parentName:"ul"},"how to choose between credentials that all satisfy a ",(0,n.kt)(i.Z,{popup:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",reference:"/framework/docs/terms/presentation-request",mdxType:"Term"},"presentation request")," (and whether the Holder can make such choices by itself, or whether or not human interaction is required);"),(0,n.kt)("li",{parentName:"ul"},"the kinds of events and data to write to a holder-audit-log.")))}f.isMDXComponent=!0}}]);