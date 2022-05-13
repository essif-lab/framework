"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[7330],{3735:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var i=a(3117),n=a(102),o=(a(7294),a(3905)),r=(a(4996),["components"]),s={id:"tev2-installation",title:"Installation",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},l=void 0,d={unversionedId:"tev2/tev2-installation",id:"tev2/tev2-installation",title:"Installation",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction",source:"@site/docs/tev2/tev2-installation.md",sourceDirName:"tev2",slug:"/tev2/tev2-installation",permalink:"/framework/docs/tev2/tev2-installation",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-installation.md",tags:[],version:"current",frontMatter:{id:"tev2-installation",title:"Installation",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Curators Manual",permalink:"/framework/docs/tev2/tev2-curators-manual"},next:{title:"Curated Texts",permalink:"/framework/docs/tev2/tev2-spec-ctext"}},p={},c=[{value:"Structure of Scope Directories",id:"structure-of-scope-directories",level:3},{value:"Integrating Scope Directories and the ToIP Terminology Toolbox",id:"integrating-scope-directories-and-the-toip-terminology-toolbox",level:3},{value:"Integrating Scope Directories and Third Party Rendering Tools",id:"integrating-scope-directories-and-third-party-rendering-tools",level:3}],m={toc:c};function h(t){var e=t.components,a=(0,n.Z)(t,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This section on 'Installation' can really be written only after the rest is complete. The contents of this page is just a set of ideas that may well have been deprecated already."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page should only document the generic stuff. Any installation details that are specific to a tool SHOULD be documented in the page(s) that document the particular tool. Obviously, this page could mention the tools for which that is the case, and link to the associated sections."))),(0,o.kt)("p",null,"TEv2 is a tool for ",(0,o.kt)("a",{parentName:"p",href:"@"},"curating")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology"),"-related data from the perspective of a single ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),". Installation comprises"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"setting up, or appointing an (online) directory that will serve as a ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope directory"),";"),(0,o.kt)("li",{parentName:"ul"},"creating a ",(0,o.kt)("a",{parentName:"li",href:"tev2-spec-saf"},"Scope Administration File (SAF)"),", and providing the configuration of the ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope")," and its ",(0,o.kt)("a",{parentName:"li",href:"@"},"terminology"),";"),(0,o.kt)("li",{parentName:"ul"},"installing the ",(0,o.kt)("a",{parentName:"li",href:"tev2-toolbox"},"tev2-toolbox"),";"),(0,o.kt)("li",{parentName:"ul"},"integrating the ",(0,o.kt)("a",{parentName:"li",href:"tev2-toolbox"},"tools")," with other tools, such as a CI/CD pipeline on github or gitlab, static site generators such as ",(0,o.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"github pages")," or ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. See also: ",(0,o.kt)("a",{parentName:"li",href:"tev2-toolbox-use"},"Using the Tools"),".")),(0,o.kt)("h3",{id:"structure-of-scope-directories"},"Structure of Scope Directories"),(0,o.kt)("p",null,"Depending on the other tooling that is going to be used, a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory")," has to be specified that is part of the (online) directory in which the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology")," has to be used. The ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,o.kt)("a",{parentName:"p",href:"saf@"},"scope administration file (SAF)")," specifies whatever needs to be administered for that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),"; this file is maintained by the ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," of the scope (using a regular text editor)."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"@"},"Curators")," must also specify a location (directory) within the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory")," where ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossaries")," are being maintained. This location holds the ",(0,o.kt)("a",{parentName:"p",href:"gdf@"},"Glossary Definition Files (GDFs)")," that are used to generate ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossaries")," for different purposes, as needed. Also, this directory will (by default) contain the ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossaries")," that are generated."),(0,o.kt)("h3",{id:"integrating-scope-directories-and-the-toip-terminology-toolbox"},"Integrating Scope Directories and the ToIP Terminology Toolbox"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Content to be produced"))),(0,o.kt)("h3",{id:"integrating-scope-directories-and-third-party-rendering-tools"},"Integrating Scope Directories and Third Party Rendering Tools"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"@"},"Terminological artifacts")," are intended to also be used by/within third party rendering tools, such as ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", or LaTex"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Content to be produced"))))}h.isMDXComponent=!0}}]);