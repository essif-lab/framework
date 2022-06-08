---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: credential-type
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: credential-type
formphrases: credential-type{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Credential # Text that is the name of the concept in (human readable) texts.
fullterm: "Credential Type"
shorterm:
synonyms:
glossaryText: "the specification of the contents, properties, constraints etc. that [credentials](@) of this type must have/comply with."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Credential Type"
displayed_sidebar: essifLabSideBar
hoverText: "Credential Type: the specification of the contents, properties, constraints etc. that Credentials of this type must have/comply with."
---

### Short Description
A **credential-type** is a specification that states
- the contents that [credentials](@) of that kind must or may have; this includes of which kinds of [assertions (claims, statements)](@) as well as meta-data.
- properties Typically, [parties](@) that issue [credentials](@) of some [kind](@) will advertise the [credential types](@) of the [credentials](@) that it may issue.

### Purpose
[Parties](@) advertise [credential types](@) for credentials that they issue for the purpose of enabling other [parties](@) to determine whether or not they should be asking for such [credentials](@) of this issuing [party](@).