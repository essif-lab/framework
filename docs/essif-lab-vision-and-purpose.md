---
id: vision-and-purpose
title: eSSIF-Lab Vision and Purpose
---

It is the eSSIF-Lab vision that Self-Sovereign Identity (SSI) will *empower European citizens (as well as other individuals, of course)* by providing new means to manage privacy, eliminating logins, and making electronic transactions much faster and much safer, both via the Internet and in real, physical life. SSI will *empower European organisations and governments* by providing new means to speed up, secure and automate transactions with citizens, customers, suppliers and partners, resulting in tens of billions of euros savings annually on administrative costs in Europe. SSI will be *a new business ecosystem paradigm* with thousands of new jobs, many new job categories and new business opportunities for existing and new European companies. And last but certainly not least, SSI fosters *inclusiveness* and supports organizations and citizens to exercise their rights and fulfil their duties under the GDPR.

The current situation is that (SSI) solutions that are being created and brought to the market, often have specific applications in mind for which they provide a solution (vertical ‘stovepipes’), many have some kind of centralized governance/control, others have privacy issues, and none that we know of are interoperable with other such solutions.

The situation we would like to see is one in which we have SSI-enabled, interoperable and scalable technologies, that form an infrastructure that every application in any vertical can use in a very easy manner, for the exchange of verified (personal and non-personal) data. In that situation people, businesses and governments think more about the information they need and/or provide as they conduct business transactions. They no longer need to be concerned about the SSI technologies that have empowered them to make this happen.

:::tip **The purpose of the eSSIF-Lab...**
... is to specify, develop and validate technological and non-technological means that support people, businesses and governments to think about, design and operate their (information) processes and (electronically) conduct business transactions with one another.
:::

The context of the eSSIF-Lab vision can be found in articles 8-10 of the [*European Convention on Human Rights (ECHR)*](https://www.echr.coe.int/Pages/home.aspx?p=basictexts/convention), that state the rights of individuals regarding their privacy, and their freedoms to collect, process, store, and express information in a self-sovereign fashion, i.e. in a way that they can decide for themselves. This is without prejudice to Member States’ laws that exist to protect their national security, public safety, the economic well-being of the country, health or morals or the rights and freedoms of others, or to prevent disorder or crime. The eSSIF-Lab vision extends these rights and freedoms - within the limits of the law - to public and private organizations. Thus, we say that individuals as well as public and private organizations (that we collectively refer to as ‘parties’) are self-sovereign<sup>[1]</sup>.

Within (the limitations of) these rights and freedoms, we seek to support (electronic) business transactions, i.e. the (electronic) exchange of goods, services, funds, or data between parties, which we call ‘participants’ to the transaction<sup>[2]</sup>.

An electronic business transaction is a business transaction that requires each participant to have (at least one) electronic agent, i.e. equipment (e.g. an app on a mobile phone, a webserver, a browser, …) that acts on behalf of its owner in the transaction.

## High-Level Example of a Business Transaction

In its simplest form, this may be envisaged as one party (requestor) that requests another party (provider) to provide some product, e.g. a parking permit, by using his web-browser to navigate to the web-server of the provider (e.g. his municipality) where he is prompted to fill in a form to provide the details of his request (such as name, address, plate number, etc.). When the form is submitted, the provider decides whether or not to service the request (provide the parking permit) based on the data in the form, and take actions accordingly.

In order for this to work, the provider must design the form such that when a requestor submits a completed form, it can actually decide whether or not to service the request. This has two parts: first, the provider must specify the argument (i.e. the way of reasoning) that it uses to reach this decision - i.e. provide the parking permit. Doing so implicitly specifies the kinds of data that the form will ask for. Secondly, the provider must decide for each of the data it receives, whether or not it is valid to be used in that argument - the process of deciding this is called ‘validation’. Common criteria that help to make this distinction include whether or not the data is presented in the expected format, whether or not it is true (not so easy), whether it is not outdated, or whether or not it satisfies validation rules (in the example, the municipality may require that the specified license plate belongs to a car owned by the person that requests the permit). Validation is important, because reasoning with invalid data may result in wrong conclusions and cause damage.

Perhaps the most important contribution that the eSSIF-Lab project aims to make, is to create a ubiquitously used infrastructure for designing, filling in, and validating forms (not just web-forms, but also for ‘forms’ - e.g. JSON objects - in API requests). The benefits this will bring are enormous, but outside the scope of this document to list.

The figure below is a high-level visualization of the filling in and validation parts:

![eSSIF-Lab - vision context](https://essif-lab.pages.grnet.gr/framework//images/vision-context.png) *Figure 1. High-level visualization of the filling in and validation of a form.*

The transaction that is envisaged here is the issuing of a parking permit. Participants are a person (requestor) that requests such a permit, and an organization (provider) that can issue such a permit. The requestor has one electronic agent *RA*, i.e. an SSI-aware app on his mobile phone that can access a secure storage that contains ‘credentials’, i.e. data that is digitally signed by some third party, thus attesting to the truth of that data. The provider has two agents: one is an SSI-aware component *PA* that works with the web-server that presents the form, and the other is a person *P* whose task is to validate any data (on behalf of the provider) that is not validated electronically. The form itself contains a means, e.g. a QR-code or a deep-link, that allows *RA* and *PA* to set up a secure communications channel (e.g. SSL, DIDComm) and agree on the specific form that needs to be filled in.

After the *RA* and *PA* have established a communications channel and agree on the form to be filled in, *PA* informs *RA* about the information it needs to fill in the form, and the requirements that this information should satisfy<sup>[3]</sup>. *RA* then checks its data store to see whether or not such data is available, sends such data to *PA*, which subsequently validates it and uses it to fill in (appropriate parts of) the form. Finally, *P* validates the remaining data, which either results in a ‘clean’ form, i.e. a form that contains valid data that can subsequently be used to decide whether or not to provide the parking permit, or a message to the requester informing him about missing and/or invalid data.

When the transaction has been completed, both participants can issue a credential that attests to the results of the transaction. For example, the provider could issue a credential stating that the requestor has obtained a parking permit for a car with a specific plate number (and other attributes). The requestor can store this credential and from that moment on use it in new electronic transactions.

--------

[1] We realize that by doing this we have a different definition of what self-sovereignty entails than many others. We are open to suggestions for a better phrase.

[2] A good mental model for describing and designing transactions and their participants is provided by [*DEMO*](https://en.wikipedia.org/wiki/Design_%26_Engineering_Methodology_for_Organizations).

[3] Since transactions are symmetric, the requestor could also have a form that the provider needs to fill in so as to provide the requestor with the data it needs to commit to that transaction. We have left that out of this description for the sake of simplicity. 
