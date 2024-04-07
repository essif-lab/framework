"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[4124],{8654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(4848),o=r(8453);const n={id:"holder",displayed_sidebar:"essifLabSideBar",termType:"concept",term:"holder",formPhrases:["holder{ss}"],status:"draft",grouptags:null,hoverText:"Holder (functional component): a component that implements the Capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",glossaryTerm:"Holder",glossaryText:"a component that implements the [capability](@) to handle [presentation requests](presentation-request@) from a [peer agent](@), produce the requested data (a presentation) according to its [principal](@)'s [holder-policy](@), and send that in response to the request.",date:20210601},s="Holder",i={id:"terms/holder",title:"Holder",description:"In other SSI contexts, this term has a different meaning. We intend to rework the framework in such a way that we can use this term in various ways (e.g. as a party, a role name, or an actor that performs the role associated with the role name",source:"@site/docs/terms/holder.md",sourceDirName:"terms",slug:"/terms/holder",permalink:"/framework/docs/terms/holder",draft:!1,unlisted:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/holder.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1712497032e3,frontMatter:{id:"holder",displayed_sidebar:"essifLabSideBar",termType:"concept",term:"holder",formPhrases:["holder{ss}"],status:"draft",grouptags:null,hoverText:"Holder (functional component): a component that implements the Capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",glossaryTerm:"Holder",glossaryText:"a component that implements the [capability](@) to handle [presentation requests](presentation-request@) from a [peer agent](@), produce the requested data (a presentation) according to its [principal](@)'s [holder-policy](@), and send that in response to the request.",date:20210601},sidebar:"essifLabSideBar"},c={},l=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Functionality",id:"functionality",level:3}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"holder",children:"Holder"}),"\n",(0,a.jsx)(t.admonition,{title:"Editor's note",type:"info",children:(0,a.jsxs)(t.p,{children:["In other SSI contexts, this term has a different meaning. We intend to rework the framework in such a way that we can use this term in various ways (e.g. as a ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),", a ",(0,a.jsx)("a",{href:"/framework/docs/terms/role-name",hovertext:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",children:"role name"}),", or an ",(0,a.jsx)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",children:"actor"})," that performs the ",(0,a.jsx)("a",{href:"/framework/docs/terms/role",hovertext:"Role (of an Entity in some context): a defined set of characteristics that the Entity has in some context, such as responsibilities (Obligations) it may have, Actions (behaviors) it may execute, or pieces of Knowledge that it is expected to have in that context, which are referenced to by a specific (Role-)name.",children:"role"})," associated with the ",(0,a.jsx)("a",{href:"/framework/docs/terms/role-name",hovertext:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",children:"role name"})]})}),"\n",(0,a.jsx)(t.h3,{id:"short-description",children:"Short Description"}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"Holder"})," is an (architectural) function (a functional component in the ",(0,a.jsx)(t.a,{href:"../essifLab-fw-conceptual-architecture-framework",children:"eSSIF-Lab functional architecture"}),") that handles ",(0,a.jsx)("a",{href:"/framework/docs/terms/presentation-request",hovertext:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",children:"presentation requests"})," that it receives from ",(0,a.jsx)("a",{href:"/framework/docs/terms/verifier",hovertext:"Verifier (functional component): a component that implements the Capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",children:"verifier"})," components (of other ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"}),", but also of its own ",(0,a.jsx)("a",{href:"/framework/docs/terms/owner",hovertext:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",children:"owner"}),"). Typically, this means looking for the requested data in the ",(0,a.jsx)("a",{href:"/framework/docs/terms/principal",hovertext:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",children:"principal's"})," ",(0,a.jsx)("a",{href:"/framework/docs/terms/wallet",hovertext:"Wallet (functional component): a component that implements the Capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",children:"wallet"}),", and using it to construct a ",(0,a.jsx)("a",{href:"/framework/docs/terms/presentation",hovertext:"Presentation: a (signed) digital message that a Holder component may send to a Verifier component that contains data derived from one or more Verifiable Credentials (that (a Colleague component of) the Holder component has received from Issuer components of one or more Parties), as a response to a specific Presentation Request of a Verifier component.",children:"presentation"})," (=response). However, if the ",(0,a.jsx)("a",{href:"/framework/docs/terms/wallet",hovertext:"Wallet (functional component): a component that implements the Capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",children:"wallet"})," doesn't have it, the ",(0,a.jsx)("a",{href:"/framework/docs/terms/holder",hovertext:"Holder (functional component): a component that implements the Capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",children:"holder"})," may negotiate a ",(0,a.jsx)("a",{href:"/framework/docs/terms/transaction",hovertext:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",children:"transaction"})," with a component of the designated ",(0,a.jsx)("a",{href:"/framework/docs/terms/issuer",hovertext:"Issuer (functional component): a component that implements the Capability to construct Credentials from data objects, according to the content of its Principal's Issuer-Policy (specifically regarding the way in which the Credential is to be digitally signed), and pass it to the Wallet-component of its Principal allowing it to be issued.",children:"issuer"})," for the purpose of obtaining the needed credential, which - when obtained - it can subsequently store in the ",(0,a.jsx)("a",{href:"/framework/docs/terms/wallet",hovertext:"Wallet (functional component): a component that implements the Capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",children:"wallet"})," and use in the ",(0,a.jsx)("a",{href:"/framework/docs/terms/presentation",hovertext:"Presentation: a (signed) digital message that a Holder component may send to a Verifier component that contains data derived from one or more Verifiable Credentials (that (a Colleague component of) the Holder component has received from Issuer components of one or more Parties), as a response to a specific Presentation Request of a Verifier component.",children:"presentation"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"purpose",children:"Purpose"}),"\n",(0,a.jsxs)(t.p,{children:["The purpose of the Holder component is to handle ",(0,a.jsx)("a",{href:"/framework/docs/terms/presentation-request",hovertext:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",children:"presentation requests"})," that it receives from ",(0,a.jsx)("a",{href:"/framework/docs/terms/verifier",hovertext:"Verifier (functional component): a component that implements the Capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",children:"verifier"})," components (both of its own ",(0,a.jsx)("a",{href:"/framework/docs/terms/owner",hovertext:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",children:"owner"}),", and of other ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"}),"), and responding to such requests."]}),"\n",(0,a.jsx)(t.h3,{id:"criteria",children:"Criteria"}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"Holder"})," is a component in the ",(0,a.jsx)(t.a,{href:"../essifLab-fw-conceptual-architecture-framework",children:"eSSIF-Lab functional architecture"})," whose function is to handle ",(0,a.jsx)("a",{href:"/framework/docs/terms/presentation-request",hovertext:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",children:"presentation requests"})," that it receives from ",(0,a.jsx)("a",{href:"/framework/docs/terms/verifier",hovertext:"Verifier (functional component): a component that implements the Capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",children:"verifier"})," components (both of its ",(0,a.jsx)("a",{href:"/framework/docs/terms/owner",hovertext:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",children:"owner"}),", and of other ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"Parties"}),")."]}),"\n",(0,a.jsx)(t.h3,{id:"functionality",children:"Functionality"}),"\n",(0,a.jsxs)(t.p,{children:["Typically, a Holder component would access its ",(0,a.jsx)("a",{href:"/framework/docs/terms/owner",hovertext:"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.",children:"owner"}),"'s Wallet to check if it has a credential that it can use to construct a Presentation (i.e. response) that satisfies the received request."]}),"\n",(0,a.jsxs)(t.p,{children:["It may happen that the Wallet does not have such a credential. However, for every (credential, issuer) pair, the request should specify the URI that is capable of issuing such a credential. If or when the Holder Policy/Preferences permit this, the Holder then requests its Principal's Transaction Data Collector to initiate a new transaction that will get the credential from that issuer, for which a clean transaction form would then consist of one that contains said credential. The Holder would then store it in its Principal's Wallet, and then proceed to service the ",(0,a.jsx)("a",{href:"/framework/docs/terms/presentation-request",hovertext:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",children:"presentation request"})," as if it had obtained that credential from its Principal's Wallet."]}),"\n",(0,a.jsx)(t.p,{children:"It may also happen that the Wallet has multiple credentials that satisfy the request, in which case the Holder must choose the one to use for constructing the presentation. Again, the Holder Policy/Preferences will specify how this choice needs to be made, and whether or not this can be done automatically by the Holder. If not, the Holder will need to provide for an interaction with a human Colleague that will make such decisions."}),"\n",(0,a.jsx)(t.p,{children:"In order to make the Holder component work, a Holder Policy/Preferences object is created by, or on behalf of its Principal, which specifies e.g.:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"whether or not credentials may be collected 'on the fly';"}),"\n",(0,a.jsxs)(t.li,{children:["how to choose between credentials that all satisfy a ",(0,a.jsx)("a",{href:"/framework/docs/terms/presentation-request",hovertext:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",children:"presentation request"})," (and whether the Holder can make such choices by itself, or whether or not human interaction is required);"]}),"\n",(0,a.jsx)(t.li,{children:"the kinds of events and data to write to a holder-audit-log."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var a=r(6540);const o={},n=a.createContext(o);function s(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);