import { Converter } from "./Converter";
import fs = require("fs");


export class MarkdownConverter implements Converter {
      public constructor() {

      }

      public convert(glossary: Map<string, string>, properties: Map<string, string>): string {
            // term is a text that identifies a knowledge artifact, and is specified in the curated text that documents that artifact (in a specific version of the terminology of a specific scope). It will be matched against the term fields of MRG entries in the MRG that documents said terminology.

            // If omitted, it is generated as follows (assuming the MRG to be used has already been identified):

                  // - set term:=showtext;
                  // - convert every character in the (regex) range [A-Z] to lower-case;
                  // - convert every sequence of characters [^A-Za-z_-]+ to (a single) - character;
                  // - if the resulting term matches an element in the list of texts in the formphrases field of an MRG entry, then replace term with 
                  //   the contents of the term-field of that same MRG entry.
            
            // trait (optional)
                  // trait identifies a particular kind of descriptive text that is associated with the knowledge artifact. If specified, it must be one of the elements in the list of headingid's as specified in the headingids field of the MRG entry. If omitted, the preceding #-character should also be omitted

            var markdownOut: string = `[${properties.get("showtext")}](${glossary.get(properties.get("term"))})`;
            
            if(properties.get("trait") != "default"){
                 markdownOut = markdownOut + "#" + properties.get("trait")
            }
            
            console.log("The markdown term is: " + markdownOut)
      
            return markdownOut;
      }


}