---
id: purpose
// sidebar_label: Why Design a Terminology
// hide_table_of_contents: true
// displayed_sidebar: terminologyDesignSideBar
date: 20221020
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Why _Design_ a Terminology

export const Mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. [curation](@)) of [terminologies](@), as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual [scopes](@).

The main objective of [TEv2](@) is to provide support to [communities](@) that actively seek to [understand one another](/docs/tev2/overview/tev2-common-understanding), first within the [community](@) itself, but also across [communities](@) that also use [TEv2](@).

In practice, this means that [TEv2](@) provides tools and mechanisms that:
1. help [readers](@) of publications (that were generated with [TEv2](@) tools) to understand the [terms](@) that are used therein, in the way that the [authors](@) have intended (rather than interpreting such [terms](@) in their own way);
2. facilitating [authors](@) to write and publish texts where terms can be referenced to their intended meaning, within, and across [scopes](@);
3. supporting [authors](@), [readers](@) and other stakeholders to such publications as they seek to create and further develop a [terminology](@) that they can commit to (within a specific [scope](@)), which we expect to also help develop insights in their subject matter of that [scope](@)).

These contributions are what so-called [curators](@) of the [scope](@) seek to deliver. They are the ones that make sure that there is a [location](scopedir@) where people can contribute to the development of the [terminology](@) of a [scope](@), and tools are installed and operational that enable [authors](@) to use them as they publish their documents. [Curators](@) have their own [manual](/docs/tev2/manuals/curator).

The [eSSIF-Lab website](/docs/essifLab) already shows the first ideas of what that might look like (popups on [terms](@) showing their [definition](@)).
