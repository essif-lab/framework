"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[8488],{9497:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return l},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return c}});var n=i(3117),a=i(102),s=(i(7294),i(3905)),r=i(4345),o=["components"],d={id:"identifier",title:"Identifier",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",termid:"identifier",formphrases:"identifier{ss}",status:"draft",grouptags:null,hoverText:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",glossaryText:"a character string that is being used for the identification of some %%entity^entity%% (yet may refer to 0, 1, or more %%entities^entity%%, depending on the context within which it is being used).",date:20210601},p=void 0,h={unversionedId:"terms/identifier",id:"terms/identifier",title:"Identifier",description:"Short Description",source:"@site/docs/terms/identifier.md",sourceDirName:"terms",slug:"/terms/identifier",permalink:"/framework/docs/terms/identifier",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/identifier.md",tags:[],version:"current",frontMatter:{id:"identifier",title:"Identifier",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",termid:"identifier",formphrases:"identifier{ss}",status:"draft",grouptags:null,hoverText:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",glossaryText:"a character string that is being used for the identification of some %%entity^entity%% (yet may refer to 0, 1, or more %%entities^entity%%, depending on the context within which it is being used).",date:20210601},sidebar:"essifLabSideBar"},m={},c=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criterion",id:"criterion",level:3},{value:"Examples",id:"examples",level:3},{value:"Notes",id:"notes",level:3},{value:"Discussion - Scope of Identification",id:"discussion---scope-of-identification",level:3}],f={toc:c};function l(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"short-description"},"Short Description"),(0,s.kt)("p",null,"An ",(0,s.kt)("strong",{parentName:"p"},"Identifier")," is a character string that is being used for identification purposes (by a specific ",(0,s.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),").",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," This includes names and labels, as they are (obviously) used for such purposes."),(0,s.kt)("p",null,"Note that while an identifier is used for identification purposes, ",(0,s.kt)("u",null,"this does not automatically imply that it actually identifies (singles out) anything"),". It also depends on what ",(0,s.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3986"},"RFC 3986")," calls the 'scope of identification', or what ",(0,s.kt)("a",{parentName:"p",href:"https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf"},"Pfitzmann and Hansen (2010)")," refer to as an 'identifiability set', which are relevant for explaining whether or not (and if so: what) an identifier actually identifies (singles out) in a given context. See the ",(0,s.kt)("a",{parentName:"p",href:"./identifier#discussion---scope-of-identification"},"Discussion")," below."),(0,s.kt)("h3",{id:"purpose"},"Purpose"),(0,s.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties")," have a need to reason about ",(0,s.kt)(r.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"things")," they ",(0,s.kt)(r.Z,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"know")," to exist, which requires them to have a conscious representation of such things, as well as the ability to identify (single) out individual entities. One way to do that is to tag an entity with a character string (label, name), that would then qualify as an identifier.",(0,s.kt)("p",null,"Also, identifiers may serve identification purpose in communications between different ",(0,s.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),", the idea being that when one ",(0,s.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," mentions an identifier (that identifies some ",(0,s.kt)(r.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," for this ",(0,s.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," ) to another ",(0,s.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", the latter would be able to determine the ",(0,s.kt)(r.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," that the first is talking about. See the ",(0,s.kt)("a",{parentName:"p",href:"./identifier#discussion---scope-of-identification"},"Discussion")," below."),(0,s.kt)("h3",{id:"criterion"},"Criterion"),(0,s.kt)("p",null,"An ",(0,s.kt)("strong",{parentName:"p"},"Identifier")," is a character string that is being used for identification purposes by a specific ",(0,s.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("p",null,"The following strings are examples: 'localhost', 'https://localhost/', 'Trust over IP community', 'the mayor of New York', 'guardianship', 'my mother', 'did:sov:2wJPyULfLLnYTEFYzByfUR', 'did:sov:2wJ', 'issue #24', etc., etc."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"notes"},"Notes"),(0,s.kt)("h3",{id:"discussion---scope-of-identification"},"Discussion - Scope of Identification"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3986#section-1.1"},"RFC 3986, Section 1.1.")," states ",(0,s.kt)("em",{parentName:"p"},'"an identifier embodies the information required to distinguish what is being identified from all other things within ',(0,s.kt)("u",null,"its")," ",(0,s.kt)("strong",{parentName:"em"},'scope of identification"')),'. This statement suggests that identifiers (URIs) have a single scope, supposedly specified by "',(0,s.kt)("em",{parentName:"p"},"the URI schemes and naming authority (if any)"),'". However, there is no such requirement, and there is nothing in place to guarantee this (apart from IANA, many other (sometimes even very commonly used) URI schemes exist). ',(0,s.kt)("a",{parentName:"p",href:"https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf"},"Pfitzmann and Hansen (2010)")," (section 13.2) use the term 'identifiability sets' rather than 'scope of identification', and describe how 'attackers' - but that could equally well have been regular users - each have, or construct their own scope, and use contextual information to do so."),(0,s.kt)("p",null,"The criterion that makes a text string qualify as an identifier doesn't seem to cut it, as only ",(0,s.kt)("em",{parentName:"p"},"using")," a text for identification purposes doesn't make it have (what we will call) the 'identification property', i.e. the property that it ",(0,s.kt)("em",{parentName:"p"},"actually")," identifies something. It may only have that property in combination with an associated (single) scope of identification, which may depend on the context in which it is being used. ",(0,s.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3986#page-6"},"RFC 2986, page 6"),' illustrates this using the identifier "http://lcoalhost/".'),(0,s.kt)("p",null,"The lack of (identifying) scopes of identification becomes an issue when a ",(0,s.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," (say Alice) sends the identifier (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"my car"),") to another ",(0,s.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," (say Bob), expecting that Bob will then be able to identify the same ",(0,s.kt)(r.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," that she identifies with it (presumably some specific car)."),(0,s.kt)("p",null,"If Bob had just met Alice for the first time, and hadn't seen her coming in a car, then Alice must acquaint Bob with the existence of the ",(0,s.kt)(r.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," that she refers to with ",(0,s.kt)("inlineCode",{parentName:"p"},"my car"),", e.g. by pointing her finger to it, or describing the make, brand and license plate or some other characteristic that allows Bob to single out her car (in the context of their meeting one another). Then, Bob can 'register' the existence of that car in his ",(0,s.kt)(r.Z,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," (optionally tagging it with an identifier of his own, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"Alice's car"),"), and associate it with the attribute (party='Alice', identifier='",(0,s.kt)("inlineCode",{parentName:"p"},"my car"),"'). It is important to have the \"party='Alice'\" part in there, because other parties, (e.g. Carol) may also use an identifier ",(0,s.kt)("inlineCode",{parentName:"p"},"my car"),", which would and should then refer to another car. This shows that the scope of interpretation for an identifier has to do with the (",(0,s.kt)(r.Z,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of) ",(0,s.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," that use it, and that understanding the intended meaning requires a proper identification of that scope."),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"This is the definition of ",(0,s.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc3986#section-1.1"},"RFC 3986, Section 1.1.")," but without the requirement of complying with URI syntax constraints. Note that there is consensus in the literature about this. For example, ",(0,s.kt)("a",{parentName:"li",href:"http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html"},"(Allen, 2016)")," defines 'Identifier' as \u201cA name or other label that uniquely identifies an identity.\u201d. ",(0,s.kt)("a",{parentName:"li",href:"https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf"},"Pfitzmann and Hansen, 2010")," say (in footnote 57): \u201cA name or another bit string\u201d. The ",(0,s.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/"},"DID-core specification")," of W3C ",(0,s.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"defines 'decentralized identifiers' as specializations of URIs"),".",(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}l.isMDXComponent=!0}}]);