import { Converter } from "./Converter";
import { Interpreter } from "./Interpreter"

export class AltInterpreter implements Interpreter {
      private term_regex = /p/g;

      constructor() {

      }
      
      interpert(data: string): Array<Map<string, string>> {
            throw new Error("Method not implemented.");
      }


}