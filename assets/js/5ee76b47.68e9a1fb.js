"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[5767],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],c={id:"communication-channel",title:"Communication Channel",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",term:"communication-channel",formPhrases:"communication-channel{ss}, digital-communication-channel{ss}",status:"draft",grouptags:null,hoverText:"Communication Channel: a (digital or non-digital) means by which two Actors can exchange messages with one another.",glossaryText:"a (digital or non-digital) means by which two [actor](@) can exchange messages with one another.",date:20210601},s=void 0,l={unversionedId:"terms/communication-channel",id:"terms/communication-channel",title:"Communication Channel",description:"Additional content is needed here.",source:"@site/docs/terms/communication-channel.md",sourceDirName:"terms",slug:"/terms/communication-channel",permalink:"/framework/docs/terms/communication-channel",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/communication-channel.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1699367068,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"communication-channel",title:"Communication Channel",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",term:"communication-channel",formPhrases:"communication-channel{ss}, digital-communication-channel{ss}",status:"draft",grouptags:null,hoverText:"Communication Channel: a (digital or non-digital) means by which two Actors can exchange messages with one another.",glossaryText:"a (digital or non-digital) means by which two [actor](@) can exchange messages with one another.",date:20210601},sidebar:"essifLabSideBar"},m={},u=[{value:"Notes",id:"notes",level:3},{value:"Related Concepts",id:"related-concepts",level:3}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Additional content is needed here.")),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"Communication Channel")," is said to be ",(0,i.kt)("strong",{parentName:"p"},"digital")," if it uses a digital means to exchange (digital) messages between two ",(0,i.kt)("a",{parentName:"p",href:"actor@"},"digital actors"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"Communication Channel")," is said to be ",(0,i.kt)("strong",{parentName:"p"},"secure")," if it provides the following guarantees:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"every of its endpoint is being used by precisely one ",(0,i.kt)("a",{parentName:"li",href:"@"},"actor"),";"),(0,i.kt)("li",{parentName:"ul"},"during its entire lifetime, each endpoint will only be used by this ",(0,i.kt)("a",{parentName:"li",href:"@"},"actor")," (endpoint authentication; note that identification of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"actor")," that uses an endpoint, or its ",(0,i.kt)("a",{parentName:"li",href:"@"},"principal")," is NOT required);"),(0,i.kt)("li",{parentName:"ul"},"only the ",(0,i.kt)("a",{parentName:"li",href:"@"},"actors")," that use an endpoint are capable of transmitting and reading messages through that channel (message secrecy - typically obtained by encrypting the messages);"),(0,i.kt)("li",{parentName:"ul"},"the receiver of a message can determine whether or not the message has been received as it was transmitted (message integrity).")),(0,i.kt)("h3",{id:"related-concepts"},"Related Concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"@"},"Communication Session"))))}d.isMDXComponent=!0}}]);