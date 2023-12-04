---
id: methods
// hide_table_of_contents: true
// displayed_sidebar: terminologyDesignSideBar
date: 20221129
---

import useBaseUrl from '@docusaurus/useBaseUrl'
export const mark = ({text}) => ( <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>{text}</span> );

# Methods

<img
  alt="This page is under construction"
  src={useBaseUrl('images/wip/wip-under-construction.png')}
/>

## Summary

The (high-level) process that we call **Terminology Design** aims to establish and maintain [terminologies](@) for various [contexts](@) that are suitable for, e.g.:
- creating and maintaining e.g.,:
  - a common understanding between a group of people that work together as they pursue specific objectives;
  - a set of (simple) documents that describe the various [terms](@), how they relate to one another (to form [mental models](@)).
- authoring well-formed arguments, nicely readable whitepapers, explanations, reference documentation, that use the [terms](@) in a consistent and coherent way, and that can readily be understood by the intended audiences of such texts.

The key characteristic of a [terminology](@) that is designed for a particular [context](@) is that it is fit for the purpose(s) that are pursued within that [context](@). If, for example, the purpose pursued in a [context](@) is the architecture and design of IT, the [terminology](@) will be much more precise than when it were developed for a [context](@) in which coming the purpose is to come to grips with e.g., societal or ethical issues (which are inherently less precise).

To reap the full benefits of a (well-designed) [terminology](@), a few principles must be adhered to:
1. the respective [definitions](@) of the [terms](@) that are being created and maintained in a particular [terminology](@) are to be created by the means provided by the processes we define. This basically means that the focus lies on the **MEANINGs** (distinctions) that are needed in the [context](@) for which the [terms](@) are defined, rather than on the [terms](@) that represent such meanings.
2. when doing work (e.g. making documents, discussing things, etc.) within a [context](@) for which a [terminology](@) is being maintained, the participants are committed to use the [terms](@) that are contained in that [terminology](@) in the meaning in which they are [defined](@) there (the meaning of other [terms](@) would be 'as usual'). A lack of this commitment is a counterindicator for maintaining a [terminology](@).

The terminology design process is supported by [terminology tools](@) that enable people to document the results of this process, and use them to write other documents e.g. as part of a website, or a pdf file, or other rendered format.

## Triggers and Counterindicators

There are many signals that may serve as a trigger to start this process, such as:

- the determination, by a group of people that pursues one or more [objectives](@), that they are spending (too much) time discussing topics or [terms](@) without reaching a conclusion that is satisfactory for use by every member of the group (which means that such discussions keep popping up, even if a decision has been made that should have closed it).
- the desire that is felt by all(most all) members of a group to develop a [mental model](@) on some topic.
- the felt need for creating and/or maintaining some kind of standard or other reference text.
- the need for creating some kind of framework or other foundational (set of) document(s) that are expected to serve as a basis for others to work from.

There are also various counterindicators, i.e. signals that should prevent the process from being started, such as:

- the participants have an insufficient interest and/or motivation to spend the time and effort to realize the intended result.
- the participants have no intention of consequently using the results in

## Activities

Running the process consists of executing the following activities:[^1]

[^1]: The crucial arguments that come up during the discussions in any of these steps should be logged, so that they can be documented later and as such provide guidance to readers for understanding why certain terms are used, and certain design decisions have been made.

1. Determine the [scope](@) of the [terminology](@) (i.e.: the [context](@) in which the [terms](@) of the [terminology](@) will be used).

2. Determine the distinctions that participants make, and that they find relevant for realizing the [objectives](@) that they pursue within this [scope](@); use the [criteria-elicitation process](@) to ensure that all participants are enabled to make the same distinctions.

3. Establish the set of elicited criteria that relate to one another in a way that is useful/relevant for realizing the [objectives](@), and associate a [term](@) with each of them (thereby creating a [definition](@) for that [term](@)).

4. Use the [terms](@) in texts in the meaning as [defined](@).

5. Whenever a use-case/text emerges that calls for the revision of one or more [terms](@), then:
   1. remove the problematic [terms](@) from the [terminology](@);
   2. re-assess the distinctions as mentioned in steps 2 and 3;
   3. repeat steps i and ii until the problem that caused the revision is resolved;
   4. revise all texts that exist within the [scope](@) so that they will be consistent with the new version of the [terminology](@).

## Issues/Exceptions

## Tips

## Example

An account of how this process was run several times in a project is described in this [real-life example](/docs/terminology-design/methods/real-life-example)