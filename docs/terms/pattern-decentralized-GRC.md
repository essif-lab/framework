---
id: pattern-decentralized-GRC
title: "Decentralized Risk Management, Governance and Compliance"
scopeid: essifLab
type: pattern
typeid: decentralized-GRC
stage: draft
hoverText: "The Decentralized Risk Management, Governance and Compliance pattern describes how Parties can set Objectives, and apply decentralized Risk Management to become and remain succesful."
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

:::info Editor's note
This is work that is being envisaged.
:::

# Decentralized, Governance, Risk Management and Compliance

Traditional risk management (RM) frameworks, such as ISO 31000, or COSO, have emerged in a time where centralized organizational leadership and auditing, and cyclic (PDCA) processes for risk management, were prevalent. Most (large) enterprises have adopted (a mix of) them, and many have been certified (e.g. against ISO 9001 or ISO 27001) thereby demonstrating they govern and run the associated (risk)management processes as intended, and are compliant, not just by such standards, but also with applicable regulations.

All frameworks start by requiring that you define the scope (also called 'context') of your management processes. And for good reason: you will be in charge of whatever you will be managing in such processes. What the frameworks could better emphasize is that you quickly get into trouble if you define that scope larger than your own %%scope of control|scope-of-control%%, as it is hard to manage things that you cannot control.

In decentralized contexts we deal with ecosystems of autonomous ((self)sovereign) parties, it is a given that the scope of control of each such party does not extend beyond the party itself - it's the very definition of autonomy/sovereignty. A party could use an ISO standard to manage X (risks, ...), but SHOULD limit its scope to be within its own scope of control.
The only guidance that such a party gets from ISO standards regarding how to deal with risks that relate to stuff outside the scope, are the 'identification of 'interested parties' (that may work with you, or against you) and 'communication' (about the topics you are managing).
I think that ToIP governance should be aware of this pitfall and SHOULD NOT attempt to create or support frameworks that are meant to be used to do governance over autonomous parties. Rather, the WG/TF should focus on doing governance that assists such parties as they autonomously make their own, subjective decisions that are good for them individually, but perhaps not so good for others. That's a challenge.
But if we succeed here, this can be a real contribution,  not only for ToIP, but also for the various management standards in ISO. So we don't do away with such standards, but we complement them by providing ways to deal with larger, decentralized contexts of autonomous parties.
Secondly, governance and trust assurance should not be limited to IT security (ISO 27001, ISO 27005). It should also cover business risks, e.g. of a business transaction going sour. After all, I think that a large part of data in credentials that are being exchanged serve to provide information to parties that are negotiating/conducting a business transaction, so that they can (subjectively/autonomously) assess their individual transaction risk(level)s, and mitigate such risks such that the residual risk becomes acceptable. This, and other topics, aren't covered by ISO 27001 nor ISO 27005. So we should take a broader look than these.


Traditional risk management (RM) frameworks are currently not fit for use in decentralized contexts. Frameworks such as ISO 31000, or COSO, (tacitly) assume centralized organizational leadership and auditing, and cyclic (PDCA) processes for risk management. While predominantly large enterprises have adopted (a mix of) them, it is way too cumbersome for SME's and individuals to work with. Also, their being adopted by enterprises suggests they are inappropriate in decentralized, networked contexts. This paper proposes a way for identifying and managing risks and doing the associated governance and compliance in a way that *is* appropriate in such contexts.

## Introduction

Perhaps the best known approach is based on Assets Threats/Hazards and Vulnerabilities (ATV). It starts with making an inventory of the party's assets (things that are valuable to that party), list the threats to such assets (ways in which they lose (part of) their value), and vulnerabilities (weak spots in assets that increase the likelihood of threats being effective). Then, the likelihood of such threats occuring may be assessed, as well as the impact (often: damages) they would have. Combining these two enables a party to assess its risk levels. For the risks that are unacceptable, a treatment plan must be conceived, the execution of which supposedly reduces (or: gets rid of) the risk. This, but also: changing circumstances, change the risks the party runs, which means that it has to repeat all these steps in a continuous mananagement cycle. Mature RM-processes will also include other things, such as communications with the party's stakeholders, regular audits, etc.

