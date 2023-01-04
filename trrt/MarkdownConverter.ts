import { Logger } from "tslog";
import { Converter } from "./Converter";

export class MarkdownConverter implements Converter {
      private log = new Logger();
      public constructor() { }

      getType(): string {
            return "Markdown";
      }

      public convert(glossary: Map<string, string>, properties: Map<string, string>): string {
            // trait (optional)
            // trait identifies a particular kind of descriptive text that is associated with the knowledge artifact. If specified, it must be one of the elements in the list of headingid's as specified in the headingids field of the MRG entry. If omitted, the preceding #-character should also be omitted
            var markdownOut: string = "";
            if (properties.get("scopetag") == "default") {
                  if (properties.get("vsntag") == "latest") {
                        var term: string = glossary.get(properties.get("term")!)!;
                        if (properties.get("trait") != "default") {
                              markdownOut = `[${properties.get("showtext")}](${term}#${properties.get("trait")})`;
                        } else {
                              markdownOut = `[${properties.get("showtext")}](${term})`;
                        }
                        this.log.info("The converted markdown term is: " + markdownOut)
                  } else {
                        this.log.error("No access for this version yet");
                        return markdownOut;
                        // TODO go back and get the correct glossary   
                  }

            } else {
                  this.log.error("No access for this scope yet");
                  return markdownOut;
                  // TODO go back and get the correct glossary
            }
            return markdownOut;
      }


}