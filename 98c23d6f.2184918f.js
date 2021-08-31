(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return u}));var s=a(2),n=a(6),i=(a(0),a(230)),r=a(231),o=a.n(r),c={id:"transaction-data-discloser",title:"Transaction Data Discloser",scopeid:"essifLab",type:"concept",typeid:"transaction-data-discloser",stage:"draft",hoverText:"Transaction Data Discloser: a functional component that is capable of disclosing data.",glossaryText:"a functional component that is capable of disclosing data.",date:20210601},l={unversionedId:"terms/transaction-data-discloser",id:"terms/transaction-data-discloser",isDocsHomePage:!1,title:"Transaction Data Discloser",description:"Short Description",source:"@site/docs/terms/transaction-data-discloser.md",slug:"/terms/transaction-data-discloser",permalink:"/framework/docs/terms/transaction-data-discloser",editUrl:"https://gitlab.grnet.gr/essif-lab/framework/-/tree/master/docs/terms/transaction-data-discloser.md",version:"current"},p=[{value:"Short Description",id:"short-description",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Criteria",id:"criteria",children:[]},{value:"Functionality",id:"functionality",children:[]}],d={rightToc:p};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"short-description"},"Short Description"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Transaction Data Discloser")," is an (architectural) function (a functional component in the ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"../essifLab-fw-func-arch"}),"eSSIF-Lab functional architecture"),") that applications (that work for some ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),") can call to communicate things such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the results of a ",Object(i.b)(o.a,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"business transaction")," (e.g. statements to confirm that a transaction happened, thereby supplying appropriate details)"),Object(i.b)("li",{parentName:"ul"},"the status of a ",Object(i.b)(o.a,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"business transaction")," (e.g. that an order has been received in good order, that delivery of an order is dealyed or otherwise changed)"),Object(i.b)("li",{parentName:"ul"},"knowledge (including judgements) that this ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," has about ",Object(i.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"Entities")," (people, organizations, things, orders, deliveries, etc.)")),Object(i.b)("p",null,"The Transaction Data Discloser uses a ",Object(i.b)(o.a,{popup:"Transaction Data Discloser Policy: a Digital Policy that enables an operational Transaction Data Discloser component to function in accordance with the Objectives of its Principal.",reference:"/framework/docs/terms/transaction-data-discloser-policy",mdxType:"Term"},"Transaction Data Discloser policy")," to learn about the applicable (business) rules of its ",Object(i.b)(o.a,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal"),". Such a policy may specify e.g. which types of credentials its principal is willing to (have) issue(d), to whom such credentials may be issued and the kinds of assurances that must be obtained before doing so, etcetera."),Object(i.b)("p",null,"The Transaction Data Discloser uses the ",Object(i.b)(o.a,{popup:"eSSIF-Glue: interface layer that allows components with Transaction Data Collector and/or Transaction Data Discloser functionality to use the Wallet, Holder, Issuer and Verifier functionalities.",reference:"/framework/docs/terms/essif-glue",mdxType:"Term"},"eSSIF-Glue")," interface to access the ",Object(i.b)(o.a,{popup:"Wallet (functional component): the capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in compliance with the rules of its Principal's Wallet Policy.",reference:"/framework/docs/terms/wallet",mdxType:"Term"},"Wallet"),", ",Object(i.b)(o.a,{popup:"Holder (functional component): the capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",reference:"/framework/docs/terms/holder",mdxType:"Term"},"Holder"),", ",Object(i.b)(o.a,{popup:"Issuer (functional component): the capability to construct Credentials from data objects, according to the content of its Principal's Issuer-Policy (specifically regarding the way in which the Credential is to be digitally signed), and pass it to the Wallet-component of its Principal allowing it to be issued.",reference:"/framework/docs/terms/issuer",mdxType:"Term"},"Issuer")," and ",Object(i.b)(o.a,{popup:"Verifier (functional component): the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/framework/docs/terms/verifier",mdxType:"Term"},"Verifier")," functionalities."),Object(i.b)("h3",{id:"purpose"},"Purpose"),Object(i.b)("p",null,"The purpose of the Transaction Data Discloser component is to state the (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),". A special kind of result is the (provisioning of) a credential that its Principal already has created."),Object(i.b)("h3",{id:"criteria"},"Criteria"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Transaction Data Discloser")," is a component in the ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"../essifLab-fw-func-arch"}),"eSSIF-Lab functional architecture")," that is capable of stating (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties"),"."),Object(i.b)("h3",{id:"functionality"},"Functionality"),Object(i.b)("p",null,"Typically, and at any point in time, ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," are capable of expressing statements about entities that they know to exist. They could express statements about individuals, about themselves, the state of transactions, and so on. We will use the term '",Object(i.b)("strong",{parentName:"p"},"%subject% (of a statement of a ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),")"),"' to refer to the entity that this ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," knows to exist, and about whom/which the statement has been made."),Object(i.b)("p",null,"We will use the term '",Object(i.b)("strong",{parentName:"p"},"subject-id (of a statement of a ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),")"),"' to refer to the representation that this ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," has chosen to use for referring to the ",Object(i.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," in said statement. A subject-id must have the property of being an identifier within every administrative context that this ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," uses. It need not be humanly interpretable (and preferably is not)."),Object(i.b)("p",null,"Parties need to specify the kinds of credentials they are willing to issue, the class of entities (e.g. people, cars, Organizations) for which it will issue them, and the information schema (structure) that it will use in credentials of such kinds.",Object(i.b)("sup",Object(s.a)({parentName:"p"},{id:"fnref-1"}),Object(i.b)("a",Object(s.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," This allows the Transaction Data Discloser to construct data objects that conform to this information schema, and present it to the Issuer component for actual issuing."),Object(i.b)("p",null,"The Transaction Data Discloser Issuing Policy specifies the kinds of (linked-)data-objects that credentials may be created for. This allows the Transaction Data Discloser to construct such a (linked-)data-objects for every subject-id that identifies a ",Object(i.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," of the class for which a credential can be issued, which can subsequently be sent to the Issuer component that can turn it into a credential of a specific sort."),Object(i.b)("p",null,"You can think of the Transaction Data Discloser as the component that pulls all data together that can be put in a credential (e.g. in a passport), and the Issuer as the component that puts the data in an (empty) passport, and signing it so as to create the actual credential."),Object(i.b)("p",null,"The Transaction Data Discloser may either push credential data to the Issuer component, so that the Issuer always has up-to-date credentials, or it can wait until the Issuer requests credential data for the creation of a credential of a specific type for a specific ",Object(i.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),"."),Object(i.b)("hr",null),Object(i.b)("div",{className:"footnotes"},Object(i.b)("hr",{parentName:"div"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",Object(s.a)({parentName:"ol"},{id:"fn-1"}),"We assume/stipulate that the ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," maintains a credential catalogue that contains this, and other information about every kind of credential that it issues, and that such catalogues are available to other ",Object(i.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," that want or need to use such credentials.",Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}u.isMDXComponent=!0}}]);