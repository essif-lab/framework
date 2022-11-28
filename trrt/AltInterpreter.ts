import { Converter } from "./Converter";
import { Interpreter } from "./Interpreter"

export class AltInterpreter implements Interpreter {
      private term_regex = /p/g;

      constructor() {

      }
      
      interpert(match: RegExpMatchArray): Map<string, string> {
            var termProperties: Map<string, string> = new Map();
            return termProperties;
      }

      getTermRegex(): RegExp {
            return this.term_regex;
      }


}