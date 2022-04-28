---
id: definition
title: "Definition"
displayed_sidebar: essifLabSideBar
scopetag: essifLabTerminology
termtype: concept
termid: definition
symphrase: definition{ss}
status: draft
hoverText: "Definition: a text that helps Parties to have the same understanding about the meaning of (and Concepts behind) a Term, ideally in such a way that these Parties can determine whether or not they make the same distinction."
glossaryText: "a text that helps %%parties^party%% to have the same understanding about the meaning of (and %%concepts^concept%% behind) a %%term^term%%, ideally in such a way that these %%parties^party%% can determine whether or not they make the same distinction."
date: 20210601
---

### Short Description
A **Definition** is a text that helps %%parties|party%% to have the same understanding about the meaning of a %%term|term%%, and hence enables communications. The quality of a definition is the extent in which parties can use it to actually demonstrate that they have the same understanding.

The problem that definitions (as we see them) contribute to solving is misunderstandings that may arise as every %%party|party%% has its own %%knowledge|knowledge%% and autonomously determines the %%semantics|semantics%% it uses to express itself in texts/speech/pictures, and interpret that of other parties. The fact that the semantics of parties is subjective makes it realistic to assume that the meaning that a party intends to convey as it expresses itself is not the same as how another party interprets that expression - a 'misunderstanding'.

All parties have learned, with varying degrees of sophistication, to identify misunderstandings, and ways to recover from that.

A common mechanism for reducing the likelihood of misunderstandings to occur, is to associate terms with texts that are crafted to help parties have the same understanding, i.e. definitions. This mechanism is sometimes overrated in the sense that definitions are often considered to be universally valid rather than only useful in specific [scopes](terminology).

Therefore, we insist that such texts
- are associated with a %%scope|scope%% within which they are considered to be valid/useful (for the %%objectives|objective%% that %%parties|party%% pursue in that %%scope|scope%%);
- are phrased as a [criterion](https://www.lexico.com/definition/criterion) that every such %%party|party%% can evaluate so as to determine whether or not something qualifies to be refered to by that term.
The quality of such texts is the extent in which parties reach the same conclusion as they evaluate the criterion in an arbitrary use-case that is relevant for the scope.

The %%terminology pattern|pattern-terminology%% provides an overview of how this concept fits in with related concepts.
The eSSIF-Lab %%terminology process|terminology-process%% provides guidance for making and maintaining quality definitions.
Practical guidance is provided by the report "[On Terminology, and the Resolution of Related Issues](http://resolver.tudelft.nl/uuid:964a90da-da81-4d38-9f45-84f3f5fa96b3)".

### Purpose
Working together is easier when you and your peers share the same ideas. We need a way to test and ensure, that you and your peers _actually_ have the same understanding, for the purpose of making cooperation easier. Doing so is expected to not only reduce the number of terminological discussions, but also improve the efficiency and effectiveness of the remaining discussions.

### Criteria
A **definition** is a text that comprises at a minimum:
- a %%scope|scope%% that is curated (%%controlled|controller%%) by a %%party|party%%, and that is related to (the pursuit of) a non-empty set of %%objectives|objective%%;
- a [criterion](https://www.lexico.com/definition/criterion) that specifies the necessary and sufficient conditions for determining what does and what does not constitute some %%concept|concept%% (idea, class of %%entities|entity%%);
- a %%name or phrase|term%% that is used within the %%scope|scope%% to refer to (unidentified, or arbitrary, or specific) %%entities|entity%% that satisfy the criterion.

### Examples
- The definition of the term %%definition|definition%% (a) is defined in, and hence valid in the scope `eSSIFLab`, (b) specifies a criterion (see the `Criteria` section above), and (d) has a name (i.e. `definition`) associated with it. Since it satisfies the criteria of `definition`, it can be referred to as 'the definition of `definition`'.
- The %%concepts|concept%% defined within the scope eSSIFLab have definitions associated with them, where the criteria, relevance and terms are defined in the %%concept-file|concept-file%% of that concept.

### Related Concepts
* %%Term|term%% is a label that is used in some context to refer to a %%Concept|concept%%, the set of entities that satisfy the concept's criteria, or an arbitrary element of that set. Different contexts may use different terms to refer to a single concept. In a single context, a single term should be used to refer to an individual concept.

* %%Scope|scope%% is related in several ways. First, there is (precisely, or at most one) Scope that governs the definition/specification of the Concept. Second, there may be (any number of) Scopes that use the Concept, i.e. within which Terms are defined that refer to the Concept

* %%Mental(or Conceptual) Model|pattern%% is a collection of concepts, relations between such concepts, and constraint rules that (elements of) such concepts and relations must satisfy. Such [models](https://en.wikipedia.org/wiki/Conceptual_model) are used to help people know, understand, or simulate a topic that the model represents.

### Use-cases
<!--This (optional) section specifies an (optional) introductory paragraph, and a level-3 (i.e. `###`) subsection for every use case it describes. Every such use-case SHOULD
- describe the situation/context of the use-case;
- show how to apply ``Concept`` to/in that situation;
- shows the relevance of having ``Concept`` for the use-case as opposed to not having it.-->

### Notes
<!--This (optional) section is the place to put anything for which there is no other good place to put it.-->

Note that this definition satisfies itself. Also note that a definition may be used in multiple scopes, where a scope that wants to use the definition that has been defined in another scope, may replace that name with one of its own choosing. This way the meaning expressed by the definition remains preserved.

You may want to create definitions that are both acceptable for business people (for whom it usually suffices that they get the gist of it) as for engineers (that need much more precision, up to the point where they can use it for formal reasoning). You face the challenge of conveying your intangible ideas or %%concepts|concept%% with tangible words or phrases. You can do this by using [intensional definitions](https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions), i.e. by defining criteria that specify *the necessary and sufficient conditions* for when the term you define should (not) be used. When defining such criteria, make sure they have the following properties:

- you are convinced that the vast majority of people in your audience will *make the same judgements as you do when applying these criteria* in a situation that you and your audience consider relevant; and
- the *ability to make this distinction is relevant* for one or more purposes of your intended audience.

Note that the actual word or phrase you choose as the %%term|term%% name for a concept is much less important than the criteria you define. If in a particular %%context|scope%% another name would be more suitable, you can define another %%term|term%% for that other context (scope) that still refers to the concept you created the definition for.

The %%Terminology Corpus|corpus%% provides templates that help you do that, e.g. for %%defining concepts|concept-file%% and for %%defining terms|term-file%%. The report [On Terminology, and the Resolution of Related Issues](http://resolver.tudelft.nl/uuid:964a90da-da81-4d38-9f45-84f3f5fa96b3) provides further practical guidance for establishing and maintaining umnambiguous and relevant terminology.
