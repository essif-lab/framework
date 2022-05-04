---
id: onboarding
title: "Onboarding"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: concept
termid: onboarding
formphrases: onboarding, onboard, onboards, onboarded
status: draft
grouptags:
hoverText: "Onboarding (of an Actor, by a Party): a process that is run for this Actor on behalf of the Party, that terminates successfully if and  only if the Party has (a) established the suitability of the Actor for executing certain kinds of Actions on its behalf, (b) obtained assurances that the Actor will in fact do so and (c) provided the circumstances/contexts within which the Actor is enabled to do so."
glossaryText: "A process that is run for a specific (set of) %%actor(s)^actor%% on behalf of a specific %%party^party%%, that terminates successfully if and  only if the %%party^party%% has (a) established the suitability of the %%actor^actor%% for executing certain kinds of %%actions^action%% on its behalf, (b) obtained assurances that the %%actor^actor%% will in fact do so and (c) provided the circumstances/contexts within which the %%actor^actor%% is enabled to do so."
date: 20220323
---

### Short Description

**Onboarding** is a process that is run for a specific (set of) %%actor(s)|actor%% on behalf of a specific %%party|party%%, that terminates successfully if and  only if the %%party|party%% has (a) established the suitability of the %%actor|actor%% for executing certain kinds of %%actions|action%% on its behalf, (b) obtained assurances that the %%actor|actor%% will in fact do so and (c) provided the circumstances/contexts within which the %%actor|actor%% is enabled to do so.

After an %%actor|actor%% has been %%onboarded|onboarding%% successfully by a %%party|party%%, we say that they have set up an %%employee|employee%%-%%employer|employer%% relationship, i.e. we can say that the %%actor|actor%% now `works for` that %%party|party%%, as modeled in the %%party actor action pattern|pattern-party-actor-action%%. This is prerequisite for engaging in an %%agent|agent%%-%%principal|principal%% relationship, that is elaborated on in the %%party actor action pattern|pattern-party-actor-action%% as well.

So, onboarding consists of three parts that the %%party|party%% typically executes consecutively:

1. The %%party|party%% **establishes the suitability of the %%actor|actor%%** for executing %%actions|action%% of certain types on its behalf, so that the %%actor|actor%%, once it is onboarded, is *capable* of working as the %%party|party%% expects it to. Typically, the %%party|party%% will be looking for the %%actor's|actor%% capabilities, capacities, characteristics and the like. To establish these, the %%party|party%% may decide to rely on e.g., diploma's, certificates, track-records and the like.

2. The %%party|party%% **ensures that rights and duties of the %%actor|actor%%** (towards the %%party|party%% and/or others, as appropriate) are properly specified, and can be enforced if necessary. Typically, this will take the form of a %%contract|employment-contract%% between the %%party|party%% itself and another %%party|party%% that has sufficient control over the %%actor|actor%%, and where the %%actor|actor%% is the subject of the contract. This ensures that the %%actor|actor%%, once it is onboarded, can also *be relied upon* to work as the %%party|party%% expects it to.

3. The %%party|party%% has started the process of continually **providing all circumstances and/or satisfying all conditions** that are needed for the %%actor|actor%% to execute the tasks (%%actions|action%%) it needs to do. This includes e.g. providing the %%actor|actor%% with roles/permissions, access to the %%policies|policy%% that guide the execution of such %%actions|action%%, resources to work with, etc. We envisage the actual (continuous) running of this process not to be part of onboarding.

We use the relation `works for` to model the fact that a %%party|party%% has successfully completed these three steps. Equivalently, we can say that an %%actor|actor%% and a %%party|party%% are in an %%employee|employee%%-%%employer|employer%% relationship. Thus, every %%agent|agent%%-%%principal|principal%% pair in the relation `is acting on behalf of` MUST also appear as an %%employee|employee%%-%%employer|employer%% pair in the relation `works for`.

The %%Parties, Actors and Actions pattern|pattern-party-actor-action%% describes how this concept fits in with related concepts.

### Examples

An %%organization|organization%% that doesn't reject a job application of an %%individual|human-being%% out of hand, effectively starts the  onboarding process for that %%person|human-being%%. Step 1 typically consists of examining that %%person's|human-being%% CV, its diploma's, certificates etc., doing an interview and perhaps a job assessment. Step 2 comprises of the contract negotiations that, if successful, result in a signed job contract. Then, after the %%organization|organization%% has instructed its various departments to provide the person with e.g. a desk, equipment (phone, computer, ...), badge, etc. the person is onboarded.

An %%individual|human-being%% that is an %%employee|employee%% for an employment agency has an %%employment contract|employment-contract%% with that agency. Another %%organization|organization%% may need temporary employees, and requests the employment agency to produce candidates. When the employment agency complies, the %%organization|organization%% will start to onboard all of them, sign a contract with the employment agency for the candidates (%%actors|actor%%) of its choice, and making sure they are supplied with whatever they need to execute the tasks they are hired for.

Similarly a bank will onboard a customer by doing a Know-Your-Customer (KYC) check (step 1), making it sign a contract, and supplying it with a bank-account, and - depending on the contract - a debit/credit card, banking app, etc.

Note that the banking app, once installed on the customer's mobile phone, is also an %%actor|actor%% that is expected to work for the bank, and hence must be onboarded. This consists the app contacting the banks business service that runs the onboarding process. This process will then electronically establish that the app is what the bank expects of it (step 1), "sign a contract" (step 2) which is basically the registration of some information which would include the customer that is expected to operate the app, and then provide the app with what it further needs to operate within the (electronic) context of the bank.

Your typical SSI wallet app that is deployed on a mobile phone is said to work for the %%person|human-being%% that operates the wallet app (which is different from the banking app in the previous paragraph). While this may be different for the various wallet apps, we expect that the %%person|human-being%% would first go and shop around to see which wallet app has the features it likes (step 1). The contract (step 2) is implicit: the rights and duties are defined by the capabilities of the wallet app. When the user installs the app on its mobile phone (step 3) onboarding is complete. The process in which the user provides the app with rights (e.g. to the phone's storage, NFC capabilities, etc.), or retracts such rights, is outside the scope of the onboarding process.

### Purpose
The purpose of the onboarding process is to ensure/establish that an %%actor|actor%% that does not work for a %%party|party%% in an %%employee|employee%%-%%employer|employer%% relationship (see the %%parties, actors and actions pattern|pattern-party-actor-action%%), but for which there is a request to start working for that %%party|party%%:
1. is capable of executing such %%actions|action%% ONLY according to the applicable %%policies|policy%% of that %%party|party%%;
2. is provided with the means to execute such actions, and
3. is stimulated (if not: forced) to not execute any other %%actions|action%%;
