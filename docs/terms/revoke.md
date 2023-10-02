---
id: revoke
title: "Revoke/Revocation"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: concept
termid: revoke
term: revoke
formphrases: revo(cat(or|ion)|ke[sd]?|king)
hoverText: "revoke/revocation of a credential: the act, by or on behalf of the party that has issued the Credential, of no longer vouching for the correctness or any other qualification of (arbitrary parts of) the credential."
glossaryText: "the act, by or on behalf of the %%party^party%% that has issued the %%credential^credential%%, of no longer vouching for the correctness or any other qualification of (arbitrary parts of) that %%credential^credential%%."
date: 20211006
---

### Short Description
**Revocation** (of a %%credential|credential%%) is the act, by or on behalf of the %%party|party%% that has issued the %%credential|credential%%, of no longer vouching for the correctness or any other qualification of (arbitrary parts of) that %%credential|credential%%.

### Purpose
The purpose of revocation is to enable %%parties|party%% that intend to use (data from) a %%credential|credential%%, to learn whether or not that data is still considered to be correct (and truthful) according to the %%party|party%% that has issued it.

### Notes
There is a wealth of revocation mechanisms that can be used for this, each with its pro's and con's regarding implementation difficulty, privacy, and other characteristics. Some well-known mechanisms are
- [CRLs](https://en.wikipedia.org/wiki/Certificate_revocation_list) (now used for %%credentials|credential%% rather than (PKI) certificates)
- [OCSP](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol) (now used for %%credentials|credential%% rather than (PKI) certificates)
- [accumulator based revocation mechanisms](https://www.google.com/search?q=accumulator+based+revocation)
- [forward-looking consistency revocation mechaism](http://resolver.tudelft.nl/uuid:871e17aa-a023-461f-88b1-80d83c21de92)
and likely many others
