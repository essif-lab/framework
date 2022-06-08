---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: essif-glue
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: essif-glue
formphrases: essif-glue{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: eSSIF # Text that is the name of the concept in (human readable) texts.
fullterm: "eSSIF-Glue"
shorterm:
synonyms:
glossaryText: "interface layer that allows components with [transaction data collector](@) and/or [transaction data discloser](@) functionality to use the [wallet](@), [holder](@), [issuer](@) and [verifier](@) functionalities."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "eSSIF-Glue"
displayed_sidebar: essifLabSideBar
hoverText: "eSSIF-Glue: interface layer that allows components with Transaction Data Collector and/or Transaction Data Discloser functionality to use the Wallet, Holder, Issuer and Verifier functionalities."
---

### Short Description
The **eSSIF-Glue** is an interface layer that consists of a documented set of APIs between the [Transaction Data Collector](@) and [Transaction Data Discloser](@) on the one hand, and the Wallet, Holder, Issuer and Verifier (WHIV) components on the other hand.

 Ultimately, we would like to see these APIs standardized. Having such APIs allows different [parties](@) to create their own version of the WHIV components, supporting the SSI technologies as they see fit, and shrinking or expanding functionalities as they feel appropriate. [parties](@) can then select such WHIV components as they see fit.

### Purpose
The purpose of the essif-Glue APIs is to make calling the WHIV functions as simple as possible, given the functions of the [Transaction Data Collector](@) and [Transaction Data Discloser](@)

### Criterion
The set of API's described at https://gitlab.grnet.gr/essif-lab/tno-ssi-service/developer-docs.
