---
id: tev2-syntax
hide_table_of_contents: false
scopetag: tev2
date: 20220819
---

# TEv2 - Syntax (Specs)

import useBaseUrl from '@docusaurus/useBaseUrl'

export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

[TEv2](@) uses specific syntaxes:
- the **[Term Reference Syntax](/docs/tev2/spec-syntax/term-ref-syntax)** is the syntax allowed to author [term refs](@) (in source documents, see <mark>reference needed</mark>);
- the **[Form Phrases Syntax](/docs/tev2/spec-syntax/form-phrase-syntax)**, i.e. the syntax that [authors](@) need to specify [form phrases](@) (in the `formPhrases` field of [curated texts](@) - see the [curated text file specs](/docs/tev2/spec-files/ctext));
- the **[Terminology Construction Syntax](/docs/tev2/spec-tools/terminology-construction)**, i.e. the syntax for the [term selection criteria](@) that [curators](@) need to specify the contents of a [terminology](@).
