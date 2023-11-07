"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[9414],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return f}});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=i.createContext({}),p=function(e){var t=i.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return i.createElement(h.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,h=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(a),f=r,u=c["".concat(h,".").concat(f)]||c[f]||d[f]||n;return a?i.createElement(u,o(o({ref:t},l),{},{components:a})):i.createElement(u,o({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=c;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<n;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3810:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return h},metadata:function(){return l},toc:function(){return c}});var i=a(3117),r=a(102),n=(a(7294),a(3905)),o=a(4996),s=["components"],h={id:"pattern-identity",title:"Identity Pattern",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"pattern",term:"pattern-identity",formPhrases:null,status:"draft",grouptags:null,hoverText:"The eSSIF-Lab Identity Pattern shows how digital identities work, how this relates to (attributes in) credentials, and how all this can be made to work in SSI contexts.",date:20210803},p=void 0,l={unversionedId:"terms/pattern-identity",id:"terms/pattern-identity",title:"Identity Pattern",description:"Purpose",source:"@site/docs/terms/pattern-identity.md",sourceDirName:"terms",slug:"/terms/pattern-identity",permalink:"/framework/docs/terms/pattern-identity",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/pattern-identity.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1699367068,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"pattern-identity",title:"Identity Pattern",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"pattern",term:"pattern-identity",formPhrases:null,status:"draft",grouptags:null,hoverText:"The eSSIF-Lab Identity Pattern shows how digital identities work, how this relates to (attributes in) credentials, and how all this can be made to work in SSI contexts.",date:20210803},sidebar:"essifLabSideBar",previous:{title:"Terminology Pattern",permalink:"/framework/docs/terms/pattern-terminology"},next:{title:"Identification Pattern",permalink:"/framework/docs/terms/pattern-identification"}},d={},c=[{value:"Purpose",id:"purpose",level:3},{value:"Introduction",id:"introduction",level:3},{value:"Formalized model",id:"formalized-model",level:3},{value:"Identity - Information Realm",id:"identity---information-realm",level:3},{value:"Identity - Data Realm",id:"identity---data-realm",level:3}],f={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Identity pattern")," captures the concepts and relations that explain how digital identities work, how this relates to (attributes in) ",(0,n.kt)("a",{parentName:"p",href:"@"},"credentials"),", and how all this can be made to work in ",(0,n.kt)("a",{parentName:"p",href:"self-sovereign-identity@"},"SSI contexts"),"."),(0,n.kt)("h3",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The term 'identity' is ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Identity"},"used in many ways")," in different contexts, and is often related to intangibles, such as feelings, emotions, ideas of belonging, and the like. However, in ",(0,n.kt)("a",{parentName:"p",href:"self-sovereign-identity@"},"SSI contexts"),", we need to work with tangible things - specifically: data that can be issued, stored, processed, transferred, requested and obtained. Still, in such contexts, we have observed that people use the term 'identity' to refer to various concepts/ideas, e.g.:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a string of alphanumeric characters that can be used to ",(0,n.kt)("a",{parentName:"li",href:"identifier@"},"identify")," someone, e.g. a name or an identification number (in general: an ",(0,n.kt)("a",{parentName:"li",href:"@"},"identifier"),"),"),(0,n.kt)("li",{parentName:"ul"},"a (coherent) set of ",(0,n.kt)("a",{parentName:"li",href:"@"},"assertions")," (statements, claims) about someone, represented as data, e.g. digital, or in print, usually including an ",(0,n.kt)("a",{parentName:"li",href:"@"},"identifier")," of some kind;"),(0,n.kt)("li",{parentName:"ul"},"an artifact that contains such data, e.g. a passport, a (digitally signed) credential.")),(0,n.kt)("p",null,"(Digital) identities, or personal data, are often associated with the ability to ",(0,n.kt)("a",{parentName:"p",href:"@"},"identify")," a person. ",(0,n.kt)("a",{parentName:"p",href:"https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf"},"Pfitzmann and Hansen, 2010"),", who tried to come up with a consolidated set of terms for identity and privacy, say that 'identity' is ",(0,n.kt)("em",{parentName:"p"},"a subset of attribute values of a person which sufficiently identifies this person within any set of persons"),". The ",(0,n.kt)("a",{parentName:"p",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e1489-1-1"},"GDPR definition of personal data"),' is "',(0,n.kt)("em",{parentName:"p"},"any information relating to an identified or identifiable natural person ('data ",(0,n.kt)("a",{parentName:"em",href:"@"},"subject"),"'); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person"),'".'),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"@"},"Definitions")," such as these have various difficulties, perhaps the most prominent of which is that they do not provide a criterion that different people can use for determining whether or not something qualifies as an 'identity', and be in agreement on that. As a consequence, the relevance of having an identity, particularly in an ",(0,n.kt)("a",{parentName:"p",href:"self-sovereign-identity@"},"SSI context"),", is not clear. Therefore, rather than searching for an answer to the question what an identity is, or should be, this ",(0,n.kt)("a",{parentName:"p",href:"@"},"pattern")," seeks to identify the ",(0,n.kt)("a",{parentName:"p",href:"@"},"concepts")," (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about who or what an ",(0,n.kt)("a",{parentName:"p",href:"@"},"entity")," actually ",(0,n.kt)("em",{parentName:"p"},"is"),". Readers that are interested in ",(0,n.kt)("a",{parentName:"p",href:"identify@"},"identification")," aspects are kindly referred to the ",(0,n.kt)("a",{parentName:"p",href:"pattern-identification@"},"identification pattern"),"."),(0,n.kt)("p",null,"The figure below illustrates the concept of/idea that the ",(0,n.kt)("em",{parentName:"p"},"being")," of a person, i.e. who the person is, is determined by everyone that has ideas, or knows about this person. This seems to be very much in line with the paradigm of ",(0,n.kt)("a",{parentName:"p",href:"https://aeon.co/essays/the-self-is-not-singular-but-a-fluid-network-of-identities"},"identity as a network"),', as worked out by Kathleen Wallace: "',(0,n.kt)("a",{parentName:"p",href:"https://www.routledge.com/The-Network-Self-Relation-Process-and-Personal-Identity-1st-Edition/Wallace/p/book/9780367077488"},"The Network Self"),'".'),(0,n.kt)("p",null,"In our model, we postulate that ",(0,n.kt)("a",{parentName:"p",href:"@"},"identity")," is related to who or what an ",(0,n.kt)("a",{parentName:"p",href:"@"},"entity")," actually ",(0,n.kt)("em",{parentName:"p"},"is"),", and that this is the combined perception (",(0,n.kt)("a",{parentName:"p",href:"@"},"knowledge"),") of all ",(0,n.kt)("a",{parentName:"p",href:"@"},"parties")," that know about that entity's existence."),(0,n.kt)("img",{alt:"Various partial identities for subject Piet van der Kluns, including a self-identity",src:(0,o.Z)("images/essif-lab-partial-identities.png")}),(0,n.kt)("p",null,"The figure has a person in its center (the 'protagonist' of the example) calls himself Piet van der Kluns, and perceives himself as being 28 years old, humorous and sporty. The other figures (a judge, a photographer, a colleague, and a mechanic) represent ",(0,n.kt)("a",{parentName:"p",href:"@"},"parties"),", each of which has its own view on the protagonist. The photographer finds him expressionless and dull, his colleague considers Piet to be reliable and helpful. They all have their own, subjective view on the protagonist, which can be expressed in terms of judgements and characteristics that they attribute to the protagonist. The number of parties that know about the protagonist will initially be very small, but will become larger over time. Also, the judgements and characteristics that parties attribute to the protagonist will develop and change over time."),(0,n.kt)("p",null,"It seems reasonable to say that the set of all judgements and characteristics that parties have attributed to the protagonist at some point in time represent who or what that protagonist actually ",(0,n.kt)("em",{parentName:"p"},"is")," (at that time), and we might call that its ",(0,n.kt)("a",{parentName:"p",href:"@"},"identity"),"."),(0,n.kt)("p",null,"However, this term has little practical relevance. First, the ",(0,n.kt)("a",{parentName:"p",href:"@"},"semantics")," of any attribution is (autonomously) decided by the attributing ",(0,n.kt)("a",{parentName:"p",href:"@"},"party"),", implying that attributes of different parties cannot be readily compared. The figure illustrates this by having the mechanic judge the protagonist to be unreliable, whereas the colleague finds him reliable. But even if parties agree, e.g. the photographer and mechanic both characterize the protagonist as a customer, but it does mean different things. While for a photographer, a customer is a person that it can instruct to sit down, perhaps do some make-up on, and take a picture of, this is not the case for a mechanic."),(0,n.kt)("p",null,"More importantly, in interactions between the protagonist and an arbitrary ",(0,n.kt)("a",{parentName:"p",href:"@"},"party"),", the latter will act, and make decisions using only its own, subjective ",(0,n.kt)("a",{parentName:"p",href:"@"},"knowledge"),". Any information about the protagonist that is used for that must therefore come from the part of the protagonist's identity that is also part of that ",(0,n.kt)("a",{parentName:"p",href:"@"},"party's")," ",(0,n.kt)("a",{parentName:"p",href:"@"},"knowledge"),". We will use the term ",(0,n.kt)("a",{parentName:"p",href:"@"},"partial identity")," of some ",(0,n.kt)("a",{parentName:"p",href:"@"},"entity")," as the ",(0,n.kt)("a",{parentName:"p",href:"@"},"knowledge")," that a specific ",(0,n.kt)("a",{parentName:"p",href:"@"},"party")," has about that ",(0,n.kt)("a",{parentName:"p",href:"@"},"entity"),". It implies that the identity of such an entity is the union of all of its partial identities."),(0,n.kt)("p",null,"This use of attributions is particularly relevant for ",(0,n.kt)("a",{parentName:"p",href:"self-sovereign-identity@"},"SSI contexts")," in which the focus is on supporting (electronic) ",(0,n.kt)("a",{parentName:"p",href:"@"},"transactions"),". That support consists, amongst other things, of enabling a participating ",(0,n.kt)("a",{parentName:"p",href:"@"},"party")," to request for, and obtain data that are statements about ",(0,n.kt)("a",{parentName:"p",href:"@"},"entities")," (in particular about other participating parties) that this party determines to be ",(0,n.kt)("a",{parentName:"p",href:"validate@"},"valid")," for making the decision of whether or not to commit. Knowing the ",(0,n.kt)("a",{parentName:"p",href:"@"},"party")," that authored (issued) such data helps to determine not only the meaning of that data, but also to determine its (un)trustworthiness. Knowing that a set of data originates from a single partial identity is a prerequisite for doing this."),(0,n.kt)("h3",{id:"formalized-model"},"Formalized model"),(0,n.kt)("p",null,"Here is a visual representation of this pattern, using the following ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"../notations-and-conventions#pattern-diagram-notations"},"notations and conventions")),":"),(0,n.kt)("img",{alt:"Conceptual model of the 'Identity' pattern",src:(0,o.Z)("images/patterns/pattern-identity.png")}),(0,n.kt)("p",null,"The figure makes a strict distinction between (intangible) information concepts, which are presented in the purple area called 'information realm', and (tangible) data concepts, presented in the green 'data realm'. This enables us to link (tangible) data items that can be created, stored, processed, requested and obtained between (",(0,n.kt)("a",{parentName:"p",href:"@"},"actors")," of) various ",(0,n.kt)("a",{parentName:"p",href:"@"},"parties")," with the (",(0,n.kt)("a",{parentName:"p",href:"@"},"knowledge")," of) these parties, where actual decisions are being made. For details about ",(0,n.kt)("a",{parentName:"p",href:"@"},"parties"),", ",(0,n.kt)("a",{parentName:"p",href:"@"},"actors")," and ",(0,n.kt)("a",{parentName:"p",href:"@"},"actions")," and their relations, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"pattern-party-actor-action@"},"party-actor-action pattern"),"."),(0,n.kt)("h3",{id:"identity---information-realm"},"Identity - Information Realm"),(0,n.kt)("p",null,"The figure expresses that an ",(0,n.kt)("a",{parentName:"p",href:"@"},"entity")," that is known to a ",(0,n.kt)("a",{parentName:"p",href:"@"},"party")," can be attributed characteristics, the precise nature of which is defined and determined in the ",(0,n.kt)("a",{parentName:"p",href:"@"},"knowledge")," of that party. The ",(0,n.kt)("a",{parentName:"p",href:"@"},"partial identity")," of which that entity is the ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),", is comprised of every characteristic that the party has attributed to. We also hold that parties will associate each such attribution with a level of certainty, i.e. a measure of the strength of their belief that the attribution is correct. Such a level of certainty helps parties to determine whether or not the characteristic can be used for making certain decisions (i.e. is ",(0,n.kt)("a",{parentName:"p",href:"validate@"},"valid")," in arguments leading to such decisions)."),(0,n.kt)("p",null,"Hence, the partial identity is part of the knowledge of that party, which implies that the party ",(0,n.kt)("a",{parentName:"p",href:"@"},"owns")," the partial identity, and governs it."),(0,n.kt)("p",null,"By saying that a ",(0,n.kt)("a",{parentName:"p",href:"@"},"party")," is also an ",(0,n.kt)("a",{parentName:"p",href:"@"},"entity"),", it follows that if it knows itself to exist, it can attribute characteristics to itself, and hence have a partial identity for which it is the ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),"."),(0,n.kt)("p",null,"For completeness sake, the figure shows that the ",(0,n.kt)("a",{parentName:"p",href:"@"},"identity")," of which the entity is the ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject")," is comprised of all partial identities of which that entity is the ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),", including the partial identity for which it is the ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),". The figure thus (correctly) suggests that this term, while it can be properly defined, has no further relevance - at least not for our purposes."),(0,n.kt)("p",null,"The last item in the information realm is the ",(0,n.kt)("a",{parentName:"p",href:"@"},"identifier")," concept, which is better explained in the ",(0,n.kt)("a",{parentName:"p",href:"pattern-identification@"},"identification pattern"),"."),(0,n.kt)("p",null,"Notice that the ",(0,n.kt)("a",{parentName:"p",href:"@"},"knowledge")," of a ",(0,n.kt)("a",{parentName:"p",href:"@"},"party")," defines (specifies, contains) whatever there is to know. This includes a specification of characteristics, the meaning and allowed values for the levels of certainty, the kinds of identifiers to use in various circumstances, etc. Also, this knowledge contains the set of (all) ",(0,n.kt)("a",{parentName:"p",href:"@"},"identifiers")," that the party has defined/created itself for ",(0,n.kt)("a",{parentName:"p",href:"identifier@"},"identifying")," ",(0,n.kt)("a",{parentName:"p",href:"@"},"entities")," in various circumstances."),(0,n.kt)("p",null,"Finally, the ",(0,n.kt)("a",{parentName:"p",href:"@"},"knowledge")," of a ",(0,n.kt)("a",{parentName:"p",href:"@"},"party")," also holds the ",(0,n.kt)("a",{parentName:"p",href:"@"},"policies")," by which its ",(0,n.kt)("a",{parentName:"p",href:"@"},"actors")," determine which values and which (predicate and ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),") identifiers to use for the creation of claims (attributes) and how to construct credentials from such attributes. While in general we would like to believe that an attribute that an ",(0,n.kt)("a",{parentName:"p",href:"@"},"agent")," of a ",(0,n.kt)("a",{parentName:"p",href:"@"},"party")," creates is a truthful representation of a characteristic in that party's knowledge (which is everything the party believes to be true), there is no guarantee for that. Parties may lie."),(0,n.kt)("h3",{id:"identity---data-realm"},"Identity - Data Realm"),(0,n.kt)("p",null,"In the data realm, the figure also shows that a ",(0,n.kt)("a",{parentName:"p",href:"@"},"credential")," consists of various claims, each of which represents a (possibly complex) statement about an ",(0,n.kt)("a",{parentName:"p",href:"@"},"entity")," that is referred to as its ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),". To this end, the claim consists of a ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject")," identifier (which in practice may be implied - hence the 0..1 multiplicity), a(n identifier for the) predicate, which refers to the characteristic that is attributed to the ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),", and 0..n values that provide the details of the characteristic. For example, if the characteristic is 'level of trustworthiness', there would be one value that represents the level of trustworthiness. If the characteristic is 'is over 18 years old', then no value is required. If the characteristic is 'children', the value may be a list of data objects, each of which would represent a person that allegedly is a child of the ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),"."),(0,n.kt)("p",null,"As said before, it is not self-evident that when a party creates attributes for some ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),", such attributes actually reflect the characteristics that the party believes to be true for that ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),". Parties may lie."),(0,n.kt)("p",null,"Sets of claims can be aggregated, meta data can be added to that (e.g. signatures and other proofs) to form credentials of various kinds. While ideally a ",(0,n.kt)("a",{parentName:"p",href:"@"},"credential")," would represent a subset of the ",(0,n.kt)("a",{parentName:"p",href:"@"},"partial identity")," of its ",(0,n.kt)("a",{parentName:"p",href:"@"},"subject"),", this can also not be guaranteed."),(0,n.kt)("p",null,"Digital signatures and other cryptographic proofs do not relate in any way to the truth of the information that the signed/proved data represents. However, they do serve other purposes. Under the assumption that there is no doubt that the private key that is used to digitally sign some data is under the exclusive control of a single party, the signature algorithm is secure and well-implemented, and the corresponding public key can reliably be dereferenced to that party, then that signature provides a proof of provenance of that data, as well a proof of immutability."))}u.isMDXComponent=!0}}]);