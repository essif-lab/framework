---
id: pattern-identification
title: "Identification Pattern"
scopeid: essifLab
type: pattern
typeid: identification
stage: draft
hoverText: "The eSSIF-Lab Identification Pattern describes mechanisms that a Party uses to Identify Entities, and mechanisms for communicating with another Party such that both Parties can identify an entity and know whether or not they identify the same entity."
date: 20210803
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::info Editor's note
This is work that is being envisaged.
:::

### Purpose
The **Identification pattern** captures the concepts and relations that help to explain the mechanisms that a %%party|party%% uses to %%identify|identify%% %%entities|entity%%, and mechanisms for communicating with another party such that both parties can identify an entity and know whether or not they identify the same entity.

### Introduction
In 'the wild', terms such as [identify](https://www.merriam-webster.com/dictionary/identify), [identification](https://www.merriam-webster.com/dictionary/identification), [identity](https://www.merriam-webster.com/dictionary/identity) are defined such that the can be used without all too many problems in everyday discussions. However, if we want to use these terms for our [purposes](../essifLab-objectives), their definition must be much more precise, particularly because we want to use them in IT-contexts. Lets show this by example.

Here, we discuss %%identification|identify%% in a way that we expect to be useful in IT-contexts (or non-IT, but still administrative contexts). Basically, two things are needed:

First, identification of an %%entity|entity%% is similar to recognizing that %%entity|entity%%. A bit more formal: given an %%entity|entity%% (or digital or non-digital %%data|data%% about that %%entity|entity%% that comes from outside the %%knowledge|knowledge%% of a %%party|party%%), identification is determining whether or not the %%party|party%% %%owns|owner%% a %%partial identity|partial-identity%% of which that %%entity|entity%% is the %%subject|subject%%. When the entity isn't recognized (identified), then a %%partial identity|partial-identity%% may be created that has this %%entity|entity%% as its %%subject|subject%%.

Second, identification of an %%entity|entity%% is similar to pointing/singling out the %%entity|entity%%. More formal: given a %%partial identity|partial-identity%% that is %%owned|owned%% by a %%party|party%% and a specific context where a set of %%entities|entity%% are present, identification is determining whether or not the %%subject|subject%% of that partial identity% is in that set, and if so, which of them it is.

We will elaborate on both.

#### 1. Identification: selecting a %%partial identity|partial-identity%%

Suppose you are at home and someone rings at the frontdoor. When you open the door you visually examine the person in front of you, the person may say things (and you may ask things), the purpose of all this being that you 'establish the identity of' ([Merriam-Webster, identify, 1a](https://www.merriam-webster.com/dictionary/identify)), where 'identity' would be 'the distinguishing character or personality of an individual' ([Merriam-Webster, identity, 1a](https://www.merriam-webster.com/dictionary/identity)).

In practice, however, this is more about recognizing the person, i.e. tapping into your own %%knowledge|knowledge%% to see what you already know about this person, which - in terms of our %%identity pattern|identity%% would be: determining which of the %%partial identities|partial-identity%% you %%own|owner%% have the person at the door as its %%subject|subject%%. The purpose of all this is that as you remember what you know about the person, that helps you to decide whether or not, and if so, how to further engage with him/her.

Continuing the example, it could be that you have no recollection of that person, in which case you would already have started to create a new %%partial identity|partial-identity%% for which that person is the %%subject|subject%%, and you would have started to attribute characteristics (with some level of certainty) to this person, which all are part of this new %%partial identity|partial-identity%%. Doing this enables you to identify/recognize this person the next time (s)he comes to your house.

The identification process is said to fail if a user record or %%partial identity|partial-identity%% has been selected, but its actual %%subject|subject%% is not the %%entity|entity%% that supposedly is identified. This is the case when someone/something (succesfully) masquerades as, or impersonates that %%entity|entity%%. The process of obtaining assurances that the %%entity|entity%% that is identified is "who (s)he says that (s)he is" is commonly called 'authentication'. We would say that authentication is the process of providing a set of assurances such that the risk of having selected a %%partial identity|partial-identity%% or user record whose %%subject|subject%% is not the %%entity|entity%% that was identified, is acceptable to the %%owner|owner%% of that %%partial identity|partial-identity%% or user record.

#### 2. Identification: selecting an %%entity|entity%% from a set

Suppose you want to have a drink with your friend in a cafe. When you open the door of the cafe, you visually and auditorily 'examine' the set of people that are present, perhaps calling out to your friend, until you recognize one of these people as your friend. Having 'identified' your friend enables you to interact with him/her as you planned.

A bit more formally, we would say that what you actually do is acquire %%data|data%% (observations about the various people that are present), compare this with what you know about your friend (i.e. the %%partial identity|partial-identity%% about your friend that you %%own|owner%%), and when you find a match, you will have identified your friend. Note that this is the converse of what we described in the previous subsection.

Similar to before, this identification process is (also) said to fail if an %%entity|entity%% is selected that is not the %%subject|subject%% of the %%partial identity|partial-identity%% that you were looking for. And again, to reduce the %%risk|risk%% of such failure to an acceptable level (for the identifying %%party|party%%), assurances may be obtained as necessary (authentication).

### Identification in IT and/or administrative contexts

In the above examples, we tacitly assumed that the %%party|party%% is also an %%actor|actor%% (see that %%party-actor-action pattern|pattern-party-actor-action%% for details), which implies that the %%actor|actor%% has access to all %%knowledge|knowledge%% of the %%party|party%%, which includes all %%partial identities|partial-identity%%.

In many contexts, this assumption does not hold. Examples include IT-contexts, or %%organizational|organization%% administrative contexts, the difference being that the %%agent|agent%% that is doing the identification is not the same %%entity|entity%% as the %%party|party%% that owns the %%partial identities|partial-identity%% that are being used in the process. In IT-contexts, an %%agent|agent%% could be a web server, or a mobile app. In administrative contexts of an %%organization|organization%% (which could also be IT-contexts with web server and other %%agents|agent%%), you could also encounter human %%agents|agent%% that are tasked with identification.

In any such cases, an %%agent|agent%% that performs identification, must have access to the relevant subset of its %%principal's|principal%% %%knowledge|knowledge%%, that is: to a representation thereof that it is able to interpret as intended by its %%principal|principal%%.

Such representations can come in many forms. In a human administrative context, such representations can be stored in e.g. customer and/or supplier relation management systems, employee registrations, etc., which may be paper-based (in a file cabinet), or electronic (in a database). Typically for IT-contexts, this would also include user registrations, that hold accounts for the users. The subset of %%attributes|attribute%% that one can find a such a registration should have been chosen such that the various records therein are fit for purpose, which means that any %action% that an %agent% of the %owner% of that %data% must execute, can find the %data% it needs for that task in one of its registrations.

This is particularly true for the %action% that is commonly referred to as 'logging in'. The %actor% that is 'logging in' some user onto a system (or provide the user access to some other physical or electronic location), will identity (and subsequently authenticate) the user, i.e. search for the account to associate the user with, from where it can find all other data that is needed about the user in that particular context.

### Formalized model
Here is a visual representation of this pattern, using the following [notations and conventions](../notations-and-conventions#pattern-diagram-notations):

<img
  alt="Conceptual model of the 'Identification' pattern"
  src={useBaseUrl('images/patterns/pattern-identification.png')}
/>

The figure shows that a %party% can know (about the existence of) any number of %entities%, one of which is that %party% itself. As explained in the %party-actor-action pattern%, the this %party% has (and %owns% and %governs%) its %knowledge, and as explained in the %identity pattern%, %partial identities% are a part of that %knowledge%.

When a %party% knows (about the existence of) an %entity%, it is likely to have classified this %entity% as one or several types. For example, people may classify other people as their friends, enterprises may classify people as employees, customers or suppliers. Note that a person known to an enterprise may well be both an employee and a customer, illustrating that %entities% may be a member of multiple classes.

In the %knowledge% of a %party%, %entities% are typically represented by one or more %identifiers%. In various systems of an enterprise, this can be an employee-number, or a customer-number. Also, %parties% may know 


### References

Earlier ideas for this can be found in "[Putting Identifiers in the Context of eHealth](https://link.springer.com/content/pdf/10.1007/978-0-387-79026-8_27.pdf)"


### Discussion - Scope of Identification
[RFC 3986, Section 1.1.](https://tools.ietf.org/html/rfc3986#section-1.1) states _"an identifier embodies the information required to distinguish what is being identified from all other things within <u>its</u> **scope of identification"**_. This statement suggests that identifiers (URIs) have a single scope, supposedly specified by "_the URI schemes and naming authority (if any)_". However, there is no such requirement, and there is nothing in place to guarantee this (apart from IANA, many other (sometimes even very commonly used) URI schemes exist). [Pfitzmann and Hansen (2010)](https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf) (section 13.2) use the term 'identifiability sets' rather than 'scope of identification', and describe how 'attackers' - but that could equally well have been regular users - each have, or construct their own scope, and use contextual information to do so.

The criterion that makes a text string qualify as an identifier doesn't seem to cut it, as only _using_ a text for identification purposes doesn't make it have (what we will call) the 'identification property', i.e. the property that it _actually_ identifies something. It may only have that property in combination with an associated (single) scope of identification, which may depend on the context in which it is being used. [RFC 2986, page 6](https://tools.ietf.org/html/rfc3986#page-6) illustrates this using the identifier "http://lcoalhost/".

The lack of (identifying) scopes of identification becomes an issue when a %%party|party%% (say Alice) sends the identifier (e.g. `my car`) to another %%party|party%% (say Bob), expecting that Bob will then be able to identify the same %%entity|entity%% that she identifies with it (presumably some specific car).

If Bob had just met Alice for the first time, and hadn't seen her coming in a car, then Alice must acquaint Bob with the existence of the %%entity|entity%% that she refers to with `my car`, e.g. by pointing her finger to it, or describing the make, brand and license plate or some other characteristic that allows Bob to single out her car (in the context of their meeting one another). Then, Bob can 'register' the existence of that car in his %%knowledge|knowledge%% (optionally tagging it with an identifier of his own, e.g. `Alice's car`), and associate it with the attribute (party='Alice', identifier='`my car`'). It is important to have the "party='Alice'" part in there, because other parties, (e.g. Carol) may also use an identifier `my car`, which would and should then refer to another car. This shows that the scope of interpretation for an identifier has to do with the (%%knowledge|knowledge%% of) %%parties|party%% that use it, and that understanding the intended meaning requires a proper identification of that scope.
