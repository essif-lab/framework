---
id: design-principles
// sidebar_label: Design Principles
// hide_table_of_contents: true
// displayed_sidebar: terminologyDesignSideBar
date: 20221020
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Design Principles

export const Mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

[TEv2](@) not only contributes to dealing with ([authors](@)/groups that have their) individual [scoped](@) [terminologies](@), it specifically also contributes to the re-use of [terms](@) across [scopes](@), and the production of (documentary) artifacts in which such [terms](@) are used. All this is done while respecting the autonomy of the [communities](@) that [own](@essiflab) these [scopes](@). This is what we call [Self-Sovereign Terminology](@).

## Text Conversion

The (documentary) artifacts we envisage are typically in the form of e.g. a (static) website, or documents in formats such as PDF, ODT, DOCX, etc., that is: in an arbitrary form that is readable for humans. However, they are typically (but not always) authored in much simpler, raw formats, such as plain ASCII text, markdown, LaTeX, etc., and one or more conversion steps are required to turn these 'raw texts' into nicely 'rendered texts'. [TEv2](@) specifies a set of tools (a '[toolbox](/docs/tev2/tev2-toolbox)') that can be used in the conversion process, as illustrated (in a simplified way) in the figure below:

<p align="center">
<img
  alt="Converting raw texts into formatted texts"
  src={useBaseUrl('images/tev2-overview-without-toolbox.png')}
/><i>Figure 1: Converting raw texts into formatted texts and curated texts</i>
</p>

Many things that can be done with tools in the [toolbox](/docs/tev2/tev2-toolbox), such as the generation of [glossaries](@) or [dictionaries](@), the contents of which can be tailored, and they can be rendered in various formats. The toolbox has been designed to be extensible, which means that if at one point in time some tailoring or rendering features are missing, they can be added later, as needed.

A particularly nice feature of the [toolbox](/docs/tev2/tev2-toolbox) is its capability of working with so-called [Term Refs](@), which are pieces of text that are [annotated](/docs/tev2/spec-syntax/term-ref-syntax) to refer to a particular [term](@), the effect of which in the rendered version of the text can help [readers](@) understand the meaning in which the [term](@) was used. The figure below shows an example of this: at the left you see a raw (markdown) text, where the terms **`community`**, **`own`** and **`terminology`** have been annotated to refer to [curated](@) [terms](@) (from specific [scopes](@)). At the right side you see the effect that tools from the [toolbox](/docs/tev2/tev2-toolbox) and other third party tools had as they rendered this text into an (HTML) web page: the texts are highlighted, and when the [reader](@) hovers its mouse over that text, a popup-balloon shows that contains the definition of the [term](@) that was referenced.

<p align="center">
<img
  alt="The effect of annotating texts with a Term Reference"
  src={useBaseUrl('images/tev2-overview-enhanced-term.png')}
/><i>Figure 2: The effect of annotating texts with a Term Reference</i>
</p>

If you are familiar with [markdown](https://www.markdownguide.org/basic-syntax/), you will notice that the raw text contains syntax that resembles [markdown links](https://www.markdownguide.org/basic-syntax/#links), but it's not quite conformant: it contains the `@` character, which signals (within TEv2) that this is not an ordinary link, but a link that will be resolved by the [TRRT](@). The [TRRT](@) will convert these links (which we call [term refs](@)) such that they are rendered as shown in the right of the figure: that is: in purple boldface, and when you hover your mouse over the term, it will show the definition of that term.

## Text Conversion Steps

Figure 1 shows how (raw) texts are converted into other formats, and that this is a sequence of conversion steps, part of which can be accommodated by using tools from the [TEv2 toolbox](/docs/tev2/tev2-toolbox), while other conversions are performed by other tools. The tools in the [toolbox](/docs/tev2/tev2-toolbox) that contribute to a conversion step are typically constructed following the pattern as shown in the figure below:

<p align="center">
<img
  alt="The generic text conversion pattern on which the toolbox is based"
  src={useBaseUrl('images/tev2-text-conversion-pattern.png')}
/><i>Figure 3: The generic text conversion pattern on which the toolbox is based</i>
</p>

This pattern shows that conversion consists of two generic parts
1. an interpreter, that is capable of interpreting a (source) file of a particular format (e.g. a wiki-page), and that then produces a set of so-called ["moustache"-variables](https://mustache.github.io/mustache.5.html), that are specified by a ("moustache") profile.
2. a convertor, that is capable of converting the source text into another (converted) text, thereby using the values that the interpreter has assigned to the "moustache"-variables.

Using this pattern is beneficial e.g.,
- in cases where source texts of different formats or layouts are being used that must be converted to a particular and well structured file, as is the case when ingesting texts that are contributions e.g. to a [scope's](@) [terminology](@). Different interpreters can be used for different layouts, and after using a particular converter, they can all be said to result in a converted text of a specific layout and contents.
- in cases where a specific kind of source needs to be converted into various different kinds of rendered texts. For example, creating a [human readable glossary](@) from a [machine readable glossary](@) can be done in many ways, e.g. as a webpage, or as a piece of LaTeX that can be included (as an appendix) in a paper; also, the contents of such a glossary may differ: you could have simple lists of [terms](@) and explanations, but you could also opt to add meta-data, e.g. list the [grouptags](@) of each [term](@), (references to) attributions and/or licensing data, people that contributed to the documentation of the [term](@), etc.
