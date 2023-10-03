"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[3545],{6124:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return l}});var s=a(3117),r=a(102),n=(a(7294),a(3905)),i=a(4345),o=["components"],d={id:"credential",title:"Credential",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",termid:"credential",term:"credential",formphrases:"credential{ss}, verifiable-credential{ss}, attribute-based-credential{ss}",status:"draft",grouptags:null,hoverText:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",glossaryText:"data, representing a set of %%assertions^assertion%% (claims, statements), authored and signed by, or on behalf of, a specific %%party^party%%.",date:20210601},c=void 0,m={unversionedId:"terms/credential",id:"terms/credential",title:"Credential",description:"Short Description",source:"@site/docs/terms/credential.md",sourceDirName:"terms",slug:"/terms/credential",permalink:"/framework/docs/terms/credential",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/credential.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1696252654,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"credential",title:"Credential",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",termid:"credential",term:"credential",formphrases:"credential{ss}, verifiable-credential{ss}, attribute-based-credential{ss}",status:"draft",grouptags:null,hoverText:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",glossaryText:"data, representing a set of %%assertions^assertion%% (claims, statements), authored and signed by, or on behalf of, a specific %%party^party%%.",date:20210601},sidebar:"essifLabSideBar"},p={},l=[{value:"Short Description",id:"short-description",level:3},{value:"Examples",id:"examples",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Notes",id:"notes",level:3},{value:"Related Concepts",id:"related-concepts",level:3},{value:"References:",id:"references",level:3}],u={toc:l};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"short-description"},"Short Description"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"credential")," is a set of (related) ",(0,n.kt)(i.Z,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions")," (also referred to as claims, or statements), to which metadata is added (e.g. date of issuing), and a number of proofs, which typically include a  proof of provenance (i.e. proof that it was created on behalf of a specific ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"), and a proof of integrity (i.e. proof that the data hasn't changed since it was issued)."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"In physical credentials, such as drivers licenses and passports, proofs of integrity usually apply to the physical document itself. They come in a variety of forms, such as the structure of the paper, holograms, watermarks, or (embedded) chips. The proof of provenance usually consists of the form-format of the credential and ",(0,n.kt)(i.Z,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions")," about the document issuer."),(0,n.kt)("p",null,"In digital credentials, such as (digital) certificates or ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials"},"verifiable credentials"),", the basic proofs (of provenance and integrity) usually consist of a digital signature of some kind. It therefor only 'works' for as long as the associated private/secret key actually remains a secret of the issuing ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"."),(0,n.kt)("p",null,"Credentials whose ",(0,n.kt)(i.Z,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions")," refer to some ",(0,n.kt)(i.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity"),", e.g. a person, an organization, an animal, a shipment, etc. In such cases, it must be possible for arbitrary ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," to identify that ",(0,n.kt)(i.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity"),", and/or ",(0,n.kt)(i.Z,{popup:"Verify/verification of data: the act, by or on behalf of a Party, of determining whether that data is authentic (i.e. originates from the Party that authored it), timely (i.e. has not expired), and conforms to other specifications that apply to its structure.",reference:"/framework/docs/terms/verify",mdxType:"Term"},"verify")," an ",(0,n.kt)(i.Z,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertion")," by some other ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that identifies that ",(0,n.kt)(i.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity"),". To this end, credentials may contain ",(0,n.kt)(i.Z,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions")," about characteristics of that ",(0,n.kt)(i.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity"),", the idea being that if a ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," establishes that some ",(0,n.kt)(i.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," has (a sufficient number of) these characteristics, that ",(0,n.kt)(i.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," is the one bound to the credential. Attributes typically include one or more names, various dates, a photograph, etc. Other attributes might include biometrics, RFID-codes, bar-codes, etc."),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"credential")," serves to provide assurances regarding the provenance and integrity of data as it is being transferred between ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),". Specializations of the generic credential concept may be created for the purpose of providing additional assurances."),(0,n.kt)("h3",{id:"criteria"},"Criteria"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"credential")," is the composition of"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a non-empty set of arbitrary statements (claims, ",(0,n.kt)(i.Z,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions"),") that originate from a single ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),";"),(0,n.kt)("li",{parentName:"ul"},"a set of metadata (data about the credential itself);"),(0,n.kt)("li",{parentName:"ul"},"a set of proofs, which includes at least proofs of provenance and integrity.")),(0,n.kt)("h3",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The term '",(0,n.kt)(i.Z,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),"' is often used in conjunction with a credential, as in 'the ",(0,n.kt)(i.Z,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," of the credential'. This phrase is ambiguous. It may refer to the ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," (or ",(0,n.kt)(i.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor"),") to which the credential was issued. It may also be used to indicate the ",(0,n.kt)(i.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," that every claim is made about, which needs not be the same."),(0,n.kt)("li",{parentName:"ul"},"Anyone can create credentials containing arbitrary statements about anyone or anything. The mere fact that a statement comes in the form of a credential (i.e. with a signature) doesn't imply that it is true."),(0,n.kt)("li",{parentName:"ul"},"The signature on a credential may have other meanings as well. For example, a ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," may choose to only sign the credential data if it is convinced of the truth of the statements, in which case the credential 'payload' can be seen as an excerpt of the ",(0,n.kt)(i.Z,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of that ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),". ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties")," that sign credential data need to advertise what (other) meaning(s) their signature has, so that other ",(0,n.kt)(i.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," may decide whether or not they want to use that data for specific purposes.")),(0,n.kt)("h3",{id:"related-concepts"},"Related Concepts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials"},"verifiable credentials"))),(0,n.kt)("h3",{id:"references"},"References:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"W3C VC ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#dfn-credential"},"definition of 'credential'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/"},"W3C Verifiable Credentials Data Model"))))}h.isMDXComponent=!0}}]);