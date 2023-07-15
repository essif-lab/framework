"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[5510],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(3117),r=a(7294),i=a(6010),o=a(2466),s=a(6775),l=a(1980),d=a(7392),p=a(12);function c(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,d.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function u(e){var t,a,n,i,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,d=e.groupId,c=m(e),u=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:c})})),k=u[0],g=u[1],N=f({queryString:l,groupId:d}),v=N[0],y=N[1],b=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,p.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=b[0],C=b[1],T=function(){var e=null!=v?v:w;return h({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),C(e)}),[y,C,c]),tabValues:c}}var k=a(2389),g="tabList__CuJ",N="tabItem_LNqP";function v(e){var t=e.className,a=e.block,s=e.selectedValue,l=e.selectValue,d=e.tabValues,p=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=p.indexOf(t),n=d[a].value;n!==s&&(c(t),l(n))},h=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var i,o=p.indexOf(e.currentTarget)-1;a=null!=(i=p[o])?i:p[p.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},d.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return p.push(e)},onKeyDown:h,onClick:m},o,{className:(0,i.Z)("tabs__item",N,null==o?void 0:o.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function b(e){var t=u(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}},4227:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=(a(4996),a(4866),a(5162),["components"]),s={id:"saf",sidebar_label:"SAF (Scope Admin File)",hide_table_of_contents:!0,scopetag:"tev2",date:20230103},l="Scope Administration File (SAF)",d={unversionedId:"tev2/spec-files/saf",id:"tev2/spec-files/saf",title:"Scope Administration File (SAF)",description:"The current version can be found at https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/spec-files/saf",source:"@site/docs/tev2/spec-files/11-saf.md",sourceDirName:"tev2/spec-files",slug:"/tev2/spec-files/saf",permalink:"/framework/docs/tev2/spec-files/saf",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/spec-files/11-saf.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1689419050,formattedLastUpdatedAt:"Jul 15, 2023",sidebarPosition:11,frontMatter:{id:"saf",sidebar_label:"SAF (Scope Admin File)",hide_table_of_contents:!0,scopetag:"tev2",date:20230103},sidebar:"tev2SideBar",previous:{title:"Curated Texts",permalink:"/framework/docs/tev2/spec-files/ctext"},next:{title:"Profile Templates",permalink:"/framework/docs/tev2/spec-files/profile-templates"}},p={},c=[{value:"Scope Administration File Field Descriptions",id:"scope-administration-file-field-descriptions",level:2},{value:"SAF Terminology - Defining the Scope itself",id:"terminology",level:3},{value:"SAF Scopes - Mapping Scopetags and Scopedirs",id:"scopes",level:3},{value:"SAF Versions - Enabling changes and updates in a scope&#39;s Terminology",id:"versions",level:3}],m={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scope-administration-file-saf"},"Scope Administration File (SAF)"),(0,i.kt)("admonition",{title:"This page is deprecated.",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The current version can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/spec-files/saf"},"https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/spec-files/saf"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," MUST have exactly one Scope Administration File or ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),", i.e. a file contains whatever needs to be administered in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", and that various tools need to find e.g. the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopetags"),", etc."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," MUST be located in the (root of the) ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopedir"),", and is called ",(0,i.kt)("inlineCode",{parentName:"p"},"saf.yaml"),". It is to be created and maintained by the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("p",null,"This document specifies the structure of such ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAFs"),"."),(0,i.kt)("h2",{id:"scope-administration-file-field-descriptions"},"Scope Administration File Field Descriptions"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," has three main parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"scope"))," (singular) section defines meta-data concerning the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope")," itself, both for technical use and human use. It shows where directories and files live that ar part of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", and also ways in which people can contribute, raise issues, see what's going on, discuss, etc."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"scopes"))," (plural) section contains a mapping between ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopetags")," that are used within the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", and the associated ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopedirs"),". This enables tools to find the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF")," of these ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopes"),", and from there all other directories, files etc. that live within them, e.g. to use/import their data."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"versions"))," section specifies all versions of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology")," that are actively maintained by the ",(0,i.kt)("a",{parentName:"li",href:"@"},"curators")," of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", and for each of them, the set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," that constitute this ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology"),".")),(0,i.kt)("p",null,"The following sections specify the fields for each of these parts."),(0,i.kt)("h3",{id:"terminology"},"SAF Terminology - Defining the Scope itself"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a `scope` section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# This is a Scope Administration File that can be used in conjunction with TEv2.\n#\n# The first section defines meta-data concerning the scope itself, both for technical use and human use.\n# It shows where directories and files live that ar part of the scope, and also\n# ways in which people can contribute, raise issues, see what's going on, discuss, etc.\n#\nscope:\n  scopetag: tev2 # identifier that curators have determined for this terminology\n  scopedir: https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/tev2  # URL of the scope-directory\n  curatedir: terms # directory where all curated files are located. Full URL is `scopedir`/`curatedir`\n  glossarydir: glossaries # directory where all glossary files and GDFs are located. Full URL is `scopedir`/`glossarydir`\n  defaultvsn: latest # vsntag that identifies the default terminology. MRG is located at `scopedir`/`glossarydir`/mrg.`scopetag`.`defaultvsn`.yaml\n  license: LICENSE.md # file that contains the (default) licensing conditions. Full URL is `scopedir`/`license`\n  statuses: [ proposed, approved, deprecated ] # list of status tags that are defined for knowledge artifacts in this scope\n  issues: https://github.com/tno-terminology-design/tev2-specifications/issues # URL where issues can be raised and handled\n  website: https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/tev2-overview # base URL for creating links to rendered versions of Curated Texts\n  curators: # contacting individual curators\n  - name: RieksJ\n    email: # we split up the email address to reduce the likelihood of the address being harvested for spamming\n      id: rieks.joosten\n      at: tno.nl\n"))),(0,i.kt)("p",null,"The following fields are defined for the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," section of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"F"),") the field is required to be present as a header field. The ",(0,i.kt)("inlineCode",{parentName:"li"},"F")," means that we reserve this field for Future Use."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"@"},"Scopetag")," that ",(0,i.kt)("a",{parentName:"td",href:"@"},"curators")," of this scope have determined for this ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),". The associated ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," is specified in the section ",(0,i.kt)("inlineCode",{parentName:"td"},"scopes"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scopedir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL of the location of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopetags")," listed in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scopetags")," field.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"curatedir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to the directory where all ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated files")," are located. This directory may contain subdirectories to allow ",(0,i.kt)("a",{parentName:"td",href:"@"},"curators")," to organize the files in any way they see fit. Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"<scopedir>"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"<curatedir>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"glossarydir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to the directory where all ",(0,i.kt)("a",{parentName:"td",href:"@"},"glossary"),"-related files are located. Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"<scopedir>"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"<glossarydir>"),". This directory SHOULD contain one ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," for every element in the version-section in the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),", and one or multiple ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRGs"),". It MAY contain other files, e.g. containing instructions, headers, footers or other things that are necessary for generating specific ",(0,i.kt)("a",{parentName:"td",href:"@"},"glossaries"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"defaultvsn")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"@"},"versiontag")," that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," the default ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology")," for this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),". The associated ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," is located at ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"glossarydir"),"/mrg.",(0,i.kt)("inlineCode",{parentName:"td"},"scopetag"),".",(0,i.kt)("inlineCode",{parentName:"td"},"defaultvsn"),".yaml")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"license")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"File in the root of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," that contains the (default) licensing data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"statuses")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ordered list of ",(0,i.kt)("a",{parentName:"td",href:"@"},"tags")," that are defined in this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," for specifying stages in the life-cycle of ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifacts"),". The first element in the list represents the first stage, and the last element the last stage in the life-cycle.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issues")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL where issues can be reported and handled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"website")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"base URL for creating links to rendered versions of ",(0,i.kt)("a",{parentName:"td",href:"@"},"Curated Texts"),". It should also serve as the home page of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"curators")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data that can be used to contact individual ",(0,i.kt)("a",{parentName:"td",href:"@"},"curators"),".")))),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It might be more practical to move all of the stuff that is particular to this scope, but that is currently documented in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scopes")," section, to this section. We do then need to check throughout the documentation where that section is referenced, and correct such references.")),(0,i.kt)("h3",{id:"scopes"},"SAF Scopes - Mapping Scopetags and Scopedirs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"scopetags")," section is a list that specifies a mapping between ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopetags")," as they are used in this ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", and the associated ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopedir"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a `scopes` section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# The second section contains a mapping between scopetags that are used within the scope, and the associated scopedirs.\n# This enables tools to find the [SAF](@) of these [scopes](@), and from there all other directories, files etc.\n# that live within them, e.g. to use/import their data.\n#\nscopes:  #\n- scopetags: [ essiflab, essif-lab ] # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology\n  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory\n- scopetags: [ ctwg, toip-ctwg ] # definition of (scope)tag(s) that are used within this scope to refer to a specific terminology\n  scopedir: https://github.com/trustoverip/ctwg # URL of the scope-directory\n"))),(0,i.kt)("p",null,"The following fields are defined for the ",(0,i.kt)("inlineCode",{parentName:"p"},"scopes")," section of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"F"),") the field is required to be present as a header field. The ",(0,i.kt)("inlineCode",{parentName:"li"},"F")," means that we reserve this field for Future Use."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It may be simpler to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"scopetags"),"-field, which is currently a list of scopetags, into a ",(0,i.kt)("inlineCode",{parentName:"p"},"scopetag"),"-field, which would specifiy a single scopetag. This would encourage curators to use no more than one scopetag for each scope they refer to, but if they really wanted to, they could make multiple entries with different scopetags that refer to the same scopedir.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scopetags")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"List of at least one ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopetag"),", that the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curator(s)")," of this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," have determined for the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology")," of a specific ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),". The associated ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," is specified in the section ",(0,i.kt)("inlineCode",{parentName:"td"},"scopes"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scopedir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the location of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopetags")," listed in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scopetags")," field.")))),(0,i.kt)("h3",{id:"versions"},"SAF Versions - Enabling changes and updates in a scope's Terminology"),(0,i.kt)("p",null,"The third section in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," specifies the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", in multiple versions that are actively maintained by the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators"),". For each version, the set of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," is selected that constitute that version's ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),". Also, additional data is provided regarding the state/validity of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," over time, which may of interest for the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," of other scopes as they need to decide whether or not to import ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," from such a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a `versions` section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'#\n# The third section specifies the versions that are actively maintained by the curators.\n# For each version, the set of terms is selected that constitute the terminology.\n# See the Glossary Generation Tool (GGT) for details about the syntax and semantics.\n#\nversions:\n  - vsntag: v0.9.4 # a versiontag that identifies this version from all other versions in the SAF\n    altvsntags: # alternative verstiontags\n      - latest\n      - 0x921456\n    termselcrit:\n      - "tags[management]@essif-lab" # import all terms from the mrg of `essif-lab:latest` that have grouptag `management`.\n      - "terms[party,community](@essif-lab:0.9.4)" # import the terms `party` and `community` from the mrg of `essif-lab:0.9.4`.\n      - "*@tev2" # import all terms defined in the scope `tev2`\n    status: proposed\n    from: 20220312\n    to:\n  - vsntag: test # a versiontag that identifies this version from all other versions in the SAF\n    altvsntags: # alternative verstiontags\n      - 0x654129\n    termselcrit:\n      - "*@essif-lab" # import all terms defined in the scope `essif-lab`\n      - "-tags[terminology]" # remove all terms tagged with the grouptag `terminology`\n      - "*@tev2" # import all terms defined in the scope `tev2`\n'))),(0,i.kt)("p",null,"The following fields are defined for the ",(0,i.kt)("inlineCode",{parentName:"p"},"versions")," section of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"F"),") the field is required to be present as a header field. The ",(0,i.kt)("inlineCode",{parentName:"li"},"F")," means that we reserve this field for Future Use."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vsntag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"@"},"Versiontag")," that that is used to ",(0,i.kt)("a",{parentName:"td",href:"@"},"identify")," this version within the set of all other versions that are maintained within this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),". in this ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),". It MUST NOT be changed during the lifetime of this version.",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-\\.]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"altvsntags")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"List of alternative ",(0,i.kt)("a",{parentName:"td",href:"@"},"versiontags")," that may be used to refer to this version of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),". A typical use of this field would be to tag a version as the 'latest' version.",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-\\.]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"license")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"File that contains the (default) licensing conditions. Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"license"),". If not specified, its value defaults to the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"license")," field in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scope")," section (of this ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),"). The purpose of this field is to allow different versions of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology")," to have different licenses.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termselcrit")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"List of ",(0,i.kt)("a",{parentName:"td",href:"@"},"term selection criteria")," that are used to generate (this version of) the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),". See ",(0,i.kt)("a",{parentName:"td",href:"/docs/tev2/spec-tools/terminology-construction"},"Terminology Construction")," for details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," the status of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term"),". (",(0,i.kt)("a",{parentName:"td",href:"@"},"Communities")," of) ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopes")," may specify values for this field. If not specified, the status SHOULD be assumed to be 'concept', 'draft', 'proposed', or similar. An example is the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md"},"status tags used by ToIP"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from")),(0,i.kt)("td",{parentName:"tr",align:"center"},"F"),(0,i.kt)("td",{parentName:"tr",align:null},"Date at which it was decided to establish this version.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"center"},"F"),(0,i.kt)("td",{parentName:"tr",align:null},"Date at which this version will expire (or has expired).")))),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," dates have been included to (in future) enable one to refer to a specific version of the terminology that was valid at a particular date. This feature needs to be worked out, and will impact ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/terminology-construction"},"terminology construction"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-syntax/term-ref-syntax"},"term ref specs"),", and various tools.")))}h.isMDXComponent=!0}}]);