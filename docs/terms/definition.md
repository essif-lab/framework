---
id: definition
title: "Definition"
scopeid: essifLabTerminology
type: concept
typeid: definition
stage: draft
hoverText: "Definition: a text that helps Parties to understand the meaning of (and Concepts behind) a Term, ideally in such a way that these Parties can determine whether or not they make the same distinction."
glossaryText: "a text that helps %%parties^party%% to understand the meaning of (and %%concepts^concept%% behind) a %%term^term%%, ideally in such a way that these %%parties^party%% can determine whether or not they make the same distinction."
---

### Short Description
<!--REQUIRED--in 1-3 sentences that describe the concept to a layperson with reasonable accuracy.-->
A **Definition** is a text that helps %%parties|party%% truly understand the meaning of a %%term|term%% as it is used in a communication. Because [terms are scoped](terminology), this 'truly understanding' of one another isn't trivial. Therefore, we insist that the explanatory text be a criterion that %%parties|party%% are expected to use in the same way in some %%scope(s)|scope%%, allowing them to establish whether or not they make the same determination as to whether or not something qualifies to be refered to by that term in a way that is independent of whether or not the (alledged) meaning is relevant for the purposes they pursue within that scope.

The %%terminology pattern|pattern-terminology%% provides an overview of how this concept fits in with related concepts.

### Purpose
<!--Describe why the concept is needed. What purposes does it serve? What can you do with it that you cannot do (as well) without it? What objectives does it help realize? Why is this conceptevant within its scope of definition?-->
Working together is easier when you and your peers share the same ideas. We need a way to test and ensure, that you and your peers _actually_ have the same understanding, for the purpose of making cooperation easier. Doing so is expected to not only reduce the number of terminological discussions, but also improve the efficiency and effectiveness of the remaining discussions.

### Criteria
<!--REQUIRED--How is this concept different from related ideas? What are essential characteristics that must be true? This is where you specify the [intensional definition](https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions) of the concept, i.e. the necessary and sufficient conditions for when the term should be used. This makes that the conceptomes crystal clear. In the case of nouns, this is equivalent to specifying the properties that an object needs to have in order to be counted as a referent of the term.-->
Entity that comprises at a minimum:
- a non-empty set of %%scopes|scope%% in each of which specific objectives are being pursued;
- a criterion that specifies the necessary and sufficient conditions for being an instance of a named class;
- a set of arguments and/or use-cases (that SHOULD not be empty), and that show the relevance of making this distinction within the scope (and for its objectives);
- a %%name|term%% that is created and used within the scope that created the definition, for the purpose of referring to (instances of) the class, or using it as a placeholder for its instances.

### Examples
<!--Provide a few sentences in which you give examples that obviously qualify as instances of `Concept`, and that do NOT obviously qualify. Also, provide examples that are not (so) obvious, but help users to better understand its intension.-->
- The definition of the term %%definition|definition%% (a) is defined in, and hence valid in the scope `eSSIFLab`, (b) specifies a criterion (see the `Criteria` section above), and (c) is relevant (see the `Purpose` section above), and (d) has a name (i.e. `definition`) associated with it. Since it satisfies the criteria of `definition`, it can be referred to as 'the definition of `definition`'.
- The %%concepts|concept%% defined within the scope eSSIFLab have definitions associated with them, where the criteria, relevance and terms are defined in the %%concept-file|concept-file%% of that concept.

### Related Concepts
<!--Link to any %%concepts|concept%% that are similar but distinct, with a note about the relationship.-->
* %%Term|term%% is a label that is used in some context to refer to a %%Concept|concept%%, the set of entities that satisfy the concept's criteria, or an arbitrary element of that set. Different contexts may use different terms to refer to a single concept. In a single context, a single term should be used to refer to an individual concept.

* %%Scope|scope%% is related in several ways. First, there is (precisely, or at most one) Scope that governs the definition/specification of the Concept. Second, there may be (any number of) Scopes that use the Concept, i.e. within which Terms are defined that refer to the Concept

* %%Mental(or Conceptual) Model|pattern%% is a collection of concepts, relations between such concepts, and constraint rules that (elements of) such concepts and relations must satisfy. Such [models](https://en.wikipedia.org/wiki/Conceptual_model) are used to help people know, understand, or simulate a subject the model represents.

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

The %%Terminology Corpus|corpus%% provides templates that help you do that, e.g. for %%defining concepts|concept-file%% and for %%defining terms|term-file%%.
