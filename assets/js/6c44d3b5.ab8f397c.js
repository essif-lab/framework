"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[8452],{8028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7624),s=a(2172);const i={id:"wallet",displayed_sidebar:"essifLabSideBar",termType:"concept",term:"wallet",formPhrases:["wallet{ss}"],status:"draft",grouptags:null,hoverText:"Wallet (functional component): a component that implements the Capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",glossaryTerm:"Wallet",glossaryText:"a component that implements the [capability](@) to securely store data as requested by [colleague agents](colleague@), and to provide stored data to [colleague agents](colleague@) or [peer agents](peer-agent@), all in [compliance](@) with the rules of its [principal](@)'s [wallet policy](@).",date:20210601},o="Wallet",l={id:"terms/wallet",title:"Wallet",description:"Short Description",source:"@site/docs/terms/wallet.md",sourceDirName:"terms",slug:"/terms/wallet",permalink:"/framework/docs/terms/wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/wallet.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1706094108,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{id:"wallet",displayed_sidebar:"essifLabSideBar",termType:"concept",term:"wallet",formPhrases:["wallet{ss}"],status:"draft",grouptags:null,hoverText:"Wallet (functional component): a component that implements the Capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",glossaryTerm:"Wallet",glossaryText:"a component that implements the [capability](@) to securely store data as requested by [colleague agents](colleague@), and to provide stored data to [colleague agents](colleague@) or [peer agents](peer-agent@), all in [compliance](@) with the rules of its [principal](@)'s [wallet policy](@).",date:20210601},sidebar:"essifLabSideBar"},r={},c=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Functionality",id:"functionality",level:3}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"wallet",children:"Wallet"}),"\n",(0,n.jsx)(t.h3,{id:"short-description",children:"Short Description"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.strong,{children:"Wallet"})," is is an (architectural) function (a functional component in the ",(0,n.jsx)(t.a,{href:"../essifLab-fw-conceptual-architecture-framework",children:"eSSIF-Lab functional architecture"}),") that provides (secure) storage of credentials - regardless of the ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," that has issued them (i.e. so-called self-signed credentials may be stored there, too). Another task of the wallet is to (securely) store (private) keys that can be used to sign or seal data on behalf of its Principal. Perhaps the most important task of the Wallet is to ensure that credentials and keys can only become available to another component if they have the same (single) Principal, and will become available if such other component implements a functionality that needs it."]}),"\n",(0,n.jsx)(t.admonition,{title:"Editor's note",type:"info",children:(0,n.jsx)(t.p,{children:"Additional content is needed here."})}),"\n",(0,n.jsx)(t.h3,{id:"purpose",children:"Purpose"}),"\n",(0,n.jsx)(t.p,{children:"The purpose of the Wallet function is."}),"\n",(0,n.jsx)(t.h3,{id:"criteria",children:"Criteria"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.strong,{children:"Wallet"})," is a component in the ",(0,n.jsx)(t.a,{href:"../essifLab-fw-conceptual-architecture-framework",children:"eSSIF-Lab functional architecture"})," whose function is to ... (tbd)."]}),"\n",(0,n.jsx)(t.h3,{id:"functionality",children:"Functionality"}),"\n",(0,n.jsx)(t.p,{children:"The primary purpose of the Wallet Component is to (securely) store data, and in particular:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["credentials - both those that have been issued by the issuer (i.e. self-signed credentials) and those that have been obtained from issuers of other ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"}),", and"]}),"\n",(0,n.jsx)(t.li,{children:"(private) keys e.g. for signing/sealing data on behalf of its Principal."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Other kinds of data may be stored by a wallet as well - we will have to see what is practical and makes sense."}),"\n",(0,n.jsx)(t.p,{children:"By 'securely storing data' we mean that such data"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"remains available until a request is received from an electronic Colleague that is entitled to request deletion of such data;"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"remains unchanged during the time in which it is stored;"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"can only become available to electronic Colleagues that implement a functionality that requires such access (e.g. a Colleague Holder component);"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"can only be stored by electronic Colleagues that implement a functionality that require such data to be stored (e.g. a Colleague Holder or Issuer component)."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"It is expected that components other than the Holder and Issuer will (arise and) need access. One example could be a component that is capable of securely signing data on behalf of the Principal. Another example could be a component that implements some kind of credential revocation functionality."}),"\n",(0,n.jsxs)(t.p,{children:["Human beings cannot directly access any Wallet component, not even the ones they own. They need an electronic Agent that is capable of authenticating them as (an Agent of) the ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," that owns the Wallet component, and upon successful authentication provides a User Interface through which the Human Being can instruct this electronic Agent to manage the Wallet's contents."]}),"\n",(0,n.jsx)(t.p,{children:"In order to make the Wallet component work, a Wallet Policy/Preferences object is created by, or on behalf of the Principal, the contents of which remains to be specified."})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2172:(e,t,a)=>{a.d(t,{I:()=>l,M:()=>o});var n=a(1504);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);