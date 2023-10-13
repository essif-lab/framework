"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6939],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,f=u["".concat(p,".").concat(d)]||u[d]||v[d]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6724:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return v}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=(r(4996),["components"]),s={id:"tev2-overview",sidebar_label:"TEv2 Overview",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220303},p="Terminology Engine v2 - Overview",c={unversionedId:"tev2/tev2-overview",id:"tev2/tev2-overview",title:"Terminology Engine v2 - Overview",description:"The current version can be found at https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/tev2-overview",source:"@site/docs/tev2/tev2-overview.md",sourceDirName:"tev2",slug:"/tev2/tev2-overview",permalink:"/framework/docs/tev2/tev2-overview",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/tev2-overview.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1689419050,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{id:"tev2-overview",sidebar_label:"TEv2 Overview",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",next:{title:"Understanding One Another",permalink:"/framework/docs/tev2/overview/tev2-common-understanding"}},l={},v=[],u={toc:v};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terminology-engine-v2---overview"},"Terminology Engine v2 - Overview"),(0,o.kt)("admonition",{title:"This page is deprecated. ",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The current version can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/tev2-overview"},"https://tno-terminology-design.github.io/tev2-specifications/docs/tev2/tev2-overview"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,"The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. ",(0,o.kt)("a",{parentName:"p",href:"@"},"curation"),") of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies"),", as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),"."),(0,o.kt)("p",null,"The following perspectives are meant to help you get an overview of ",(0,o.kt)("a",{parentName:"p",href:"@"},"TEv2")," and its intended impact:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tev2/overview/tev2-common-understanding"},"Understanding One Another"))," is what it ultimately is all about. This perspective describes our take on this."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tev2/overview/tev2-purpose"},"Purpose")),". This perspective states the objectives that we seek to realize with ",(0,o.kt)("a",{parentName:"li",href:"@"},"TEv2"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tev2/overview/tev2-design-principles"},"Design Principles")),". This perspective describes the main ideas behind the ways in which ",(0,o.kt)("a",{parentName:"li",href:"@"},"TEv2")," has been designed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tev2/overview/tev2-architecture"},"Architecture")),". This perspective provides an overview of the files, tools and how they interrelate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tev2/terms/patterns/pattern-terminology"},"Terminology Support")),". This perspective describes the mental model we use to think about what we're doing.")))}d.isMDXComponent=!0}}]);