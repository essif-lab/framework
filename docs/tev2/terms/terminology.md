---
# `Multiple-use fields` \(used by TEv2 and Docusaurus\)
id: terminology
# TEv2: generic front-matter for curated texts
scope: tev2
termtype: concept
termid: terminology
formphrases: terminolog{yies}
grouptags:
status: proposed
created: 2022-06-06
updated: 2022-08-03
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: terminology  # Text that is the name of the concept in (human readable) texts.
fullterm: terminology (in/of a scope)
shorterm:
synonyms:
glossaryText: "a set of [terms](@) that are used within a single [scope](@) to refer to [concepts](@) and other [knowledge artifacts](@) of a single [party](@) (e.g. a [community](@)), enabling [parties](@) to reason and communicate ideas they have about one or more specific topics."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Terminology (in/of a Scope)"
hoverText: "Terminology (in/of a Scope): a set of terms that are used within a single Scope to refer to Concepts and other Knowledge Artifacts of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."
# sidebar_label:
# hide_table_of_contents: true
---

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
A **terminology** is a set of [terms](@) that are used within a single [scope](@) to refer to [concepts](@) and other [knowledge artifacts](@) of a single [party](@) (e.g. a [community](@)), enabling [parties](@) to reason and communicate ideas they have about one or more specific topics. It may be viewed as a topic-specific subset of that [party's](@) [vocabulary](@).

A [terminology](@) may be versioned, i.e. associated with a [versiontag]. This allows multiple [terminologies](@) to exist within a single [scope](@), enabling the [scope](@) to have one for specific purposes (e.g. for the further development of its [terms](@), or for use within a whitepaper).

A [terminology](@) can be documented by (at most) one [machine-readable glossary](mrg@), from which [human readable glossaries](hrg@) can be derived. Selecting the [(scoped) terms](@) that are part of a [terminology](@) and generating the various [glossaries](@) is done by the [curator(s)](@) of its [scope](@).

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.

### Purpose
In order for [parties](@) to properly reason and/or communicate ideas ([concepts](@) and other [knowledge artifacts](@)) about some topic - in particular when it is a specialist topic - they have to establish a set of [terms](@), the meaning of which should be [defined](@) (or otherwise documented) in such a way that the likelihood of misunderstandings between them is minimized. This set of terms is called a `**terminology**`

### Criteria
A **terminology** is the set of [terms](@) that are used within a single [scope](@) to refer to [concepts](@) and other [knowledge artifacts](@) of a single [party](@), enabling [parties](@) to reason and communicate ideas they have about one or more specific topics, for the purpose of reducing the likelihood of misunderstandings.
