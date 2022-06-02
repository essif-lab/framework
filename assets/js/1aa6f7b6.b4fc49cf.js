"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[4580],{2360:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),i="tabItem_OmH5";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(3117),r=a(7294),i=a(2389),o=a(7392),s=a(7094),l=a(2466),d=a(6010),p="tabList_uSqn",c="tabItem_LplD";function h(e){var t,a,i,h=e.lazy,u=e.block,m=e.defaultValue,f=e.values,k=e.groupId,N=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,C=(0,r.useState)(y),E=C[0],D=C[1],H=[],_=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var q=x[k];null!=q&&q!==E&&b.some((function(e){return e.value===q}))&&D(q)}var I=function(e){var t=e.currentTarget,a=H.indexOf(t),n=b[a].value;n!==E&&(_(t),D(n),null!=k&&T(k,n))},L=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=H.indexOf(e.currentTarget)+1;a=H[n]||H[0];break;case"ArrowLeft":var r=H.indexOf(e.currentTarget)-1;a=H[r]||H[H.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,d.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},N)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return H.push(e)},onKeyDown:L,onFocus:I,onClick:I},i,{className:(0,d.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),h?(0,r.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function u(e){var t=(0,i.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},8174:function(e,t,a){a.r(t),a.d(t,{Mark:function(){return h},assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=(a(4996),a(9877),a(2360),["components"]),s={id:"ctext-concept",title:"Curated Texts of type `Concept`",sidebar_label:"Concepts"},l=void 0,d={unversionedId:"tev2/ctext-concept",id:"tev2/ctext-concept",title:"Curated Texts of type `Concept`",description:"text to mark",source:"@site/docs/tev2/ctext-concept.md",sourceDirName:"tev2",slug:"/tev2/ctext-concept",permalink:"/framework/docs/tev2/ctext-concept",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/ctext-concept.md",tags:[],version:"current",frontMatter:{id:"ctext-concept",title:"Curated Texts of type `Concept`",sidebar_label:"Concepts"},sidebar:"tev2SideBar",previous:{title:"Term References",permalink:"/framework/docs/tev2/tev2-spec-term-ref"},next:{title:"Patterns",permalink:"/framework/docs/tev2/ctext-pattern"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Header",id:"header",level:2},{value:"Body",id:"body",level:2}],h=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},u={toc:c,Mark:h};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions."))),(0,i.kt)("p",null,"This document specifies what specifics of ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," that describe ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," of type ",(0,i.kt)(h,{mdxType:"Mark"},(0,i.kt)("inlineCode",{parentName:"p"},"concept")),". The reader is assumed to be familiar with the ",(0,i.kt)("a",{parentName:"p",href:"ctext"},"generic structure of a curated text"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"@"},"Concepts")," are the ideas/thoughts behind a classification of ",(0,i.kt)("a",{parentName:"p",href:"@"},"entities"),", i.e. what makes ",(0,i.kt)("a",{parentName:"p",href:"@"},"entities")," in that class 'the same'."),(0,i.kt)("p",null,"A good description allows ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," to learn how the authors of the description distinguish between the ",(0,i.kt)("a",{parentName:"p",href:"@"},"entities")," that do, and the ones that do not qualify as members of such a class. If a good ",(0,i.kt)("a",{parentName:"p",href:"@"},"definition")," is provided, ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," may learn to make exactly the same destinction as well."),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("p",null," In this section, we describe the header fields that are specific for ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," of type ",(0,i.kt)(h,{mdxType:"Mark"},(0,i.kt)("inlineCode",{parentName:"p"},"concept")),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present as a header field."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"term")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that is the name of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," in (human readable) texts. It is typically used to represent the ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," itself, but also to represent arbitrary/unspecified instances thereof. This text will show as an entry in the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG"),".",(0,i.kt)("br",null),"Examples: 'concept', or 'terminological artifact'.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fullterm")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that can be used as the complete form of the text mentioned in the ",(0,i.kt)("inlineCode",{parentName:"td"},"term")," field.",(0,i.kt)("br",null),"Example: 'terminological artifact (of a scope)', or '(scoped) terminological artifact'.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"shorterm")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that can be used as an abbreviated form of the text mentioned in the ",(0,i.kt)("inlineCode",{parentName:"td"},"term")," field.",(0,i.kt)("br",null),"Example: 'artifact'.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"synonyms")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"List of (optionally quoted) words and/or (quoted) phrases, that are considered to have the same meaning as the text specified in the ",(0,i.kt)("inlineCode",{parentName:"td"},"term")," field.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"glossaryText")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that can be used as the (raw) contents for the entry of this ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," in a human readable ",(0,i.kt)("a",{parentName:"td",href:"@"},"glossary"),". This text MAY contain ",(0,i.kt)("a",{parentName:"td",href:"@"},"term refs"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoverText")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that can be used as the contents of a popup that shows as the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," is rendered in a web browser and the ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," hovers over the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," with its mouse.")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a complete Concept Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\n#\n# Heading entries that serve multiple purposes (i.e. both TEv2 and e.g. Docusaurus):\n#\nid: concept-curate\n#\n# Header entries that are specific to third-party tools, e.g. Docusaurus - as specified in:\n# https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\n#\ntitle: "Curators (of a Scope)"\nsidebar_label: "Scope Curators"\n#\n# Generic TEv2 heading entries (i.e. valid for all `termtype`s):\n#\ntermtype: concept\ntermid: curate\ngrouptags: [ terminology, management ]\ndate: 20220222\nstatus: proposed\n#\n# Termtype-specific TEv2 heading entries\nterm: curate\nglossaryText: "To evolve [concept](@) and [term](@) data in the direction of greater quality and richer content within a specific [scope](@)."\nhoverText: "Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope."\n---\n'))),(0,i.kt)("h2",{id:"body"},"Body"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"markdown")," body consists of one or more sections that each have a ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#headings"},"heading"),", optionally followed by a ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/#heading-ids"},"heading id"),". We provide suggestions for a variety of sections, that we think help ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," get a good understanding of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," that is described."),(0,i.kt)("p",null,"We have placed the suggestions in an order that we think makes for good reading. However, if you think otherwise, you are free to change this order, leave out sections, and/or add your own."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend (and suggestions for using your own headings)"),(0,i.kt)("p",null,"The body is expected to consist of sections of text, for which we provide suggestions for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#headings"},"section headings"),". A section consists of a header and further text, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"## <Heading> {#<trait>}\n\nfurther text goes here.\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," is important, as authors can use it in a ",(0,i.kt)("a",{parentName:"p",href:"@"},"term ref")," to refer to this particular section. Therefore, you SHOULD stick to the suggestions for the ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," if you write such a section."),(0,i.kt)("p",null,"The table that contains the suggestions has the following columns:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Heading")," shows a name we suggest for a particular section. If you use this suggestion, you do not need to also provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"Heading ID")," (because it is automatically arranged for)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"trait")," specifies the text to be used as a ",(0,i.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/extended-syntax/#heading-id"},"heading id")," in the case that the author of the section decides to use a different heading as the one that is suggested."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Description")," describes the kinds of content you may want to put in the section, and what ",(0,i.kt)("a",{parentName:"li",href:"@"},"readers")," expect that they would know, or could do after having read the text."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Heading"),(0,i.kt)("th",{parentName:"tr",align:null},"trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Summary"),(0,i.kt)("td",{parentName:"tr",align:null},"summary"),(0,i.kt)("td",{parentName:"tr",align:null},"A short description of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," that explains the ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," to a layperson with reasonable accuracy, so that ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers")," stand a good chance of determining what qualifies, and what does not qualify as in instance (example) of that ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept"),". The first complete sentence in the description SHOULD be able to serve as an informal ",(0,i.kt)("a",{parentName:"td",href:"@"},"definition"),". The first complete paragraph SHOULD be a text that is usable to describe the ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," as an entry in a ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG"),". Additional sentences and paragraphs might expand or clarify.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Purpose"),(0,i.kt)("td",{parentName:"tr",align:null},"purpose"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes why the ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," is needed. What purposes does it serve? What can you do with it that you cannot do (as well) without it? What ",(0,i.kt)("a",{parentName:"td",href:"@essif-lab"},"objectives")," does it help realize? Why is this ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," relevant within its ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),"?")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Patterns"),(0,i.kt)("td",{parentName:"tr",align:null},"patterns"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that uses ",(0,i.kt)("a",{parentName:"td",href:"@"},"term refs")," to refer the interested ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," to ",(0,i.kt)("a",{parentName:"td",href:"@"},"mental models")," for this this ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," is relevant, or that provide more context for the proper use of this ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Criteria"),(0,i.kt)("td",{parentName:"tr",align:null},"criteria"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that enables a ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," to make the precise same distinction as you (the author of this text) do, as to what is, and what is not an instance (example) of this ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept"),". This text SHOULD serve as the ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions"},"intensional definition")," of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept"),", i.e. the necessary and sufficient conditions for when the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," associated with this ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," should be used. Writing such a text is not easy when it is done meticulously. However, if done properly, it makes that the ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," becomes crystal clear, not only for the ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers"),", but for you (the author) as well.",(0,i.kt)("br",null)," In the case a ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," is referred to with a noun, writing this section becomes equivalent to specifying the properties that an object needs to have in order to be counted as a referent of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Examples"),(0,i.kt)("td",{parentName:"tr",align:null},"examples"),(0,i.kt)("td",{parentName:"tr",align:null},"Text in which in which you give examples that obviously qualify as instances of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept"),", as well as examples that do NOT obviously qualify. Also, provide examples that are not (so) obvious, but help ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers")," to better understand its ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions"},"intension"),". You may also provide texts in which you use ",(0,i.kt)("a",{parentName:"td",href:"@"},"term refs")," to refer to ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-cases")," that are provided in this (or any other) ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Background"),(0,i.kt)("td",{parentName:"tr",align:null},"background"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that (refers to text that) contains background information about the term, insofar that is relevant for the purposes that are to be served by the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," in which the ",(0,i.kt)("a",{parentName:"td",href:"@"},"concept")," has been defined.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Notes"),(0,i.kt)("td",{parentName:"tr",align:null},"notes"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that may be of importance to ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers"),", but that doesn't fit anywhere else.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"References"),(0,i.kt)("td",{parentName:"tr",align:null},"references"),(0,i.kt)("td",{parentName:"tr",align:null},"List references to other texts, standards, (scientific) articles, applicable legislation, git repo's, etc., as appropriate.")))))}m.isMDXComponent=!0}}]);