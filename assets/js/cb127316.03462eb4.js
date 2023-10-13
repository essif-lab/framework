"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6262],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=r,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],c={id:"essifLab-fcomp-<fcompid>",title:"<Name of the Functional Component> (Acronym)>",scopetag:"essifLab",type:"fcomp",termid:"<fcompid>",status:"draft",grouptags:null,hoverText:"<short description that pops up when user hovers over a reference to this component.",indexText:"<short description that is used in the FComp-Index; you can use double-percent constructs here",date:20210601},s=void 0,l={unversionedId:"functional-components/essifLab-fcomp-<fcompid>",id:"functional-components/essifLab-fcomp-<fcompid>",title:"<Name of the Functional Component> (Acronym)>",description:"<-- Do the following:",source:"@site/docs/functional-components/functional-component-template.md",sourceDirName:"functional-components",slug:"/functional-components/essifLab-fcomp-<fcompid>",permalink:"/framework/docs/functional-components/essifLab-fcomp-<fcompid>",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/functional-components/functional-component-template.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1651481867,formattedLastUpdatedAt:"May 2, 2022",frontMatter:{id:"essifLab-fcomp-<fcompid>",title:"<Name of the Functional Component> (Acronym)>",scopetag:"essifLab",type:"fcomp",termid:"<fcompid>",status:"draft",grouptags:null,hoverText:"<short description that pops up when user hovers over a reference to this component.",indexText:"<short description that is used in the FComp-Index; you can use double-percent constructs here",date:20210601}},u={},p=[{value:"Summary",id:"summary",level:2},{value:"Context Diagram",id:"context-diagram",level:2},{value:"Functional Description",id:"functional-description",level:2},{value:"Functional API specification",id:"functional-api-specification",level:2},{value:"API &#39;xxx&#39;",id:"api-xxx",level:3}],f={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"<-- Do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"replace all ",(0,i.kt)("inlineCode",{parentName:"li"},"<fcompid>")," occurrances with a string that is all lowercase. The string will be used for reference purposes, so it shouldn't be very long. The string may include ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," and it must not include whitespace."),(0,i.kt)("li",{parentName:"ul"},"replace ",(0,i.kt)("inlineCode",{parentName:"li"},"<Name of the Functional Component> (Acronym)>")," with a string that states the name of your functional component, and the acronym that we can use to refer to it."),(0,i.kt)("li",{parentName:"ul"},"think of a good 'hoverText' and 'indexText'. In the 'indexText', you can use double-percent-constructs to help readers understand your texts better; such constructs produce pop-over texts, and links to the referred-to texts."),(0,i.kt)("li",{parentName:"ul"},"remove this paragraph of text (or make it a 'normal' comment, which it currently is so that you see it)")),(0,i.kt)("p",null,"NOTE: This file contains further explanations in comments. You may need to edit the file to see these explanations.\n--\x3e"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("h2",{id:"context-diagram"},"Context Diagram"),(0,i.kt)("h2",{id:"functional-description"},"Functional Description"),(0,i.kt)("h2",{id:"functional-api-specification"},"Functional API specification"),(0,i.kt)("h3",{id:"api-xxx"},"API 'xxx'"))}m.isMDXComponent=!0}}]);