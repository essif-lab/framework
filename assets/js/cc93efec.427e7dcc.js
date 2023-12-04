"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[5102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(a),c=n,f=d["".concat(p,".").concat(c)]||d[c]||h[c]||o;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=a(7462),n=(a(7294),a(3905)),o=a(4996);const i={id:"terminology-construction","// hide_table_of_contents":!0,scopetag:"tev2",date:20220801},s="Terminology Construction",p={unversionedId:"tev2/spec-tools/terminology-construction",id:"tev2/spec-tools/terminology-construction",title:"Terminology Construction",description:"The current TEv2 website is located at https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2",source:"@site/docs/tev2/spec-tools/20-terminology-construction.md",sourceDirName:"tev2/spec-tools",slug:"/tev2/spec-tools/terminology-construction",permalink:"/framework/docs/tev2/spec-tools/terminology-construction",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/spec-tools/20-terminology-construction.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1701258871,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:20,frontMatter:{id:"terminology-construction","// hide_table_of_contents":!0,scopetag:"tev2",date:20220801}},l={},m=[{value:"Adding MRG Entries to the terminology under construction",id:"syntax-add",level:2},{value:"Removing MRG Entries from a terminology under construction",id:"syntax-remove",level:2},{value:"Rename/rewrite specific parts of an MRG entry",id:"syntax-rename",level:2}],d={toc:m},h="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"terminology-construction"},"Terminology Construction"),(0,n.kt)("admonition",{title:"This page is deprecated.",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"The current TEv2 website is located at ",(0,n.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2"},"https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,n.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"@"},"Curators")," need the ability to construct (different versions of) the ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," for any ",(0,n.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope")," they ",(0,n.kt)("a",{parentName:"p",href:"@"},"curate"),"."),(0,n.kt)("p",null,"Constructing a ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," consists of specifying the set of ",(0,n.kt)("a",{parentName:"p",href:"scoped-term@"},"terms")," that the ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," consists of, and making sure there is an ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entry")," that holds all associated (meta) data that other (e.g. third party) tools may need. In other words, it consists of constructing the set of ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entries")," for the ",(0,n.kt)("a",{parentName:"p",href:"scoped-term@"},"terms")," of the ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),"."),(0,n.kt)("p",null,"An ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entry")," contains (meta) data about (the ",(0,n.kt)("a",{parentName:"p",href:"@"},"(scoped) term")," that represents/",(0,n.kt)("a",{href:"/framework/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns."},"identifies"),") a specific ",(0,n.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," (an illustration can be found in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/tev2/terms/patterns/pattern-terminology#formalized-model"},"terminology support pattern"),"). For constructing a ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),", the following such data is relevant (as it enables one to ",(0,n.kt)("a",{href:"/framework/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns."},"identify")," (groups of) ",(0,n.kt)("a",{parentName:"p",href:"scoped-term@"},"terms")," that are to become part of that ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),"):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the (preferred) ",(0,n.kt)("a",{parentName:"li",href:"@"},"(scoped) term")," that represents the ",(0,n.kt)("a",{parentName:"li",href:"@"},"knowledge artifact"),", and its synonymous ",(0,n.kt)("a",{parentName:"li",href:"scoped-term@"},"terms"),";"),(0,n.kt)("li",{parentName:"ul"},"various ",(0,n.kt)("a",{href:"/framework/docs/terms/tag",hovertext:"Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."},"tags"),", amongst which are the ",(0,n.kt)("a",{parentName:"li",href:"@"},"grouptags")," that indicate the groups of ",(0,n.kt)("a",{parentName:"li",href:"scoped-term@"},"terms")," that the ",(0,n.kt)("a",{parentName:"li",href:"scoped-term@"},"term")," is a member of.")),(0,n.kt)("p",null,"The process for creating a ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," is as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"start with an empty set of ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG entries"),' - we use the term "',(0,n.kt)("a",{parentName:"li",href:"@"},"terminology under construction"),'" to refer to this set.'),(0,n.kt)("li",{parentName:"ol"},"sequentially process a list of so-called '",(0,n.kt)("a",{parentName:"li",href:"@"},"term selection criteria"),"' (i.e. instructions), which allow for")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#syntax-add"},"adding")," ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG entries")," to the ",(0,n.kt)("a",{parentName:"li",href:"@"},"terminology under construction"),"; these can either be ",(0,n.kt)("a",{parentName:"li",href:"mrg-entry@"},"entries")," that have been created from ",(0,n.kt)("a",{parentName:"li",href:"@"},"curated texts"),", or ",(0,n.kt)("a",{parentName:"li",href:"mrg-entry@"},"entries")," whose contents is obtained from an ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG")," other than the one that is being created."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#syntax-remove"},"removing")," ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG entries")," from the ",(0,n.kt)("a",{parentName:"li",href:"@"},"terminology under construction"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#syntax-rename"},"modifying attributes")," of a specific ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG entry")," in the ",(0,n.kt)("a",{parentName:"li",href:"@"},"terminology under construction"),", e.g. for renaming a term that originated from another ",(0,n.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope"),".")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"@"},"Curators")," create and maintain the list of '",(0,n.kt)("a",{parentName:"p",href:"@"},"term selection criteria"),"', i.e. instructions for constructing a specific (version of a) ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),". Each such (versioned) ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," has an entry in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/saf#versions"},(0,n.kt)("inlineCode",{parentName:"a"},"versions")," section")," of the ",(0,n.kt)("a",{parentName:"p",href:"@"},"SAF")," (of the designated ",(0,n.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope"),"), and the ",(0,n.kt)("a",{parentName:"p",href:"@"},"term selection criteria")," reside in the ",(0,n.kt)("inlineCode",{parentName:"p"},"termselcrit")," field of that section."),(0,n.kt)("h2",{id:"syntax-add"},"Adding MRG Entries to the ",(0,n.kt)("a",{parentName:"h2",href:"@"},"terminology under construction")),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"@"},"curator")," can add ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entries")," to the ",(0,n.kt)("a",{parentName:"p",href:"@"},"terminology under construction")," from different sources, i.e."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"terms")," that are defined in a [curated text](@) that exists in the current ",(0,n.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope"),", and"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"terms")," that are defined by an [MRG entry](@) in an existing [MRG](@) (from another ",(0,n.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope"),", or another version of the current ",(0,n.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope"),").")),(0,n.kt)("p",null,"Note that any reference to (an ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entry")," in) (the specific version of) the ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that is being constructed, MUST be interpreted as a reference to the ",(0,n.kt)("a",{parentName:"p",href:"@"},"curated text")," from which the ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entry")," would have been constructed."),(0,n.kt)("p",null,"The following instructions can be used for adding ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entries")," (whitespace in the syntax is disregarded):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Instruction",(0,n.kt)("sup",null,"*",")")),(0,n.kt)("th",{parentName:"tr",align:"left"},"The instruction creates, and subsequently adds an ",(0,n.kt)("a",{parentName:"th",href:"@"},"MRG entry")," for every ",(0,n.kt)("a",{parentName:"th",href:"@"},"curated text")," ..."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"terms [ <termslist> ]")),(0,n.kt)("td",{parentName:"tr",align:"left"},"that documents the ",(0,n.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," that is represented by a ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"term")," that appears in the ",(0,n.kt)("inlineCode",{parentName:"td"},"<termslist>"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"tags [ <grouptagslist> ]")),(0,n.kt)("td",{parentName:"tr",align:"left"},"that has an element in the list of ",(0,n.kt)("a",{parentName:"td",href:"@"},"grouptags")," that also appears in the ",(0,n.kt)("inlineCode",{parentName:"td"},"<grouptagslist>"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"*")),(0,n.kt)("td",{parentName:"tr",align:"left"},"that exists within the current ",(0,n.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope"),".")))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<termslist>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<grouptagslist>")," are comma-separated lists of ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"terms")," and ",(0,n.kt)("a",{parentName:"p",href:"@"},"grouptags")," respectively."),(0,n.kt)("p",null,"*",") It is allowed to add ",(0,n.kt)("inlineCode",{parentName:"p"},"@<scopetag>")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"@<scopetag>:<vsntag>")," to the instruction syntax, the effect of which is that the ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entries")," are not created from ",(0,n.kt)("a",{parentName:"p",href:"@"},"curated texts"),", but rather selected from the ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG")," that holds (the specified version of) the ","[terminology]"," of the specified ",(0,n.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope"),". If ",(0,n.kt)("inlineCode",{parentName:"p"},":<vsntag>")," isn't used, the default ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG")," from the specified ",(0,n.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope")," will be used."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,n.kt)("th",{parentName:"tr",align:"left"},"What it does when processed"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"terms[party]@essiflab:v3.1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"gets version ",(0,n.kt)("inlineCode",{parentName:"td"},"v3.1")," of the ",(0,n.kt)("a",{parentName:"td",href:"@"},"MRG")," from the scope ",(0,n.kt)("inlineCode",{parentName:"td"},"essiflab"),", finds the ",(0,n.kt)("a",{parentName:"td",href:"@"},"MRG entry")," associated with the ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"term")," ",(0,n.kt)("inlineCode",{parentName:"td"},"party"),", and adds a copy to the ",(0,n.kt)("a",{parentName:"td",href:"@"},"terminology under construction"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"tags[management,governance]@toip")),(0,n.kt)("td",{parentName:"tr",align:"left"},"gets the default version of the ",(0,n.kt)("a",{parentName:"td",href:"@"},"MRG")," from the scope ",(0,n.kt)("inlineCode",{parentName:"td"},"toip"),", finds the ",(0,n.kt)("a",{parentName:"td",href:"@"},"MRG entries")," that have ",(0,n.kt)("inlineCode",{parentName:"td"},"management")," and/or ",(0,n.kt)("inlineCode",{parentName:"td"},"governance")," as one of their ",(0,n.kt)("a",{parentName:"td",href:"@"},"grouptags"),", and adds a copy for each of them to the ",(0,n.kt)("a",{parentName:"td",href:"@"},"terminology under construction"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"* @essif-lab")),(0,n.kt)("td",{parentName:"tr",align:"left"},"gets the default version of the ",(0,n.kt)("a",{parentName:"td",href:"@"},"MRG")," from the scope ",(0,n.kt)("inlineCode",{parentName:"td"},"essif-lab"),", and adds a copy of all of its ",(0,n.kt)("a",{parentName:"td",href:"@"},"MRG entries")," to the ",(0,n.kt)("a",{parentName:"td",href:"@"},"terminology under construction"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"* @")),(0,n.kt)("td",{parentName:"tr",align:"left"},"creates an ",(0,n.kt)("a",{parentName:"td",href:"@"},"MRG entry")," for every ",(0,n.kt)("a",{parentName:"td",href:"@"},"curated text")," in the current ",(0,n.kt)("a",{href:"/framework/docs/terms/scope",hovertext:"Scope: the extent of the area or subject matter (which we use, e.g., to define Patterns, Concepts, Terms and Glossaries in, but it serves other purposes as well)."},"scope"),", and adds them to the ",(0,n.kt)("a",{parentName:"td",href:"@"},"terminology under construction"),"."))))),(0,n.kt)("h2",{id:"syntax-remove"},"Removing MRG Entries from a ",(0,n.kt)("a",{parentName:"h2",href:"@"},"terminology under construction")),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"@"},"curator")," can remove ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entries")," from the tuple set, using the following syntax (whitespace in the syntax is disregarded):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-tags [ <grouptagslist> ]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-terms [ <termslist> ]"))),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"@"},"curator")," can remove ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entries")," from the ",(0,n.kt)("a",{parentName:"p",href:"@"},"terminology under construction")," in different ways, using the following instructions (whitespace is disregarded):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Instruction",(0,n.kt)("sup",null,"*",")")),(0,n.kt)("th",{parentName:"tr",align:"left"},"The instruction removes an ",(0,n.kt)("a",{parentName:"th",href:"@"},"MRG entry")," from the ",(0,n.kt)("a",{parentName:"th",href:"@"},"terminology under construction")," if ..."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-tags [ <grouptagslist> ]")),(0,n.kt)("td",{parentName:"tr",align:"left"},"one of its ",(0,n.kt)("a",{parentName:"td",href:"@"},"grouptags")," appears in the ",(0,n.kt)("inlineCode",{parentName:"td"},"<groutagslist>"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-terms [ <termslist> ]")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"term")," that it specifies is an element of ",(0,n.kt)("inlineCode",{parentName:"td"},"<termslist>"),".")))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<termslist>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<grouptagslist>")," are comma-separated lists of ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"terms"),", and ",(0,n.kt)("a",{parentName:"p",href:"@"},"grouptags")," respectively."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,n.kt)("th",{parentName:"tr",align:"left"},"What it does when processed"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-terms[party, actor]")),(0,n.kt)("td",{parentName:"tr",align:"left"},"removes the ",(0,n.kt)("a",{parentName:"td",href:"@"},"MRG entries")," that specifies ",(0,n.kt)("inlineCode",{parentName:"td"},"party")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"actor")," as its ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"term"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-tags[management]")),(0,n.kt)("td",{parentName:"tr",align:"left"},"removes all ",(0,n.kt)("a",{parentName:"td",href:"@"},"MRG entries")," that have a ",(0,n.kt)("a",{parentName:"td",href:"@"},"grouptag")," ",(0,n.kt)("inlineCode",{parentName:"td"},"management"),"."))))),(0,n.kt)("h2",{id:"syntax-rename"},"Rename/rewrite specific parts of an MRG entry"),(0,n.kt)("img",{alt:"From this point onward, texts are under construction",src:(0,o.Z)("images/wip/wip-under-construction-from-here-onward.png")}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"In analogy with ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Namespace"},"namespaces"),", we accommodate for the renaming of ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"terms")," as they are 'imported' from ",(0,n.kt)("a",{href:"/framework/docs/terms/terminology",hovertext:"Terminology (in/of a Scope): the set of terms that are used within a single Scope to refer to a single Definition, enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," other than the one that we are constructing. However, the analogy breaks down in the sense that it is not only a ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"term")," that should be renameable (which is sufficient for ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Namespace"},"namespaces"),"), but also certain attributes may need to be changed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rename <term> [ <fieldmodifierlist> ]"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Syntax examples"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,n.kt)("th",{parentName:"tr",align:"left"},"What it does when it is processed"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"rename party partij")),(0,n.kt)("td",{parentName:"tr",align:"left"},"renames the ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"term")," that is currently associated with the ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"term")," ",(0,n.kt)("inlineCode",{parentName:"td"},"party")," into ",(0,n.kt)("inlineCode",{parentName:"td"},"partij"),"."))))),(0,n.kt)("p",null,"where:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"symbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<term>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the ",(0,n.kt)("a",{href:"/framework/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent a specific Concept."},"term")," of the tuple that will be selected for renaming.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<fieldmodifierlist>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"a (non-empty) comma-separated list of ",(0,n.kt)("inlineCode",{parentName:"td"},"<fieldmodifier>"),"s.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<fieldmodifier>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"a ",(0,n.kt)("inlineCode",{parentName:"td"},"<key>: <value>")," (or ",(0,n.kt)("inlineCode",{parentName:"td"},"{ <key>: <value> }")," pair - to be decided.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<key>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"a text that identifies a field in an ","[MRG entry]",", the value of which is to be changed, e.g. ",(0,n.kt)("inlineCode",{parentName:"td"},"formphrases"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"grouptags"),", etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<value>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"a text that will replace the existing text of the field identified by ",(0,n.kt)("inlineCode",{parentName:"td"},"<key>"),".")))),(0,n.kt)("p",null,"This syntax is processed by first selecting the tuple (in the tuple set that is being constructed) that has the specified ",(0,n.kt)("inlineCode",{parentName:"p"},"<term>")," as its ",(0,n.kt)("inlineCode",{parentName:"p"},"term"),"-field, and then sequentially processing the ",(0,n.kt)("inlineCode",{parentName:"p"},"<fieldmodifier>"),"s in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<fieldmodifierlist>"),", which means that the existing text of the field that is identified by the ",(0,n.kt)("inlineCode",{parentName:"p"},"<key>")," element of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<fieldmodifier>")," is replaced by the text specified by the ",(0,n.kt)("inlineCode",{parentName:"p"},"<value>")," element of that ",(0,n.kt)("inlineCode",{parentName:"p"},"<fieldmodifier>"),"."),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The ability to rename terms as they are imported may introduce some issues related to other field-names, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"term"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"formphrases"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"synonyms"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"glossaryText"),"s and possibly some others. Perhaps this syntax should therefore be extended, enabling ",(0,n.kt)("a",{parentName:"p",href:"@"},"curators")," to simultaneously change these (and other) fields in the ",(0,n.kt)("a",{parentName:"p",href:"@"},"MRG entry"),".")))}c.isMDXComponent=!0}}]);