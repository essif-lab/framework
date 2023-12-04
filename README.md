# eSSIF-Lab Framework

[This repo](https://github.com/essif-lab/framework) contains files that are used to generate the [eSSIF-Lab framework](https://essif-lab.github.io/framework) website.

## How To Contribute

In order to contribute, you need to
- [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) [this repo](https://github.com/essif-lab/framework),
- [create a branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches) for your contributions,
- create and/or modify files as described below, and
- [create](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) a [pull request](https://docs.github.com/en/pull-requests).

Contributions can be made by creating new, or modifying existing files in the repo, that live in the `/docs` directory of the framework repo. This includes files that define and describe the terms and mental models of the framework. That's where contributions can be made to (definitions and descriptions of) [terms](/terms/term) that we use, as well as the [mental models](/terms/mental-model). The corresponding files live in the `/docs/terms` directory of the repo.

The easiest way to start is to look at existing files so that you get an idea of how things are done. You'll quickly find out that they are [markdown files](https://www.markdownguide.org/getting-started/) that consist of two parts:
- a '**[header](#the-header-or-front-matter)**', i.e. a block of text at the top of the file that starts with three dashes (`---`), then has multiple lines that consists of fields (keywords and associated values (texts)), and concludes with another three dashes (`---`). Headers like this are not usual in markdown files, but they are in this repo.
- a '**[body](#body)**', i.e. all the text that follows the header, which uses the typical [basic markdown syntax](https://www.markdownguide.org/basic-syntax/). However, you can also use [additional markdown features](https://docusaurus.io/docs/markdown-features).

### The Header (or Front Matter)

The header serves two purposes:
1. it contains fields that are necessary to turn the files into a nice website. This is done by [Docusaurus 2](https://v2.docusaurus.io/). Docusaurus calls this header data '**markdown [front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)**'.
2. it also contains fields that are used by the [TEv2](https://tno-terminology-design.github.io/tev2-specifications/docs/tev2-overview), that allows you to enhance the terms in your text that have been properly defined (this is what makes the terms stand out on the website, and produces the popups when readers hover over them).

The easiest way to go about header fields is to look at existing files as examples that work.

Header fields that are used by Docusaurus are documented [here](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter).

Header fields that are specific for the Terminology Engine are defined for so-called [curated texts](https://tno-terminology-design.github.io/tev2-specifications/docs/spec-files/curated-text-file).

### The Body

This is where you put your documentation texts, that will show up in the static website. 

## Writing Docusaurus Documents

Docusaurus requires documentation content to appear in `.md` files inside the `docs` folder.
Each file defines the following attributes at its very beginning:

- `id`, by which the file is referred to across the project
- `title`, appearing at the top of the file's display
- `sidebar_label`, the file's name appearing in the sidebar

Documentation on these and other header fields can be found [here](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

The Terminology Engine v2 (TEv2) uses additional header fields. These are defined [here](https://tno-terminology-design.github.io/tev2-specifications/docs/spec-files/curated-text-file).

The `sidebars.js` file contains the basic mechanism for [distributing content among sections](https://v2.docusaurus.io/docs/docs-introduction#sidebar) and is self-explanatory (compare with the sidebar appearing [here](https://essif-lab.github.io/framework/docs/essifLab-project)). Subsections within the `.md` file (that is, tagged with `##`) will appear at the right part of the page (see for example [here](https://essif-lab.github.io/essif-lab/docs/infrastructure)).

## Inserting Images in docs

<!-- **DEPRECATED** Images must be put inside the directory `static/images` and developers must refer to them using _relative_ urls.
Example: ![eSSIF-Lab logo](../images/essif-lab%20logo.png)
Docusaurus knows that the `../images` directory is inside the `static` directory, and thus process correctly.
The deployment pipe will convert `../images/` in such links to their _*absolute*_ urls.
Of course, if you want to link to images on the web, you can still use absolute urls. -->

If you want to add an image, say `example.png`, here is what you do:
- first, add the image to the `/static/images` directory (or `/static/images/subdir-path/`)
- then, in your document, add a line behind the docusaurus header that says: `import useBaseUrl from '@docusaurus/useBaseUrl';`
- next, in your document, at the place where you want the image to be presented, insert the following snippet:
```html
<img
  alt="text-that-shows-if-the-image-cannot-be-found"
  src={useBaseUrl('images/example.png')}
/>
```
(or `src={useBaseUrl('images/subdir-path/example.png')}` if you added the image file there).