Another well known method, predominantly for industry, is [bowtie](https://www.sciencedirect.com/science/article/pii/S0925753516300078). It focuses on events that may occur, a 'fault tree' (i.e. a graph that identifies the relevant causes/threats) and an 'event tree' (i.e. a graph of possible consequences/outcomes). The have the 'barrier' concepts, which represents a measure that aims to prevent threats from materializing, or reduce the effect of possible consequences. As with ATV, implementing/changing measures, as well as changing circumstances, require set of events and graphs to be appropriately managed. This entails deciding about the (un)acceptability of unwanted consequences, and implementing barriers as needed - which change circumstances.

RM approaches such as the ones mentioned above have severe practical limitations. Individuals and many SME's do RM intuitively, they 'know' where the risks are that need to be mitigated. They consider such approaches as an inefficient way of finding out what they already know. In large organizations, we've seen lots of activities being conducted in order to comply with the RM-process requirements, but did not contribute all that much to managing actual risk.

An illustration of this is an incident that took place in January 2012 at the Dutch telco KPN. IT security has long been an IT priority for KPN: its CEOs are member of the '[Cyber Security Raad](https://www.cybersecurityraad.nl/)', a national and independent advisory college of the Dutch government whose mission is to increase cybersecurity throughout the country. Also, its critical services have been certified against ISO 9001 and ISO 27001. Notwithstanding all this, a 17 year old boy [broke into hundreds of servers](https://tweakers.net/nieuws/87454/kpn-hacker-zag-acties-als-een-kwajongensstreek.html), where he could have manipulated KPNs fixed telecom network putting the reachability of the national emergency number 112 (911 in the US) at risk. The question here is why the traditional methods were unable to prevent this from happening.

Another illustration comes from the [OWASP Top 10](https://owasp.org/www-project-top-ten/) list of web application security risks. This list, which exists since 2003 and is regularly updated, shows that the variety of vulnerabilities in applications does not change all that much: injection, broken authentication, cross-site scripting, using components with known vulnerabilities are here to stay. The question here is what is missing in the RM processes of small and large organizations alike that makes many of them deploy systems with such vulnerabilities, in spite of the vast amount of guidance that OWASP provides for preventing them.

One reason for this may be that risks must be owned. That is to say: there must be a person (not: an organization) that actually feels 'pain' (discomfort, anxiety, ...) when that risk is not acceptable. This is a different kind of ownership than what we have seen a lot, which is writing the name of a person next to a risk. The latter is ineffective if that person doesn't feel the associated pain.

Another reason is that the number of risks a person needs to deal with must be manageable. [CRAMM](https://www.enisa.europa.eu/topics/threat-risk-management/risk-management/current-risk/risk-management-inventory/rm-ra-methods/m_cramm.html) (1985-2003) is a RM method + tool that helped organizations do their risk assessments by providing threats to, and vulnerabilities of, various kinds of assets. As the number of technological products exploded, so did their database, resulting in a CRAMM risk assessment becoming unacceptably costly and long. Also, it produced ever more mitigation measures. For %%managers|management%%, it was obvious that many of them were irrelevant and the required budgets would not be available.

A third reason is that risks should be relevant in order to be treated. For example, the risk of leaking a cryptographic key from a crypto chip that is vulnerable to power/timing-attacks is irrelevant e.g. when the chip and its battery are sealed in a physical casing. Also, the risk of crashing your car as a result of an autopilot failure is irrelevant if you never use the autopilot.

The last reason we mention is that people generally prefer activities that help them realize their objectives rather than activities that do not (visibly) contribute. Many governance, RM and compliance (GRC) related activities fall in that second category, except perhaps for people whose job is 'doing GRC'. Having to do such activities is a typical trait of centrally organized GRC.

The alternative for putting effort in preventing failures is focusing on the flip-side of that coin, which is: putting effort in realizing successes. It stimulates people to own the associated risks and manage them (it makes the pain go away). When the risks become unmanageable, the associated pain may indicate you have an objective of staying healthy, which you might mitigate by outsourcing the realization of one or more of your objectives.

To illustrate the difference between these approaches, consider a doctor whose objective is to get her patients in a continuous healthy state and keep them there. When a patient is not in such a state, she won't inventory *everything* that could be wrong with the patient as traditional methods would have her do. Rather, she looks at what is preventing the patient from becoming/remaining healthy, makes a treatment plan, and has it executed.That's much easier. And when she needs to see too many patients, she (literally) feels the associated agony and will try to offload some of the patients to trusted colleagues.

Realizing successes is an inherently decentralized concept, because in the end, being succesful always depends on some kind of recognition of others: if you provide a service or product, your success depends on the value they have for your customers, which they express by paying you money, or providing you with a service or product of their own. Positive motivators stimulate parties to increasingly interact and work together to the benefit of both. In contrast, centralized settings have a tendency to use negative motivators to make people interact and work together.

Different methods have been around for some time now that may be part of decentralized GRC (and in particular: decentralized RM). One such method is the Open Group's [Dependency Modeling standard](https://publications.opengroup.org/c133) (DM - also available on [ResearchGate](https://www.researchgate.net/publication/305884742_Open_Group_Standard_Dependency_Modeling_O-DM)). It specifies a way by which a party can inventory its goals, and compute the probabilities of achieving them by combining the probilities of the goals that they depend on. Statistical operations then identify points (objectives) of failure that need to be addressed.

Another, complementary method is [Networked Risk Management (NRM)](https://repository.tno.nl/islandora/object/uuid:95b1a97a-2d5c-41b1-b5d9-43bcd04d981b). Next to the role of 'objective Owner', NRM adds two others: the Producer is the party that is responsible for realizing the results by which it can be established (e.g. by an auditor, or customers) whether or not an objective is met/realized/fulfilled. A Consumer is a party that uses these results for the purpose of realizing one or more objectives that it owns. An objective Owner states the objective, specifies the (auditable) results, and must be the Producer and/or Consumer thereof. Risks are associated with an objective, and map the objective to a risk level, i.e. a measure that is meaningful to the owner and that indicates the extent to which the objective is not (going to be) met. Pragmatically: the amount of 'pain' (discomfort, anxiety, ...) the objective's Owner experiences as it contemplates the chances of it (not) being realized.

In analogy to 'Self-Sovereign Identity' - a term used to refer to the sovereignty/autonomy of individuals (and organizations) when it comes to identity-related matters, we introduce the phrase 'Self-Sovereign GRC' to refer to the sovereignty/autonomy of individuals (and organizations) when it comes to setting their objectives (governance), managing the associated risks of (not) realizing them (risk management), and doing what is necessary to become and/or remain part of a community of other self-sovereign entitites (compliance).

The purpose of this paper is to help the reader understand what this is all about, so that we can apply the ideas that are deemed useful in the [ToIP Governance Stack Working Group](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group). ideas in the better explain NRM-based risk management, NRMBecause of its focus on NRM is ideally suited for decentralized contexts.

## Mental Model

This chapter describes the mental model for decentralized risk management. The model uses [eSSIF-Lab terminology](https://essif-lab.pages.grnet.gr/framework/docs/essifLab-glossary), in particular that which is related to [Parties, Actors and Actions](https://essif-lab.pages.grnet.gr/framework/docs/terms/pattern-party-actor-action).

### Summary
This mental model captures the foundational concepts and relations that we need for thinking about decentralized risk management. It answers questions such as "What is a risk?", "Who is to address what risks?", "What's in it for me?", "How do the terms 'Governance', 'Risk management' and 'Compliance' relate to one another?", and more.

The model acknowledges the sovereignty (autonomy) that parties have in their
- governance, i.e. as they decide which objectives to pursue, how to organize their realization, how and when to change or update their objectives, etc.
- risk management (RM), i.e. identify the assess the