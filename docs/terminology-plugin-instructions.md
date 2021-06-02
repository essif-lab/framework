---
id: terminology-plugin-instructions
title: Terminology & Glossary plugin docs
date: 20210601
---
import useBaseUrl from '@docusaurus/useBaseUrl'; // All other .md files may get this statement automatically added.

### How it works

This plugin parses docs in two ways:

  1. Parses all `*.mdx` files under `docs/` and replaces each pattern with an
  appropriate React component supporting a tooltip functionality (see below)
  2. Generates a glossary with all terms corresponding to the `*.md` files under `docs/terms/`.

Parses all markdown files and generates a glossary page with all the pattern terms found in the .md files

## Replace patterns with dynamical elements

When writing docs, in order to refer to a term, you may use the following syntax:

```
%%term_text|term_name%%
```

where:
- `term_text`: The terminology text you want it to be visible in the documentation
page
- `term_name`: The filename of the term file, which resides under `./docs/terms` directory.

inside `docs/*.mdx` files. After successfully running the script, the above occurrence
will be replaced by a React component, which will render `term_text` as a link to the
corresponding term page, which is in turn generated from the `term_name` attribute;
furthermore, *hovering* over `term_text` displays a term summary, as extracted from the
corresponding term page.

### Example usage

Say you want to reference a term that exists under the `./docs/terms/` directory,
e.g. `./docs/terms/party.md`. You can use the following syntax to reference
this term in your documentation page:

```
Some content that wants to reference the %%party|party%% term
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
stage: draft
hoverText: "This hover text will appear in the documentation page that you reference this term."
date: 20210601
---

### Term explanation

content here
```

> Pay attention to the `hoverText` attribute, as it's important to provide this
>attribute (along with the default docusaurus attributes), so the plugin can
>fetch the correct popup text to show when referencing a term.

### Running the script

When you are finished referencing terms and have written corresponding term pages,
you can test this locally by running the following command:

```.shell script
$ yarn parse
yarn run v1.22.5
 docusaurus parse
Replacing patterns with <Term />
Done in 1.41s.
```

This will replace all `%%term_text|term_name%%` occurrences with the React component
supporting the required functionality.

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

When the project is up and running, you can visit the glossary on the `/docs/essifLab-glossary` page:

 <img alt="glossary-page" src={useBaseUrl('docs/essifLab-glossary.md')}/>
