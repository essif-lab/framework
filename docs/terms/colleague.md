---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: colleague
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: colleague
formphrases: colleague{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-03-30
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Colleague # Text that is the name of the concept in (human readable) texts.
fullterm:
shorterm:
synonyms:
glossaryText: "two or more (digital or non-digital) [agents](@) that have the same [principal](@) (i.e. [party](@) on whose behalf they are executing an [action](@))."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Colleague"
displayed_sidebar: essifLabSideBar
hoverText: "Colleagues: two or more (digital or non-digital) Agents that have the same Principal (i.e. Party on whose behalf they are executing an Action)."
---

### Short Description
A **colleague** is one of two or more (digital or non-digital) [agents](@) that have the same [principal](@) (on whose behalf they are executing an [action](@)).

### Examples

Consider a traveler that uses her digital wallet to communicate her [identity](@) to an immigration officer. In order to decide whether or not to permit the traveler entrance to the country, it must establish that the traveler (as an [actor](@) that pushes the buttons of the digital wallet) and the digital wallet (i.e. the [actor](@) that communicates some [identity](@) data), work on behalf of one and the same [party](@), i.e. the traveler (as a [party](@)).

Another example is a customer that uses a chat application (her [agent](@)) to contact the support department of her life insurance to sort something out. As the chat progresses, the life insurance [agent](@) must obtain some sensitive health-data, for which the chat channel isn't appropriate. He requests the customer to use another means ([actor](@)) that is capable of setting up a [communications channel](@) that is more secure so that she can use this other means as an [agent](@) to transmit her sensitive health data. In order to prevent health fraud, the life insurance [agent](@) must be capable of determining that both the other means are [agents](@) that share the same [principal](@), i.e. the customer.

### Purpose
The ability to distinguish between (non) [colleagues](@) allows us to reason and communicate about the set of (digital and non-digital) [actors](@) that are [agents](@) for a **principal|principal[. This is relevant in situations where different %%agents](@) execute [actions](@) in a single [business transaction](@) on behalf of the same [principal](@)
