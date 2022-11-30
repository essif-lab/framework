import { Converter } from "./Converter";
import { Interpreter } from "./Interpreter"

export class AltInterpreter implements Interpreter {
      private termRegexGlobal = /(?<=[^`\\])\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsntag>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?:#(?P<trait>[a-z0-9_-]+?))?\))?/g;

      private termRegexLocal = /(?<=[^`\\])\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsntag>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?:#(?P<trait>[a-z0-9_-]+?))?\))?/;

      constructor() {

      }

      interpert(match: RegExpMatchArray): Map<string, string> {
            var termProperties: Map<string, string> = new Map();
            return termProperties;
      }

      getGlobalTermRegex(): RegExp {
            return this.termRegexGlobal;
      }

      getLocalTermRegex(): RegExp {
            return this.termRegexLocal;
      }


}