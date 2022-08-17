---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: scope
# TEv2: generic front-matter for curated texts
scope: tev2
termname: scope
termtype: concept
termattrs:
grouptags:
synonyms:
formphrases: scope{ss}
status: proposed
created: 2022-06-06
updated: 2022-08-04
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
glossaryText: "the extent of the [terms](@), [definitions](@) and other documentation that a [community](@) (which we call the [owner](@) of the [scope](@)) needs to express, communicate and validate its [knowledge](@) as relevant to achieving a specific subset of its [objectives](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Scope"
hoverText: "Scope: the extent of the Terms, Definitions and other documentation that a Community (i.e. the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **scope** is the extent of the [terms](@), [definitions](@) and other documentation that a [community](@) (which we call the [owner](@) of the [scope](@)) needs to express, communicate and validate its [knowledge](@) as relevant to achieving a specific subset of its [objectives](@).

Other documentation includes [curated texts](@), and artifacts that are generated from that, such as [glossaries](@), [dictionaries](@) and the like. It also includes [tags](@) that can be used e.g. to refer to other [scopes](@) ([scopetags](@)), identify different versions for artifacts ([versiontags](@)), or create particular groups of [terms](@) ([grouptags](@)).

[Scopes](@), that is: their contents, must be [curated](@). Since this requires particular capabilities that the [owning](@) [community](@) may lack, we say that this [curation](@) is done by a so-called [terms community](@), whose [members](@) are [individuals](@) that do have such capabilities; they serve the [owning](@) [community](@) as the [curators](@) of the [scope](@).

A [scope](@) can contain multiple [terminologies](@); it is expected that at least one such [terminology](@) is committed to by the [owning](@) [community](@).

[Scopes](@) may overlap, or be nested, in a similar way as [namespaces](https://en.wikipedia.org/wiki/Namespace).

The [terminology pattern](pattern-terminology-support@) provides an overview of how this concept fits in with related concepts.

### Purpose

The purpose of having [scopes](@) is that it enables [communities](@) (and other [parties](@)) to come to develop and maintain [terminologies](@) that are not only relevant for realizing specific [objectives](@), but also are fit for expressing and communicating the [knowledge](@) that is used for doing so. This is known as [curation](@) of a [scope](@). Specifically, [scopes](@) provide the members of the [owning](@) [community](@) (but also non-members) to establish a provable similar understanding of the [concepts](@) and other [knowledge artifacts](@), which is prerequisite for fruitful cooperation, and realizing [objectives](@).
