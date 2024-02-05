"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6854],{8040:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(7624),s=i(2172);const a={id:"identifier",displayed_sidebar:"essifLabSideBar",termType:"concept",term:"identifier",formPhrases:["identifier{ss}"],status:"draft",grouptags:null,hoverText:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",glossaryTerm:"Identifier",glossaryText:"a character string that is being used for the identification of some [entity](@) (yet may refer to 0, 1, or more [entities](@), depending on the context within which it is being used).",date:20210601},r="Identifier",o={id:"terms/identifier",title:"Identifier",description:"Short Description",source:"@site/docs/terms/identifier.md",sourceDirName:"terms",slug:"/terms/identifier",permalink:"/framework/docs/terms/identifier",draft:!1,unlisted:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/identifier.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1705046717,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{id:"identifier",displayed_sidebar:"essifLabSideBar",termType:"concept",term:"identifier",formPhrases:["identifier{ss}"],status:"draft",grouptags:null,hoverText:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",glossaryTerm:"Identifier",glossaryText:"a character string that is being used for the identification of some [entity](@) (yet may refer to 0, 1, or more [entities](@), depending on the context within which it is being used).",date:20210601},sidebar:"essifLabSideBar"},h={},d=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criterion",id:"criterion",level:3},{value:"Examples",id:"examples",level:3},{value:"Notes",id:"notes",level:3},{value:"Discussion - Scope of Identification",id:"discussion---scope-of-identification",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"identifier",children:"Identifier"}),"\n",(0,n.jsx)(t.h3,{id:"short-description",children:"Short Description"}),"\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.strong,{children:"Identifier"})," is a character string that is being used for identification purposes (by a specific ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),").",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," This includes names and labels, as they are (obviously) used for such purposes."]}),"\n",(0,n.jsxs)(t.p,{children:["Note that while an identifier is used for identification purposes, ",(0,n.jsx)("u",{children:"this does not automatically imply that it actually identifies (singles out) anything"}),". It also depends on what ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc3986",children:"RFC 3986"})," calls the 'scope of identification', or what ",(0,n.jsx)(t.a,{href:"https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf",children:"Pfitzmann and Hansen (2010)"})," refer to as an 'identifiability set', which are relevant for explaining whether or not (and if so: what) an identifier actually identifies (singles out) in a given context. See the ",(0,n.jsx)(t.a,{href:"./identifier#discussion---scope-of-identification",children:"Discussion"})," below."]}),"\n",(0,n.jsx)(t.h3,{id:"purpose",children:"Purpose"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"Parties"})," have a need to reason about ",(0,n.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"things"})," they ",(0,n.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"know"})," to exist, which requires them to have a conscious representation of such things, as well as the ability to identify (single) out individual entities. One way to do that is to tag an entity with a character string (label, name), that would then qualify as an identifier."]}),"\n",(0,n.jsxs)(t.p,{children:["Also, identifiers may serve identification purpose in communications between different ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"}),", the idea being that when one ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," mentions an identifier (that identifies some ",(0,n.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," for this ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," ) to another ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),", the latter would be able to determine the ",(0,n.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," that the first is talking about. See the ",(0,n.jsx)(t.a,{href:"./identifier#discussion---scope-of-identification",children:"Discussion"})," below."]}),"\n",(0,n.jsx)(t.h3,{id:"criterion",children:"Criterion"}),"\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.strong,{children:"Identifier"})," is a character string that is being used for identification purposes by a specific ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["The following strings are examples: 'localhost', '",(0,n.jsx)(t.a,{href:"https://localhost/",children:"https://localhost/"}),"', 'Trust over IP community', 'the mayor of New York', 'guardianship', 'my mother', 'did:sov:2wJPyULfLLnYTEFYzByfUR', 'did:sov:2wJ', 'issue #24', etc., etc."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.h3,{id:"discussion---scope-of-identification",children:"Discussion - Scope of Identification"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc3986#section-1.1",children:"RFC 3986, Section 1.1."})," states ",(0,n.jsxs)(t.em,{children:['"an identifier embodies the information required to distinguish what is being identified from all other things within ',(0,n.jsx)("u",{children:"its"})," ",(0,n.jsx)(t.strong,{children:'scope of identification"'})]}),'. This statement suggests that identifiers (URIs) have a single scope, supposedly specified by "',(0,n.jsx)(t.em,{children:"the URI schemes and naming authority (if any)"}),'". However, there is no such requirement, and there is nothing in place to guarantee this (apart from IANA, many other (sometimes even very commonly used) URI schemes exist). ',(0,n.jsx)(t.a,{href:"https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf",children:"Pfitzmann and Hansen (2010)"})," (section 13.2) use the term 'identifiability sets' rather than 'scope of identification', and describe how 'attackers' - but that could equally well have been regular users - each have, or construct their own scope, and use contextual information to do so."]}),"\n",(0,n.jsxs)(t.p,{children:["The criterion that makes a text string qualify as an identifier doesn't seem to cut it, as only ",(0,n.jsx)(t.em,{children:"using"})," a text for identification purposes doesn't make it have (what we will call) the 'identification property', i.e. the property that it ",(0,n.jsx)(t.em,{children:"actually"})," identifies something. It may only have that property in combination with an associated (single) scope of identification, which may depend on the context in which it is being used. ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc3986#page-6",children:"RFC 2986, page 6"}),' illustrates this using the identifier "',(0,n.jsx)(t.a,{href:"http://lcoalhost/",children:"http://lcoalhost/"}),'".']}),"\n",(0,n.jsxs)(t.p,{children:["The lack of (identifying) scopes of identification becomes an issue when a ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," (say Alice) sends the identifier (e.g. ",(0,n.jsx)(t.code,{children:"my car"}),") to another ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"party"})," (say Bob), expecting that Bob will then be able to identify the same ",(0,n.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," that she identifies with it (presumably some specific car)."]}),"\n",(0,n.jsxs)(t.p,{children:["If Bob had just met Alice for the first time, and hadn't seen her coming in a car, then Alice must acquaint Bob with the existence of the ",(0,n.jsx)("a",{href:"/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist.",children:"entity"})," that she refers to with ",(0,n.jsx)(t.code,{children:"my car"}),", e.g. by pointing her finger to it, or describing the make, brand and license plate or some other characteristic that allows Bob to single out her car (in the context of their meeting one another). Then, Bob can 'register' the existence of that car in his ",(0,n.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"})," (optionally tagging it with an identifier of his own, e.g. ",(0,n.jsx)(t.code,{children:"Alice's car"}),"), and associate it with the attribute (party='Alice', identifier='",(0,n.jsx)(t.code,{children:"my car"}),"'). It is important to have the \"party='Alice'\" part in there, because other parties, (e.g. Carol) may also use an identifier ",(0,n.jsx)(t.code,{children:"my car"}),", which would and should then refer to another car. This shows that the scope of interpretation for an identifier has to do with the (",(0,n.jsx)("a",{href:"/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",children:"knowledge"})," of) ",(0,n.jsx)("a",{href:"/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",children:"parties"})," that use it, and that understanding the intended meaning requires a proper identification of that scope."]}),"\n",(0,n.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,n.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,n.jsxs)(t.p,{children:["This is the definition of ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc3986#section-1.1",children:"RFC 3986, Section 1.1."})," but without the requirement of complying with URI syntax constraints. Note that there is consensus in the literature about this. For example, ",(0,n.jsx)(t.a,{href:"http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html",children:"(Allen, 2016)"})," defines 'Identifier' as \u201cA name or other label that uniquely identifies an identity.\u201d. ",(0,n.jsx)(t.a,{href:"https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf",children:"Pfitzmann and Hansen, 2010"})," say (in footnote 57): \u201cA name or another bit string\u201d. The ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/did-core/",children:"DID-core specification"})," of W3C ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers",children:"defines 'decentralized identifiers' as specializations of URIs"}),". ",(0,n.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2172:(e,t,i)=>{i.d(t,{I:()=>o,M:()=>r});var n=i(1504);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);