---
id: essifLab-objectives
title: eSSIF-Lab Objectives
sidebar_label: Objectives
scopeid: essifLab
---

The %%objectives|objective%% that eSSIF-Lab aims to realize include:
- *support individual people* with means that help them to electronically negotiate and conduct %%transactions|transaction%% in the widest sense of the word. Such means make it easier for them to participate in transactions, both in the Internet and in physical life. Criteria to determine that the objective is fulfilled include:
  - logins (username, password) are eliminated.
  - people can fill in forms (e.g. for applying for products or services) fast, and easily.
  - people are protected from transacting with malicious %%parties|party%%.
  - people find the provided means helpful as they seek to exercize their rights under privacy acts such as the [GDPR](https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en).

- *support %%organizations|organization%%* (e.g. enterprises, governments) with means that help them to electronically negotiate and conduct %%transactions|transaction%% in the widest sense of the word. Such means make it easier for them to participate in transactions, both in the Internet and in physical life. Criteria to determine that the objective is fulfilled include:
   - the costs of %%validating|validation%% the data that organizations need to determine whether or not to commit to a transaction, is significantly reduced.
   - the lead time of (administrative) processes, such as applying for a product or service, is significantly reduced.
   - the efforts of satisfying the requirements regarding their duties under privacy acts such as the [GDPR](https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en), and showing compliance, is significantly reduced.

- *support the creation of an %%SSI-Infrastructure|ssi-infrastructure%%*, that
Criteria to determine that the objective is fulfilled include:
   -

- *support  assurance communities*, insofar the
The current situation is that SSI solutions that are being created and brought to the market either target specific applications for which they provide a vertical solution ('stovepipes'), many need some kind of centralized governance/control, others have privacy issues, and none that we know of are interoperable with other such solutions.

The situation we would like to see is one in which we have SSI-enabled, interoperable, scalable and business/information agnostic technologies, that form an infrastructure that every application for every %%party|party%% can use to serve its own objectives. This infrastructure, that enables the electronic exchange of verified (personal and non-personal) data, must be so easy to access and use for such %%parties|party%% that they will no longer need to be concerned about actual (SSI) technologies that have empowered them to make this happen. Rather, they will only need to think about, and decide which kinds of information they want to obtain for conducting specific %%business transactions|transaction%% and which %%parties|party%% they trust for providing such information. Also, they will need to think about, and decide which kinds of information they themselves are willing to provide to others in this new SSI world.

## Purpose

:::tip **The purpose of the eSSIF-Lab...**
... is to specify, develop and validate technological and non-technological (e.g. governance) means that support people, businesses and governments to think about, design, adapt, and operate their (information) processes such that they can negotiate and conduct %%business transactions|transaction%% with one another using the electronic support provided by the various SSI technologies.
:::

## Context

The context of the eSSIF-Lab vision can be found in articles 8-10 of the [*European Convention on Human Rights (ECHR)*](https://www.echr.coe.int/Pages/home.aspx?p=basictexts/convention), that state the rights of individuals regarding their privacy, and their freedoms to collect, process, store, and express information in a self-sovereign fashion, i.e. in a way that they can decide for themselves. This is without prejudice to Member States' laws that exist to protect their national security, public safety, the economic well-being of the country, health or morals or the rights and freedoms of others, or to prevent disorder or crime. The eSSIF-Lab vision extends these rights and freedoms - within the limits of the law - to public and private organizations. Thus, we say that individuals as well as public and private organizations (that we collectively refer to as 'parties') are self-sovereign[^1].

In the context of these rights and freedoms, we seek to electronically support %%business transactions|transaction%%, i.e. the exchange of goods, services, funds, or data between %%parties|party%%, which we call 'participants' to the transaction[^2].

Supporting such transactions requires each participant to have one or more %%electronic (digital) agents|digital-agent%%, i.e. equipment (e.g. an app on a mobile phone, a webserver, a browser, …) that provides such support and that (provably) acts on behalf of that participant.

## Work-In-Progress: Where We Want To Go

This functional architecture is a work-in-progress that is currently being conducted by %%parties|party%% that are funded by the [eSSIF-Lab project](https://essif-lab.eu/). Working with %%parties|party%% that have different backgrounds presents the challenge of resolving the issues that arise from such differences e.g. as technical interoperability or semantic interoperability. The eSSIF-Lab project adds '%%documentation interoperability|documentation-interop%%' to this.

In order to achieve '%%documentation interoperability|documentation-interop%%', we think that contributing %%parties|party%%
- should develop (learn, actively use and continually improve upon) a small set of %%terms|term%% that can be used as a basis for exchanging ideas (%%concepts|concept%%), discussions, etc. We suggest to start with the terms used (and defined) by the %%"Parties, Actors and Actions" pattern|pattern-party-actor-action%%, and to extend on that as we go.
- should develop their documentation using these terms, and adding additional terminology if they think this helps others to understand their documentation. The eSSIF-Lab project is developing tooling (a '[Terminology Engine](terminology-contributions)') that allows for this.
- ideally help to improve this tooling.

--------

[^1]: We realize that by doing this we have a different definition of what self-sovereignty entails than many others. We are open to suggestions for a better phrase.

[^2]: A good model for describing and designing %%business transactions|transaction%% and their participants is provided by [*DEMO*](https://en.wikipedia.org/wiki/Design_%26_Engineering_Methodology_for_Organizations).
