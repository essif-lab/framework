---
id: essifLab-fcomp-<fcompid>
title: "<Name of the Functional Component> (Acronym)>"
scopetag: essifLab
termtype: fcomp
termid: <fcompid>
status: draft
grouptags:
hoverText: "<short description that pops up when user hovers over a reference to this component."
indexText: "<short description that is used in the FComp-Index; you can use double-percent constructs here"
date: 20210601
---
<-- Do the following:
  - replace all `<fcompid>` occurrances with a string that is all lowercase. The string will be used for reference purposes, so it shouldn't be very long. The string may include `-` and it must not include whitespace.
  - replace `<Name of the Functional Component> (Acronym)>` with a string that states the name of your functional component, and the acronym that we can use to refer to it.
  - think of a good 'hoverText' and 'indexText'. In the 'indexText', you can use double-percent-constructs to help readers understand your texts better; such constructs produce pop-over texts, and links to the referred-to texts.
  - remove this paragraph of text (or make it a 'normal' comment, which it currently is so that you see it)

NOTE: This file contains further explanations in comments. You may need to edit the file to see these explanations.
-->

## Summary
<!-- provide a text that summarizes the *functionality* of the component. This is a sort of TL;DR-section. -->

## Context Diagram
<!-- insert a figure here that shows how your component relates to the other functional components, so that readers get an idea of where it belongs. You may want to add a few lines explaining the purpose of these relations. -->

## Functional Description
<!-- describe the functionality of the component in all details that a reader may want to be informed about, e.g. for the purposes of
  - deeply understanding the component's function;
  - designing a technical component that implements the functionality;
  - designing a technical component that relates to this component (learning what this component can do for him/her)
-->

## Functional API specification
<!-- identify the various APIs, and provide a subsection `API xxx` for each of them -->

### API 'xxx'
<!-- specify the following items for the API:
  - the purpose(s) (what objective(s) does (using) the API realize). We need this to establish whether or not the API is fit for such purpose(s).
  - a high-level protocol flow that allows people to understand its working at a functional level.
  - a reference to the Open API specification of the API
-->