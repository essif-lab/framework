---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: various-identifiers
# Docusaurus (see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter):
title: Various Identifiers
# hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Use 'Mark' as an HTML tag, e.g. <Mark>text to mark</Mark?-->
export const Mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

[TEv2](@) uses various [identifiers](@) for a variety of purposes. As noted in its [description](identifier#short-description@), [identifiers](@) do not necessarily [identify](@) anything. Whether or not they do depends on the context in which they are interpreted, and the so-called 'identifiability set' ([Pfitzmann and Hansen (2010)](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf)) or 'scope of identification' ([RFC3986](https://datatracker.ietf.org/doc/html/rfc3986)), i.e. the set of [entities](@) that they supposedly [identify](@).

Here, we will provide a list of contexts that are relevant for [TEv2](@), the [identifiers](@) that are used in these contexts, and the associated 'identifiability sets'.

Here is a visual representation of these contexts <Mark>futher elaboration text needed here, and the picture below has to be created as well</Mark>.

<img
 alt="TEv2 Contexts and Identifiers"
 src={useBaseUrl('images/tev2-overview-enhanced-term.png')}
/>

## Kinds of Identifiable Entities

We distinguish between the following kinds of [identifiable](@) [entities](@):

### [Knowledge Artifacts](@) (e.g. [Concepts](@), or [mental models](@))

Every [knowledge artifact](@) resides in the [knowledge](@) of a [party](@) (e.g. a [community](@)), which typically has defined a [semantics](@), i.e. a mapping between such [artifacts](knowledge-artifact@) and the [terms](@) that represent them (see the <Mark>specify the pattern that explains this further</Mark>). [Communities](@) may have a so-called [terms-community](@) that will [curate](@) these [terms](@), and establish the associated [terminology](@).

A [community](@) (or [party](@)) that is committed to use a certain [terminology](@) can use the [terms](@) contained therein to represent (and [identify](@)) the various [knowledge artifacts](@) in its [knowledge](@).

Other [parties](@) must use tuples { `<scopeidentifier>`, `<versionidentifier>`, `term` } to refer to such artifacts, where `<scopeidentifier>` [identifies](@) the [scope](@) that contains the version (as [identified](@) by `<versionidentifier>`) of the [terminology](@) that contains the [term](@) `term`, which represents a specific [knowledge artifact](@).

### [Scopes](@)

Every [scope](@) contains a [terminology](@), [(scoped) terms](@), [curated texts](@), various kinds of [tags](@), and more. Every [scope](@) has defined a [(scope)tag](@) by which it refers to itself (which is defined in the [`scope`-section](/docs/tev2/spec-files/saf#terminology) of the [SAF](@) of that [scope](@). The [`scopes`-section](/docs/tev2/spec-files/saf#terminology) of a [SAF](@) defines the [scopetags](@) that are used to refer to other [scopes](@) from within this [scope](@).

Since every [scopes](@) must have precisely one [scope directory](@) (that contains the tangible artifacts associated with that [scope](@)), one can also use the URI of that [scope directory](@) to refer to that [scope](@).

### [Curated Texts](@)

Every [curated text](@) is stored as a file in the [scope directory](@) of a specific [scope](@). Thus, it can be identified through a [URI] that points to this file. The drawback here is that while all [curated texts](@) in a [scope](@) must reside in a specific directory (as [specified in the `curatedir` field](/docs/tev2/spec-files/saf#terminology) of the [SAF](@) of that [scope](@))), it might also reside in one of its (sub)subdirectories. They  way in which the files that contain [curated texts](@) may be organized (grouped) may differ from [scope](@) to [scope](@).

Every [curated text](@) consists of a header (and a body); the header includes [generic 'header-fields'](/docs/tev2/spec-ctexts/ctext-spec#generic-header-fields), one of which is the `id`-field. The contents of this field [identifies](@) the [curated text](@); there is no other [curated text](@) in (a file in) the [scope directory](@) that has the same value in its `id`-field.

A [term](@) may serve as an (indirect) way to [identify](@) a [curated text](@), but that only works if there is only one [knowledge artifact](@) that can be referred to by the [term](@); differt types of [knowledge artifacts](@) may use the same [term](@) - this is known as '[semantic overloading](https://en.wikipedia.org/wiki/Semantic_overload)'. For example, one might want to define `Curator` as a [concept](@) (e.g. as subclass of [role](@)), but also as a relation between a `scope` and `terms-community`, that says which `terms-community` is the curator of what `scope`.


### [Definitions](@)

By means of a [scoped term](@)


### [Scopes](@)

By means of a [scopetag](@)


### [Scopes](@)

By means of a [versiontag](@)