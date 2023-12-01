---
id: actor
title: "Actor"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termType: concept
term: actor
formPhrases: actor{ss}, digital-actor{ss}
status: draft
grouptags:
hoverText: "Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations."
glossaryTerm: "Actor"
glossaryText: "Entity that can act (do things/execute [action](@)), e.g. people, machines, but not [organization](@)."
date: 20210601
---
### Short Description
An **Actor** is someone or something that can act, i.e. actually do things, execute [actions](@), such as people or machines. Actors will generally execute [actions](@) in different ways, depending on the context, or the [party](@) on whose behalf they act.

An [organization](@) is not considered to be an [actor](@). [Organizations](@) cannot drink beer, (digitally or manually) sign and/or encrypt documents, hire [people](human-being@), buy computers, etc. They need [actors](@) ([people](human-being@), machines, etc) to act on their behalf. This is elaborated further on in the [Parties, Actors and Actions pattern](pattern-party-actor-action@).

### Purpose
The ability to distinguish between (non)actors allows one to determine which (kinds of) actors are capable of executing which (kinds of) [actions](@), specifically since [organizations](@) do not qualify as an actor (they need actors to get things done).

### Criterion
Entity that is capable of actually executing [actions](@) (acting, doing things).

### Examples

- People (human beings) obviously qualify, as do robots and other machines.
- Stones, pictures, ideas, etc. do not qualify.
- Software applications qualify, provided they are actually running on hardware. An app that is just sitting e.g. on a mobile phone but isn't executed does not qualify.
- Enterprises, governments, and other [organizations](@) do not qualify.

### Related concepts
- [digital actor](actor@)
- [peer actor](@)
- [agent](@)
- [principal](@)
