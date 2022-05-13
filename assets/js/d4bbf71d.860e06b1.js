"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[3435],{9536:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=(a(4996),["components"]),s={id:"tev2-spec-term-ref",title:"Term References",sidebar_label:"Referencing Terms",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},l=void 0,p={unversionedId:"tev2/tev2-spec-term-ref",id:"tev2/tev2-spec-term-ref",title:"Term References",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction",source:"@site/docs/tev2/tev2-spec-term-ref.md",sourceDirName:"tev2",slug:"/tev2/tev2-spec-term-ref",permalink:"/framework/docs/tev2/tev2-spec-term-ref",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-spec-term-ref.md",tags:[],version:"current",frontMatter:{id:"tev2-spec-term-ref",title:"Term References",sidebar_label:"Referencing Terms",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Body Contents",permalink:"/framework/docs/tev2/tev2-spec-ctext-body"},next:{title:"MRG (Machine Readable Glossary)",permalink:"/framework/docs/tev2/tev2-spec-mrg"}},d={},m=[{value:"Term References",id:"termref",level:2},{value:"Alternative notation",id:"termref-alt",level:3}],h={toc:m};function f(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction"))),(0,r.kt)("p",null,"This document specifies how you can use a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," in a ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated text")," while at the same time referring to the ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition")," that defines its meaning. i.e. the syntax that you need to use in such texts. The way in which the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," (and its ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition"),") may be rendered depends on the artifact that is being generated. For example, when a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," is rendered in a web-site, it may be enhanced, showing a popup that contains its ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition")," when a user hovers the mouse over it, and that hyperlinks to the page in the website that explains the term in more detail when the user clicks on it. When a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," is rendered in a PDF file, its definition may appear as an entry in a ",(0,r.kt)("a",{parentName:"p",href:"@"},"glossary")," that is added somewhere in the PDF. It all depends on the rendering tools that are being used, and this is out of scope for this specification."),(0,r.kt)("p",null,"This file specifies the syntax of ",(0,r.kt)("a",{parentName:"p",href:"@"},"Term refs"),". The ",(0,r.kt)("a",{parentName:"p",href:"tev2-toolbox-trrt"},"TRRT")," describes how they are processed (resolved)."),(0,r.kt)("h2",{id:"termref"},"Term References"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref")," is similar to a ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown link"),", but rather than linking to some complicated URL or fragment, it refers/links to a specific descriptive text (e.g. a ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition"),", purpose, or example) that is associated with (a specific version of) a ",(0,r.kt)("a",{parentName:"p",href:"scoped-term@"},"(scoped) term"),", which is ",(0,r.kt)("a",{parentName:"p",href:"identify@essiflab"},"identified")," by its ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," and the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," (label, text)."),(0,r.kt)("p",null,"The complete, generic structure",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref")," is: ","[",(0,r.kt)("inlineCode",{parentName:"p"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"#",(0,r.kt)("inlineCode",{parentName:"p"},"heading-id"),"@",(0,r.kt)("inlineCode",{parentName:"p"},"scopetag"),":",(0,r.kt)("inlineCode",{parentName:"p"},"vsn"),"), where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show-text")," (required) is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters ",(0,r.kt)("inlineCode",{parentName:"li"},"@")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," (optional) is a text that ",(0,r.kt)("a",{parentName:"li",href:"identify@essiflab"},"identifies")," the ",(0,r.kt)("a",{parentName:"li",href:"scoped-term@"},"(scoped) term")," in the part of the ",(0,r.kt)("a",{parentName:"li",href:"@"},"corpus")," that contains the ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," of a specified ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope"),". If omitted, its value will be assigned the default, which is typically ",(0,r.kt)("inlineCode",{parentName:"li"},"show-text")," in which every character in the range ","[A-Z]"," is converted to lower-case, and every sequence of characters, all of which are not in ","[A-Z]",", ","[a-z]",", ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"-"),", are converted to ",(0,r.kt)("inlineCode",{parentName:"li"},"-"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," shall only contain characters in regex ",(0,r.kt)("inlineCode",{parentName:"li"},"[a-z0-9_-]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"heading-id")," (optional) is a text that ",(0,r.kt)("a",{parentName:"li",href:"identify@essiflab"},"identifies")," a particular kind of descriptive text that is associated with the ",(0,r.kt)("a",{parentName:"li",href:"@"},"term"),". If omitted (in which case the preceding ",(0,r.kt)("inlineCode",{parentName:"li"},"#"),"-character may also be omitted), the ",(0,r.kt)("a",{parentName:"li",href:"@"},"term ref")," will by default dereference to the text of its ",(0,r.kt)("a",{parentName:"li",href:"@"},"glossary")," entry. While it is envisaged that ",(0,r.kt)("inlineCode",{parentName:"li"},"heading-id")," must be a text from a predefined set of allowed/supported texts (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"purpose"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"criteria"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"example-3"),"), the precise semantics remain to be specified. For now, ",(0,r.kt)("inlineCode",{parentName:"li"},"heading-id")," shall be constrained to only contain characters in regex ",(0,r.kt)("inlineCode",{parentName:"li"},"[a-z0-9_-]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopetag")," (optional) is a ",(0,r.kt)("a",{parentName:"li",href:"@"},"tag")," that ",(0,r.kt)("a",{parentName:"li",href:"identify@essiflab"},"identifies")," the ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope")," in the ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," of which the ",(0,r.kt)("a",{parentName:"li",href:"scoped-term@"},"(scoped) term")," is contained. If omitted, a default ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope")," will be used, which is typically the ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope")," within which the document containing the ",(0,r.kt)("a",{parentName:"li",href:"@"},"term ref")," is being maintained. Note that the preceding ",(0,r.kt)("inlineCode",{parentName:"li"},"@")," sign may never be omitted because as it serves the purpose to distinguish ",(0,r.kt)("a",{parentName:"li",href:"@"},"term refs")," from other ",(0,r.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown links"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"scopetag")," shall only contain characters in regex ",(0,r.kt)("inlineCode",{parentName:"li"},"[a-z0-9_-]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vsn")," (optional) is a text that ",(0,r.kt)("a",{parentName:"li",href:"identify@essiflab"},"identifies")," the version of the ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," in the ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope"),". If omitted (in which case the preceding ",(0,r.kt)("inlineCode",{parentName:"li"},":"),"-character may also be omitted), its value will be the default, which is ",(0,r.kt)("inlineCode",{parentName:"li"},"latest"),", which means the ",(0,r.kt)("a",{parentName:"li",href:"@"},"term ref")," points to the most recently established/published version of the ",(0,r.kt)("a",{parentName:"li",href:"term"},"term"),". With the exception of ",(0,r.kt)("inlineCode",{parentName:"li"},"latest"),", the precise semantics remain to be specified. ",(0,r.kt)("inlineCode",{parentName:"li"},"vsn")," shall only contain characters in regex ",(0,r.kt)("inlineCode",{parentName:"li"},"[a-z0-9_-]"),". We may need to discuss whether or not this should be changed to the version of the ",(0,r.kt)("a",{parentName:"li",href:"@"},"glossary")," rather than the version of the ",(0,r.kt)("a",{parentName:"li",href:"@"},"term"),".")),(0,r.kt)("p",null,"Regexes for this syntax are specified in the ",(0,r.kt)("a",{parentName:"p",href:"#trrt"},"TRRT")," section."),(0,r.kt)("p",null,"Here is an example: ",(0,r.kt)("inlineCode",{parentName:"p"},"[definitions](definition@)")," is a reference to the default descriptive text associated with the latest version of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," that is identified in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," by the label ",(0,r.kt)("inlineCode",{parentName:"p"},"definition"),"."),(0,r.kt)("p",null,"Tools MUST implement the typical default behaviors as specified above. However, they MAY have means, e.g. by configuration, to deviate from such behaviors. For example, a tool may have more sophisticated ways to derive a ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," from a ",(0,r.kt)("inlineCode",{parentName:"p"},"show text"),", e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("h3",{id:"termref-alt"},"Alternative notation"),(0,r.kt)("p",null,"It is convenient for authors to be able to use the '@",(0,r.kt)("inlineCode",{parentName:"p"},"scopetag"),"' part of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref")," immediately behind the ",(0,r.kt)("inlineCode",{parentName:"p"},"show text")," within the square brackets (",(0,r.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"]"),"), and leave out the parentheses and the text in between if all the other items are omitted."),(0,r.kt)("p",null,"This is particularly useful in the vast majority of cases, where the default processing of ",(0,r.kt)("inlineCode",{parentName:"p"},"show-text")," results in ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"heading-id")," is absent. Examples of this are ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition](@)"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"[term ref](@)"),"."),(0,r.kt)("p",null,"The usefulness becomes even greater as the ",(0,r.kt)("a",{parentName:"p",href:"#trrt"},"TRRT")," also implements more sophisticated ways to derive a ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," from a ",(0,r.kt)("inlineCode",{parentName:"p"},"show text"),", e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs).",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("p",null,"This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Alternative syntax"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Equivalent regular syntax"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"@","]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"]","(@)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),"]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"td"},"show-text"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),":",(0,r.kt)("inlineCode",{parentName:"td"},"vsn"),"]","(",(0,r.kt)("inlineCode",{parentName:"td"},"id"),"#",(0,r.kt)("inlineCode",{parentName:"td"},"heading-id"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"td"},"id"),"#",(0,r.kt)("inlineCode",{parentName:"td"},"heading-id"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),":",(0,r.kt)("inlineCode",{parentName:"td"},"vsn"),")")))),(0,r.kt)("p",null,"In the last row of the above table, ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#heading-id")," are optional. Thus, ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition@]()")," is equivalent with ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition](@)")," and with ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition](@)"),". Regexes for this alternative syntax are specified in the ",(0,r.kt)("a",{parentName:"p",href:"#trrt"},"TRRT")," section."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"We want to enable authors to use ",(0,r.kt)("a",{parentName:"li",href:"id@"},"term refs")," pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. ",(0,r.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown links")," are of the form ","[",(0,r.kt)("inlineCode",{parentName:"li"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"li"},"ref-text"),"), where ",(0,r.kt)("inlineCode",{parentName:"li"},"show text")," is the text that is rendered and emphasized so that a user knows it can be clicked, and ",(0,r.kt)("inlineCode",{parentName:"li"},"ref-text")," is a (relative or absolute) URL, or a ",(0,r.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids"},"heading ID"),", that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for ",(0,r.kt)("a",{parentName:"li",href:"id@"},"term refs")," that is",(0,r.kt)("br",null),"- sufficiently similar to a ",(0,r.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown link"),",",(0,r.kt)("br",null),"- 'humanly interpretable' when it isn't processed by the ",(0,r.kt)("a",{parentName:"li",href:"#trrt"},"TRRT"),",",(0,r.kt)("br",null),"- easy to use for authors, and",(0,r.kt)("br",null),"- sufficiently distinct from a Markdown link so that the ",(0,r.kt)("a",{parentName:"li",href:"#trrt"},"TRRT")," will not process Markdown links yet will process the ",(0,r.kt)("a",{parentName:"li",href:"id@"},"term refs"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Future versions of ",(0,r.kt)("a",{parentName:"li",href:"#trrt"},"TRRT")," are expected to be able to recognize specific ",(0,r.kt)("inlineCode",{parentName:"li"},"show text"),"s, e.g. as plural forms (for nouns), or conjugate forms (for verbs) for a specific ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", and use that ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," instead. This could e.g. be implemented as front matter of the resource document associated with ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);