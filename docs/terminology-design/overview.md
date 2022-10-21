---
id: overview
// hide_table_of_contents: true
// displayed_sidebar: terminologyDesignSideBar
date: 20221020
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Terminology Design

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/><br/><br/>

In order for a [community](@) (e.g. a workgroup, taskforce, project/product team, department, etc.) to realize its [objectives](@), it is beneficial that its members have a common set of the ideas, [concepts](@) and other [knowledge artifacts](@) that are relevant for realizing these [objectives](@). The ability to realize such a common understanding, and to demonstrate that this is actually the case, is a critical capability for success.

This is not trivial. [Many cultures](https://en.wikipedia.org/wiki/Tower_of_Babel#Comparable_myths) have stories, similar to that of the [Tower of Babel](https://en.wikipedia.org/wiki/Tower_of_Babel), that observe that the big feats, such as building a "tower, whose top may reach unto heaven", cannot be achieved unless there is linguistic unity. This is nicely illustrated in the architecture of the building of the EU parliament in Strasboug, which resembles the Tower of Babel as painted by Brueghel (see Figure 1).

<p align="center">
<img
  alt="EU Parliament building resembles Tower of Babel by Brueghel"
  src={useBaseUrl('images/terminology-design/brueghel-and-eu-parliament.png')}
/><i>Figure 1.EU Parliament building resembles Tower of Babel by Brueghel</i>
</p>

While the importance of understanding one another is generally and widely recognized, one can also observe that achieving a workable 'linguistic unity' lacks easy-to-use means and tools.

The traditional tool for fostering common understanding is using [glossaries](@) or [dictionaries](@), such as the [Oxford English Dictionary (OED)](https://www.lexico.com/definition/glossary), the [Sovrin Glossary](https://sovrin.org/library/glossary/) and the [NIST Glossary](https://csrc.nist.gov/glossary). Other initiatives produce documents with explanations, e.g. the [terminology for talking about privacy by data minimization](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) by Pfitzmann and Hansen (2010), or the [EBSI Terminology](https://ec.europa.eu/cefdigital/wiki/display/EBP/EBSI+Terminology) (login required).

Traditional tools usually come with drawbacks that reduce their practical usefulness in this electronic era. [Dictionaries](@) leave their user to decide which of the various meanings that a term may have was intended. [Glossaries](@) typically provide a single meaning for a term, but lack a specification of the scope/context in which it is applied or where it is authoritative. And documents rarely explain the ideas (concepts) behind terms they use.

The eSSIF-Lab terminology effort is an attempt to improve on this, by
- creating and using tools that help authors and readers to understand the texts the create/read;
- creating and maintaining a [Terminology Corpus](corpus@) that documents such understanding;
- automatically regenerate [knowledge artifacts (e.g. [glossaries](@) or [dictionaries](@)) as the [corpus](@) is being updated.


:::info Editor's note
([Agredo-Delgado, et. al., 2021](https://link.springer.com/article/10.1007/s10588-021-09326-z))[^1] have tested a process for constructing a shared understanding in computer-supported collaborative work, where the construction part consists of 4 steps:
1. each group member acquires an individual understanding of the subject;
2. each group member exposes his/her ideas and the others actively listen to them;
3. the group refines, builds or modifies the original ideas;
4. the differences of interpretation between the group members are dealt with in a constructive fashion, through arguments and clarifications.

The authors state that:
- groups that obtained poor results (in terms of final product grades) were those that did not generate internal discussions to resolve doubts, did not do the assigned role, and did not have the disposition to work in groups.
- following the complete process from the beginning was exhausting by the participants and that this generated a lack of commitment for the rest of the activity, due to its high cognitive load.
- having a clear description helps the execution of the activity;
- to obtain better results, there must be an interest by each participant to interact with his/her classmates, and give the necessary contributions to achieve the objectives.
- use of the process improved the understading of participants as well as the group.
- use of the process generated end products of the activity with better quality levels.
- the process allowed to obtain better satisfaction with the achievement of the proposed objectives by the activity.
- the process took a long time to go through and therefore generated a high cognitive load.
- the process can foster better group interactions and thus better results.
- there is a need for further research of mechanisms leading to shared understanding, at better understanding the phenomena, its antecedents, and effects, thus generating more opportunities for developing techniques that allow to leverage its benefits for effective group work.
- the process should become lighter so that the cognitive load might be avoided.
:::

[^1]: Agredo-Delgado, V., Ruiz, P.H., Mon, A. et al. Applying a process for the shared understanding construction in computer-supported collaborative work: an experiment. Comput Math Organ Theory (2021). https://doi.org/10.1007/s10588-021-09326-z