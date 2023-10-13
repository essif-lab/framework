"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6237],{4861:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return p}});var o=a(3117),i=a(102),s=(a(7294),a(3905)),r=a(4345),n=["components"],c={id:"role",title:"Role",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",termid:"role",term:"role",formPhrases:"role{ss}",status:"draft",grouptags:null,hoverText:"Role (of an Entity in some context): a defined set of characteristics that the Entity has in some context, such as responsibilities (Obligations) it may have, Actions (behaviors) it may execute, or pieces of Knowledge that it is expected to have in that context, which are referenced to by a specific (Role-)name.",glossaryText:"a defined set of characteristics that an %%entity^entity%% has in some context, such as %%responsibilities^obligation%% it may have, %%actions^action%% (behaviors) it may execute, or pieces of %%knowledge^knowledge%% that it is expected to have in that context, which are referenced to by a specific %%role name^role-name%%.",date:20210601},l=void 0,h={unversionedId:"terms/role",id:"terms/role",title:"Role",description:"Short Description",source:"@site/docs/terms/role.md",sourceDirName:"terms",slug:"/terms/role",permalink:"/framework/docs/terms/role",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/terms/role.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1697175379,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"role",title:"Role",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",type:"concept",termid:"role",term:"role",formPhrases:"role{ss}",status:"draft",grouptags:null,hoverText:"Role (of an Entity in some context): a defined set of characteristics that the Entity has in some context, such as responsibilities (Obligations) it may have, Actions (behaviors) it may execute, or pieces of Knowledge that it is expected to have in that context, which are referenced to by a specific (Role-)name.",glossaryText:"a defined set of characteristics that an %%entity^entity%% has in some context, such as %%responsibilities^obligation%% it may have, %%actions^action%% (behaviors) it may execute, or pieces of %%knowledge^knowledge%% that it is expected to have in that context, which are referenced to by a specific %%role name^role-name%%.",date:20210601},sidebar:"essifLabSideBar"},m={},p=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Examples",id:"examples",level:3}],d={toc:p};function f(e){var t=e.components,a=(0,i.Z)(e,n);return(0,s.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"short-description"},"Short Description"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"Role")," (of an ",(0,s.kt)(r.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," in some context) is a named set of characteristics that the entity has, ",(0,s.kt)(r.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," (behaviors) that it may execute, or pieces of ",(0,s.kt)(r.Z,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," that it is expected to have in that context."),(0,s.kt)("p",null,"Equivalently, a role can be seen as a (",(0,s.kt)(r.Z,{popup:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",reference:"/framework/docs/terms/role-name",mdxType:"Term"},"named"),") class of entities where the classification criteria are specified for the context for which the role is defined. However, it is distinct from the ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Class"},"class concept")," in that it is (or rather: its members are) expected to have/exhibit a specific function/behavior in the context for which the role is defined, whereas a class (definition) only specifies the (static) characteristics of its members."),(0,s.kt)("p",null,"A role does not exist outside the context for which it is defined. However, while the ",(0,s.kt)(r.Z,{popup:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",reference:"/framework/docs/terms/role-name",mdxType:"Term"},"name of the role")," may be used outside that context, it then cannot refer to that role. It is common practice to use the same role name for roles in related contexts. This may be interpreted to imply a relation between these roles, which may or may not be correct. Not being aware of this is a known cause of confusion and misunderstandings."),(0,s.kt)("h3",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Roles")," enable us to classify ",(0,s.kt)(r.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," in a context-dependent manner, and use a single ",(0,s.kt)(r.Z,{popup:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",reference:"/framework/docs/terms/role-name",mdxType:"Term"},"name")," for"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"referring to the set of ",(0,s.kt)(r.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," (behaviors), pieces of ",(0,s.kt)(r.Z,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge"),", and other characteristics that members of the class (are supposed to) have, and"),(0,s.kt)("li",{parentName:"ul"},"referring to a (still) unspecified entity in that class.")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"in a technical context, a role may refer to a set of permissions and a set of users (",(0,s.kt)("a",{parentName:"li",href:"https://csrc.nist.gov/projects/role-based-access-control"},"NIST RBAC standard"),")"),(0,s.kt)("li",{parentName:"ul"},"in an enterprise context, a role may refer to an organizational function that employees can have, and that come with benefits, salary and responsibilities, e.g. '",(0,s.kt)(r.Z,{popup:"Management: the act or process of managing or actually realizing of (the results associated with) a set of Objectives by the Owner of these Objectives.",reference:"/framework/docs/terms/management",mdxType:"Term"},"manager"),"', '",(0,s.kt)(r.Z,{popup:"Controller (of an Entity): the role that an Actor performs as it is executing actions on that Entity for the purpose of ensuring that the Entity will act/behave, or be used, in a particular way.",reference:"/framework/docs/terms/controller",mdxType:"Term"},"controller"),"', 'salesperson'"),(0,s.kt)("li",{parentName:"ul"},"in a UML class diagram, a role name that is specified for a UML class in a relation (association) that it has with another class, refers to a specific (set of) behaviors that elements from this class are expected to exhibit in a particular context. See ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Role_Class_Model"},"Role Class Model")," for more information.")))}f.isMDXComponent=!0}}]);