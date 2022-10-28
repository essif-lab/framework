import { Converter } from "./Converter";
import fs = require("fs");


export class HTTPConverter implements Converter {
      convert(data: string, glossary: Map<string, string>, properties: Array<Map<string, string>>): string {
            throw new Error("Method not implemented.");
      }

}