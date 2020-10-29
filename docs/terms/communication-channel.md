---
id: communication-channel
title: "Communication Channel"
scopeid: essifLab
type: concept
typeid: communication-channel
stage: draft
hoverText: "Communication Channel: a (digital or non-digital) means by which two Actors can exchange messages with one another."
glossaryText: "a (digital or non-digital) means by which two %%actors^actor%% can exchange messages with one another."
---

:::info Editor's note
TNO (or others) to provide further content of this file.
:::

### Notes

A %%Communication Channel|communication-channel%% is said to be **digital** if it uses a digital means to exchange (digital) messages between two %%digital actors|digital-actor%%.

A %%Communication Channel|communication-channel%% is said to be **secure** if it provides the following guarantees:
- every of its endpoint is being used by precisely one %%actor|actor%%;
- during its entire lifetime, each endpoint will only be used by this %%actor|actor%% (endpoint authentication; note that identification of the %%actor|actor%% that uses an endpoint, or its %%principal|principal%% is NOT required);
- only the %%actors|actor%% that use an endpoint are capable of transmitting and reading messages through that channel (message secrecy - typically obtained by encrypting the messages);
- the receiver of a message can determine whether or not the message has been received as it was transmitted (message integrity).

### Related Concepts
- %%Communication Session|communication-session%%

