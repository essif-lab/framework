---
id: essifLab-collaborative-understanding
title: "Fostering a Collaborative Understanding"
sidebar_label: Collaborative Understanding
scopetag: essifLab
date: 20220802
---

When people from various backgrounds (and cultures) work together, it is inevitable that misunderstandings occur, i.e. texts (written or spoken) are easily interpreted in ways other than what the author intended. More often than not, such misunderstandings go undetected, and rightfully so, as in most cases it doesn't cause serious problems.

:::info Editor's note
The following summary needs to be worked into this page:

([Agredo-Delgado, et. al., 2021](https://link.springer.com/article/10.1007/s10588-021-09326-z))[^1] have tested a process for constructing a shared understanding in computer-supported collaborative work, where the construction part consists of 4 steps:
1. each group member acquires an individual understanding of the subject
2. each group member exposes his/her ideas and the others actively listen to them
3. the group refines, builds or modifies the original ideas
4. the differences of interpretation between the group members are dealt with in a constructive fashion, through arguments and clarifications.
:::

[^1]: Agredo-Delgado, V., Ruiz, P.H., Mon, A. et al. Applying a process for the shared understanding construction in computer-supported collaborative work: an experiment. Comput Math Organ Theory (2021). https://doi.org/10.1007/s10588-021-09326-z

In the context of [eSSIF-Lab](essifLab) we expect people from such various backgrounds (and cultures) to work together in order to realize its [objectives](essifLab-Objectives). Because of its nature, we must expect misunderstandings to become problematic. In order to prevent them, and also to efficiently and effectively resolve those that do occur, we provide mechanisms to detect such misunderstandings, develop %%terminologies|terminology%% that reduce the likelihood of them occurring, and resolve problems/disputes that may occur around %%terms|term%% and %%definitions|definition%%.

Using these mechanisms, the authors of this website have were able to generate this website in such a way that %%terms|term%% that have been defined for the %%context|scope%% of eSSIF-Lab are highlighted, show their %%definition|definition%% when users hover over them, and when clicked, produce the page that explains the term in more detail. Using these mechanisms is not compulsory. However, their use is strongly encouraged as the feedback we have received shows that they *do* contribute to a better understanding.

The mechanisms we provide include:
- a %%process|terminology-process%% for %%managing|management%% the %%meaning|definition%% of %%terms|term%% in the context of so-called %%terms-communities|terms-community%%;
- a [set of terms and definitions](essifLab-glossary) that are managed according to that process;
- a [set of mental models](essifLab-pattern-list), each of which shows how various terms relate to one another in a consistent and coherent way;
- a tool, i.e. [Docusaurus](https://docusaurus.io/) + [a plugin](tev1/terminology-engine-v1), that allows for making web-based documentation such as what you are looking at now.

### Background

[Many cultures](https://en.wikipedia.org/wiki/Tower_of_Babel#Comparable_myths) have stories, similar to that of the [Tower of Babel](https://en.wikipedia.org/wiki/Tower_of_Babel), that observe that the big feats, such as building a "tower, whose top may reach unto heaven", cannot be achieved unless there is linguistic unity. While is generally recognized (the [EU parliament building](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e3de7793-c11c-4246-81aa-401be9b09384/d5ttx0w-7bcf343b-2114-46cd-8c30-d722a9725ee9.jpg/v1/fill/w_1054,h_758,q_70,strp/european_union_parliament_02__tower_of_babel__by_nixseraph_d5ttx0w-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTk2IiwicGF0aCI6IlwvZlwvZTNkZTc3OTMtYzExYy00MjQ2LTgxYWEtNDAxYmU5YjA5Mzg0XC9kNXR0eDB3LTdiY2YzNDNiLTIxMTQtNDZjZC04YzMwLWQ3MjJhOTcyNWVlOS5qcGciLCJ3aWR0aCI6Ijw9MjIxNyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.db-z1OueDUGbAWMhnIbxcDioaFh1zJVlBnUTNAd5y5Y) in Strasbourg [resembles](https://jdreport.com/wp-content/uploads/2014/05/tower-painting-parliament-e14176743284401.jpg.webp) the Tower of Babel as [depicted by the painter Brueghel](https://mattbell.org/wp-content/uploads/Tower-of-Babel-Peter-Breughel.jpg)), one can also observe that the part of the people that care about this and want to achieve a workable 'linguistic unity' lack means and tools that are easy to use.

The traditional tool for fostering common understanding is using %%glossaries|glossary%% or %%dictionaries|dictionary%%, such as the ([Oxford English Dictionary (OED)](https://www.lexico.com/definition/glossary)), the [Sovrin Glossary](https://sovrin.org/library/glossary/) and the [NIST Glossary](https://csrc.nist.gov/glossary). Other initiatives produce documents with explanations, e.g. the [terminology for talking about privacy by data minimization](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) by Pfitzmann and Hansen (2010), or the [EBSI Terminology](https://ec.europa.eu/cefdigital/wiki/display/EBP/EBSI+Terminology) (login required).

Traditional tools usually come with drawbacks that reduce their practical usefulness in this electronic era: %%dictionaries|dictionary%% leave their user to decide which of the various meanings a term may have was intended, %%glossaries|glossary%% typically provide a single meaning, but lack a specification of the scope/context in which they are applied or authoritative, and documents rarely explain the ideas (concepts) behind terms they use.

The eSSIF-Lab terminology effort is an attempt to improve on this, by
- creating and using tools that help authors and readers to understand the texts the create/read;
- creating and maintaining a %%Terminology Corpus|corpus%% that documents such understanding;
- automatically regenerate terminological artifacts (e.g. %%glossaries|glossary%% or %%dictionaries|dictionary%%) as the %%corpus|corpus%% is being updated.

### eSSIF-Lab Terminology Engine

As the corpus is being used, we expect ideas for improvement
- of the tools (both for authors and readers alike). Please create an [issue in the eSSIF-Lab framework repo](https://github.com/essif-lab/framework/issues);
- of the terminology, patterns, etc. Please create a pull-request for the changes on the [eSSIF-Lab framework repo](https://github.com/essif-lab/framework/pulls).

[Here](terminology-contributions) is how you may contribute to this terminology effort.

Here are some characteristics of the tools being supplied:
- When a reader sees a highlighted term (meaning that it is documented), (s)he will see a short description when hovering over the term, and the complete description by clicking on it.
- When an author writes a text in which he wants to tag a term with its definition, (s)he simply writes `\%\%text-to-be-tagged|referenceid\%\%`, where `referenceid` is usually the term name. For details, please refer to the [instruction for authors](TBD)
- Author wants to contribute to the Corpus of Terminology, i.e. modify existing documents or creating new ones, are supported by [templates](TBD) and [guidance for authoring terminology documents](TBD).
- The glossary will be automatically updated as contributions to the terminology corpus are being made merged into the master branch.

## References