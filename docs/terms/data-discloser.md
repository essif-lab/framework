---
# `Multiple-use fields` (used by TEv2 and Docusaurus)
id: data-discloser
# TEv2: generic front-matter for curated texts
scope: essiflab
termtype: concept
termid: data-discloser
formphrases: data-discloser{ss}
grouptags:
status: proposed
created: 2022-06-06
updated: 2021-06-01
vsntag: v0.1
contributors: RieksJ
# TEv2: type-specific front-matter for type `concept`
term: Data # Text that is the name of the concept in (human readable) texts.
fullterm: "Data Discloser"
shorterm:
synonyms:
glossaryText: "a functional component that is capable of disclosing data to (Agents of) other [parties](@), e.g. in the form of [credentials](@)."
# Docusaurus \(see https://docusaurus\.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter\):
title: "Data Discloser"
displayed_sidebar: essifLabSideBar
hoverText: "Data Discloser: a functional component that is capable of disclosing data to (Agents of) other Parties, e.g. in the form of Credentials."
---

### Short Description
A **Data Discloser** is an (architectural) function (a functional component in the [eSSIF-Lab functional architecture](../essifLab-fw-func-arch)) that applications (that work for some [Party](@)) can call to communicate things such as:
- the results of a business transaction (e.g. statements to confirm that a transaction happened, thereby supplying appropriate details)
- the status of a business transaction (e.g. that an order has been received in good order, that delivery of an order is delayed or otherwise changed)
- knowledge (including judgements) that this Party has about [Entities](@) (people, organizations, things, orders, deliveries, etc.)

The Data Discloser uses a [data-collector-policy](@) to learn about the applicable (business) rules of its [principal](@). Such a policy may specify e.g. which types of credentials its principal is willing to (have) issue(d), to whom such credentials may be issued and the kinds of assurances that must be obtained before doing so, etcetera.

The Data Discloser uses the [eSSIF-Glue](@) interface to access the [Wallet](@), [Holder](@), [Issuer](@) and [Verifier](@) functionalities.

### Purpose
The purpose of the Data Discloser component is to state the (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other Parties. A special kind of result is the (provisioning of) a credential that its Principal already has created.

### Criteria
A **Data Discloser** is a component in the [eSSIF-Lab functional architecture](../essifLab-fw-func-arch) that is capable of stating (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other [Parties](@).

### Functionality
Typically, and at any point in time, Parties are capable of expressing statements about entities that they know to exist. They could express statements about individuals, about themselves, the state of transactions, and so on. We will use the term '**[subject](@) (of a statement of a Party)**' to refer to the entity that this Party knows to exist, and about whom/which the statement has been made.

We will use the term '**subject-id (of a statement of a Party)**' to refer to the representation that this Party has chosen to use for referring to the [subject](@) in said statement. A subject-id must have the property of being an identifier within every administrative context that this Party uses. It need not be humanly interpretable (and preferably is not).

Parties need to specify the kinds of credentials they are willing to issue, the class of entities (e.g. people, cars, Organizations) for which it will issue them, and the information schema (structure) that it will use in credentials of such kinds.[^1] This allows the Data Discloser to construct data objects that conform to this information schema, and present it to the Issuer component for actual issuing.

The Data Discloser Issuing Policy specifies the kinds of (linked-)data-objects that credentials may be created for. This allows the Data Discloser to construct such a (linked-)data-objects for every subject-id that identifies a [subject](@) of the class for which a credential can be issued, which can subsequently be sent to the Issuer component that can turn it into a credential of a specific sort.

You can think of the Data Discloser as the component that pulls all data together that can be put in a credential (e.g. in a passport), and the Issuer as the component that puts the data in an (empty) passport, and signing it so as to create the actual credential.

The Data Discloser may either push credential data to the Issuer component, so that the Issuer always has up-to-date credentials, or it can wait until the Issuer requests credential data for the creation of a credential of a specific type for a specific [subject](@).

-----

[^1]: We assume/stipulate that the Party maintains a credential catalogue that contains this, and other information about every kind of credential that it issues, and that such catalogues are available to other Parties that want or need to use such credentials.
