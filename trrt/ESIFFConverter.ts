import { Converter } from "./Converter";

export class ESSIFConverter implements Converter {
      public constructor() { }
      getType(): string {
            return "ESIFF";
      }

      convert(glossary: Map<string, string>, properties: Map<string, string>): string {
            var esiffOut: string = "";
            if (properties.get("scopetag") == "default") {
                  if (properties.get("vsntag") == "latest") {
                        esiffOut = `<Term popup="todo" reference="${properties.get("term")}">${properties.get("showtext")}</Term>`;
                        console.log("The esiff term is: " + esiffOut)
                  } else {
                        console.log("No access for this version yet");
                        return esiffOut;
                        // TODO go back and get the correct glossary   
                  }
            } else {
                  console.log("No access for this scope yet");
                  return esiffOut;
                  // TODO go back and get the correct glossary
            }
            return esiffOut;
      }

}