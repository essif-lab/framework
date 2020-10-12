---
id: verifier
title: "Verifier"
scopeid: essifLab
type: concept
typeid: verifier
stage: draft
hoverText: "Verifier: a functional component that is capable of "
---

## Short Description
A **Verifier** is is an (architectural) function (a functional component in the [eSSIF-Lab functional architecture](../functional-architecture)) that 

The **verifier** functionality is to support the TVE as it tries to acquire credentials from some other Party for the purpose of negotiating a business transaction. It does so by creating Presentation Requests (or Presentation Definition as it is called in the [draft DIF specfication for Presentation Exchange](https://identity.foundation/presentation-exchange)) that ask for such credentials, sending them to a holder component of another Party, receiving a response to such a request (which we call a ‘Presentation’), verifying the Presentation, i.e. checking the signature and other proofs of the veracity of both the construction of the Presentation as well as its contents, thus providing the TVE with verified data.


## Purpose
The purpose of the Verifier function is.

## Criteria
A **Verifier** is a component in the [eSSIF-Lab functional architecture](../functional-architecture) whose function is to ... (tbd).

## Functionality

The purpose of the Verifier component is to support the Transaction (Validation) Engine by providing it with a single, simple API that it can use to request and obtain data that it needs to produce a clean transaction form, as well as the results of checking verification proofs (this is also why it is called the ‘verifier’ component).

Typically, the TVE would ask the Verifier to provide a credential that it can use to fill in a (coherent set of) field(s) in the transaction form. It is realistic to think that credentials from different issuers - trusted by the Verifier’s Owner - can be used for this purpose. However, it is also realistic that such credentials will not use the same credential definition - they might well use different schemes to provide such data. Therefore, the TVE should specify a list of pairs (credential-type, issuer) instances of which could all be used to provide the data it needs - which it can obtain from the TVE policy.

Then, the Verifier needs to know the address and protocol that it can use to reach a Holder component owned by the Party that its Owner is trying to negotiate the transaction with. The TVE specifies this as part of the request - and it can do so because it has received the original request, and does all communications channel handling.

Verifiers are not expected to handle every kind of credential (e.g. VC’s, ABC’s, etc.) that exists, but rather a specific subset. For (at least one of) the credential types, the Verifier can construct a so-called presentation request, i.e. a message that is specific for the credential type and/or associated protocol, which it can then send to the Holder’s address.

This request message should contain at least

-   the transaction-id, so that when it is copied into the associated response message, the latter can be associated to the transaction it belongs to. Also, it should contain the
-   the (credential type, issuer) pairs that may satisfy the request, and to each of these additional data, e.g. the URI of the endpoint where the issuer issues such credentials, the maximum age of the credential, etc.
-   meta-data that may be useful for the holder (or its Owner), e.g. texts stating the purpose(s) for which the data will be used ([*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) Art. 5.1.b), or requesting consent ([*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) Art. 7.2) “in an intelligible and easily accessible form, using clear and plain language”.
-   a signature of the Verifiers Owner, for the purpose of showing compliance with the [*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) (e.g. Art 28.3.h), and enabling the Holder’s Owner to obtain proof that the Verifiers Owner has violated the [*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN)’s minimization principle asked for data for a particular purpose, which can be used in an argument in disputes about data minimization ([*GDPR*](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN) Art. 5.1.c).

The request message must be designed in such a way that it is extendable as new features will be called for in the future.

In order to make the Verifier component work, a Verifier Policy/Preferences object is created by, or on behalf of the Owner, which specifies at least: \[to be elaborated\]

A response to this request (called a Presentation) will be obtained from a Holder component of the Peer Party. This response will contain a reference to the request, allowing the Verifier to combine them. The Verifier will then check that the data in the response is a credential that it has asked for (correct type/issuer), verify the proofs that are provided (predominantly the digital signature), and do some additional checks (e.g. whether or not the credential has expired, is revoked, and such).

Then, the verifier will send a message to the TVE, containing the transaction-id, the data it has received, and the results of the various checks.