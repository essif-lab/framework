"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2427],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,h=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(3117),a=n(7294),i=n(6010),o=n(2466),l=n(6775),u=n(1980),s=n(7392),c=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function m(e){var t,n,r,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,p=f(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),v=m[0],b=m[1],g=h({queryString:u,groupId:s}),k=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],T=w[1],E=function(){var e=null!=k?k:N;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,p]),tabValues:p}}var v=n(2389),b="tabList__CuJ",g="tabItem_LNqP";function k(e){var t=e.className,n=e.block,l=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==l&&(p(t),u(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:f},o,{className:(0,i.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=m(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function N(e){var t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},7588:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(4996),l=(n(4866),n(5162),["components"]),u={id:"hrg",sidebar_label:"HRG (Human Readable Glossary)",hide_table_of_contents:!0,scopetag:"tev2",date:20220503},s="Human Readable Glossary (HRG)",c={unversionedId:"tev2/spec-files/hrg",id:"tev2/spec-files/hrg",title:"Human Readable Glossary (HRG)",description:"The current TEv2 webiste is located at https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2",source:"@site/docs/tev2/spec-files/22-hrg.md",sourceDirName:"tev2/spec-files",slug:"/tev2/spec-files/hrg",permalink:"/framework/docs/tev2/spec-files/hrg",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/spec-files/22-hrg.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1699367068,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:22,frontMatter:{id:"hrg",sidebar_label:"HRG (Human Readable Glossary)",hide_table_of_contents:!0,scopetag:"tev2",date:20220503}},p={},f=[{value:"File naming conventions",id:"file-naming-conventions",level:2}],d={toc:f};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"human-readable-glossary-hrg"},"Human Readable Glossary (HRG)"),(0,i.kt)("admonition",{title:"This page is deprecated.",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The current TEv2 webiste is located at ",(0,i.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2"},"https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2"))),(0,i.kt)("img",{alt:"This page is under construction",src:(0,o.Z)("images/wip/wip-under-construction.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"This document specifies the contents of the ",(0,i.kt)("a",{parentName:"p",href:"hrg@"},"Human Readable Glossary")," file (",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG"),")."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," is a ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary")," is meant to be readable by humans, so that they can find out the meaning of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," as they are used in the context in which that ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary")," is valid. Thus, ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGs")," come in human readable formats, such as HTML or PDF."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"@"},"HRGs")," are generated by the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/hrgt"},"tool"),", which allows its output to be highly customized. For example, the tool expects that its user specifies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," that need to be included;"),(0,i.kt)("li",{parentName:"ul"},"the particular way in which a ",(0,i.kt)("a",{parentName:"li",href:"@"},"term")," (and its description) appear in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRGT")," "),(0,i.kt)("li",{parentName:"ul"},"any attributes (e.g. contributors, authors, license information etc.) need to be part of such a description, or need to be mentioned in the beginning or the end of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG")),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("h2",{id:"file-naming-conventions"},"File naming conventions"),(0,i.kt)("p",null,"Within (the ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossarydir")," of) a particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopedir"),", we can generate (or import) and hence find all ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG"),"-files that are needed within that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". We use the following file naming convention:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"hrg.<scopetag>.<vsntag>.<output>"))," is the name of a file that contains an actual ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG"),", or it is a file that links (references) such a file, where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"<scopetag>.<vsntag>"))," is taken from the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG"),"-file from which the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG")," is generated. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-files/mrg#mrg-file-naming"},"MRG file naming")," for details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"<output>"))," is a text that has been provided by the user that generated the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG"),". It includes the file extension (e.g., PDF, HTML, etc.) that is appropriate for its contents. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/hrgt#calling-the-tool"},"HRG generation")," for details.")),(0,i.kt)("p",null,"This naming convention enables tools (as well as ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," and others) that operate within a particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", to quickly find a particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," that is relevant for that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We need to decide whether this document actually describes "),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"(the possible structures of) HRGs, or"),(0,i.kt)("li",{parentName:"ul"},"the ways in hwich the generation of an HRG can be specified"))))}h.isMDXComponent=!0}}]);