---
id: communication-channel
title: "Communication Channel"
scopeid: essifLab
displayed_sidebar: essifLabSideBar
type: concept
termid: communication-channel
symphrase: communication-channel{ss}, digital-communication-channel{ss}
status: draft
hoverText: "Communication Channel: a (digital or non-digital) means by which two Actors can exchange messages with one another."
glossaryText: "a (digital or non-digital) means by which two %%actors^actor%% can exchange messages with one another."
date: 20210601
---

:::info Editor's note
Additional content is needed here.
:::

### Notes

A %%Communication Channel|communication-channel%% is said to be **digital** if it uses a digital means to exchange (digital) messages between two %%digital actors|actor%%.

A %%Communication Channel|communication-channel%% is said to be **secure** if it provides the following guarantees:
- every of its endpoint is being used by precisely one %%actor|actor%%;
- during its entire lifetime, each endpoint will only be used by this %%actor|actor%% (endpoint authentication; note that identification of the %%actor|actor%% that uses an endpoint, or its %%principal|principal%% is NOT required);
- only the %%actors|actor%% that use an endpoint are capable of transmitting and reading messages through that channel (message secrecy - typically obtained by encrypting the messages);
- the receiver of a message can determine whether or not the message has been received as it was transmitted (message integrity).

### Related Concepts
- %%Communication Session|communication-session%%
