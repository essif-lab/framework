import { Converter } from "./Converter";
import fs = require("fs");


export class MarkdownConverter implements Converter {
      public constructor() {

      }

      public convert(data: string, glossary: Map<string, string>, properties: Array<Map<string, string>>): string {
            // TODO 
            // var markdown_out: string = `[${showtext}](${term_path}/${id}/${trait}/${scopetag}/${vsntag})`;

            // data = data.replace(term_regex, markdown_out);

            return data;
      }


}