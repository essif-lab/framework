---
id: capability
displayed_sidebar: essifLabSideBar
scopetag: essifLab
termType: concept
term: capability
formPhrases: capabilit{yies}, capabilit{yies}-of-a-party
status: draft
grouptags:
hoverText: "Capability (of a Party): the (named) combination of (a) the Party's means to get something done, (b) the Party's Governance process that that ensures that its (business) Policies for getting that something done are being created and maintained, and (c) the Party's Management process that creates and maintains the (operational) Policies, such that every Employee that has a task in getting this something done can find and interpret a Policy and use it as it executes Actions in such tasks."
glossaryTerm: "Capability (of a Party)"
glossaryText: "the (named) combination of (a) the means of a specific [party](@) to get something done, (b) the [party](@) [governance](@) process that ensures that its (business) [policies](@) for getting that something done are being created and maintained, and (c) the [party](@) [management](@) process that creates and maintains the (operational) [policies](@), such that every [employee](@) that has a task in getting this something done can find and interpret a [policy](@) and use it as it executes [action](@) in such tasks."
date: 20220922
---

# Capability (of a Party)


:::info Editor's note
This page is a first draft, and needs to be properly reviewed.
:::
### Short Description

A **capability** (of a [party](@)) is the (named) combination of
1. the means of a specific [party](@) to get something done - in other words the means to ensure that certain results are realized (typically associated with an [objective](@) of that [party](@));
2. the [party's](@) [governance](@) process that ensures that its (business) [policies](@) for getting that something done are being created and maintained, and
3. the [party's](@) [management](@) process that creates and maintains the (operational) [policies](@), such that every [employee](@) that has a task in getting this something done can find and interpret a [policy](@) and use it as it executes [actions](@) in such tasks..

The name of a capability typically refers to a (set of) function(s) that stakeholders (e.g. architects, domain experts, business people, developers) can easily relate to. In [SSI](self-sovereign-identity@) contexts, names such as 'issuer capability', 'revocation capability' might appear.

The description of a capability (of a [party](@)) should specify
1. its name;
2. its scope, i.e.
  - the functions that define the 'getting something done';
  - the (other) [capabilities](@) that are expected to be in place, and that the [party](@) relies on to function as specified;
3. the [expectations](@) that the [party](@) needs to [govern](governance@) regarding the capability, e.g. towards:
  - the [parties](@) (e.g. service providers) that (operationally) supply the [capabilities](@) that the [party](@) itself relies on;
  - [employees](@) that are tasked with the creation and operational maintenance of the means that the [party](@) needs to dispose of (and that may rely on other [capabilities](@)) in order to have this capability.
4. the [expectations](@) that this [party](@) has towards [employees](@) that are tasked with the operational execution of (some of) these functions[^1].

[^1]: it is important that the [party](@) properly defines the scope of the [capability](@), and limits its [governance](@) to its[expectations](@) within that scope.

### Examples

:::info Editor's note
We need a set of references towards good examples of capability-descriptions.
:::