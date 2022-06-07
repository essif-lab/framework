---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: role
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: role
formphrases: role{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: Role # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "a defined set of characteristics that an [entity](@) has in some context, such as [responsibilities](@) it may have, [actions](@) (behaviors) it may execute, or pieces of [knowledge](@) that it is expected to have in that context, which are referenced to by a specific [role name](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Role"
displayed_sidebar: essifLabSideBar
hoverText: "Role (of an Entity in some context): a defined set of characteristics that the Entity has in some context, such as responsibilities (Obligations) it may have, Actions (behaviors) it may execute, or pieces of Knowledge that it is expected to have in that context, which are referenced to by a specific (Role-)name."
---

### Short Description
A **Role** (of an [entity](@) in some context) is a named set of characteristics that the entity has, [actions](@) (behaviors) that it may execute, or pieces of [knowledge](@) that it is expected to have in that context.

Equivalently, a role can be seen as a ([named](@)) class of entities where the classification criteria are specified for the context for which the role is defined. However, it is distinct from the [class concept](https://en.wikipedia.org/wiki/Class) in that it is (or rather: its members are) expected to have/exhibit a specific function/behavior in the context for which the role is defined, whereas a class (definition) only specifies the (static) characteristics of its members.

A role does not exist outside the context for which it is defined. However, while the [name of the role](@) may be used outside that context, it then cannot refer to that role. It is common practice to use the same role name for roles in related contexts. This may be interpreted to imply a relation between these roles, which may or may not be correct. Not being aware of this is a known cause of confusion and misunderstandings.

### Purpose
**Roles** enable us to classify [entities](@) in a context-dependent manner, and use a single [name](@) for
- referring to the set of [actions](@) (behaviors), pieces of [knowledge](@), and other characteristics that members of the class (are supposed to) have, and
- referring to a (still) unspecified entity in that class.

### Examples
- in a technical context, a role may refer to a set of permissions and a set of users ([NIST RBAC standard](https://csrc.nist.gov/projects/role-based-access-control))
- in an enterprise context, a role may refer to an organizational function that employees can have, and that come with benefits, salary and responsibilities, e.g. '[manager](@)', '[controller](@)', 'salesperson'
- in a UML class diagram, a role name that is specified for a UML class in a relation (association) that it has with another class, refers to a specific (set of) behaviors that elements from this class are expected to exhibit in a particular context. See [Role Class Model](https://en.wikipedia.org/wiki/Role_Class_Model) for more information.
