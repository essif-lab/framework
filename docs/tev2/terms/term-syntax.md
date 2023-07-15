---
# TEv2 Curated Text Header
term: term-syntax
termType: concept
isa:
glossaryTerm:
glossaryText: "the criterion that specifies which texts can serve as a [term](@), which is that the text must match with (PCRE) regex [`[A-Za-z0-9\\s_]+`](https://www.debuggex.com/r/YQppbqxps5jI0t0P)."
synonymOf:
grouptags: syntax
formPhrases: term-syntaxes
# Curation status
status: proposed
created: 2022-08-17
updated: 2022-08-17
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[eSSIF-Lab](https://essif-lab.github.io/framework)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Term Syntax

<!--
            **IF THE PCRE REGEX FOR THE TERM SYNTAX MUST BE CHANGED
                  MAKE SURE YOU ALSO UPDATE THE DEBUGGEX URL**
-->

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary
**Term Syntax** is is the set of rules that defines the combinations of symbols (characters, texts) that are considered to be correctly structured terms (definition adapted from [Wikipedia](https://en.wikipedia.org/wiki/Syntax_(programming_languages))).

### Purpose
The Term Syntax specifications serve to instruct (and help) [authors](@) how to correctly write (the `term` field part of) a [Term Ref](@). Also, it enables developers to create tools, e.g. the [TRRT](@), which need to be able to detect and convert this term-syntax - the exact nature of which would depend on the actual tool.

### Criterion
The Term Syntax used within [TEv2] is the PCRE regex [`[A-Za-z0-9\s_]+`](https://www.debuggex.com/r/YQppbqxps5jI0t0P).