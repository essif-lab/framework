---
# TEv2 Curated Text Header
term: hrg-entry
termType: concept
isa:
glossaryTerm:
glossaryText: "A specific kind of (human-readable) rendering of the combination of a [term](@) and a means that helps [readers](@) to understand the meaning of that [term](@) when it is used in a sentence."
synonymOf:
grouptags:
formPhrases: hrg-entr{yies}
# Curation status
status: proposed
created: 2022-08-11
updated: 2022-08-11
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

import useBaseUrl from '@docusaurus/useBaseUrl'
export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

# HRG Entry

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary

An **HRG Entry** is a specific kind of (human-readable) rendering of the combination of a [term](@) and a means that helps readers to understand the meaning of that [term](@) when it is used in a sentence.

The way in which a [term](@) is rendered depends on how the [HRGT](@) is called. Specifically, a [term](@) that is defined as a `synonymOf` another [term](@) may be rendered in a way that differs from the way in which [terms](@) are rendered that are not a `synonymOf` some other [term](@). Details are provided in the [HRGT specs](/docs/tev2/spec-tools/hrgt).

The [terminology pattern](pattern-terminology@) provides an overview of how this concept fits in with related concepts.

The [HRGT specs](/docs/tev2/spec-tools/hrgt) document how [HRG entries](@) are selected (and manipulated) for the construction of a particular [HRG](@). They also document how [terms](@) are rendered that are, and those that are not [synonyms](@) of some other [term](@) (there may be differences between them).

### Purpose

[HRG entries](@) provide a specific kind of(human-readable) rendering for the combination of a [term](@) and a means that helps [readers](@) to understand the meaning of that [term](@) when it is used in a sentence, thus facilitating the [reader's](@) understanding of the [term](@) in the way that the [author](@) intended.

As an example, consider a [terms-community](@) that would like to have an overview of all [terms](@) that it uses in a human readable way, and decides it needs a ([human readable](hrg@)) [glossary](@) of these [terms](@). Thus, they need a [tool](hrgt@) that knows how to find all these [terms](@) and their [definitions](@), and (after sorting them) render them into some human readable form. This [tool](hrgt@) would look for the [MRG](@) for that [terminology](@), which contains the [MRG entries](@) that contain all data that  the [tool](hrgt@) needs.

As the number of tools that need (meta) data about [terms](@) grows, [MRG entries](@) will be expected to cater for such needs.
