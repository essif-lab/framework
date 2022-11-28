import { Converter } from "./Converter";
import fs = require("fs");


export class HTTPConverter implements Converter {
      convert(glossary: Map<string, string>, properties: Map<string, string>): string {
            throw new Error("Method not implemented.");
      }

}