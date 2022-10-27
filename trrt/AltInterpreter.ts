import { Converter } from "./Converter";
import { Interpreter } from "./Interpreter"

export class AltInterpreter implements Interpreter {
      private term_regex = /p/g;

      constructor() {

      }

      interpertAndConvert(converter: Converter, glossary: Map<string, string>, file_name: string, direcoty_path: string): boolean {
            throw new Error("Method not implemented.");
      }


}