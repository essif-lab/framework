# README for terminology-related files.

This directory contains the artefacts that can be used to generate Pages that explain concepts and terms, as well for generating a Glossary. These artefacts are expected to provide a rigorous underpinning of the decisions that have led to the specification of the semantics of the various terms.

This document states the requirements for files in this directory, such that they can properly processed into useful and useable Docusaurus documentation.

[Other text to be added, e.g.: 'How to contribute']

## Filenames

All file MUST have the structure: `<termid>.mdx`, where <termid> is the (all lowercase) identifier of a term (including the term that is used when defining a concept). They MUST be a lowercase identifier that only uses charancters `a`-`z` and `-`.

## Templates

The `terms/templates` directory contains templates for each of the <type>s. A template file has comments that hold, amongst others, requirements for the contents of instances of that template.

## Referring to terms in documentation files

Any term can be referred to in any documentation file, using the syntax %%<termref>%%, where <termref> is either the <conceptid> of a concept

- <sometext> is a text that will be displayed as if it were a term
