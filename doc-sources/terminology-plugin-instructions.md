---
id: terminology-plugin-instructions
title: Terminology & Glossary plugin docs
---
import useBaseUrl from '@docusaurus/useBaseUrl';


### How it works

This plugin parses docs in two ways:

  1. Parses all markdown files and replaces a specific pattern with a React 
  component which supports a tooltip functionality (more information below)
  2. Parses all markdown files and generates a glossary page with all the 
  pattern terms found in the `.md` files
  
## Replace all patterns with tooltip information

When writing documentation, you can use the following syntax:

```
%%term_text|term_name%%
```

where:
- `term_text`: The terminology text you want it to be visible in the documentation 
page
- `term_name`: The filename of the term file, which resides under `./docs/terms` directory.

After the successful run of the script, the output of this functionality will be 
a React Component, which will render the `term_text` as a link, directing to 
the term page (which will be generated from the `term_name` attribute), and 
when the user *hovers* the `term_text` it will show a brief summary of the term.

### Example usage

Say you want to reference a term that exists under the `./docs/terms/` directory, 
e.g. `./docs/terms/party.md`. You can use the following syntax to reference 
this term in your documentation page:

```
Some content that wants to reference the %%Party|party%% term
```

When the script runs, this will be replaced as follows:

```
Some content that wants to reference the <Term reference="party" popup="Popup text">Party</Term> term
```

which supports the functionality explained above.

### How to correctly write a term

This plugin assumes that you follow the structure, as explained below:

Each term should have its own `.md` file, inside the `./docs/terms` directory, 
and it needs to consist of the following structure:

```title="./docs/terms/term.md"
---
id: term
title: Term page
hoverText: This hover text will appear in the documentation page that you reference this term
---

### Term explanation

content here
```

> Pay attention to the `hoverText` attribute, as it's important to provide this 
>attribute (along with the default docusaurus attributes), so the plugin can 
>fetch the correct popup text to show when referencing a term.

### Running the script

When you are finished referencing terms and generating term pages, you can test 
this locally by running the following command:

```.shell script
$ yarn parse
yarn run v1.22.5
 docusaurus parse
Replacing patterns with <Term />
Done in 1.41s.
```

This will replace all `%%term_text|term_name%%` occurrences everywhere with the 
React component to support the functionality above.

Here's an example where the terms have been replaced. When the project is up 
and running, you can visit the test example on the `/docs/replacement-test` page:

<img alt="replacement-test" src={useBaseUrl('images/replacement-test.png')}/>


## Generate the glossary page

If everything works well with the above procedure, you can then generate a 
glossary page, by running the following command:

```.shell script
$ yarn glossary
yarn run v1.22.5
 docusaurus glossary
Alphabetical list of terms
Done in 1.53s.
```

This will generate a file in `./docs/glossary.md` where every term that has been 
mentioned above, will be populated in the `glossary.md` page.

When the project is up and running, you can visit the glossary on the `/docs/essif-lab-glossary` page:

 <img alt="glossary-page" src={useBaseUrl('images/glossary-page.png')}/>
