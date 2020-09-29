---
id: agent
title: "Concept: Agent (Scope: eSSIF-Lab)"
scopeid: essifLab
termid: agent
hoverText: "Agent (of a Party): Actor that is currently working on behalf of a Party."
---

import { Term } from '..\..\src\components'

## Short Description
An <Term popup="Entity that can act (do things), e.g. people, machines, but not organizations." reference="actor">Actor</Term> that is executing on action on behalf of some <Term popup="Entity that has knowledge about what exists, ways to reason with that knowledge, and ways for making decisions in a Self-Sovereign fashion." reference="party">Party</Term>, which means that the execution of that action is subject to the conditions and other guidance set by that Party, then we say the Actor acts as an Agent of that Party. A Person, that is both an Actor and a Party can hence be seen as its own Agent. Agency is further detailed in the ['Party-Action' pattern|essifLab-pattern-party-action].

## Criterion:
<Term popup="Entity that can act (do things), e.g. people, machines, but not organizations." reference="actor">Actor</Term> that is momentarily executing an action on behalf of a <Term popup="Entity that has knowledge about what exists, ways to reason with that knowledge, and ways for making decisions in a Self-Sovereign fashion." reference="party">Party</Term>.

## Examples:

- A person that is 'doing its own things' acts as an Agent for himself.
- A person that does things for his employer acts as an Agent for that employer.
- An ambassador, when (s)he is 'in function', acts as an Agent for the country for which (s)he is ambassador.
- A person that fills in the tax return form for someone else acts as an Agent for this someone else.
- A company that makes cars may use robots that weld parts of a car together; these robots acts as Agents for that company. 
- A (running) webserver that accepts product orders for a retailer acts as a (digital) Agent for that retailer.
- A wallet app that runs on a phone and that is exclusively used by a single person acts as a (digital) Agent for that person.

