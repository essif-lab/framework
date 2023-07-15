"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2427],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(3117),r=a(7294),i=a(6010),o=a(2466),l=a(6775),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function m(e){var t,a,n,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=f(e),m=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),v=m[0],g=m[1],b=h({queryString:s,groupId:u}),k=b[0],y=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=N[0],R=N[1],T=function(){var e=null!=k?k:w;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),R(e)}),[y,R,p]),tabValues:p}}var v=a(2389),g="tabList__CuJ",b="tabItem_LNqP";function k(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(p(t),s(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;a=null!=(i=c[o])?i:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:f},o,{className:(0,i.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=m(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},7588:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=a(4996),l=(a(4866),a(5162),["components"]),s={id:"hrg",sidebar_label:"HRG (Human Readable Glossary)",hide_table_of_contents:!0,scopetag:"tev2",date:20220503},u="Human Readable Glossary (HRG)",c={unversionedId:"tev2/spec-files/hrg",id:"tev2/spec-files/hrg",title:"Human Readable Glossary (HRG)",description:"The current version can be found at https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/spec-files/hrg",source:"@site/docs/tev2/spec-files/22-hrg.md",sourceDirName:"tev2/spec-files",slug:"/tev2/spec-files/hrg",permalink:"/framework/docs/tev2/spec-files/hrg",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/spec-files/22-hrg.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1689419050,formattedLastUpdatedAt:"Jul 15, 2023",sidebarPosition:22,frontMatter:{id:"hrg",sidebar_label:"HRG (Human Readable Glossary)",hide_table_of_contents:!0,scopetag:"tev2",date:20220503},sidebar:"tev2SideBar",previous:{title:"MRG (Machine Readable Glossary)",permalink:"/framework/docs/tev2/spec-files/mrg"},next:{title:"MRD (Machine Readable Dictionary)",permalink:"/framework/docs/tev2/spec-files/mrd"}},p={},f=[{value:"File naming conventions",id:"file-naming-conventions",level:2}],d={toc:f};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"human-readable-glossary-hrg"},"Human Readable Glossary (HRG)"),(0,i.kt)("admonition",{title:"This page is deprecated.",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The current version can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/spec-files/hrg"},"https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/spec-files/hrg"))),(0,i.kt)("img",{alt:"This page is under construction",src:(0,o.Z)("images/wip/wip-under-construction.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"This document specifies the contents of the ",(0,i.kt)("a",{parentName:"p",href:"hrg@"},"Human Readable Glossary")," file (",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG"),")."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," is a ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary")," is meant to be readable by humans, so that they can find out the meaning of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," as they are used in the context in which that ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary")," is valid. Thus, ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGs")," come in human readable formats, such as HTML or PDF."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"@"},"HRGs")," are generated by the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/hrgt"},"tool"),", which allows its output to be highly customized. For example, the tool expects that its user specifies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," that need to be included;"),(0,i.kt)("li",{parentName:"ul"},"the particular way in which a ",(0,i.kt)("a",{parentName:"li",href:"@"},"term")," (and its description) appear in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRGT")," "),(0,i.kt)("li",{parentName:"ul"},"any attributes (e.g. contributors, authors, license information etc.) need to be part of such a description, or need to be mentioned in the beginning or the end of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG")),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("h2",{id:"file-naming-conventions"},"File naming conventions"),(0,i.kt)("p",null,"Within (the ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossarydir")," of) a particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopedir"),", we can generate (or import) and hence find all ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG"),"-files that are needed within that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". We use the following file naming convention:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"hrg.<scopetag>.<vsntag>.<output>"))," is the name of a file that contains an actual ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG"),", or it is a file that links (references) such a file, where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"<scopetag>.<vsntag>"))," is taken from the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG"),"-file from which the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG")," is generated. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-files/mrg#mrg-file-naming"},"MRG file naming")," for details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"<output>"))," is a text that has been provided by the user that generated the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG"),". It includes the file extension (e.g., PDF, HTML, etc.) that is appropriate for its contents. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/hrgt#calling-the-tool"},"HRG generation")," for details.")),(0,i.kt)("p",null,"This naming convention enables tools (as well as ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," and others) that operate within a particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", to quickly find a particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," that is relevant for that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We need to decide whether this document actually describes "),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"(the possible structures of) HRGs, or"),(0,i.kt)("li",{parentName:"ul"},"the ways in hwich the generation of an HRG can be specified"))))}h.isMDXComponent=!0}}]);