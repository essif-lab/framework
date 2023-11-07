"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[4637],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(a),h=n,u=f["".concat(p,".").concat(h)]||f[h]||m[h]||o;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7607:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=(a(4996),["components"]),s={id:"tev2-toolbox",scopetag:"tev2",date:20220421},p="TEv2 Terminology Toolbox",l={unversionedId:"tev2/tev2-toolbox",id:"tev2/tev2-toolbox",title:"TEv2 Terminology Toolbox",description:"The current TEv2 webiste is located at https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2",source:"@site/docs/tev2/tev2-toolbox.md",sourceDirName:"tev2",slug:"/tev2/tev2-toolbox",permalink:"/framework/docs/tev2/tev2-toolbox",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/tev2-toolbox.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1699367818,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"tev2-toolbox",scopetag:"tev2",date:20220421}},c={},m=[],f={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tev2-terminology-toolbox"},"TEv2 Terminology Toolbox"),(0,o.kt)("admonition",{title:"This page is deprecated.",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The current TEv2 webiste is located at ",(0,o.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2"},"https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,"This document is meant as a specification of results that the ToIP CTWG aims to realize, that can serve as the basis for the specification of terminology tooling."),(0,o.kt)("p",null,"The intended audience is expected to be familiar with the ",(0,o.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/pattern/pattern-terminology#formalized-model"},"mental model on terminology")," and the current way(s) of working of the CTWG."),(0,o.kt)("p",null,"As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/tev2-overview"},"TEv2 overview"),", the toolbox is envisaged to have a variety of tools, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Term Ref(erence) Resolution Tool (",(0,o.kt)("a",{parentName:"strong",href:"#trrt"},"TRRT"),")"),". This tool takes files that contain so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs")," and outputs a copy of these files in which these ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs")," are converted into so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"renderable refs"),", i.e. texts that can be further processed by tools such as GitHub pages, Docusaurus, etc. The result of this is that the rendered document contains markups that help ",(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," to quickly find more explanations of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"concept")," or other ",(0,o.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," that is being referenced.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Machine Readable Glossary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRGT"),")"),". This tool reads the ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," to find the instructions by which it creates an ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," for each of the versions of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology")," that are maintained within that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Human Readable Glossary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"HRGT"),")"),". This tool reads the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", resolves any ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs")," as necessary, and creates a rendering that results in a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Integrity Checker Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"ICT"),")"),". This tool enables ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to test the integrity of ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAFs"),", ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs"),", and ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated texts")," for integrity, logging any situation that may cause inconvenience or errors, and providing helptexts that are aimed at guiding ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to resolve any such issues.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Machine Readable Dictionary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRDT"),")"),". This tool generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRD"),") of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," that originate from different (versions of) ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies"),", from various ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),". ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRDs")," are meant to be processed by a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRDT"),", which turns it into (a specific format of) ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRD"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Human Readable Dictionary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"HRDT"),")"),". This tool generates a a Human Readable ",(0,o.kt)("a",{parentName:"p",href:"@"},"Dictionary")," (",(0,o.kt)("a",{parentName:"p",href:"@"},"HRD"),"), that renders the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," from a ",(0,o.kt)("a",{parentName:"p",href:"@"},"machine readable dictionary (MRD)")," into one of several formats, e.g. HTML, or PDF. ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRDs")," can be created for different purposes, e.g. to compare different ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies")," (across ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),"), or as a reference of what ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," mean in different ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),"."))),(0,o.kt)("p",null,"These tools are intended to be called from the command-line, typically"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"in a context where the user is developing (documents, papers, etc.) locally, and"),(0,o.kt)("li",{parentName:"ol"},"in a github or gitlab context, where the tools are called from within a CI/CD pipeline.")),(0,o.kt)("p",null,"Apart from these tools, a collection of code snippets is envisaged that can be used to automatically generate ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs")," and ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGs")," upon successful commits to the master-branch of an associated repo/wiki, enabling ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to establish CI/CD pipelines."))}h.isMDXComponent=!0}}]);