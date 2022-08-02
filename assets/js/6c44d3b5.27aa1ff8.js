"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[5817],{1277:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var n=a(3117),i=a(102),s=(a(7294),a(3905)),l=a(4345),o=["components"],r={id:"wallet",title:"Wallet",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",termid:"wallet",formphrases:"wallet{ss}",status:"draft",grouptags:null,hoverText:"Wallet (functional component): the capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",glossaryText:"the capability to securely store data as requested by %%colleague agents^colleague%%, and to provide stored data to %%colleague agents^colleague%% or %%peer agents^peer-agent%%, all in %%compliance^compliance%% with the rules of its %%principal^principal%%'s %%wallet policy^wallet-policy%%.",date:20210601},c=void 0,p={unversionedId:"terms/wallet",id:"terms/wallet",title:"Wallet",description:"Short Description",source:"@site/docs/terms/wallet.md",sourceDirName:"terms",slug:"/terms/wallet",permalink:"/framework/docs/terms/wallet",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/wallet.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1651674803,formattedLastUpdatedAt:"May 4, 2022",frontMatter:{id:"wallet",title:"Wallet",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",termid:"wallet",formphrases:"wallet{ss}",status:"draft",grouptags:null,hoverText:"Wallet (functional component): the capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",glossaryText:"the capability to securely store data as requested by %%colleague agents^colleague%%, and to provide stored data to %%colleague agents^colleague%% or %%peer agents^peer-agent%%, all in %%compliance^compliance%% with the rules of its %%principal^principal%%'s %%wallet policy^wallet-policy%%.",date:20210601},sidebar:"essifLabSideBar"},u={},d=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Functionality",id:"functionality",level:3}],h={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"short-description"},"Short Description"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"Wallet")," is is an (architectural) function (a functional component in the ",(0,s.kt)("a",{parentName:"p",href:"../essifLab-fw-func-arch"},"eSSIF-Lab functional architecture"),") that provides (secure) storage of credentials - regardless of the ",(0,s.kt)(l.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that has issued them (i.e. so-called self-signed credentials may be stored there, too). Another task of the wallet is to (securely) store (private) keys that can be used to sign or seal data on behalf of its Principal. Perhaps the most important task of the Wallet is to ensure that credentials and keys can only become available to another component if they have the same (single) Principal, and will become available if such other component implements a functionality that needs it."),(0,s.kt)("admonition",{title:"Editor's note",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Additional content is needed here.")),(0,s.kt)("h3",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,"The purpose of the Wallet function is."),(0,s.kt)("h3",{id:"criteria"},"Criteria"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"Wallet")," is a component in the ",(0,s.kt)("a",{parentName:"p",href:"../essifLab-fw-func-arch"},"eSSIF-Lab functional architecture")," whose function is to ... (tbd)."),(0,s.kt)("h3",{id:"functionality"},"Functionality"),(0,s.kt)("p",null,"The primary purpose of the Wallet Component is to (securely) store data, and in particular:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"credentials - both those that have been issued by the issuer (i.e. self-signed credentials) and those that have been obtained from issuers of other ",(0,s.kt)(l.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),", and"),(0,s.kt)("li",{parentName:"ul"},"(private) keys e.g. for signing/sealing data on behalf of its Principal.")),(0,s.kt)("p",null,"Other kinds of data may be stored by a wallet as well - we will have to see what is practical and makes sense."),(0,s.kt)("p",null,"By 'securely storing data' we mean that such data"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"remains available until a request is received from an electronic Colleague that is entitled to request deletion of such data;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"remains unchanged during the time in which it is stored;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"can only become available to electronic Colleagues that implement a functionality that requires such access (e.g. a Colleague Holder component);")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"can only be stored by electronic Colleagues that implement a functionality that require such data to be stored (e.g. a Colleague Holder or Issuer component)."))),(0,s.kt)("p",null,"It is expected that components other than the Holder and Issuer will (arise and) need access. One example could be a component that is capable of securely signing data on behalf of the Principal. Another example could be a component that implements some kind of credential revocation functionality."),(0,s.kt)("p",null,"Human beings cannot directly access any Wallet component, not even the ones they own. They need an electronic Agent that is capable of authenticating them as (an Agent of) the ",(0,s.kt)(l.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that owns the Wallet component, and upon successful authentication provides a User Interface through which the Human Being can instruct this electronic Agent to manage the Wallet's contents."),(0,s.kt)("p",null,"In order to make the Wallet component work, a Wallet Policy/Preferences object is created by, or on behalf of the Principal, the contents of which remains to be specified."))}m.isMDXComponent=!0}}]);