---
id: terminology
title: "eSSIF-Lab Concepts and Terminology"
sidebar_label: Purpose and Vision
scopeid: essifLab
---

When people from various backgrounds (and cultures) work together, it is inevitable that misunderstandings occur, i.e. texts (written or spoken) are easily interpreted in ways that the author hadn't intended. It is not self-evident that such events will be detected, but even when they are identified, resolving them takes a lot of effort, a large part of which might perhaps better be spent on other things.

Within eSSIF-Lab, we would like to provide tools, methods and other means to help minimize the amount of misunderstandings, (i.e. to quickly identify any possible misunderstanding and to reduce the effort of resolving them), perhaps even preventing them.

## Vision

[Many cultures](https://en.wikipedia.org/wiki/Tower_of_Babel#Comparable_myths) have stories, similar to that of the [Tower of Babel](https://en.wikipedia.org/wiki/Tower_of_Babel), that observe that the big feats, such as building a "tower, whose top may reach unto heaven", cannot be achieved unless there is linguistic unity. While is generally recognized (the [EU parliament building](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e3de7793-c11c-4246-81aa-401be9b09384/d5ttx0w-7bcf343b-2114-46cd-8c30-d722a9725ee9.jpg/v1/fill/w_1054,h_758,q_70,strp/european_union_parliament_02__tower_of_babel__by_nixseraph_d5ttx0w-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTk2IiwicGF0aCI6IlwvZlwvZTNkZTc3OTMtYzExYy00MjQ2LTgxYWEtNDAxYmU5YjA5Mzg0XC9kNXR0eDB3LTdiY2YzNDNiLTIxMTQtNDZjZC04YzMwLWQ3MjJhOTcyNWVlOS5qcGciLCJ3aWR0aCI6Ijw9MjIxNyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.db-z1OueDUGbAWMhnIbxcDioaFh1zJVlBnUTNAd5y5Y) in Strasbourg [resembles](https://jdreport.com/wp-content/uploads/2014/05/tower-painting-parliament-e14176743284401.jpg.webp) the Tower of Babel as [depicted by the painter Brueghel](https://mattbell.org/wp-content/uploads/Tower-of-Babel-Peter-Breughel.jpg)), one can also observe that the part of the people that care about this and want to achieve a workable 'linguistic unity' lack means and tools that are easy to use.

The traditional tool for fostering common understanding is using %%glossaries|glossary%% or dictionaries, such as the ([Oxford English Dictionary (OED)](https://www.lexico.com/definition/glossary)), the [Sovrin Glossary](https://sovrin.org/library/glossary/) and the [NIST Glossary](https://csrc.nist.gov/glossary). Other initiatives produce documents with explanations, e.g. the [terminology for talking about privacy by data minimization](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) by Pfitzmann and Hansen (2010), or the [EBSI Terminology](https://ec.europa.eu/cefdigital/wiki/display/EBP/EBSI+Terminology) (login required).

Traditional tools usually come with drawbacks that reduce their practical usefulness in this electronic era: dictionaries leave their user to decide which of the various meanings a term may have was intended, glossaries typically provide a single meaning, but lack a specification of the scope/context in which they are applied or authoritative, and documents rarely explain the ideas (concepts) behind terms they use.

The eSSIF-Lab terminology effort is an attempt to improve on this, by 
- creating and using tools that help authors and readers to understand the texts the create/read;
- creating and maintaining a %%Terminology Corpus|corpus%% that documents such understanding;
- automatically regenerate terminological artifacts (e.g. %%glossaries|glossary%% or %%dictionaries|dictionary%%) as the corpus is being updated.

As the corpus is being used, we expect ideas for improvement 
- of the tools (both for authors and readers alike). Please create an [issue in the eSSIF-Lab framework repo](https://gitlab.grnet.gr/essif-lab/framework/-/issues);
- of the terminology, patterns, etc. Please create a pull-request for the changes on the [eSSIF-Lab framework repo](https://gitlab.grnet.gr/essif-lab/framework/-/merge_requests).

[Here](terminology-contributions) is how you may contribute to this terminology effort.


## Terminological Artifacts

The terminological artifacts that the eSSIF-Lab Concepts and Terminology effort aims to produce include:

- A set of (documented/defined) terms that are designed to serve the purposes as specified above.
- A [Glossary](./essifLab-glossary) that lists these terms
- A set of %%mental models|mental-model%% that provide backgrounds about how specific %%concepts|concept%% relate to one another.

Depending on the needs of stakeholders, additional artifacts may be created/generated.

## Notes:

Here are some characteristics of the tools being supplied:
- When a reader sees a highlighted term (meaning that it is documented), (s)he will see a short description when hovering over the term, and the complete description by clicking onit.
- When an author writes a text in which he wants to tag a term with its definition, (s)he simply writes `\%\%text-to-be-tagged|referenceid\%\%`, where `referenceid` is usually the term name. For details, please refer to the [instruction for authors](TBD)
- Author wants to contribute to the Corpus of Terminology, i.e. modify existing documents or creating new ones, are supported by [templates](TBD) and [guidance for authoring terminology documents](TBD).
- The glossary will be automatically updated as contributions to the terminology orpus are being made merged into the master branch.

