---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: communication-channel
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: communication-channel
formphrases: communication-channel{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
isa:
term: Communication # Text that is the name of the concept in (human readable) texts.
fullterm: "Communication Channel"
shorterm:
synonyms:
glossaryText: "a (digital or non-digital) means by which two [actors](@) can exchange messages with one another."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Communication Channel"
displayed_sidebar: essifLabSideBar
hoverText: "Communication Channel: a (digital or non-digital) means by which two Actors can exchange messages with one another."
---

:::info Editor's note
Additional content is needed here.
:::

### Notes

A [Communication Channel](@) is said to be **digital** if it uses a digital means to exchange (digital) messages between two [digital actors](@).

A [Communication Channel](@) is said to be **secure** if it provides the following guarantees:
- every of its endpoint is being used by precisely one [actor](@);
- during its entire lifetime, each endpoint will only be used by this [actor](@) (endpoint authentication; note that identification of the [actor](@) that uses an endpoint, or its [principal](@) is NOT required);
- only the [actors](@) that use an endpoint are capable of transmitting and reading messages through that channel (message secrecy - typically obtained by encrypting the messages);
- the receiver of a message can determine whether or not the message has been received as it was transmitted (message integrity).
