---
id: communication-channel
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termType: concept
term: communication-channel
formPhrases: communication-channel{ss}, digital-communication-channel{ss}
status: draft
grouptags:
hoverText: "Communication Channel: a (digital or non-digital) means by which two Actors can exchange messages with one another."
glossaryTerm: "Communication Channel"
glossaryText: "a (digital or non-digital) means by which two [actor](@) can exchange messages with one another."
date: 20210601
---

# Communication Channel


:::info Editor's note
Additional content is needed here.
:::

### Notes

A [Communication Channel](@) is said to be **digital** if it uses a digital means to exchange (digital) messages between two [digital actors](actor@).

A [Communication Channel](@) is said to be **secure** if it provides the following guarantees:
- every of its endpoint is being used by precisely one [actor](@);
- during its entire lifetime, each endpoint will only be used by this [actor](@) (endpoint authentication; note that identification of the [actor](@) that uses an endpoint, or its [principal](@) is NOT required);
- only the [actors](@) that use an endpoint are capable of transmitting and reading messages through that channel (message secrecy - typically obtained by encrypting the messages);
- the receiver of a message can determine whether or not the message has been received as it was transmitted (message integrity).

### Related Concepts

- [Communication Session](@)
