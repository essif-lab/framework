# README for terminology-related files.

:::info
under construction
:::

This document states the requirements for files in this directory, such that they can properly processed into useful and usable Docusaurus documentation.

## Filenames

All file MUST have the structure: `<scopeid>-<type>-<instanceid>.mdx`, where

- `<scopeid>` is the (all lowercase) identifier of an existing scope, i.e. the file `<scopeid>-1-scope.mdx` must exist.
- `<type>` MUST be any of the following:
  - `scope`
  - `pattern`
  - `concept`
  - `term`
  - `glossary`
- `<instanceid>` MUST be a lowercase identifier that only uses characters `a`-`z` and `-`.

## Templates

The `terminology/templates` directory contains templates for each of the types. A template file has comments that hold, amongst others, requirements for the contents of instances of that template.

## Referring to terms in documentation files

Any term can be referred to in any documentation file, using the syntax `%%<termref>%%`, where `<termref>` is either the `<conceptid>` of a concept

- `<sometext>` is a text that will be displayed as if it were a term

