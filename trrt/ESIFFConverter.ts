import { Converter } from "./Converter";
import fs = require("fs");


export class ESSIFConverter implements Converter {
      convert(data: string, file_name: string, glossary: Map<string, string>, properties: Map<string, string>): boolean {
            throw new Error("Method not implemented.");
      }

}