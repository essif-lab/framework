---
id: vision-and-purpose
title: eSSIF-Lab Vision and Purpose
sidebar_label: Vision and Purpose
date: 20210601
---

## eSSIF-Lab Objectives

The objectives that the eSSIF-Lab project aims to realize include:
- *empower European and other citizens* by providing them with new means that help them to electronically negotiate and conduct transactions. These new means will make electronic transactions fast and safe both in the Internet and in physical life, and eliminate logins.
- *empower European and other organizations and governments* by providing new means to speed up, secure and automate transactions with citizens, customers, suppliers and partners, resulting in tens of billions of euros savings annually on administrative costs in Europe.
- ensure these new means support organizations and citizens to exercise their rights and fulfil their duties under the [GDPR](https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en).
- stimulate these new means foster *inclusiveness*.
- stimulate the pervasive use of *new business ecosystem paradigms* with thousands of new jobs, many new job categories and new business opportunities for existing and new European companies.

:::tip We use the phrase **'Self-Sovereign Identity'** or **SSI**...
to refer to the collection of these new means and the concepts and  mental models that are behind them.
:::

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
