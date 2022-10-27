import { Converter } from "./Converter";
import fs = require("fs");


export class MarkdownConverter implements Converter {
      public constructor() {

      }

      public convert(data: string, file: string, glossary: Map<string, string>, properties: Map<string, string>): boolean {
            // TODO 
            // var markdown_out: string = `[${showtext}](${term_path}/${id}/${trait}/${scopetag}/${vsntag})`;

            // data = data.replace(term_regex, markdown_out);

            // fs.writeFile((output + file), data, (err) => {
            //       if (err) {
            //             console.log(" \t " + err);
            //       } else {
            //             console.log("Writing " + file);
            //       }
            // });
            return true;
      }


}