---
id: tag
title: "Tag"
displayed_sidebar: essifLabSideBar
scopetag: essifLabTerminology
type: concept
termid: tag
formphrases: tag{ss}
status: draft
grouptags:
hoverText: "Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."
glossaryText: "an alphanumeric string that is used to identify %%scopes^scope%% (so called 'scopetags'), group %%terms^term%% (so called 'grouptags'), or identify a specific version of a %%terminology^terminology%% (so called 'versiontags') from within a specific %%scope^scope%%."
date: 20210601
---

### Short Description
A **Tag** is an alphanumeric string that is used to identify %%scopes^scope%% (so called 'scopetags'), group %%terms|term%% (so called 'grouptags'), or identify a specific version of a %%terminology|terminology%% (so called 'versiontags') from within a specific %%scope|scope%%.

Scopetags %%identify|identify%% a %%scope|scope%% (from within a given %%scope|scope%%), and hence can be used (within that given %%scope|scope%%) to disambiguate %%terms|term%%. For example, `#essif-lab:term` is an %%identifier|identifier%% for the %%concept|concept%% that within the %%scope|scope%% %%identified|identify%% by the scopetag `essif-lab` is referred to by the %%term|term%% 'term'. Scopetags typically satisfy the regex `#[a-z0-9_-]+` and is often preceded by the `#` character to designate that it is a tag.

Grouptags may be used within a %%scope|scope%% to tag various sorts or [knowledge artifacts such as %%terms|term%%, %%concepts|concept%% and the like. One can then say that this tag represents the group of artifacts that are associated with that tag. This may be used for different purposes. One example is to tag every term that is part of a %%pattern|pattern%% with a pattern-specific tag. Grouptags typically satisfy the regex `#[a-z0-9_-]+` and is often preceded by the `#` character to designate that it is a tag.

Versiontags are used to identify a specific version of the %%terminology|terminology%% of the %%scope|scope%% within which the versiontag lives. It may have various forms, and would typically be chosen such that it comes in handy with the tools that the %%terms community|terms-community%% has decided to use to curate that %%scope|scope%%.

### Criteria
is an alphanumeric string that is used to identify %%scopes^scope%% and/or group %%terms|term%%, and that satisfies the regex `#[a-z0-9_-]+`.

### Examples
Examples of scopetags are `essif-lab`, `essiflab`, `toip`, or `ctwg`
