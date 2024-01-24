"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[3545],{3278:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=s(5893),n=s(1151);const r={id:"credential",displayed_sidebar:"essifLabSideBar",termType:"concept",term:"credential",formPhrases:["credential{ss}","verifiable-credential{ss}","attribute-based-credential{ss}"],status:"draft",grouptags:null,hoverText:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",glossaryTerm:"Credential",glossaryText:"data, representing a set of [assertion](@) (claims, statements), authored and signed by, or on behalf of, a specific [party](@).",date:20210601},i="Credential",o={id:"terms/credential",title:"Credential",description:"Short Description",source:"@site/docs/terms/credential.md",sourceDirName:"terms",slug:"/terms/credential",permalink:"/framework/docs/terms/credential",draft:!1,unlisted:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/credential.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1705046717,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{id:"credential",displayed_sidebar:"essifLabSideBar",termType:"concept",term:"credential",formPhrases:["credential{ss}","verifiable-credential{ss}","attribute-based-credential{ss}"],status:"draft",grouptags:null,hoverText:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",glossaryTerm:"Credential",glossaryText:"data, representing a set of [assertion](@) (claims, statements), authored and signed by, or on behalf of, a specific [party](@).",date:20210601},sidebar:"essifLabSideBar"},c={},d=[{value:"Short Description",id:"short-description",level:3},{value:"Examples",id:"examples",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Notes",id:"notes",level:3},{value:"Related Concepts",id:"related-concepts",level:3},{value:"References:",id:"references",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"credential",children:"Credential"}),"\n",(0,a.jsx)(t.h3,{id:"short-description",children:"Short Description"}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"credential"})," is a set of (related) ",(0,a.jsx)("a",{href:"/framework/docs/terms/assertion",hovertext:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",children:"assertions"})," (also referred to as claims, or statements), to which metadata is added (e.g. date of issuing), and a number of proofs, which typically include a  proof of provenance (i.e. proof that it was created on behalf of a specific ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),"), and a proof of integrity (i.e. proof that the data hasn't changed since it was issued)."]}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.p,{children:["In physical credentials, such as drivers licenses and passports, proofs of integrity usually apply to the physical document itself. They come in a variety of forms, such as the structure of the paper, holograms, watermarks, or (embedded) chips. The proof of provenance usually consists of the form-format of the credential and ",(0,a.jsx)("a",{href:"/framework/docs/terms/assertion",hovertext:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",children:"assertions"})," about the document issuer."]}),"\n",(0,a.jsxs)(t.p,{children:["In digital credentials, such as (digital) certificates or ",(0,a.jsx)(t.a,{href:"https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials",children:"verifiable credentials"}),", the basic proofs (of provenance and integrity) usually consist of a digital signature of some kind. It therefor only 'works' for as long as the associated private/secret key actually remains a secret of the issuing ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Credentials whose ",(0,a.jsx)("a",{href:"/framework/docs/terms/assertion",hovertext:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",children:"assertions"})," refer to some ",(0,a.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"}),", e.g. a person, an organization, an animal, a shipment, etc. In such cases, it must be possible for arbitrary ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"})," to identify that ",(0,a.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"}),", and/or ",(0,a.jsx)("a",{href:"/framework/docs/terms/verify",hovertext:"Verify/verification of data: the act, by or on behalf of a Party, of determining whether that data is authentic (i.e. originates from the Party that authored it), timely (i.e. has not expired), and conforms to other specifications that apply to its structure.",children:"verify"})," an ",(0,a.jsx)("a",{href:"/framework/docs/terms/assertion",hovertext:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",children:"assertion"})," by some other ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," that identifies that ",(0,a.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"}),". To this end, credentials may contain ",(0,a.jsx)("a",{href:"/framework/docs/terms/assertion",hovertext:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",children:"assertions"})," about characteristics of that ",(0,a.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"}),", the idea being that if a ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," establishes that some ",(0,a.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," has (a sufficient number of) these characteristics, that ",(0,a.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," is the one bound to the credential. Attributes typically include one or more names, various dates, a photograph, etc. Other attributes might include biometrics, RFID-codes, bar-codes, etc."]}),"\n",(0,a.jsx)(t.h3,{id:"purpose",children:"Purpose"}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"credential"})," serves to provide assurances regarding the provenance and integrity of data as it is being transferred between ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"}),". Specializations of the generic credential concept may be created for the purpose of providing additional assurances."]}),"\n",(0,a.jsx)(t.h3,{id:"criteria",children:"Criteria"}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"credential"})," is the composition of"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["a non-empty set of arbitrary statements (claims, ",(0,a.jsx)("a",{href:"/framework/docs/terms/assertion",hovertext:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",children:"assertions"}),") that originate from a single ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),";"]}),"\n",(0,a.jsx)(t.li,{children:"a set of metadata (data about the credential itself);"}),"\n",(0,a.jsx)(t.li,{children:"a set of proofs, which includes at least proofs of provenance and integrity."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The term '",(0,a.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"}),"' is often used in conjunction with a credential, as in 'the ",(0,a.jsx)("a",{href:"/framework/docs/terms/subject",hovertext:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",children:"subject"})," of the credential'. This phrase is ambiguous. It may refer to the ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," (or ",(0,a.jsx)("a",{href:"/framework/docs/terms/actor",hovertext:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",children:"actor"}),") to which the credential was issued. It may also be used to indicate the ",(0,a.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," that every claim is made about, which needs not be the same."]}),"\n",(0,a.jsx)(t.li,{children:"Anyone can create credentials containing arbitrary statements about anyone or anything. The mere fact that a statement comes in the form of a credential (i.e. with a signature) doesn't imply that it is true."}),"\n",(0,a.jsxs)(t.li,{children:["The signature on a credential may have other meanings as well. For example, a ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," may choose to only sign the credential data if it is convinced of the truth of the statements, in which case the credential 'payload' can be seen as an excerpt of the ",(0,a.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"})," of that ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),". ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"Parties"})," that sign credential data need to advertise what (other) meaning(s) their signature has, so that other ",(0,a.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"})," may decide whether or not they want to use that data for specific purposes."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"related-concepts",children:"Related Concepts"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials",children:"verifiable credentials"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"references",children:"References:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["W3C VC ",(0,a.jsx)(t.a,{href:"https://www.w3.org/TR/vc-data-model/#dfn-credential",children:"definition of 'credential'"})]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.w3.org/TR/vc-data-model/",children:"W3C Verifiable Credentials Data Model"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var a=s(7294);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);