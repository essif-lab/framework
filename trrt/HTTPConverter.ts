import { Logger } from "tslog";
import { Converter } from "./Converter";

export class HTTPConverter implements Converter {
      private log = new Logger();
      public constructor() { }
      getType(): string {
            return "HTTP";
      }

      convert(glossary: Map<string, string>, properties: Map<string, string>): string {
            var htmlOut: string = "";
            if (properties.get("scopetag") == "default") {
                  if (properties.get("vsntag") == "latest") {
                        if (properties.get("trait") != "default") {
                              htmlOut = `<a href="${glossary.get(properties.get("term"))}#${properties.get("trait")}"><span style="font-weight:bold>${properties.get("showtext")}</span></a>`;
                        } else {
                              htmlOut = `<a href="${glossary.get(properties.get("term"))}"><span style="font-weight:bold>${properties.get("showtext")}</span></a>`;
                        }
                        this.log.info("The html term is: " + htmlOut);
                  } else {
                        this.log.error("No access for this version yet");
                        return htmlOut;
                        // TODO go back and get the correct glossary   
                  }

            } else {
                  this.log.error("No access for this scope yet");
                  return htmlOut;
                  // TODO go back and get the correct glossary
            }
            return htmlOut;
      }
}